n.d(t, {
    J: () => eh,
    Z: () => em,
}),
    n(997841),
    n(388685),
    n(539854),
    n(953529),
    n(781311),
    n(642613);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(658722),
    l = n.n(s),
    c = n(512722),
    u = n.n(c),
    d = n(879690),
    f = n(243814),
    _ = n(793030),
    p = n(442837),
    h = n(921072),
    m = n(524437),
    g = n(481060),
    E = n(384275),
    b = n(493683),
    y = n(87051),
    O = n(497321),
    v = n(317381),
    I = n(513202),
    T = n(367907),
    S = n(162685),
    A = n(979200),
    C = n(870822),
    N = n(589414),
    R = n(600164),
    P = n(240991),
    w = n(713938),
    D = n(973616),
    L = n(881998),
    x = n(592125),
    j = n(944486),
    M = n(246946),
    k = n(9156),
    U = n(768581),
    G = n(630388),
    B = n(49012),
    Z = n(621600),
    F = n(709054),
    V = n(706454),
    H = n(210887),
    Y = n(313789),
    W = n(675478),
    K = n(581883),
    z = n(436267),
    q = n(494620),
    X = n(273313),
    Q = n(869743),
    J = n(947889),
    $ = n(981631),
    ee = n(468788),
    et = n(388032),
    en = n(392082),
    er = n(430864),
    ei = n(197571);
