n.d(t, { Z: () => m }), n(47120), n(411104);
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
    h = n(86654);
let f = {
    mass: 1,
    tension: 600,
    friction: 60,
    clamp: !0
};
function m(e) {
    let { locked: t, pinned: n } = e,
        [o, a] = r.useState(0),
        [m, g] = r.useState(0),
        [y, O] = r.useState(0),
        v = r.useRef(0),
        [b, _] = r.useState(0),
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
        j = r.useRef(I);
    r.useEffect(() => {
        j.current = I;
    }),
        r.useEffect(
            () => (
                (v.current = setInterval(() => {
                    let e = Date.now();
                    g(e),
                        O((t) => {
                            if (0 === t) return e;
                            let n = e - t,
                                i = j.current.timeToLiveMs,
                                r = i + j.current.reappearTimeMs;
                            return n > i ? t + r : t;
                        });
                }, 100)),
                () => {
                    clearInterval(v.current);
                }
            ),
            []
        );
    let C = () => {
            a(Date.now()), _((e) => e + 1);
        },
        S = o > 0 && m - o < 1000,
        N = (0, u.Yzy)(y > 0 && y < m && m - y < E, {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: f
        }),
        [Z, w] = r.useState(!1);
    if (
        (r.useEffect(() => {
            b > 10 && w(!0);
        }, [b]),
        Z)
    )
        throw Error('ClickZoneDebugWidget crashed, too many clicks');
    return t && !n
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: N(
                  (e, t) =>
                      t &&
                      (0, i.jsx)(c.animated.div, {
                          style: e,
                          className: h.clickZoneDebugContainer,
                          children: (0, i.jsx)(p.Z, {
                              className: l()(h.clickZone, S && h.clickBackground),
                              children: (0, i.jsx)(u.P3F, {
                                  onClick: C,
                                  className: h.clickable,
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
