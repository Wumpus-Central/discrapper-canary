n.d(t, {
    C: () => H,
    K: () => U
}),
    n(47120),
    n(390547);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(149765),
    o = n(866442),
    c = n(442837),
    d = n(902704),
    u = n(477690),
    m = n(481060),
    h = n(596454),
    g = n(211266),
    x = n(471445),
    p = n(605436),
    _ = n(91218),
    C = n(313201),
    f = n(339085),
    v = n(518738),
    N = n(131704),
    j = n(324067),
    I = n(430824),
    E = n(259580),
    b = n(624138),
    T = n(817460),
    S = n(166803),
    R = n(629262),
    Z = n(686807),
    y = n(981631),
    A = n(388032),
    L = n(240027);
let D = (0, C.hQ)(),
    O = (0, C.hQ)(),
    k = (0, b.Mg)(u.Z.IMPORT_BENEFITS_MODAL_ROLE_ICON_SIZE);
function P(e) {
    var t;
    let { emojiId: n, emojiName: r, className: l } = e,
        s = (0, c.e7)([f.ZP], () => (null != n ? f.ZP.getCustomEmojiById(n) : void 0));
    return (0, i.jsx)(h.Z, {
        emojiId: n,
        emojiName: r,
        animated: null !== (t = null == s ? void 0 : s.animated) && void 0 !== t && t,
        className: l
    });
}
function w(e) {
    let { icon: t, children: n, checked: r, disabled: l = !1, onChange: a } = e,
        o = r || l;
    return (0, i.jsxs)('label', {
        className: s()(L.row, {
            [L.checked]: o,
            [L.disabled]: l
        }),
        children: [
            (0, i.jsx)('div', {
                className: L.rowIconWrapper,
                children: t
            }),
            (0, i.jsx)('div', {
                className: L.rowText,
                children: n
            }),
            (0, i.jsxs)('div', {
                className: L.rowCheckbox,
                children: [
                    (0, i.jsx)(m.tEY, {
                        children: (0, i.jsx)('input', {
                            type: 'checkbox',
                            checked: o,
                            disabled: l,
                            className: L.checkboxInput,
                            onChange: function (e) {
                                a(e.target.checked);
                            }
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: L.checkboxDisplay,
                        children: (0, i.jsx)(m.dz2, {
                            size: 'md',
                            color: 'currentColor',
                            className: L.checkboxIcon,
                            'aria-hidden': !0
                        })
                    })
                ]
            })
        ]
    });
}
function M(e) {
    let { title: t, selectAllText: n, benefits: r, dupeBenefits: l, selectedBenefits: s, onToggleBenefit: a } = e,
        o = r.every((e) => s.has(e));
    return r.length > 0
        ? (0, i.jsxs)(m.hjN, {
              title: t,
              className: L.section,
              children: [
                  r.length - l.size > 1 &&
                      (0, i.jsx)('div', {
                          className: L.list,
                          children: (0, i.jsx)(w, {
                              icon: (0, i.jsx)(m.avL, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: L.rowIcon
                              }),
                              checked: o,
                              onChange: function (e) {
                                  for (let t of r) l.has(t) || a(t, e);
                              },
                              children: (0, i.jsx)(m.Text, {
                                  color: 'header-primary',
                                  variant: 'text-md/normal',
                                  children: n
                              })
                          })
                      }),
                  (0, i.jsx)('div', {
                      className: L.list,
                      children: r.map((e) =>
                          (0, i.jsxs)(
                              w,
                              {
                                  icon: (0, i.jsx)(P, {
                                      emojiId: e.emoji_id,
                                      emojiName: e.emoji_name,
                                      className: L.rowIcon
                                  }),
                                  checked: s.has(e),
                                  disabled: l.has(e),
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
                              (0, T.ab)(e)
                          )
                      )
                  })
              ]
          })
        : null;
}
function U(e) {
    let { transitionState: t, fromSubscriptionListing: n, existingChannelBenefits: l, existingIntangibleBenefits: s, onSubmit: a, onClose: o } = e,
        c = n.role_benefits.benefits,
        [u, h] = r.useState(() => new Set(c)),
        g = r.useMemo(() => c.filter(T.rC), [c]),
        x = (0, R.Z)(g),
        p = r.useMemo(() => c.filter(T.lL), [c]),
        _ = r.useMemo(() => new Set(x.filter((e) => l.some((t) => t.ref_id === e.ref_id))), [x, l]),
        f = r.useMemo(() => new Set(p.filter((e) => s.some((t) => (0, d.Z)(e, t)))), [s, p]),
        v = (0, C.Dt)();
    function N(e, t) {
        h((n) => {
            let i = new Set(n);
            return t ? i.add(e) : i.delete(e), i;
        });
    }
    return (0, i.jsx)('form', {
        onSubmit: function (e) {
            e.preventDefault();
            let t = c.filter((e) => u.has(e));
            a(
                t.filter(T.rC).filter((e) => !_.has(e)),
                t.filter(T.lL).filter((e) => !f.has(e))
            ),
                o();
        },
        children: (0, i.jsxs)(m.Y0X, {
            transitionState: t,
            'aria-labelledby': v,
            children: [
                (0, i.jsxs)(m.xBx, {
                    children: [
                        (0, i.jsx)(m.X6q, {
                            id: v,
                            variant: 'heading-md/semibold',
                            children: A.intl.format(A.t['7zpiYG'], { tierName: n.name })
                        }),
                        (0, i.jsx)(m.olH, {
                            className: L.modalCloseButton,
                            onClick: o
                        })
                    ]
                }),
                (0, i.jsxs)(m.hzk, {
                    className: L.modalContent,
                    children: [
                        (0, i.jsx)(M, {
                            title: A.intl.string(A.t.S2kKzM),
                            selectAllText: A.intl.string(A.t['5Q/fLC']),
                            benefits: x,
                            dupeBenefits: _,
                            selectedBenefits: u,
                            onToggleBenefit: N
                        }),
                        (0, i.jsx)(M, {
                            title: A.intl.string(A.t.RdwKw8),
                            selectAllText: A.intl.string(A.t.aJPLVF),
                            benefits: p,
                            dupeBenefits: f,
                            selectedBenefits: u,
                            onToggleBenefit: N
                        })
                    ]
                }),
                (0, i.jsxs)(m.mzw, {
                    children: [
                        (0, i.jsx)(m.zxk, {
                            type: 'submit',
                            children: A.intl.string(A.t['27a219'])
                        }),
                        (0, i.jsx)(m.zxk, {
                            look: m.zxk.Looks.LINK,
                            color: m.zxk.Colors.PRIMARY,
                            onClick: o,
                            children: A.intl.string(A.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    });
}
function G(e) {
    var t;
    let { guildId: n, role: r, channelCount: l, onSelect: s } = e,
        a = (0, v.p9)({
            guildId: n,
            roleId: r.id,
            size: k
        });
    return (0, i.jsxs)(m.P3F, {
        className: L.roleRow,
        onClick: s,
        children: [
            (0, i.jsx)('div', {
                className: L.rowIconWrapper,
                children:
                    null != a
                        ? (0, i.jsx)(_.Z, { ...a })
                        : (0, i.jsx)(m.lZ8, {
                              size: 'custom',
                              width: 23,
                              height: 23,
                              color: null !== (t = r.colorString) && void 0 !== t ? t : (0, o.Rf)(y.p6O),
                              className: L.roleRowIconDefault
                          })
            }),
            (0, i.jsxs)('div', {
                className: L.rowText,
                children: [
                    (0, i.jsx)(m.Text, {
                        color: 'header-primary',
                        variant: 'text-md/normal',
                        className: L.__invalid_benefitTitle,
                        children: r.name
                    }),
                    (0, i.jsx)(m.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: A.intl.format(A.t['2KzH8/'], { num: l })
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: L.rowCheckbox,
                children: (0, i.jsx)(E.Z, { direction: E.Z.Directions.RIGHT })
            })
        ]
    });
}
function B(e) {
    let { guild: t, onSelect: n } = e,
        l = (0, c.e7)([I.Z], () => I.Z.getRoles(t.id)),
        s = (0, c.e7)([j.Z], () => j.Z.getCategories(t.id)),
        o = r.useMemo(
            () =>
                s._categories.flatMap((e) =>
                    s[e.channel.id]
                        .filter((e) => {
                            let { channel: t } = e;
                            return N.zS.has(t.type);
                        })
                        .map((e) => {
                            let { channel: t } = e;
                            return t;
                        })
                ),
            [s]
        ),
        d = r.useMemo(
            () =>
                Object.values(l).flatMap((e) => {
                    var n;
                    if ((0, p.pM)(t.id, e.id) || (null === (n = e.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null || a.Db(e.permissions, y.TC2)) return [];
                    let i = (0, S.Z)(o, e).length;
                    return i > 0
                        ? {
                              role: e,
                              channelCount: i
                          }
                        : [];
                }),
            [t, l, o]
        );
    return d.length > 0
        ? (0, i.jsx)('div', {
              className: L.list,
              children: d.map((e) =>
                  (0, i.jsx)(
                      G,
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
              children: A.intl.string(A.t.u09gKi)
          });
}
function F(e) {
    let { onClose: t, guildId: n, onSelect: r } = e,
        l = (0, c.e7)([I.Z], () => I.Z.getGuild(n));
    return null == l
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)(m.xBx, {
                      children: [
                          (0, i.jsx)(m.X6q, {
                              id: D,
                              variant: 'heading-md/semibold',
                              children: A.intl.string(A.t['3JrZ/P'])
                          }),
                          (0, i.jsx)(m.olH, {
                              className: L.modalCloseButton,
                              onClick: t
                          })
                      ]
                  }),
                  (0, i.jsx)(m.hzk, {
                      className: L.modalContent,
                      children: (0, i.jsx)(B, {
                          guild: l,
                          onSelect: r
                      })
                  })
              ]
          });
}
function z(e) {
    let { onClose: t, guildId: n, role: l, onCancel: s, onImport: a } = e,
        o = r.useRef(l);
    null != l && (o.current = l);
    let c = null != l ? l : o.current,
        d = (0, g.Z)(() => {
            let e = j.Z.getCategories(n);
            return e._categories.flatMap((t) =>
                e[t.channel.id]
                    .filter((e) => {
                        let { channel: t } = e;
                        return N.zS.has(t.type);
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return t;
                    })
            );
        }),
        u = r.useMemo(() => (0, S.Z)(d, c), [d, c]),
        [h, p] = r.useState(() => new Set(u.map((e) => e.id)));
    function _(e, t) {
        p((n) => {
            let i = new Set(n);
            return t ? i.add(e) : i.delete(e), i;
        });
    }
    return (0, i.jsxs)('form', {
        onSubmit: function (e) {
            e.preventDefault(), a(u.map((e) => e.id).filter((e) => h.has(e))), t();
        },
        className: L.slideForm,
        children: [
            (0, i.jsxs)(m.xBx, {
                children: [
                    (0, i.jsx)(m.X6q, {
                        id: O,
                        variant: 'heading-md/semibold',
                        children: A.intl.format(A.t.iuPodH, { roleName: c.name })
                    }),
                    (0, i.jsx)(m.olH, {
                        className: L.modalCloseButton,
                        onClick: t
                    })
                ]
            }),
            (0, i.jsxs)(m.hzk, {
                className: L.modalContent,
                children: [
                    u.length > 1 &&
                        (0, i.jsx)('div', {
                            className: L.list,
                            children: (0, i.jsx)(w, {
                                icon: (0, i.jsx)(m.avL, {
                                    size: 'md',
                                    color: 'currentColor'
                                }),
                                checked: h.size === u.length,
                                onChange: function (e) {
                                    for (let t of u) _(t.id, e);
                                },
                                children: (0, i.jsx)(m.Text, {
                                    color: 'header-primary',
                                    variant: 'text-md/normal',
                                    children: A.intl.string(A.t['5Q/fLC'])
                                })
                            })
                        }),
                    (0, i.jsx)('div', {
                        className: L.list,
                        children: u.map((e) => {
                            var t;
                            let n = null !== (t = (0, x.Th)(e.type)) && void 0 !== t ? t : m.VL1;
                            return (0, i.jsx)(
                                w,
                                {
                                    icon: (0, i.jsx)('div', {
                                        className: L.rowIcon,
                                        children: (0, i.jsx)(n, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: '100%',
                                            height: '100%'
                                        })
                                    }),
                                    checked: h.has(e.id),
                                    onChange: (t) => _(e.id, t),
                                    children: (0, i.jsx)(m.Text, {
                                        color: 'header-primary',
                                        variant: 'text-md/normal',
                                        className: L.__invalid_benefitTitle,
                                        children: e.name
                                    })
                                },
                                e.id
                            );
                        })
                    })
                ]
            }),
            (0, i.jsxs)(m.mzw, {
                children: [
                    (0, i.jsx)(m.zxk, {
                        type: 'submit',
                        children: A.intl.string(A.t['1j8So6'])
                    }),
                    (0, i.jsx)(m.zxk, {
                        look: m.zxk.Looks.LINK,
                        color: m.zxk.Colors.PRIMARY,
                        onClick: s,
                        children: A.intl.string(A.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
function H(e) {
    let { transitionState: t, guildId: n, onClose: l, onImport: s } = e,
        [a, o] = r.useState();
    return (0, i.jsx)(m.Y0X, {
        transitionState: t,
        'aria-labelledby': null == a ? D : O,
        children: (0, i.jsxs)(m.MyZ, {
            contentDisplay: 'flex',
            activeSlide: null == a ? 0 : 1,
            width: 440,
            children: [
                (0, i.jsx)(m.Mi4, {
                    id: 0,
                    children: (0, i.jsx)(F, {
                        onClose: l,
                        guildId: n,
                        onSelect: o
                    })
                }),
                (0, i.jsx)(m.Mi4, {
                    id: 1,
                    children: (0, i.jsx)(z, {
                        onClose: l,
                        guildId: n,
                        role: a,
                        onCancel: () => o(void 0),
                        onImport: s
                    })
                })
            ]
        })
    });
}
