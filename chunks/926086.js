n.d(t, { Z: () => g }), n(47120), n(411104);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
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
function g(e) {
    let { locked: t, pinned: n } = e,
        [r, a] = l.useState(0),
        [g, f] = l.useState(0),
        [m, v] = l.useState(0),
        x = l.useRef(0),
        [E, Z] = l.useState(0),
        { timeToLiveMs: C, reappearTimeMs: I } = u.ZP.useState(
            (e) => ({
                timeToLiveMs: e.timeToLiveMs,
                reappearTimeMs: e.reappearTimeMs
            }),
            s()
        ),
        S = {
            timeToLiveMs: C,
            reappearTimeMs: I
        },
        b = l.useRef(S);
    l.useEffect(() => void (b.current = S)),
        l.useEffect(
            () => (
                (x.current = setInterval(() => {
                    let e = Date.now();
                    f(e),
                        v((t) => {
                            if (0 === t) return e;
                            let n = e - t,
                                i = b.current.timeToLiveMs,
                                l = i + b.current.reappearTimeMs;
                            return n > i ? t + l : t;
                        });
                }, 100)),
                () => {
                    clearInterval(x.current);
                }
            ),
            []
        );
    let y = () => {
            a(Date.now()), Z((e) => e + 1);
        },
        N = r > 0 && g - r < 1000,
        w = (0, c.Yzy)(m > 0 && m < g && g - m < C, {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: p
        }),
        [T, O] = l.useState(!1);
    if (
        (l.useEffect(() => {
            E > 10 && O(!0);
        }, [E]),
        T)
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
                              className: o()(_.clickZone, N && _.clickBackground),
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
