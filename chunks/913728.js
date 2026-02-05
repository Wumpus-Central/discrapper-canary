"use strict";
n.d(t, { A: () => s });
var r = n(186306),
    i = n(711371);
let a = 4e3;
function s(e, t) {
    let {
        apply: n,
        deleteBackward: a,
        deleteForward: s,
        deleteFragment: l,
        insertData: c,
        insertText: d,
        onChange: _,
    } = e;
    function f(n) {
        let i = r.o.currentEntry(e);
        if ((null != i && (i.mergeable = !1), n >= e.history.stack.length)) return;
        e.history.index = n;
        let a = r.o.currentEntry(e);
        t({ newValue: a.value, newSelection: a.selection });
    }
    (e.history = { index: 0, stack: [] }),
        (e.onChange = () => {
            let { history: t } = e;
            0 === t.stack.length && ((t.stack = [u(e)]), (t.index = 0)),
                null != e.selection && (r.o.currentEntry(e).selection = e.selection),
                (h = null),
                _();
        }),
        (e.undo = () => {
            e.history.index > 0 && f(e.history.index - 1);
        }),
        (e.redo = () => {
            e.history.index < e.history.stack.length - 1 && f(e.history.index + 1);
        });
    let p = null,
        h = null,
        m = null;
    return (
        (e.apply = (t) => {
            let { history: a } = e;
            n(t);
            let s = i.VW.richValue(e);
            s !== m &&
                (0 === a.stack.length && ((a.stack = [u(e)]), (a.index = 0)),
                r.o.isSaving(e) && (o(e, t, p), (p = t)),
                (h = t),
                (m = s));
        }),
        (e.deleteBackward = (t) => {
            r.o.withSingleEntry(e, () => a(t));
        }),
        (e.deleteForward = (t) => {
            r.o.withSingleEntry(e, () => s(t));
        }),
        (e.deleteFragment = (t) => {
            r.o.withSingleEntry(e, () => l(t));
        }),
        (e.insertText = (t) => {
            1 === t.length && h?.type === "remove_text"
                ? r.o.withMergedEntry(e, () => d(t))
                : null != e.selection && i.ZF.isExpanded(e.selection)
                  ? r.o.withSingleEntry(e, () => d(t))
                  : d(t);
        }),
        (e.insertData = (t) => {
            h?.type === "remove_text" ? r.o.withMergedEntry(e, () => c(t)) : r.o.withSingleEntry(e, () => c(t));
        }),
        e
    );
}
function o(e, t, n) {
    let i,
        { selection: a } = e,
        s = r.o.currentEntry(e),
        o = !0,
        u = !0;
    if (
        ("insert_text" === t.type && 1 === t.text.length
            ? ((i = "insert"),
              (u = !(
                  ("" === t.text || t.text.endsWith(" ")) &&
                  n?.type === "insert_text" &&
                  !("" === n.text && n.text.endsWith(" "))
              )))
            : "split_node" === t.type
              ? (i = "insert")
              : "remove_text" === t.type && 1 === t.text.length
                ? (i = "delete")
                : ((i = "other"), (o = !1), (u = !1)),
        "set_selection" === t.type && null != s)
    ) {
        s.selection = a;
        return;
    }
    o && l(s, i) ? r.o.insertOrMergeEntry(e, i, u) : r.o.insertEntry(e, i, u);
}
function l(e, t) {
    return !(e?.type !== t || Date.now() - e.createdAt >= a);
}
function u(e) {
    return { type: "other", mergeable: !1, createdAt: Date.now(), value: i.VW.richValue(e), selection: e.selection };
}
