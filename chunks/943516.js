A.d(t, {
    YP: () => g,
    ZP: () => b,
    aN: () => h
});
var n = A(255367);
A(73800);
var r = A(512722),
    a = A.n(r),
    l = A(866442),
    i = A(399606),
    o = A(481060),
    s = A(485386),
    c = A(470209),
    d = A(981631),
    u = A(388032),
    f = A(165639);
function g() {
    return {
        name: '',
        color: d.p6O
    };
}
function p(e) {
    let t,
        { onRemove: A, role: r } = e;
    return (
        (t =
            null != r
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(o.nn4, { children: u.intl.format(u.t['94dBOT'], { color: (0, l.Rf)(r.color) }) }),
                          (0, n.jsx)('div', {
                              className: f.attachedRoleColor,
                              style: { backgroundColor: (0, l.Rf)(r.color) }
                          }),
                          (0, n.jsx)(o.LZC, {
                              size: 8,
                              horizontal: !0
                          }),
                          (0, n.jsx)(o.Text, {
                              variant: 'text-md/normal',
                              color: 'text-default',
                              children: r.name
                          }),
                          null != A &&
                              (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(o.LZC, {
                                          size: 12,
                                          horizontal: !0
                                      }),
                                      (0, n.jsx)(o.P3F, {
                                          'aria-label': u.intl.string(u.t.tO2HIy),
                                          onClick: A,
                                          className: f.attachedRoleClose,
                                          children: (0, n.jsx)(o.Dio, {
                                              size: 'xs',
                                              color: 'currentColor',
                                              className: f.attachedRoleCloseIcon
                                          })
                                      })
                                  ]
                              })
                      ]
                  })
                : (0, n.jsx)(o.$jN, { type: o.$jN.Type.PULSING_ELLIPSIS })),
        (0, n.jsx)('div', {
            className: f.attachedRoleContainer,
            children: t
        })
    );
}
function h() {
    return (0, n.jsx)(o.P4T, {
        size: 'xs',
        color: 'currentColor',
        className: f.warningIcon
    });
}
function m(e) {
    let { roleName: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(o.Text, {
                variant: 'text-md/normal',
                color: 'text-muted',
                children: u.intl.format(u.t.i2x5aW, {
                    roleName: t,
                    emphasisHook: (e) =>
                        (0, n.jsx)(o.Text, {
                            tag: 'span',
                            variant: 'text-md/semibold',
                            color: 'text-default',
                            children: e
                        })
                })
            }),
            (0, n.jsxs)(o.X6q, {
                className: f.detachWarningHeading,
                variant: 'text-md/medium',
                color: 'text-default',
                children: [
                    (0, n.jsx)(o.I9k, {
                        size: 'sm',
                        color: 'currentColor'
                    }),
                    (0, n.jsx)(o.LZC, {
                        horizontal: !0,
                        size: 8
                    }),
                    u.intl.string(u.t.KWx4HR)
                ]
            }),
            (0, n.jsx)(o.Text, {
                variant: 'text-md/normal',
                color: 'text-muted',
                children: u.intl.string(u.t.hNHNpq)
            }),
            (0, n.jsxs)(o.X6q, {
                className: f.detachWarningHeading,
                variant: 'text-md/medium',
                color: 'text-default',
                children: [
                    (0, n.jsx)(o.XHJ, {
                        size: 'sm',
                        color: 'currentColor'
                    }),
                    (0, n.jsx)(o.LZC, {
                        horizontal: !0,
                        size: 8
                    }),
                    u.intl.string(u.t.WIPKAQ)
                ]
            }),
            (0, n.jsx)(o.Text, {
                variant: 'text-md/normal',
                color: 'text-muted',
                children: u.intl.string(u.t['40shJS'])
            })
        ]
    });
}
function b(e) {
    let { newRoleParams: t, setNewRoleParams: r, guildId: l, productId: d, listingRoleId: g, error: b } = e,
        v = (0, i.e7)([s.Z], () => (null != g ? s.Z.getRole(l, g) : void 0));
    return null === t
        ? (0, n.jsxs)(o.xJW, {
              title: (0, n.jsxs)('div', {
                  className: f.warningTitle,
                  children: [
                      (0, n.jsx)(h, {}),
                      (0, n.jsx)(o.LZC, {
                          horizontal: !0,
                          size: 4
                      }),
                      u.intl.string(u.t.ovXIrK)
                  ]
              }),
              tag: 'label',
              error: b,
              titleClassName: f.roleHeader,
              children: [
                  (0, n.jsx)(o.Text, {
                      variant: 'text-xs/normal',
                      color: 'text-muted',
                      children: u.intl.string(u.t.H7coX1)
                  }),
                  (0, n.jsx)(o.LZC, { size: 8 }),
                  (0, n.jsxs)('div', {
                      className: f.reattachRoleRow,
                      children: [
                          (0, n.jsx)(p, {
                              role: v,
                              onRemove: void 0
                          }),
                          (0, n.jsx)(o.LZC, {
                              horizontal: !0,
                              size: 8
                          }),
                          (0, n.jsxs)(o.zxk, {
                              innerClassName: f.restoreDetachedRoleButtonInner,
                              color: o.zxk.Colors.PRIMARY,
                              onClick: () => {
                                  r(void 0);
                              },
                              children: [
                                  (0, n.jsx)(o.Text, {
                                      variant: 'text-md/normal',
                                      color: 'none',
                                      children: u.intl.string(u.t.KkRpFh)
                                  }),
                                  (0, n.jsx)(o.LZC, {
                                      horizontal: !0,
                                      size: 8
                                  }),
                                  (0, n.jsx)(o.UEU, {
                                      size: 'xs',
                                      color: 'currentColor'
                                  })
                              ]
                          })
                      ]
                  })
              ]
          })
        : null != g
          ? (0, n.jsxs)(o.xJW, {
                title: u.intl.string(u.t.zIg9t7),
                tag: 'label',
                error: b,
                titleClassName: f.roleHeader,
                children: [
                    (0, n.jsx)(o.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: u.intl.string(u.t.OfuEkJ)
                    }),
                    (0, n.jsx)(o.LZC, { size: 8 }),
                    (0, n.jsx)(p, {
                        role: v,
                        onRemove: () => {
                            (a()(null != d, 'productId cannot be null'),
                                a()(null != v, 'no role attached'),
                                (function (e) {
                                    let { onConfirm: t, roleName: r } = e;
                                    (0, o.ZDy)(async () => {
                                        let { default: e } = await Promise.resolve().then(A.bind(A, 776045));
                                        return (A) =>
                                            (0, n.jsx)(
                                                e,
                                                (function (e) {
                                                    for (var t = 1; t < arguments.length; t++) {
                                                        var A = null != arguments[t] ? arguments[t] : {},
                                                            n = Object.keys(A);
                                                        ('function' == typeof Object.getOwnPropertySymbols &&
                                                            (n = n.concat(
                                                                Object.getOwnPropertySymbols(A).filter(function (e) {
                                                                    return Object.getOwnPropertyDescriptor(A, e).enumerable;
                                                                })
                                                            )),
                                                            n.forEach(function (t) {
                                                                var n;
                                                                ((n = A[t]),
                                                                    t in e
                                                                        ? Object.defineProperty(e, t, {
                                                                              value: n,
                                                                              enumerable: !0,
                                                                              configurable: !0,
                                                                              writable: !0
                                                                          })
                                                                        : (e[t] = n));
                                                            }));
                                                    }
                                                    return e;
                                                })(
                                                    {
                                                        title: u.intl.string(u.t.Y3Hi3d),
                                                        body: (0, n.jsx)(m, { roleName: r }),
                                                        cta: u.intl.string(u.t.VawZV1),
                                                        closeLabel: u.intl.string(u.t['6y+3Bw']),
                                                        onConfirm: t
                                                    },
                                                    A
                                                )
                                            );
                                    });
                                })({
                                    roleName: v.name,
                                    onConfirm: () => r(null)
                                }));
                        }
                    })
                ]
            })
          : (a()(null != t, 'newRoleParams cannot be null at this point'),
            (0, n.jsxs)(o.xJW, {
                required: !0,
                title: u.intl.string(u.t.xZvFpK),
                tag: 'label',
                error: b,
                titleClassName: f.roleHeader,
                children: [
                    (0, n.jsx)(o.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: u.intl.string(u.t.CllC5u)
                    }),
                    (0, n.jsx)(o.LZC, { size: 8 }),
                    (0, n.jsx)(c.Z, {
                        newRoleParams: t,
                        setNewRoleParams: r
                    })
                ]
            }));
}
