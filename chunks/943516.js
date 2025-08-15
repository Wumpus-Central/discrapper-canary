A.d(t, {
    YP: () => p,
    ZP: () => b,
    aN: () => m,
});
var n = A(255367);
A(73800);
var r = A(512722),
    a = A.n(r),
    l = A(866442),
    i = A(399606),
    o = A(755721),
    s = A(481060),
    c = A(485386),
    d = A(470209),
    u = A(981631),
    g = A(388032),
    f = A(340036);
function p() {
    return {
        name: "",
        color: u.p6O,
    };
}
function h(e) {
    let t,
        { onRemove: A, role: r } = e;
    return (
        (t =
            null != r
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(s.nn4, { children: g.intl.format(g.t["94dBOT"], { color: (0, l.Rf)(r.color) }) }),
                          (0, n.jsx)("div", {
                              className: f.attachedRoleColor,
                              style: { backgroundColor: (0, l.Rf)(r.color) },
                          }),
                          (0, n.jsx)(s.LZC, {
                              size: 8,
                              horizontal: !0,
                          }),
                          (0, n.jsx)(s.Text, {
                              variant: "text-md/normal",
                              color: "text-default",
                              children: r.name,
                          }),
                          null != A &&
                              (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(s.LZC, {
                                          size: 12,
                                          horizontal: !0,
                                      }),
                                      (0, n.jsx)(s.P3F, {
                                          "aria-label": g.intl.string(g.t.tO2HIy),
                                          onClick: A,
                                          className: f.attachedRoleClose,
                                          children: (0, n.jsx)(s.Dio, {
                                              size: "xs",
                                              color: "currentColor",
                                              className: f.attachedRoleCloseIcon,
                                          }),
                                      }),
                                  ],
                              }),
                      ],
                  })
                : (0, n.jsx)(s.$jN, { type: s.$jN.Type.PULSING_ELLIPSIS })),
        (0, n.jsx)("div", {
            className: f.attachedRoleContainer,
            children: t,
        })
    );
}
function m() {
    return (0, n.jsx)(s.Mgn, {
        size: "xs",
        color: "currentColor",
        className: f.warningIcon,
    });
}
function v(e) {
    let { roleName: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(s.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: g.intl.format(g.t.i2x5aW, {
                    roleName: t,
                    emphasisHook: (e) =>
                        (0, n.jsx)(s.Text, {
                            tag: "span",
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: e,
                        }),
                }),
            }),
            (0, n.jsxs)(s.X6q, {
                className: f.detachWarningHeading,
                variant: "text-md/medium",
                color: "text-default",
                children: [
                    (0, n.jsx)(s.I9k, {
                        size: "sm",
                        color: "currentColor",
                    }),
                    (0, n.jsx)(s.LZC, {
                        horizontal: !0,
                        size: 8,
                    }),
                    g.intl.string(g.t.KWx4HR),
                ],
            }),
            (0, n.jsx)(s.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: g.intl.string(g.t.hNHNpq),
            }),
            (0, n.jsxs)(s.X6q, {
                className: f.detachWarningHeading,
                variant: "text-md/medium",
                color: "text-default",
                children: [
                    (0, n.jsx)(s.XHJ, {
                        size: "sm",
                        color: "currentColor",
                    }),
                    (0, n.jsx)(s.LZC, {
                        horizontal: !0,
                        size: 8,
                    }),
                    g.intl.string(g.t.WIPKAQ),
                ],
            }),
            (0, n.jsx)(s.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: g.intl.string(g.t["40shJS"]),
            }),
        ],
    });
}
function b(e) {
    let { newRoleParams: t, setNewRoleParams: r, guildId: l, productId: u, listingRoleId: p, error: b } = e,
        C = (0, i.e7)([c.Z], () => (null != p ? c.Z.getRole(l, p) : void 0));
    return null === t
        ? (0, n.jsxs)(s.xJW, {
              title: (0, n.jsxs)("div", {
                  className: f.warningTitle,
                  children: [
                      (0, n.jsx)(m, {}),
                      (0, n.jsx)(s.LZC, {
                          horizontal: !0,
                          size: 4,
                      }),
                      g.intl.string(g.t.ovXIrK),
                  ],
              }),
              tag: "label",
              error: b,
              titleClassName: f.roleHeader,
              children: [
                  (0, n.jsx)(s.Text, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: g.intl.string(g.t.H7coX1),
                  }),
                  (0, n.jsx)(s.LZC, { size: 8 }),
                  (0, n.jsxs)("div", {
                      className: f.reattachRoleRow,
                      children: [
                          (0, n.jsx)(h, {
                              role: C,
                              onRemove: void 0,
                          }),
                          (0, n.jsx)(s.LZC, {
                              horizontal: !0,
                              size: 8,
                          }),
                          (0, n.jsxs)(o.zx, {
                              innerClassName: f.restoreDetachedRoleButtonInner,
                              color: o.zx.Colors.PRIMARY,
                              onClick: () => {
                                  r(void 0);
                              },
                              children: [
                                  (0, n.jsx)(s.Text, {
                                      variant: "text-md/normal",
                                      color: "none",
                                      children: g.intl.string(g.t.KkRpFh),
                                  }),
                                  (0, n.jsx)(s.LZC, {
                                      horizontal: !0,
                                      size: 8,
                                  }),
                                  (0, n.jsx)(s.UEU, {
                                      size: "xs",
                                      color: "currentColor",
                                  }),
                              ],
                          }),
                      ],
                  }),
              ],
          })
        : null != p
          ? (0, n.jsxs)(s.xJW, {
                title: g.intl.string(g.t.zIg9t7),
                tag: "label",
                error: b,
                titleClassName: f.roleHeader,
                children: [
                    (0, n.jsx)(s.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: g.intl.string(g.t.OfuEkJ),
                    }),
                    (0, n.jsx)(s.LZC, { size: 8 }),
                    (0, n.jsx)(h, {
                        role: C,
                        onRemove: () => {
                            a()(null != u, "productId cannot be null"),
                                a()(null != C, "no role attached"),
                                (function (e) {
                                    let { onConfirm: t, roleName: r } = e;
                                    (0, s.ZDy)(async () => {
                                        let { default: e } = await Promise.resolve().then(A.bind(A, 776045));
                                        return (A) =>
                                            (0, n.jsx)(
                                                e,
                                                (function (e) {
                                                    for (var t = 1; t < arguments.length; t++) {
                                                        var A = null != arguments[t] ? arguments[t] : {},
                                                            n = Object.keys(A);
                                                        "function" == typeof Object.getOwnPropertySymbols &&
                                                            (n = n.concat(
                                                                Object.getOwnPropertySymbols(A).filter(function (e) {
                                                                    return Object.getOwnPropertyDescriptor(A, e)
                                                                        .enumerable;
                                                                }),
                                                            )),
                                                            n.forEach(function (t) {
                                                                var n;
                                                                (n = A[t]),
                                                                    t in e
                                                                        ? Object.defineProperty(e, t, {
                                                                              value: n,
                                                                              enumerable: !0,
                                                                              configurable: !0,
                                                                              writable: !0,
                                                                          })
                                                                        : (e[t] = n);
                                                            });
                                                    }
                                                    return e;
                                                })(
                                                    {
                                                        title: g.intl.string(g.t.Y3Hi3d),
                                                        body: (0, n.jsx)(v, { roleName: r }),
                                                        cta: g.intl.string(g.t.VawZV1),
                                                        closeLabel: g.intl.string(g.t["6y+3Bw"]),
                                                        onConfirm: t,
                                                    },
                                                    A,
                                                ),
                                            );
                                    });
                                })({
                                    roleName: C.name,
                                    onConfirm: () => r(null),
                                });
                        },
                    }),
                ],
            })
          : (a()(null != t, "newRoleParams cannot be null at this point"),
            (0, n.jsxs)(s.xJW, {
                required: !0,
                title: g.intl.string(g.t.xZvFpK),
                tag: "label",
                error: b,
                titleClassName: f.roleHeader,
                children: [
                    (0, n.jsx)(s.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: g.intl.string(g.t.CllC5u),
                    }),
                    (0, n.jsx)(s.LZC, { size: 8 }),
                    (0, n.jsx)(d.Z, {
                        newRoleParams: t,
                        setNewRoleParams: r,
                    }),
                ],
            }));
}
