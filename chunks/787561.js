n.d(t, {
    X: function () {
        return y;
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
    m = n(933557),
    h = n(769654),
    g = n(984933),
    x = n(650774),
    p = n(430824),
    f = n(496675),
    C = n(699516),
    v = n(594174),
    _ = n(434404),
    I = n(999382),
    N = n(54842),
    T = n(929834),
    j = n(981631),
    b = n(388032),
    S = n(831609),
    E = n(922905);
let R = 'dismissedCommunityFeaturesUpsell',
    y = () => {
        let e;
        let {
                guild: t,
                submitting: n,
                errors: r
            } = (0, s.cj)([I.Z], () => ({
                submitting: I.Z.isSubmitting(),
                guild: I.Z.getGuild(),
                errors: I.Z.getErrors()
            })),
            l = Object.keys(r),
            a = l.length > 0 ? l[0] : null;
        if ('rules_channel_id' === a) e = b.intl.string(b.t['7IrBYm']);
        else e = null != a ? r[a] : void 0;
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
    A = (e) => {
        let { discoveryEnabled: t, onboardingEnabled: n, guild: l } = e,
            [a, u] = r.useState(!0 === c.K.get(R)),
            m = (0, s.e7)([x.Z], () => {
                var e;
                return null !== (e = x.Z.getMemberCount(l.id)) && void 0 !== e ? e : 0;
            }),
            [g, f] = r.useState(!1);
        r.useEffect(() => {
            o.tn
                .get({
                    url: j.ANM.GUILD_ADMIN_SERVER_ELIGIBILITY(l.id),
                    rejectWithError: !0
                })
                .then((e) => {
                    f(e.body.eligible_for_admin_server);
                })
                .catch(() => f(!1));
        }, []);
        let C = (0, s.e7)([p.Z], () => p.Z.getGuild('942897714956472401')),
            v = l.isCommunity() && m >= 1000 && g && !(null != C);
        if (t && n && !v) return null;
        let I = async () => {
            try {
                let e = await o.tn.post({
                    url: j.ANM.JOIN_ADMIN_SERVER(l.id),
                    oldFormErrors: !0,
                    rejectWithError: !0
                });
                _.Z.close(), (0, h.X)(e.body.id);
            } catch {}
        };
        return a && !v
            ? null
            : (0, i.jsxs)('div', {
                  className: S.upsellContainer,
                  children: [
                      (0, i.jsxs)('div', {
                          className: S.upsellContent,
                          children: [
                              (0, i.jsx)('img', {
                                  src: E,
                                  alt: '',
                                  width: 60,
                                  className: S.upsellImage
                              }),
                              (0, i.jsxs)('div', {
                                  children: [
                                      (0, i.jsx)(d.Heading, {
                                          variant: 'heading-md/semibold',
                                          className: S.upsellHeader,
                                          children: b.intl.string(b.t['pR/BgY'])
                                      }),
                                      (0, i.jsx)(d.Text, {
                                          variant: 'text-sm/normal',
                                          children: b.intl.string(b.t['V+Yo1t'])
                                      })
                                  ]
                              })
                          ]
                      }),
                      (0, i.jsx)(d.Button, {
                          'aria-label': b.intl.string(b.t.cpT0Cg),
                          look: d.Button.Looks.BLANK,
                          size: d.Button.Sizes.NONE,
                          className: S.upsellClose,
                          onClick: () => {
                              c.K.set(R, !0), u(!0);
                          },
                          children: (0, i.jsx)(d.XSmallIcon, {
                              size: 'md',
                              color: 'currentColor'
                          })
                      }),
                      (0, i.jsxs)('div', {
                          className: S.upsellFooter,
                          children: [
                              v &&
                                  (0, i.jsx)(d.Button, {
                                      size: d.Button.Sizes.SMALL,
                                      onClick: I,
                                      className: S.upsellButton,
                                      children: b.intl.string(b.t.iF1Asr)
                                  }),
                              n
                                  ? null
                                  : (0, i.jsx)(d.Button, {
                                        size: d.Button.Sizes.SMALL,
                                        onClick: () => {
                                            _.Z.setSection(j.pNK.ONBOARDING);
                                        },
                                        className: S.upsellButton,
                                        children: b.intl.string(b.t['S/DfiY'])
                                    }),
                              t
                                  ? null
                                  : (0, i.jsx)(d.Button, {
                                        size: d.Button.Sizes.SMALL,
                                        onClick: () => {
                                            _.Z.setSection(j.pNK.DISCOVERY);
                                        },
                                        className: S.upsellButton,
                                        color: d.Button.Colors.PRIMARY,
                                        children: b.intl.string(b.t['0kmJd3'])
                                    }),
                              (0, i.jsx)(d.Button, {
                                  size: d.Button.Sizes.SMALL,
                                  onClick: () => {
                                      _.Z.setSection(j.pNK.ANALYTICS);
                                  },
                                  className: S.upsellButton,
                                  color: d.Button.Colors.PRIMARY,
                                  children: b.intl.string(b.t.BQIYTU)
                              })
                          ]
                      })
                  ]
              });
    },
    Z = () => {
        let e = (0, s.e7)([I.Z], () => I.Z.getGuild()),
            { canManageGuild: t, isGuildAdmin: n } = (0, s.cj)([f.Z], () => ({
                canManageGuild: f.Z.can(j.Plq.MANAGE_GUILD, e),
                isGuildAdmin: f.Z.can(j.Plq.ADMINISTRATOR, e)
            })),
            l = (0, s.e7)([g.ZP], () => (null != e ? g.ZP.getChannels(e.id) : null)),
            o = r.useMemo(T.jb, []),
            u = !0 !== c.K.get(R);
        if (null == e) return null;
        let h = [];
        null != l &&
            l[g.sH].forEach((e) => {
                let { channel: t } = e;
                t.type === j.d4z.GUILD_TEXT &&
                    h.push({
                        value: t.id,
                        label: (0, m.F6)(t, v.default, C.Z, !0)
                    });
            });
        let x = () => {
                _.Z.init(e.id), _.Z.open(e.id, j.pNK.MEMBER_VERIFICATION);
            },
            p = () => {
                if (null == e) return;
                let t = new Set(e.features);
                t.delete(j.oNc.COMMUNITY),
                    t.delete(j.oNc.DISCOVERABLE),
                    !e.hasFeature(j.oNc.CLAN) && t.delete(j.oNc.MEMBER_VERIFICATION_GATE_ENABLED),
                    t.delete(j.oNc.PREVIEW_ENABLED),
                    _.Z.updateGuild({
                        features: t,
                        rulesChannelId: null,
                        publicUpdatesChannelId: null
                    });
            },
            N = (e) => {
                _.Z.updateGuild({ rulesChannelId: e });
            },
            E = (e) => {
                _.Z.updateGuild({ safetyAlertsChannelId: e });
            },
            y = (e) => {
                _.Z.updateGuild({ publicUpdatesChannelId: e });
            },
            Z = (e) => {
                _.Z.updateGuild({ preferredLocale: e });
            },
            L = (e) => {
                _.Z.updateGuild({ description: e });
            },
            D = () => {
                e.features.has(j.oNc.DISCOVERABLE) && e.features.has(j.oNc.PARTNERED)
                    ? (0, d.openModal)((e) =>
                          (0, i.jsx)(d.ConfirmModal, {
                              ...e,
                              header: b.intl.string(b.t.iBnVHR),
                              confirmText: b.intl.string(b.t['cY+Ooa']),
                              cancelText: b.intl.string(b.t.oEAioK),
                              onConfirm: p,
                              children: (0, i.jsx)(d.Text, {
                                  variant: 'text-sm/normal',
                                  children: b.intl.string(b.t['P+Sh8f'])
                              })
                          })
                      )
                    : e.features.has(j.oNc.DISCOVERABLE)
                      ? (0, d.openModal)((e) =>
                            (0, i.jsx)(d.ConfirmModal, {
                                ...e,
                                header: b.intl.string(b.t.iBnVHR),
                                confirmText: b.intl.string(b.t['cY+Ooa']),
                                cancelText: b.intl.string(b.t.oEAioK),
                                onConfirm: p,
                                children: (0, i.jsx)(d.Text, {
                                    variant: 'text-sm/normal',
                                    children: b.intl.string(b.t['eMx/ub'])
                                })
                            })
                        )
                      : e.features.has(j.oNc.PARTNERED)
                        ? (0, d.openModal)((e) =>
                              (0, i.jsx)(d.ConfirmModal, {
                                  ...e,
                                  header: b.intl.string(b.t.iBnVHR),
                                  confirmText: b.intl.string(b.t['cY+Ooa']),
                                  cancelText: b.intl.string(b.t.oEAioK),
                                  onConfirm: p,
                                  children: (0, i.jsx)(d.Text, {
                                      variant: 'text-sm/normal',
                                      children: b.intl.string(b.t.l1wLeX)
                                  })
                              })
                          )
                        : e.features.has(j.oNc.MEMBER_VERIFICATION_GATE_ENABLED) && !e.features.has(j.oNc.CLAN)
                          ? (0, d.openModal)((e) =>
                                (0, i.jsx)(d.ConfirmModal, {
                                    ...e,
                                    header: b.intl.string(b.t.iBnVHR),
                                    confirmButtonColor: d.Button.Colors.BRAND,
                                    confirmText: b.intl.string(b.t.izNBMz),
                                    cancelText: b.intl.string(b.t.oEAioK),
                                    onConfirm: x,
                                    children: (0, i.jsx)(d.Text, {
                                        variant: 'text-sm/normal',
                                        children: b.intl.string(b.t.kQzUNj)
                                    })
                                })
                            )
                          : p();
            };
        return (0, i.jsxs)(d.FormSection, {
            title: b.intl.string(b.t.nRtNqq),
            tag: d.FormTitleTags.H1,
            children: [
                u
                    ? (0, i.jsx)(A, {
                          discoveryEnabled: e.features.has(j.oNc.DISCOVERABLE),
                          onboardingEnabled: e.features.has(j.oNc.GUILD_ONBOARDING),
                          guild: e
                      })
                    : null,
                (0, i.jsxs)(d.FormSection, {
                    className: a()(S.twoColumnFormSection, S.firstSection),
                    children: [
                        (0, i.jsxs)('div', {
                            className: S.descriptionColumn,
                            children: [
                                (0, i.jsx)(d.FormTitle, {
                                    className: S.formTitle,
                                    children: b.intl.string(b.t.otcXPz)
                                }),
                                (0, i.jsx)(d.FormText, {
                                    type: d.FormTextTypes.DESCRIPTION,
                                    className: S.__invalid_formDescription,
                                    children: b.intl.string(b.t.BtwmYG)
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: S.selectColumn,
                            children: (0, i.jsx)(d.SearchableSelect, {
                                value: e.rulesChannelId,
                                options: h,
                                onChange: N,
                                isDisabled: !t
                            })
                        })
                    ]
                }),
                (0, i.jsx)(d.FormDivider, { className: S.divider }),
                (0, i.jsxs)(d.FormSection, {
                    className: a()(S.twoColumnFormSection, S.firstSection),
                    children: [
                        (0, i.jsxs)('div', {
                            className: S.descriptionColumn,
                            children: [
                                (0, i.jsx)(d.FormTitle, {
                                    className: S.formTitle,
                                    children: b.intl.string(b.t.vAyDGR)
                                }),
                                (0, i.jsx)(d.FormText, {
                                    type: d.FormTextTypes.DESCRIPTION,
                                    className: S.__invalid_formDescription,
                                    children: b.intl.string(b.t.ZFeonp)
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: S.selectColumn,
                            children: (0, i.jsx)(d.SearchableSelect, {
                                value: e.publicUpdatesChannelId,
                                options: h,
                                onChange: y,
                                isDisabled: !n
                            })
                        })
                    ]
                }),
                (0, i.jsx)(d.FormDivider, { className: S.divider }),
                (0, i.jsxs)(d.FormSection, {
                    className: a()(S.twoColumnFormSection, S.firstSection),
                    children: [
                        (0, i.jsxs)('div', {
                            className: S.descriptionColumn,
                            children: [
                                (0, i.jsx)(d.FormTitle, {
                                    className: S.formTitle,
                                    children: b.intl.string(b.t.sMkYEx)
                                }),
                                (0, i.jsx)(d.FormText, {
                                    type: d.FormTextTypes.DESCRIPTION,
                                    className: S.__invalid_formDescription,
                                    children: b.intl.string(b.t.htioQk)
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: S.selectColumn,
                            children: (0, i.jsx)(d.SearchableSelect, {
                                value: e.safetyAlertsChannelId,
                                options: h,
                                onChange: E,
                                isDisabled: !t
                            })
                        })
                    ]
                }),
                (0, i.jsx)(d.FormDivider, { className: S.divider }),
                (0, i.jsxs)(d.FormSection, {
                    className: S.twoColumnFormSection,
                    children: [
                        (0, i.jsxs)('div', {
                            className: S.descriptionColumn,
                            children: [
                                (0, i.jsx)(d.FormTitle, {
                                    className: S.formTitle,
                                    children: b.intl.string(b.t.pO60f3)
                                }),
                                (0, i.jsx)(d.FormText, {
                                    type: d.FormTextTypes.DESCRIPTION,
                                    className: S.__invalid_formDescription,
                                    children: b.intl.string(b.t.aIR73d)
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: S.selectColumn,
                            children: (0, i.jsx)(d.SearchableSelect, {
                                value: e.preferredLocale,
                                options: o,
                                onChange: Z,
                                isDisabled: !t
                            })
                        })
                    ]
                }),
                (0, i.jsx)(d.FormDivider, { className: S.divider }),
                (() => {
                    var n;
                    if (null != e)
                        return (0, i.jsxs)(d.FormSection, {
                            children: [
                                (0, i.jsx)(d.FormTitle, {
                                    className: S.formTitle,
                                    children: b.intl.string(b.t['RSfm+v'])
                                }),
                                (0, i.jsx)(d.FormText, {
                                    className: S.description,
                                    type: d.FormTextTypes.DESCRIPTION,
                                    children: b.intl.string(b.t['/B6PR0'])
                                }),
                                (0, i.jsx)(d.TextArea, {
                                    value: null !== (n = e.description) && void 0 !== n ? n : '',
                                    placeholder: b.intl.string(b.t.Nvfows),
                                    onChange: L,
                                    maxLength: 120,
                                    disabled: !t
                                })
                            ]
                        });
                })(),
                (0, i.jsx)(d.FormDivider, { className: S.divider }),
                (0, i.jsxs)(d.FormSection, {
                    className: S.twoColumnFormSection,
                    children: [
                        (0, i.jsxs)('div', {
                            className: S.descriptionColumn,
                            children: [
                                (0, i.jsx)(d.FormTitle, {
                                    className: S.formTitle,
                                    children: b.intl.string(b.t.c1BmbG)
                                }),
                                (0, i.jsx)(d.FormText, {
                                    type: d.FormTextTypes.DESCRIPTION,
                                    className: S.__invalid_formDescription,
                                    children: b.intl.string(b.t.aQzVFx)
                                })
                            ]
                        }),
                        (0, i.jsx)(d.Tooltip, {
                            text: n ? null : b.intl.string(b.t['pjG+T0']),
                            'aria-label': n ? void 0 : b.intl.string(b.t['pjG+T0']),
                            children: (e) =>
                                (0, i.jsx)(d.Button, {
                                    size: d.Button.Sizes.SMALL,
                                    onClick: D,
                                    color: d.Button.Colors.RED,
                                    disabled: !n,
                                    ...e,
                                    children: b.intl.string(b.t.c1BmbG)
                                })
                        })
                    ]
                })
            ]
        });
    };
t.Z = () => {
    let e = (0, s.e7)([I.Z], () => I.Z.getGuild());
    return null == e ? null : e.features.has(j.oNc.COMMUNITY) ? (0, i.jsx)(Z, {}) : (0, i.jsx)(N.Z, { guild: e });
};
