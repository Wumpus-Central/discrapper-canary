t.d(r, { w: () => i });
var e = t(73800);
function o(n, r) {
    (null == r || r > n.length) && (r = n.length);
    for (var t = 0, e = Array(r); t < r; t++) e[t] = n[t];
    return e;
}
function i(n, r) {
    var t,
        i =
            (function (n) {
                if (Array.isArray(n)) return o(n);
            })((t = r || [])) ||
            (function (n) {
                if (('undefined' != typeof Symbol && null != n[Symbol.iterator]) || null != n['@@iterator']) return Array.from(n);
            })(t) ||
            (function (n, r) {
                if (n) {
                    if ('string' == typeof n) return o(n, void 0);
                    var t = Object.prototype.toString.call(n).slice(8, -1);
                    if (('Object' === t && n.constructor && (t = n.constructor.name), 'Map' === t || 'Set' === t)) return Array.from(n);
                    if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return o(n, r);
                }
            })(t) ||
            (function () {
                throw TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
            })();
    return (
        null == r && 'function' != typeof n && i.push(n),
        (0, e.useMemo)(function () {
            return 'function' == typeof n ? n() : n;
        }, i)
    );
}
