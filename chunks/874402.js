var a = n(477900),
    r = n(582128),
    l = n(503698),
    s = n.n(l),
    i = n(120692),
    o = n(855986),
    d = n(866323),
    c = n(765178),
    u = n(834730),
    f = n(821609),
    m = n(775602),
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
                    labelId: l,
                    noticeText: E,
                    primaryAction: h,
                    secondaryAction: b,
                    isEmphasized: x = !1,
                    a11yAnnounceOnShow: A,
                    a11yAnnounceOnHide: _,
                } = e,
                N = (0, o.bG)([m.Ay], () => m.Ay.useReducedMotion),
                R = r.useRef(null);
            return (
                r.useEffect(
                    () => () => {
                        null != R.current && clearTimeout(R.current);
                    },
                    [],
                ),
                (0, d.p)(n, {
                    from: { opacity: 0, y: 80 * !N },
                    enter: { opacity: 1, y: 0 },
                    leave: { opacity: 0, y: 80 * !N },
                    onRest: (e, t) => {
                        if (!e.finished) return;
                        let n = t.item ? A : _;
                        (null != R.current && clearTimeout(R.current),
                            null != n
                                ? (R.current = setTimeout(() => {
                                      ((R.current = null), c.O.announce(n));
                                  }, 300))
                                : (R.current = null));
                    },
                })((e, n) =>
                    n
                        ? (0, a.jsx)(i.animated.div, {
                              style: e,
                              children: (0, a.jsxs)("footer", {
                                  ...(!0 === t ? { [p]: "" } : null),
                                  className: s()(g.Qs, { [g.hO]: x }),
                                  "aria-labelledby": l,
                                  children: [
                                      (0, a.jsx)(u.E, {
                                          variant: "body-sm/normal",
                                          color: "none",
                                          id: l,
                                          className: g.ut,
                                          children: E,
                                      }),
                                      (0, a.jsxs)("div", {
                                          className: g.o1,
                                          children: [
                                              (0, a.jsx)(f.$, { variant: "secondary", size: "sm", ...b }),
                                              (0, a.jsx)(f.$, { variant: "primary", size: "sm", ...h }),
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
