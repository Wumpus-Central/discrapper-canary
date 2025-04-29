var n = r(321780),
    i = r(172367),
    o = r(802801),
    a = r(473297);
t.exports = function (t) {
    var e = a(
        t,
        function (t) {
            var e = t.getSelection(),
                r = e.getStartOffset(),
                i = e.getStartKey(),
                a = t.getCurrentContent().getBlockForKey(i).getText().slice(r);
            return o(t, n.getForward(a).length || 1);
        },
        'forward'
    );
    return e === t.getCurrentContent() ? t : i.push(t, e, 'remove-range');
};
