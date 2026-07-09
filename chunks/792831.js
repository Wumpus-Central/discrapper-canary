t.d(r, { A: () => T });
var n,
    s = t(627968);
t(64700);
var l = t(503698),
    i = t.n(l),
    c = t(953727),
    u = t(774910),
    a =
        (((n = {}).LEFT = "LEFT"),
        (n.RIGHT = "RIGHT"),
        (n.UP = "UP"),
        (n.DOWN = "DOWN"),
        (n.UP_LEFT = "UP_LEFT"),
        (n.DOWN_RIGHT = "DOWN_RIGHT"),
        n);
let o = (e) => {
    let {
        width: r = 24,
        height: t = 24,
        color: n = "currentColor",
        direction: l,
        foreground: a,
        className: o,
        title: T,
        ...h
    } = e;
    return (0, s.jsxs)("svg", {
        ...(0, c.A)(h),
        width: r,
        height: t,
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
                fill: n,
                fillRule: "nonzero",
                points: "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8",
            }),
        ],
    });
};
o.Directions = a;
let T = o;
