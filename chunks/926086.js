n.d(t, { Z: () => f }), n(47120), n(411104);
var i = n(200651),
    r = n(192379),
    o = n(120356),
    l = n.n(o),
    a = n(348327),
    s = n.n(a),
    d = n(642128),
    c = n(481060),
    u = n(667142),
    h = n(333031),
    _ = n(70491);
let p = {
    mass: 1,
    tension: 600,
    friction: 60,
    clamp: !0
};
function f(e) {
    let { locked: t, pinned: n } = e,
        [o, a] = r.useState(0),
        [f, g] = r.useState(0),
        [m, v] = r.useState(0),
        x = r.useRef(0),
        [E, C] = r.useState(0),
        { timeToLiveMs: Z, reappearTimeMs: S } = u.ZP.useState(
            (e) => ({
                timeToLiveMs: e.timeToLiveMs,
                reappearTimeMs: e.reappearTimeMs
            }),
            s()
        ),
        I = {
            timeToLiveMs: Z,
            reappearTimeMs: S
        },
        y = r.useRef(I);
    r.useEffect(() => void (y.current = I)),
        r.useEffect(
            () => (
                (x.current = setInterval(() => {
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
                    clearInterval(x.current);
                }
            ),
            []
        );
    let b = () => {
            a(Date.now()), C((e) => e + 1);
        },
        w = o > 0 && f - o < 1000,
        N = (0, c.Yzy)(m > 0 && m < f && f - m < Z, {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: p
        }),
        [O, T] = r.useState(!1);
    if (
        (r.useEffect(() => {
            E > 10 && T(!0);
        }, [E]),
        O)
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
                              className: l()(_.clickZone, w && _.clickBackground),
                              children: (0, i.jsx)(c.P3F, {
                                  onClick: b,
                                  className: _.clickable,
                                  children: (0, i.jsxs)(c.Text, {
                                      variant: 'text-md/semibold',
                                      color: 'always-white',
                                      children: ['Click Me (', E, ')']
                                  })
                              })
                          })
                      })
              )
          });
}
