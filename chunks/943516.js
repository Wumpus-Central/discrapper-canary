r.d(t, {
    YP: () => f,
    ZP: () => b,
    aN: () => h
});
var n = r(200651);
r(192379);
var A = r(512722),
    a = r.n(A),
    o = r(866442),
    l = r(399606),
    i = r(481060),
    s = r(430824),
    c = r(470209),
    d = r(981631),
    u = r(388032),
    g = r(165639);
function f() {
    return {
        name: '',
        color: d.p6O
    };
}
function p(e) {
    let t,
        { onRemove: r, role: A } = e;
    return (
        (t =
            null != A
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(i.nn4, { children: u.NW.format(u.t['94dBOT'], { color: (0, o.Rf)(A.color) }) }),
                          (0, n.jsx)('div', {
                              className: g.attachedRoleColor,
                              style: { backgroundColor: (0, o.Rf)(A.color) }
                          }),
                          (0, n.jsx)(i.LZC, {
                              size: 8,
                              horizontal: !0
                          }),
                          (0, n.jsx)(i.Text, {
                              variant: 'text-md/normal',
                              color: 'text-normal',
                              children: A.name
                          }),
                          null != r &&
                              (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(i.LZC, {
                                          size: 12,
                                          horizontal: !0
                                      }),
                                      (0, n.jsx)(i.P3F, {
                                          'aria-label': u.NW.string(u.t.tO2HIy),
                                          onClick: r,
                                          className: g.attachedRoleClose,
                                          children: (0, n.jsx)(i.Dio, {
                                              size: 'xs',
                                              color: 'currentColor',
                                              className: g.attachedRoleCloseIcon
                                          })
                                      })
                                  ]
                              })
                      ]
                  })
                : (0, n.jsx)(i.$jN, { type: i.$jN.Type.PULSING_ELLIPSIS })),
        (0, n.jsx)('div', {
            className: g.attachedRoleContainer,
            children: t
        })
    );
}
function h() {
    return (0, n.jsx)(i.P4T, {
        size: 'xs',
        color: 'currentColor',
        className: g.warningIcon
    });
}
function m(e) {
    let { roleName: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(i.Text, {
                variant: 'text-md/normal',
                color: 'text-muted',
                children: u.NW.format(u.t.i2x5aW, {
                    roleName: t,
                    emphasisHook: (e) =>
                        (0, n.jsx)(i.Text, {
                            tag: 'span',
                            variant: 'text-md/semibold',
                            color: 'text-normal',
                            children: e
                        })
                })
            }),
            (0, n.jsxs)(i.X6q, {
                className: g.detachWarningHeading,
                variant: 'text-md/medium',
                color: 'text-normal',
                children: [
                    (0, n.jsx)(i.I9k, {
                        size: 'sm',
                        color: 'currentColor'
                    }),
                    (0, n.jsx)(i.LZC, {
                        horizontal: !0,
                        size: 8
                    }),
                    u.NW.string(u.t.KWx4HR)
                ]
            }),
            (0, n.jsx)(i.Text, {
                variant: 'text-md/normal',
                color: 'text-muted',
                children: u.NW.string(u.t.hNHNpq)
            }),
            (0, n.jsxs)(i.X6q, {
                className: g.detachWarningHeading,
                variant: 'text-md/medium',
                color: 'text-normal',
                children: [
                    (0, n.jsx)(i.XHJ, {
                        size: 'sm',
                        color: 'currentColor'
                    }),
                    (0, n.jsx)(i.LZC, {
                        horizontal: !0,
                        size: 8
                    }),
                    u.NW.string(u.t.WIPKAQ)
                ]
            }),
            (0, n.jsx)(i.Text, {
                variant: 'text-md/normal',
                color: 'text-muted',
                children: u.NW.string(u.t['40shJS'])
            })
        ]
    });
}
function b(e) {
    let { newRoleParams: t, setNewRoleParams: A, guildId: o, productId: d, listingRoleId: f, error: b } = e,
        v = (0, l.e7)([s.Z], () => (null != f ? s.Z.getRole(o, f) : void 0));
    return null === t
        ? (0, n.jsxs)(i.xJW, {
              title: (0, n.jsxs)('div', {
                  className: g.warningTitle,
                  children: [
                      (0, n.jsx)(h, {}),
                      (0, n.jsx)(i.LZC, {
                          horizontal: !0,
                          size: 4
                      }),
                      u.NW.string(u.t.ovXIrK)
                  ]
              }),
              tag: 'label',
              error: b,
              titleClassName: g.roleHeader,
              children: [
                  (0, n.jsx)(i.Text, {
                      variant: 'text-xs/normal',
                      color: 'text-muted',
                      children: u.NW.string(u.t.H7coX1)
                  }),
                  (0, n.jsx)(i.LZC, { size: 8 }),
                  (0, n.jsxs)('div', {
                      className: g.reattachRoleRow,
                      children: [
                          (0, n.jsx)(p, {
                              role: v,
                              onRemove: void 0
                          }),
                          (0, n.jsx)(i.LZC, {
                              horizontal: !0,
                              size: 8
                          }),
                          (0, n.jsxs)(i.zxk, {
                              innerClassName: g.restoreDetachedRoleButtonInner,
                              color: i.zxk.Colors.PRIMARY,
                              onClick: () => {
                                  A(void 0);
                              },
                              children: [
                                  (0, n.jsx)(i.Text, {
                                      variant: 'text-md/normal',
                                      color: 'none',
                                      children: u.NW.string(u.t.KkRpFh)
                                  }),
                                  (0, n.jsx)(i.LZC, {
                                      horizontal: !0,
                                      size: 8
                                  }),
                                  (0, n.jsx)(i.UEU, {
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
          ? (0, n.jsxs)(i.xJW, {
                title: u.NW.string(u.t.zIg9t7),
                tag: 'label',
                error: b,
                titleClassName: g.roleHeader,
                children: [
                    (0, n.jsx)(i.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: u.NW.string(u.t.OfuEkJ)
                    }),
                    (0, n.jsx)(i.LZC, { size: 8 }),
                    (0, n.jsx)(p, {
                        role: v,
                        onRemove: () => {
                            a()(null != d, 'productId cannot be null'),
                                a()(null != v, 'no role attached'),
                                (function (e) {
                                    let { onConfirm: t, roleName: A } = e;
                                    (0, i.ZDy)(async () => {
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
                                                        title: u.NW.string(u.t.Y3Hi3d),
                                                        body: (0, n.jsx)(m, { roleName: A }),
                                                        cta: u.NW.string(u.t.VawZV1),
                                                        closeLabel: u.NW.string(u.t['6y+3Bw']),
                                                        onConfirm: t
                                                    },
                                                    r
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
            (0, n.jsxs)(i.xJW, {
                required: !0,
                title: u.NW.string(u.t.xZvFpK),
                tag: 'label',
                error: b,
                titleClassName: g.roleHeader,
                children: [
                    (0, n.jsx)(i.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: u.NW.string(u.t.CllC5u)
                    }),
                    (0, n.jsx)(i.LZC, { size: 8 }),
                    (0, n.jsx)(c.Z, {
                        newRoleParams: t,
                        setNewRoleParams: A
                    })
                ]
            }));
}
