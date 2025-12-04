r.d(t, {
    Wz: () => E,
    m9: () => s,
    re: () =>
        function e(t, r = {}, i) {
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
                    i && "function" == typeof i && i.apply(this, arguments);
                    let n = o.map((t) => e(t, r));
                    return t.apply(this, n);
                } catch (e) {
                    throw (
                        (c++,
                        setTimeout(() => {
                            c--;
                        }),
                        (0, n.$e)((t) => {
                            t.addEventProcessor(
                                (e) => (
                                    r.mechanism && ((0, _.Db)(e, void 0, void 0), (0, _.EG)(e, r.mechanism)),
                                    (e.extra = {
                                        ...e.extra,
                                        arguments: o,
                                    }),
                                    e
                                ),
                            ),
                                (0, a.Tb)(e);
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
var n = r(509440),
    a = r(771560),
    i = r(606093),
    o = r(886649),
    _ = r(431660);
let s = i.n,
    c = 0;
function E() {
    return c > 0;
}
