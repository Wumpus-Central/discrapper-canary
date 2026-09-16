(l.d(t, { B4: () => o, C6: () => m, CT: () => f, GO: () => r, Lf: () => h, SY: () => u, WQ: () => i, lt: () => x }),
    l(321073),
    l(134528),
    l(947204));
var n = l(50617),
    a = l(375708);
let s = {
    assembling: n.default["9G3ZmA"],
    installing_deps: n.default.VZuRug,
    building: n.default["s+ylXP"],
    bundling: n.default.rEQlMx,
    committing: n.default.Yvyw1H,
    built: n.default.hOcVAj,
    build_error: n.default["6L9Vwt"],
    healthchecking: n.default.sz8yAj,
    awaiting_auth: n.default["orD+xo"],
    healthcheck_passed: n.default["x+sqTG"],
    healthcheck_failed: n.default.FUWbq1,
    deploying: n.default.wcXX8Z,
    preview_ready: n.default["78YNh7"],
    working: n.default.nv6pUM,
    error: n.default.j3hBoA,
};
function i(e) {
    if (null != e.labelText && "" !== e.labelText) return e.labelText;
    let t = null != e.labelKey ? s[e.labelKey] : void 0;
    return a.intl.string(t ?? n.default.nv6pUM);
}
function r(e) {
    let t,
        { turnActive: l = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = [],
        a = new Map(),
        s = new Map(),
        i = 0,
        { segmentOf: r } = c(e);
    function u(e, t, l) {
        return {
            id: e,
            kind: t,
            detail: [],
            detailDrivenBy: [],
            status: "running",
            screenshots: [],
            attachments: [],
            touched: 0,
            segment: l,
        };
    }
    function d(e, t) {
        let l = a.get(e);
        if (null != l) return l;
        let n = { taskId: e, task: u("task", "task", t), steps: [] };
        return (a.set(e, n), n);
    }
    function o(e, l, a, i) {
        if ("task" === a || "task" === l) return null != e ? d(e, i).task : (t = t ?? u("task", "task", i));
        let r = `${e ?? ""} ${l}`,
            o = s.get(r);
        if (null != o) return o;
        let c = u(l, "step", i);
        return (s.set(r, c), null != e ? d(e, i).steps.push(c) : n.push(c), c);
    }
    let m = (function (e) {
        let t = new Set();
        for (let l of e) {
            if ("node" !== l.kind || null == l.node) continue;
            let e = l.task_id;
            null != e &&
                "" !== e &&
                ("task" === l.node.node_kind || "task" === l.node.id) &&
                "cancelled" === l.node.status &&
                t.add(e);
        }
        return t;
    })(e);
    for (let [t, l] of e.entries()) {
        if (
            0 !== m.size &&
            "error" !== l.kind &&
            "terminal_error" !== l.kind &&
            null != l.task_id &&
            "" !== l.task_id &&
            m.has(l.task_id)
        )
            continue;
        let e = r[t] ?? 0;
        if ("node" === l.kind && null != l.node) {
            let t = l.node,
                n = o(l.task_id, t.id, t.node_kind ?? "step", e);
            if (
                ((n.touched = ++i),
                null != t.label_key && (n.labelKey = t.label_key),
                null != t.label_text && (n.labelText = t.label_text),
                null != t.group_label && (n.groupLabel = t.group_label),
                null != t.helper_name && (n.helperName = t.helper_name),
                null != t.helper_mark && (n.helperMark = t.helper_mark),
                null != t.todo_id && (n.todoId = t.todo_id),
                null != t.detail && ((n.detail = t.detail), (n.detailDrivenBy = t.detail.map(() => null))),
                null != t.append_detail)
            ) {
                let e = t.driven_by ?? null;
                ((n.detail = [...n.detail, ...t.append_detail]),
                    (n.detailDrivenBy = [...n.detailDrivenBy, ...t.append_detail.map(() => e)]));
            }
            (null != t.status && (n.status = t.status),
                null != t.duration && (n.durationMs = t.duration),
                null != t.screenshots && (n.screenshots = t.screenshots),
                null != t.attachments && (n.attachments = t.attachments));
            continue;
        }
        if ("error" === l.kind || "terminal_error" === l.kind) {
            let n = o(void 0, `${l.kind}-${t}`, "step", e);
            ((n.touched = ++i),
                (n.labelKey = "error"),
                (n.status = "failed"),
                null != l.message && "" !== l.message && (n.detail = [l.message]));
        }
    }
    let f = [...a.values()];
    for (let e of f) l || "running" !== e.task.status || (e.task.status = "incomplete");
    return { steps: n, tasks: f, ...(null != t ? { turn: t } : {}) };
}
function u(e) {
    let t;
    for (let l of e) (null == t || l.touched > t.touched) && (t = l);
    return t;
}
function d(e) {
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
        l = [],
        n = null,
        a = null,
        s = 0;
    for (let [r, u] of e.entries()) {
        var i;
        let e = u.segment;
        if (
            (l.push(e ?? s),
            "thinking" === u.kind ||
                ((null == (i = u).task_id || "" === i.task_id) &&
                    ("error" === i.kind ||
                        "terminal_error" === i.kind ||
                        ("node" === i.kind && null != i.node && !d(i)))))
        ) {
            n = null;
            continue;
        }
        if ("todos" === u.kind) {
            if (null != u.task_id && "" !== u.task_id) continue;
            let l = u.items ?? [];
            if (0 === l.length) continue;
            null != a
                ? (a.todos = l)
                : ((a = { type: "todos", key: `todos-${r}`, segment: e ?? s, todos: l }), t.push(a));
            continue;
        }
        if ("assistant_delta" !== u.kind || (null != u.task_id && "" !== u.task_id)) continue;
        let o = u.message ?? "";
        if ("" !== o)
            if (null == n) {
                s++;
                let a = e ?? s;
                ((l[r] = a), (n = { type: "message", key: `message-${r}`, segment: a, content: o }), t.push(n));
            } else n.content = o;
        !0 === u.message_finished && (n = null);
    }
    return { items: t, segmentOf: l };
}
function m(e) {
    let { turnActive: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { items: l } = c(e),
        n = r(e, { turnActive: t }),
        a = (function (e) {
            let t = new Map();
            for (let l of e)
                "segment_settled" === l.kind &&
                    (null == l.task_id || "" === l.task_id) &&
                    null != l.segment &&
                    null != l.duration &&
                    t.set(l.segment, l.duration);
            return t;
        })(e),
        s = new Map();
    for (let e of l) "message" === e.type && s.set(e.segment, e);
    let i = new Set();
    for (let e of n.steps) i.add(e.segment);
    for (let e of n.tasks) i.add(e.task.segment);
    let u = l.find((e) => "todos" === e.type)?.segment,
        d = Math.max(0, ...s.keys(), ...i, ...(null != u ? [u] : [])),
        o = [];
    for (let e = 0; e <= d; e++) {
        let t = s.get(e),
            l = i.has(e),
            n = u === e;
        (null != t || l || n) &&
            o.push({
                key: t?.key ?? `work-${e}`,
                index: e,
                ...(null != t ? { prose: t } : {}),
                hasWork: l,
                hasTodos: n,
                ...(a.has(e) ? { durationMs: a.get(e) } : {}),
            });
    }
    return o;
}
function f(e, t) {
    let { turnActive: l } = t,
        n = e.filter((e) => e.hasWork || e.hasTodos).at(-1)?.index,
        a = e.at(-1)?.index,
        s = l && null != n && n === a ? n : void 0;
    return { ...(null != n ? { lastWork: n } : {}), ...(null != s ? { open: s } : {}) };
}
function h(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let l = e[t];
        if (null != l) {
            if ("assistant_delta" === l.kind && null != l.message && "" !== l.message) return !0;
            if (!d(l) && ("node" === l.kind || "error" === l.kind || "terminal_error" === l.kind)) break;
        }
    }
    return !1;
}
function x(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let l = e[t];
        if (l?.kind === "todos" && (null == l.task_id || "" === l.task_id) && null != l.items && l.items.length > 0)
            return l.items;
    }
    return null;
}
