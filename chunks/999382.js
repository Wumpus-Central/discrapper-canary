let r, i, a, o, s, l, c, u, d, f;
n.d(t, { Z: () => tt }), n(388685), n(997841);
var p,
    _ = n(392711),
    m = n.n(_),
    h = n(913527),
    g = n.n(h),
    E = n(442837),
    b = n(544891),
    y = n(433517),
    O = n(570140),
    v = n(311929),
    S = n(314852),
    I = n(131704),
    T = n(601964),
    A = n(758449),
    C = n(598077),
    N = n(430824),
    P = n(594174),
    R = n(411198),
    w = n(709054),
    D = n(330010),
    x = n(736617),
    L = n(978946),
    j = n(981631),
    M = n(128449),
    k = n(135899);
function U(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function G(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                U(e, t, n[t]);
            });
    }
    return e;
}
function Z(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function B(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Z(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let F = !0,
    V = [
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
    ],
    H = [
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
    Y = new Set(["icon", "splash", "banner", "discoverySplash", "homeHeader"]),
    W = !1,
    K = j.QZA.CLOSED,
    z = {},
    q = null,
    Q = !1,
    X = !1,
    J = !1,
    $ = null,
    ee = null,
    et = null,
    en = 0,
    er = j.BpS.NONE,
    ei = null,
    ea = {
        primaryCategoryId: M.o3,
        secondaryCategoryIds: [],
        keywords: [],
        emojiDiscoverabilityEnabled: F,
        partnerActionedTimestamp: null,
        partnerApplicationTimestamp: null,
        isPublished: !1,
        reasonsToJoin: [],
        socialLinks: [],
        about: "",
    },
    eo = !1,
    es = ea,
    el = ea,
    ec = null,
    eu = 0,
    ed = null,
    ef = null,
    ep = null;
function e_(e) {
    if (null == s || null == o || o.id !== e) return !1;
    let t = N.Z.getGuild(e);
    return null != t && (o === s ? (s = o = t) : (o = t), !0);
}
function em(e) {
    (W = !0), eh(e);
}
function eh(e) {
    var t;
    let { guildId: n, section: i, subsection: a, location: d } = e,
        p = N.Z.getGuild(n);
    if (null == p) return eg();
    let _ = S.Z.getProfile(n);
    (o = s = p),
        (l = c = _),
        (J = X),
        (ee = $),
        (K = j.QZA.OPEN),
        (z = {}),
        (q = null),
        (u = w.default.castGuildIdAsEveryoneGuildRoleId(n)),
        (er = s.mfaLevel),
        (el = es),
        (f = null),
        (ei = d),
        eb({
            section: null != (t = null != i ? i : r) ? t : (0, L.r)(),
            subsection: null != a ? a : null,
        });
}
function eg() {
    (W = !1),
        (K = j.QZA.CLOSED),
        (o = s = null),
        (Q = !1),
        (J = !1),
        (ee = null),
        (et = null),
        (en = 0),
        (ec = null),
        (ef = null),
        (ep = null),
        (r = null),
        (i = null),
        (a = null),
        (er = j.BpS.NONE),
        (d = void 0);
}
function eE(e) {
    let { state: t } = e;
    return (d = t), !1;
}
function eb(e) {
    if (null == s) return !1;
    let t = r;
    if (((r = e.section), (i = e.subsection), r === j.pNK.INSTANT_INVITES || r === j.pNK.INVITES))
        b.tn
            .get({
                url: j.ANM.GUILD_INSTANT_INVITES(s.id),
                oldFormErrors: !0,
                rejectWithError: !0,
            })
            .then((e) => {
                O.Z.dispatch({
                    type: "GUILD_SETTINGS_LOADED_INVITES",
                    invites: e.body,
                });
            });
    else if (r === j.pNK.INTEGRATIONS || r === j.pNK.ROLES) {
        if (((u = null), t !== e.section)) return eK(e);
    } else
        r === j.pNK.MEMBERS
            ? (u = (0, T.lV)(s))
            : r === j.pNK.VANITY_URL
              ? (0, x.U5)(s.id)
              : r === j.pNK.SAFETY &&
                O.Z.dispatch({
                    type: "GUILD_SETTINGS_SAFETY_SET_SUBSECTION",
                    subsection: null == i ? j.KsC.SAFETY_OVERVIEW : i,
                });
}
function ey(e) {
    a = e.searchQuery;
}
function eO(e) {
    let { guildId: t } = e;
    z = {};
    let n = N.Z.getGuild(t);
    null != n && (o = s = n);
}
function ev() {
    (K = j.QZA.SUBMITTING), (z = {});
}
function eS() {
    K = j.QZA.OPEN;
}
function eI(e) {
    var t;
    (K = j.QZA.OPEN), (r = null != r ? r : (0, L.r)()), (i = null), (z = null != (t = e.errors) ? t : {});
}
function eT() {
    let e = s;
    if (null == e) return !1;
    V.some((t) => e[t] !== o[t]) || (s = o);
}
function eA(e) {
    if (null == s) return !1;
    V.forEach((t) => {
        if (null != s && e.hasOwnProperty(t)) {
            var n;
            s = (0, v.t8)(s, t, null != (n = e[t]) ? n : null);
        }
    }),
        eT();
}
function eC(e) {
    let { guildId: t } = e;
    if (null == c || null == s || s.id !== t) return !1;
    H.forEach((t) => {
        if (null != c && e.hasOwnProperty(t)) {
            let n = e[t];
            void 0 !== n && (c = B(G({}, c), { [t]: n }));
        }
    });
}
function eN(e) {
    var t;
    return new A.Z({
        code: e.code,
        temporary: e.temporary,
        revoked: e.revoked,
        inviter: null != e.inviter ? new C.Z(e.inviter) : null,
        channel: (0, I.jD)(e.channel),
        guild: null != e.guild ? (0, R.Qs)(e.guild) : null,
        uses: e.uses,
        maxUses: e.max_uses,
        maxAge: e.max_age,
        createdAt: g()(null != (t = e.created_at) ? t : void 0),
        flags: e.flags,
        roles: e.roles,
    });
}
function eP(e) {
    ef = e.invites.reduce((e, t) => ((e[t.code] = eN(t)), e), {});
}
function eR(e) {
    (ef = G({}, ef)), delete ef[e.code];
}
function ew(e) {
    ef = B(G({}, ef), { [e.invite.code]: eN(e.invite) });
}
function eD(e) {
    (ec = e.bans.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), new Map())), eu++;
}
function ex(e) {
    let { bans: t, guildId: n } = e;
    (ed !== n || null == ec) && ((ed = n), (ec = new Map())),
        (ec = t.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), ec)),
        eu++;
}
function eL(e) {
    let { user: t, guildId: n } = e;
    if (null == ec || null == s || s.id !== n) return !1;
    ec.set(t.id, {
        user: t,
        reason: null,
    }),
        eu++;
}
function ej(e) {
    let { user: t, guildId: n } = e;
    if (null == ec || null == s || s.id !== n) return !1;
    ec.delete(t.id), eu++;
}
function eM(e) {
    if (null == s || s.id !== e.guild.id) return !1;
    {
        let e = N.Z.getGuild(s.id);
        if (null == e) return !1;
        if (((l = S.Z.getProfile(s.id)), r !== j.pNK.PROFILE && r !== j.pNK.TAG && (c = l), r === j.pNK.PROFILE)) {
            (o = e), (s = e);
            return;
        }
        let t = (o = e),
            n = G({}, s);
        V.forEach((r) => {
            if (
                !Y.has(r) &&
                (("rulesChannelId" !== r && "publicUpdatesChannelId" !== r) || n[r] !== k.b4) &&
                "features" !== r
            ) {
                if ("ownerConfiguredContentLevel" === r) {
                    t = (0, v.t8)(t, r, e[r]);
                    return;
                }
                t = (0, v.t8)(t, r, n[r]);
            }
        }),
            (s = t);
    }
}
function ek(e) {
    if (null == s || s.id !== e.guild.id) return !1;
    eg();
}
function eU(e) {
    let { roleId: t } = e;
    u = null != t ? t : null;
}
function eG(e) {
    let { guildId: t } = e;
    if (!e_(t)) return !1;
}
function eZ(e) {
    let { guildId: t } = e;
    if (!e_(t)) return !1;
}
function eB(e) {
    let { guildId: t, roleId: n } = e;
    if (!e_(t)) return !1;
    u === n && (u = null);
}
function eF(e) {
    (Q = !0), (X = J = e.enabled), ($ = ee = e.channelId);
}
function eV(e) {
    let { guildId: t, enabled: n, channelId: r } = e;
    if (null == s || s.id !== t) return !1;
    (J = n), (ee = r);
}
function eH(e) {
    var t;
    (et = null != (t = e.code) ? t : null), (en = e.uses);
}
function eY(e) {
    let { level: t } = e;
    er = t;
}
function eW(e) {
    ep = e.integrations;
}
function eK(e) {
    if (null == s || K !== j.QZA.OPEN || ("GUILD_INTEGRATIONS_UPDATE" === e.type && e.guildId !== s.id)) return !1;
    (0, D.i)(s.id);
}
function ez(e) {
    let { guildId: t } = e;
    if (null == s || t !== s.id) return !1;
    s = (0, v.t8)(s, "features", new Set([...s.features, j.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE]));
}
function eq(e) {
    let { guildId: t } = e;
    if (null == s || t !== s.id) return !1;
    s = (0, v.t8)(
        s,
        "features",
        new Set([...s.features, j.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE]),
    );
}
function eQ(e) {
    var t, n, r, i, a, o, l, c, u, d;
    let { guildId: f, metadata: p } = e;
    null != s &&
        f === s.id &&
        (!1 === eo && (eo = !0),
        (el = es =
            {
                primaryCategoryId: null != (t = p.primaryCategoryId) ? t : M.o3,
                secondaryCategoryIds: null != (n = p.secondaryCategoryIds) ? n : [],
                keywords: null != (r = p.keywords) ? r : [],
                emojiDiscoverabilityEnabled: null != (i = p.emojiDiscoverabilityEnabled) ? i : F,
                partnerActionedTimestamp: null != (a = p.partnerActionedTimestamp) ? a : null,
                partnerApplicationTimestamp: null != (o = p.partnerApplicationTimestamp) ? o : null,
                isPublished: null != (l = p.isPublished) && l,
                reasonsToJoin: null != (c = p.reasonsToJoin) ? c : [],
                socialLinks: null != (u = p.socialLinks) ? u : [],
                about: null != (d = p.about) ? d : "",
            }),
        (z = {}));
}
function eX() {
    es = el = ea;
}
function eJ(e) {
    let { slug: t } = e;
    f = t;
}
function e$(e) {
    let {} = e;
    f = null;
}
function e0(e) {
    let { guildId: t, categoryId: n } = e;
    null != s &&
        t === s.id &&
        ((el = B(G({}, el), {
            secondaryCategoryIds: [...el.secondaryCategoryIds, n],
        })),
        (es = B(G({}, es), {
            secondaryCategoryIds: [...es.secondaryCategoryIds, n],
        })));
}
function e1(e) {
    let t,
        { guildId: n, categoryId: r } = e;
    if (null == s || n !== s.id) return;
    let i = el.secondaryCategoryIds.indexOf(r);
    -1 !== i && ((t = [...el.secondaryCategoryIds]).splice(i, 1), (el = B(G({}, el), { secondaryCategoryIds: t }))),
        -1 !== (i = es.secondaryCategoryIds.indexOf(r)) &&
            ((t = [...es.secondaryCategoryIds]).splice(i, 1), (es = B(G({}, es), { secondaryCategoryIds: t })));
}
function e3(e) {
    let { guildId: t, errors: n } = e;
    null != s && t === s.id && (z = null != n ? n : {});
}
function e2(e) {
    let {
        guildId: t,
        primaryCategoryId: n,
        keywords: r,
        emojiDiscoverabilityEnabled: i,
        isPublished: a,
        reasonsToJoin: o,
        socialLinks: l,
        about: c,
    } = e;
    null != s &&
        t === s.id &&
        (el = B(G({}, el), {
            primaryCategoryId: null != n ? n : el.primaryCategoryId,
            keywords: null != r ? r : el.keywords,
            emojiDiscoverabilityEnabled: null != i ? i : el.emojiDiscoverabilityEnabled,
            isPublished: null != a ? a : el.isPublished,
            reasonsToJoin: null != o ? o : el.reasonsToJoin,
            socialLinks: null != l ? l : el.socialLinks,
            about: null != c ? c : el.about,
        }));
}
function e4(e) {
    let { guildId: t, errors: n } = e;
    null != s && t === s.id && (z = null != n ? n : {});
}
function e5(e) {
    let { profile: t } = e;
    t.id === (null == s ? void 0 : s.id) && (l = c = t);
}
function e8(e) {
    let { guildId: t } = e;
    if (null == s || s.id !== t) return !1;
    q = null;
}
function e6(e) {
    let { profile: t } = e;
    if ((null == c ? void 0 : c.id) == null || !e_(c.id)) return !1;
    t.id === (null == s ? void 0 : s.id) && ((l = c = t), (q = null));
}
function e7(e) {
    let { guildId: t, error: n } = e;
    if (null == s || s.id !== t) return !1;
    q = n;
}
function e9(e) {
    let { guildId: t } = e;
    if ((null == c ? void 0 : c.id) == null || !e_(c.id)) return !1;
    t === (null == s ? void 0 : s.id) && ((l = c = S.Z.getProfile(t)), (q = null));
}
class te extends (p = E.ZP.Store) {
    initialize() {
        this.waitFor(N.Z, S.Z, P.default);
    }
    getMetadata() {
        return el;
    }
    widgetHasChanges() {
        return !1 !== Q && (J !== X || ee !== $);
    }
    hasChanges() {
        return !m().isEqual(s, o) || !m().isEqual(el, es) || !m().isEqual(c, l) || this.widgetHasChanges();
    }
    isOpen() {
        return W;
    }
    getSavedRouteState() {
        return d;
    }
    getSection() {
        return r;
    }
    showNotice() {
        return this.hasChanges();
    }
    getGuildId() {
        return null != s ? s.id : null;
    }
    showPublicSuccessModal() {
        return !y.K.get(k.zs);
    }
    getGuild() {
        return s;
    }
    getGuildProfile() {
        return c;
    }
    getWidget() {
        return {
            enabled: J,
            channelId: ee,
        };
    }
    isSubmitting() {
        return K === j.QZA.SUBMITTING;
    }
    isGuildMetadataLoaded() {
        return eo;
    }
    getErrors() {
        return z;
    }
    getError(e) {
        var t;
        return null != (t = z[e]) ? t : null;
    }
    getProfileError() {
        return q;
    }
    getSelectedRoleId() {
        return u;
    }
    getSlug() {
        return f;
    }
    getBans() {
        return [ec, eu];
    }
    getProps() {
        return {
            submitting: this.isSubmitting(),
            integrations: ep,
            section: r,
            subsection: i,
            errors: z,
            guild: s,
            bans: ec,
            bansVersion: eu,
            invites: ef,
            selectedRoleId: u,
            fetchedEmbed: Q,
            embedEnabled: J,
            embedChannelId: ee,
            mfaLevel: er,
            searchQuery: a,
            vanityURLCode: et,
            vanityURLUses: en,
            originalGuild: o,
            hasChanges: this.hasChanges(),
            guildMetadata: el,
            analyticsLocation: ei,
            isGuildMetadataLoaded: eo,
            originalProfile: l,
            profile: c,
        };
    }
}
U(te, "displayName", "GuildSettingsStore");
let tt = new te(
    O.Z,
    __OVERLAY__
        ? {}
        : {
              GUILD_SETTINGS_INIT: eh,
              GUILD_SETTINGS_OPEN: em,
              GUILD_SETTINGS_CLOSE: eg,
              GUILD_SETTINGS_UPDATE: eA,
              GUILD_SETTINGS_PROFILE_UPDATE: eC,
              GUILD_SETTINGS_CANCEL_CHANGES: eO,
              GUILD_SETTINGS_SAVE_ROUTE_STACK: eE,
              GUILD_SETTINGS_SUBMIT: ev,
              GUILD_SETTINGS_SUBMIT_SUCCESS: eS,
              GUILD_SETTINGS_SUBMIT_FAILURE: eI,
              GUILD_SETTINGS_SET_SECTION: eb,
              GUILD_SETTINGS_SET_SEARCH_QUERY: ey,
              GUILD_SETTINGS_LOADED_BANS: eD,
              GUILD_SETTINGS_LOADED_BANS_BATCH: ex,
              GUILD_SETTINGS_LOADED_INVITES: eP,
              GUILD_SETTINGS_SET_WIDGET: eF,
              GUILD_SETTINGS_SET_VANITY_URL: eH,
              GUILD_SETTINGS_SET_MFA_SUCCESS: eY,
              GUILD_SETTINGS_ROLE_SELECT: eU,
              GUILD_SETTINGS_LOADED_INTEGRATIONS: eW,
              GUILD_SETTINGS_PIN_PERMISSION_MIGRATED: ez,
              GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED: eq,
              GUILD_BAN_ADD: eL,
              GUILD_BAN_REMOVE: ej,
              GUILD_ROLE_CREATE: eG,
              GUILD_ROLE_UPDATE: eZ,
              GUILD_ROLE_DELETE: eB,
              GUILD_UPDATE: eM,
              GUILD_DELETE: ek,
              GUILD_PROFILE_FETCH_SUCCESS: e5,
              GUILD_PROFILE_UPDATE: e8,
              GUILD_PROFILE_UPDATE_SUCCESS: e6,
              GUILD_PROFILE_UPDATE_FAILURE: e7,
              GUILD_PROFILE_UPDATE_VISIBILITY: e8,
              GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS: e9,
              GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE: e7,
              USER_CONNECTIONS_UPDATE: eK,
              GUILD_INTEGRATIONS_UPDATE: eK,
              INSTANT_INVITE_REVOKE_SUCCESS: eR,
              INSTANT_INVITE_CREATE_SUCCESS: ew,
              GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: eQ,
              GUILD_DISCOVERY_METADATA_FETCH_FAIL: eX,
              GUILD_DISCOVERY_CATEGORY_ADD: e0,
              GUILD_DISCOVERY_CATEGORY_DELETE: e1,
              GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL: e3,
              GUILD_UPDATE_DISCOVERY_METADATA: e2,
              GUILD_UPDATE_DISCOVERY_METADATA_FAIL: e4,
              GUILD_DISCOVERY_SLUG_FETCH_SUCCESS: eJ,
              GUILD_DISCOVERY_SLUG_FETCH_FAIL: e$,
              GUILD_SETTINGS_WIDGET_UPDATE: eV,
          },
);
