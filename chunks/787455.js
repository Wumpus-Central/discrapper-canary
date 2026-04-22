n.d(t, { A: () => s });
var a = n(627968);
n(64700);
var r = n(580630),
    l = n(735164),
    i = n(985018);
function s(e) {
    let { invoice: t } = e;
    return t.taxInclusive || t.tax <= 0
        ? null
        : (0, a.jsx)(l.oR, { label: i.intl.string(i.t.jiRvC7), value: (0, r.$g)(t.tax, t.currency) });
}
