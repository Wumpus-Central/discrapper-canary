var i = 'function' == typeof Map && Map.prototype,
    a = Object.getOwnPropertyDescriptor && i ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null,
    s = i && a && 'function' == typeof a.get ? a.get : null,
    o = i && Map.prototype.forEach,
    l = 'function' == typeof Set && Set.prototype,
    u = Object.getOwnPropertyDescriptor && l ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null,
    c = l && u && 'function' == typeof u.get ? u.get : null,
    d = l && Set.prototype.forEach,
    f = 'function' == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null,
    _ = 'function' == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null,
    h = 'function' == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null,
    p = Boolean.prototype.valueOf,
    m = Object.prototype.toString,
    g = Function.prototype.toString,
    E = String.prototype.match,
    v = String.prototype.slice,
    I = String.prototype.replace,
    T = String.prototype.toUpperCase,
    b = String.prototype.toLowerCase,
    y = RegExp.prototype.test,
    S = Array.prototype.concat,
    A = Array.prototype.join,
    N = Array.prototype.slice,
    C = Math.floor,
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
    if (e === 1 / 0 || e === -1 / 0 || e != e || (e && e > -1000 && e < 1000) || y.call(/e/, n)) return n;
    var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if ('number' == typeof e) {
        var i = e < 0 ? -C(-e) : C(e);
        if (i !== e) {
            var a = String(i),
                s = v.call(n, a.length + 1);
            return I.call(a, r, '$&_') + '.' + I.call(I.call(s, /([0-9]{3})/g, '$&_'), /_$/, '');
        }
    }
    return I.call(n, r, '$&_');
}
var k = r(771673),
    U = k.custom,
    B = z(U) ? U : null;
