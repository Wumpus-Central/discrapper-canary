n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var r = n(512722),
    a = n.n(r),
    s = n(442837),
    o = n(481060),
    l = n(410575),
    u = n(594174),
    c = n(907285),
    d = n(737013),
    f = n(137810),
    _ = n(981631),
    p = n(388032);
function h(e) {
    let { onClose: t, onSelect: n, simplified: r = !1, appContext: h } = e,
        m = (0, s.e7)([u.default], () => {
            let e = u.default.getCurrentUser();
            return a()(null != e, 'VideoDeviceMenu: currentUser cannot be undefined'), e;
        }),
        g = (0, c.Z)(r),
        E = (0, d.Z)(m.id, h),
        v = (0, f.Z)(h);
    return (0, i.jsx)(l.Z, {
        object: _.qAy.CONTEXT_MENU,
        children: (0, i.jsxs)(o.v2r, {
            onClose: t,
            navId: 'video-device-context',
            'aria-label': p.intl.string(p.t.F122Gx),
            onSelect: n,
            children: [
                g,
                (0, i.jsxs)(o.kSQ, {
                    children: [E, r ? v : null]
                })
            ]
        })
    });
}
