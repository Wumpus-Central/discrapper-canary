!(function () {
    var t = {}.hasOwnProperty;
    function n() {
        for (var e = [], r = 0; r < arguments.length; r++) {
            var i = arguments[r];
            if (i) {
                var a = typeof i;
                if ('string' === a || 'number' === a) e.push(i);
                else if (Array.isArray(i) && i.length) {
                    var o = n.apply(null, i);
                    o && e.push(o);
                } else if ('object' === a) for (var s in i) t.call(i, s) && i[s] && e.push(s);
            }
        }
        return e.join(' ');
    }
    e.exports
        ? ((n.default = n), (e.exports = n))
        : 'function' == typeof define && 'object' == typeof define.amd && define.amd
          ? define('classnames', [], function () {
                return n;
            })
          : (window.classNames = n);
})();
