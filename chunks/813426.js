var i = 'function' == typeof Map && Map.prototype,
    a = Object.getOwnPropertyDescriptor && i ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null,
    o = i && a && 'function' == typeof a.get ? a.get : null,
    s = i && Map.prototype.forEach,
    l = 'function' == typeof Set && Set.prototype,
    u = Object.getOwnPropertyDescriptor && l ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null,
    c = l && u && 'function' == typeof u.get ? u.get : null,
    d = l && Set.prototype.forEach,
    f = 'function' == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null,
    p = 'function' == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null,
    h = 'function' == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null,
    _ = Boolean.prototype.valueOf,
    m = Object.prototype.toString,
    g = Function.prototype.toString,
    E = String.prototype.match,
    v = String.prototype.slice,
    y = String.prototype.replace,
    b = String.prototype.toUpperCase,
    I = String.prototype.toLowerCase,
    T = RegExp.prototype.test,
    S = Array.prototype.concat,
    A = Array.prototype.join,
    C = Array.prototype.slice,
    N = Math.floor,
    R = 'function' == typeof BigInt ? BigInt.prototype.valueOf : null,
    O = Object.getOwnPropertySymbols,
    D = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? Symbol.prototype.toString : null,
    L = 'function' == typeof Symbol && 'object' == typeof Symbol.iterator,
    x = 'function' == typeof Symbol && Symbol.toStringTag && (typeof Symbol.toStringTag === L ? 'object' : 'symbol') ? Symbol.toStringTag : null,
    w = Object.prototype.propertyIsEnumerable,
    P =
        ('function' == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) ||
        ([].__proto__ === Array.prototype
            ? function (e) {
                  return e.__proto__;
              }
            : null);
function M(e, n) {
    if (e === 1 / 0 || e === -1 / 0 || e != e || (e && e > -1000 && e < 1000) || T.call(/e/, n)) return n;
    var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if ('number' == typeof e) {
        var i = e < 0 ? -N(-e) : N(e);
        if (i !== e) {
            var a = String(i),
                o = v.call(n, a.length + 1);
            return y.call(a, r, '$&_') + '.' + y.call(y.call(o, /([0-9]{3})/g, '$&_'), /_$/, '');
        }
    }
    return y.call(n, r, '$&_');
}
var k = r(771673),
    U = k.custom,
    B = z(U) ? U : null;
