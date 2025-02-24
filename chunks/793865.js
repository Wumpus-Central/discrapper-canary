n.d(t, { Z: () => h });
var r = n(200651);
n(192379);
var i = n(512722),
    o = n.n(i),
    a = n(442837),
    s = n(481060),
    l = n(410575),
    c = n(594174),
    u = n(907285),
    d = n(737013),
    f = n(137810),
    p = n(981631),
    _ = n(388032);
function h(e) {
    let { onClose: t, onSelect: n, simplified: i = !1, appContext: h, onInteraction: m } = e,
        g = (0, a.e7)([c.default], () => {
            let e = c.default.getCurrentUser();
            return o()(null != e, 'VideoDeviceMenu: currentUser cannot be undefined'), e;
        }),
        E = (0, u.Z)(i),
        v = (0, d.Z)(g.id, h),
        b = (0, f.Z)(h);
    return (0, r.jsx)(l.Z, {
        object: p.qAy.CONTEXT_MENU,
        children: (0, r.jsxs)(s.v2r, {
            onClose: t,
            navId: 'video-device-context',
            'aria-label': _.NW.string(_.t.F122Gx),
            onSelect: n,
            onInteraction: m,
            children: [
                E,
                (0, r.jsxs)(s.kSQ, {
                    children: [v, i ? b : null]
                })
            ]
        })
    });
}
