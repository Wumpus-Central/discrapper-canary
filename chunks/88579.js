var i = r(706627),
    a = Object.create,
    o = (function () {
        function e() {}
        return function (n) {
            if (!i(n)) return {};
            if (a) return a(n);
            e.prototype = n;
            var r = new e();
            return (e.prototype = void 0), r;
        };
    })();
e.exports = o;
