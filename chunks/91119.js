var i = n(772949),
    r = n(587816),
    a = n(756237),
    s = n(407411);
function o(t) {
    var n = 'function' == typeof Map ? new Map() : void 0;
    return (
        (e.exports = o =
            function (e) {
                if (null === e || !a(e)) return e;
                if ('function' != typeof e) throw TypeError('Super expression must either be null or a function');
                if (void 0 !== n) {
                    if (n.has(e)) return n.get(e);
                    n.set(e, t);
                }
                function t() {
                    return s(e, arguments, i(this).constructor);
                }
                return (
                    (t.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    })),
                    r(t, e)
                );
            }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports),
        o(t)
    );
}
(e.exports = o), (e.exports.__esModule = !0), (e.exports.default = e.exports);
