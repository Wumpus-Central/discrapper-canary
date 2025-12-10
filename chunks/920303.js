let r;
n.d(t, {
    I: () => y,
    Z: () => V,
}),
    n(388685),
    n(642613),
    n(583741);
var i,
    a = n(392711),
    o = n.n(a),
    s = n(697988),
    l = n(683860),
    c = n(843991),
    u = n(442837),
    d = n(570140),
    f = n(882252),
    p = n(228392),
    _ = n(131704),
    m = n(592125),
    h = n(306680),
    g = n(709054),
    E = n(569471);
function b(e, t, n) {
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
let y = 25,
    O = !1,
    v = !0,
    S = !1,
    I = !1,
    T = null,
    C = l.z.LATEST_ACTIVITY,
    A = [],
    N = 0,
    P = s.z.MATCH_SOME;
function R() {
    (O = !1),
        (v = !0),
        (S = !1),
        (I = !1),
        (T = null),
        (C = l.z.LATEST_ACTIVITY),
        (r = new Set()),
        (N = 0),
        (A = []),
        (P = s.z.MATCH_SOME);
}
function D(e, t) {
    return t === l.z.LATEST_ACTIVITY ? h.ZP.lastMessageId(e.id) : e.id;
}
function w(e) {
    (e.channelId === T && e.sortOrder === C && (0, c.O)(e.tagFilter, r) && e.tagSetting === P) || R(),
        (T = e.channelId),
        (C = e.sortOrder),
        (r = e.tagFilter instanceof Set ? e.tagFilter : new Set(e.tagFilter)),
        (P = e.tagSetting),
        (O = !0),
        (v = !1);
}
function x(e) {
    if (e.channelId !== T || e.sortOrder !== C || !(0, c.O)(e.tagFilter, r) || e.tagSetting !== P) return !1;
    let t = e.threads.filter((e) => _.AW.has(e.type)).map((e) => e.id);
    A = A.concat(t);
    let n = m.Z.getChannel(T);
    null != n &&
        n.isForumLikeChannel() &&
        (0, p.Hr)({
            guildId: n.guild_id,
            channelId: n.id,
            numArchivedThreads: A.length,
            hasMoreThreads: e.hasMore,
            filterTagIds: Array.from(e.tagFilter),
            sortOrder: e.sortOrder,
        }),
        j(),
        (S = e.hasMore),
        (N = e.offset + y),
        (O = !1),
        (v = !1);
}
function L(e) {
    return (null == T || null == e.channelId || T === e.channelId) && j();
}
function j() {
    if (null == T) return !1;
    let e = !S,
        t = m.Z.getChannel(A[A.length - 1]),
        n = null == t ? null : D(t, C);
    A = o()(m.Z.getAllThreadsForParent(T))
        .filter((e) => e.isArchivedThread())
        .filter((t) => {
            if (0 !== r.size) {
                var i, a;
                if (P === s.z.MATCH_SOME) {
                    if ((null == (i = t.appliedTags) ? void 0 : i.some((e) => r.has(e))) !== !0) return !1;
                } else if (P === s.z.MATCH_ALL) {
                    for (let e of r.values())
                        if ((null == (a = t.appliedTags) ? void 0 : a.includes(e)) !== !0) return !1;
                }
            }
            if (e || null == n) return !0;
            {
                let e = null == t ? null : D(t, C);
                return null != e && g.default.compare(e, n) >= 0;
            }
        })
        .sort((e, t) => g.default.compare(D(e, C), D(t, C)))
        .map((e) => e.id)
        .reverse()
        .value();
}
function M(e) {
    if (e.channelId !== T || e.sortOrder !== C || !(0, c.O)(e.tagFilter, r) || e.tagSetting !== P) return !1;
    (O = !1), (I = !0), (v = !1);
}
function k(e) {
    if (e.channel.id !== T) return !1;
    R();
}
function U(e) {
    if (!(A.indexOf(e) >= 0)) return !1;
    A = A.filter((t) => t !== e);
}
function G(e) {
    let { channel: t } = e;
    return U(t.id);
}
function Z(e) {
    let { channel: t } = e;
    return T === t.parent_id && !!(0, f.yv)(t.id) && void U(t.id);
}
let B = [];
class F extends (i = u.ZP.Store) {
    initialize() {
        this.waitFor(m.Z, E.Z, h.ZP);
    }
    get canLoadMore() {
        return S && !O && !I;
    }
    get nextOffset() {
        return N;
    }
    get isInitialLoad() {
        return v;
    }
    isLoading(e, t, n, i) {
        return T === e && C === t && (0, c.O)(r, n) && P === i ? O : (R(), !1);
    }
    getThreads(e, t, n, i) {
        return T === e && C === t && (0, c.O)(r, n) && P === i ? A : B;
    }
}
b(F, "displayName", "ArchivedThreadsStore");
let V = new F(d.Z, {
    CONNECTION_OPEN: R,
    THREAD_DELETE: G,
    THREAD_UPDATE: Z,
    CHANNEL_DELETE: k,
    LOAD_ARCHIVED_THREADS: w,
    LOAD_ARCHIVED_THREADS_SUCCESS: x,
    LOAD_ARCHIVED_THREADS_FAIL: M,
    RESORT_THREADS: L,
});
