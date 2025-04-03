n.d(t, {
    X: () => Z,
    Z: () => k
}),
    n(266796),
    n(47120),
    n(653041);
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
    p = n(63568),
    h = n(769654),
    f = n(984933),
    b = n(650774),
    x = n(430824),
    j = n(496675),
    N = n(699516),
    _ = n(594174),
    v = n(434404),
    C = n(999382),
    O = n(54842),
    y = n(929834),
    I = n(981631),
    E = n(388032),
    S = n(90386),
    T = n(922905);
function P(e) {
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
function w(e, t) {
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
let R = 'dismissedCommunityFeaturesUpsell',
    Z = () => {
        let e,
            {
                guild: t,
                submitting: n,
                errors: i
            } = (0, l.cj)([C.Z], () => ({
                submitting: C.Z.isSubmitting(),
                guild: C.Z.getGuild(),
                errors: C.Z.getErrors()
            })),
            s = Object.keys(i),
            a = s.length > 0 ? s[0] : null;
        return (
            (e = 'rules_channel_id' === a ? E.NW.string(E.t['7IrBYm']) : null != a ? i[a] : void 0),
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
    D = (e) => {
        let { discoveryEnabled: t, onboardingEnabled: n, guild: s } = e,
            [a, u] = i.useState(!0 === c.K.get(R)),
            g = (0, l.e7)([b.Z], () => {
                var e;
                return null != (e = b.Z.getMemberCount(s.id)) ? e : 0;
            }),
            [p, f] = i.useState(!1);
        (0, m.ZP)(() => {
            o.tn
                .get({
                    url: I.ANM.GUILD_ADMIN_SERVER_ELIGIBILITY(s.id),
                    rejectWithError: !0
                })
                .then((e) => {
                    f(e.body.eligible_for_admin_server);
                })
                .catch(() => f(!1));
        });
        let j = (0, l.e7)([x.Z], () => x.Z.getGuild('942897714956472401')),
            N = s.isCommunity() && g >= 1000 && p && null == j;
        if (t && n && !N) return null;
        let _ = async () => {
            try {
                let e = await o.tn.post({
                    url: I.ANM.JOIN_ADMIN_SERVER(s.id),
                    oldFormErrors: !0,
                    rejectWithError: !0
                });
                v.Z.close(), (0, h.X)(e.body.id);
            } catch (e) {}
        };
        return a && !N
            ? null
            : (0, r.jsxs)('div', {
                  className: S.upsellContainer,
                  children: [
                      (0, r.jsxs)('div', {
                          className: S.upsellContent,
                          children: [
                              (0, r.jsx)('img', {
                                  src: T,
                                  alt: '',
                                  width: 60,
                                  className: S.upsellImage
                              }),
                              (0, r.jsxs)('div', {
                                  children: [
                                      (0, r.jsx)(d.X6q, {
                                          variant: 'heading-md/semibold',
                                          className: S.upsellHeader,
                                          children: E.NW.string(E.t['pR/BgY'])
                                      }),
                                      (0, r.jsx)(d.Text, {
                                          variant: 'text-sm/normal',
                                          children: E.NW.string(E.t['V+Yo1t'])
                                      })
                                  ]
                              })
                          ]
                      }),
                      (0, r.jsx)(d.zxk, {
                          'aria-label': E.NW.string(E.t.cpT0Cg),
                          look: d.zxk.Looks.BLANK,
                          size: d.zxk.Sizes.NONE,
                          className: S.upsellClose,
                          onClick: () => {
                              c.K.set(R, !0), u(!0);
                          },
                          children: (0, r.jsx)(d.Dio, {
                              size: 'md',
                              color: 'currentColor'
                          })
                      }),
                      (0, r.jsxs)('div', {
                          className: S.upsellFooter,
                          children: [
                              N &&
                                  (0, r.jsx)(d.zxk, {
                                      size: d.zxk.Sizes.SMALL,
                                      onClick: _,
                                      className: S.upsellButton,
                                      children: E.NW.string(E.t.iF1Asr)
                                  }),
                              n
                                  ? null
                                  : (0, r.jsx)(d.zxk, {
                                        size: d.zxk.Sizes.SMALL,
                                        onClick: () => {
                                            v.Z.setSection(I.pNK.ONBOARDING);
                                        },
                                        className: S.upsellButton,
                                        children: E.NW.string(E.t['S/DfiY'])
                                    }),
                              t
                                  ? null
                                  : (0, r.jsx)(d.zxk, {
                                        size: d.zxk.Sizes.SMALL,
                                        onClick: () => {
                                            v.Z.setSection(I.pNK.DISCOVERY);
                                        },
                                        className: S.upsellButton,
                                        color: d.zxk.Colors.PRIMARY,
                                        children: E.NW.string(E.t['0kmJd3'])
                                    }),
                              (0, r.jsx)(d.zxk, {
                                  size: d.zxk.Sizes.SMALL,
                                  onClick: () => {
                                      v.Z.setSection(I.pNK.ANALYTICS);
                                  },
                                  className: S.upsellButton,
                                  color: d.zxk.Colors.PRIMARY,
                                  children: E.NW.string(E.t.BQIYTU)
                              })
                          ]
                      })
                  ]
              });
    },
    A = () => {
        let e = (0, l.e7)([C.Z], () => C.Z.getGuild()),
            { canManageGuild: t, isGuildAdmin: n } = (0, l.cj)([j.Z], () => ({
                canManageGuild: j.Z.can(I.Plq.MANAGE_GUILD, e),
                isGuildAdmin: j.Z.can(I.Plq.ADMINISTRATOR, e)
            })),
            s = (0, l.e7)([f.ZP], () => (null != e ? f.ZP.getChannels(e.id) : null)),
            o = i.useMemo(y.jb, []),
            u = !0 !== c.K.get(R);
        if (null == e) return null;
        let m = [];
        null != s &&
            s[f.sH].forEach((e) => {
                let { channel: t } = e;
                t.type === I.d4z.GUILD_TEXT &&
                    m.push({
                        value: t.id,
                        label: (0, g.F6)(t, _.default, N.Z, !0)
                    });
            });
        let h = () => {
                v.Z.init(e.id), v.Z.open(e.id, I.pNK.MEMBER_VERIFICATION);
            },
            b = () => {
                if (null == e) return;
                let t = new Set(e.features);
                t.delete(I.oNc.COMMUNITY),
                    t.delete(I.oNc.DISCOVERABLE),
                    (0, p.K2)(e.id, 'disableCommunity') || e.hasFeature(I.oNc.CLAN) || t.delete(I.oNc.MEMBER_VERIFICATION_GATE_ENABLED),
                    t.delete(I.oNc.PREVIEW_ENABLED),
                    v.Z.updateGuild({
                        features: t,
                        rulesChannelId: null,
                        publicUpdatesChannelId: null
                    });
            },
            x = (e) => {
                v.Z.updateGuild({ description: e });
            },
            O = () => {
                let t = (0, p.K2)(e.id, 'GuildSettingsCommunity');
                e.features.has(I.oNc.DISCOVERABLE) && e.features.has(I.oNc.PARTNERED)
                    ? (0, d.h7j)((e) =>
                          (0, r.jsx)(
                              d.ConfirmModal,
                              w(P({}, e), {
                                  header: E.NW.string(E.t.iBnVHR),
                                  confirmText: E.NW.string(E.t['cY+Ooa']),
                                  cancelText: E.NW.string(E.t.oEAioK),
                                  onConfirm: b,
                                  children: (0, r.jsx)(d.Text, {
                                      variant: 'text-sm/normal',
                                      children: E.NW.string(E.t['P+Sh8f'])
                                  })
                              })
                          )
                      )
                    : e.features.has(I.oNc.DISCOVERABLE)
                      ? (0, d.h7j)((e) =>
                            (0, r.jsx)(
                                d.ConfirmModal,
                                w(P({}, e), {
                                    header: E.NW.string(E.t.iBnVHR),
                                    confirmText: E.NW.string(E.t['cY+Ooa']),
                                    cancelText: E.NW.string(E.t.oEAioK),
                                    onConfirm: b,
                                    children: (0, r.jsx)(d.Text, {
                                        variant: 'text-sm/normal',
                                        children: E.NW.string(E.t['eMx/ub'])
                                    })
                                })
                            )
                        )
                      : e.features.has(I.oNc.PARTNERED)
                        ? (0, d.h7j)((e) =>
                              (0, r.jsx)(
                                  d.ConfirmModal,
                                  w(P({}, e), {
                                      header: E.NW.string(E.t.iBnVHR),
                                      confirmText: E.NW.string(E.t['cY+Ooa']),
                                      cancelText: E.NW.string(E.t.oEAioK),
                                      onConfirm: b,
                                      children: (0, r.jsx)(d.Text, {
                                          variant: 'text-sm/normal',
                                          children: E.NW.string(E.t.l1wLeX)
                                      })
                                  })
                              )
                          )
                        : !e.features.has(I.oNc.MEMBER_VERIFICATION_GATE_ENABLED) || t || e.features.has(I.oNc.CLAN)
                          ? b()
                          : (0, d.h7j)((e) =>
                                (0, r.jsx)(
                                    d.ConfirmModal,
                                    w(P({}, e), {
                                        header: E.NW.string(E.t.iBnVHR),
                                        confirmButtonColor: d.zxk.Colors.BRAND,
                                        confirmText: E.NW.string(E.t.izNBMz),
                                        cancelText: E.NW.string(E.t.oEAioK),
                                        onConfirm: h,
                                        children: (0, r.jsx)(d.Text, {
                                            variant: 'text-sm/normal',
                                            children: E.NW.string(E.t.kQzUNj)
                                        })
                                    })
                                )
                            );
            };
        return (0, r.jsxs)(d.hjN, {
            title: E.NW.string(E.t.nRtNqq),
            tag: d.RB0.H1,
            children: [
                u
                    ? (0, r.jsx)(D, {
                          discoveryEnabled: e.features.has(I.oNc.DISCOVERABLE),
                          onboardingEnabled: e.features.has(I.oNc.GUILD_ONBOARDING),
                          guild: e
                      })
                    : null,
                (0, r.jsxs)(d.hjN, {
                    className: a()(S.twoColumnFormSection, S.firstSection),
                    children: [
                        (0, r.jsxs)('div', {
                            className: S.descriptionColumn,
                            children: [
                                (0, r.jsx)(d.vwX, {
                                    className: S.formTitle,
                                    children: E.NW.string(E.t.otcXPz)
                                }),
                                (0, r.jsx)(d.R94, {
                                    type: d.geA.DESCRIPTION,
                                    className: S.__invalid_formDescription,
                                    children: E.NW.string(E.t.BtwmYG)
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: S.selectColumn,
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
                (0, r.jsx)(d.$i$, { className: S.divider }),
                (0, r.jsxs)(d.hjN, {
                    className: a()(S.twoColumnFormSection, S.firstSection),
                    children: [
                        (0, r.jsxs)('div', {
                            className: S.descriptionColumn,
                            children: [
                                (0, r.jsx)(d.vwX, {
                                    className: S.formTitle,
                                    children: E.NW.string(E.t.vAyDGR)
                                }),
                                (0, r.jsx)(d.R94, {
                                    type: d.geA.DESCRIPTION,
                                    className: S.__invalid_formDescription,
                                    children: E.NW.string(E.t.ZFeonp)
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: S.selectColumn,
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
                (0, r.jsx)(d.$i$, { className: S.divider }),
                (0, r.jsxs)(d.hjN, {
                    className: a()(S.twoColumnFormSection, S.firstSection),
                    children: [
                        (0, r.jsxs)('div', {
                            className: S.descriptionColumn,
                            children: [
                                (0, r.jsx)(d.vwX, {
                                    className: S.formTitle,
                                    children: E.NW.string(E.t.sMkYEx)
                                }),
                                (0, r.jsx)(d.R94, {
                                    type: d.geA.DESCRIPTION,
                                    className: S.__invalid_formDescription,
                                    children: E.NW.string(E.t.htioQk)
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: S.selectColumn,
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
                (0, r.jsx)(d.$i$, { className: S.divider }),
                (0, r.jsxs)(d.hjN, {
                    className: S.twoColumnFormSection,
                    children: [
                        (0, r.jsxs)('div', {
                            className: S.descriptionColumn,
                            children: [
                                (0, r.jsx)(d.vwX, {
                                    className: S.formTitle,
                                    children: E.NW.string(E.t.pO60f3)
                                }),
                                (0, r.jsx)(d.R94, {
                                    type: d.geA.DESCRIPTION,
                                    className: S.__invalid_formDescription,
                                    children: E.NW.string(E.t.aIR73d)
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: S.selectColumn,
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
                (0, r.jsx)(d.$i$, { className: S.divider }),
                (() => {
                    var n;
                    if (null != e)
                        return (0, r.jsxs)(d.hjN, {
                            children: [
                                (0, r.jsx)(d.vwX, {
                                    className: S.formTitle,
                                    children: E.NW.string(E.t['RSfm+v'])
                                }),
                                (0, r.jsx)(d.R94, {
                                    className: S.description,
                                    type: d.geA.DESCRIPTION,
                                    children: E.NW.string(E.t['/B6PR0'])
                                }),
                                (0, r.jsx)(d.Kx8, {
                                    value: null != (n = e.description) ? n : '',
                                    placeholder: E.NW.string(E.t.Nvfows),
                                    onChange: x,
                                    maxLength: 120,
                                    disabled: !t
                                })
                            ]
                        });
                })(),
                (0, r.jsx)(d.$i$, { className: S.divider }),
                (0, r.jsxs)(d.hjN, {
                    className: S.twoColumnFormSection,
                    children: [
                        (0, r.jsxs)('div', {
                            className: S.descriptionColumn,
                            children: [
                                (0, r.jsx)(d.vwX, {
                                    className: S.formTitle,
                                    children: E.NW.string(E.t.c1BmbG)
                                }),
                                (0, r.jsx)(d.R94, {
                                    type: d.geA.DESCRIPTION,
                                    className: S.__invalid_formDescription,
                                    children: E.NW.string(E.t.aQzVFx)
                                })
                            ]
                        }),
                        (0, r.jsx)(d.ua7, {
                            text: n ? null : E.NW.string(E.t['pjG+T0']),
                            'aria-label': n ? void 0 : E.NW.string(E.t['pjG+T0']),
                            children: (e) =>
                                (0, r.jsx)(
                                    d.zxk,
                                    w(
                                        P(
                                            {
                                                size: d.zxk.Sizes.SMALL,
                                                onClick: O,
                                                color: d.zxk.Colors.RED,
                                                disabled: !n
                                            },
                                            e
                                        ),
                                        { children: E.NW.string(E.t.c1BmbG) }
                                    )
                                )
                        })
                    ]
                })
            ]
        });
    },
    k = () => {
        let e = (0, l.e7)([C.Z], () => C.Z.getGuild());
        return null == e ? null : e.features.has(I.oNc.COMMUNITY) ? (0, r.jsx)(A, {}) : (0, r.jsx)(O.Z, { guild: e });
    };
