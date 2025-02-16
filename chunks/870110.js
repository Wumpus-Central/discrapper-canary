function n(e) {
    return 'IntlMessagesProxy' === e[Symbol.toStringTag];
}
function i(e, t) {
    let i = n(e),
        r = n(t),
        a = e;
    return i && r ? (e.$$loader.fallbackWith(t.$$loader), (a = e)) : i || r ? (i && !r ? (a = Object.assign(e.$$baseObject, t)) : r && !i && (a = Object.assign(t.$$baseObject, e))) : (a = Object.assign(Object.assign({}, t), e)), a;
}
function r(e) {
    function t(t) {
        return (n) => e.get(t, n);
    }
    let n = {},
        i = new Proxy(n, {
            ownKeys: (e) => Reflect.ownKeys(e),
            getOwnPropertyDescriptor: (e, n) => ({
                value: e[n] || (e[n] = t(n)),
                configurable: !0,
                enumerable: !0,
                writable: !1
            }),
            get: (e, n) => ('$$typeof' === n ? 'object' : n === Symbol.toStringTag ? 'IntlMessagesProxy' : (e[n] || (e[n] = t(n)), e[n]))
        });
    return (
        Object.defineProperty(i, '$$baseObject', {
            value: n,
            enumerable: !1,
            configurable: !1,
            writable: !1
        }),
        Object.defineProperty(i, '$$loader', {
            value: e,
            enumerable: !1,
            configurable: !1,
            writable: !1
        }),
        i
    );
}
Object.defineProperty(t, '__esModule', { value: !0 }), (t.chainMessagesObjects = i), (t.makeMessagesProxy = r);
