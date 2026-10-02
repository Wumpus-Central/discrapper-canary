n.d(t, { C: () => u });
var r = n(477900),
    o = n(582128),
    a = n(844222),
    l = n(402386),
    i = n(661531);
function u(e) {
    let {
            area: t = 0,
            glyphSize: n = 16,
            radius: u = { x: 5, y: 5 },
            color: s = i.A.colors.TEXT_DEFAULT,
            fpsLimit: c = 30,
            edgeBand: d = 3,
        } = e,
        f = o.useContext(a.C),
        {
            top: m = 0,
            bottom: h = 0,
            left: p = 0,
            right: y = 0,
        } = "number" == typeof t ? { top: t, bottom: t, left: t, right: t } : t;
    return (0, r.jsx)(l.j, {
        fit: "layout",
        style: {
            position: "absolute",
            left: -p,
            top: -m,
            width: `calc(100% + ${p}px + ${y}px)`,
            height: `calc(100% + ${m}px + ${h}px)`,
            pointerEvents: "none",
        },
        listenOnDocumentBody: !0,
        withReducedMotion: "play",
        dataBinding: {
            edgeBand: d,
            insetTop: m,
            insetBottom: h,
            insetLeft: p,
            insetRight: y,
            color: s,
            radiusX: "number" == typeof u ? u : u.x,
            radiusY: "number" == typeof u ? u : u.y,
            glyphSize: n,
            fpsLimit: c,
            reducedMotion: f.reducedMotion.enabled,
        },
    });
}
