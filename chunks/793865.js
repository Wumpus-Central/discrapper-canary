n.d(t, { Z: () => m });
var i = n(200651);
n(192379);
var r = n(512722),
    a = n.n(r),
    s = n(442837),
    o = n(481060),
    l = n(410575),
    u = n(594174),
    c = n(167675),
    d = n(907285),
    f = n(737013),
    _ = n(137810),
    p = n(981631),
    h = n(388032);
function m(e) {
    let { onClose: t, onSelect: n, simplified: r = !1, appContext: m } = e,
        g = (0, s.e7)([u.default], () => {
            let e = u.default.getCurrentUser();
            return a()(null != e, 'VideoDeviceMenu: currentUser cannot be undefined'), e;
        }),
        E = (0, d.Z)(r),
        v = (0, f.Z)(g.id, m),
        y = (0, _.Z)(m),
        I = (0, c.Z)(g.id);
    return (0, i.jsx)(l.Z, {
        object: p.qAy.CONTEXT_MENU,
        children: (0, i.jsxs)(o.v2r, {
            onClose: t,
            navId: 'video-device-context',
            'aria-label': h.intl.string(h.t.F122Gx),
            onSelect: n,
            children: [
                E,
                (0, i.jsxs)(o.kSQ, {
                    children: [v, r ? I : null, r ? y : null]
                })
            ]
        })
    });
}
