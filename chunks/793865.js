n.d(t, { Z: () => g });
var r = n(54381);
n(473749);
var i = n(512722),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(410575),
    c = n(906732),
    u = n(650958),
    d = n(594174),
    f = n(737013),
    p = n(137810),
    _ = n(981631),
    m = n(65154),
    h = n(388032);
function g(e) {
    let { onClose: t, onSelect: n, minimal: i = !1, appContext: g, onInteraction: E } = e,
        { analyticsLocations: b } = (0, c.ZP)(),
        y = (0, o.e7)([d.default], () => {
            let e = d.default.getCurrentUser();
            return a()(null != e, "VideoDeviceMenu: currentUser cannot be undefined"), e;
        }),
        O = (0, u.M)({
            deviceType: m.h7.VIDEO_INPUT,
            analyticsLocations: b,
            showAllDevices: !0,
            asSubmenu: i,
        }),
        v = (0, f.Z)(y.id, g),
        S = (0, p.Z)(g);
    return (0, r.jsx)(l.Z, {
        object: _.qAy.CONTEXT_MENU,
        children: (0, r.jsxs)(s.v2r, {
            onClose: t,
            navId: "video-device-context",
            variant: "fixed",
            "aria-label": h.intl.string(h.t.F122Gz),
            onSelect: n,
            onInteraction: E,
            children: [
                O,
                (0, r.jsxs)(s.kSQ, {
                    children: [v, i ? S : null],
                }),
            ],
        }),
    });
}
