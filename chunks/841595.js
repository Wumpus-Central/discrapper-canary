"use strict";
n.d(t, { A: () => eE }), n(321073), n(938796);
var i = n(735438),
    r = n.n(i),
    s = n(575593),
    a = n(540185),
    o = n(451988),
    l = n(573648),
    _ = n(945810);
function d(e) {
    return (0, _.mj)({
        name: e,
        kind: "user",
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
        defaultConfig: { enabled: !1 },
    });
}
class u {
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
            (this.viewExperiment = d(e.view_experiment)),
            (this.editExperiment = d(e.edit_experiment)),
            (this.coachmarkExperiment = null != e.coachmark_experiment ? d(e.coachmark_experiment) : void 0),
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
var c = n(773669),
    E = n(889227),
    h = n(495544),
    m = n(71393),
    f = n(536802),
    g = n(290863),
    I = n(711014),
    A = n(403362),
    p = n(439174),
    T = n(633075),
    S = n(289173);
function N(e) {
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
var O = n(518477),
    R = n(652215),
    C = n(985018);
let y = Symbol("NO GUILD ID"),
    D = new Map(),
    L = new Set(),
    v = new Map(),
    w = new Map(),
    P = {},
    b = new Map(),
    k = new Map(),
    U = new Map(),
    M = [],
    G = [],
    x = null,
    V = new Map();
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
let B = !1,
    H = null;
function Y(e, t) {
    let n = null != t ? w.get(e)?.get(t) : v.get(e);
    if (n?.collectibles == null) return;
    let i = [];
    n.collectibles.forEach((n) => {
        if (null == n.expiresAt) return;
        let r = n.expiresAt.getTime() - Date.now();
        r <= 0
            ? i.push(n)
            : (null == P[e] && (P[e] = { [y]: {} }),
              null == P[e][t ?? y] && (P[e][t ?? y] = {}),
              null == P[e][t ?? y][n.skuId] && (P[e][t ?? y][n.skuId] = new o.Ep()),
              P[e][t ?? y][n.skuId].start(Math.min(R.mnr, r), () => {
                  Y(e, t);
              }));
    }),
        0 !== i.length &&
            ((n.collectibles = n.collectibles.filter((e) => !i.includes(e))),
            i.forEach((i) => {
                i.type === s.R.PROFILE_EFFECT
                    ? (n.profileEffect = void 0)
                    : i.type === s.R.PROFILE_FRAME && (n.profileFrame = void 0),
                    delete P[e]?.[t ?? y]?.[i.skuId];
            }),
            "guildId" in n ? w.get(e)?.set(n.guildId, n) : v.set(e, n),
            ec.emitChange());
}
function W() {
    D.clear(), L.clear(), v.clear(), w.clear(), b.clear(), k.clear(), U.clear(), (B = !1);
}
function K(e) {
    let { userId: t } = e;
    L.add(t);
}
function j(e) {
    let { userId: t } = e;
    L.delete(t);
}
function $(e) {
    return r()(e)
        .map((e) => ({ key: e.id, user: new E.A(e), status: g.A.getStatus(e.id) }))
        .sortBy((e) => {
            let { user: t } = e;
            return t.username.toLowerCase();
        })
        .value();
}
function z(e) {
    L.delete(e.userId), b.set(e.userId, $(e.mutualFriends)), k.set(e.userId, e.mutualFriends.length);
}
function q(e) {
    let { userProfile: t, fetchStartedAt: n } = e,
        i = t.guild_member_profile?.guild_id ?? y;
    if ((D.get(t.user.id)?.delete(i), L.delete(t.user.id), null != t.mutual_guilds)) {
        let e = {};
        t.mutual_guilds.forEach((t) => {
            let { id: n, nick: i } = t,
                r = m.A.getGuild(n);
            null != r && (e[n] = { guild: r, nick: i });
        }),
            U.set(
                t.user.id,
                I.Ay.getFlattenedGuildIds()
                    .filter((t) => null != e[t])
                    .map((t) => ({ guild: e[t].guild, nick: e[t].nick })),
            );
    }
    if (null != t.mutual_friends_count) {
        let e = t.mutual_friends_count;
        k.set(t.user.id, e), 0 === e && b.set(t.user.id, M);
    }
    null != t.mutual_friends && (b.set(t.user.id, $(t.mutual_friends)), k.set(t.user.id, t.mutual_friends.length));
    let r = null != t.premium_since ? new Date(t.premium_since) : null,
        s = null != t.premium_guild_since ? new Date(t.premium_guild_since) : null,
        a = t.application,
        o =
            null != t.badges
                ? t.badges.map((e) => {
                      let t = (0, p.e0)(e.id);
                      if (("premium" === e.id || null != t) && null != r) {
                          let n = C.intl.formatToPlainString(C.t["8zbGNR"], { date: r });
                          return (
                              null != t && (n = C.intl.formatToPlainString(C.t.Hu4jfi, { date: r })),
                              { ...e, description: n }
                          );
                      }
                      return e.id.startsWith(O.Ky) && null != s
                          ? { ...e, description: C.intl.formatToPlainString(C.t.IWkAq7, { date: s }) }
                          : e;
                  })
                : [];
    null != H && H.userId === t.user.id && (Date.now() > H.expiresAtMs ? (H = null) : X(o, H));
    let _ = Date.now();
    if (
        (v.set(t.user.id, {
            ...N(t.user_profile),
            userId: t.user.id,
            banner: t.user_profile?.banner,
            accentColor: t.user_profile?.accent_color,
            themeColors: t.user_profile?.theme_colors,
            popoutAnimationParticleType: t.user_profile?.popout_animation_particle_type,
            bio: t.user_profile?.bio ?? "",
            pronouns: t.user_profile?.pronouns ?? "",
            connectedAccounts: t.connected_accounts.filter((e) => l.A.isSupported(e.type)) ?? [],
            applicationRoleConnections: t.application_role_connections ?? [],
            premiumSince: r,
            premiumType: t.premium_type,
            premiumGuildSince: s,
            fetchStartedAt: n,
            fetchEndedAt: _,
            legacyUsername: t.legacy_username,
            application:
                null != a
                    ? {
                          id: a.id,
                          primarySkuId: a.primary_sku_id,
                          customInstallUrl: a.custom_install_url,
                          installParams: a.install_params,
                          integrationTypesConfig: a.integration_types_config,
                          flags: a.flags,
                          popularApplicationCommandIds: a.popular_application_command_ids,
                          storefront_available: a.storefront_available,
                          name: a.name,
                      }
                    : null,
            badges: o,
            widgets: t.widgets?.map(F).filter(A.Vq),
            wishlistSettings: t.wishlist_settings,
            private: t.private,
        }),
        Y(t.user.id),
        null != t.guild_member_profile)
    ) {
        let e = {
                ...N(t.guild_member_profile),
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
                fetchEndedAt: _,
            },
            i = w.get(t.user.id);
        if (null != i) i.set(t.guild_member_profile.guild_id, e);
        else {
            let n = new Map();
            n.set(t.guild_member_profile.guild_id, e), w.set(t.user.id, n);
        }
        Y(t.user.id, t.guild_member_profile.guild_id);
    }
}
function X(e, t) {
    if (null == e) return;
    let n = new Set(e.map((e) => e.id)),
        i = t?.badges.filter((e) => !n.has(e.id));
    return i.length > 0 && e.push(...i), e;
}
function Q(e) {
    let { userId: t, guildId: n, withMutualFriends: i } = e,
        r = n ?? y,
        s = D.get(t);
    if (null != s) s.add(r);
    else {
        let e = new Set();
        e.add(r), D.set(t, e);
    }
    i && L.add(t);
}
function J(e) {
    let { userId: t, guildId: n, apiError: i, fetchStartedAt: r } = e;
    D.get(t)?.delete(n ?? y), L.delete(t);
    let s = v.get(t) ?? {
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
    if (((s.fetchStartedAt = r), (s.fetchEndedAt = a), (s.fetchError = i), v.set(t, s), null != n)) {
        let e = w.get(t)?.get(n);
        null != e && ((e.fetchStartedAt = r), (e.fetchEndedAt = a), (e.fetchError = i));
    }
    i?.status === 404 && (k.set(t, 0), b.set(t, M), U.set(t, G));
}
function Z(e) {
    B = !0;
}
function ee(e) {
    (B = !1),
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
                          collectibles: _,
                      } = e,
                      d = w.get(t);
                  if (null == n || null == d) return;
                  let u = d.get(n);
                  null == u ||
                      (d.set(n, {
                          ...u,
                          ...N({ collectibles: _ }),
                          accentColor: i,
                          banner: r,
                          bio: s,
                          pronouns: a,
                          popoutAnimationParticleType: o,
                          themeColors: l,
                      }),
                      Y(t, n));
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
                      _ = v.get(t);
                  null == _ ||
                      (v.set(t, {
                          ..._,
                          ...N({ collectibles: l }),
                          accentColor: n,
                          banner: i,
                          bio: r,
                          pronouns: s,
                          popoutAnimationParticleType: a,
                          themeColors: o,
                      }),
                      Y(t));
              })(e);
}
function et(e) {
    B = !1;
}
function en(e) {
    let { userId: t, widgets: n } = e,
        i = v.get(t);
    if (null == i) return !1;
    v.set(t, { ...i, widgets: n.map(F).filter(A.Vq) });
}
function ei(e) {
    let { badges: t, ttlInSeconds: n, userId: i } = e;
    H = { userId: i, badges: t, expiresAtMs: Date.now() + 1e3 * n };
    let r = v.get(i);
    if (null != r) {
        let e = r.badges ?? [];
        X(e, H), v.set(i, { ...r, badges: e });
    }
}
function er(e) {
    let t = e.user.id;
    return !((D.get(t)?.size ?? 0) > 0) && e_(t);
}
function es(e) {
    return [...v.keys()].reduce((e, t) => e_(t) || e, !1);
}
function ea(e) {
    return e_(e.user.id);
}
function eo(e) {
    return e_(e.relationship.id);
}
function el() {
    D.clear(), L.clear(), v.clear(), w.clear();
}
function e_(e) {
    if (null == e) return !1;
    let t = v.get(e);
    if (null == t) return !1;
    (t.fetchStartedAt = 0), (t.fetchEndedAt = 0), (t.fetchError = void 0);
    let n = w.get(e);
    if (null != n) for (let e of n.values()) (e.fetchStartedAt = 0), (e.fetchEndedAt = 0), (e.fetchError = void 0);
}
function ed(e) {
    for (let t of ((x = e.applicationConfigs.map((e) => new u(e))), V.clear(), x)) V.set(t.applicationId, t);
}
class eu extends f.A {
    static displayName = "UserProfileStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super({
            CACHE_LOADED_LAZY: () => this.loadCache(),
            USER_PROFILE_FETCH_START: Q,
            USER_PROFILE_FETCH_FAILURE: J,
            USER_PROFILE_FETCH_SUCCESS: q,
            USER_PROFILE_UPDATE_START: Z,
            USER_PROFILE_UPDATE_SUCCESS: ee,
            USER_PROFILE_UPDATE_FAILURE: et,
            WIDGET_PENDING_SAVE_SUCCESS: en,
            USER_PROFILE_PIN_BADGES_ON_CLIENT: ei,
            MUTUAL_FRIENDS_FETCH_START: K,
            MUTUAL_FRIENDS_FETCH_SUCCESS: z,
            MUTUAL_FRIENDS_FETCH_FAILURE: j,
            USER_UPDATE: er,
            GUILD_MEMBER_UPDATE: er,
            GUILD_JOIN: es,
            GUILD_DELETE: es,
            INVITE_ACCEPT_SUCCESS: es,
            GUILD_MEMBER_ADD: ea,
            GUILD_MEMBER_REMOVE: ea,
            RELATIONSHIP_ADD: eo,
            RELATIONSHIP_REMOVE: eo,
            RELATIONSHIP_UPDATE: eo,
            USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_SUCCESS: ed,
            LOGOUT: W,
        });
    }
    initialize() {
        this.waitFor(I.Ay), this.syncWith([c.default], el);
    }
    isFetchingProfile(e, t) {
        let n = D.get(e);
        return null != n && n.has(t ?? y);
    }
    isFetchingFriends(e) {
        return L.has(e);
    }
    get isSubmitting() {
        return B;
    }
    getUserProfile(e) {
        return v.get(e);
    }
    getGuildMemberProfile(e, t) {
        return null == t ? null : (w.get(e)?.get(t) ?? null);
    }
    getMutualFriends(e) {
        return b.get(e);
    }
    getMutualFriendsCount(e) {
        return k.get(e);
    }
    getMutualGuilds(e) {
        return U.get(e);
    }
    getWidgets(e) {
        return v.get(e)?.widgets;
    }
    getWishlistIds(e) {
        let t = v.get(e);
        return t?.wishlistSettings != null ? Object.keys(t.wishlistSettings) : [];
    }
    getFirstWishlistId(e) {
        if (null == e) return null;
        let t = this.getWishlistIds(e);
        return t.length > 0 ? t[0] : null;
    }
    getWishlistSettings(e, t) {
        let n = v.get(e);
        return n?.wishlistSettings?.[t] ?? null;
    }
    loadCache = () => {
        let e = this.readSnapshot(eu.LATEST_SNAPSHOT_VERSION);
        null != e &&
            e.forEach((e) => {
                let { userId: t, profile: n } = e;
                null != t && (null != n ? v.set(t, n) : v.delete(t));
            });
    };
    takeSnapshot() {
        let e = h.default.getId(),
            t = v.get(e);
        return null != t
            ? { version: eu.LATEST_SNAPSHOT_VERSION, data: [{ userId: e, profile: t }] }
            : { version: eu.LATEST_SNAPSHOT_VERSION, data: [] };
    }
    get applicationWidgetConfigs() {
        return x;
    }
    getApplicationWidgetConfig(e) {
        return V.get(e);
    }
}
let ec = new eu(),
    eE = ec;
