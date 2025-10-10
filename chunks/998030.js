n.d(t, { y: () => o });
var r = n(427164),
    i = n(46841),
    a = n(47280);
let l = (0, r.le)({
    name: "2025-09-wishlist-in-dm-gifting-flow",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: {
        0: { enabled: !1 },
        1: { enabled: !0 },
    },
});
function o(e) {
    let { location: t } = e,
        n = l.useConfig({ location: t }).enabled,
        r = (0, a.ZP)({ location: t }),
        o = (0, i.S)({ location: t });
    return n && r && o;
}
