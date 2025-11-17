var r = n(384404),
    i = n(600518),
    a = n(298606),
    o = n(373539),
    s = n(550773);
e.exports = function (e, t) {
    var n = s(
        e,
        function (e) {
            var n = e.getSelection();
            if (n.isCollapsed() && 0 === n.getAnchorOffset()) return o(e, 1);
            var r = t.currentTarget.ownerDocument.defaultView.getSelection().getRangeAt(0);
            return a(e, null, (r = i(r)).endContainer, r.endOffset, r.startContainer, r.startOffset).selectionState;
        },
        "backward",
    );
    return n === e.getCurrentContent() ? e : r.push(e, n, "remove-range");
};
