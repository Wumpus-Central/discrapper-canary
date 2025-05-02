n.d(t, { Z: () => m }), n(388685), n(415506);
var i = n(200651),
    r = n(192379),
    o = n(120356),
    l = n.n(o),
    a = n(348327),
    s = n.n(a),
    c = n(272573),
    u = n(481060),
    d = n(667142),
    p = n(333031),
    f = n(86654);
let h = {
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
        [b, E] = r.useState(0),
        { timeToLiveMs: _, reappearTimeMs: I } = d.ZP.useState(
            (e) => ({
                timeToLiveMs: e.timeToLiveMs,
                reappearTimeMs: e.reappearTimeMs
            }),
            s()
        ),
        x = {
            timeToLiveMs: _,
            reappearTimeMs: I
        },
        j = r.useRef(x);
    r.useEffect(() => {
        j.current = x;
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
    let S = () => {
            a(Date.now()), E((e) => e + 1);
        },
        C = o > 0 && m - o < 1000,
        N = (0, u.Yzy)(y > 0 && y < m && m - y < _, {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: h
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
                          className: f.clickZoneDebugContainer,
                          children: (0, i.jsx)(p.Z, {
                              className: l()(f.clickZone, C && f.clickBackground),
                              children: (0, i.jsx)(u.P3F, {
                                  onClick: S,
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
