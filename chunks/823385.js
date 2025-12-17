let r;
n.d(t, { Z: () => el }), n(539854), n(388685), n(583741), n(290780), n(781311), n(35282);
var i,
    a = n(392711),
    o = n.n(a),
    s = n(442837),
    l = n(433517),
    c = n(570140),
    u = n(212819),
    d = n(938078),
    f = n(220444),
    p = n(601070),
    _ = n(210887),
    m = n(314897),
    h = n(592125),
    g = n(703558),
    E = n(984933),
    b = n(271383),
    y = n(430824),
    O = n(496675),
    v = n(306680),
    S = n(944486),
    I = n(914010),
    T = n(9156),
    C = n(483360),
    A = n(823379),
    N = n(981631),
    P = n(388032);
function R(e, t, n) {
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
    x = 7,
    L = 3,
    j = 100,
    M = [u.h8.USER, u.h8.GROUP_DM, u.h8.TEXT_CHANNEL, u.h8.GUILD, u.h8.APPLICATION, u.h8.LINK, u.h8.IN_APP_NAVIGATION],
    k = 0,
    U = !1,
    G = !1,
    Z = null,
    F = [],
    B = null,
    V = 0,
    H = [],
    Y = [],
    W = null;
function K() {
    (G = y.Z.getGuildCount() >= 3 || o().size(h.Z.getMutablePrivateChannels()) >= 20), (H = []);
}
function z(e) {
    let t = [];
    return (
        g.Z.getRecentlyEditedDrafts(g.d.ChannelMessage).forEach((n) => {
            let { channelId: r } = n;
            if (e(r)) return;
            let i = q(r);
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
function q(e) {
    let t = (0, d.Z)(e);
    return null == t || (null != Z && Z !== t.type) ? null : t;
}
function Q() {
    var e, t;
    let n = null != (e = I.Z.getGuildId()) ? e : void 0,
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
                guildId: I.Z.getGuildId(),
                limit: 100,
                fuzzy: !0,
                allowEmptyQueries: !0,
            });
        case u.h8.VOICE_CHANNEL:
            return C.ZP.queryChannels({
                query: "",
                guildId: I.Z.getGuildId(),
                limit: 100,
                fuzzy: !0,
                filter: () => !0,
                type: E.Zb,
                allowEmptyQueries: !0,
            });
    }
    let i = [],
        a = new Set(),
        o = z((e) => e === r || Y.includes(e) || a.has(e));
    if (o.length > 0)
        for (let e of (i.push((0, u.o6)(P.intl.string(P.t["4B63jZ"]))), o)) a.add(e.channelId), i.push(e.record);
    let s = v.ZP.getMentionChannelIds()
        .filter((e) => e !== r && !Y.includes(e) && !a.has(e))
        .map((e) => q(e))
        .filter(A.lm)
        .reverse();
    if (s.length > 0) for (let e of (i.push((0, u.o6)(P.intl.string(P.t["61Df13"]))), s)) a.add(e.record.id), i.push(e);
    if (null != n) {
        let e = E.ZP.getSelectableChannelIds(n)
            .filter((e) => {
                let t = h.Z.getChannel(e);
                return (
                    !(
                        null == t ||
                        e === r ||
                        Y.includes(e) ||
                        a.has(e) ||
                        T.ZP.isChannelMuted(t.guild_id, e) ||
                        (null != t.parent_id && T.ZP.isChannelMuted(t.guild_id, t.parent_id))
                    ) && (0, f.d)(t)
                );
            })
            .map((e) => q(e))
            .filter((e) => e);
        Object.values(p.Z.getActiveJoinedUnreadThreadsForGuild(n)).forEach((t) => {
            for (let n in t) {
                let t = q(n);
                null == t || a.has(t.record.id) || Y.includes(n) || e.push(t);
            }
        }),
            e.length > 0 && (i.push((0, u.o6)(P.intl.string(P.t.ieCAhD))), (i = i.concat(e)));
    }
    let l = Math.min((i.length > 0 ? L : x) + 1, Y.length),
        c = [];
    for (let e = 1; e < l; e += 1) {
        let t = q(Y[e]);
        null != t &&
            ((t.type !== u.h8.TEXT_CHANNEL && t.type !== u.h8.VOICE_CHANNEL) ||
                O.Z.can(N.Plq.VIEW_CHANNEL, t.record)) &&
            (c.push(t), a.add(t.record.id));
    }
    return c.length > 0 && (i = [(0, u.o6)(P.intl.string(P.t["80lOZ1"])), ...c, ...i]), i;
}
function X(e, t) {
    switch (Z) {
        case u.h8.USER: {
            let t = y.Z.getGuild(I.Z.getGuildId());
            e.unshift(
                (0, u.o6)(
                    null != t ? P.intl.formatToPlainString(P.t.FREzQs, { name: t.name }) : P.intl.string(P.t.XFYW1o),
                ),
            ),
                (F = e);
            break;
        }
        case u.h8.TEXT_CHANNEL:
            e.unshift((0, u.o6)(P.intl.string(P.t.W26k4V))), (F = e);
            break;
        case u.h8.VOICE_CHANNEL:
            e.unshift((0, u.o6)(P.intl.string(P.t.zUoI5C))), (F = e);
            break;
        case u.h8.GUILD:
            e.unshift((0, u.o6)(P.intl.string(P.t.olADPs))), (F = e);
            break;
        case u.h8.APPLICATION:
            e.unshift((0, u.o6)(P.intl.string(P.t.VwK1ld))), (F = e);
            break;
        default:
            F = e;
    }
    if (t !== B) (B = t), (V = Math.max(t.length, V)), (k = (0, u.gJ)(u.a8.DOWN, -1, F));
    else {
        let e = F[k];
        null != e && e.type === u.h8.HEADER && (k = (0, u.gJ)(u.a8.DOWN, k, F));
    }
    es.emitChange();
}
function J(e) {
    var t;
    let { query: n, queryMode: i } = e,
        a = n.trim(),
        o = null != (t = I.Z.getGuildId()) ? t : void 0,
        s = new Set(["user:".concat(m.default.getId())]);
    null != o && s.add("guild:".concat(o)),
        (W = Date.now()),
        (r =
            null != r
                ? r
                : new u.ZP(
                      et,
                      M,
                      null != i ? j : D,
                      {
                          frecencyBoosters: !0,
                          blacklist: s,
                          allowSnowflake: !0,
                      },
                      j,
                  )),
        (B = null),
        (V = a.length),
        (Z = i),
        r.search(a);
}
function $(e) {
    let { channelId: t } = e;
    if (null == t) return !1;
    (Y = Y.filter((e) => e !== t)).unshift(t), Y.length > x + 1 && (Y.length = x + 1);
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
    ee((e = "" === (t = t.trim()).trim() ? Q() : e), H) || ((H = e), X(e, t));
}
function en() {
    (B = null), (V = 0), (H = []), null != r && (r.destroy(), (r = null));
}
function er(e) {
    var t, n;
    let { query: i, queryMode: a } = e,
        o = i.trim();
    if (null == r) return !1;
    if (Z !== a) {
        r.setResultTypes(null != a ? [a] : M), r.setLimit(null != a ? j : D);
        let e = null != (t = I.Z.getGuildId()) ? t : void 0;
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
    if ((Z = a) === u.h8.USER) {
        let e = null != (n = I.Z.getGuildId()) ? n : null;
        r.search(o, e);
    } else r.search(o, void 0);
}
function ei(e) {
    k = e.selectedIndex;
}
function ea() {
    if (U) return !1;
    (U = !0), l.K.set(w, !0);
}
class eo extends (i = s.ZP.PersistedStore) {
    initialize(e) {
        var t;
        this.waitFor(p.Z, m.default, h.Z, g.Z, E.ZP, b.ZP, y.Z, O.Z, v.ZP, S.Z, I.Z, _.Z, T.ZP),
            this.syncWith([_.Z], () => !0),
            (U = l.K.get(w) || !1),
            (Y = null != (t = null == e ? void 0 : e.channelHistory) ? t : []);
    }
    getState() {
        return { channelHistory: Y };
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
        return G && n;
    }
    getFrequentGuilds() {
        return null != r ? r.queryGuilds("", 100) : null;
    }
    getFrequentGuildsLength() {
        return null != r ? r.queryGuilds("", 100).length : 0;
    }
    getChannelHistory() {
        return Y;
    }
    getLastShowTimestamp() {
        return W;
    }
    getProps() {
        return {
            theme: _.Z.theme,
            query: null != r ? r.query : "",
            queryMode: Z,
            results: F,
            selectedIndex: k,
            seenTutorial: U,
            maxQueryLength: V,
        };
    }
}
R(eo, "displayName", "QuickSwitcherStore"), R(eo, "persistKey", "QuickSwitcherStore");
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
