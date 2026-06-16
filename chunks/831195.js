"use strict";
function n(e) {
    return "IntlMessagesProxy" === e[Symbol.toStringTag];
}
Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.chainMessagesObjects = function (e, t) {
        let i = n(e),
            r = n(t),
            s = e;
        return (
            i && r
                ? (e.$$loader.fallbackWith(t.$$loader), (s = e))
                : i || r
                  ? i && !r
                      ? (s = Object.assign(e.$$baseObject, t))
                      : r && !i && (s = Object.assign(t.$$baseObject, e))
                  : (s = Object.assign(Object.assign({}, t), e)),
            s
        );
    }),
    (t.makeMessagesProxy = function (e) {
        function t(t) {
            return (n) => e.get(t, n);
        }
        let n = {},
            i = new Proxy(n, {
                ownKeys: (e) => Reflect.ownKeys(e),
                getOwnPropertyDescriptor: (e, n) => (e[n] || (e[n] = t(n)), Reflect.getOwnPropertyDescriptor(e, n)),
                get: (e, n) =>
                    "$$typeof" === n
                        ? "object"
                        : n === Symbol.toStringTag
                          ? "IntlMessagesProxy"
                          : (e[n] || (e[n] = t(n)), e[n]),
            });
        return (
            Object.defineProperty(i, "$$baseObject", { value: n, enumerable: !1, configurable: !1, writable: !1 }),
            Object.defineProperty(i, "$$loader", { value: e, enumerable: !1, configurable: !1, writable: !1 }),
            i
        );
    });
