n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(47120),
    n(411104);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(348327),
    s = n.n(a),
    c = n(642128),
    d = n(481060),
    u = n(667142),
    h = n(333031),
    m = n(70491);
let p = {
    mass: 1,
    tension: 600,
    friction: 60,
    clamp: !0
};
function x(e) {
    let { locked: t, pinned: n } = e,
        [l, a] = r.useState(0),
        [x, g] = r.useState(0),
        [v, f] = r.useState(0),
        C = r.useRef(0),
        [Z, b] = r.useState(0),
        { timeToLiveMs: j, reappearTimeMs: _ } = u.ZP.useState(
            (e) => ({
                timeToLiveMs: e.timeToLiveMs,
                reappearTimeMs: e.reappearTimeMs
            }),
            s()
        ),
        I = {
            timeToLiveMs: j,
            reappearTimeMs: _
        },
        E = r.useRef(I);
    r.useEffect(() => void (E.current = I)),
        r.useEffect(
            () => (
                (C.current = setInterval(() => {
                    let e = Date.now();
                    g(e),
                        f((t) => {
                            if (0 === t) return e;
                            let n = e - t,
                                i = E.current.timeToLiveMs,
                                r = i + E.current.reappearTimeMs;
                            return n > i ? t + r : t;
                        });
                }, 100)),
                () => {
                    clearInterval(C.current);
                }
            ),
            []
        );
    let k = () => {
            a(Date.now()), b((e) => e + 1);
        },
        N = l > 0 && x - l < 1000,
        w = (0, d.useTransition)(v > 0 && v < x && x - v < j, {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: p
        }),
        [T, y] = r.useState(!1);
    if (
        (r.useEffect(() => {
            Z > 0 && y(!0);
        }, [Z]),
        T)
    )
        throw Error('ClickZoneDebugWidget crashed');
    return t && !n
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: w(
                  (e, t) =>
                      t &&
                      (0, i.jsx)(c.animated.div, {
                          style: e,
                          className: m.clickZoneDebugContainer,
                          children: (0, i.jsx)(h.Z, {
                              className: o()(m.clickZone, N && m.clickBackground),
                              children: (0, i.jsx)(d.Clickable, {
                                  onClick: k,
                                  className: m.clickable,
                                  children: (0, i.jsxs)(d.Text, {
                                      variant: 'text-md/semibold',
                                      color: 'always-white',
                                      children: ['Click Me (', Z, ')']
                                  })
                              })
                          })
                      })
              )
          });
}
