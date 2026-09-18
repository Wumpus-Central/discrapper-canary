n.d(t, { $: () => E, m: () => p });
var a = n(477900),
    l = n(582128),
    r = n(503698),
    i = n.n(r),
    s = n(202091),
    o = n(17928),
    d = n(866323),
    c = n(765178),
    u = n(834730),
    f = n(821609),
    m = n(775602),
    g = n(485038);
let p = "data-prevents-popout-dismiss";
function E(e) {
    let {
            preventsPopoutDismiss: t,
            isVisible: n,
            labelId: r,
            noticeText: E,
            primaryAction: h,
            secondaryAction: b,
            isEmphasized: x = !1,
            a11yAnnounceOnShow: _,
            a11yAnnounceOnHide: A,
        } = e,
        N = (0, o.bG)([m.Ay], () => m.Ay.useReducedMotion),
        v = l.useRef(null);
    return (
        l.useEffect(
            () => () => {
                null != v.current && clearTimeout(v.current);
            },
            [],
        ),
        (0, d.p)(n, {
            from: { opacity: 0, y: 80 * !N },
            enter: { opacity: 1, y: 0 },
            leave: { opacity: 0, y: 80 * !N },
            onRest: (e, t) => {
                if (!e.finished) return;
                let n = t.item ? _ : A;
                (null != v.current && clearTimeout(v.current),
                    null != n
                        ? (v.current = setTimeout(() => {
                              ((v.current = null), c.O.announce(n));
                          }, 300))
                        : (v.current = null));
            },
        })((e, n) =>
            n
                ? (0, a.jsx)(s.animated.div, {
                      style: e,
                      children: (0, a.jsxs)("footer", {
                          ...(!0 === t ? { [p]: "" } : null),
                          className: i()(g.Qs, { [g.hO]: x }),
                          "aria-labelledby": r,
                          children: [
                              (0, a.jsx)(u.E, {
                                  variant: "text-sm/normal",
                                  color: "none",
                                  id: r,
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
}
