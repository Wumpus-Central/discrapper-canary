(n.d(t, {
    B4: () => h,
    C6: () => g,
    CT: () => p,
    GO: () => c,
    Lf: () => k,
    SY: () => f,
    WQ: () => o,
    jw: () => d,
    lt: () => v,
}),
    n(321073),
    n(134528),
    n(947204));
var l = n(76275),
    a = n(50617),
    i = n(375708);
let s = "testing_app";
function r(e) {
    return e?.label_key === s;
}
let u = {
    assembling: a.default["9G3ZmA"],
    installing_deps: a.default.VZuRug,
    building: a.default["s+ylXP"],
    bundling: a.default.rEQlMx,
    committing: a.default.Yvyw1H,
    built: a.default.hOcVAj,
    build_error: a.default["6L9Vwt"],
    healthchecking: a.default.sz8yAj,
    awaiting_auth: a.default["orD+xo"],
    healthcheck_passed: a.default["x+sqTG"],
    healthcheck_failed: a.default.FUWbq1,
    deploying: a.default.wcXX8Z,
    preview_ready: a.default["78YNh7"],
    working: a.default.nv6pUM,
    error: a.default.j3hBoA,
};
function o(e) {
    if (null != e.labelText && "" !== e.labelText) return e.labelText;
    let t = null != e.labelKey ? u[e.labelKey] : void 0;
    return i.intl.string(t ?? a.default.nv6pUM);
}
function d(e, t) {
    return t && "running" === e.status
        ? { line: i.intl.string(a.default["abPI+A"]), live: !0 }
        : { line: null != e.durationMs ? (0, l.K)(e.durationMs) : i.intl.string(a.default["cIp+Jf"]), live: !1 };
}
function c(e) {
    let t,
        { turnActive: n = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        l = [],
        a = new Map(),
        i = new Map(),
        r = 0,
        { segmentOf: u } = x(e);
    function o(e, t, n) {
        return {
            id: e,
            kind: t,
            detail: [],
            detailDrivenBy: [],
            status: "running",
            screenshots: [],
            attachments: [],
            touched: 0,
            segment: n,
        };
    }
    function d(e, t) {
        let n = a.get(e);
        if (null != n) return n;
        let l = { taskId: e, task: o("task", "task", t), steps: [] };
        return (a.set(e, l), l);
    }
    function c(e, n, a, s) {
        if ("task" === a || "task" === n) return null != e ? d(e, s).task : (t = t ?? o("task", "task", s));
        let r = `${e ?? ""} ${n}`,
            u = i.get(r);
        if (null != u) return u;
        let c = o(n, "step", s);
        return (i.set(r, c), null != e ? d(e, s).steps.push(c) : l.push(c), c);
    }
    let f = (function (e) {
        let t = new Set();
        for (let n of e) {
            if ("node" !== n.kind || null == n.node) continue;
            let e = n.task_id;
            null != e &&
                "" !== e &&
                ("task" === n.node.node_kind || "task" === n.node.id) &&
                "cancelled" === n.node.status &&
                t.add(e);
        }
        return t;
    })(e);
    for (let [t, n] of e.entries()) {
        if (
            0 !== f.size &&
            "error" !== n.kind &&
            "terminal_error" !== n.kind &&
            null != n.task_id &&
            "" !== n.task_id &&
            f.has(n.task_id)
        )
            continue;
        let e = u[t] ?? 0;
        if ("node" === n.kind && null != n.node) {
            let t = n.node,
                l = c(n.task_id, t.id, t.node_kind ?? "step", e);
            if (
                ((l.touched = ++r),
                null != t.label_key && (l.labelKey = t.label_key),
                null != t.label_text && (l.labelText = t.label_text),
                null != t.group_label && (l.groupLabel = t.group_label),
                null != t.helper_name && (l.helperName = t.helper_name),
                null != t.helper_mark && (l.helperMark = t.helper_mark),
                null != t.todo_id && (l.todoId = t.todo_id),
                null != t.tier && (l.tier = t.tier),
                null != t.detail && ((l.detail = t.detail), (l.detailDrivenBy = t.detail.map(() => null))),
                null != t.append_detail)
            ) {
                let e = t.driven_by ?? null;
                ((l.detail = [...l.detail, ...t.append_detail]),
                    (l.detailDrivenBy = [...l.detailDrivenBy, ...t.append_detail.map(() => e)]));
            }
            (null != t.status && (l.status = t.status),
                null != t.duration && (l.durationMs = t.duration),
                null != t.screenshots && (l.screenshots = t.screenshots),
                null != t.attachments && (l.attachments = t.attachments));
            continue;
        }
        if ("error" === n.kind || "terminal_error" === n.kind) {
            let l = c(void 0, `${n.kind}-${t}`, "step", e);
            ((l.touched = ++r),
                (l.labelKey = "error"),
                (l.status = "failed"),
                null != n.message && "" !== n.message && (l.detail = [n.message]));
        }
    }
    let m = [...a.values()];
    for (let e of m) n || "running" !== e.task.status || (e.task.status = "incomplete");
    let h = l.filter((e) => e.labelKey === s);
    return {
        steps: 0 === h.length ? l : l.filter((e) => !h.includes(e)),
        controls: h,
        tasks: m,
        ...(null != t ? { turn: t } : {}),
    };
}
function f(e) {
    let t;
    for (let n of e) (null == t || n.touched > t.touched) && (t = n);
    return t;
}
function m(e) {
    return (
        "node" === e.kind &&
        null != e.node &&
        null == e.task_id &&
        ("task" === e.node.node_kind || "task" === e.node.id)
    );
}
function h(e) {
    return x(e).items;
}
function x(e) {
    let t = [],
        n = [],
        l = null,
        a = null,
        i = 0;
    for (let [u, o] of e.entries()) {
        var s;
        let e = o.segment;
        if (
            (n.push(e ?? i),
            "thinking" === o.kind ||
                ((null == (s = o).task_id || "" === s.task_id) &&
                    ("error" === s.kind ||
                        "terminal_error" === s.kind ||
                        (!("node" !== s.kind || null == s.node || m(s)) && !r(s.node)))))
        ) {
            l = null;
            continue;
        }
        if ("todos" === o.kind) {
            if (null != o.task_id && "" !== o.task_id) continue;
            let n = o.items ?? [];
            if (0 === n.length) continue;
            null != a
                ? (a.todos = n)
                : ((a = { type: "todos", key: `todos-${u}`, segment: e ?? i, todos: n }), t.push(a));
            continue;
        }
        if ("assistant_delta" !== o.kind || (null != o.task_id && "" !== o.task_id)) continue;
        let d = o.message ?? "";
        if ("" !== d)
            if (null == l) {
                i++;
                let a = e ?? i;
                ((n[u] = a), (l = { type: "message", key: `message-${u}`, segment: a, content: d }), t.push(l));
            } else l.content = d;
        !0 === o.message_finished && (l = null);
    }
    return { items: t, segmentOf: n };
}
function g(e) {
    let { turnActive: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { items: n } = x(e),
        l = c(e, { turnActive: t }),
        a = (function (e) {
            let t = new Map();
            for (let n of e)
                "segment_settled" === n.kind &&
                    (null == n.task_id || "" === n.task_id) &&
                    null != n.segment &&
                    null != n.duration &&
                    t.set(n.segment, n.duration);
            return t;
        })(e),
        i = new Map();
    for (let e of n) "message" === e.type && i.set(e.segment, e);
    let s = new Set();
    for (let e of l.steps) s.add(e.segment);
    for (let e of l.controls) s.add(e.segment);
    for (let e of l.tasks) s.add(e.task.segment);
    let r = n.find((e) => "todos" === e.type)?.segment,
        u = Math.max(0, ...i.keys(), ...s, ...(null != r ? [r] : [])),
        o = [];
    for (let e = 0; e <= u; e++) {
        let t = i.get(e),
            n = s.has(e),
            l = r === e;
        (null != t || n || l) &&
            o.push({
                key: t?.key ?? `work-${e}`,
                index: e,
                ...(null != t ? { prose: t } : {}),
                hasWork: n,
                hasTodos: l,
                ...(a.has(e) ? { durationMs: a.get(e) } : {}),
            });
    }
    return o;
}
function p(e, t) {
    let { turnActive: n } = t,
        l = e.filter((e) => e.hasWork || e.hasTodos).at(-1)?.index,
        a = e.at(-1)?.index,
        i = n && null != l && l === a ? l : void 0;
    return { ...(null != l ? { lastWork: l } : {}), ...(null != i ? { open: i } : {}) };
}
function k(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (null != n) {
            if ("assistant_delta" === n.kind && null != n.message && "" !== n.message) return !0;
            if (
                !(m(n) || ("node" === n.kind && r(n.node))) &&
                ("node" === n.kind || "error" === n.kind || "terminal_error" === n.kind)
            )
                break;
        }
    }
    return !1;
}
function v(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (n?.kind === "todos" && (null == n.task_id || "" === n.task_id) && null != n.items && n.items.length > 0)
            return n.items;
    }
    return null;
}
