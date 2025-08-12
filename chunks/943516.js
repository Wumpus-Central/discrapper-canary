A.d(t, {
    YP: () => p,
    ZP: () => q,
    aN: () => h,
});
var n = A(255367);
A(73800);
var r = A(512722),
    l = A.n(r),
    a = A(866442),
    o = A(399606),
    i = A(755721),
    s = A(481060),
    d = A(485386),
    c = A(470209),
    u = A(981631),
    f = A(388032),
    g = A(392035);
function p() {
    return {
        name: "",
        color: u.p6O,
    };
}
function m(e) {
    let t,
        { onRemove: A, role: r } = e;
    return (
        (t =
            null != r
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(s.nn4, { children: f.intl.format(f.t["94dBOT"], { color: (0, a.Rf)(r.color) }) }),
                          (0, n.jsx)("div", {
                              className: g.attachedRoleColor,
                              style: { backgroundColor: (0, a.Rf)(r.color) },
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
                                          "aria-label": f.intl.string(f.t.tO2HIy),
                                          onClick: A,
                                          className: g.attachedRoleClose,
                                          children: (0, n.jsx)(s.Dio, {
                                              size: "xs",
                                              color: "currentColor",
                                              className: g.attachedRoleCloseIcon,
                                          }),
                                      }),
                                  ],
                              }),
                      ],
                  })
                : (0, n.jsx)(s.$jN, { type: s.$jN.Type.PULSING_ELLIPSIS })),
        (0, n.jsx)("div", {
            className: g.attachedRoleContainer,
            children: t,
        })
    );
}
function h() {
    return (0, n.jsx)(s.Mgn, {
        size: "xs",
        color: "currentColor",
        className: g.warningIcon,
    });
}
function C(e) {
    let { roleName: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(s.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: f.intl.format(f.t.i2x5aW, {
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
                className: g.detachWarningHeading,
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
                    f.intl.string(f.t.KWx4HR),
                ],
            }),
            (0, n.jsx)(s.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: f.intl.string(f.t.hNHNpq),
            }),
            (0, n.jsxs)(s.X6q, {
                className: g.detachWarningHeading,
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
                    f.intl.string(f.t.WIPKAQ),
                ],
            }),
            (0, n.jsx)(s.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: f.intl.string(f.t["40shJS"]),
            }),
        ],
    });
}
function q(e) {
    let { newRoleParams: t, setNewRoleParams: r, guildId: a, productId: u, listingRoleId: p, error: q } = e,
        b = (0, o.e7)([d.Z], () => (null != p ? d.Z.getRole(a, p) : void 0));
    return null === t
        ? (0, n.jsxs)(s.xJW, {
              title: (0, n.jsxs)("div", {
                  className: g.warningTitle,
                  children: [
                      (0, n.jsx)(h, {}),
                      (0, n.jsx)(s.LZC, {
                          horizontal: !0,
                          size: 4,
                      }),
                      f.intl.string(f.t.ovXIrK),
                  ],
              }),
              tag: "label",
              error: q,
              titleClassName: g.roleHeader,
              children: [
                  (0, n.jsx)(s.Text, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: f.intl.string(f.t.H7coX1),
                  }),
                  (0, n.jsx)(s.LZC, { size: 8 }),
                  (0, n.jsxs)("div", {
                      className: g.reattachRoleRow,
                      children: [
                          (0, n.jsx)(m, {
                              role: b,
                              onRemove: void 0,
                          }),
                          (0, n.jsx)(s.LZC, {
                              horizontal: !0,
                              size: 8,
                          }),
                          (0, n.jsxs)(i.zx, {
                              innerClassName: g.restoreDetachedRoleButtonInner,
                              color: i.zx.Colors.PRIMARY,
                              onClick: () => {
                                  r(void 0);
                              },
                              children: [
                                  (0, n.jsx)(s.Text, {
                                      variant: "text-md/normal",
                                      color: "none",
                                      children: f.intl.string(f.t.KkRpFh),
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
                title: f.intl.string(f.t.zIg9t7),
                tag: "label",
                error: q,
                titleClassName: g.roleHeader,
                children: [
                    (0, n.jsx)(s.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: f.intl.string(f.t.OfuEkJ),
                    }),
                    (0, n.jsx)(s.LZC, { size: 8 }),
                    (0, n.jsx)(m, {
                        role: b,
                        onRemove: () => {
                            l()(null != u, "productId cannot be null"),
                                l()(null != b, "no role attached"),
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
                                                        title: f.intl.string(f.t.Y3Hi3d),
                                                        body: (0, n.jsx)(C, { roleName: r }),
                                                        cta: f.intl.string(f.t.VawZV1),
                                                        closeLabel: f.intl.string(f.t["6y+3Bw"]),
                                                        onConfirm: t,
                                                    },
                                                    A,
                                                ),
                                            );
                                    });
                                })({
                                    roleName: b.name,
                                    onConfirm: () => r(null),
                                });
                        },
                    }),
                ],
            })
          : (l()(null != t, "newRoleParams cannot be null at this point"),
            (0, n.jsxs)(s.xJW, {
                required: !0,
                title: f.intl.string(f.t.xZvFpK),
                tag: "label",
                error: q,
                titleClassName: g.roleHeader,
                children: [
                    (0, n.jsx)(s.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: f.intl.string(f.t.CllC5u),
                    }),
                    (0, n.jsx)(s.LZC, { size: 8 }),
                    (0, n.jsx)(c.Z, {
                        newRoleParams: t,
                        setNewRoleParams: r,
                    }),
                ],
            }));
}
