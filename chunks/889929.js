n.d(t, {
    Wz: () => E,
    m9: () => s,
    re: () =>
        function e(t, n = {}, a) {
            if ("function" != typeof t) return t;
            try {
                let e = t.__sentry_wrapped__;
                if (e) return e;
                if ((0, o.HK)(t)) return t;
            } catch (e) {
                return t;
            }
            let s = function () {
                let o = Array.prototype.slice.call(arguments);
                try {
                    a && "function" == typeof a && a.apply(this, arguments);
                    let r = o.map((t) => e(t, n));
                    return t.apply(this, r);
                } catch (e) {
                    throw (
                        (c++,
                        setTimeout(() => {
                            c--;
                        }),
                        (0, r.$e)((t) => {
                            t.addEventProcessor(
                                (e) => (
                                    n.mechanism && ((0, _.Db)(e, void 0, void 0), (0, _.EG)(e, n.mechanism)),
                                    (e.extra = {
                                        ...e.extra,
                                        arguments: o,
                                    }),
                                    e
                                ),
                            ),
                                (0, i.Tb)(e);
                        }),
                        e)
                    );
                }
            };
            try {
                for (let e in t) Object.prototype.hasOwnProperty.call(t, e) && (s[e] = t[e]);
            } catch (e) {}
            (0, o.$Q)(s, t), (0, o.xp)(t, "__sentry_wrapped__", s);
            try {
                Object.getOwnPropertyDescriptor(s, "name").configurable &&
                    Object.defineProperty(s, "name", { get: () => t.name });
            } catch (e) {}
            return s;
        },
});
var r = n(509440),
    i = n(771560),
    a = n(606093),
    o = n(886649),
    _ = n(431660);
let s = a.n,
    c = 0;
function E() {
    return c > 0;
}
