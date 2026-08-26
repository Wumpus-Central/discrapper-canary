n.d(t, { B4: () => o, C6: () => m, CT: () => h, GO: () => r, Lf: () => f, SY: () => d, WQ: () => s, lt: () => g }),
    n(321073),
    n(134528),
    n(947204);
var l = n(295813),
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
function s(e) {
    if (null != e.labelText && "" !== e.labelText) return e.labelText;
    let t = null != e.labelKey ? i[e.labelKey] : void 0;
    return a.intl.string(t ?? l.default.nv6pUM);
}
function r(e) {
    let t,
        { turnActive: n = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        l = [],
        a = new Map(),
        i = new Map(),
        s = 0,
        { segmentOf: r } = c(e);
    function d(e, t, n) {
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
    function u(e, t) {
        let n = a.get(e);
        if (null != n) return n;
        let l = { taskId: e, task: d("task", "task", t), steps: [] };
        return a.set(e, l), l;
    }
    function o(e, n, a, s) {
        if ("task" === a || "task" === n) return null != e ? u(e, s).task : (t = t ?? d("task", "task", s));
        let r = `${e ?? ""} ${n}`,
            o = i.get(r);
        if (null != o) return o;
        let c = d(n, "step", s);
        return i.set(r, c), null != e ? u(e, s).steps.push(c) : l.push(c), c;
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
        let e = r[t] ?? 0;
        if ("node" === n.kind && null != n.node) {
            let t = n.node,
                l = o(n.task_id, t.id, t.node_kind ?? "step", e);
            if (
                ((l.touched = ++s),
                null != t.label_key && (l.labelKey = t.label_key),
                null != t.label_text && (l.labelText = t.label_text),
                null != t.group_label && (l.groupLabel = t.group_label),
                null != t.helper_name && (l.helperName = t.helper_name),
                null != t.helper_mark && (l.helperMark = t.helper_mark),
                null != t.todo_id && (l.todoId = t.todo_id),
                null != t.detail && ((l.detail = t.detail), (l.detailDrivenBy = t.detail.map(() => null))),
                null != t.append_detail)
            ) {
                let e = t.driven_by ?? null;
                (l.detail = [...l.detail, ...t.append_detail]),
                    (l.detailDrivenBy = [...l.detailDrivenBy, ...t.append_detail.map(() => e)]);
            }
            null != t.status && (l.status = t.status),
                null != t.duration && (l.durationMs = t.duration),
                null != t.screenshots && (l.screenshots = t.screenshots),
                null != t.attachments && (l.attachments = t.attachments);
            continue;
        }
        if ("error" === n.kind || "terminal_error" === n.kind) {
            let l = o(void 0, `${n.kind}-${t}`, "step", e);
            (l.touched = ++s),
                (l.labelKey = "error"),
                (l.status = "failed"),
                null != n.message && "" !== n.message && (l.detail = [n.message]);
        }
    }
    let h = [...a.values()];
    for (let e of h) n || "running" !== e.task.status || (e.task.status = "incomplete");
    return { steps: l, tasks: h, ...(null != t ? { turn: t } : {}) };
}
function d(e) {
    let t;
    for (let n of e) (null == t || n.touched > t.touched) && (t = n);
    return t;
}
function u(e) {
    return (
        "node" === e.kind &&
        null != e.node &&
        null == e.task_id &&
        ("task" === e.node.node_kind || "task" === e.node.id)
    );
}
function o(e) {
    return c(e).items;
}
function c(e) {
    let t = [],
        n = [],
        l = null,
        a = null,
        i = 0;
    for (let [r, d] of e.entries()) {
        var s;
        let e = d.segment;
        if (
            (n.push(e ?? i),
            "thinking" === d.kind ||
                ((null == (s = d).task_id || "" === s.task_id) &&
                    ("error" === s.kind ||
                        "terminal_error" === s.kind ||
                        ("node" === s.kind && null != s.node && !u(s)))))
        ) {
            l = null;
            continue;
        }
        if ("todos" === d.kind) {
            if (null != d.task_id && "" !== d.task_id) continue;
            let n = d.items ?? [];
            if (0 === n.length) continue;
            null != a
                ? (a.todos = n)
                : ((a = { type: "todos", key: `todos-${r}`, segment: e ?? i, todos: n }), t.push(a));
            continue;
        }
        if ("assistant_delta" !== d.kind || (null != d.task_id && "" !== d.task_id)) continue;
        let o = d.message ?? "";
        if ("" !== o)
            if (null == l) {
                i++;
                let a = e ?? i;
                (n[r] = a), (l = { type: "message", key: `message-${r}`, segment: a, content: o }), t.push(l);
            } else l.content = o;
        !0 === d.message_finished && (l = null);
    }
    return { items: t, segmentOf: n };
}
function m(e) {
    let { turnActive: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { items: n } = c(e),
        l = r(e, { turnActive: t }),
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
    for (let e of l.tasks) s.add(e.task.segment);
    let d = n.find((e) => "todos" === e.type)?.segment,
        u = Math.max(0, ...i.keys(), ...s, ...(null != d ? [d] : [])),
        o = [];
    for (let e = 0; e <= u; e++) {
        let t = i.get(e),
            n = s.has(e),
            l = d === e;
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
function h(e, t) {
    let { turnActive: n } = t,
        l = e.filter((e) => e.hasWork || e.hasTodos).at(-1)?.index,
        a = e.at(-1)?.index,
        i = n && null != l && l === a ? l : void 0;
    return { ...(null != l ? { lastWork: l } : {}), ...(null != i ? { open: i } : {}) };
}
function f(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (null != n) {
            if ("assistant_delta" === n.kind && null != n.message && "" !== n.message) return !0;
            if (!u(n) && ("node" === n.kind || "error" === n.kind || "terminal_error" === n.kind)) break;
        }
    }
    return !1;
}
function g(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (n?.kind === "todos" && (null == n.task_id || "" === n.task_id) && null != n.items && n.items.length > 0)
            return n.items;
    }
    return null;
}
