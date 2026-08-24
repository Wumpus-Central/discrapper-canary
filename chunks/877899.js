"use strict";
function r(e) {
    return "IntlMessagesProxy" === e[Symbol.toStringTag];
}
Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.chainMessagesObjects = function (e, t) {
        let n = r(e),
            i = r(t),
            o = e;
        return (
            n && i
                ? (e.$$loader.fallbackWith(t.$$loader), (o = e))
                : n || i
                  ? n && !i
                      ? (o = Object.assign(e.$$baseObject, t))
                      : i && !n && (o = Object.assign(t.$$baseObject, e))
                  : (o = Object.assign(Object.assign({}, t), e)),
            o
        );
    }),
    (t.makeMessagesProxy = function (e) {
        function t(t) {
            return (r) => e.get(t, r);
        }
        let r = {},
            n = new Proxy(r, {
                ownKeys: (e) => Reflect.ownKeys(e),
                getOwnPropertyDescriptor: (e, r) => (e[r] || (e[r] = t(r)), Reflect.getOwnPropertyDescriptor(e, r)),
                get: (e, r) =>
                    "$$typeof" === r
                        ? "object"
                        : r === Symbol.toStringTag
                          ? "IntlMessagesProxy"
                          : (e[r] || (e[r] = t(r)), e[r]),
            });
        return (
            Object.defineProperty(n, "$$baseObject", { value: r, enumerable: !1, configurable: !1, writable: !1 }),
            Object.defineProperty(n, "$$loader", { value: e, enumerable: !1, configurable: !1, writable: !1 }),
            n
        );
    });
