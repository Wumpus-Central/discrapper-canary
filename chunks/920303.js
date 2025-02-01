let i;
n.d(t, {
    I: () => v,
    Z: () => F
}),
    n(47120);
var r,
    a = n(392711),
    s = n.n(a),
    o = n(683860),
    l = n(442837),
    u = n(570140),
    c = n(882252),
    d = n(228392),
    f = n(131704),
    _ = n(592125),
    p = n(306680),
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
    y = !1,
    I = !0,
    T = !1,
    b = !1,
    S = null,
    A = o.z.LATEST_ACTIVITY,
    N = [],
    C = 0;
function R() {
    (y = !1), (I = !0), (T = !1), (b = !1), (S = null), (A = o.z.LATEST_ACTIVITY), (i = new Set()), (C = 0), (N = []);
}
function O(e, t) {
    return t === o.z.LATEST_ACTIVITY ? p.ZP.lastMessageId(e.id) : e.id;
}
function D(e) {
    (e.channelId === S && e.sortOrder === A && (0, h.OL)(e.tagFilter, i)) || R(), (S = e.channelId), (A = e.sortOrder), (i = e.tagFilter instanceof Set ? e.tagFilter : new Set(e.tagFilter)), (y = !0), (I = !1);
}
function x(e) {
    if (e.channelId !== S || e.sortOrder !== A || !(0, h.OL)(e.tagFilter, i)) return !1;
    let t = e.threads.filter((e) => f.AW.has(e.type)).map((e) => e.id);
    N = N.concat(t);
    let n = _.Z.getChannel(S);
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
        P(),
        (T = e.hasMore),
        (C = e.offset + v),
        (y = !1),
        (I = !1);
}
function L(e) {
    return (null == S || null == e.channelId || S === e.channelId) && P();
}
function P() {
    if (null == S) return !1;
    let e = !T,
        t = _.Z.getChannel(N[N.length - 1]),
        n = null == t ? null : O(t, A);
    N = s()(_.Z.getAllThreadsForParent(S))
        .filter((e) => e.isArchivedThread())
        .filter((t) => {
            var r;
            if (0 !== i.size && (null === (r = t.appliedTags) || void 0 === r ? void 0 : r.some((e) => i.has(e))) !== !0) return !1;
            if (e || null == n) return !0;
            {
                let e = null == t ? null : O(t, A);
                return null != e && m.default.compare(e, n) >= 0;
            }
        })
        .sort((e, t) => m.default.compare(O(e, A), O(t, A)))
        .map((e) => e.id)
        .reverse()
        .value();
}
function w(e) {
    if (e.channelId !== S || e.sortOrder !== A || !(0, h.OL)(e.tagFilter, i)) return !1;
    (y = !1), (b = !0), (I = !1);
}
function M(e) {
    if (e.channel.id !== S) return !1;
    R();
}
function k(e) {
    if (!(N.indexOf(e) >= 0)) return !1;
    N = N.filter((t) => t !== e);
}
function U(e) {
    let { channel: t } = e;
    return k(t.id);
}
function G(e) {
    let { channel: t } = e;
    return S === t.parent_id && !!(0, c.yv)(t.id) && void k(t.id);
}
let B = [];
class Z extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(_.Z, g.Z, p.ZP);
    }
    get canLoadMore() {
        return T && !y && !b;
    }
    get nextOffset() {
        return C;
    }
    get isInitialLoad() {
        return I;
    }
    isLoading(e, t, n) {
        return S === e && A === t && (0, h.OL)(i, n) ? y : (R(), !1);
    }
    getThreads(e, t, n) {
        return S === e && A === t && (0, h.OL)(i, n) ? N : B;
    }
}
E(Z, 'displayName', 'ArchivedThreadsStore');
let F = new Z(u.Z, {
    CONNECTION_OPEN: R,
    THREAD_DELETE: U,
    THREAD_UPDATE: G,
    CHANNEL_DELETE: M,
    LOAD_ARCHIVED_THREADS: D,
    LOAD_ARCHIVED_THREADS_SUCCESS: x,
    LOAD_ARCHIVED_THREADS_FAIL: w,
    RESORT_THREADS: L
});
