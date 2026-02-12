"use strict";
n.d(t, { A: () => p, H: () => h });
var r = n(627968),
    i = n(64700),
    a = n(40153),
    s = n(311907),
    o = n(397927),
    l = n(775602),
    u = n(21161),
    c = n(726368);
let d = 200,
    _ = 20,
    f = 200;
function h(e) {
    let { children: t, confettiTriggerRef: n, setConfettiCount: u, setShouldFireConfetti: _, tooltipProps: h } = e,
        [p, g] = i.useState(0),
        E = i.useRef(-1),
        A = i.useRef(!0),
        I = (0, s.bG)([l.A], () => l.A.useReducedMotion),
        { scaleFactor: T } = (0, o.zhh)({
            from: { scaleFactor: 1 },
            to: { scaleFactor: 1 === p ? 0.9 : 2 === p ? 1.2 : 1 },
            config: { tension: 380, friction: 7 },
        });
    return (i.useEffect(
        () => () => {
            A.current = !1;
        },
        [],
    ),
    I)
        ? t
        : (0, r.jsx)(a.animated.div, {
              className: c.WD,
              style: { transform: T.to((e) => `scale(${e})`) },
              children: (0, r.jsx)(o.DUT, {
                  className: c.hh,
                  onMouseDown: () => {
                      g(1),
                          _(!0),
                          u((e) => Math.min(e + 2, f)),
                          window.clearTimeout(E.current),
                          (E.current = window.setTimeout(() => {
                              A.current && u(0);
                          }, d));
                  },
                  onMouseUp: () => {
                      g(0), _(!1);
                  },
                  onMouseEnter: () => {
                      g(2), h?.onMouseEnter?.();
                  },
                  onMouseLeave: () => {
                      g(0), h?.onMouseLeave?.();
                  },
                  innerRef: n,
                  children: t,
              }),
          });
}
let p = function (e) {
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
