n.d(t, { Z: () => l });
var i = n(200651),
    r = n(192379),
    a = n(481060),
    s = n(372900);
function o(e, t, n, i) {
    return e.getAvatarURL(i, t, n);
}
let l = r.memo(function (e) {
    let { user: t, size: n = a.EFr.SIZE_32, animate: l = !1, 'aria-hidden': u = !1, ...c } = e,
        d = r.useContext(s.Z);
    return (0, i.jsx)(a.qEK, {
        src: o(t, (0, a.pxk)(n), l, d),
        size: n,
        'aria-label': u ? void 0 : t.username,
        'aria-hidden': u,
        ...c
    });
});
