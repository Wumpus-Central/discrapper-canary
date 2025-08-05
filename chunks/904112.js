var r = n(321780),
    i = n(172367),
    a = n(802801),
    o = n(473297);
e.exports = function (e) {
    var t = o(
        e,
        function (e) {
            var t = e.getSelection(),
                n = t.getStartOffset(),
                i = t.getStartKey(),
                o = e.getCurrentContent().getBlockForKey(i).getText().slice(n);
            return a(e, r.getForward(o).length || 1);
        },
        'forward'
    );
    return t === e.getCurrentContent() ? e : i.push(e, t, 'remove-range');
};
