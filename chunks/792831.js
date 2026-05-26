"use strict";
n.d(t, { A: () => d });
var i,
    r = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    o = n(953727),
    l = n(89406),
    u =
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
        foreground: u,
        className: c,
        title: d,
        ..._
    } = e;
    return (0, r.jsxs)("svg", {
        ...(0, o.A)(_),
        width: t,
        height: n,
        className: a()(
            c,
            (function (e) {
                switch (e) {
                    case "LEFT":
                        return l.kb;
                    case "RIGHT":
                        return l.pG;
                    case "UP":
                        return null;
                    case "DOWN":
                        return l.TR;
                    case "UP_LEFT":
                        return l.l0;
                    case "DOWN_RIGHT":
                        return l.Nu;
                    default:
                        throw Error(`Invalid Direction ${e}`);
                }
            })(s),
        ),
        viewBox: "0 0 24 24",
        children: [
            null != d ? (0, r.jsx)("title", { children: d }) : null,
            (0, r.jsx)("polygon", {
                className: u,
                fill: i,
                fillRule: "nonzero",
                points: "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8",
            }),
        ],
    });
};
c.Directions = u;
let d = c;
