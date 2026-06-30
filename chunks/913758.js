"use strict";
let i, r, s, a, o, l, u, c, d, _;
n.d(t, { A: () => eI }), n(321073), n(938796);
var h = n(735438),
    f = n.n(h),
    p = n(989349),
    E = n.n(p),
    m = n(17928),
    g = n(636537),
    A = n(506774),
    I = n(228366),
    T = n(867051),
    S = n(837011),
    y = n(95701),
    C = n(260509),
    N = n(671759),
    v = n(889227),
    R = n(71393),
    O = n(287809),
    b = n(860689),
    D = n(935208),
    L = n(794967);
n(576705),
    (0, n(945810).mj)({
        name: "2026-06-mobile-server-tag",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var w = n(652215);
function M(e, t) {
    return (
        null != e &&
        null != t &&
        (e.tag !== t.tag ||
            e.badge !== t.badge ||
            e.badgeColorPrimary !== t.badgeColorPrimary ||
            e.badgeColorSecondary !== t.badgeColorSecondary)
    );
}
var P = n(310527),
    x = n(595818),
    k = n(324580),
    U = n(124759);
let G = [
        "name",
        "description",
        "icon",
        "splash",
        "banner",
        "homeHeader",
        "afkChannelId",
        "afkTimeout",
        "systemChannelId",
        "verificationLevel",
        "defaultMessageNotifications",
        "explicitContentFilter",
        "features",
        "systemChannelFlags",
        "preferredLocale",
        "rulesChannelId",
        "safetyAlertsChannelId",
        "ownerConfiguredContentLevel",
        "discoverySplash",
        "publicUpdatesChannelId",
        "premiumProgressBarEnabled",
        "officialMessageColor",
        "verificationRoleId",
    ],
    F = [
        "brandColorPrimary",
        "description",
        "icon",
        "name",
        "traits",
        "visibility",
        "gameApplicationIds",
        "customBanner",
        "tag",
        "badge",
        "badgeColorPrimary",
        "badgeColorSecondary",
    ],
    V = new Set(["icon", "splash", "banner", "discoverySplash", "homeHeader"]),
    B = {
        icon: "iconOriginalMd5",
        banner: "bannerOriginalMd5",
        splash: "splashOriginalMd5",
        discoverySplash: "discoverySplashOriginalMd5",
    },
    j = !1,
    H = w.XlH.CLOSED,
    Y = {},
    W = null,
    K = !1,
    $ = !1,
    z = !1,
    q = null,
    Z = null,
    X = {},
    Q = null,
    J = 0,
    ee = w.EkJ.NONE,
    et = null,
    en = {
        primaryCategoryId: k.ig,
        secondaryCategoryIds: [],
        keywords: [],
        emojiDiscoverabilityEnabled: !0,
        partnerActionedTimestamp: null,
        partnerApplicationTimestamp: null,
        isPublished: !1,
        reasonsToJoin: [],
        socialLinks: [],
        about: "",
    },
    ei = !1,
    er = en,
    es = en,
    ea = null,
    eo = 0,
    el = null,
    eu = null,
    ec = null;
function ed(e) {
    if (null == o || null == a || a.id !== e) return !1;
    let t = R.A.getGuild(e);
    return null != t && (a === o ? (o = a = t) : (a = t), !0);
}
function e_(e) {
    let { guildId: t, section: n, subsection: r, location: s } = e,
        d = R.A.getGuild(t);
    if (null == d) return eh();
    let h = S.A.getProfile(t);
    (a = o = d),
        (l = u = h),
        (z = $),
        (Z = q),
        (H = w.XlH.OPEN),
        (Y = {}),
        (W = null),
        (c = D.default.castGuildIdAsEveryoneGuildRoleId(t)),
        (ee = o.mfaLevel),
        (es = er),
        (_ = null),
        (X = {}),
        (et = s),
        ef({ section: n ?? i ?? (0, x.x)(), subsection: r ?? null });
}
function eh() {
    (j = !1),
        (H = w.XlH.CLOSED),
        (a = o = null),
        (K = !1),
        (z = !1),
        (Z = null),
        (Q = null),
        (J = 0),
        (ea = null),
        (eu = null),
        (ec = null),
        (i = null),
        (r = null),
        (s = null),
        (ee = w.EkJ.NONE),
        (X = {}),
        (d = void 0);
}
function ef(e) {
    if (null == o) return !1;
    let t = i;
    if (((i = e.section), (r = e.subsection), i === w.BEX.INSTANT_INVITES || i === w.BEX.INVITES))
        g.Bo.get({ url: w.Rsh.GUILD_INSTANT_INVITES(o.id), oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
            I.h.dispatch({ type: "GUILD_SETTINGS_LOADED_INVITES", invites: e.body });
        });
    else if (i === w.BEX.INTEGRATIONS || i === w.BEX.ROLES) {
        if (((c = null), t !== e.section)) return eE(e);
    } else
        i === w.BEX.MEMBERS
            ? (c = (0, C.af)(o))
            : i === w.BEX.VANITY_URL
              ? (0, P.Je)(o.id)
              : i === w.BEX.SAFETY &&
                I.h.dispatch({
                    type: "GUILD_SETTINGS_SAFETY_SET_SUBSECTION",
                    subsection: null == r ? w.nd0.SAFETY_OVERVIEW : r,
                });
}
function ep(e) {
    return new N.A({
        code: e.code,
        temporary: e.temporary,
        revoked: e.revoked,
        inviter: null != e.inviter ? new v.A(e.inviter) : null,
        channel: (0, y.OY)(e.channel),
        guild: null != e.guild ? (0, b.DY)(e.guild) : null,
        uses: e.uses,
        maxUses: e.max_uses,
        maxAge: e.max_age,
        createdAt: E()(e.created_at ?? void 0),
        flags: e.flags,
        roles: e.roles,
    });
}
function eE(e) {
    if (null == o || H !== w.XlH.OPEN || ("GUILD_INTEGRATIONS_UPDATE" === e.type && e.guildId !== o.id)) return !1;
    (0, L.c)(o.id);
}
function em(e) {
    let { guildId: t } = e;
    if (null == o || o.id !== t) return !1;
    W = null;
}
function eg(e) {
    let { guildId: t, error: n } = e;
    if (null == o || o.id !== t) return !1;
    W = n;
}
class eA extends m.Ay.Store {
    static displayName = "GuildSettingsStore";
    initialize() {
        this.waitFor(R.A, S.A, O.default);
    }
    getMetadata() {
        return es;
    }
    widgetHasChanges() {
        return !1 !== K && (z !== $ || Z !== q);
    }
    hasChanges() {
        return !f().isEqual(o, a) || !f().isEqual(es, er) || !f().isEqual(u, l) || this.widgetHasChanges();
    }
    isOpen() {
        return j;
    }
    getSavedRouteState() {
        return d;
    }
    getSection() {
        return i;
    }
    showNotice() {
        return this.hasChanges();
    }
    getGuildId() {
        return null != o ? o.id : null;
    }
    showPublicSuccessModal() {
        return !A.w.get(U.wX);
    }
    getGuild() {
        return o;
    }
    getPendingOriginalMd5s() {
        return X;
    }
    getGuildProfile() {
        return u;
    }
    getWidget() {
        return { enabled: z, channelId: Z };
    }
    isSubmitting() {
        return H === w.XlH.SUBMITTING;
    }
    isGuildMetadataLoaded() {
        return ei;
    }
    getErrors() {
        return Y;
    }
    getError(e) {
        return Y[e] ?? null;
    }
    getProfileError() {
        return W;
    }
    getSelectedRoleId() {
        return c;
    }
    getSlug() {
        return _;
    }
    getBans() {
        return [ea, eo];
    }
    getProps() {
        return {
            submitting: this.isSubmitting(),
            integrations: ec,
            section: i,
            subsection: r,
            errors: Y,
            guild: o,
            bans: ea,
            bansVersion: eo,
            invites: eu,
            selectedRoleId: c,
            fetchedEmbed: K,
            embedEnabled: z,
            embedChannelId: Z,
            mfaLevel: ee,
            searchQuery: s,
            vanityURLCode: Q,
            vanityURLUses: J,
            originalGuild: a,
            hasChanges: this.hasChanges(),
            guildMetadata: es,
            analyticsLocation: et,
            isGuildMetadataLoaded: ei,
            originalProfile: l,
            profile: u,
        };
    }
}
let eI = new eA(
    I.h,
    __OVERLAY__
        ? {}
        : {
              GUILD_SETTINGS_INIT: e_,
              GUILD_SETTINGS_OPEN: function (e) {
                  (j = !0), e_(e);
              },
              GUILD_SETTINGS_CLOSE: eh,
              GUILD_SETTINGS_UPDATE: function (e) {
                  let t;
                  if (null == o) return !1;
                  for (let t of (G.forEach((t) => {
                      null != o && e.hasOwnProperty(t) && (o = (0, T.hZ)(o, t, e[t] ?? null));
                  }),
                  Object.keys(B))) {
                      if (!e.hasOwnProperty(t)) continue;
                      let n = e[B[t]];
                      null != n ? (X[t] = n) : delete X[t];
                  }
                  null == (t = o) || G.some((e) => t[e] !== a[e]) || (o = a);
              },
              GUILD_SETTINGS_PROFILE_UPDATE: function (e) {
                  let { guildId: t } = e;
                  if (null == u || null == o || o.id !== t) return !1;
                  F.forEach((t) => {
                      if (null != u && e.hasOwnProperty(t)) {
                          let n = e[t];
                          void 0 !== n && (u = { ...u, [t]: n });
                      }
                  });
              },
              GUILD_SETTINGS_CANCEL_CHANGES: function (e) {
                  let { guildId: t } = e;
                  (Y = {}), (X = {});
                  let n = R.A.getGuild(t);
                  null != n && (a = o = n);
              },
              GUILD_SETTINGS_SAVE_ROUTE_STACK: function (e) {
                  let { state: t } = e;
                  return (d = t), !1;
              },
              GUILD_SETTINGS_SUBMIT: function () {
                  (H = w.XlH.SUBMITTING), (Y = {});
              },
              GUILD_SETTINGS_SUBMIT_SUCCESS: function () {
                  (H = w.XlH.OPEN), (X = {});
              },
              GUILD_SETTINGS_SUBMIT_FAILURE: function (e) {
                  (H = w.XlH.OPEN), (i = i ?? (0, x.x)()), (r = null), (Y = e.errors ?? {});
              },
              GUILD_SETTINGS_SET_SECTION: ef,
              GUILD_SETTINGS_SET_SEARCH_QUERY: function (e) {
                  s = e.searchQuery;
              },
              GUILD_SETTINGS_LOADED_BANS: function (e) {
                  (ea = e.bans.reduce(
                      (e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e),
                      new Map(),
                  )),
                      eo++;
              },
              GUILD_SETTINGS_LOADED_BANS_BATCH: function (e) {
                  let { bans: t, guildId: n } = e;
                  (el !== n || null == ea) && ((el = n), (ea = new Map())),
                      (ea = t.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), ea)),
                      eo++;
              },
              GUILD_SETTINGS_LOADED_INVITES: function (e) {
                  eu = e.invites.reduce((e, t) => ((e[t.code] = ep(t)), e), {});
              },
              GUILD_SETTINGS_SET_WIDGET: function (e) {
                  (K = !0), ($ = z = e.enabled), (q = Z = e.channelId);
              },
              GUILD_SETTINGS_SET_VANITY_URL: function (e) {
                  (Q = e.code ?? null), (J = e.uses);
              },
              GUILD_SETTINGS_SET_MFA_SUCCESS: function (e) {
                  let { level: t } = e;
                  ee = t;
              },
              GUILD_SETTINGS_ROLE_SELECT: function (e) {
                  let { roleId: t } = e;
                  c = t ?? null;
              },
              GUILD_SETTINGS_LOADED_INTEGRATIONS: function (e) {
                  ec = e.integrations;
              },
              GUILD_SETTINGS_PIN_PERMISSION_MIGRATED: function (e) {
                  let { guildId: t } = e;
                  if (null == o || t !== o.id) return !1;
                  o = (0, T.hZ)(
                      o,
                      "features",
                      new Set([...o.features, w.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE]),
                  );
              },
              GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED: function (e) {
                  let { guildId: t } = e;
                  if (null == o || t !== o.id) return !1;
                  o = (0, T.hZ)(
                      o,
                      "features",
                      new Set([...o.features, w.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE]),
                  );
              },
              GUILD_BAN_ADD: function (e) {
                  let { user: t, guildId: n } = e;
                  if (null == ea || null == o || o.id !== n) return !1;
                  ea.set(t.id, { user: t, reason: null }), eo++;
              },
              GUILD_BAN_REMOVE: function (e) {
                  let { user: t, guildId: n } = e;
                  if (null == ea || null == o || o.id !== n) return !1;
                  ea.delete(t.id), eo++;
              },
              GUILD_ROLE_CREATE: function (e) {
                  let { guildId: t } = e;
                  if (!ed(t)) return !1;
              },
              GUILD_ROLE_UPDATE: function (e) {
                  let { guildId: t } = e;
                  if (!ed(t)) return !1;
              },
              GUILD_ROLE_DELETE: function (e) {
                  let { guildId: t, roleId: n } = e;
                  if (!ed(t)) return !1;
                  c === n && (c = null);
              },
              GUILD_UPDATE: function (e) {
                  if (null == o || o.id !== e.guild.id) return !1;
                  {
                      let e = R.A.getGuild(o.id);
                      if (null == e) return !1;
                      if (
                          ((l = S.A.getProfile(o.id)),
                          i === w.BEX.PROFILE || i === w.BEX.TAG || M(u, l) || (u = l),
                          i === w.BEX.PROFILE)
                      ) {
                          (a = e), (o = e);
                          return;
                      }
                      let t = (a = e),
                          n = { ...o };
                      G.forEach((i) => {
                          if (
                              !V.has(i) &&
                              (("rulesChannelId" !== i && "publicUpdatesChannelId" !== i) || n[i] !== U.SP) &&
                              "features" !== i
                          ) {
                              if ("ownerConfiguredContentLevel" === i) {
                                  t = (0, T.hZ)(t, i, e[i]);
                                  return;
                              }
                              t = (0, T.hZ)(t, i, n[i]);
                          }
                      }),
                          (o = t);
                  }
              },
              GUILD_DELETE: function (e) {
                  if (null == o || o.id !== e.guild.id) return !1;
                  eh();
              },
              GUILD_PROFILE_FETCH_SUCCESS: function (e) {
                  let { profile: t } = e;
                  if (t.id !== o?.id || M(u, l)) return !1;
                  l = u = t;
              },
              GUILD_PROFILE_UPDATE: em,
              GUILD_PROFILE_UPDATE_SUCCESS: function (e) {
                  let { profile: t } = e;
                  if (u?.id == null || !ed(u.id)) return !1;
                  t.id === o?.id && ((l = u = t), (W = null));
              },
              GUILD_PROFILE_UPDATE_FAILURE: eg,
              GUILD_PROFILE_UPDATE_VISIBILITY: em,
              GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS: function (e) {
                  let { guildId: t } = e;
                  if (u?.id == null || !ed(u.id)) return !1;
                  t === o?.id && ((l = u = S.A.getProfile(t)), (W = null));
              },
              GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE: eg,
              USER_CONNECTIONS_UPDATE: eE,
              GUILD_INTEGRATIONS_UPDATE: eE,
              INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
                  (eu = { ...eu }), delete eu[e.code];
              },
              INSTANT_INVITE_CREATE_SUCCESS: function (e) {
                  eu = { ...eu, [e.invite.code]: ep(e.invite) };
              },
              GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: function (e) {
                  let { guildId: t, metadata: n } = e;
                  null != o &&
                      t === o.id &&
                      (!1 === ei && (ei = !0),
                      (es = er =
                          {
                              primaryCategoryId: n.primaryCategoryId ?? k.ig,
                              secondaryCategoryIds: n.secondaryCategoryIds ?? [],
                              keywords: n.keywords ?? [],
                              emojiDiscoverabilityEnabled: n.emojiDiscoverabilityEnabled ?? !0,
                              partnerActionedTimestamp: n.partnerActionedTimestamp ?? null,
                              partnerApplicationTimestamp: n.partnerApplicationTimestamp ?? null,
                              isPublished: n.isPublished ?? !1,
                              reasonsToJoin: n.reasonsToJoin ?? [],
                              socialLinks: n.socialLinks ?? [],
                              about: n.about ?? "",
                          }),
                      (Y = {}));
              },
              GUILD_DISCOVERY_METADATA_FETCH_FAIL: function () {
                  er = es = en;
              },
              GUILD_DISCOVERY_CATEGORY_ADD: function (e) {
                  let { guildId: t, categoryId: n } = e;
                  null != o &&
                      t === o.id &&
                      ((es = { ...es, secondaryCategoryIds: [...es.secondaryCategoryIds, n] }),
                      (er = { ...er, secondaryCategoryIds: [...er.secondaryCategoryIds, n] }));
              },
              GUILD_DISCOVERY_CATEGORY_DELETE: function (e) {
                  let t,
                      { guildId: n, categoryId: i } = e;
                  if (null == o || n !== o.id) return;
                  let r = es.secondaryCategoryIds.indexOf(i);
                  -1 !== r &&
                      ((t = [...es.secondaryCategoryIds]).splice(r, 1), (es = { ...es, secondaryCategoryIds: t })),
                      -1 !== (r = er.secondaryCategoryIds.indexOf(i)) &&
                          ((t = [...er.secondaryCategoryIds]).splice(r, 1), (er = { ...er, secondaryCategoryIds: t }));
              },
              GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL: function (e) {
                  let { guildId: t, errors: n } = e;
                  null != o && t === o.id && (Y = n ?? {});
              },
              GUILD_UPDATE_DISCOVERY_METADATA: function (e) {
                  let {
                      guildId: t,
                      primaryCategoryId: n,
                      keywords: i,
                      emojiDiscoverabilityEnabled: r,
                      isPublished: s,
                      reasonsToJoin: a,
                      socialLinks: l,
                      about: u,
                  } = e;
                  null != o &&
                      t === o.id &&
                      (es = {
                          ...es,
                          primaryCategoryId: null != n ? n : es.primaryCategoryId,
                          keywords: null != i ? i : es.keywords,
                          emojiDiscoverabilityEnabled: r ?? es.emojiDiscoverabilityEnabled,
                          isPublished: s ?? es.isPublished,
                          reasonsToJoin: null != a ? a : es.reasonsToJoin,
                          socialLinks: null != l ? l : es.socialLinks,
                          about: null != u ? u : es.about,
                      });
              },
              GUILD_UPDATE_DISCOVERY_METADATA_FAIL: function (e) {
                  let { guildId: t, errors: n } = e;
                  null != o && t === o.id && (Y = n ?? {});
              },
              GUILD_DISCOVERY_SLUG_FETCH_SUCCESS: function (e) {
                  let { slug: t } = e;
                  _ = t;
              },
              GUILD_DISCOVERY_SLUG_FETCH_FAIL: function (e) {
                  let {} = e;
                  _ = null;
              },
              GUILD_SETTINGS_WIDGET_UPDATE: function (e) {
                  let { guildId: t, enabled: n, channelId: i } = e;
                  if (null == o || o.id !== t) return !1;
                  (z = n), (Z = i);
              },
          },
);
