let r;
n.d(t, {
    I: () => y,
    Z: () => Z
}),
    n(388685),
    n(642613),
    n(583741);
var i,
    a = n(392711),
    o = n.n(a),
    s = n(697988),
    l = n(683860),
    c = n(442837),
    u = n(570140),
    d = n(882252),
    f = n(228392),
    _ = n(131704),
    p = n(592125),
    h = n(306680),
    m = n(823379),
    g = n(709054),
    E = n(569471);
function b(e, t, n) {
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
let y = 25,
    O = !1,
    v = !0,
    I = !1,
    S = !1,
    T = null,
    A = l.z.LATEST_ACTIVITY,
    N = [],
    C = 0,
    R = s.z.MATCH_SOME;
function P() {
    (O = !1), (v = !0), (I = !1), (S = !1), (T = null), (A = l.z.LATEST_ACTIVITY), (r = new Set()), (C = 0), (N = []), (R = s.z.MATCH_SOME);
}
function w(e, t) {
    return t === l.z.LATEST_ACTIVITY ? h.ZP.lastMessageId(e.id) : e.id;
}
function D(e) {
    (e.channelId === T && e.sortOrder === A && (0, m.OL)(e.tagFilter, r) && e.tagSetting === R) || P(), (T = e.channelId), (A = e.sortOrder), (r = e.tagFilter instanceof Set ? e.tagFilter : new Set(e.tagFilter)), (R = e.tagSetting), (O = !0), (v = !1);
}
function L(e) {
    if (e.channelId !== T || e.sortOrder !== A || !(0, m.OL)(e.tagFilter, r) || e.tagSetting !== R) return !1;
    let t = e.threads.filter((e) => _.AW.has(e.type)).map((e) => e.id);
    N = N.concat(t);
    let n = p.Z.getChannel(T);
    null != n &&
        n.isForumLikeChannel() &&
        (0, f.Hr)({
            guildId: n.guild_id,
            channelId: n.id,
            numArchivedThreads: N.length,
            hasMoreThreads: e.hasMore,
            filterTagIds: Array.from(e.tagFilter),
            sortOrder: e.sortOrder
        }),
        M(),
        (I = e.hasMore),
        (C = e.offset + y),
        (O = !1),
        (v = !1);
}
function x(e) {
    return (null == T || null == e.channelId || T === e.channelId) && M();
}
function M() {
    if (null == T) return !1;
    let e = !I,
        t = p.Z.getChannel(N[N.length - 1]),
        n = null == t ? null : w(t, A);
    N = o()(p.Z.getAllThreadsForParent(T))
        .filter((e) => e.isArchivedThread())
        .filter((t) => {
            if (0 !== r.size) {
                var i, a;
                if (R === s.z.MATCH_SOME) {
                    if ((null == (i = t.appliedTags) ? void 0 : i.some((e) => r.has(e))) !== !0) return !1;
                } else if (R === s.z.MATCH_ALL) {
                    for (let e of r.values()) if ((null == (a = t.appliedTags) ? void 0 : a.includes(e)) !== !0) return !1;
                }
            }
            if (e || null == n) return !0;
            {
                let e = null == t ? null : w(t, A);
                return null != e && g.default.compare(e, n) >= 0;
            }
        })
        .sort((e, t) => g.default.compare(w(e, A), w(t, A)))
        .map((e) => e.id)
        .reverse()
        .value();
}
function k(e) {
    if (e.channelId !== T || e.sortOrder !== A || !(0, m.OL)(e.tagFilter, r) || e.tagSetting !== R) return !1;
    (O = !1), (S = !0), (v = !1);
}
function j(e) {
    if (e.channel.id !== T) return !1;
    P();
}
function U(e) {
    if (!(N.indexOf(e) >= 0)) return !1;
    N = N.filter((t) => t !== e);
}
function G(e) {
    let { channel: t } = e;
    return U(t.id);
}
function B(e) {
    let { channel: t } = e;
    return T === t.parent_id && !!(0, d.yv)(t.id) && void U(t.id);
}
let V = [];
class F extends (i = c.ZP.Store) {
    initialize() {
        this.waitFor(p.Z, E.Z, h.ZP);
    }
    get canLoadMore() {
        return I && !O && !S;
    }
    get nextOffset() {
        return C;
    }
    get isInitialLoad() {
        return v;
    }
    isLoading(e, t, n, i) {
        return T === e && A === t && (0, m.OL)(r, n) && R === i ? O : (P(), !1);
    }
    getThreads(e, t, n, i) {
        return T === e && A === t && (0, m.OL)(r, n) && R === i ? N : V;
    }
}
b(F, 'displayName', 'ArchivedThreadsStore');
let Z = new F(u.Z, {
    CONNECTION_OPEN: P,
    THREAD_DELETE: G,
    THREAD_UPDATE: B,
    CHANNEL_DELETE: j,
    LOAD_ARCHIVED_THREADS: D,
    LOAD_ARCHIVED_THREADS_SUCCESS: L,
    LOAD_ARCHIVED_THREADS_FAIL: k,
    RESORT_THREADS: x
});
