n.d(t, { A: () => d });
var i,
    l = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(953727),
    o = n(59937),
    c =
        (((i = {}).LEFT = "LEFT"),
        (i.RIGHT = "RIGHT"),
        (i.UP = "UP"),
        (i.DOWN = "DOWN"),
        (i.UP_LEFT = "UP_LEFT"),
        (i.DOWN_RIGHT = "DOWN_RIGHT"),
        i);
let u = (e) => {
    let {
        width: t = 24,
        height: n = 24,
        color: i = "currentColor",
        direction: r,
        foreground: c,
        className: u,
        title: d,
        ..._
    } = e;
    return (0, l.jsxs)("svg", {
        ...(0, a.A)(_),
        width: t,
        height: n,
        className: s()(
            u,
            (function (e) {
                switch (e) {
                    case "LEFT":
                        return o.kb;
                    case "RIGHT":
                        return o.pG;
                    case "UP":
                        return null;
                    case "DOWN":
                        return o.TR;
                    case "UP_LEFT":
                        return o.l0;
                    case "DOWN_RIGHT":
                        return o.Nu;
                    default:
                        throw Error(`Invalid Direction ${e}`);
                }
            })(r),
        ),
        viewBox: "0 0 24 24",
        children: [
            null != d ? (0, l.jsx)("title", { children: d }) : null,
            (0, l.jsx)("polygon", {
                className: c,
                fill: i,
                fillRule: "nonzero",
                points: "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8",
            }),
        ],
    });
};
u.Directions = c;
let d = u;
