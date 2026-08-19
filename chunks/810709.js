"use strict";
function r(e) {
    return "IntlMessagesProxy" === e[Symbol.toStringTag];
}
Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.chainMessagesObjects = function (e, t) {
        let n = r(e),
            o = r(t),
            i = e;
        return (
            n && o
                ? (e.$$loader.fallbackWith(t.$$loader), (i = e))
                : n || o
                  ? n && !o
                      ? (i = Object.assign(e.$$baseObject, t))
                      : o && !n && (i = Object.assign(t.$$baseObject, e))
                  : (i = Object.assign(Object.assign({}, t), e)),
            i
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
