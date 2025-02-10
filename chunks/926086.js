n.d(t, { Z: () => f }), n(47120), n(411104);
var i = n(200651),
    o = n(192379),
    r = n(120356),
    l = n.n(r),
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
        [r, a] = o.useState(0),
        [f, g] = o.useState(0),
        [m, v] = o.useState(0),
        x = o.useRef(0),
        [E, C] = o.useState(0),
        { timeToLiveMs: Z, reappearTimeMs: I } = u.ZP.useState(
            (e) => ({
                timeToLiveMs: e.timeToLiveMs,
                reappearTimeMs: e.reappearTimeMs
            }),
            s()
        ),
        S = {
            timeToLiveMs: Z,
            reappearTimeMs: I
        },
        b = o.useRef(S);
    o.useEffect(() => {
        b.current = S;
    }),
        o.useEffect(
            () => (
                (x.current = setInterval(() => {
                    let e = Date.now();
                    g(e),
                        v((t) => {
                            if (0 === t) return e;
                            let n = e - t,
                                i = b.current.timeToLiveMs,
                                o = i + b.current.reappearTimeMs;
                            return n > i ? t + o : t;
                        });
                }, 100)),
                () => {
                    clearInterval(x.current);
                }
            ),
            []
        );
    let y = () => {
            a(Date.now()), C((e) => e + 1);
        },
        O = r > 0 && f - r < 1000,
        w = (0, c.Yzy)(m > 0 && m < f && f - m < Z, {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: p
        }),
        [N, T] = o.useState(!1);
    if (
        (o.useEffect(() => {
            E > 10 && T(!0);
        }, [E]),
        N)
    )
        throw Error('ClickZoneDebugWidget crashed, too many clicks');
    return t && !n
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: w(
                  (e, t) =>
                      t &&
                      (0, i.jsx)(d.animated.div, {
                          style: e,
                          className: _.clickZoneDebugContainer,
                          children: (0, i.jsx)(h.Z, {
                              className: l()(_.clickZone, O && _.clickBackground),
                              children: (0, i.jsx)(c.P3F, {
                                  onClick: y,
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
