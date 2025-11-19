A.d(t, {
    YP: () => p,
    ZP: () => q,
    aN: () => h,
});
var n = A(54381);
A(473749);
var r = A(512722),
    a = A.n(r),
    i = A(866442),
    l = A(399606),
    o = A(159691),
    s = A(481060),
    d = A(485386),
    u = A(470209),
    c = A(981631),
    g = A(388032),
    f = A(340036);
function p() {
    return {
        name: "",
        color: c.p6O,
    };
}
function m(e) {
    let t,
        { onRemove: A, role: r } = e;
    return null != r
        ? (0, n.jsx)(s.QSK, {
              items: [
                  {
                      id: r.id,
                      label: r.name,
                      icon: {
                          type: "role",
                          color: (0, i.Rf)(r.color),
                      },
                  },
              ],
              onRemove: A,
          })
        : ((t = (0, n.jsx)(s.$jN, { type: s.$jN.Type.PULSING_ELLIPSIS })),
          (0, n.jsx)("div", {
              className: f.attachedRoleContainer,
              children: t,
          }));
}
function h() {
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
                children: g.intl.format(g.t.i2x5aY, {
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
            (0, n.jsxs)(s.Heading, {
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
                    g.intl.string(g.t.KWx4HY),
                ],
            }),
            (0, n.jsx)(s.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: g.intl.string(g.t.hNHNph),
            }),
            (0, n.jsxs)(s.Heading, {
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
                    g.intl.string(g.t.WIPKAb),
                ],
            }),
            (0, n.jsx)(s.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: g.intl.string(g.t["40shJX"]),
            }),
        ],
    });
}
function q(e) {
    let { newRoleParams: t, setNewRoleParams: r, guildId: i, productId: c, listingRoleId: f, error: p } = e,
        h = (0, l.e7)([d.Z], () => (null != f ? d.Z.getRole(i, f) : void 0));
    return null === t
        ? (0, n.jsx)(s.gNt, {
              label: g.intl.string(g.t.ovXIrP),
              description: g.intl.string(g.t["H7coX+"]),
              children: (0, n.jsxs)(s.NIo, {
                  children: [
                      (0, n.jsx)(m, {
                          role: h,
                          onRemove: void 0,
                      }),
                      (0, n.jsx)(o.zxk, {
                          text: g.intl.string(g.t.KkRpFi),
                          icon: s.UEU,
                          iconPosition: "end",
                          variant: "secondary",
                          onClick: () => {
                              r(void 0);
                          },
                      }),
                  ],
              }),
          })
        : null != f
          ? (0, n.jsx)(s.gNt, {
                label: g.intl.string(g.t.zIg9tw),
                description: g.intl.string(g.t.OfuEkP),
                errorMessage: p,
                children: (0, n.jsx)(m, {
                    role: h,
                    onRemove: () => {
                        a()(null != c, "productId cannot be null"),
                            a()(null != h, "no role attached"),
                            (function (e) {
                                let { onConfirm: t, roleName: r } = e;
                                (0, s.ZDy)(async () => {
                                    let { default: e } = await A.e("73322").then(A.bind(A, 776045));
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
                                                                return Object.getOwnPropertyDescriptor(A, e).enumerable;
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
                                                    title: g.intl.string(g.t.Y3Hi3R),
                                                    body: (0, n.jsx)(v, { roleName: r }),
                                                    cta: g.intl.string(g.t.VawZVx),
                                                    closeLabel: g.intl.string(g.t["6y+3Bw"]),
                                                    onConfirm: t,
                                                },
                                                A,
                                            ),
                                        );
                                });
                            })({
                                roleName: h.name,
                                onConfirm: () => r(null),
                            });
                    },
                }),
            })
          : (a()(null != t, "newRoleParams cannot be null at this point"),
            (0, n.jsx)(s.gNt, {
                required: !0,
                label: g.intl.string(g.t.xZvFpA),
                errorMessage: p,
                children: (0, n.jsx)(u.Z, {
                    newRoleParams: t,
                    setNewRoleParams: r,
                }),
            }));
}
