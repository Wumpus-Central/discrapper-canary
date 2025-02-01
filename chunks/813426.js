var i = 'function' == typeof Map && Map.prototype,
    r = Object.getOwnPropertyDescriptor && i ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null,
    a = i && r && 'function' == typeof r.get ? r.get : null,
    s = i && Map.prototype.forEach,
    o = 'function' == typeof Set && Set.prototype,
    l = Object.getOwnPropertyDescriptor && o ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null,
    u = o && l && 'function' == typeof l.get ? l.get : null,
    c = o && Set.prototype.forEach,
    d = 'function' == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null,
    f = 'function' == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null,
    _ = 'function' == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null,
    p = Boolean.prototype.valueOf,
    h = Object.prototype.toString,
    m = Function.prototype.toString,
    g = String.prototype.match,
    E = String.prototype.slice,
    v = String.prototype.replace,
    y = String.prototype.toUpperCase,
    I = String.prototype.toLowerCase,
    T = RegExp.prototype.test,
    b = Array.prototype.concat,
    S = Array.prototype.join,
    A = Array.prototype.slice,
    N = Math.floor,
    C = 'function' == typeof BigInt ? BigInt.prototype.valueOf : null,
    R = Object.getOwnPropertySymbols,
    O = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? Symbol.prototype.toString : null,
    D = 'function' == typeof Symbol && 'object' == typeof Symbol.iterator,
    x = 'function' == typeof Symbol && Symbol.toStringTag && (typeof Symbol.toStringTag === D ? 'object' : 'symbol') ? Symbol.toStringTag : null,
    L = Object.prototype.propertyIsEnumerable,
    P =
        ('function' == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) ||
        ([].__proto__ === Array.prototype
            ? function (e) {
                  return e.__proto__;
              }
            : null);
function w(e, t) {
    if (e === 1 / 0 || e === -1 / 0 || e != e || (e && e > -1000 && e < 1000) || T.call(/e/, t)) return t;
    var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if ('number' == typeof e) {
        var i = e < 0 ? -N(-e) : N(e);
        if (i !== e) {
            var r = String(i),
                a = E.call(t, r.length + 1);
            return v.call(r, n, '$&_') + '.' + v.call(v.call(a, /([0-9]{3})/g, '$&_'), /_$/, '');
        }
    }
    return v.call(t, n, '$&_');
}
var M = n(771673),
    k = M.custom,
    U = K(k) ? k : null;
