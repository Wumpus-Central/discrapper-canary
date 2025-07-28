(n.d(t, {
    X: () => Z,
    Z: () => k
}),
    n(953529),
    n(388685),
    n(539854));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(544891),
    c = n(433517),
    d = n(755721),
    u = n(481060),
    m = n(852860),
    g = n(493773),
    p = n(933557),
    h = n(769654),
    f = n(984933),
    x = n(650774),
    b = n(430824),
    j = n(496675),
    v = n(699516),
    _ = n(594174),
    O = n(434404),
    y = n(999382),
    C = n(54842),
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
            } = (0, s.cj)([y.Z], () => ({
                submitting: y.Z.isSubmitting(),
                guild: y.Z.getGuild(),
                errors: y.Z.getErrors()
            })),
            l = Object.keys(i),
            a = l.length > 0 ? l[0] : null;
        return (
            (e = 'rules_channel_id' === a ? E.intl.string(E.t['7IrBYm']) : null != a ? i[a] : void 0),
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
            [a, m] = i.useState(!0 === c.K.get(R)),
            p = (0, s.e7)([x.Z], () => {
                var e;
                return null != (e = x.Z.getMemberCount(l.id)) ? e : 0;
            }),
            [f, j] = i.useState(!1);
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
        let v = (0, s.e7)([b.Z], () => b.Z.getGuild('942897714956472401')),
            _ = l.features.has(I.oNc.COMMUNITY) && p >= 1000 && f && null == v;
        if (t && n && !_) return null;
        let y = async () => {
            try {
                let e = await o.tn.post({
                    url: I.ANM.JOIN_ADMIN_SERVER(l.id),
                    oldFormErrors: !0,
                    rejectWithError: !0
                });
                (O.Z.close(), (0, h.X)(e.body.id));
            } catch (e) {}
        };
        return a && !_
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
                              _ &&
                                  (0, r.jsx)('div', {
                                      'data-button-hoisted-classname-wrapper': !0,
                                      className: S.upsellButton,
                                      children: (0, r.jsx)(u.zxk, {
                                          variant: 'primary',
                                          size: 'sm',
                                          text: E.intl.string(E.t.iF1Asr),
                                          onClick: y
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
        let e = (0, s.e7)([y.Z], () => y.Z.getGuild()),
            { canManageGuild: t, isGuildAdmin: n } = (0, s.cj)([j.Z], () => ({
                canManageGuild: j.Z.can(I.Plq.MANAGE_GUILD, e),
                isGuildAdmin: j.Z.can(I.Plq.ADMINISTRATOR, e)
            })),
            l = (0, s.e7)([f.ZP], () => (null != e ? f.ZP.getChannels(e.id) : null)),
            o = i.useMemo(N.jb, []),
            d = !0 !== c.K.get(R);
        if (null == e) return null;
        let m = [];
        null != l &&
            l[f.sH].forEach((e) => {
                let { channel: t } = e;
                t.type === I.d4z.GUILD_TEXT &&
                    m.push({
                        value: t.id,
                        label: (0, p.F6)(t, _.default, v.Z, !0)
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
            h = (e) => {
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
                    className: a()(S.twoColumnFormSection, S.firstSection),
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
                    className: a()(S.twoColumnFormSection, S.firstSection),
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
                    className: a()(S.twoColumnFormSection, S.firstSection),
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
                                    onChange: h,
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
    k = () => {
        let e = (0, s.e7)([y.Z], () => y.Z.getGuild());
        return null == e ? null : e.features.has(I.oNc.COMMUNITY) ? (0, r.jsx)(A, {}) : (0, r.jsx)(C.Z, { guild: e });
    };
