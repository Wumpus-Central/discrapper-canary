var r = n(321780),
    i = n(172367),
    o = n(159759),
    a = n(473297);
e.exports = function (e) {
    var t = a(
        e,
        function (e) {
            var t = e.getSelection(),
                n = t.getStartOffset();
            if (0 === n) return o(e, 1);
            var i = t.getStartKey(),
                a = e.getCurrentContent().getBlockForKey(i).getText().slice(0, n);
            return o(e, r.getBackward(a).length || 1);
        },
        'backward'
    );
    return t === e.getCurrentContent() ? e : i.push(e, t, 'remove-range');
};
