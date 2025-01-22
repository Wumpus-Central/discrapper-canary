var i =
        Object.assign ||
        function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
            }
            return e;
        },
    a = (function () {
        function e(e, n) {
            for (var r = 0; r < n.length; r++) {
                var i = n[r];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
            }
        }
        return function (n, r, i) {
            return r && e(n.prototype, r), i && e(n, i), n;
        };
    })();
function o(e, n) {
    if (!(e instanceof n)) throw TypeError('Cannot call a class as a function');
}
var s = r(161796),
    l = r(512722),
    u = function (e) {
        return e;
    },
    c = (function () {
        function e() {
            o(this, e);
        }
        return (
            a(e, null, [
                {
                    key: 'create',
                    value: function (e) {
                        if (e.outputRange && 'string' == typeof e.outputRange[0]) return h(e);
                        var n = e.outputRange;
                        E('outputRange', n);
                        var r = e.inputRange;
                        E('inputRange', r), g(r), l(r.length === n.length, 'inputRange (' + r.length + ') and outputRange (' + n.length + ') must have the same length');
                        var i = e.easing || u,
                            a = 'extend';
                        void 0 !== e.extrapolateLeft ? (a = e.extrapolateLeft) : void 0 !== e.extrapolate && (a = e.extrapolate);
                        var o = 'extend';
                        return (
                            void 0 !== e.extrapolateRight ? (o = e.extrapolateRight) : void 0 !== e.extrapolate && (o = e.extrapolate),
                            function (e) {
                                l('number' == typeof e, 'Cannot interpolation an input which is not a number');
                                var s = m(e, r);
                                return d(e, r[s], r[s + 1], n[s], n[s + 1], i, a, o);
                            }
                        );
                    }
                }
            ]),
            e
        );
    })();
function d(e, n, r, i, a, o, s, l) {
    var u = e;
    if (u < n) {
        if ('identity' === s) return u;
        'clamp' === s ? (u = n) : s;
    }
    if (u > r) {
        if ('identity' === l) return u;
        'clamp' === l ? (u = r) : l;
    }
    if (i === a) return i;
    if (n === r) return e <= n ? i : a;
    return n === -1 / 0 ? (u = -u) : r === 1 / 0 ? (u -= n) : (u = (u - n) / (r - n)), (u = o(u)), i === -1 / 0 ? (u = -u) : a === 1 / 0 ? (u += i) : (u = u * (a - i) + i), u;
}
function f(e) {
    var n = s(e);
    return null === n ? e : 'rgba(' + ((4278190080 & (n = n || 0)) >>> 24) + ', ' + ((16711680 & n) >>> 16) + ', ' + ((65280 & n) >>> 8) + ', ' + (255 & n) / 255 + ')';
}
var p = /[0-9\.-]+/g;
function h(e) {
    var n = e.outputRange;
    l(n.length >= 2, 'Bad output range'), _((n = n.map(f)));
    var r = n[0].match(p).map(function () {
        return [];
    });
    n.forEach(function (e) {
        e.match(p).forEach(function (e, n) {
            r[n].push(+e);
        });
    });
    var a = n[0].match(p).map(function (n, a) {
            return c.create(i({}, e, { outputRange: r[a] }));
        }),
        o = /^rgb/.test(n[0]);
    return function (e) {
        var r = 0;
        return n[0].replace(p, function () {
            var n = a[r++](e);
            return String(o && r < 4 ? Math.round(n) : n);
        });
    };
}
function _(e) {
    for (var n = e[0].replace(p, ''), r = 1; r < e.length; ++r) l(n === e[r].replace(p, ''), 'invalid pattern ' + e[0] + ' and ' + e[r]);
}
function m(e, n) {
    for (var r = 1; r < n.length - 1 && !(n[r] >= e); ++r);
    return r - 1;
}
function g(e) {
    l(e.length >= 2, 'inputRange must have at least 2 elements');
    for (var n = 1; n < e.length; ++n) l(e[n] >= e[n - 1], 'inputRange must be monotonically increasing ' + e);
}
function E(e, n) {
    l(n.length >= 2, e + ' must have at least 2 elements'), l(2 !== n.length || n[0] !== -1 / 0 || n[1] !== 1 / 0, e + 'cannot be ]-infinity;+infinity[ ' + n);
}
e.exports = c;
