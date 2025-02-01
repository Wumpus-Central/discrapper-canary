Object.defineProperty(t, '__esModule', { value: !0 });
var n = function (e, t) {
    var n = {},
        i = function (e) {
            var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            n[e] = t;
        };
    return 0 === e && i('first-child'), e === t - 1 && i('last-child'), (0 === e || e % 2 == 0) && i('even'), 1 === Math.abs(e % 2) && i('odd'), i('nth-child', e), n;
};
t.default = n;
