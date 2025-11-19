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
    _ = n(228392),
    p = n(131704),
    h = n(592125),
    m = n(306680),
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
    I = !1,
    T = !1,
    S = null,
    A = l.z.LATEST_ACTIVITY,
    C = [],
    N = 0,
    R = s.z.MATCH_SOME;
function P() {
    (O = !1),
        (v = !0),
        (I = !1),
        (T = !1),
        (S = null),
        (A = l.z.LATEST_ACTIVITY),
        (r = new Set()),
        (N = 0),
        (C = []),
        (R = s.z.MATCH_SOME);
}
function D(e, t) {
    return t === l.z.LATEST_ACTIVITY ? m.ZP.lastMessageId(e.id) : e.id;
}
function w(e) {
    (e.channelId === S && e.sortOrder === A && (0, c.O)(e.tagFilter, r) && e.tagSetting === R) || P(),
        (S = e.channelId),
        (A = e.sortOrder),
        (r = e.tagFilter instanceof Set ? e.tagFilter : new Set(e.tagFilter)),
        (R = e.tagSetting),
        (O = !0),
        (v = !1);
}
function L(e) {
    if (e.channelId !== S || e.sortOrder !== A || !(0, c.O)(e.tagFilter, r) || e.tagSetting !== R) return !1;
    let t = e.threads.filter((e) => p.AW.has(e.type)).map((e) => e.id);
    C = C.concat(t);
    let n = h.Z.getChannel(S);
    null != n &&
        n.isForumLikeChannel() &&
        (0, _.Hr)({
            guildId: n.guild_id,
            channelId: n.id,
            numArchivedThreads: C.length,
            hasMoreThreads: e.hasMore,
            filterTagIds: Array.from(e.tagFilter),
            sortOrder: e.sortOrder,
        }),
        M(),
        (I = e.hasMore),
        (N = e.offset + y),
        (O = !1),
        (v = !1);
}
function x(e) {
    return (null == S || null == e.channelId || S === e.channelId) && M();
}
function M() {
    if (null == S) return !1;
    let e = !I,
        t = h.Z.getChannel(C[C.length - 1]),
        n = null == t ? null : D(t, A);
    C = o()(h.Z.getAllThreadsForParent(S))
        .filter((e) => e.isArchivedThread())
        .filter((t) => {
            if (0 !== r.size) {
                var i, a;
                if (R === s.z.MATCH_SOME) {
                    if ((null == (i = t.appliedTags) ? void 0 : i.some((e) => r.has(e))) !== !0) return !1;
                } else if (R === s.z.MATCH_ALL) {
                    for (let e of r.values())
                        if ((null == (a = t.appliedTags) ? void 0 : a.includes(e)) !== !0) return !1;
                }
            }
            if (e || null == n) return !0;
            {
                let e = null == t ? null : D(t, A);
                return null != e && g.default.compare(e, n) >= 0;
            }
        })
        .sort((e, t) => g.default.compare(D(e, A), D(t, A)))
        .map((e) => e.id)
        .reverse()
        .value();
}
function j(e) {
    if (e.channelId !== S || e.sortOrder !== A || !(0, c.O)(e.tagFilter, r) || e.tagSetting !== R) return !1;
    (O = !1), (T = !0), (v = !1);
}
function k(e) {
    if (e.channel.id !== S) return !1;
    P();
}
function U(e) {
    if (!(C.indexOf(e) >= 0)) return !1;
    C = C.filter((t) => t !== e);
}
function G(e) {
    let { channel: t } = e;
    return U(t.id);
}
function B(e) {
    let { channel: t } = e;
    return S === t.parent_id && !!(0, f.yv)(t.id) && void U(t.id);
}
let Z = [];
class F extends (i = u.ZP.Store) {
    initialize() {
        this.waitFor(h.Z, E.Z, m.ZP);
    }
    get canLoadMore() {
        return I && !O && !T;
    }
    get nextOffset() {
        return N;
    }
    get isInitialLoad() {
        return v;
    }
    isLoading(e, t, n, i) {
        return S === e && A === t && (0, c.O)(r, n) && R === i ? O : (P(), !1);
    }
    getThreads(e, t, n, i) {
        return S === e && A === t && (0, c.O)(r, n) && R === i ? C : Z;
    }
}
b(F, "displayName", "ArchivedThreadsStore");
let V = new F(d.Z, {
    CONNECTION_OPEN: P,
    THREAD_DELETE: G,
    THREAD_UPDATE: B,
    CHANNEL_DELETE: k,
    LOAD_ARCHIVED_THREADS: w,
    LOAD_ARCHIVED_THREADS_SUCCESS: L,
    LOAD_ARCHIVED_THREADS_FAIL: j,
    RESORT_THREADS: x,
});
