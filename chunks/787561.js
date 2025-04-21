n.d(t, {
    X: () => R,
    Z: () => A
}),
    n(953529),
    n(388685),
    n(539854);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(442837),
    o = n(544891),
    c = n(433517),
    d = n(481060),
    u = n(852860),
    m = n(493773),
    g = n(933557),
    p = n(769654),
    h = n(984933),
    f = n(650774),
    x = n(430824),
    b = n(496675),
    j = n(699516),
    _ = n(594174),
    v = n(434404),
    O = n(999382),
    C = n(54842),
    y = n(929834),
    N = n(981631),
    I = n(388032),
    E = n(90386),
    S = n(922905);
function T(e) {
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
}
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let w = 'dismissedCommunityFeaturesUpsell',
    R = () => {
        let e,
            {
                guild: t,
                submitting: n,
                errors: i
            } = (0, a.cj)([O.Z], () => ({
                submitting: O.Z.isSubmitting(),
                guild: O.Z.getGuild(),
                errors: O.Z.getErrors()
            })),
            l = Object.keys(i),
            s = l.length > 0 ? l[0] : null;
        return (
            (e = 'rules_channel_id' === s ? I.intl.string(I.t['7IrBYm']) : null != s ? i[s] : void 0),
            (0, r.jsx)(u.Z, {
                submitting: n,
                onReset: () => {
                    null != t && v.Z.init(t.id);
                },
                onSave: () => {
                    null != t &&
                        v.Z.saveGuild(t.id, {
                            rulesChannelId: t.rulesChannelId,
                            preferredLocale: t.preferredLocale,
                            safetyAlertsChannelId: t.safetyAlertsChannelId,
                            publicUpdatesChannelId: t.publicUpdatesChannelId,
                            description: t.description,
                            features: t.features
                        });
                },
                errorMessage: e
            })
        );
    },
    Z = (e) => {
        let { discoveryEnabled: t, onboardingEnabled: n, guild: l } = e,
            [s, u] = i.useState(!0 === c.K.get(w)),
            g = (0, a.e7)([f.Z], () => {
                var e;
                return null != (e = f.Z.getMemberCount(l.id)) ? e : 0;
            }),
            [h, b] = i.useState(!1);
        (0, m.ZP)(() => {
            o.tn
                .get({
                    url: N.ANM.GUILD_ADMIN_SERVER_ELIGIBILITY(l.id),
                    rejectWithError: !0
                })
                .then((e) => {
                    b(e.body.eligible_for_admin_server);
                })
                .catch(() => b(!1));
        });
        let j = (0, a.e7)([x.Z], () => x.Z.getGuild('942897714956472401')),
            _ = l.isCommunity() && g >= 1000 && h && null == j;
        if (t && n && !_) return null;
        let O = async () => {
            try {
                let e = await o.tn.post({
                    url: N.ANM.JOIN_ADMIN_SERVER(l.id),
                    oldFormErrors: !0,
                    rejectWithError: !0
                });
                v.Z.close(), (0, p.X)(e.body.id);
            } catch (e) {}
        };
        return s && !_
            ? null
            : (0, r.jsxs)('div', {
                  className: E.upsellContainer,
                  children: [
                      (0, r.jsxs)('div', {
                          className: E.upsellContent,
                          children: [
                              (0, r.jsx)('img', {
                                  src: S,
                                  alt: '',
                                  width: 60,
                                  className: E.upsellImage
                              }),
                              (0, r.jsxs)('div', {
                                  children: [
                                      (0, r.jsx)(d.X6q, {
                                          variant: 'heading-md/semibold',
                                          className: E.upsellHeader,
                                          children: I.intl.string(I.t['pR/BgY'])
                                      }),
                                      (0, r.jsx)(d.Text, {
                                          variant: 'text-sm/normal',
                                          children: I.intl.string(I.t['V+Yo1t'])
                                      })
                                  ]
                              })
                          ]
                      }),
                      (0, r.jsx)(d.zxk, {
                          'aria-label': I.intl.string(I.t.cpT0Cg),
                          look: d.zxk.Looks.BLANK,
                          size: d.zxk.Sizes.NONE,
                          className: E.upsellClose,
                          onClick: () => {
                              c.K.set(w, !0), u(!0);
                          },
                          children: (0, r.jsx)(d.Dio, {
                              size: 'md',
                              color: 'currentColor'
                          })
                      }),
                      (0, r.jsxs)('div', {
                          className: E.upsellFooter,
                          children: [
                              _ &&
                                  (0, r.jsx)(d.zxk, {
                                      size: d.zxk.Sizes.SMALL,
                                      onClick: O,
                                      className: E.upsellButton,
                                      children: I.intl.string(I.t.iF1Asr)
                                  }),
                              n
                                  ? null
                                  : (0, r.jsx)(d.zxk, {
                                        size: d.zxk.Sizes.SMALL,
                                        onClick: () => {
                                            v.Z.setSection(N.pNK.ONBOARDING);
                                        },
                                        className: E.upsellButton,
                                        children: I.intl.string(I.t['S/DfiY'])
                                    }),
                              t
                                  ? null
                                  : (0, r.jsx)(d.zxk, {
                                        size: d.zxk.Sizes.SMALL,
                                        onClick: () => {
                                            v.Z.setSection(N.pNK.ACCESS, N.KsC.ACCESS_DISCOVERABLE);
                                        },
                                        className: E.upsellButton,
                                        color: d.zxk.Colors.PRIMARY,
                                        children: I.intl.string(I.t['0kmJd3'])
                                    }),
                              (0, r.jsx)(d.zxk, {
                                  size: d.zxk.Sizes.SMALL,
                                  onClick: () => {
                                      v.Z.setSection(N.pNK.ANALYTICS);
                                  },
                                  className: E.upsellButton,
                                  color: d.zxk.Colors.PRIMARY,
                                  children: I.intl.string(I.t.BQIYTU)
                              })
                          ]
                      })
                  ]
              });
    },
    D = () => {
        let e = (0, a.e7)([O.Z], () => O.Z.getGuild()),
            { canManageGuild: t, isGuildAdmin: n } = (0, a.cj)([b.Z], () => ({
                canManageGuild: b.Z.can(N.Plq.MANAGE_GUILD, e),
                isGuildAdmin: b.Z.can(N.Plq.ADMINISTRATOR, e)
            })),
            l = (0, a.e7)([h.ZP], () => (null != e ? h.ZP.getChannels(e.id) : null)),
            o = i.useMemo(y.jb, []),
            u = !0 !== c.K.get(w);
        if (null == e) return null;
        let m = [];
        null != l &&
            l[h.sH].forEach((e) => {
                let { channel: t } = e;
                t.type === N.d4z.GUILD_TEXT &&
                    m.push({
                        value: t.id,
                        label: (0, g.F6)(t, _.default, j.Z, !0)
                    });
            });
        let p = () => {
                if (null == e) return;
                let t = new Set(e.features);
                t.delete(N.oNc.COMMUNITY),
                    t.delete(N.oNc.DISCOVERABLE),
                    t.delete(N.oNc.PREVIEW_ENABLED),
                    v.Z.updateGuild({
                        features: t,
                        rulesChannelId: null,
                        publicUpdatesChannelId: null
                    });
            },
            f = (e) => {
                v.Z.updateGuild({ description: e });
            },
            x = () => {
                e.features.has(N.oNc.DISCOVERABLE) && e.features.has(N.oNc.PARTNERED)
                    ? (0, d.h7j)((e) =>
                          (0, r.jsx)(
                              d.ConfirmModal,
                              P(T({}, e), {
                                  header: I.intl.string(I.t.iBnVHR),
                                  confirmText: I.intl.string(I.t['cY+Ooa']),
                                  cancelText: I.intl.string(I.t.oEAioK),
                                  onConfirm: p,
                                  children: (0, r.jsx)(d.Text, {
                                      variant: 'text-sm/normal',
                                      children: I.intl.string(I.t['P+Sh8f'])
                                  })
                              })
                          )
                      )
                    : e.features.has(N.oNc.DISCOVERABLE)
                      ? (0, d.h7j)((e) =>
                            (0, r.jsx)(
                                d.ConfirmModal,
                                P(T({}, e), {
                                    header: I.intl.string(I.t.iBnVHR),
                                    confirmText: I.intl.string(I.t['cY+Ooa']),
                                    cancelText: I.intl.string(I.t.oEAioK),
                                    onConfirm: p,
                                    children: (0, r.jsx)(d.Text, {
                                        variant: 'text-sm/normal',
                                        children: I.intl.string(I.t['eMx/ub'])
                                    })
                                })
                            )
                        )
                      : e.features.has(N.oNc.PARTNERED)
                        ? (0, d.h7j)((e) =>
                              (0, r.jsx)(
                                  d.ConfirmModal,
                                  P(T({}, e), {
                                      header: I.intl.string(I.t.iBnVHR),
                                      confirmText: I.intl.string(I.t['cY+Ooa']),
                                      cancelText: I.intl.string(I.t.oEAioK),
                                      onConfirm: p,
                                      children: (0, r.jsx)(d.Text, {
                                          variant: 'text-sm/normal',
                                          children: I.intl.string(I.t.l1wLeX)
                                      })
                                  })
                              )
                          )
                        : p();
            };
        return (0, r.jsxs)(d.hjN, {
            title: I.intl.string(I.t.nRtNqq),
            tag: d.RB0.H1,
            children: [
                u
                    ? (0, r.jsx)(Z, {
                          discoveryEnabled: e.features.has(N.oNc.DISCOVERABLE),
                          onboardingEnabled: e.features.has(N.oNc.GUILD_ONBOARDING),
                          guild: e
                      })
                    : null,
                (0, r.jsxs)(d.hjN, {
                    className: s()(E.twoColumnFormSection, E.firstSection),
                    children: [
                        (0, r.jsxs)('div', {
                            className: E.descriptionColumn,
                            children: [
                                (0, r.jsx)(d.vwX, {
                                    className: E.formTitle,
                                    children: I.intl.string(I.t.otcXPz)
                                }),
                                (0, r.jsx)(d.R94, {
                                    type: d.geA.DESCRIPTION,
                                    className: E.__invalid_formDescription,
                                    children: I.intl.string(I.t.BtwmYG)
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: E.selectColumn,
                            children: (0, r.jsx)(d.VcW, {
                                value: e.rulesChannelId,
                                options: m,
                                onChange: (e) => {
                                    v.Z.updateGuild({ rulesChannelId: e });
                                },
                                isDisabled: !t
                            })
                        })
                    ]
                }),
                (0, r.jsx)(d.$i$, { className: E.divider }),
                (0, r.jsxs)(d.hjN, {
                    className: s()(E.twoColumnFormSection, E.firstSection),
                    children: [
                        (0, r.jsxs)('div', {
                            className: E.descriptionColumn,
                            children: [
                                (0, r.jsx)(d.vwX, {
                                    className: E.formTitle,
                                    children: I.intl.string(I.t.vAyDGR)
                                }),
                                (0, r.jsx)(d.R94, {
                                    type: d.geA.DESCRIPTION,
                                    className: E.__invalid_formDescription,
                                    children: I.intl.string(I.t.ZFeonp)
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: E.selectColumn,
                            children: (0, r.jsx)(d.VcW, {
                                value: e.publicUpdatesChannelId,
                                options: m,
                                onChange: (e) => {
                                    v.Z.updateGuild({ publicUpdatesChannelId: e });
                                },
                                isDisabled: !n
                            })
                        })
                    ]
                }),
                (0, r.jsx)(d.$i$, { className: E.divider }),
                (0, r.jsxs)(d.hjN, {
                    className: s()(E.twoColumnFormSection, E.firstSection),
                    children: [
                        (0, r.jsxs)('div', {
                            className: E.descriptionColumn,
                            children: [
                                (0, r.jsx)(d.vwX, {
                                    className: E.formTitle,
                                    children: I.intl.string(I.t.sMkYEx)
                                }),
                                (0, r.jsx)(d.R94, {
                                    type: d.geA.DESCRIPTION,
                                    className: E.__invalid_formDescription,
                                    children: I.intl.string(I.t.htioQk)
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: E.selectColumn,
                            children: (0, r.jsx)(d.VcW, {
                                value: e.safetyAlertsChannelId,
                                options: m,
                                onChange: (e) => {
                                    v.Z.updateGuild({ safetyAlertsChannelId: e });
                                },
                                isDisabled: !t
                            })
                        })
                    ]
                }),
                (0, r.jsx)(d.$i$, { className: E.divider }),
                (0, r.jsxs)(d.hjN, {
                    className: E.twoColumnFormSection,
                    children: [
                        (0, r.jsxs)('div', {
                            className: E.descriptionColumn,
                            children: [
                                (0, r.jsx)(d.vwX, {
                                    className: E.formTitle,
                                    children: I.intl.string(I.t.pO60f3)
                                }),
                                (0, r.jsx)(d.R94, {
                                    type: d.geA.DESCRIPTION,
                                    className: E.__invalid_formDescription,
                                    children: I.intl.string(I.t.aIR73d)
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: E.selectColumn,
                            children: (0, r.jsx)(d.VcW, {
                                value: e.preferredLocale,
                                options: o,
                                onChange: (e) => {
                                    v.Z.updateGuild({ preferredLocale: e });
                                },
                                isDisabled: !t
                            })
                        })
                    ]
                }),
                (0, r.jsx)(d.$i$, { className: E.divider }),
                (() => {
                    var n;
                    if (null != e)
                        return (0, r.jsxs)(d.hjN, {
                            children: [
                                (0, r.jsx)(d.vwX, {
                                    className: E.formTitle,
                                    children: I.intl.string(I.t['RSfm+v'])
                                }),
                                (0, r.jsx)(d.R94, {
                                    className: E.description,
                                    type: d.geA.DESCRIPTION,
                                    children: I.intl.string(I.t['/B6PR0'])
                                }),
                                (0, r.jsx)(d.Kx8, {
                                    value: null != (n = e.description) ? n : '',
                                    placeholder: I.intl.string(I.t.Nvfows),
                                    onChange: f,
                                    maxLength: 120,
                                    disabled: !t
                                })
                            ]
                        });
                })(),
                (0, r.jsx)(d.$i$, { className: E.divider }),
                (0, r.jsxs)(d.hjN, {
                    className: E.twoColumnFormSection,
                    children: [
                        (0, r.jsxs)('div', {
                            className: E.descriptionColumn,
                            children: [
                                (0, r.jsx)(d.vwX, {
                                    className: E.formTitle,
                                    children: I.intl.string(I.t.c1BmbG)
                                }),
                                (0, r.jsx)(d.R94, {
                                    type: d.geA.DESCRIPTION,
                                    className: E.__invalid_formDescription,
                                    children: I.intl.string(I.t.aQzVFx)
                                })
                            ]
                        }),
                        (0, r.jsx)(d.ua7, {
                            text: n ? null : I.intl.string(I.t['pjG+T0']),
                            'aria-label': n ? void 0 : I.intl.string(I.t['pjG+T0']),
                            children: (e) =>
                                (0, r.jsx)(
                                    d.zxk,
                                    P(
                                        T(
                                            {
                                                size: d.zxk.Sizes.SMALL,
                                                onClick: x,
                                                color: d.zxk.Colors.RED,
                                                disabled: !n
                                            },
                                            e
                                        ),
                                        { children: I.intl.string(I.t.c1BmbG) }
                                    )
                                )
                        })
                    ]
                })
            ]
        });
    },
    A = () => {
        let e = (0, a.e7)([O.Z], () => O.Z.getGuild());
        return null == e ? null : e.features.has(N.oNc.COMMUNITY) ? (0, r.jsx)(D, {}) : (0, r.jsx)(C.Z, { guild: e });
    };
