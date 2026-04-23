"use strict";
n.d(t, { A: () => s });
var r = n(186306),
    i = n(711371);
function s(e, t) {
    let {
        apply: n,
        deleteBackward: s,
        deleteForward: o,
        deleteFragment: l,
        insertData: u,
        insertText: c,
        onChange: d,
    } = e;
    function _(n) {
        let i = r.o.currentEntry(e);
        if ((null != i && (i.mergeable = !1), n >= e.history.stack.length)) return;
        e.history.index = n;
        let s = r.o.currentEntry(e);
        t({ newValue: s.value, newSelection: s.selection });
    }
    (e.history = { index: 0, stack: [] }),
        (e.onChange = () => {
            let { history: t } = e;
            0 === t.stack.length && ((t.stack = [a(e)]), (t.index = 0)),
                null != e.selection && (r.o.currentEntry(e).selection = e.selection),
                (p = null),
                d();
        }),
        (e.undo = () => {
            e.history.index > 0 && _(e.history.index - 1);
        }),
        (e.redo = () => {
            e.history.index < e.history.stack.length - 1 && _(e.history.index + 1);
        });
    let f = null,
        p = null,
        h = null;
    return (
        (e.apply = (t) => {
            let { history: s } = e;
            n(t);
            let o = i.VW.richValue(e);
            o !== h &&
                (0 === s.stack.length && ((s.stack = [a(e)]), (s.index = 0)),
                r.o.isSaving(e) &&
                    ((function (e, t, n) {
                        var i, s;
                        let a,
                            { selection: o } = e,
                            l = r.o.currentEntry(e),
                            u = !0,
                            c = !0;
                        if (
                            ("insert_text" === t.type && 1 === t.text.length
                                ? ((a = "insert"),
                                  (c = !(
                                      ("" === t.text || t.text.endsWith(" ")) &&
                                      n?.type === "insert_text" &&
                                      !("" === n.text && n.text.endsWith(" "))
                                  )))
                                : "split_node" === t.type
                                  ? (a = "insert")
                                  : "remove_text" === t.type && 1 === t.text.length
                                    ? (a = "delete")
                                    : ((a = "other"), (u = !1), (c = !1)),
                            "set_selection" === t.type && null != l)
                        ) {
                            l.selection = o;
                            return;
                        }
                        u && ((i = l), (s = a), !(i?.type !== s || Date.now() - i.createdAt >= 4e3))
                            ? r.o.insertOrMergeEntry(e, a, c)
                            : r.o.insertEntry(e, a, c);
                    })(e, t, f),
                    (f = t)),
                (p = t),
                (h = o));
        }),
        (e.deleteBackward = (t) => {
            r.o.withSingleEntry(e, () => s(t));
        }),
        (e.deleteForward = (t) => {
            r.o.withSingleEntry(e, () => o(t));
        }),
        (e.deleteFragment = (t) => {
            r.o.withSingleEntry(e, () => l(t));
        }),
        (e.insertText = (t) => {
            1 === t.length && p?.type === "remove_text"
                ? r.o.withMergedEntry(e, () => c(t))
                : null != e.selection && i.ZF.isExpanded(e.selection)
                  ? r.o.withSingleEntry(e, () => c(t))
                  : c(t);
        }),
        (e.insertData = (t) => {
            p?.type === "remove_text" ? r.o.withMergedEntry(e, () => u(t)) : r.o.withSingleEntry(e, () => u(t));
        }),
        e
    );
}
function a(e) {
    return { type: "other", mergeable: !1, createdAt: Date.now(), value: i.VW.richValue(e), selection: e.selection };
}
