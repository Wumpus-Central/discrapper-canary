var r = n(321780),
    i = n(172367),
    o = n(802801),
    a = n(473297);
e.exports = function (e) {
    var t = a(
        e,
        function (e) {
            var t = e.getSelection(),
                n = t.getStartOffset(),
                i = t.getStartKey(),
                a = e.getCurrentContent().getBlockForKey(i).getText().slice(n);
            return o(e, r.getForward(a).length || 1);
        },
        "forward",
    );
    return t === e.getCurrentContent() ? e : i.push(e, t, "remove-range");
};
