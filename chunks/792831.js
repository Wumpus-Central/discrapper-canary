n.d(t, { A: () => u });
var i,
    l = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    r = n(953727),
    o = n(89406),
    d =
        (((i = {}).LEFT = "LEFT"),
        (i.RIGHT = "RIGHT"),
        (i.UP = "UP"),
        (i.DOWN = "DOWN"),
        (i.UP_LEFT = "UP_LEFT"),
        (i.DOWN_RIGHT = "DOWN_RIGHT"),
        i);
let c = (e) => {
    let {
        width: t = 24,
        height: n = 24,
        color: i = "currentColor",
        direction: s,
        foreground: d,
        className: c,
        title: u,
        ...h
    } = e;
    return (0, l.jsxs)("svg", {
        ...(0, r.A)(h),
        width: t,
        height: n,
        className: a()(
            c,
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
            })(s),
        ),
        viewBox: "0 0 24 24",
        children: [
            null != u ? (0, l.jsx)("title", { children: u }) : null,
            (0, l.jsx)("polygon", {
                className: d,
                fill: i,
                fillRule: "nonzero",
                points: "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8",
            }),
        ],
    });
};
c.Directions = d;
let u = c;
