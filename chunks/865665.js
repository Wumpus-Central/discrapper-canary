o.d(e, { C: () => u });
var i = o(477900),
    n = o(582128),
    s = o(844222),
    p = o(402386),
    d = o(661531);
function u(t) {
    let {
            area: e = 0,
            glyphSize: o = 16,
            radius: u = { x: 5, y: 5 },
            color: r = d.A.colors.TEXT_DEFAULT,
            fpsLimit: a = 30,
            edgeBand: c = 3,
        } = t,
        l = n.useContext(s.C),
        {
            top: h = 0,
            bottom: y = 0,
            left: b = 0,
            right: f = 0,
        } = "number" == typeof e ? { top: e, bottom: e, left: e, right: e } : e;
    return (0, i.jsx)(p.j, {
        fit: "layout",
        style: {
            position: "absolute",
            left: -b,
            top: -h,
            width: `calc(100% + ${b}px + ${f}px)`,
            height: `calc(100% + ${h}px + ${y}px)`,
            pointerEvents: "none",
        },
        listenOnDocumentBody: !0,
        withReducedMotion: "play",
        dataBinding: {
            edgeBand: c,
            insetTop: h,
            insetBottom: y,
            insetLeft: b,
            insetRight: f,
            color: r,
            radiusX: "number" == typeof u ? u : u.x,
            radiusY: "number" == typeof u ? u : u.y,
            glyphSize: o,
            fpsLimit: a,
            reducedMotion: l.reducedMotion.enabled,
        },
    });
}
