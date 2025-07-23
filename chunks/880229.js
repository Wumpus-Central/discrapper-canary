(n.d(t, {
    ImportBenefitsFromRoleModal: () => G,
    ImportBenefitsFromSubscriptionListingModal: () => H
}),
    n(388685),
    n(953529),
    n(361932),
    n(187205));
var i = n(255367),
    l = n(73800),
    r = n(120356),
    o = n.n(r),
    a = n(149765),
    s = n(866442),
    c = n(442837),
    d = n(902704),
    m = n(82659),
    h = n(477690),
    u = n(481060),
    x = n(596454),
    f = n(211266),
    j = n(471445),
    p = n(605436),
    g = n(91218),
    _ = n(313201),
    v = n(339085),
    b = n(518738),
    C = n(131704),
    w = n(324067),
    N = n(485386),
    k = n(430824),
    I = n(259580),
    y = n(624138),
    S = n(817460),
    Z = n(166803),
    T = n(629262),
    M = n(686807),
    z = n(981631),
    B = n(388032),
    E = n(818771);
let O = (0, _.hQ)(),
    R = (0, _.hQ)(),
    D = (0, y.Mg)(h.Z.IMPORT_BENEFITS_MODAL_ROLE_ICON_SIZE);
function P(e) {
    var t;
    let { emojiId: n, emojiName: l, className: r } = e,
        o = (0, c.e7)([v.ZP], () => (null != n ? v.ZP.getCustomEmojiById(n) : void 0));
    return (0, i.jsx)(x.Z, {
        emojiId: n,
        emojiName: l,
        animated: null != (t = null == o ? void 0 : o.animated) && t,
        className: r
    });
}
function L(e) {
    let { icon: t, children: n, checked: l, disabled: r = !1, onChange: a } = e,
        s = l || r;
    return (0, i.jsxs)('label', {
        className: o()(E.row, {
            [E.checked]: s,
            [E.disabled]: r
        }),
        children: [
            (0, i.jsx)('div', {
                className: E.rowIconWrapper,
                children: t
            }),
            (0, i.jsx)('div', {
                className: E.rowText,
                children: n
            }),
            (0, i.jsxs)('div', {
                className: E.rowCheckbox,
                children: [
                    (0, i.jsx)(u.tEY, {
                        children: (0, i.jsx)('input', {
                            type: 'checkbox',
                            checked: s,
                            disabled: r,
                            className: E.checkboxInput,
                            onChange: function (e) {
                                a(e.target.checked);
                            }
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: E.checkboxDisplay,
                        children: (0, i.jsx)(u.dz2, {
                            size: 'md',
                            color: 'currentColor',
                            className: E.checkboxIcon,
                            'aria-hidden': !0
                        })
                    })
                ]
            })
        ]
    });
}
function F(e) {
    let { title: t, selectAllText: n, benefits: l, dupeBenefits: r, selectedBenefits: o, onToggleBenefit: a } = e,
        s = l.every((e) => o.has(e));
    return l.length > 0
        ? (0, i.jsxs)(u.hjN, {
              title: t,
              className: E.section,
              children: [
                  l.length - r.size > 1 &&
                      (0, i.jsx)('div', {
                          className: E.list,
                          children: (0, i.jsx)(L, {
                              icon: (0, i.jsx)(u.avL, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: E.rowIcon
                              }),
                              checked: s,
                              onChange: function (e) {
                                  for (let t of l) r.has(t) || a(t, e);
                              },
                              children: (0, i.jsx)(u.Text, {
                                  color: 'header-primary',
                                  variant: 'text-md/normal',
                                  children: n
                              })
                          })
                      }),
                  (0, i.jsx)('div', {
                      className: E.list,
                      children: l.map((e) =>
                          (0, i.jsxs)(
                              L,
                              {
                                  icon: (0, i.jsx)(P, {
                                      emojiId: e.emoji_id,
                                      emojiName: e.emoji_name,
                                      className: E.rowIcon
                                  }),
                                  checked: o.has(e),
                                  disabled: r.has(e),
                                  onChange: (t) => a(e, t),
                                  children: [
                                      (0, i.jsx)(u.Text, {
                                          color: 'header-primary',
                                          variant: 'text-md/semibold',
                                          children: (0, M.Z)(e)
                                      }),
                                      (0, i.jsx)(u.Text, {
                                          color: 'interactive-normal',
                                          variant: 'text-sm/normal',
                                          children: e.description
                                      })
                                  ]
                              },
                              (0, S.ab)(e)
                          )
                      )
                  })
              ]
          })
        : null;
}
function H(e) {
    let { transitionState: t, fromSubscriptionListing: n, existingChannelBenefits: r, existingIntangibleBenefits: o, onSubmit: a, onClose: s } = e,
        c = n.role_benefits.benefits,
        [h, x] = l.useState(() => new Set(c)),
        f = l.useMemo(() => c.filter(S.rC), [c]),
        j = (0, T.Z)(f),
        p = l.useMemo(() => c.filter(S.lL), [c]),
        g = l.useMemo(() => new Set(j.filter((e) => r.some((t) => t.ref_id === e.ref_id))), [j, r]),
        _ = l.useMemo(() => new Set(p.filter((e) => o.some((t) => (0, d.Z)(e, t)))), [o, p]);
    function v(e, t) {
        x((n) => {
            let i = new Set(n);
            return (t ? i.add(e) : i.delete(e), i);
        });
    }
    function b(e) {
        e.preventDefault();
        let t = c.filter((e) => h.has(e));
        (a(
            t.filter(S.rC).filter((e) => !g.has(e)),
            t.filter(S.lL).filter((e) => !_.has(e))
        ),
            s());
    }
    return (0, i.jsx)('form', {
        onSubmit: b,
        children: (0, i.jsxs)(m.Modal, {
            transitionState: t,
            onClose: s,
            title: B.intl.format(B.t['7zpiYG'], { tierName: n.name }).toString(),
            actions: [
                {
                    variant: 'secondary',
                    text: B.intl.string(B.t['ETE/oK']),
                    onClick: s
                },
                {
                    variant: 'primary',
                    text: B.intl.string(B.t['27a219']),
                    disabled: 0 === h.size,
                    onClick: b
                }
            ],
            children: [
                0 === j.length &&
                    0 === p.length &&
                    (0, i.jsx)(u.Text, {
                        variant: 'text-md/normal',
                        children: B.intl.string(B.t['I+16xs'])
                    }),
                (0, i.jsx)(F, {
                    title: B.intl.string(B.t.S2kKzM),
                    selectAllText: B.intl.string(B.t['5Q/fLC']),
                    benefits: j,
                    dupeBenefits: g,
                    selectedBenefits: h,
                    onToggleBenefit: v
                }),
                (0, i.jsx)(F, {
                    title: B.intl.string(B.t.RdwKw8),
                    selectAllText: B.intl.string(B.t.aJPLVF),
                    benefits: p,
                    dupeBenefits: _,
                    selectedBenefits: h,
                    onToggleBenefit: v
                })
            ]
        })
    });
}
function K(e) {
    var t;
    let { guildId: n, role: l, channelCount: r, onSelect: o } = e,
        a = (0, b.p9)({
            guildId: n,
            roleId: l.id,
            size: D
        });
    return (0, i.jsxs)(u.P3F, {
        className: E.roleRow,
        onClick: o,
        children: [
            (0, i.jsx)('div', {
                className: E.rowIconWrapper,
                children:
                    null != a
                        ? (0, i.jsx)(
                              g.Z,
                              (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          i = Object.keys(n);
                                      ('function' == typeof Object.getOwnPropertySymbols &&
                                          (i = i.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              })
                                          )),
                                          i.forEach(function (t) {
                                              var i;
                                              ((i = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: i,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = i));
                                          }));
                                  }
                                  return e;
                              })({}, a)
                          )
                        : (0, i.jsx)(u.lZ8, {
                              size: 'custom',
                              width: 23,
                              height: 23,
                              color: null != (t = l.colorString) ? t : (0, s.Rf)(z.p6O),
                              className: E.roleRowIconDefault
                          })
            }),
            (0, i.jsxs)('div', {
                className: E.rowText,
                children: [
                    (0, i.jsx)(u.Text, {
                        color: 'header-primary',
                        variant: 'text-md/normal',
                        className: E.__invalid_benefitTitle,
                        children: l.name
                    }),
                    (0, i.jsx)(u.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: B.intl.format(B.t['2KzH8/'], { num: r })
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: E.rowCheckbox,
                children: (0, i.jsx)(I.Z, { direction: I.Z.Directions.RIGHT })
            })
        ]
    });
}
function W(e) {
    let { guild: t, onSelect: n } = e,
        r = (0, c.e7)([N.Z], () => N.Z.getRoles(t.id)),
        o = (0, c.e7)([w.Z], () => w.Z.getCategories(t.id)),
        s = l.useMemo(
            () =>
                o._categories.flatMap((e) =>
                    o[e.channel.id]
                        .filter((e) => {
                            let { channel: t } = e;
                            return C.zS.has(t.type);
                        })
                        .map((e) => {
                            let { channel: t } = e;
                            return t;
                        })
                ),
            [o]
        ),
        d = l.useMemo(
            () =>
                Object.values(r).flatMap((e) => {
                    var n;
                    if ((0, p.pM)(t.id, e.id) || (null == (n = e.tags) ? void 0 : n.subscription_listing_id) != null || a.Db(e.permissions, z.TC2)) return [];
                    let i = (0, Z.Z)(s, e).length;
                    return i > 0
                        ? {
                              role: e,
                              channelCount: i
                          }
                        : [];
                }),
            [t, r, s]
        );
    return d.length > 0
        ? (0, i.jsx)('div', {
              className: E.list,
              children: d.map((e) =>
                  (0, i.jsx)(
                      K,
                      {
                          guildId: t.id,
                          role: e.role,
                          channelCount: e.channelCount,
                          onSelect: () => n(e.role)
                      },
                      e.role.id
                  )
              )
          })
        : (0, i.jsx)(u.Text, {
              variant: 'text-md/normal',
              children: B.intl.string(B.t.u09gKi)
          });
}
function q(e) {
    let { onClose: t, guildId: n, onSelect: l } = e,
        r = (0, c.e7)([k.Z], () => k.Z.getGuild(n));
    return null == r
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)(u.xBx, {
                      'data-migration-pending': !0,
                      children: [
                          (0, i.jsx)(u.X6q, {
                              id: O,
                              variant: 'heading-md/semibold',
                              children: B.intl.string(B.t['3JrZ/P'])
                          }),
                          (0, i.jsx)(u.olH, {
                              'data-migration-pending': !0,
                              className: E.modalCloseButton,
                              onClick: t
                          })
                      ]
                  }),
                  (0, i.jsx)(u.hzk, {
                      'data-migration-pending': !0,
                      className: E.modalContent,
                      children: (0, i.jsx)(W, {
                          guild: r,
                          onSelect: l
                      })
                  })
              ]
          });
}
function A(e) {
    let { onClose: t, guildId: n, role: r, onCancel: o, onImport: a } = e,
        s = l.useRef(r);
    null != r && (s.current = r);
    let c = null != r ? r : s.current,
        d = (0, f.Z)(() => {
            let e = w.Z.getCategories(n);
            return e._categories.flatMap((t) =>
                e[t.channel.id]
                    .filter((e) => {
                        let { channel: t } = e;
                        return C.zS.has(t.type);
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return t;
                    })
            );
        }),
        m = l.useMemo(() => (0, Z.Z)(d, c), [d, c]),
        [h, x] = l.useState(() => new Set(m.map((e) => e.id)));
    function p(e, t) {
        x((n) => {
            let i = new Set(n);
            return (t ? i.add(e) : i.delete(e), i);
        });
    }
    return (0, i.jsxs)('form', {
        onSubmit: function (e) {
            (e.preventDefault(), a(m.map((e) => e.id).filter((e) => h.has(e))), t());
        },
        className: E.slideForm,
        children: [
            (0, i.jsxs)(u.xBx, {
                'data-migration-pending': !0,
                children: [
                    (0, i.jsx)(u.X6q, {
                        id: R,
                        variant: 'heading-md/semibold',
                        children: B.intl.format(B.t.iuPodH, { roleName: c.name })
                    }),
                    (0, i.jsx)(u.olH, {
                        'data-migration-pending': !0,
                        className: E.modalCloseButton,
                        onClick: t
                    })
                ]
            }),
            (0, i.jsxs)(u.hzk, {
                'data-migration-pending': !0,
                className: E.modalContent,
                children: [
                    m.length > 1 &&
                        (0, i.jsx)('div', {
                            className: E.list,
                            children: (0, i.jsx)(L, {
                                icon: (0, i.jsx)(u.avL, {
                                    size: 'md',
                                    color: 'currentColor'
                                }),
                                checked: h.size === m.length,
                                onChange: function (e) {
                                    for (let t of m) p(t.id, e);
                                },
                                children: (0, i.jsx)(u.Text, {
                                    color: 'header-primary',
                                    variant: 'text-md/normal',
                                    children: B.intl.string(B.t['5Q/fLC'])
                                })
                            })
                        }),
                    (0, i.jsx)('div', {
                        className: E.list,
                        children: m.map((e) => {
                            var t;
                            let n = null != (t = (0, j.Th)(e.type)) ? t : u.VL1;
                            return (0, i.jsx)(
                                L,
                                {
                                    icon: (0, i.jsx)('div', {
                                        className: E.rowIcon,
                                        children: (0, i.jsx)(n, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: '100%',
                                            height: '100%'
                                        })
                                    }),
                                    checked: h.has(e.id),
                                    onChange: (t) => p(e.id, t),
                                    children: (0, i.jsx)(u.Text, {
                                        color: 'header-primary',
                                        variant: 'text-md/normal',
                                        className: E.__invalid_benefitTitle,
                                        children: e.name
                                    })
                                },
                                e.id
                            );
                        })
                    })
                ]
            }),
            (0, i.jsx)(u.mzw, {
                'data-migration-pending': !0,
                children: (0, i.jsxs)(u.hE2, {
                    direction: 'horizontal-reverse',
                    children: [
                        (0, i.jsx)(u.zxk, {
                            variant: 'primary',
                            text: B.intl.string(B.t['1j8So6']),
                            type: 'submit'
                        }),
                        (0, i.jsx)(u.zxk, {
                            variant: 'secondary',
                            text: B.intl.string(B.t['ETE/oK']),
                            onClick: o
                        })
                    ]
                })
            })
        ]
    });
}
function G(e) {
    let { transitionState: t, guildId: n, onClose: r, onImport: o } = e,
        [a, s] = l.useState();
    return (0, i.jsx)(u.Y0X, {
        'data-migration-pending': !0,
        transitionState: t,
        'aria-labelledby': null == a ? O : R,
        parentComponent: 'ImportBenefitsModal',
        children: (0, i.jsxs)(u.MyZ, {
            contentDisplay: 'flex',
            activeSlide: +(null != a),
            width: 440,
            children: [
                (0, i.jsx)(u.Mi4, {
                    id: 0,
                    children: (0, i.jsx)(q, {
                        onClose: r,
                        guildId: n,
                        onSelect: s
                    })
                }),
                (0, i.jsx)(u.Mi4, {
                    id: 1,
                    children: (0, i.jsx)(A, {
                        onClose: r,
                        guildId: n,
                        role: a,
                        onCancel: () => s(void 0),
                        onImport: o
                    })
                })
            ]
        })
    });
}
