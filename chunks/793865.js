r.d(n, {
    Z: function () {
        return _;
    }
});
var i = r(200651);
r(192379);
var a = r(512722),
    o = r.n(a),
    s = r(442837),
    l = r(481060),
    u = r(410575),
    c = r(594174),
    d = r(907285),
    f = r(737013),
    p = r(981631),
    h = r(388032);
function _(e) {
    let { onClose: n, onSelect: r } = e,
        a = (0, s.e7)([c.default], () => {
            let e = c.default.getCurrentUser();
            return o()(null != e, 'VideoDeviceMenu: currentUser cannot be undefined'), e;
        }),
        _ = (0, d.Z)(),
        m = (0, f.Z)(a.id);
    return (0, i.jsx)(u.Z, {
        object: p.qAy.CONTEXT_MENU,
        children: (0, i.jsxs)(l.Menu, {
            onClose: n,
            navId: 'video-device-context',
            'aria-label': h.intl.string(h.t.F122Gx),
            onSelect: r,
            children: [
                (0, i.jsx)(l.MenuGroup, {
                    label: h.intl.string(h.t.F122Gx),
                    children: _
                }),
                (0, i.jsx)(l.MenuGroup, { children: m })
            ]
        })
    });
}
