n.d(t, { CS: () => D, GQ: () => k, O0: () => P, Pl: () => w, RE: () => _, X1: () => N, hM: () => z, we: () => M });
var i = n(477900),
    r = n(582128),
    l = n(503698),
    s = n.n(l),
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
    y = n(660183),
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
    let n = r.useRef(e?.showExtrasHintTimestamp),
        [i, l] = r.useState(!1),
        s = (0, T.A)(),
        a = r.useRef(void 0);
    return (
        r.useEffect(() => {
            let i = e?.showExtrasHintTimestamp;
            i !== n.current &&
                ((n.current = i),
                l(!0),
                (a.current = setTimeout(() => {
                    l(!1);
                }, t)));
        }, [t, e?.showExtrasHintTimestamp]),
        (0, A.Ay)(() => {
            let n = e?.showExtrasHintTimestamp;
            return (
                null != n &&
                    Date.now() - n < t &&
                    (l(!0),
                    (a.current = setTimeout(() => {
                        l(!1);
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
        r = (0, a.bG)([E.A], () => E.A.getWidget(n), [n]);
    return O(r, R)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(I.A, {
                      className: b.Z,
                      children: (0, i.jsx)(u.D, {
                          className: b.SM,
                          onClick: () => {
                              null != r &&
                                  (x.A.setInputLocked(!1, v.A.getTargetPID()),
                                  (0, S.YX)(r.type, { type: S.Z5.KEYBIND_HINT, value: S.IP.OVERLAY_UNLOCKED }));
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
        r = n ? y.intl.string(y.t.q2B3rh) : y.intl.string(y.t.JKGi6o);
    return (0, T.A)()
        ? null
        : (0, i.jsx)(c.m, {
              text: r,
              "aria-label": r,
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
        r = n ? y.intl.string(y.t.cSu80j) : y.intl.string(y.t.cM8Vnm),
        l = (0, T.A)();
    return (0, i.jsx)(c.m, {
        text: r,
        "aria-label": r,
        asContainer: !0,
        children: (0, i.jsx)(u.D, {
            className: s()(b.x6, n && b.vu),
            onClick: () => {
                l || (0, f.v0)(t);
            },
            children: (0, i.jsx)(p.q, {
                size: "xxs",
                color: n ? o.A.colors.BACKGROUND_BRAND : o.A.colors.INTERACTIVE_TEXT_ACTIVE,
            }),
        }),
    });
}
