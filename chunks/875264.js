n.d(t, { A: () => w }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n.n(s),
    r = n(311907),
    o = n(534514),
    d = n(40474),
    c = n(282956),
    u = n(83257),
    m = n(882997),
    g = n(235986),
    h = n(143582),
    x = n(607940),
    p = n(808728),
    A = n(576705),
    b = n(203982),
    f = n(975571),
    _ = n(971157),
    j = n(790613),
    N = n(460641),
    v = n(969756),
    E = n(930238),
    C = n(761437),
    I = n(652215),
    T = n(985018),
    S = n(458203);
function y(e, t) {
    switch (e) {
        case I.wLn.APPLICATION:
            return t?.application.name ?? "";
        case I.wLn.OVERVIEW:
            return T.intl.string(T.t.s69NLF);
        case I.wLn.CHANNEL_FOLLOWING:
            return T.intl.string(T.t.OrV60r);
        case I.wLn.TWITCH:
            return T.intl.string(T.t.q4pBG3);
        case I.wLn.WEBHOOKS:
            return T.intl.string(T.t.xOg4SP);
        case I.wLn.YOUTUBE:
            return T.intl.string(T.t.aS6cK4);
        case I.wLn.LOBBIES_LINKED:
            return T.intl.string(T.t.tqtDXC);
        default:
            return "";
    }
}
let w = l.memo(function (e) {
    let {
            section: t,
            sectionId: n,
            guild: s,
            channel: w,
            integrations: O,
            editedIntegration: k,
            webhooks: L,
            editedWebhook: R,
            isFetchingWebhooks: M,
            refToScroller: D,
            errors: P,
            hasChanges: G,
        } = e,
        U = (0, r.bG)([p.Ay], () => (null != s ? p.Ay.getDefaultChannel(s.id) : null)),
        W = (0, r.cf)([p.Ay], () => p.Ay.getChannels(s?.id)),
        B = (0, r.cf)([A.A], () =>
            a().keyBy(
                W.SELECTABLE.map((e) => e.channel).filter((e) => A.A.can(I.xBc.MANAGE_WEBHOOKS, e)),
                "id",
            ),
        ),
        H = (0, r.cf)([A.A], () =>
            a().keyBy(
                W.VOCAL.map((e) => e.channel).filter((e) => e.isGuildVocal() && A.A.can(I.xBc.MANAGE_WEBHOOKS, e)),
                "id",
            ),
        ),
        z = w ?? U,
        V = t === I.wLn.APPLICATION ? n : null,
        [F, K] = l.useState(u.n3),
        Y = l.useCallback(
            () =>
                G()
                    ? (b._.dispatch(I.jej.SHAKE_APP, { duration: 300, intensity: F }),
                      K(Math.min(F + u.pe, u.OZ)),
                      b._.dispatch(I.jej.EMPHASIZE_NOTICE),
                      !1)
                    : (K(u.n3), !0),
            [G, F],
        ),
        q = l.useCallback((e) => !!Y() && (c.A.setSection(e), !0), [Y]),
        {
            applicationIntegrations: Q,
            applicationBotIds: Z,
            builtInIntegrations: J,
            customWebhooks: $,
            followedChannelWebhooks: X,
        } = l.useMemo(() => {
            let e = {},
                t = {},
                n = {},
                i = [],
                l = [];
            if (null != O)
                for (let i of O)
                    "discord" === i.type
                        ? null != i.application &&
                          ((e[i.application.id] = { application: i.application, integration: i, webhooks: [] }),
                          i.application.bot?.id !== void 0 && (t[i.application.bot.id] = i.application.id))
                        : (i.type in n || (n[i.type] = []), n[i.type].push(i));
            for (let t of L)
                (t.channel_id in B || t.channel_id in H) &&
                    (null != t.application_id && t.application_id in e
                        ? e[t.application_id].webhooks.push(t)
                        : t.type === I.NH1.CHANNEL_FOLLOWER
                          ? l.push(t)
                          : i.push(t));
            return {
                applicationIntegrations: e,
                applicationBotIds: t,
                builtInIntegrations: n,
                customWebhooks: i,
                followedChannelWebhooks: l,
            };
        }, [O, B, H, L]);
    l.useEffect(() => {
        if (!M)
            switch (t) {
                case I.wLn.TWITCH:
                    null == J[I.fg2.TWITCH] && c.A.setSection(I.wLn.OVERVIEW);
                    break;
                case I.wLn.YOUTUBE:
                    null == J[I.fg2.YOUTUBE] && c.A.setSection(I.wLn.OVERVIEW);
                    break;
                case I.wLn.APPLICATION:
                    (null != V && (V in Z || V in Q)) || c.A.setSection(I.wLn.OVERVIEW);
            }
    }, [Q, Z, J, V, t, M]),
        l.useEffect(() => {
            s?.id == null || (x.A.getEntitlementsForGuildFetchState(s.id) === x.e.NOT_FETCHED && h.f5(s.id));
        }, [s?.id]),
        l.useEffect(
            () => () => {
                c.A.setSection(I.wLn.OVERVIEW, null);
            },
            [],
        );
    let ee = null;
    switch (t) {
        case I.wLn.TWITCH:
            null != J[I.fg2.TWITCH] &&
                (ee = (0, i.jsx)(j.A, {
                    guild: s,
                    integrations: J[I.fg2.TWITCH],
                    editedIntegration: k,
                    labelText: T.intl.string(T.t.q4pBG3),
                    platformType: I.fg2.TWITCH,
                    descriptionText: T.intl.string(T.t.V9kNqt),
                    helpText: T.intl.format(T.t.ro1jEN, {
                        connectAction: () => (0, m.A)({ platformType: I.fg2.TWITCH, location: "Integration Settings" }),
                        helpdeskArticle: f.A.getArticleURL(I.MVz.TWITCH_INTEGRATION),
                    }),
                    errors: P,
                    canNavigate: Y,
                }));
            break;
        case I.wLn.YOUTUBE:
            null != J[I.fg2.YOUTUBE] &&
                (ee = (0, i.jsx)(j.A, {
                    guild: s,
                    integrations: J[I.fg2.YOUTUBE],
                    editedIntegration: k,
                    labelText: T.intl.string(T.t.aS6cK4),
                    platformType: I.fg2.YOUTUBE,
                    descriptionText: T.intl.string(T.t["7Tv7JK"]),
                    helpText: T.intl.format(T.t["4OSAQ9"], {
                        connectAction: () => (0, m.A)({ platformType: I.fg2.YOUTUBE }),
                        helpdeskArticle: f.A.getArticleURL(I.MVz.YOUTUBE_INTEGRATION),
                    }),
                    errors: P,
                    canNavigate: Y,
                }));
            break;
        case I.wLn.APPLICATION:
            let et = null != V ? (Q[Z[V]] ?? Q[V]) : null;
            null != et &&
                (ee = (0, i.jsx)(_.A, {
                    guild: s,
                    applicationIntegration: et,
                    editedWebhook: R,
                    selectableWebhookChannels: B,
                    errors: P,
                    canNavigate: Y,
                }));
            break;
        case I.wLn.CHANNEL_FOLLOWING:
            ee = (0, i.jsx)(N.A, {
                followedChannelWebhooks: X,
                editedWebhook: R,
                selectableWebhookChannels: B,
                canNavigate: Y,
                errors: P,
            });
            break;
        case I.wLn.WEBHOOKS:
            ee = (0, i.jsx)(C.A, {
                guild: s,
                channel: w,
                customWebhooks: $,
                editedWebhook: R,
                selectableWebhookChannels: { ...B, ...H },
                canNavigate: Y,
                refToScroller: D,
                errors: P,
            });
            break;
        case I.wLn.LOBBIES_LINKED:
            ee = (0, i.jsx)(v.A, { guild: s });
            break;
        default:
            ee = (0, i.jsx)(E.A, {
                guild: s,
                channel: w,
                applicationIntegrations: Q,
                builtInIntegrations: J,
                customWebhooks: $,
                followedChannelWebhooks: X,
                isLoadingWebhooks: M || null == s,
                canCreateWebhook: null != z,
                onManageCustomWebhooks: () => {
                    c.A.setSection(I.wLn.WEBHOOKS);
                },
                onManageFollowedChannels: () => {
                    c.A.setSection(I.wLn.CHANNEL_FOLLOWING);
                },
                onManageApplication: (e) => {
                    c.A.setSection(I.wLn.APPLICATION, e);
                },
                onManageBuiltIn: (e) => {
                    switch (e) {
                        case I.fg2.TWITCH:
                            c.A.setSection(I.wLn.TWITCH);
                            break;
                        case I.fg2.YOUTUBE:
                            c.A.setSection(I.wLn.YOUTUBE);
                    }
                },
                onManageLobbiesLinked: () => {
                    c.A.setSection(I.wLn.LOBBIES_LINKED);
                },
            });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(g.A, {
                align: g.A.Align.CENTER,
                className: S.jD,
                children:
                    t === I.wLn.OVERVIEW
                        ? (0, i.jsx)(o.D, { variant: "heading-lg/semibold", children: y(I.wLn.OVERVIEW) })
                        : (0, i.jsx)(d.A, {
                              activeId: t.toString(),
                              breadcrumbs: [I.wLn.OVERVIEW, t].map((e) => ({ id: e.toString(), label: y(e, Q[V]) })),
                              onBreadcrumbClick: (e) => {
                                  t !== parseInt(e.id) && q(parseInt(e.id));
                              },
                              renderCustomBreadcrumb: (e, t) =>
                                  (0, i.jsx)(o.D, {
                                      variant: "heading-lg/semibold",
                                      className: t ? S.q3 : S.fd,
                                      children: e.label,
                                  }),
                          }),
            }),
            ee,
        ],
    });
});
