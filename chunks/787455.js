n.d(t, { A: () => o });
var r = n(627968);
n(64700);
var i = n(580630),
    a = n(735164),
    s = n(985018);
function o(e) {
    let { invoice: t } = e;
    return t.taxInclusive || t.tax <= 0
        ? null
        : (0, r.jsx)(a.oR, {
              label: s.intl.string(s.t.jiRvC7),
              value: (0, i.$g)(t.tax, t.currency),
          });
}
