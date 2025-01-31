let i, r, a, s, o, l, u, c;
n.d(t, { Z: () => ej }), n(47120), n(789020), n(724458);
var d,
    f = n(392711),
    _ = n.n(f),
    p = n(913527),
    h = n.n(p),
    m = n(442837),
    g = n(544891),
    E = n(433517),
    v = n(570140),
    y = n(749210),
    I = n(131704),
    b = n(601964),
    T = n(758449),
    S = n(598077),
    A = n(430824),
    N = n(594174),
    C = n(709054),
    R = n(372454),
    O = n(330010),
    D = n(981631),
    x = n(128449),
    L = n(135899);
function P(e, t, n) {
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
let w = !0,
    M = ['name', 'description', 'icon', 'splash', 'banner', 'homeHeader', 'afkChannelId', 'afkTimeout', 'systemChannelId', 'verificationLevel', 'defaultMessageNotifications', 'explicitContentFilter', 'features', 'systemChannelFlags', 'preferredLocale', 'rulesChannelId', 'safetyAlertsChannelId', 'discoverySplash', 'publicUpdatesChannelId', 'premiumProgressBarEnabled', 'profile'],
    k = new Set(['icon', 'splash', 'banner', 'discoverySplash', 'homeHeader']),
    U = !1,
    G = D.QZA.CLOSED,
    B = {},
    Z = !1,
    F = null,
    V = null,
    j = 0,
    H = D.BpS.NONE,
    Y = null,
    W = {
        primaryCategoryId: x.o3,
        secondaryCategoryIds: [],
        keywords: [],
        emojiDiscoverabilityEnabled: w,
        partnerActionedTimestamp: null,
        partnerApplicationTimestamp: null,
        isPublished: !1,
        reasonsToJoin: [],
        socialLinks: [],
        about: ''
    },
    K = !1,
    z = W,
    q = W,
    Q = null,
    X = 0,
    J = null,
    $ = null,
    ee = null;
function et(e) {
    if (null == o || null == s || s.id !== e) return !1;
    let t = A.Z.getGuild(e);
    return null != t && (s === o ? (o = s = t) : (s = t), !0);
}
function en(e) {
    (U = !0), ei(e);
}
function ei(e) {
    var t;
    let { guildId: n, section: r, subsection: a, location: u } = e,
        d = A.Z.getGuild(n);
    if (null == d) return er();
    (s = o = d),
        (G = D.QZA.OPEN),
        (B = {}),
        (l = C.default.castGuildIdAsEveryoneGuildRoleId(n)),
        (H = o.mfaLevel),
        (q = z),
        (c = null),
        (Y = u),
        es({
            section: null !== (t = null != r ? r : i) && void 0 !== t ? t : D.pNK.OVERVIEW,
            subsection: null != a ? a : null
        });
}
function er() {
    (U = !1), (G = D.QZA.CLOSED), (s = o = null), (Z = !1), (F = null), (V = null), (j = 0), (Q = null), ($ = null), (ee = null), (i = null), (r = null), (a = null), (H = D.BpS.NONE), (u = void 0);
}
function ea(e) {
    let { state: t } = e;
    return (u = t), !1;
}
function es(e) {
    if (null == o) return !1;
    let t = i;
    if (((i = e.section), (r = e.subsection), i === D.pNK.BANS)) {
        let { enabled: e } = R.T.getCurrentConfig({
            guildId: o.id,
            location: '7f0c91_1'
        });
        e || y.Z.fetchGuildBans(o.id);
    } else if (i === D.pNK.INSTANT_INVITES)
        g.tn
            .get({
                url: D.ANM.GUILD_INSTANT_INVITES(o.id),
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then((e) => {
                v.Z.dispatch({
                    type: 'GUILD_SETTINGS_LOADED_INVITES',
                    invites: e.body
                });
            });
    else if (i === D.pNK.WIDGET)
        g.tn
            .get({
                url: D.ANM.GUILD_WIDGET(o.id),
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then((e) => {
                v.Z.dispatch({
                    type: 'GUILD_SETTINGS_SET_WIDGET',
                    enabled: e.body.enabled,
                    channelId: e.body.channel_id
                });
            });
    else if (i === D.pNK.INTEGRATIONS || i === D.pNK.ROLES) {
        if (((l = null), t !== e.section)) return eL(e);
    } else
        i === D.pNK.MEMBERS
            ? (l = o.getEveryoneRoleId())
            : i === D.pNK.VANITY_URL
              ? g.tn
                    .get({
                        url: D.ANM.GUILD_VANITY_URL(o.id),
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                    .then((e) => {
                        let {
                            body: { code: t, uses: n, error: i }
                        } = e;
                        v.Z.dispatch({
                            type: 'GUILD_SETTINGS_SET_VANITY_URL',
                            code: t,
                            uses: n,
                            error: i
                        });
                    })
              : i === D.pNK.SAFETY &&
                v.Z.dispatch({
                    type: 'GUILD_SETTINGS_SAFETY_SET_SUBSECTION',
                    subsection: null == r ? D.KsC.SAFETY_OVERVIEW : r
                });
}
function eo(e) {
    a = e.searchQuery;
}
function el(e) {
    let { guildId: t } = e;
    B = {};
    let n = A.Z.getGuild(t);
    null != n && (s = o = n);
}
function eu() {
    (G = D.QZA.SUBMITTING), (B = {});
}
function ec() {
    G = D.QZA.OPEN;
}
function ed(e) {
    var t;
    (G = D.QZA.OPEN), (i = null != i ? i : D.pNK.OVERVIEW), (r = null), (B = null !== (t = e.errors) && void 0 !== t ? t : {});
}
function ef() {
    if (null == o) return !1;
    let e = o.toJS(),
        t = s.toJS();
    M.some((n) => e[n] !== t[n]) || (o = s);
}
function e_(e) {
    if (null == o) return !1;
    M.forEach((t) => {
        null != o && e.hasOwnProperty(t) && (o = o.set(t, e[t]));
    }),
        ef();
}
function ep(e) {
    var t;
    return new T.Z({
        code: e.code,
        temporary: e.temporary,
        revoked: e.revoked,
        inviter: null != e.inviter ? new S.Z(e.inviter) : null,
        channel: (0, I.jD)(e.channel),
        guild: null != e.guild ? new b.ZP(e.guild) : null,
        uses: e.uses,
        maxUses: e.max_uses,
        maxAge: e.max_age,
        createdAt: h()(null !== (t = e.created_at) && void 0 !== t ? t : void 0),
        flags: e.flags
    });
}
function eh(e) {
    $ = e.invites.reduce((e, t) => ((e[t.code] = ep(t)), e), {});
}
function em(e) {
    ($ = { ...$ }), delete $[e.code];
}
function eg(e) {
    $ = {
        ...$,
        [e.invite.code]: ep(e.invite)
    };
}
function eE(e) {
    (Q = e.bans.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), new Map())), X++;
}
function ev(e) {
    let { bans: t, guildId: n } = e;
    (J !== n || null == Q) && ((J = n), (Q = new Map())), (Q = t.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), Q)), X++;
}
function ey(e) {
    let { user: t, guildId: n } = e;
    if (null == Q || null == o || o.id !== n) return !1;
    Q.set(t.id, {
        user: t,
        reason: null
    }),
        X++;
}
function eI(e) {
    let { user: t, guildId: n } = e;
    if (null == Q || null == o || o.id !== n) return !1;
    Q.delete(t.id), X++;
}
function eb(e) {
    if (null == o || o.id !== e.guild.id) return !1;
    {
        let e = A.Z.getGuild(o.id);
        if (null == e) return !1;
        let t = (s = e),
            n = o.toJS();
        M.forEach((e) => {
            if (!k.has(e) && (('rulesChannelId' !== e && 'publicUpdatesChannelId' !== e) || n[e] !== L.b4)) {
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
function eT(e) {
    if (null == o || o.id !== e.guild.id) return !1;
    er();
}
function eS(e) {
    let { roleId: t } = e;
    l = null != t ? t : null;
}
function eA(e) {
    let { guildId: t } = e;
    if (!et(t)) return !1;
}
function eN(e) {
    let { guildId: t } = e;
    if (!et(t)) return !1;
}
function eC(e) {
    let { guildId: t, roleId: n } = e;
    if (!et(t)) return !1;
    l === n && (l = null);
}
function eR(e) {
    (Z = e.enabled), (F = e.channelId);
}
function eO(e) {
    var t;
    (V = null !== (t = e.code) && void 0 !== t ? t : null), (j = e.uses);
}
function eD(e) {
    let { level: t } = e;
    H = t;
}
function ex(e) {
    ee = e.integrations;
}
function eL(e) {
    if (null == o || G !== D.QZA.OPEN || ('GUILD_INTEGRATIONS_UPDATE' === e.type && e.guildId !== o.id)) return !1;
    (0, O.i)(o.id);
}
function eP(e) {
    var t, n, i, r, a, s, l, u, c, d;
    let { guildId: f, metadata: _ } = e;
    null != o &&
        f === o.id &&
        (!1 === K && (K = !0),
        (q = z =
            {
                primaryCategoryId: null !== (t = _.primaryCategoryId) && void 0 !== t ? t : x.o3,
                secondaryCategoryIds: null !== (n = _.secondaryCategoryIds) && void 0 !== n ? n : [],
                keywords: null !== (i = _.keywords) && void 0 !== i ? i : [],
                emojiDiscoverabilityEnabled: null !== (r = _.emojiDiscoverabilityEnabled) && void 0 !== r ? r : w,
                partnerActionedTimestamp: null !== (a = _.partnerActionedTimestamp) && void 0 !== a ? a : null,
                partnerApplicationTimestamp: null !== (s = _.partnerApplicationTimestamp) && void 0 !== s ? s : null,
                isPublished: null !== (l = _.isPublished) && void 0 !== l && l,
                reasonsToJoin: null !== (u = _.reasonsToJoin) && void 0 !== u ? u : [],
                socialLinks: null !== (c = _.socialLinks) && void 0 !== c ? c : [],
                about: null !== (d = _.about) && void 0 !== d ? d : ''
            }),
        (B = {}));
}
function ew() {
    z = q = W;
}
function eM(e) {
    let { slug: t } = e;
    c = t;
}
function ek(e) {
    let {} = e;
    c = null;
}
function eU(e) {
    let { guildId: t, categoryId: n } = e;
    null != o &&
        t === o.id &&
        ((q = {
            ...q,
            secondaryCategoryIds: [...q.secondaryCategoryIds, n]
        }),
        (z = {
            ...z,
            secondaryCategoryIds: [...z.secondaryCategoryIds, n]
        }));
}
function eG(e) {
    let t,
        { guildId: n, categoryId: i } = e;
    if (null == o || n !== o.id) return;
    let r = q.secondaryCategoryIds.indexOf(i);
    -1 !== r &&
        ((t = [...q.secondaryCategoryIds]).splice(r, 1),
        (q = {
            ...q,
            secondaryCategoryIds: t
        })),
        -1 !== (r = z.secondaryCategoryIds.indexOf(i)) &&
            ((t = [...z.secondaryCategoryIds]).splice(r, 1),
            (z = {
                ...z,
                secondaryCategoryIds: t
            }));
}
function eB(e) {
    let { guildId: t, errors: n } = e;
    null != o && t === o.id && (B = null != n ? n : {});
}
function eZ(e) {
    let { guildId: t, primaryCategoryId: n, keywords: i, emojiDiscoverabilityEnabled: r, isPublished: a, reasonsToJoin: s, socialLinks: l, about: u } = e;
    null != o &&
        t === o.id &&
        (q = {
            ...q,
            primaryCategoryId: null != n ? n : q.primaryCategoryId,
            keywords: null != i ? i : q.keywords,
            emojiDiscoverabilityEnabled: null != r ? r : q.emojiDiscoverabilityEnabled,
            isPublished: null != a ? a : q.isPublished,
            reasonsToJoin: null != s ? s : q.reasonsToJoin,
            socialLinks: null != l ? l : q.socialLinks,
            about: null != u ? u : q.about
        });
}
function eF(e) {
    let { guildId: t, errors: n } = e;
    null != o && t === o.id && (B = null != n ? n : {});
}
class eV extends (d = m.ZP.Store) {
    initialize() {
        this.waitFor(A.Z, N.default);
    }
    getMetadata() {
        return q;
    }
    hasChanges() {
        return !_().isEqual(o, s) || !_().isEqual(q, z);
    }
    isOpen() {
        return U;
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
        return null != o ? o.id : null;
    }
    showPublicSuccessModal() {
        return !E.K.get(L.zs);
    }
    getGuild() {
        return o;
    }
    isSubmitting() {
        return G === D.QZA.SUBMITTING;
    }
    isGuildMetadataLoaded() {
        return K;
    }
    getErrors() {
        return B;
    }
    getSelectedRoleId() {
        return l;
    }
    getSlug() {
        return c;
    }
    getBans() {
        return [Q, X];
    }
    getProps() {
        return {
            submitting: this.isSubmitting(),
            integrations: ee,
            section: i,
            subsection: r,
            errors: B,
            guild: o,
            bans: Q,
            bansVersion: X,
            invites: $,
            selectedRoleId: l,
            embedEnabled: Z,
            embedChannelId: F,
            mfaLevel: H,
            searchQuery: a,
            vanityURLCode: V,
            vanityURLUses: j,
            originalGuild: s,
            hasChanges: this.hasChanges(),
            guildMetadata: q,
            analyticsLocation: Y,
            isGuildMetadataLoaded: K
        };
    }
}
P(eV, 'displayName', 'GuildSettingsStore');
let ej = new eV(
    v.Z,
    __OVERLAY__
        ? {}
        : {
              GUILD_SETTINGS_INIT: ei,
              GUILD_SETTINGS_OPEN: en,
              GUILD_SETTINGS_CLOSE: er,
              GUILD_SETTINGS_UPDATE: e_,
              GUILD_SETTINGS_CANCEL_CHANGES: el,
              GUILD_SETTINGS_SAVE_ROUTE_STACK: ea,
              GUILD_SETTINGS_SUBMIT: eu,
              GUILD_SETTINGS_SUBMIT_SUCCESS: ec,
              GUILD_SETTINGS_SUBMIT_FAILURE: ed,
              GUILD_SETTINGS_SET_SECTION: es,
              GUILD_SETTINGS_SET_SEARCH_QUERY: eo,
              GUILD_SETTINGS_LOADED_BANS: eE,
              GUILD_SETTINGS_LOADED_BANS_BATCH: ev,
              GUILD_SETTINGS_LOADED_INVITES: eh,
              GUILD_SETTINGS_SET_WIDGET: eR,
              GUILD_SETTINGS_SET_VANITY_URL: eO,
              GUILD_SETTINGS_SET_MFA_SUCCESS: eD,
              GUILD_SETTINGS_ROLE_SELECT: eS,
              GUILD_SETTINGS_LOADED_INTEGRATIONS: ex,
              GUILD_BAN_ADD: ey,
              GUILD_BAN_REMOVE: eI,
              GUILD_ROLE_CREATE: eA,
              GUILD_ROLE_UPDATE: eN,
              GUILD_ROLE_DELETE: eC,
              GUILD_UPDATE: eb,
              GUILD_DELETE: eT,
              USER_CONNECTIONS_UPDATE: eL,
              GUILD_INTEGRATIONS_UPDATE: eL,
              INSTANT_INVITE_REVOKE_SUCCESS: em,
              INSTANT_INVITE_CREATE_SUCCESS: eg,
              GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: eP,
              GUILD_DISCOVERY_METADATA_FETCH_FAIL: ew,
              GUILD_DISCOVERY_CATEGORY_ADD: eU,
              GUILD_DISCOVERY_CATEGORY_DELETE: eG,
              GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL: eB,
              GUILD_UPDATE_DISCOVERY_METADATA: eZ,
              GUILD_UPDATE_DISCOVERY_METADATA_FAIL: eF,
              GUILD_DISCOVERY_SLUG_FETCH_SUCCESS: eM,
              GUILD_DISCOVERY_SLUG_FETCH_FAIL: ek
          }
);
