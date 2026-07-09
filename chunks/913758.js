"use strict";
let i, r, a, s, l, o, d, c, u, _;
n.d(t, { A: () => em }), n(321073), n(938796);
var E = n(735438),
    A = n.n(E),
    h = n(989349),
    I = n.n(h),
    f = n(17928),
    p = n(636537),
    T = n(506774),
    m = n(228366),
    g = n(867051),
    S = n(837011),
    N = n(95701),
    C = n(260509),
    R = n(671759),
    O = n(889227),
    L = n(71393),
    D = n(287809),
    y = n(860689),
    v = n(935208),
    b = n(794967);
n(685073),
    n(576705),
    (0, n(945810).mj)({
        name: "2026-06-mobile-server-tag",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var M = n(652215);
function P(e, t) {
    return (
        null != e &&
        null != t &&
        (e.tag !== t.tag ||
            e.badge !== t.badge ||
            e.badgeColorPrimary !== t.badgeColorPrimary ||
            e.badgeColorSecondary !== t.badgeColorSecondary)
    );
}
var U = n(310527),
    w = n(595818),
    G = n(324580),
    x = n(124759);
let k = [
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
    H = !1,
    j = M.XlH.CLOSED,
    W = {},
    Y = null,
    K = !1,
    $ = !1,
    z = !1,
    q = null,
    Z = null,
    X = {},
    Q = null,
    J = 0,
    ee = M.EkJ.NONE,
    et = null,
    en = {
        primaryCategoryId: G.ig,
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
    ea = en,
    es = null,
    el = 0,
    eo = null,
    ed = null,
    ec = null;
function eu(e) {
    if (null == l || null == s || s.id !== e) return !1;
    let t = L.A.getGuild(e);
    return null != t && (s === l ? (l = s = t) : (s = t), !0);
}
function e_(e) {
    let { guildId: t, section: n, subsection: r, location: a } = e,
        u = L.A.getGuild(t);
    if (null == u) return eE();
    let E = S.A.getProfile(t);
    (s = l = u),
        (o = d = E),
        (z = $),
        (Z = q),
        (j = M.XlH.OPEN),
        (W = {}),
        (Y = null),
        (c = v.default.castGuildIdAsEveryoneGuildRoleId(t)),
        (ee = l.mfaLevel),
        (ea = er),
        (_ = null),
        (X = {}),
        (et = a),
        eA({ section: n ?? i ?? (0, w.x)(), subsection: r ?? null });
}
function eE() {
    (H = !1),
        (j = M.XlH.CLOSED),
        (s = l = null),
        (K = !1),
        (z = !1),
        (Z = null),
        (Q = null),
        (J = 0),
        (es = null),
        (ed = null),
        (ec = null),
        (i = null),
        (r = null),
        (a = null),
        (ee = M.EkJ.NONE),
        (X = {}),
        (u = void 0);
}
function eA(e) {
    if (null == l) return !1;
    let t = i;
    if (((i = e.section), (r = e.subsection), i === M.BEX.INSTANT_INVITES || i === M.BEX.INVITES))
        p.Bo.get({ url: M.Rsh.GUILD_INSTANT_INVITES(l.id), oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
            m.h.dispatch({ type: "GUILD_SETTINGS_LOADED_INVITES", invites: e.body });
        });
    else if (i === M.BEX.INTEGRATIONS || i === M.BEX.ROLES) {
        if (((c = null), t !== e.section)) return eI(e);
    } else
        i === M.BEX.MEMBERS
            ? (c = (0, C.af)(l))
            : i === M.BEX.VANITY_URL
              ? (0, U.Je)(l.id)
              : i === M.BEX.SAFETY &&
                m.h.dispatch({
                    type: "GUILD_SETTINGS_SAFETY_SET_SUBSECTION",
                    subsection: null == r ? M.nd0.SAFETY_OVERVIEW : r,
                });
}
function eh(e) {
    return new R.A({
        code: e.code,
        temporary: e.temporary,
        revoked: e.revoked,
        inviter: null != e.inviter ? new O.A(e.inviter) : null,
        channel: (0, N.OY)(e.channel),
        guild: null != e.guild ? (0, y.DY)(e.guild) : null,
        uses: e.uses,
        maxUses: e.max_uses,
        maxAge: e.max_age,
        createdAt: I()(e.created_at ?? void 0),
        flags: e.flags,
        roles: e.roles,
    });
}
function eI(e) {
    if (null == l || j !== M.XlH.OPEN || ("GUILD_INTEGRATIONS_UPDATE" === e.type && e.guildId !== l.id)) return !1;
    (0, b.c)(l.id);
}
function ef(e) {
    let { guildId: t } = e;
    if (null == l || l.id !== t) return !1;
    Y = null;
}
function ep(e) {
    let { guildId: t, error: n } = e;
    if (null == l || l.id !== t) return !1;
    Y = n;
}
class eT extends f.Ay.Store {
    static displayName = "GuildSettingsStore";
    initialize() {
        this.waitFor(L.A, S.A, D.default);
    }
    getMetadata() {
        return ea;
    }
    widgetHasChanges() {
        return !1 !== K && (z !== $ || Z !== q);
    }
    hasChanges() {
        return !A().isEqual(l, s) || !A().isEqual(ea, er) || !A().isEqual(d, o) || this.widgetHasChanges();
    }
    isOpen() {
        return H;
    }
    getSavedRouteState() {
        return u;
    }
    getSection() {
        return i;
    }
    showNotice() {
        return this.hasChanges();
    }
    getGuildId() {
        return null != l ? l.id : null;
    }
    showPublicSuccessModal() {
        return !T.w.get(x.wX);
    }
    getGuild() {
        return l;
    }
    getPendingOriginalMd5s() {
        return X;
    }
    getGuildProfile() {
        return d;
    }
    getWidget() {
        return { enabled: z, channelId: Z };
    }
    isSubmitting() {
        return j === M.XlH.SUBMITTING;
    }
    isGuildMetadataLoaded() {
        return ei;
    }
    getErrors() {
        return W;
    }
    getError(e) {
        return W[e] ?? null;
    }
    getProfileError() {
        return Y;
    }
    getSelectedRoleId() {
        return c;
    }
    getSlug() {
        return _;
    }
    getBans() {
        return [es, el];
    }
    getProps() {
        return {
            submitting: this.isSubmitting(),
            integrations: ec,
            section: i,
            subsection: r,
            errors: W,
            guild: l,
            bans: es,
            bansVersion: el,
            invites: ed,
            selectedRoleId: c,
            fetchedEmbed: K,
            embedEnabled: z,
            embedChannelId: Z,
            mfaLevel: ee,
            searchQuery: a,
            vanityURLCode: Q,
            vanityURLUses: J,
            originalGuild: s,
            hasChanges: this.hasChanges(),
            guildMetadata: ea,
            analyticsLocation: et,
            isGuildMetadataLoaded: ei,
            originalProfile: o,
            profile: d,
        };
    }
}
let em = new eT(
    m.h,
    __OVERLAY__
        ? {}
        : {
              GUILD_SETTINGS_INIT: e_,
              GUILD_SETTINGS_OPEN: function (e) {
                  (H = !0), e_(e);
              },
              GUILD_SETTINGS_CLOSE: eE,
              GUILD_SETTINGS_UPDATE: function (e) {
                  let t;
                  if (null == l) return !1;
                  for (let t of (k.forEach((t) => {
                      null != l && e.hasOwnProperty(t) && (l = (0, g.hZ)(l, t, e[t] ?? null));
                  }),
                  Object.keys(B))) {
                      if (!e.hasOwnProperty(t)) continue;
                      let n = e[B[t]];
                      null != n ? (X[t] = n) : delete X[t];
                  }
                  null == (t = l) || k.some((e) => t[e] !== s[e]) || (l = s);
              },
              GUILD_SETTINGS_PROFILE_UPDATE: function (e) {
                  let { guildId: t } = e;
                  if (null == d || null == l || l.id !== t) return !1;
                  F.forEach((t) => {
                      if (null != d && e.hasOwnProperty(t)) {
                          let n = e[t];
                          void 0 !== n && (d = { ...d, [t]: n });
                      }
                  });
              },
              GUILD_SETTINGS_CANCEL_CHANGES: function (e) {
                  let { guildId: t } = e;
                  (W = {}), (X = {});
                  let n = L.A.getGuild(t);
                  null != n && (s = l = n);
              },
              GUILD_SETTINGS_SAVE_ROUTE_STACK: function (e) {
                  let { state: t } = e;
                  return (u = t), !1;
              },
              GUILD_SETTINGS_SUBMIT: function () {
                  (j = M.XlH.SUBMITTING), (W = {});
              },
              GUILD_SETTINGS_SUBMIT_SUCCESS: function () {
                  (j = M.XlH.OPEN), (X = {});
              },
              GUILD_SETTINGS_SUBMIT_FAILURE: function (e) {
                  (j = M.XlH.OPEN), (i = i ?? (0, w.x)()), (r = null), (W = e.errors ?? {});
              },
              GUILD_SETTINGS_SET_SECTION: eA,
              GUILD_SETTINGS_SET_SEARCH_QUERY: function (e) {
                  a = e.searchQuery;
              },
              GUILD_SETTINGS_LOADED_BANS: function (e) {
                  (es = e.bans.reduce(
                      (e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e),
                      new Map(),
                  )),
                      el++;
              },
              GUILD_SETTINGS_LOADED_BANS_BATCH: function (e) {
                  let { bans: t, guildId: n } = e;
                  (eo !== n || null == es) && ((eo = n), (es = new Map())),
                      (es = t.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), es)),
                      el++;
              },
              GUILD_SETTINGS_LOADED_INVITES: function (e) {
                  ed = e.invites.reduce((e, t) => ((e[t.code] = eh(t)), e), {});
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
                  if (null == l || t !== l.id) return !1;
                  l = (0, g.hZ)(
                      l,
                      "features",
                      new Set([...l.features, M.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE]),
                  );
              },
              GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED: function (e) {
                  let { guildId: t } = e;
                  if (null == l || t !== l.id) return !1;
                  l = (0, g.hZ)(
                      l,
                      "features",
                      new Set([...l.features, M.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE]),
                  );
              },
              GUILD_BAN_ADD: function (e) {
                  let { user: t, guildId: n } = e;
                  if (null == es || null == l || l.id !== n) return !1;
                  es.set(t.id, { user: t, reason: null }), el++;
              },
              GUILD_BAN_REMOVE: function (e) {
                  let { user: t, guildId: n } = e;
                  if (null == es || null == l || l.id !== n) return !1;
                  es.delete(t.id), el++;
              },
              GUILD_ROLE_CREATE: function (e) {
                  let { guildId: t } = e;
                  if (!eu(t)) return !1;
              },
              GUILD_ROLE_UPDATE: function (e) {
                  let { guildId: t } = e;
                  if (!eu(t)) return !1;
              },
              GUILD_ROLE_DELETE: function (e) {
                  let { guildId: t, roleId: n } = e;
                  if (!eu(t)) return !1;
                  c === n && (c = null);
              },
              GUILD_UPDATE: function (e) {
                  if (null == l || l.id !== e.guild.id) return !1;
                  {
                      let e = L.A.getGuild(l.id);
                      if (null == e) return !1;
                      if (
                          ((o = S.A.getProfile(l.id)),
                          i === M.BEX.PROFILE || i === M.BEX.TAG || P(d, o) || (d = o),
                          i === M.BEX.PROFILE)
                      ) {
                          (s = e), (l = e);
                          return;
                      }
                      let t = (s = e),
                          n = { ...l };
                      k.forEach((i) => {
                          if (
                              !V.has(i) &&
                              (("rulesChannelId" !== i && "publicUpdatesChannelId" !== i) || n[i] !== x.SP) &&
                              "features" !== i
                          ) {
                              if ("ownerConfiguredContentLevel" === i) {
                                  t = (0, g.hZ)(t, i, e[i]);
                                  return;
                              }
                              t = (0, g.hZ)(t, i, n[i]);
                          }
                      }),
                          (l = t);
                  }
              },
              GUILD_DELETE: function (e) {
                  if (null == l || l.id !== e.guild.id) return !1;
                  eE();
              },
              GUILD_PROFILE_FETCH_SUCCESS: function (e) {
                  let { profile: t } = e;
                  if (t.id !== l?.id || P(d, o)) return !1;
                  o = d = t;
              },
              GUILD_PROFILE_UPDATE: ef,
              GUILD_PROFILE_UPDATE_SUCCESS: function (e) {
                  let { profile: t } = e;
                  if (d?.id == null || !eu(d.id)) return !1;
                  t.id === l?.id && ((o = d = t), (Y = null));
              },
              GUILD_PROFILE_UPDATE_FAILURE: ep,
              GUILD_PROFILE_UPDATE_VISIBILITY: ef,
              GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS: function (e) {
                  let { guildId: t } = e;
                  if (d?.id == null || !eu(d.id)) return !1;
                  t === l?.id && ((o = d = S.A.getProfile(t)), (Y = null));
              },
              GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE: ep,
              USER_CONNECTIONS_UPDATE: eI,
              GUILD_INTEGRATIONS_UPDATE: eI,
              INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
                  (ed = { ...ed }), delete ed[e.code];
              },
              INSTANT_INVITE_CREATE_SUCCESS: function (e) {
                  ed = { ...ed, [e.invite.code]: eh(e.invite) };
              },
              GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: function (e) {
                  let { guildId: t, metadata: n } = e;
                  null != l &&
                      t === l.id &&
                      (!1 === ei && (ei = !0),
                      (ea = er =
                          {
                              primaryCategoryId: n.primaryCategoryId ?? G.ig,
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
                      (W = {}));
              },
              GUILD_DISCOVERY_METADATA_FETCH_FAIL: function () {
                  er = ea = en;
              },
              GUILD_DISCOVERY_CATEGORY_ADD: function (e) {
                  let { guildId: t, categoryId: n } = e;
                  null != l &&
                      t === l.id &&
                      ((ea = { ...ea, secondaryCategoryIds: [...ea.secondaryCategoryIds, n] }),
                      (er = { ...er, secondaryCategoryIds: [...er.secondaryCategoryIds, n] }));
              },
              GUILD_DISCOVERY_CATEGORY_DELETE: function (e) {
                  let t,
                      { guildId: n, categoryId: i } = e;
                  if (null == l || n !== l.id) return;
                  let r = ea.secondaryCategoryIds.indexOf(i);
                  -1 !== r &&
                      ((t = [...ea.secondaryCategoryIds]).splice(r, 1), (ea = { ...ea, secondaryCategoryIds: t })),
                      -1 !== (r = er.secondaryCategoryIds.indexOf(i)) &&
                          ((t = [...er.secondaryCategoryIds]).splice(r, 1), (er = { ...er, secondaryCategoryIds: t }));
              },
              GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL: function (e) {
                  let { guildId: t, errors: n } = e;
                  null != l && t === l.id && (W = n ?? {});
              },
              GUILD_UPDATE_DISCOVERY_METADATA: function (e) {
                  let {
                      guildId: t,
                      primaryCategoryId: n,
                      keywords: i,
                      emojiDiscoverabilityEnabled: r,
                      isPublished: a,
                      reasonsToJoin: s,
                      socialLinks: o,
                      about: d,
                  } = e;
                  null != l &&
                      t === l.id &&
                      (ea = {
                          ...ea,
                          primaryCategoryId: null != n ? n : ea.primaryCategoryId,
                          keywords: null != i ? i : ea.keywords,
                          emojiDiscoverabilityEnabled: r ?? ea.emojiDiscoverabilityEnabled,
                          isPublished: a ?? ea.isPublished,
                          reasonsToJoin: null != s ? s : ea.reasonsToJoin,
                          socialLinks: null != o ? o : ea.socialLinks,
                          about: null != d ? d : ea.about,
                      });
              },
              GUILD_UPDATE_DISCOVERY_METADATA_FAIL: function (e) {
                  let { guildId: t, errors: n } = e;
                  null != l && t === l.id && (W = n ?? {});
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
                  if (null == l || l.id !== t) return !1;
                  (z = n), (Z = i);
              },
          },
);
