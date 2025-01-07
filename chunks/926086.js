n.d(t, {
    Z: function () {
        return v;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(348327),
    s = n.n(a),
    c = n(666912),
    u = n(481060),
    d = n(667142),
    h = n(333031),
    f = n(70491);
let m = {
    mass: 1,
    tension: 600,
    friction: 60,
    clamp: !0
};
function v(e) {
    let { locked: t, pinned: n } = e,
        [l, a] = r.useState(0),
        [v, p] = r.useState(0),
        [x, g] = r.useState(0),
        C = r.useRef(0),
        [Z, I] = r.useState(0),
        { timeToLiveMs: _, reappearTimeMs: j } = d.ZP.useState(
            (e) => ({
                timeToLiveMs: e.timeToLiveMs,
                reappearTimeMs: e.reappearTimeMs
            }),
            s()
        ),
        E = {
            timeToLiveMs: _,
            reappearTimeMs: j
        },
        b = r.useRef(E);
    r.useEffect(() => void (b.current = E)),
        r.useEffect(
            () => (
                (C.current = setInterval(() => {
                    let e = Date.now();
                    p(e),
                        g((t) => {
                            if (0 === t) return e;
                            let n = e - t,
                                i = b.current.timeToLiveMs,
                                r = i + b.current.reappearTimeMs;
                            return n > i ? t + r : t;
                        });
                }, 100)),
                () => {
                    clearInterval(C.current);
                }
            ),
            []
        );
    let w = () => {
            a(Date.now()), I((e) => e + 1);
        },
        N = l > 0 && v - l < 1000,
        k = (0, u.useTransition)(x > 0 && x < v && v - x < _, {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: m
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
                              className: o()(f.clickZone, N && f.clickBackground),
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
