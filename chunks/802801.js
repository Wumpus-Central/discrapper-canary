r(42547),
    (t.exports = function (t, e) {
        var r,
            n = t.getSelection(),
            i = n.getStartKey(),
            o = n.getStartOffset(),
            a = t.getCurrentContent(),
            u = i;
        return (
            e > a.getBlockForKey(i).getText().length - o ? ((u = a.getKeyAfter(i)), (r = 0)) : (r = o + e),
            n.merge({
                focusKey: u,
                focusOffset: r
            })
        );
    });
