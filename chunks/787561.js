n.d(t, {
    X: function () {
        return A;
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
    g = n(769654),
    x = n(984933),
    p = n(650774),
    f = n(430824),
    C = n(496675),
    v = n(699516),
    _ = n(594174),
    I = n(434404),
    N = n(999382),
    T = n(54842),
    j = n(929834),
    b = n(981631),
    S = n(388032),
    E = n(831609),
    R = n(922905);
let y = 'dismissedCommunityFeaturesUpsell',
    A = () => {
        let e;
        let {
                guild: t,
                submitting: n,
                errors: r
            } = (0, s.cj)([N.Z], () => ({
                submitting: N.Z.isSubmitting(),
                guild: N.Z.getGuild(),
                errors: N.Z.getErrors()
            })),
            l = Object.keys(r),
            a = l.length > 0 ? l[0] : null;
        if ('rules_channel_id' === a) e = S.intl.string(S.t['7IrBYm']);
        else e = null != a ? r[a] : void 0;
        return (0, i.jsx)(u.Z, {
            submitting: n,
            onReset: () => {
                if (null != t) I.Z.init(t.id);
            },
            onSave: () => {
                if (null != t)
                    I.Z.saveGuild(t.id, {
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
    Z = (e) => {
        let { discoveryEnabled: t, onboardingEnabled: n, guild: l } = e,
            [a, u] = r.useState(!0 === c.K.get(y)),
            h = (0, s.e7)([p.Z], () => {
                var e;
                return null !== (e = p.Z.getMemberCount(l.id)) && void 0 !== e ? e : 0;
            }),
            [x, C] = r.useState(!1);
        (0, m.Z)(() => {
            o.tn
                .get({
                    url: b.ANM.GUILD_ADMIN_SERVER_ELIGIBILITY(l.id),
                    rejectWithError: !0
                })
                .then((e) => {
                    C(e.body.eligible_for_admin_server);
                })
                .catch(() => C(!1));
        });
        let v = (0, s.e7)([f.Z], () => f.Z.getGuild('942897714956472401')),
            _ = l.isCommunity() && h >= 1000 && x && !(null != v);
        if (t && n && !_) return null;
        let N = async () => {
            try {
                let e = await o.tn.post({
                    url: b.ANM.JOIN_ADMIN_SERVER(l.id),
                    oldFormErrors: !0,
                    rejectWithError: !0
                });
                I.Z.close(), (0, g.X)(e.body.id);
            } catch {}
        };
        return a && !_
            ? null
            : (0, i.jsxs)('div', {
                  className: E.upsellContainer,
                  children: [
                      (0, i.jsxs)('div', {
                          className: E.upsellContent,
                          children: [
                              (0, i.jsx)('img', {
                                  src: R,
                                  alt: '',
                                  width: 60,
                                  className: E.upsellImage
                              }),
                              (0, i.jsxs)('div', {
                                  children: [
                                      (0, i.jsx)(d.Heading, {
                                          variant: 'heading-md/semibold',
                                          className: E.upsellHeader,
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
                          className: E.upsellClose,
                          onClick: () => {
                              c.K.set(y, !0), u(!0);
                          },
                          children: (0, i.jsx)(d.XSmallIcon, {
                              size: 'md',
                              color: 'currentColor'
                          })
                      }),
                      (0, i.jsxs)('div', {
                          className: E.upsellFooter,
                          children: [
                              _ &&
                                  (0, i.jsx)(d.Button, {
                                      size: d.Button.Sizes.SMALL,
                                      onClick: N,
                                      className: E.upsellButton,
                                      children: S.intl.string(S.t.iF1Asr)
                                  }),
                              n
                                  ? null
                                  : (0, i.jsx)(d.Button, {
                                        size: d.Button.Sizes.SMALL,
                                        onClick: () => {
                                            I.Z.setSection(b.pNK.ONBOARDING);
                                        },
                                        className: E.upsellButton,
                                        children: S.intl.string(S.t['S/DfiY'])
                                    }),
                              t
                                  ? null
                                  : (0, i.jsx)(d.Button, {
                                        size: d.Button.Sizes.SMALL,
                                        onClick: () => {
                                            I.Z.setSection(b.pNK.DISCOVERY);
                                        },
                                        className: E.upsellButton,
                                        color: d.Button.Colors.PRIMARY,
                                        children: S.intl.string(S.t['0kmJd3'])
                                    }),
                              (0, i.jsx)(d.Button, {
                                  size: d.Button.Sizes.SMALL,
                                  onClick: () => {
                                      I.Z.setSection(b.pNK.ANALYTICS);
                                  },
                                  className: E.upsellButton,
                                  color: d.Button.Colors.PRIMARY,
                                  children: S.intl.string(S.t.BQIYTU)
                              })
                          ]
                      })
                  ]
              });
    },
    L = () => {
        let e = (0, s.e7)([N.Z], () => N.Z.getGuild()),
            { canManageGuild: t, isGuildAdmin: n } = (0, s.cj)([C.Z], () => ({
                canManageGuild: C.Z.can(b.Plq.MANAGE_GUILD, e),
                isGuildAdmin: C.Z.can(b.Plq.ADMINISTRATOR, e)
            })),
            l = (0, s.e7)([x.ZP], () => (null != e ? x.ZP.getChannels(e.id) : null)),
            o = r.useMemo(j.jb, []),
            u = !0 !== c.K.get(y);
        if (null == e) return null;
        let m = [];
        null != l &&
            l[x.sH].forEach((e) => {
                let { channel: t } = e;
                t.type === b.d4z.GUILD_TEXT &&
                    m.push({
                        value: t.id,
                        label: (0, h.F6)(t, _.default, v.Z, !0)
                    });
            });
        let g = () => {
                I.Z.init(e.id), I.Z.open(e.id, b.pNK.MEMBER_VERIFICATION);
            },
            p = () => {
                if (null == e) return;
                let t = new Set(e.features);
                t.delete(b.oNc.COMMUNITY),
                    t.delete(b.oNc.DISCOVERABLE),
                    !e.hasFeature(b.oNc.CLAN) && t.delete(b.oNc.MEMBER_VERIFICATION_GATE_ENABLED),
                    t.delete(b.oNc.PREVIEW_ENABLED),
                    I.Z.updateGuild({
                        features: t,
                        rulesChannelId: null,
                        publicUpdatesChannelId: null
                    });
            },
            f = (e) => {
                I.Z.updateGuild({ rulesChannelId: e });
            },
            T = (e) => {
                I.Z.updateGuild({ safetyAlertsChannelId: e });
            },
            R = (e) => {
                I.Z.updateGuild({ publicUpdatesChannelId: e });
            },
            A = (e) => {
                I.Z.updateGuild({ preferredLocale: e });
            },
            L = (e) => {
                I.Z.updateGuild({ description: e });
            },
            D = () => {
                e.features.has(b.oNc.DISCOVERABLE) && e.features.has(b.oNc.PARTNERED)
                    ? (0, d.openModal)((e) =>
                          (0, i.jsx)(d.ConfirmModal, {
                              ...e,
                              header: S.intl.string(S.t.iBnVHR),
                              confirmText: S.intl.string(S.t['cY+Ooa']),
                              cancelText: S.intl.string(S.t.oEAioK),
                              onConfirm: p,
                              children: (0, i.jsx)(d.Text, {
                                  variant: 'text-sm/normal',
                                  children: S.intl.string(S.t['P+Sh8f'])
                              })
                          })
                      )
                    : e.features.has(b.oNc.DISCOVERABLE)
                      ? (0, d.openModal)((e) =>
                            (0, i.jsx)(d.ConfirmModal, {
                                ...e,
                                header: S.intl.string(S.t.iBnVHR),
                                confirmText: S.intl.string(S.t['cY+Ooa']),
                                cancelText: S.intl.string(S.t.oEAioK),
                                onConfirm: p,
                                children: (0, i.jsx)(d.Text, {
                                    variant: 'text-sm/normal',
                                    children: S.intl.string(S.t['eMx/ub'])
                                })
                            })
                        )
                      : e.features.has(b.oNc.PARTNERED)
                        ? (0, d.openModal)((e) =>
                              (0, i.jsx)(d.ConfirmModal, {
                                  ...e,
                                  header: S.intl.string(S.t.iBnVHR),
                                  confirmText: S.intl.string(S.t['cY+Ooa']),
                                  cancelText: S.intl.string(S.t.oEAioK),
                                  onConfirm: p,
                                  children: (0, i.jsx)(d.Text, {
                                      variant: 'text-sm/normal',
                                      children: S.intl.string(S.t.l1wLeX)
                                  })
                              })
                          )
                        : e.features.has(b.oNc.MEMBER_VERIFICATION_GATE_ENABLED) && !e.features.has(b.oNc.CLAN)
                          ? (0, d.openModal)((e) =>
                                (0, i.jsx)(d.ConfirmModal, {
                                    ...e,
                                    header: S.intl.string(S.t.iBnVHR),
                                    confirmButtonColor: d.Button.Colors.BRAND,
                                    confirmText: S.intl.string(S.t.izNBMz),
                                    cancelText: S.intl.string(S.t.oEAioK),
                                    onConfirm: g,
                                    children: (0, i.jsx)(d.Text, {
                                        variant: 'text-sm/normal',
                                        children: S.intl.string(S.t.kQzUNj)
                                    })
                                })
                            )
                          : p();
            };
        return (0, i.jsxs)(d.FormSection, {
            title: S.intl.string(S.t.nRtNqq),
            tag: d.FormTitleTags.H1,
            children: [
                u
                    ? (0, i.jsx)(Z, {
                          discoveryEnabled: e.features.has(b.oNc.DISCOVERABLE),
                          onboardingEnabled: e.features.has(b.oNc.GUILD_ONBOARDING),
                          guild: e
                      })
                    : null,
                (0, i.jsxs)(d.FormSection, {
                    className: a()(E.twoColumnFormSection, E.firstSection),
                    children: [
                        (0, i.jsxs)('div', {
                            className: E.descriptionColumn,
                            children: [
                                (0, i.jsx)(d.FormTitle, {
                                    className: E.formTitle,
                                    children: S.intl.string(S.t.otcXPz)
                                }),
                                (0, i.jsx)(d.FormText, {
                                    type: d.FormTextTypes.DESCRIPTION,
                                    className: E.__invalid_formDescription,
                                    children: S.intl.string(S.t.BtwmYG)
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: E.selectColumn,
                            children: (0, i.jsx)(d.SearchableSelect, {
                                value: e.rulesChannelId,
                                options: m,
                                onChange: f,
                                isDisabled: !t
                            })
                        })
                    ]
                }),
                (0, i.jsx)(d.FormDivider, { className: E.divider }),
                (0, i.jsxs)(d.FormSection, {
                    className: a()(E.twoColumnFormSection, E.firstSection),
                    children: [
                        (0, i.jsxs)('div', {
                            className: E.descriptionColumn,
                            children: [
                                (0, i.jsx)(d.FormTitle, {
                                    className: E.formTitle,
                                    children: S.intl.string(S.t.vAyDGR)
                                }),
                                (0, i.jsx)(d.FormText, {
                                    type: d.FormTextTypes.DESCRIPTION,
                                    className: E.__invalid_formDescription,
                                    children: S.intl.string(S.t.ZFeonp)
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: E.selectColumn,
                            children: (0, i.jsx)(d.SearchableSelect, {
                                value: e.publicUpdatesChannelId,
                                options: m,
                                onChange: R,
                                isDisabled: !n
                            })
                        })
                    ]
                }),
                (0, i.jsx)(d.FormDivider, { className: E.divider }),
                (0, i.jsxs)(d.FormSection, {
                    className: a()(E.twoColumnFormSection, E.firstSection),
                    children: [
                        (0, i.jsxs)('div', {
                            className: E.descriptionColumn,
                            children: [
                                (0, i.jsx)(d.FormTitle, {
                                    className: E.formTitle,
                                    children: S.intl.string(S.t.sMkYEx)
                                }),
                                (0, i.jsx)(d.FormText, {
                                    type: d.FormTextTypes.DESCRIPTION,
                                    className: E.__invalid_formDescription,
                                    children: S.intl.string(S.t.htioQk)
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: E.selectColumn,
                            children: (0, i.jsx)(d.SearchableSelect, {
                                value: e.safetyAlertsChannelId,
                                options: m,
                                onChange: T,
                                isDisabled: !t
                            })
                        })
                    ]
                }),
                (0, i.jsx)(d.FormDivider, { className: E.divider }),
                (0, i.jsxs)(d.FormSection, {
                    className: E.twoColumnFormSection,
                    children: [
                        (0, i.jsxs)('div', {
                            className: E.descriptionColumn,
                            children: [
                                (0, i.jsx)(d.FormTitle, {
                                    className: E.formTitle,
                                    children: S.intl.string(S.t.pO60f3)
                                }),
                                (0, i.jsx)(d.FormText, {
                                    type: d.FormTextTypes.DESCRIPTION,
                                    className: E.__invalid_formDescription,
                                    children: S.intl.string(S.t.aIR73d)
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: E.selectColumn,
                            children: (0, i.jsx)(d.SearchableSelect, {
                                value: e.preferredLocale,
                                options: o,
                                onChange: A,
                                isDisabled: !t
                            })
                        })
                    ]
                }),
                (0, i.jsx)(d.FormDivider, { className: E.divider }),
                (() => {
                    var n;
                    if (null != e)
                        return (0, i.jsxs)(d.FormSection, {
                            children: [
                                (0, i.jsx)(d.FormTitle, {
                                    className: E.formTitle,
                                    children: S.intl.string(S.t['RSfm+v'])
                                }),
                                (0, i.jsx)(d.FormText, {
                                    className: E.description,
                                    type: d.FormTextTypes.DESCRIPTION,
                                    children: S.intl.string(S.t['/B6PR0'])
                                }),
                                (0, i.jsx)(d.TextArea, {
                                    value: null !== (n = e.description) && void 0 !== n ? n : '',
                                    placeholder: S.intl.string(S.t.Nvfows),
                                    onChange: L,
                                    maxLength: 120,
                                    disabled: !t
                                })
                            ]
                        });
                })(),
                (0, i.jsx)(d.FormDivider, { className: E.divider }),
                (0, i.jsxs)(d.FormSection, {
                    className: E.twoColumnFormSection,
                    children: [
                        (0, i.jsxs)('div', {
                            className: E.descriptionColumn,
                            children: [
                                (0, i.jsx)(d.FormTitle, {
                                    className: E.formTitle,
                                    children: S.intl.string(S.t.c1BmbG)
                                }),
                                (0, i.jsx)(d.FormText, {
                                    type: d.FormTextTypes.DESCRIPTION,
                                    className: E.__invalid_formDescription,
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
                                    onClick: D,
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
    let e = (0, s.e7)([N.Z], () => N.Z.getGuild());
    return null == e ? null : e.features.has(b.oNc.COMMUNITY) ? (0, i.jsx)(L, {}) : (0, i.jsx)(T.Z, { guild: e });
};
