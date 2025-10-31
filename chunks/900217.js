var r = n(441710),
    i = n(654530),
    a = n(102736),
    o = n(169774),
    s = n(406799).notEmptyKey,
    l = n(273083),
    c = n(568064),
    u = n(467159),
    d = o.isEngine("Gecko"),
    f = "\n\n";
function _(e, t) {
    return "deleteContentBackward" === e ? c(t) : t;
}
e.exports = function (e, t) {
    void 0 !== e._pendingStateFromBeforeInput &&
        (e.update(e._pendingStateFromBeforeInput), (e._pendingStateFromBeforeInput = void 0));
    var n,
        o,
        c,
        p,
        h = e.editor.ownerDocument.defaultView.getSelection(),
        m = h.anchorNode,
        g = h.isCollapsed;
    if (
        (null == m ? void 0 : m.nodeType) === Node.TEXT_NODE ||
        (null == m ? void 0 : m.nodeType) === Node.ELEMENT_NODE
    ) {
        if (m.nodeType === Node.TEXT_NODE && (null !== m.previousSibling || null !== m.nextSibling)) {
            var E = m.parentNode;
            m.nodeValue = E.textContent;
            for (var b = E.firstChild; null !== b; b = b.nextSibling) b !== m && E.removeChild(b);
        }
        var y = m.textContent,
            O = e._latestEditorState,
            v = u(l(m)),
            I = i.decode(v),
            T = I.blockKey,
            S = I.decoratorKey,
            A = I.leafKey,
            C = O.getBlockTree(T).getIn([S, "leaves", A]),
            N = C.start,
            R = C.end,
            P = O.getCurrentContent(),
            w = P.getBlockForKey(T),
            D = w.getText().slice(N, R);
        if ((y.endsWith(f) && (y = y.slice(0, -1)), y === D)) {
            var x = t.nativeEvent.inputType;
            if (x) {
                var L = _(x, O);
                L !== O && (e.restoreEditorDOM(), e.update(L));
            }
            return;
        }
        var M = O.getSelection(),
            j = M.merge({
                anchorOffset: N,
                focusOffset: R,
                isBackward: !1,
            }),
            k = w.getEntityAt(N),
            U = s(k) ? P.getEntity(k) : null,
            G = null != U ? U.getMutability() : null,
            B = "MUTABLE" === G,
            Z = B ? "spellcheck-change" : "apply-entity",
            F = r.replaceText(P, j, y, w.getInlineStyleAt(N), B ? w.getEntityAt(N) : null);
        if (d)
            (n = h.anchorOffset), (p = (c = N + Math.min(n, (o = h.focusOffset))) + Math.abs(n - o)), (n = c), (o = p);
        else {
            var V = y.length - D.length;
            (c = M.getStartOffset()), (p = M.getEndOffset()), (n = g ? p + V : c), (o = p + V);
        }
        var H = F.merge({
            selectionBefore: P.getSelectionAfter(),
            selectionAfter: M.merge({
                anchorOffset: n,
                focusOffset: o,
            }),
        });
        e.update(a.push(O, H, Z));
    }
};
