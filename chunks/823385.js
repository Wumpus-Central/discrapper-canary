let r;
n.d(t, { Z: () => eo }), n(539854), n(388685), n(583741), n(290780), n(781311), n(35282);
var i,
    a = n(392711),
    o = n.n(a),
    s = n(442837),
    l = n(433517),
    c = n(570140),
    u = n(212819),
    d = n(938078),
    f = n(220444),
    _ = n(601070),
    p = n(210887),
    h = n(314897),
    m = n(592125),
    g = n(703558),
    E = n(984933),
    b = n(271383),
    y = n(430824),
    O = n(496675),
    v = n(306680),
    I = n(944486),
    T = n(914010),
    S = n(9156),
    A = n(483360),
    C = n(823379),
    N = n(981631),
    R = n(388032);
function P(e, t, n) {
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
let w = "seenQSTutorial",
    D = 5,
    L = 100,
    x = [u.h8.USER, u.h8.GROUP_DM, u.h8.TEXT_CHANNEL, u.h8.GUILD, u.h8.APPLICATION, u.h8.LINK, u.h8.IN_APP_NAVIGATION],
    M = 0,
    k = !1,
    j = !1,
    U = null,
    G = [],
    B = null,
    Z = 0,
    F = [],
    V = [],
    H = null;
function Y() {
    (j = y.Z.getGuildCount() >= 3 || o().size(m.Z.getMutablePrivateChannels()) >= 20), (F = []);
}
function W(e) {
    let t = [];
    return (
        g.Z.getRecentlyEditedDrafts(g.d.ChannelMessage).forEach((n) => {
            let { channelId: r } = n;
            if (e(r)) return;
            let i = K(r);
            if (null != i) {
                let e = {
                    record: i,
                    channelId: r,
                };
                t.push(e);
            }
        }),
        t
    );
}
function K(e) {
    let t = (0, d.Z)(e);
    return null == t || (null != U && U !== t.type) ? null : t;
}
function z() {
    var e, t;
    let n = null != (e = T.Z.getGuildId()) ? e : void 0,
        r = null != (t = I.Z.getChannelId()) ? t : void 0;
    switch (U) {
        case u.h8.USER: {
            let e = h.default.getId();
            return A.ZP.getRecentlyTalked(r, 100).filter((t) => {
                let { record: n } = t;
                return n.id !== e;
            });
        }
        case u.h8.APPLICATION:
            return A.ZP.queryApplications({
                query: "",
                limit: 100,
                fuzzy: !0,
            });
        case u.h8.GUILD:
            return A.ZP.queryGuilds({
                query: "",
                limit: 100,
                fuzzy: !0,
            });
        case u.h8.TEXT_CHANNEL:
            return A.ZP.queryChannels({
                query: "",
                guildId: T.Z.getGuildId(),
                limit: 100,
                fuzzy: !0,
                allowEmptyQueries: !0,
            });
        case u.h8.VOICE_CHANNEL:
            return A.ZP.queryChannels({
                query: "",
                guildId: T.Z.getGuildId(),
                limit: 100,
                fuzzy: !0,
                filter: () => !0,
                type: E.Zb,
                allowEmptyQueries: !0,
            });
    }
    let i = [],
        a = new Set(),
        o = [];
    for (let e = 1; e < V.length; e += 1) {
        let t = K(V[e]);
        null != t &&
            ((t.type !== u.h8.TEXT_CHANNEL && t.type !== u.h8.VOICE_CHANNEL) ||
                O.Z.can(N.Plq.VIEW_CHANNEL, t.record)) &&
            (o.push(t), a.add(t.record.id));
    }
    o.length > 0 && i.push((0, u.o6)(R.intl.string(R.t["80lOZ2"])), ...o);
    let s = W((e) => e === r || V.includes(e) || a.has(e));
    if (s.length > 0)
        for (let e of (i.push((0, u.o6)(R.intl.string(R.t["4B63jY"]))), s)) a.add(e.channelId), i.push(e.record);
    let l = v.ZP.getMentionChannelIds()
        .filter((e) => e !== r && !V.includes(e) && !a.has(e))
        .map((e) => K(e))
        .filter(C.lm)
        .reverse();
    if (l.length > 0) for (let e of (i.push((0, u.o6)(R.intl.string(R.t["61Df19"]))), l)) a.add(e.record.id), i.push(e);
    if (null != n) {
        let e = E.ZP.getSelectableChannelIds(n)
            .filter((e) => {
                let t = m.Z.getChannel(e);
                return (
                    !(
                        null == t ||
                        e === r ||
                        V.includes(e) ||
                        a.has(e) ||
                        S.ZP.isChannelMuted(t.guild_id, e) ||
                        (null != t.parent_id && S.ZP.isChannelMuted(t.guild_id, t.parent_id))
                    ) && (0, f.d)(t)
                );
            })
            .map((e) => K(e))
            .filter((e) => e);
        Object.values(_.Z.getActiveJoinedUnreadThreadsForGuild(n)).forEach((t) => {
            for (let n in t) {
                let t = K(n);
                null == t || a.has(t.record.id) || e.push(t);
            }
        }),
            e.length > 0 && (i.push((0, u.o6)(R.intl.string(R.t.ieCAhI))), (i = i.concat(e)));
    }
    return i;
}
function q(e, t) {
    switch (U) {
        case u.h8.USER: {
            let t = y.Z.getGuild(T.Z.getGuildId());
            e.unshift(
                (0, u.o6)(
                    null != t ? R.intl.formatToPlainString(R.t.FREzQk, { name: t.name }) : R.intl.string(R.t.XFYW1t),
                ),
            ),
                (G = e);
            break;
        }
        case u.h8.TEXT_CHANNEL:
            e.unshift((0, u.o6)(R.intl.string(R.t.W26k4e))), (G = e);
            break;
        case u.h8.VOICE_CHANNEL:
            e.unshift((0, u.o6)(R.intl.string(R.t.zUoI5O))), (G = e);
            break;
        case u.h8.GUILD:
            e.unshift((0, u.o6)(R.intl.string(R.t.olADPj))), (G = e);
            break;
        case u.h8.APPLICATION:
            e.unshift((0, u.o6)(R.intl.string(R.t.VwK1lZ))), (G = e);
            break;
        default:
            G = e;
    }
    if (t !== B) (B = t), (Z = Math.max(t.length, Z)), (M = (0, u.gJ)(u.a8.DOWN, -1, G));
    else {
        let e = G[M];
        null != e && e.type === u.h8.HEADER && (M = (0, u.gJ)(u.a8.DOWN, M, G));
    }
    ea.emitChange();
}
function X(e) {
    var t;
    let { query: n, queryMode: i } = e,
        a = n.trim(),
        o = null != (t = T.Z.getGuildId()) ? t : void 0,
        s = new Set(["user:".concat(h.default.getId())]);
    null != o && s.add("guild:".concat(o)),
        (H = Date.now()),
        (r =
            null != r
                ? r
                : new u.ZP(
                      $,
                      x,
                      null != i ? L : D,
                      {
                          frecencyBoosters: !0,
                          blacklist: s,
                          allowSnowflake: !0,
                      },
                      L,
                  )),
        (B = null),
        (Z = a.length),
        (U = i),
        r.search(a);
}
function Q(e) {
    let { channelId: t } = e;
    if (null == t) return !1;
    (V = V.filter((e) => e !== t)).unshift(t), V.length > 4 && (V.length = 4);
}
function J(e, t) {
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) {
        let r = e[n],
            i = t[n];
        if (r.record.id !== i.record.id) return !1;
    }
    return !0;
}
function $(e, t) {
    J((e = "" === (t = t.trim()).trim() ? z() : e), F) || ((F = e), q(e, t));
}
function ee() {
    (B = null), (Z = 0), (F = []), null != r && (r.destroy(), (r = null));
}
function et(e) {
    var t, n;
    let { query: i, queryMode: a } = e,
        o = i.trim();
    if (null == r) return !1;
    if (U !== a) {
        r.setResultTypes(null != a ? [a] : x), r.setLimit(null != a ? L : D);
        let e = null != (t = T.Z.getGuildId()) ? t : void 0;
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
    if ((U = a) === u.h8.USER) {
        let e = null != (n = T.Z.getGuildId()) ? n : null;
        r.search(o, e);
    } else r.search(o, void 0);
}
function en(e) {
    M = e.selectedIndex;
}
function er() {
    if (k) return !1;
    (k = !0), l.K.set(w, !0);
}
class ei extends (i = s.ZP.PersistedStore) {
    initialize(e) {
        var t;
        this.waitFor(b.ZP, y.Z, m.Z),
            this.syncWith([p.Z], () => !0),
            (k = l.K.get(w) || !1),
            (V = null != (t = null == e ? void 0 : e.channelHistory) ? t : []);
    }
    getState() {
        return { channelHistory: V };
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
        let n = Date.now() - t >= N.Hqc;
        return j && n;
    }
    getFrequentGuilds() {
        return null != r ? r.queryGuilds("", 100) : null;
    }
    getFrequentGuildsLength() {
        return null != r ? r.queryGuilds("", 100).length : 0;
    }
    getChannelHistory() {
        return V;
    }
    getLastShowTimestamp() {
        return H;
    }
    getProps() {
        return {
            theme: p.Z.theme,
            query: null != r ? r.query : "",
            queryMode: U,
            results: G,
            selectedIndex: M,
            seenTutorial: k,
            maxQueryLength: Z,
        };
    }
}
P(ei, "displayName", "QuickSwitcherStore"), P(ei, "persistKey", "QuickSwitcherStore");
let ea = new ei(c.Z, {
        CONNECTION_OPEN: Y,
        CONNECTION_OPEN_SUPPLEMENTAL: Y,
        QUICKSWITCHER_SHOW: X,
        SHOW_ACTION_SHEET_QUICK_SWITCHER: X,
        QUICKSWITCHER_HIDE: ee,
        OVERLAY_SET_INPUT_LOCKED: ee,
        HIDE_ACTION_SHEET_QUICK_SWITCHER: ee,
        QUICKSWITCHER_SEARCH: et,
        QUICKSWITCHER_SELECT: en,
        QUICKSWITCHER_SWITCH_TO: er,
        CHANNEL_SELECT: Q,
    }),
    eo = ea;
