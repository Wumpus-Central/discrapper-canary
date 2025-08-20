var r = n(102736),
    i = n(160206),
    a = n(100023),
    o = n(533531),
    s = n(398448);
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
