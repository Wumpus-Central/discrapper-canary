n.d(t, {
    Fv: () => _,
    Qy: () =>
        function e(t, n = 3, r = 102400) {
            let i = _(t, n);
            return ~-encodeURI(JSON.stringify(i)).split(/%..|./).length > r ? e(t, n - 1, r) : i;
        },
});
var r = n(661822),
    i = n(830231),
    a = n(886649),
    o = n(521257);
function _(e, t = 100, n = Infinity) {
    try {
        return (function e(t, n, _ = Infinity, s = Infinity, c = (0, i.i)()) {
            let [E, l] = c;
            if (null == n || ["boolean", "string"].includes(typeof n) || ("number" == typeof n && Number.isFinite(n)))
                return n;
            let u = (function (e, t) {
                try {
                    if ("domain" === e && t && "object" == typeof t && t._events) return "[Domain]";
                    if ("domainEmitter" === e) return "[DomainEmitter]";
                    if ("undefined" != typeof global && t === global) return "[Global]";
                    if ("undefined" != typeof window && t === window) return "[Window]";
                    if ("undefined" != typeof document && t === document) return "[Document]";
                    if ((0, r.y1)(t)) return "[VueViewModel]";
                    if ((0, r.Cy)(t)) return "[SyntheticEvent]";
                    if ("number" == typeof t && !Number.isFinite(t)) return `[${t}]`;
                    if ("function" == typeof t) return `[Function: ${(0, o.$P)(t)}]`;
                    if ("symbol" == typeof t) return `[${String(t)}]`;
                    if ("bigint" == typeof t) return `[BigInt: ${String(t)}]`;
                    let n = (function (e) {
                        let t = Object.getPrototypeOf(e);
                        return t ? t.constructor.name : "null prototype";
                    })(t);
                    if (/^HTML(\w*)Element$/.test(n)) return `[HTMLElement: ${n}]`;
                    return `[object ${n}]`;
                } catch (e) {
                    return `**non-serializable** (${e})`;
                }
            })(t, n);
            if (!u.startsWith("[object ")) return u;
            if (n.__sentry_skip_normalization__) return n;
            let d =
                "number" == typeof n.__sentry_override_normalization_depth__
                    ? n.__sentry_override_normalization_depth__
                    : _;
            if (0 === d) return u.replace("object ", "");
            if (E(n)) return "[Circular ~]";
            if (n && "function" == typeof n.toJSON)
                try {
                    let t = n.toJSON();
                    return e("", t, d - 1, s, c);
                } catch (e) {}
            let p = Array.isArray(n) ? [] : {},
                f = 0,
                I = (0, a.Sh)(n);
            for (let t in I) {
                if (!Object.prototype.hasOwnProperty.call(I, t)) continue;
                if (f >= s) {
                    p[t] = "[MaxProperties ~]";
                    break;
                }
                let n = I[t];
                (p[t] = e(t, n, d - 1, s, c)), f++;
            }
            return l(n), p;
        })("", e, t, n);
    } catch (e) {
        return { ERROR: `**non-serializable** (${e})` };
    }
}
