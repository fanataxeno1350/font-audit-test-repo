### Audit Summary (computed from fonts present in this fixture)

This summary counts only font files located inside the test fixture under the `tc-*` directories (i.e. the sample fonts you provided).

```
# Font Compliance Audit
Repository: ===
Branch: ===
Commit SHA: ===

Free Fonts: 15

Paid Fonts: 26

Review Needed: 6

Audit Findings (47 Unique Font Files Found)
```

## Expected Audit Results

When the audit tool runs against this repository on the `main` branch, the
output must match this table exactly. Any deviation is a bug.

| Test Case | Font(s) | Expected Verdict | Primary layer(s) |
|---|---|---|---|
| TC-01 | Proxima Nova, Aktiv Grotesk (Typekit CDN) | PAID | L1 |
| TC-01 | Gotham (Cloud.typography) | PAID | L1 |
| TC-02 | Inter, Source Sans 3, Roboto | FREE | L1 + L2 |
| TC-03 | Inter, Roboto, Raleway | FREE | Pattern D |
| TC-04 | Gotham (trial file) | PAID | L3 + L4 + L5 |
| TC-05 | Inter (self-hosted OFL) | FREE | L2 + L3 + L4 |
| TC-06 | CustomSans (stripped) | NOT SURE | None |
| TC-07 | Proxima Nova, Gotham, GT Walsheim | PAID | L5 |
| TC-07 | Fira Code | FREE | L2 |
| TC-08 | Source Sans 3 (self-hosted) | FREE | L2 + L3 + L4 |
| TC-09 | Gotham (faked OFL) | NOT SURE | L3 vs L5 conflict |
| TC-10 | ObscureFont (fsType only) | NOT SURE | L4 alone (+20) |
| TC-11 | PersonalUseFont | NOT SURE | Ambiguous metadata |
| TC-12 | Museo | NOT SURE | Dual-version ambiguity |
| TC-13 | Proxima Nova (CSS var) | PAID | L5 |
| TC-13 | Inter, Fira Code (CSS var) | FREE | L2 |
| TC-14 | Gotham, Proxima Nova (JS theme) | PAID | L5 |
| TC-14 | Inter, Source Sans 3 (JS theme) | FREE | L2 |
| TC-15 | Proxima Nova, Gotham (Tailwind) | PAID | L5 |
| TC-15 | Fira Code, Inter (Tailwind) | FREE | L2 |
| TC-16 | Aktiv Grotesk (Vue SFC) | PAID | L1 (Typekit) |
| TC-17 | GT Walsheim (Svelte) | PAID | L5 |
| TC-18 | Proxima Nova (CSS-in-JS) | PAID | L5 |
| TC-18 | Inter (Google Fonts in CSS-in-JS) | FREE | L1 + L2 |
| TC-19 | Gotham, Proxima Nova (inline style) | PAID | L5 |
| TC-19 | Inter (inline style) | FREE | L2 |
| TC-20 | Proxima Nova, Gotham (minified) | PAID | L1 + L5 |
| TC-20 | Inter (minified) | FREE | L1 + L2 |
| TC-21 | Proxima Nova, Gotham, Helvetica Neue | PAID | L5 |
| TC-21 | Inter, Fira Code, Source Code Pro | FREE | L2 |
| TC-22 | Gotham (multi-file) | PAID (1 finding, 4 files) | L1 + L5 |
| TC-23 | Gotham (orphan file) | PAID | L3 + L5 |
| TC-24 | Marketing pkg: Typekit font | PAID | L1 |
| TC-24 | Design system: Proxima Nova | PAID | L5 |
| TC-24 | Dashboard: Inter | FREE | Pattern D |
| TC-27 | Aktiv Grotesk (deep SCSS) | PAID | L1 (Typekit in partial) |
| TC-28 | Gotham Narrow Bold → gotham | PAID | L5 (prefix match) |
| TC-28 | Proxima Nova Light Italic → proxima nova | PAID | L5 (exact match) |
| TC-28 | GT Walsheim Pro → gt walsheim | PAID | L5 |
| TC-28 | Helvetica Neue LT Std → helvetica neue | PAID | L5 |
| TC-28 | Source Code Pro Regular | FREE | L2 |
| TC-29 | XantheraDisplay | NOT SURE | None |
| TC-30 | Inter (email, Google CDN) | FREE | L1 + L2 |
| TC-30 | Gotham, Proxima Nova (email) | PAID | L5 |

---

This table should be used by the test runner as the ground truth when
validating the audit output for the `font-audit-test-repo` fixture.

Found font files (fixture-local):

- `tc-04-paid-selfhosted-metadata/fonts/gotham-trial.woff2`
- `tc-05-free-selfhosted-metadata/fonts/inter-regular.woff2`
- `tc-05-free-selfhosted-metadata/fonts/inter-700.woff2`
- `tc-06-stripped-metadata/fonts/unknown-stripped.woff2`
- `tc-08-free-selfhosted-db-match/fonts/source-sans-3-regular.woff2`
- `tc-08-free-selfhosted-db-match/fonts/source-sans-3-700.woff2`
- `tc-09-faked-ofl-metadata/fonts/gotham-faked.woff2`
- `tc-10-fstype-only/fonts/restricted-unknown.woff2`
- `tc-11-personal-use-only/fonts/dafont-personal.woff2`
- `tc-12-mixed-signals/fonts/conflict-font.woff2`
- `tc-16-vue-sfc/fonts/gt-walsheim.woff2`
- `tc-23-unreferenced-font-file/fonts/orphan-font.woff2`
- `tc-27-scss-chain/fonts/aktiv-grotesk.woff2`
- `tc-29-completely-unknown/fonts/mystery-font.woff2`

Notes:
- Counts are based on files present under the fixture's `tc-*` folders; `node_modules` and external CDNs are not counted here.
- Classification (free/paid/review) is inferred from the test case intent (folder names and README notes). Review items include fonts with ambiguous or modified metadata (stripped, faked, fsType restrictions, personal-use strings, or name conflicts).


