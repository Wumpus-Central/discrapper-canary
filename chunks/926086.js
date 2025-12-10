n.d(t, { Z: () => m }), n(388685), n(415506);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(348327),
    s = n.n(a),
    c = n(467721),
    u = n(481060),
    d = n(667142),
    h = n(333031),
    p = n(388592);
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
        v = r.useRef(0),
        [E, b] = r.useState(0),
        { timeToLiveMs: _, reappearTimeMs: S } = d.ZP.useState(
            (e) => ({
                timeToLiveMs: e.timeToLiveMs,
                reappearTimeMs: e.reappearTimeMs,
            }),
            s(),
        ),
        x = {
            timeToLiveMs: _,
            reappearTimeMs: S,
        },
        I = r.useRef(x);
    r.useEffect(() => {
        I.current = x;
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
            [],
        );
    let j = () => {
            a(Date.now()), b((e) => e + 1);
        },
        C = l > 0 && m - l < 1000,
        Z = (0, u.Yzy)(y > 0 && y < m && m - y < _, {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: f,
        }),
        [N, w] = r.useState(!1);
    if (
        (r.useEffect(() => {
            E > 10 && w(!0);
        }, [E]),
        N)
    )
        throw Error("ClickZoneDebugWidget crashed, too many clicks");
    return t && !n
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: Z(
                  (e, t) =>
                      t &&
                      (0, i.jsx)(c.animated.div, {
                          style: e,
                          className: p.clickZoneDebugContainer,
                          children: (0, i.jsx)(h.Z, {
                              className: o()(p.clickZone, C && p.clickBackground),
                              children: (0, i.jsx)(u.P3F, {
                                  onClick: j,
                                  className: p.clickable,
                                  children: (0, i.jsxs)(u.Text, {
                                      variant: "text-md/semibold",
                                      color: "always-white",
                                      children: ["Click Me (", E, ")"],
                                  }),
                              }),
                          }),
                      }),
              ),
          });
}
