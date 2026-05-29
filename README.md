# Font Audit Test Repository

This repository is a synthetic test fixture for the font compliance audit
tool. It contains 30 test cases (TC-01 → TC-30) covering detection scenarios
for paid and free fonts, metadata signals, CDN imports, and edge cases.

See EXPECTED_RESULTS.md for the ground-truth expected output used by tests.

Fonts notice:
This repository does not include original paid or trial font binaries. Where a
paid font is required for a test case, a free or alternate font with the same
family name is used as a substitute. These substitute files are included only
to exercise the audit engine; they do not carry the original fonts' licenses
or commercial restrictions and must not be treated as replacements for
properly licensed fonts in production.
