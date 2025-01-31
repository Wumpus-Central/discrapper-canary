n.d(t, { Z: () => p });
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
    f = n(981631),
    _ = n(388032);
function p(e) {
    let { onClose: t, onSelect: n } = e,
        r = (0, s.e7)([u.default], () => {
            let e = u.default.getCurrentUser();
            return a()(null != e, 'VideoDeviceMenu: currentUser cannot be undefined'), e;
        }),
        p = (0, c.Z)(),
        h = (0, d.Z)(r.id);
    return (0, i.jsx)(l.Z, {
        object: f.qAy.CONTEXT_MENU,
        children: (0, i.jsxs)(o.v2r, {
            onClose: t,
            navId: 'video-device-context',
            'aria-label': _.intl.string(_.t.F122Gx),
            onSelect: n,
            children: [
                (0, i.jsx)(o.kSQ, {
                    label: _.intl.string(_.t.F122Gx),
                    children: p
                }),
                (0, i.jsx)(o.kSQ, { children: h })
            ]
        })
    });
}
