let i, r, a, s, o, l, u, c, d;
n.d(t, { Z: () => ez }), n(47120), n(789020), n(724458);
var f,
    _ = n(392711),
    p = n.n(_),
    h = n(913527),
    m = n.n(h),
    g = n(442837),
    E = n(544891),
    v = n(433517),
    y = n(570140),
    I = n(749210),
    b = n(131704),
    T = n(601964),
    S = n(758449),
    A = n(598077),
    N = n(430824),
    C = n(594174),
    R = n(709054),
    O = n(372454),
    D = n(330010),
    x = n(978946),
    L = n(981631),
    P = n(128449),
    w = n(135899);
function M(e, t, n) {
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
let k = !0,
    U = ['name', 'description', 'icon', 'splash', 'banner', 'homeHeader', 'afkChannelId', 'afkTimeout', 'systemChannelId', 'verificationLevel', 'defaultMessageNotifications', 'explicitContentFilter', 'features', 'systemChannelFlags', 'preferredLocale', 'rulesChannelId', 'safetyAlertsChannelId', 'discoverySplash', 'publicUpdatesChannelId', 'premiumProgressBarEnabled', 'profile'],
    G = ['brandColorPrimary', 'description', 'icon', 'name', 'traits', 'visibility'],
    B = new Set(['icon', 'splash', 'banner', 'discoverySplash', 'homeHeader']),
    Z = !1,
    F = L.QZA.CLOSED,
    V = {},
    j = !1,
    H = null,
    Y = null,
    W = 0,
    K = L.BpS.NONE,
    z = null,
    q = {
        primaryCategoryId: P.o3,
        secondaryCategoryIds: [],
        keywords: [],
        emojiDiscoverabilityEnabled: k,
        partnerActionedTimestamp: null,
        partnerApplicationTimestamp: null,
        isPublished: !1,
        reasonsToJoin: [],
        socialLinks: [],
        about: ''
    },
    Q = !1,
    X = q,
    J = q,
    $ = null,
    ee = 0,
    et = null,
    en = null,
    ei = null;
function er(e) {
    if (null == o || null == s || s.id !== e) return !1;
    let t = N.Z.getGuild(e);
    return null != t && (s === o ? (o = s = t) : (s = t), !0);
}
function ea(e) {
    (Z = !0), es(e);
}
function es(e) {
    var t;
    let { guildId: n, section: r, subsection: a, location: l } = e,
        c = N.Z.getGuild(n);
    if (null == c) return eo();
    (s = o = c),
        (F = L.QZA.OPEN),
        (V = {}),
        (u = R.default.castGuildIdAsEveryoneGuildRoleId(n)),
        (K = o.mfaLevel),
        (J = X),
        (d = null),
        (z = l),
        eu({
            section: null !== (t = null != r ? r : i) && void 0 !== t ? t : (0, x.r)(n),
            subsection: null != a ? a : null
        });
}
function eo() {
    (Z = !1), (F = L.QZA.CLOSED), (s = o = null), (j = !1), (H = null), (Y = null), (W = 0), ($ = null), (en = null), (ei = null), (i = null), (r = null), (a = null), (K = L.BpS.NONE), (c = void 0);
}
function el(e) {
    let { state: t } = e;
    return (c = t), !1;
}
function eu(e) {
    if (null == o) return !1;
    let t = i;
    if (((i = e.section), (r = e.subsection), i === L.pNK.BANS)) {
        let { enabled: e } = O.T.getCurrentConfig({
            guildId: o.id,
            location: '7f0c91_1'
        });
        e || I.Z.fetchGuildBans(o.id);
    } else if (i === L.pNK.INSTANT_INVITES)
        E.tn
            .get({
                url: L.ANM.GUILD_INSTANT_INVITES(o.id),
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then((e) => {
                y.Z.dispatch({
                    type: 'GUILD_SETTINGS_LOADED_INVITES',
                    invites: e.body
                });
            });
    else if (i === L.pNK.WIDGET)
        E.tn
            .get({
                url: L.ANM.GUILD_WIDGET(o.id),
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
    else if (i === L.pNK.INTEGRATIONS || i === L.pNK.ROLES) {
        if (((u = null), t !== e.section)) return ek(e);
    } else
        i === L.pNK.MEMBERS
            ? (u = o.getEveryoneRoleId())
            : i === L.pNK.VANITY_URL
              ? E.tn
                    .get({
                        url: L.ANM.GUILD_VANITY_URL(o.id),
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                    .then((e) => {
                        let {
                            body: { code: t, uses: n, error: i }
                        } = e;
                        y.Z.dispatch({
                            type: 'GUILD_SETTINGS_SET_VANITY_URL',
                            code: t,
                            uses: n,
                            error: i
                        });
                    })
              : i === L.pNK.SAFETY &&
                y.Z.dispatch({
                    type: 'GUILD_SETTINGS_SAFETY_SET_SUBSECTION',
                    subsection: null == r ? L.KsC.SAFETY_OVERVIEW : r
                });
}
function ec(e) {
    a = e.searchQuery;
}
function ed(e) {
    let { guildId: t } = e;
    V = {};
    let n = N.Z.getGuild(t);
    null != n && (s = o = n);
}
function ef() {
    (F = L.QZA.SUBMITTING), (V = {});
}
function e_() {
    F = L.QZA.OPEN;
}
function ep(e) {
    var t;
    (F = L.QZA.OPEN), (i = null != i ? i : (0, x.r)(null == o ? void 0 : o.id)), (r = null), (V = null !== (t = e.errors) && void 0 !== t ? t : {});
}
function eh() {
    if (null == o) return !1;
    let e = o.toJS(),
        t = s.toJS();
    U.some((n) => e[n] !== t[n]) || (o = s);
}
function em(e) {
    if (null == o) return !1;
    U.forEach((t) => {
        null != o && e.hasOwnProperty(t) && (o = o.set(t, e[t]));
    }),
        eh();
}
function eg(e) {
    let { guildId: t } = e;
    if (null == l || null == o || o.id !== t) return !1;
    G.forEach((t) => {
        if (null != l && e.hasOwnProperty(t)) {
            let n = l[t],
                i = e[t];
            null != i &&
                (l = {
                    ...l,
                    [t]: null != i ? i : n
                });
        }
    });
}
function eE(e) {
    var t;
    return new S.Z({
        code: e.code,
        temporary: e.temporary,
        revoked: e.revoked,
        inviter: null != e.inviter ? new A.Z(e.inviter) : null,
        channel: (0, b.jD)(e.channel),
        guild: null != e.guild ? new T.ZP(e.guild) : null,
        uses: e.uses,
        maxUses: e.max_uses,
        maxAge: e.max_age,
        createdAt: m()(null !== (t = e.created_at) && void 0 !== t ? t : void 0),
        flags: e.flags
    });
}
function ev(e) {
    en = e.invites.reduce((e, t) => ((e[t.code] = eE(t)), e), {});
}
function ey(e) {
    (en = { ...en }), delete en[e.code];
}
function eI(e) {
    en = {
        ...en,
        [e.invite.code]: eE(e.invite)
    };
}
function eb(e) {
    ($ = e.bans.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), new Map())), ee++;
}
function eT(e) {
    let { bans: t, guildId: n } = e;
    (et !== n || null == $) && ((et = n), ($ = new Map())), ($ = t.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), $)), ee++;
}
function eS(e) {
    let { user: t, guildId: n } = e;
    if (null == $ || null == o || o.id !== n) return !1;
    $.set(t.id, {
        user: t,
        reason: null
    }),
        ee++;
}
function eA(e) {
    let { user: t, guildId: n } = e;
    if (null == $ || null == o || o.id !== n) return !1;
    $.delete(t.id), ee++;
}
function eN(e) {
    if (null == o || o.id !== e.guild.id) return !1;
    {
        let e = N.Z.getGuild(o.id);
        if (null == e) return !1;
        let t = (s = e),
            n = o.toJS();
        U.forEach((e) => {
            if (!B.has(e) && (('rulesChannelId' !== e && 'publicUpdatesChannelId' !== e) || n[e] !== w.b4)) {
                if ('features' === e) {
                    t.set(e, new Set(n[e]));
                    return;
                }
                t = t.set(e, n[e]);
            }
        }),
            (o = t);
    }
}
function eC(e) {
    if (null == o || o.id !== e.guild.id) return !1;
    eo();
}
function eR(e) {
    let { roleId: t } = e;
    u = null != t ? t : null;
}
function eO(e) {
    let { guildId: t } = e;
    if (!er(t)) return !1;
}
function eD(e) {
    let { guildId: t } = e;
    if (!er(t)) return !1;
}
function ex(e) {
    let { guildId: t, roleId: n } = e;
    if (!er(t)) return !1;
    u === n && (u = null);
}
function eL(e) {
    (j = e.enabled), (H = e.channelId);
}
function eP(e) {
    var t;
    (Y = null !== (t = e.code) && void 0 !== t ? t : null), (W = e.uses);
}
function ew(e) {
    let { level: t } = e;
    K = t;
}
function eM(e) {
    ei = e.integrations;
}
function ek(e) {
    if (null == o || F !== L.QZA.OPEN || ('GUILD_INTEGRATIONS_UPDATE' === e.type && e.guildId !== o.id)) return !1;
    (0, D.i)(o.id);
}
function eU(e) {
    var t, n, i, r, a, s, l, u, c, d;
    let { guildId: f, metadata: _ } = e;
    null != o &&
        f === o.id &&
        (!1 === Q && (Q = !0),
        (J = X =
            {
                primaryCategoryId: null !== (t = _.primaryCategoryId) && void 0 !== t ? t : P.o3,
                secondaryCategoryIds: null !== (n = _.secondaryCategoryIds) && void 0 !== n ? n : [],
                keywords: null !== (i = _.keywords) && void 0 !== i ? i : [],
                emojiDiscoverabilityEnabled: null !== (r = _.emojiDiscoverabilityEnabled) && void 0 !== r ? r : k,
                partnerActionedTimestamp: null !== (a = _.partnerActionedTimestamp) && void 0 !== a ? a : null,
                partnerApplicationTimestamp: null !== (s = _.partnerApplicationTimestamp) && void 0 !== s ? s : null,
                isPublished: null !== (l = _.isPublished) && void 0 !== l && l,
                reasonsToJoin: null !== (u = _.reasonsToJoin) && void 0 !== u ? u : [],
                socialLinks: null !== (c = _.socialLinks) && void 0 !== c ? c : [],
                about: null !== (d = _.about) && void 0 !== d ? d : ''
            }),
        (V = {}));
}
function eG() {
    X = J = q;
}
function eB(e) {
    let { slug: t } = e;
    d = t;
}
function eZ(e) {
    let {} = e;
    d = null;
}
function eF(e) {
    let { guildId: t, categoryId: n } = e;
    null != o &&
        t === o.id &&
        ((J = {
            ...J,
            secondaryCategoryIds: [...J.secondaryCategoryIds, n]
        }),
        (X = {
            ...X,
            secondaryCategoryIds: [...X.secondaryCategoryIds, n]
        }));
}
function eV(e) {
    let t,
        { guildId: n, categoryId: i } = e;
    if (null == o || n !== o.id) return;
    let r = J.secondaryCategoryIds.indexOf(i);
    -1 !== r &&
        ((t = [...J.secondaryCategoryIds]).splice(r, 1),
        (J = {
            ...J,
            secondaryCategoryIds: t
        })),
        -1 !== (r = X.secondaryCategoryIds.indexOf(i)) &&
            ((t = [...X.secondaryCategoryIds]).splice(r, 1),
            (X = {
                ...X,
                secondaryCategoryIds: t
            }));
}
function ej(e) {
    let { guildId: t, errors: n } = e;
    null != o && t === o.id && (V = null != n ? n : {});
}
function eH(e) {
    let { guildId: t, primaryCategoryId: n, keywords: i, emojiDiscoverabilityEnabled: r, isPublished: a, reasonsToJoin: s, socialLinks: l, about: u } = e;
    null != o &&
        t === o.id &&
        (J = {
            ...J,
            primaryCategoryId: null != n ? n : J.primaryCategoryId,
            keywords: null != i ? i : J.keywords,
            emojiDiscoverabilityEnabled: null != r ? r : J.emojiDiscoverabilityEnabled,
            isPublished: null != a ? a : J.isPublished,
            reasonsToJoin: null != s ? s : J.reasonsToJoin,
            socialLinks: null != l ? l : J.socialLinks,
            about: null != u ? u : J.about
        });
}
function eY(e) {
    let { guildId: t, errors: n } = e;
    null != o && t === o.id && (V = null != n ? n : {});
}
function eW(e) {
    let { profile: t } = e;
    t.id === (null == o ? void 0 : o.id) && (l = t);
}
class eK extends (f = g.ZP.Store) {
    initialize() {
        this.waitFor(N.Z, C.default);
    }
    getMetadata() {
        return J;
    }
    hasChanges() {
        return !p().isEqual(o, s) || !p().isEqual(J, X);
    }
    isOpen() {
        return Z;
    }
    getSavedRouteState() {
        return c;
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
        return !v.K.get(w.zs);
    }
    getGuild() {
        return o;
    }
    getGuildProfile() {
        return l;
    }
    isSubmitting() {
        return F === L.QZA.SUBMITTING;
    }
    isGuildMetadataLoaded() {
        return Q;
    }
    getErrors() {
        return V;
    }
    getError(e) {
        var t;
        return null !== (t = V[e]) && void 0 !== t ? t : null;
    }
    getSelectedRoleId() {
        return u;
    }
    getSlug() {
        return d;
    }
    getBans() {
        return [$, ee];
    }
    getProps() {
        return {
            submitting: this.isSubmitting(),
            integrations: ei,
            section: i,
            subsection: r,
            errors: V,
            guild: o,
            bans: $,
            bansVersion: ee,
            invites: en,
            selectedRoleId: u,
            embedEnabled: j,
            embedChannelId: H,
            mfaLevel: K,
            searchQuery: a,
            vanityURLCode: Y,
            vanityURLUses: W,
            originalGuild: s,
            hasChanges: this.hasChanges(),
            guildMetadata: J,
            analyticsLocation: z,
            isGuildMetadataLoaded: Q
        };
    }
}
M(eK, 'displayName', 'GuildSettingsStore');
let ez = new eK(
    y.Z,
    __OVERLAY__
        ? {}
        : {
              GUILD_SETTINGS_INIT: es,
              GUILD_SETTINGS_OPEN: ea,
              GUILD_SETTINGS_CLOSE: eo,
              GUILD_SETTINGS_UPDATE: em,
              GUILD_SETTINGS_PROFILE_UPDATE: eg,
              GUILD_SETTINGS_CANCEL_CHANGES: ed,
              GUILD_SETTINGS_SAVE_ROUTE_STACK: el,
              GUILD_SETTINGS_SUBMIT: ef,
              GUILD_SETTINGS_SUBMIT_SUCCESS: e_,
              GUILD_SETTINGS_SUBMIT_FAILURE: ep,
              GUILD_SETTINGS_SET_SECTION: eu,
              GUILD_SETTINGS_SET_SEARCH_QUERY: ec,
              GUILD_SETTINGS_LOADED_BANS: eb,
              GUILD_SETTINGS_LOADED_BANS_BATCH: eT,
              GUILD_SETTINGS_LOADED_INVITES: ev,
              GUILD_SETTINGS_SET_WIDGET: eL,
              GUILD_SETTINGS_SET_VANITY_URL: eP,
              GUILD_SETTINGS_SET_MFA_SUCCESS: ew,
              GUILD_SETTINGS_ROLE_SELECT: eR,
              GUILD_SETTINGS_LOADED_INTEGRATIONS: eM,
              GUILD_BAN_ADD: eS,
              GUILD_BAN_REMOVE: eA,
              GUILD_ROLE_CREATE: eO,
              GUILD_ROLE_UPDATE: eD,
              GUILD_ROLE_DELETE: ex,
              GUILD_UPDATE: eN,
              GUILD_DELETE: eC,
              GUILD_PROFILE_FETCH_SUCCESS: eW,
              USER_CONNECTIONS_UPDATE: ek,
              GUILD_INTEGRATIONS_UPDATE: ek,
              INSTANT_INVITE_REVOKE_SUCCESS: ey,
              INSTANT_INVITE_CREATE_SUCCESS: eI,
              GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: eU,
              GUILD_DISCOVERY_METADATA_FETCH_FAIL: eG,
              GUILD_DISCOVERY_CATEGORY_ADD: eF,
              GUILD_DISCOVERY_CATEGORY_DELETE: eV,
              GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL: ej,
              GUILD_UPDATE_DISCOVERY_METADATA: eH,
              GUILD_UPDATE_DISCOVERY_METADATA_FAIL: eY,
              GUILD_DISCOVERY_SLUG_FETCH_SUCCESS: eB,
              GUILD_DISCOVERY_SLUG_FETCH_FAIL: eZ
          }
);
