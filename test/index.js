var testRule = require('stylelint-test-rule-tape');
var selectorBemPattern = require('..');

// Just a couple of quick tests to ensure postcss-bem-linter
// is getting the hard work done

// TODO: keyframes
// TODO: font-face

testRule(selectorBemPattern.rule, {
  ruleName: selectorBemPattern.ruleName,
  config: { appName: 'seismic-pnp' },
  skipBasicChecks: true,

  accept: [
    { code: '/** @define Foo */ .seismic-pnp .Foo {}' },
    { code: '/** @define Foo */ .seismic-pnp .Foo-bar {}' },
    { code: '/** @define Foo */ .seismic-pnp { }' },
    // { code: '/** @define Foo */ @mixin a() { @at-root { @keyframes #{$target} {} } }' }
  ],

  reject: [
    {
      code: '/** @define Foo */ .false {}',
      message: 'Selector ".false" is out of control, please wrap within .seismic-pnp (' + selectorBemPattern.ruleName + ')',
      line: 1,
      column: 20,
    },
    {
      code: '/** @define Foo */ .Foo_bar {}',
      message: 'Selector ".Foo_bar" is out of control, please wrap within .seismic-pnp (' + selectorBemPattern.ruleName + ')',
      line: 1,
      column: 20,
    },
    {
      code: '/** @define Foo */ @keyframes no-prefix { 0% { } }',
      message: 'Keyframes name "no-prefix" is out of control, please prefix with seismic-pnp- (' + selectorBemPattern.ruleName + ')',
      line: 1,
      column: 20,
    },
    {
      code: '/** @define Foo */ @font-face { font-family: testFont; }',
      message: 'Custom font-family "testFont" is out of control, please prefix with seismic-pnp- (' + selectorBemPattern.ruleName + ')',
      line: 1,
      column: 20,
    },
  ],
});