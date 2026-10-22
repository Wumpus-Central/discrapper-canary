n.d(t, { A: () => E });
var s = n(17928),
    r = n(73153);
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
            let s = (t + n) >> 1,
                r = this.keyOf(this.items[s]);
            if (r === e) return s;
            r < e ? (t = s + 1) : (n = s - 1);
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
class u extends s.Ay.Store {
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
    let s = d.get(e);
    (null == s && ((s = new Map()), d.set(e, s)), s.set(t, n));
}
function _(e) {
    let t,
        { projectId: n, log: s } = e,
        r = (null == (t = l.get(n)) && ((t = new o(p)), l.set(n, t)), t);
    if (null != s.seq && -1 !== r.indexOfSeq(s.seq)) return !1;
    (r.insert({ key: ++a, log: s }), r.trim(500));
}
function f(e) {
    let { projectId: t, scope: n, status: s, count: r, truncated: o } = e;
    if ("failed" === s) {
        let e = d.get(t)?.get(n);
        h(t, n, { status: "failed", truncated: e?.truncated ?? !1, count: e?.count ?? 0 });
        return;
    }
    h(t, n, { status: "loaded", truncated: o, count: r });
}
let g = new u(r.h, {
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
    E = 221552 == n.j ? g : null;
