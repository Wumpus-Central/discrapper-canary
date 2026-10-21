n.d(t, { CS: () => D, GQ: () => k, O0: () => P, Pl: () => w, RE: () => _, X1: () => N, hM: () => z, we: () => M });
var i = n(477900),
    l = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(17928),
    o = n(661531),
    d = n(834730),
    u = n(939249),
    c = n(866665),
    h = n(625903),
    m = n(952270),
    g = n(31300),
    p = n(788120),
    f = n(391973),
    x = n(684013),
    A = n(964486),
    E = n(32584),
    S = n(810412),
    I = n(302614),
    v = n(233741),
    j = n(119191),
    C = n(581730),
    T = n(481484),
    y = n(105292),
    b = n(408454);
function w(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", {
        className: b.oB,
        children: (0, i.jsx)(d.E, { variant: "text-xs/semibold", color: "text-strong", children: t }),
    });
}
let N = 7e3;
function _(e, t) {
    return O(
        (0, a.bG)([E.A], () => E.A.getWidget(e), [e]),
        t,
    );
}
function O(e, t) {
    let n = l.useRef(e?.showExtrasHintTimestamp),
        [i, r] = l.useState(!1),
        s = (0, T.A)(),
        a = l.useRef(void 0);
    return (
        l.useEffect(() => {
            let i = e?.showExtrasHintTimestamp;
            i !== n.current &&
                ((n.current = i),
                r(!0),
                (a.current = setTimeout(() => {
                    r(!1);
                }, t)));
        }, [t, e?.showExtrasHintTimestamp]),
        (0, A.Ay)(() => {
            let n = e?.showExtrasHintTimestamp;
            return (
                null != n &&
                    Date.now() - n < t &&
                    (r(!0),
                    (a.current = setTimeout(() => {
                        r(!1);
                    }, t))),
                () => {
                    null != a.current && clearTimeout(a.current);
                }
            );
        }),
        i && s
    );
}
let R = 8e3;
function M(e) {
    let { children: t, widgetId: n } = e,
        l = (0, a.bG)([E.A], () => E.A.getWidget(n), [n]);
    return O(l, R)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(I.A, {
                      className: b.Z,
                      children: (0, i.jsx)(u.D, {
                          className: b.SM,
                          onClick: () => {
                              null != l &&
                                  (x.A.setInputLocked(!1, v.A.getTargetPID()),
                                  (0, S.YX)(l.type, { type: S.Z5.KEYBIND_HINT, value: S.IP.OVERLAY_UNLOCKED }));
                          },
                          children: (0, i.jsx)(d.E, {
                              variant: "text-xs/semibold",
                              color: "text-strong",
                              children: (0, j.sI)((0, C.Jn)(), y.t["1XA04X"], {
                                  useFlexboxLayout: !0,
                                  highlightAdminWarningIfElevated: !1,
                                  keybindClassName: b.P,
                              }),
                          }),
                      }),
                  }),
                  (0, i.jsx)("div", { className: b.Xk }),
              ],
          })
        : (0, i.jsx)("div", {
              className: b.oB,
              children: (0, i.jsx)(d.E, { variant: "text-xs/semibold", color: "text-strong", children: t }),
          });
}
function D(e) {
    let { onClick: t } = e;
    if ((0, T.A)()) return null;
    let n = y.intl.string(y.t["3D5yo/"]);
    return (0, i.jsx)(c.m, {
        text: n,
        "aria-label": n,
        children: (0, i.jsx)(u.D, {
            className: b.x6,
            onClick: t,
            children: (0, i.jsx)(h.SettingsIcon, { size: "xxs", color: o.A.colors.INTERACTIVE_TEXT_ACTIVE }),
        }),
    });
}
function z(e) {
    let { label: t, onClick: n } = e;
    return (0, T.A)()
        ? null
        : (0, i.jsx)(c.m, {
              text: t,
              "aria-label": t,
              children: (0, i.jsx)(u.D, {
                  className: b.x6,
                  onClick: n,
                  children: (0, i.jsx)(m.EyeSlashIcon, { size: "xxs", color: o.A.colors.INTERACTIVE_TEXT_ACTIVE }),
              }),
          });
}
function k(e) {
    let { widgetId: t, showAllStreams: n } = e,
        l = n ? y.intl.string(y.t.q2B3rh) : y.intl.string(y.t.JKGi6o);
    return (0, T.A)()
        ? null
        : (0, i.jsx)(c.m, {
              text: l,
              "aria-label": l,
              children: (0, i.jsx)(u.D, {
                  className: s()(b.x6, n && b.vu),
                  onClick: function () {
                      (0, f.cC)(t, { showAllStreams: !n });
                  },
                  children: (0, i.jsx)(g.k, {
                      size: "xxs",
                      color: n ? o.A.colors.BACKGROUND_BRAND : o.A.colors.INTERACTIVE_TEXT_ACTIVE,
                  }),
              }),
          });
}
function P(e) {
    let { id: t, pinned: n } = e,
        l = n ? y.intl.string(y.t.cSu80j) : y.intl.string(y.t.cM8Vnm),
        r = (0, T.A)();
    return (0, i.jsx)(c.m, {
        text: l,
        "aria-label": l,
        asContainer: !0,
        children: (0, i.jsx)(u.D, {
            className: s()(b.x6, n && b.vu),
            onClick: () => {
                r || (0, f.v0)(t);
            },
            children: (0, i.jsx)(p.q, {
                size: "xxs",
                color: n ? o.A.colors.BACKGROUND_BRAND : o.A.colors.INTERACTIVE_TEXT_ACTIVE,
            }),
        }),
    });
}
