let r, i, a, o, s, l, c, u, d, f;
(n.d(t, { Z: () => tn }), n(388685), n(997841));
var _,
    p = n(392711),
    h = n.n(p),
    m = n(913527),
    g = n.n(m),
    E = n(442837),
    b = n(544891),
    y = n(433517),
    O = n(570140),
    v = n(749210),
    I = n(311929),
    T = n(314852),
    S = n(131704),
    A = n(601964),
    N = n(758449),
    C = n(598077),
    R = n(430824),
    P = n(594174),
    w = n(411198),
    D = n(709054),
    L = n(372454),
    x = n(330010),
    M = n(621319),
    k = n(978946),
    j = n(981631),
    U = n(128449),
    G = n(135899);
function B(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function V(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                B(e, t, n[t]);
            }));
    }
    return e;
}
function F(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function Z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : F(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let H = !0,
    Y = ['name', 'description', 'icon', 'splash', 'banner', 'homeHeader', 'afkChannelId', 'afkTimeout', 'systemChannelId', 'verificationLevel', 'defaultMessageNotifications', 'explicitContentFilter', 'features', 'systemChannelFlags', 'preferredLocale', 'rulesChannelId', 'safetyAlertsChannelId', 'ownerConfiguredContentLevel', 'discoverySplash', 'publicUpdatesChannelId', 'premiumProgressBarEnabled'],
    W = ['brandColorPrimary', 'description', 'icon', 'name', 'traits', 'visibility', 'gameApplicationIds', 'customBanner', 'tag', 'badge', 'badgeColorPrimary', 'badgeColorSecondary'],
    K = new Set(['icon', 'splash', 'banner', 'discoverySplash', 'homeHeader']),
    z = !1,
    q = j.QZA.CLOSED,
    X = {},
    Q = null,
    J = !1,
    $ = !1,
    ee = !1,
    et = null,
    en = null,
    er = null,
    ei = 0,
    ea = j.BpS.NONE,
    eo = null,
    es = {
        primaryCategoryId: U.o3,
        secondaryCategoryIds: [],
        keywords: [],
        emojiDiscoverabilityEnabled: H,
        partnerActionedTimestamp: null,
        partnerApplicationTimestamp: null,
        isPublished: !1,
        reasonsToJoin: [],
        socialLinks: [],
        about: ''
    },
    el = !1,
    ec = es,
    eu = es,
    ed = null,
    ef = 0,
    e_ = null,
    ep = null,
    eh = null;
function em(e) {
    if (null == s || null == o || o.id !== e) return !1;
    let t = R.Z.getGuild(e);
    return null != t && (o === s ? (s = o = t) : (o = t), !0);
}
function eg(e) {
    ((z = !0), eE(e));
}
function eE(e) {
    var t;
    let { guildId: n, section: i, subsection: a, location: d } = e,
        _ = R.Z.getGuild(n);
    if (null == _) return eb();
    let p = T.Z.getProfile(n);
    ((o = s = _),
        (l = c = p),
        (ee = $),
        (en = et),
        (q = j.QZA.OPEN),
        (X = {}),
        (Q = null),
        (u = D.default.castGuildIdAsEveryoneGuildRoleId(n)),
        (ea = s.mfaLevel),
        (eu = ec),
        (f = null),
        (eo = d),
        eO({
            section: null != (t = null != i ? i : r) ? t : (0, k.r)(),
            subsection: null != a ? a : null
        }));
}
function eb() {
    ((z = !1), (q = j.QZA.CLOSED), (o = s = null), (J = !1), (ee = !1), (en = null), (er = null), (ei = 0), (ed = null), (ep = null), (eh = null), (r = null), (i = null), (a = null), (ea = j.BpS.NONE), (d = void 0));
}
function ey(e) {
    let { state: t } = e;
    return ((d = t), !1);
}
function eO(e) {
    if (null == s) return !1;
    let t = r;
    if (((r = e.section), (i = e.subsection), r === j.pNK.BANS)) {
        let { enabled: e } = L.T.getCurrentConfig({
            guildId: s.id,
            location: '7f0c91_1'
        });
        e || v.Z.fetchGuildBans(s.id);
    } else if (r === j.pNK.INSTANT_INVITES || r === j.pNK.INVITES)
        b.tn
            .get({
                url: j.ANM.GUILD_INSTANT_INVITES(s.id),
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then((e) => {
                O.Z.dispatch({
                    type: 'GUILD_SETTINGS_LOADED_INVITES',
                    invites: e.body
                });
            });
    else if (r === j.pNK.INTEGRATIONS || r === j.pNK.ROLES) {
        if (((u = null), t !== e.section)) return eq(e);
    } else
        r === j.pNK.MEMBERS
            ? (u = (0, A.lV)(s))
            : r === j.pNK.VANITY_URL
              ? (0, M.U5)(s.id)
              : r === j.pNK.SAFETY &&
                O.Z.dispatch({
                    type: 'GUILD_SETTINGS_SAFETY_SET_SUBSECTION',
                    subsection: null == i ? j.KsC.SAFETY_OVERVIEW : i
                });
}
function ev(e) {
    a = e.searchQuery;
}
function eI(e) {
    let { guildId: t } = e;
    X = {};
    let n = R.Z.getGuild(t);
    null != n && (o = s = n);
}
function eT() {
    ((q = j.QZA.SUBMITTING), (X = {}));
}
function eS() {
    q = j.QZA.OPEN;
}
function eA(e) {
    var t;
    ((q = j.QZA.OPEN), (r = null != r ? r : (0, k.r)()), (i = null), (X = null != (t = e.errors) ? t : {}));
}
function eN() {
    let e = s;
    if (null == e) return !1;
    Y.some((t) => e[t] !== o[t]) || (s = o);
}
function eC(e) {
    if (null == s) return !1;
    (Y.forEach((t) => {
        if (null != s && e.hasOwnProperty(t)) {
            var n;
            s = (0, I.t8)(s, t, null != (n = e[t]) ? n : null);
        }
    }),
        eN());
}
function eR(e) {
    let { guildId: t } = e;
    if (null == c || null == s || s.id !== t) return !1;
    W.forEach((t) => {
        if (null != c && e.hasOwnProperty(t)) {
            let n = e[t];
            void 0 !== n && (c = Z(V({}, c), { [t]: n }));
        }
    });
}
function eP(e) {
    var t;
    return new N.Z({
        code: e.code,
        temporary: e.temporary,
        revoked: e.revoked,
        inviter: null != e.inviter ? new C.Z(e.inviter) : null,
        channel: (0, S.jD)(e.channel),
        guild: null != e.guild ? (0, w.Qs)(e.guild) : null,
        uses: e.uses,
        maxUses: e.max_uses,
        maxAge: e.max_age,
        createdAt: g()(null != (t = e.created_at) ? t : void 0),
        flags: e.flags
    });
}
function ew(e) {
    ep = e.invites.reduce((e, t) => ((e[t.code] = eP(t)), e), {});
}
function eD(e) {
    ((ep = V({}, ep)), delete ep[e.code]);
}
function eL(e) {
    ep = Z(V({}, ep), { [e.invite.code]: eP(e.invite) });
}
function ex(e) {
    ((ed = e.bans.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), new Map())), ef++);
}
function eM(e) {
    let { bans: t, guildId: n } = e;
    ((e_ !== n || null == ed) && ((e_ = n), (ed = new Map())), (ed = t.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), ed)), ef++);
}
function ek(e) {
    let { user: t, guildId: n } = e;
    if (null == ed || null == s || s.id !== n) return !1;
    (ed.set(t.id, {
        user: t,
        reason: null
    }),
        ef++);
}
function ej(e) {
    let { user: t, guildId: n } = e;
    if (null == ed || null == s || s.id !== n) return !1;
    (ed.delete(t.id), ef++);
}
function eU(e) {
    if (null == s || s.id !== e.guild.id) return !1;
    {
        let e = R.Z.getGuild(s.id);
        if (null == e) return !1;
        if (((l = T.Z.getProfile(s.id)), r !== j.pNK.PROFILE && r !== j.pNK.TAG && (c = l), r === j.pNK.PROFILE)) {
            ((o = e), (s = e));
            return;
        }
        let t = (o = e),
            n = V({}, s);
        (Y.forEach((r) => {
            if (!K.has(r) && (('rulesChannelId' !== r && 'publicUpdatesChannelId' !== r) || n[r] !== G.b4) && 'features' !== r) {
                if ('ownerConfiguredContentLevel' === r) {
                    t = (0, I.t8)(t, r, e[r]);
                    return;
                }
                t = (0, I.t8)(t, r, n[r]);
            }
        }),
            (s = t));
    }
}
function eG(e) {
    if (null == s || s.id !== e.guild.id) return !1;
    eb();
}
function eB(e) {
    let { roleId: t } = e;
    u = null != t ? t : null;
}
function eV(e) {
    let { guildId: t } = e;
    if (!em(t)) return !1;
}
function eF(e) {
    let { guildId: t } = e;
    if (!em(t)) return !1;
}
function eZ(e) {
    let { guildId: t, roleId: n } = e;
    if (!em(t)) return !1;
    u === n && (u = null);
}
function eH(e) {
    ((J = !0), ($ = ee = e.enabled), (et = en = e.channelId));
}
function eY(e) {
    let { guildId: t, enabled: n, channelId: r } = e;
    if (null == s || s.id !== t) return !1;
    ((ee = n), (en = r));
}
function eW(e) {
    var t;
    ((er = null != (t = e.code) ? t : null), (ei = e.uses));
}
function eK(e) {
    let { level: t } = e;
    ea = t;
}
function ez(e) {
    eh = e.integrations;
}
function eq(e) {
    if (null == s || q !== j.QZA.OPEN || ('GUILD_INTEGRATIONS_UPDATE' === e.type && e.guildId !== s.id)) return !1;
    (0, x.i)(s.id);
}
function eX(e) {
    let { guildId: t } = e;
    null != s && t === s.id && (s = (0, I.t8)(s, 'features', s.features.union(new Set([j.oNc.PIN_PERMISSION_MIGRATION_COMPLETE]))));
}
function eQ(e) {
    var t, n, r, i, a, o, l, c, u, d;
    let { guildId: f, metadata: _ } = e;
    null != s &&
        f === s.id &&
        (!1 === el && (el = !0),
        (eu = ec =
            {
                primaryCategoryId: null != (t = _.primaryCategoryId) ? t : U.o3,
                secondaryCategoryIds: null != (n = _.secondaryCategoryIds) ? n : [],
                keywords: null != (r = _.keywords) ? r : [],
                emojiDiscoverabilityEnabled: null != (i = _.emojiDiscoverabilityEnabled) ? i : H,
                partnerActionedTimestamp: null != (a = _.partnerActionedTimestamp) ? a : null,
                partnerApplicationTimestamp: null != (o = _.partnerApplicationTimestamp) ? o : null,
                isPublished: null != (l = _.isPublished) && l,
                reasonsToJoin: null != (c = _.reasonsToJoin) ? c : [],
                socialLinks: null != (u = _.socialLinks) ? u : [],
                about: null != (d = _.about) ? d : ''
            }),
        (X = {}));
}
function eJ() {
    ec = eu = es;
}
function e$(e) {
    let { slug: t } = e;
    f = t;
}
function e0(e) {
    let {} = e;
    f = null;
}
function e1(e) {
    let { guildId: t, categoryId: n } = e;
    null != s &&
        t === s.id &&
        ((eu = Z(V({}, eu), {
            secondaryCategoryIds: [...eu.secondaryCategoryIds, n]
        })),
        (ec = Z(V({}, ec), {
            secondaryCategoryIds: [...ec.secondaryCategoryIds, n]
        })));
}
function e2(e) {
    let t,
        { guildId: n, categoryId: r } = e;
    if (null == s || n !== s.id) return;
    let i = eu.secondaryCategoryIds.indexOf(r);
    (-1 !== i && ((t = [...eu.secondaryCategoryIds]).splice(i, 1), (eu = Z(V({}, eu), { secondaryCategoryIds: t }))), -1 !== (i = ec.secondaryCategoryIds.indexOf(r)) && ((t = [...ec.secondaryCategoryIds]).splice(i, 1), (ec = Z(V({}, ec), { secondaryCategoryIds: t }))));
}
function e3(e) {
    let { guildId: t, errors: n } = e;
    null != s && t === s.id && (X = null != n ? n : {});
}
function e4(e) {
    let { guildId: t, primaryCategoryId: n, keywords: r, emojiDiscoverabilityEnabled: i, isPublished: a, reasonsToJoin: o, socialLinks: l, about: c } = e;
    null != s &&
        t === s.id &&
        (eu = Z(V({}, eu), {
            primaryCategoryId: null != n ? n : eu.primaryCategoryId,
            keywords: null != r ? r : eu.keywords,
            emojiDiscoverabilityEnabled: null != i ? i : eu.emojiDiscoverabilityEnabled,
            isPublished: null != a ? a : eu.isPublished,
            reasonsToJoin: null != o ? o : eu.reasonsToJoin,
            socialLinks: null != l ? l : eu.socialLinks,
            about: null != c ? c : eu.about
        }));
}
function e5(e) {
    let { guildId: t, errors: n } = e;
    null != s && t === s.id && (X = null != n ? n : {});
}
function e6(e) {
    let { profile: t } = e;
    t.id === (null == s ? void 0 : s.id) && (l = c = t);
}
function e8(e) {
    let { guildId: t } = e;
    if (null == s || s.id !== t) return !1;
    Q = null;
}
function e7(e) {
    let { profile: t } = e;
    if ((null == c ? void 0 : c.id) == null || !em(c.id)) return !1;
    t.id === (null == s ? void 0 : s.id) && ((l = c = t), (Q = null));
}
function e9(e) {
    let { guildId: t, error: n } = e;
    if (null == s || s.id !== t) return !1;
    Q = n;
}
function te(e) {
    let { guildId: t } = e;
    if ((null == c ? void 0 : c.id) == null || !em(c.id)) return !1;
    t === (null == s ? void 0 : s.id) && ((l = c = T.Z.getProfile(t)), (Q = null));
}
class tt extends (_ = E.ZP.Store) {
    initialize() {
        this.waitFor(R.Z, T.Z, P.default);
    }
    getMetadata() {
        return eu;
    }
    widgetHasChanges() {
        return !1 !== J && (ee !== $ || en !== et);
    }
    hasChanges() {
        return !h().isEqual(s, o) || !h().isEqual(eu, ec) || !h().isEqual(c, l) || this.widgetHasChanges();
    }
    isOpen() {
        return z;
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
        return !y.K.get(G.zs);
    }
    getGuild() {
        return s;
    }
    getGuildProfile() {
        return c;
    }
    getWidget() {
        return {
            enabled: ee,
            channelId: en
        };
    }
    isSubmitting() {
        return q === j.QZA.SUBMITTING;
    }
    isGuildMetadataLoaded() {
        return el;
    }
    getErrors() {
        return X;
    }
    getError(e) {
        var t;
        return null != (t = X[e]) ? t : null;
    }
    getProfileError() {
        return Q;
    }
    getSelectedRoleId() {
        return u;
    }
    getSlug() {
        return f;
    }
    getBans() {
        return [ed, ef];
    }
    getProps() {
        return {
            submitting: this.isSubmitting(),
            integrations: eh,
            section: r,
            subsection: i,
            errors: X,
            guild: s,
            bans: ed,
            bansVersion: ef,
            invites: ep,
            selectedRoleId: u,
            fetchedEmbed: J,
            embedEnabled: ee,
            embedChannelId: en,
            mfaLevel: ea,
            searchQuery: a,
            vanityURLCode: er,
            vanityURLUses: ei,
            originalGuild: o,
            hasChanges: this.hasChanges(),
            guildMetadata: eu,
            analyticsLocation: eo,
            isGuildMetadataLoaded: el,
            originalProfile: l,
            profile: c
        };
    }
}
B(tt, 'displayName', 'GuildSettingsStore');
let tn = new tt(
    O.Z,
    __OVERLAY__
        ? {}
        : {
              GUILD_SETTINGS_INIT: eE,
              GUILD_SETTINGS_OPEN: eg,
              GUILD_SETTINGS_CLOSE: eb,
              GUILD_SETTINGS_UPDATE: eC,
              GUILD_SETTINGS_PROFILE_UPDATE: eR,
              GUILD_SETTINGS_CANCEL_CHANGES: eI,
              GUILD_SETTINGS_SAVE_ROUTE_STACK: ey,
              GUILD_SETTINGS_SUBMIT: eT,
              GUILD_SETTINGS_SUBMIT_SUCCESS: eS,
              GUILD_SETTINGS_SUBMIT_FAILURE: eA,
              GUILD_SETTINGS_SET_SECTION: eO,
              GUILD_SETTINGS_SET_SEARCH_QUERY: ev,
              GUILD_SETTINGS_LOADED_BANS: ex,
              GUILD_SETTINGS_LOADED_BANS_BATCH: eM,
              GUILD_SETTINGS_LOADED_INVITES: ew,
              GUILD_SETTINGS_SET_WIDGET: eH,
              GUILD_SETTINGS_SET_VANITY_URL: eW,
              GUILD_SETTINGS_SET_MFA_SUCCESS: eK,
              GUILD_SETTINGS_ROLE_SELECT: eB,
              GUILD_SETTINGS_LOADED_INTEGRATIONS: ez,
              GUILD_SETTINGS_PIN_PERMISSION_MIGRATED: eX,
              GUILD_BAN_ADD: ek,
              GUILD_BAN_REMOVE: ej,
              GUILD_ROLE_CREATE: eV,
              GUILD_ROLE_UPDATE: eF,
              GUILD_ROLE_DELETE: eZ,
              GUILD_UPDATE: eU,
              GUILD_DELETE: eG,
              GUILD_PROFILE_FETCH_SUCCESS: e6,
              GUILD_PROFILE_UPDATE: e8,
              GUILD_PROFILE_UPDATE_SUCCESS: e7,
              GUILD_PROFILE_UPDATE_FAILURE: e9,
              GUILD_PROFILE_UPDATE_VISIBILITY: e8,
              GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS: te,
              GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE: e9,
              USER_CONNECTIONS_UPDATE: eq,
              GUILD_INTEGRATIONS_UPDATE: eq,
              INSTANT_INVITE_REVOKE_SUCCESS: eD,
              INSTANT_INVITE_CREATE_SUCCESS: eL,
              GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: eQ,
              GUILD_DISCOVERY_METADATA_FETCH_FAIL: eJ,
              GUILD_DISCOVERY_CATEGORY_ADD: e1,
              GUILD_DISCOVERY_CATEGORY_DELETE: e2,
              GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL: e3,
              GUILD_UPDATE_DISCOVERY_METADATA: e4,
              GUILD_UPDATE_DISCOVERY_METADATA_FAIL: e5,
              GUILD_DISCOVERY_SLUG_FETCH_SUCCESS: e$,
              GUILD_DISCOVERY_SLUG_FETCH_FAIL: e0,
              GUILD_SETTINGS_WIDGET_UPDATE: eY
          }
);
