n.d(t, { Z: () => m }), n(388685), n(415506);
var i = n(255367),
    r = n(73800),
    o = n(120356),
    l = n.n(o),
    a = n(348327),
    s = n.n(a),
    c = n(386230),
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
        [b, E] = r.useState(0),
        { timeToLiveMs: _, reappearTimeMs: x } = d.ZP.useState(
            (e) => ({
                timeToLiveMs: e.timeToLiveMs,
                reappearTimeMs: e.reappearTimeMs
            }),
            s()
        ),
        S = {
            timeToLiveMs: _,
            reappearTimeMs: x
        },
        I = r.useRef(S);
    r.useEffect(() => {
        I.current = S;
    }),
        r.useEffect(
            () => (
                (v.current = setInterval(() => {
                    let e = Date.now();
                    g(e),
                        O((t) => {
                            if (0 === t) return e;
                            let n = e - t,
                                i = I.current.timeToLiveMs,
                                r = i + I.current.reappearTimeMs;
                            return n > i ? t + r : t;
                        });
                }, 100)),
                () => {
                    clearInterval(v.current);
                }
            ),
            []
        );
    let j = () => {
            a(Date.now()), E((e) => e + 1);
        },
        C = o > 0 && m - o < 1000,
        N = (0, u.Yzy)(y > 0 && y < m && m - y < _, {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: f
        }),
        [w, Z] = r.useState(!1);
    if (
        (r.useEffect(() => {
            b > 10 && Z(!0);
        }, [b]),
        w)
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
                              className: l()(h.clickZone, C && h.clickBackground),
                              children: (0, i.jsx)(u.P3F, {
                                  onClick: j,
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
