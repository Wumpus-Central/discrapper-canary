"use strict";
n.d(t, { A: () => d });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(570950),
    l = n(993077),
    u = n(544888);
let c = {},
    d = function (e) {
        let {
                children: t,
                id: n,
                tabIndex: s,
                className: d,
                cardClassName: _,
                cardStyle: h = c,
                cardType: f,
                fit: E = "layout",
                glowing: p = !1,
                glowAmount: m = 8,
                blurAmount: g = 30,
                hueRotate: A = 0,
                onMouseEnter: I,
                onFocus: T,
            } = e,
            S = r.useRef(null),
            N = r.useRef(null),
            C = {
                "--custom-glow-amount": `${m}px`,
                "--custom-blur-amount": `${g}px`,
                "--custom-hue-rotate": `${A}deg`,
                "--custom-glow-opacity": +(0 !== m),
            };
        return (0, i.jsxs)("div", {
            id: n,
            ref: S,
            tabIndex: s,
            className: a()(u.k, d),
            style: C,
            onMouseEnter: I,
            onFocus: T,
            children: [
                p &&
                    (0, i.jsx)(o.s, {
                        artboard: "BaseGlowRemapped",
                        eventTargetRef: S,
                        className: u.Q,
                        ref: N,
                        fit: E,
                        withReducedMotion: "short-loop",
                    }),
                (0, i.jsx)(l.Z, { type: f ?? l.s.CUSTOM, className: _, style: h, children: t }),
            ],
        });
    };
