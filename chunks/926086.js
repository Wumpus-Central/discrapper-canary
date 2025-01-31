n.d(t, { Z: () => g }), n(47120), n(411104);
var i = n(200651),
    r = n(192379),
    o = n(120356),
    a = n.n(o),
    l = n(348327),
    s = n.n(l),
    c = n(642128),
    d = n(481060),
    u = n(667142),
    h = n(333031),
    _ = n(70491);
let m = {
    mass: 1,
    tension: 600,
    friction: 60,
    clamp: !0
};
function g(e) {
    let { locked: t, pinned: n } = e,
        [o, l] = r.useState(0),
        [g, p] = r.useState(0),
        [f, x] = r.useState(0),
        v = r.useRef(0),
        [C, b] = r.useState(0),
        { timeToLiveMs: Z, reappearTimeMs: I } = u.ZP.useState(
            (e) => ({
                timeToLiveMs: e.timeToLiveMs,
                reappearTimeMs: e.reappearTimeMs
            }),
            s()
        ),
        j = {
            timeToLiveMs: Z,
            reappearTimeMs: I
        },
        w = r.useRef(j);
    r.useEffect(() => void (w.current = j)),
        r.useEffect(
            () => (
                (v.current = setInterval(() => {
                    let e = Date.now();
                    p(e),
                        x((t) => {
                            if (0 === t) return e;
                            let n = e - t,
                                i = w.current.timeToLiveMs,
                                r = i + w.current.reappearTimeMs;
                            return n > i ? t + r : t;
                        });
                }, 100)),
                () => {
                    clearInterval(v.current);
                }
            ),
            []
        );
    let y = () => {
            l(Date.now()), b((e) => e + 1);
        },
        E = o > 0 && g - o < 1000,
        k = (0, d.Yzy)(f > 0 && f < g && g - f < Z, {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: m
        }),
        [N, S] = r.useState(!1);
    if (
        (r.useEffect(() => {
            C > 10 && S(!0);
        }, [C]),
        N)
    )
        throw Error('ClickZoneDebugWidget crashed, too many clicks');
    return t && !n
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: k(
                  (e, t) =>
                      t &&
                      (0, i.jsx)(c.animated.div, {
                          style: e,
                          className: _.clickZoneDebugContainer,
                          children: (0, i.jsx)(h.Z, {
                              className: a()(_.clickZone, E && _.clickBackground),
                              children: (0, i.jsx)(d.P3F, {
                                  onClick: y,
                                  className: _.clickable,
                                  children: (0, i.jsxs)(d.Text, {
                                      variant: 'text-md/semibold',
                                      color: 'always-white',
                                      children: ['Click Me (', C, ')']
                                  })
                              })
                          })
                      })
              )
          });
}
