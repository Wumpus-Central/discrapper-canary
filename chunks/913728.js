"use strict";
n.d(t, { A: () => s });
var i = n(186306),
    l = n(711371);
function s(e, t) {
    let {
        apply: n,
        deleteBackward: s,
        deleteForward: a,
        deleteFragment: o,
        insertData: c,
        insertText: u,
        onChange: d,
    } = e;
    function h(n) {
        let l = i.o.currentEntry(e);
        if ((null != l && (l.mergeable = !1), n >= e.history.stack.length)) return;
        e.history.index = n;
        let s = i.o.currentEntry(e);
        t({ newValue: s.value, newSelection: s.selection });
    }
    (e.history = { index: 0, stack: [] }),
        (e.onChange = () => {
            let { history: t } = e;
            0 === t.stack.length && ((t.stack = [r(e)]), (t.index = 0)),
                null != e.selection && (i.o.currentEntry(e).selection = e.selection),
                (p = null),
                d();
        }),
        (e.undo = () => {
            e.history.index > 0 && h(e.history.index - 1);
        }),
        (e.redo = () => {
            e.history.index < e.history.stack.length - 1 && h(e.history.index + 1);
        });
    let m = null,
        p = null,
        f = null;
    return (
        (e.apply = (t) => {
            let { history: s } = e;
            n(t);
            let a = l.VW.richValue(e);
            a !== f &&
                (0 === s.stack.length && ((s.stack = [r(e)]), (s.index = 0)),
                i.o.isSaving(e) &&
                    ((function (e, t, n) {
                        var l, s;
                        let r,
                            { selection: a } = e,
                            o = i.o.currentEntry(e),
                            c = !0,
                            u = !0;
                        if (
                            ("insert_text" === t.type && 1 === t.text.length
                                ? ((r = "insert"),
                                  (u = !(
                                      ("" === t.text || t.text.endsWith(" ")) &&
                                      n?.type === "insert_text" &&
                                      !("" === n.text && n.text.endsWith(" "))
                                  )))
                                : "split_node" === t.type
                                  ? (r = "insert")
                                  : "remove_text" === t.type && 1 === t.text.length
                                    ? (r = "delete")
                                    : ((r = "other"), (c = !1), (u = !1)),
                            "set_selection" === t.type && null != o)
                        ) {
                            o.selection = a;
                            return;
                        }
                        c && ((l = o), (s = r), !(l?.type !== s || Date.now() - l.createdAt >= 4e3))
                            ? i.o.insertOrMergeEntry(e, r, u)
                            : i.o.insertEntry(e, r, u);
                    })(e, t, m),
                    (m = t)),
                (p = t),
                (f = a));
        }),
        (e.deleteBackward = (t) => {
            i.o.withSingleEntry(e, () => s(t));
        }),
        (e.deleteForward = (t) => {
            i.o.withSingleEntry(e, () => a(t));
        }),
        (e.deleteFragment = (t) => {
            i.o.withSingleEntry(e, () => o(t));
        }),
        (e.insertText = (t) => {
            1 === t.length && p?.type === "remove_text"
                ? i.o.withMergedEntry(e, () => u(t))
                : null != e.selection && l.ZF.isExpanded(e.selection)
                  ? i.o.withSingleEntry(e, () => u(t))
                  : u(t);
        }),
        (e.insertData = (t) => {
            p?.type === "remove_text" ? i.o.withMergedEntry(e, () => c(t)) : i.o.withSingleEntry(e, () => c(t));
        }),
        e
    );
}
function r(e) {
    return { type: "other", mergeable: !1, createdAt: Date.now(), value: l.VW.richValue(e), selection: e.selection };
}
