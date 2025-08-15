let r;
n.d(t, { Z: () => el }), n(539854), n(388685), n(583741), n(290780), n(35282), n(781311);
var i,
    a = n(392711),
    o = n.n(a),
    s = n(442837),
    l = n(433517),
    c = n(570140),
    u = n(212819),
    d = n(938078),
    f = n(220444),
    _ = n(745488),
    p = n(601070),
    h = n(210887),
    m = n(314897),
    g = n(592125),
    E = n(703558),
    b = n(580005),
    y = n(984933),
    O = n(271383),
    v = n(430824),
    I = n(496675),
    T = n(306680),
    S = n(944486),
    A = n(914010),
    N = n(9156),
    C = n(483360),
    R = n(823379),
    P = n(411198),
    w = n(981631),
    D = n(388032);
function L(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let x = "seenQSTutorial",
    M = 5,
    k = 100,
    j = [u.h8.USER, u.h8.GROUP_DM, u.h8.TEXT_CHANNEL, u.h8.GUILD, u.h8.APPLICATION, u.h8.LINK, u.h8.IN_APP_NAVIGATION],
    U = 0,
    G = !1,
    B = !1,
    V = null,
    F = [],
    Z = null,
    H = 0,
    Y = [],
    W = [];
function K() {
    (B = v.Z.getGuildCount() >= 3 || o().size(g.Z.getMutablePrivateChannels()) >= 20), (Y = []);
}
function z(e) {
    let t = [];
    return (
        E.Z.getRecentlyEditedDrafts(E.d.ChannelMessage).forEach((n) => {
            let { channelId: r } = n;
            if (e(r)) return;
            let i = q(r);
            null != i && t.push(i);
        }),
        t
    );
}
function q(e) {
    let t = (0, d.Z)(e);
    return null == t || (null != V && V !== t.type) ? null : t;
}
function X() {
    var e, t;
    let n = null != (e = A.Z.getGuildId()) ? e : void 0,
        r = null != (t = S.Z.getChannelId()) ? t : void 0;
    switch (V) {
        case u.h8.USER: {
            let e = m.default.getId();
            return C.ZP.getRecentlyTalked(r, 100).filter((t) => {
                let { record: n } = t;
                return n.id !== e;
            });
        }
        case u.h8.APPLICATION:
            return C.ZP.queryApplications({
                query: "",
                limit: 100,
                fuzzy: !0,
            });
        case u.h8.GUILD:
            return C.ZP.queryGuilds({
                query: "",
                limit: 100,
                fuzzy: !0,
            });
        case u.h8.TEXT_CHANNEL:
            return C.ZP.queryChannels({
                query: "",
                guildId: A.Z.getGuildId(),
                limit: 100,
                fuzzy: !0,
                allowEmptyQueries: !0,
            });
        case u.h8.VOICE_CHANNEL:
            return C.ZP.queryChannels({
                query: "",
                guildId: A.Z.getGuildId(),
                limit: 100,
                fuzzy: !0,
                filter: () => !0,
                type: y.Zb,
                allowEmptyQueries: !0,
            });
    }
    let i = [],
        a = [];
    for (let e = 1; e < W.length; e += 1) {
        let t = q(W[e]);
        null != t &&
            ((t.type !== u.h8.TEXT_CHANNEL && t.type !== u.h8.VOICE_CHANNEL) ||
                I.Z.can(w.Plq.VIEW_CHANNEL, t.record)) &&
            a.push(t);
    }
    a.length > 0 && i.push((0, u.o6)(D.intl.string(D.t["80lOZ2"])), ...a);
    let s = z((e) => e === r || W.includes(e));
    s.length > 0 && i.push((0, u.o6)(D.intl.string(D.t["4B63jY"])), ...s);
    let l = T.ZP.getMentionChannelIds()
        .filter((e) => e !== r && !W.includes(e))
        .map((e) => q(e))
        .filter(R.lm)
        .reverse();
    if ((l.length > 0 && (i.push((0, u.o6)(D.intl.string(D.t["61Df19"]))), (i = i.concat(l))), null != n)) {
        let e = y.ZP.getSelectableChannelIds(n)
            .filter((e) => {
                let t = g.Z.getChannel(e);
                return (
                    !(
                        null == t ||
                        e === r ||
                        W.includes(e) ||
                        N.ZP.isChannelMuted(t.guild_id, e) ||
                        (null != t.parent_id && N.ZP.isChannelMuted(t.guild_id, t.parent_id))
                    ) && (0, f.d)(t)
                );
            })
            .map((e) => q(e))
            .filter((e) => e);
        Object.values(p.Z.getActiveJoinedUnreadThreadsForGuild(n)).forEach((t) => {
            for (let n in t) {
                let t = q(n);
                null != t && e.push(t);
            }
        }),
            e.length > 0 && (i.push((0, u.o6)(D.intl.string(D.t.ieCAhI))), (i = i.concat(e)));
    }
    return o()(i)
        .uniqBy((e) => e.record.id)
        .value();
}
function Q(e, t) {
    switch (V) {
        case u.h8.USER: {
            let t = v.Z.getGuild(A.Z.getGuildId());
            e.unshift(
                (0, u.o6)(
                    null != t ? D.intl.formatToPlainString(D.t.FREzQk, { name: t.name }) : D.intl.string(D.t.XFYW1t),
                ),
            ),
                (F = e);
            break;
        }
        case u.h8.TEXT_CHANNEL:
            e.unshift((0, u.o6)(D.intl.string(D.t.W26k4e))), (F = e);
            break;
        case u.h8.VOICE_CHANNEL:
            e.unshift((0, u.o6)(D.intl.string(D.t.zUoI5O))), (F = e);
            break;
        case u.h8.GUILD:
            e.unshift((0, u.o6)(D.intl.string(D.t.olADPj))), (F = e);
            break;
        case u.h8.APPLICATION:
            e.unshift((0, u.o6)(D.intl.string(D.t.VwK1lZ))), (F = e);
            break;
        default:
            F = e;
    }
    if (t !== Z) (Z = t), (H = Math.max(t.length, H)), (U = (0, u.gJ)(u.a8.DOWN, -1, F));
    else {
        let e = F[U];
        null != e && e.type === u.h8.HEADER && (U = (0, u.gJ)(u.a8.DOWN, U, F));
    }
    es.emitChange();
}
function J(e) {
    var t;
    let { query: n, queryMode: i } = e,
        a = null != (t = A.Z.getGuildId()) ? t : void 0,
        o = new Set(["user:".concat(m.default.getId())]);
    null != a && o.add("guild:".concat(a)),
        (r =
            null != r
                ? r
                : new u.ZP(et, j, null != i ? k : M, {
                      frecencyBoosters: !0,
                      blacklist: o,
                  })),
        (Z = null),
        (H = n.length),
        (V = i),
        r.search(n);
}
function $(e) {
    let { channelId: t } = e;
    if (null == t) return !1;
    (W = W.filter((e) => e !== t)).unshift(t), W.length > 4 && (W.length = 4);
}
function ee(e, t) {
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) {
        let r = e[n],
            i = t[n];
        if (r.record.id !== i.record.id) return !1;
    }
    return !0;
}
function et(e, t) {
    ee((e = "" === (t = t.trim()).trim() ? X() : e), Y) || ((Y = e), Q(e, t));
}
function en() {
    (Z = null), (H = 0), (Y = []), null != r && (r.destroy(), (r = null));
}
function er(e) {
    var t, n;
    let { query: i, queryMode: a } = e;
    if (null == r) return !1;
    if (V !== a) {
        r.setResultTypes(null != a ? [a] : j), r.setLimit(null != a ? k : M);
        let e = null != (t = A.Z.getGuildId()) ? t : void 0;
        a === u.h8.USER && null != e
            ? r.setOptions(
                  {
                      userFilters: {
                          guild: e,
                          friends: !0,
                      },
                  },
                  !0,
              )
            : a === u.h8.VOICE_CHANNEL
              ? r.setOptions({ voiceChannelGuildFilter: null }, !0)
              : r.setOptions(
                    {
                        userFilters: null,
                        voiceChannelGuildFilter: void 0,
                    },
                    !0,
                );
    }
    if ((V = a) === u.h8.USER) {
        let e = null != (n = A.Z.getGuildId()) ? n : null;
        r.search(i, e);
        return;
    }
    let { enabled: o, type: s } = (0, _.$)({ location: "QuickSwitcher" });
    if (!o) return void r.search(i, void 0);
    switch (s) {
        case _.N.ALL_GUILDS:
            let l = v.Z.getGuildIds();
            r.search(i, l.length > 0 ? [...l] : void 0);
            break;
        case _.N.SELECTED_GUILD:
            let c = A.Z.getGuildId();
            r.search(i, null != c ? c : void 0);
            break;
        case _.N.FRECENCY_GUILDS:
            let d = [];
            b.Z.getFrequentlyWithoutFetchingLatest().forEach((e) => {
                (0, P.lM)(e) && d.push(e.id);
            }),
                r.search(i, d.length > 0 ? d : void 0);
    }
}
function ei(e) {
    U = e.selectedIndex;
}
function ea() {
    if (G) return !1;
    (G = !0), l.K.set(x, !0);
}
class eo extends (i = s.ZP.PersistedStore) {
    initialize(e) {
        var t;
        this.waitFor(O.ZP, v.Z, g.Z),
            this.syncWith([h.Z], () => !0),
            (G = l.K.get(x) || !1),
            (W = null != (t = null == e ? void 0 : e.channelHistory) ? t : []);
    }
    getState() {
        return { channelHistory: W };
    }
    isOpen() {
        return null != r;
    }
    getResultTotals(e) {
        return null == r
            ? 0
            : null == e
              ? r.results.reduce((e, t) => (t.type !== u.h8.HEADER ? e + 1 : e), 0)
              : r.results.reduce((t, n) => (n.type === e ? t + 1 : t), 0);
    }
    channelNoticePredicate(e, t) {
        let n = Date.now() - t >= w.Hqc;
        return B && n;
    }
    getFrequentGuilds() {
        return null != r ? r.queryGuilds("", 100) : null;
    }
    getFrequentGuildsLength() {
        return null != r ? r.queryGuilds("", 100).length : 0;
    }
    getChannelHistory() {
        return W;
    }
    getProps() {
        return {
            theme: h.Z.theme,
            query: null != r ? r.query : "",
            queryMode: V,
            results: F,
            selectedIndex: U,
            seenTutorial: G,
            maxQueryLength: H,
        };
    }
}
L(eo, "displayName", "QuickSwitcherStore"), L(eo, "persistKey", "QuickSwitcherStore");
let es = new eo(c.Z, {
        CONNECTION_OPEN: K,
        CONNECTION_OPEN_SUPPLEMENTAL: K,
        QUICKSWITCHER_SHOW: J,
        SHOW_ACTION_SHEET_QUICK_SWITCHER: J,
        QUICKSWITCHER_HIDE: en,
        OVERLAY_SET_INPUT_LOCKED: en,
        HIDE_ACTION_SHEET_QUICK_SWITCHER: en,
        QUICKSWITCHER_SEARCH: er,
        QUICKSWITCHER_SELECT: ei,
        QUICKSWITCHER_SWITCH_TO: ea,
        CHANNEL_SELECT: $,
    }),
    el = es;
