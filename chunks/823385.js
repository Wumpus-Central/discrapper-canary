let r;
n.d(t, { Z: () => eo }), n(653041), n(47120), n(978209), n(733860), n(301563), n(566702);
var i,
    o = n(392711),
    a = n.n(o),
    s = n(442837),
    l = n(433517),
    c = n(570140),
    u = n(212819),
    d = n(938078),
    f = n(220444),
    p = n(601070),
    _ = n(210887),
    h = n(314897),
    m = n(592125),
    g = n(703558),
    E = n(984933),
    v = n(271383),
    b = n(430824),
    y = n(496675),
    O = n(306680),
    S = n(944486),
    I = n(914010),
    T = n(9156),
    N = n(483360),
    A = n(823379),
    C = n(981631),
    R = n(388032);
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
let w = 'seenQSTutorial',
    D = 5,
    x = 100,
    L = [u.h8.USER, u.h8.GROUP_DM, u.h8.TEXT_CHANNEL, u.h8.GUILD, u.h8.APPLICATION, u.h8.LINK, u.h8.IN_APP_NAVIGATION],
    M = 0,
    k = !1,
    j = !1,
    U = null,
    G = [],
    B = null,
    Z = 0,
    F = [],
    V = [];
function H() {
    (j = b.Z.getGuildCount() >= 3 || a().size(m.Z.getMutablePrivateChannels()) >= 20), (F = []);
}
function W(e) {
    let t = [];
    return (
        g.Z.getRecentlyEditedDrafts(g.d.ChannelMessage).forEach((n) => {
            let { channelId: r } = n;
            if (e(r)) return;
            let i = Y(r);
            null != i && t.push(i);
        }),
        t
    );
}
function Y(e) {
    let t = (0, d.Z)(e);
    return null == t || (null != U && U !== t.type) ? null : t;
}
function K() {
    var e, t;
    let n = null !== (e = I.Z.getGuildId()) && void 0 !== e ? e : void 0,
        r = null !== (t = S.Z.getChannelId()) && void 0 !== t ? t : void 0;
    switch (U) {
        case u.h8.USER: {
            let e = h.default.getId();
            return N.ZP.getRecentlyTalked(r, 100).filter((t) => {
                let { record: n } = t;
                return n.id !== e;
            });
        }
        case u.h8.APPLICATION:
            return N.ZP.queryApplications({
                query: '',
                limit: 100,
                fuzzy: !0
            });
        case u.h8.GUILD:
            return N.ZP.queryGuilds({
                query: '',
                limit: 100,
                fuzzy: !0
            });
        case u.h8.TEXT_CHANNEL:
            return N.ZP.queryChannels({
                query: '',
                guildId: I.Z.getGuildId(),
                limit: 100,
                fuzzy: !0
            });
        case u.h8.VOICE_CHANNEL:
            return N.ZP.queryChannels({
                query: '',
                guildId: I.Z.getGuildId(),
                limit: 100,
                fuzzy: !0,
                filter: () => !0,
                type: E.Zb
            });
    }
    let i = [],
        o = [];
    for (let e = 1; e < V.length; e += 1) {
        let t = Y(V[e]);
        null != t && ((t.type !== u.h8.TEXT_CHANNEL && t.type !== u.h8.VOICE_CHANNEL) || y.Z.can(C.Plq.VIEW_CHANNEL, t.record)) && o.push(t);
    }
    o.length > 0 && i.push((0, u.o6)(R.NW.string(R.t['80lOZ2'])), ...o);
    let s = W((e) => e === r || V.includes(e));
    s.length > 0 && i.push((0, u.o6)(R.NW.string(R.t['4B63jY'])), ...s);
    let l = O.ZP.getMentionChannelIds()
        .filter((e) => e !== r && !V.includes(e))
        .map((e) => Y(e))
        .filter(A.lm)
        .reverse();
    if ((l.length > 0 && (i.push((0, u.o6)(R.NW.string(R.t['61Df19']))), (i = i.concat(l))), null != n)) {
        let e = E.ZP.getSelectableChannelIds(n)
            .filter((e) => {
                let t = m.Z.getChannel(e);
                return !(null == t || e === r || V.includes(e) || T.ZP.isChannelMuted(t.guild_id, e) || (null != t.parent_id && T.ZP.isChannelMuted(t.guild_id, t.parent_id))) && (0, f.d)(t);
            })
            .map((e) => Y(e))
            .filter((e) => e);
        Object.values(p.Z.getActiveJoinedUnreadThreadsForGuild(n)).forEach((t) => {
            for (let n in t) {
                let t = Y(n);
                null != t && e.push(t);
            }
        }),
            e.length > 0 && (i.push((0, u.o6)(R.NW.string(R.t.ieCAhI))), (i = i.concat(e)));
    }
    return a()(i)
        .uniqBy((e) => e.record.id)
        .value();
}
function z(e, t) {
    switch (U) {
        case u.h8.USER: {
            let t = b.Z.getGuild(I.Z.getGuildId());
            e.unshift((0, u.o6)(null != t ? R.NW.formatToPlainString(R.t.FREzQk, { name: t.name }) : R.NW.string(R.t.XFYW1t))), (G = e);
            break;
        }
        case u.h8.TEXT_CHANNEL:
            e.unshift((0, u.o6)(R.NW.string(R.t.W26k4e))), (G = e);
            break;
        case u.h8.VOICE_CHANNEL:
            e.unshift((0, u.o6)(R.NW.string(R.t.zUoI5O))), (G = e);
            break;
        case u.h8.GUILD:
            e.unshift((0, u.o6)(R.NW.string(R.t.olADPj))), (G = e);
            break;
        case u.h8.APPLICATION:
            e.unshift((0, u.o6)(R.NW.string(R.t.VwK1lZ))), (G = e);
            break;
        default:
            G = e;
    }
    if (t !== B) (B = t), (Z = Math.max(t.length, Z)), (M = (0, u.gJ)(u.a8.DOWN, -1, G));
    else {
        let e = G[M];
        null != e && e.type === u.h8.HEADER && (M = (0, u.gJ)(u.a8.DOWN, M, G));
    }
    ei.emitChange();
}
function q(e) {
    var t;
    let { query: n, queryMode: i } = e,
        o = null !== (t = I.Z.getGuildId()) && void 0 !== t ? t : void 0,
        a = new Set(['user:'.concat(h.default.getId())]);
    null != o && a.add('guild:'.concat(o)),
        (r =
            null != r
                ? r
                : new u.ZP(J, L, null != i ? x : D, {
                      frecencyBoosters: !0,
                      blacklist: a
                  })),
        (B = null),
        (Z = n.length),
        (U = i),
        r.search(n);
}
function Q(e) {
    let { channelId: t } = e;
    if (null == t) return !1;
    (V = V.filter((e) => e !== t)).unshift(t), V.length > 4 && (V.length = 4);
}
function X(e, t) {
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) {
        let r = e[n],
            i = t[n];
        if (r.record.id !== i.record.id) return !1;
    }
    return !0;
}
function J(e, t) {
    !X((e = '' === (t = t.trim()).trim() ? K() : e), F) && ((F = e), z(e, t));
}
function $() {
    (B = null), (Z = 0), (F = []), null != r && (r.destroy(), (r = null));
}
function ee(e) {
    var t, n;
    let { query: i, queryMode: o } = e;
    if (null == r) return !1;
    let a = null !== (t = I.Z.getGuildId()) && void 0 !== t ? t : null;
    if (U !== o) {
        r.setResultTypes(null != o ? [o] : L), r.setLimit(null != o ? x : D);
        let e = null !== (n = I.Z.getGuildId()) && void 0 !== n ? n : void 0;
        o === u.h8.USER && null != e
            ? r.setOptions(
                  {
                      userFilters: {
                          guild: e,
                          friends: !0
                      }
                  },
                  !0
              )
            : o === u.h8.VOICE_CHANNEL
              ? r.setOptions({ voiceChannelGuildFilter: null }, !0)
              : r.setOptions(
                    {
                        userFilters: null,
                        voiceChannelGuildFilter: void 0
                    },
                    !0
                );
    }
    (U = o), r.search(i, U === u.h8.USER ? a : void 0);
}
function et(e) {
    M = e.selectedIndex;
}
function en() {
    if (k) return !1;
    (k = !0), l.K.set(w, !0);
}
class er extends (i = s.ZP.PersistedStore) {
    initialize(e) {
        var t;
        this.waitFor(v.ZP, b.Z, m.Z), this.syncWith([_.Z], () => !0), (k = l.K.get(w) || !1), (V = null !== (t = null == e ? void 0 : e.channelHistory) && void 0 !== t ? t : []);
    }
    getState() {
        return { channelHistory: V };
    }
    isOpen() {
        return null != r;
    }
    getResultTotals(e) {
        return null == r ? 0 : null == e ? r.results.reduce((e, t) => (t.type !== u.h8.HEADER ? e + 1 : e), 0) : r.results.reduce((t, n) => (n.type === e ? t + 1 : t), 0);
    }
    channelNoticePredicate(e, t) {
        let n = Date.now() - t >= C.Hqc;
        return j && n;
    }
    getFrequentGuilds() {
        return null != r ? r.queryGuilds('', 100) : null;
    }
    getFrequentGuildsLength() {
        return null != r ? r.queryGuilds('', 100).length : 0;
    }
    getChannelHistory() {
        return V;
    }
    getProps() {
        return {
            theme: _.Z.theme,
            query: null != r ? r.query : '',
            queryMode: U,
            results: G,
            selectedIndex: M,
            seenTutorial: k,
            maxQueryLength: Z
        };
    }
}
P(er, 'displayName', 'QuickSwitcherStore'), P(er, 'persistKey', 'QuickSwitcherStore');
let ei = new er(c.Z, {
        CONNECTION_OPEN: H,
        CONNECTION_OPEN_SUPPLEMENTAL: H,
        QUICKSWITCHER_SHOW: q,
        SHOW_ACTION_SHEET_QUICK_SWITCHER: q,
        QUICKSWITCHER_HIDE: $,
        OVERLAY_SET_INPUT_LOCKED: $,
        HIDE_ACTION_SHEET_QUICK_SWITCHER: $,
        QUICKSWITCHER_SEARCH: ee,
        QUICKSWITCHER_SELECT: et,
        QUICKSWITCHER_SWITCH_TO: en,
        CHANNEL_SELECT: Q
    }),
    eo = ei;
