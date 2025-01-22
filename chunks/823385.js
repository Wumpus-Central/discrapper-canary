let i;
var a,
    o = r(653041);
var s = r(47120);
var l = r(733860);
var u = r(724458);
var c = r(392711),
    d = r.n(c),
    f = r(442837),
    p = r(433517),
    h = r(570140),
    _ = r(212819),
    m = r(938078),
    g = r(220444),
    E = r(601070),
    v = r(210887),
    y = r(314897),
    b = r(592125),
    I = r(703558),
    T = r(984933),
    S = r(271383),
    A = r(430824),
    C = r(496675),
    N = r(306680),
    R = r(944486),
    O = r(914010),
    D = r(9156),
    x = r(483360),
    L = r(823379),
    w = r(981631),
    P = r(388032);
function M(e, n, r) {
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
let k = 'seenQSTutorial',
    U = 5,
    B = 100,
    G = [_.h8.USER, _.h8.GROUP_DM, _.h8.TEXT_CHANNEL, _.h8.GUILD, _.h8.APPLICATION, _.h8.LINK, _.h8.IN_APP_NAVIGATION],
    Z = 0,
    F = !1,
    V = !1,
    j = null,
    H = [],
    Y = null,
    W = 0,
    K = [],
    z = [];
function q() {
    (V = A.Z.getGuildCount() >= 3 || d().size(b.Z.getMutablePrivateChannels()) >= 20), (K = []);
}
function Q(e) {
    let n = [];
    return (
        I.Z.getRecentlyEditedDrafts(I.d.ChannelMessage).forEach((r) => {
            let { channelId: i } = r;
            if (e(i)) return;
            let a = X(i);
            null != a && n.push(a);
        }),
        n
    );
}
function X(e) {
    let n = (0, m.Z)(e);
    return null == n || (null != j && j !== n.type) ? null : n;
}
function J() {
    var e, n;
    let r = null !== (e = O.Z.getGuildId()) && void 0 !== e ? e : void 0,
        i = null !== (n = R.Z.getChannelId()) && void 0 !== n ? n : void 0;
    switch (j) {
        case _.h8.USER: {
            let e = y.default.getId();
            return x.ZP.getRecentlyTalked(i, 100).filter((n) => {
                let { record: r } = n;
                return r.id !== e;
            });
        }
        case _.h8.APPLICATION:
            return x.ZP.queryApplications({
                query: '',
                limit: 100,
                fuzzy: !0
            });
        case _.h8.GUILD:
            return x.ZP.queryGuilds({
                query: '',
                limit: 100,
                fuzzy: !0
            });
        case _.h8.TEXT_CHANNEL:
            return x.ZP.queryChannels({
                query: '',
                guildId: O.Z.getGuildId(),
                limit: 100,
                fuzzy: !0
            });
        case _.h8.VOICE_CHANNEL:
            return x.ZP.queryChannels({
                query: '',
                guildId: O.Z.getGuildId(),
                limit: 100,
                fuzzy: !0,
                filter: () => !0,
                type: T.Zb
            });
    }
    let a = [],
        o = [];
    for (let e = 1; e < z.length; e += 1) {
        let n = X(z[e]);
        if (null != n) ((n.type !== _.h8.TEXT_CHANNEL && n.type !== _.h8.VOICE_CHANNEL) || C.Z.can(w.Plq.VIEW_CHANNEL, n.record)) && o.push(n);
    }
    o.length > 0 && a.push((0, _.o6)(P.intl.string(P.t['80lOZ2'])), ...o);
    let s = Q((e) => e === i || z.includes(e));
    s.length > 0 && a.push((0, _.o6)(P.intl.string(P.t['4B63jY'])), ...s);
    let l = N.ZP.getMentionChannelIds()
        .filter((e) => e !== i && !z.includes(e))
        .map((e) => X(e))
        .filter(L.lm)
        .reverse();
    if ((l.length > 0 && (a.push((0, _.o6)(P.intl.string(P.t['61Df19']))), (a = a.concat(l))), null != r)) {
        let e = T.ZP.getSelectableChannelIds(r)
            .filter((e) => {
                let n = b.Z.getChannel(e);
                return !(null == n || e === i || z.includes(e) || D.ZP.isChannelMuted(n.guild_id, e) || (null != n.parent_id && D.ZP.isChannelMuted(n.guild_id, n.parent_id))) && (0, g.d)(n);
            })
            .map((e) => X(e))
            .filter((e) => e);
        Object.values(E.Z.getActiveJoinedUnreadThreadsForGuild(r)).forEach((n) => {
            for (let r in n) {
                let n = X(r);
                null != n && e.push(n);
            }
        }),
            e.length > 0 && (a.push((0, _.o6)(P.intl.string(P.t.ieCAhI))), (a = a.concat(e)));
    }
    return d()(a)
        .uniqBy((e) => e.record.id)
        .value();
}
function $(e, n) {
    switch (j) {
        case _.h8.USER: {
            let n = A.Z.getGuild(O.Z.getGuildId());
            e.unshift((0, _.o6)(null != n ? P.intl.formatToPlainString(P.t.FREzQk, { name: n.name }) : P.intl.string(P.t.XFYW1t))), (H = e);
            break;
        }
        case _.h8.TEXT_CHANNEL:
            e.unshift((0, _.o6)(P.intl.string(P.t.W26k4e))), (H = e);
            break;
        case _.h8.VOICE_CHANNEL:
            e.unshift((0, _.o6)(P.intl.string(P.t.zUoI5O))), (H = e);
            break;
        case _.h8.GUILD:
            e.unshift((0, _.o6)(P.intl.string(P.t.olADPj))), (H = e);
            break;
        case _.h8.APPLICATION:
            e.unshift((0, _.o6)(P.intl.string(P.t.VwK1lZ))), (H = e);
            break;
        default:
            H = e;
    }
    if (n !== Y) (Y = n), (W = Math.max(n.length, W)), (Z = (0, _.gJ)(_.a8.DOWN, -1, H));
    else {
        let e = H[Z];
        null != e && e.type === _.h8.HEADER && (Z = (0, _.gJ)(_.a8.DOWN, Z, H));
    }
    eu.emitChange();
}
function ee(e) {
    var n;
    let { query: r, queryMode: a } = e,
        o = null !== (n = O.Z.getGuildId()) && void 0 !== n ? n : void 0,
        s = new Set(['user:'.concat(y.default.getId())]);
    null != o && s.add('guild:'.concat(o)),
        (i =
            null != i
                ? i
                : new _.ZP(er, G, null != a ? B : U, {
                      frecencyBoosters: !0,
                      blacklist: s
                  })),
        (Y = null),
        (W = r.length),
        (j = a),
        i.search(r);
}
function et(e) {
    let { channelId: n } = e;
    if (null == n) return !1;
    (z = z.filter((e) => e !== n)).unshift(n), z.length > 4 && (z.length = 4);
}
function en(e, n) {
    if (e.length !== n.length) return !1;
    for (let r = 0; r < e.length; r++) {
        let i = e[r],
            a = n[r];
        if (i.record.id !== a.record.id) return !1;
    }
    return !0;
}
function er(e, n) {
    if (!en((e = '' === (n = n.trim()).trim() ? J() : e), K)) (K = e), $(e, n);
}
function ei() {
    (Y = null), (W = 0), (K = []), null != i && (i.destroy(), (i = null));
}
function ea(e) {
    var n, r;
    let { query: a, queryMode: o } = e;
    if (null == i) return !1;
    let s = null !== (n = O.Z.getGuildId()) && void 0 !== n ? n : null;
    if (j !== o) {
        i.setResultTypes(null != o ? [o] : G), i.setLimit(null != o ? B : U);
        let e = null !== (r = O.Z.getGuildId()) && void 0 !== r ? r : void 0;
        o === _.h8.USER && null != e
            ? i.setOptions(
                  {
                      userFilters: {
                          guild: e,
                          friends: !0
                      }
                  },
                  !0
              )
            : o === _.h8.VOICE_CHANNEL
              ? i.setOptions({ voiceChannelGuildFilter: null }, !0)
              : i.setOptions(
                    {
                        userFilters: null,
                        voiceChannelGuildFilter: void 0
                    },
                    !0
                );
    }
    (j = o), i.search(a, j === _.h8.USER ? s : void 0);
}
function eo(e) {
    Z = e.selectedIndex;
}
function es() {
    if (F) return !1;
    (F = !0), p.K.set(k, !0);
}
class el extends (a = f.ZP.PersistedStore) {
    initialize(e) {
        var n;
        this.waitFor(S.ZP, A.Z, b.Z), this.syncWith([v.Z], () => !0), (F = p.K.get(k) || !1), (z = null !== (n = null == e ? void 0 : e.channelHistory) && void 0 !== n ? n : []);
    }
    getState() {
        return { channelHistory: z };
    }
    isOpen() {
        return null != i;
    }
    getResultTotals(e) {
        return null == i ? 0 : null == e ? i.results.reduce((e, n) => (n.type !== _.h8.HEADER ? e + 1 : e), 0) : i.results.reduce((n, r) => (r.type === e ? n + 1 : n), 0);
    }
    channelNoticePredicate(e, n) {
        let r = Date.now() - n >= w.Hqc;
        return V && r;
    }
    getFrequentGuilds() {
        return null != i ? i.queryGuilds('', 100) : null;
    }
    getFrequentGuildsLength() {
        return null != i ? i.queryGuilds('', 100).length : 0;
    }
    getChannelHistory() {
        return z;
    }
    getProps() {
        return {
            theme: v.Z.theme,
            query: null != i ? i.query : '',
            queryMode: j,
            results: H,
            selectedIndex: Z,
            seenTutorial: F,
            maxQueryLength: W
        };
    }
}
M(el, 'displayName', 'QuickSwitcherStore'), M(el, 'persistKey', 'QuickSwitcherStore');
let eu = new el(h.Z, {
    CONNECTION_OPEN: q,
    CONNECTION_OPEN_SUPPLEMENTAL: q,
    QUICKSWITCHER_SHOW: ee,
    SHOW_ACTION_SHEET_QUICK_SWITCHER: ee,
    QUICKSWITCHER_HIDE: ei,
    OVERLAY_SET_INPUT_LOCKED: ei,
    HIDE_ACTION_SHEET_QUICK_SWITCHER: ei,
    QUICKSWITCHER_SEARCH: ea,
    QUICKSWITCHER_SELECT: eo,
    QUICKSWITCHER_SWITCH_TO: es,
    CHANNEL_SELECT: et
});
n.Z = eu;
