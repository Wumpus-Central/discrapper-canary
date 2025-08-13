let r;
n.d(t, { Z: () => el }), n(539854), n(388685), n(583741), n(290780), n(35282), n(781311);
var i,
    o = n(392711),
    a = n.n(o),
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
    j = 100,
    k = [u.h8.USER, u.h8.GROUP_DM, u.h8.TEXT_CHANNEL, u.h8.GUILD, u.h8.APPLICATION, u.h8.LINK, u.h8.IN_APP_NAVIGATION],
    U = 0,
    G = !1,
    B = !1,
    Z = null,
    F = [],
    V = null,
    H = 0,
    Y = [],
    W = [];
function K() {
    (B = v.Z.getGuildCount() >= 3 || a().size(g.Z.getMutablePrivateChannels()) >= 20), (Y = []);
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
    return null == t || (null != Z && Z !== t.type) ? null : t;
}
function X() {
    var e, t;
    let n = null != (e = A.Z.getGuildId()) ? e : void 0,
        r = null != (t = S.Z.getChannelId()) ? t : void 0;
    switch (Z) {
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
            });
        case u.h8.VOICE_CHANNEL:
            return C.ZP.queryChannels({
                query: "",
                guildId: A.Z.getGuildId(),
                limit: 100,
                fuzzy: !0,
                filter: () => !0,
                type: y.Zb,
            });
    }
    let i = [],
        o = [];
    for (let e = 1; e < W.length; e += 1) {
        let t = q(W[e]);
        null != t &&
            ((t.type !== u.h8.TEXT_CHANNEL && t.type !== u.h8.VOICE_CHANNEL) ||
                I.Z.can(w.Plq.VIEW_CHANNEL, t.record)) &&
            o.push(t);
    }
    o.length > 0 && i.push((0, u.o6)(D.intl.string(D.t["80lOZ2"])), ...o);
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
    return a()(i)
        .uniqBy((e) => e.record.id)
        .value();
}
function Q(e, t) {
    switch (Z) {
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
    if (t !== V) (V = t), (H = Math.max(t.length, H)), (U = (0, u.gJ)(u.a8.DOWN, -1, F));
    else {
        let e = F[U];
        null != e && e.type === u.h8.HEADER && (U = (0, u.gJ)(u.a8.DOWN, U, F));
    }
    es.emitChange();
}
function J(e) {
    var t;
    let { query: n, queryMode: i } = e,
        o = null != (t = A.Z.getGuildId()) ? t : void 0,
        a = new Set(["user:".concat(m.default.getId())]);
    null != o && a.add("guild:".concat(o)),
        (r =
            null != r
                ? r
                : new u.ZP(et, k, null != i ? j : M, {
                      frecencyBoosters: !0,
                      blacklist: a,
                  })),
        (V = null),
        (H = n.length),
        (Z = i),
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
    (V = null), (H = 0), (Y = []), null != r && (r.destroy(), (r = null));
}
function er(e) {
    var t, n;
    let { query: i, queryMode: o } = e;
    if (null == r) return !1;
    if (Z !== o) {
        r.setResultTypes(null != o ? [o] : k), r.setLimit(null != o ? j : M);
        let e = null != (t = A.Z.getGuildId()) ? t : void 0;
        o === u.h8.USER && null != e
            ? r.setOptions(
                  {
                      userFilters: {
                          guild: e,
                          friends: !0,
                      },
                  },
                  !0,
              )
            : o === u.h8.VOICE_CHANNEL
              ? r.setOptions({ voiceChannelGuildFilter: null }, !0)
              : r.setOptions(
                    {
                        userFilters: null,
                        voiceChannelGuildFilter: void 0,
                    },
                    !0,
                );
    }
    if ((Z = o) === u.h8.USER) {
        let e = null != (n = A.Z.getGuildId()) ? n : null;
        r.search(i, e);
        return;
    }
    let { enabled: a, type: s } = (0, _.$)({ location: "QuickSwitcher" });
    if (!a) return void r.search(i, void 0);
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
function eo() {
    if (G) return !1;
    (G = !0), l.K.set(x, !0);
}
class ea extends (i = s.ZP.PersistedStore) {
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
            queryMode: Z,
            results: F,
            selectedIndex: U,
            seenTutorial: G,
            maxQueryLength: H,
        };
    }
}
L(ea, "displayName", "QuickSwitcherStore"), L(ea, "persistKey", "QuickSwitcherStore");
let es = new ea(c.Z, {
        CONNECTION_OPEN: K,
        CONNECTION_OPEN_SUPPLEMENTAL: K,
        QUICKSWITCHER_SHOW: J,
        SHOW_ACTION_SHEET_QUICK_SWITCHER: J,
        QUICKSWITCHER_HIDE: en,
        OVERLAY_SET_INPUT_LOCKED: en,
        HIDE_ACTION_SHEET_QUICK_SWITCHER: en,
        QUICKSWITCHER_SEARCH: er,
        QUICKSWITCHER_SELECT: ei,
        QUICKSWITCHER_SWITCH_TO: eo,
        CHANNEL_SELECT: $,
    }),
    el = es;
