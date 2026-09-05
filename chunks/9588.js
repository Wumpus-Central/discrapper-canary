n.r(t), n.d(t, { showInaccessibleLinkModal: () => c, showInaccessibleReportPostModal: () => u });
var i = n(477900);
n(582128);
var r = n(139033),
    a = n(192308),
    s = n(975571),
    l = n(652215),
    o = n(375708),
    d = n(256416);
function c(e) {
    let { kind: t } = e;
    (0, a.openModalLazy)(async () => {
        let { default: e } = await n.e("511546").then(n.bind(n, 763969));
        return (n) => (0, i.jsx)(e, { ...n, kind: t });
    });
}
function u() {
    (0, r.A)({
        title: o.intl.string(d.default.odgSTk),
        subtitle: o.intl.format(d.default.EZfHRq, { helpURL: s.A.getArticleURL(l.MVz.NSFW_AGE_GATING) }),
    });
}