function G(e, n, r) {
    var i = 'double' === (r.quoteStyle || n) ? '"' : "'";
    return i + e + i;
}
function Z(e) {
    return y.call(String(e), /"/g, '&quot;');
}
function F(e) {
    return '[object Array]' === J(e) && (!x || !('object' == typeof e && x in e));
}
function V(e) {
    return '[object Date]' === J(e) && (!x || !('object' == typeof e && x in e));
}
function j(e) {
    return '[object RegExp]' === J(e) && (!x || !('object' == typeof e && x in e));
}
function H(e) {
    return '[object Error]' === J(e) && (!x || !('object' == typeof e && x in e));
}
function Y(e) {
    return '[object String]' === J(e) && (!x || !('object' == typeof e && x in e));
}
function W(e) {
    return '[object Number]' === J(e) && (!x || !('object' == typeof e && x in e));
}
function K(e) {
    return '[object Boolean]' === J(e) && (!x || !('object' == typeof e && x in e));
}
function z(e) {
    if (L) return e && 'object' == typeof e && e instanceof Symbol;
    if ('symbol' == typeof e) return !0;
    if (!e || 'object' != typeof e || !D) return !1;
    try {
        return D.call(e), !0;
    } catch (e) {}
    return !1;
}
function q(e) {
    if (!e || 'object' != typeof e || !R) return !1;
    try {
        return R.call(e), !0;
    } catch (e) {}
    return !1;
}
e.exports = function e(n, i, a, l) {
    var u = i || {};
    if (X(u, 'quoteStyle') && 'single' !== u.quoteStyle && 'double' !== u.quoteStyle) throw TypeError('option "quoteStyle" must be "single" or "double"');
    if (X(u, 'maxStringLength') && ('number' == typeof u.maxStringLength ? u.maxStringLength < 0 && u.maxStringLength !== 1 / 0 : null !== u.maxStringLength)) throw TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var f = !X(u, 'customInspect') || u.customInspect;
    if ('boolean' != typeof f && 'symbol' !== f) throw TypeError('option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`');
    if (X(u, 'indent') && null !== u.indent && '\t' !== u.indent && !(parseInt(u.indent, 10) === u.indent && u.indent > 0)) throw TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (X(u, 'numericSeparator') && 'boolean' != typeof u.numericSeparator) throw TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var p = u.numericSeparator;
    if (void 0 === n) return 'undefined';
    if (null === n) return 'null';
    if ('boolean' == typeof n) return n ? 'true' : 'false';
    if ('string' == typeof n) return es(n, u);
    if ('number' == typeof n) {
        if (0 === n) return 1 / 0 / n > 0 ? '0' : '-0';
        var h = String(n);
        return p ? M(n, h) : h;
    }
    if ('bigint' == typeof n) {
        var m = String(n) + 'n';
        return p ? M(n, m) : m;
    }
    var g = void 0 === u.depth ? 5 : u.depth;
    if ((void 0 === a && (a = 0), a >= g && g > 0 && 'object' == typeof n)) return F(n) ? '[Array]' : '[Object]';
    var E = ep(u, a);
    if (void 0 === l) l = [];
    else if (ee(l, n) >= 0) return '[Circular]';
    function b(n, r, i) {
        if ((r && (l = C.call(l)).push(r), i)) {
            var o = { depth: u.depth };
            return X(u, 'quoteStyle') && (o.quoteStyle = u.quoteStyle), e(n, o, a + 1, l);
        }
        return e(n, u, a + 1, l);
    }
    if ('function' == typeof n && !j(n)) {
        var T = $(n),
            N = e_(n, b);
        return '[Function' + (T ? ': ' + T : ' (anonymous)') + ']' + (N.length > 0 ? ' { ' + A.call(N, ', ') + ' }' : '');
    }
    if (z(n)) {
        var O = L ? y.call(String(n), /^(Symbol\(.*\))_[^)]*$/, '$1') : D.call(n);
        return 'object' != typeof n || L ? O : eu(O);
    }
    if (eo(n)) {
        for (var U = '<' + I.call(String(n.nodeName)), Q = n.attributes || [], el = 0; el < Q.length; el++) U += ' ' + Q[el].name + '=' + G(Z(Q[el].value), 'double', u);
        return (U += '>'), n.childNodes && n.childNodes.length && (U += '...'), (U += '</' + I.call(String(n.nodeName)) + '>');
    }
    if (F(n)) {
        if (0 === n.length) return '[]';
        var em = e_(n, b);
        return E && !ef(em) ? '[' + eh(em, E) + ']' : '[ ' + A.call(em, ', ') + ' ]';
    }
    if (H(n)) {
        var eg = e_(n, b);
        return 'cause' in Error.prototype || !('cause' in n) || w.call(n, 'cause') ? (0 === eg.length ? '[' + String(n) + ']' : '{ [' + String(n) + '] ' + A.call(eg, ', ') + ' }') : '{ [' + String(n) + '] ' + A.call(S.call('[cause]: ' + b(n.cause), eg), ', ') + ' }';
    }
    if ('object' == typeof n && f) {
        if (B && 'function' == typeof n[B] && k) return k(n, { depth: g - a });
        if ('symbol' !== f && 'function' == typeof n.inspect) return n.inspect();
    }
    if (et(n)) {
        var eE = [];
        return (
            s &&
                s.call(n, function (e, r) {
                    eE.push(b(r, n, !0) + ' => ' + b(e, n));
                }),
            ed('Map', o.call(n), eE, E)
        );
    }
    if (ei(n)) {
        var ev = [];
        return (
            d &&
                d.call(n, function (e) {
                    ev.push(b(e, n));
                }),
            ed('Set', c.call(n), ev, E)
        );
    }
    if (en(n)) return ec('WeakMap');
    if (ea(n)) return ec('WeakSet');
    if (er(n)) return ec('WeakRef');
    if (W(n)) return eu(b(Number(n)));
    if (q(n)) return eu(b(R.call(n)));
    if (K(n)) return eu(_.call(n));
    if (Y(n)) return eu(b(String(n)));
    if ('undefined' != typeof window && n === window) return '{ [object Window] }';
    if (n === r.g) return '{ [object globalThis] }';
    if (!V(n) && !j(n)) {
        var ey = e_(n, b),
            eb = P ? P(n) === Object.prototype : n instanceof Object || n.constructor === Object,
            eI = n instanceof Object ? '' : 'null prototype',
            eT = !eb && x && Object(n) === n && x in n ? v.call(J(n), 8, -1) : eI ? 'Object' : '',
            eS = (eb || 'function' != typeof n.constructor ? '' : n.constructor.name ? n.constructor.name + ' ' : '') + (eT || eI ? '[' + A.call(S.call([], eT || [], eI || []), ': ') + '] ' : '');
        return 0 === ey.length ? eS + '{}' : E ? eS + '{' + eh(ey, E) + '}' : eS + '{ ' + A.call(ey, ', ') + ' }';
    }
    return String(n);
};
var Q =
    Object.prototype.hasOwnProperty ||
    function (e) {
        return e in this;
    };