function ea(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function eo(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                ea(e, t, n[t]);
            });
    }
    return e;
}
function es(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function el(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : es(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let ec = p.ZP.connectStores([H.Z], () => ({ theme: H.Z.theme }))(g.ubH);
function eu(e) {
    let { className: t, text: n } = e;
    return (0, r.jsxs)("div", {
        className: o()(en.warningOuterContainer, t),
        children: [
            (0, r.jsx)(g.d3s, {
                size: "md",
                color: "currentColor",
                className: en.warningIcon,
            }),
            (0, r.jsx)(g.Text, {
                color: "text-default",
                variant: "text-sm/medium",
                children: n,
            }),
        ],
    });
}
let ed = (e) => {
        let { disclosure: t } = e;
        return i.useMemo(() => {
            switch (t) {
                case h.u$.IP_LOCATION:
                    return (0, r.jsx)(g.enf, {
                        size: "md",
                        color: "currentColor",
                        className: en.disclosureIcon,
                    });
                case h.u$.DISPLAYS_ADVERTISEMENTS:
                    return (0, r.jsx)(g.FLu, { className: en.disclosureIcon });
                default:
                    return (0, r.jsx)(g.d3s, { className: en.disclosureIcon });
            }
        }, [t]);
    },
    ef = (e, t) => {
        let n = et.intl.string(et.t.DT39Aw),
            i = et.intl.formatToPlainString(et.t.QWGvxM, { applicationName: e.name }),
            a = null;
        return (
            (0, C.Z)(e) &&
                ((n = et.intl.formatToPlainString(et.t["paC+UV"], { applicationName: e.name })),
                (i = et.intl.formatToPlainString(et.t.inM1Ym, { applicationName: e.name })),
                (a = (0, r.jsx)(q.Z, {
                    look: q.z.WARNING,
                    children: et.intl.string(et.t.LY35Z2),
                }))),
            (0, z.Z)(e.id) &&
                (a = (0, r.jsxs)(r.Fragment, {
                    children: [
                        a,
                        (0, r.jsx)(q.Z, { children: et.intl.format(et.t.KRnERk, { applicationName: e.name }) }),
                    ],
                })),
            (0, g.h7j)((e) =>
                (0, r.jsx)(
                    _.Modal,
                    el(
                        eo(
                            {
                                title: n,
                                subtitle: i,
                                actions: [
                                    {
                                        text: et.intl.string(et.t["ETE/oK"]),
                                        onClick: e.onClose,
                                        variant: "secondary",
                                    },
                                    {
                                        text: et.intl.string(et.t.xUqheH),
                                        onClick: () => {
                                            t(), e.onClose();
                                        },
                                        variant: "critical-primary",
                                    },
                                ],
                            },
                            e,
                        ),
                        {
                            children: (0, r.jsx)("div", {
                                className: en.deleteModalBody,
                                children: a,
                            }),
                        },
                    ),
                ),
            )
        );
    },
    e_ = (e) => {
        let { application: t, isVisible: n } = e,
            i = () => {
                null != t.terms_of_service_url &&
                    (0, B.q)({
                        href: t.terms_of_service_url,
                        shouldConfirm: !0,
                    });
            },
            a = () => {
                null != t.privacy_policy_url &&
                    (0, B.q)({
                        href: t.privacy_policy_url,
                        shouldConfirm: !0,
                    });
            };
        return null != t.terms_of_service_url || null != t.privacy_policy_url
            ? (0, r.jsxs)("div", {
                  className: en.tosPrivacy,
                  children: [
                      null != t.terms_of_service_url
                          ? (0, r.jsxs)(g.P3F, {
                                tag: "a",
                                onClick: i,
                                className: en.tos,
                                tabIndex: n ? 0 : -1,
                                children: [
                                    (0, r.jsx)(g.R94, {
                                        className: en.link,
                                        children: et.intl.string(et.t["lx+GeX"]),
                                    }),
                                    (0, r.jsx)(g.Gr1, {
                                        className: en.externalLinkIcon,
                                        color: "var(--text-link)",
                                    }),
                                ],
                            })
                          : null,
                      null != t.privacy_policy_url
                          ? (0, r.jsxs)("div", {
                                className: en.privacy,
                                children: [
                                    null != t.terms_of_service_url
                                        ? (0, r.jsx)("div", { className: en.divider })
                                        : null,
                                    (0, r.jsxs)(g.P3F, {
                                        tag: "a",
                                        onClick: a,
                                        className: en.privacy,
                                        tabIndex: n ? 0 : -1,
                                        children: [
                                            (0, r.jsx)(g.R94, {
                                                className: en.link,
                                                children: et.intl.string(et.t.okSwq6),
                                            }),
                                            (0, r.jsx)(g.Gr1, {
                                                className: en.externalLinkIcon,
                                                color: "var(--text-link)",
                                            }),
                                        ],
                                    }),
                                ],
                            })
                          : null,
                  ],
              })
            : null;
    },
    ep = (e) => {
        let {
                scopes: t,
                application: a,
                selectedChannelId: s,
                selectedGuildId: l,
                onDelete: c,
                disclosures: d,
                locale: _,
                id: h,
            } = e,
            E = a.id,
            O = i.useMemo(() => D.ZP.createFromServer(a), [a]),
            v = (0, G.yE)(O.flags, $.udG.EMBEDDED),
            I = (0, p.e7)([K.Z], () => {
                var e, t, n, r;
                return null == (r = K.Z.settings.applications) ||
                    null == (n = r.appSettings) ||
                    null == (t = n[E]) ||
                    null == (e = t.appDmSettings)
                    ? void 0
                    : e.allowMobilePush;
            }, [E]),
            C = S.w.useExperiment({ location: "oauth2_authorize" }),
            L = a.bot,
            j = (0, p.e7)([x.Z], () => x.Z.getDMFromUserId(null == L ? void 0 : L.id)),
            { appDMChannelMuteConfig: M, dmChannelMuted: B } = (0, p.cj)([k.ZP], () =>
                null == j
                    ? {
                          appDMChannelMuteConfig: null,
                          dmChannelMuted: !1,
                      }
                    : {
                          appDMChannelMuteConfig: k.ZP.getChannelMuteConfig(null, j),
                          dmChannelMuted: k.ZP.isChannelMuted(null, j),
                      },
            ),
            [V, H] = i.useState(!1),
            [q, X] = i.useState(!1),
            ea = () => {
                let e = [];
                for (let n of t)
                    e.push(...(0, w.CI)(n, t)), n === f.x.APPLICATIONS_COMMANDS && e.push(et.intl.string(et.t.Ls2XRk));
                if (e.length > 0 || (null != d && d.length > 0))
                    return (0, r.jsx)(g.zF9, {
                        className: en.appDetailsSection,
                        isExpanded: q,
                        collapsibleContent: (0, r.jsxs)("ul", {
                            className: en.appDetailsContent,
                            children: [
                                e.map((e, t) =>
                                    (0, r.jsxs)(
                                        "li",
                                        {
                                            className: en.permission,
                                            children: [
                                                (0, r.jsx)("i", { className: en.permissionCheckmark }),
                                                (0, r.jsx)(g.R94, { children: e }),
                                            ],
                                        },
                                        t,
                                    ),
                                ),
                                null == d
                                    ? void 0
                                    : d.map((t, n) => {
                                          let i = (0, A.PM)(t);
                                          return null != i
                                              ? (0, r.jsxs)(
                                                    "li",
                                                    {
                                                        className: en.permission,
                                                        children: [
                                                            (0, r.jsx)(ed, { disclosure: t }),
                                                            (0, r.jsx)(g.R94, { children: i }),
                                                        ],
                                                    },
                                                    n + e.length,
                                                )
                                              : null;
                                      }),
                            ],
                        }),
                        children: (t) => {
                            let { onClick: n } = t;
                            return (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsxs)(g.P3F, {
                                        className: en.appDetailsSectionHeader,
                                        onClick: (e) => {
                                            X(!q), n(e);
                                        },
                                        children: [
                                            (0, r.jsx)(g.X6q, {
                                                variant: "heading-sm/medium",
                                                color: "header-primary",
                                                children: et.intl.string(et.t.xrmhRU),
                                            }),
                                            q
                                                ? (0, r.jsx)(g.CJ0, {
                                                      size: "md",
                                                      color: g.TVs.colors.INTERACTIVE_NORMAL,
                                                  })
                                                : (0, r.jsx)(g.Fbu, {
                                                      size: "md",
                                                      color: g.TVs.colors.INTERACTIVE_NORMAL,
                                                  }),
                                        ],
                                    }),
                                    !q &&
                                        (0, r.jsx)(g.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-secondary",
                                            className: o()(en.appDetailsContent, en.permissionsDescription),
                                            children: et.intl.format(et.t.nZOS8v, { numPermissions: e.length }),
                                        }),
                                ],
                            });
                        },
                    });
            },
            es = i.useMemo(() => {
                if (null != a.description && "" !== a.description)
                    return (0, r.jsx)(g.Text, {
                        className: er.markup,
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: (0, P.parseBioReact)(a.description),
                    });
            }, [a.description]),
            el = () => {
                let e = null != a.description && "" !== a.description,
                    t = null != a.terms_of_service_url || null != a.privacy_policy_url;
                return e || t
                    ? (0, r.jsx)(g.zF9, {
                          className: en.appDetailsSection,
                          isExpanded: V,
                          collapsibleContent: (0, r.jsxs)("div", {
                              className: en.appDetailsContent,
                              children: [
                                  e && es,
                                  t &&
                                      (0, r.jsx)(e_, {
                                          application: a,
                                          isVisible: V,
                                      }),
                              ],
                          }),
                          children: (e) => {
                              let { onClick: t } = e;
                              return (0, r.jsxs)(g.P3F, {
                                  className: en.appDetailsSectionHeader,
                                  onClick: (e) => {
                                      H(!V), t(e);
                                  },
                                  children: [
                                      (0, r.jsx)(g.X6q, {
                                          variant: "heading-sm/medium",
                                          color: "header-primary",
                                          children: et.intl.string(et.t.fcYgiY),
                                      }),
                                      V
                                          ? (0, r.jsx)(g.CJ0, {
                                                size: "md",
                                                color: g.TVs.colors.INTERACTIVE_NORMAL,
                                            })
                                          : (0, r.jsx)(g.Fbu, {
                                                size: "md",
                                                color: g.TVs.colors.INTERACTIVE_NORMAL,
                                            }),
                                  ],
                              });
                          },
                      })
                    : null;
            },
            ec = () => {
                let e = U.ZP.getApplicationIconURL({
                        id: a.id,
                        icon: a.icon,
                    }),
                    t =
                        null != e
                            ? (0, r.jsx)(R.Z.Child, {
                                  className: en.appAvatarV2,
                                  grow: 0,
                                  children: (0, r.jsx)("img", {
                                      src: e,
                                      alt: "",
                                  }),
                              })
                            : null,
                    n = new Date(F.default.extractTimestamp(h)).toLocaleDateString(_);
                return (0, r.jsxs)("div", {
                    className: en.headerV2,
                    children: [
                        t,
                        (0, r.jsxs)("div", {
                            className: en.headerTextContainerV2,
                            children: [
                                (0, r.jsx)(g.X6q, {
                                    variant: "heading-md/semibold",
                                    className: o()(en.headerText, ei.marginBottom4),
                                    children: a.name,
                                }),
                                (0, r.jsx)(g.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: et.intl.format(et.t.yOApCA, { date: n }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(Q.Z, {
                            appRecord: O,
                            selectedGuildId: l,
                            selectedChannelId: s,
                        }),
                    ],
                });
            },
            ep = (e) => {
                W.hW.updateAsync(
                    "applications",
                    (t) => {
                        E in t.appSettings
                            ? null == t.appSettings[E].appDmSettings
                                ? (t.appSettings[E].appDmSettings = m.c$.create({ allowMobilePush: e }))
                                : (t.appSettings[E].appDmSettings.allowMobilePush = e)
                            : (t.appSettings[E] = m.dp.create({ appDmSettings: m.c$.create({ allowMobilePush: e }) }));
                    },
                    W.fy.INFREQUENT_USER_ACTION,
                ),
                    T.ZP.trackWithMetadata($.rMx.NOTIFICATION_SETTINGS_UPDATED, {
                        update_type: ee.I.AUTHORIZED_APP_DM_PUSH_NOTIFICATION,
                        application_id: a.id,
                        label: e ? Z.ZB.Unmuted : Z.ZB.Muted,
                    });
            },
            eh = i.useCallback(async () => {
                u()(null != L, "dm channel mute setting requires having a bot user");
                let e = j;
                null == e && (e = await b.Z.ensurePrivateChannel(L.id)),
                    B
                        ? y.Z.updateAppDMOverrideSettings(null, e, a.id, { muted: !1 }, Z.ZB.Unmuted)
                        : (0, g.ZDy)(async () => {
                              let { default: t } = await n.e("8246").then(n.bind(n, 540679));
                              return (n) =>
                                  (0, r.jsx)(
                                      t,
                                      eo(
                                          {
                                              channelId: e,
                                              applicationId: a.id,
                                          },
                                          n,
                                      ),
                                  );
                          });
            }, [j, L, B, a.id]),
            em = () =>
                C.enabled
                    ? (0, r.jsxs)("div", {
                          className: en.directMessagesSection,
                          children: [
                              (0, r.jsx)(g.X6q, {
                                  variant: "heading-sm/medium",
                                  color: "header-primary",
                                  className: en.dmSettingsHeader,
                                  children: et.intl.string(et.t.NaZyYG),
                              }),
                              null != L
                                  ? (0, r.jsx)(g.j7V, {
                                        hideBorder: !0,
                                        onChange: eh,
                                        className: en.dmSettingsSwitch,
                                        note:
                                            (null == M ? void 0 : M.end_time) != null
                                                ? et.intl.format(et.t.j7h4AA, {
                                                      endTime: new Date(M.end_time).toLocaleString(
                                                          et.intl.currentLocale,
                                                          {
                                                              month: "numeric",
                                                              day: "numeric",
                                                              hour: "numeric",
                                                              minute: "2-digit",
                                                          },
                                                      ),
                                                  })
                                                : void 0,
                                        value: B,
                                        children: (0, r.jsx)(g.Text, {
                                            variant: "text-sm/medium",
                                            children: et.intl.string(et.t.NkwaBg),
                                        }),
                                    })
                                  : null,
                              v && C.enabled
                                  ? (0, r.jsx)(g.j7V, {
                                        hideBorder: !0,
                                        onChange: ep,
                                        className: en.dmSettingsSwitch,
                                        note: et.intl.string(et.t.hw1nKS),
                                        value: I,
                                        disabled: B,
                                        children: (0, r.jsx)(g.Text, {
                                            variant: "text-sm/medium",
                                            children: et.intl.string(et.t["Pkw//v"]),
                                        }),
                                    })
                                  : null,
                          ],
                      })
                    : null,
            eg = (0, z.O)(a.id),
            eE = (0, N.Z)(a),
            eb = (0, J.Z)(),
            ey = () =>
                (0, r.jsxs)("div", {
                    className: en.footer,
                    children: [
                        eE
                            ? (0, r.jsx)(eu, {
                                  className: en.warningContainer,
                                  text: et.intl.format(et.t.j4B7ER, { applicationName: a.name }),
                              })
                            : eg
                              ? (0, r.jsx)(eu, {
                                    className: en.warningContainer,
                                    text: et.intl.format(et.t.jUhnwc, {
                                        applicationName: a.name,
                                        onConnectionPress: () =>
                                            eb(Y.n.CONNECTIONS_PANEL, { section: $.oAB.CONNECTIONS }),
                                    }),
                                })
                              : null,
                        (0, r.jsx)("div", {
                            className: en.deauthorizeButton,
                            children: (0, r.jsx)(g.zxk, {
                                variant: "critical-secondary",
                                size: "sm",
                                text: et.intl.string(et.t.xUqheH),
                                onClick: () => ef(a, c),
                            }),
                        }),
                    ],
                });
        return (0, r.jsx)("div", {
            className: en.authedAppV2,
            children: (0, r.jsx)(g.y5t, {
                component: ec(),
                children: (0, r.jsxs)("div", {
                    className: en.appDetailsContainer,
                    children: [el(), ea(), em(), ey()],
                }),
            }),
        });
    },
    eh = (0, d.U)(() => ({ searchQuery: "" })),
    em = () => {
        let e = (0, p.e7)([M.Z], () => M.Z.hidePersonalInformation),
            { fetchState: t, appAuthTokens: n } = (0, p.cj)([L.Z], () => ({
                fetchState: L.Z.getFetchState(),
                appAuthTokens: L.Z.getNewestTokensForNonChildrenApplications(),
            })),
            a = (0, p.e7)([V.default], () => V.default.locale),
            o = (0, p.e7)([v.ZP], () => v.ZP.getSelfEmbeddedActivities()),
            s = (0, p.e7)([x.Z, j.Z], () => x.Z.getChannel(j.Z.getChannelId())),
            c = null == s ? void 0 : s.getGuildId();
        i.useEffect(() => {
            E.Z.fetch();
        }, []),
            i.useEffect(
                () => () => {
                    eh.setState({ searchQuery: "" });
                },
                [],
            );
        let u = (e) => {
                let { id: t, application: n } = e;
                E.Z.delete(t);
                let r = o.get(n.id);
                null != r &&
                    I.Z.leaveActivity({
                        location: r.location,
                        applicationId: n.id,
                        showFeedback: !1,
                    });
            },
            d = eh((e) => e.searchQuery),
            f = (e) => eh.setState({ searchQuery: e }),
            _ = (e) => {
                f(e);
            },
            h = () => {
                f("");
            },
            m = () =>
                (0, r.jsx)("div", {
                    className: en.searchContainer,
                    children: (0, r.jsx)(g.E1j, {
                        query: d,
                        onChange: _,
                        onClear: h,
                        placeholder: et.intl.string(et.t["5prvKS"]),
                        "aria-label": et.intl.string(et.t["5prvKS"]),
                    }),
                }),
            b = (e, t) =>
                (0, r.jsx)(ec, {
                    className: en.__invalid_marginTop20,
                    children: (0, r.jsx)(g.OZU, {
                        note: e,
                        children: t,
                    }),
                }),
            y = i.useMemo(() => {
                let e = d.trim().toLowerCase();
                return "" === e || null == n
                    ? n
                    : n.length < 100
                      ? n.filter((t) => l()(e, t.application.name.toLowerCase()))
                      : n.filter((t) => t.application.name.toLowerCase().includes(e));
            }, [n, d]),
            T = () =>
                null == n || null == y || t !== L.M.FETCHED
                    ? (0, r.jsx)(g.$jN, {
                          className: ei.marginTop20,
                          type: g.$jN.Type.SPINNING_CIRCLE,
                      })
                    : 0 === n.length
                      ? b(et.intl.string(et.t.CpPv5u), et.intl.string(et.t["E+SM6e"]))
                      : 0 === y.length
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [m(), b(null, et.intl.string(et.t.EVWFNj))],
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  m(),
                                  y
                                      .sort((e, t) => Number(t.id) - Number(e.id))
                                      .map((e) =>
                                          (0, r.jsx)(
                                              ep,
                                              eo(
                                                  {
                                                      locale: a,
                                                      onDelete: () => u(e),
                                                      selectedChannelId: null == s ? void 0 : s.id,
                                                      selectedGuildId: null != c ? c : void 0,
                                                  },
                                                  e,
                                              ),
                                              e.id,
                                          ),
                                      ),
                              ],
                          });
        return e
            ? (0, r.jsx)(O.Z, {})
            : (0, r.jsx)(X.Z, {
                  title: et.intl.string(et.t["f6kk+v"]),
                  children: (0, r.jsx)(g.y5t, {
                      component: (0, r.jsx)(g.ToO, {
                          className: ei.marginBottom40,
                          type: g.sje.PRIMARY,
                          title: et.intl.string(et.t.HU3RFx),
                          body: et.intl.string(et.t.Nu5Yi4),
                      }),
                      children: T(),
                  }),
              });
    };
