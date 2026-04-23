n.d(t, { CS: () => O, GQ: () => k, O0: () => D, Pl: () => y, RE: () => w, X1: () => j, we: () => M });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(17928),
    o = n(661531),
    d = n(990078),
    c = n(834730),
    u = n(939249),
    h = n(625903),
    m = n(31300),
    p = n(788120),
    g = n(391973),
    f = n(684013),
    _ = n(964486),
    x = n(38502),
    A = n(810412),
    E = n(302614),
    S = n(489277),
    I = n(119191),
    v = n(581730),
    b = n(481484),
    C = n(985018),
    T = n(882387);
function y(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", {
        className: T.oB,
        children: (0, i.jsx)(c.E, { variant: "text-xs/semibold", color: "text-strong", children: t }),
    });
}
let j = 7e3;
function w(e, t) {
    return N(
        (0, s.bG)([x.A], () => x.A.getWidget(e), [e]),
        t,
    );
}
function N(e, t) {
    let n = a.useRef(e?.showExtrasHintTimestamp),
        [i, r] = a.useState(!1),
        l = (0, b.A)(),
        s = a.useRef(void 0);
    return (
        a.useEffect(() => {
            let i = e?.showExtrasHintTimestamp;
            i !== n.current &&
                ((n.current = i),
                r(!0),
                (s.current = setTimeout(() => {
                    r(!1);
                }, t)));
        }, [t, e?.showExtrasHintTimestamp]),
        (0, _.Ay)(() => {
            let n = e?.showExtrasHintTimestamp;
            return (
                null != n &&
                    Date.now() - n < t &&
                    (r(!0),
                    (s.current = setTimeout(() => {
                        r(!1);
                    }, t))),
                () => {
                    null != s.current && clearTimeout(s.current);
                }
            );
        }),
        i && l
    );
}
let R = 8e3;
function M(e) {
    let { children: t, widgetId: n } = e,
        a = (0, s.bG)([x.A], () => x.A.getWidget(n), [n]);
    return N(a, R)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(E.A, {
                      className: T.Z,
                      children: (0, i.jsx)(u.D, {
                          className: T.SM,
                          onClick: () => {
                              null != a &&
                                  (f.A.setInputLocked(!1, S.A.getTargetPID()),
                                  (0, A.YX)(a.type, { type: A.Z5.KEYBIND_HINT, value: A.IP.OVERLAY_UNLOCKED }));
                          },
                          children: (0, i.jsx)(c.E, {
                              variant: "text-xs/semibold",
                              color: "text-strong",
                              children: (0, I.sI)((0, v.Jn)(), C.t["1XA04X"], {
                                  useFlexboxLayout: !0,
                                  highlightAdminWarningIfElevated: !1,
                                  keybindClassName: T.P,
                              }),
                          }),
                      }),
                  }),
                  (0, i.jsx)("div", { className: T.Xk }),
              ],
          })
        : (0, i.jsx)("div", {
              className: T.oB,
              children: (0, i.jsx)(c.E, { variant: "text-xs/semibold", color: "text-strong", children: t }),
          });
}
function O(e) {
    let { onClick: t } = e;
    if ((0, b.A)()) return null;
    let n = C.intl.string(C.t["3D5yo/"]);
    return (0, i.jsx)(d.m, {
        text: n,
        "aria-label": n,
        children: (0, i.jsx)(u.D, {
            className: T.x6,
            onClick: t,
            children: (0, i.jsx)(h.Z, { size: "xxs", color: o.A.colors.INTERACTIVE_TEXT_ACTIVE }),
        }),
    });
}
function k(e) {
    let { widgetId: t, showAllStreams: n } = e,
        a = n ? C.intl.string(C.t.q2B3rh) : C.intl.string(C.t.JKGi6o);
    return (0, b.A)()
        ? null
        : (0, i.jsx)(d.m, {
              text: a,
              "aria-label": a,
              children: (0, i.jsx)(u.D, {
                  className: l()(T.x6, n && T.vu),
                  onClick: () => {
                      (0, g.cC)(t, { showAllStreams: !n });
                  },
                  children: (0, i.jsx)(m.k, {
                      size: "xxs",
                      color: n ? o.A.colors.BACKGROUND_BRAND : o.A.colors.INTERACTIVE_TEXT_ACTIVE,
                  }),
              }),
          });
}
function D(e) {
    let { id: t, pinned: n } = e,
        a = n ? C.intl.string(C.t.cSu80j) : C.intl.string(C.t.cM8Vnm),
        r = (0, b.A)();
    return (0, i.jsx)(d.m, {
        text: a,
        "aria-label": a,
        asContainer: !0,
        children: (0, i.jsx)(u.D, {
            className: l()(T.x6, n && T.vu),
            onClick: () => {
                r || (0, g.v0)(t);
            },
            children: (0, i.jsx)(p.q, {
                size: "xxs",
                color: n ? o.A.colors.BACKGROUND_BRAND : o.A.colors.INTERACTIVE_TEXT_ACTIVE,
            }),
        }),
    });
}