function X(e, n) {
    return Q.call(e, n);
}
function J(e) {
    return m.call(e);
}
function $(e) {
    if (e.name) return e.name;
    var n = E.call(g.call(e), /^function\s*([\w$]+)/);
    return n ? n[1] : null;
}
function ee(e, n) {
    if (e.indexOf) return e.indexOf(n);
    for (var r = 0, i = e.length; r < i; r++) if (e[r] === n) return r;
    return -1;
}
function et(e) {
    if (!o || !e || 'object' != typeof e) return !1;
    try {
        o.call(e);
        try {
            c.call(e);
        } catch (e) {
            return !0;
        }
        return e instanceof Map;
    } catch (e) {}
    return !1;
}
function en(e) {
    if (!f || !e || 'object' != typeof e) return !1;
    try {
        f.call(e, f);
        try {
            p.call(e, p);
        } catch (e) {
            return !0;
        }
        return e instanceof WeakMap;
    } catch (e) {}
    return !1;
}
function er(e) {
    if (!h || !e || 'object' != typeof e) return !1;
    try {
        return h.call(e), !0;
    } catch (e) {}
    return !1;
}
function ei(e) {
    if (!c || !e || 'object' != typeof e) return !1;
    try {
        c.call(e);
        try {
            o.call(e);
        } catch (e) {
            return !0;
        }
        return e instanceof Set;
    } catch (e) {}
    return !1;
}
function ea(e) {
    if (!p || !e || 'object' != typeof e) return !1;
    try {
        p.call(e, p);
        try {
            f.call(e, f);
        } catch (e) {
            return !0;
        }
        return e instanceof WeakSet;
    } catch (e) {}
    return !1;
}
function eo(e) {
    return !!e && 'object' == typeof e && (!!('undefined' != typeof HTMLElement && e instanceof HTMLElement) || ('string' == typeof e.nodeName && 'function' == typeof e.getAttribute));
}
function es(e, n) {
    if (e.length > n.maxStringLength) {
        var r = e.length - n.maxStringLength,
            i = '... ' + r + ' more character' + (r > 1 ? 's' : '');
        return es(v.call(e, 0, n.maxStringLength), n) + i;
    }
    return G(y.call(y.call(e, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, el), 'single', n);
}
function el(e) {
    var n = e.charCodeAt(0),
        r = {
            8: 'b',
            9: 't',
            10: 'n',
            12: 'f',
            13: 'r'
        }[n];
    return r ? '\\' + r : '\\x' + (n < 16 ? '0' : '') + b.call(n.toString(16));
}
function eu(e) {
    return 'Object(' + e + ')';
}
function ec(e) {
    return e + ' { ? }';
}
function ed(e, n, r, i) {
    return e + ' (' + n + ') {' + (i ? eh(r, i) : A.call(r, ', ')) + '}';
}
function ef(e) {
    for (var n = 0; n < e.length; n++) if (ee(e[n], '\n') >= 0) return !1;
    return !0;
}
function ep(e, n) {
    var r;
    if ('\t' === e.indent) r = '\t';
    else {
        if ('number' != typeof e.indent || !(e.indent > 0)) return null;
        r = A.call(Array(e.indent + 1), ' ');
    }
    return {
        base: r,
        prev: A.call(Array(n + 1), r)
    };
}
function eh(e, n) {
    if (0 === e.length) return '';
    var r = '\n' + n.prev + n.base;
    return r + A.call(e, ',' + r) + '\n' + n.prev;
}
function e_(e, n) {
    var r,
        i = F(e),
        a = [];
    if (i) {
        a.length = e.length;
        for (var o = 0; o < e.length; o++) a[o] = X(e, o) ? n(e[o], e) : '';
    }
    var s = 'function' == typeof O ? O(e) : [];
    if (L) {
        r = {};
        for (var l = 0; l < s.length; l++) r['$' + s[l]] = s[l];
    }
    for (var u in e) {
        if (!X(e, u) || (i && String(Number(u)) === u && u < e.length)) continue;
        if (!(L && r['$' + u] instanceof Symbol)) T.call(/[^\w$]/, u) ? a.push(n(u, e) + ': ' + n(e[u], e)) : a.push(u + ': ' + n(e[u], e));
    }
    if ('function' == typeof O) for (var c = 0; c < s.length; c++) w.call(e, s[c]) && a.push('[' + n(s[c]) + ']: ' + n(e[s[c]], e));
    return a;
}
