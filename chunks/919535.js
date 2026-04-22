"use strict";
n.d(t, {
    $: () => i,
    Ae: () =>
        function e(t) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { limit: 200, hasBailedAst: !1 };
            if (Array.isArray(t)) {
                let i = t.length;
                for (let s = 0; s < i; s++) {
                    let { ast: i } = e(t[s], n);
                    if (i === r) {
                        (n.hasBailedAst = !0), (t.length = s);
                        break;
                    }
                    t[s] = i;
                }
            } else if ("text" !== t.type) {
                if (((n.limit -= 1), n.limit <= 0)) return (n.hasBailedAst = !0), { ast: r, hasBailedAst: !0 };
                if (Array.isArray(t.content)) {
                    let { ast: r } = e(t.content, n);
                    t.content = r;
                }
                "list" === t.type &&
                    (t.items = t.items.map((t) => {
                        let { ast: r } = e(t, n);
                        return r;
                    }));
            }
            return { ast: t, hasBailedAst: n.hasBailedAst };
        },
    rI: () =>
        function e(t, n) {
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            if (Array.isArray(n)) {
                let i = n.length,
                    s = [];
                for (let a = 0; a < i; a++)
                    !(function (e, t) {
                        if (Array.isArray(t)) {
                            let { length: n } = t;
                            for (let r = 0; r < n; r++) e.push(t[r]);
                            return;
                        }
                        e.push(t);
                    })(s, e(t, n[a], r));
                return (
                    t.isSlate ||
                        (function (e) {
                            let t = null;
                            for (let n = 0; n < e.length; n++) {
                                let r = e[n];
                                if (null == t || "text" != t.type || t.type != r.type) {
                                    t = r;
                                    continue;
                                }
                                (t.content += r.content), e.splice(n, 1), n--;
                            }
                        })(s),
                    s
                );
            }
            return (null != n.content && (n.content = e(t, n.content, n)),
            "inlineCode" === n.type && delete n.validationChildContent,
            "list" === n.type && (n.items = n.items.map((n) => (Array.isArray(n) ? e(t, n, null) : n))),
            null != r && n.type === r.type)
                ? n.content
                : n;
        },
}),
    n(321073);
let r = {};
function i(e) {
    return (function e(t) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        return (
            Array.isArray(t)
                ? t.forEach((t) => e(t, n))
                : "string" == typeof t.content
                  ? n.push(t.content)
                  : null != t.content && e(t.content, n),
            n
        );
    })(e).join("");
}
