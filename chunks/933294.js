n.d(t, { A: () => S });
var r = n(17928),
    s = n(73153);
class o {
    seqOf;
    items = [];
    cached = null;
    constructor(e) {
        this.seqOf = e;
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
    trim(e) {
        this.items.length <= e || (this.items.splice(0, this.items.length - e), (this.cached = null));
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
    c = { status: "idle", truncated: !1, count: 0 },
    d = new Map();
class u extends r.Ay.Store {
    getLogs(e) {
        return l.get(e)?.snapshot() ?? i;
    }
    getHistoryState(e, t) {
        return d.get(e)?.get(t) ?? c;
    }
}
function p(e) {
    return e.log.seq;
}
function h(e, t, n) {
    let r = d.get(e);
    (null == r && ((r = new Map()), d.set(e, r)), r.set(t, n));
}
function _(e) {
    let t,
        { projectId: n, log: r } = e,
        s = (null == (t = l.get(n)) && ((t = new o(p)), l.set(n, t)), t);
    if (null != r.seq && -1 !== s.indexOfSeq(r.seq)) return !1;
    (s.insert({ key: ++a, log: r }), s.trim(500));
}
function f(e) {
    let { projectId: t, scope: n, status: r, count: s, truncated: o } = e;
    if ("failed" === r) {
        let e = d.get(t)?.get(n);
        h(t, n, { status: "failed", truncated: e?.truncated ?? !1, count: e?.count ?? 0 });
        return;
    }
    h(t, n, { status: "loaded", truncated: o, count: s });
}
let g = new u(s.h, {
        LOGOUT: function () {
            if (0 === l.size && 0 === d.size) return !1;
            (l.clear(), d.clear());
        },
        CONJURE_HISTORY_LOAD_SETTLE: f,
        CONJURE_DEBUG_BACKLOG: function (e) {
            let { projectId: t, backlog: n } = e;
            for (let e of n.logs) _({ type: "CONJURE_LOG_APPEND", projectId: t, log: e });
            for (let e of n.states)
                f({
                    type: "CONJURE_HISTORY_LOAD_SETTLE",
                    projectId: t,
                    scope: e.scope,
                    status: e.status,
                    count: e.count,
                    truncated: !0 === e.truncated,
                });
        },
        CONJURE_LOG_APPEND: _,
        CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
            let { projectId: t } = e;
            (l.delete(t), d.delete(t));
        },
    }),
    S = 221552 == n.j ? g : null;
