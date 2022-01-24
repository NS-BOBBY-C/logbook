# Jest: Accurate Snapshots When Loading from UseEffect

I had a useEffect which fetched data, and I noticed that the snapshot showed the loading spinner when the data was being fetched. I was able to fix this by adding `flushPromisesAndTimers()` before `waitFor()` a testID detection. The component looked something like this:

```tsx
export default function Component(props: Props) {
  const [error, setError] = useState<null | Error>(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const setup = async () => {
      setLoading(true);
      try {
        const newData = await fetch('path/to/data');
        setData(newData);
      } catch (newError) {
        setError(newError as Error);
        handleError(newError as Error);
      } finally {
        setLoading(false);
      }
    };

    setup();
  }, []);

  if (loading || !data) {
    return (
      <View style={[styles.container, styles.loading]}>
        <Loading />
      </View>
    );
  }

  return (
    <View style={styles.container} testID="ComponentTestID">
      <Text>{data}</Text>
    </View>
  );
}

```

and the test looked like this:

```typescript
test('should render correctly', async () => {
  const tree = create(
    <Component />
  );

  await flushPromisesAndTimers();

  await waitFor(() => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
```

My flush promises and timers function is from [this issue](https://github.com/facebookexperimental/Recoil/pull/1463) and listed on the [recoil docs](https://recoiljs.org/docs/guides/testing/#testing-recoil-state-with-asyncronous-queries-inside-of-a-react-component) and looks like this:

```typesript
/**
 * flushes promises and timers
 *
 * @export
 * @return {*}
 */
export function flushPromisesAndTimers() {
  return act(
    () =>
      new Promise((resolve) => {
        setTimeout(resolve, 500);
        jest.runAllTimers();
      })
  );
}
```

