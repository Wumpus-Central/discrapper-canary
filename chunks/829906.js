var r = n(733359),
    i = n(257469),
    a = function (e, t) {
        return e === t;
    },
    o = function (e) {
        return !!e;
    },
    s = [];
function l(e, t, n) {
    var s = [];
    return (
        i(
            t
                .map(function (e) {
                    return e.has(n);
                })
                .toList(),
            a,
            o,
            function (t, i) {
                var a = e.getText();
                s.push({
                    offset: r.strlen(a.slice(0, t)),
                    length: r.strlen(a.slice(t, i)),
                    style: n,
                });
            },
        ),
        s
    );
}
e.exports = function (e) {
    var t = e
            .getCharacterList()
            .map(function (e) {
                return e.getStyle();
            })
            .toList(),
        n = t
            .flatten()
            .toSet()
            .map(function (n) {
                return l(e, t, n);
            });
    return Array.prototype.concat.apply(s, n.toJS());
};
