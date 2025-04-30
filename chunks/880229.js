n.d(t, {
    C: () => H,
    K: () => G
}),
    n(388685),
    n(953529),
    n(361932),
    n(187205);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(149765),
    o = n(866442),
    c = n(442837),
    u = n(902704),
    d = n(477690),
    m = n(481060),
    g = n(596454),
    p = n(211266),
    h = n(471445),
    f = n(605436),
    x = n(91218),
    b = n(313201),
    j = n(339085),
    _ = n(518738),
    v = n(131704),
    O = n(324067),
    C = n(430824),
    y = n(259580),
    N = n(624138),
    I = n(817460),
    E = n(166803),
    S = n(629262),
    T = n(686807),
    P = n(981631),
    w = n(388032),
    R = n(818771);
let Z = (0, b.hQ)(),
    D = (0, b.hQ)(),
    k = (0, N.Mg)(d.Z.IMPORT_BENEFITS_MODAL_ROLE_ICON_SIZE);
function A(e) {
    var t;
    let { emojiId: n, emojiName: i, className: l } = e,
        s = (0, c.e7)([j.ZP], () => (null != n ? j.ZP.getCustomEmojiById(n) : void 0));
    return (0, r.jsx)(g.Z, {
        emojiId: n,
        emojiName: i,
        animated: null != (t = null == s ? void 0 : s.animated) && t,
        className: l
    });
}
function L(e) {
    let { icon: t, children: n, checked: i, disabled: l = !1, onChange: a } = e,
        o = i || l;
    return (0, r.jsxs)('label', {
        className: s()(R.row, {
            [R.checked]: o,
            [R.disabled]: l
        }),
        children: [
            (0, r.jsx)('div', {
                className: R.rowIconWrapper,
                children: t
            }),
            (0, r.jsx)('div', {
                className: R.rowText,
                children: n
            }),
            (0, r.jsxs)('div', {
                className: R.rowCheckbox,
                children: [
                    (0, r.jsx)(m.tEY, {
                        children: (0, r.jsx)('input', {
                            type: 'checkbox',
                            checked: o,
                            disabled: l,
                            className: R.checkboxInput,
                            onChange: function (e) {
                                a(e.target.checked);
                            }
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: R.checkboxDisplay,
                        children: (0, r.jsx)(m.dz2, {
                            size: 'md',
                            color: 'currentColor',
                            className: R.checkboxIcon,
                            'aria-hidden': !0
                        })
                    })
                ]
            })
        ]
    });
}
function M(e) {
    let { title: t, selectAllText: n, benefits: i, dupeBenefits: l, selectedBenefits: s, onToggleBenefit: a } = e,
        o = i.every((e) => s.has(e));
    return i.length > 0
        ? (0, r.jsxs)(m.hjN, {
              title: t,
              className: R.section,
              children: [
                  i.length - l.size > 1 &&
                      (0, r.jsx)('div', {
                          className: R.list,
                          children: (0, r.jsx)(L, {
                              icon: (0, r.jsx)(m.avL, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: R.rowIcon
                              }),
                              checked: o,
                              onChange: function (e) {
                                  for (let t of i) l.has(t) || a(t, e);
                              },
                              children: (0, r.jsx)(m.Text, {
                                  color: 'header-primary',
                                  variant: 'text-md/normal',
                                  children: n
                              })
                          })
                      }),
                  (0, r.jsx)('div', {
                      className: R.list,
                      children: i.map((e) =>
                          (0, r.jsxs)(
                              L,
                              {
                                  icon: (0, r.jsx)(A, {
                                      emojiId: e.emoji_id,
                                      emojiName: e.emoji_name,
                                      className: R.rowIcon
                                  }),
                                  checked: s.has(e),
                                  disabled: l.has(e),
                                  onChange: (t) => a(e, t),
                                  children: [
                                      (0, r.jsx)(m.Text, {
                                          color: 'header-primary',
                                          variant: 'text-md/semibold',
                                          children: (0, T.Z)(e)
                                      }),
                                      (0, r.jsx)(m.Text, {
                                          color: 'interactive-normal',
                                          variant: 'text-sm/normal',
                                          children: e.description
                                      })
                                  ]
                              },
                              (0, I.ab)(e)
                          )
                      )
                  })
              ]
          })
        : null;
}
function G(e) {
    let { transitionState: t, fromSubscriptionListing: n, existingChannelBenefits: l, existingIntangibleBenefits: s, onSubmit: a, onClose: o } = e,
        c = n.role_benefits.benefits,
        [d, g] = i.useState(() => new Set(c)),
        p = i.useMemo(() => c.filter(I.rC), [c]),
        h = (0, S.Z)(p),
        f = i.useMemo(() => c.filter(I.lL), [c]),
        x = i.useMemo(() => new Set(h.filter((e) => l.some((t) => t.ref_id === e.ref_id))), [h, l]),
        j = i.useMemo(() => new Set(f.filter((e) => s.some((t) => (0, u.Z)(e, t)))), [s, f]),
        _ = (0, b.Dt)();
    function v(e, t) {
        g((n) => {
            let r = new Set(n);
            return t ? r.add(e) : r.delete(e), r;
        });
    }
    return (0, r.jsx)('form', {
        onSubmit: function (e) {
            e.preventDefault();
            let t = c.filter((e) => d.has(e));
            a(
                t.filter(I.rC).filter((e) => !x.has(e)),
                t.filter(I.lL).filter((e) => !j.has(e))
            ),
                o();
        },
        children: (0, r.jsxs)(m.Y0X, {
            transitionState: t,
            'aria-labelledby': _,
            children: [
                (0, r.jsxs)(m.xBx, {
                    children: [
                        (0, r.jsx)(m.X6q, {
                            id: _,
                            variant: 'heading-md/semibold',
                            children: w.intl.format(w.t['7zpiYG'], { tierName: n.name })
                        }),
                        (0, r.jsx)(m.olH, {
                            className: R.modalCloseButton,
                            onClick: o
                        })
                    ]
                }),
                (0, r.jsxs)(m.hzk, {
                    className: R.modalContent,
                    children: [
                        (0, r.jsx)(M, {
                            title: w.intl.string(w.t.S2kKzM),
                            selectAllText: w.intl.string(w.t['5Q/fLC']),
                            benefits: h,
                            dupeBenefits: x,
                            selectedBenefits: d,
                            onToggleBenefit: v
                        }),
                        (0, r.jsx)(M, {
                            title: w.intl.string(w.t.RdwKw8),
                            selectAllText: w.intl.string(w.t.aJPLVF),
                            benefits: f,
                            dupeBenefits: j,
                            selectedBenefits: d,
                            onToggleBenefit: v
                        })
                    ]
                }),
                (0, r.jsxs)(m.mzw, {
                    children: [
                        (0, r.jsx)(m.zxk, {
                            type: 'submit',
                            children: w.intl.string(w.t['27a219'])
                        }),
                        (0, r.jsx)(m.zxk, {
                            look: m.zxk.Looks.LINK,
                            color: m.zxk.Colors.PRIMARY,
                            onClick: o,
                            children: w.intl.string(w.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    });
}
function U(e) {
    var t;
    let { guildId: n, role: i, channelCount: l, onSelect: s } = e,
        a = (0, _.p9)({
            guildId: n,
            roleId: i.id,
            size: k
        });
    return (0, r.jsxs)(m.P3F, {
        className: R.roleRow,
        onClick: s,
        children: [
            (0, r.jsx)('div', {
                className: R.rowIconWrapper,
                children:
                    null != a
                        ? (0, r.jsx)(
                              x.Z,
                              (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          r = Object.keys(n);
                                      'function' == typeof Object.getOwnPropertySymbols &&
                                          (r = r.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              })
                                          )),
                                          r.forEach(function (t) {
                                              var r;
                                              (r = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: r,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = r);
                                          });
                                  }
                                  return e;
                              })({}, a)
                          )
                        : (0, r.jsx)(m.lZ8, {
                              size: 'custom',
                              width: 23,
                              height: 23,
                              color: null != (t = i.colorString) ? t : (0, o.Rf)(P.p6O),
                              className: R.roleRowIconDefault
                          })
            }),
            (0, r.jsxs)('div', {
                className: R.rowText,
                children: [
                    (0, r.jsx)(m.Text, {
                        color: 'header-primary',
                        variant: 'text-md/normal',
                        className: R.__invalid_benefitTitle,
                        children: i.name
                    }),
                    (0, r.jsx)(m.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: w.intl.format(w.t['2KzH8/'], { num: l })
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: R.rowCheckbox,
                children: (0, r.jsx)(y.Z, { direction: y.Z.Directions.RIGHT })
            })
        ]
    });
}
function B(e) {
    let { guild: t, onSelect: n } = e,
        l = (0, c.e7)([C.Z], () => C.Z.getRoles(t.id)),
        s = (0, c.e7)([O.Z], () => O.Z.getCategories(t.id)),
        o = i.useMemo(
            () =>
                s._categories.flatMap((e) =>
                    s[e.channel.id]
                        .filter((e) => {
                            let { channel: t } = e;
                            return v.zS.has(t.type);
                        })
                        .map((e) => {
                            let { channel: t } = e;
                            return t;
                        })
                ),
            [s]
        ),
        u = i.useMemo(
            () =>
                Object.values(l).flatMap((e) => {
                    var n;
                    if ((0, f.pM)(t.id, e.id) || (null == (n = e.tags) ? void 0 : n.subscription_listing_id) != null || a.Db(e.permissions, P.TC2)) return [];
                    let r = (0, E.Z)(o, e).length;
                    return r > 0
                        ? {
                              role: e,
                              channelCount: r
                          }
                        : [];
                }),
            [t, l, o]
        );
    return u.length > 0
        ? (0, r.jsx)('div', {
              className: R.list,
              children: u.map((e) =>
                  (0, r.jsx)(
                      U,
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
        : (0, r.jsx)(m.Text, {
              variant: 'text-md/normal',
              children: w.intl.string(w.t.u09gKi)
          });
}
function F(e) {
    let { onClose: t, guildId: n, onSelect: i } = e,
        l = (0, c.e7)([C.Z], () => C.Z.getGuild(n));
    return null == l
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)(m.xBx, {
                      children: [
                          (0, r.jsx)(m.X6q, {
                              id: Z,
                              variant: 'heading-md/semibold',
                              children: w.intl.string(w.t['3JrZ/P'])
                          }),
                          (0, r.jsx)(m.olH, {
                              className: R.modalCloseButton,
                              onClick: t
                          })
                      ]
                  }),
                  (0, r.jsx)(m.hzk, {
                      className: R.modalContent,
                      children: (0, r.jsx)(B, {
                          guild: l,
                          onSelect: i
                      })
                  })
              ]
          });
}
function z(e) {
    let { onClose: t, guildId: n, role: l, onCancel: s, onImport: a } = e,
        o = i.useRef(l);
    null != l && (o.current = l);
    let c = null != l ? l : o.current,
        u = (0, p.Z)(() => {
            let e = O.Z.getCategories(n);
            return e._categories.flatMap((t) =>
                e[t.channel.id]
                    .filter((e) => {
                        let { channel: t } = e;
                        return v.zS.has(t.type);
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return t;
                    })
            );
        }),
        d = i.useMemo(() => (0, E.Z)(u, c), [u, c]),
        [g, f] = i.useState(() => new Set(d.map((e) => e.id)));
    function x(e, t) {
        f((n) => {
            let r = new Set(n);
            return t ? r.add(e) : r.delete(e), r;
        });
    }
    return (0, r.jsxs)('form', {
        onSubmit: function (e) {
            e.preventDefault(), a(d.map((e) => e.id).filter((e) => g.has(e))), t();
        },
        className: R.slideForm,
        children: [
            (0, r.jsxs)(m.xBx, {
                children: [
                    (0, r.jsx)(m.X6q, {
                        id: D,
                        variant: 'heading-md/semibold',
                        children: w.intl.format(w.t.iuPodH, { roleName: c.name })
                    }),
                    (0, r.jsx)(m.olH, {
                        className: R.modalCloseButton,
                        onClick: t
                    })
                ]
            }),
            (0, r.jsxs)(m.hzk, {
                className: R.modalContent,
                children: [
                    d.length > 1 &&
                        (0, r.jsx)('div', {
                            className: R.list,
                            children: (0, r.jsx)(L, {
                                icon: (0, r.jsx)(m.avL, {
                                    size: 'md',
                                    color: 'currentColor'
                                }),
                                checked: g.size === d.length,
                                onChange: function (e) {
                                    for (let t of d) x(t.id, e);
                                },
                                children: (0, r.jsx)(m.Text, {
                                    color: 'header-primary',
                                    variant: 'text-md/normal',
                                    children: w.intl.string(w.t['5Q/fLC'])
                                })
                            })
                        }),
                    (0, r.jsx)('div', {
                        className: R.list,
                        children: d.map((e) => {
                            var t;
                            let n = null != (t = (0, h.Th)(e.type)) ? t : m.VL1;
                            return (0, r.jsx)(
                                L,
                                {
                                    icon: (0, r.jsx)('div', {
                                        className: R.rowIcon,
                                        children: (0, r.jsx)(n, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: '100%',
                                            height: '100%'
                                        })
                                    }),
                                    checked: g.has(e.id),
                                    onChange: (t) => x(e.id, t),
                                    children: (0, r.jsx)(m.Text, {
                                        color: 'header-primary',
                                        variant: 'text-md/normal',
                                        className: R.__invalid_benefitTitle,
                                        children: e.name
                                    })
                                },
                                e.id
                            );
                        })
                    })
                ]
            }),
            (0, r.jsxs)(m.mzw, {
                children: [
                    (0, r.jsx)(m.zxk, {
                        type: 'submit',
                        children: w.intl.string(w.t['1j8So6'])
                    }),
                    (0, r.jsx)(m.zxk, {
                        look: m.zxk.Looks.LINK,
                        color: m.zxk.Colors.PRIMARY,
                        onClick: s,
                        children: w.intl.string(w.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
function H(e) {
    let { transitionState: t, guildId: n, onClose: l, onImport: s } = e,
        [a, o] = i.useState();
    return (0, r.jsx)(m.Y0X, {
        transitionState: t,
        'aria-labelledby': null == a ? Z : D,
        children: (0, r.jsxs)(m.MyZ, {
            contentDisplay: 'flex',
            activeSlide: +(null != a),
            width: 440,
            children: [
                (0, r.jsx)(m.Mi4, {
                    id: 0,
                    children: (0, r.jsx)(F, {
                        onClose: l,
                        guildId: n,
                        onSelect: o
                    })
                }),
                (0, r.jsx)(m.Mi4, {
                    id: 1,
                    children: (0, r.jsx)(z, {
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
