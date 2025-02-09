n.d(t, {
    X: () => A,
    Z: () => O
}),
    n(47120),
    n(653041);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(442837),
    o = n(544891),
    c = n(433517),
    d = n(481060),
    u = n(852860),
    m = n(493773),
    h = n(933557),
    g = n(63568),
    x = n(769654),
    p = n(984933),
    _ = n(650774),
    C = n(430824),
    f = n(496675),
    v = n(699516),
    N = n(594174),
    j = n(434404),
    I = n(999382),
    E = n(54842),
    b = n(929834),
    T = n(981631),
    S = n(388032),
    R = n(157917),
    Z = n(922905);
let y = 'dismissedCommunityFeaturesUpsell',
    A = () => {
        let e;
        let {
                guild: t,
                submitting: n,
                errors: r
            } = (0, a.cj)([I.Z], () => ({
                submitting: I.Z.isSubmitting(),
                guild: I.Z.getGuild(),
                errors: I.Z.getErrors()
            })),
            l = Object.keys(r),
            s = l.length > 0 ? l[0] : null;
        return (
            (e = 'rules_channel_id' === s ? S.intl.string(S.t['7IrBYm']) : null != s ? r[s] : void 0),
            (0, i.jsx)(u.Z, {
                submitting: n,
                onReset: () => {
                    null != t && j.Z.init(t.id);
                },
                onSave: () => {
                    null != t &&
                        j.Z.saveGuild(t.id, {
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
    L = (e) => {
        let { discoveryEnabled: t, onboardingEnabled: n, guild: l } = e,
            [s, u] = r.useState(!0 === c.K.get(y)),
            h = (0, a.e7)([_.Z], () => {
                var e;
                return null !== (e = _.Z.getMemberCount(l.id)) && void 0 !== e ? e : 0;
            }),
            [g, p] = r.useState(!1);
        (0, m.ZP)(() => {
            o.tn
                .get({
                    url: T.ANM.GUILD_ADMIN_SERVER_ELIGIBILITY(l.id),
                    rejectWithError: !0
                })
                .then((e) => {
                    p(e.body.eligible_for_admin_server);
                })
                .catch(() => p(!1));
        });
        let f = (0, a.e7)([C.Z], () => C.Z.getGuild('942897714956472401')),
            v = l.isCommunity() && h >= 1000 && g && !(null != f);
        if (t && n && !v) return null;
        let N = async () => {
            try {
                let e = await o.tn.post({
                    url: T.ANM.JOIN_ADMIN_SERVER(l.id),
                    oldFormErrors: !0,
                    rejectWithError: !0
                });
                j.Z.close(), (0, x.X)(e.body.id);
            } catch {}
        };
        return s && !v
            ? null
            : (0, i.jsxs)('div', {
                  className: R.upsellContainer,
                  children: [
                      (0, i.jsxs)('div', {
                          className: R.upsellContent,
                          children: [
                              (0, i.jsx)('img', {
                                  src: Z,
                                  alt: '',
                                  width: 60,
                                  className: R.upsellImage
                              }),
                              (0, i.jsxs)('div', {
                                  children: [
                                      (0, i.jsx)(d.X6q, {
                                          variant: 'heading-md/semibold',
                                          className: R.upsellHeader,
                                          children: S.intl.string(S.t['pR/BgY'])
                                      }),
                                      (0, i.jsx)(d.Text, {
                                          variant: 'text-sm/normal',
                                          children: S.intl.string(S.t['V+Yo1t'])
                                      })
                                  ]
                              })
                          ]
                      }),
                      (0, i.jsx)(d.zxk, {
                          'aria-label': S.intl.string(S.t.cpT0Cg),
                          look: d.zxk.Looks.BLANK,
                          size: d.zxk.Sizes.NONE,
                          className: R.upsellClose,
                          onClick: () => {
                              c.K.set(y, !0), u(!0);
                          },
                          children: (0, i.jsx)(d.Dio, {
                              size: 'md',
                              color: 'currentColor'
                          })
                      }),
                      (0, i.jsxs)('div', {
                          className: R.upsellFooter,
                          children: [
                              v &&
                                  (0, i.jsx)(d.zxk, {
                                      size: d.zxk.Sizes.SMALL,
                                      onClick: N,
                                      className: R.upsellButton,
                                      children: S.intl.string(S.t.iF1Asr)
                                  }),
                              n
                                  ? null
                                  : (0, i.jsx)(d.zxk, {
                                        size: d.zxk.Sizes.SMALL,
                                        onClick: () => {
                                            j.Z.setSection(T.pNK.ONBOARDING);
                                        },
                                        className: R.upsellButton,
                                        children: S.intl.string(S.t['S/DfiY'])
                                    }),
                              t
                                  ? null
                                  : (0, i.jsx)(d.zxk, {
                                        size: d.zxk.Sizes.SMALL,
                                        onClick: () => {
                                            j.Z.setSection(T.pNK.DISCOVERY);
                                        },
                                        className: R.upsellButton,
                                        color: d.zxk.Colors.PRIMARY,
                                        children: S.intl.string(S.t['0kmJd3'])
                                    }),
                              (0, i.jsx)(d.zxk, {
                                  size: d.zxk.Sizes.SMALL,
                                  onClick: () => {
                                      j.Z.setSection(T.pNK.ANALYTICS);
                                  },
                                  className: R.upsellButton,
                                  color: d.zxk.Colors.PRIMARY,
                                  children: S.intl.string(S.t.BQIYTU)
                              })
                          ]
                      })
                  ]
              });
    },
    D = () => {
        let e = (0, a.e7)([I.Z], () => I.Z.getGuild()),
            { canManageGuild: t, isGuildAdmin: n } = (0, a.cj)([f.Z], () => ({
                canManageGuild: f.Z.can(T.Plq.MANAGE_GUILD, e),
                isGuildAdmin: f.Z.can(T.Plq.ADMINISTRATOR, e)
            })),
            l = (0, a.e7)([p.ZP], () => (null != e ? p.ZP.getChannels(e.id) : null)),
            o = r.useMemo(b.jb, []),
            u = !0 !== c.K.get(y);
        if (null == e) return null;
        let m = [];
        null != l &&
            l[p.sH].forEach((e) => {
                let { channel: t } = e;
                t.type === T.d4z.GUILD_TEXT &&
                    m.push({
                        value: t.id,
                        label: (0, h.F6)(t, N.default, v.Z, !0)
                    });
            });
        let x = () => {
                j.Z.init(e.id), j.Z.open(e.id, T.pNK.MEMBER_VERIFICATION);
            },
            _ = () => {
                if (null == e) return;
                let t = new Set(e.features);
                t.delete(T.oNc.COMMUNITY),
                    t.delete(T.oNc.DISCOVERABLE),
                    (0, g.K2)(e.id, 'disableCommunity') || e.hasFeature(T.oNc.CLAN) || t.delete(T.oNc.MEMBER_VERIFICATION_GATE_ENABLED),
                    t.delete(T.oNc.PREVIEW_ENABLED),
                    j.Z.updateGuild({
                        features: t,
                        rulesChannelId: null,
                        publicUpdatesChannelId: null
                    });
            },
            C = (e) => {
                j.Z.updateGuild({ description: e });
            },
            E = () => {
                let t = (0, g.K2)(e.id, 'GuildSettingsCommunity');
                e.features.has(T.oNc.DISCOVERABLE) && e.features.has(T.oNc.PARTNERED)
                    ? (0, d.h7j)((e) =>
                          (0, i.jsx)(d.ConfirmModal, {
                              ...e,
                              header: S.intl.string(S.t.iBnVHR),
                              confirmText: S.intl.string(S.t['cY+Ooa']),
                              cancelText: S.intl.string(S.t.oEAioK),
                              onConfirm: _,
                              children: (0, i.jsx)(d.Text, {
                                  variant: 'text-sm/normal',
                                  children: S.intl.string(S.t['P+Sh8f'])
                              })
                          })
                      )
                    : e.features.has(T.oNc.DISCOVERABLE)
                      ? (0, d.h7j)((e) =>
                            (0, i.jsx)(d.ConfirmModal, {
                                ...e,
                                header: S.intl.string(S.t.iBnVHR),
                                confirmText: S.intl.string(S.t['cY+Ooa']),
                                cancelText: S.intl.string(S.t.oEAioK),
                                onConfirm: _,
                                children: (0, i.jsx)(d.Text, {
                                    variant: 'text-sm/normal',
                                    children: S.intl.string(S.t['eMx/ub'])
                                })
                            })
                        )
                      : e.features.has(T.oNc.PARTNERED)
                        ? (0, d.h7j)((e) =>
                              (0, i.jsx)(d.ConfirmModal, {
                                  ...e,
                                  header: S.intl.string(S.t.iBnVHR),
                                  confirmText: S.intl.string(S.t['cY+Ooa']),
                                  cancelText: S.intl.string(S.t.oEAioK),
                                  onConfirm: _,
                                  children: (0, i.jsx)(d.Text, {
                                      variant: 'text-sm/normal',
                                      children: S.intl.string(S.t.l1wLeX)
                                  })
                              })
                          )
                        : !e.features.has(T.oNc.MEMBER_VERIFICATION_GATE_ENABLED) || t || e.features.has(T.oNc.CLAN)
                          ? _()
                          : (0, d.h7j)((e) =>
                                (0, i.jsx)(d.ConfirmModal, {
                                    ...e,
                                    header: S.intl.string(S.t.iBnVHR),
                                    confirmButtonColor: d.zxk.Colors.BRAND,
                                    confirmText: S.intl.string(S.t.izNBMz),
                                    cancelText: S.intl.string(S.t.oEAioK),
                                    onConfirm: x,
                                    children: (0, i.jsx)(d.Text, {
                                        variant: 'text-sm/normal',
                                        children: S.intl.string(S.t.kQzUNj)
                                    })
                                })
                            );
            };
        return (0, i.jsxs)(d.hjN, {
            title: S.intl.string(S.t.nRtNqq),
            tag: d.RB0.H1,
            children: [
                u
                    ? (0, i.jsx)(L, {
                          discoveryEnabled: e.features.has(T.oNc.DISCOVERABLE),
                          onboardingEnabled: e.features.has(T.oNc.GUILD_ONBOARDING),
                          guild: e
                      })
                    : null,
                (0, i.jsxs)(d.hjN, {
                    className: s()(R.twoColumnFormSection, R.firstSection),
                    children: [
                        (0, i.jsxs)('div', {
                            className: R.descriptionColumn,
                            children: [
                                (0, i.jsx)(d.vwX, {
                                    className: R.formTitle,
                                    children: S.intl.string(S.t.otcXPz)
                                }),
                                (0, i.jsx)(d.R94, {
                                    type: d.geA.DESCRIPTION,
                                    className: R.__invalid_formDescription,
                                    children: S.intl.string(S.t.BtwmYG)
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: R.selectColumn,
                            children: (0, i.jsx)(d.VcW, {
                                value: e.rulesChannelId,
                                options: m,
                                onChange: (e) => {
                                    j.Z.updateGuild({ rulesChannelId: e });
                                },
                                isDisabled: !t
                            })
                        })
                    ]
                }),
                (0, i.jsx)(d.$i$, { className: R.divider }),
                (0, i.jsxs)(d.hjN, {
                    className: s()(R.twoColumnFormSection, R.firstSection),
                    children: [
                        (0, i.jsxs)('div', {
                            className: R.descriptionColumn,
                            children: [
                                (0, i.jsx)(d.vwX, {
                                    className: R.formTitle,
                                    children: S.intl.string(S.t.vAyDGR)
                                }),
                                (0, i.jsx)(d.R94, {
                                    type: d.geA.DESCRIPTION,
                                    className: R.__invalid_formDescription,
                                    children: S.intl.string(S.t.ZFeonp)
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: R.selectColumn,
                            children: (0, i.jsx)(d.VcW, {
                                value: e.publicUpdatesChannelId,
                                options: m,
                                onChange: (e) => {
                                    j.Z.updateGuild({ publicUpdatesChannelId: e });
                                },
                                isDisabled: !n
                            })
                        })
                    ]
                }),
                (0, i.jsx)(d.$i$, { className: R.divider }),
                (0, i.jsxs)(d.hjN, {
                    className: s()(R.twoColumnFormSection, R.firstSection),
                    children: [
                        (0, i.jsxs)('div', {
                            className: R.descriptionColumn,
                            children: [
                                (0, i.jsx)(d.vwX, {
                                    className: R.formTitle,
                                    children: S.intl.string(S.t.sMkYEx)
                                }),
                                (0, i.jsx)(d.R94, {
                                    type: d.geA.DESCRIPTION,
                                    className: R.__invalid_formDescription,
                                    children: S.intl.string(S.t.htioQk)
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: R.selectColumn,
                            children: (0, i.jsx)(d.VcW, {
                                value: e.safetyAlertsChannelId,
                                options: m,
                                onChange: (e) => {
                                    j.Z.updateGuild({ safetyAlertsChannelId: e });
                                },
                                isDisabled: !t
                            })
                        })
                    ]
                }),
                (0, i.jsx)(d.$i$, { className: R.divider }),
                (0, i.jsxs)(d.hjN, {
                    className: R.twoColumnFormSection,
                    children: [
                        (0, i.jsxs)('div', {
                            className: R.descriptionColumn,
                            children: [
                                (0, i.jsx)(d.vwX, {
                                    className: R.formTitle,
                                    children: S.intl.string(S.t.pO60f3)
                                }),
                                (0, i.jsx)(d.R94, {
                                    type: d.geA.DESCRIPTION,
                                    className: R.__invalid_formDescription,
                                    children: S.intl.string(S.t.aIR73d)
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: R.selectColumn,
                            children: (0, i.jsx)(d.VcW, {
                                value: e.preferredLocale,
                                options: o,
                                onChange: (e) => {
                                    j.Z.updateGuild({ preferredLocale: e });
                                },
                                isDisabled: !t
                            })
                        })
                    ]
                }),
                (0, i.jsx)(d.$i$, { className: R.divider }),
                (() => {
                    var n;
                    if (null != e)
                        return (0, i.jsxs)(d.hjN, {
                            children: [
                                (0, i.jsx)(d.vwX, {
                                    className: R.formTitle,
                                    children: S.intl.string(S.t['RSfm+v'])
                                }),
                                (0, i.jsx)(d.R94, {
                                    className: R.description,
                                    type: d.geA.DESCRIPTION,
                                    children: S.intl.string(S.t['/B6PR0'])
                                }),
                                (0, i.jsx)(d.Kx8, {
                                    value: null !== (n = e.description) && void 0 !== n ? n : '',
                                    placeholder: S.intl.string(S.t.Nvfows),
                                    onChange: C,
                                    maxLength: 120,
                                    disabled: !t
                                })
                            ]
                        });
                })(),
                (0, i.jsx)(d.$i$, { className: R.divider }),
                (0, i.jsxs)(d.hjN, {
                    className: R.twoColumnFormSection,
                    children: [
                        (0, i.jsxs)('div', {
                            className: R.descriptionColumn,
                            children: [
                                (0, i.jsx)(d.vwX, {
                                    className: R.formTitle,
                                    children: S.intl.string(S.t.c1BmbG)
                                }),
                                (0, i.jsx)(d.R94, {
                                    type: d.geA.DESCRIPTION,
                                    className: R.__invalid_formDescription,
                                    children: S.intl.string(S.t.aQzVFx)
                                })
                            ]
                        }),
                        (0, i.jsx)(d.ua7, {
                            text: n ? null : S.intl.string(S.t['pjG+T0']),
                            'aria-label': n ? void 0 : S.intl.string(S.t['pjG+T0']),
                            children: (e) =>
                                (0, i.jsx)(d.zxk, {
                                    size: d.zxk.Sizes.SMALL,
                                    onClick: E,
                                    color: d.zxk.Colors.RED,
                                    disabled: !n,
                                    ...e,
                                    children: S.intl.string(S.t.c1BmbG)
                                })
                        })
                    ]
                })
            ]
        });
    },
    O = () => {
        let e = (0, a.e7)([I.Z], () => I.Z.getGuild());
        return null == e ? null : e.features.has(T.oNc.COMMUNITY) ? (0, i.jsx)(D, {}) : (0, i.jsx)(E.Z, { guild: e });
    };
