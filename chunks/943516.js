A.d(t, {
    YP: function () {
        return h;
    },
    ZP: function () {
        return v;
    },
    aN: function () {
        return m;
    }
});
var n = A(200651);
A(192379);
var r = A(512722),
    a = A.n(r),
    i = A(866442),
    l = A(399606),
    o = A(481060),
    s = A(430824),
    d = A(470209),
    c = A(981631),
    u = A(388032),
    g = A(288888);
function h() {
    return {
        name: '',
        color: c.p6O
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
                          (0, n.jsx)(o.HiddenVisually, { children: u.intl.format(u.t['94dBOT'], { color: (0, i.Rf)(r.color) }) }),
                          (0, n.jsx)('div', {
                              className: g.attachedRoleColor,
                              style: { backgroundColor: (0, i.Rf)(r.color) }
                          }),
                          (0, n.jsx)(o.Spacer, {
                              size: 8,
                              horizontal: !0
                          }),
                          (0, n.jsx)(o.Text, {
                              variant: 'text-md/normal',
                              color: 'text-normal',
                              children: r.name
                          }),
                          null != A &&
                              (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(o.Spacer, {
                                          size: 12,
                                          horizontal: !0
                                      }),
                                      (0, n.jsx)(o.Clickable, {
                                          'aria-label': u.intl.string(u.t.tO2HIy),
                                          onClick: A,
                                          className: g.attachedRoleClose,
                                          children: (0, n.jsx)(o.XSmallIcon, {
                                              size: 'xs',
                                              color: 'currentColor',
                                              className: g.attachedRoleCloseIcon
                                          })
                                      })
                                  ]
                              })
                      ]
                  })
                : (0, n.jsx)(o.Spinner, { type: o.Spinner.Type.PULSING_ELLIPSIS })),
        (0, n.jsx)('div', {
            className: g.attachedRoleContainer,
            children: t
        })
    );
}
function m() {
    return (0, n.jsx)(o.CircleWarningIcon, {
        size: 'xs',
        color: 'currentColor',
        className: g.warningIcon
    });
}
function f(e) {
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
                            color: 'text-normal',
                            children: e
                        })
                })
            }),
            (0, n.jsxs)(o.Heading, {
                className: g.detachWarningHeading,
                variant: 'text-md/medium',
                color: 'text-normal',
                children: [
                    (0, n.jsx)(o.UserMinusIcon, {
                        size: 'sm',
                        color: 'currentColor'
                    }),
                    (0, n.jsx)(o.Spacer, {
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
            (0, n.jsxs)(o.Heading, {
                className: g.detachWarningHeading,
                variant: 'text-md/medium',
                color: 'text-normal',
                children: [
                    (0, n.jsx)(o.TrashIcon, {
                        size: 'sm',
                        color: 'currentColor'
                    }),
                    (0, n.jsx)(o.Spacer, {
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
function v(e) {
    let { newRoleParams: t, setNewRoleParams: r, guildId: i, productId: c, listingRoleId: h, error: v } = e,
        C = (0, l.e7)([s.Z], () => (null != h ? s.Z.getRole(i, h) : void 0));
    return null === t
        ? (0, n.jsxs)(o.FormItem, {
              title: (0, n.jsxs)('div', {
                  className: g.warningTitle,
                  children: [
                      (0, n.jsx)(m, {}),
                      (0, n.jsx)(o.Spacer, {
                          horizontal: !0,
                          size: 4
                      }),
                      u.intl.string(u.t.ovXIrK)
                  ]
              }),
              tag: 'label',
              error: v,
              titleClassName: g.roleHeader,
              children: [
                  (0, n.jsx)(o.Text, {
                      variant: 'text-xs/normal',
                      color: 'text-muted',
                      children: u.intl.string(u.t.H7coX1)
                  }),
                  (0, n.jsx)(o.Spacer, { size: 8 }),
                  (0, n.jsxs)('div', {
                      className: g.reattachRoleRow,
                      children: [
                          (0, n.jsx)(p, {
                              role: C,
                              onRemove: void 0
                          }),
                          (0, n.jsx)(o.Spacer, {
                              horizontal: !0,
                              size: 8
                          }),
                          (0, n.jsxs)(o.Button, {
                              innerClassName: g.restoreDetachedRoleButtonInner,
                              color: o.Button.Colors.PRIMARY,
                              onClick: () => {
                                  r(void 0);
                              },
                              children: [
                                  (0, n.jsx)(o.Text, {
                                      variant: 'text-md/normal',
                                      color: 'none',
                                      children: u.intl.string(u.t.KkRpFh)
                                  }),
                                  (0, n.jsx)(o.Spacer, {
                                      horizontal: !0,
                                      size: 8
                                  }),
                                  (0, n.jsx)(o.UndoIcon, {
                                      size: 'xs',
                                      color: 'currentColor'
                                  })
                              ]
                          })
                      ]
                  })
              ]
          })
        : null != h
          ? (0, n.jsxs)(o.FormItem, {
                title: u.intl.string(u.t.zIg9t7),
                tag: 'label',
                error: v,
                titleClassName: g.roleHeader,
                children: [
                    (0, n.jsx)(o.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: u.intl.string(u.t.OfuEkJ)
                    }),
                    (0, n.jsx)(o.Spacer, { size: 8 }),
                    (0, n.jsx)(p, {
                        role: C,
                        onRemove: () => {
                            a()(null != c, 'productId cannot be null'),
                                a()(null != C, 'no role attached'),
                                !(function (e) {
                                    let { onConfirm: t, roleName: r } = e;
                                    (0, o.openModalLazy)(async () => {
                                        let { default: e } = await Promise.resolve().then(A.bind(A, 776045));
                                        return (A) =>
                                            (0, n.jsx)(e, {
                                                title: u.intl.string(u.t.Y3Hi3d),
                                                body: (0, n.jsx)(f, { roleName: r }),
                                                cta: u.intl.string(u.t.VawZV1),
                                                closeLabel: u.intl.string(u.t['6y+3Bw']),
                                                onConfirm: t,
                                                ...A
                                            });
                                    });
                                })({
                                    roleName: C.name,
                                    onConfirm: () => r(null)
                                });
                        }
                    })
                ]
            })
          : (a()(null != t, 'newRoleParams cannot be null at this point'),
            (0, n.jsxs)(o.FormItem, {
                required: !0,
                title: u.intl.string(u.t.xZvFpK),
                tag: 'label',
                error: v,
                titleClassName: g.roleHeader,
                children: [
                    (0, n.jsx)(o.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: u.intl.string(u.t.CllC5u)
                    }),
                    (0, n.jsx)(o.Spacer, { size: 8 }),
                    (0, n.jsx)(d.Z, {
                        newRoleParams: t,
                        setNewRoleParams: r
                    })
                ]
            }));
}
