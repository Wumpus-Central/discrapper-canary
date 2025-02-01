var i = n(706627),
    r = Object.create,
    a = (function () {
        function e() {}
        return function (t) {
            if (!i(t)) return {};
            if (r) return r(t);
            e.prototype = t;
            var n = new e();
            return (e.prototype = void 0), n;
        };
    })();
e.exports = a;
