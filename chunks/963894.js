n.d(t, {
    A: () => h,
    H: () => _,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(108531),
    s = n(311907),
    o = n(397927),
    l = n(775602),
    c = n(21161),
    u = n(726368);
let d = 200,
    f = 20,
    p = 200;

function _(e) {
    let { children: t, confettiTriggerRef: n, setConfettiCount: c, setShouldFireConfetti: f, tooltipProps: _ } = e,
        [h, m] = i.useState(0),
        g = i.useRef(-1),
        E = i.useRef(!0),
        b = (0, s.bG)([l.A], () => l.A.useReducedMotion),
        { scaleFactor: y } = (0, o.zhh)({
            from: {
                scaleFactor: 1,
            },
            to: {
                scaleFactor: 1 === h ? 0.9 : 2 === h ? 1.2 : 1,
            },
            config: {
                tension: 380,
                friction: 7,
            },
        });
    return (i.useEffect(
        () => () => {
            E.current = !1;
        },
        [],
    ),
    b)
        ? t
        : (0, r.jsx)(a.animated.div, {
              className: u.WD,
              style: {
                  transform: y.to((e) => "scale(".concat(e, ")")),
              },
              children: (0, r.jsx)(o.DUT, {
                  className: u.hh,
                  onMouseDown: () => {
                      m(1),
                          f(!0),
                          c((e) => Math.min(e + 2, p)),
                          window.clearTimeout(g.current),
                          (g.current = window.setTimeout(() => {
                              E.current && c(0);
                          }, d));
                  },
                  onMouseUp: () => {
                      m(0), f(!1);
                  },
                  onMouseEnter: () => {
                      var e;
                      m(2), null == _ || null == (e = _.onMouseEnter) || e.call(_);
                  },
                  onMouseLeave: () => {
                      var e;
                      m(0), null == _ || null == (e = _.onMouseLeave) || e.call(_);
                  },
                  innerRef: n,
                  children: t,
              }),
          });
}
let h = function (e) {
    let { confettiCount: t, confettiTriggerRef: n, isFiring: r } = e,
        { cannon: a, createMultipleConfettiAt: o } = i.useContext(c.x),
        u = (0, s.bG)([l.A], () => l.A.useReducedMotion);
    return (
        i.useEffect(
            () => () => {
                null == a || a.clearConfetti();
            },
            [a],
        ),
        i.useEffect(() => {
            if (!r || u || null == n.current) return;
            let e = n.current.getBoundingClientRect();
            o(
                e.left + e.width / 2,
                e.top + e.height / 2,
                {
                    velocity: {
                        type: "static-random",
                        minValue: {
                            x: -180,
                            y: -180,
                        },
                        maxValue: {
                            x: 180,
                            y: 180,
                        },
                    },
                },
                Math.max(t, f),
            );
        }, [t, n, o, r, u]),
        null
    );
};
