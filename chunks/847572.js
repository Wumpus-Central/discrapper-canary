r.d(t, {
    Fv: () => _,
    Qy: () =>
        function e(t, r = 3, n = 102400) {
            let a = _(t, r);
            return ~-encodeURI(JSON.stringify(a)).split(/%..|./).length > n ? e(t, r - 1, n) : a;
        },
});
var n = r(661822),
    a = r(830231),
    i = r(886649),
    o = r(521257);
function _(e, t = 100, r = Infinity) {
    try {
        return (function e(t, r, _ = Infinity, s = Infinity, c = (0, a.i)()) {
            let [E, l] = c;
            if (null == r || ["boolean", "string"].includes(typeof r) || ("number" == typeof r && Number.isFinite(r)))
                return r;
            let u = (function (e, t) {
                try {
                    if ("domain" === e && t && "object" == typeof t && t._events) return "[Domain]";
                    if ("domainEmitter" === e) return "[DomainEmitter]";
                    if ("undefined" != typeof global && t === global) return "[Global]";
                    if ("undefined" != typeof window && t === window) return "[Window]";
                    if ("undefined" != typeof document && t === document) return "[Document]";
                    if ((0, n.y1)(t)) return "[VueViewModel]";
                    if ((0, n.Cy)(t)) return "[SyntheticEvent]";
                    if ("number" == typeof t && !Number.isFinite(t)) return `[${t}]`;
                    if ("function" == typeof t) return `[Function: ${(0, o.$P)(t)}]`;
                    if ("symbol" == typeof t) return `[${String(t)}]`;
                    if ("bigint" == typeof t) return `[BigInt: ${String(t)}]`;
                    let r = (function (e) {
                        let t = Object.getPrototypeOf(e);
                        return t ? t.constructor.name : "null prototype";
                    })(t);
                    if (/^HTML(\w*)Element$/.test(r)) return `[HTMLElement: ${r}]`;
                    return `[object ${r}]`;
                } catch (e) {
                    return `**non-serializable** (${e})`;
                }
            })(t, r);
            if (!u.startsWith("[object ")) return u;
            if (r.__sentry_skip_normalization__) return r;
            let d =
                "number" == typeof r.__sentry_override_normalization_depth__
                    ? r.__sentry_override_normalization_depth__
                    : _;
            if (0 === d) return u.replace("object ", "");
            if (E(r)) return "[Circular ~]";
            if (r && "function" == typeof r.toJSON)
                try {
                    let t = r.toJSON();
                    return e("", t, d - 1, s, c);
                } catch (e) {}
            let I = Array.isArray(r) ? [] : {},
                p = 0,
                R = (0, i.Sh)(r);
            for (let t in R) {
                if (!Object.prototype.hasOwnProperty.call(R, t)) continue;
                if (p >= s) {
                    I[t] = "[MaxProperties ~]";
                    break;
                }
                let r = R[t];
                (I[t] = e(t, r, d - 1, s, c)), p++;
            }
            return l(r), I;
        })("", e, t, r);
    } catch (e) {
        return { ERROR: `**non-serializable** (${e})` };
    }
}
