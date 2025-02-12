n.d(t, { Z: () => f }), n(47120), n(411104);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(348327),
    s = n.n(a),
    d = n(642128),
    c = n(481060),
    u = n(667142),
    h = n(333031),
    _ = n(700468);
let p = {
    mass: 1,
    tension: 600,
    friction: 60,
    clamp: !0
};
function f(e) {
    let { locked: t, pinned: n } = e,
        [l, a] = r.useState(0),
        [f, g] = r.useState(0),
        [m, v] = r.useState(0),
        E = r.useRef(0),
        [I, x] = r.useState(0),
        { timeToLiveMs: C, reappearTimeMs: S } = u.ZP.useState(
            (e) => ({
                timeToLiveMs: e.timeToLiveMs,
                reappearTimeMs: e.reappearTimeMs
            }),
            s()
        ),
        Z = {
            timeToLiveMs: C,
            reappearTimeMs: S
        },
        y = r.useRef(Z);
    r.useEffect(() => {
        y.current = Z;
    }),
        r.useEffect(
            () => (
                (E.current = setInterval(() => {
                    let e = Date.now();
                    g(e),
                        v((t) => {
                            if (0 === t) return e;
                            let n = e - t,
                                i = y.current.timeToLiveMs,
                                r = i + y.current.reappearTimeMs;
                            return n > i ? t + r : t;
                        });
                }, 100)),
                () => {
                    clearInterval(E.current);
                }
            ),
            []
        );
    let b = () => {
            a(Date.now()), x((e) => e + 1);
        },
        O = l > 0 && f - l < 1000,
        N = (0, c.Yzy)(m > 0 && m < f && f - m < C, {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: p
        }),
        [T, w] = r.useState(!1);
    if (
        (r.useEffect(() => {
            I > 10 && w(!0);
        }, [I]),
        T)
    )
        throw Error('ClickZoneDebugWidget crashed, too many clicks');
    return t && !n
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: N(
                  (e, t) =>
                      t &&
                      (0, i.jsx)(d.animated.div, {
                          style: e,
                          className: _.clickZoneDebugContainer,
                          children: (0, i.jsx)(h.Z, {
                              className: o()(_.clickZone, O && _.clickBackground),
                              children: (0, i.jsx)(c.P3F, {
                                  onClick: b,
                                  className: _.clickable,
                                  children: (0, i.jsxs)(c.Text, {
                                      variant: 'text-md/semibold',
                                      color: 'always-white',
                                      children: ['Click Me (', I, ')']
                                  })
                              })
                          })
                      })
              )
          });
}
