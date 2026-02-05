"use strict";
n.d(t, { A: () => h, H: () => p });
var r = n(627968),
    i = n(64700),
    a = n(563495),
    s = n(311907),
    o = n(397927),
    l = n(775602),
    u = n(21161),
    c = n(726368);
let d = 200,
    _ = 20,
    f = 200;
function p(e) {
    let { children: t, confettiTriggerRef: n, setConfettiCount: u, setShouldFireConfetti: _, tooltipProps: p } = e,
        [h, m] = i.useState(0),
        g = i.useRef(-1),
        E = i.useRef(!0),
        A = (0, s.bG)([l.A], () => l.A.useReducedMotion),
        { scaleFactor: I } = (0, o.zhh)({
            from: { scaleFactor: 1 },
            to: { scaleFactor: 1 === h ? 0.9 : 2 === h ? 1.2 : 1 },
            config: { tension: 380, friction: 7 },
        });
    return (i.useEffect(
        () => () => {
            E.current = !1;
        },
        [],
    ),
    A)
        ? t
        : (0, r.jsx)(a.animated.div, {
              className: c.WD,
              style: { transform: I.to((e) => `scale(${e})`) },
              children: (0, r.jsx)(o.DUT, {
                  className: c.hh,
                  onMouseDown: () => {
                      m(1),
                          _(!0),
                          u((e) => Math.min(e + 2, f)),
                          window.clearTimeout(g.current),
                          (g.current = window.setTimeout(() => {
                              E.current && u(0);
                          }, d));
                  },
                  onMouseUp: () => {
                      m(0), _(!1);
                  },
                  onMouseEnter: () => {
                      m(2), p?.onMouseEnter?.();
                  },
                  onMouseLeave: () => {
                      m(0), p?.onMouseLeave?.();
                  },
                  innerRef: n,
                  children: t,
              }),
          });
}
let h = function (e) {
    let { confettiCount: t, confettiTriggerRef: n, isFiring: r } = e,
        { cannon: a, createMultipleConfettiAt: o } = i.useContext(u.x),
        c = (0, s.bG)([l.A], () => l.A.useReducedMotion);
    return (
        i.useEffect(
            () => () => {
                a?.clearConfetti();
            },
            [a],
        ),
        i.useEffect(() => {
            if (!r || c || null == n.current) return;
            let e = n.current.getBoundingClientRect();
            o(
                e.left + e.width / 2,
                e.top + e.height / 2,
                { velocity: { type: "static-random", minValue: { x: -180, y: -180 }, maxValue: { x: 180, y: 180 } } },
                Math.max(t, _),
            );
        }, [t, n, o, r, c]),
        null
    );
};
