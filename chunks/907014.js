var r = n(869639),
    i = n(1140),
    a = n(181621),
    s = n(418227);
e.exports = function (e) {
    var t = s(
        e,
        function (e) {
            var t = e.getSelection(),
                n = e.getCurrentContent(),
                r = t.getAnchorKey(),
                s = t.getAnchorOffset(),
                o = n.getBlockForKey(r).getText()[s - 1];
            return a(e, o ? i.getUTF16Length(o, 0) : 1);
        },
        "backward",
    );
    if (t === e.getCurrentContent()) return e;
    var n = e.getSelection();
    return r.push(e, t.set("selectionBefore", n), n.isCollapsed() ? "backspace-character" : "remove-range");
};
