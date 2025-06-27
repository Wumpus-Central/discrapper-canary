n.d(t, {
    YP: () => f,
    ZP: () => b,
    aN: () => m
});
var r = n(255367);
n(73800);
var A = n(512722),
    a = n.n(A),
    l = n(866442),
    o = n(399606),
    i = n(481060),
    s = n(485386),
    c = n(470209),
    d = n(981631),
    u = n(388032),
    g = n(165639);
function f() {
    return {
        name: '',
        color: d.p6O
    };
}
function p(e) {
    let t,
        { onRemove: n, role: A } = e;
    return (
        (t =
            null != A
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(i.nn4, { children: u.intl.format(u.t['94dBOT'], { color: (0, l.Rf)(A.color) }) }),
                          (0, r.jsx)('div', {
                              className: g.attachedRoleColor,
                              style: { backgroundColor: (0, l.Rf)(A.color) }
                          }),
                          (0, r.jsx)(i.LZC, {
                              size: 8,
                              horizontal: !0
                          }),
                          (0, r.jsx)(i.Text, {
                              variant: 'text-md/normal',
                              color: 'text-default',
                              children: A.name
                          }),
                          null != n &&
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(i.LZC, {
                                          size: 12,
                                          horizontal: !0
                                      }),
                                      (0, r.jsx)(i.P3F, {
                                          'aria-label': u.intl.string(u.t.tO2HIy),
                                          onClick: n,
                                          className: g.attachedRoleClose,
                                          children: (0, r.jsx)(i.Dio, {
                                              size: 'xs',
                                              color: 'currentColor',
                                              className: g.attachedRoleCloseIcon
                                          })
                                      })
                                  ]
                              })
                      ]
                  })
                : (0, r.jsx)(i.$jN, { type: i.$jN.Type.PULSING_ELLIPSIS })),
        (0, r.jsx)('div', {
            className: g.attachedRoleContainer,
            children: t
        })
    );
}
function m() {
    return (0, r.jsx)(i.P4T, {
        size: 'xs',
        color: 'currentColor',
        className: g.warningIcon
    });
}
function h(e) {
    let { roleName: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.Text, {
                variant: 'text-md/normal',
                color: 'text-muted',
                children: u.intl.format(u.t.i2x5aW, {
                    roleName: t,
                    emphasisHook: (e) =>
                        (0, r.jsx)(i.Text, {
                            tag: 'span',
                            variant: 'text-md/semibold',
                            color: 'text-default',
                            children: e
                        })
                })
            }),
            (0, r.jsxs)(i.X6q, {
                className: g.detachWarningHeading,
                variant: 'text-md/medium',
                color: 'text-default',
                children: [
                    (0, r.jsx)(i.I9k, {
                        size: 'sm',
                        color: 'currentColor'
                    }),
                    (0, r.jsx)(i.LZC, {
                        horizontal: !0,
                        size: 8
                    }),
                    u.intl.string(u.t.KWx4HR)
                ]
            }),
            (0, r.jsx)(i.Text, {
                variant: 'text-md/normal',
                color: 'text-muted',
                children: u.intl.string(u.t.hNHNpq)
            }),
            (0, r.jsxs)(i.X6q, {
                className: g.detachWarningHeading,
                variant: 'text-md/medium',
                color: 'text-default',
                children: [
                    (0, r.jsx)(i.XHJ, {
                        size: 'sm',
                        color: 'currentColor'
                    }),
                    (0, r.jsx)(i.LZC, {
                        horizontal: !0,
                        size: 8
                    }),
                    u.intl.string(u.t.WIPKAQ)
                ]
            }),
            (0, r.jsx)(i.Text, {
                variant: 'text-md/normal',
                color: 'text-muted',
                children: u.intl.string(u.t['40shJS'])
            })
        ]
    });
}
function b(e) {
    let { newRoleParams: t, setNewRoleParams: A, guildId: l, productId: d, listingRoleId: f, error: b } = e,
        v = (0, o.e7)([s.Z], () => (null != f ? s.Z.getRole(l, f) : void 0));
    return null === t
        ? (0, r.jsxs)(i.xJW, {
              title: (0, r.jsxs)('div', {
                  className: g.warningTitle,
                  children: [
                      (0, r.jsx)(m, {}),
                      (0, r.jsx)(i.LZC, {
                          horizontal: !0,
                          size: 4
                      }),
                      u.intl.string(u.t.ovXIrK)
                  ]
              }),
              tag: 'label',
              error: b,
              titleClassName: g.roleHeader,
              children: [
                  (0, r.jsx)(i.Text, {
                      variant: 'text-xs/normal',
                      color: 'text-muted',
                      children: u.intl.string(u.t.H7coX1)
                  }),
                  (0, r.jsx)(i.LZC, { size: 8 }),
                  (0, r.jsxs)('div', {
                      className: g.reattachRoleRow,
                      children: [
                          (0, r.jsx)(p, {
                              role: v,
                              onRemove: void 0
                          }),
                          (0, r.jsx)(i.LZC, {
                              horizontal: !0,
                              size: 8
                          }),
                          (0, r.jsxs)(i.zxk, {
                              innerClassName: g.restoreDetachedRoleButtonInner,
                              color: i.zxk.Colors.PRIMARY,
                              onClick: () => {
                                  A(void 0);
                              },
                              children: [
                                  (0, r.jsx)(i.Text, {
                                      variant: 'text-md/normal',
                                      color: 'none',
                                      children: u.intl.string(u.t.KkRpFh)
                                  }),
                                  (0, r.jsx)(i.LZC, {
                                      horizontal: !0,
                                      size: 8
                                  }),
                                  (0, r.jsx)(i.UEU, {
                                      size: 'xs',
                                      color: 'currentColor'
                                  })
                              ]
                          })
                      ]
                  })
              ]
          })
        : null != f
          ? (0, r.jsxs)(i.xJW, {
                title: u.intl.string(u.t.zIg9t7),
                tag: 'label',
                error: b,
                titleClassName: g.roleHeader,
                children: [
                    (0, r.jsx)(i.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: u.intl.string(u.t.OfuEkJ)
                    }),
                    (0, r.jsx)(i.LZC, { size: 8 }),
                    (0, r.jsx)(p, {
                        role: v,
                        onRemove: () => {
                            a()(null != d, 'productId cannot be null'),
                                a()(null != v, 'no role attached'),
                                (function (e) {
                                    let { onConfirm: t, roleName: A } = e;
                                    (0, i.ZDy)(async () => {
                                        let { default: e } = await Promise.resolve().then(n.bind(n, 776045));
                                        return (n) =>
                                            (0, r.jsx)(
                                                e,
                                                (function (e) {
                                                    for (var t = 1; t < arguments.length; t++) {
                                                        var n = null != arguments[t] ? arguments[t] : {},
                                                            r = Object.keys(n);
                                                        'function' == typeof Object.getOwnPropertySymbols &&
                                                            (r = r.concat(
                                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                                })
                                                            )),
                                                            r.forEach(function (t) {
                                                                var r;
                                                                (r = n[t]),
                                                                    t in e
                                                                        ? Object.defineProperty(e, t, {
                                                                              value: r,
                                                                              enumerable: !0,
                                                                              configurable: !0,
                                                                              writable: !0
                                                                          })
                                                                        : (e[t] = r);
                                                            });
                                                    }
                                                    return e;
                                                })(
                                                    {
                                                        title: u.intl.string(u.t.Y3Hi3d),
                                                        body: (0, r.jsx)(h, { roleName: A }),
                                                        cta: u.intl.string(u.t.VawZV1),
                                                        closeLabel: u.intl.string(u.t['6y+3Bw']),
                                                        onConfirm: t
                                                    },
                                                    n
                                                )
                                            );
                                    });
                                })({
                                    roleName: v.name,
                                    onConfirm: () => A(null)
                                });
                        }
                    })
                ]
            })
          : (a()(null != t, 'newRoleParams cannot be null at this point'),
            (0, r.jsxs)(i.xJW, {
                required: !0,
                title: u.intl.string(u.t.xZvFpK),
                tag: 'label',
                error: b,
                titleClassName: g.roleHeader,
                children: [
                    (0, r.jsx)(i.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: u.intl.string(u.t.CllC5u)
                    }),
                    (0, r.jsx)(i.LZC, { size: 8 }),
                    (0, r.jsx)(c.Z, {
                        newRoleParams: t,
                        setNewRoleParams: A
                    })
                ]
            }));
}
