n.d(t, { C: () => l });
var i = n(477900),
    o = n(582128),
    s = n(844222),
    a = n(402386),
    r = n(661531);
function l(e) {
    let {
            area: t = 0,
            glyphSize: n = 16,
            radius: l = { x: 5, y: 5 },
            color: c = r.A.colors.TEXT_DEFAULT,
            fpsLimit: d = 30,
            edgeBand: p = 3,
        } = e,
        u = o.useContext(s.C),
        {
            top: h = 0,
            bottom: m = 0,
            left: x = 0,
            right: f = 0,
        } = "number" == typeof t ? { top: t, bottom: t, left: t, right: t } : t;
    return (0, i.jsx)(a.j, {
        fit: "layout",
        style: {
            position: "absolute",
            left: -x,
            top: -h,
            width: `calc(100% + ${x}px + ${f}px)`,
            height: `calc(100% + ${h}px + ${m}px)`,
            pointerEvents: "none",
        },
        listenOnDocumentBody: !0,
        withReducedMotion: "play",
        dataBinding: {
            edgeBand: p,
            insetTop: h,
            insetBottom: m,
            insetLeft: x,
            insetRight: f,
            color: c,
            radiusX: "number" == typeof l ? l : l.x,
            radiusY: "number" == typeof l ? l : l.y,
            glyphSize: n,
            fpsLimit: d,
            reducedMotion: u.reducedMotion.enabled,
        },
    });
}
