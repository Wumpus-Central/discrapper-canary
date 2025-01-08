n.d(t, {
    C: function () {
        return V;
    },
    K: function () {
        return G;
    }
}),
    n(47120),
    n(390547);
var i,
    r,
    l = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    c = n(149765),
    d = n(866442),
    u = n(442837),
    m = n(902704),
    h = n(477690),
    g = n(481060),
    x = n(596454),
    p = n(211266),
    f = n(471445),
    C = n(605436),
    v = n(91218),
    _ = n(313201),
    N = n(339085),
    I = n(518738),
    T = n(131704),
    j = n(324067),
    b = n(430824),
    S = n(259580),
    E = n(624138),
    R = n(817460),
    y = n(166803),
    A = n(629262),
    Z = n(686807),
    L = n(981631),
    D = n(388032),
    O = n(846605);
let k = (0, _.hQ)(),
    M = (0, _.hQ)(),
    P = (0, E.Mg)(h.Z.IMPORT_BENEFITS_MODAL_ROLE_ICON_SIZE);
function w(e) {
    var t;
    let { emojiId: n, emojiName: i, className: r } = e,
        a = (0, u.e7)([N.ZP], () => (null != n ? N.ZP.getCustomEmojiById(n) : void 0));
    return (0, l.jsx)(x.Z, {
        emojiId: n,
        emojiName: i,
        animated: null !== (t = null == a ? void 0 : a.animated) && void 0 !== t && t,
        className: r
    });
}
function B(e) {
    let { icon: t, children: n, checked: i, disabled: r = !1, onChange: a } = e,
        s = i || r;
    return (0, l.jsxs)('label', {
        className: o()(O.row, {
            [O.checked]: s,
            [O.disabled]: r
        }),
        children: [
            (0, l.jsx)('div', {
                className: O.rowIconWrapper,
                children: t
            }),
            (0, l.jsx)('div', {
                className: O.rowText,
                children: n
            }),
            (0, l.jsxs)('div', {
                className: O.rowCheckbox,
                children: [
                    (0, l.jsx)(g.FocusRing, {
                        children: (0, l.jsx)('input', {
                            type: 'checkbox',
                            checked: s,
                            disabled: r,
                            className: O.checkboxInput,
                            onChange: function (e) {
                                a(e.target.checked);
                            }
                        })
                    }),
                    (0, l.jsx)('div', {
                        className: O.checkboxDisplay,
                        children: (0, l.jsx)(g.CheckmarkLargeIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: O.checkboxIcon,
                            'aria-hidden': !0
                        })
                    })
                ]
            })
        ]
    });
}
function U(e) {
    let { title: t, selectAllText: n, benefits: i, dupeBenefits: r, selectedBenefits: a, onToggleBenefit: s } = e,
        o = i.every((e) => a.has(e));
    return i.length > 0
        ? (0, l.jsxs)(g.FormSection, {
              title: t,
              className: O.section,
              children: [
                  i.length - r.size > 1 &&
                      (0, l.jsx)('div', {
                          className: O.list,
                          children: (0, l.jsx)(B, {
                              icon: (0, l.jsx)(g.ChannelListPlusIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: O.rowIcon
                              }),
                              checked: o,
                              onChange: function (e) {
                                  for (let t of i) !r.has(t) && s(t, e);
                              },
                              children: (0, l.jsx)(g.Text, {
                                  color: 'header-primary',
                                  variant: 'text-md/normal',
                                  children: n
                              })
                          })
                      }),
                  (0, l.jsx)('div', {
                      className: O.list,
                      children: i.map((e) =>
                          (0, l.jsxs)(
                              B,
                              {
                                  icon: (0, l.jsx)(w, {
                                      emojiId: e.emoji_id,
                                      emojiName: e.emoji_name,
                                      className: O.rowIcon
                                  }),
                                  checked: a.has(e),
                                  disabled: r.has(e),
                                  onChange: (t) => s(e, t),
                                  children: [
                                      (0, l.jsx)(g.Text, {
                                          color: 'header-primary',
                                          variant: 'text-md/semibold',
                                          children: (0, Z.Z)(e)
                                      }),
                                      (0, l.jsx)(g.Text, {
                                          color: 'interactive-normal',
                                          variant: 'text-sm/normal',
                                          children: e.description
                                      })
                                  ]
                              },
                              (0, R.ab)(e)
                          )
                      )
                  })
              ]
          })
        : null;
}
function G(e) {
    let { transitionState: t, fromSubscriptionListing: n, existingChannelBenefits: i, existingIntangibleBenefits: r, onSubmit: s, onClose: o } = e,
        c = n.role_benefits.benefits,
        [d, u] = a.useState(() => new Set(c)),
        h = a.useMemo(() => c.filter(R.rC), [c]),
        x = (0, A.Z)(h),
        p = a.useMemo(() => c.filter(R.lL), [c]),
        f = a.useMemo(() => new Set(x.filter((e) => i.some((t) => t.ref_id === e.ref_id))), [x, i]),
        C = a.useMemo(() => new Set(p.filter((e) => r.some((t) => (0, m.Z)(e, t)))), [r, p]),
        v = (0, _.Dt)();
    function N(e, t) {
        u((n) => {
            let i = new Set(n);
            return t ? i.add(e) : i.delete(e), i;
        });
    }
    return (0, l.jsx)('form', {
        onSubmit: function (e) {
            e.preventDefault();
            let t = c.filter((e) => d.has(e)),
                n = t.filter(R.rC).filter((e) => !f.has(e));
            s(
                n,
                t.filter(R.lL).filter((e) => !C.has(e))
            ),
                o();
        },
        children: (0, l.jsxs)(g.ModalRoot, {
            transitionState: t,
            'aria-labelledby': v,
            children: [
                (0, l.jsxs)(g.ModalHeader, {
                    children: [
                        (0, l.jsx)(g.Heading, {
                            id: v,
                            variant: 'heading-md/semibold',
                            children: D.intl.format(D.t['7zpiYG'], { tierName: n.name })
                        }),
                        (0, l.jsx)(g.ModalCloseButton, {
                            className: O.modalCloseButton,
                            onClick: o
                        })
                    ]
                }),
                (0, l.jsxs)(g.ModalContent, {
                    className: O.modalContent,
                    children: [
                        (0, l.jsx)(U, {
                            title: D.intl.string(D.t.S2kKzM),
                            selectAllText: D.intl.string(D.t['5Q/fLC']),
                            benefits: x,
                            dupeBenefits: f,
                            selectedBenefits: d,
                            onToggleBenefit: N
                        }),
                        (0, l.jsx)(U, {
                            title: D.intl.string(D.t.RdwKw8),
                            selectAllText: D.intl.string(D.t.aJPLVF),
                            benefits: p,
                            dupeBenefits: C,
                            selectedBenefits: d,
                            onToggleBenefit: N
                        })
                    ]
                }),
                (0, l.jsxs)(g.ModalFooter, {
                    children: [
                        (0, l.jsx)(g.Button, {
                            type: 'submit',
                            children: D.intl.string(D.t['27a219'])
                        }),
                        (0, l.jsx)(g.Button, {
                            look: g.Button.Looks.LINK,
                            color: g.Button.Colors.PRIMARY,
                            onClick: o,
                            children: D.intl.string(D.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    });
}
function F(e) {
    var t;
    let { guildId: n, role: i, channelCount: r, onSelect: a } = e,
        s = (0, I.p9)({
            guildId: n,
            roleId: i.id,
            size: P
        });
    return (0, l.jsxs)(g.Clickable, {
        className: O.roleRow,
        onClick: a,
        children: [
            (0, l.jsx)('div', {
                className: O.rowIconWrapper,
                children:
                    null != s
                        ? (0, l.jsx)(v.Z, { ...s })
                        : (0, l.jsx)(g.ShieldUserIcon, {
                              size: 'custom',
                              width: 23,
                              height: 23,
                              color: null !== (t = i.colorString) && void 0 !== t ? t : (0, d.Rf)(L.p6O),
                              className: O.roleRowIconDefault
                          })
            }),
            (0, l.jsxs)('div', {
                className: O.rowText,
                children: [
                    (0, l.jsx)(g.Text, {
                        color: 'header-primary',
                        variant: 'text-md/normal',
                        className: O.__invalid_benefitTitle,
                        children: i.name
                    }),
                    (0, l.jsx)(g.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: D.intl.format(D.t['2KzH8/'], { num: r })
                    })
                ]
            }),
            (0, l.jsx)('div', {
                className: O.rowCheckbox,
                children: (0, l.jsx)(S.Z, { direction: S.Z.Directions.RIGHT })
            })
        ]
    });
}
function H(e) {
    let { guild: t, onSelect: n } = e,
        i = (0, u.e7)([b.Z], () => b.Z.getRoles(t.id)),
        r = (0, u.e7)([j.Z], () => j.Z.getCategories(t.id)),
        s = a.useMemo(
            () =>
                r._categories.flatMap((e) =>
                    r[e.channel.id]
                        .filter((e) => {
                            let { channel: t } = e;
                            return T.zS.has(t.type);
                        })
                        .map((e) => {
                            let { channel: t } = e;
                            return t;
                        })
                ),
            [r]
        ),
        o = a.useMemo(
            () =>
                Object.values(i).flatMap((e) => {
                    var n;
                    if ((0, C.pM)(t.id, e.id) || (null === (n = e.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null || c.Db(e.permissions, L.TC2)) return [];
                    let i = (0, y.Z)(s, e).length;
                    return i > 0
                        ? {
                              role: e,
                              channelCount: i
                          }
                        : [];
                }),
            [t, i, s]
        );
    return o.length > 0
        ? (0, l.jsx)('div', {
              className: O.list,
              children: o.map((e) =>
                  (0, l.jsx)(
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
        : (0, l.jsx)(g.Text, {
              variant: 'text-md/normal',
              children: D.intl.string(D.t.u09gKi)
          });
}
function z(e) {
    let { onClose: t, guildId: n, onSelect: i } = e,
        r = (0, u.e7)([b.Z], () => b.Z.getGuild(n));
    return null == r
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)(g.ModalHeader, {
                      children: [
                          (0, l.jsx)(g.Heading, {
                              id: k,
                              variant: 'heading-md/semibold',
                              children: D.intl.string(D.t['3JrZ/P'])
                          }),
                          (0, l.jsx)(g.ModalCloseButton, {
                              className: O.modalCloseButton,
                              onClick: t
                          })
                      ]
                  }),
                  (0, l.jsx)(g.ModalContent, {
                      className: O.modalContent,
                      children: (0, l.jsx)(H, {
                          guild: r,
                          onSelect: i
                      })
                  })
              ]
          });
}
function W(e) {
    let { onClose: t, guildId: n, role: i, onCancel: r, onImport: s } = e,
        o = a.useRef(i);
    null != i && (o.current = i);
    let c = null != i ? i : o.current,
        d = (0, p.Z)(() => {
            let e = j.Z.getCategories(n);
            return e._categories.flatMap((t) =>
                e[t.channel.id]
                    .filter((e) => {
                        let { channel: t } = e;
                        return T.zS.has(t.type);
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return t;
                    })
            );
        }),
        u = a.useMemo(() => (0, y.Z)(d, c), [d, c]),
        [m, h] = a.useState(() => new Set(u.map((e) => e.id)));
    function x(e, t) {
        h((n) => {
            let i = new Set(n);
            return t ? i.add(e) : i.delete(e), i;
        });
    }
    return (0, l.jsxs)('form', {
        onSubmit: function (e) {
            e.preventDefault(), s(u.map((e) => e.id).filter((e) => m.has(e))), t();
        },
        className: O.slideForm,
        children: [
            (0, l.jsxs)(g.ModalHeader, {
                children: [
                    (0, l.jsx)(g.Heading, {
                        id: M,
                        variant: 'heading-md/semibold',
                        children: D.intl.format(D.t.iuPodH, { roleName: c.name })
                    }),
                    (0, l.jsx)(g.ModalCloseButton, {
                        className: O.modalCloseButton,
                        onClick: t
                    })
                ]
            }),
            (0, l.jsxs)(g.ModalContent, {
                className: O.modalContent,
                children: [
                    u.length > 1 &&
                        (0, l.jsx)('div', {
                            className: O.list,
                            children: (0, l.jsx)(B, {
                                icon: (0, l.jsx)(g.ChannelListPlusIcon, {
                                    size: 'md',
                                    color: 'currentColor'
                                }),
                                checked: m.size === u.length,
                                onChange: function (e) {
                                    for (let t of u) x(t.id, e);
                                },
                                children: (0, l.jsx)(g.Text, {
                                    color: 'header-primary',
                                    variant: 'text-md/normal',
                                    children: D.intl.string(D.t['5Q/fLC'])
                                })
                            })
                        }),
                    (0, l.jsx)('div', {
                        className: O.list,
                        children: u.map((e) => {
                            var t;
                            let n = null !== (t = (0, f.Th)(e.type)) && void 0 !== t ? t : g.TextIcon;
                            return (0, l.jsx)(
                                B,
                                {
                                    icon: (0, l.jsx)('div', {
                                        className: O.rowIcon,
                                        children: (0, l.jsx)(n, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: '100%',
                                            height: '100%'
                                        })
                                    }),
                                    checked: m.has(e.id),
                                    onChange: (t) => x(e.id, t),
                                    children: (0, l.jsx)(g.Text, {
                                        color: 'header-primary',
                                        variant: 'text-md/normal',
                                        className: O.__invalid_benefitTitle,
                                        children: e.name
                                    })
                                },
                                e.id
                            );
                        })
                    })
                ]
            }),
            (0, l.jsxs)(g.ModalFooter, {
                children: [
                    (0, l.jsx)(g.Button, {
                        type: 'submit',
                        children: D.intl.string(D.t['1j8So6'])
                    }),
                    (0, l.jsx)(g.Button, {
                        look: g.Button.Looks.LINK,
                        color: g.Button.Colors.PRIMARY,
                        onClick: r,
                        children: D.intl.string(D.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
function V(e) {
    let { transitionState: t, guildId: n, onClose: i, onImport: r } = e,
        [s, o] = a.useState();
    return (0, l.jsx)(g.ModalRoot, {
        transitionState: t,
        'aria-labelledby': null == s ? k : M,
        children: (0, l.jsxs)(g.Slides, {
            contentDisplay: 'flex',
            activeSlide: null == s ? 0 : 1,
            width: 440,
            children: [
                (0, l.jsx)(g.Slide, {
                    id: 0,
                    children: (0, l.jsx)(z, {
                        onClose: i,
                        guildId: n,
                        onSelect: o
                    })
                }),
                (0, l.jsx)(g.Slide, {
                    id: 1,
                    children: (0, l.jsx)(W, {
                        onClose: i,
                        guildId: n,
                        role: s,
                        onCancel: () => o(void 0),
                        onImport: r
                    })
                })
            ]
        })
    });
}
((r = i || (i = {}))[(r.SELECT_ROLE = 0)] = 'SELECT_ROLE'), (r[(r.SELECT_CHANNELS = 1)] = 'SELECT_CHANNELS');
