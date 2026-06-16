"use strict";
n.d(t, { A: () => e_ }), n(321073), n(938796);
var i = n(735438),
    r = n.n(i),
    s = n(575593),
    a = n(540185),
    o = n(451988),
    l = n(573648),
    u = n(945810);
function c(e) {
    return (0, u.mj)({
        name: e,
        kind: "user",
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
        defaultConfig: { enabled: !1 },
    });
}
class d {
    applicationId;
    widgetTemplateId;
    viewExperiment;
    editExperiment;
    coachmarkExperiment;
    editProfileUpsellImage;
    heroPlaceholderImage;
    miniPreviewImage;
    editProfileUnlinkedDc;
    editProfileLinkedDc;
    suggestedWidgetLinkedDc;
    constructor(e) {
        (this.applicationId = e.application_id),
            (this.widgetTemplateId = e.widget_template_id),
            (this.viewExperiment = c(e.view_experiment)),
            (this.editExperiment = c(e.edit_experiment)),
            (this.coachmarkExperiment = null != e.coachmark_experiment ? c(e.coachmark_experiment) : void 0),
            (this.editProfileUpsellImage = e.edit_profile_upsell_image),
            (this.heroPlaceholderImage = e.hero_placeholder_image),
            (this.miniPreviewImage = e.mini_preview_image),
            (this.editProfileUnlinkedDc = e.edit_profile_unlinked_dc),
            (this.editProfileLinkedDc = e.edit_profile_linked_dc),
            (this.suggestedWidgetLinkedDc = e.suggested_widget_linked_dc);
    }
    isEligibleForEditProfileUpsell() {
        return null != this.editProfileLinkedDc && null != this.editProfileUnlinkedDc;
    }
    isEligibleForSuggestions() {
        return null != this.suggestedWidgetLinkedDc;
    }
}
var _ = n(773669),
    h = n(889227),
    f = n(495544),
    p = n(71393),
    E = n(536802),
    m = n(290863),
    g = n(711014),
    A = n(403362),
    I = n(439174),
    T = n(633075),
    S = n(289173);
function y(e) {
    let t, n;
    if (e?.collectibles == null) return { collectibles: void 0, profileEffect: void 0, profileFrame: void 0 };
    let i = [];
    for (let r of e.collectibles)
        i.push({ skuId: r.sku_id, type: r.type, expiresAt: null != r.expires_at ? new Date(r.expires_at) : void 0 }),
            r.type === s.R.PROFILE_EFFECT
                ? (t = {
                      skuId: r.sku_id,
                      expiresAt: null != r.expires_at ? Math.floor(new Date(r.expires_at).getTime() / 1e3) : void 0,
                  })
                : r.type === s.R.PROFILE_FRAME &&
                  (n = {
                      skuId: r.sku_id,
                      type: s.R.PROFILE_FRAME,
                      expiresAt: null != r.expires_at ? new Date(r.expires_at) : void 0,
                  });
    return { collectibles: i, profileEffect: t, profileFrame: n };
}
var C = n(652215),
    N = n(375708);
let v = Symbol("NO GUILD ID"),
    R = new Map(),
    O = new Set(),
    b = new Map(),
    D = new Map(),
    L = {},
    w = new Map(),
    M = new Map(),
    P = new Map(),
    x = [],
    k = [],
    U = null,
    G = new Map();
function F(e) {
    let t = e.data.type;
    switch (t) {
        case a.x.CURRENT_GAMES:
        case a.x.FAVORITE_GAMES:
        case a.x.PLAYED_GAMES:
        case a.x.WANT_TO_PLAY_GAMES:
            let n = e.data.games.map((e) => ({ applicationId: e.game_id, comment: e.comment, tags: e.tags })),
                i = r().uniqBy(n, "applicationId");
            return new S.Yy({ id: e.id, type: t, games: i });
        case a.x.APPLICATION:
            return new T.R({ id: e.id, applicationId: e.data.application_id });
    }
}
let V = !1,
    B = null;
