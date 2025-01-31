var i =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
        },
    r = (function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
            }
        }
        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t;
        };
    })();
function a(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
var s = n(161796),
    o = n(512722),
    l = function (e) {
        return e;
    },
    u = (function () {
        function e() {
            a(this, e);
        }
        return (
            r(e, null, [
                {
                    key: 'create',
                    value: function (e) {
                        if (e.outputRange && 'string' == typeof e.outputRange[0]) return _(e);
                        var t = e.outputRange;
                        g('outputRange', t);
                        var n = e.inputRange;
                        g('inputRange', n), m(n), o(n.length === t.length, 'inputRange (' + n.length + ') and outputRange (' + t.length + ') must have the same length');
                        var i = e.easing || l,
                            r = 'extend';
                        void 0 !== e.extrapolateLeft ? (r = e.extrapolateLeft) : void 0 !== e.extrapolate && (r = e.extrapolate);
                        var a = 'extend';
                        return (
                            void 0 !== e.extrapolateRight ? (a = e.extrapolateRight) : void 0 !== e.extrapolate && (a = e.extrapolate),
                            function (e) {
                                o('number' == typeof e, 'Cannot interpolation an input which is not a number');
                                var s = h(e, n);
                                return c(e, n[s], n[s + 1], t[s], t[s + 1], i, r, a);
                            }
                        );
                    }
                }
            ]),
            e
        );
    })();
function c(e, t, n, i, r, a, s, o) {
    var l = e;
    if (l < t) {
        if ('identity' === s) return l;
        'clamp' === s && (l = t);
    }
    if (l > n) {
        if ('identity' === o) return l;
        'clamp' === o && (l = n);
    }
    return i === r ? i : t === n ? (e <= t ? i : r) : (t === -1 / 0 ? (l = -l) : n === 1 / 0 ? (l -= t) : (l = (l - t) / (n - t)), (l = a(l)), i === -1 / 0 ? (l = -l) : r === 1 / 0 ? (l += i) : (l = l * (r - i) + i), l);
}
function d(e) {
    var t = s(e);
    return null === t ? e : 'rgba(' + ((4278190080 & (t = t || 0)) >>> 24) + ', ' + ((16711680 & t) >>> 16) + ', ' + ((65280 & t) >>> 8) + ', ' + (255 & t) / 255 + ')';
}
var f = /[0-9\.-]+/g;
function _(e) {
    var t = e.outputRange;
    o(t.length >= 2, 'Bad output range'), p((t = t.map(d)));
    var n = t[0].match(f).map(function () {
        return [];
    });
    t.forEach(function (e) {
        e.match(f).forEach(function (e, t) {
            n[t].push(+e);
        });
    });
    var r = t[0].match(f).map(function (t, r) {
            return u.create(i({}, e, { outputRange: n[r] }));
        }),
        a = /^rgb/.test(t[0]);
    return function (e) {
        var n = 0;
        return t[0].replace(f, function () {
            var t = r[n++](e);
            return String(a && n < 4 ? Math.round(t) : t);
        });
    };
}
function p(e) {
    for (var t = e[0].replace(f, ''), n = 1; n < e.length; ++n) o(t === e[n].replace(f, ''), 'invalid pattern ' + e[0] + ' and ' + e[n]);
}
function h(e, t) {
    for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
    return n - 1;
}
function m(e) {
    o(e.length >= 2, 'inputRange must have at least 2 elements');
    for (var t = 1; t < e.length; ++t) o(e[t] >= e[t - 1], 'inputRange must be monotonically increasing ' + e);
}
function g(e, t) {
    o(t.length >= 2, e + ' must have at least 2 elements'), o(2 !== t.length || t[0] !== -1 / 0 || t[1] !== 1 / 0, e + 'cannot be ]-infinity;+infinity[ ' + t);
}
e.exports = u;
