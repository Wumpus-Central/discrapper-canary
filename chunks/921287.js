var r,
    i = n(166898),
    a = n(65183),
    o = n(467159),
    s = a.OrderedMap;
e.exports = {
    getDirectionMap: function (e, t) {
        r ? r.reset() : (r = new i());
        var n = e.getBlockMap(),
            l = n.valueSeq().map(function (e) {
                return o(r).getDirection(e.getText());
            }),
            c = s(n.keySeq().zip(l));
        return null != t && a.is(t, c) ? t : c;
    },
};
