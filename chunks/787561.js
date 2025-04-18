n.d(t, {
    X: () => R,
    Z: () => A
}),
    n(953529),
    n(388685),
    n(539854);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    l = n.n(s),
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
    N = n(594174),
    _ = n(434404),
    v = n(999382),
    O = n(54842),
    C = n(929834),
    y = n(981631),
    I = n(388032),
    E = n(18920),
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
            } = (0, a.cj)([v.Z], () => ({
                submitting: v.Z.isSubmitting(),
                guild: v.Z.getGuild(),
                errors: v.Z.getErrors()
            })),
            s = Object.keys(i),
            l = s.length > 0 ? s[0] : null;
        return (
            (e = 'rules_channel_id' === l ? I.NW.string(I.t['7IrBYm']) : null != l ? i[l] : void 0),
            (0, r.jsx)(u.Z, {
                submitting: n,
                onReset: () => {
                    null != t && _.Z.init(t.id);
                },
                onSave: () => {
                    null != t &&
                        _.Z.saveGuild(t.id, {
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
        let { discoveryEnabled: t, onboardingEnabled: n, guild: s } = e,
            [l, u] = i.useState(!0 === c.K.get(w)),
            g = (0, a.e7)([f.Z], () => {
                var e;
                return null != (e = f.Z.getMemberCount(s.id)) ? e : 0;
            }),
            [h, b] = i.useState(!1);
        (0, m.ZP)(() => {
            o.tn
                .get({
                    url: y.ANM.GUILD_ADMIN_SERVER_ELIGIBILITY(s.id),
                    rejectWithError: !0
                })
                .then((e) => {
                    b(e.body.eligible_for_admin_server);
                })
                .catch(() => b(!1));
        });
        let j = (0, a.e7)([x.Z], () => x.Z.getGuild('942897714956472401')),
            N = s.isCommunity() && g >= 1000 && h && null == j;
        if (t && n && !N) return null;
        let v = async () => {
            try {
                let e = await o.tn.post({
                    url: y.ANM.JOIN_ADMIN_SERVER(s.id),
                    oldFormErrors: !0,
                    rejectWithError: !0
                });
                _.Z.close(), (0, p.X)(e.body.id);
            } catch (e) {}
        };
        return l && !N
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
                                          children: I.NW.string(I.t['pR/BgY'])
                                      }),
                                      (0, r.jsx)(d.Text, {
                                          variant: 'text-sm/normal',
                                          children: I.NW.string(I.t['V+Yo1t'])
                                      })
                                  ]
                              })
                          ]
                      }),
                      (0, r.jsx)(d.zxk, {
                          'aria-label': I.NW.string(I.t.cpT0Cg),
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
                              N &&
                                  (0, r.jsx)(d.zxk, {
                                      size: d.zxk.Sizes.SMALL,
                                      onClick: v,
                                      className: E.upsellButton,
                                      children: I.NW.string(I.t.iF1Asr)
                                  }),
                              n
                                  ? null
                                  : (0, r.jsx)(d.zxk, {
                                        size: d.zxk.Sizes.SMALL,
                                        onClick: () => {
                                            _.Z.setSection(y.pNK.ONBOARDING);
                                        },
                                        className: E.upsellButton,
                                        children: I.NW.string(I.t['S/DfiY'])
                                    }),
                              t
                                  ? null
                                  : (0, r.jsx)(d.zxk, {
                                        size: d.zxk.Sizes.SMALL,
                                        onClick: () => {
                                            _.Z.setSection(y.pNK.ACCESS, y.KsC.ACCESS_DISCOVERABLE);
                                        },
                                        className: E.upsellButton,
                                        color: d.zxk.Colors.PRIMARY,
                                        children: I.NW.string(I.t['0kmJd3'])
                                    }),
                              (0, r.jsx)(d.zxk, {
                                  size: d.zxk.Sizes.SMALL,
                                  onClick: () => {
                                      _.Z.setSection(y.pNK.ANALYTICS);
                                  },
                                  className: E.upsellButton,
                                  color: d.zxk.Colors.PRIMARY,
                                  children: I.NW.string(I.t.BQIYTU)
                              })
                          ]
                      })
                  ]
              });
    },
    D = () => {
        let e = (0, a.e7)([v.Z], () => v.Z.getGuild()),
            { canManageGuild: t, isGuildAdmin: n } = (0, a.cj)([b.Z], () => ({
                canManageGuild: b.Z.can(y.Plq.MANAGE_GUILD, e),
                isGuildAdmin: b.Z.can(y.Plq.ADMINISTRATOR, e)
            })),
            s = (0, a.e7)([h.ZP], () => (null != e ? h.ZP.getChannels(e.id) : null)),
            o = i.useMemo(C.jb, []),
            u = !0 !== c.K.get(w);
        if (null == e) return null;
        let m = [];
        null != s &&
            s[h.sH].forEach((e) => {
                let { channel: t } = e;
                t.type === y.d4z.GUILD_TEXT &&
                    m.push({
                        value: t.id,
                        label: (0, g.F6)(t, N.default, j.Z, !0)
                    });
            });
        let p = () => {
                if (null == e) return;
                let t = new Set(e.features);
                t.delete(y.oNc.COMMUNITY),
                    t.delete(y.oNc.DISCOVERABLE),
                    t.delete(y.oNc.PREVIEW_ENABLED),
                    _.Z.updateGuild({
                        features: t,
                        rulesChannelId: null,
                        publicUpdatesChannelId: null
                    });
            },
            f = (e) => {
                _.Z.updateGuild({ description: e });
            },
            x = () => {
                e.features.has(y.oNc.DISCOVERABLE) && e.features.has(y.oNc.PARTNERED)
                    ? (0, d.h7j)((e) =>
                          (0, r.jsx)(
                              d.ConfirmModal,
                              P(T({}, e), {
                                  header: I.NW.string(I.t.iBnVHR),
                                  confirmText: I.NW.string(I.t['cY+Ooa']),
                                  cancelText: I.NW.string(I.t.oEAioK),
                                  onConfirm: p,
                                  children: (0, r.jsx)(d.Text, {
                                      variant: 'text-sm/normal',
                                      children: I.NW.string(I.t['P+Sh8f'])
                                  })
                              })
                          )
                      )
                    : e.features.has(y.oNc.DISCOVERABLE)
                      ? (0, d.h7j)((e) =>
                            (0, r.jsx)(
                                d.ConfirmModal,
                                P(T({}, e), {
                                    header: I.NW.string(I.t.iBnVHR),
                                    confirmText: I.NW.string(I.t['cY+Ooa']),
                                    cancelText: I.NW.string(I.t.oEAioK),
                                    onConfirm: p,
                                    children: (0, r.jsx)(d.Text, {
                                        variant: 'text-sm/normal',
                                        children: I.NW.string(I.t['eMx/ub'])
                                    })
                                })
                            )
                        )
                      : e.features.has(y.oNc.PARTNERED)
                        ? (0, d.h7j)((e) =>
                              (0, r.jsx)(
                                  d.ConfirmModal,
                                  P(T({}, e), {
                                      header: I.NW.string(I.t.iBnVHR),
                                      confirmText: I.NW.string(I.t['cY+Ooa']),
                                      cancelText: I.NW.string(I.t.oEAioK),
                                      onConfirm: p,
                                      children: (0, r.jsx)(d.Text, {
                                          variant: 'text-sm/normal',
                                          children: I.NW.string(I.t.l1wLeX)
                                      })
                                  })
                              )
                          )
                        : p();
            };
        return (0, r.jsxs)(d.hjN, {
            title: I.NW.string(I.t.nRtNqq),
            tag: d.RB0.H1,
            children: [
                u
                    ? (0, r.jsx)(Z, {
                          discoveryEnabled: e.features.has(y.oNc.DISCOVERABLE),
                          onboardingEnabled: e.features.has(y.oNc.GUILD_ONBOARDING),
                          guild: e
                      })
                    : null,
                (0, r.jsxs)(d.hjN, {
                    className: l()(E.twoColumnFormSection, E.firstSection),
                    children: [
                        (0, r.jsxs)('div', {
                            className: E.descriptionColumn,
                            children: [
                                (0, r.jsx)(d.vwX, {
                                    className: E.formTitle,
                                    children: I.NW.string(I.t.otcXPz)
                                }),
                                (0, r.jsx)(d.R94, {
                                    type: d.geA.DESCRIPTION,
                                    className: E.__invalid_formDescription,
                                    children: I.NW.string(I.t.BtwmYG)
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: E.selectColumn,
                            children: (0, r.jsx)(d.VcW, {
                                value: e.rulesChannelId,
                                options: m,
                                onChange: (e) => {
                                    _.Z.updateGuild({ rulesChannelId: e });
                                },
                                isDisabled: !t
                            })
                        })
                    ]
                }),
                (0, r.jsx)(d.$i$, { className: E.divider }),
                (0, r.jsxs)(d.hjN, {
                    className: l()(E.twoColumnFormSection, E.firstSection),
                    children: [
                        (0, r.jsxs)('div', {
                            className: E.descriptionColumn,
                            children: [
                                (0, r.jsx)(d.vwX, {
                                    className: E.formTitle,
                                    children: I.NW.string(I.t.vAyDGR)
                                }),
                                (0, r.jsx)(d.R94, {
                                    type: d.geA.DESCRIPTION,
                                    className: E.__invalid_formDescription,
                                    children: I.NW.string(I.t.ZFeonp)
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: E.selectColumn,
                            children: (0, r.jsx)(d.VcW, {
                                value: e.publicUpdatesChannelId,
                                options: m,
                                onChange: (e) => {
                                    _.Z.updateGuild({ publicUpdatesChannelId: e });
                                },
                                isDisabled: !n
                            })
                        })
                    ]
                }),
                (0, r.jsx)(d.$i$, { className: E.divider }),
                (0, r.jsxs)(d.hjN, {
                    className: l()(E.twoColumnFormSection, E.firstSection),
                    children: [
                        (0, r.jsxs)('div', {
                            className: E.descriptionColumn,
                            children: [
                                (0, r.jsx)(d.vwX, {
                                    className: E.formTitle,
                                    children: I.NW.string(I.t.sMkYEx)
                                }),
                                (0, r.jsx)(d.R94, {
                                    type: d.geA.DESCRIPTION,
                                    className: E.__invalid_formDescription,
                                    children: I.NW.string(I.t.htioQk)
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: E.selectColumn,
                            children: (0, r.jsx)(d.VcW, {
                                value: e.safetyAlertsChannelId,
                                options: m,
                                onChange: (e) => {
                                    _.Z.updateGuild({ safetyAlertsChannelId: e });
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
                                    children: I.NW.string(I.t.pO60f3)
                                }),
                                (0, r.jsx)(d.R94, {
                                    type: d.geA.DESCRIPTION,
                                    className: E.__invalid_formDescription,
                                    children: I.NW.string(I.t.aIR73d)
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: E.selectColumn,
                            children: (0, r.jsx)(d.VcW, {
                                value: e.preferredLocale,
                                options: o,
                                onChange: (e) => {
                                    _.Z.updateGuild({ preferredLocale: e });
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
                                    children: I.NW.string(I.t['RSfm+v'])
                                }),
                                (0, r.jsx)(d.R94, {
                                    className: E.description,
                                    type: d.geA.DESCRIPTION,
                                    children: I.NW.string(I.t['/B6PR0'])
                                }),
                                (0, r.jsx)(d.Kx8, {
                                    value: null != (n = e.description) ? n : '',
                                    placeholder: I.NW.string(I.t.Nvfows),
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
                                    children: I.NW.string(I.t.c1BmbG)
                                }),
                                (0, r.jsx)(d.R94, {
                                    type: d.geA.DESCRIPTION,
                                    className: E.__invalid_formDescription,
                                    children: I.NW.string(I.t.aQzVFx)
                                })
                            ]
                        }),
                        (0, r.jsx)(d.ua7, {
                            text: n ? null : I.NW.string(I.t['pjG+T0']),
                            'aria-label': n ? void 0 : I.NW.string(I.t['pjG+T0']),
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
                                        { children: I.NW.string(I.t.c1BmbG) }
                                    )
                                )
                        })
                    ]
                })
            ]
        });
    },
    A = () => {
        let e = (0, a.e7)([v.Z], () => v.Z.getGuild());
        return null == e ? null : e.features.has(y.oNc.COMMUNITY) ? (0, r.jsx)(D, {}) : (0, r.jsx)(O.Z, { guild: e });
    };