function j(e, t) {
    let n = null != t ? D.get(e)?.get(t) : b.get(e);
    if (n?.collectibles == null) return;
    let i = [];
    n.collectibles.forEach((n) => {
        if (null == n.expiresAt) return;
        let r = n.expiresAt.getTime() - Date.now();
        r <= 0
            ? i.push(n)
            : (null == L[e] && (L[e] = { [v]: {} }),
              null == L[e][t ?? v] && (L[e][t ?? v] = {}),
              null == L[e][t ?? v][n.skuId] && (L[e][t ?? v][n.skuId] = new o.Ep()),
              L[e][t ?? v][n.skuId].start(Math.min(C.mnr, r), () => {
                  j(e, t);
              }));
    }),
        0 !== i.length &&
            ((n.collectibles = n.collectibles.filter((e) => !i.includes(e))),
            i.forEach((i) => {
                i.type === s.R.PROFILE_EFFECT
                    ? (n.profileEffect = void 0)
                    : i.type === s.R.PROFILE_FRAME && (n.profileFrame = void 0),
                    delete L[e]?.[t ?? v]?.[i.skuId];
            }),
            "guildId" in n ? D.get(e)?.set(n.guildId, n) : b.set(e, n),
            ed.emitChange());
}
function H() {
    R.clear(), O.clear(), b.clear(), D.clear(), w.clear(), M.clear(), P.clear(), (V = !1);
}
function Y(e) {
    let { userId: t } = e;
    O.add(t);
}
function W(e) {
    let { userId: t } = e;
    O.delete(t);
}
function K(e) {
    return r()(e)
        .map((e) => ({ key: e.id, user: new h.A(e), status: m.A.getStatus(e.id) }))
        .sortBy((e) => {
            let { user: t } = e;
            return t.username.toLowerCase();
        })
        .value();
}
function $(e) {
    O.delete(e.userId), w.set(e.userId, K(e.mutualFriends)), M.set(e.userId, e.mutualFriends.length);
}
function z(e) {
    let { userProfile: t, fetchStartedAt: n, guildId: i } = e,
        r = i ?? t.guild_member_profile?.guild_id ?? v;
    if ((R.get(t.user.id)?.delete(r), O.delete(t.user.id), null != t.mutual_guilds)) {
        let e = {};
        t.mutual_guilds.forEach((t) => {
            let { id: n, nick: i } = t,
                r = p.A.getGuild(n);
            null != r && (e[n] = { guild: r, nick: i });
        }),
            P.set(
                t.user.id,
                g.Ay.getFlattenedGuildIds()
                    .filter((t) => null != e[t])
                    .map((t) => ({ guild: e[t].guild, nick: e[t].nick })),
            );
    }
    if (null != t.mutual_friends_count) {
        let e = t.mutual_friends_count;
        M.set(t.user.id, e), 0 === e && w.set(t.user.id, x);
    }
    null != t.mutual_friends && (w.set(t.user.id, K(t.mutual_friends)), M.set(t.user.id, t.mutual_friends.length));
    let s = null != t.premium_since ? new Date(t.premium_since) : null,
        a = null != t.premium_guild_since ? new Date(t.premium_guild_since) : null,
        o = t.application,
        u =
            null != t.badges
                ? t.badges.map((e) => {
                      let t = (0, I.e0)(e.id);
                      if (("premium" === e.id || null != t) && null != s) {
                          let n = N.intl.formatToPlainString(N.t["8zbGNR"], { date: s });
                          return (
                              null != t && (n = N.intl.formatToPlainString(N.t.Hu4jfi, { date: s })),
                              { ...e, description: n }
                          );
                      }
                      return e.id.startsWith("guild_booster_lvl") && null != a
                          ? { ...e, description: N.intl.formatToPlainString(N.t.IWkAq7, { date: a }) }
                          : e;
                  })
                : [];
    null != B && B.userId === t.user.id && (Date.now() > B.expiresAtMs ? (B = null) : q(u, B));
    let c = Date.now();
    if (
        (b.set(t.user.id, {
            ...y(t.user_profile),
            userId: t.user.id,
            banner: t.user_profile?.banner,
            accentColor: t.user_profile?.accent_color,
            themeColors: t.user_profile?.theme_colors,
            popoutAnimationParticleType: t.user_profile?.popout_animation_particle_type,
            bio: t.user_profile?.bio ?? "",
            pronouns: t.user_profile?.pronouns ?? "",
            connectedAccounts: t.connected_accounts.filter((e) => l.A.isSupported(e.type)) ?? [],
            applicationRoleConnections: t.application_role_connections ?? [],
            premiumSince: s,
            premiumType: t.premium_type,
            premiumGuildSince: a,
            fetchStartedAt: n,
            fetchEndedAt: c,
            legacyUsername: t.legacy_username,
            application:
                null != o
                    ? {
                          id: o.id,
                          primarySkuId: o.primary_sku_id,
                          customInstallUrl: o.custom_install_url,
                          installParams: o.install_params,
                          integrationTypesConfig: o.integration_types_config,
                          flags: o.flags,
                          popularApplicationCommandIds: o.popular_application_command_ids,
                          storefront_available: o.storefront_available,
                          name: o.name,
                      }
                    : null,
            badges: u,
            widgets: t.widgets?.map(F).filter(A.Vq),
            wishlistSettings: t.wishlist_settings,
            private: t.private,
        }),
        j(t.user.id),
        null != t.guild_member_profile)
    ) {
        let e = {
                ...y(t.guild_member_profile),
                userId: t.user.id,
                guildId: t.guild_member_profile.guild_id,
                banner: t.guild_member_profile.banner,
                accentColor: t.guild_member_profile.accent_color,
                themeColors: t.guild_member_profile?.theme_colors,
                popoutAnimationParticleType: t.guild_member_profile?.popout_animation_particle_type,
                bio: t.guild_member_profile.bio,
                pronouns: t.guild_member_profile.pronouns,
                badges: t.guild_badges,
                fetchStartedAt: n,
                fetchEndedAt: c,
            },
            i = D.get(t.user.id);
        if (null != i) i.set(t.guild_member_profile.guild_id, e);
        else {
            let n = new Map();
            n.set(t.guild_member_profile.guild_id, e), D.set(t.user.id, n);
        }
        j(t.user.id, t.guild_member_profile.guild_id);
    }
}
function q(e, t) {
    if (null == e) return;
    let n = new Set(e.map((e) => e.id)),
        i = t?.badges.filter((e) => !n.has(e.id));
    return i.length > 0 && e.push(...i), e;
}
function Z(e) {
    let { userId: t, guildId: n, withMutualFriends: i } = e,
        r = n ?? v,
        s = R.get(t);
    if (null != s) s.add(r);
    else {
        let e = new Set();
        e.add(r), R.set(t, e);
    }
    i && O.add(t);
}
function X(e) {
    let { userId: t, guildId: n, apiError: i, fetchStartedAt: r } = e;
    R.get(t)?.delete(n ?? v), O.delete(t);
    let s = b.get(t) ?? {
            connectedAccounts: [],
            applicationRoleConnections: [],
            premiumSince: null,
            premiumGuildSince: null,
            application: null,
            legacyUsername: null,
            userId: t,
            banner: null,
            accentColor: null,
            bio: "",
            pronouns: "",
            premiumType: null,
            fetchStartedAt: 0,
            fetchEndedAt: 0,
            fetchError: void 0,
        },
        a = Date.now();
    if (((s.fetchStartedAt = r), (s.fetchEndedAt = a), (s.fetchError = i), b.set(t, s), null != n)) {
        let e = D.get(t)?.get(n);
        null != e && ((e.fetchStartedAt = r), (e.fetchEndedAt = a), (e.fetchError = i));
    }
    i?.status === 404 && (M.set(t, 0), w.set(t, x), P.set(t, k));
}
function Q(e) {
    V = !0;
}
function J(e) {
    (V = !1),
        null != e.guild_id
            ? (function (e) {
                  let {
                          userId: t,
                          guild_id: n,
                          accent_color: i,
                          banner: r,
                          bio: s,
                          pronouns: a,
                          popout_animation_particle_type: o,
                          theme_colors: l,
                          collectibles: u,
                      } = e,
                      c = D.get(t);
                  if (null == n || null == c) return;
                  let d = c.get(n);
                  null == d ||
                      (c.set(n, {
                          ...d,
                          ...y({ collectibles: u }),
                          accentColor: i,
                          banner: r,
                          bio: s,
                          pronouns: a,
                          popoutAnimationParticleType: o,
                          themeColors: l,
                      }),
                      j(t, n));
              })(e)
            : (function (e) {
                  let {
                          userId: t,
                          accent_color: n,
                          banner: i,
                          bio: r,
                          pronouns: s,
                          popout_animation_particle_type: a,
                          theme_colors: o,
                          collectibles: l,
                      } = e,
                      u = b.get(t);
                  null == u ||
                      (b.set(t, {
                          ...u,
                          ...y({ collectibles: l }),
                          accentColor: n,
                          banner: i,
                          bio: r,
                          pronouns: s,
                          popoutAnimationParticleType: a,
                          themeColors: o,
                      }),
                      j(t));
              })(e);
}
function ee(e) {
    V = !1;
}
function et(e) {
    let { userId: t, widgets: n } = e,
        i = b.get(t);
    if (null == i) return !1;
    b.set(t, { ...i, widgets: n.map(F).filter(A.Vq) });
}
function en(e) {
    let { badges: t, ttlInSeconds: n, userId: i } = e;
    B = { userId: i, badges: t, expiresAtMs: Date.now() + 1e3 * n };
    let r = b.get(i);
    if (null != r) {
        let e = r.badges ?? [];
        q(e, B), b.set(i, { ...r, badges: e });
    }
}
function ei(e) {
    let t = e.user.id;
    return !((R.get(t)?.size ?? 0) > 0) && el(t);
}
function er(e) {
    return [...b.keys()].reduce((e, t) => el(t) || e, !1);
}
function es(e) {
    return el(e.user.id);
}
function ea(e) {
    return el(e.relationship.id);
}
function eo() {
    R.clear(), O.clear(), b.clear(), D.clear();
}
function el(e) {
    if (null == e) return !1;
    let t = b.get(e);
    if (null == t) return !1;
    (t.fetchStartedAt = 0), (t.fetchEndedAt = 0), (t.fetchError = void 0);
    let n = D.get(e);
    if (null != n) for (let e of n.values()) (e.fetchStartedAt = 0), (e.fetchEndedAt = 0), (e.fetchError = void 0);
}
function eu(e) {
    for (let t of ((U = e.applicationConfigs.map((e) => new d(e))), G.clear(), U)) G.set(t.applicationId, t);
}
class ec extends E.A {
    static displayName = "UserProfileStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super({
            CACHE_LOADED_LAZY: () => this.loadCache(),
            USER_PROFILE_FETCH_START: Z,
            USER_PROFILE_FETCH_FAILURE: X,
            USER_PROFILE_FETCH_SUCCESS: z,
            USER_PROFILE_UPDATE_START: Q,
            USER_PROFILE_UPDATE_SUCCESS: J,
            USER_PROFILE_UPDATE_FAILURE: ee,
            WIDGET_PENDING_SAVE_SUCCESS: et,
            USER_PROFILE_PIN_BADGES_ON_CLIENT: en,
            MUTUAL_FRIENDS_FETCH_START: Y,
            MUTUAL_FRIENDS_FETCH_SUCCESS: $,
            MUTUAL_FRIENDS_FETCH_FAILURE: W,
            USER_UPDATE: ei,
            GUILD_MEMBER_UPDATE: ei,
            GUILD_JOIN: er,
            GUILD_DELETE: er,
            INVITE_ACCEPT_SUCCESS: er,
            GUILD_MEMBER_ADD: es,
            GUILD_MEMBER_REMOVE: es,
            RELATIONSHIP_ADD: ea,
            RELATIONSHIP_REMOVE: ea,
            RELATIONSHIP_UPDATE: ea,
            USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_SUCCESS: eu,
            LOGOUT: H,
        });
    }
    initialize() {
        this.waitFor(g.Ay), this.syncWith([_.default], eo);
    }
    isFetchingProfile(e, t) {
        let n = R.get(e);
        return null != n && n.has(t ?? v);
    }
    isFetchingFriends(e) {
        return O.has(e);
    }
    get isSubmitting() {
        return V;
    }
    getUserProfile(e) {
        return b.get(e);
    }
    getGuildMemberProfile(e, t) {
        return null == t ? null : (D.get(e)?.get(t) ?? null);
    }
    getMutualFriends(e) {
        return w.get(e);
    }
    getMutualFriendsCount(e) {
        return M.get(e);
    }
    getMutualGuilds(e) {
        return P.get(e);
    }
    getWidgets(e) {
        return b.get(e)?.widgets;
    }
    getWishlistIds(e) {
        let t = b.get(e);
        return t?.wishlistSettings != null ? Object.keys(t.wishlistSettings) : [];
    }
    getFirstWishlistId(e) {
        if (null == e) return null;
        let t = this.getWishlistIds(e);
        return t.length > 0 ? t[0] : null;
    }
    getWishlistSettings(e, t) {
        let n = b.get(e);
        return n?.wishlistSettings?.[t] ?? null;
    }
    loadCache = () => {
        let e = this.readSnapshot(ec.LATEST_SNAPSHOT_VERSION);
        null != e &&
            e.forEach((e) => {
                let { userId: t, profile: n } = e;
                null != t && (null != n ? b.set(t, n) : b.delete(t));
            });
    };
    takeSnapshot() {
        let e = f.default.getId(),
            t = b.get(e);
        return null != t
            ? { version: ec.LATEST_SNAPSHOT_VERSION, data: [{ userId: e, profile: t }] }
            : { version: ec.LATEST_SNAPSHOT_VERSION, data: [] };
    }
    get applicationWidgetConfigs() {
        return U;
    }
    getApplicationWidgetConfig(e) {
        return G.get(e);
    }
}
let ed = new ec(),
    e_ = ed;
