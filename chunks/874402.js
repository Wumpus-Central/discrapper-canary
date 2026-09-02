n.d(t, { $: () => p, m: () => E });
var a = n(477900),
    l = n(582128),
    r = n(503698),
    s = n.n(r),
    i = n(221877),
    o = n(17928),
    d = n(866323),
    c = n(765178),
    u = n(834730),
    f = n(821609),
    m = n(775602),
    g = n(485038);
let E = "data-prevents-popout-dismiss";
function p(e) {
    let {
            preventsPopoutDismiss: t,
            isVisible: n,
            labelId: r,
            noticeText: p,
            primaryAction: b,
            secondaryAction: h,
            isEmphasized: x = !1,
            a11yAnnounceOnShow: _,
            a11yAnnounceOnHide: A,
        } = e,
        v = (0, o.bG)([m.Ay], () => m.Ay.useReducedMotion),
        R = l.useRef(null);
    return (
        l.useEffect(
            () => () => {
                null != R.current && clearTimeout(R.current);
            },
            [],
        ),
        (0, d.p)(n, {
            from: { opacity: 0, y: 80 * !v },
            enter: { opacity: 1, y: 0 },
            leave: { opacity: 0, y: 80 * !v },
            onRest: (e, t) => {
                if (!e.finished) return;
                let n = t.item ? _ : A;
                null != R.current && clearTimeout(R.current),
                    null != n
                        ? (R.current = setTimeout(() => {
                              (R.current = null), c.O.announce(n);
                          }, 300))
                        : (R.current = null);
            },
        })((e, n) =>
            n
                ? (0, a.jsx)(i.animated.div, {
                      style: e,
                      children: (0, a.jsxs)("footer", {
                          ...(!0 === t ? { [E]: "" } : null),
                          className: s()(g.Qs, { [g.hO]: x }),
                          "aria-labelledby": r,
                          children: [
                              (0, a.jsx)(u.E, {
                                  variant: "text-sm/normal",
                                  color: "none",
                                  id: r,
                                  className: g.ut,
                                  children: p,
                              }),
                              (0, a.jsxs)("div", {
                                  className: g.o1,
                                  children: [
                                      (0, a.jsx)(f.$, { variant: "secondary", size: "sm", ...h }),
                                      (0, a.jsx)(f.$, { variant: "primary", size: "sm", ...b }),
                                  ],
                              }),
                          ],
                      }),
                  })
                : null,
        )
    );
}
