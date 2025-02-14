n.d(t, { Z: () => f }), n(47120), n(411104);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(348327),
    s = n.n(a),
    d = n(642128),
    u = n(481060),
    c = n(667142),
    h = n(333031),
    _ = n(380917);
let p = {
    mass: 1,
    tension: 600,
    friction: 60,
    clamp: !0
};
function f(e) {
    let { locked: t, pinned: n } = e,
        [r, a] = l.useState(0),
        [f, m] = l.useState(0),
        [g, v] = l.useState(0),
        E = l.useRef(0),
        [x, I] = l.useState(0),
        { timeToLiveMs: C, reappearTimeMs: S } = c.ZP.useState(
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
        y = l.useRef(Z);
    l.useEffect(() => {
        y.current = Z;
    }),
        l.useEffect(
            () => (
                (E.current = setInterval(() => {
                    let e = Date.now();
                    m(e),
                        v((t) => {
                            if (0 === t) return e;
                            let n = e - t,
                                i = y.current.timeToLiveMs,
                                l = i + y.current.reappearTimeMs;
                            return n > i ? t + l : t;
                        });
                }, 100)),
                () => {
                    clearInterval(E.current);
                }
            ),
            []
        );
    let O = () => {
            a(Date.now()), I((e) => e + 1);
        },
        N = r > 0 && f - r < 1000,
        b = (0, u.Yzy)(g > 0 && g < f && f - g < C, {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: p
        }),
        [T, w] = l.useState(!1);
    if (
        (l.useEffect(() => {
            x > 10 && w(!0);
        }, [x]),
        T)
    )
        throw Error('ClickZoneDebugWidget crashed, too many clicks');
    return t && !n
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: b(
                  (e, t) =>
                      t &&
                      (0, i.jsx)(d.animated.div, {
                          style: e,
                          className: _.clickZoneDebugContainer,
                          children: (0, i.jsx)(h.Z, {
                              className: o()(_.clickZone, N && _.clickBackground),
                              children: (0, i.jsx)(u.P3F, {
                                  onClick: O,
                                  className: _.clickable,
                                  children: (0, i.jsxs)(u.Text, {
                                      variant: 'text-md/semibold',
                                      color: 'always-white',
                                      children: ['Click Me (', x, ')']
                                  })
                              })
                          })
                      })
              )
          });
}
