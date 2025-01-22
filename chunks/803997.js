!(function () {
    var n = {}.hasOwnProperty;
    function r() {
        for (var e = [], i = 0; i < arguments.length; i++) {
            var a = arguments[i];
            if (a) {
                var o = typeof a;
                if ('string' === o || 'number' === o) e.push(a);
                else if (Array.isArray(a) && a.length) {
                    var s = r.apply(null, a);
                    s && e.push(s);
                } else if ('object' === o) for (var l in a) n.call(a, l) && a[l] && e.push(l);
            }
        }
        return e.join(' ');
    }
    e.exports
        ? ((r.default = r), (e.exports = r))
        : 'function' == typeof define && 'object' == typeof define.amd && define.amd
          ? define('classnames', [], function () {
                return r;
            })
          : (window.classNames = r);
})();
