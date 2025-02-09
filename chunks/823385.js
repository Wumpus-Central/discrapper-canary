let i;
n.d(t, { Z: () => ea }), n(653041), n(47120), n(733860), n(724458);
var r,
    a = n(392711),
    s = n.n(a),
    o = n(442837),
    l = n(433517),
    u = n(570140),
    c = n(212819),
    d = n(938078),
    f = n(220444),
    _ = n(601070),
    p = n(210887),
    h = n(314897),
    m = n(592125),
    g = n(703558),
    E = n(984933),
    v = n(271383),
    y = n(430824),
    I = n(496675),
    T = n(306680),
    b = n(944486),
    S = n(914010),
    A = n(9156),
    N = n(483360),
    C = n(823379),
    R = n(981631),
    O = n(388032);
function D(e, t, n) {
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
let L = 'seenQSTutorial',
    x = 5,
    w = 100,
    P = [c.h8.USER, c.h8.GROUP_DM, c.h8.TEXT_CHANNEL, c.h8.GUILD, c.h8.APPLICATION, c.h8.LINK, c.h8.IN_APP_NAVIGATION],
    M = 0,
    k = !1,
    U = !1,
    G = null,
    B = [],
    Z = null,
    F = 0,
    V = [],
    j = [];
function H() {
    (U = y.Z.getGuildCount() >= 3 || s().size(m.Z.getMutablePrivateChannels()) >= 20), (V = []);
}
function Y(e) {
    let t = [];
    return (
        g.Z.getRecentlyEditedDrafts(g.d.ChannelMessage).forEach((n) => {
            let { channelId: i } = n;
            if (e(i)) return;
            let r = W(i);
            null != r && t.push(r);
        }),
        t
    );
}
function W(e) {
    let t = (0, d.Z)(e);
    return null == t || (null != G && G !== t.type) ? null : t;
}
function K() {
    var e, t;
    let n = null !== (e = S.Z.getGuildId()) && void 0 !== e ? e : void 0,
        i = null !== (t = b.Z.getChannelId()) && void 0 !== t ? t : void 0;
    switch (G) {
        case c.h8.USER: {
            let e = h.default.getId();
            return N.ZP.getRecentlyTalked(i, 100).filter((t) => {
                let { record: n } = t;
                return n.id !== e;
            });
        }
        case c.h8.APPLICATION:
            return N.ZP.queryApplications({
                query: '',
                limit: 100,
                fuzzy: !0
            });
        case c.h8.GUILD:
            return N.ZP.queryGuilds({
                query: '',
                limit: 100,
                fuzzy: !0
            });
        case c.h8.TEXT_CHANNEL:
            return N.ZP.queryChannels({
                query: '',
                guildId: S.Z.getGuildId(),
                limit: 100,
                fuzzy: !0
            });
        case c.h8.VOICE_CHANNEL:
            return N.ZP.queryChannels({
                query: '',
                guildId: S.Z.getGuildId(),
                limit: 100,
                fuzzy: !0,
                filter: () => !0,
                type: E.Zb
            });
    }
    let r = [],
        a = [];
    for (let e = 1; e < j.length; e += 1) {
        let t = W(j[e]);
        null != t && ((t.type !== c.h8.TEXT_CHANNEL && t.type !== c.h8.VOICE_CHANNEL) || I.Z.can(R.Plq.VIEW_CHANNEL, t.record)) && a.push(t);
    }
    a.length > 0 && r.push((0, c.o6)(O.intl.string(O.t['80lOZ2'])), ...a);
    let o = Y((e) => e === i || j.includes(e));
    o.length > 0 && r.push((0, c.o6)(O.intl.string(O.t['4B63jY'])), ...o);
    let l = T.ZP.getMentionChannelIds()
        .filter((e) => e !== i && !j.includes(e))
        .map((e) => W(e))
        .filter(C.lm)
        .reverse();
    if ((l.length > 0 && (r.push((0, c.o6)(O.intl.string(O.t['61Df19']))), (r = r.concat(l))), null != n)) {
        let e = E.ZP.getSelectableChannelIds(n)
            .filter((e) => {
                let t = m.Z.getChannel(e);
                return !(null == t || e === i || j.includes(e) || A.ZP.isChannelMuted(t.guild_id, e) || (null != t.parent_id && A.ZP.isChannelMuted(t.guild_id, t.parent_id))) && (0, f.d)(t);
            })
            .map((e) => W(e))
            .filter((e) => e);
        Object.values(_.Z.getActiveJoinedUnreadThreadsForGuild(n)).forEach((t) => {
            for (let n in t) {
                let t = W(n);
                null != t && e.push(t);
            }
        }),
            e.length > 0 && (r.push((0, c.o6)(O.intl.string(O.t.ieCAhI))), (r = r.concat(e)));
    }
    return s()(r)
        .uniqBy((e) => e.record.id)
        .value();
}
function z(e, t) {
    switch (G) {
        case c.h8.USER: {
            let t = y.Z.getGuild(S.Z.getGuildId());
            e.unshift((0, c.o6)(null != t ? O.intl.formatToPlainString(O.t.FREzQk, { name: t.name }) : O.intl.string(O.t.XFYW1t))), (B = e);
            break;
        }
        case c.h8.TEXT_CHANNEL:
            e.unshift((0, c.o6)(O.intl.string(O.t.W26k4e))), (B = e);
            break;
        case c.h8.VOICE_CHANNEL:
            e.unshift((0, c.o6)(O.intl.string(O.t.zUoI5O))), (B = e);
            break;
        case c.h8.GUILD:
            e.unshift((0, c.o6)(O.intl.string(O.t.olADPj))), (B = e);
            break;
        case c.h8.APPLICATION:
            e.unshift((0, c.o6)(O.intl.string(O.t.VwK1lZ))), (B = e);
            break;
        default:
            B = e;
    }
    if (t !== Z) (Z = t), (F = Math.max(t.length, F)), (M = (0, c.gJ)(c.a8.DOWN, -1, B));
    else {
        let e = B[M];
        null != e && e.type === c.h8.HEADER && (M = (0, c.gJ)(c.a8.DOWN, M, B));
    }
    er.emitChange();
}
function q(e) {
    var t;
    let { query: n, queryMode: r } = e,
        a = null !== (t = S.Z.getGuildId()) && void 0 !== t ? t : void 0,
        s = new Set(['user:'.concat(h.default.getId())]);
    null != a && s.add('guild:'.concat(a)),
        (i =
            null != i
                ? i
                : new c.ZP(J, P, null != r ? w : x, {
                      frecencyBoosters: !0,
                      blacklist: s
                  })),
        (Z = null),
        (F = n.length),
        (G = r),
        i.search(n);
}
function Q(e) {
    let { channelId: t } = e;
    if (null == t) return !1;
    (j = j.filter((e) => e !== t)).unshift(t), j.length > 4 && (j.length = 4);
}
function X(e, t) {
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) {
        let i = e[n],
            r = t[n];
        if (i.record.id !== r.record.id) return !1;
    }
    return !0;
}
function J(e, t) {
    !X((e = '' === (t = t.trim()).trim() ? K() : e), V) && ((V = e), z(e, t));
}
function $() {
    (Z = null), (F = 0), (V = []), null != i && (i.destroy(), (i = null));
}
function ee(e) {
    var t, n;
    let { query: r, queryMode: a } = e;
    if (null == i) return !1;
    let s = null !== (t = S.Z.getGuildId()) && void 0 !== t ? t : null;
    if (G !== a) {
        i.setResultTypes(null != a ? [a] : P), i.setLimit(null != a ? w : x);
        let e = null !== (n = S.Z.getGuildId()) && void 0 !== n ? n : void 0;
        a === c.h8.USER && null != e
            ? i.setOptions(
                  {
                      userFilters: {
                          guild: e,
                          friends: !0
                      }
                  },
                  !0
              )
            : a === c.h8.VOICE_CHANNEL
              ? i.setOptions({ voiceChannelGuildFilter: null }, !0)
              : i.setOptions(
                    {
                        userFilters: null,
                        voiceChannelGuildFilter: void 0
                    },
                    !0
                );
    }
    (G = a), i.search(r, G === c.h8.USER ? s : void 0);
}
function et(e) {
    M = e.selectedIndex;
}
function en() {
    if (k) return !1;
    (k = !0), l.K.set(L, !0);
}
class ei extends (r = o.ZP.PersistedStore) {
    initialize(e) {
        var t;
        this.waitFor(v.ZP, y.Z, m.Z), this.syncWith([p.Z], () => !0), (k = l.K.get(L) || !1), (j = null !== (t = null == e ? void 0 : e.channelHistory) && void 0 !== t ? t : []);
    }
    getState() {
        return { channelHistory: j };
    }
    isOpen() {
        return null != i;
    }
    getResultTotals(e) {
        return null == i ? 0 : null == e ? i.results.reduce((e, t) => (t.type !== c.h8.HEADER ? e + 1 : e), 0) : i.results.reduce((t, n) => (n.type === e ? t + 1 : t), 0);
    }
    channelNoticePredicate(e, t) {
        let n = Date.now() - t >= R.Hqc;
        return U && n;
    }
    getFrequentGuilds() {
        return null != i ? i.queryGuilds('', 100) : null;
    }
    getFrequentGuildsLength() {
        return null != i ? i.queryGuilds('', 100).length : 0;
    }
    getChannelHistory() {
        return j;
    }
    getProps() {
        return {
            theme: p.Z.theme,
            query: null != i ? i.query : '',
            queryMode: G,
            results: B,
            selectedIndex: M,
            seenTutorial: k,
            maxQueryLength: F
        };
    }
}
D(ei, 'displayName', 'QuickSwitcherStore'), D(ei, 'persistKey', 'QuickSwitcherStore');
let er = new ei(u.Z, {
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
    ea = er;
