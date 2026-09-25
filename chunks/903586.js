(n.d(t, { B4: () => d, C6: () => m, CT: () => f, GO: () => s, Lf: () => h, SY: () => u, WQ: () => r, lt: () => x }),
    n(321073),
    n(134528),
    n(947204));
var l = n(50617),
    a = n(375708);
let i = {
    assembling: l.default["9G3ZmA"],
    installing_deps: l.default.VZuRug,
    building: l.default["s+ylXP"],
    bundling: l.default.rEQlMx,
    committing: l.default.Yvyw1H,
    built: l.default.hOcVAj,
    build_error: l.default["6L9Vwt"],
    healthchecking: l.default.sz8yAj,
    awaiting_auth: l.default["orD+xo"],
    healthcheck_passed: l.default["x+sqTG"],
    healthcheck_failed: l.default.FUWbq1,
    deploying: l.default.wcXX8Z,
    preview_ready: l.default["78YNh7"],
    working: l.default.nv6pUM,
    error: l.default.j3hBoA,
};
function r(e) {
    if (null != e.labelText && "" !== e.labelText) return e.labelText;
    let t = null != e.labelKey ? i[e.labelKey] : void 0;
    return a.intl.string(t ?? l.default.nv6pUM);
}
function s(e) {
    let t,
        { turnActive: n = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        l = [],
        a = new Map(),
        i = new Map(),
        r = 0,
        { segmentOf: s } = c(e);
    function u(e, t, n) {
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
    function o(e, t) {
        let n = a.get(e);
        if (null != n) return n;
        let l = { taskId: e, task: u("task", "task", t), steps: [] };
        return (a.set(e, l), l);
    }
    function d(e, n, a, r) {
        if ("task" === a || "task" === n) return null != e ? o(e, r).task : (t = t ?? u("task", "task", r));
        let s = `${e ?? ""} ${n}`,
            d = i.get(s);
        if (null != d) return d;
        let c = u(n, "step", r);
        return (i.set(s, c), null != e ? o(e, r).steps.push(c) : l.push(c), c);
    }
    let m = (function (e) {
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
            0 !== m.size &&
            "error" !== n.kind &&
            "terminal_error" !== n.kind &&
            null != n.task_id &&
            "" !== n.task_id &&
            m.has(n.task_id)
        )
            continue;
        let e = s[t] ?? 0;
        if ("node" === n.kind && null != n.node) {
            let t = n.node,
                l = d(n.task_id, t.id, t.node_kind ?? "step", e);
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
            let l = d(void 0, `${n.kind}-${t}`, "step", e);
            ((l.touched = ++r),
                (l.labelKey = "error"),
                (l.status = "failed"),
                null != n.message && "" !== n.message && (l.detail = [n.message]));
        }
    }
    let f = [...a.values()];
    for (let e of f) n || "running" !== e.task.status || (e.task.status = "incomplete");
    return { steps: l, tasks: f, ...(null != t ? { turn: t } : {}) };
}
function u(e) {
    let t;
    for (let n of e) (null == t || n.touched > t.touched) && (t = n);
    return t;
}
function o(e) {
    return (
        "node" === e.kind &&
        null != e.node &&
        null == e.task_id &&
        ("task" === e.node.node_kind || "task" === e.node.id)
    );
}
function d(e) {
    return c(e).items;
}
function c(e) {
    let t = [],
        n = [],
        l = null,
        a = null,
        i = 0;
    for (let [s, u] of e.entries()) {
        var r;
        let e = u.segment;
        if (
            (n.push(e ?? i),
            "thinking" === u.kind ||
                ((null == (r = u).task_id || "" === r.task_id) &&
                    ("error" === r.kind ||
                        "terminal_error" === r.kind ||
                        ("node" === r.kind && null != r.node && !o(r)))))
        ) {
            l = null;
            continue;
        }
        if ("todos" === u.kind) {
            if (null != u.task_id && "" !== u.task_id) continue;
            let n = u.items ?? [];
            if (0 === n.length) continue;
            null != a
                ? (a.todos = n)
                : ((a = { type: "todos", key: `todos-${s}`, segment: e ?? i, todos: n }), t.push(a));
            continue;
        }
        if ("assistant_delta" !== u.kind || (null != u.task_id && "" !== u.task_id)) continue;
        let d = u.message ?? "";
        if ("" !== d)
            if (null == l) {
                i++;
                let a = e ?? i;
                ((n[s] = a), (l = { type: "message", key: `message-${s}`, segment: a, content: d }), t.push(l));
            } else l.content = d;
        !0 === u.message_finished && (l = null);
    }
    return { items: t, segmentOf: n };
}
function m(e) {
    let { turnActive: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { items: n } = c(e),
        l = s(e, { turnActive: t }),
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
    let r = new Set();
    for (let e of l.steps) r.add(e.segment);
    for (let e of l.tasks) r.add(e.task.segment);
    let u = n.find((e) => "todos" === e.type)?.segment,
        o = Math.max(0, ...i.keys(), ...r, ...(null != u ? [u] : [])),
        d = [];
    for (let e = 0; e <= o; e++) {
        let t = i.get(e),
            n = r.has(e),
            l = u === e;
        (null != t || n || l) &&
            d.push({
                key: t?.key ?? `work-${e}`,
                index: e,
                ...(null != t ? { prose: t } : {}),
                hasWork: n,
                hasTodos: l,
                ...(a.has(e) ? { durationMs: a.get(e) } : {}),
            });
    }
    return d;
}
function f(e, t) {
    let { turnActive: n } = t,
        l = e.filter((e) => e.hasWork || e.hasTodos).at(-1)?.index,
        a = e.at(-1)?.index,
        i = n && null != l && l === a ? l : void 0;
    return { ...(null != l ? { lastWork: l } : {}), ...(null != i ? { open: i } : {}) };
}
function h(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (null != n) {
            if ("assistant_delta" === n.kind && null != n.message && "" !== n.message) return !0;
            if (!o(n) && ("node" === n.kind || "error" === n.kind || "terminal_error" === n.kind)) break;
        }
    }
    return !1;
}
function x(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (n?.kind === "todos" && (null == n.task_id || "" === n.task_id) && null != n.items && n.items.length > 0)
            return n.items;
    }
    return null;
}
