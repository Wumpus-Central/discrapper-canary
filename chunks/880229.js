n.d(t, {
    C: () => z,
    K: () => M
}),
    n(47120),
    n(266796),
    n(13667),
    n(390547);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(149765),
    o = n(866442),
    c = n(442837),
    d = n(902704),
    u = n(477690),
    m = n(481060),
    g = n(596454),
    p = n(211266),
    h = n(471445),
    f = n(605436),
    b = n(91218),
    x = n(313201),
    j = n(339085),
    N = n(518738),
    _ = n(131704),
    v = n(324067),
    C = n(430824),
    O = n(259580),
    y = n(624138),
    I = n(817460),
    E = n(166803),
    S = n(629262),
    T = n(686807),
    P = n(981631),
    w = n(388032),
    R = n(818771);
let Z = (0, x.hQ)(),
    D = (0, x.hQ)(),
    A = (0, y.Mg)(u.Z.IMPORT_BENEFITS_MODAL_ROLE_ICON_SIZE);
function k(e) {
    var t;
    let { emojiId: n, emojiName: i, className: s } = e,
        a = (0, c.e7)([j.ZP], () => (null != n ? j.ZP.getCustomEmojiById(n) : void 0));
    return (0, r.jsx)(g.Z, {
        emojiId: n,
        emojiName: i,
        animated: null != (t = null == a ? void 0 : a.animated) && t,
        className: s
    });
}
function W(e) {
    let { icon: t, children: n, checked: i, disabled: s = !1, onChange: l } = e,
        o = i || s;
    return (0, r.jsxs)('label', {
        className: a()(R.row, {
            [R.checked]: o,
            [R.disabled]: s
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
                            disabled: s,
                            className: R.checkboxInput,
                            onChange: function (e) {
                                l(e.target.checked);
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
function L(e) {
    let { title: t, selectAllText: n, benefits: i, dupeBenefits: s, selectedBenefits: a, onToggleBenefit: l } = e,
        o = i.every((e) => a.has(e));
    return i.length > 0
        ? (0, r.jsxs)(m.hjN, {
              title: t,
              className: R.section,
              children: [
                  i.length - s.size > 1 &&
                      (0, r.jsx)('div', {
                          className: R.list,
                          children: (0, r.jsx)(W, {
                              icon: (0, r.jsx)(m.avL, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: R.rowIcon
                              }),
                              checked: o,
                              onChange: function (e) {
                                  for (let t of i) s.has(t) || l(t, e);
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
                              W,
                              {
                                  icon: (0, r.jsx)(k, {
                                      emojiId: e.emoji_id,
                                      emojiName: e.emoji_name,
                                      className: R.rowIcon
                                  }),
                                  checked: a.has(e),
                                  disabled: s.has(e),
                                  onChange: (t) => l(e, t),
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
function M(e) {
    let { transitionState: t, fromSubscriptionListing: n, existingChannelBenefits: s, existingIntangibleBenefits: a, onSubmit: l, onClose: o } = e,
        c = n.role_benefits.benefits,
        [u, g] = i.useState(() => new Set(c)),
        p = i.useMemo(() => c.filter(I.rC), [c]),
        h = (0, S.Z)(p),
        f = i.useMemo(() => c.filter(I.lL), [c]),
        b = i.useMemo(() => new Set(h.filter((e) => s.some((t) => t.ref_id === e.ref_id))), [h, s]),
        j = i.useMemo(() => new Set(f.filter((e) => a.some((t) => (0, d.Z)(e, t)))), [a, f]),
        N = (0, x.Dt)();
    function _(e, t) {
        g((n) => {
            let r = new Set(n);
            return t ? r.add(e) : r.delete(e), r;
        });
    }
    return (0, r.jsx)('form', {
        onSubmit: function (e) {
            e.preventDefault();
            let t = c.filter((e) => u.has(e));
            l(
                t.filter(I.rC).filter((e) => !b.has(e)),
                t.filter(I.lL).filter((e) => !j.has(e))
            ),
                o();
        },
        children: (0, r.jsxs)(m.Y0X, {
            transitionState: t,
            'aria-labelledby': N,
            children: [
                (0, r.jsxs)(m.xBx, {
                    children: [
                        (0, r.jsx)(m.X6q, {
                            id: N,
                            variant: 'heading-md/semibold',
                            children: w.NW.format(w.t['7zpiYG'], { tierName: n.name })
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
                        (0, r.jsx)(L, {
                            title: w.NW.string(w.t.S2kKzM),
                            selectAllText: w.NW.string(w.t['5Q/fLC']),
                            benefits: h,
                            dupeBenefits: b,
                            selectedBenefits: u,
                            onToggleBenefit: _
                        }),
                        (0, r.jsx)(L, {
                            title: w.NW.string(w.t.RdwKw8),
                            selectAllText: w.NW.string(w.t.aJPLVF),
                            benefits: f,
                            dupeBenefits: j,
                            selectedBenefits: u,
                            onToggleBenefit: _
                        })
                    ]
                }),
                (0, r.jsxs)(m.mzw, {
                    children: [
                        (0, r.jsx)(m.zxk, {
                            type: 'submit',
                            children: w.NW.string(w.t['27a219'])
                        }),
                        (0, r.jsx)(m.zxk, {
                            look: m.zxk.Looks.LINK,
                            color: m.zxk.Colors.PRIMARY,
                            onClick: o,
                            children: w.NW.string(w.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    });
}
function G(e) {
    var t;
    let { guildId: n, role: i, channelCount: s, onSelect: a } = e,
        l = (0, N.p9)({
            guildId: n,
            roleId: i.id,
            size: A
        });
    return (0, r.jsxs)(m.P3F, {
        className: R.roleRow,
        onClick: a,
        children: [
            (0, r.jsx)('div', {
                className: R.rowIconWrapper,
                children:
                    null != l
                        ? (0, r.jsx)(
                              b.Z,
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
                              })({}, l)
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
                        children: w.NW.format(w.t['2KzH8/'], { num: s })
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: R.rowCheckbox,
                children: (0, r.jsx)(O.Z, { direction: O.Z.Directions.RIGHT })
            })
        ]
    });
}
function U(e) {
    let { guild: t, onSelect: n } = e,
        s = (0, c.e7)([C.Z], () => C.Z.getRoles(t.id)),
        a = (0, c.e7)([v.Z], () => v.Z.getCategories(t.id)),
        o = i.useMemo(
            () =>
                a._categories.flatMap((e) =>
                    a[e.channel.id]
                        .filter((e) => {
                            let { channel: t } = e;
                            return _.zS.has(t.type);
                        })
                        .map((e) => {
                            let { channel: t } = e;
                            return t;
                        })
                ),
            [a]
        ),
        d = i.useMemo(
            () =>
                Object.values(s).flatMap((e) => {
                    var n;
                    if ((0, f.pM)(t.id, e.id) || (null == (n = e.tags) ? void 0 : n.subscription_listing_id) != null || l.Db(e.permissions, P.TC2)) return [];
                    let r = (0, E.Z)(o, e).length;
                    return r > 0
                        ? {
                              role: e,
                              channelCount: r
                          }
                        : [];
                }),
            [t, s, o]
        );
    return d.length > 0
        ? (0, r.jsx)('div', {
              className: R.list,
              children: d.map((e) =>
                  (0, r.jsx)(
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
        : (0, r.jsx)(m.Text, {
              variant: 'text-md/normal',
              children: w.NW.string(w.t.u09gKi)
          });
}
function B(e) {
    let { onClose: t, guildId: n, onSelect: i } = e,
        s = (0, c.e7)([C.Z], () => C.Z.getGuild(n));
    return null == s
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)(m.xBx, {
                      children: [
                          (0, r.jsx)(m.X6q, {
                              id: Z,
                              variant: 'heading-md/semibold',
                              children: w.NW.string(w.t['3JrZ/P'])
                          }),
                          (0, r.jsx)(m.olH, {
                              className: R.modalCloseButton,
                              onClick: t
                          })
                      ]
                  }),
                  (0, r.jsx)(m.hzk, {
                      className: R.modalContent,
                      children: (0, r.jsx)(U, {
                          guild: s,
                          onSelect: i
                      })
                  })
              ]
          });
}
function F(e) {
    let { onClose: t, guildId: n, role: s, onCancel: a, onImport: l } = e,
        o = i.useRef(s);
    null != s && (o.current = s);
    let c = null != s ? s : o.current,
        d = (0, p.Z)(() => {
            let e = v.Z.getCategories(n);
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
        u = i.useMemo(() => (0, E.Z)(d, c), [d, c]),
        [g, f] = i.useState(() => new Set(u.map((e) => e.id)));
    function b(e, t) {
        f((n) => {
            let r = new Set(n);
            return t ? r.add(e) : r.delete(e), r;
        });
    }
    return (0, r.jsxs)('form', {
        onSubmit: function (e) {
            e.preventDefault(), l(u.map((e) => e.id).filter((e) => g.has(e))), t();
        },
        className: R.slideForm,
        children: [
            (0, r.jsxs)(m.xBx, {
                children: [
                    (0, r.jsx)(m.X6q, {
                        id: D,
                        variant: 'heading-md/semibold',
                        children: w.NW.format(w.t.iuPodH, { roleName: c.name })
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
                    u.length > 1 &&
                        (0, r.jsx)('div', {
                            className: R.list,
                            children: (0, r.jsx)(W, {
                                icon: (0, r.jsx)(m.avL, {
                                    size: 'md',
                                    color: 'currentColor'
                                }),
                                checked: g.size === u.length,
                                onChange: function (e) {
                                    for (let t of u) b(t.id, e);
                                },
                                children: (0, r.jsx)(m.Text, {
                                    color: 'header-primary',
                                    variant: 'text-md/normal',
                                    children: w.NW.string(w.t['5Q/fLC'])
                                })
                            })
                        }),
                    (0, r.jsx)('div', {
                        className: R.list,
                        children: u.map((e) => {
                            var t;
                            let n = null != (t = (0, h.Th)(e.type)) ? t : m.VL1;
                            return (0, r.jsx)(
                                W,
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
                                    onChange: (t) => b(e.id, t),
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
                        children: w.NW.string(w.t['1j8So6'])
                    }),
                    (0, r.jsx)(m.zxk, {
                        look: m.zxk.Looks.LINK,
                        color: m.zxk.Colors.PRIMARY,
                        onClick: a,
                        children: w.NW.string(w.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
function z(e) {
    let { transitionState: t, guildId: n, onClose: s, onImport: a } = e,
        [l, o] = i.useState();
    return (0, r.jsx)(m.Y0X, {
        transitionState: t,
        'aria-labelledby': null == l ? Z : D,
        children: (0, r.jsxs)(m.MyZ, {
            contentDisplay: 'flex',
            activeSlide: +(null != l),
            width: 440,
            children: [
                (0, r.jsx)(m.Mi4, {
                    id: 0,
                    children: (0, r.jsx)(B, {
                        onClose: s,
                        guildId: n,
                        onSelect: o
                    })
                }),
                (0, r.jsx)(m.Mi4, {
                    id: 1,
                    children: (0, r.jsx)(F, {
                        onClose: s,
                        guildId: n,
                        role: l,
                        onCancel: () => o(void 0),
                        onImport: a
                    })
                })
            ]
        })
    });
}
