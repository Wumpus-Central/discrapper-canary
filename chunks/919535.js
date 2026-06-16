"use strict";
n.d(t, {
    $: () => r,
    Ae: () =>
        function e(t) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { limit: 200, hasBailedAst: !1 };
            if (Array.isArray(t)) {
                let r = t.length;
                for (let s = 0; s < r; s++) {
                    let { ast: r } = e(t[s], n);
                    if (r === i) {
                        (n.hasBailedAst = !0), (t.length = s);
                        break;
                    }
                    t[s] = r;
                }
            } else if ("text" !== t.type) {
                if (((n.limit -= 1), n.limit <= 0)) return (n.hasBailedAst = !0), { ast: i, hasBailedAst: !0 };
                if (Array.isArray(t.content)) {
                    let { ast: i } = e(t.content, n);
                    t.content = i;
                }
                "list" === t.type &&
                    (t.items = t.items.map((t) => {
                        let { ast: i } = e(t, n);
                        return i;
                    }));
            }
            return { ast: t, hasBailedAst: n.hasBailedAst };
        },
    rI: () =>
        function e(t, n) {
            let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            if (Array.isArray(n)) {
                let r = n.length,
                    s = [];
                for (let a = 0; a < r; a++)
                    !(function (e, t) {
                        if (Array.isArray(t)) {
                            let { length: n } = t;
                            for (let i = 0; i < n; i++) e.push(t[i]);
                            return;
                        }
                        e.push(t);
                    })(s, e(t, n[a], i));
                return (
                    t.isSlate ||
                        (function (e) {
                            let t = null;
                            for (let n = 0; n < e.length; n++) {
                                let i = e[n];
                                if (null == t || "text" != t.type || t.type != i.type) {
                                    t = i;
                                    continue;
                                }
                                (t.content += i.content), e.splice(n, 1), n--;
                            }
                        })(s),
                    s
                );
            }
            return (null != n.content && (n.content = e(t, n.content, n)),
            "inlineCode" === n.type && delete n.validationChildContent,
            "list" === n.type && (n.items = n.items.map((n) => (Array.isArray(n) ? e(t, n, null) : n))),
            null != i && n.type === i.type)
                ? n.content
                : n;
        },
}),
    n(321073);
let i = {};
function r(e) {
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
