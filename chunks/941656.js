n.d(t, { default: () => c });
var i = n(477900);
n(582128);
var a = n(189213),
    l = n(28863),
    r = n(975571);
let d = (0, n(945810).mj)({
    kind: "user",
    name: "2026-09-manual-review-inconclusive-copy",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var o = n(40449),
    s = n(78637),
    u = n(375708);
function c(e) {
    let { transitionState: t, onClose: n, teenAgeRange: c } = e,
        f = d.useConfig({ location: "manual_review_decided_teen_modal" }).enabled;
    function g(e, t) {
        return (0, i.jsx)(l.Anchor, { href: r.A.getArticleURL(u.intl.string(s.default.agiNYw)), children: e }, t);
    }
    return (0, i.jsx)(a.a, {
        transitionState: t,
        onClose: n,
        title: u.intl.string(s.default.AA3xYb),
        subtitle: f
            ? u.intl.format(s.default.UIbYzl, { contentAndSettingsHook: g })
            : u.intl.format(s.default["2+f8w1"], { teenAgeRange: c ?? o.CH, contentAndSettingsHook: g }),
        actions: [{ text: u.intl.string(u.t["NX+WJN"]), onClick: n }],
    });
}