function G(e, t, n) {
    var i = 'double' === (n.quoteStyle || t) ? '"' : "'";
    return i + e + i;
}
function B(e) {
    return v.call(String(e), /"/g, '&quot;');
}
function Z(e) {
    return '[object Array]' === X(e) && (!x || !('object' == typeof e && x in e));
}
function F(e) {
    return '[object Date]' === X(e) && (!x || !('object' == typeof e && x in e));
}
function V(e) {
    return '[object RegExp]' === X(e) && (!x || !('object' == typeof e && x in e));
}
function j(e) {
    return '[object Error]' === X(e) && (!x || !('object' == typeof e && x in e));
}
function H(e) {
    return '[object String]' === X(e) && (!x || !('object' == typeof e && x in e));
}
function Y(e) {
    return '[object Number]' === X(e) && (!x || !('object' == typeof e && x in e));
}
function W(e) {
    return '[object Boolean]' === X(e) && (!x || !('object' == typeof e && x in e));
}
function K(e) {
    if (D) return e && 'object' == typeof e && e instanceof Symbol;
    if ('symbol' == typeof e) return !0;
    if (!e || 'object' != typeof e || !O) return !1;
    try {
        return O.call(e), !0;
    } catch (e) {}
    return !1;
}
function z(e) {
    if (!e || 'object' != typeof e || !C) return !1;
    try {
        return C.call(e), !0;
    } catch (e) {}
    return !1;
}
e.exports = function e(t, i, r, o) {
    var l = i || {};
    if (Q(l, 'quoteStyle') && 'single' !== l.quoteStyle && 'double' !== l.quoteStyle) throw TypeError('option "quoteStyle" must be "single" or "double"');
    if (Q(l, 'maxStringLength') && ('number' == typeof l.maxStringLength ? l.maxStringLength < 0 && l.maxStringLength !== 1 / 0 : null !== l.maxStringLength)) throw TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var d = !Q(l, 'customInspect') || l.customInspect;
    if ('boolean' != typeof d && 'symbol' !== d) throw TypeError('option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`');
    if (Q(l, 'indent') && null !== l.indent && '\t' !== l.indent && !(parseInt(l.indent, 10) === l.indent && l.indent > 0)) throw TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (Q(l, 'numericSeparator') && 'boolean' != typeof l.numericSeparator) throw TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var f = l.numericSeparator;
    if (void 0 === t) return 'undefined';
    if (null === t) return 'null';
    if ('boolean' == typeof t) return t ? 'true' : 'false';
    if ('string' == typeof t) return es(t, l);
    if ('number' == typeof t) {
        if (0 === t) return 1 / 0 / t > 0 ? '0' : '-0';
        var _ = String(t);
        return f ? w(t, _) : _;
    }
    if ('bigint' == typeof t) {
        var h = String(t) + 'n';
        return f ? w(t, h) : h;
    }
    var m = void 0 === l.depth ? 5 : l.depth;
    if ((void 0 === r && (r = 0), r >= m && m > 0 && 'object' == typeof t)) return Z(t) ? '[Array]' : '[Object]';
    var g = ef(l, r);
    if (void 0 === o) o = [];
    else if ($(o, t) >= 0) return '[Circular]';
    function y(t, n, i) {
        if ((n && (o = A.call(o)).push(n), i)) {
            var a = { depth: l.depth };
            return Q(l, 'quoteStyle') && (a.quoteStyle = l.quoteStyle), e(t, a, r + 1, o);
        }
        return e(t, l, r + 1, o);
    }
    if ('function' == typeof t && !V(t)) {
        var T = J(t),
            N = ep(t, y);
        return '[Function' + (T ? ': ' + T : ' (anonymous)') + ']' + (N.length > 0 ? ' { ' + S.call(N, ', ') + ' }' : '');
    }
    if (K(t)) {
        var R = D ? v.call(String(t), /^(Symbol\(.*\))_[^)]*$/, '$1') : O.call(t);
        return 'object' != typeof t || D ? R : el(R);
    }
    if (ea(t)) {
        for (var k = '<' + I.call(String(t.nodeName)), q = t.attributes || [], eo = 0; eo < q.length; eo++) k += ' ' + q[eo].name + '=' + G(B(q[eo].value), 'double', l);
        return (k += '>'), t.childNodes && t.childNodes.length && (k += '...'), (k += '</' + I.call(String(t.nodeName)) + '>');
    }
    if (Z(t)) {
        if (0 === t.length) return '[]';
        var eh = ep(t, y);
        return g && !ed(eh) ? '[' + e_(eh, g) + ']' : '[ ' + S.call(eh, ', ') + ' ]';
    }
    if (j(t)) {
        var em = ep(t, y);
        return 'cause' in Error.prototype || !('cause' in t) || L.call(t, 'cause') ? (0 === em.length ? '[' + String(t) + ']' : '{ [' + String(t) + '] ' + S.call(em, ', ') + ' }') : '{ [' + String(t) + '] ' + S.call(b.call('[cause]: ' + y(t.cause), em), ', ') + ' }';
    }
    if ('object' == typeof t && d) {
        if (U && 'function' == typeof t[U] && M) return M(t, { depth: m - r });
        if ('symbol' !== d && 'function' == typeof t.inspect) return t.inspect();
    }
    if (ee(t)) {
        var eg = [];
        return (
            s &&
                s.call(t, function (e, n) {
                    eg.push(y(n, t, !0) + ' => ' + y(e, t));
                }),
            ec('Map', a.call(t), eg, g)
        );
    }
    if (ei(t)) {
        var eE = [];
        return (
            c &&
                c.call(t, function (e) {
                    eE.push(y(e, t));
                }),
            ec('Set', u.call(t), eE, g)
        );
    }
    if (et(t)) return eu('WeakMap');
    if (er(t)) return eu('WeakSet');
    if (en(t)) return eu('WeakRef');
    if (Y(t)) return el(y(Number(t)));
    if (z(t)) return el(y(C.call(t)));
    if (W(t)) return el(p.call(t));
    if (H(t)) return el(y(String(t)));
    if ('undefined' != typeof window && t === window) return '{ [object Window] }';
    if (t === n.g) return '{ [object globalThis] }';
    if (!F(t) && !V(t)) {
        var ev = ep(t, y),
            ey = P ? P(t) === Object.prototype : t instanceof Object || t.constructor === Object,
            eI = t instanceof Object ? '' : 'null prototype',
            eT = !ey && x && Object(t) === t && x in t ? E.call(X(t), 8, -1) : eI ? 'Object' : '',
            eb = (ey || 'function' != typeof t.constructor ? '' : t.constructor.name ? t.constructor.name + ' ' : '') + (eT || eI ? '[' + S.call(b.call([], eT || [], eI || []), ': ') + '] ' : '');
        return 0 === ev.length ? eb + '{}' : g ? eb + '{' + e_(ev, g) + '}' : eb + '{ ' + S.call(ev, ', ') + ' }';
    }
    return String(t);
};
var q =
    Object.prototype.hasOwnProperty ||
    function (e) {
        return e in this;
    };
