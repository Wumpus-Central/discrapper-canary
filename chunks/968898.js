i.d(t, { CS: () => j, GQ: () => L, O0: () => P, Pl: () => C, RE: () => y, X1: () => E, we: () => b });
var n = i(627968),
    a = i(64700),
    l = i(503698),
    r = i.n(l),
    s = i(311907),
    o = i(827734),
    d = i(990078),
    c = i(397927),
    u = i(391973),
    m = i(684013),
    _ = i(964486),
    A = i(555528),
    g = i(810412),
    h = i(302614),
    f = i(395011),
    p = i(119191),
    S = i(581730),
    I = i(481484),
    x = i(985018),
    v = i(859804);
function C(e) {
    let { children: t } = e;
    return (0, n.jsx)("div", {
        className: v.oB,
        children: (0, n.jsx)(c.Text, { variant: "text-xs/semibold", color: "text-strong", children: t }),
    });
}
let E = 7e3;
function y(e, t) {
    return T(
        (0, s.bG)([A.A], () => A.A.getWidget(e), [e]),
        t,
    );
}
function T(e, t) {
    let i = a.useRef(e?.showExtrasHintTimestamp),
        [n, l] = a.useState(!1),
        r = (0, I.A)(),
        s = a.useRef(void 0);
    return (
        a.useEffect(() => {
            let n = e?.showExtrasHintTimestamp;
            n !== i.current &&
                ((i.current = n),
                l(!0),
                (s.current = setTimeout(() => {
                    l(!1);
                }, t)));
        }, [t, e?.showExtrasHintTimestamp]),
        (0, _.Ay)(() => {
            let i = e?.showExtrasHintTimestamp;
            return (
                null != i &&
                    Date.now() - i < t &&
                    (l(!0),
                    (s.current = setTimeout(() => {
                        l(!1);
                    }, t))),
                () => {
                    null != s.current && clearTimeout(s.current);
                }
            );
        }),
        n && r
    );
}
let N = 8e3;
function b(e) {
    let { children: t, widgetId: i } = e,
        a = (0, s.bG)([A.A], () => A.A.getWidget(i), [i]);
    return T(a, N)
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(h.A, {
                      className: v.Z,
                      children: (0, n.jsx)(c.DUT, {
                          className: v.SM,
                          onClick: () => {
                              null != a &&
                                  (m.A.setInputLocked(!1, f.A.getTargetPID()),
                                  (0, g.YX)(a.type, { type: g.Z5.KEYBIND_HINT, value: g.IP.OVERLAY_UNLOCKED }));
                          },
                          children: (0, n.jsx)(c.Text, {
                              variant: "text-xs/semibold",
                              color: "text-strong",
                              children: (0, p.sI)((0, S.Jn)(), x.t["1XA04X"], x.intl.string(x.t.uZZGzf), {
                                  useFlexboxLayout: !0,
                                  highlightAdminWarningIfElevated: !1,
                                  keybindClassName: v.P,
                              }),
                          }),
                      }),
                  }),
                  (0, n.jsx)("div", { className: v.Xk }),
              ],
          })
        : (0, n.jsx)("div", {
              className: v.oB,
              children: (0, n.jsx)(c.Text, { variant: "text-xs/semibold", color: "text-strong", children: t }),
          });
}
function j(e) {
    let { onClick: t } = e;
    if ((0, I.A)()) return null;
    let i = x.intl.string(x.t["3D5yo/"]);
    return (0, n.jsx)(d.m, {
        text: i,
        "aria-label": i,
        children: (0, n.jsx)(c.DUT, {
            className: v.x6,
            onClick: t,
            children: (0, n.jsx)(c.Zes, { size: "xxs", color: o.A.colors.INTERACTIVE_TEXT_ACTIVE }),
        }),
    });
}
function L(e) {
    let { widgetId: t, showAllStreams: i } = e,
        a = i ? x.intl.string(x.t.q2B3rh) : x.intl.string(x.t.JKGi6o);
    return (0, I.A)()
        ? null
        : (0, n.jsx)(d.m, {
              text: a,
              "aria-label": a,
              children: (0, n.jsx)(c.DUT, {
                  className: r()(v.x6, i && v.vu),
                  onClick: () => {
                      (0, u.cC)(t, { showAllStreams: !i });
                  },
                  children: (0, n.jsx)(c.kN9, {
                      size: "xxs",
                      color: i ? o.A.colors.BACKGROUND_BRAND : o.A.colors.INTERACTIVE_TEXT_ACTIVE,
                  }),
              }),
          });
}
function P(e) {
    let { id: t, pinned: i } = e,
        a = i ? x.intl.string(x.t.cSu80j) : x.intl.string(x.t.cM8Vnm),
        l = (0, I.A)();
    return (0, n.jsx)(d.m, {
        text: a,
        "aria-label": a,
        asContainer: !0,
        children: (0, n.jsx)(c.DUT, {
            className: r()(v.x6, i && v.vu),
            onClick: () => {
                l || (0, u.v0)(t);
            },
            children: (0, n.jsx)(c.qgw, {
                size: "xxs",
                color: i ? o.A.colors.BACKGROUND_BRAND : o.A.colors.INTERACTIVE_TEXT_ACTIVE,
            }),
        }),
    });
}
