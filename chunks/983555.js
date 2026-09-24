(n.r(t), n.d(t, { default: () => z }), n(323874), n(14289), n(35956), n(134528), n(947204));
var i = n(607399),
    r = n(696292),
    a = n(228366),
    s = n(308528),
    l = n(66834),
    o = n(376728),
    d = n(795816),
    c = n(956549),
    u = n(257269),
    _ = n(574152),
    E = n(95561),
    A = n(121401),
    h = n(587895),
    I = n(725606),
    f = n(167189),
    p = n(721779),
    T = n(707592),
    g = n(698441),
    m = n(268313),
    S = n(842241),
    N = n(376943),
    C = n(741231),
    O = n(971276),
    R = n(216934),
    L = n(976860),
    y = n(832163),
    D = n(227327),
    v = n(788995),
    b = n(432e3);
n(809733);
var M = n(280450),
    P = n(696451),
    U = n(71393),
    w = n(299091),
    G = n(232835),
    x = n(309010),
    k = n(967198),
    F = n(711014),
    B = n(174459),
    V = n(998218),
    H = n(975807),
    j = n(652215);
async function W(e, t, n) {
    await a.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: e, code: t, context: j.BRT.APP, invite_instance_id: n });
}
async function Y(e, t) {
    let n = e.code,
        i = (0, S._U)(n, t),
        r = w.A.getInvite(n);
    if (null == r || r.state === j.elq.ERROR) {
        let { invite: e } = await o.Ay.resolveInvite(n, "Markdown Link", { inviteInstanceId: i });
        r = e ?? void 0;
    }
    if (null == r) return;
    if (r.state === j.elq.EXPIRED || r.state === j.elq.BANNED || r.state === j.elq.ERROR)
        return void (await W(r, n, i));
    let a = F.Ay.getFlattenedGuildIds(),
        s = r?.guild?.id,
        l = null != s && a.includes(s),
        d = !1;
    if (l && null != r.roles && r.roles.length > 0) {
        let e = M.default.getId(),
            t = P.Ay.getMember(s, e),
            n = new Set(t?.roles ?? []);
        d = r.roles.some((e) => !n.has(e.id));
    }
    l && !d ? o.Ay.transitionToInvite(r, { forceTransition: !0 }) : await W(r, n, i);
}
async function K(e, t) {
    function i() {
        {
            let { showInaccessibleLinkModal: e } = n(9588);
            e({ kind: "channel" });
        }
    }
    if (null == e || "" === e) return void i();
    let r = g.Ay.getGuildScheduledEvent(t);
    if (null == r)
        try {
            let { default: i } = await Promise.resolve().then(n.bind(n, 496092));
            r = await i.fetchGuildEvent(e, t);
        } catch {
            i();
            return;
        }
    if (null == r) return void i();
    if (null == U.A.getGuild(e))
        try {
            (await l.A.joinGuild(e, { lurker: !0, source: j.Q4z.GUILD_EVENT_EMBED }),
                await l.A.transitionToGuildSync(e));
        } catch (e) {
            e.body?.code === j.t02.UNKNOWN_GUILD && i();
            return;
        }
    (k.A.getGuildId() !== e && (0, C.A)(j.BVt.CHANNEL(e)), (0, T.uR)({ eventId: r.id }));
}
(n(758836), n(188275));
let $ = { skipExtensionCheck: void 0, analyticsLocations: [] };
function z(e) {
    let {
            skipExtensionCheck: t,
            analyticsLocations: a,
            messageId: l,
            channelId: o,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : $,
        T = (0, p.br)(e);
    if (null != T && (T.type === f.I.INVITE || T.type === f.I.EMBEDDED_ACTIVITY_INVITE))
        return (e) => (e?.preventDefault(), Y(T, l), !0);
    if (
        null != T &&
        (T.type === f.I.APP_DIRECTORY_PROFILE ||
            T.type === f.I.APP_DIRECTORY_STOREFRONT ||
            T.type === f.I.APP_DIRECTORY_STOREFRONT_SKU)
    )
        return (t) => {
            t?.preventDefault();
            let { code: r } = T,
                { applicationId: a, skuId: s } =
                    T.type === f.I.APP_DIRECTORY_PROFILE || T.type === f.I.APP_DIRECTORY_STOREFRONT
                        ? { applicationId: r, skuId: void 0 }
                        : ((0, A.u)(r) ?? { applicationId: void 0, skuId: void 0 }),
                l = k.A.getGuildId() ?? void 0;
            return (
                null == a
                    ? (0, H.A)(e)
                    : (B.default.track(j.HAw.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                          application_id: a,
                          device_platform: i.Fr ? "mobile_web" : "desktop_web",
                          guild_id: l,
                          channel_id: x.Ay.getChannelId(),
                      }),
                      n
                          .e("138042")
                          .then(n.bind(n, 837057))
                          .then((e) => {
                              let { transitionToGlobalDiscovery: t } = e,
                                  { GlobalDiscoveryTab: i } = n(488995),
                                  { GlobalDiscoveryAppsSections: r } = n(435220);
                              t({
                                  tab: i.APPS,
                                  applicationId: a,
                                  section: (0, m.A)(r, T.type === f.I.APP_DIRECTORY_PROFILE ? r.ABOUT : r.STORE),
                                  skuId: s,
                              });
                          })),
                !0
            );
        };
    if (null != T && T.type === f.I.ACTIVITY_BOOKMARK)
        return (e) => {
            e?.preventDefault();
            let { code: t, url: n } = T,
                i = h.A.getApplication(t),
                r = new URL(n),
                l = r.searchParams.get("referrer_id") ?? void 0,
                o = (0, _.A)(),
                { currentChannelId: E, instanceId: A, isCurrentlyInInstance: f, canLaunchInChannel: p } = (0, I.t)(t);
            if (p)
                return (
                    !f &&
                    null != E &&
                    ((0, u.d9)(t, r.searchParams.get("link_id"), r.searchParams.get("custom_id"))
                        .then(async (e) => {
                            let { customId: n } = e;
                            await (0, d.su)({
                                channelId: E,
                                applicationId: t,
                                isStart: null == A,
                                embeddedActivitiesManager: o,
                                customId: n,
                                referrerId: l,
                                analyticsLocations: a,
                            });
                        })
                        .catch(() => {}),
                    !0)
                );
            {
                let e = i?.bot?.id;
                return (
                    null != e &&
                    (s.A.openPrivateChannel({ recipientIds: e })
                        .then(async (e) => {
                            let { customId: n } = await (0, u.d9)(
                                t,
                                r.searchParams.get("link_id"),
                                r.searchParams.get("custom_id"),
                            );
                            (0, c.A)({
                                targetApplicationId: t,
                                channelId: e,
                                analyticsLocations: a,
                                customId: n,
                                referrerId: l,
                            });
                        })
                        .catch(() => {}),
                    !0)
                );
            }
        };
    if (null != T && T.type === f.I.GUILD_PRODUCT)
        return (e) => {
            e?.preventDefault();
            let [t, i] = T.code.split("-");
            return (
                Promise.all([n.e("521574"), n.e("749607")])
                    .then(n.bind(n, 811546))
                    .then((e) => {
                        let { openGuildProductLink: n } = e;
                        n(t, i);
                    }),
                !0
            );
        };
    if (null != T && T.type === f.I.SOCIAL_LAYER_STOREFRONT)
        return (e) => {
            let t = (0, D.rg)(T.code);
            if (null == t) return !1;
            let i = t.scopeId;
            if (t.skuIds.length > 1)
                return (
                    e?.preventDefault(),
                    n
                        .e("831445")
                        .then(n.bind(n, 44724))
                        .then((e) => {
                            let { default: t } = e;
                            t({ guildId: i });
                        }),
                    !0
                );
            e?.preventDefault();
            let [r] = t.skuIds;
            return (
                n
                    .e("831445")
                    .then(n.bind(n, 44724))
                    .then((e) => {
                        let { navigateToSocialLayerStorefrontWithGuildPreview: t } = e;
                        t({ guildId: i, skuId: r });
                    }),
                !0
            );
        };
    if (null != T && T.type === f.I.SOCIAL_LAYER_STOREFRONT_APP)
        return (e) => {
            let t = (0, D.rg)(T.code);
            if (null == t) return !1;
            let i = t.scopeId;
            if (t.skuIds.length > 1)
                return (
                    e?.preventDefault(),
                    n
                        .e("831445")
                        .then(n.bind(n, 44724))
                        .then((e) => {
                            let { default: t } = e;
                            t({ applicationId: i });
                        }),
                    !0
                );
            e?.preventDefault();
            let [r] = t.skuIds,
                a = y.A.getGuildIdFromApplicationId(i);
            if (null != a)
                return (
                    n
                        .e("831445")
                        .then(n.bind(n, 44724))
                        .then((e) => {
                            let { default: t } = e;
                            t({ guildId: a, skuId: r });
                        }),
                    !0
                );
        };
    if (null != T && T.type === f.I.QUESTS_EMBED && (0, O.s)())
        return (e) => {
            e?.preventDefault();
            let { search: t } = V.A.toURLSafe(T.url) ?? {};
            if (null != t) {
                let e = new URLSearchParams(t);
                (e.get("sort"), e.get("filter"));
            }
            return ((0, R.m)({ fromContent: r.u.QUEST_SHARE_LINK, questId: T.code }), !0);
        };
    if (null != T && T.type === f.I.GAME_PROFILE)
        return (e) => {
            e?.preventDefault();
            let { GameProfileSources: t } = n(409626),
                i = T.code,
                r = null != o && null != l ? G.A.getMessage(o, l)?.author.id : void 0;
            return (
                Promise.resolve()
                    .then(n.bind(n, 60465))
                    .then((e) => {
                        let { default: n } = e;
                        n.openGameProfileModal({
                            gameId: i,
                            source: t.Deeplink,
                            sourceUserId: r,
                            gameProfileModalChecks: { shouldOpenGameProfile: !0, gameId: i },
                        });
                    }),
                !0
            );
        };
    let { host: g, hostname: S, pathname: M, search: P, hash: U } = V.A.toURLSafe(e) ?? {},
        w = V.A.isDiscordHostname(S ?? null) || V.A.isDiscordLocalhost(g ?? null, S ?? null);
    if (w && (M?.startsWith("/application-directory") || M?.startsWith("/discovery/applications"))) {
        let e = M.split("/"),
            t = M?.startsWith("/discovery/applications"),
            i = e[t ? 3 : 2],
            r = "search" === i,
            a = t && "categories" === i && "featured" !== e[4];
        return (t) => {
            let i, s, l;
            if ((t?.preventDefault(), r)) {
                let e = new URLSearchParams(P);
                ((i = e.get("q") ?? void 0), (s = e.get("category_id") ?? void 0), (l = e.get("page") ?? void 0));
            } else a && (s = e[4]);
            return (
                n
                    .e("138042")
                    .then(n.bind(n, 837057))
                    .then((e) => {
                        let { transitionToGlobalDiscovery: t } = e,
                            { GlobalDiscoveryTab: r } = n(488995);
                        t({
                            tab: r.APPS,
                            categoryId: null == s || Number.isNaN(s) ? void 0 : Number(s),
                            page: null == l || Number.isNaN(l) ? void 0 : Number(l),
                            query: i,
                        });
                    }),
                !0
            );
        };
    }
    if (null != M && w && V.A.isAppRoute(M)) {
        let e = { navigationReplace: !1, openChannel: !0 };
        return (
            null != P && (e.search = P), null != U && (e.hash = U), (t) => (t?.preventDefault(), (0, C.A)(M, e), !0)
        );
    }
    if (w && M?.startsWith("/users/")) {
        let e = M.match(/^\/users\/(\d+)/);
        if (null != e) {
            let t = e[1];
            return (e) => (
                e?.preventDefault(),
                Promise.resolve()
                    .then(n.bind(n, 402860))
                    .then((e) => {
                        let { openUserProfileModal: n } = e;
                        n({ userId: t, sourceAnalyticsLocations: a });
                    }),
                !0
            );
        }
    }
    if (null != M && w) {
        let { getOAuth2AuthorizeProps: t, openOAuth2ModalWithCreateGuildModal: i } = n(887909),
            r = t(e);
        if (null != r)
            return (e) => (
                e?.preventDefault(),
                null != T &&
                    T.type === f.I.APP_OAUTH2_LINK &&
                    E.Ay.trackWithMetadata(j.HAw.APP_OAUTH2_LINK_EMBED_URL_CLICKED, { application_id: r.clientId }),
                i(r),
                !0
            );
    }
    let F = (0, N.SK)(M);
    if (null != M && w && null != F)
        return (e) => {
            e?.preventDefault();
            let { guildId: t, guildEventId: n } = F;
            return (K(t, n), !0);
        };
    if (w && M?.startsWith("/settings/")) {
        let { openUserSettings: e } = n(766075),
            { parseSettingsUrl: t, trackParseSettingsUrl: i } = n(718446);
        return (n) => {
            n?.preventDefault();
            let r = t({ path: M, search: P });
            return (
                i(r, "link_click"), e(r.target, { analyticsLocations: a, path: r.path, searchParams: r.params }), !0
            );
        };
    }
    if (w && M?.startsWith("/playground")) {
        let { parsePlaygroundUrl: e } = n(682492),
            { openPlayground: t } = n(965042),
            { collection: i, story: r, controlOverrides: a } = e(M, P);
        return (e) => (e?.preventDefault(), t(i, r, a), !0);
    }
    return w && M?.startsWith("/discovery/quests")
        ? (e) => (e?.preventDefault(), (0, R.m)({ fromContent: r.u.QUEST_BADGE }), !0)
        : w && M?.startsWith("/quest-home")
          ? (e) => (e?.preventDefault(), (0, L.pX)(j.BVt.QUEST_HOME + (P ?? "")), !0)
          : w && M?.startsWith("/quest-preview")
            ? (e) => (
                  e?.preventDefault(),
                  (0, L.pX)(j.BVt.QUEST_HOME + `?tab=preview_tool&quest_id=${M.split("/").at(-1)}`),
                  !0
              )
            : w && M?.startsWith("/discovery/servers")
              ? (e) => (
                    e?.preventDefault(),
                    n
                        .e("138042")
                        .then(n.bind(n, 837057))
                        .then((e) => {
                            let { transitionToGlobalDiscovery: t } = e,
                                { GlobalDiscoveryTab: i } = n(488995);
                            t({ tab: i.SERVERS });
                        }),
                    !0
                )
              : t || null == (0, b.m)(e)
                ? void 0
                : (t) => (t?.preventDefault(), v.A.show(e), !0);
}
