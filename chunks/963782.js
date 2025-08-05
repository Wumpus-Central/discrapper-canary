var r = n(321780),
    i = n(172367),
    a = n(159759),
    o = n(473297);
e.exports = function (e) {
    var t = o(
        e,
        function (e) {
            var t = e.getSelection(),
                n = t.getStartOffset();
            if (0 === n) return a(e, 1);
            var i = t.getStartKey(),
                o = e.getCurrentContent().getBlockForKey(i).getText().slice(0, n);
            return a(e, r.getBackward(o).length || 1);
        },
        'backward'
    );
    return t === e.getCurrentContent() ? e : i.push(e, t, 'remove-range');
};
