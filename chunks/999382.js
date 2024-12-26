let i, a, s, o, l, u, c, d;
var f,
    _ = r(47120);
var h = r(724458);
var p = r(392711),
    m = r.n(p),
    g = r(913527),
    E = r.n(g),
    v = r(442837),
    I = r(544891),
    T = r(433517),
    b = r(570140),
    y = r(749210),
    S = r(131704),
    A = r(601964),
    N = r(758449),
    C = r(598077),
    R = r(430824),
    O = r(594174),
    D = r(709054),
    L = r(372454),
    x = r(330010),
    w = r(981631),
    P = r(128449),
    M = r(135899);
function k(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let U = !0,
    B = ['name', 'description', 'icon', 'splash', 'banner', 'homeHeader', 'afkChannelId', 'afkTimeout', 'systemChannelId', 'verificationLevel', 'defaultMessageNotifications', 'explicitContentFilter', 'features', 'systemChannelFlags', 'preferredLocale', 'rulesChannelId', 'safetyAlertsChannelId', 'discoverySplash', 'publicUpdatesChannelId', 'premiumProgressBarEnabled', 'profile'],
    G = new Set(['icon', 'splash', 'banner', 'discoverySplash', 'homeHeader']),
    Z = !1,
    F = w.QZA.CLOSED,
    V = {},
    j = !1,
    H = null,
    Y = null,
    W = 0,
    K = w.BpS.NONE,
    z = null,
    q = {
        primaryCategoryId: P.o3,
        secondaryCategoryIds: [],
        keywords: [],
        emojiDiscoverabilityEnabled: U,
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
    er = null;
function ei(e) {
    if (null == l || null == o || o.id !== e) return !1;
    let n = R.Z.getGuild(e);
    return null != n && (o === l ? (l = o = n) : (o = n), !0);
}
function ea(e) {
    (Z = !0), es(e);
}
function es(e) {
    var n;
    let { guildId: r, section: a, subsection: s, location: c } = e,
        f = R.Z.getGuild(r);
    if (null == f) return eo();
    (o = l = f), (F = w.QZA.OPEN), (V = {}), (u = D.default.castGuildIdAsEveryoneGuildRoleId(r)), (K = l.mfaLevel), (J = X), (d = null), (z = c);
    eu({
        section: null !== (n = null != a ? a : i) && void 0 !== n ? n : w.pNK.OVERVIEW,
        subsection: null != s ? s : null
    });
}
function eo() {
    (Z = !1), (F = w.QZA.CLOSED), (o = l = null), (j = !1), (H = null), (Y = null), (W = 0), ($ = null), (en = null), (er = null), (i = null), (a = null), (s = null), (K = w.BpS.NONE), (c = void 0);
}
function el(e) {
    let { state: n } = e;
    return (c = n), !1;
}
function eu(e) {
    if (null == l) return !1;
    let n = i;
    if (((i = e.section), (a = e.subsection), i === w.pNK.BANS)) {
        let { enabled: e } = L.T.getCurrentConfig({
            guildId: l.id,
            location: '7f0c91_1'
        });
        !e && y.Z.fetchGuildBans(l.id);
    } else if (i === w.pNK.INSTANT_INVITES)
        I.tn
            .get({
                url: w.ANM.GUILD_INSTANT_INVITES(l.id),
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then((e) => {
                b.Z.dispatch({
                    type: 'GUILD_SETTINGS_LOADED_INVITES',
                    invites: e.body
                });
            });
    else if (i === w.pNK.WIDGET)
        I.tn
            .get({
                url: w.ANM.GUILD_WIDGET(l.id),
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then((e) => {
                b.Z.dispatch({
                    type: 'GUILD_SETTINGS_SET_WIDGET',
                    enabled: e.body.enabled,
                    channelId: e.body.channel_id
                });
            });
    else if (i === w.pNK.INTEGRATIONS || i === w.pNK.ROLES) {
        if (((u = null), n !== e.section)) return eM(e);
    } else
        i === w.pNK.MEMBERS
            ? (u = l.getEveryoneRoleId())
            : i === w.pNK.VANITY_URL
              ? I.tn
                    .get({
                        url: w.ANM.GUILD_VANITY_URL(l.id),
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                    .then((e) => {
                        let {
                            body: { code: n, uses: r, error: i }
                        } = e;
                        b.Z.dispatch({
                            type: 'GUILD_SETTINGS_SET_VANITY_URL',
                            code: n,
                            uses: r,
                            error: i
                        });
                    })
              : i === w.pNK.SAFETY &&
                b.Z.dispatch({
                    type: 'GUILD_SETTINGS_SAFETY_SET_SUBSECTION',
                    subsection: null == a ? w.KsC.SAFETY_OVERVIEW : a
                });
}
function ec(e) {
    s = e.searchQuery;
}
function ed(e) {
    let { guildId: n } = e;
    V = {};
    let r = R.Z.getGuild(n);
    null != r && (o = l = r);
}
function ef() {
    (F = w.QZA.SUBMITTING), (V = {});
}
function e_() {
    F = w.QZA.OPEN;
}
function eh(e) {
    var n;
    (F = w.QZA.OPEN), (i = null != i ? i : w.pNK.OVERVIEW), (a = null), (V = null !== (n = e.errors) && void 0 !== n ? n : {});
}
function ep() {
    if (null == l) return !1;
    let e = l.toJS(),
        n = o.toJS();
    !B.some((r) => e[r] !== n[r]) && (l = o);
}
function em(e) {
    if (null == l) return !1;
    B.forEach((n) => {
        null != l && e.hasOwnProperty(n) && (l = l.set(n, e[n]));
    }),
        ep();
}
function eg(e) {
    var n;
    return new N.Z({
        code: e.code,
        temporary: e.temporary,
        revoked: e.revoked,
        inviter: null != e.inviter ? new C.Z(e.inviter) : null,
        channel: (0, S.jD)(e.channel),
        guild: null != e.guild ? new A.ZP(e.guild) : null,
        uses: e.uses,
        maxUses: e.max_uses,
        maxAge: e.max_age,
        createdAt: E()(null !== (n = e.created_at) && void 0 !== n ? n : void 0)
    });
}
function eE(e) {
    en = e.invites.reduce((e, n) => ((e[n.code] = eg(n)), e), {});
}
function ev(e) {
    (en = { ...en }), delete en[e.code];
}
function eI(e) {
    en = {
        ...en,
        [e.invite.code]: eg(e.invite)
    };
}
function eT(e) {
    ($ = e.bans.reduce((e, n) => (null != n.user && null != n.user.id && e.set(n.user.id, n), e), new Map())), ee++;
}
function eb(e) {
    let { bans: n, guildId: r } = e;
    (et !== r || null == $) && ((et = r), ($ = new Map())), ($ = n.reduce((e, n) => (null != n.user && null != n.user.id && e.set(n.user.id, n), e), $)), ee++;
}
function ey(e) {
    let { user: n, guildId: r } = e;
    if (null == $ || null == l || l.id !== r) return !1;
    $.set(n.id, {
        user: n,
        reason: null
    }),
        ee++;
}
function eS(e) {
    let { user: n, guildId: r } = e;
    if (null == $ || null == l || l.id !== r) return !1;
    $.delete(n.id), ee++;
}
function eA(e) {
    if (null == l || l.id !== e.guild.id) return !1;
    {
        let e = R.Z.getGuild(l.id);
        if (null == e) return !1;
        let n = (o = e),
            r = l.toJS();
        B.forEach((e) => {
            if (!G.has(e) && (('rulesChannelId' !== e && 'publicUpdatesChannelId' !== e) || r[e] !== M.b4)) {
                if ('features' === e) {
                    n.set(e, new Set(r[e]));
                    return;
                }
                n = n.set(e, r[e]);
            }
        }),
            (l = n);
    }
}
function eN(e) {
    if (null == l || l.id !== e.guild.id) return !1;
    eo();
}
function eC(e) {
    let { roleId: n } = e;
    u = null != n ? n : null;
}
function eR(e) {
    let { guildId: n } = e;
    if (!ei(n)) return !1;
}
function eO(e) {
    let { guildId: n } = e;
    if (!ei(n)) return !1;
}
function eD(e) {
    let { guildId: n, roleId: r } = e;
    if (!ei(n)) return !1;
    u === r && (u = null);
}
function eL(e) {
    (j = e.enabled), (H = e.channelId);
}
function ex(e) {
    var n;
    (Y = null !== (n = e.code) && void 0 !== n ? n : null), (W = e.uses);
}
function ew(e) {
    let { level: n } = e;
    K = n;
}
function eP(e) {
    er = e.integrations;
}
function eM(e) {
    if (null == l || F !== w.QZA.OPEN || ('GUILD_INTEGRATIONS_UPDATE' === e.type && e.guildId !== l.id)) return !1;
    (0, x.i)(l.id);
}
function ek(e) {
    var n, r, i, a, s, o, u, c, d, f;
    let { guildId: _, metadata: h } = e;
    null != l &&
        _ === l.id &&
        (!1 === Q && (Q = !0),
        (X = {
            primaryCategoryId: null !== (n = h.primaryCategoryId) && void 0 !== n ? n : P.o3,
            secondaryCategoryIds: null !== (r = h.secondaryCategoryIds) && void 0 !== r ? r : [],
            keywords: null !== (i = h.keywords) && void 0 !== i ? i : [],
            emojiDiscoverabilityEnabled: null !== (a = h.emojiDiscoverabilityEnabled) && void 0 !== a ? a : U,
            partnerActionedTimestamp: null !== (s = h.partnerActionedTimestamp) && void 0 !== s ? s : null,
            partnerApplicationTimestamp: null !== (o = h.partnerApplicationTimestamp) && void 0 !== o ? o : null,
            isPublished: null !== (u = h.isPublished) && void 0 !== u && u,
            reasonsToJoin: null !== (c = h.reasonsToJoin) && void 0 !== c ? c : [],
            socialLinks: null !== (d = h.socialLinks) && void 0 !== d ? d : [],
            about: null !== (f = h.about) && void 0 !== f ? f : ''
        }),
        (J = X),
        (V = {}));
}
function eU() {
    X = J = q;
}
function eB(e) {
    let { slug: n } = e;
    d = n;
}
function eG(e) {
    let {} = e;
    d = null;
}
function eZ(e) {
    let { guildId: n, categoryId: r } = e;
    null != l &&
        n === l.id &&
        ((J = {
            ...J,
            secondaryCategoryIds: [...J.secondaryCategoryIds, r]
        }),
        (X = {
            ...X,
            secondaryCategoryIds: [...X.secondaryCategoryIds, r]
        }));
}
function eF(e) {
    let n,
        { guildId: r, categoryId: i } = e;
    if (null == l || r !== l.id) return;
    let a = J.secondaryCategoryIds.indexOf(i);
    -1 !== a &&
        ((n = [...J.secondaryCategoryIds]).splice(a, 1),
        (J = {
            ...J,
            secondaryCategoryIds: n
        })),
        -1 !== (a = X.secondaryCategoryIds.indexOf(i)) &&
            ((n = [...X.secondaryCategoryIds]).splice(a, 1),
            (X = {
                ...X,
                secondaryCategoryIds: n
            }));
}
function eV(e) {
    let { guildId: n, errors: r } = e;
    null != l && n === l.id && (V = null != r ? r : {});
}
function ej(e) {
    let { guildId: n, primaryCategoryId: r, keywords: i, emojiDiscoverabilityEnabled: a, isPublished: s, reasonsToJoin: o, socialLinks: u, about: c } = e;
    null != l &&
        n === l.id &&
        (J = {
            ...J,
            primaryCategoryId: null != r ? r : J.primaryCategoryId,
            keywords: null != i ? i : J.keywords,
            emojiDiscoverabilityEnabled: null != a ? a : J.emojiDiscoverabilityEnabled,
            isPublished: null != s ? s : J.isPublished,
            reasonsToJoin: null != o ? o : J.reasonsToJoin,
            socialLinks: null != u ? u : J.socialLinks,
            about: null != c ? c : J.about
        });
}
function eH(e) {
    let { guildId: n, errors: r } = e;
    null != l && n === l.id && (V = null != r ? r : {});
}
class eY extends (f = v.ZP.Store) {
    initialize() {
        this.waitFor(R.Z, O.default);
    }
    getMetadata() {
        return J;
    }
    hasChanges() {
        return !m().isEqual(l, o) || !m().isEqual(J, X);
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
        return null != l ? l.id : null;
    }
    showPublicSuccessModal() {
        return !T.K.get(M.zs);
    }
    getGuild() {
        return l;
    }
    isSubmitting() {
        return F === w.QZA.SUBMITTING;
    }
    isGuildMetadataLoaded() {
        return Q;
    }
    getErrors() {
        return V;
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
            integrations: er,
            section: i,
            subsection: a,
            errors: V,
            guild: l,
            bans: $,
            bansVersion: ee,
            invites: en,
            selectedRoleId: u,
            embedEnabled: j,
            embedChannelId: H,
            mfaLevel: K,
            searchQuery: s,
            vanityURLCode: Y,
            vanityURLUses: W,
            originalGuild: o,
            hasChanges: this.hasChanges(),
            guildMetadata: J,
            analyticsLocation: z,
            isGuildMetadataLoaded: Q
        };
    }
}
k(eY, 'displayName', 'GuildSettingsStore'),
    (n.Z = new eY(
        b.Z,
        __OVERLAY__
            ? {}
            : {
                  GUILD_SETTINGS_INIT: es,
                  GUILD_SETTINGS_OPEN: ea,
                  GUILD_SETTINGS_CLOSE: eo,
                  GUILD_SETTINGS_UPDATE: em,
                  GUILD_SETTINGS_CANCEL_CHANGES: ed,
                  GUILD_SETTINGS_SAVE_ROUTE_STACK: el,
                  GUILD_SETTINGS_SUBMIT: ef,
                  GUILD_SETTINGS_SUBMIT_SUCCESS: e_,
                  GUILD_SETTINGS_SUBMIT_FAILURE: eh,
                  GUILD_SETTINGS_SET_SECTION: eu,
                  GUILD_SETTINGS_SET_SEARCH_QUERY: ec,
                  GUILD_SETTINGS_LOADED_BANS: eT,
                  GUILD_SETTINGS_LOADED_BANS_BATCH: eb,
                  GUILD_SETTINGS_LOADED_INVITES: eE,
                  GUILD_SETTINGS_SET_WIDGET: eL,
                  GUILD_SETTINGS_SET_VANITY_URL: ex,
                  GUILD_SETTINGS_SET_MFA_SUCCESS: ew,
                  GUILD_SETTINGS_ROLE_SELECT: eC,
                  GUILD_SETTINGS_LOADED_INTEGRATIONS: eP,
                  GUILD_BAN_ADD: ey,
                  GUILD_BAN_REMOVE: eS,
                  GUILD_ROLE_CREATE: eR,
                  GUILD_ROLE_UPDATE: eO,
                  GUILD_ROLE_DELETE: eD,
                  GUILD_UPDATE: eA,
                  GUILD_DELETE: eN,
                  USER_CONNECTIONS_UPDATE: eM,
                  GUILD_INTEGRATIONS_UPDATE: eM,
                  INSTANT_INVITE_REVOKE_SUCCESS: ev,
                  INSTANT_INVITE_CREATE_SUCCESS: eI,
                  GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: ek,
                  GUILD_DISCOVERY_METADATA_FETCH_FAIL: eU,
                  GUILD_DISCOVERY_CATEGORY_ADD: eZ,
                  GUILD_DISCOVERY_CATEGORY_DELETE: eF,
                  GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL: eV,
                  GUILD_UPDATE_DISCOVERY_METADATA: ej,
                  GUILD_UPDATE_DISCOVERY_METADATA_FAIL: eH,
                  GUILD_DISCOVERY_SLUG_FETCH_SUCCESS: eB,
                  GUILD_DISCOVERY_SLUG_FETCH_FAIL: eG
              }
    ));
