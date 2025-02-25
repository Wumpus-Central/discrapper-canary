let r, i, o, a, s, l, c, u, d, f;
n.d(t, { Z: () => e4 }), n(47120), n(789020);
var p,
    _ = n(392711),
    h = n.n(_),
    m = n(913527),
    g = n.n(m),
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
    L = n(978946),
    x = n(981631),
    M = n(128449),
    j = n(135899);
function k(e, t, n) {
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
function U(e) {
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
                k(e, t, n[t]);
            });
    }
    return e;
}
function G(e, t) {
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
            : G(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let F = !0,
    V = ['name', 'description', 'icon', 'splash', 'banner', 'homeHeader', 'afkChannelId', 'afkTimeout', 'systemChannelId', 'verificationLevel', 'defaultMessageNotifications', 'explicitContentFilter', 'features', 'systemChannelFlags', 'preferredLocale', 'rulesChannelId', 'safetyAlertsChannelId', 'discoverySplash', 'publicUpdatesChannelId', 'premiumProgressBarEnabled', 'profile'],
    Z = ['brandColorPrimary', 'description', 'icon', 'name', 'traits', 'visibility', 'gameApplicationIds', 'customBanner'],
    H = new Set(['icon', 'splash', 'banner', 'discoverySplash', 'homeHeader']),
    W = !1,
    Y = x.QZA.CLOSED,
    K = {},
    z = null,
    q = !1,
    Q = !1,
    X = null,
    J = null,
    $ = 0,
    ee = x.BpS.NONE,
    et = null,
    en = {
        primaryCategoryId: M.o3,
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
    er = !1,
    ei = en,
    eo = en,
    ea = null,
    es = 0,
    el = null,
    ec = null,
    eu = null;
function ed(e) {
    if (null == s || null == a || a.id !== e) return !1;
    let t = C.Z.getGuild(e);
    return null != t && (a === s ? (s = a = t) : (a = t), !0);
}
function ef(e) {
    (W = !0), ep(e);
}
function ep(e) {
    var t;
    let { guildId: n, section: i, subsection: o, location: d } = e,
        p = C.Z.getGuild(n);
    if (null == p) return e_();
    let _ = S.Z.getProfile(n);
    (a = s = p),
        (l = c = _),
        (Y = x.QZA.OPEN),
        (K = {}),
        (z = null),
        (u = P.default.castGuildIdAsEveryoneGuildRoleId(n)),
        (ee = s.mfaLevel),
        (eo = ei),
        (f = null),
        (et = d),
        em({
            section: null !== (t = null != i ? i : r) && void 0 !== t ? t : (0, L.r)(n),
            subsection: null != o ? o : null
        });
}
function e_() {
    (W = !1), (Y = x.QZA.CLOSED), (a = s = null), (q = !1), (Q = !1), (X = null), (J = null), ($ = 0), (ea = null), (ec = null), (eu = null), (r = null), (i = null), (o = null), (ee = x.BpS.NONE), (d = void 0);
}
function eh(e) {
    let { state: t } = e;
    return (d = t), !1;
}
function em(e) {
    if (null == s) return !1;
    let t = r;
    if (((r = e.section), (i = e.subsection), r === x.pNK.BANS)) {
        let { enabled: e } = D.T.getCurrentConfig({
            guildId: s.id,
            location: '7f0c91_1'
        });
        e || O.Z.fetchGuildBans(s.id);
    } else if (r === x.pNK.INSTANT_INVITES || r === x.pNK.INVITES)
        v.tn
            .get({
                url: x.ANM.GUILD_INSTANT_INVITES(s.id),
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then((e) => {
                y.Z.dispatch({
                    type: 'GUILD_SETTINGS_LOADED_INVITES',
                    invites: e.body
                });
            });
    else if (r === x.pNK.WIDGET) (0, w.R)(s.id);
    else if (r === x.pNK.INTEGRATIONS || r === x.pNK.ROLES) {
        if (((u = null), t !== e.section)) return eZ(e);
    } else
        r === x.pNK.MEMBERS
            ? (u = s.getEveryoneRoleId())
            : r === x.pNK.VANITY_URL
              ? v.tn
                    .get({
                        url: x.ANM.GUILD_VANITY_URL(s.id),
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                    .then((e) => {
                        let {
                            body: { code: t, uses: n, error: r }
                        } = e;
                        y.Z.dispatch({
                            type: 'GUILD_SETTINGS_SET_VANITY_URL',
                            code: t,
                            uses: n,
                            error: r
                        });
                    })
              : r === x.pNK.SAFETY &&
                y.Z.dispatch({
                    type: 'GUILD_SETTINGS_SAFETY_SET_SUBSECTION',
                    subsection: null == i ? x.KsC.SAFETY_OVERVIEW : i
                });
}
function eg(e) {
    o = e.searchQuery;
}
function eE(e) {
    let { guildId: t } = e;
    K = {};
    let n = C.Z.getGuild(t);
    null != n && (a = s = n);
}
function ev() {
    (Y = x.QZA.SUBMITTING), (K = {});
}
function eb() {
    Y = x.QZA.OPEN;
}
function ey(e) {
    var t;
    (Y = x.QZA.OPEN), (r = null != r ? r : (0, L.r)(null == s ? void 0 : s.id)), (i = null), (K = null !== (t = e.errors) && void 0 !== t ? t : {});
}
function eO() {
    if (null == s) return !1;
    let e = s.toJS(),
        t = a.toJS();
    V.some((n) => e[n] !== t[n]) || (s = a);
}
function eS(e) {
    if (null == s) return !1;
    V.forEach((t) => {
        null != s && e.hasOwnProperty(t) && (s = s.set(t, e[t]));
    }),
        eO();
}
function eI(e) {
    let { guildId: t } = e;
    if (null == c || null == s || s.id !== t) return !1;
    Z.forEach((t) => {
        if (null != c && e.hasOwnProperty(t)) {
            let n = e[t];
            void 0 !== n && (c = B(U({}, c), { [t]: n }));
        }
    });
}
function eT(e) {
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
        createdAt: g()(null !== (t = e.created_at) && void 0 !== t ? t : void 0),
        flags: e.flags
    });
}
function eN(e) {
    ec = e.invites.reduce((e, t) => ((e[t.code] = eT(t)), e), {});
}
function eA(e) {
    (ec = U({}, ec)), delete ec[e.code];
}
function eC(e) {
    ec = B(U({}, ec), { [e.invite.code]: eT(e.invite) });
}
function eR(e) {
    (ea = e.bans.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), new Map())), es++;
}
function eP(e) {
    let { bans: t, guildId: n } = e;
    (el !== n || null == ea) && ((el = n), (ea = new Map())), (ea = t.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), ea)), es++;
}
function eD(e) {
    let { user: t, guildId: n } = e;
    if (null == ea || null == s || s.id !== n) return !1;
    ea.set(t.id, {
        user: t,
        reason: null
    }),
        es++;
}
function ew(e) {
    let { user: t, guildId: n } = e;
    if (null == ea || null == s || s.id !== n) return !1;
    ea.delete(t.id), es++;
}
function eL(e) {
    if (null == s || s.id !== e.guild.id) return !1;
    {
        let e = C.Z.getGuild(s.id);
        if (null == e) return !1;
        let t = (a = e),
            n = s.toJS();
        V.forEach((e) => {
            if (!H.has(e) && (('rulesChannelId' !== e && 'publicUpdatesChannelId' !== e) || n[e] !== j.b4)) {
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
function ex(e) {
    if (null == s || s.id !== e.guild.id) return !1;
    e_();
}
function eM(e) {
    let { roleId: t } = e;
    u = null != t ? t : null;
}
function ej(e) {
    let { guildId: t } = e;
    if (!ed(t)) return !1;
}
function ek(e) {
    let { guildId: t } = e;
    if (!ed(t)) return !1;
}
function eU(e) {
    let { guildId: t, roleId: n } = e;
    if (!ed(t)) return !1;
    u === n && (u = null);
}
function eG(e) {
    (q = !0), (Q = e.enabled), (X = e.channelId);
}
function eB(e) {
    var t;
    (J = null !== (t = e.code) && void 0 !== t ? t : null), ($ = e.uses);
}
function eF(e) {
    let { level: t } = e;
    ee = t;
}
function eV(e) {
    eu = e.integrations;
}
function eZ(e) {
    if (null == s || Y !== x.QZA.OPEN || ('GUILD_INTEGRATIONS_UPDATE' === e.type && e.guildId !== s.id)) return !1;
    (0, w.i)(s.id);
}
function eH(e) {
    var t, n, r, i, o, a, l, c, u, d;
    let { guildId: f, metadata: p } = e;
    null != s &&
        f === s.id &&
        (!1 === er && (er = !0),
        (eo = ei =
            {
                primaryCategoryId: null !== (t = p.primaryCategoryId) && void 0 !== t ? t : M.o3,
                secondaryCategoryIds: null !== (n = p.secondaryCategoryIds) && void 0 !== n ? n : [],
                keywords: null !== (r = p.keywords) && void 0 !== r ? r : [],
                emojiDiscoverabilityEnabled: null !== (i = p.emojiDiscoverabilityEnabled) && void 0 !== i ? i : F,
                partnerActionedTimestamp: null !== (o = p.partnerActionedTimestamp) && void 0 !== o ? o : null,
                partnerApplicationTimestamp: null !== (a = p.partnerApplicationTimestamp) && void 0 !== a ? a : null,
                isPublished: null !== (l = p.isPublished) && void 0 !== l && l,
                reasonsToJoin: null !== (c = p.reasonsToJoin) && void 0 !== c ? c : [],
                socialLinks: null !== (u = p.socialLinks) && void 0 !== u ? u : [],
                about: null !== (d = p.about) && void 0 !== d ? d : ''
            }),
        (K = {}));
}
function eW() {
    ei = eo = en;
}
function eY(e) {
    let { slug: t } = e;
    f = t;
}
function eK(e) {
    let {} = e;
    f = null;
}
function ez(e) {
    let { guildId: t, categoryId: n } = e;
    null != s &&
        t === s.id &&
        ((eo = B(U({}, eo), {
            secondaryCategoryIds: [...eo.secondaryCategoryIds, n]
        })),
        (ei = B(U({}, ei), {
            secondaryCategoryIds: [...ei.secondaryCategoryIds, n]
        })));
}
function eq(e) {
    let t,
        { guildId: n, categoryId: r } = e;
    if (null == s || n !== s.id) return;
    let i = eo.secondaryCategoryIds.indexOf(r);
    -1 !== i && ((t = [...eo.secondaryCategoryIds]).splice(i, 1), (eo = B(U({}, eo), { secondaryCategoryIds: t }))), -1 !== (i = ei.secondaryCategoryIds.indexOf(r)) && ((t = [...ei.secondaryCategoryIds]).splice(i, 1), (ei = B(U({}, ei), { secondaryCategoryIds: t })));
}
function eQ(e) {
    let { guildId: t, errors: n } = e;
    null != s && t === s.id && (K = null != n ? n : {});
}
function eX(e) {
    let { guildId: t, primaryCategoryId: n, keywords: r, emojiDiscoverabilityEnabled: i, isPublished: o, reasonsToJoin: a, socialLinks: l, about: c } = e;
    null != s &&
        t === s.id &&
        (eo = B(U({}, eo), {
            primaryCategoryId: null != n ? n : eo.primaryCategoryId,
            keywords: null != r ? r : eo.keywords,
            emojiDiscoverabilityEnabled: null != i ? i : eo.emojiDiscoverabilityEnabled,
            isPublished: null != o ? o : eo.isPublished,
            reasonsToJoin: null != a ? a : eo.reasonsToJoin,
            socialLinks: null != l ? l : eo.socialLinks,
            about: null != c ? c : eo.about
        }));
}
function eJ(e) {
    let { guildId: t, errors: n } = e;
    null != s && t === s.id && (K = null != n ? n : {});
}
function e$(e) {
    let { profile: t } = e;
    t.id === (null == s ? void 0 : s.id) && (l = c = t);
}
function e0(e) {
    let { guildId: t } = e;
    if (null == s || s.id !== t) return !1;
    z = null;
}
function e1(e) {
    let { profile: t } = e;
    if ((null == c ? void 0 : c.id) == null || !ed(c.id)) return !1;
    t.id === (null == s ? void 0 : s.id) && ((l = c = t), (z = null));
}
function e2(e) {
    let { guildId: t, error: n } = e;
    if (null == s || s.id !== t) return !1;
    z = n;
}
class e3 extends (p = E.ZP.Store) {
    initialize() {
        this.waitFor(C.Z, S.Z, R.default);
    }
    getMetadata() {
        return eo;
    }
    hasChanges() {
        return !h().isEqual(s, a) || !h().isEqual(eo, ei) || !h().isEqual(c, l);
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
        return !b.K.get(j.zs);
    }
    getGuild() {
        return s;
    }
    getGuildProfile() {
        return c;
    }
    isSubmitting() {
        return Y === x.QZA.SUBMITTING;
    }
    isGuildMetadataLoaded() {
        return er;
    }
    getErrors() {
        return K;
    }
    getError(e) {
        var t;
        return null !== (t = K[e]) && void 0 !== t ? t : null;
    }
    getProfileError() {
        return z;
    }
    getSelectedRoleId() {
        return u;
    }
    getSlug() {
        return f;
    }
    getBans() {
        return [ea, es];
    }
    getProps() {
        return {
            submitting: this.isSubmitting(),
            integrations: eu,
            section: r,
            subsection: i,
            errors: K,
            guild: s,
            bans: ea,
            bansVersion: es,
            invites: ec,
            selectedRoleId: u,
            fetchedEmbed: q,
            embedEnabled: Q,
            embedChannelId: X,
            mfaLevel: ee,
            searchQuery: o,
            vanityURLCode: J,
            vanityURLUses: $,
            originalGuild: a,
            hasChanges: this.hasChanges(),
            guildMetadata: eo,
            analyticsLocation: et,
            isGuildMetadataLoaded: er,
            profile: c
        };
    }
}
k(e3, 'displayName', 'GuildSettingsStore');
let e4 = new e3(
    y.Z,
    __OVERLAY__
        ? {}
        : {
              GUILD_SETTINGS_INIT: ep,
              GUILD_SETTINGS_OPEN: ef,
              GUILD_SETTINGS_CLOSE: e_,
              GUILD_SETTINGS_UPDATE: eS,
              GUILD_SETTINGS_PROFILE_UPDATE: eI,
              GUILD_SETTINGS_CANCEL_CHANGES: eE,
              GUILD_SETTINGS_SAVE_ROUTE_STACK: eh,
              GUILD_SETTINGS_SUBMIT: ev,
              GUILD_SETTINGS_SUBMIT_SUCCESS: eb,
              GUILD_SETTINGS_SUBMIT_FAILURE: ey,
              GUILD_SETTINGS_SET_SECTION: em,
              GUILD_SETTINGS_SET_SEARCH_QUERY: eg,
              GUILD_SETTINGS_LOADED_BANS: eR,
              GUILD_SETTINGS_LOADED_BANS_BATCH: eP,
              GUILD_SETTINGS_LOADED_INVITES: eN,
              GUILD_SETTINGS_SET_WIDGET: eG,
              GUILD_SETTINGS_SET_VANITY_URL: eB,
              GUILD_SETTINGS_SET_MFA_SUCCESS: eF,
              GUILD_SETTINGS_ROLE_SELECT: eM,
              GUILD_SETTINGS_LOADED_INTEGRATIONS: eV,
              GUILD_BAN_ADD: eD,
              GUILD_BAN_REMOVE: ew,
              GUILD_ROLE_CREATE: ej,
              GUILD_ROLE_UPDATE: ek,
              GUILD_ROLE_DELETE: eU,
              GUILD_UPDATE: eL,
              GUILD_DELETE: ex,
              GUILD_PROFILE_FETCH_SUCCESS: e$,
              GUILD_PROFILE_UPDATE: e0,
              GUILD_PROFILE_UPDATE_SUCCESS: e1,
              GUILD_PROFILE_UPDATE_FAILURE: e2,
              USER_CONNECTIONS_UPDATE: eZ,
              GUILD_INTEGRATIONS_UPDATE: eZ,
              INSTANT_INVITE_REVOKE_SUCCESS: eA,
              INSTANT_INVITE_CREATE_SUCCESS: eC,
              GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: eH,
              GUILD_DISCOVERY_METADATA_FETCH_FAIL: eW,
              GUILD_DISCOVERY_CATEGORY_ADD: ez,
              GUILD_DISCOVERY_CATEGORY_DELETE: eq,
              GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL: eQ,
              GUILD_UPDATE_DISCOVERY_METADATA: eX,
              GUILD_UPDATE_DISCOVERY_METADATA_FAIL: eJ,
              GUILD_DISCOVERY_SLUG_FETCH_SUCCESS: eY,
              GUILD_DISCOVERY_SLUG_FETCH_FAIL: eK
          }
);
