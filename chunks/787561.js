(n.d(t, {
    X: () => Z,
    Z: () => L
}),
    n(953529),
    n(388685),
    n(539854));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(442837),
    o = n(544891),
    c = n(433517),
    d = n(755721),
    u = n(481060),
    m = n(852860),
    g = n(493773),
    p = n(933557),
    f = n(769654),
    h = n(984933),
    x = n(650774),
    b = n(430824),
    j = n(496675),
    _ = n(699516),
    v = n(594174),
    O = n(434404),
    C = n(999382),
    y = n(54842),
    N = n(929834),
    I = n(981631),
    E = n(388032),
    S = n(90386),
    T = n(922905);
function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
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
            } = (0, a.cj)([C.Z], () => ({
                submitting: C.Z.isSubmitting(),
                guild: C.Z.getGuild(),
                errors: C.Z.getErrors()
            })),
            l = Object.keys(i),
            s = l.length > 0 ? l[0] : null;
        return (
            (e = 'rules_channel_id' === s ? E.intl.string(E.t['7IrBYm']) : null != s ? i[s] : void 0),
            (0, r.jsx)(m.Z, {
                submitting: n,
                onReset: () => {
                    null != t && O.Z.init(t.id);
                },
                onSave: () => {
                    null != t &&
                        O.Z.saveGuild(t.id, {
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
        let { discoveryEnabled: t, onboardingEnabled: n, guild: l } = e,
            [s, m] = i.useState(!0 === c.K.get(R)),
            p = (0, a.e7)([x.Z], () => {
                var e;
                return null != (e = x.Z.getMemberCount(l.id)) ? e : 0;
            }),
            [h, j] = i.useState(!1);
        (0, g.ZP)(() => {
            o.tn
                .get({
                    url: I.ANM.GUILD_ADMIN_SERVER_ELIGIBILITY(l.id),
                    rejectWithError: !0
                })
                .then((e) => {
                    j(e.body.eligible_for_admin_server);
                })
                .catch(() => j(!1));
        });
        let _ = (0, a.e7)([b.Z], () => b.Z.getGuild('942897714956472401')),
            v = l.features.has(I.oNc.COMMUNITY) && p >= 1000 && h && null == _;
        if (t && n && !v) return null;
        let C = async () => {
            try {
                let e = await o.tn.post({
                    url: I.ANM.JOIN_ADMIN_SERVER(l.id),
                    oldFormErrors: !0,
                    rejectWithError: !0
                });
                (O.Z.close(), (0, f.X)(e.body.id));
            } catch (e) {}
        };
        return s && !v
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
                                      (0, r.jsx)(u.X6q, {
                                          variant: 'heading-md/semibold',
                                          className: S.upsellHeader,
                                          children: E.intl.string(E.t['pR/BgY'])
                                      }),
                                      (0, r.jsx)(u.Text, {
                                          variant: 'text-sm/normal',
                                          children: E.intl.string(E.t['V+Yo1t'])
                                      })
                                  ]
                              })
                          ]
                      }),
                      (0, r.jsx)(d.zx, {
                          'aria-label': E.intl.string(E.t.cpT0Cg),
                          look: d.zx.Looks.BLANK,
                          size: d.zx.Sizes.NONE,
                          className: S.upsellClose,
                          onClick: () => {
                              (c.K.set(R, !0), m(!0));
                          },
                          children: (0, r.jsx)(u.Dio, {
                              size: 'md',
                              color: 'currentColor'
                          })
                      }),
                      (0, r.jsxs)('div', {
                          className: S.upsellFooter,
                          children: [
                              v &&
                                  (0, r.jsx)('div', {
                                      'data-button-hoisted-classname-wrapper': !0,
                                      className: S.upsellButton,
                                      children: (0, r.jsx)(u.zxk, {
                                          variant: 'primary',
                                          size: 'sm',
                                          text: E.intl.string(E.t.iF1Asr),
                                          onClick: C
                                      })
                                  }),
                              n
                                  ? null
                                  : (0, r.jsx)('div', {
                                        'data-button-hoisted-classname-wrapper': !0,
                                        className: S.upsellButton,
                                        children: (0, r.jsx)(u.zxk, {
                                            variant: 'primary',
                                            size: 'sm',
                                            text: E.intl.string(E.t['S/DfiY']),
                                            onClick: () => {
                                                O.Z.setSection(I.pNK.ONBOARDING);
                                            }
                                        })
                                    }),
                              t
                                  ? null
                                  : (0, r.jsx)('div', {
                                        'data-button-hoisted-classname-wrapper': !0,
                                        className: S.upsellButton,
                                        children: (0, r.jsx)(u.zxk, {
                                            variant: 'secondary',
                                            size: 'sm',
                                            text: E.intl.string(E.t['0kmJd3']),
                                            onClick: () => {
                                                O.Z.setSection(I.pNK.ACCESS, I.KsC.ACCESS_DISCOVERABLE);
                                            }
                                        })
                                    }),
                              (0, r.jsx)('div', {
                                  'data-button-hoisted-classname-wrapper': !0,
                                  className: S.upsellButton,
                                  children: (0, r.jsx)(u.zxk, {
                                      variant: 'secondary',
                                      size: 'sm',
                                      text: E.intl.string(E.t.BQIYTU),
                                      onClick: () => {
                                          O.Z.setSection(I.pNK.ANALYTICS);
                                      }
                                  })
                              })
                          ]
                      })
                  ]
              });
    },
    A = () => {
        let e = (0, a.e7)([C.Z], () => C.Z.getGuild()),
            { canManageGuild: t, isGuildAdmin: n } = (0, a.cj)([j.Z], () => ({
                canManageGuild: j.Z.can(I.Plq.MANAGE_GUILD, e),
                isGuildAdmin: j.Z.can(I.Plq.ADMINISTRATOR, e)
            })),
            l = (0, a.e7)([h.ZP], () => (null != e ? h.ZP.getChannels(e.id) : null)),
            o = i.useMemo(N.jb, []),
            d = !0 !== c.K.get(R);
        if (null == e) return null;
        let m = [];
        null != l &&
            l[h.sH].forEach((e) => {
                let { channel: t } = e;
                t.type === I.d4z.GUILD_TEXT &&
                    m.push({
                        value: t.id,
                        label: (0, p.F6)(t, v.default, _.Z, !0)
                    });
            });
        let g = () => {
                if (null == e) return;
                let t = new Set(e.features);
                (t.delete(I.oNc.COMMUNITY),
                    t.delete(I.oNc.DISCOVERABLE),
                    t.delete(I.oNc.PREVIEW_ENABLED),
                    O.Z.updateGuild({
                        features: t,
                        rulesChannelId: null,
                        publicUpdatesChannelId: null
                    }));
            },
            f = (e) => {
                O.Z.updateGuild({ description: e });
            },
            x = () => {
                e.features.has(I.oNc.DISCOVERABLE) && e.features.has(I.oNc.PARTNERED)
                    ? (0, u.h7j)((e) =>
                          (0, r.jsx)(
                              u.ConfirmModal,
                              w(P({}, e), {
                                  header: E.intl.string(E.t.iBnVHR),
                                  confirmText: E.intl.string(E.t['cY+Ooa']),
                                  cancelText: E.intl.string(E.t.oEAioK),
                                  onConfirm: g,
                                  children: (0, r.jsx)(u.Text, {
                                      variant: 'text-sm/normal',
                                      children: E.intl.string(E.t['P+Sh8f'])
                                  })
                              })
                          )
                      )
                    : e.features.has(I.oNc.DISCOVERABLE)
                      ? (0, u.h7j)((e) =>
                            (0, r.jsx)(
                                u.ConfirmModal,
                                w(P({}, e), {
                                    header: E.intl.string(E.t.iBnVHR),
                                    confirmText: E.intl.string(E.t['cY+Ooa']),
                                    cancelText: E.intl.string(E.t.oEAioK),
                                    onConfirm: g,
                                    children: (0, r.jsx)(u.Text, {
                                        variant: 'text-sm/normal',
                                        children: E.intl.string(E.t['eMx/ub'])
                                    })
                                })
                            )
                        )
                      : e.features.has(I.oNc.PARTNERED)
                        ? (0, u.h7j)((e) =>
                              (0, r.jsx)(
                                  u.ConfirmModal,
                                  w(P({}, e), {
                                      header: E.intl.string(E.t.iBnVHR),
                                      confirmText: E.intl.string(E.t['cY+Ooa']),
                                      cancelText: E.intl.string(E.t.oEAioK),
                                      onConfirm: g,
                                      children: (0, r.jsx)(u.Text, {
                                          variant: 'text-sm/normal',
                                          children: E.intl.string(E.t.l1wLeX)
                                      })
                                  })
                              )
                          )
                        : g();
            };
        return (0, r.jsxs)(u.hjN, {
            title: E.intl.string(E.t.nRtNqq),
            tag: u.RB0.H1,
            children: [
                d
                    ? (0, r.jsx)(D, {
                          discoveryEnabled: e.features.has(I.oNc.DISCOVERABLE),
                          onboardingEnabled: e.features.has(I.oNc.GUILD_ONBOARDING),
                          guild: e
                      })
                    : null,
                (0, r.jsxs)(u.hjN, {
                    className: s()(S.twoColumnFormSection, S.firstSection),
                    children: [
                        (0, r.jsxs)('div', {
                            className: S.descriptionColumn,
                            children: [
                                (0, r.jsx)(u.vwX, {
                                    className: S.formTitle,
                                    children: E.intl.string(E.t.otcXPz)
                                }),
                                (0, r.jsx)(u.R94, {
                                    type: u.geA.DESCRIPTION,
                                    className: S.__invalid_formDescription,
                                    children: E.intl.string(E.t.BtwmYG)
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: S.selectColumn,
                            children: (0, r.jsx)(u.VcW, {
                                value: e.rulesChannelId,
                                options: m,
                                onChange: (e) => {
                                    O.Z.updateGuild({ rulesChannelId: e });
                                },
                                isDisabled: !t
                            })
                        })
                    ]
                }),
                (0, r.jsx)(u.$i$, { className: S.divider }),
                (0, r.jsxs)(u.hjN, {
                    className: s()(S.twoColumnFormSection, S.firstSection),
                    children: [
                        (0, r.jsxs)('div', {
                            className: S.descriptionColumn,
                            children: [
                                (0, r.jsx)(u.vwX, {
                                    className: S.formTitle,
                                    children: E.intl.string(E.t.vAyDGR)
                                }),
                                (0, r.jsx)(u.R94, {
                                    type: u.geA.DESCRIPTION,
                                    className: S.__invalid_formDescription,
                                    children: E.intl.string(E.t.ZFeonp)
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: S.selectColumn,
                            children: (0, r.jsx)(u.VcW, {
                                value: e.publicUpdatesChannelId,
                                options: m,
                                onChange: (e) => {
                                    O.Z.updateGuild({ publicUpdatesChannelId: e });
                                },
                                isDisabled: !n
                            })
                        })
                    ]
                }),
                (0, r.jsx)(u.$i$, { className: S.divider }),
                (0, r.jsxs)(u.hjN, {
                    className: s()(S.twoColumnFormSection, S.firstSection),
                    children: [
                        (0, r.jsxs)('div', {
                            className: S.descriptionColumn,
                            children: [
                                (0, r.jsx)(u.vwX, {
                                    className: S.formTitle,
                                    children: E.intl.string(E.t.sMkYEx)
                                }),
                                (0, r.jsx)(u.R94, {
                                    type: u.geA.DESCRIPTION,
                                    className: S.__invalid_formDescription,
                                    children: E.intl.string(E.t.htioQk)
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: S.selectColumn,
                            children: (0, r.jsx)(u.VcW, {
                                value: e.safetyAlertsChannelId,
                                options: m,
                                onChange: (e) => {
                                    O.Z.updateGuild({ safetyAlertsChannelId: e });
                                },
                                isDisabled: !t
                            })
                        })
                    ]
                }),
                (0, r.jsx)(u.$i$, { className: S.divider }),
                (0, r.jsxs)(u.hjN, {
                    className: S.twoColumnFormSection,
                    children: [
                        (0, r.jsxs)('div', {
                            className: S.descriptionColumn,
                            children: [
                                (0, r.jsx)(u.vwX, {
                                    className: S.formTitle,
                                    children: E.intl.string(E.t.pO60f3)
                                }),
                                (0, r.jsx)(u.R94, {
                                    type: u.geA.DESCRIPTION,
                                    className: S.__invalid_formDescription,
                                    children: E.intl.string(E.t.aIR73d)
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: S.selectColumn,
                            children: (0, r.jsx)(u.VcW, {
                                value: e.preferredLocale,
                                options: o,
                                onChange: (e) => {
                                    O.Z.updateGuild({ preferredLocale: e });
                                },
                                isDisabled: !t
                            })
                        })
                    ]
                }),
                (0, r.jsx)(u.$i$, { className: S.divider }),
                (() => {
                    var n;
                    if (null != e)
                        return (0, r.jsxs)(u.hjN, {
                            children: [
                                (0, r.jsx)(u.vwX, {
                                    className: S.formTitle,
                                    children: E.intl.string(E.t['RSfm+v'])
                                }),
                                (0, r.jsx)(u.R94, {
                                    className: S.description,
                                    type: u.geA.DESCRIPTION,
                                    children: E.intl.string(E.t['/B6PR0'])
                                }),
                                (0, r.jsx)(u.Kx8, {
                                    value: null != (n = e.description) ? n : '',
                                    placeholder: E.intl.string(E.t.Nvfows),
                                    onChange: f,
                                    maxLength: 120,
                                    disabled: !t
                                })
                            ]
                        });
                })(),
                (0, r.jsx)(u.$i$, { className: S.divider }),
                (0, r.jsxs)(u.hjN, {
                    className: S.twoColumnFormSection,
                    children: [
                        (0, r.jsxs)('div', {
                            className: S.descriptionColumn,
                            children: [
                                (0, r.jsx)(u.vwX, {
                                    className: S.formTitle,
                                    children: E.intl.string(E.t.c1BmbG)
                                }),
                                (0, r.jsx)(u.R94, {
                                    type: u.geA.DESCRIPTION,
                                    className: S.__invalid_formDescription,
                                    children: E.intl.string(E.t.aQzVFx)
                                })
                            ]
                        }),
                        (0, r.jsx)(u.ua7, {
                            text: n ? null : E.intl.string(E.t['pjG+T0']),
                            'aria-label': n ? void 0 : E.intl.string(E.t['pjG+T0']),
                            children: (e) =>
                                (0, r.jsx)(
                                    u.zxk,
                                    P(
                                        {
                                            variant: 'critical-primary',
                                            size: 'sm',
                                            text: E.intl.string(E.t.c1BmbG),
                                            onClick: x,
                                            disabled: !n
                                        },
                                        e
                                    )
                                )
                        })
                    ]
                })
            ]
        });
    },
    L = () => {
        let e = (0, a.e7)([C.Z], () => C.Z.getGuild());
        return null == e ? null : e.features.has(I.oNc.COMMUNITY) ? (0, r.jsx)(A, {}) : (0, r.jsx)(y.Z, { guild: e });
    };
