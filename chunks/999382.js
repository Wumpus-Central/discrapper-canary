let i, a, o, s, l, u, c, d;
var f,
    p = r(47120);
var h = r(789020);
var _ = r(724458);
var m = r(392711),
    g = r.n(m),
    E = r(913527),
    v = r.n(E),
    y = r(442837),
    b = r(544891),
    I = r(433517),
    T = r(570140),
    S = r(749210),
    A = r(131704),
    C = r(601964),
    N = r(758449),
    R = r(598077),
    O = r(430824),
    D = r(594174),
    L = r(709054),
    x = r(372454),
    w = r(330010),
    P = r(981631),
    M = r(128449),
    k = r(135899);
function U(e, n, r) {
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
let B = !0,
    G = ['name', 'description', 'icon', 'splash', 'banner', 'homeHeader', 'afkChannelId', 'afkTimeout', 'systemChannelId', 'verificationLevel', 'defaultMessageNotifications', 'explicitContentFilter', 'features', 'systemChannelFlags', 'preferredLocale', 'rulesChannelId', 'safetyAlertsChannelId', 'discoverySplash', 'publicUpdatesChannelId', 'premiumProgressBarEnabled', 'profile'],
    Z = new Set(['icon', 'splash', 'banner', 'discoverySplash', 'homeHeader']),
    F = !1,
    V = P.QZA.CLOSED,
    j = {},
    H = !1,
    Y = null,
    W = null,
    K = 0,
    z = P.BpS.NONE,
    q = null,
    Q = {
        primaryCategoryId: M.o3,
        secondaryCategoryIds: [],
        keywords: [],
        emojiDiscoverabilityEnabled: B,
        partnerActionedTimestamp: null,
        partnerApplicationTimestamp: null,
        isPublished: !1,
        reasonsToJoin: [],
        socialLinks: [],
        about: ''
    },
    X = !1,
    J = Q,
    $ = Q,
    ee = null,
    et = 0,
    en = null,
    er = null,
    ei = null;
function ea(e) {
    if (null == l || null == s || s.id !== e) return !1;
    let n = O.Z.getGuild(e);
    return null != n && (s === l ? (l = s = n) : (s = n), !0);
}
function eo(e) {
    (F = !0), es(e);
}
function es(e) {
    var n;
    let { guildId: r, section: a, subsection: o, location: c } = e,
        f = O.Z.getGuild(r);
    if (null == f) return el();
    (s = l = f), (V = P.QZA.OPEN), (j = {}), (u = L.default.castGuildIdAsEveryoneGuildRoleId(r)), (z = l.mfaLevel), ($ = J), (d = null), (q = c);
    ec({
        section: null !== (n = null != a ? a : i) && void 0 !== n ? n : P.pNK.OVERVIEW,
        subsection: null != o ? o : null
    });
}
function el() {
    (F = !1), (V = P.QZA.CLOSED), (s = l = null), (H = !1), (Y = null), (W = null), (K = 0), (ee = null), (er = null), (ei = null), (i = null), (a = null), (o = null), (z = P.BpS.NONE), (c = void 0);
}
function eu(e) {
    let { state: n } = e;
    return (c = n), !1;
}
function ec(e) {
    if (null == l) return !1;
    let n = i;
    if (((i = e.section), (a = e.subsection), i === P.pNK.BANS)) {
        let { enabled: e } = x.T.getCurrentConfig({
            guildId: l.id,
            location: '7f0c91_1'
        });
        !e && S.Z.fetchGuildBans(l.id);
    } else if (i === P.pNK.INSTANT_INVITES)
        b.tn
            .get({
                url: P.ANM.GUILD_INSTANT_INVITES(l.id),
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then((e) => {
                T.Z.dispatch({
                    type: 'GUILD_SETTINGS_LOADED_INVITES',
                    invites: e.body
                });
            });
    else if (i === P.pNK.WIDGET)
        b.tn
            .get({
                url: P.ANM.GUILD_WIDGET(l.id),
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then((e) => {
                T.Z.dispatch({
                    type: 'GUILD_SETTINGS_SET_WIDGET',
                    enabled: e.body.enabled,
                    channelId: e.body.channel_id
                });
            });
    else if (i === P.pNK.INTEGRATIONS || i === P.pNK.ROLES) {
        if (((u = null), n !== e.section)) return ek(e);
    } else
        i === P.pNK.MEMBERS
            ? (u = l.getEveryoneRoleId())
            : i === P.pNK.VANITY_URL
              ? b.tn
                    .get({
                        url: P.ANM.GUILD_VANITY_URL(l.id),
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                    .then((e) => {
                        let {
                            body: { code: n, uses: r, error: i }
                        } = e;
                        T.Z.dispatch({
                            type: 'GUILD_SETTINGS_SET_VANITY_URL',
                            code: n,
                            uses: r,
                            error: i
                        });
                    })
              : i === P.pNK.SAFETY &&
                T.Z.dispatch({
                    type: 'GUILD_SETTINGS_SAFETY_SET_SUBSECTION',
                    subsection: null == a ? P.KsC.SAFETY_OVERVIEW : a
                });
}
function ed(e) {
    o = e.searchQuery;
}
function ef(e) {
    let { guildId: n } = e;
    j = {};
    let r = O.Z.getGuild(n);
    null != r && (s = l = r);
}
function ep() {
    (V = P.QZA.SUBMITTING), (j = {});
}
function eh() {
    V = P.QZA.OPEN;
}
function e_(e) {
    var n;
    (V = P.QZA.OPEN), (i = null != i ? i : P.pNK.OVERVIEW), (a = null), (j = null !== (n = e.errors) && void 0 !== n ? n : {});
}
function em() {
    if (null == l) return !1;
    let e = l.toJS(),
        n = s.toJS();
    !G.some((r) => e[r] !== n[r]) && (l = s);
}
function eg(e) {
    if (null == l) return !1;
    G.forEach((n) => {
        null != l && e.hasOwnProperty(n) && (l = l.set(n, e[n]));
    }),
        em();
}
function eE(e) {
    var n;
    return new N.Z({
        code: e.code,
        temporary: e.temporary,
        revoked: e.revoked,
        inviter: null != e.inviter ? new R.Z(e.inviter) : null,
        channel: (0, A.jD)(e.channel),
        guild: null != e.guild ? new C.ZP(e.guild) : null,
        uses: e.uses,
        maxUses: e.max_uses,
        maxAge: e.max_age,
        createdAt: v()(null !== (n = e.created_at) && void 0 !== n ? n : void 0),
        flags: e.flags
    });
}
function ev(e) {
    er = e.invites.reduce((e, n) => ((e[n.code] = eE(n)), e), {});
}
function ey(e) {
    (er = { ...er }), delete er[e.code];
}
function eb(e) {
    er = {
        ...er,
        [e.invite.code]: eE(e.invite)
    };
}
function eI(e) {
    (ee = e.bans.reduce((e, n) => (null != n.user && null != n.user.id && e.set(n.user.id, n), e), new Map())), et++;
}
function eT(e) {
    let { bans: n, guildId: r } = e;
    (en !== r || null == ee) && ((en = r), (ee = new Map())), (ee = n.reduce((e, n) => (null != n.user && null != n.user.id && e.set(n.user.id, n), e), ee)), et++;
}
function eS(e) {
    let { user: n, guildId: r } = e;
    if (null == ee || null == l || l.id !== r) return !1;
    ee.set(n.id, {
        user: n,
        reason: null
    }),
        et++;
}
function eA(e) {
    let { user: n, guildId: r } = e;
    if (null == ee || null == l || l.id !== r) return !1;
    ee.delete(n.id), et++;
}
function eC(e) {
    if (null == l || l.id !== e.guild.id) return !1;
    {
        let e = O.Z.getGuild(l.id);
        if (null == e) return !1;
        let n = (s = e),
            r = l.toJS();
        G.forEach((e) => {
            if (!Z.has(e) && (('rulesChannelId' !== e && 'publicUpdatesChannelId' !== e) || r[e] !== k.b4)) {
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
    el();
}
function eR(e) {
    let { roleId: n } = e;
    u = null != n ? n : null;
}
function eO(e) {
    let { guildId: n } = e;
    if (!ea(n)) return !1;
}
function eD(e) {
    let { guildId: n } = e;
    if (!ea(n)) return !1;
}
function eL(e) {
    let { guildId: n, roleId: r } = e;
    if (!ea(n)) return !1;
    u === r && (u = null);
}
function ex(e) {
    (H = e.enabled), (Y = e.channelId);
}
function ew(e) {
    var n;
    (W = null !== (n = e.code) && void 0 !== n ? n : null), (K = e.uses);
}
function eP(e) {
    let { level: n } = e;
    z = n;
}
function eM(e) {
    ei = e.integrations;
}
function ek(e) {
    if (null == l || V !== P.QZA.OPEN || ('GUILD_INTEGRATIONS_UPDATE' === e.type && e.guildId !== l.id)) return !1;
    (0, w.i)(l.id);
}
function eU(e) {
    var n, r, i, a, o, s, u, c, d, f;
    let { guildId: p, metadata: h } = e;
    null != l &&
        p === l.id &&
        (!1 === X && (X = !0),
        (J = {
            primaryCategoryId: null !== (n = h.primaryCategoryId) && void 0 !== n ? n : M.o3,
            secondaryCategoryIds: null !== (r = h.secondaryCategoryIds) && void 0 !== r ? r : [],
            keywords: null !== (i = h.keywords) && void 0 !== i ? i : [],
            emojiDiscoverabilityEnabled: null !== (a = h.emojiDiscoverabilityEnabled) && void 0 !== a ? a : B,
            partnerActionedTimestamp: null !== (o = h.partnerActionedTimestamp) && void 0 !== o ? o : null,
            partnerApplicationTimestamp: null !== (s = h.partnerApplicationTimestamp) && void 0 !== s ? s : null,
            isPublished: null !== (u = h.isPublished) && void 0 !== u && u,
            reasonsToJoin: null !== (c = h.reasonsToJoin) && void 0 !== c ? c : [],
            socialLinks: null !== (d = h.socialLinks) && void 0 !== d ? d : [],
            about: null !== (f = h.about) && void 0 !== f ? f : ''
        }),
        ($ = J),
        (j = {}));
}
function eB() {
    J = $ = Q;
}
function eG(e) {
    let { slug: n } = e;
    d = n;
}
function eZ(e) {
    let {} = e;
    d = null;
}
function eF(e) {
    let { guildId: n, categoryId: r } = e;
    null != l &&
        n === l.id &&
        (($ = {
            ...$,
            secondaryCategoryIds: [...$.secondaryCategoryIds, r]
        }),
        (J = {
            ...J,
            secondaryCategoryIds: [...J.secondaryCategoryIds, r]
        }));
}
function eV(e) {
    let n,
        { guildId: r, categoryId: i } = e;
    if (null == l || r !== l.id) return;
    let a = $.secondaryCategoryIds.indexOf(i);
    -1 !== a &&
        ((n = [...$.secondaryCategoryIds]).splice(a, 1),
        ($ = {
            ...$,
            secondaryCategoryIds: n
        })),
        -1 !== (a = J.secondaryCategoryIds.indexOf(i)) &&
            ((n = [...J.secondaryCategoryIds]).splice(a, 1),
            (J = {
                ...J,
                secondaryCategoryIds: n
            }));
}
function ej(e) {
    let { guildId: n, errors: r } = e;
    null != l && n === l.id && (j = null != r ? r : {});
}
function eH(e) {
    let { guildId: n, primaryCategoryId: r, keywords: i, emojiDiscoverabilityEnabled: a, isPublished: o, reasonsToJoin: s, socialLinks: u, about: c } = e;
    null != l &&
        n === l.id &&
        ($ = {
            ...$,
            primaryCategoryId: null != r ? r : $.primaryCategoryId,
            keywords: null != i ? i : $.keywords,
            emojiDiscoverabilityEnabled: null != a ? a : $.emojiDiscoverabilityEnabled,
            isPublished: null != o ? o : $.isPublished,
            reasonsToJoin: null != s ? s : $.reasonsToJoin,
            socialLinks: null != u ? u : $.socialLinks,
            about: null != c ? c : $.about
        });
}
function eY(e) {
    let { guildId: n, errors: r } = e;
    null != l && n === l.id && (j = null != r ? r : {});
}
class eW extends (f = y.ZP.Store) {
    initialize() {
        this.waitFor(O.Z, D.default);
    }
    getMetadata() {
        return $;
    }
    hasChanges() {
        return !g().isEqual(l, s) || !g().isEqual($, J);
    }
    isOpen() {
        return F;
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
        return !I.K.get(k.zs);
    }
    getGuild() {
        return l;
    }
    isSubmitting() {
        return V === P.QZA.SUBMITTING;
    }
    isGuildMetadataLoaded() {
        return X;
    }
    getErrors() {
        return j;
    }
    getSelectedRoleId() {
        return u;
    }
    getSlug() {
        return d;
    }
    getBans() {
        return [ee, et];
    }
    getProps() {
        return {
            submitting: this.isSubmitting(),
            integrations: ei,
            section: i,
            subsection: a,
            errors: j,
            guild: l,
            bans: ee,
            bansVersion: et,
            invites: er,
            selectedRoleId: u,
            embedEnabled: H,
            embedChannelId: Y,
            mfaLevel: z,
            searchQuery: o,
            vanityURLCode: W,
            vanityURLUses: K,
            originalGuild: s,
            hasChanges: this.hasChanges(),
            guildMetadata: $,
            analyticsLocation: q,
            isGuildMetadataLoaded: X
        };
    }
}
U(eW, 'displayName', 'GuildSettingsStore'),
    (n.Z = new eW(
        T.Z,
        __OVERLAY__
            ? {}
            : {
                  GUILD_SETTINGS_INIT: es,
                  GUILD_SETTINGS_OPEN: eo,
                  GUILD_SETTINGS_CLOSE: el,
                  GUILD_SETTINGS_UPDATE: eg,
                  GUILD_SETTINGS_CANCEL_CHANGES: ef,
                  GUILD_SETTINGS_SAVE_ROUTE_STACK: eu,
                  GUILD_SETTINGS_SUBMIT: ep,
                  GUILD_SETTINGS_SUBMIT_SUCCESS: eh,
                  GUILD_SETTINGS_SUBMIT_FAILURE: e_,
                  GUILD_SETTINGS_SET_SECTION: ec,
                  GUILD_SETTINGS_SET_SEARCH_QUERY: ed,
                  GUILD_SETTINGS_LOADED_BANS: eI,
                  GUILD_SETTINGS_LOADED_BANS_BATCH: eT,
                  GUILD_SETTINGS_LOADED_INVITES: ev,
                  GUILD_SETTINGS_SET_WIDGET: ex,
                  GUILD_SETTINGS_SET_VANITY_URL: ew,
                  GUILD_SETTINGS_SET_MFA_SUCCESS: eP,
                  GUILD_SETTINGS_ROLE_SELECT: eR,
                  GUILD_SETTINGS_LOADED_INTEGRATIONS: eM,
                  GUILD_BAN_ADD: eS,
                  GUILD_BAN_REMOVE: eA,
                  GUILD_ROLE_CREATE: eO,
                  GUILD_ROLE_UPDATE: eD,
                  GUILD_ROLE_DELETE: eL,
                  GUILD_UPDATE: eC,
                  GUILD_DELETE: eN,
                  USER_CONNECTIONS_UPDATE: ek,
                  GUILD_INTEGRATIONS_UPDATE: ek,
                  INSTANT_INVITE_REVOKE_SUCCESS: ey,
                  INSTANT_INVITE_CREATE_SUCCESS: eb,
                  GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: eU,
                  GUILD_DISCOVERY_METADATA_FETCH_FAIL: eB,
                  GUILD_DISCOVERY_CATEGORY_ADD: eF,
                  GUILD_DISCOVERY_CATEGORY_DELETE: eV,
                  GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL: ej,
                  GUILD_UPDATE_DISCOVERY_METADATA: eH,
                  GUILD_UPDATE_DISCOVERY_METADATA_FAIL: eY,
                  GUILD_DISCOVERY_SLUG_FETCH_SUCCESS: eG,
                  GUILD_DISCOVERY_SLUG_FETCH_FAIL: eZ
              }
    ));
