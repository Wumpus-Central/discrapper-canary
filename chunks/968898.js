n.d(t, {
    CS: () => T,
    GQ: () => N,
    O0: () => w,
    Pl: () => j,
    RE: () => I,
    X1: () => S,
    we: () => P,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(311907),
    o = n(827734),
    c = n(990078),
    u = n(397927),
    d = n(391973),
    p = n(684013),
    f = n(964486),
    m = n(555528),
    g = n(810412),
    y = n(302614),
    _ = n(395011),
    b = n(119191),
    A = n(581730),
    h = n(481484),
    v = n(985018),
    O = n(859804);

function j(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: O.oB,
        children: (0, r.jsx)(u.Text, {
            variant: "text-xs/semibold",
            color: "text-strong",
            children: t,
        }),
    });
}
let S = 7e3;

function I(e, t) {
    return x(
        (0, s.bG)([m.A], () => m.A.getWidget(e), [e]),
        t,
    );
}

function x(e, t) {
    let n = i.useRef(null == e ? void 0 : e.showExtrasHintTimestamp),
        [r, l] = i.useState(!1),
        a = (0, h.A)(),
        s = i.useRef(void 0);
    return (
        i.useEffect(() => {
            let r = null == e ? void 0 : e.showExtrasHintTimestamp;
            r !== n.current &&
                ((n.current = r),
                l(!0),
                (s.current = setTimeout(() => {
                    l(!1);
                }, t)));
        }, [t, null == e ? void 0 : e.showExtrasHintTimestamp]),
        (0, f.Ay)(() => {
            let n = null == e ? void 0 : e.showExtrasHintTimestamp;
            return (
                null != n &&
                    Date.now() - n < t &&
                    (l(!0),
                    (s.current = setTimeout(() => {
                        l(!1);
                    }, t))),
                () => {
                    null != s.current && clearTimeout(s.current);
                }
            );
        }),
        r && a
    );
}
let E = 8e3;

function P(e) {
    let { children: t, widgetId: n } = e,
        i = (0, s.bG)([m.A], () => m.A.getWidget(n), [n]);
    return x(i, E)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(y.A, {
                      className: O.Z,
                      children: (0, r.jsx)(u.DUT, {
                          className: O.SM,
                          onClick: () => {
                              null != i &&
                                  (p.A.setInputLocked(!1, _.A.getTargetPID()),
                                  (0, g.YX)(i.type, {
                                      type: g.Z5.KEYBIND_HINT,
                                      value: g.IP.OVERLAY_UNLOCKED,
                                  }));
                          },
                          children: (0, r.jsx)(u.Text, {
                              variant: "text-xs/semibold",
                              color: "text-strong",
                              children: (0, b.sI)((0, A.Jn)(), v.t["1XA04X"], v.intl.string(v.t.uZZGzf), {
                                  useFlexboxLayout: !0,
                                  highlightAdminWarningIfElevated: !1,
                                  keybindClassName: O.P,
                              }),
                          }),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: O.Xk,
                  }),
              ],
          })
        : (0, r.jsx)("div", {
              className: O.oB,
              children: (0, r.jsx)(u.Text, {
                  variant: "text-xs/semibold",
                  color: "text-strong",
                  children: t,
              }),
          });
}

function T(e) {
    let { onClick: t } = e;
    if ((0, h.A)()) return null;
    let n = v.intl.string(v.t["3D5yo/"]);
    return (0, r.jsx)(c.m, {
        text: n,
        "aria-label": n,
        children: (0, r.jsx)(u.DUT, {
            className: O.x6,
            onClick: t,
            children: (0, r.jsx)(u.Zes, {
                size: "xxs",
                color: o.A.colors.INTERACTIVE_TEXT_ACTIVE,
            }),
        }),
    });
}

function N(e) {
    let { widgetId: t, showAllStreams: n } = e,
        i = n ? v.intl.string(v.t.q2B3rh) : v.intl.string(v.t.JKGi6o);
    return (0, h.A)()
        ? null
        : (0, r.jsx)(c.m, {
              text: i,
              "aria-label": i,
              children: (0, r.jsx)(u.DUT, {
                  className: a()(O.x6, n && O.vu),
                  onClick: () => {
                      (0, d.cC)(t, {
                          showAllStreams: !n,
                      });
                  },
                  children: (0, r.jsx)(u.kN9, {
                      size: "xxs",
                      color: n ? o.A.colors.BACKGROUND_BRAND : o.A.colors.INTERACTIVE_TEXT_ACTIVE,
                  }),
              }),
          });
}

function w(e) {
    let { id: t, pinned: n } = e,
        i = n ? v.intl.string(v.t.cSu80j) : v.intl.string(v.t.cM8Vnm),
        l = (0, h.A)();
    return (0, r.jsx)(c.m, {
        text: i,
        "aria-label": i,
        asContainer: !0,
        children: (0, r.jsx)(u.DUT, {
            className: a()(O.x6, n && O.vu),
            onClick: () => {
                l || (0, d.v0)(t);
            },
            children: (0, r.jsx)(u.qgw, {
                size: "xxs",
                color: n ? o.A.colors.BACKGROUND_BRAND : o.A.colors.INTERACTIVE_TEXT_ACTIVE,
            }),
        }),
    });
}
