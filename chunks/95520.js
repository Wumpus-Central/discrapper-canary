Object.defineProperty(t, '__esModule', { value: !0 });
var n = function (e, t) {
    var n = {},
        r = function (e) {
            var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            n[e] = t;
        };
    return 0 === e && r('first-child'), e === t - 1 && r('last-child'), (0 === e || e % 2 == 0) && r('even'), 1 === Math.abs(e % 2) && r('odd'), r('nth-child', e), n;
};
t.default = n;
