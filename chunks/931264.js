var r = n(621796),
    i = n(152477),
    a = n(172367),
    o = n(169774),
    s = n(94553).notEmptyKey,
    l = n(630685),
    c = n(803068),
    u = n(467159),
    d = o.isEngine('Gecko'),
    f = '\n\n';
function _(e, t) {
    return 'deleteContentBackward' === e ? c(t) : t;
}
e.exports = function (e, t) {
    void 0 !== e._pendingStateFromBeforeInput && (e.update(e._pendingStateFromBeforeInput), (e._pendingStateFromBeforeInput = void 0));
    var n,
        o,
        c,
        p,
        h = e.editor.ownerDocument.defaultView.getSelection(),
        m = h.anchorNode,
        g = h.isCollapsed;
    if ((null == m ? void 0 : m.nodeType) === Node.TEXT_NODE || (null == m ? void 0 : m.nodeType) === Node.ELEMENT_NODE) {
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
            N = O.getBlockTree(T).getIn([S, 'leaves', A]),
            C = N.start,
            w = N.end,
            R = O.getCurrentContent(),
            P = R.getBlockForKey(T),
            D = P.getText().slice(C, w);
        if ((y.endsWith(f) && (y = y.slice(0, -1)), y === D)) {
            var L = t.nativeEvent.inputType;
            if (L) {
                var x = _(L, O);
                x !== O && (e.restoreEditorDOM(), e.update(x));
            }
            return;
        }
        var k = O.getSelection(),
            j = k.merge({
                anchorOffset: C,
                focusOffset: w,
                isBackward: !1
            }),
            M = P.getEntityAt(C),
            U = s(M) ? R.getEntity(M) : null,
            G = null != U ? U.getMutability() : null,
            B = 'MUTABLE' === G,
            Z = B ? 'spellcheck-change' : 'apply-entity',
            F = r.replaceText(R, j, y, P.getInlineStyleAt(C), B ? P.getEntityAt(C) : null);
        if (d) ((n = h.anchorOffset), (p = (c = C + Math.min(n, (o = h.focusOffset))) + Math.abs(n - o)), (n = c), (o = p));
        else {
            var V = y.length - D.length;
            ((c = k.getStartOffset()), (p = k.getEndOffset()), (n = g ? p + V : c), (o = p + V));
        }
        var H = F.merge({
            selectionBefore: R.getSelectionAfter(),
            selectionAfter: k.merge({
                anchorOffset: n,
                focusOffset: o
            })
        });
        e.update(a.push(O, H, Z));
    }
};
