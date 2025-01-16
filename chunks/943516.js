n.d(t, {
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
var A = n(200651);
n(192379);
var r = n(512722),
    a = n.n(r),
    l = n(866442),
    i = n(399606),
    o = n(481060),
    s = n(430824),
    d = n(470209),
    c = n(981631),
    u = n(388032),
    g = n(288888);
function h() {
    return {
        name: '',
        color: c.p6O
    };
}
function p(e) {
    let t,
        { onRemove: n, role: r } = e;
    return (
        (t =
            null != r
                ? (0, A.jsxs)(A.Fragment, {
                      children: [
                          (0, A.jsx)(o.HiddenVisually, { children: u.intl.format(u.t['94dBOT'], { color: (0, l.Rf)(r.color) }) }),
                          (0, A.jsx)('div', {
                              className: g.attachedRoleColor,
                              style: { backgroundColor: (0, l.Rf)(r.color) }
                          }),
                          (0, A.jsx)(o.Spacer, {
                              size: 8,
                              horizontal: !0
                          }),
                          (0, A.jsx)(o.Text, {
                              variant: 'text-md/normal',
                              color: 'text-normal',
                              children: r.name
                          }),
                          null != n &&
                              (0, A.jsxs)(A.Fragment, {
                                  children: [
                                      (0, A.jsx)(o.Spacer, {
                                          size: 12,
                                          horizontal: !0
                                      }),
                                      (0, A.jsx)(o.Clickable, {
                                          'aria-label': u.intl.string(u.t.tO2HIy),
                                          onClick: n,
                                          className: g.attachedRoleClose,
                                          children: (0, A.jsx)(o.XSmallIcon, {
                                              size: 'xs',
                                              color: 'currentColor',
                                              className: g.attachedRoleCloseIcon
                                          })
                                      })
                                  ]
                              })
                      ]
                  })
                : (0, A.jsx)(o.Spinner, { type: o.Spinner.Type.PULSING_ELLIPSIS })),
        (0, A.jsx)('div', {
            className: g.attachedRoleContainer,
            children: t
        })
    );
}
function m() {
    return (0, A.jsx)(o.CircleWarningIcon, {
        size: 'xs',
        color: 'currentColor',
        className: g.warningIcon
    });
}
function f(e) {
    let { roleName: t } = e;
    return (0, A.jsxs)(A.Fragment, {
        children: [
            (0, A.jsx)(o.Text, {
                variant: 'text-md/normal',
                color: 'text-muted',
                children: u.intl.format(u.t.i2x5aW, {
                    roleName: t,
                    emphasisHook: (e) =>
                        (0, A.jsx)(o.Text, {
                            tag: 'span',
                            variant: 'text-md/semibold',
                            color: 'text-normal',
                            children: e
                        })
                })
            }),
            (0, A.jsxs)(o.Heading, {
                className: g.detachWarningHeading,
                variant: 'text-md/medium',
                color: 'text-normal',
                children: [
                    (0, A.jsx)(o.UserMinusIcon, {
                        size: 'sm',
                        color: 'currentColor'
                    }),
                    (0, A.jsx)(o.Spacer, {
                        horizontal: !0,
                        size: 8
                    }),
                    u.intl.string(u.t.KWx4HR)
                ]
            }),
            (0, A.jsx)(o.Text, {
                variant: 'text-md/normal',
                color: 'text-muted',
                children: u.intl.string(u.t.hNHNpq)
            }),
            (0, A.jsxs)(o.Heading, {
                className: g.detachWarningHeading,
                variant: 'text-md/medium',
                color: 'text-normal',
                children: [
                    (0, A.jsx)(o.TrashIcon, {
                        size: 'sm',
                        color: 'currentColor'
                    }),
                    (0, A.jsx)(o.Spacer, {
                        horizontal: !0,
                        size: 8
                    }),
                    u.intl.string(u.t.WIPKAQ)
                ]
            }),
            (0, A.jsx)(o.Text, {
                variant: 'text-md/normal',
                color: 'text-muted',
                children: u.intl.string(u.t['40shJS'])
            })
        ]
    });
}
function v(e) {
    let { newRoleParams: t, setNewRoleParams: r, guildId: l, productId: c, listingRoleId: h, error: v } = e,
        C = (0, i.e7)([s.Z], () => (null != h ? s.Z.getRole(l, h) : void 0));
    return null === t
        ? (0, A.jsxs)(o.FormItem, {
              title: (0, A.jsxs)('div', {
                  className: g.warningTitle,
                  children: [
                      (0, A.jsx)(m, {}),
                      (0, A.jsx)(o.Spacer, {
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
                  (0, A.jsx)(o.Text, {
                      variant: 'text-xs/normal',
                      color: 'text-muted',
                      children: u.intl.string(u.t.H7coX1)
                  }),
                  (0, A.jsx)(o.Spacer, { size: 8 }),
                  (0, A.jsxs)('div', {
                      className: g.reattachRoleRow,
                      children: [
                          (0, A.jsx)(p, {
                              role: C,
                              onRemove: void 0
                          }),
                          (0, A.jsx)(o.Spacer, {
                              horizontal: !0,
                              size: 8
                          }),
                          (0, A.jsxs)(o.Button, {
                              innerClassName: g.restoreDetachedRoleButtonInner,
                              color: o.Button.Colors.PRIMARY,
                              onClick: () => {
                                  r(void 0);
                              },
                              children: [
                                  (0, A.jsx)(o.Text, {
                                      variant: 'text-md/normal',
                                      color: 'none',
                                      children: u.intl.string(u.t.KkRpFh)
                                  }),
                                  (0, A.jsx)(o.Spacer, {
                                      horizontal: !0,
                                      size: 8
                                  }),
                                  (0, A.jsx)(o.UndoIcon, {
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
          ? (0, A.jsxs)(o.FormItem, {
                title: u.intl.string(u.t.zIg9t7),
                tag: 'label',
                error: v,
                titleClassName: g.roleHeader,
                children: [
                    (0, A.jsx)(o.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: u.intl.string(u.t.OfuEkJ)
                    }),
                    (0, A.jsx)(o.Spacer, { size: 8 }),
                    (0, A.jsx)(p, {
                        role: C,
                        onRemove: () => {
                            a()(null != c, 'productId cannot be null'),
                                a()(null != C, 'no role attached'),
                                !(function (e) {
                                    let { onConfirm: t, roleName: r } = e;
                                    (0, o.openModalLazy)(async () => {
                                        let { default: e } = await Promise.resolve().then(n.bind(n, 776045));
                                        return (n) =>
                                            (0, A.jsx)(e, {
                                                title: u.intl.string(u.t.Y3Hi3d),
                                                body: (0, A.jsx)(f, { roleName: r }),
                                                cta: u.intl.string(u.t.VawZV1),
                                                closeLabel: u.intl.string(u.t['6y+3Bw']),
                                                onConfirm: t,
                                                ...n
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
            (0, A.jsxs)(o.FormItem, {
                required: !0,
                title: u.intl.string(u.t.xZvFpK),
                tag: 'label',
                error: v,
                titleClassName: g.roleHeader,
                children: [
                    (0, A.jsx)(o.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: u.intl.string(u.t.CllC5u)
                    }),
                    (0, A.jsx)(o.Spacer, { size: 8 }),
                    (0, A.jsx)(d.Z, {
                        newRoleParams: t,
                        setNewRoleParams: r
                    })
                ]
            }));
}
