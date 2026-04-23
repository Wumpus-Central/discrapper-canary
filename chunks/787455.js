n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var r = n(580630),
    a = n(735164),
    s = n(985018);
function _(e) {
    let { invoice: t } = e;
    return t.taxInclusive || t.tax <= 0
        ? null
        : (0, i.jsx)(a.oR, { label: s.intl.string(s.t.jiRvC7), value: (0, r.$g)(t.tax, t.currency) });
}
