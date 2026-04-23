n.d(t, { CS: () => O, GQ: () => k, O0: () => D, Pl: () => j, RE: () => w, X1: () => y, we: () => M });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(311907),
    o = n(827734),
    d = n(990078),
    c = n(834730),
    u = n(939249),
    h = n(625903),
    m = n(31300),
    p = n(788120),
    g = n(391973),
    f = n(684013),
    _ = n(964486),
    x = n(555528),
    A = n(810412),
    E = n(302614),
    S = n(395011),
    I = n(119191),
    v = n(581730),
    b = n(481484),
    C = n(985018),
    T = n(882387);
function j(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", {
        className: T.oB,
        children: (0, i.jsx)(c.E, { variant: "text-xs/semibold", color: "text-strong", children: t }),
    });
}
let y = 7e3;
function w(e, t) {
    return N(
        (0, l.bG)([x.A], () => x.A.getWidget(e), [e]),
        t,
    );
}
function N(e, t) {
    let n = r.useRef(e?.showExtrasHintTimestamp),
        [i, a] = r.useState(!1),
        s = (0, b.A)(),
        l = r.useRef(void 0);
    return (
        r.useEffect(() => {
            let i = e?.showExtrasHintTimestamp;
            i !== n.current &&
                ((n.current = i),
                a(!0),
                (l.current = setTimeout(() => {
                    a(!1);
                }, t)));
        }, [t, e?.showExtrasHintTimestamp]),
        (0, _.Ay)(() => {
            let n = e?.showExtrasHintTimestamp;
            return (
                null != n &&
                    Date.now() - n < t &&
                    (a(!0),
                    (l.current = setTimeout(() => {
                        a(!1);
                    }, t))),
                () => {
                    null != l.current && clearTimeout(l.current);
                }
            );
        }),
        i && s
    );
}
let R = 8e3;
function M(e) {
    let { children: t, widgetId: n } = e,
        r = (0, l.bG)([x.A], () => x.A.getWidget(n), [n]);
    return N(r, R)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(E.A, {
                      className: T.Z,
                      children: (0, i.jsx)(u.D, {
                          className: T.SM,
                          onClick: () => {
                              null != r &&
                                  (f.A.setInputLocked(!1, S.A.getTargetPID()),
                                  (0, A.YX)(r.type, { type: A.Z5.KEYBIND_HINT, value: A.IP.OVERLAY_UNLOCKED }));
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
        r = n ? C.intl.string(C.t.q2B3rh) : C.intl.string(C.t.JKGi6o);
    return (0, b.A)()
        ? null
        : (0, i.jsx)(d.m, {
              text: r,
              "aria-label": r,
              children: (0, i.jsx)(u.D, {
                  className: s()(T.x6, n && T.vu),
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
        r = n ? C.intl.string(C.t.cSu80j) : C.intl.string(C.t.cM8Vnm),
        a = (0, b.A)();
    return (0, i.jsx)(d.m, {
        text: r,
        "aria-label": r,
        asContainer: !0,
        children: (0, i.jsx)(u.D, {
            className: s()(T.x6, n && T.vu),
            onClick: () => {
                a || (0, g.v0)(t);
            },
            children: (0, i.jsx)(p.q, {
                size: "xxs",
                color: n ? o.A.colors.BACKGROUND_BRAND : o.A.colors.INTERACTIVE_TEXT_ACTIVE,
            }),
        }),
    });
}
