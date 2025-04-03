var r = 'function' == typeof Map && Map.prototype,
    i = Object.getOwnPropertyDescriptor && r ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null,
    o = r && i && 'function' == typeof i.get ? i.get : null,
    a = r && Map.prototype.forEach,
    s = 'function' == typeof Set && Set.prototype,
    l = Object.getOwnPropertyDescriptor && s ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null,
    c = s && l && 'function' == typeof l.get ? l.get : null,
    u = s && Set.prototype.forEach,
    d = 'function' == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null,
    f = 'function' == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null,
    _ = 'function' == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null,
    p = Boolean.prototype.valueOf,
    h = Object.prototype.toString,
    m = Function.prototype.toString,
    g = String.prototype.match,
    E = String.prototype.slice,
    b = String.prototype.replace,
    y = String.prototype.toUpperCase,
    v = String.prototype.toLowerCase,
    O = RegExp.prototype.test,
    I = Array.prototype.concat,
    S = Array.prototype.join,
    T = Array.prototype.slice,
    N = Math.floor,
    A = 'function' == typeof BigInt ? BigInt.prototype.valueOf : null,
    C = Object.getOwnPropertySymbols,
    R = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? Symbol.prototype.toString : null,
    P = 'function' == typeof Symbol && 'object' == typeof Symbol.iterator,
    w = 'function' == typeof Symbol && Symbol.toStringTag && (typeof Symbol.toStringTag === P ? 'object' : 'symbol') ? Symbol.toStringTag : null,
    D = Object.prototype.propertyIsEnumerable,
    L =
        ('function' == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) ||
        ([].__proto__ === Array.prototype
            ? function (e) {
                  return e.__proto__;
              }
            : null);
function x(e, t) {
    if (e === 1 / 0 || e === -1 / 0 || e != e || (e && e > -1000 && e < 1000) || O.call(/e/, t)) return t;
    var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if ('number' == typeof e) {
        var r = e < 0 ? -N(-e) : N(e);
        if (r !== e) {
            var i = String(r),
                o = E.call(t, i.length + 1);
            return b.call(i, n, '$&_') + '.' + b.call(b.call(o, /([0-9]{3})/g, '$&_'), /_$/, '');
        }
    }
    return b.call(t, n, '$&_');
}
var M = n(771673),
    k = M.custom,
    j = K(k) ? k : null;
