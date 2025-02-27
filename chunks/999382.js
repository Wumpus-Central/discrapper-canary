let r, i, o, a, s, l, c, u, d, f;
n.d(t, { Z: () => e6 }), n(47120), n(789020);
var _,
    p = n(392711),
    h = n.n(p),
    g = n(913527),
    m = n.n(g),
    E = n(442837),
    v = n(544891),
    b = n(433517),
    y = n(570140),
    O = n(749210),
    S = n(314852),
    I = n(131704),
    T = n(601964),
    N = n(758449),
    A = n(598077),
    C = n(430824),
    R = n(594174),
    P = n(709054),
    D = n(372454),
    w = n(330010),
    L = n(621319),
    x = n(978946),
    M = n(981631),
    k = n(128449),
    j = n(135899);
function U(e, t, n) {
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
function G(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                U(e, t, n[t]);
            });
    }
    return e;
}
function B(e, t) {
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
function V(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : B(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let F = !0,
    Z = ['name', 'description', 'icon', 'splash', 'banner', 'homeHeader', 'afkChannelId', 'afkTimeout', 'systemChannelId', 'verificationLevel', 'defaultMessageNotifications', 'explicitContentFilter', 'features', 'systemChannelFlags', 'preferredLocale', 'rulesChannelId', 'safetyAlertsChannelId', 'discoverySplash', 'publicUpdatesChannelId', 'premiumProgressBarEnabled', 'profile'],
    H = ['brandColorPrimary', 'description', 'icon', 'name', 'traits', 'visibility', 'gameApplicationIds', 'customBanner'],
    W = new Set(['icon', 'splash', 'banner', 'discoverySplash', 'homeHeader']),
    Y = !1,
    K = M.QZA.CLOSED,
    z = {},
    q = null,
    Q = !1,
    X = !1,
    J = null,
    $ = null,
    ee = 0,
    et = M.BpS.NONE,
    en = null,
    er = {
        primaryCategoryId: k.o3,
        secondaryCategoryIds: [],
        keywords: [],
        emojiDiscoverabilityEnabled: F,
        partnerActionedTimestamp: null,
        partnerApplicationTimestamp: null,
        isPublished: !1,
        reasonsToJoin: [],
        socialLinks: [],
        about: ''
    },
    ei = !1,
    eo = er,
    ea = er,
    es = null,
    el = 0,
    ec = null,
    eu = null,
    ed = null;
function ef(e) {
    if (null == s || null == a || a.id !== e) return !1;
    let t = C.Z.getGuild(e);
    return null != t && (a === s ? (s = a = t) : (a = t), !0);
}
function e_(e) {
    (Y = !0), ep(e);
}
function ep(e) {
    var t;
    let { guildId: n, section: i, subsection: o, location: d } = e,
        _ = C.Z.getGuild(n);
    if (null == _) return eh();
    let p = S.Z.getProfile(n);
    (a = s = _),
        (l = c = p),
        (K = M.QZA.OPEN),
        (z = {}),
        (q = null),
        (u = P.default.castGuildIdAsEveryoneGuildRoleId(n)),
        (et = s.mfaLevel),
        (ea = eo),
        (f = null),
        (en = d),
        em({
            section: null !== (t = null != i ? i : r) && void 0 !== t ? t : (0, x.r)(n),
            subsection: null != o ? o : null
        });
}
function eh() {
    (Y = !1), (K = M.QZA.CLOSED), (a = s = null), (Q = !1), (X = !1), (J = null), ($ = null), (ee = 0), (es = null), (eu = null), (ed = null), (r = null), (i = null), (o = null), (et = M.BpS.NONE), (d = void 0);
}
function eg(e) {
    let { state: t } = e;
    return (d = t), !1;
}
function em(e) {
    if (null == s) return !1;
    let t = r;
    if (((r = e.section), (i = e.subsection), r === M.pNK.BANS)) {
        let { enabled: e } = D.T.getCurrentConfig({
            guildId: s.id,
            location: '7f0c91_1'
        });
        e || O.Z.fetchGuildBans(s.id);
    } else if (r === M.pNK.INSTANT_INVITES || r === M.pNK.INVITES)
        v.tn
            .get({
                url: M.ANM.GUILD_INSTANT_INVITES(s.id),
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then((e) => {
                y.Z.dispatch({
                    type: 'GUILD_SETTINGS_LOADED_INVITES',
                    invites: e.body
                });
            });
    else if (r === M.pNK.WIDGET) (0, w.R)(s.id);
    else if (r === M.pNK.INTEGRATIONS || r === M.pNK.ROLES) {
        if (((u = null), t !== e.section)) return eH(e);
    } else
        r === M.pNK.MEMBERS
            ? (u = s.getEveryoneRoleId())
            : r === M.pNK.VANITY_URL
              ? (0, L.U5)(s.id)
              : r === M.pNK.SAFETY &&
                y.Z.dispatch({
                    type: 'GUILD_SETTINGS_SAFETY_SET_SUBSECTION',
                    subsection: null == i ? M.KsC.SAFETY_OVERVIEW : i
                });
}
function eE(e) {
    o = e.searchQuery;
}
function ev(e) {
    let { guildId: t } = e;
    z = {};
    let n = C.Z.getGuild(t);
    null != n && (a = s = n);
}
function eb() {
    (K = M.QZA.SUBMITTING), (z = {});
}
function ey() {
    K = M.QZA.OPEN;
}
function eO(e) {
    var t;
    (K = M.QZA.OPEN), (r = null != r ? r : (0, x.r)(null == s ? void 0 : s.id)), (i = null), (z = null !== (t = e.errors) && void 0 !== t ? t : {});
}
function eS() {
    if (null == s) return !1;
    let e = s.toJS(),
        t = a.toJS();
    Z.some((n) => e[n] !== t[n]) || (s = a);
}
function eI(e) {
    if (null == s) return !1;
    Z.forEach((t) => {
        null != s && e.hasOwnProperty(t) && (s = s.set(t, e[t]));
    }),
        eS();
}
function eT(e) {
    let { guildId: t } = e;
    if (null == c || null == s || s.id !== t) return !1;
    H.forEach((t) => {
        if (null != c && e.hasOwnProperty(t)) {
            let n = e[t];
            void 0 !== n && (c = V(G({}, c), { [t]: n }));
        }
    });
}
function eN(e) {
    var t;
    return new N.Z({
        code: e.code,
        temporary: e.temporary,
        revoked: e.revoked,
        inviter: null != e.inviter ? new A.Z(e.inviter) : null,
        channel: (0, I.jD)(e.channel),
        guild: null != e.guild ? new T.ZP(e.guild) : null,
        uses: e.uses,
        maxUses: e.max_uses,
        maxAge: e.max_age,
        createdAt: m()(null !== (t = e.created_at) && void 0 !== t ? t : void 0),
        flags: e.flags
    });
}
function eA(e) {
    eu = e.invites.reduce((e, t) => ((e[t.code] = eN(t)), e), {});
}
function eC(e) {
    (eu = G({}, eu)), delete eu[e.code];
}
function eR(e) {
    eu = V(G({}, eu), { [e.invite.code]: eN(e.invite) });
}
function eP(e) {
    (es = e.bans.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), new Map())), el++;
}
function eD(e) {
    let { bans: t, guildId: n } = e;
    (ec !== n || null == es) && ((ec = n), (es = new Map())), (es = t.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), es)), el++;
}
function ew(e) {
    let { user: t, guildId: n } = e;
    if (null == es || null == s || s.id !== n) return !1;
    es.set(t.id, {
        user: t,
        reason: null
    }),
        el++;
}
function eL(e) {
    let { user: t, guildId: n } = e;
    if (null == es || null == s || s.id !== n) return !1;
    es.delete(t.id), el++;
}
function ex(e) {
    if (null == s || s.id !== e.guild.id) return !1;
    {
        let e = C.Z.getGuild(s.id);
        if (null == e) return !1;
        (l = S.Z.getProfile(s.id)), r !== M.pNK.PROFILE && (c = l);
        let t = (a = e),
            n = s.toJS();
        Z.forEach((e) => {
            if (!W.has(e) && (('rulesChannelId' !== e && 'publicUpdatesChannelId' !== e) || n[e] !== j.b4)) {
                if ('features' === e) {
                    t.set(e, new Set(n[e]));
                    return;
                }
                t = t.set(e, n[e]);
            }
        }),
            (s = t);
    }
}
function eM(e) {
    if (null == s || s.id !== e.guild.id) return !1;
    eh();
}
function ek(e) {
    let { roleId: t } = e;
    u = null != t ? t : null;
}
function ej(e) {
    let { guildId: t } = e;
    if (!ef(t)) return !1;
}
function eU(e) {
    let { guildId: t } = e;
    if (!ef(t)) return !1;
}
function eG(e) {
    let { guildId: t, roleId: n } = e;
    if (!ef(t)) return !1;
    u === n && (u = null);
}
function eB(e) {
    (Q = !0), (X = e.enabled), (J = e.channelId);
}
function eV(e) {
    var t;
    ($ = null !== (t = e.code) && void 0 !== t ? t : null), (ee = e.uses);
}
function eF(e) {
    let { level: t } = e;
    et = t;
}
function eZ(e) {
    ed = e.integrations;
}
function eH(e) {
    if (null == s || K !== M.QZA.OPEN || ('GUILD_INTEGRATIONS_UPDATE' === e.type && e.guildId !== s.id)) return !1;
    (0, w.i)(s.id);
}
function eW(e) {
    var t, n, r, i, o, a, l, c, u, d;
    let { guildId: f, metadata: _ } = e;
    null != s &&
        f === s.id &&
        (!1 === ei && (ei = !0),
        (ea = eo =
            {
                primaryCategoryId: null !== (t = _.primaryCategoryId) && void 0 !== t ? t : k.o3,
                secondaryCategoryIds: null !== (n = _.secondaryCategoryIds) && void 0 !== n ? n : [],
                keywords: null !== (r = _.keywords) && void 0 !== r ? r : [],
                emojiDiscoverabilityEnabled: null !== (i = _.emojiDiscoverabilityEnabled) && void 0 !== i ? i : F,
                partnerActionedTimestamp: null !== (o = _.partnerActionedTimestamp) && void 0 !== o ? o : null,
                partnerApplicationTimestamp: null !== (a = _.partnerApplicationTimestamp) && void 0 !== a ? a : null,
                isPublished: null !== (l = _.isPublished) && void 0 !== l && l,
                reasonsToJoin: null !== (c = _.reasonsToJoin) && void 0 !== c ? c : [],
                socialLinks: null !== (u = _.socialLinks) && void 0 !== u ? u : [],
                about: null !== (d = _.about) && void 0 !== d ? d : ''
            }),
        (z = {}));
}
function eY() {
    eo = ea = er;
}
function eK(e) {
    let { slug: t } = e;
    f = t;
}
function ez(e) {
    let {} = e;
    f = null;
}
function eq(e) {
    let { guildId: t, categoryId: n } = e;
    null != s &&
        t === s.id &&
        ((ea = V(G({}, ea), {
            secondaryCategoryIds: [...ea.secondaryCategoryIds, n]
        })),
        (eo = V(G({}, eo), {
            secondaryCategoryIds: [...eo.secondaryCategoryIds, n]
        })));
}
function eQ(e) {
    let t,
        { guildId: n, categoryId: r } = e;
    if (null == s || n !== s.id) return;
    let i = ea.secondaryCategoryIds.indexOf(r);
    -1 !== i && ((t = [...ea.secondaryCategoryIds]).splice(i, 1), (ea = V(G({}, ea), { secondaryCategoryIds: t }))), -1 !== (i = eo.secondaryCategoryIds.indexOf(r)) && ((t = [...eo.secondaryCategoryIds]).splice(i, 1), (eo = V(G({}, eo), { secondaryCategoryIds: t })));
}
function eX(e) {
    let { guildId: t, errors: n } = e;
    null != s && t === s.id && (z = null != n ? n : {});
}
function eJ(e) {
    let { guildId: t, primaryCategoryId: n, keywords: r, emojiDiscoverabilityEnabled: i, isPublished: o, reasonsToJoin: a, socialLinks: l, about: c } = e;
    null != s &&
        t === s.id &&
        (ea = V(G({}, ea), {
            primaryCategoryId: null != n ? n : ea.primaryCategoryId,
            keywords: null != r ? r : ea.keywords,
            emojiDiscoverabilityEnabled: null != i ? i : ea.emojiDiscoverabilityEnabled,
            isPublished: null != o ? o : ea.isPublished,
            reasonsToJoin: null != a ? a : ea.reasonsToJoin,
            socialLinks: null != l ? l : ea.socialLinks,
            about: null != c ? c : ea.about
        }));
}
function e$(e) {
    let { guildId: t, errors: n } = e;
    null != s && t === s.id && (z = null != n ? n : {});
}
function e0(e) {
    let { profile: t } = e;
    t.id === (null == s ? void 0 : s.id) && (l = c = t);
}
function e1(e) {
    let { guildId: t } = e;
    if (null == s || s.id !== t) return !1;
    q = null;
}
function e2(e) {
    let { profile: t } = e;
    if ((null == c ? void 0 : c.id) == null || !ef(c.id)) return !1;
    t.id === (null == s ? void 0 : s.id) && ((l = c = t), (q = null));
}
function e3(e) {
    let { guildId: t, error: n } = e;
    if (null == s || s.id !== t) return !1;
    q = n;
}
class e4 extends (_ = E.ZP.Store) {
    initialize() {
        this.waitFor(C.Z, S.Z, R.default);
    }
    getMetadata() {
        return ea;
    }
    hasChanges() {
        return !h().isEqual(s, a) || !h().isEqual(ea, eo) || !h().isEqual(c, l);
    }
    isOpen() {
        return Y;
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
        return !b.K.get(j.zs);
    }
    getGuild() {
        return s;
    }
    getGuildProfile() {
        return c;
    }
    isSubmitting() {
        return K === M.QZA.SUBMITTING;
    }
    isGuildMetadataLoaded() {
        return ei;
    }
    getErrors() {
        return z;
    }
    getError(e) {
        var t;
        return null !== (t = z[e]) && void 0 !== t ? t : null;
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
        return [es, el];
    }
    getProps() {
        return {
            submitting: this.isSubmitting(),
            integrations: ed,
            section: r,
            subsection: i,
            errors: z,
            guild: s,
            bans: es,
            bansVersion: el,
            invites: eu,
            selectedRoleId: u,
            fetchedEmbed: Q,
            embedEnabled: X,
            embedChannelId: J,
            mfaLevel: et,
            searchQuery: o,
            vanityURLCode: $,
            vanityURLUses: ee,
            originalGuild: a,
            hasChanges: this.hasChanges(),
            guildMetadata: ea,
            analyticsLocation: en,
            isGuildMetadataLoaded: ei,
            profile: c
        };
    }
}
U(e4, 'displayName', 'GuildSettingsStore');
let e6 = new e4(
    y.Z,
    __OVERLAY__
        ? {}
        : {
              GUILD_SETTINGS_INIT: ep,
              GUILD_SETTINGS_OPEN: e_,
              GUILD_SETTINGS_CLOSE: eh,
              GUILD_SETTINGS_UPDATE: eI,
              GUILD_SETTINGS_PROFILE_UPDATE: eT,
              GUILD_SETTINGS_CANCEL_CHANGES: ev,
              GUILD_SETTINGS_SAVE_ROUTE_STACK: eg,
              GUILD_SETTINGS_SUBMIT: eb,
              GUILD_SETTINGS_SUBMIT_SUCCESS: ey,
              GUILD_SETTINGS_SUBMIT_FAILURE: eO,
              GUILD_SETTINGS_SET_SECTION: em,
              GUILD_SETTINGS_SET_SEARCH_QUERY: eE,
              GUILD_SETTINGS_LOADED_BANS: eP,
              GUILD_SETTINGS_LOADED_BANS_BATCH: eD,
              GUILD_SETTINGS_LOADED_INVITES: eA,
              GUILD_SETTINGS_SET_WIDGET: eB,
              GUILD_SETTINGS_SET_VANITY_URL: eV,
              GUILD_SETTINGS_SET_MFA_SUCCESS: eF,
              GUILD_SETTINGS_ROLE_SELECT: ek,
              GUILD_SETTINGS_LOADED_INTEGRATIONS: eZ,
              GUILD_BAN_ADD: ew,
              GUILD_BAN_REMOVE: eL,
              GUILD_ROLE_CREATE: ej,
              GUILD_ROLE_UPDATE: eU,
              GUILD_ROLE_DELETE: eG,
              GUILD_UPDATE: ex,
              GUILD_DELETE: eM,
              GUILD_PROFILE_FETCH_SUCCESS: e0,
              GUILD_PROFILE_UPDATE: e1,
              GUILD_PROFILE_UPDATE_SUCCESS: e2,
              GUILD_PROFILE_UPDATE_FAILURE: e3,
              USER_CONNECTIONS_UPDATE: eH,
              GUILD_INTEGRATIONS_UPDATE: eH,
              INSTANT_INVITE_REVOKE_SUCCESS: eC,
              INSTANT_INVITE_CREATE_SUCCESS: eR,
              GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: eW,
              GUILD_DISCOVERY_METADATA_FETCH_FAIL: eY,
              GUILD_DISCOVERY_CATEGORY_ADD: eq,
              GUILD_DISCOVERY_CATEGORY_DELETE: eQ,
              GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL: eX,
              GUILD_UPDATE_DISCOVERY_METADATA: eJ,
              GUILD_UPDATE_DISCOVERY_METADATA_FAIL: e$,
              GUILD_DISCOVERY_SLUG_FETCH_SUCCESS: eK,
              GUILD_DISCOVERY_SLUG_FETCH_FAIL: ez
          }
);
