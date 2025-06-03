r.d(t, {
    YP: () => g,
    ZP: () => b,
    aN: () => p
});
var n = r(255367);
r(73800);
var i = r(512722),
    a = r.n(i),
    l = r(866442),
    o = r(399606),
    A = r(481060),
    s = r(430824),
    c = r(470209),
    d = r(981631),
    u = r(388032),
    f = r(165639);
function g() {
    return {
        name: '',
        color: d.p6O
    };
}
function h(e) {
    let t,
        { onRemove: r, role: i } = e;
    return (
        (t =
            null != i
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(A.nn4, { children: u.intl.format(u.t['94dBOT'], { color: (0, l.Rf)(i.color) }) }),
                          (0, n.jsx)('div', {
                              className: f.attachedRoleColor,
                              style: { backgroundColor: (0, l.Rf)(i.color) }
                          }),
                          (0, n.jsx)(A.LZC, {
                              size: 8,
                              horizontal: !0
                          }),
                          (0, n.jsx)(A.Text, {
                              variant: 'text-md/normal',
                              color: 'text-normal',
                              children: i.name
                          }),
                          null != r &&
                              (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(A.LZC, {
                                          size: 12,
                                          horizontal: !0
                                      }),
                                      (0, n.jsx)(A.P3F, {
                                          'aria-label': u.intl.string(u.t.tO2HIy),
                                          onClick: r,
                                          className: f.attachedRoleClose,
                                          children: (0, n.jsx)(A.Dio, {
                                              size: 'xs',
                                              color: 'currentColor',
                                              className: f.attachedRoleCloseIcon
                                          })
                                      })
                                  ]
                              })
                      ]
                  })
                : (0, n.jsx)(A.$jN, { type: A.$jN.Type.PULSING_ELLIPSIS })),
        (0, n.jsx)('div', {
            className: f.attachedRoleContainer,
            children: t
        })
    );
}
function p() {
    return (0, n.jsx)(A.P4T, {
        size: 'xs',
        color: 'currentColor',
        className: f.warningIcon
    });
}
function m(e) {
    let { roleName: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(A.Text, {
                variant: 'text-md/normal',
                color: 'text-muted',
                children: u.intl.format(u.t.i2x5aW, {
                    roleName: t,
                    emphasisHook: (e) =>
                        (0, n.jsx)(A.Text, {
                            tag: 'span',
                            variant: 'text-md/semibold',
                            color: 'text-normal',
                            children: e
                        })
                })
            }),
            (0, n.jsxs)(A.X6q, {
                className: f.detachWarningHeading,
                variant: 'text-md/medium',
                color: 'text-normal',
                children: [
                    (0, n.jsx)(A.I9k, {
                        size: 'sm',
                        color: 'currentColor'
                    }),
                    (0, n.jsx)(A.LZC, {
                        horizontal: !0,
                        size: 8
                    }),
                    u.intl.string(u.t.KWx4HR)
                ]
            }),
            (0, n.jsx)(A.Text, {
                variant: 'text-md/normal',
                color: 'text-muted',
                children: u.intl.string(u.t.hNHNpq)
            }),
            (0, n.jsxs)(A.X6q, {
                className: f.detachWarningHeading,
                variant: 'text-md/medium',
                color: 'text-normal',
                children: [
                    (0, n.jsx)(A.XHJ, {
                        size: 'sm',
                        color: 'currentColor'
                    }),
                    (0, n.jsx)(A.LZC, {
                        horizontal: !0,
                        size: 8
                    }),
                    u.intl.string(u.t.WIPKAQ)
                ]
            }),
            (0, n.jsx)(A.Text, {
                variant: 'text-md/normal',
                color: 'text-muted',
                children: u.intl.string(u.t['40shJS'])
            })
        ]
    });
}
function b(e) {
    let { newRoleParams: t, setNewRoleParams: i, guildId: l, productId: d, listingRoleId: g, error: b } = e,
        v = (0, o.e7)([s.Z], () => (null != g ? s.Z.getRole(l, g) : void 0));
    return null === t
        ? (0, n.jsxs)(A.xJW, {
              title: (0, n.jsxs)('div', {
                  className: f.warningTitle,
                  children: [
                      (0, n.jsx)(p, {}),
                      (0, n.jsx)(A.LZC, {
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
                  (0, n.jsx)(A.Text, {
                      variant: 'text-xs/normal',
                      color: 'text-muted',
                      children: u.intl.string(u.t.H7coX1)
                  }),
                  (0, n.jsx)(A.LZC, { size: 8 }),
                  (0, n.jsxs)('div', {
                      className: f.reattachRoleRow,
                      children: [
                          (0, n.jsx)(h, {
                              role: v,
                              onRemove: void 0
                          }),
                          (0, n.jsx)(A.LZC, {
                              horizontal: !0,
                              size: 8
                          }),
                          (0, n.jsxs)(A.zxk, {
                              innerClassName: f.restoreDetachedRoleButtonInner,
                              color: A.zxk.Colors.PRIMARY,
                              onClick: () => {
                                  i(void 0);
                              },
                              children: [
                                  (0, n.jsx)(A.Text, {
                                      variant: 'text-md/normal',
                                      color: 'none',
                                      children: u.intl.string(u.t.KkRpFh)
                                  }),
                                  (0, n.jsx)(A.LZC, {
                                      horizontal: !0,
                                      size: 8
                                  }),
                                  (0, n.jsx)(A.UEU, {
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
          ? (0, n.jsxs)(A.xJW, {
                title: u.intl.string(u.t.zIg9t7),
                tag: 'label',
                error: b,
                titleClassName: f.roleHeader,
                children: [
                    (0, n.jsx)(A.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: u.intl.string(u.t.OfuEkJ)
                    }),
                    (0, n.jsx)(A.LZC, { size: 8 }),
                    (0, n.jsx)(h, {
                        role: v,
                        onRemove: () => {
                            a()(null != d, 'productId cannot be null'),
                                a()(null != v, 'no role attached'),
                                (function (e) {
                                    let { onConfirm: t, roleName: i } = e;
                                    (0, A.ZDy)(async () => {
                                        let { default: e } = await Promise.resolve().then(r.bind(r, 776045));
                                        return (r) =>
                                            (0, n.jsx)(
                                                e,
                                                (function (e) {
                                                    for (var t = 1; t < arguments.length; t++) {
                                                        var r = null != arguments[t] ? arguments[t] : {},
                                                            n = Object.keys(r);
                                                        'function' == typeof Object.getOwnPropertySymbols &&
                                                            (n = n.concat(
                                                                Object.getOwnPropertySymbols(r).filter(function (e) {
                                                                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                                                })
                                                            )),
                                                            n.forEach(function (t) {
                                                                var n;
                                                                (n = r[t]),
                                                                    t in e
                                                                        ? Object.defineProperty(e, t, {
                                                                              value: n,
                                                                              enumerable: !0,
                                                                              configurable: !0,
                                                                              writable: !0
                                                                          })
                                                                        : (e[t] = n);
                                                            });
                                                    }
                                                    return e;
                                                })(
                                                    {
                                                        title: u.intl.string(u.t.Y3Hi3d),
                                                        body: (0, n.jsx)(m, { roleName: i }),
                                                        cta: u.intl.string(u.t.VawZV1),
                                                        closeLabel: u.intl.string(u.t['6y+3Bw']),
                                                        onConfirm: t
                                                    },
                                                    r
                                                )
                                            );
                                    });
                                })({
                                    roleName: v.name,
                                    onConfirm: () => i(null)
                                });
                        }
                    })
                ]
            })
          : (a()(null != t, 'newRoleParams cannot be null at this point'),
            (0, n.jsxs)(A.xJW, {
                required: !0,
                title: u.intl.string(u.t.xZvFpK),
                tag: 'label',
                error: b,
                titleClassName: f.roleHeader,
                children: [
                    (0, n.jsx)(A.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: u.intl.string(u.t.CllC5u)
                    }),
                    (0, n.jsx)(A.LZC, { size: 8 }),
                    (0, n.jsx)(c.Z, {
                        newRoleParams: t,
                        setNewRoleParams: i
                    })
                ]
            }));
}
