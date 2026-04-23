"use strict";
n.d(t, { A: () => o });
var r = n(627968);
n(64700);
var i = n(580630),
    s = n(735164),
    a = n(985018);
function o(e) {
    let { invoice: t } = e;
    return t.taxInclusive || t.tax <= 0
        ? null
        : (0, r.jsx)(s.oR, { label: a.intl.string(a.t.jiRvC7), value: (0, i.$g)(t.tax, t.currency) });
}
