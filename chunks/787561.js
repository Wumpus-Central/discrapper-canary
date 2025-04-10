n.d(t, {
    X: () => R,
    Z: () => k
}),
    n(953529),
    n(388685),
    n(539854);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(544891),
    c = n(433517),
    d = n(481060),
    u = n(852860),
    m = n(493773),
    g = n(933557),
    p = n(769654),
    f = n(984933),
    h = n(650774),
    b = n(430824),
    x = n(496675),
    j = n(699516),
    N = n(594174),
    v = n(434404),
    _ = n(999382),
    y = n(54842),
    O = n(929834),
    C = n(981631),
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
            } = (0, l.cj)([_.Z], () => ({
                submitting: _.Z.isSubmitting(),
                guild: _.Z.getGuild(),
                errors: _.Z.getErrors()
            })),
            s = Object.keys(i),
            a = s.length > 0 ? s[0] : null;
        return (
            (e = 'rules_channel_id' === a ? I.NW.string(I.t['7IrBYm']) : null != a ? i[a] : void 0),
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
        let { discoveryEnabled: t, onboardingEnabled: n, guild: s } = e,
            [a, u] = i.useState(!0 === c.K.get(w)),
            g = (0, l.e7)([h.Z], () => {
                var e;
                return null != (e = h.Z.getMemberCount(s.id)) ? e : 0;
            }),
            [f, x] = i.useState(!1);
        (0, m.ZP)(() => {
            o.tn
                .get({
                    url: C.ANM.GUILD_ADMIN_SERVER_ELIGIBILITY(s.id),
                    rejectWithError: !0
                })
                .then((e) => {
                    x(e.body.eligible_for_admin_server);
                })
                .catch(() => x(!1));
        });
        let j = (0, l.e7)([b.Z], () => b.Z.getGuild('942897714956472401')),
            N = s.isCommunity() && g >= 1000 && f && null == j;
        if (t && n && !N) return null;
        let _ = async () => {
            try {
                let e = await o.tn.post({
                    url: C.ANM.JOIN_ADMIN_SERVER(s.id),
                    oldFormErrors: !0,
                    rejectWithError: !0
                });
                v.Z.close(), (0, p.X)(e.body.id);
            } catch (e) {}
        };
        return a && !N
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
                                      onClick: _,
                                      className: E.upsellButton,
                                      children: I.NW.string(I.t.iF1Asr)
                                  }),
                              n
                                  ? null
                                  : (0, r.jsx)(d.zxk, {
                                        size: d.zxk.Sizes.SMALL,
                                        onClick: () => {
                                            v.Z.setSection(C.pNK.ONBOARDING);
                                        },
                                        className: E.upsellButton,
                                        children: I.NW.string(I.t['S/DfiY'])
                                    }),
                              t
                                  ? null
                                  : (0, r.jsx)(d.zxk, {
                                        size: d.zxk.Sizes.SMALL,
                                        onClick: () => {
                                            v.Z.setSection(C.pNK.ACCESS, C.KsC.ACCESS_DISCOVERABLE);
                                        },
                                        className: E.upsellButton,
                                        color: d.zxk.Colors.PRIMARY,
                                        children: I.NW.string(I.t['0kmJd3'])
                                    }),
                              (0, r.jsx)(d.zxk, {
                                  size: d.zxk.Sizes.SMALL,
                                  onClick: () => {
                                      v.Z.setSection(C.pNK.ANALYTICS);
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
        let e = (0, l.e7)([_.Z], () => _.Z.getGuild()),
            { canManageGuild: t, isGuildAdmin: n } = (0, l.cj)([x.Z], () => ({
                canManageGuild: x.Z.can(C.Plq.MANAGE_GUILD, e),
                isGuildAdmin: x.Z.can(C.Plq.ADMINISTRATOR, e)
            })),
            s = (0, l.e7)([f.ZP], () => (null != e ? f.ZP.getChannels(e.id) : null)),
            o = i.useMemo(O.jb, []),
            u = !0 !== c.K.get(w);
        if (null == e) return null;
        let m = [];
        null != s &&
            s[f.sH].forEach((e) => {
                let { channel: t } = e;
                t.type === C.d4z.GUILD_TEXT &&
                    m.push({
                        value: t.id,
                        label: (0, g.F6)(t, N.default, j.Z, !0)
                    });
            });
        let p = () => {
                if (null == e) return;
                let t = new Set(e.features);
                t.delete(C.oNc.COMMUNITY),
                    t.delete(C.oNc.DISCOVERABLE),
                    t.delete(C.oNc.PREVIEW_ENABLED),
                    v.Z.updateGuild({
                        features: t,
                        rulesChannelId: null,
                        publicUpdatesChannelId: null
                    });
            },
            h = (e) => {
                v.Z.updateGuild({ description: e });
            },
            b = () => {
                e.features.has(C.oNc.DISCOVERABLE) && e.features.has(C.oNc.PARTNERED)
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
                    : e.features.has(C.oNc.DISCOVERABLE)
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
                      : e.features.has(C.oNc.PARTNERED)
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
                          discoveryEnabled: e.features.has(C.oNc.DISCOVERABLE),
                          onboardingEnabled: e.features.has(C.oNc.GUILD_ONBOARDING),
                          guild: e
                      })
                    : null,
                (0, r.jsxs)(d.hjN, {
                    className: a()(E.twoColumnFormSection, E.firstSection),
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
                                    v.Z.updateGuild({ rulesChannelId: e });
                                },
                                isDisabled: !t
                            })
                        })
                    ]
                }),
                (0, r.jsx)(d.$i$, { className: E.divider }),
                (0, r.jsxs)(d.hjN, {
                    className: a()(E.twoColumnFormSection, E.firstSection),
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
                                    v.Z.updateGuild({ publicUpdatesChannelId: e });
                                },
                                isDisabled: !n
                            })
                        })
                    ]
                }),
                (0, r.jsx)(d.$i$, { className: E.divider }),
                (0, r.jsxs)(d.hjN, {
                    className: a()(E.twoColumnFormSection, E.firstSection),
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
                                    onChange: h,
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
                                                onClick: b,
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
    k = () => {
        let e = (0, l.e7)([_.Z], () => _.Z.getGuild());
        return null == e ? null : e.features.has(C.oNc.COMMUNITY) ? (0, r.jsx)(D, {}) : (0, r.jsx)(y.Z, { guild: e });
    };
