let r;
n.d(t, {
    I: () => v,
    Z: () => Z
}),
    n(47120),
    n(230036),
    n(978209);
var i,
    o = n(392711),
    a = n.n(o),
    s = n(683860),
    l = n(442837),
    c = n(570140),
    u = n(882252),
    d = n(228392),
    f = n(131704),
    p = n(592125),
    _ = n(306680),
    h = n(823379),
    m = n(709054),
    g = n(569471);
function E(e, t, n) {
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
let v = 25,
    b = !1,
    y = !0,
    O = !1,
    S = !1,
    I = null,
    T = s.z.LATEST_ACTIVITY,
    N = [],
    A = 0;
function C() {
    (b = !1), (y = !0), (O = !1), (S = !1), (I = null), (T = s.z.LATEST_ACTIVITY), (r = new Set()), (A = 0), (N = []);
}
function R(e, t) {
    return t === s.z.LATEST_ACTIVITY ? _.ZP.lastMessageId(e.id) : e.id;
}
function P(e) {
    (e.channelId === I && e.sortOrder === T && (0, h.OL)(e.tagFilter, r)) || C(), (I = e.channelId), (T = e.sortOrder), (r = e.tagFilter instanceof Set ? e.tagFilter : new Set(e.tagFilter)), (b = !0), (y = !1);
}
function w(e) {
    if (e.channelId !== I || e.sortOrder !== T || !(0, h.OL)(e.tagFilter, r)) return !1;
    let t = e.threads.filter((e) => f.AW.has(e.type)).map((e) => e.id);
    N = N.concat(t);
    let n = p.Z.getChannel(I);
    null != n &&
        n.isForumLikeChannel() &&
        (0, d.Hr)({
            guildId: n.guild_id,
            channelId: n.id,
            numArchivedThreads: N.length,
            hasMoreThreads: e.hasMore,
            filterTagIds: Array.from(e.tagFilter),
            sortOrder: e.sortOrder
        }),
        x(),
        (O = e.hasMore),
        (A = e.offset + v),
        (b = !1),
        (y = !1);
}
function D(e) {
    return (null == I || null == e.channelId || I === e.channelId) && x();
}
function x() {
    if (null == I) return !1;
    let e = !O,
        t = p.Z.getChannel(N[N.length - 1]),
        n = null == t ? null : R(t, T);
    N = a()(p.Z.getAllThreadsForParent(I))
        .filter((e) => e.isArchivedThread())
        .filter((t) => {
            var i;
            if (0 !== r.size && (null === (i = t.appliedTags) || void 0 === i ? void 0 : i.some((e) => r.has(e))) !== !0) return !1;
            if (e || null == n) return !0;
            {
                let e = null == t ? null : R(t, T);
                return null != e && m.default.compare(e, n) >= 0;
            }
        })
        .sort((e, t) => m.default.compare(R(e, T), R(t, T)))
        .map((e) => e.id)
        .reverse()
        .value();
}
function L(e) {
    if (e.channelId !== I || e.sortOrder !== T || !(0, h.OL)(e.tagFilter, r)) return !1;
    (b = !1), (S = !0), (y = !1);
}
function M(e) {
    if (e.channel.id !== I) return !1;
    C();
}
function k(e) {
    if (!(N.indexOf(e) >= 0)) return !1;
    N = N.filter((t) => t !== e);
}
function j(e) {
    let { channel: t } = e;
    return k(t.id);
}
function U(e) {
    let { channel: t } = e;
    return I === t.parent_id && !!(0, u.yv)(t.id) && void k(t.id);
}
let G = [];
class B extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(p.Z, g.Z, _.ZP);
    }
    get canLoadMore() {
        return O && !b && !S;
    }
    get nextOffset() {
        return A;
    }
    get isInitialLoad() {
        return y;
    }
    isLoading(e, t, n) {
        return I === e && T === t && (0, h.OL)(r, n) ? b : (C(), !1);
    }
    getThreads(e, t, n) {
        return I === e && T === t && (0, h.OL)(r, n) ? N : G;
    }
}
E(B, 'displayName', 'ArchivedThreadsStore');
let Z = new B(c.Z, {
    CONNECTION_OPEN: C,
    THREAD_DELETE: j,
    THREAD_UPDATE: U,
    CHANNEL_DELETE: M,
    LOAD_ARCHIVED_THREADS: P,
    LOAD_ARCHIVED_THREADS_SUCCESS: w,
    LOAD_ARCHIVED_THREADS_FAIL: L,
    RESORT_THREADS: D
});
