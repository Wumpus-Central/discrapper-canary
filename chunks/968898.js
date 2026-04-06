i.d(t, { CS: () => _, GQ: () => w, O0: () => b, Pl: () => y, RE: () => V, X1: () => N, we: () => C });
var n = i(627968),
    l = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(311907),
    d = i(827734),
    o = i(990078),
    u = i(397927),
    c = i(391973),
    A = i(684013),
    m = i(964486),
    g = i(555528),
    h = i(810412),
    p = i(302614),
    x = i(395011),
    f = i(119191),
    I = i(581730),
    S = i(481484),
    E = i(985018),
    v = i(784003);
function y(e) {
    let { children: t } = e;
    return (0, n.jsx)("div", {
        className: v.oB,
        children: (0, n.jsx)(u.Text, { variant: "text-xs/semibold", color: "text-strong", children: t }),
    });
}
let N = 7e3;
function V(e, t) {
    return j(
        (0, r.bG)([g.A], () => g.A.getWidget(e), [e]),
        t,
    );
}
function j(e, t) {
    let i = l.useRef(e?.showExtrasHintTimestamp),
        [n, s] = l.useState(!1),
        a = (0, S.A)(),
        r = l.useRef(void 0);
    return (
        l.useEffect(() => {
            let n = e?.showExtrasHintTimestamp;
            n !== i.current &&
                ((i.current = n),
                s(!0),
                (r.current = setTimeout(() => {
                    s(!1);
                }, t)));
        }, [t, e?.showExtrasHintTimestamp]),
        (0, m.Ay)(() => {
            let i = e?.showExtrasHintTimestamp;
            return (
                null != i &&
                    Date.now() - i < t &&
                    (s(!0),
                    (r.current = setTimeout(() => {
                        s(!1);
                    }, t))),
                () => {
                    null != r.current && clearTimeout(r.current);
                }
            );
        }),
        n && a
    );
}
let T = 8e3;
function C(e) {
    let { children: t, widgetId: i } = e,
        l = (0, r.bG)([g.A], () => g.A.getWidget(i), [i]);
    return j(l, T)
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(p.A, {
                      className: v.Z,
                      children: (0, n.jsx)(u.DUT, {
                          className: v.SM,
                          onClick: () => {
                              null != l &&
                                  (A.A.setInputLocked(!1, x.A.getTargetPID()),
                                  (0, h.YX)(l.type, { type: h.Z5.KEYBIND_HINT, value: h.IP.OVERLAY_UNLOCKED }));
                          },
                          children: (0, n.jsx)(u.Text, {
                              variant: "text-xs/semibold",
                              color: "text-strong",
                              children: (0, f.sI)((0, I.Jn)(), E.t["1XA04X"], {
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
              children: (0, n.jsx)(u.Text, { variant: "text-xs/semibold", color: "text-strong", children: t }),
          });
}
function _(e) {
    let { onClick: t } = e;
    if ((0, S.A)()) return null;
    let i = E.intl.string(E.t["3D5yo/"]);
    return (0, n.jsx)(o.m, {
        text: i,
        "aria-label": i,
        children: (0, n.jsx)(u.DUT, {
            className: v.x6,
            onClick: t,
            children: (0, n.jsx)(u.Zes, { size: "xxs", color: d.A.colors.INTERACTIVE_TEXT_ACTIVE }),
        }),
    });
}
function w(e) {
    let { widgetId: t, showAllStreams: i } = e,
        l = i ? E.intl.string(E.t.q2B3rh) : E.intl.string(E.t.JKGi6o);
    return (0, S.A)()
        ? null
        : (0, n.jsx)(o.m, {
              text: l,
              "aria-label": l,
              children: (0, n.jsx)(u.DUT, {
                  className: a()(v.x6, i && v.vu),
                  onClick: () => {
                      (0, c.cC)(t, { showAllStreams: !i });
                  },
                  children: (0, n.jsx)(u.kN9, {
                      size: "xxs",
                      color: i ? d.A.colors.BACKGROUND_BRAND : d.A.colors.INTERACTIVE_TEXT_ACTIVE,
                  }),
              }),
          });
}
function b(e) {
    let { id: t, pinned: i } = e,
        l = i ? E.intl.string(E.t.cSu80j) : E.intl.string(E.t.cM8Vnm),
        s = (0, S.A)();
    return (0, n.jsx)(o.m, {
        text: l,
        "aria-label": l,
        asContainer: !0,
        children: (0, n.jsx)(u.DUT, {
            className: a()(v.x6, i && v.vu),
            onClick: () => {
                s || (0, c.v0)(t);
            },
            children: (0, n.jsx)(u.qgw, {
                size: "xxs",
                color: i ? d.A.colors.BACKGROUND_BRAND : d.A.colors.INTERACTIVE_TEXT_ACTIVE,
            }),
        }),
    });
}
