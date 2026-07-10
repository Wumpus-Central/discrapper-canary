"use strict";
n.d(t, { A: () => u });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(570950),
    o = n(993077),
    d = n(970296);
let c = {},
    u = function (e) {
        let {
                children: t,
                id: n,
                tabIndex: a,
                className: u,
                cardClassName: _,
                cardStyle: E = c,
                cardType: A,
                fit: h = "layout",
                glowing: I = !1,
                glowAmount: f = 8,
                blurAmount: p = 30,
                hueRotate: T = 0,
                onMouseEnter: m,
                onFocus: g,
            } = e,
            S = r.useRef(null),
            N = r.useRef(null),
            C = {
                "--custom-glow-amount": `${f}px`,
                "--custom-blur-amount": `${p}px`,
                "--custom-hue-rotate": `${T}deg`,
                "--custom-glow-opacity": +(0 !== f),
            };
        return (0, i.jsxs)("div", {
            id: n,
            ref: S,
            tabIndex: a,
            className: s()(d.k, u),
            style: C,
            onMouseEnter: m,
            onFocus: g,
            children: [
                I &&
                    (0, i.jsx)(l.s, {
                        artboard: "BaseGlowRemapped",
                        eventTargetRef: S,
                        className: d.Q,
                        ref: N,
                        fit: h,
                        withReducedMotion: "short-loop",
                    }),
                (0, i.jsx)(o.Z, { type: A ?? o.s.CUSTOM, className: _, style: E, children: t }),
            ],
        });
    };
