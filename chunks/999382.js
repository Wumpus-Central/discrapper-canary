let r, i, o, a, s, l, c, u, d, f;
n.d(t, { Z: () => e3 }), n(47120), n(789020);
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
    w = n(372454),
    D = n(330010),
    x = n(978946),
    L = n(981631),
    M = n(128449),
    k = n(135899);
function j(e, t, n) {
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
                j(e, t, n[t]);
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
let Z = !0,
    F = ['name', 'description', 'icon', 'splash', 'banner', 'homeHeader', 'afkChannelId', 'afkTimeout', 'systemChannelId', 'verificationLevel', 'defaultMessageNotifications', 'explicitContentFilter', 'features', 'systemChannelFlags', 'preferredLocale', 'rulesChannelId', 'safetyAlertsChannelId', 'discoverySplash', 'publicUpdatesChannelId', 'premiumProgressBarEnabled', 'profile'],
    V = ['brandColorPrimary', 'description', 'icon', 'name', 'traits', 'visibility', 'gameApplicationIds'],
    H = new Set(['icon', 'splash', 'banner', 'discoverySplash', 'homeHeader']),
    W = !1,
    Y = L.QZA.CLOSED,
    K = {},
    z = null,
    q = !1,
    Q = null,
    X = null,
    J = 0,
    $ = L.BpS.NONE,
    ee = null,
    et = {
        primaryCategoryId: M.o3,
        secondaryCategoryIds: [],
        keywords: [],
        emojiDiscoverabilityEnabled: Z,
        partnerActionedTimestamp: null,
        partnerApplicationTimestamp: null,
        isPublished: !1,
        reasonsToJoin: [],
        socialLinks: [],
        about: ''
    },
    en = !1,
    er = et,
    ei = et,
    eo = null,
    ea = 0,
    es = null,
    el = null,
    ec = null;
function eu(e) {
    if (null == s || null == a || a.id !== e) return !1;
    let t = C.Z.getGuild(e);
    return null != t && (a === s ? (s = a = t) : (a = t), !0);
}
function ed(e) {
    (W = !0), ef(e);
}
function ef(e) {
    var t;
    let { guildId: n, section: i, subsection: o, location: d } = e,
        p = C.Z.getGuild(n);
    if (null == p) return ep();
    let _ = S.Z.getProfile(n);
    (a = s = p),
        (l = c = _),
        (Y = L.QZA.OPEN),
        (K = {}),
        (z = null),
        (u = P.default.castGuildIdAsEveryoneGuildRoleId(n)),
        ($ = s.mfaLevel),
        (ei = er),
        (f = null),
        (ee = d),
        eh({
            section: null !== (t = null != i ? i : r) && void 0 !== t ? t : (0, x.r)(n),
            subsection: null != o ? o : null
        });
}
function ep() {
    (W = !1), (Y = L.QZA.CLOSED), (a = s = null), (q = !1), (Q = null), (X = null), (J = 0), (eo = null), (el = null), (ec = null), (r = null), (i = null), (o = null), ($ = L.BpS.NONE), (d = void 0);
}
function e_(e) {
    let { state: t } = e;
    return (d = t), !1;
}
function eh(e) {
    if (null == s) return !1;
    let t = r;
    if (((r = e.section), (i = e.subsection), r === L.pNK.BANS)) {
        let { enabled: e } = w.T.getCurrentConfig({
            guildId: s.id,
            location: '7f0c91_1'
        });
        e || O.Z.fetchGuildBans(s.id);
    } else if (r === L.pNK.INSTANT_INVITES || r === L.pNK.INVITES)
        v.tn
            .get({
                url: L.ANM.GUILD_INSTANT_INVITES(s.id),
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then((e) => {
                y.Z.dispatch({
                    type: 'GUILD_SETTINGS_LOADED_INVITES',
                    invites: e.body
                });
            });
    else if (r === L.pNK.WIDGET)
        v.tn
            .get({
                url: L.ANM.GUILD_WIDGET(s.id),
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then((e) => {
                y.Z.dispatch({
                    type: 'GUILD_SETTINGS_SET_WIDGET',
                    enabled: e.body.enabled,
                    channelId: e.body.channel_id
                });
            });
    else if (r === L.pNK.INTEGRATIONS || r === L.pNK.ROLES) {
        if (((u = null), t !== e.section)) return eF(e);
    } else
        r === L.pNK.MEMBERS
            ? (u = s.getEveryoneRoleId())
            : r === L.pNK.VANITY_URL
              ? v.tn
                    .get({
                        url: L.ANM.GUILD_VANITY_URL(s.id),
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
              : r === L.pNK.SAFETY &&
                y.Z.dispatch({
                    type: 'GUILD_SETTINGS_SAFETY_SET_SUBSECTION',
                    subsection: null == i ? L.KsC.SAFETY_OVERVIEW : i
                });
}
function em(e) {
    o = e.searchQuery;
}
function eg(e) {
    let { guildId: t } = e;
    K = {};
    let n = C.Z.getGuild(t);
    null != n && (a = s = n);
}
function eE() {
    (Y = L.QZA.SUBMITTING), (K = {});
}
function ev() {
    Y = L.QZA.OPEN;
}
function eb(e) {
    var t;
    (Y = L.QZA.OPEN), (r = null != r ? r : (0, x.r)(null == s ? void 0 : s.id)), (i = null), (K = null !== (t = e.errors) && void 0 !== t ? t : {});
}
function ey() {
    if (null == s) return !1;
    let e = s.toJS(),
        t = a.toJS();
    F.some((n) => e[n] !== t[n]) || (s = a);
}
function eO(e) {
    if (null == s) return !1;
    F.forEach((t) => {
        null != s && e.hasOwnProperty(t) && (s = s.set(t, e[t]));
    }),
        ey();
}
function eS(e) {
    let { guildId: t } = e;
    if (null == c || null == s || s.id !== t) return !1;
    V.forEach((t) => {
        if (null != c && e.hasOwnProperty(t)) {
            let n = c[t],
                r = e[t];
            null != r && (c = B(U({}, c), { [t]: null != r ? r : n }));
        }
    });
}
function eI(e) {
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
function eT(e) {
    el = e.invites.reduce((e, t) => ((e[t.code] = eI(t)), e), {});
}
function eN(e) {
    (el = U({}, el)), delete el[e.code];
}
function eA(e) {
    el = B(U({}, el), { [e.invite.code]: eI(e.invite) });
}
function eC(e) {
    (eo = e.bans.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), new Map())), ea++;
}
function eR(e) {
    let { bans: t, guildId: n } = e;
    (es !== n || null == eo) && ((es = n), (eo = new Map())), (eo = t.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), eo)), ea++;
}
function eP(e) {
    let { user: t, guildId: n } = e;
    if (null == eo || null == s || s.id !== n) return !1;
    eo.set(t.id, {
        user: t,
        reason: null
    }),
        ea++;
}
function ew(e) {
    let { user: t, guildId: n } = e;
    if (null == eo || null == s || s.id !== n) return !1;
    eo.delete(t.id), ea++;
}
function eD(e) {
    if (null == s || s.id !== e.guild.id) return !1;
    {
        let e = C.Z.getGuild(s.id);
        if (null == e) return !1;
        let t = (a = e),
            n = s.toJS();
        F.forEach((e) => {
            if (!H.has(e) && (('rulesChannelId' !== e && 'publicUpdatesChannelId' !== e) || n[e] !== k.b4)) {
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
    ep();
}
function eL(e) {
    let { roleId: t } = e;
    u = null != t ? t : null;
}
function eM(e) {
    let { guildId: t } = e;
    if (!eu(t)) return !1;
}
function ek(e) {
    let { guildId: t } = e;
    if (!eu(t)) return !1;
}
function ej(e) {
    let { guildId: t, roleId: n } = e;
    if (!eu(t)) return !1;
    u === n && (u = null);
}
function eU(e) {
    (q = e.enabled), (Q = e.channelId);
}
function eG(e) {
    var t;
    (X = null !== (t = e.code) && void 0 !== t ? t : null), (J = e.uses);
}
function eB(e) {
    let { level: t } = e;
    $ = t;
}
function eZ(e) {
    ec = e.integrations;
}
function eF(e) {
    if (null == s || Y !== L.QZA.OPEN || ('GUILD_INTEGRATIONS_UPDATE' === e.type && e.guildId !== s.id)) return !1;
    (0, D.i)(s.id);
}
function eV(e) {
    var t, n, r, i, o, a, l, c, u, d;
    let { guildId: f, metadata: p } = e;
    null != s &&
        f === s.id &&
        (!1 === en && (en = !0),
        (ei = er =
            {
                primaryCategoryId: null !== (t = p.primaryCategoryId) && void 0 !== t ? t : M.o3,
                secondaryCategoryIds: null !== (n = p.secondaryCategoryIds) && void 0 !== n ? n : [],
                keywords: null !== (r = p.keywords) && void 0 !== r ? r : [],
                emojiDiscoverabilityEnabled: null !== (i = p.emojiDiscoverabilityEnabled) && void 0 !== i ? i : Z,
                partnerActionedTimestamp: null !== (o = p.partnerActionedTimestamp) && void 0 !== o ? o : null,
                partnerApplicationTimestamp: null !== (a = p.partnerApplicationTimestamp) && void 0 !== a ? a : null,
                isPublished: null !== (l = p.isPublished) && void 0 !== l && l,
                reasonsToJoin: null !== (c = p.reasonsToJoin) && void 0 !== c ? c : [],
                socialLinks: null !== (u = p.socialLinks) && void 0 !== u ? u : [],
                about: null !== (d = p.about) && void 0 !== d ? d : ''
            }),
        (K = {}));
}
function eH() {
    er = ei = et;
}
function eW(e) {
    let { slug: t } = e;
    f = t;
}
function eY(e) {
    let {} = e;
    f = null;
}
function eK(e) {
    let { guildId: t, categoryId: n } = e;
    null != s &&
        t === s.id &&
        ((ei = B(U({}, ei), {
            secondaryCategoryIds: [...ei.secondaryCategoryIds, n]
        })),
        (er = B(U({}, er), {
            secondaryCategoryIds: [...er.secondaryCategoryIds, n]
        })));
}
function ez(e) {
    let t,
        { guildId: n, categoryId: r } = e;
    if (null == s || n !== s.id) return;
    let i = ei.secondaryCategoryIds.indexOf(r);
    -1 !== i && ((t = [...ei.secondaryCategoryIds]).splice(i, 1), (ei = B(U({}, ei), { secondaryCategoryIds: t }))), -1 !== (i = er.secondaryCategoryIds.indexOf(r)) && ((t = [...er.secondaryCategoryIds]).splice(i, 1), (er = B(U({}, er), { secondaryCategoryIds: t })));
}
function eq(e) {
    let { guildId: t, errors: n } = e;
    null != s && t === s.id && (K = null != n ? n : {});
}
function eQ(e) {
    let { guildId: t, primaryCategoryId: n, keywords: r, emojiDiscoverabilityEnabled: i, isPublished: o, reasonsToJoin: a, socialLinks: l, about: c } = e;
    null != s &&
        t === s.id &&
        (ei = B(U({}, ei), {
            primaryCategoryId: null != n ? n : ei.primaryCategoryId,
            keywords: null != r ? r : ei.keywords,
            emojiDiscoverabilityEnabled: null != i ? i : ei.emojiDiscoverabilityEnabled,
            isPublished: null != o ? o : ei.isPublished,
            reasonsToJoin: null != a ? a : ei.reasonsToJoin,
            socialLinks: null != l ? l : ei.socialLinks,
            about: null != c ? c : ei.about
        }));
}
function eX(e) {
    let { guildId: t, errors: n } = e;
    null != s && t === s.id && (K = null != n ? n : {});
}
function eJ(e) {
    let { profile: t } = e;
    t.id === (null == s ? void 0 : s.id) && (l = c = t);
}
function e$(e) {
    let { guildId: t } = e;
    if (null == s || s.id !== t) return !1;
    z = null;
}
function e0(e) {
    let { profile: t } = e;
    if ((null == c ? void 0 : c.id) == null || !eu(c.id)) return !1;
    t.id === (null == s ? void 0 : s.id) && ((l = c = t), (z = null));
}
function e1(e) {
    let { guildId: t, error: n } = e;
    if (null == s || s.id !== t) return !1;
    z = n;
}
class e2 extends (p = E.ZP.Store) {
    initialize() {
        this.waitFor(C.Z, S.Z, R.default);
    }
    getMetadata() {
        return ei;
    }
    hasChanges() {
        return !h().isEqual(s, a) || !h().isEqual(ei, er) || !h().isEqual(c, l);
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
        return !b.K.get(k.zs);
    }
    getGuild() {
        return s;
    }
    getGuildProfile() {
        return c;
    }
    isSubmitting() {
        return Y === L.QZA.SUBMITTING;
    }
    isGuildMetadataLoaded() {
        return en;
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
        return [eo, ea];
    }
    getProps() {
        return {
            submitting: this.isSubmitting(),
            integrations: ec,
            section: r,
            subsection: i,
            errors: K,
            guild: s,
            bans: eo,
            bansVersion: ea,
            invites: el,
            selectedRoleId: u,
            embedEnabled: q,
            embedChannelId: Q,
            mfaLevel: $,
            searchQuery: o,
            vanityURLCode: X,
            vanityURLUses: J,
            originalGuild: a,
            hasChanges: this.hasChanges(),
            guildMetadata: ei,
            analyticsLocation: ee,
            isGuildMetadataLoaded: en
        };
    }
}
j(e2, 'displayName', 'GuildSettingsStore');
let e3 = new e2(
    y.Z,
    __OVERLAY__
        ? {}
        : {
              GUILD_SETTINGS_INIT: ef,
              GUILD_SETTINGS_OPEN: ed,
              GUILD_SETTINGS_CLOSE: ep,
              GUILD_SETTINGS_UPDATE: eO,
              GUILD_SETTINGS_PROFILE_UPDATE: eS,
              GUILD_SETTINGS_CANCEL_CHANGES: eg,
              GUILD_SETTINGS_SAVE_ROUTE_STACK: e_,
              GUILD_SETTINGS_SUBMIT: eE,
              GUILD_SETTINGS_SUBMIT_SUCCESS: ev,
              GUILD_SETTINGS_SUBMIT_FAILURE: eb,
              GUILD_SETTINGS_SET_SECTION: eh,
              GUILD_SETTINGS_SET_SEARCH_QUERY: em,
              GUILD_SETTINGS_LOADED_BANS: eC,
              GUILD_SETTINGS_LOADED_BANS_BATCH: eR,
              GUILD_SETTINGS_LOADED_INVITES: eT,
              GUILD_SETTINGS_SET_WIDGET: eU,
              GUILD_SETTINGS_SET_VANITY_URL: eG,
              GUILD_SETTINGS_SET_MFA_SUCCESS: eB,
              GUILD_SETTINGS_ROLE_SELECT: eL,
              GUILD_SETTINGS_LOADED_INTEGRATIONS: eZ,
              GUILD_BAN_ADD: eP,
              GUILD_BAN_REMOVE: ew,
              GUILD_ROLE_CREATE: eM,
              GUILD_ROLE_UPDATE: ek,
              GUILD_ROLE_DELETE: ej,
              GUILD_UPDATE: eD,
              GUILD_DELETE: ex,
              GUILD_PROFILE_FETCH_SUCCESS: eJ,
              GUILD_PROFILE_UPDATE: e$,
              GUILD_PROFILE_UPDATE_SUCCESS: e0,
              GUILD_PROFILE_UPDATE_FAILURE: e1,
              USER_CONNECTIONS_UPDATE: eF,
              GUILD_INTEGRATIONS_UPDATE: eF,
              INSTANT_INVITE_REVOKE_SUCCESS: eN,
              INSTANT_INVITE_CREATE_SUCCESS: eA,
              GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: eV,
              GUILD_DISCOVERY_METADATA_FETCH_FAIL: eH,
              GUILD_DISCOVERY_CATEGORY_ADD: eK,
              GUILD_DISCOVERY_CATEGORY_DELETE: ez,
              GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL: eq,
              GUILD_UPDATE_DISCOVERY_METADATA: eQ,
              GUILD_UPDATE_DISCOVERY_METADATA_FAIL: eX,
              GUILD_DISCOVERY_SLUG_FETCH_SUCCESS: eW,
              GUILD_DISCOVERY_SLUG_FETCH_FAIL: eY
          }
);
