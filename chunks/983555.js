(n.r(t), n.d(t, { default: () => K }), n(323874), n(14289), n(35956), n(134528), n(947204));
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
    E = n(725606),
    A = n(167189),
    h = n(721779),
    f = n(366430),
    I = n(707592),
    p = n(698441),
    T = n(268313),
    m = n(21599),
    g = n(376943),
    S = n(741231),
    N = n(971276),
    C = n(216934),
    O = n(976860),
    R = n(832163),
    L = n(227327),
    y = n(788995),
    D = n(432e3);
n(809733);
var v = n(280450),
    b = n(696451),
    M = n(71393),
    P = n(299091),
    U = n(232835),
    w = n(309010),
    G = n(967198),
    x = n(711014),
    k = n(174459),
    F = n(998218),
    B = n(975807),
    V = n(652215);
async function H(e, t, n) {
    await a.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: e, code: t, context: V.BRT.APP, invite_instance_id: n });
}
async function j(e, t) {
    let n = e.code,
        i = (0, m._U)(n, t),
        r = P.A.getInvite(n);
    if (null == r || r.state === V.elq.ERROR) {
        let { invite: e } = await o.Ay.resolveInvite(n, "Markdown Link", { inviteInstanceId: i });
        r = e ?? void 0;
    }
    if (null == r) return;
    if (r.state === V.elq.EXPIRED || r.state === V.elq.BANNED || r.state === V.elq.ERROR)
        return void (await H(r, n, i));
    let a = x.Ay.getFlattenedGuildIds(),
        s = r?.guild?.id,
        l = null != s && a.includes(s),
        d = !1;
    if (l && null != r.roles && r.roles.length > 0) {
        let e = v.default.getId(),
            t = b.Ay.getMember(s, e),
            n = new Set(t?.roles ?? []);
        d = r.roles.some((e) => !n.has(e.id));
    }
    l && !d ? o.Ay.transitionToInvite(r, { forceTransition: !0 }) : await H(r, n, i);
}
async function W(e, t) {
    function i() {
        {
            let { showInaccessibleLinkModal: e } = n(9588);
            e({ kind: "channel" });
        }
    }
    if (null == e || "" === e) return void i();
    let r = p.Ay.getGuildScheduledEvent(t);
    if (null == r)
        try {
            let { default: i } = await Promise.resolve().then(n.bind(n, 496092));
            r = await i.fetchGuildEvent(e, t, { priority: "foreground" });
        } catch {
            i();
            return;
        }
    if (null == r) return void i();
    if (null == M.A.getGuild(e))
        try {
            (await l.A.joinGuild(e, { lurker: !0, source: V.Q4z.GUILD_EVENT_EMBED }),
                await l.A.transitionToGuildSync(e));
        } catch (e) {
            e.body?.code === V.t02.UNKNOWN_GUILD && i();
            return;
        }
    (G.A.getGuildId() !== e && (0, S.A)(V.BVt.CHANNEL(e)), (0, I.uR)({ eventId: r.id }));
}
(n(758836), n(188275));
let Y = { skipExtensionCheck: void 0, analyticsLocations: [] };
function K(e) {
    let {
            skipExtensionCheck: t,
            analyticsLocations: a,
            messageId: l,
            channelId: o,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Y,
        I = (0, h.br)(e);
    if (null != I && (I.type === A.I.INVITE || I.type === A.I.EMBEDDED_ACTIVITY_INVITE))
        return (e) => (e?.preventDefault(), j(I, l), !0);
    if (
        null != I &&
        (I.type === A.I.APP_DIRECTORY_PROFILE ||
            I.type === A.I.APP_DIRECTORY_STOREFRONT ||
            I.type === A.I.APP_DIRECTORY_STOREFRONT_SKU)
    )
        return (t) => {
            t?.preventDefault();
            let { code: r } = I,
                { applicationId: a, skuId: s } =
                    I.type === A.I.APP_DIRECTORY_PROFILE || I.type === A.I.APP_DIRECTORY_STOREFRONT
                        ? { applicationId: r, skuId: void 0 }
                        : ((0, u.u)(r) ?? { applicationId: void 0, skuId: void 0 }),
                l = G.A.getGuildId() ?? void 0;
            return (
                null == a
                    ? (0, B.A)(e)
                    : (k.default.track(V.HAw.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                          application_id: a,
                          device_platform: i.Fr ? "mobile_web" : "desktop_web",
                          guild_id: l,
                          channel_id: w.Ay.getChannelId(),
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
                                  section: (0, T.A)(r, I.type === A.I.APP_DIRECTORY_PROFILE ? r.ABOUT : r.STORE),
                                  skuId: s,
                              });
                          })),
                !0
            );
        };
    if (null != I && I.type === A.I.ACTIVITY_BOOKMARK)
        return (e) => {
            e?.preventDefault();
            let { code: t, url: n } = I,
                i = _.A.getApplication(t),
                r = new URL(n),
                l = r.searchParams.get("referrer_id") ?? void 0,
                { currentChannelId: o, isCurrentlyInInstance: c, canLaunchInChannel: u } = (0, E.t)(t);
            return (
                !c &&
                (!!u || i?.bot != null || !!(0, f.U4)(i)) &&
                ((0, d.d9)(t, r.searchParams.get("link_id"), r.searchParams.get("custom_id"))
                    .then((e) => {
                        let { customId: n } = e;
                        return s.A.launch({
                            applicationId: t,
                            channelId: u ? o : null,
                            fromLink: !0,
                            customId: n,
                            referrerId: l,
                            analyticsLocations: a,
                        });
                    })
                    .catch(() => {}),
                !0)
            );
        };
    if (null != I && I.type === A.I.GUILD_PRODUCT)
        return (e) => {
            e?.preventDefault();
            let [t, i] = I.code.split("-");
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
    if (null != I && I.type === A.I.SOCIAL_LAYER_STOREFRONT)
        return (e) => {
            let t = (0, L.rg)(I.code);
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
    if (null != I && I.type === A.I.SOCIAL_LAYER_STOREFRONT_APP)
        return (e) => {
            let t = (0, L.rg)(I.code);
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
                a = R.A.getGuildIdFromApplicationId(i);
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
    if (null != I && I.type === A.I.QUESTS_EMBED && (0, N.s)())
        return (e) => {
            e?.preventDefault();
            let { search: t } = F.A.toURLSafe(I.url) ?? {};
            if (null != t) {
                let e = new URLSearchParams(t);
                (e.get("sort"), e.get("filter"));
            }
            return ((0, C.m)({ fromContent: r.u.QUEST_SHARE_LINK, questId: I.code }), !0);
        };
    if (null != I && I.type === A.I.GAME_PROFILE)
        return (e) => {
            e?.preventDefault();
            let { GameProfileSources: t } = n(409626),
                i = I.code,
                r = null != o && null != l ? U.A.getMessage(o, l)?.author.id : void 0;
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
    let { host: p, hostname: m, pathname: v, search: b, hash: M } = F.A.toURLSafe(e) ?? {},
        P = F.A.isDiscordHostname(m ?? null) || F.A.isDiscordLocalhost(p ?? null, m ?? null);
    if (P && (v?.startsWith("/application-directory") || v?.startsWith("/discovery/applications"))) {
        let e = v.split("/"),
            t = v?.startsWith("/discovery/applications"),
            i = e[t ? 3 : 2],
            r = "search" === i,
            a = t && "categories" === i && "featured" !== e[4];
        return (t) => {
            let i, s, l;
            if ((t?.preventDefault(), r)) {
                let e = new URLSearchParams(b);
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
    if (null != v && P && F.A.isAppRoute(v)) {
        let e = { navigationReplace: !1, openChannel: !0 };
        return (
            null != b && (e.search = b), null != M && (e.hash = M), (t) => (t?.preventDefault(), (0, S.A)(v, e), !0)
        );
    }
    if (P && v?.startsWith("/users/")) {
        let e = v.match(/^\/users\/(\d+)/);
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
    if (null != v && P) {
        let { getOAuth2AuthorizeProps: t, openOAuth2ModalWithCreateGuildModal: i } = n(887909),
            r = t(e);
        if (null != r)
            return (e) => (
                e?.preventDefault(),
                null != I &&
                    I.type === A.I.APP_OAUTH2_LINK &&
                    c.Ay.trackWithMetadata(V.HAw.APP_OAUTH2_LINK_EMBED_URL_CLICKED, { application_id: r.clientId }),
                i(r),
                !0
            );
    }
    let x = (0, g.SK)(v);
    if (null != v && P && null != x)
        return (e) => {
            e?.preventDefault();
            let { guildId: t, guildEventId: n } = x;
            return (W(t, n), !0);
        };
    if (P && v?.startsWith("/settings/")) {
        let { openUserSettings: e } = n(766075),
            { parseSettingsUrl: t, trackParseSettingsUrl: i } = n(718446);
        return (n) => {
            n?.preventDefault();
            let r = t({ path: v, search: b });
            return (
                i(r, "link_click"), e(r.target, { analyticsLocations: a, path: r.path, searchParams: r.params }), !0
            );
        };
    }
    if (P && v === V.BVt.FEATURE("badges"))
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
    if (P && v?.startsWith("/playground")) {
        let { parsePlaygroundUrl: e } = n(682492),
            { collection: t, story: i, controlOverrides: r } = e(v, b);
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
    if (P && v?.startsWith("/discovery/quests"))
        return (e) => (e?.preventDefault(), (0, C.m)({ fromContent: r.u.QUEST_BADGE }), !0);
    if (P && v?.startsWith("/quest-home"))
        return (e) => (e?.preventDefault(), (0, O.pX)(V.BVt.QUEST_HOME, { search: b, hash: M }), !0);
    if (P && v?.startsWith("/quest-bar-preview")) {
        let e = new URLSearchParams(b ?? "").get("ad_creative_ids");
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
    return P && v?.startsWith("/quest-preview")
        ? (e) => (
              e?.preventDefault(),
              (0, O.pX)(V.BVt.QUEST_HOME + `?tab=preview_tool&quest_id=${v.split("/").at(-1)}`),
              !0
          )
        : P && v?.startsWith("/discovery/servers")
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
          : t || null == (0, D.m)(e)
            ? void 0
            : (t) => (t?.preventDefault(), y.A.show(e), !0);
}
