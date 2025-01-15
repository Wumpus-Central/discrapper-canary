n.d(t, {
    X: function () {
        return Z;
    }
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
    f = n(650774),
    C = n(430824),
    v = n(496675),
    I = n(699516),
    N = n(594174),
    _ = n(434404),
    T = n(999382),
    j = n(54842),
    b = n(929834),
    E = n(981631),
    S = n(388032),
    R = n(124467),
    y = n(922905);
let A = 'dismissedCommunityFeaturesUpsell',
    Z = () => {
        let e;
        let {
                guild: t,
                submitting: n,
                errors: r
            } = (0, a.cj)([T.Z], () => ({
                submitting: T.Z.isSubmitting(),
                guild: T.Z.getGuild(),
                errors: T.Z.getErrors()
            })),
            l = Object.keys(r),
            s = l.length > 0 ? l[0] : null;
        if ('rules_channel_id' === s) e = S.intl.string(S.t['7IrBYm']);
        else e = null != s ? r[s] : void 0;
        return (0, i.jsx)(u.Z, {
            submitting: n,
            onReset: () => {
                if (null != t) _.Z.init(t.id);
            },
            onSave: () => {
                if (null != t)
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
        });
    },
    L = (e) => {
        let { discoveryEnabled: t, onboardingEnabled: n, guild: l } = e,
            [s, u] = r.useState(!0 === c.K.get(A)),
            h = (0, a.e7)([f.Z], () => {
                var e;
                return null !== (e = f.Z.getMemberCount(l.id)) && void 0 !== e ? e : 0;
            }),
            [g, p] = r.useState(!1);
        (0, m.Z)(() => {
            o.tn
                .get({
                    url: E.ANM.GUILD_ADMIN_SERVER_ELIGIBILITY(l.id),
                    rejectWithError: !0
                })
                .then((e) => {
                    p(e.body.eligible_for_admin_server);
                })
                .catch(() => p(!1));
        });
        let v = (0, a.e7)([C.Z], () => C.Z.getGuild('942897714956472401')),
            I = l.isCommunity() && h >= 1000 && g && !(null != v);
        if (t && n && !I) return null;
        let N = async () => {
            try {
                let e = await o.tn.post({
                    url: E.ANM.JOIN_ADMIN_SERVER(l.id),
                    oldFormErrors: !0,
                    rejectWithError: !0
                });
                _.Z.close(), (0, x.X)(e.body.id);
            } catch {}
        };
        return s && !I
            ? null
            : (0, i.jsxs)('div', {
                  className: R.upsellContainer,
                  children: [
                      (0, i.jsxs)('div', {
                          className: R.upsellContent,
                          children: [
                              (0, i.jsx)('img', {
                                  src: y,
                                  alt: '',
                                  width: 60,
                                  className: R.upsellImage
                              }),
                              (0, i.jsxs)('div', {
                                  children: [
                                      (0, i.jsx)(d.Heading, {
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
                      (0, i.jsx)(d.Button, {
                          'aria-label': S.intl.string(S.t.cpT0Cg),
                          look: d.Button.Looks.BLANK,
                          size: d.Button.Sizes.NONE,
                          className: R.upsellClose,
                          onClick: () => {
                              c.K.set(A, !0), u(!0);
                          },
                          children: (0, i.jsx)(d.XSmallIcon, {
                              size: 'md',
                              color: 'currentColor'
                          })
                      }),
                      (0, i.jsxs)('div', {
                          className: R.upsellFooter,
                          children: [
                              I &&
                                  (0, i.jsx)(d.Button, {
                                      size: d.Button.Sizes.SMALL,
                                      onClick: N,
                                      className: R.upsellButton,
                                      children: S.intl.string(S.t.iF1Asr)
                                  }),
                              n
                                  ? null
                                  : (0, i.jsx)(d.Button, {
                                        size: d.Button.Sizes.SMALL,
                                        onClick: () => {
                                            _.Z.setSection(E.pNK.ONBOARDING);
                                        },
                                        className: R.upsellButton,
                                        children: S.intl.string(S.t['S/DfiY'])
                                    }),
                              t
                                  ? null
                                  : (0, i.jsx)(d.Button, {
                                        size: d.Button.Sizes.SMALL,
                                        onClick: () => {
                                            _.Z.setSection(E.pNK.DISCOVERY);
                                        },
                                        className: R.upsellButton,
                                        color: d.Button.Colors.PRIMARY,
                                        children: S.intl.string(S.t['0kmJd3'])
                                    }),
                              (0, i.jsx)(d.Button, {
                                  size: d.Button.Sizes.SMALL,
                                  onClick: () => {
                                      _.Z.setSection(E.pNK.ANALYTICS);
                                  },
                                  className: R.upsellButton,
                                  color: d.Button.Colors.PRIMARY,
                                  children: S.intl.string(S.t.BQIYTU)
                              })
                          ]
                      })
                  ]
              });
    },
    D = () => {
        let e = (0, a.e7)([T.Z], () => T.Z.getGuild()),
            { canManageGuild: t, isGuildAdmin: n } = (0, a.cj)([v.Z], () => ({
                canManageGuild: v.Z.can(E.Plq.MANAGE_GUILD, e),
                isGuildAdmin: v.Z.can(E.Plq.ADMINISTRATOR, e)
            })),
            l = (0, a.e7)([p.ZP], () => (null != e ? p.ZP.getChannels(e.id) : null)),
            o = r.useMemo(b.jb, []),
            u = !0 !== c.K.get(A);
        if (null == e) return null;
        let m = [];
        null != l &&
            l[p.sH].forEach((e) => {
                let { channel: t } = e;
                t.type === E.d4z.GUILD_TEXT &&
                    m.push({
                        value: t.id,
                        label: (0, h.F6)(t, N.default, I.Z, !0)
                    });
            });
        let x = () => {
                _.Z.init(e.id), _.Z.open(e.id, E.pNK.MEMBER_VERIFICATION);
            },
            f = () => {
                if (null == e) return;
                let t = new Set(e.features);
                t.delete(E.oNc.COMMUNITY),
                    t.delete(E.oNc.DISCOVERABLE),
                    !(0, g.K2)(e.id, 'disableCommunity') && !e.hasFeature(E.oNc.CLAN) && t.delete(E.oNc.MEMBER_VERIFICATION_GATE_ENABLED),
                    t.delete(E.oNc.PREVIEW_ENABLED),
                    _.Z.updateGuild({
                        features: t,
                        rulesChannelId: null,
                        publicUpdatesChannelId: null
                    });
            },
            C = (e) => {
                _.Z.updateGuild({ rulesChannelId: e });
            },
            j = (e) => {
                _.Z.updateGuild({ safetyAlertsChannelId: e });
            },
            y = (e) => {
                _.Z.updateGuild({ publicUpdatesChannelId: e });
            },
            Z = (e) => {
                _.Z.updateGuild({ preferredLocale: e });
            },
            D = (e) => {
                _.Z.updateGuild({ description: e });
            },
            O = () => {
                let t = (0, g.K2)(e.id, 'GuildSettingsCommunity');
                e.features.has(E.oNc.DISCOVERABLE) && e.features.has(E.oNc.PARTNERED)
                    ? (0, d.openModal)((e) =>
                          (0, i.jsx)(d.ConfirmModal, {
                              ...e,
                              header: S.intl.string(S.t.iBnVHR),
                              confirmText: S.intl.string(S.t['cY+Ooa']),
                              cancelText: S.intl.string(S.t.oEAioK),
                              onConfirm: f,
                              children: (0, i.jsx)(d.Text, {
                                  variant: 'text-sm/normal',
                                  children: S.intl.string(S.t['P+Sh8f'])
                              })
                          })
                      )
                    : e.features.has(E.oNc.DISCOVERABLE)
                      ? (0, d.openModal)((e) =>
                            (0, i.jsx)(d.ConfirmModal, {
                                ...e,
                                header: S.intl.string(S.t.iBnVHR),
                                confirmText: S.intl.string(S.t['cY+Ooa']),
                                cancelText: S.intl.string(S.t.oEAioK),
                                onConfirm: f,
                                children: (0, i.jsx)(d.Text, {
                                    variant: 'text-sm/normal',
                                    children: S.intl.string(S.t['eMx/ub'])
                                })
                            })
                        )
                      : e.features.has(E.oNc.PARTNERED)
                        ? (0, d.openModal)((e) =>
                              (0, i.jsx)(d.ConfirmModal, {
                                  ...e,
                                  header: S.intl.string(S.t.iBnVHR),
                                  confirmText: S.intl.string(S.t['cY+Ooa']),
                                  cancelText: S.intl.string(S.t.oEAioK),
                                  onConfirm: f,
                                  children: (0, i.jsx)(d.Text, {
                                      variant: 'text-sm/normal',
                                      children: S.intl.string(S.t.l1wLeX)
                                  })
                              })
                          )
                        : !e.features.has(E.oNc.MEMBER_VERIFICATION_GATE_ENABLED) || t || e.features.has(E.oNc.CLAN)
                          ? f()
                          : (0, d.openModal)((e) =>
                                (0, i.jsx)(d.ConfirmModal, {
                                    ...e,
                                    header: S.intl.string(S.t.iBnVHR),
                                    confirmButtonColor: d.Button.Colors.BRAND,
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
        return (0, i.jsxs)(d.FormSection, {
            title: S.intl.string(S.t.nRtNqq),
            tag: d.FormTitleTags.H1,
            children: [
                u
                    ? (0, i.jsx)(L, {
                          discoveryEnabled: e.features.has(E.oNc.DISCOVERABLE),
                          onboardingEnabled: e.features.has(E.oNc.GUILD_ONBOARDING),
                          guild: e
                      })
                    : null,
                (0, i.jsxs)(d.FormSection, {
                    className: s()(R.twoColumnFormSection, R.firstSection),
                    children: [
                        (0, i.jsxs)('div', {
                            className: R.descriptionColumn,
                            children: [
                                (0, i.jsx)(d.FormTitle, {
                                    className: R.formTitle,
                                    children: S.intl.string(S.t.otcXPz)
                                }),
                                (0, i.jsx)(d.FormText, {
                                    type: d.FormTextTypes.DESCRIPTION,
                                    className: R.__invalid_formDescription,
                                    children: S.intl.string(S.t.BtwmYG)
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: R.selectColumn,
                            children: (0, i.jsx)(d.SearchableSelect, {
                                value: e.rulesChannelId,
                                options: m,
                                onChange: C,
                                isDisabled: !t
                            })
                        })
                    ]
                }),
                (0, i.jsx)(d.FormDivider, { className: R.divider }),
                (0, i.jsxs)(d.FormSection, {
                    className: s()(R.twoColumnFormSection, R.firstSection),
                    children: [
                        (0, i.jsxs)('div', {
                            className: R.descriptionColumn,
                            children: [
                                (0, i.jsx)(d.FormTitle, {
                                    className: R.formTitle,
                                    children: S.intl.string(S.t.vAyDGR)
                                }),
                                (0, i.jsx)(d.FormText, {
                                    type: d.FormTextTypes.DESCRIPTION,
                                    className: R.__invalid_formDescription,
                                    children: S.intl.string(S.t.ZFeonp)
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: R.selectColumn,
                            children: (0, i.jsx)(d.SearchableSelect, {
                                value: e.publicUpdatesChannelId,
                                options: m,
                                onChange: y,
                                isDisabled: !n
                            })
                        })
                    ]
                }),
                (0, i.jsx)(d.FormDivider, { className: R.divider }),
                (0, i.jsxs)(d.FormSection, {
                    className: s()(R.twoColumnFormSection, R.firstSection),
                    children: [
                        (0, i.jsxs)('div', {
                            className: R.descriptionColumn,
                            children: [
                                (0, i.jsx)(d.FormTitle, {
                                    className: R.formTitle,
                                    children: S.intl.string(S.t.sMkYEx)
                                }),
                                (0, i.jsx)(d.FormText, {
                                    type: d.FormTextTypes.DESCRIPTION,
                                    className: R.__invalid_formDescription,
                                    children: S.intl.string(S.t.htioQk)
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: R.selectColumn,
                            children: (0, i.jsx)(d.SearchableSelect, {
                                value: e.safetyAlertsChannelId,
                                options: m,
                                onChange: j,
                                isDisabled: !t
                            })
                        })
                    ]
                }),
                (0, i.jsx)(d.FormDivider, { className: R.divider }),
                (0, i.jsxs)(d.FormSection, {
                    className: R.twoColumnFormSection,
                    children: [
                        (0, i.jsxs)('div', {
                            className: R.descriptionColumn,
                            children: [
                                (0, i.jsx)(d.FormTitle, {
                                    className: R.formTitle,
                                    children: S.intl.string(S.t.pO60f3)
                                }),
                                (0, i.jsx)(d.FormText, {
                                    type: d.FormTextTypes.DESCRIPTION,
                                    className: R.__invalid_formDescription,
                                    children: S.intl.string(S.t.aIR73d)
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: R.selectColumn,
                            children: (0, i.jsx)(d.SearchableSelect, {
                                value: e.preferredLocale,
                                options: o,
                                onChange: Z,
                                isDisabled: !t
                            })
                        })
                    ]
                }),
                (0, i.jsx)(d.FormDivider, { className: R.divider }),
                (() => {
                    var n;
                    if (null != e)
                        return (0, i.jsxs)(d.FormSection, {
                            children: [
                                (0, i.jsx)(d.FormTitle, {
                                    className: R.formTitle,
                                    children: S.intl.string(S.t['RSfm+v'])
                                }),
                                (0, i.jsx)(d.FormText, {
                                    className: R.description,
                                    type: d.FormTextTypes.DESCRIPTION,
                                    children: S.intl.string(S.t['/B6PR0'])
                                }),
                                (0, i.jsx)(d.TextArea, {
                                    value: null !== (n = e.description) && void 0 !== n ? n : '',
                                    placeholder: S.intl.string(S.t.Nvfows),
                                    onChange: D,
                                    maxLength: 120,
                                    disabled: !t
                                })
                            ]
                        });
                })(),
                (0, i.jsx)(d.FormDivider, { className: R.divider }),
                (0, i.jsxs)(d.FormSection, {
                    className: R.twoColumnFormSection,
                    children: [
                        (0, i.jsxs)('div', {
                            className: R.descriptionColumn,
                            children: [
                                (0, i.jsx)(d.FormTitle, {
                                    className: R.formTitle,
                                    children: S.intl.string(S.t.c1BmbG)
                                }),
                                (0, i.jsx)(d.FormText, {
                                    type: d.FormTextTypes.DESCRIPTION,
                                    className: R.__invalid_formDescription,
                                    children: S.intl.string(S.t.aQzVFx)
                                })
                            ]
                        }),
                        (0, i.jsx)(d.Tooltip, {
                            text: n ? null : S.intl.string(S.t['pjG+T0']),
                            'aria-label': n ? void 0 : S.intl.string(S.t['pjG+T0']),
                            children: (e) =>
                                (0, i.jsx)(d.Button, {
                                    size: d.Button.Sizes.SMALL,
                                    onClick: O,
                                    color: d.Button.Colors.RED,
                                    disabled: !n,
                                    ...e,
                                    children: S.intl.string(S.t.c1BmbG)
                                })
                        })
                    ]
                })
            ]
        });
    };
t.Z = () => {
    let e = (0, a.e7)([T.Z], () => T.Z.getGuild());
    return null == e ? null : e.features.has(E.oNc.COMMUNITY) ? (0, i.jsx)(D, {}) : (0, i.jsx)(j.Z, { guild: e });
};
