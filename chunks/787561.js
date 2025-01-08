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
    a = n.n(l),
    s = n(442837),
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
    _ = n(699516),
    I = n(594174),
    N = n(434404),
    T = n(999382),
    j = n(54842),
    b = n(929834),
    S = n(981631),
    E = n(388032),
    R = n(831609),
    y = n(922905);
let A = 'dismissedCommunityFeaturesUpsell',
    Z = () => {
        let e;
        let {
                guild: t,
                submitting: n,
                errors: r
            } = (0, s.cj)([T.Z], () => ({
                submitting: T.Z.isSubmitting(),
                guild: T.Z.getGuild(),
                errors: T.Z.getErrors()
            })),
            l = Object.keys(r),
            a = l.length > 0 ? l[0] : null;
        if ('rules_channel_id' === a) e = E.intl.string(E.t['7IrBYm']);
        else e = null != a ? r[a] : void 0;
        return (0, i.jsx)(u.Z, {
            submitting: n,
            onReset: () => {
                if (null != t) N.Z.init(t.id);
            },
            onSave: () => {
                if (null != t)
                    N.Z.saveGuild(t.id, {
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
            [a, u] = r.useState(!0 === c.K.get(A)),
            h = (0, s.e7)([f.Z], () => {
                var e;
                return null !== (e = f.Z.getMemberCount(l.id)) && void 0 !== e ? e : 0;
            }),
            [g, p] = r.useState(!1);
        (0, m.Z)(() => {
            o.tn
                .get({
                    url: S.ANM.GUILD_ADMIN_SERVER_ELIGIBILITY(l.id),
                    rejectWithError: !0
                })
                .then((e) => {
                    p(e.body.eligible_for_admin_server);
                })
                .catch(() => p(!1));
        });
        let v = (0, s.e7)([C.Z], () => C.Z.getGuild('942897714956472401')),
            _ = l.isCommunity() && h >= 1000 && g && !(null != v);
        if (t && n && !_) return null;
        let I = async () => {
            try {
                let e = await o.tn.post({
                    url: S.ANM.JOIN_ADMIN_SERVER(l.id),
                    oldFormErrors: !0,
                    rejectWithError: !0
                });
                N.Z.close(), (0, x.X)(e.body.id);
            } catch {}
        };
        return a && !_
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
                                          children: E.intl.string(E.t['pR/BgY'])
                                      }),
                                      (0, i.jsx)(d.Text, {
                                          variant: 'text-sm/normal',
                                          children: E.intl.string(E.t['V+Yo1t'])
                                      })
                                  ]
                              })
                          ]
                      }),
                      (0, i.jsx)(d.Button, {
                          'aria-label': E.intl.string(E.t.cpT0Cg),
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
                              _ &&
                                  (0, i.jsx)(d.Button, {
                                      size: d.Button.Sizes.SMALL,
                                      onClick: I,
                                      className: R.upsellButton,
                                      children: E.intl.string(E.t.iF1Asr)
                                  }),
                              n
                                  ? null
                                  : (0, i.jsx)(d.Button, {
                                        size: d.Button.Sizes.SMALL,
                                        onClick: () => {
                                            N.Z.setSection(S.pNK.ONBOARDING);
                                        },
                                        className: R.upsellButton,
                                        children: E.intl.string(E.t['S/DfiY'])
                                    }),
                              t
                                  ? null
                                  : (0, i.jsx)(d.Button, {
                                        size: d.Button.Sizes.SMALL,
                                        onClick: () => {
                                            N.Z.setSection(S.pNK.DISCOVERY);
                                        },
                                        className: R.upsellButton,
                                        color: d.Button.Colors.PRIMARY,
                                        children: E.intl.string(E.t['0kmJd3'])
                                    }),
                              (0, i.jsx)(d.Button, {
                                  size: d.Button.Sizes.SMALL,
                                  onClick: () => {
                                      N.Z.setSection(S.pNK.ANALYTICS);
                                  },
                                  className: R.upsellButton,
                                  color: d.Button.Colors.PRIMARY,
                                  children: E.intl.string(E.t.BQIYTU)
                              })
                          ]
                      })
                  ]
              });
    },
    D = () => {
        let e = (0, s.e7)([T.Z], () => T.Z.getGuild()),
            { canManageGuild: t, isGuildAdmin: n } = (0, s.cj)([v.Z], () => ({
                canManageGuild: v.Z.can(S.Plq.MANAGE_GUILD, e),
                isGuildAdmin: v.Z.can(S.Plq.ADMINISTRATOR, e)
            })),
            l = (0, s.e7)([p.ZP], () => (null != e ? p.ZP.getChannels(e.id) : null)),
            o = r.useMemo(b.jb, []),
            u = !0 !== c.K.get(A);
        if (null == e) return null;
        let m = [];
        null != l &&
            l[p.sH].forEach((e) => {
                let { channel: t } = e;
                t.type === S.d4z.GUILD_TEXT &&
                    m.push({
                        value: t.id,
                        label: (0, h.F6)(t, I.default, _.Z, !0)
                    });
            });
        let x = () => {
                N.Z.init(e.id), N.Z.open(e.id, S.pNK.MEMBER_VERIFICATION);
            },
            f = () => {
                if (null == e) return;
                let t = new Set(e.features);
                t.delete(S.oNc.COMMUNITY),
                    t.delete(S.oNc.DISCOVERABLE),
                    !(0, g.K2)(e.id, 'disableCommunity') && !e.hasFeature(S.oNc.CLAN) && t.delete(S.oNc.MEMBER_VERIFICATION_GATE_ENABLED),
                    t.delete(S.oNc.PREVIEW_ENABLED),
                    N.Z.updateGuild({
                        features: t,
                        rulesChannelId: null,
                        publicUpdatesChannelId: null
                    });
            },
            C = (e) => {
                N.Z.updateGuild({ rulesChannelId: e });
            },
            j = (e) => {
                N.Z.updateGuild({ safetyAlertsChannelId: e });
            },
            y = (e) => {
                N.Z.updateGuild({ publicUpdatesChannelId: e });
            },
            Z = (e) => {
                N.Z.updateGuild({ preferredLocale: e });
            },
            D = (e) => {
                N.Z.updateGuild({ description: e });
            },
            O = () => {
                let t = (0, g.K2)(e.id, 'GuildSettingsCommunity');
                e.features.has(S.oNc.DISCOVERABLE) && e.features.has(S.oNc.PARTNERED)
                    ? (0, d.openModal)((e) =>
                          (0, i.jsx)(d.ConfirmModal, {
                              ...e,
                              header: E.intl.string(E.t.iBnVHR),
                              confirmText: E.intl.string(E.t['cY+Ooa']),
                              cancelText: E.intl.string(E.t.oEAioK),
                              onConfirm: f,
                              children: (0, i.jsx)(d.Text, {
                                  variant: 'text-sm/normal',
                                  children: E.intl.string(E.t['P+Sh8f'])
                              })
                          })
                      )
                    : e.features.has(S.oNc.DISCOVERABLE)
                      ? (0, d.openModal)((e) =>
                            (0, i.jsx)(d.ConfirmModal, {
                                ...e,
                                header: E.intl.string(E.t.iBnVHR),
                                confirmText: E.intl.string(E.t['cY+Ooa']),
                                cancelText: E.intl.string(E.t.oEAioK),
                                onConfirm: f,
                                children: (0, i.jsx)(d.Text, {
                                    variant: 'text-sm/normal',
                                    children: E.intl.string(E.t['eMx/ub'])
                                })
                            })
                        )
                      : e.features.has(S.oNc.PARTNERED)
                        ? (0, d.openModal)((e) =>
                              (0, i.jsx)(d.ConfirmModal, {
                                  ...e,
                                  header: E.intl.string(E.t.iBnVHR),
                                  confirmText: E.intl.string(E.t['cY+Ooa']),
                                  cancelText: E.intl.string(E.t.oEAioK),
                                  onConfirm: f,
                                  children: (0, i.jsx)(d.Text, {
                                      variant: 'text-sm/normal',
                                      children: E.intl.string(E.t.l1wLeX)
                                  })
                              })
                          )
                        : !e.features.has(S.oNc.MEMBER_VERIFICATION_GATE_ENABLED) || t || e.features.has(S.oNc.CLAN)
                          ? f()
                          : (0, d.openModal)((e) =>
                                (0, i.jsx)(d.ConfirmModal, {
                                    ...e,
                                    header: E.intl.string(E.t.iBnVHR),
                                    confirmButtonColor: d.Button.Colors.BRAND,
                                    confirmText: E.intl.string(E.t.izNBMz),
                                    cancelText: E.intl.string(E.t.oEAioK),
                                    onConfirm: x,
                                    children: (0, i.jsx)(d.Text, {
                                        variant: 'text-sm/normal',
                                        children: E.intl.string(E.t.kQzUNj)
                                    })
                                })
                            );
            };
        return (0, i.jsxs)(d.FormSection, {
            title: E.intl.string(E.t.nRtNqq),
            tag: d.FormTitleTags.H1,
            children: [
                u
                    ? (0, i.jsx)(L, {
                          discoveryEnabled: e.features.has(S.oNc.DISCOVERABLE),
                          onboardingEnabled: e.features.has(S.oNc.GUILD_ONBOARDING),
                          guild: e
                      })
                    : null,
                (0, i.jsxs)(d.FormSection, {
                    className: a()(R.twoColumnFormSection, R.firstSection),
                    children: [
                        (0, i.jsxs)('div', {
                            className: R.descriptionColumn,
                            children: [
                                (0, i.jsx)(d.FormTitle, {
                                    className: R.formTitle,
                                    children: E.intl.string(E.t.otcXPz)
                                }),
                                (0, i.jsx)(d.FormText, {
                                    type: d.FormTextTypes.DESCRIPTION,
                                    className: R.__invalid_formDescription,
                                    children: E.intl.string(E.t.BtwmYG)
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
                    className: a()(R.twoColumnFormSection, R.firstSection),
                    children: [
                        (0, i.jsxs)('div', {
                            className: R.descriptionColumn,
                            children: [
                                (0, i.jsx)(d.FormTitle, {
                                    className: R.formTitle,
                                    children: E.intl.string(E.t.vAyDGR)
                                }),
                                (0, i.jsx)(d.FormText, {
                                    type: d.FormTextTypes.DESCRIPTION,
                                    className: R.__invalid_formDescription,
                                    children: E.intl.string(E.t.ZFeonp)
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
                    className: a()(R.twoColumnFormSection, R.firstSection),
                    children: [
                        (0, i.jsxs)('div', {
                            className: R.descriptionColumn,
                            children: [
                                (0, i.jsx)(d.FormTitle, {
                                    className: R.formTitle,
                                    children: E.intl.string(E.t.sMkYEx)
                                }),
                                (0, i.jsx)(d.FormText, {
                                    type: d.FormTextTypes.DESCRIPTION,
                                    className: R.__invalid_formDescription,
                                    children: E.intl.string(E.t.htioQk)
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
                                    children: E.intl.string(E.t.pO60f3)
                                }),
                                (0, i.jsx)(d.FormText, {
                                    type: d.FormTextTypes.DESCRIPTION,
                                    className: R.__invalid_formDescription,
                                    children: E.intl.string(E.t.aIR73d)
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
                                    children: E.intl.string(E.t['RSfm+v'])
                                }),
                                (0, i.jsx)(d.FormText, {
                                    className: R.description,
                                    type: d.FormTextTypes.DESCRIPTION,
                                    children: E.intl.string(E.t['/B6PR0'])
                                }),
                                (0, i.jsx)(d.TextArea, {
                                    value: null !== (n = e.description) && void 0 !== n ? n : '',
                                    placeholder: E.intl.string(E.t.Nvfows),
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
                                    children: E.intl.string(E.t.c1BmbG)
                                }),
                                (0, i.jsx)(d.FormText, {
                                    type: d.FormTextTypes.DESCRIPTION,
                                    className: R.__invalid_formDescription,
                                    children: E.intl.string(E.t.aQzVFx)
                                })
                            ]
                        }),
                        (0, i.jsx)(d.Tooltip, {
                            text: n ? null : E.intl.string(E.t['pjG+T0']),
                            'aria-label': n ? void 0 : E.intl.string(E.t['pjG+T0']),
                            children: (e) =>
                                (0, i.jsx)(d.Button, {
                                    size: d.Button.Sizes.SMALL,
                                    onClick: O,
                                    color: d.Button.Colors.RED,
                                    disabled: !n,
                                    ...e,
                                    children: E.intl.string(E.t.c1BmbG)
                                })
                        })
                    ]
                })
            ]
        });
    };
t.Z = () => {
    let e = (0, s.e7)([T.Z], () => T.Z.getGuild());
    return null == e ? null : e.features.has(S.oNc.COMMUNITY) ? (0, i.jsx)(D, {}) : (0, i.jsx)(j.Z, { guild: e });
};
