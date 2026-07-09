"use strict";
n.r(t), n.d(t, { default: () => $ }), n(323874), n(14289), n(35956), n(134528), n(947204);
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
    p = n(833291),
    T = n(707592),
    m = n(698441),
    g = n(268313),
    S = n(842241),
    N = n(376943),
    C = n(741231),
    R = n(971276),
    O = n(216934),
    L = n(976860),
    D = n(832163),
    y = n(788995),
    v = n(432e3);
n(809733);
var b = n(280450),
    M = n(696451),
    P = n(71393),
    U = n(299091),
    w = n(232835),
    G = n(309010),
    x = n(967198),
    k = n(711014),
    F = n(174459),
    V = n(998218),
    B = n(975807),
    H = n(652215);
async function j(e, t, n) {
    await a.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: e, code: t, context: H.BRT.APP, invite_instance_id: n });
}
async function W(e, t) {
    let n = e.code,
        i = (0, S._U)(n, t),
        r = U.A.getInvite(n);
    if (null == r) {
        let { invite: e } = await o.Ay.resolveInvite(n, "Markdown Link", { inviteInstanceId: i });
        r = e ?? void 0;
    }
    if (null == r) return;
    if (r.state === H.elq.EXPIRED || r.state === H.elq.BANNED || r.state === H.elq.ERROR)
        return void (await j(r, n, i));
    let a = k.Ay.getFlattenedGuildIds(),
        s = r?.guild?.id,
        l = null != s && a.includes(s),
        d = !1;
    if (l && null != r.roles && r.roles.length > 0) {
        let e = b.default.getId(),
            t = M.Ay.getMember(s, e),
            n = new Set(t?.roles ?? []);
        d = r.roles.some((e) => !n.has(e.id));
    }
    l && !d ? o.Ay.transitionToInviteSync(r) : await j(r, n, i);
}
async function Y(e, t) {
    function i() {
        {
            let { showInaccessibleLinkModal: e } = n(9588);
            e({ kind: "channel" });
        }
    }
    if (null == e || "" === e) return void i();
    let r = m.Ay.getGuildScheduledEvent(t);
    if (null == r)
        try {
            let { default: i } = await Promise.resolve().then(n.bind(n, 496092));
            r = await i.fetchGuildEvent(e, t);
        } catch {
            i();
            return;
        }
    if (null == r) return void i();
    if (null == P.A.getGuild(e))
        try {
            await l.A.joinGuild(e, { lurker: !0, source: H.Q4z.GUILD_EVENT_EMBED }), await l.A.transitionToGuildSync(e);
        } catch (e) {
            e.body?.code === H.t02.UNKNOWN_GUILD && i();
            return;
        }
    x.A.getGuildId() !== e && (0, C.A)(H.BVt.CHANNEL(e)), (0, T.uR)({ eventId: r.id });
}
n(758836), n(188275);
let K = { skipExtensionCheck: void 0, analyticsLocations: [] };
function $(e) {
    let {
            skipExtensionCheck: t,
            analyticsLocations: a,
            messageId: l,
            channelId: o,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : K,
        T = (0, p.br)(e);
    if (null != T && (T.type === f.I.INVITE || T.type === f.I.EMBEDDED_ACTIVITY_INVITE))
        return (e) => (e?.preventDefault(), W(T, l), !0);
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
                l = x.A.getGuildId() ?? void 0;
            return (
                null == a
                    ? (0, B.A)(e)
                    : (F.default.track(H.HAw.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                          application_id: a,
                          device_platform: i.Fr ? "mobile_web" : "desktop_web",
                          guild_id: l,
                          channel_id: G.A.getChannelId(),
                      }),
                      n
                          .e("38042")
                          .then(n.bind(n, 837057))
                          .then((e) => {
                              let { transitionToGlobalDiscovery: t } = e,
                                  { GlobalDiscoveryTab: i } = n(488995),
                                  { GlobalDiscoveryAppsSections: r } = n(435220);
                              t({
                                  tab: i.APPS,
                                  applicationId: a,
                                  section: (0, g.A)(r, T.type === f.I.APP_DIRECTORY_PROFILE ? r.ABOUT : r.STORE),
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
                Promise.all([n.e("21574"), n.e("49607")])
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
            e?.preventDefault();
            let [t, i] = T.code.split("-");
            return (
                n
                    .e("31445")
                    .then(n.bind(n, 44724))
                    .then((e) => {
                        let { navigateToSocialLayerStorefrontWithGuildPreview: n } = e;
                        n({ guildId: i, skuId: t });
                    }),
                !0
            );
        };
    if (null != T && T.type === f.I.SOCIAL_LAYER_STOREFRONT_APP)
        return (e) => {
            e?.preventDefault();
            let [t, i] = T.code.split("-"),
                r = D.A.getGuildIdFromApplicationId(i);
            if (null != r)
                return (
                    n
                        .e("31445")
                        .then(n.bind(n, 44724))
                        .then((e) => {
                            let { default: n } = e;
                            n({ guildId: r, skuId: t });
                        }),
                    !0
                );
        };
    if (null != T && T.type === f.I.QUESTS_EMBED && (0, R.s)())
        return (e) => {
            e?.preventDefault();
            let { search: t } = V.A.toURLSafe(T.url) ?? {};
            if (null != t) {
                let e = new URLSearchParams(t);
                e.get("sort"), e.get("filter");
            }
            return (0, O.m)({ fromContent: r.u.QUEST_SHARE_LINK, questId: T.code }), !0;
        };
    if (null != T && T.type === f.I.GAME_PROFILE)
        return (e) => {
            e?.preventDefault();
            let { GameProfileSources: t } = n(409626),
                i = T.code,
                r = null != o && null != l ? w.A.getMessage(o, l)?.author.id : void 0;
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
    let { host: m, hostname: S, pathname: b, search: M, hash: P } = V.A.toURLSafe(e) ?? {},
        U = V.A.isDiscordHostname(S ?? null) || V.A.isDiscordLocalhost(m ?? null, S ?? null);
    if (U && (b?.startsWith("/application-directory") || b?.startsWith("/discovery/applications"))) {
        let e = b.split("/"),
            t = b?.startsWith("/discovery/applications"),
            i = e[t ? 3 : 2],
            r = "search" === i,
            a = t && "categories" === i && "featured" !== e[4];
        return (t) => {
            let i, s, l;
            if ((t?.preventDefault(), r)) {
                let e = new URLSearchParams(M);
                (i = e.get("q") ?? void 0), (s = e.get("category_id") ?? void 0), (l = e.get("page") ?? void 0);
            } else a && (s = e[4]);
            return (
                n
                    .e("38042")
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
    if (null != b && U && V.A.isAppRoute(b)) {
        let e = { navigationReplace: !1, openChannel: !0 };
        return null != M && (e.search = M), null != P && (e.hash = P), (t) => (t?.preventDefault(), (0, C.A)(b, e), !0);
    }
    if (U && b?.startsWith("/users/")) {
        let e = b.match(/^\/users\/(\d+)/);
        if (null != e) {
            let t = e[1];
            return (e) => (
                e?.preventDefault(),
                Promise.resolve()
                    .then(n.bind(n, 975732))
                    .then((e) => {
                        let { openUserProfileModal: n } = e;
                        n({ userId: t, sourceAnalyticsLocations: a });
                    }),
                !0
            );
        }
    }
    if (null != b && U) {
        let { getOAuth2AuthorizeProps: t, openOAuth2ModalWithCreateGuildModal: i } = n(887909),
            r = t(e);
        if (null != r)
            return (e) => (
                e?.preventDefault(),
                null != T &&
                    T.type === f.I.APP_OAUTH2_LINK &&
                    E.Ay.trackWithMetadata(H.HAw.APP_OAUTH2_LINK_EMBED_URL_CLICKED, { application_id: r.clientId }),
                i(r),
                !0
            );
    }
    let k = (0, N.SK)(b);
    if (null != b && U && null != k)
        return (e) => {
            e?.preventDefault();
            let { guildId: t, guildEventId: n } = k;
            return Y(t, n), !0;
        };
    if (U && b?.startsWith("/settings/")) {
        let { openUserSettings: e } = n(766075),
            { parseSettingsUrl: t, trackParseSettingsUrl: i } = n(718446);
        return (n) => {
            n?.preventDefault();
            let r = t({ path: b, search: M });
            return i(r, "link_click"), e(r.target, { analyticsLocations: a, path: r.path, searchParams: r.params }), !0;
        };
    }
    if (U && b?.startsWith("/playground")) {
        let { parsePlaygroundUrl: e } = n(682492),
            { openPlayground: t } = n(965042),
            { collection: i, story: r, controlOverrides: a } = e(b, M);
        return (e) => (e?.preventDefault(), t(i, r, a), !0);
    }
    return U && b?.startsWith("/discovery/quests")
        ? (e) => (e?.preventDefault(), (0, O.m)({ fromContent: r.u.QUEST_BADGE }), !0)
        : U && b?.startsWith("/quest-home")
          ? (e) => (e?.preventDefault(), (0, L.pX)(H.BVt.QUEST_HOME + (M ?? "")), !0)
          : U && b?.startsWith("/quest-preview")
            ? (e) => (
                  e?.preventDefault(),
                  (0, L.pX)(H.BVt.QUEST_HOME + `?tab=preview_tool&quest_id=${b.split("/").at(-1)}`),
                  !0
              )
            : U && b?.startsWith("/discovery/servers")
              ? (e) => (
                    e?.preventDefault(),
                    n
                        .e("38042")
                        .then(n.bind(n, 837057))
                        .then((e) => {
                            let { transitionToGlobalDiscovery: t } = e,
                                { GlobalDiscoveryTab: i } = n(488995);
                            t({ tab: i.SERVERS });
                        }),
                    !0
                )
              : t || null == (0, v.m)(e)
                ? void 0
                : (t) => (t?.preventDefault(), y.A.show(e), !0);
}
