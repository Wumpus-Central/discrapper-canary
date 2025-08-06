var r = n(706627),
    i = Object.create;
e.exports = (function () {
    function e() {}
    return function (t) {
        if (!r(t)) return {};
        if (i) return i(t);
        e.prototype = t;
        var n = new e();
        return (e.prototype = void 0), n;
    };
})();
