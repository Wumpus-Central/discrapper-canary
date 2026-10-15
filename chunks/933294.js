n.d(t, { A: () => S });
var r = n(17928),
    s = n(73153);
(n(134528), n(947204));
class o {
    seqOf;
    items = [];
    cached = null;
    constructor(e) {
        this.seqOf = e;
    }
    at(e) {
        return this.items.at(e);
    }
    findIndex(e) {
        return this.items.findIndex(e);
    }
    indexOfSeq(e) {
        let t = 0,
            n = this.items.length - 1;
        for (; t <= n;) {
            let r = (t + n) >> 1,
                s = this.keyOf(this.items[r]);
            if (s === e) return r;
            s < e ? (t = r + 1) : (n = r - 1);
        }
        return -1;
    }
    insert(e) {
        let t = this.keyOf(e),
            n = this.items.length;
        for (; n > 0 && this.keyOf(this.items[n - 1]) > t;) n--;
        (this.items.splice(n, 0, e), (this.cached = null));
    }
    replace(e, t) {
        if (this.keyOf(this.items[e]) === this.keyOf(t)) {
            ((this.items[e] = t), (this.cached = null));
            return;
        }
        (this.items.splice(e, 1), this.insert(t));
    }
    retain(e) {
        let t = this.items.filter(e);
        t.length !== this.items.length && ((this.items = t), (this.cached = null));
    }
    trim(e) {
        this.items.length <= e || (this.items.splice(0, this.items.length - e), (this.cached = null));
    }
    values() {
        return this.items;
    }
    snapshot() {
        return ((this.cached ??= this.items.slice()), this.cached);
    }
    keyOf(e) {
        return this.seqOf(e) ?? 1 / 0;
    }
}
let i = [],
    l = new Map(),
    a = 0,
    c = new Map(),
    d = { status: "idle", truncated: !1, count: 0 },
    u = new Map();
class p extends r.Ay.Store {
    getLogs(e) {
        return l.get(e)?.snapshot() ?? i;
    }
    getUnreadLogErrorCount(e) {
        let t = l.get(e);
        if (null == t) return 0;
        let n = c.get(e) ?? 0,
            r = 0;
        for (let e of t.values()) e.key > n && "error" === e.log.level && !0 !== e.log.historical && (r += 1);
        return r;
    }
    getHistoryState(e, t) {
        return u.get(e)?.get(t) ?? d;
    }
}
function h(e) {
    return e.log.seq;
}
function f(e, t, n) {
    let r = u.get(e);
    (null == r && ((r = new Map()), u.set(e, r)), r.set(t, n));
}
function _(e) {
    let t,
        { projectId: n, log: r } = e,
        s = (null == (t = l.get(n)) && ((t = new o(h)), l.set(n, t)), t);
    if (null != r.seq && -1 !== s.indexOfSeq(r.seq)) return !1;
    (s.insert({ key: ++a, log: r }), s.trim(500));
}
function g(e) {
    let { projectId: t, scope: n, status: r, count: s, truncated: o } = e;
    if ("failed" === r) {
        let e = u.get(t)?.get(n);
        f(t, n, { status: "failed", truncated: e?.truncated ?? !1, count: e?.count ?? 0 });
        return;
    }
    f(t, n, { status: "loaded", truncated: o, count: s });
}
let E = new p(s.h, {
        LOGOUT: function () {
            if (0 === l.size && 0 === c.size && 0 === u.size) return !1;
            (l.clear(), c.clear(), u.clear());
        },
        CONJURE_HISTORY_LOAD_SETTLE: g,
        CONJURE_DEBUG_BACKLOG: function (e) {
            let { projectId: t, backlog: n } = e;
            for (let e of n.logs) _({ type: "CONJURE_LOG_APPEND", projectId: t, log: e });
            for (let e of n.states)
                g({
                    type: "CONJURE_HISTORY_LOAD_SETTLE",
                    projectId: t,
                    scope: e.scope,
                    status: e.status,
                    count: e.count,
                    truncated: !0 === e.truncated,
                });
        },
        CONJURE_LOG_APPEND: _,
        CONJURE_LOGS_SEEN: function (e) {
            let { projectId: t } = e,
                n = 0;
            for (let e of l.get(t)?.values() ?? i) n = Math.max(n, e.key);
            if ((c.get(t) ?? 0) >= n) return !1;
            c.set(t, n);
        },
        CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
            let { projectId: t } = e;
            (l.delete(t), c.delete(t), u.delete(t));
        },
    }),
    S = 221552 == n.j ? E : null;
