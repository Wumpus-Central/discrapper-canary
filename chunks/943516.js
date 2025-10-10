A.d(t, {
    YP: () => p,
    ZP: () => q,
    aN: () => h,
});
var r = A(951288);
A(647438);
var n = A(512722),
    a = A.n(n),
    l = A(866442),
    i = A(399606),
    o = A(159691),
    s = A(481060),
    d = A(485386),
    c = A(470209),
    u = A(981631),
    g = A(388032),
    f = A(340036);
function p() {
    return {
        name: "",
        color: u.p6O,
    };
}
function m(e) {
    let t,
        { onRemove: A, role: n } = e;
    return (
        (t =
            null != n
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(s.nn4, { children: g.intl.format(g.t["94dBOT"], { color: (0, l.Rf)(n.color) }) }),
                          (0, r.jsx)("div", {
                              className: f.attachedRoleColor,
                              style: { backgroundColor: (0, l.Rf)(n.color) },
                          }),
                          (0, r.jsx)(s.LZC, {
                              size: 8,
                              horizontal: !0,
                          }),
                          (0, r.jsx)(s.Text, {
                              variant: "text-md/normal",
                              color: "text-default",
                              children: n.name,
                          }),
                          null != A &&
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(s.LZC, {
                                          size: 12,
                                          horizontal: !0,
                                      }),
                                      (0, r.jsx)(s.P3F, {
                                          "aria-label": g.intl.string(g.t.tO2HIy),
                                          onClick: A,
                                          className: f.attachedRoleClose,
                                          children: (0, r.jsx)(s.Dio, {
                                              size: "xs",
                                              color: "currentColor",
                                              className: f.attachedRoleCloseIcon,
                                          }),
                                      }),
                                  ],
                              }),
                      ],
                  })
                : (0, r.jsx)(s.$jN, { type: s.$jN.Type.PULSING_ELLIPSIS })),
        (0, r.jsx)("div", {
            className: f.attachedRoleContainer,
            children: t,
        })
    );
}
function h() {
    return (0, r.jsx)(s.Mgn, {
        size: "xs",
        color: "currentColor",
        className: f.warningIcon,
    });
}
function v(e) {
    let { roleName: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: g.intl.format(g.t.i2x5aW, {
                    roleName: t,
                    emphasisHook: (e) =>
                        (0, r.jsx)(s.Text, {
                            tag: "span",
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: e,
                        }),
                }),
            }),
            (0, r.jsxs)(s.X6q, {
                className: f.detachWarningHeading,
                variant: "text-md/medium",
                color: "text-default",
                children: [
                    (0, r.jsx)(s.I9k, {
                        size: "sm",
                        color: "currentColor",
                    }),
                    (0, r.jsx)(s.LZC, {
                        horizontal: !0,
                        size: 8,
                    }),
                    g.intl.string(g.t.KWx4HR),
                ],
            }),
            (0, r.jsx)(s.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: g.intl.string(g.t.hNHNpq),
            }),
            (0, r.jsxs)(s.X6q, {
                className: f.detachWarningHeading,
                variant: "text-md/medium",
                color: "text-default",
                children: [
                    (0, r.jsx)(s.XHJ, {
                        size: "sm",
                        color: "currentColor",
                    }),
                    (0, r.jsx)(s.LZC, {
                        horizontal: !0,
                        size: 8,
                    }),
                    g.intl.string(g.t.WIPKAQ),
                ],
            }),
            (0, r.jsx)(s.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: g.intl.string(g.t["40shJS"]),
            }),
        ],
    });
}
function q(e) {
    let { newRoleParams: t, setNewRoleParams: n, guildId: l, productId: u, listingRoleId: p, error: q } = e,
        b = (0, i.e7)([d.Z], () => (null != p ? d.Z.getRole(l, p) : void 0));
    return null === t
        ? (0, r.jsxs)(s.xJW, {
              title: (0, r.jsxs)("div", {
                  className: f.warningTitle,
                  children: [
                      (0, r.jsx)(h, {}),
                      (0, r.jsx)(s.LZC, {
                          horizontal: !0,
                          size: 4,
                      }),
                      g.intl.string(g.t.ovXIrK),
                  ],
              }),
              error: q,
              titleClassName: f.roleHeader,
              children: [
                  (0, r.jsx)(s.Text, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: g.intl.string(g.t.H7coX1),
                  }),
                  (0, r.jsx)(s.LZC, { size: 8 }),
                  (0, r.jsxs)("div", {
                      className: f.reattachRoleRow,
                      children: [
                          (0, r.jsx)(m, {
                              role: b,
                              onRemove: void 0,
                          }),
                          (0, r.jsx)(s.LZC, {
                              horizontal: !0,
                              size: 8,
                          }),
                          (0, r.jsx)(o.zxk, {
                              text: g.intl.string(g.t.KkRpFh),
                              icon: s.UEU,
                              iconPosition: "end",
                              variant: "secondary",
                              onClick: () => {
                                  n(void 0);
                              },
                          }),
                      ],
                  }),
              ],
          })
        : null != p
          ? (0, r.jsxs)(s.xJW, {
                title: g.intl.string(g.t.zIg9t7),
                error: q,
                titleClassName: f.roleHeader,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: g.intl.string(g.t.OfuEkJ),
                    }),
                    (0, r.jsx)(s.LZC, { size: 8 }),
                    (0, r.jsx)(m, {
                        role: b,
                        onRemove: () => {
                            a()(null != u, "productId cannot be null"),
                                a()(null != b, "no role attached"),
                                (function (e) {
                                    let { onConfirm: t, roleName: n } = e;
                                    (0, s.ZDy)(async () => {
                                        let { default: e } = await A.e("73322").then(A.bind(A, 776045));
                                        return (A) =>
                                            (0, r.jsx)(
                                                e,
                                                (function (e) {
                                                    for (var t = 1; t < arguments.length; t++) {
                                                        var A = null != arguments[t] ? arguments[t] : {},
                                                            r = Object.keys(A);
                                                        "function" == typeof Object.getOwnPropertySymbols &&
                                                            (r = r.concat(
                                                                Object.getOwnPropertySymbols(A).filter(function (e) {
                                                                    return Object.getOwnPropertyDescriptor(A, e)
                                                                        .enumerable;
                                                                }),
                                                            )),
                                                            r.forEach(function (t) {
                                                                var r;
                                                                (r = A[t]),
                                                                    t in e
                                                                        ? Object.defineProperty(e, t, {
                                                                              value: r,
                                                                              enumerable: !0,
                                                                              configurable: !0,
                                                                              writable: !0,
                                                                          })
                                                                        : (e[t] = r);
                                                            });
                                                    }
                                                    return e;
                                                })(
                                                    {
                                                        title: g.intl.string(g.t.Y3Hi3d),
                                                        body: (0, r.jsx)(v, { roleName: n }),
                                                        cta: g.intl.string(g.t.VawZV1),
                                                        closeLabel: g.intl.string(g.t["6y+3Bw"]),
                                                        onConfirm: t,
                                                    },
                                                    A,
                                                ),
                                            );
                                    });
                                })({
                                    roleName: b.name,
                                    onConfirm: () => n(null),
                                });
                        },
                    }),
                ],
            })
          : (a()(null != t, "newRoleParams cannot be null at this point"),
            (0, r.jsxs)(s.xJW, {
                required: !0,
                title: g.intl.string(g.t.xZvFpK),
                error: q,
                titleClassName: f.roleHeader,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: g.intl.string(g.t.CllC5u),
                    }),
                    (0, r.jsx)(s.LZC, { size: 8 }),
                    (0, r.jsx)(c.Z, {
                        newRoleParams: t,
                        setNewRoleParams: n,
                    }),
                ],
            }));
}
