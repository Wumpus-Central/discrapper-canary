(n.d(t, {
    ImportBenefitsFromRoleModal: () => q,
    ImportBenefitsFromSubscriptionListingModal: () => L
}),
    n(388685),
    n(953529),
    n(361932),
    n(187205));
var i = n(255367),
    l = n(73800),
    r = n(120356),
    o = n.n(r),
    a = n(442837),
    s = n(902704),
    c = n(82659),
    d = n(477690),
    m = n(481060),
    h = n(596454),
    u = n(211266),
    x = n(471445),
    f = n(91218),
    j = n(313201),
    g = n(339085),
    p = n(518738),
    _ = n(131704),
    v = n(345162),
    b = n(324067),
    C = n(485386),
    w = n(430824),
    N = n(259580),
    I = n(624138),
    k = n(817460),
    y = n(166803),
    S = n(629262),
    Z = n(686807),
    T = n(981631),
    z = n(388032),
    M = n(818771);
let B = (0, j.hQ)(),
    E = (0, j.hQ)(),
    P = (0, I.Mg)(d.Z.IMPORT_BENEFITS_MODAL_ROLE_ICON_SIZE);
function R(e) {
    var t;
    let { emojiId: n, emojiName: l, className: r } = e,
        o = (0, a.e7)([g.ZP], () => (null != n ? g.ZP.getCustomEmojiById(n) : void 0));
    return (0, i.jsx)(h.Z, {
        emojiId: n,
        emojiName: l,
        animated: null != (t = null == o ? void 0 : o.animated) && t,
        className: r
    });
}
function O(e) {
    let { icon: t, children: n, checked: l, disabled: r = !1, onChange: a } = e,
        s = l || r;
    return (0, i.jsxs)('label', {
        className: o()(M.row, {
            [M.checked]: s,
            [M.disabled]: r
        }),
        children: [
            (0, i.jsx)('div', {
                className: M.rowIconWrapper,
                children: t
            }),
            (0, i.jsx)('div', {
                className: M.rowText,
                children: n
            }),
            (0, i.jsxs)('div', {
                className: M.rowCheckbox,
                children: [
                    (0, i.jsx)(m.tEY, {
                        children: (0, i.jsx)('input', {
                            type: 'checkbox',
                            checked: s,
                            disabled: r,
                            className: M.checkboxInput,
                            onChange: function (e) {
                                a(e.target.checked);
                            }
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: M.checkboxDisplay,
                        children: (0, i.jsx)(m.dz2, {
                            size: 'md',
                            color: 'currentColor',
                            className: M.checkboxIcon,
                            'aria-hidden': !0
                        })
                    })
                ]
            })
        ]
    });
}
function D(e) {
    let { title: t, selectAllText: n, benefits: l, dupeBenefits: r, selectedBenefits: o, onToggleBenefit: a } = e,
        s = l.every((e) => o.has(e));
    return l.length > 0
        ? (0, i.jsxs)(m.hjN, {
              title: t,
              className: M.section,
              children: [
                  l.length - r.size > 1 &&
                      (0, i.jsx)('div', {
                          className: M.list,
                          children: (0, i.jsx)(O, {
                              icon: (0, i.jsx)(m.avL, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: M.rowIcon
                              }),
                              checked: s,
                              onChange: function (e) {
                                  for (let t of l) r.has(t) || a(t, e);
                              },
                              children: (0, i.jsx)(m.Text, {
                                  color: 'header-primary',
                                  variant: 'text-md/normal',
                                  children: n
                              })
                          })
                      }),
                  (0, i.jsx)('div', {
                      className: M.list,
                      children: l.map((e) =>
                          (0, i.jsxs)(
                              O,
                              {
                                  icon: (0, i.jsx)(R, {
                                      emojiId: e.emoji_id,
                                      emojiName: e.emoji_name,
                                      className: M.rowIcon
                                  }),
                                  checked: o.has(e),
                                  disabled: r.has(e),
                                  onChange: (t) => a(e, t),
                                  children: [
                                      (0, i.jsx)(m.Text, {
                                          color: 'header-primary',
                                          variant: 'text-md/semibold',
                                          children: (0, Z.Z)(e)
                                      }),
                                      (0, i.jsx)(m.Text, {
                                          color: 'interactive-normal',
                                          variant: 'text-sm/normal',
                                          children: e.description
                                      })
                                  ]
                              },
                              (0, k.ab)(e)
                          )
                      )
                  })
              ]
          })
        : null;
}
function L(e) {
    let { transitionState: t, fromSubscriptionListing: n, existingChannelBenefits: r, existingIntangibleBenefits: o, onSubmit: a, onClose: d } = e,
        h = n.role_benefits.benefits,
        [u, x] = l.useState(() => new Set(h)),
        f = l.useMemo(() => h.filter(k.rC), [h]),
        j = (0, S.Z)(f),
        g = l.useMemo(() => h.filter(k.lL), [h]),
        p = l.useMemo(() => new Set(j.filter((e) => r.some((t) => t.ref_id === e.ref_id))), [j, r]),
        _ = l.useMemo(() => new Set(g.filter((e) => o.some((t) => (0, s.Z)(e, t)))), [o, g]);
    function v(e, t) {
        x((n) => {
            let i = new Set(n);
            return (t ? i.add(e) : i.delete(e), i);
        });
    }
    function b(e) {
        e.preventDefault();
        let t = h.filter((e) => u.has(e));
        (a(
            t.filter(k.rC).filter((e) => !p.has(e)),
            t.filter(k.lL).filter((e) => !_.has(e))
        ),
            d());
    }
    return (0, i.jsx)('form', {
        onSubmit: b,
        children: (0, i.jsxs)(c.Modal, {
            transitionState: t,
            onClose: d,
            title: z.intl.format(z.t['7zpiYG'], { tierName: n.name }).toString(),
            actions: [
                {
                    variant: 'secondary',
                    text: z.intl.string(z.t['ETE/oK']),
                    onClick: d
                },
                {
                    variant: 'primary',
                    text: z.intl.string(z.t['27a219']),
                    disabled: 0 === u.size,
                    onClick: b
                }
            ],
            children: [
                0 === j.length &&
                    0 === g.length &&
                    (0, i.jsx)(m.Text, {
                        variant: 'text-md/normal',
                        children: z.intl.string(z.t['I+16xs'])
                    }),
                (0, i.jsx)(D, {
                    title: z.intl.string(z.t.S2kKzM),
                    selectAllText: z.intl.string(z.t['5Q/fLC']),
                    benefits: j,
                    dupeBenefits: p,
                    selectedBenefits: u,
                    onToggleBenefit: v
                }),
                (0, i.jsx)(D, {
                    title: z.intl.string(z.t.RdwKw8),
                    selectAllText: z.intl.string(z.t.aJPLVF),
                    benefits: g,
                    dupeBenefits: _,
                    selectedBenefits: u,
                    onToggleBenefit: v
                })
            ]
        })
    });
}
function F(e) {
    var t;
    let { guildId: n, role: l, channelCount: r, onSelect: o } = e,
        a = (0, p.p9)({
            guildId: n,
            roleId: l.id,
            size: P
        });
    return (0, i.jsxs)(m.P3F, {
        className: M.roleRow,
        onClick: o,
        children: [
            (0, i.jsx)('div', {
                className: M.rowIconWrapper,
                children:
                    null != a
                        ? (0, i.jsx)(
                              f.Z,
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
                        : (0, i.jsx)(m.lZ8, {
                              size: 'custom',
                              width: 23,
                              height: 23,
                              color: null != (t = l.colorString) ? t : T.Pbq,
                              className: M.roleRowIconDefault
                          })
            }),
            (0, i.jsxs)('div', {
                className: M.rowText,
                children: [
                    (0, i.jsx)(m.Text, {
                        color: 'header-primary',
                        variant: 'text-md/normal',
                        className: M.__invalid_benefitTitle,
                        children: l.name
                    }),
                    (0, i.jsx)(m.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: z.intl.format(z.t['2KzH8/'], { num: r })
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: M.rowCheckbox,
                children: (0, i.jsx)(N.Z, { direction: N.Z.Directions.RIGHT })
            })
        ]
    });
}
function H(e) {
    let { guild: t, onSelect: n } = e,
        r = (0, a.e7)([C.Z], () => C.Z.getSortedRoles(t.id)),
        o = (0, a.e7)([b.Z], () => b.Z.getCategories(t.id)),
        s = l.useMemo(
            () =>
                o._categories.flatMap((e) =>
                    o[e.channel.id]
                        .filter((e) => {
                            let { channel: t } = e;
                            return _.zS.has(t.type);
                        })
                        .map((e) => {
                            let { channel: t } = e;
                            return t;
                        })
                ),
            [o]
        ),
        c = l.useMemo(
            () =>
                r.flatMap((e) => {
                    var t;
                    if ((0, v.fI)(e) || (null == (t = e.tags) ? void 0 : t.subscription_listing_id) != null || (0, v._N)(e, T.TC2)) return [];
                    let n = (0, y.Z)(s, e).length;
                    return n > 0
                        ? {
                              role: e,
                              channelCount: n
                          }
                        : [];
                }),
            [r, s]
        );
    return c.length > 0
        ? (0, i.jsx)('div', {
              className: M.list,
              children: c.map((e) =>
                  (0, i.jsx)(
                      F,
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
        : (0, i.jsx)(m.Text, {
              variant: 'text-md/normal',
              children: z.intl.string(z.t.u09gKi)
          });
}
function K(e) {
    let { onClose: t, guildId: n, onSelect: l } = e,
        r = (0, a.e7)([w.Z], () => w.Z.getGuild(n));
    return null == r
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)(m.xBx, {
                      'data-migration-pending': !0,
                      children: [
                          (0, i.jsx)(m.X6q, {
                              id: B,
                              variant: 'heading-md/semibold',
                              children: z.intl.string(z.t['3JrZ/P'])
                          }),
                          (0, i.jsx)(m.olH, {
                              'data-migration-pending': !0,
                              className: M.modalCloseButton,
                              onClick: t
                          })
                      ]
                  }),
                  (0, i.jsx)(m.hzk, {
                      'data-migration-pending': !0,
                      className: M.modalContent,
                      children: (0, i.jsx)(H, {
                          guild: r,
                          onSelect: l
                      })
                  })
              ]
          });
}
function W(e) {
    let { onClose: t, guildId: n, role: r, onCancel: o, onImport: a } = e,
        s = l.useRef(r);
    null != r && (s.current = r);
    let c = null != r ? r : s.current,
        d = (0, u.Z)(() => {
            let e = b.Z.getCategories(n);
            return e._categories.flatMap((t) =>
                e[t.channel.id]
                    .filter((e) => {
                        let { channel: t } = e;
                        return _.zS.has(t.type);
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return t;
                    })
            );
        }),
        h = l.useMemo(() => (0, y.Z)(d, c), [d, c]),
        [f, j] = l.useState(() => new Set(h.map((e) => e.id)));
    function g(e, t) {
        j((n) => {
            let i = new Set(n);
            return (t ? i.add(e) : i.delete(e), i);
        });
    }
    return (0, i.jsxs)('form', {
        onSubmit: function (e) {
            (e.preventDefault(), a(h.map((e) => e.id).filter((e) => f.has(e))), t());
        },
        className: M.slideForm,
        children: [
            (0, i.jsxs)(m.xBx, {
                'data-migration-pending': !0,
                children: [
                    (0, i.jsx)(m.X6q, {
                        id: E,
                        variant: 'heading-md/semibold',
                        children: z.intl.format(z.t.iuPodH, { roleName: c.name })
                    }),
                    (0, i.jsx)(m.olH, {
                        'data-migration-pending': !0,
                        className: M.modalCloseButton,
                        onClick: t
                    })
                ]
            }),
            (0, i.jsxs)(m.hzk, {
                'data-migration-pending': !0,
                className: M.modalContent,
                children: [
                    h.length > 1 &&
                        (0, i.jsx)('div', {
                            className: M.list,
                            children: (0, i.jsx)(O, {
                                icon: (0, i.jsx)(m.avL, {
                                    size: 'md',
                                    color: 'currentColor'
                                }),
                                checked: f.size === h.length,
                                onChange: function (e) {
                                    for (let t of h) g(t.id, e);
                                },
                                children: (0, i.jsx)(m.Text, {
                                    color: 'header-primary',
                                    variant: 'text-md/normal',
                                    children: z.intl.string(z.t['5Q/fLC'])
                                })
                            })
                        }),
                    (0, i.jsx)('div', {
                        className: M.list,
                        children: h.map((e) => {
                            var t;
                            let n = null != (t = (0, x.Th)(e.type)) ? t : m.VL1;
                            return (0, i.jsx)(
                                O,
                                {
                                    icon: (0, i.jsx)('div', {
                                        className: M.rowIcon,
                                        children: (0, i.jsx)(n, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: '100%',
                                            height: '100%'
                                        })
                                    }),
                                    checked: f.has(e.id),
                                    onChange: (t) => g(e.id, t),
                                    children: (0, i.jsx)(m.Text, {
                                        color: 'header-primary',
                                        variant: 'text-md/normal',
                                        className: M.__invalid_benefitTitle,
                                        children: e.name
                                    })
                                },
                                e.id
                            );
                        })
                    })
                ]
            }),
            (0, i.jsx)(m.mzw, {
                'data-migration-pending': !0,
                children: (0, i.jsxs)(m.hE2, {
                    direction: 'horizontal-reverse',
                    children: [
                        (0, i.jsx)(m.zxk, {
                            variant: 'primary',
                            text: z.intl.string(z.t['1j8So6']),
                            type: 'submit'
                        }),
                        (0, i.jsx)(m.zxk, {
                            variant: 'secondary',
                            text: z.intl.string(z.t['ETE/oK']),
                            onClick: o
                        })
                    ]
                })
            })
        ]
    });
}
function q(e) {
    let { transitionState: t, guildId: n, onClose: r, onImport: o } = e,
        [a, s] = l.useState();
    return (0, i.jsx)(m.Y0X, {
        'data-migration-pending': !0,
        transitionState: t,
        'aria-labelledby': null == a ? B : E,
        parentComponent: 'ImportBenefitsModal',
        children: (0, i.jsxs)(m.MyZ, {
            contentDisplay: 'flex',
            activeSlide: +(null != a),
            width: 440,
            children: [
                (0, i.jsx)(m.Mi4, {
                    id: 0,
                    children: (0, i.jsx)(K, {
                        onClose: r,
                        guildId: n,
                        onSelect: s
                    })
                }),
                (0, i.jsx)(m.Mi4, {
                    id: 1,
                    children: (0, i.jsx)(W, {
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
