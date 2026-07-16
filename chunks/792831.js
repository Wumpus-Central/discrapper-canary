n.d(r, { A: () => o });
var t,
    s = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    c = n(953727),
    u = n(89406);
function a(e) {
    let {
        width: r = 24,
        height: n = 24,
        color: t = "currentColor",
        direction: l,
        foreground: a,
        className: o,
        title: T,
        ...h
    } = e;
    return (0, s.jsxs)("svg", {
        ...(0, c.A)(h),
        width: r,
        height: n,
        className: i()(
            o,
            (function (e) {
                switch (e) {
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
                        throw Error(`Invalid Direction ${e}`);
                }
            })(l),
        ),
        viewBox: "0 0 24 24",
        children: [
            null != T ? (0, s.jsx)("title", { children: T }) : null,
            (0, s.jsx)("polygon", {
                className: a,
                fill: t,
                fillRule: "nonzero",
                points: "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8",
            }),
        ],
    });
}
a.Directions =
    (((t = {}).LEFT = "LEFT"),
    (t.RIGHT = "RIGHT"),
    (t.UP = "UP"),
    (t.DOWN = "DOWN"),
    (t.UP_LEFT = "UP_LEFT"),
    (t.DOWN_RIGHT = "DOWN_RIGHT"),
    t);
let o = a;
