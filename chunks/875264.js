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
    f = n(971157),
    _ = n(12994),
    N = n(460641),
    j = n(969756),
    T = n(930238),
    v = n(761437),
    C = n(652215),
    I = n(985018),
    E = n(858539);
function S(e, t) {
    switch (e) {
        case C.wLn.APPLICATION:
            return t?.application.name ?? "";
        case C.wLn.OVERVIEW:
            return I.intl.string(I.t.s69NLF);
        case C.wLn.CHANNEL_FOLLOWING:
            return I.intl.string(I.t.OrV60r);
        case C.wLn.TWITCH:
            return I.intl.string(I.t.q4pBG3);
        case C.wLn.WEBHOOKS:
            return I.intl.string(I.t.xOg4SP);
        case C.wLn.YOUTUBE:
            return I.intl.string(I.t.aS6cK4);
        case C.wLn.LOBBIES_LINKED:
            return I.intl.string(I.t.tqtDXC);
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
                P.SELECTABLE.map((e) => e.channel).filter((e) => p.A.can(C.xBc.MANAGE_WEBHOOKS, e)),
                "id",
            ),
        ),
        W = (0, r.cf)([p.A], () =>
            a().keyBy(
                P.VOCAL.map((e) => e.channel).filter((e) => e.isGuildVocal() && p.A.can(C.xBc.MANAGE_WEBHOOKS, e)),
                "id",
            ),
        ),
        H = y ?? D,
        V = t === C.wLn.APPLICATION ? n : null,
        [z, F] = l.useState(c.n3),
        K = l.useCallback(
            () =>
                U()
                    ? (A._.dispatch(C.jej.SHAKE_APP, { duration: 300, intensity: z }),
                      F(Math.min(z + c.pe, c.OZ)),
                      A._.dispatch(C.jej.EMPHASIZE_NOTICE),
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
                        : t.type === C.NH1.CHANNEL_FOLLOWER
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
                case C.wLn.TWITCH:
                    null == Q[C.fg2.TWITCH] && d.A.setSection(C.wLn.OVERVIEW);
                    break;
                case C.wLn.YOUTUBE:
                    null == Q[C.fg2.YOUTUBE] && d.A.setSection(C.wLn.OVERVIEW);
                    break;
                case C.wLn.APPLICATION:
                    (null != V && (V in J || V in q)) || d.A.setSection(C.wLn.OVERVIEW);
            }
    }, [q, J, Q, V, t, L]),
        l.useEffect(() => {
            s?.id == null || (x.A.getEntitlementsForGuildFetchState(s.id) === x.e.NOT_FETCHED && g.f5(s.id));
        }, [s?.id]),
        l.useEffect(
            () => () => {
                d.A.setSection(C.wLn.OVERVIEW, null);
            },
            [],
        );
    let $ = null;
    switch (t) {
        case C.wLn.TWITCH:
            null != Q[C.fg2.TWITCH] &&
                ($ = (0, i.jsx)(_.A, {
                    guild: s,
                    integrations: Q[C.fg2.TWITCH],
                    editedIntegration: w,
                    labelText: I.intl.string(I.t.q4pBG3),
                    platformType: C.fg2.TWITCH,
                    descriptionText: I.intl.string(I.t.V9kNqt),
                    helpText: I.intl.format(I.t.ro1jEN, {
                        connectAction: () => (0, u.A)({ platformType: C.fg2.TWITCH, location: "Integration Settings" }),
                        helpdeskArticle: b.A.getArticleURL(C.MVz.TWITCH_INTEGRATION),
                    }),
                    errors: G,
                    canNavigate: K,
                }));
            break;
        case C.wLn.YOUTUBE:
            null != Q[C.fg2.YOUTUBE] &&
                ($ = (0, i.jsx)(_.A, {
                    guild: s,
                    integrations: Q[C.fg2.YOUTUBE],
                    editedIntegration: w,
                    labelText: I.intl.string(I.t.aS6cK4),
                    platformType: C.fg2.YOUTUBE,
                    descriptionText: I.intl.string(I.t["7Tv7JK"]),
                    helpText: I.intl.format(I.t["4OSAQ9"], {
                        connectAction: () => (0, u.A)({ platformType: C.fg2.YOUTUBE }),
                        helpdeskArticle: b.A.getArticleURL(C.MVz.YOUTUBE_INTEGRATION),
                    }),
                    errors: G,
                    canNavigate: K,
                }));
            break;
        case C.wLn.APPLICATION:
            let ee = null != V ? (q[J[V]] ?? q[V]) : null;
            null != ee &&
                ($ = (0, i.jsx)(f.A, {
                    guild: s,
                    applicationIntegration: ee,
                    editedWebhook: k,
                    selectableWebhookChannels: B,
                    errors: G,
                    canNavigate: K,
                }));
            break;
        case C.wLn.CHANNEL_FOLLOWING:
            $ = (0, i.jsx)(N.A, {
                followedChannelWebhooks: X,
                editedWebhook: k,
                selectableWebhookChannels: B,
                canNavigate: K,
                errors: G,
            });
            break;
        case C.wLn.WEBHOOKS:
            $ = (0, i.jsx)(v.A, {
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
        case C.wLn.LOBBIES_LINKED:
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
                    d.A.setSection(C.wLn.WEBHOOKS);
                },
                onManageFollowedChannels: () => {
                    d.A.setSection(C.wLn.CHANNEL_FOLLOWING);
                },
                onManageApplication: (e) => {
                    d.A.setSection(C.wLn.APPLICATION, e);
                },
                onManageBuiltIn: (e) => {
                    switch (e) {
                        case C.fg2.TWITCH:
                            d.A.setSection(C.wLn.TWITCH);
                            break;
                        case C.fg2.YOUTUBE:
                            d.A.setSection(C.wLn.YOUTUBE);
                    }
                },
                onManageLobbiesLinked: () => {
                    d.A.setSection(C.wLn.LOBBIES_LINKED);
                },
            });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.A, {
                align: m.A.Align.CENTER,
                className: E.jD,
                children:
                    t === C.wLn.OVERVIEW
                        ? (0, i.jsx)(o.Heading, { variant: "heading-lg/semibold", children: S(C.wLn.OVERVIEW) })
                        : (0, i.jsx)(o.BIu, {
                              activeId: t.toString(),
                              breadcrumbs: [C.wLn.OVERVIEW, t].map((e) => ({ id: e.toString(), label: S(e, q[V]) })),
                              onBreadcrumbClick: (e) => {
                                  t !== parseInt(e.id) && Y(parseInt(e.id));
                              },
                              renderCustomBreadcrumb: (e, t) =>
                                  (0, i.jsx)(o.Heading, {
                                      variant: "heading-lg/semibold",
                                      className: t ? E.q3 : E.fd,
                                      children: e.label,
                                  }),
                          }),
            }),
            $,
        ],
    });
});
