"use strict";
n.d(t, { A: () => em }), n(938796), n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(540185),
    a = n(451988),
    o = n(573648),
    l = n(945810);
function d(e) {
    return (0, l.mj)({
        name: e,
        kind: "user",
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
        defaultConfig: { enabled: !1 },
    });
}
class _ {
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
var u = n(773669),
    c = n(889227),
    E = n(495544),
    h = n(71393),
    m = n(536802),
    f = n(290863),
    g = n(711014),
    p = n(403362),
    A = n(439174),
    I = n(633075),
    T = n(289173),
    S = n(575593);
function N(e) {
    let t, n;
    for (let i of e?.collectibles ?? [])
        i.type === S.R.PROFILE_EFFECT
            ? (t = {
                  skuId: i.sku_id,
                  expiresAt: null != i.expires_at ? Math.floor(new Date(i.expires_at).getTime() / 1e3) : void 0,
              })
            : i.type === S.R.PROFILE_FRAME &&
              (n = {
                  skuId: i.sku_id,
                  type: S.R.PROFILE_FRAME,
                  expiresAt: null != i.expires_at ? new Date(i.expires_at) : void 0,
              });
    return { profileEffect: t, profileFrame: n };
}
var C = n(518477),
    R = n(652215),
    O = n(985018);
let y = Symbol("NO GUILD ID"),
    v = new Map(),
    D = new Set(),
    L = new Map(),
    b = new Map(),
    w = new Map(),
    P = new Map(),
    k = new Map(),
    M = new Map(),
    U = new Map(),
    x = [],
    G = [],
    V = null,
    F = new Map();
function B(e) {
    let t = e.data.type;
    switch (t) {
        case s.x.CURRENT_GAMES:
        case s.x.FAVORITE_GAMES:
        case s.x.PLAYED_GAMES:
        case s.x.WANT_TO_PLAY_GAMES:
            let n = e.data.games.map((e) => ({ applicationId: e.game_id, comment: e.comment, tags: e.tags })),
                i = r().uniqBy(n, "applicationId");
            return new T.Yy({ id: e.id, type: t, games: i });
        case s.x.APPLICATION:
            return new I.R({ id: e.id, applicationId: e.data.application_id });
    }
}
let H = !1,
    j = null;
function W(e) {
    let t = L.get(e);
    if (null == t) return;
    let n = t.profileEffect;
    if (n?.expiresAt == null) return;
    let i = 1e3 * n.expiresAt - Date.now();
    if (i <= 0) {
        (t.profileEffect = void 0), w.delete(e), eh.emitChange();
        return;
    }
    let r = w.get(e);
    null != r && r.start(Math.min(R.mnr, i), () => W(e));
}
function Y(e, t) {
    let n = b.get(e);
    if (null == n) return;
    let i = n.get(t);
    if (null == i) return;
    let r = i.profileEffect;
    if (r?.expiresAt == null) return;
    let s = 1e3 * r.expiresAt - Date.now();
    if (s <= 0) {
        n.set(t, { ...i, profileEffect: void 0 }), P.get(e)?.delete(t), eh.emitChange();
        return;
    }
    let a = P.get(e)?.get(t);
    null != a && a.start(Math.min(R.mnr, s), () => Y(e, t));
}
function K() {
    v.clear(), D.clear(), L.clear(), b.clear(), k.clear(), M.clear(), U.clear(), (H = !1);
}
function z(e) {
    let { userId: t } = e;
    D.add(t);
}
function $(e) {
    let { userId: t } = e;
    D.delete(t);
}
function q(e) {
    return r()(e)
        .map((e) => ({ key: e.id, user: new c.A(e), status: f.A.getStatus(e.id) }))
        .sortBy((e) => {
            let { user: t } = e;
            return t.username.toLowerCase();
        })
        .value();
}
function X(e) {
    D.delete(e.userId), k.set(e.userId, q(e.mutualFriends)), M.set(e.userId, e.mutualFriends.length);
}
function Z(e) {
    let { userProfile: t, fetchStartedAt: n } = e,
        i = t.guild_member_profile?.guild_id ?? y;
    if ((v.get(t.user.id)?.delete(i), D.delete(t.user.id), null != t.mutual_guilds)) {
        let e = {};
        t.mutual_guilds.forEach((t) => {
            let { id: n, nick: i } = t,
                r = h.A.getGuild(n);
            null != r && (e[n] = { guild: r, nick: i });
        }),
            U.set(
                t.user.id,
                g.Ay.getFlattenedGuildIds()
                    .filter((t) => null != e[t])
                    .map((t) => ({ guild: e[t].guild, nick: e[t].nick })),
            );
    }
    if (null != t.mutual_friends_count) {
        let e = t.mutual_friends_count;
        M.set(t.user.id, e), 0 === e && k.set(t.user.id, x);
    }
    null != t.mutual_friends && (k.set(t.user.id, q(t.mutual_friends)), M.set(t.user.id, t.mutual_friends.length));
    let r = null != t.premium_since ? new Date(t.premium_since) : null,
        s = null != t.premium_guild_since ? new Date(t.premium_guild_since) : null,
        l = t.application,
        { profileEffect: d, profileFrame: _ } = N(t.user_profile),
        u =
            null != t.badges
                ? t.badges.map((e) => {
                      let t = (0, A.e0)(e.id);
                      if (("premium" === e.id || null != t) && null != r) {
                          let n = O.intl.formatToPlainString(O.t["8zbGNR"], { date: r });
                          return (
                              null != t && (n = O.intl.formatToPlainString(O.t.Hu4jfi, { date: r })),
                              { ...e, description: n }
                          );
                      }
                      return e.id.startsWith(C.Ky) && null != s
                          ? { ...e, description: O.intl.formatToPlainString(O.t.IWkAq7, { date: s }) }
                          : e;
                  })
                : [];
    null != j && j.userId === t.user.id && (Date.now() > j.expiresAtMs ? (j = null) : Q(u, j));
    let c = Date.now();
    if (
        (L.set(t.user.id, {
            userId: t.user.id,
            banner: t.user_profile?.banner,
            accentColor: t.user_profile?.accent_color,
            themeColors: t.user_profile?.theme_colors,
            popoutAnimationParticleType: t.user_profile?.popout_animation_particle_type,
            bio: t.user_profile?.bio ?? "",
            profileEffect: d,
            profileFrame: _,
            pronouns: t.user_profile?.pronouns ?? "",
            connectedAccounts: t.connected_accounts.filter((e) => o.A.isSupported(e.type)) ?? [],
            applicationRoleConnections: t.application_role_connections ?? [],
            premiumSince: r,
            premiumType: t.premium_type,
            premiumGuildSince: s,
            fetchStartedAt: n,
            fetchEndedAt: c,
            legacyUsername: t.legacy_username,
            application:
                null != l
                    ? {
                          id: l.id,
                          primarySkuId: l.primary_sku_id,
                          customInstallUrl: l.custom_install_url,
                          installParams: l.install_params,
                          integrationTypesConfig: l.integration_types_config,
                          flags: l.flags,
                          popularApplicationCommandIds: l.popular_application_command_ids,
                          storefront_available: l.storefront_available,
                          name: l.name,
                      }
                    : null,
            badges: u,
            widgets: t.widgets?.map(B).filter(p.Vq),
            wishlistSettings: t.wishlist_settings,
            collectibles: t.user_profile?.collectibles?.map((e) => {
                let { sku_id: t, type: n, expires_at: i } = e;
                return { expiresAt: null != i ? new Date(i) : void 0, skuId: t, type: n };
            }),
            private: t.private,
        }),
        d?.expiresAt != null)
    ) {
        let e = new a.Ep();
        w.set(t.user.id, e), W(t.user.id);
    }
    if (null != t.guild_member_profile) {
        let { profileEffect: e, profileFrame: i } = N(t.guild_member_profile),
            r = {
                userId: t.user.id,
                guildId: t.guild_member_profile.guild_id,
                banner: t.guild_member_profile.banner,
                accentColor: t.guild_member_profile.accent_color,
                themeColors: t.guild_member_profile?.theme_colors,
                popoutAnimationParticleType: t.guild_member_profile?.popout_animation_particle_type,
                profileEffect: e,
                profileFrame: i,
                bio: t.guild_member_profile.bio,
                pronouns: t.guild_member_profile.pronouns,
                badges: t.guild_badges,
                fetchStartedAt: n,
                fetchEndedAt: c,
            },
            s = b.get(t.user.id);
        if (null != s) s.set(t.guild_member_profile.guild_id, r);
        else {
            let e = new Map();
            e.set(t.guild_member_profile.guild_id, r), b.set(t.user.id, e);
        }
        if (e?.expiresAt != null) {
            let e = new a.Ep(),
                n = P.get(t.user.id);
            if (null != n) n.set(t.guild_member_profile.guild_id, e);
            else {
                let n = new Map();
                n.set(t.guild_member_profile.guild_id, e), P.set(t.user.id, n);
            }
            Y(t.user.id, t.guild_member_profile.guild_id);
        }
    }
}
function Q(e, t) {
    if (null == e) return;
    let n = new Set(e.map((e) => e.id)),
        i = t?.badges.filter((e) => !n.has(e.id));
    return i.length > 0 && e.push(...i), e;
}
function J(e) {
    let { userId: t, guildId: n, withMutualFriends: i } = e,
        r = n ?? y,
        s = v.get(t);
    if (null != s) s.add(r);
    else {
        let e = new Set();
        e.add(r), v.set(t, e);
    }
    i && D.add(t);
}
function ee(e) {
    let { userId: t, guildId: n, apiError: i, fetchStartedAt: r } = e;
    v.get(t)?.delete(n ?? y), D.delete(t);
    let s = L.get(t) ?? {
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
    if (((s.fetchStartedAt = r), (s.fetchEndedAt = a), (s.fetchError = i), L.set(t, s), null != n)) {
        let e = b.get(t)?.get(n);
        null != e && ((e.fetchStartedAt = r), (e.fetchEndedAt = a), (e.fetchError = i));
    }
    i?.status === 404 && (M.set(t, 0), k.set(t, x), U.set(t, G));
}
function et(e) {
    H = !0;
}
function en(e) {
    (H = !1),
        null != e.guild_id
            ? (function (e) {
                  let {
                          userId: t,
                          guild_id: n,
                          accent_color: i,
                          banner: r,
                          bio: s,
                          pronouns: o,
                          popout_animation_particle_type: l,
                          theme_colors: d,
                          collectibles: _,
                      } = e,
                      u = b.get(t);
                  if (null == n || null == u) return;
                  let c = u.get(n);
                  if (null == c) return;
                  let { profileEffect: E, profileFrame: h } = N({ collectibles: _ });
                  if (
                      (u.set(n, {
                          ...c,
                          accentColor: i,
                          banner: r,
                          bio: s,
                          pronouns: o,
                          popoutAnimationParticleType: l,
                          themeColors: d,
                          profileEffect: E,
                          profileFrame: h,
                      }),
                      E?.expiresAt != null)
                  ) {
                      let e = new a.Ep(),
                          i = P.get(t);
                      if (null != i) i.set(n, e);
                      else {
                          let i = new Map();
                          i.set(n, e), P.set(t, i);
                      }
                      Y(t, n);
                  }
              })(e)
            : (function (e) {
                  let {
                          userId: t,
                          accent_color: n,
                          banner: i,
                          bio: r,
                          pronouns: s,
                          popout_animation_particle_type: o,
                          theme_colors: l,
                          collectibles: d,
                      } = e,
                      _ = L.get(t);
                  if (null == _) return;
                  let { profileEffect: u, profileFrame: c } = N({ collectibles: d });
                  if (
                      (L.set(t, {
                          ..._,
                          accentColor: n,
                          banner: i,
                          bio: r,
                          pronouns: s,
                          popoutAnimationParticleType: o,
                          themeColors: l,
                          profileEffect: u,
                          profileFrame: c,
                      }),
                      u?.expiresAt != null)
                  ) {
                      let e = new a.Ep();
                      w.set(t, e), W(t);
                  }
              })(e);
}
function ei(e) {
    H = !1;
}
function er(e) {
    let { userId: t, widgets: n } = e,
        i = L.get(t);
    if (null == i) return !1;
    L.set(t, { ...i, widgets: n.map(B).filter(p.Vq) });
}
function es(e) {
    let { badges: t, ttlInSeconds: n, userId: i } = e;
    j = { userId: i, badges: t, expiresAtMs: Date.now() + 1e3 * n };
    let r = L.get(i);
    if (null != r) {
        let e = r.badges ?? [];
        Q(e, j), L.set(i, { ...r, badges: e });
    }
}
function ea(e) {
    let t = e.user.id;
    return !((v.get(t)?.size ?? 0) > 0) && eu(t);
}
function eo(e) {
    return [...L.keys()].reduce((e, t) => eu(t) || e, !1);
}
function el(e) {
    return eu(e.user.id);
}
function ed(e) {
    return eu(e.relationship.id);
}
function e_() {
    v.clear(), D.clear(), L.clear(), b.clear();
}
function eu(e) {
    if (null == e) return !1;
    let t = L.get(e);
    if (null == t) return !1;
    (t.fetchStartedAt = 0), (t.fetchEndedAt = 0), (t.fetchError = void 0);
    let n = b.get(e);
    if (null != n) for (let e of n.values()) (e.fetchStartedAt = 0), (e.fetchEndedAt = 0), (e.fetchError = void 0);
}
function ec(e) {
    for (let t of ((V = e.applicationConfigs.map((e) => new _(e))), F.clear(), V)) F.set(t.applicationId, t);
}
class eE extends m.A {
    static displayName = "UserProfileStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super({
            CACHE_LOADED_LAZY: () => this.loadCache(),
            USER_PROFILE_FETCH_START: J,
            USER_PROFILE_FETCH_FAILURE: ee,
            USER_PROFILE_FETCH_SUCCESS: Z,
            USER_PROFILE_UPDATE_START: et,
            USER_PROFILE_UPDATE_SUCCESS: en,
            USER_PROFILE_UPDATE_FAILURE: ei,
            WIDGET_PENDING_SAVE_SUCCESS: er,
            USER_PROFILE_PIN_BADGES_ON_CLIENT: es,
            MUTUAL_FRIENDS_FETCH_START: z,
            MUTUAL_FRIENDS_FETCH_SUCCESS: X,
            MUTUAL_FRIENDS_FETCH_FAILURE: $,
            USER_UPDATE: ea,
            GUILD_MEMBER_UPDATE: ea,
            GUILD_JOIN: eo,
            GUILD_DELETE: eo,
            INVITE_ACCEPT_SUCCESS: eo,
            GUILD_MEMBER_ADD: el,
            GUILD_MEMBER_REMOVE: el,
            RELATIONSHIP_ADD: ed,
            RELATIONSHIP_REMOVE: ed,
            RELATIONSHIP_UPDATE: ed,
            USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_SUCCESS: ec,
            LOGOUT: K,
        });
    }
    initialize() {
        this.waitFor(g.Ay), this.syncWith([u.default], e_);
    }
    isFetchingProfile(e, t) {
        let n = v.get(e);
        return null != n && n.has(t ?? y);
    }
    isFetchingFriends(e) {
        return D.has(e);
    }
    get isSubmitting() {
        return H;
    }
    getUserProfile(e) {
        return L.get(e);
    }
    getGuildMemberProfile(e, t) {
        return null == t ? null : (b.get(e)?.get(t) ?? null);
    }
    getMutualFriends(e) {
        return k.get(e);
    }
    getMutualFriendsCount(e) {
        return M.get(e);
    }
    getMutualGuilds(e) {
        return U.get(e);
    }
    getWidgets(e) {
        return L.get(e)?.widgets;
    }
    getWishlistIds(e) {
        let t = L.get(e);
        return t?.wishlistSettings != null ? Object.keys(t.wishlistSettings) : [];
    }
    getFirstWishlistId(e) {
        if (null == e) return null;
        let t = this.getWishlistIds(e);
        return t.length > 0 ? t[0] : null;
    }
    getWishlistSettings(e, t) {
        let n = L.get(e);
        return n?.wishlistSettings?.[t] ?? null;
    }
    loadCache = () => {
        let e = this.readSnapshot(eE.LATEST_SNAPSHOT_VERSION);
        null != e &&
            e.forEach((e) => {
                let { userId: t, profile: n } = e;
                null != t && (null != n ? L.set(t, n) : L.delete(t));
            });
    };
    takeSnapshot() {
        let e = E.default.getId(),
            t = L.get(e);
        return null != t
            ? { version: eE.LATEST_SNAPSHOT_VERSION, data: [{ userId: e, profile: t }] }
            : { version: eE.LATEST_SNAPSHOT_VERSION, data: [] };
    }
    get applicationWidgetConfigs() {
        return V;
    }
    getApplicationWidgetConfig(e) {
        return F.get(e);
    }
}
let eh = new eE(),
    em = eh;
