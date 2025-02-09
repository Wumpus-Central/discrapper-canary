let i, r, a, s, o, l, u, c, d, f;
n.d(t, { Z: () => eQ }), n(47120), n(789020), n(724458);
var _,
    p = n(392711),
    h = n.n(p),
    m = n(913527),
    g = n.n(m),
    E = n(442837),
    v = n(544891),
    y = n(433517),
    I = n(570140),
    T = n(749210),
    b = n(314852),
    S = n(131704),
    A = n(601964),
    N = n(758449),
    C = n(598077),
    R = n(430824),
    O = n(594174),
    D = n(709054),
    L = n(372454),
    x = n(330010),
    w = n(978946),
    P = n(981631),
    M = n(128449),
    k = n(135899);
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
let G = !0,
    B = ['name', 'description', 'icon', 'splash', 'banner', 'homeHeader', 'afkChannelId', 'afkTimeout', 'systemChannelId', 'verificationLevel', 'defaultMessageNotifications', 'explicitContentFilter', 'features', 'systemChannelFlags', 'preferredLocale', 'rulesChannelId', 'safetyAlertsChannelId', 'discoverySplash', 'publicUpdatesChannelId', 'premiumProgressBarEnabled', 'profile'],
    Z = ['brandColorPrimary', 'description', 'icon', 'name', 'traits', 'visibility'],
    F = new Set(['icon', 'splash', 'banner', 'discoverySplash', 'homeHeader']),
    V = !1,
    j = P.QZA.CLOSED,
    H = {},
    Y = !1,
    W = null,
    K = null,
    z = 0,
    q = P.BpS.NONE,
    Q = null,
    X = {
        primaryCategoryId: M.o3,
        secondaryCategoryIds: [],
        keywords: [],
        emojiDiscoverabilityEnabled: G,
        partnerActionedTimestamp: null,
        partnerApplicationTimestamp: null,
        isPublished: !1,
        reasonsToJoin: [],
        socialLinks: [],
        about: ''
    },
    J = !1,
    $ = X,
    ee = X,
    et = null,
    en = 0,
    ei = null,
    er = null,
    ea = null;
