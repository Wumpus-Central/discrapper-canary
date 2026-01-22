n.d(t, { A: () => S }), n(896048), n(321073);
var i = n(627968),
    r = n(64700),
    l = n(735438),
    a = n.n(l),
    s = n(311907),
    o = n(397927),
    c = n(282956),
    d = n(83257),
    u = n(882997),
    b = n(235986),
    f = n(143582),
    p = n(607940),
    m = n(808728),
    g = n(576705),
    h = n(203982),
    x = n(975571),
    j = n(971157),
    O = n(12994),
    y = n(460641),
    A = n(969756),
    v = n(930238),
    N = n(761437),
    E = n(652215),
    T = n(985018),
    w = n(874090);
function C(e, t) {
    switch (e) {
        case E.wLn.APPLICATION:
            var n;
            return null != (n = null == t ? void 0 : t.application.name) ? n : "";
        case E.wLn.OVERVIEW:
            return T.intl.string(T.t.s69NLF);
        case E.wLn.CHANNEL_FOLLOWING:
            return T.intl.string(T.t.OrV60r);
        case E.wLn.TWITCH:
            return T.intl.string(T.t.q4pBG3);
        case E.wLn.WEBHOOKS:
            return T.intl.string(T.t.xOg4SP);
        case E.wLn.YOUTUBE:
            return T.intl.string(T.t.aS6cK4);
        case E.wLn.LOBBIES_LINKED:
            return T.intl.string(T.t.tqtDXC);
        default:
            return "";
    }
}
let S = r.memo(function (e) {
    let {
            section: t,
            sectionId: n,
            guild: l,
            channel: S,
            integrations: _,
            editedIntegration: I,
            webhooks: P,
            editedWebhook: k,
            isFetchingWebhooks: R,
            refToScroller: L,
            errors: M,
            hasChanges: D,
        } = e,
        G = (0, s.bG)([m.Ay], () => (null != l ? m.Ay.getDefaultChannel(l.id) : null)),
        U = (0, s.cf)([m.Ay], () => m.Ay.getChannels(null == l ? void 0 : l.id)),
        B = (0, s.cf)([g.A], () =>
            a().keyBy(
                U.SELECTABLE.map((e) => e.channel).filter((e) => g.A.can(E.xBc.MANAGE_WEBHOOKS, e)),
                "id",
            ),
        ),
        W = (0, s.cf)([g.A], () =>
            a().keyBy(
                U.VOCAL.map((e) => e.channel).filter((e) => e.isGuildVocal() && g.A.can(E.xBc.MANAGE_WEBHOOKS, e)),
                "id",
            ),
        ),
        H = null != S ? S : G,
        V = t === E.wLn.APPLICATION ? n : null,
        [z, K] = r.useState(d.n3),
        F = r.useCallback(
            () =>
                D()
                    ? (h._.dispatch(E.jej.SHAKE_APP, {
                          duration: 300,
                          intensity: z,
                      }),
                      K(Math.min(z + d.pe, d.OZ)),
                      h._.dispatch(E.jej.EMPHASIZE_NOTICE),
                      !1)
                    : (K(d.n3), !0),
            [D, z],
        ),
        Y = r.useCallback((e) => !!F() && (c.A.setSection(e), !0), [F]),
        {
            applicationIntegrations: q,
            applicationBotIds: Q,
            builtInIntegrations: J,
            customWebhooks: Z,
            followedChannelWebhooks: X,
        } = r.useMemo(() => {
            let e = {},
                t = {},
                n = {},
                i = [],
                r = [];
            if (null != _)
                for (let i of _)
                    if ("discord" === i.type) {
                        if (null != i.application) {
                            var l;
                            (e[i.application.id] = {
                                application: i.application,
                                integration: i,
                                webhooks: [],
                            }),
                                (null == (l = i.application.bot) ? void 0 : l.id) !== void 0 &&
                                    (t[i.application.bot.id] = i.application.id);
                        }
                    } else i.type in n || (n[i.type] = []), n[i.type].push(i);
            for (let t of P)
                (t.channel_id in B || t.channel_id in W) &&
                    (null != t.application_id && t.application_id in e
                        ? e[t.application_id].webhooks.push(t)
                        : t.type === E.NH1.CHANNEL_FOLLOWER
                          ? r.push(t)
                          : i.push(t));
            return {
                applicationIntegrations: e,
                applicationBotIds: t,
                builtInIntegrations: n,
                customWebhooks: i,
                followedChannelWebhooks: r,
            };
        }, [_, B, W, P]);
    r.useEffect(() => {
        if (!R)
            switch (t) {
                case E.wLn.TWITCH:
                    null == J[E.fg2.TWITCH] && c.A.setSection(E.wLn.OVERVIEW);
                    break;
                case E.wLn.YOUTUBE:
                    null == J[E.fg2.YOUTUBE] && c.A.setSection(E.wLn.OVERVIEW);
                    break;
                case E.wLn.APPLICATION:
                    (null != V && (V in Q || V in q)) || c.A.setSection(E.wLn.OVERVIEW);
            }
    }, [q, Q, J, V, t, R]),
        r.useEffect(() => {
            (null == l ? void 0 : l.id) == null ||
                (p.A.getEntitlementsForGuildFetchState(l.id) === p.e.NOT_FETCHED && f.f5(l.id));
        }, [null == l ? void 0 : l.id]),
        r.useEffect(
            () => () => {
                c.A.setSection(E.wLn.OVERVIEW, null);
            },
            [],
        );
    let $ = null;
    switch (t) {
        case E.wLn.TWITCH:
            null != J[E.fg2.TWITCH] &&
                ($ = (0, i.jsx)(O.A, {
                    guild: l,
                    integrations: J[E.fg2.TWITCH],
                    editedIntegration: I,
                    labelText: T.intl.string(T.t.q4pBG3),
                    platformType: E.fg2.TWITCH,
                    descriptionText: T.intl.string(T.t.V9kNqt),
                    helpText: T.intl.format(T.t.ro1jEN, {
                        connectAction: () =>
                            (0, u.A)({
                                platformType: E.fg2.TWITCH,
                                location: "Integration Settings",
                            }),
                        helpdeskArticle: x.A.getArticleURL(E.MVz.TWITCH_INTEGRATION),
                    }),
                    errors: M,
                    canNavigate: F,
                }));
            break;
        case E.wLn.YOUTUBE:
            null != J[E.fg2.YOUTUBE] &&
                ($ = (0, i.jsx)(O.A, {
                    guild: l,
                    integrations: J[E.fg2.YOUTUBE],
                    editedIntegration: I,
                    labelText: T.intl.string(T.t.aS6cK4),
                    platformType: E.fg2.YOUTUBE,
                    descriptionText: T.intl.string(T.t["7Tv7JK"]),
                    helpText: T.intl.format(T.t["4OSAQ9"], {
                        connectAction: () => (0, u.A)({ platformType: E.fg2.YOUTUBE }),
                        helpdeskArticle: x.A.getArticleURL(E.MVz.YOUTUBE_INTEGRATION),
                    }),
                    errors: M,
                    canNavigate: F,
                }));
            break;
        case E.wLn.APPLICATION:
            var ee;
            let et = null != V ? (null != (ee = q[Q[V]]) ? ee : q[V]) : null;
            null != et &&
                ($ = (0, i.jsx)(j.A, {
                    guild: l,
                    applicationIntegration: et,
                    editedWebhook: k,
                    selectableWebhookChannels: B,
                    errors: M,
                    canNavigate: F,
                }));
            break;
        case E.wLn.CHANNEL_FOLLOWING:
            $ = (0, i.jsx)(y.A, {
                followedChannelWebhooks: X,
                editedWebhook: k,
                selectableWebhookChannels: B,
                canNavigate: F,
                errors: M,
            });
            break;
        case E.wLn.WEBHOOKS:
            $ = (0, i.jsx)(N.A, {
                guild: l,
                channel: S,
                customWebhooks: Z,
                editedWebhook: k,
                selectableWebhookChannels: (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            i.forEach(function (t) {
                                var i;
                                (i = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = i);
                            });
                    }
                    return e;
                })({}, B, W),
                canNavigate: F,
                refToScroller: L,
                errors: M,
            });
            break;
        case E.wLn.LOBBIES_LINKED:
            $ = (0, i.jsx)(A.A, { guild: l });
            break;
        default:
            $ = (0, i.jsx)(v.A, {
                guild: l,
                channel: S,
                applicationIntegrations: q,
                builtInIntegrations: J,
                customWebhooks: Z,
                followedChannelWebhooks: X,
                isLoadingWebhooks: R || null == l,
                canCreateWebhook: null != H,
                onManageCustomWebhooks: () => {
                    c.A.setSection(E.wLn.WEBHOOKS);
                },
                onManageFollowedChannels: () => {
                    c.A.setSection(E.wLn.CHANNEL_FOLLOWING);
                },
                onManageApplication: (e) => {
                    c.A.setSection(E.wLn.APPLICATION, e);
                },
                onManageBuiltIn: (e) => {
                    switch (e) {
                        case E.fg2.TWITCH:
                            c.A.setSection(E.wLn.TWITCH);
                            break;
                        case E.fg2.YOUTUBE:
                            c.A.setSection(E.wLn.YOUTUBE);
                    }
                },
                onManageLobbiesLinked: () => {
                    c.A.setSection(E.wLn.LOBBIES_LINKED);
                },
            });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(b.A, {
                align: b.A.Align.CENTER,
                className: w.jD,
                children:
                    t === E.wLn.OVERVIEW
                        ? (0, i.jsx)(o.Heading, {
                              variant: "heading-lg/semibold",
                              children: C(E.wLn.OVERVIEW),
                          })
                        : (0, i.jsx)(o.BIu, {
                              activeId: t.toString(),
                              breadcrumbs: [E.wLn.OVERVIEW, t].map((e) => ({
                                  id: e.toString(),
                                  label: C(e, q[V]),
                              })),
                              onBreadcrumbClick: (e) => {
                                  t !== parseInt(e.id) && Y(parseInt(e.id));
                              },
                              renderCustomBreadcrumb: (e, t) =>
                                  (0, i.jsx)(o.Heading, {
                                      variant: "heading-lg/semibold",
                                      className: t ? w.q3 : w.fd,
                                      children: e.label,
                                  }),
                          }),
            }),
            $,
        ],
    });
});