function U(e, t, n) {
    var r = 'double' === (n.quoteStyle || t) ? '"' : "'";
    return r + e + r;
}
function G(e) {
    return b.call(String(e), /"/g, '&quot;');
}
function B(e) {
    return '[object Array]' === X(e) && (!w || !('object' == typeof e && w in e));
}
function F(e) {
    return '[object Date]' === X(e) && (!w || !('object' == typeof e && w in e));
}
function V(e) {
    return '[object RegExp]' === X(e) && (!w || !('object' == typeof e && w in e));
}
function Z(e) {
    return '[object Error]' === X(e) && (!w || !('object' == typeof e && w in e));
}
function H(e) {
    return '[object String]' === X(e) && (!w || !('object' == typeof e && w in e));
}
function W(e) {
    return '[object Number]' === X(e) && (!w || !('object' == typeof e && w in e));
}
function Y(e) {
    return '[object Boolean]' === X(e) && (!w || !('object' == typeof e && w in e));
}
function K(e) {
    if (P) return e && 'object' == typeof e && e instanceof Symbol;
    if ('symbol' == typeof e) return !0;
    if (!e || 'object' != typeof e || !R) return !1;
    try {
        return R.call(e), !0;
    } catch (e) {}
    return !1;
}
function z(e) {
    if (!e || 'object' != typeof e || !A) return !1;
    try {
        return A.call(e), !0;
    } catch (e) {}
    return !1;
}
e.exports = function e(t, r, i, s) {
    var l = r || {};
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
    if ('string' == typeof t) return ea(t, l);
    if ('number' == typeof t) {
        if (0 === t) return 1 / 0 / t > 0 ? '0' : '-0';
        var _ = String(t);
        return f ? x(t, _) : _;
    }
    if ('bigint' == typeof t) {
        var h = String(t) + 'n';
        return f ? x(t, h) : h;
    }
    var m = void 0 === l.depth ? 5 : l.depth;
    if ((void 0 === i && (i = 0), i >= m && m > 0 && 'object' == typeof t)) return B(t) ? '[Array]' : '[Object]';
    var g = ef(l, i);
    if (void 0 === s) s = [];
    else if ($(s, t) >= 0) return '[Circular]';
    function y(t, n, r) {
        if ((n && (s = T.call(s)).push(n), r)) {
            var o = { depth: l.depth };
            return Q(l, 'quoteStyle') && (o.quoteStyle = l.quoteStyle), e(t, o, i + 1, s);
        }
        return e(t, l, i + 1, s);
    }
    if ('function' == typeof t && !V(t)) {
        var O = J(t),
            N = ep(t, y);
        return '[Function' + (O ? ': ' + O : ' (anonymous)') + ']' + (N.length > 0 ? ' { ' + S.call(N, ', ') + ' }' : '');
    }
    if (K(t)) {
        var C = P ? b.call(String(t), /^(Symbol\(.*\))_[^)]*$/, '$1') : R.call(t);
        return 'object' != typeof t || P ? C : el(C);
    }
    if (eo(t)) {
        for (var k = '<' + v.call(String(t.nodeName)), q = t.attributes || [], es = 0; es < q.length; es++) k += ' ' + q[es].name + '=' + U(G(q[es].value), 'double', l);
        return (k += '>'), t.childNodes && t.childNodes.length && (k += '...'), (k += '</' + v.call(String(t.nodeName)) + '>');
    }
    if (B(t)) {
        if (0 === t.length) return '[]';
        var eh = ep(t, y);
        return g && !ed(eh) ? '[' + e_(eh, g) + ']' : '[ ' + S.call(eh, ', ') + ' ]';
    }
    if (Z(t)) {
        var em = ep(t, y);
        return 'cause' in Error.prototype || !('cause' in t) || D.call(t, 'cause') ? (0 === em.length ? '[' + String(t) + ']' : '{ [' + String(t) + '] ' + S.call(em, ', ') + ' }') : '{ [' + String(t) + '] ' + S.call(I.call('[cause]: ' + y(t.cause), em), ', ') + ' }';
    }
    if ('object' == typeof t && d) {
        if (j && 'function' == typeof t[j] && M) return M(t, { depth: m - i });
        else if ('symbol' !== d && 'function' == typeof t.inspect) return t.inspect();
    }
    if (ee(t)) {
        var eg = [];
        return (
            a &&
                a.call(t, function (e, n) {
                    eg.push(y(n, t, !0) + ' => ' + y(e, t));
                }),
            eu('Map', o.call(t), eg, g)
        );
    }
    if (er(t)) {
        var eE = [];
        return (
            u &&
                u.call(t, function (e) {
                    eE.push(y(e, t));
                }),
            eu('Set', c.call(t), eE, g)
        );
    }
    if (et(t)) return ec('WeakMap');
    if (ei(t)) return ec('WeakSet');
    if (en(t)) return ec('WeakRef');
    if (W(t)) return el(y(Number(t)));
    if (z(t)) return el(y(A.call(t)));
    if (Y(t)) return el(p.call(t));
    if (H(t)) return el(y(String(t)));
    if ('undefined' != typeof window && t === window) return '{ [object Window] }';
    if (t === n.g) return '{ [object globalThis] }';
    if (!F(t) && !V(t)) {
        var eb = ep(t, y),
            ey = L ? L(t) === Object.prototype : t instanceof Object || t.constructor === Object,
            ev = t instanceof Object ? '' : 'null prototype',
            eO = !ey && w && Object(t) === t && w in t ? E.call(X(t), 8, -1) : ev ? 'Object' : '',
            eI = (ey || 'function' != typeof t.constructor ? '' : t.constructor.name ? t.constructor.name + ' ' : '') + (eO || ev ? '[' + S.call(I.call([], eO || [], ev || []), ': ') + '] ' : '');
        return 0 === eb.length ? eI + '{}' : g ? eI + '{' + e_(eb, g) + '}' : eI + '{ ' + S.call(eb, ', ') + ' }';
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
    for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
    return -1;
}
function ee(e) {
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
function er(e) {
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
function ei(e) {
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
function eo(e) {
    return !!e && 'object' == typeof e && (!!('undefined' != typeof HTMLElement && e instanceof HTMLElement) || ('string' == typeof e.nodeName && 'function' == typeof e.getAttribute));
}
function ea(e, t) {
    if (e.length > t.maxStringLength) {
        var n = e.length - t.maxStringLength,
            r = '... ' + n + ' more character' + (n > 1 ? 's' : '');
        return ea(E.call(e, 0, t.maxStringLength), t) + r;
    }
    return U(b.call(b.call(e, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, es), 'single', t);
}
function es(e) {
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
function ec(e) {
    return e + ' { ? }';
}
function eu(e, t, n, r) {
    return e + ' (' + t + ') {' + (r ? e_(n, r) : S.call(n, ', ')) + '}';
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
        r = B(e),
        i = [];
    if (r) {
        i.length = e.length;
        for (var o = 0; o < e.length; o++) i[o] = Q(e, o) ? t(e[o], e) : '';
    }
    var a = 'function' == typeof C ? C(e) : [];
    if (P) {
        n = {};
        for (var s = 0; s < a.length; s++) n['$' + a[s]] = a[s];
    }
    for (var l in e)
        if (Q(e, l) && (!r || String(Number(l)) !== l || !(l < e.length)))
            if (P && n['$' + l] instanceof Symbol) continue;
            else O.call(/[^\w$]/, l) ? i.push(t(l, e) + ': ' + t(e[l], e)) : i.push(l + ': ' + t(e[l], e));
    if ('function' == typeof C) for (var c = 0; c < a.length; c++) D.call(e, a[c]) && i.push('[' + t(a[c]) + ']: ' + t(e[a[c]], e));
    return i;
}
