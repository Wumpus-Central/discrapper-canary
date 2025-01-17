let i;
r.d(n, {
    I: function () {
        return T;
    }
});
var a,
    s = r(47120);
var o = r(392711),
    l = r.n(o),
    u = r(683860),
    c = r(442837),
    d = r(570140),
    f = r(882252),
    _ = r(228392),
    h = r(131704),
    p = r(592125),
    m = r(306680),
    g = r(823379),
    E = r(709054),
    v = r(569471);
function I(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let T = 25,
    b = !1,
    y = !0,
    S = !1,
    A = !1,
    N = null,
    C = u.z.LATEST_ACTIVITY,
    R = [],
    O = 0;
function D() {
    (b = !1), (y = !0), (S = !1), (A = !1), (N = null), (C = u.z.LATEST_ACTIVITY), (i = new Set()), (O = 0), (R = []);
}
function L(e, n) {
    return n === u.z.LATEST_ACTIVITY ? m.ZP.lastMessageId(e.id) : e.id;
}
function x(e) {
    (e.channelId !== N || e.sortOrder !== C || !(0, g.OL)(e.tagFilter, i)) && D(), (N = e.channelId), (C = e.sortOrder), (i = e.tagFilter instanceof Set ? e.tagFilter : new Set(e.tagFilter)), (b = !0), (y = !1);
}
function w(e) {
    if (e.channelId !== N || e.sortOrder !== C || !(0, g.OL)(e.tagFilter, i)) return !1;
    let n = e.threads.filter((e) => h.AW.has(e.type)).map((e) => e.id);
    R = R.concat(n);
    let r = p.Z.getChannel(N);
    null != r &&
        r.isForumLikeChannel() &&
        (0, _.Hr)({
            guildId: r.guild_id,
            channelId: r.id,
            numArchivedThreads: R.length,
            hasMoreThreads: e.hasMore,
            filterTagIds: Array.from(e.tagFilter),
            sortOrder: e.sortOrder
        }),
        M(),
        (S = e.hasMore),
        (O = e.offset + T),
        (b = !1),
        (y = !1);
}
function P(e) {
    return (null == N || null == e.channelId || N === e.channelId) && M();
}
function M() {
    if (null == N) return !1;
    let e = !S,
        n = p.Z.getChannel(R[R.length - 1]),
        r = null == n ? null : L(n, C);
    R = l()(p.Z.getAllThreadsForParent(N))
        .filter((e) => e.isArchivedThread())
        .filter((n) => {
            var a;
            if (0 !== i.size && (null === (a = n.appliedTags) || void 0 === a ? void 0 : a.some((e) => i.has(e))) !== !0) return !1;
            if (e || null == r) return !0;
            {
                let e = null == n ? null : L(n, C);
                return null != e && E.default.compare(e, r) >= 0;
            }
        })
        .sort((e, n) => E.default.compare(L(e, C), L(n, C)))
        .map((e) => e.id)
        .reverse()
        .value();
}
function k(e) {
    if (e.channelId !== N || e.sortOrder !== C || !(0, g.OL)(e.tagFilter, i)) return !1;
    (b = !1), (A = !0), (y = !1);
}
function U(e) {
    if (e.channel.id !== N) return !1;
    D();
}
function B(e) {
    if (!(R.indexOf(e) >= 0)) return !1;
    R = R.filter((n) => n !== e);
}
function G(e) {
    let { channel: n } = e;
    return B(n.id);
}
function Z(e) {
    let { channel: n } = e;
    return N === n.parent_id && !!(0, f.yv)(n.id) && void B(n.id);
}
let F = [];
class V extends (a = c.ZP.Store) {
    initialize() {
        this.waitFor(p.Z, v.Z, m.ZP);
    }
    get canLoadMore() {
        return S && !b && !A;
    }
    get nextOffset() {
        return O;
    }
    get isInitialLoad() {
        return y;
    }
    isLoading(e, n, r) {
        return N === e && C === n && (0, g.OL)(i, r) ? b : (D(), !1);
    }
    getThreads(e, n, r) {
        return N === e && C === n && (0, g.OL)(i, r) ? R : F;
    }
}
I(V, 'displayName', 'ArchivedThreadsStore'),
    (n.Z = new V(d.Z, {
        CONNECTION_OPEN: D,
        THREAD_DELETE: G,
        THREAD_UPDATE: Z,
        CHANNEL_DELETE: U,
        LOAD_ARCHIVED_THREADS: x,
        LOAD_ARCHIVED_THREADS_SUCCESS: w,
        LOAD_ARCHIVED_THREADS_FAIL: k,
        RESORT_THREADS: P
    }));
