var i = n(477900),
    r = n(582128),
    l = n(503698),
    s = n.n(l),
    a = n(855986),
    o = n(646514),
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
    E = n(83880),
    S = n(810412),
    I = n(302614),
    v = n(887287),
    j = n(119191),
    C = n(581730),
    y = n(481484),
    T = n(792996),
    b = n(408454);
function _(e, t) {
    let n = r.useRef(e?.showExtrasHintTimestamp),
        [i, l] = r.useState(!1),
        s = (0, y.A)(),
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
n.d(
    t,
    {},
    {
        CS: function (e) {
            let { onClick: t } = e;
            if ((0, y.A)()) return null;
            let n = T.intl.string(T.t["3D5yo/"]);
            return (0, i.jsx)(c.m, {
                text: n,
                "aria-label": n,
                children: (0, i.jsx)(u.D, {
                    className: b.x6,
                    onClick: t,
                    children: (0, i.jsx)(h.SettingsIcon, { size: "xxs", color: o.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                }),
            });
        },
        GQ: function (e) {
            let { widgetId: t, showAllStreams: n } = e,
                r = n ? T.intl.string(T.t.q2B3rh) : T.intl.string(T.t.JKGi6o);
            return (0, y.A)()
                ? null
                : (0, i.jsx)(c.m, {
                      text: r,
                      "aria-label": r,
                      children: (0, i.jsx)(u.D, {
                          className: s()(b.x6, n && b.vu),
                          onClick: function () {
                              (0, f.cC)(t, { showAllStreams: !n });
                          },
                          children: (0, i.jsx)(g.ScreenIcon, {
                              size: "xxs",
                              color: n ? o.A.colors.BACKGROUND_BRAND : o.A.colors.INTERACTIVE_TEXT_ACTIVE,
                          }),
                      }),
                  });
        },
        O0: function (e) {
            let { id: t, pinned: n } = e,
                r = n ? T.intl.string(T.t.cSu80j) : T.intl.string(T.t.cM8Vnm),
                l = (0, y.A)();
            return (0, i.jsx)(c.m, {
                text: r,
                "aria-label": r,
                asContainer: !0,
                children: (0, i.jsx)(u.D, {
                    className: s()(b.x6, n && b.vu),
                    onClick: () => {
                        l || (0, f.v0)(t);
                    },
                    children: (0, i.jsx)(p.PinUprightIcon, {
                        size: "xxs",
                        color: n ? o.A.colors.BACKGROUND_BRAND : o.A.colors.INTERACTIVE_TEXT_ACTIVE,
                    }),
                }),
            });
        },
        Pl: function (e) {
            let { children: t } = e;
            return (0, i.jsx)("div", {
                className: b.oB,
                children: (0, i.jsx)(d.E, { variant: "body-xs/semibold", color: "text-strong", children: t }),
            });
        },
        RE: function (e, t) {
            return _(
                (0, a.bG)([E.A], () => E.A.getWidget(e), [e]),
                t,
            );
        },
        hM: function (e) {
            let { label: t, onClick: n } = e;
            return (0, y.A)()
                ? null
                : (0, i.jsx)(c.m, {
                      text: t,
                      "aria-label": t,
                      children: (0, i.jsx)(u.D, {
                          className: b.x6,
                          onClick: n,
                          children: (0, i.jsx)(m.EyeSlashIcon, {
                              size: "xxs",
                              color: o.A.colors.INTERACTIVE_TEXT_ACTIVE,
                          }),
                      }),
                  });
        },
        we: function (e) {
            let { children: t, widgetId: n } = e,
                r = (0, a.bG)([E.A], () => E.A.getWidget(n), [n]);
            return _(r, 8e3)
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
                                      variant: "body-xs/semibold",
                                      color: "text-strong",
                                      children: (0, j.sI)((0, C.Jn)(), T.t["1XA04X"], {
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
                      children: (0, i.jsx)(d.E, { variant: "body-xs/semibold", color: "text-strong", children: t }),
                  });
        },
    },
);
