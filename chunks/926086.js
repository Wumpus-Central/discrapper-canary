n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    o = n(120356),
    r = n.n(o),
    a = n(348327),
    s = n.n(a),
    c = n(476183),
    u = n(481060),
    d = n(667142),
    h = n(333031),
    f = n(70491);
let p = {
    mass: 1,
    tension: 600,
    friction: 60,
    clamp: !0
};
function m(e) {
    let { locked: t, pinned: n } = e,
        [o, a] = l.useState(0),
        [m, v] = l.useState(0),
        [x, g] = l.useState(0),
        C = l.useRef(0),
        [Z, _] = l.useState(0),
        { timeToLiveMs: I, reappearTimeMs: j } = d.ZP.useState(
            (e) => ({
                timeToLiveMs: e.timeToLiveMs,
                reappearTimeMs: e.reappearTimeMs
            }),
            s()
        ),
        E = {
            timeToLiveMs: I,
            reappearTimeMs: j
        },
        b = l.useRef(E);
    l.useEffect(() => void (b.current = E)),
        l.useEffect(
            () => (
                (C.current = setInterval(() => {
                    let e = Date.now();
                    v(e),
                        g((t) => {
                            if (0 === t) return e;
                            let n = e - t,
                                i = b.current.timeToLiveMs,
                                l = i + b.current.reappearTimeMs;
                            return n > i ? t + l : t;
                        });
                }, 100)),
                () => {
                    clearInterval(C.current);
                }
            ),
            []
        );
    let w = () => {
            a(Date.now()), _((e) => e + 1);
        },
        N = o > 0 && m - o < 1000,
        k = (0, u.useTransition)(x > 0 && x < m && m - x < I, {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: p
        });
    return t && !n
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: k(
                  (e, t) =>
                      t &&
                      (0, i.jsx)(c.animated.div, {
                          style: e,
                          className: f.clickZoneDebugContainer,
                          children: (0, i.jsx)(h.Z, {
                              className: r()(f.clickZone, N && f.clickBackground),
                              children: (0, i.jsx)(u.Clickable, {
                                  onClick: w,
                                  className: f.clickable,
                                  children: (0, i.jsxs)(u.Text, {
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
