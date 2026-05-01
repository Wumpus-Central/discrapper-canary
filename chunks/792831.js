n.d(t, { A: () => _ });
var i,
    a = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    l = n(953727),
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
        direction: r,
        foreground: d,
        className: c,
        title: _,
        ...E
    } = e;
    return (0, a.jsxs)("svg", {
        ...(0, l.A)(E),
        width: t,
        height: n,
        className: s()(
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
            })(r),
        ),
        viewBox: "0 0 24 24",
        children: [
            null != _ ? (0, a.jsx)("title", { children: _ }) : null,
            (0, a.jsx)("polygon", {
                className: d,
                fill: i,
                fillRule: "nonzero",
                points: "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8",
            }),
        ],
    });
};
c.Directions = d;
let _ = c;
