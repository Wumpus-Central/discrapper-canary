let i, r, a, s, o, l, u, c, d;
n.d(t, { Z: () => eK }), n(47120), n(789020), n(724458);
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
    x = n(981631),
    L = n(128449),
    P = n(135899);
function w(e, t, n) {
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
let M = !0,
    k = ['name', 'description', 'icon', 'splash', 'banner', 'homeHeader', 'afkChannelId', 'afkTimeout', 'systemChannelId', 'verificationLevel', 'defaultMessageNotifications', 'explicitContentFilter', 'features', 'systemChannelFlags', 'preferredLocale', 'rulesChannelId', 'safetyAlertsChannelId', 'discoverySplash', 'publicUpdatesChannelId', 'premiumProgressBarEnabled', 'profile'],
    U = ['brandColorPrimary', 'description', 'icon', 'name', 'traits', 'visibility'],
    G = new Set(['icon', 'splash', 'banner', 'discoverySplash', 'homeHeader']),
    B = !1,
    Z = x.QZA.CLOSED,
    F = {},
    V = !1,
    j = null,
    H = null,
    Y = 0,
    W = x.BpS.NONE,
    K = null,
    z = {
        primaryCategoryId: L.o3,
        secondaryCategoryIds: [],
        keywords: [],
        emojiDiscoverabilityEnabled: M,
        partnerActionedTimestamp: null,
        partnerApplicationTimestamp: null,
        isPublished: !1,
        reasonsToJoin: [],
        socialLinks: [],
        about: ''
    },
    q = !1,
    Q = z,
    X = z,
    J = null,
    $ = 0,
    ee = null,
    et = null,
    en = null;
function ei(e) {
    if (null == o || null == s || s.id !== e) return !1;
    let t = N.Z.getGuild(e);
    return null != t && (s === o ? (o = s = t) : (s = t), !0);
}
function er(e) {
    (B = !0), ea(e);
}
function ea(e) {
    var t;
    let { guildId: n, section: r, subsection: a, location: l } = e,
        c = N.Z.getGuild(n);
    if (null == c) return es();
    (s = o = c),
        (Z = x.QZA.OPEN),
        (F = {}),
        (u = R.default.castGuildIdAsEveryoneGuildRoleId(n)),
        (W = o.mfaLevel),
        (X = Q),
        (d = null),
        (K = l),
        el({
            section: null !== (t = null != r ? r : i) && void 0 !== t ? t : x.pNK.OVERVIEW,
            subsection: null != a ? a : null
        });
}
function es() {
    (B = !1), (Z = x.QZA.CLOSED), (s = o = null), (V = !1), (j = null), (H = null), (Y = 0), (J = null), (et = null), (en = null), (i = null), (r = null), (a = null), (W = x.BpS.NONE), (c = void 0);
}
function eo(e) {
    let { state: t } = e;
    return (c = t), !1;
}
function el(e) {
    if (null == o) return !1;
    let t = i;
    if (((i = e.section), (r = e.subsection), i === x.pNK.BANS)) {
        let { enabled: e } = O.T.getCurrentConfig({
            guildId: o.id,
            location: '7f0c91_1'
        });
        e || I.Z.fetchGuildBans(o.id);
    } else if (i === x.pNK.INSTANT_INVITES)
        E.tn
            .get({
                url: x.ANM.GUILD_INSTANT_INVITES(o.id),
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then((e) => {
                y.Z.dispatch({
                    type: 'GUILD_SETTINGS_LOADED_INVITES',
                    invites: e.body
                });
            });
    else if (i === x.pNK.WIDGET)
        E.tn
            .get({
                url: x.ANM.GUILD_WIDGET(o.id),
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
    else if (i === x.pNK.INTEGRATIONS || i === x.pNK.ROLES) {
        if (((u = null), t !== e.section)) return eM(e);
    } else
        i === x.pNK.MEMBERS
            ? (u = o.getEveryoneRoleId())
            : i === x.pNK.VANITY_URL
              ? E.tn
                    .get({
                        url: x.ANM.GUILD_VANITY_URL(o.id),
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
              : i === x.pNK.SAFETY &&
                y.Z.dispatch({
                    type: 'GUILD_SETTINGS_SAFETY_SET_SUBSECTION',
                    subsection: null == r ? x.KsC.SAFETY_OVERVIEW : r
                });
}
function eu(e) {
    a = e.searchQuery;
}
function ec(e) {
    let { guildId: t } = e;
    F = {};
    let n = N.Z.getGuild(t);
    null != n && (s = o = n);
}
function ed() {
    (Z = x.QZA.SUBMITTING), (F = {});
}
function ef() {
    Z = x.QZA.OPEN;
}
function e_(e) {
    var t;
    (Z = x.QZA.OPEN), (i = null != i ? i : x.pNK.OVERVIEW), (r = null), (F = null !== (t = e.errors) && void 0 !== t ? t : {});
}
function ep() {
    if (null == o) return !1;
    let e = o.toJS(),
        t = s.toJS();
    k.some((n) => e[n] !== t[n]) || (o = s);
}
function eh(e) {
    if (null == o) return !1;
    k.forEach((t) => {
        null != o && e.hasOwnProperty(t) && (o = o.set(t, e[t]));
    }),
        ep();
}
function em(e) {
    let { guildId: t } = e;
    if (null == l || null == o || o.id !== t) return !1;
    U.forEach((t) => {
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
function eg(e) {
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
function eE(e) {
    et = e.invites.reduce((e, t) => ((e[t.code] = eg(t)), e), {});
}
function ev(e) {
    (et = { ...et }), delete et[e.code];
}
function ey(e) {
    et = {
        ...et,
        [e.invite.code]: eg(e.invite)
    };
}
function eI(e) {
    (J = e.bans.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), new Map())), $++;
}
function eb(e) {
    let { bans: t, guildId: n } = e;
    (ee !== n || null == J) && ((ee = n), (J = new Map())), (J = t.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), J)), $++;
}
function eT(e) {
    let { user: t, guildId: n } = e;
    if (null == J || null == o || o.id !== n) return !1;
    J.set(t.id, {
        user: t,
        reason: null
    }),
        $++;
}
function eS(e) {
    let { user: t, guildId: n } = e;
    if (null == J || null == o || o.id !== n) return !1;
    J.delete(t.id), $++;
}
function eA(e) {
    if (null == o || o.id !== e.guild.id) return !1;
    {
        let e = N.Z.getGuild(o.id);
        if (null == e) return !1;
        let t = (s = e),
            n = o.toJS();
        k.forEach((e) => {
            if (!G.has(e) && (('rulesChannelId' !== e && 'publicUpdatesChannelId' !== e) || n[e] !== P.b4)) {
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
function eN(e) {
    if (null == o || o.id !== e.guild.id) return !1;
    es();
}
function eC(e) {
    let { roleId: t } = e;
    u = null != t ? t : null;
}
function eR(e) {
    let { guildId: t } = e;
    if (!ei(t)) return !1;
}
function eO(e) {
    let { guildId: t } = e;
    if (!ei(t)) return !1;
}
function eD(e) {
    let { guildId: t, roleId: n } = e;
    if (!ei(t)) return !1;
    u === n && (u = null);
}
function ex(e) {
    (V = e.enabled), (j = e.channelId);
}
function eL(e) {
    var t;
    (H = null !== (t = e.code) && void 0 !== t ? t : null), (Y = e.uses);
}
function eP(e) {
    let { level: t } = e;
    W = t;
}
function ew(e) {
    en = e.integrations;
}
function eM(e) {
    if (null == o || Z !== x.QZA.OPEN || ('GUILD_INTEGRATIONS_UPDATE' === e.type && e.guildId !== o.id)) return !1;
    (0, D.i)(o.id);
}
function ek(e) {
    var t, n, i, r, a, s, l, u, c, d;
    let { guildId: f, metadata: _ } = e;
    null != o &&
        f === o.id &&
        (!1 === q && (q = !0),
        (X = Q =
            {
                primaryCategoryId: null !== (t = _.primaryCategoryId) && void 0 !== t ? t : L.o3,
                secondaryCategoryIds: null !== (n = _.secondaryCategoryIds) && void 0 !== n ? n : [],
                keywords: null !== (i = _.keywords) && void 0 !== i ? i : [],
                emojiDiscoverabilityEnabled: null !== (r = _.emojiDiscoverabilityEnabled) && void 0 !== r ? r : M,
                partnerActionedTimestamp: null !== (a = _.partnerActionedTimestamp) && void 0 !== a ? a : null,
                partnerApplicationTimestamp: null !== (s = _.partnerApplicationTimestamp) && void 0 !== s ? s : null,
                isPublished: null !== (l = _.isPublished) && void 0 !== l && l,
                reasonsToJoin: null !== (u = _.reasonsToJoin) && void 0 !== u ? u : [],
                socialLinks: null !== (c = _.socialLinks) && void 0 !== c ? c : [],
                about: null !== (d = _.about) && void 0 !== d ? d : ''
            }),
        (F = {}));
}
function eU() {
    Q = X = z;
}
function eG(e) {
    let { slug: t } = e;
    d = t;
}
function eB(e) {
    let {} = e;
    d = null;
}
function eZ(e) {
    let { guildId: t, categoryId: n } = e;
    null != o &&
        t === o.id &&
        ((X = {
            ...X,
            secondaryCategoryIds: [...X.secondaryCategoryIds, n]
        }),
        (Q = {
            ...Q,
            secondaryCategoryIds: [...Q.secondaryCategoryIds, n]
        }));
}
function eF(e) {
    let t,
        { guildId: n, categoryId: i } = e;
    if (null == o || n !== o.id) return;
    let r = X.secondaryCategoryIds.indexOf(i);
    -1 !== r &&
        ((t = [...X.secondaryCategoryIds]).splice(r, 1),
        (X = {
            ...X,
            secondaryCategoryIds: t
        })),
        -1 !== (r = Q.secondaryCategoryIds.indexOf(i)) &&
            ((t = [...Q.secondaryCategoryIds]).splice(r, 1),
            (Q = {
                ...Q,
                secondaryCategoryIds: t
            }));
}
function eV(e) {
    let { guildId: t, errors: n } = e;
    null != o && t === o.id && (F = null != n ? n : {});
}
function ej(e) {
    let { guildId: t, primaryCategoryId: n, keywords: i, emojiDiscoverabilityEnabled: r, isPublished: a, reasonsToJoin: s, socialLinks: l, about: u } = e;
    null != o &&
        t === o.id &&
        (X = {
            ...X,
            primaryCategoryId: null != n ? n : X.primaryCategoryId,
            keywords: null != i ? i : X.keywords,
            emojiDiscoverabilityEnabled: null != r ? r : X.emojiDiscoverabilityEnabled,
            isPublished: null != a ? a : X.isPublished,
            reasonsToJoin: null != s ? s : X.reasonsToJoin,
            socialLinks: null != l ? l : X.socialLinks,
            about: null != u ? u : X.about
        });
}
function eH(e) {
    let { guildId: t, errors: n } = e;
    null != o && t === o.id && (F = null != n ? n : {});
}
function eY(e) {
    let { profile: t } = e;
    t.id === (null == o ? void 0 : o.id) && (l = t);
}
class eW extends (f = g.ZP.Store) {
    initialize() {
        this.waitFor(N.Z, C.default);
    }
    getMetadata() {
        return X;
    }
    hasChanges() {
        return !p().isEqual(o, s) || !p().isEqual(X, Q);
    }
    isOpen() {
        return B;
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
        return !v.K.get(P.zs);
    }
    getGuild() {
        return o;
    }
    getGuildProfile() {
        return l;
    }
    isSubmitting() {
        return Z === x.QZA.SUBMITTING;
    }
    isGuildMetadataLoaded() {
        return q;
    }
    getErrors() {
        return F;
    }
    getError(e) {
        var t;
        return null !== (t = F[e]) && void 0 !== t ? t : null;
    }
    getSelectedRoleId() {
        return u;
    }
    getSlug() {
        return d;
    }
    getBans() {
        return [J, $];
    }
    getProps() {
        return {
            submitting: this.isSubmitting(),
            integrations: en,
            section: i,
            subsection: r,
            errors: F,
            guild: o,
            bans: J,
            bansVersion: $,
            invites: et,
            selectedRoleId: u,
            embedEnabled: V,
            embedChannelId: j,
            mfaLevel: W,
            searchQuery: a,
            vanityURLCode: H,
            vanityURLUses: Y,
            originalGuild: s,
            hasChanges: this.hasChanges(),
            guildMetadata: X,
            analyticsLocation: K,
            isGuildMetadataLoaded: q
        };
    }
}
w(eW, 'displayName', 'GuildSettingsStore');
let eK = new eW(
    y.Z,
    __OVERLAY__
        ? {}
        : {
              GUILD_SETTINGS_INIT: ea,
              GUILD_SETTINGS_OPEN: er,
              GUILD_SETTINGS_CLOSE: es,
              GUILD_SETTINGS_UPDATE: eh,
              GUILD_SETTINGS_PROFILE_UPDATE: em,
              GUILD_SETTINGS_CANCEL_CHANGES: ec,
              GUILD_SETTINGS_SAVE_ROUTE_STACK: eo,
              GUILD_SETTINGS_SUBMIT: ed,
              GUILD_SETTINGS_SUBMIT_SUCCESS: ef,
              GUILD_SETTINGS_SUBMIT_FAILURE: e_,
              GUILD_SETTINGS_SET_SECTION: el,
              GUILD_SETTINGS_SET_SEARCH_QUERY: eu,
              GUILD_SETTINGS_LOADED_BANS: eI,
              GUILD_SETTINGS_LOADED_BANS_BATCH: eb,
              GUILD_SETTINGS_LOADED_INVITES: eE,
              GUILD_SETTINGS_SET_WIDGET: ex,
              GUILD_SETTINGS_SET_VANITY_URL: eL,
              GUILD_SETTINGS_SET_MFA_SUCCESS: eP,
              GUILD_SETTINGS_ROLE_SELECT: eC,
              GUILD_SETTINGS_LOADED_INTEGRATIONS: ew,
              GUILD_BAN_ADD: eT,
              GUILD_BAN_REMOVE: eS,
              GUILD_ROLE_CREATE: eR,
              GUILD_ROLE_UPDATE: eO,
              GUILD_ROLE_DELETE: eD,
              GUILD_UPDATE: eA,
              GUILD_DELETE: eN,
              GUILD_PROFILE_FETCH_SUCCESS: eY,
              USER_CONNECTIONS_UPDATE: eM,
              GUILD_INTEGRATIONS_UPDATE: eM,
              INSTANT_INVITE_REVOKE_SUCCESS: ev,
              INSTANT_INVITE_CREATE_SUCCESS: ey,
              GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: ek,
              GUILD_DISCOVERY_METADATA_FETCH_FAIL: eU,
              GUILD_DISCOVERY_CATEGORY_ADD: eZ,
              GUILD_DISCOVERY_CATEGORY_DELETE: eF,
              GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL: eV,
              GUILD_UPDATE_DISCOVERY_METADATA: ej,
              GUILD_UPDATE_DISCOVERY_METADATA_FAIL: eH,
              GUILD_DISCOVERY_SLUG_FETCH_SUCCESS: eG,
              GUILD_DISCOVERY_SLUG_FETCH_FAIL: eB
          }
);
