t.d(e, {
    YP: () => m,
    ZP: () => p,
    aN: () => f
});
var n = t(200651);
t(192379);
var a = t(512722),
    l = t.n(a),
    r = t(866442),
    i = t(399606),
    o = t(481060),
    s = t(430824),
    d = t(470209),
    c = t(981631),
    u = t(388032),
    g = t(100912);
function m() {
    return {
        name: '',
        color: c.p6O
    };
}
function h(A) {
    let e,
        { onRemove: t, role: a } = A;
    return (
        (e =
            null != a
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(o.nn4, { children: u.intl.format(u.t['94dBOT'], { color: (0, r.Rf)(a.color) }) }),
                          (0, n.jsx)('div', {
                              className: g.attachedRoleColor,
                              style: { backgroundColor: (0, r.Rf)(a.color) }
                          }),
                          (0, n.jsx)(o.LZC, {
                              size: 8,
                              horizontal: !0
                          }),
                          (0, n.jsx)(o.Text, {
                              variant: 'text-md/normal',
                              color: 'text-normal',
                              children: a.name
                          }),
                          null != t &&
                              (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(o.LZC, {
                                          size: 12,
                                          horizontal: !0
                                      }),
                                      (0, n.jsx)(o.P3F, {
                                          'aria-label': u.intl.string(u.t.tO2HIy),
                                          onClick: t,
                                          className: g.attachedRoleClose,
                                          children: (0, n.jsx)(o.Dio, {
                                              size: 'xs',
                                              color: 'currentColor',
                                              className: g.attachedRoleCloseIcon
                                          })
                                      })
                                  ]
                              })
                      ]
                  })
                : (0, n.jsx)(o.$jN, { type: o.$jN.Type.PULSING_ELLIPSIS })),
        (0, n.jsx)('div', {
            className: g.attachedRoleContainer,
            children: e
        })
    );
}
function f() {
    return (0, n.jsx)(o.P4T, {
        size: 'xs',
        color: 'currentColor',
        className: g.warningIcon
    });
}
function C(A) {
    let { roleName: e } = A;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(o.Text, {
                variant: 'text-md/normal',
                color: 'text-muted',
                children: u.intl.format(u.t.i2x5aW, {
                    roleName: e,
                    emphasisHook: (A) =>
                        (0, n.jsx)(o.Text, {
                            tag: 'span',
                            variant: 'text-md/semibold',
                            color: 'text-normal',
                            children: A
                        })
                })
            }),
            (0, n.jsxs)(o.X6q, {
                className: g.detachWarningHeading,
                variant: 'text-md/medium',
                color: 'text-normal',
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
                className: g.detachWarningHeading,
                variant: 'text-md/medium',
                color: 'text-normal',
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
function p(A) {
    let { newRoleParams: e, setNewRoleParams: a, guildId: r, productId: c, listingRoleId: m, error: p } = A,
        q = (0, i.e7)([s.Z], () => (null != m ? s.Z.getRole(r, m) : void 0));
    return null === e
        ? (0, n.jsxs)(o.xJW, {
              title: (0, n.jsxs)('div', {
                  className: g.warningTitle,
                  children: [
                      (0, n.jsx)(f, {}),
                      (0, n.jsx)(o.LZC, {
                          horizontal: !0,
                          size: 4
                      }),
                      u.intl.string(u.t.ovXIrK)
                  ]
              }),
              tag: 'label',
              error: p,
              titleClassName: g.roleHeader,
              children: [
                  (0, n.jsx)(o.Text, {
                      variant: 'text-xs/normal',
                      color: 'text-muted',
                      children: u.intl.string(u.t.H7coX1)
                  }),
                  (0, n.jsx)(o.LZC, { size: 8 }),
                  (0, n.jsxs)('div', {
                      className: g.reattachRoleRow,
                      children: [
                          (0, n.jsx)(h, {
                              role: q,
                              onRemove: void 0
                          }),
                          (0, n.jsx)(o.LZC, {
                              horizontal: !0,
                              size: 8
                          }),
                          (0, n.jsxs)(o.zxk, {
                              innerClassName: g.restoreDetachedRoleButtonInner,
                              color: o.zxk.Colors.PRIMARY,
                              onClick: () => {
                                  a(void 0);
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
        : null != m
          ? (0, n.jsxs)(o.xJW, {
                title: u.intl.string(u.t.zIg9t7),
                tag: 'label',
                error: p,
                titleClassName: g.roleHeader,
                children: [
                    (0, n.jsx)(o.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: u.intl.string(u.t.OfuEkJ)
                    }),
                    (0, n.jsx)(o.LZC, { size: 8 }),
                    (0, n.jsx)(h, {
                        role: q,
                        onRemove: () => {
                            l()(null != c, 'productId cannot be null'),
                                l()(null != q, 'no role attached'),
                                (function (A) {
                                    let { onConfirm: e, roleName: a } = A;
                                    (0, o.ZDy)(async () => {
                                        let { default: A } = await Promise.resolve().then(t.bind(t, 776045));
                                        return (t) =>
                                            (0, n.jsx)(A, {
                                                title: u.intl.string(u.t.Y3Hi3d),
                                                body: (0, n.jsx)(C, { roleName: a }),
                                                cta: u.intl.string(u.t.VawZV1),
                                                closeLabel: u.intl.string(u.t['6y+3Bw']),
                                                onConfirm: e,
                                                ...t
                                            });
                                    });
                                })({
                                    roleName: q.name,
                                    onConfirm: () => a(null)
                                });
                        }
                    })
                ]
            })
          : (l()(null != e, 'newRoleParams cannot be null at this point'),
            (0, n.jsxs)(o.xJW, {
                required: !0,
                title: u.intl.string(u.t.xZvFpK),
                tag: 'label',
                error: p,
                titleClassName: g.roleHeader,
                children: [
                    (0, n.jsx)(o.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: u.intl.string(u.t.CllC5u)
                    }),
                    (0, n.jsx)(o.LZC, { size: 8 }),
                    (0, n.jsx)(d.Z, {
                        newRoleParams: e,
                        setNewRoleParams: a
                    })
                ]
            }));
}
