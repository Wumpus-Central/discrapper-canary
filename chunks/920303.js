let i;
r.d(n, {
    I: function () {
        return b;
    }
});
var a,
    o = r(47120);
var s = r(392711),
    l = r.n(s),
    u = r(683860),
    c = r(442837),
    d = r(570140),
    f = r(882252),
    p = r(228392),
    h = r(131704),
    _ = r(592125),
    m = r(306680),
    g = r(823379),
    E = r(709054),
    v = r(569471);
function y(e, n, r) {
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
let b = 25,
    I = !1,
    T = !0,
    S = !1,
    A = !1,
    C = null,
    N = u.z.LATEST_ACTIVITY,
    R = [],
    O = 0;
function D() {
    (I = !1), (T = !0), (S = !1), (A = !1), (C = null), (N = u.z.LATEST_ACTIVITY), (i = new Set()), (O = 0), (R = []);
}
function x(e, n) {
    return n === u.z.LATEST_ACTIVITY ? m.ZP.lastMessageId(e.id) : e.id;
}
function L(e) {
    (e.channelId !== C || e.sortOrder !== N || !(0, g.OL)(e.tagFilter, i)) && D(), (C = e.channelId), (N = e.sortOrder), (i = e.tagFilter instanceof Set ? e.tagFilter : new Set(e.tagFilter)), (I = !0), (T = !1);
}
function w(e) {
    if (e.channelId !== C || e.sortOrder !== N || !(0, g.OL)(e.tagFilter, i)) return !1;
    let n = e.threads.filter((e) => h.AW.has(e.type)).map((e) => e.id);
    R = R.concat(n);
    let r = _.Z.getChannel(C);
    null != r &&
        r.isForumLikeChannel() &&
        (0, p.Hr)({
            guildId: r.guild_id,
            channelId: r.id,
            numArchivedThreads: R.length,
            hasMoreThreads: e.hasMore,
            filterTagIds: Array.from(e.tagFilter),
            sortOrder: e.sortOrder
        }),
        M(),
        (S = e.hasMore),
        (O = e.offset + b),
        (I = !1),
        (T = !1);
}
function P(e) {
    return (null == C || null == e.channelId || C === e.channelId) && M();
}
function M() {
    if (null == C) return !1;
    let e = !S,
        n = _.Z.getChannel(R[R.length - 1]),
        r = null == n ? null : x(n, N);
    R = l()(_.Z.getAllThreadsForParent(C))
        .filter((e) => e.isArchivedThread())
        .filter((n) => {
            var a;
            if (0 !== i.size && (null === (a = n.appliedTags) || void 0 === a ? void 0 : a.some((e) => i.has(e))) !== !0) return !1;
            if (e || null == r) return !0;
            {
                let e = null == n ? null : x(n, N);
                return null != e && E.default.compare(e, r) >= 0;
            }
        })
        .sort((e, n) => E.default.compare(x(e, N), x(n, N)))
        .map((e) => e.id)
        .reverse()
        .value();
}
function k(e) {
    if (e.channelId !== C || e.sortOrder !== N || !(0, g.OL)(e.tagFilter, i)) return !1;
    (I = !1), (A = !0), (T = !1);
}
function U(e) {
    if (e.channel.id !== C) return !1;
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
    return C === n.parent_id && !!(0, f.yv)(n.id) && void B(n.id);
}
let F = [];
class V extends (a = c.ZP.Store) {
    initialize() {
        this.waitFor(_.Z, v.Z, m.ZP);
    }
    get canLoadMore() {
        return S && !I && !A;
    }
    get nextOffset() {
        return O;
    }
    get isInitialLoad() {
        return T;
    }
    isLoading(e, n, r) {
        return C === e && N === n && (0, g.OL)(i, r) ? I : (D(), !1);
    }
    getThreads(e, n, r) {
        return C === e && N === n && (0, g.OL)(i, r) ? R : F;
    }
}
y(V, 'displayName', 'ArchivedThreadsStore'),
    (n.Z = new V(d.Z, {
        CONNECTION_OPEN: D,
        THREAD_DELETE: G,
        THREAD_UPDATE: Z,
        CHANNEL_DELETE: U,
        LOAD_ARCHIVED_THREADS: L,
        LOAD_ARCHIVED_THREADS_SUCCESS: w,
        LOAD_ARCHIVED_THREADS_FAIL: k,
        RESORT_THREADS: P
    }));
