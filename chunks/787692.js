var n = e(486816),
    o = e(61748),
    s = e(738538),
    i = o("species");
t.exports = function (t) {
    return (
        s >= 51 ||
        !n(function () {
            var r = [];
            return (
                ((r.constructor = {})[i] = function () {
                    return { foo: 1 };
                }),
                1 !== r[t](Boolean).foo
            );
        })
    );
};
