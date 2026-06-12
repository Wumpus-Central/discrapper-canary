"use strict";
n.d(t, { A: () => eh }), n(321073), n(938796);
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
var N = n(518477),
    v = n(652215),
    C = n(375708);
let R = Symbol("NO GUILD ID"),
    O = new Map(),
    b = new Set(),
    D = new Map(),
    L = new Map(),
    w = {},
    M = new Map(),
    P = new Map(),
    x = new Map(),
    k = [],
    U = [],
    G = null,
    F = new Map();
function V(e) {
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
function j(e, t) {
    let n = null != t ? L.get(e)?.get(t) : D.get(e);
    if (n?.collectibles == null) return;
    let i = [];
    n.collectibles.forEach((n) => {
        if (null == n.expiresAt) return;
        let r = n.expiresAt.getTime() - Date.now();
        r <= 0
            ? i.push(n)
            : (null == w[e] && (w[e] = { [R]: {} }),
              null == w[e][t ?? R] && (w[e][t ?? R] = {}),
              null == w[e][t ?? R][n.skuId] && (w[e][t ?? R][n.skuId] = new o.Ep()),
              w[e][t ?? R][n.skuId].start(Math.min(v.mnr, r), () => {
                  j(e, t);
              }));
    }),
        0 !== i.length &&
            ((n.collectibles = n.collectibles.filter((e) => !i.includes(e))),
            i.forEach((i) => {
                i.type === s.R.PROFILE_EFFECT
                    ? (n.profileEffect = void 0)
                    : i.type === s.R.PROFILE_FRAME && (n.profileFrame = void 0),
                    delete w[e]?.[t ?? R]?.[i.skuId];
            }),
            "guildId" in n ? L.get(e)?.set(n.guildId, n) : D.set(e, n),
            e_.emitChange());
}
function Y() {
    O.clear(), b.clear(), D.clear(), L.clear(), M.clear(), P.clear(), x.clear(), (B = !1);
}
function W(e) {
    let { userId: t } = e;
    b.add(t);
}
function K(e) {
    let { userId: t } = e;
    b.delete(t);
}
function $(e) {
    return r()(e)
        .map((e) => ({ key: e.id, user: new h.A(e), status: m.A.getStatus(e.id) }))
        .sortBy((e) => {
            let { user: t } = e;
            return t.username.toLowerCase();
        })
        .value();
}
function z(e) {
    b.delete(e.userId), M.set(e.userId, $(e.mutualFriends)), P.set(e.userId, e.mutualFriends.length);
}
function q(e) {
    let { userProfile: t, fetchStartedAt: n, guildId: i } = e,
        r = i ?? t.guild_member_profile?.guild_id ?? R;
    if ((O.get(t.user.id)?.delete(r), b.delete(t.user.id), null != t.mutual_guilds)) {
        let e = {};
        t.mutual_guilds.forEach((t) => {
            let { id: n, nick: i } = t,
                r = p.A.getGuild(n);
            null != r && (e[n] = { guild: r, nick: i });
        }),
            x.set(
                t.user.id,
                g.Ay.getFlattenedGuildIds()
                    .filter((t) => null != e[t])
                    .map((t) => ({ guild: e[t].guild, nick: e[t].nick })),
            );
    }
    if (null != t.mutual_friends_count) {
        let e = t.mutual_friends_count;
        P.set(t.user.id, e), 0 === e && M.set(t.user.id, k);
    }
    null != t.mutual_friends && (M.set(t.user.id, $(t.mutual_friends)), P.set(t.user.id, t.mutual_friends.length));
    let s = null != t.premium_since ? new Date(t.premium_since) : null,
        a = null != t.premium_guild_since ? new Date(t.premium_guild_since) : null,
        o = t.application,
        u =
            null != t.badges
                ? t.badges.map((e) => {
                      let t = (0, I.e0)(e.id);
                      if (("premium" === e.id || null != t) && null != s) {
                          let n = C.intl.formatToPlainString(C.t["8zbGNR"], { date: s });
                          return (
                              null != t && (n = C.intl.formatToPlainString(C.t.Hu4jfi, { date: s })),
                              { ...e, description: n }
                          );
                      }
                      return e.id.startsWith(N.Ky) && null != a
                          ? { ...e, description: C.intl.formatToPlainString(C.t.IWkAq7, { date: a }) }
                          : e;
                  })
                : [];
    null != H && H.userId === t.user.id && (Date.now() > H.expiresAtMs ? (H = null) : X(u, H));
    let c = Date.now();
    if (
        (D.set(t.user.id, {
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
            widgets: t.widgets?.map(V).filter(A.Vq),
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
            i = L.get(t.user.id);
        if (null != i) i.set(t.guild_member_profile.guild_id, e);
        else {
            let n = new Map();
            n.set(t.guild_member_profile.guild_id, e), L.set(t.user.id, n);
        }
        j(t.user.id, t.guild_member_profile.guild_id);
    }
}
function X(e, t) {
    if (null == e) return;
    let n = new Set(e.map((e) => e.id)),
        i = t?.badges.filter((e) => !n.has(e.id));
    return i.length > 0 && e.push(...i), e;
}
function Z(e) {
    let { userId: t, guildId: n, withMutualFriends: i } = e,
        r = n ?? R,
        s = O.get(t);
    if (null != s) s.add(r);
    else {
        let e = new Set();
        e.add(r), O.set(t, e);
    }
    i && b.add(t);
}
function Q(e) {
    let { userId: t, guildId: n, apiError: i, fetchStartedAt: r } = e;
    O.get(t)?.delete(n ?? R), b.delete(t);
    let s = D.get(t) ?? {
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
    if (((s.fetchStartedAt = r), (s.fetchEndedAt = a), (s.fetchError = i), D.set(t, s), null != n)) {
        let e = L.get(t)?.get(n);
        null != e && ((e.fetchStartedAt = r), (e.fetchEndedAt = a), (e.fetchError = i));
    }
    i?.status === 404 && (P.set(t, 0), M.set(t, k), x.set(t, U));
}
function J(e) {
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
                          collectibles: u,
                      } = e,
                      c = L.get(t);
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
                      u = D.get(t);
                  null == u ||
                      (D.set(t, {
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
function et(e) {
    B = !1;
}
function en(e) {
    let { userId: t, widgets: n } = e,
        i = D.get(t);
    if (null == i) return !1;
    D.set(t, { ...i, widgets: n.map(V).filter(A.Vq) });
}
function ei(e) {
    let { badges: t, ttlInSeconds: n, userId: i } = e;
    H = { userId: i, badges: t, expiresAtMs: Date.now() + 1e3 * n };
    let r = D.get(i);
    if (null != r) {
        let e = r.badges ?? [];
        X(e, H), D.set(i, { ...r, badges: e });
    }
}
function er(e) {
    let t = e.user.id;
    return !((O.get(t)?.size ?? 0) > 0) && eu(t);
}
function es(e) {
    return [...D.keys()].reduce((e, t) => eu(t) || e, !1);
}
function ea(e) {
    return eu(e.user.id);
}
function eo(e) {
    return eu(e.relationship.id);
}
function el() {
    O.clear(), b.clear(), D.clear(), L.clear();
}
function eu(e) {
    if (null == e) return !1;
    let t = D.get(e);
    if (null == t) return !1;
    (t.fetchStartedAt = 0), (t.fetchEndedAt = 0), (t.fetchError = void 0);
    let n = L.get(e);
    if (null != n) for (let e of n.values()) (e.fetchStartedAt = 0), (e.fetchEndedAt = 0), (e.fetchError = void 0);
}
function ec(e) {
    for (let t of ((G = e.applicationConfigs.map((e) => new d(e))), F.clear(), G)) F.set(t.applicationId, t);
}
class ed extends E.A {
    static displayName = "UserProfileStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super({
            CACHE_LOADED_LAZY: () => this.loadCache(),
            USER_PROFILE_FETCH_START: Z,
            USER_PROFILE_FETCH_FAILURE: Q,
            USER_PROFILE_FETCH_SUCCESS: q,
            USER_PROFILE_UPDATE_START: J,
            USER_PROFILE_UPDATE_SUCCESS: ee,
            USER_PROFILE_UPDATE_FAILURE: et,
            WIDGET_PENDING_SAVE_SUCCESS: en,
            USER_PROFILE_PIN_BADGES_ON_CLIENT: ei,
            MUTUAL_FRIENDS_FETCH_START: W,
            MUTUAL_FRIENDS_FETCH_SUCCESS: z,
            MUTUAL_FRIENDS_FETCH_FAILURE: K,
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
            USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_SUCCESS: ec,
            LOGOUT: Y,
        });
    }
    initialize() {
        this.waitFor(g.Ay), this.syncWith([_.default], el);
    }
    isFetchingProfile(e, t) {
        let n = O.get(e);
        return null != n && n.has(t ?? R);
    }
    isFetchingFriends(e) {
        return b.has(e);
    }
    get isSubmitting() {
        return B;
    }
    getUserProfile(e) {
        return D.get(e);
    }
    getGuildMemberProfile(e, t) {
        return null == t ? null : (L.get(e)?.get(t) ?? null);
    }
    getMutualFriends(e) {
        return M.get(e);
    }
    getMutualFriendsCount(e) {
        return P.get(e);
    }
    getMutualGuilds(e) {
        return x.get(e);
    }
    getWidgets(e) {
        return D.get(e)?.widgets;
    }
    getWishlistIds(e) {
        let t = D.get(e);
        return t?.wishlistSettings != null ? Object.keys(t.wishlistSettings) : [];
    }
    getFirstWishlistId(e) {
        if (null == e) return null;
        let t = this.getWishlistIds(e);
        return t.length > 0 ? t[0] : null;
    }
    getWishlistSettings(e, t) {
        let n = D.get(e);
        return n?.wishlistSettings?.[t] ?? null;
    }
    loadCache = () => {
        let e = this.readSnapshot(ed.LATEST_SNAPSHOT_VERSION);
        null != e &&
            e.forEach((e) => {
                let { userId: t, profile: n } = e;
                null != t && (null != n ? D.set(t, n) : D.delete(t));
            });
    };
    takeSnapshot() {
        let e = f.default.getId(),
            t = D.get(e);
        return null != t
            ? { version: ed.LATEST_SNAPSHOT_VERSION, data: [{ userId: e, profile: t }] }
            : { version: ed.LATEST_SNAPSHOT_VERSION, data: [] };
    }
    get applicationWidgetConfigs() {
        return G;
    }
    getApplicationWidgetConfig(e) {
        return F.get(e);
    }
}
let e_ = new ed(),
    eh = e_;
