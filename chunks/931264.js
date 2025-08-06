var r = n(621796),
    i = n(152477),
    o = n(172367),
    a = n(169774),
    s = n(94553).notEmptyKey,
    l = n(630685),
    c = n(803068),
    u = n(467159),
    d = a.isEngine("Gecko"),
    f = "\n\n";
function _(e, t) {
    return "deleteContentBackward" === e ? c(t) : t;
}
e.exports = function (e, t) {
    void 0 !== e._pendingStateFromBeforeInput &&
        (e.update(e._pendingStateFromBeforeInput), (e._pendingStateFromBeforeInput = void 0));
    var n,
        a,
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
            N = O.getBlockTree(T).getIn([S, "leaves", A]),
            C = N.start,
            R = N.end,
            P = O.getCurrentContent(),
            w = P.getBlockForKey(T),
            D = w.getText().slice(C, R);
        if ((y.endsWith(f) && (y = y.slice(0, -1)), y === D)) {
            var L = t.nativeEvent.inputType;
            if (L) {
                var x = _(L, O);
                x !== O && (e.restoreEditorDOM(), e.update(x));
            }
            return;
        }
        var M = O.getSelection(),
            k = M.merge({
                anchorOffset: C,
                focusOffset: R,
                isBackward: !1,
            }),
            j = w.getEntityAt(C),
            U = s(j) ? P.getEntity(j) : null,
            G = null != U ? U.getMutability() : null,
            B = "MUTABLE" === G,
            Z = B ? "spellcheck-change" : "apply-entity",
            F = r.replaceText(P, k, y, w.getInlineStyleAt(C), B ? w.getEntityAt(C) : null);
        if (d)
            (n = h.anchorOffset), (p = (c = C + Math.min(n, (a = h.focusOffset))) + Math.abs(n - a)), (n = c), (a = p);
        else {
            var V = y.length - D.length;
            (c = M.getStartOffset()), (p = M.getEndOffset()), (n = g ? p + V : c), (a = p + V);
        }
        var H = F.merge({
            selectionBefore: P.getSelectionAfter(),
            selectionAfter: M.merge({
                anchorOffset: n,
                focusOffset: a,
            }),
        });
        e.update(o.push(O, H, Z));
    }
};
