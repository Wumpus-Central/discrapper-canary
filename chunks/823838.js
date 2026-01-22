var r = n(869639),
    i = n(573750);
e.exports = function (e, t) {
    var n = e._latestEditorState,
        a = n.getSelection();
    if (!a.getHasFocus()) {
        var s = a.set("hasFocus", !0);
        e.props.onFocus && e.props.onFocus(t),
            i.isBrowser("Chrome < 60.0.3081.0") ? e.update(r.forceSelection(n, s)) : e.update(r.acceptSelection(n, s));
    }
};
