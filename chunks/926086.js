n.d(t, { Z: () => g }), n(47120), n(411104);
var i = n(200651),
    r = n(192379),
    o = n(120356),
    l = n.n(o),
    a = n(348327),
    s = n.n(a),
    c = n(642128),
    u = n(481060),
    d = n(667142),
    p = n(333031),
    f = n(127254);
let h = {
    mass: 1,
    tension: 600,
    friction: 60,
    clamp: !0
};
function g(e) {
    let { locked: t, pinned: n } = e,
        [o, a] = r.useState(0),
        [g, _] = r.useState(0),
        [m, v] = r.useState(0),
        O = r.useRef(0),
        [b, y] = r.useState(0),
        { timeToLiveMs: E, reappearTimeMs: x } = d.ZP.useState(
            (e) => ({
                timeToLiveMs: e.timeToLiveMs,
                reappearTimeMs: e.reappearTimeMs
            }),
            s()
        ),
        I = {
            timeToLiveMs: E,
            reappearTimeMs: x
        },
        S = r.useRef(I);
    r.useEffect(() => {
        S.current = I;
    }),
        r.useEffect(
            () => (
                (O.current = setInterval(() => {
                    let e = Date.now();
                    _(e),
                        v((t) => {
                            if (0 === t) return e;
                            let n = e - t,
                                i = S.current.timeToLiveMs,
                                r = i + S.current.reappearTimeMs;
                            return n > i ? t + r : t;
                        });
                }, 100)),
                () => {
                    clearInterval(O.current);
                }
            ),
            []
        );
    let C = () => {
            a(Date.now()), y((e) => e + 1);
        },
        j = o > 0 && g - o < 1000,
        w = (0, u.Yzy)(m > 0 && m < g && g - m < E, {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: h
        }),
        [Z, N] = r.useState(!1);
    if (
        (r.useEffect(() => {
            b > 10 && N(!0);
        }, [b]),
        Z)
    )
        throw Error('ClickZoneDebugWidget crashed, too many clicks');
    return t && !n
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: w(
                  (e, t) =>
                      t &&
                      (0, i.jsx)(c.animated.div, {
                          style: e,
                          className: f.clickZoneDebugContainer,
                          children: (0, i.jsx)(p.Z, {
                              className: l()(f.clickZone, j && f.clickBackground),
                              children: (0, i.jsx)(u.P3F, {
                                  onClick: C,
                                  className: f.clickable,
                                  children: (0, i.jsxs)(u.Text, {
                                      variant: 'text-md/semibold',
                                      color: 'always-white',
                                      children: ['Click Me (', b, ')']
                                  })
                              })
                          })
                      })
              )
          });
}
