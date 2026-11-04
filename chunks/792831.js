var s,
    t = n(477900);
n(582128);
var i = n(503698),
    l = n.n(i),
    c = n(953727),
    u = n(256109);
function a(r) {
    let {
        width: e = 24,
        height: n = 24,
        color: s = "currentColor",
        direction: i,
        foreground: a,
        className: o,
        title: T,
        ...h
    } = r;
    return (0, t.jsxs)("svg", {
        ...(0, c.A)(h),
        width: e,
        height: n,
        className: l()(
            o,
            (function (r) {
                switch (r) {
                    case "LEFT":
                        return u.kb;
                    case "RIGHT":
                        return u.pG;
                    case "UP":
                        return null;
                    case "DOWN":
                        return u.TR;
                    case "UP_LEFT":
                        return u.l0;
                    case "DOWN_RIGHT":
                        return u.Nu;
                    default:
                        throw Error(`Invalid Direction ${r}`);
                }
            })(i),
        ),
        viewBox: "0 0 24 24",
        children: [
            null != T ? (0, t.jsx)("title", { children: T }) : null,
            (0, t.jsx)("polygon", {
                className: a,
                fill: s,
                fillRule: "nonzero",
                points: "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8",
            }),
        ],
    });
}
((a.Directions =
    (((s = {}).LEFT = "LEFT"),
    (s.RIGHT = "RIGHT"),
    (s.UP = "UP"),
    (s.DOWN = "DOWN"),
    (s.UP_LEFT = "UP_LEFT"),
    (s.DOWN_RIGHT = "DOWN_RIGHT"),
    s)),
    n.d(e, {}, { A: a }));
