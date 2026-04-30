"use strict";
n.d(t, { E: () => d, K: () => c });
var i = n(627968);
n(64700);
var r = n(139033),
    s = n(192308),
    a = n(975571),
    o = n(652215),
    l = n(375708),
    u = n(221314);
function c(e) {
    let { kind: t } = e;
    (0, s.openModalLazy)(async () => {
        let { default: e } = await n.e("11546").then(n.bind(n, 763969));
        return (n) => (0, i.jsx)(e, { ...n, kind: t });
    });
}
function d() {
    (0, r.A)({
        title: l.intl.string(u.default.odgSTk),
        subtitle: l.intl.format(u.default.EZfHRq, { helpURL: a.A.getArticleURL(o.MVz.NSFW_AGE_GATING) }),
    });
}
