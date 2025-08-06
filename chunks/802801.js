n(42547),
    (e.exports = function (e, t) {
        var n,
            r = e.getSelection(),
            i = r.getStartKey(),
            o = r.getStartOffset(),
            a = e.getCurrentContent(),
            s = i;
        return (
            t > a.getBlockForKey(i).getText().length - o ? ((s = a.getKeyAfter(i)), (n = 0)) : (n = o + t),
            r.merge({
                focusKey: s,
                focusOffset: n,
            })
        );
    });
