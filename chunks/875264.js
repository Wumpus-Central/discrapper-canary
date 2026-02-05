n.d(t, { A: () => y }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    d = n(282956),
    c = n(83257),
    u = n(882997),
    m = n(235986),
    g = n(143582),
    x = n(607940),
    h = n(808728),
    p = n(576705),
    A = n(203982),
    b = n(975571),
    _ = n(971157),
    f = n(12994),
    N = n(460641),
    j = n(969756),
    T = n(930238),
    C = n(761437),
    v = n(652215),
    E = n(985018),
    I = n(874090);
function S(e, t) {
    switch (e) {
        case v.wLn.APPLICATION:
            return t?.application.name ?? "";
        case v.wLn.OVERVIEW:
            return E.intl.string(E.t.s69NLF);
        case v.wLn.CHANNEL_FOLLOWING:
            return E.intl.string(E.t.OrV60r);
        case v.wLn.TWITCH:
            return E.intl.string(E.t.q4pBG3);
        case v.wLn.WEBHOOKS:
            return E.intl.string(E.t.xOg4SP);
        case v.wLn.YOUTUBE:
            return E.intl.string(E.t.aS6cK4);
        case v.wLn.LOBBIES_LINKED:
            return E.intl.string(E.t.tqtDXC);
        default:
            return "";
    }
}
let y = l.memo(function (e) {
    let {
            section: t,
            sectionId: n,
            guild: s,
            channel: y,
            integrations: O,
            editedIntegration: w,
            webhooks: R,
            editedWebhook: k,
            isFetchingWebhooks: L,
            refToScroller: M,
            errors: G,
            hasChanges: U,
        } = e,
        D = (0, r.bG)([h.Ay], () => (null != s ? h.Ay.getDefaultChannel(s.id) : null)),
        P = (0, r.cf)([h.Ay], () => h.Ay.getChannels(s?.id)),
        B = (0, r.cf)([p.A], () =>
            a().keyBy(
                P.SELECTABLE.map((e) => e.channel).filter((e) => p.A.can(v.xBc.MANAGE_WEBHOOKS, e)),
                "id",
            ),
        ),
        W = (0, r.cf)([p.A], () =>
            a().keyBy(
                P.VOCAL.map((e) => e.channel).filter((e) => e.isGuildVocal() && p.A.can(v.xBc.MANAGE_WEBHOOKS, e)),
                "id",
            ),
        ),
        H = y ?? D,
        V = t === v.wLn.APPLICATION ? n : null,
        [z, F] = l.useState(c.n3),
        K = l.useCallback(
            () =>
                U()
                    ? (A._.dispatch(v.jej.SHAKE_APP, { duration: 300, intensity: z }),
                      F(Math.min(z + c.pe, c.OZ)),
                      A._.dispatch(v.jej.EMPHASIZE_NOTICE),
                      !1)
                    : (F(c.n3), !0),
            [U, z],
        ),
        Y = l.useCallback((e) => !!K() && (d.A.setSection(e), !0), [K]),
        {
            applicationIntegrations: q,
            applicationBotIds: J,
            builtInIntegrations: Q,
            customWebhooks: Z,
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
            for (let t of R)
                (t.channel_id in B || t.channel_id in W) &&
                    (null != t.application_id && t.application_id in e
                        ? e[t.application_id].webhooks.push(t)
                        : t.type === v.NH1.CHANNEL_FOLLOWER
                          ? l.push(t)
                          : i.push(t));
            return {
                applicationIntegrations: e,
                applicationBotIds: t,
                builtInIntegrations: n,
                customWebhooks: i,
                followedChannelWebhooks: l,
            };
        }, [O, B, W, R]);
    l.useEffect(() => {
        if (!L)
            switch (t) {
                case v.wLn.TWITCH:
                    null == Q[v.fg2.TWITCH] && d.A.setSection(v.wLn.OVERVIEW);
                    break;
                case v.wLn.YOUTUBE:
                    null == Q[v.fg2.YOUTUBE] && d.A.setSection(v.wLn.OVERVIEW);
                    break;
                case v.wLn.APPLICATION:
                    (null != V && (V in J || V in q)) || d.A.setSection(v.wLn.OVERVIEW);
            }
    }, [q, J, Q, V, t, L]),
        l.useEffect(() => {
            s?.id == null || (x.A.getEntitlementsForGuildFetchState(s.id) === x.e.NOT_FETCHED && g.f5(s.id));
        }, [s?.id]),
        l.useEffect(
            () => () => {
                d.A.setSection(v.wLn.OVERVIEW, null);
            },
            [],
        );
    let $ = null;
    switch (t) {
        case v.wLn.TWITCH:
            null != Q[v.fg2.TWITCH] &&
                ($ = (0, i.jsx)(f.A, {
                    guild: s,
                    integrations: Q[v.fg2.TWITCH],
                    editedIntegration: w,
                    labelText: E.intl.string(E.t.q4pBG3),
                    platformType: v.fg2.TWITCH,
                    descriptionText: E.intl.string(E.t.V9kNqt),
                    helpText: E.intl.format(E.t.ro1jEN, {
                        connectAction: () => (0, u.A)({ platformType: v.fg2.TWITCH, location: "Integration Settings" }),
                        helpdeskArticle: b.A.getArticleURL(v.MVz.TWITCH_INTEGRATION),
                    }),
                    errors: G,
                    canNavigate: K,
                }));
            break;
        case v.wLn.YOUTUBE:
            null != Q[v.fg2.YOUTUBE] &&
                ($ = (0, i.jsx)(f.A, {
                    guild: s,
                    integrations: Q[v.fg2.YOUTUBE],
                    editedIntegration: w,
                    labelText: E.intl.string(E.t.aS6cK4),
                    platformType: v.fg2.YOUTUBE,
                    descriptionText: E.intl.string(E.t["7Tv7JK"]),
                    helpText: E.intl.format(E.t["4OSAQ9"], {
                        connectAction: () => (0, u.A)({ platformType: v.fg2.YOUTUBE }),
                        helpdeskArticle: b.A.getArticleURL(v.MVz.YOUTUBE_INTEGRATION),
                    }),
                    errors: G,
                    canNavigate: K,
                }));
            break;
        case v.wLn.APPLICATION:
            let ee = null != V ? (q[J[V]] ?? q[V]) : null;
            null != ee &&
                ($ = (0, i.jsx)(_.A, {
                    guild: s,
                    applicationIntegration: ee,
                    editedWebhook: k,
                    selectableWebhookChannels: B,
                    errors: G,
                    canNavigate: K,
                }));
            break;
        case v.wLn.CHANNEL_FOLLOWING:
            $ = (0, i.jsx)(N.A, {
                followedChannelWebhooks: X,
                editedWebhook: k,
                selectableWebhookChannels: B,
                canNavigate: K,
                errors: G,
            });
            break;
        case v.wLn.WEBHOOKS:
            $ = (0, i.jsx)(C.A, {
                guild: s,
                channel: y,
                customWebhooks: Z,
                editedWebhook: k,
                selectableWebhookChannels: { ...B, ...W },
                canNavigate: K,
                refToScroller: M,
                errors: G,
            });
            break;
        case v.wLn.LOBBIES_LINKED:
            $ = (0, i.jsx)(j.A, { guild: s });
            break;
        default:
            $ = (0, i.jsx)(T.A, {
                guild: s,
                channel: y,
                applicationIntegrations: q,
                builtInIntegrations: Q,
                customWebhooks: Z,
                followedChannelWebhooks: X,
                isLoadingWebhooks: L || null == s,
                canCreateWebhook: null != H,
                onManageCustomWebhooks: () => {
                    d.A.setSection(v.wLn.WEBHOOKS);
                },
                onManageFollowedChannels: () => {
                    d.A.setSection(v.wLn.CHANNEL_FOLLOWING);
                },
                onManageApplication: (e) => {
                    d.A.setSection(v.wLn.APPLICATION, e);
                },
                onManageBuiltIn: (e) => {
                    switch (e) {
                        case v.fg2.TWITCH:
                            d.A.setSection(v.wLn.TWITCH);
                            break;
                        case v.fg2.YOUTUBE:
                            d.A.setSection(v.wLn.YOUTUBE);
                    }
                },
                onManageLobbiesLinked: () => {
                    d.A.setSection(v.wLn.LOBBIES_LINKED);
                },
            });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.A, {
                align: m.A.Align.CENTER,
                className: I.jD,
                children:
                    t === v.wLn.OVERVIEW
                        ? (0, i.jsx)(o.Heading, { variant: "heading-lg/semibold", children: S(v.wLn.OVERVIEW) })
                        : (0, i.jsx)(o.BIu, {
                              activeId: t.toString(),
                              breadcrumbs: [v.wLn.OVERVIEW, t].map((e) => ({ id: e.toString(), label: S(e, q[V]) })),
                              onBreadcrumbClick: (e) => {
                                  t !== parseInt(e.id) && Y(parseInt(e.id));
                              },
                              renderCustomBreadcrumb: (e, t) =>
                                  (0, i.jsx)(o.Heading, {
                                      variant: "heading-lg/semibold",
                                      className: t ? I.q3 : I.fd,
                                      children: e.label,
                                  }),
                          }),
            }),
            $,
        ],
    });
});
