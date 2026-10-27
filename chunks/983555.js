(n.r(t), n.d(t, { default: () => $ }), n(323874), n(14289), n(35956), n(134528), n(947204));
var i = n(607399),
    r = n(696292),
    a = n(73153),
    s = n(452295),
    l = n(66834),
    o = n(376728),
    d = n(257269),
    c = n(666860),
    u = n(121401),
    _ = n(587895),
    E = n(909338),
    A = n(725606),
    h = n(167189),
    f = n(721779),
    I = n(366430),
    p = n(707592),
    T = n(698441),
    m = n(268313),
    g = n(21599),
    S = n(376943),
    N = n(741231),
    C = n(971276),
    O = n(216934),
    R = n(976860),
    L = n(832163),
    y = n(227327),
    D = n(788995),
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
    B = n(998218),
    V = n(975807),
    H = n(652215);
async function j(e, t, n) {
    await a.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: e, code: t, context: H.BRT.APP, invite_instance_id: n });
}
async function W(e, t) {
    let n = e.code,
        i = (0, g._U)(n, t),
        r = U.A.getInvite(n);
    if (null == r || r.state === H.elq.ERROR) {
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
    l && !d ? o.Ay.transitionToInvite(r, { forceTransition: !0 }) : await j(r, n, i);
}
async function Y(e, t) {
    function i() {
        {
            let { showInaccessibleLinkModal: e } = n(9588);
            e({ kind: "channel" });
        }
    }
    if (null == e || "" === e) return void i();
    let r = T.Ay.getGuildScheduledEvent(t);
    if (null == r)
        try {
            let { default: i } = await Promise.resolve().then(n.bind(n, 496092));
            r = await i.fetchGuildEvent(e, t, { priority: "foreground" });
        } catch {
            i();
            return;
        }
    if (null == r) return void i();
    if (null == P.A.getGuild(e))
        try {
            (await l.A.joinGuild(e, { lurker: !0, source: H.Q4z.GUILD_EVENT_EMBED }),
                await l.A.transitionToGuildSync(e));
        } catch (e) {
            e.body?.code === H.t02.UNKNOWN_GUILD && i();
            return;
        }
    (x.A.getGuildId() !== e && (0, N.A)(H.BVt.CHANNEL(e)), (0, p.uR)({ eventId: r.id }));
}
(n(758836), n(188275));
let K = { skipExtensionCheck: void 0, analyticsLocations: [] };
function $(e) {
    let {
            skipExtensionCheck: t,
            analyticsLocations: a,
            messageId: l,
            channelId: o,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : K,
        p = (0, f.br)(e);
    if (null != p && (p.type === h.I.INVITE || p.type === h.I.EMBEDDED_ACTIVITY_INVITE))
        return (e) => (e?.preventDefault(), W(p, l), !0);
    if (
        null != p &&
        (p.type === h.I.APP_DIRECTORY_PROFILE ||
            p.type === h.I.APP_DIRECTORY_STOREFRONT ||
            p.type === h.I.APP_DIRECTORY_STOREFRONT_SKU)
    )
        return (t) => {
            t?.preventDefault();
            let { code: r } = p,
                { applicationId: a, skuId: s } =
                    p.type === h.I.APP_DIRECTORY_PROFILE || p.type === h.I.APP_DIRECTORY_STOREFRONT
                        ? { applicationId: r, skuId: void 0 }
                        : ((0, u.u)(r) ?? { applicationId: void 0, skuId: void 0 }),
                l = x.A.getGuildId() ?? void 0;
            return (
                null == a
                    ? (0, V.A)(e)
                    : (F.default.track(H.HAw.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                          application_id: a,
                          device_platform: i.Fr ? "mobile_web" : "desktop_web",
                          guild_id: l,
                          channel_id: G.Ay.getChannelId(),
                      }),
                      Promise.resolve()
                          .then(n.bind(n, 837057))
                          .then((e) => {
                              let { transitionToGlobalDiscovery: t } = e,
                                  { GlobalDiscoveryTab: i } = n(488995),
                                  { GlobalDiscoveryAppsSections: r } = n(435220);
                              t({
                                  tab: i.APPS,
                                  applicationId: a,
                                  section: (0, m.A)(r, p.type === h.I.APP_DIRECTORY_PROFILE ? r.ABOUT : r.STORE),
                                  skuId: s,
                              });
                          })),
                !0
            );
        };
    if (null != p && p.type === h.I.ACTIVITY_BOOKMARK)
        return (e) => {
            e?.preventDefault();
            let { code: t, url: n } = p,
                i = _.A.getApplication(t),
                r = new URL(n),
                l = r.searchParams.get("referrer_id") ?? void 0,
                { currentChannelId: o, isCurrentlyInInstance: c, canLaunchInChannel: u } = (0, A.t)(t);
            return (
                !c &&
                (!!u || i?.bot != null || !!(0, I.U4)(i)) &&
                ((0, d.d9)(t, r.searchParams.get("link_id"), r.searchParams.get("custom_id"))
                    .then((e) => {
                        let { customId: n } = e;
                        return s.A.launch({
                            applicationId: t,
                            channelId: u ? o : null,
                            fromLink: !0,
                            linkChannelId: (0, E.D)(r),
                            customId: n,
                            referrerId: l,
                            analyticsLocations: a,
                        });
                    })
                    .catch(() => {}),
                !0)
            );
        };
    if (null != p && p.type === h.I.GUILD_PRODUCT)
        return (e) => {
            e?.preventDefault();
            let [t, i] = p.code.split("-");
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
    if (null != p && p.type === h.I.SOCIAL_LAYER_STOREFRONT)
        return (e) => {
            let t = (0, y.rg)(p.code);
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
    if (null != p && p.type === h.I.SOCIAL_LAYER_STOREFRONT_APP)
        return (e) => {
            let t = (0, y.rg)(p.code);
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
                a = L.A.getGuildIdFromApplicationId(i);
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
    if (null != p && p.type === h.I.QUESTS_EMBED && (0, C.s)())
        return (e) => {
            e?.preventDefault();
            let { search: t } = B.A.toURLSafe(p.url) ?? {};
            if (null != t) {
                let e = new URLSearchParams(t);
                (e.get("sort"), e.get("filter"));
            }
            return ((0, O.m)({ fromContent: r.u.QUEST_SHARE_LINK, questId: p.code }), !0);
        };
    if (null != p && p.type === h.I.GAME_PROFILE)
        return (e) => {
            e?.preventDefault();
            let { GameProfileSources: t } = n(409626),
                i = p.code,
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
    let { host: T, hostname: g, pathname: b, search: M, hash: P } = B.A.toURLSafe(e) ?? {},
        U = B.A.isDiscordHostname(g ?? null) || B.A.isDiscordLocalhost(T ?? null, g ?? null);
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
                ((i = e.get("q") ?? void 0), (s = e.get("category_id") ?? void 0), (l = e.get("page") ?? void 0));
            } else a && (s = e[4]);
            return (
                Promise.resolve()
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
    if (null != b && U && B.A.isAppRoute(b)) {
        let e = { navigationReplace: !1, openChannel: !0 };
        return (
            null != M && (e.search = M), null != P && (e.hash = P), (t) => (t?.preventDefault(), (0, N.A)(b, e), !0)
        );
    }
    if (U && b?.startsWith("/users/")) {
        let e = b.match(/^\/users\/(\d+)/);
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
    if (null != b && U) {
        let { getOAuth2AuthorizeProps: t, openOAuth2ModalWithCreateGuildModal: i } = n(887909),
            r = t(e);
        if (null != r)
            return (e) => (
                e?.preventDefault(),
                null != p &&
                    p.type === h.I.APP_OAUTH2_LINK &&
                    c.Ay.trackWithMetadata(H.HAw.APP_OAUTH2_LINK_EMBED_URL_CLICKED, { application_id: r.clientId }),
                i(r),
                !0
            );
    }
    let k = (0, S.SK)(b);
    if (null != b && U && null != k)
        return (e) => {
            e?.preventDefault();
            let { guildId: t, guildEventId: n } = k;
            return (Y(t, n), !0);
        };
    if (U && b?.startsWith("/settings/")) {
        let { openUserSettings: e } = n(766075),
            { parseSettingsUrl: t, trackParseSettingsUrl: i } = n(718446);
        return (n) => {
            n?.preventDefault();
            let r = t({ path: b, search: M });
            return (
                i(r, "link_click"), e(r.target, { analyticsLocations: a, path: r.path, searchParams: r.params }), !0
            );
        };
    }
    if (U && b === H.BVt.FEATURE("badges"))
        return (e) => (
            e?.preventDefault(),
            n
                .e("644816")
                .then(n.bind(n, 470739))
                .then((e) => {
                    let { openBadgeDirectoryModal: t } = e;
                    t({ viewingCurrentUserBadges: !0 });
                }),
            !0
        );
    if (U && b?.startsWith("/playground")) {
        let { parsePlaygroundUrl: e } = n(682492),
            { collection: t, story: i, controlOverrides: r } = e(b, M);
        return (e) => (
            e?.preventDefault(),
            Promise.all([n.e("60800"), n.e("129263")])
                .then(n.bind(n, 965042))
                .then((e) => {
                    let { openPlayground: n } = e;
                    return n(t, i, r);
                }),
            !0
        );
    }
    if (U && b?.startsWith("/discovery/quests"))
        return (e) => (e?.preventDefault(), (0, O.m)({ fromContent: r.u.QUEST_BADGE }), !0);
    if (U && b?.startsWith("/quest-home"))
        return (e) => (e?.preventDefault(), (0, R.pX)(H.BVt.QUEST_HOME, { search: M, hash: P }), !0);
    if (U && b?.startsWith("/quest-bar-preview")) {
        let e = new URLSearchParams(M ?? "").get("ad_creative_ids");
        if (null != e)
            return (t) => (
                t?.preventDefault(),
                Promise.all([n.e("276863"), n.e("50799")])
                    .then(n.bind(n, 894386))
                    .then((t) => {
                        let { openQuestBarPreview: n } = t;
                        return n(e);
                    }),
                !0
            );
    }
    return U && b?.startsWith("/quest-preview")
        ? (e) => (
              e?.preventDefault(),
              (0, R.pX)(H.BVt.QUEST_HOME + `?tab=preview_tool&quest_id=${b.split("/").at(-1)}`),
              !0
          )
        : U && b?.startsWith("/discovery/servers")
          ? (e) => (
                e?.preventDefault(),
                Promise.resolve()
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
            : (t) => (t?.preventDefault(), D.A.show(e), !0);
}