function Q(e, t) {
    return q.call(e, t);
}
function X(e) {
    return h.call(e);
}
function J(e) {
    if (e.name) return e.name;
    var t = g.call(m.call(e), /^function\s*([\w$]+)/);
    return t ? t[1] : null;
}
function $(e, t) {
    if (e.indexOf) return e.indexOf(t);
    for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
    return -1;
}
function ee(e) {
    if (!a || !e || 'object' != typeof e) return !1;
    try {
        a.call(e);
        try {
            u.call(e);
        } catch (e) {
            return !0;
        }
        return e instanceof Map;
    } catch (e) {}
    return !1;
}
function et(e) {
    if (!d || !e || 'object' != typeof e) return !1;
    try {
        d.call(e, d);
        try {
            f.call(e, f);
        } catch (e) {
            return !0;
        }
        return e instanceof WeakMap;
    } catch (e) {}
    return !1;
}
function en(e) {
    if (!_ || !e || 'object' != typeof e) return !1;
    try {
        return _.call(e), !0;
    } catch (e) {}
    return !1;
}
function ei(e) {
    if (!u || !e || 'object' != typeof e) return !1;
    try {
        u.call(e);
        try {
            a.call(e);
        } catch (e) {
            return !0;
        }
        return e instanceof Set;
    } catch (e) {}
    return !1;
}
function er(e) {
    if (!f || !e || 'object' != typeof e) return !1;
    try {
        f.call(e, f);
        try {
            d.call(e, d);
        } catch (e) {
            return !0;
        }
        return e instanceof WeakSet;
    } catch (e) {}
    return !1;
}
function ea(e) {
    return !!e && 'object' == typeof e && (!!('undefined' != typeof HTMLElement && e instanceof HTMLElement) || ('string' == typeof e.nodeName && 'function' == typeof e.getAttribute));
}
function es(e, t) {
    if (e.length > t.maxStringLength) {
        var n = e.length - t.maxStringLength,
            i = '... ' + n + ' more character' + (n > 1 ? 's' : '');
        return es(E.call(e, 0, t.maxStringLength), t) + i;
    }
    return G(v.call(v.call(e, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, eo), 'single', t);
}
function eo(e) {
    var t = e.charCodeAt(0),
        n = {
            8: 'b',
            9: 't',
            10: 'n',
            12: 'f',
            13: 'r'
        }[t];
    return n ? '\\' + n : '\\x' + (t < 16 ? '0' : '') + y.call(t.toString(16));
}
function el(e) {
    return 'Object(' + e + ')';
}
function eu(e) {
    return e + ' { ? }';
}
function ec(e, t, n, i) {
    return e + ' (' + t + ') {' + (i ? e_(n, i) : S.call(n, ', ')) + '}';
}
function ed(e) {
    for (var t = 0; t < e.length; t++) if ($(e[t], '\n') >= 0) return !1;
    return !0;
}
function ef(e, t) {
    var n;
    if ('\t' === e.indent) n = '\t';
    else {
        if ('number' != typeof e.indent || !(e.indent > 0)) return null;
        n = S.call(Array(e.indent + 1), ' ');
    }
    return {
        base: n,
        prev: S.call(Array(t + 1), n)
    };
}
function e_(e, t) {
    if (0 === e.length) return '';
    var n = '\n' + t.prev + t.base;
    return n + S.call(e, ',' + n) + '\n' + t.prev;
}
function ep(e, t) {
    var n,
        i = Z(e),
        r = [];
    if (i) {
        r.length = e.length;
        for (var a = 0; a < e.length; a++) r[a] = Q(e, a) ? t(e[a], e) : '';
    }
    var s = 'function' == typeof R ? R(e) : [];
    if (D) {
        n = {};
        for (var o = 0; o < s.length; o++) n['$' + s[o]] = s[o];
    }
    for (var l in e) {
        if (Q(e, l) && (!i || String(Number(l)) !== l || !(l < e.length))) !(D && n['$' + l] instanceof Symbol) && (T.call(/[^\w$]/, l) ? r.push(t(l, e) + ': ' + t(e[l], e)) : r.push(l + ': ' + t(e[l], e)));
    }
    if ('function' == typeof R) for (var u = 0; u < s.length; u++) L.call(e, s[u]) && r.push('[' + t(s[u]) + ']: ' + t(e[s[u]], e));
    return r;
}
