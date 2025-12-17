n.d(t, { Z: () => m }), n(388685), n(415506);
var i = n(54381),
    r = n(473749),
    a = n(120356),
    l = n.n(a),
    o = n(348327),
    s = n.n(o),
    c = n(236726),
    u = n(481060),
    d = n(667142),
    f = n(333031),
    h = n(735837);
let p = {
    mass: 1,
    tension: 600,
    friction: 60,
    clamp: !0,
};
function m(e) {
    let { locked: t, pinned: n } = e,
        [a, o] = r.useState(0),
        [m, g] = r.useState(0),
        [b, y] = r.useState(0),
        O = r.useRef(0),
        [v, E] = r.useState(0),
        { timeToLiveMs: S, reappearTimeMs: x } = d.ZP.useState(
            (e) => ({
                timeToLiveMs: e.timeToLiveMs,
                reappearTimeMs: e.reappearTimeMs,
            }),
            s(),
        ),
        I = {
            timeToLiveMs: S,
            reappearTimeMs: x,
        },
        C = r.useRef(I);
    r.useEffect(() => {
        C.current = I;
    }),
        r.useEffect(
            () => (
                (O.current = setInterval(() => {
                    let e = Date.now();
                    g(e),
                        y((t) => {
                            if (0 === t) return e;
                            let n = e - t,
                                i = C.current.timeToLiveMs,
                                r = i + C.current.reappearTimeMs;
                            return n > i ? t + r : t;
                        });
                }, 100)),
                () => {
                    clearInterval(O.current);
                }
            ),
            [],
        );
    let j = () => {
            o(Date.now()), E((e) => e + 1);
        },
        _ = a > 0 && m - a < 1000,
        Z = (0, u.Yzy)(b > 0 && b < m && m - b < S, {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: p,
        }),
        [N, w] = r.useState(!1);
    if (
        (r.useEffect(() => {
            v > 10 && w(!0);
        }, [v]),
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
                          className: h.clickZoneDebugContainer,
                          children: (0, i.jsx)(f.Z, {
                              className: l()(h.clickZone, _ && h.clickBackground),
                              children: (0, i.jsx)(u.P3F, {
                                  onClick: j,
                                  className: h.clickable,
                                  children: (0, i.jsxs)(u.Text, {
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
