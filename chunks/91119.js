var i = r(772949),
    a = r(587816),
    o = r(756237),
    s = r(407411);
function l(n) {
    var r = 'function' == typeof Map ? new Map() : void 0;
    return (
        (e.exports = l =
            function (e) {
                if (null === e || !o(e)) return e;
                if ('function' != typeof e) throw TypeError('Super expression must either be null or a function');
                if (void 0 !== r) {
                    if (r.has(e)) return r.get(e);
                    r.set(e, n);
                }
                function n() {
                    return s(e, arguments, i(this).constructor);
                }
                return (
                    (n.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: n,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    })),
                    a(n, e)
                );
            }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports),
        l(n)
    );
}
(e.exports = l), (e.exports.__esModule = !0), (e.exports.default = e.exports);
