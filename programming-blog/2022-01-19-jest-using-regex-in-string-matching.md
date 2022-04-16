# Jest: String Matching (Use RegEx)

While trying to use `result.getByText()` to find a component, I found that it was not working. My test case was a regression test to make sure that a component could not say "1 providers." The component looked like:

```tsx
 <Typography
  variant="caption"
  color="textSecondary"
  data-testid="approved-by-provider-count"
>
  {t('Approved by')} {abbrNum(supporters.length, 1)}{' '}
  {supporters.length === 1 ? t('provider') : t('providers')}
</Typography>
```

and the snapshot was:

```html
<span
  class="MuiTypography-root MuiTypography-caption MuiTypography-colorTextSecondary"
  data-testid="approved-by-provider-count">
    Approved by

    1

    provider
</span>  
```

I couldn't figure out the newlines and spaces in my expect statement. I tried to use a regex to match the string, and it worked correctly! `/s` matches any whitespace character, including newlines.

```typescript
const expected = /Approved by\s*1\s*provider/;
const expected1 = /Approved by\s*1\s*providers/;
expect(result.queryByText(expected1)).not.toBeInTheDocument();
expect(result.getByText(expected)).toBeInTheDocument();
```