function es(e) {
    if (null == o || null == s || s.id !== e) return !1;
    let t = R.Z.getGuild(e);
    return null != t && (s === o ? (o = s = t) : (s = t), !0);
}
function eo(e) {
    (V = !0), el(e);
}
function el(e) {
    var t;
    let { guildId: n, section: r, subsection: a, location: d } = e,
        _ = R.Z.getGuild(n);
    if (null == _) return eu();
    let p = b.Z.getProfile(n);
    (s = o = _),
        (l = u = p),
        (j = P.QZA.OPEN),
        (H = {}),
        (c = D.default.castGuildIdAsEveryoneGuildRoleId(n)),
        (q = o.mfaLevel),
        (ee = $),
        (f = null),
        (Q = d),
        ed({
            section: null !== (t = null != r ? r : i) && void 0 !== t ? t : (0, w.r)(n),
            subsection: null != a ? a : null
        });
}
function eu() {
    (V = !1), (j = P.QZA.CLOSED), (s = o = null), (Y = !1), (W = null), (K = null), (z = 0), (et = null), (er = null), (ea = null), (i = null), (r = null), (a = null), (q = P.BpS.NONE), (d = void 0);
}
function ec(e) {
    let { state: t } = e;
    return (d = t), !1;
}
function ed(e) {
    if (null == o) return !1;
    let t = i;
    if (((i = e.section), (r = e.subsection), i === P.pNK.BANS)) {
        let { enabled: e } = L.T.getCurrentConfig({
            guildId: o.id,
            location: '7f0c91_1'
        });
        e || T.Z.fetchGuildBans(o.id);
    } else if (i === P.pNK.INSTANT_INVITES)
        v.tn
            .get({
                url: P.ANM.GUILD_INSTANT_INVITES(o.id),
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then((e) => {
                I.Z.dispatch({
                    type: 'GUILD_SETTINGS_LOADED_INVITES',
                    invites: e.body
                });
            });
    else if (i === P.pNK.WIDGET)
        v.tn
            .get({
                url: P.ANM.GUILD_WIDGET(o.id),
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then((e) => {
                I.Z.dispatch({
                    type: 'GUILD_SETTINGS_SET_WIDGET',
                    enabled: e.body.enabled,
                    channelId: e.body.channel_id
                });
            });
    else if (i === P.pNK.INTEGRATIONS || i === P.pNK.ROLES) {
        if (((c = null), t !== e.section)) return eG(e);
    } else
        i === P.pNK.MEMBERS
            ? (c = o.getEveryoneRoleId())
            : i === P.pNK.VANITY_URL
              ? v.tn
                    .get({
                        url: P.ANM.GUILD_VANITY_URL(o.id),
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                    .then((e) => {
                        let {
                            body: { code: t, uses: n, error: i }
                        } = e;
                        I.Z.dispatch({
                            type: 'GUILD_SETTINGS_SET_VANITY_URL',
                            code: t,
                            uses: n,
                            error: i
                        });
                    })
              : i === P.pNK.SAFETY &&
                I.Z.dispatch({
                    type: 'GUILD_SETTINGS_SAFETY_SET_SUBSECTION',
                    subsection: null == r ? P.KsC.SAFETY_OVERVIEW : r
                });
}
function ef(e) {
    a = e.searchQuery;
}
function e_(e) {
    let { guildId: t } = e;
    H = {};
    let n = R.Z.getGuild(t);
    null != n && (s = o = n);
}
function ep() {
    (j = P.QZA.SUBMITTING), (H = {});
}
function eh() {
    j = P.QZA.OPEN;
}
function em(e) {
    var t;
    (j = P.QZA.OPEN), (i = null != i ? i : (0, w.r)(null == o ? void 0 : o.id)), (r = null), (H = null !== (t = e.errors) && void 0 !== t ? t : {});
}
function eg() {
    if (null == o) return !1;
    let e = o.toJS(),
        t = s.toJS();
    B.some((n) => e[n] !== t[n]) || (o = s);
}
function eE(e) {
    if (null == o) return !1;
    B.forEach((t) => {
        null != o && e.hasOwnProperty(t) && (o = o.set(t, e[t]));
    }),
        eg();
}
function ev(e) {
    let { guildId: t } = e;
    if (null == u || null == o || o.id !== t) return !1;
    Z.forEach((t) => {
        if (null != u && e.hasOwnProperty(t)) {
            let n = u[t],
                i = e[t];
            null != i &&
                (u = {
                    ...u,
                    [t]: null != i ? i : n
                });
        }
    });
}
function ey(e) {
    var t;
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
        createdAt: g()(null !== (t = e.created_at) && void 0 !== t ? t : void 0),
        flags: e.flags
    });
}
function eI(e) {
    er = e.invites.reduce((e, t) => ((e[t.code] = ey(t)), e), {});
}
function eT(e) {
    (er = { ...er }), delete er[e.code];
}
function eb(e) {
    er = {
        ...er,
        [e.invite.code]: ey(e.invite)
    };
}
function eS(e) {
    (et = e.bans.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), new Map())), en++;
}
function eA(e) {
    let { bans: t, guildId: n } = e;
    (ei !== n || null == et) && ((ei = n), (et = new Map())), (et = t.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), et)), en++;
}
function eN(e) {
    let { user: t, guildId: n } = e;
    if (null == et || null == o || o.id !== n) return !1;
    et.set(t.id, {
        user: t,
        reason: null
    }),
        en++;
}
function eC(e) {
    let { user: t, guildId: n } = e;
    if (null == et || null == o || o.id !== n) return !1;
    et.delete(t.id), en++;
}
function eR(e) {
    if (null == o || o.id !== e.guild.id) return !1;
    {
        let e = R.Z.getGuild(o.id);
        if (null == e) return !1;
        let t = (s = e),
            n = o.toJS();
        B.forEach((e) => {
            if (!F.has(e) && (('rulesChannelId' !== e && 'publicUpdatesChannelId' !== e) || n[e] !== k.b4)) {
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
function eO(e) {
    if (null == o || o.id !== e.guild.id) return !1;
    eu();
}
function eD(e) {
    let { roleId: t } = e;
    c = null != t ? t : null;
}
function eL(e) {
    let { guildId: t } = e;
    if (!es(t)) return !1;
}
function ex(e) {
    let { guildId: t } = e;
    if (!es(t)) return !1;
}
function ew(e) {
    let { guildId: t, roleId: n } = e;
    if (!es(t)) return !1;
    c === n && (c = null);
}
function eP(e) {
    (Y = e.enabled), (W = e.channelId);
}
function eM(e) {
    var t;
    (K = null !== (t = e.code) && void 0 !== t ? t : null), (z = e.uses);
}
function ek(e) {
    let { level: t } = e;
    q = t;
}
function eU(e) {
    ea = e.integrations;
}
function eG(e) {
    if (null == o || j !== P.QZA.OPEN || ('GUILD_INTEGRATIONS_UPDATE' === e.type && e.guildId !== o.id)) return !1;
    (0, x.i)(o.id);
}
function eB(e) {
    var t, n, i, r, a, s, l, u, c, d;
    let { guildId: f, metadata: _ } = e;
    null != o &&
        f === o.id &&
        (!1 === J && (J = !0),
        (ee = $ =
            {
                primaryCategoryId: null !== (t = _.primaryCategoryId) && void 0 !== t ? t : M.o3,
                secondaryCategoryIds: null !== (n = _.secondaryCategoryIds) && void 0 !== n ? n : [],
                keywords: null !== (i = _.keywords) && void 0 !== i ? i : [],
                emojiDiscoverabilityEnabled: null !== (r = _.emojiDiscoverabilityEnabled) && void 0 !== r ? r : G,
                partnerActionedTimestamp: null !== (a = _.partnerActionedTimestamp) && void 0 !== a ? a : null,
                partnerApplicationTimestamp: null !== (s = _.partnerApplicationTimestamp) && void 0 !== s ? s : null,
                isPublished: null !== (l = _.isPublished) && void 0 !== l && l,
                reasonsToJoin: null !== (u = _.reasonsToJoin) && void 0 !== u ? u : [],
                socialLinks: null !== (c = _.socialLinks) && void 0 !== c ? c : [],
                about: null !== (d = _.about) && void 0 !== d ? d : ''
            }),
        (H = {}));
}
function eZ() {
    $ = ee = X;
}
function eF(e) {
    let { slug: t } = e;
    f = t;
}
function eV(e) {
    let {} = e;
    f = null;
}
function ej(e) {
    let { guildId: t, categoryId: n } = e;
    null != o &&
        t === o.id &&
        ((ee = {
            ...ee,
            secondaryCategoryIds: [...ee.secondaryCategoryIds, n]
        }),
        ($ = {
            ...$,
            secondaryCategoryIds: [...$.secondaryCategoryIds, n]
        }));
}
function eH(e) {
    let t,
        { guildId: n, categoryId: i } = e;
    if (null == o || n !== o.id) return;
    let r = ee.secondaryCategoryIds.indexOf(i);
    -1 !== r &&
        ((t = [...ee.secondaryCategoryIds]).splice(r, 1),
        (ee = {
            ...ee,
            secondaryCategoryIds: t
        })),
        -1 !== (r = $.secondaryCategoryIds.indexOf(i)) &&
            ((t = [...$.secondaryCategoryIds]).splice(r, 1),
            ($ = {
                ...$,
                secondaryCategoryIds: t
            }));
}
function eY(e) {
    let { guildId: t, errors: n } = e;
    null != o && t === o.id && (H = null != n ? n : {});
}
function eW(e) {
    let { guildId: t, primaryCategoryId: n, keywords: i, emojiDiscoverabilityEnabled: r, isPublished: a, reasonsToJoin: s, socialLinks: l, about: u } = e;
    null != o &&
        t === o.id &&
        (ee = {
            ...ee,
            primaryCategoryId: null != n ? n : ee.primaryCategoryId,
            keywords: null != i ? i : ee.keywords,
            emojiDiscoverabilityEnabled: null != r ? r : ee.emojiDiscoverabilityEnabled,
            isPublished: null != a ? a : ee.isPublished,
            reasonsToJoin: null != s ? s : ee.reasonsToJoin,
            socialLinks: null != l ? l : ee.socialLinks,
            about: null != u ? u : ee.about
        });
}
function eK(e) {
    let { guildId: t, errors: n } = e;
    null != o && t === o.id && (H = null != n ? n : {});
}
function ez(e) {
    let { profile: t } = e;
    t.id === (null == o ? void 0 : o.id) && (l = u = t);
}
class eq extends (_ = E.ZP.Store) {
    initialize() {
        this.waitFor(R.Z, b.Z, O.default);
    }
    getMetadata() {
        return ee;
    }
    hasChanges() {
        return !h().isEqual(o, s) || !h().isEqual(ee, $) || !h().isEqual(u, l);
    }
    isOpen() {
        return V;
    }
    getSavedRouteState() {
        return d;
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
        return !y.K.get(k.zs);
    }
    getGuild() {
        return o;
    }
    getGuildProfile() {
        return u;
    }
    isSubmitting() {
        return j === P.QZA.SUBMITTING;
    }
    isGuildMetadataLoaded() {
        return J;
    }
    getErrors() {
        return H;
    }
    getError(e) {
        var t;
        return null !== (t = H[e]) && void 0 !== t ? t : null;
    }
    getSelectedRoleId() {
        return c;
    }
    getSlug() {
        return f;
    }
    getBans() {
        return [et, en];
    }
    getProps() {
        return {
            submitting: this.isSubmitting(),
            integrations: ea,
            section: i,
            subsection: r,
            errors: H,
            guild: o,
            bans: et,
            bansVersion: en,
            invites: er,
            selectedRoleId: c,
            embedEnabled: Y,
            embedChannelId: W,
            mfaLevel: q,
            searchQuery: a,
            vanityURLCode: K,
            vanityURLUses: z,
            originalGuild: s,
            hasChanges: this.hasChanges(),
            guildMetadata: ee,
            analyticsLocation: Q,
            isGuildMetadataLoaded: J
        };
    }
}
U(eq, 'displayName', 'GuildSettingsStore');
let eQ = new eq(
    I.Z,
    __OVERLAY__
        ? {}
        : {
              GUILD_SETTINGS_INIT: el,
              GUILD_SETTINGS_OPEN: eo,
              GUILD_SETTINGS_CLOSE: eu,
              GUILD_SETTINGS_UPDATE: eE,
              GUILD_SETTINGS_PROFILE_UPDATE: ev,
              GUILD_SETTINGS_CANCEL_CHANGES: e_,
              GUILD_SETTINGS_SAVE_ROUTE_STACK: ec,
              GUILD_SETTINGS_SUBMIT: ep,
              GUILD_SETTINGS_SUBMIT_SUCCESS: eh,
              GUILD_SETTINGS_SUBMIT_FAILURE: em,
              GUILD_SETTINGS_SET_SECTION: ed,
              GUILD_SETTINGS_SET_SEARCH_QUERY: ef,
              GUILD_SETTINGS_LOADED_BANS: eS,
              GUILD_SETTINGS_LOADED_BANS_BATCH: eA,
              GUILD_SETTINGS_LOADED_INVITES: eI,
              GUILD_SETTINGS_SET_WIDGET: eP,
              GUILD_SETTINGS_SET_VANITY_URL: eM,
              GUILD_SETTINGS_SET_MFA_SUCCESS: ek,
              GUILD_SETTINGS_ROLE_SELECT: eD,
              GUILD_SETTINGS_LOADED_INTEGRATIONS: eU,
              GUILD_BAN_ADD: eN,
              GUILD_BAN_REMOVE: eC,
              GUILD_ROLE_CREATE: eL,
              GUILD_ROLE_UPDATE: ex,
              GUILD_ROLE_DELETE: ew,
              GUILD_UPDATE: eR,
              GUILD_DELETE: eO,
              GUILD_PROFILE_FETCH_SUCCESS: ez,
              USER_CONNECTIONS_UPDATE: eG,
              GUILD_INTEGRATIONS_UPDATE: eG,
              INSTANT_INVITE_REVOKE_SUCCESS: eT,
              INSTANT_INVITE_CREATE_SUCCESS: eb,
              GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: eB,
              GUILD_DISCOVERY_METADATA_FETCH_FAIL: eZ,
              GUILD_DISCOVERY_CATEGORY_ADD: ej,
              GUILD_DISCOVERY_CATEGORY_DELETE: eH,
              GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL: eY,
              GUILD_UPDATE_DISCOVERY_METADATA: eW,
              GUILD_UPDATE_DISCOVERY_METADATA_FAIL: eK,
              GUILD_DISCOVERY_SLUG_FETCH_SUCCESS: eF,
              GUILD_DISCOVERY_SLUG_FETCH_FAIL: eV
          }
);
