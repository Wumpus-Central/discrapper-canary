let r, i, o, a, s, l, c, u, d, f;
n.d(t, { Z: () => e9 }), n(47120), n(789020);
var _,
    p = n(392711),
    h = n.n(p),
    m = n(913527),
    g = n.n(m),
    E = n(442837),
    b = n(544891),
    y = n(433517),
    v = n(570140),
    O = n(749210),
    I = n(314852),
    S = n(131704),
    T = n(601964),
    N = n(758449),
    A = n(598077),
    C = n(430824),
    R = n(594174),
    P = n(709054),
    w = n(372454),
    D = n(330010),
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
function F(e, t) {
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
let V = !0,
    Z = ['name', 'description', 'icon', 'splash', 'banner', 'homeHeader', 'afkChannelId', 'afkTimeout', 'systemChannelId', 'verificationLevel', 'defaultMessageNotifications', 'explicitContentFilter', 'features', 'systemChannelFlags', 'preferredLocale', 'rulesChannelId', 'safetyAlertsChannelId', 'discoverySplash', 'publicUpdatesChannelId', 'premiumProgressBarEnabled'],
    H = ['brandColorPrimary', 'description', 'icon', 'name', 'traits', 'visibility', 'gameApplicationIds', 'customBanner', 'tag', 'badge', 'badgeColorPrimary', 'badgeColorSecondary'],
    W = new Set(['icon', 'splash', 'banner', 'discoverySplash', 'homeHeader']),
    Y = !1,
    K = M.QZA.CLOSED,
    z = {},
    q = null,
    Q = !1,
    X = !1,
    J = !1,
    $ = null,
    ee = null,
    et = null,
    en = 0,
    er = M.BpS.NONE,
    ei = null,
    eo = {
        primaryCategoryId: k.o3,
        secondaryCategoryIds: [],
        keywords: [],
        emojiDiscoverabilityEnabled: V,
        partnerActionedTimestamp: null,
        partnerApplicationTimestamp: null,
        isPublished: !1,
        reasonsToJoin: [],
        socialLinks: [],
        about: ''
    },
    ea = !1,
    es = eo,
    el = eo,
    ec = null,
    eu = 0,
    ed = null,
    ef = null,
    e_ = null;
function ep(e) {
    if (null == s || null == a || a.id !== e) return !1;
    let t = C.Z.getGuild(e);
    return null != t && (a === s ? (s = a = t) : (a = t), !0);
}
function eh(e) {
    (Y = !0), em(e);
}
function em(e) {
    var t;
    let { guildId: n, section: i, subsection: o, location: d } = e,
        _ = C.Z.getGuild(n);
    if (null == _) return eg();
    let p = I.Z.getProfile(n);
    (a = s = _),
        (l = c = p),
        (J = X),
        (ee = $),
        (K = M.QZA.OPEN),
        (z = {}),
        (q = null),
        (u = P.default.castGuildIdAsEveryoneGuildRoleId(n)),
        (er = s.mfaLevel),
        (el = es),
        (f = null),
        (ei = d),
        eb({
            section: null != (t = null != i ? i : r) ? t : (0, x.r)(n),
            subsection: null != o ? o : null
        });
}
function eg() {
    (Y = !1), (K = M.QZA.CLOSED), (a = s = null), (Q = !1), (J = !1), (ee = null), (et = null), (en = 0), (ec = null), (ef = null), (e_ = null), (r = null), (i = null), (o = null), (er = M.BpS.NONE), (d = void 0);
}
function eE(e) {
    let { state: t } = e;
    return (d = t), !1;
}
function eb(e) {
    if (null == s) return !1;
    let t = r;
    if (((r = e.section), (i = e.subsection), r === M.pNK.BANS)) {
        let { enabled: e } = w.T.getCurrentConfig({
            guildId: s.id,
            location: '7f0c91_1'
        });
        e || O.Z.fetchGuildBans(s.id);
    } else if (r === M.pNK.INSTANT_INVITES || r === M.pNK.INVITES)
        b.tn
            .get({
                url: M.ANM.GUILD_INSTANT_INVITES(s.id),
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then((e) => {
                v.Z.dispatch({
                    type: 'GUILD_SETTINGS_LOADED_INVITES',
                    invites: e.body
                });
            });
    else if (r === M.pNK.WIDGET) (0, D.R)(s.id);
    else if (r === M.pNK.INTEGRATIONS || r === M.pNK.ROLES) {
        if (((u = null), t !== e.section)) return eK(e);
    } else
        r === M.pNK.MEMBERS
            ? (u = s.getEveryoneRoleId())
            : r === M.pNK.VANITY_URL
              ? (0, L.U5)(s.id)
              : r === M.pNK.SAFETY &&
                v.Z.dispatch({
                    type: 'GUILD_SETTINGS_SAFETY_SET_SUBSECTION',
                    subsection: null == i ? M.KsC.SAFETY_OVERVIEW : i
                });
}
function ey(e) {
    o = e.searchQuery;
}
function ev(e) {
    let { guildId: t } = e;
    z = {};
    let n = C.Z.getGuild(t);
    null != n && (a = s = n);
}
function eO() {
    (K = M.QZA.SUBMITTING), (z = {});
}
function eI() {
    K = M.QZA.OPEN;
}
function eS(e) {
    var t;
    (K = M.QZA.OPEN), (r = null != r ? r : (0, x.r)(null == s ? void 0 : s.id)), (i = null), (z = null != (t = e.errors) ? t : {});
}
function eT() {
    if (null == s) return !1;
    let e = s.toJS(),
        t = a.toJS();
    Z.some((n) => e[n] !== t[n]) || (s = a);
}
function eN(e) {
    if (null == s) return !1;
    Z.forEach((t) => {
        null != s && e.hasOwnProperty(t) && (s = s.set(t, e[t]));
    }),
        eT();
}
function eA(e) {
    let { guildId: t } = e;
    if (null == c || null == s || s.id !== t) return !1;
    H.forEach((t) => {
        if (null != c && e.hasOwnProperty(t)) {
            let n = e[t];
            void 0 !== n && (c = F(G({}, c), { [t]: n }));
        }
    });
}
function eC(e) {
    var t;
    return new N.Z({
        code: e.code,
        temporary: e.temporary,
        revoked: e.revoked,
        inviter: null != e.inviter ? new A.Z(e.inviter) : null,
        channel: (0, S.jD)(e.channel),
        guild: null != e.guild ? new T.ZP(e.guild) : null,
        uses: e.uses,
        maxUses: e.max_uses,
        maxAge: e.max_age,
        createdAt: g()(null != (t = e.created_at) ? t : void 0),
        flags: e.flags
    });
}
function eR(e) {
    ef = e.invites.reduce((e, t) => ((e[t.code] = eC(t)), e), {});
}
function eP(e) {
    (ef = G({}, ef)), delete ef[e.code];
}
function ew(e) {
    ef = F(G({}, ef), { [e.invite.code]: eC(e.invite) });
}
function eD(e) {
    (ec = e.bans.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), new Map())), eu++;
}
function eL(e) {
    let { bans: t, guildId: n } = e;
    (ed !== n || null == ec) && ((ed = n), (ec = new Map())), (ec = t.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), ec)), eu++;
}
function ex(e) {
    let { user: t, guildId: n } = e;
    if (null == ec || null == s || s.id !== n) return !1;
    ec.set(t.id, {
        user: t,
        reason: null
    }),
        eu++;
}
function eM(e) {
    let { user: t, guildId: n } = e;
    if (null == ec || null == s || s.id !== n) return !1;
    ec.delete(t.id), eu++;
}
function ek(e) {
    if (null == s || s.id !== e.guild.id) return !1;
    {
        let e = C.Z.getGuild(s.id);
        if (null == e) return !1;
        (l = I.Z.getProfile(s.id)), r !== M.pNK.PROFILE && (c = l);
        let t = (a = e),
            n = s.toJS();
        Z.forEach((e) => {
            if (!W.has(e) && (('rulesChannelId' !== e && 'publicUpdatesChannelId' !== e) || n[e] !== j.b4)) {
                if ('features' === e) return void t.set(e, new Set(n[e]));
                t = t.set(e, n[e]);
            }
        }),
            (s = t);
    }
}
function ej(e) {
    if (null == s || s.id !== e.guild.id) return !1;
    eg();
}
function eU(e) {
    let { roleId: t } = e;
    u = null != t ? t : null;
}
function eG(e) {
    let { guildId: t } = e;
    if (!ep(t)) return !1;
}
function eB(e) {
    let { guildId: t } = e;
    if (!ep(t)) return !1;
}
function eF(e) {
    let { guildId: t, roleId: n } = e;
    if (!ep(t)) return !1;
    u === n && (u = null);
}
function eV(e) {
    (Q = !0), (X = J = e.enabled), ($ = ee = e.channelId);
}
function eZ(e) {
    let { guildId: t, enabled: n, channelId: r } = e;
    if (null == s || s.id !== t) return !1;
    (J = n), (ee = r);
}
function eH(e) {
    var t;
    (et = null != (t = e.code) ? t : null), (en = e.uses);
}
function eW(e) {
    let { level: t } = e;
    er = t;
}
function eY(e) {
    e_ = e.integrations;
}
function eK(e) {
    if (null == s || K !== M.QZA.OPEN || ('GUILD_INTEGRATIONS_UPDATE' === e.type && e.guildId !== s.id)) return !1;
    (0, D.i)(s.id);
}
function ez(e) {
    var t, n, r, i, o, a, l, c, u, d;
    let { guildId: f, metadata: _ } = e;
    null != s &&
        f === s.id &&
        (!1 === ea && (ea = !0),
        (el = es =
            {
                primaryCategoryId: null != (t = _.primaryCategoryId) ? t : k.o3,
                secondaryCategoryIds: null != (n = _.secondaryCategoryIds) ? n : [],
                keywords: null != (r = _.keywords) ? r : [],
                emojiDiscoverabilityEnabled: null != (i = _.emojiDiscoverabilityEnabled) ? i : V,
                partnerActionedTimestamp: null != (o = _.partnerActionedTimestamp) ? o : null,
                partnerApplicationTimestamp: null != (a = _.partnerApplicationTimestamp) ? a : null,
                isPublished: null != (l = _.isPublished) && l,
                reasonsToJoin: null != (c = _.reasonsToJoin) ? c : [],
                socialLinks: null != (u = _.socialLinks) ? u : [],
                about: null != (d = _.about) ? d : ''
            }),
        (z = {}));
}
function eq() {
    es = el = eo;
}
function eQ(e) {
    let { slug: t } = e;
    f = t;
}
function eX(e) {
    let {} = e;
    f = null;
}
function eJ(e) {
    let { guildId: t, categoryId: n } = e;
    null != s &&
        t === s.id &&
        ((el = F(G({}, el), {
            secondaryCategoryIds: [...el.secondaryCategoryIds, n]
        })),
        (es = F(G({}, es), {
            secondaryCategoryIds: [...es.secondaryCategoryIds, n]
        })));
}
function e$(e) {
    let t,
        { guildId: n, categoryId: r } = e;
    if (null == s || n !== s.id) return;
    let i = el.secondaryCategoryIds.indexOf(r);
    -1 !== i && ((t = [...el.secondaryCategoryIds]).splice(i, 1), (el = F(G({}, el), { secondaryCategoryIds: t }))), -1 !== (i = es.secondaryCategoryIds.indexOf(r)) && ((t = [...es.secondaryCategoryIds]).splice(i, 1), (es = F(G({}, es), { secondaryCategoryIds: t })));
}
function e0(e) {
    let { guildId: t, errors: n } = e;
    null != s && t === s.id && (z = null != n ? n : {});
}
function e1(e) {
    let { guildId: t, primaryCategoryId: n, keywords: r, emojiDiscoverabilityEnabled: i, isPublished: o, reasonsToJoin: a, socialLinks: l, about: c } = e;
    null != s &&
        t === s.id &&
        (el = F(G({}, el), {
            primaryCategoryId: null != n ? n : el.primaryCategoryId,
            keywords: null != r ? r : el.keywords,
            emojiDiscoverabilityEnabled: null != i ? i : el.emojiDiscoverabilityEnabled,
            isPublished: null != o ? o : el.isPublished,
            reasonsToJoin: null != a ? a : el.reasonsToJoin,
            socialLinks: null != l ? l : el.socialLinks,
            about: null != c ? c : el.about
        }));
}
function e2(e) {
    let { guildId: t, errors: n } = e;
    null != s && t === s.id && (z = null != n ? n : {});
}
function e3(e) {
    let { profile: t } = e;
    t.id === (null == s ? void 0 : s.id) && (l = c = t);
}
function e4(e) {
    let { guildId: t } = e;
    if (null == s || s.id !== t) return !1;
    q = null;
}
function e6(e) {
    let { profile: t } = e;
    if ((null == c ? void 0 : c.id) == null || !ep(c.id)) return !1;
    t.id === (null == s ? void 0 : s.id) && ((l = c = t), (q = null));
}
function e5(e) {
    let { guildId: t, error: n } = e;
    if (null == s || s.id !== t) return !1;
    q = n;
}
function e7(e) {
    let { guildId: t } = e;
    if ((null == c ? void 0 : c.id) == null || !ep(c.id)) return !1;
    t === (null == s ? void 0 : s.id) && ((l = c = I.Z.getProfile(t)), (q = null));
}
class e8 extends (_ = E.ZP.Store) {
    initialize() {
        this.waitFor(C.Z, I.Z, R.default);
    }
    getMetadata() {
        return el;
    }
    widgetHasChanges() {
        return !1 !== Q && (J !== X || ee !== $);
    }
    hasChanges() {
        return !h().isEqual(s, a) || !h().isEqual(el, es) || !h().isEqual(c, l) || this.widgetHasChanges();
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
        return !y.K.get(j.zs);
    }
    getGuild() {
        return s;
    }
    getGuildProfile() {
        return c;
    }
    getWidget() {
        return {
            enabled: J,
            channelId: ee
        };
    }
    isSubmitting() {
        return K === M.QZA.SUBMITTING;
    }
    isGuildMetadataLoaded() {
        return ea;
    }
    getErrors() {
        return z;
    }
    getError(e) {
        var t;
        return null != (t = z[e]) ? t : null;
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
        return [ec, eu];
    }
    getProps() {
        return {
            submitting: this.isSubmitting(),
            integrations: e_,
            section: r,
            subsection: i,
            errors: z,
            guild: s,
            bans: ec,
            bansVersion: eu,
            invites: ef,
            selectedRoleId: u,
            fetchedEmbed: Q,
            embedEnabled: J,
            embedChannelId: ee,
            mfaLevel: er,
            searchQuery: o,
            vanityURLCode: et,
            vanityURLUses: en,
            originalGuild: a,
            hasChanges: this.hasChanges(),
            guildMetadata: el,
            analyticsLocation: ei,
            isGuildMetadataLoaded: ea,
            originalProfile: l,
            profile: c
        };
    }
}
U(e8, 'displayName', 'GuildSettingsStore');
let e9 = new e8(
    v.Z,
    __OVERLAY__
        ? {}
        : {
              GUILD_SETTINGS_INIT: em,
              GUILD_SETTINGS_OPEN: eh,
              GUILD_SETTINGS_CLOSE: eg,
              GUILD_SETTINGS_UPDATE: eN,
              GUILD_SETTINGS_PROFILE_UPDATE: eA,
              GUILD_SETTINGS_CANCEL_CHANGES: ev,
              GUILD_SETTINGS_SAVE_ROUTE_STACK: eE,
              GUILD_SETTINGS_SUBMIT: eO,
              GUILD_SETTINGS_SUBMIT_SUCCESS: eI,
              GUILD_SETTINGS_SUBMIT_FAILURE: eS,
              GUILD_SETTINGS_SET_SECTION: eb,
              GUILD_SETTINGS_SET_SEARCH_QUERY: ey,
              GUILD_SETTINGS_LOADED_BANS: eD,
              GUILD_SETTINGS_LOADED_BANS_BATCH: eL,
              GUILD_SETTINGS_LOADED_INVITES: eR,
              GUILD_SETTINGS_SET_WIDGET: eV,
              GUILD_SETTINGS_SET_VANITY_URL: eH,
              GUILD_SETTINGS_SET_MFA_SUCCESS: eW,
              GUILD_SETTINGS_ROLE_SELECT: eU,
              GUILD_SETTINGS_LOADED_INTEGRATIONS: eY,
              GUILD_BAN_ADD: ex,
              GUILD_BAN_REMOVE: eM,
              GUILD_ROLE_CREATE: eG,
              GUILD_ROLE_UPDATE: eB,
              GUILD_ROLE_DELETE: eF,
              GUILD_UPDATE: ek,
              GUILD_DELETE: ej,
              GUILD_PROFILE_FETCH_SUCCESS: e3,
              GUILD_PROFILE_UPDATE: e4,
              GUILD_PROFILE_UPDATE_SUCCESS: e6,
              GUILD_PROFILE_UPDATE_FAILURE: e5,
              GUILD_PROFILE_UPDATE_VISIBILITY: e4,
              GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS: e7,
              GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE: e5,
              USER_CONNECTIONS_UPDATE: eK,
              GUILD_INTEGRATIONS_UPDATE: eK,
              INSTANT_INVITE_REVOKE_SUCCESS: eP,
              INSTANT_INVITE_CREATE_SUCCESS: ew,
              GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: ez,
              GUILD_DISCOVERY_METADATA_FETCH_FAIL: eq,
              GUILD_DISCOVERY_CATEGORY_ADD: eJ,
              GUILD_DISCOVERY_CATEGORY_DELETE: e$,
              GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL: e0,
              GUILD_UPDATE_DISCOVERY_METADATA: e1,
              GUILD_UPDATE_DISCOVERY_METADATA_FAIL: e2,
              GUILD_DISCOVERY_SLUG_FETCH_SUCCESS: eQ,
              GUILD_DISCOVERY_SLUG_FETCH_FAIL: eX,
              GUILD_SETTINGS_WIDGET_UPDATE: eZ
          }
);
