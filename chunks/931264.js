var n = r(621796),
    i = r(152477),
    o = r(172367),
    a = r(169774),
    u = r(94553).notEmptyKey,
    s = r(630685),
    c = r(803068),
    l = r(467159),
    f = a.isEngine('Gecko');
t.exports = function (t, e) {
    void 0 !== t._pendingStateFromBeforeInput && (t.update(t._pendingStateFromBeforeInput), (t._pendingStateFromBeforeInput = void 0));
    var r = t.editor.ownerDocument.defaultView.getSelection(),
        a = r.anchorNode,
        p = r.isCollapsed;
    if ((null == a ? void 0 : a.nodeType) === Node.TEXT_NODE || (null == a ? void 0 : a.nodeType) === Node.ELEMENT_NODE) {
        if (a.nodeType === Node.TEXT_NODE && (null !== a.previousSibling || null !== a.nextSibling)) {
            var h = a.parentNode;
            a.nodeValue = h.textContent;
            for (var d = h.firstChild; null !== d; d = d.nextSibling) d !== a && h.removeChild(d);
        }
        var g = a.textContent,
            y = t._latestEditorState,
            v = l(s(a)),
            m = i.decode(v),
            _ = m.blockKey,
            b = m.decoratorKey,
            S = m.leafKey,
            w = y.getBlockTree(_).getIn([b, 'leaves', S]),
            x = w.start,
            k = w.end,
            C = y.getCurrentContent(),
            E = C.getBlockForKey(_),
            D = E.getText().slice(x, k);
        if ((g.endsWith('\n\n') && (g = g.slice(0, -1)), g === D)) {
            var O = e.nativeEvent.inputType;
            if (O) {
                var K,
                    T,
                    M,
                    A,
                    I = 'deleteContentBackward' === O ? c(y) : y;
                I !== y && (t.restoreEditorDOM(), t.update(I));
            }
            return;
        }
        var B = y.getSelection(),
            L = B.merge({
                anchorOffset: x,
                focusOffset: k,
                isBackward: !1
            }),
            R = E.getEntityAt(x),
            F = u(R) ? C.getEntity(R) : null,
            N = 'MUTABLE' === (null != F ? F.getMutability() : null),
            P = n.replaceText(C, L, g, E.getInlineStyleAt(x), N ? E.getEntityAt(x) : null);
        if (f) (A = (M = x + Math.min((K = r.anchorOffset), (T = r.focusOffset))) + Math.abs(K - T)), (K = M), (T = A);
        else {
            var z = g.length - D.length;
            (M = B.getStartOffset()), (A = B.getEndOffset()), (K = p ? A + z : M), (T = A + z);
        }
        var j = P.merge({
            selectionBefore: C.getSelectionAfter(),
            selectionAfter: B.merge({
                anchorOffset: K,
                focusOffset: T
            })
        });
        t.update(o.push(y, j, N ? 'spellcheck-change' : 'apply-entity'));
    }
};