function G(e, n, r) {
    var i = 'double' === (r.quoteStyle || n) ? '"' : "'";
    return i + e + i;
}
function Z(e) {
    return I.call(String(e), /"/g, '&quot;');
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
    var _ = u.numericSeparator;
    if (void 0 === n) return 'undefined';
    if (null === n) return 'null';
    if ('boolean' == typeof n) return n ? 'true' : 'false';
    if ('string' == typeof n) return eo(n, u);
    if ('number' == typeof n) {
        if (0 === n) return 1 / 0 / n > 0 ? '0' : '-0';
        var h = String(n);
        return _ ? M(n, h) : h;
    }
    if ('bigint' == typeof n) {
        var m = String(n) + 'n';
        return _ ? M(n, m) : m;
    }
    var g = void 0 === u.depth ? 5 : u.depth;
    if ((void 0 === a && (a = 0), a >= g && g > 0 && 'object' == typeof n)) return F(n) ? '[Array]' : '[Object]';
    var E = e_(u, a);
    if (void 0 === l) l = [];
    else if (ee(l, n) >= 0) return '[Circular]';
    function T(n, r, i) {
        if ((r && (l = N.call(l)).push(r), i)) {
            var s = { depth: u.depth };
            return X(u, 'quoteStyle') && (s.quoteStyle = u.quoteStyle), e(n, s, a + 1, l);
        }
        return e(n, u, a + 1, l);
    }
    if ('function' == typeof n && !j(n)) {
        var y = $(n),
            C = ep(n, T);
        return '[Function' + (y ? ': ' + y : ' (anonymous)') + ']' + (C.length > 0 ? ' { ' + A.call(C, ', ') + ' }' : '');
    }
    if (z(n)) {
        var O = L ? I.call(String(n), /^(Symbol\(.*\))_[^)]*$/, '$1') : D.call(n);
        return 'object' != typeof n || L ? O : eu(O);
    }
    if (es(n)) {
        for (var U = '<' + b.call(String(n.nodeName)), Q = n.attributes || [], el = 0; el < Q.length; el++) U += ' ' + Q[el].name + '=' + G(Z(Q[el].value), 'double', u);
        return (U += '>'), n.childNodes && n.childNodes.length && (U += '...'), (U += '</' + b.call(String(n.nodeName)) + '>');
    }
    if (F(n)) {
        if (0 === n.length) return '[]';
        var em = ep(n, T);
        return E && !ef(em) ? '[' + eh(em, E) + ']' : '[ ' + A.call(em, ', ') + ' ]';
    }
    if (H(n)) {
        var eg = ep(n, T);
        return 'cause' in Error.prototype || !('cause' in n) || w.call(n, 'cause') ? (0 === eg.length ? '[' + String(n) + ']' : '{ [' + String(n) + '] ' + A.call(eg, ', ') + ' }') : '{ [' + String(n) + '] ' + A.call(S.call('[cause]: ' + T(n.cause), eg), ', ') + ' }';
    }
    if ('object' == typeof n && f) {
        if (B && 'function' == typeof n[B] && k) return k(n, { depth: g - a });
        if ('symbol' !== f && 'function' == typeof n.inspect) return n.inspect();
    }
    if (et(n)) {
        var eE = [];
        return (
            o &&
                o.call(n, function (e, r) {
                    eE.push(T(r, n, !0) + ' => ' + T(e, n));
                }),
            ed('Map', s.call(n), eE, E)
        );
    }
    if (ei(n)) {
        var ev = [];
        return (
            d &&
                d.call(n, function (e) {
                    ev.push(T(e, n));
                }),
            ed('Set', c.call(n), ev, E)
        );
    }
    if (en(n)) return ec('WeakMap');
    if (ea(n)) return ec('WeakSet');
    if (er(n)) return ec('WeakRef');
    if (W(n)) return eu(T(Number(n)));
    if (q(n)) return eu(T(R.call(n)));
    if (K(n)) return eu(p.call(n));
    if (Y(n)) return eu(T(String(n)));
    if ('undefined' != typeof window && n === window) return '{ [object Window] }';
    if (n === r.g) return '{ [object globalThis] }';
    if (!V(n) && !j(n)) {
        var eI = ep(n, T),
            eT = P ? P(n) === Object.prototype : n instanceof Object || n.constructor === Object,
            eb = n instanceof Object ? '' : 'null prototype',
            ey = !eT && x && Object(n) === n && x in n ? v.call(J(n), 8, -1) : eb ? 'Object' : '',
            eS = (eT || 'function' != typeof n.constructor ? '' : n.constructor.name ? n.constructor.name + ' ' : '') + (ey || eb ? '[' + A.call(S.call([], ey || [], eb || []), ': ') + '] ' : '');
        return 0 === eI.length ? eS + '{}' : E ? eS + '{' + eh(eI, E) + '}' : eS + '{ ' + A.call(eI, ', ') + ' }';
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
    if (!s || !e || 'object' != typeof e) return !1;
    try {
        s.call(e);
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
            _.call(e, _);
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
            s.call(e);
        } catch (e) {
            return !0;
        }
        return e instanceof Set;
    } catch (e) {}
    return !1;
}
function ea(e) {
    if (!_ || !e || 'object' != typeof e) return !1;
    try {
        _.call(e, _);
        try {
            f.call(e, f);
        } catch (e) {
            return !0;
        }
        return e instanceof WeakSet;
    } catch (e) {}
    return !1;
}
function es(e) {
    return !!e && 'object' == typeof e && (!!('undefined' != typeof HTMLElement && e instanceof HTMLElement) || ('string' == typeof e.nodeName && 'function' == typeof e.getAttribute));
}
function eo(e, n) {
    if (e.length > n.maxStringLength) {
        var r = e.length - n.maxStringLength,
            i = '... ' + r + ' more character' + (r > 1 ? 's' : '');
        return eo(v.call(e, 0, n.maxStringLength), n) + i;
    }
    return G(I.call(I.call(e, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, el), 'single', n);
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
    return r ? '\\' + r : '\\x' + (n < 16 ? '0' : '') + T.call(n.toString(16));
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
function e_(e, n) {
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
function ep(e, n) {
    var r,
        i = F(e),
        a = [];
    if (i) {
        a.length = e.length;
        for (var s = 0; s < e.length; s++) a[s] = X(e, s) ? n(e[s], e) : '';
    }
    var o = 'function' == typeof O ? O(e) : [];
    if (L) {
        r = {};
        for (var l = 0; l < o.length; l++) r['$' + o[l]] = o[l];
    }
    for (var u in e) {
        if (!X(e, u) || (i && String(Number(u)) === u && u < e.length)) continue;
        if (!(L && r['$' + u] instanceof Symbol)) y.call(/[^\w$]/, u) ? a.push(n(u, e) + ': ' + n(e[u], e)) : a.push(u + ': ' + n(e[u], e));
    }
    if ('function' == typeof O) for (var c = 0; c < o.length; c++) w.call(e, o[c]) && a.push('[' + n(o[c]) + ']: ' + n(e[o[c]], e));
    return a;
}
