r.d(t, {
    YP: () => g,
    ZP: () => b,
    aN: () => m
});
var A = r(200651);
r(192379);
var n = r(512722),
    o = r.n(n),
    a = r(866442),
    l = r(399606),
    i = r(481060),
    s = r(430824),
    c = r(470209),
    d = r(981631),
    u = r(388032),
    f = r(423615);
function g() {
    return {
        name: '',
        color: d.p6O
    };
}
function p(e) {
    let t,
        { onRemove: r, role: n } = e;
    return (
        (t =
            null != n
                ? (0, A.jsxs)(A.Fragment, {
                      children: [
                          (0, A.jsx)(i.nn4, { children: u.NW.format(u.t['94dBOT'], { color: (0, a.Rf)(n.color) }) }),
                          (0, A.jsx)('div', {
                              className: f.attachedRoleColor,
                              style: { backgroundColor: (0, a.Rf)(n.color) }
                          }),
                          (0, A.jsx)(i.LZC, {
                              size: 8,
                              horizontal: !0
                          }),
                          (0, A.jsx)(i.Text, {
                              variant: 'text-md/normal',
                              color: 'text-normal',
                              children: n.name
                          }),
                          null != r &&
                              (0, A.jsxs)(A.Fragment, {
                                  children: [
                                      (0, A.jsx)(i.LZC, {
                                          size: 12,
                                          horizontal: !0
                                      }),
                                      (0, A.jsx)(i.P3F, {
                                          'aria-label': u.NW.string(u.t.tO2HIy),
                                          onClick: r,
                                          className: f.attachedRoleClose,
                                          children: (0, A.jsx)(i.Dio, {
                                              size: 'xs',
                                              color: 'currentColor',
                                              className: f.attachedRoleCloseIcon
                                          })
                                      })
                                  ]
                              })
                      ]
                  })
                : (0, A.jsx)(i.$jN, { type: i.$jN.Type.PULSING_ELLIPSIS })),
        (0, A.jsx)('div', {
            className: f.attachedRoleContainer,
            children: t
        })
    );
}
function m() {
    return (0, A.jsx)(i.P4T, {
        size: 'xs',
        color: 'currentColor',
        className: f.warningIcon
    });
}
function h(e) {
    let { roleName: t } = e;
    return (0, A.jsxs)(A.Fragment, {
        children: [
            (0, A.jsx)(i.Text, {
                variant: 'text-md/normal',
                color: 'text-muted',
                children: u.NW.format(u.t.i2x5aW, {
                    roleName: t,
                    emphasisHook: (e) =>
                        (0, A.jsx)(i.Text, {
                            tag: 'span',
                            variant: 'text-md/semibold',
                            color: 'text-normal',
                            children: e
                        })
                })
            }),
            (0, A.jsxs)(i.X6q, {
                className: f.detachWarningHeading,
                variant: 'text-md/medium',
                color: 'text-normal',
                children: [
                    (0, A.jsx)(i.I9k, {
                        size: 'sm',
                        color: 'currentColor'
                    }),
                    (0, A.jsx)(i.LZC, {
                        horizontal: !0,
                        size: 8
                    }),
                    u.NW.string(u.t.KWx4HR)
                ]
            }),
            (0, A.jsx)(i.Text, {
                variant: 'text-md/normal',
                color: 'text-muted',
                children: u.NW.string(u.t.hNHNpq)
            }),
            (0, A.jsxs)(i.X6q, {
                className: f.detachWarningHeading,
                variant: 'text-md/medium',
                color: 'text-normal',
                children: [
                    (0, A.jsx)(i.XHJ, {
                        size: 'sm',
                        color: 'currentColor'
                    }),
                    (0, A.jsx)(i.LZC, {
                        horizontal: !0,
                        size: 8
                    }),
                    u.NW.string(u.t.WIPKAQ)
                ]
            }),
            (0, A.jsx)(i.Text, {
                variant: 'text-md/normal',
                color: 'text-muted',
                children: u.NW.string(u.t['40shJS'])
            })
        ]
    });
}
function b(e) {
    let { newRoleParams: t, setNewRoleParams: n, guildId: a, productId: d, listingRoleId: g, error: b } = e,
        v = (0, l.e7)([s.Z], () => (null != g ? s.Z.getRole(a, g) : void 0));
    return null === t
        ? (0, A.jsxs)(i.xJW, {
              title: (0, A.jsxs)('div', {
                  className: f.warningTitle,
                  children: [
                      (0, A.jsx)(m, {}),
                      (0, A.jsx)(i.LZC, {
                          horizontal: !0,
                          size: 4
                      }),
                      u.NW.string(u.t.ovXIrK)
                  ]
              }),
              tag: 'label',
              error: b,
              titleClassName: f.roleHeader,
              children: [
                  (0, A.jsx)(i.Text, {
                      variant: 'text-xs/normal',
                      color: 'text-muted',
                      children: u.NW.string(u.t.H7coX1)
                  }),
                  (0, A.jsx)(i.LZC, { size: 8 }),
                  (0, A.jsxs)('div', {
                      className: f.reattachRoleRow,
                      children: [
                          (0, A.jsx)(p, {
                              role: v,
                              onRemove: void 0
                          }),
                          (0, A.jsx)(i.LZC, {
                              horizontal: !0,
                              size: 8
                          }),
                          (0, A.jsxs)(i.zxk, {
                              innerClassName: f.restoreDetachedRoleButtonInner,
                              color: i.zxk.Colors.PRIMARY,
                              onClick: () => {
                                  n(void 0);
                              },
                              children: [
                                  (0, A.jsx)(i.Text, {
                                      variant: 'text-md/normal',
                                      color: 'none',
                                      children: u.NW.string(u.t.KkRpFh)
                                  }),
                                  (0, A.jsx)(i.LZC, {
                                      horizontal: !0,
                                      size: 8
                                  }),
                                  (0, A.jsx)(i.UEU, {
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
          ? (0, A.jsxs)(i.xJW, {
                title: u.NW.string(u.t.zIg9t7),
                tag: 'label',
                error: b,
                titleClassName: f.roleHeader,
                children: [
                    (0, A.jsx)(i.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: u.NW.string(u.t.OfuEkJ)
                    }),
                    (0, A.jsx)(i.LZC, { size: 8 }),
                    (0, A.jsx)(p, {
                        role: v,
                        onRemove: () => {
                            o()(null != d, 'productId cannot be null'),
                                o()(null != v, 'no role attached'),
                                (function (e) {
                                    let { onConfirm: t, roleName: n } = e;
                                    (0, i.ZDy)(async () => {
                                        let { default: e } = await Promise.resolve().then(r.bind(r, 776045));
                                        return (r) =>
                                            (0, A.jsx)(
                                                e,
                                                (function (e) {
                                                    for (var t = 1; t < arguments.length; t++) {
                                                        var r = null != arguments[t] ? arguments[t] : {},
                                                            A = Object.keys(r);
                                                        'function' == typeof Object.getOwnPropertySymbols &&
                                                            (A = A.concat(
                                                                Object.getOwnPropertySymbols(r).filter(function (e) {
                                                                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                                                })
                                                            )),
                                                            A.forEach(function (t) {
                                                                var A;
                                                                (A = r[t]),
                                                                    t in e
                                                                        ? Object.defineProperty(e, t, {
                                                                              value: A,
                                                                              enumerable: !0,
                                                                              configurable: !0,
                                                                              writable: !0
                                                                          })
                                                                        : (e[t] = A);
                                                            });
                                                    }
                                                    return e;
                                                })(
                                                    {
                                                        title: u.NW.string(u.t.Y3Hi3d),
                                                        body: (0, A.jsx)(h, { roleName: n }),
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
                                    onConfirm: () => n(null)
                                });
                        }
                    })
                ]
            })
          : (o()(null != t, 'newRoleParams cannot be null at this point'),
            (0, A.jsxs)(i.xJW, {
                required: !0,
                title: u.NW.string(u.t.xZvFpK),
                tag: 'label',
                error: b,
                titleClassName: f.roleHeader,
                children: [
                    (0, A.jsx)(i.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: u.NW.string(u.t.CllC5u)
                    }),
                    (0, A.jsx)(i.LZC, { size: 8 }),
                    (0, A.jsx)(c.Z, {
                        newRoleParams: t,
                        setNewRoleParams: n
                    })
                ]
            }));
}
