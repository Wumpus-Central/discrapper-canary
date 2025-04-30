n.d(t, { W: () => E });
var r = n(255367),
    i = n(73800),
    a = n(468204),
    o = n(136954),
    s = ['children'];
function l(e, t) {
    return _(e) || f(e, t) || u(e, t) || c();
}
function c() {
    throw TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}
function u(e, t) {
    if (e) {
        if ('string' == typeof e) return d(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (('Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n)) return Array.from(e);
        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t);
    }
}
function d(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
}
function f(e, t) {
    var n,
        r,
        i = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
    if (null != i) {
        var a = [],
            o = !0,
            s = !1;
        try {
            for (i = i.call(e); !(o = (n = i.next()).done) && (a.push(n.value), !t || a.length !== t); o = !0);
        } catch (e) {
            (s = !0), (r = e);
        } finally {
            try {
                o || null == i.return || i.return();
            } finally {
                if (s) throw r;
            }
        }
        return a;
    }
}
function _(e) {
    if (Array.isArray(e)) return e;
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = h(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
var m = 0,
    g = Symbol.for('__REACT_DND_CONTEXT_INSTANCE__'),
    E = (0, i.memo)(function (e) {
        var t = e.children,
            n = l(b(p(e, s)), 2),
            a = n[0],
            c = n[1];
        return (
            (0, i.useEffect)(function () {
                if (c) {
                    var e = O();
                    return (
                        ++m,
                        function () {
                            0 == --m && (e[g] = null);
                        }
                    );
                }
            }, []),
            (0, r.jsx)(o.L.Provider, Object.assign({ value: a }, { children: t }), void 0)
        );
    });
function b(e) {
    return 'manager' in e ? [{ dragDropManager: e.manager }, !1] : [y(e.backend, e.context, e.options, e.debugMode), !e.context];
}
function y(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O(),
        n = arguments.length > 2 ? arguments[2] : void 0,
        r = arguments.length > 3 ? arguments[3] : void 0,
        i = t;
    return i[g] || (i[g] = { dragDropManager: (0, a.i)(e, t, n, r) }), i[g];
}
function O() {
    return void 0 !== n.g ? n.g : window;
}
