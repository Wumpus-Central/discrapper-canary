n.d(t, { Z: () => m }), n(388685), n(415506);
var i = n(951288),
    r = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(348327),
    s = n.n(a),
    u = n(358458),
    c = n(481060),
    d = n(667142),
    p = n(333031),
    h = n(388592);
let f = {
    mass: 1,
    tension: 600,
    friction: 60,
    clamp: !0,
};
function m(e) {
    let { locked: t, pinned: n } = e,
        [l, a] = r.useState(0),
        [m, g] = r.useState(0),
        [y, O] = r.useState(0),
        E = r.useRef(0),
        [v, S] = r.useState(0),
        { timeToLiveMs: b, reappearTimeMs: x } = d.ZP.useState(
            (e) => ({
                timeToLiveMs: e.timeToLiveMs,
                reappearTimeMs: e.reappearTimeMs,
            }),
            s(),
        ),
        j = {
            timeToLiveMs: b,
            reappearTimeMs: x,
        },
        I = r.useRef(j);
    r.useEffect(() => {
        I.current = j;
    }),
        r.useEffect(
            () => (
                (E.current = setInterval(() => {
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
                    clearInterval(E.current);
                }
            ),
            [],
        );
    let C = () => {
            a(Date.now()), S((e) => e + 1);
        },
        Z = l > 0 && m - l < 1000,
        N = (0, c.Yzy)(y > 0 && y < m && m - y < b, {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: f,
        }),
        [w, T] = r.useState(!1);
    if (
        (r.useEffect(() => {
            v > 10 && T(!0);
        }, [v]),
        w)
    )
        throw Error("ClickZoneDebugWidget crashed, too many clicks");
    return t && !n
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: N(
                  (e, t) =>
                      t &&
                      (0, i.jsx)(u.animated.div, {
                          style: e,
                          className: h.clickZoneDebugContainer,
                          children: (0, i.jsx)(p.Z, {
                              className: o()(h.clickZone, Z && h.clickBackground),
                              children: (0, i.jsx)(c.P3F, {
                                  onClick: C,
                                  className: h.clickable,
                                  children: (0, i.jsxs)(c.Text, {
                                      variant: "text-md/semibold",
                                      color: "always-white",
                                      children: ["Click Me (", v, ")"],
                                  }),
                              }),
                          }),
                      }),
              ),
          });
}
