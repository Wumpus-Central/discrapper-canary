var a = n(477900),
    l = n(582128),
    r = n(503698),
    s = n.n(r),
    i = n(120692),
    o = n(855986),
    d = n(866323),
    c = n(765178),
    u = n(834730),
    m = n(821609),
    f = n(775602),
    g = n(485038);
let p = "data-prevents-popout-dismiss";
n.d(
    t,
    {},
    {
        $: function (e) {
            let {
                    preventsPopoutDismiss: t,
                    isVisible: n,
                    labelId: r,
                    noticeText: E,
                    primaryAction: h,
                    secondaryAction: b,
                    isEmphasized: x = !1,
                    a11yAnnounceOnShow: A,
                    a11yAnnounceOnHide: _,
                } = e,
                R = (0, o.bG)([f.Ay], () => f.Ay.useReducedMotion),
                N = l.useRef(null);
            return (
                l.useEffect(
                    () => () => {
                        null != N.current && clearTimeout(N.current);
                    },
                    [],
                ),
                (0, d.p)(n, {
                    from: { opacity: 0, y: 80 * !R },
                    enter: { opacity: 1, y: 0 },
                    leave: { opacity: 0, y: 80 * !R },
                    onRest: (e, t) => {
                        if (!e.finished) return;
                        let n = t.item ? A : _;
                        (null != N.current && clearTimeout(N.current),
                            null != n
                                ? (N.current = setTimeout(() => {
                                      ((N.current = null), c.O.announce(n));
                                  }, 300))
                                : (N.current = null));
                    },
                })((e, n) =>
                    n
                        ? (0, a.jsx)(i.animated.div, {
                              style: e,
                              children: (0, a.jsxs)("footer", {
                                  ...(!0 === t ? { [p]: "" } : null),
                                  className: s()(g.Qs, { [g.hO]: x }),
                                  "aria-labelledby": r,
                                  children: [
                                      (0, a.jsx)(u.E, {
                                          variant: "body-sm/normal",
                                          color: "none",
                                          id: r,
                                          className: g.ut,
                                          children: E,
                                      }),
                                      (0, a.jsxs)("div", {
                                          className: g.o1,
                                          children: [
                                              (0, a.jsx)(m.$, { variant: "secondary", size: "sm", ...b }),
                                              (0, a.jsx)(m.$, { variant: "primary", size: "sm", ...h }),
                                          ],
                                      }),
                                  ],
                              }),
                          })
                        : null,
                )
            );
        },
        m: p,
    },
);
