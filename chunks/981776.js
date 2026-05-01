n.r(t), n.d(t, { default: () => b });
var a = n(79719),
    l = n(735438),
    r = n.n(l);
n(321073);
let s = { 1: "bold", 4: "underline" },
    i = { 30: "black", 31: "red", 32: "green", 33: "yellow", 34: "blue", 35: "magenta", 36: "cyan", 37: "white" },
    u = { 40: "black", 41: "red", 42: "green", 43: "yellow", 44: "blue", 45: "magenta", 46: "cyan", 47: "white" },
    o = /\x1B\[(\d+(?:[:;]\d+)*)m/,
    g = RegExp(`(?=${o.source})`);
function c(e, t, n, a) {
    let l = ["0", ...n];
    return (
        a && l.push(...Object.keys(t)),
        Object.entries(t).map((t) => {
            let [n, a] = t;
            return {
                className: `ansi-${e}-${a}`,
                endsParent: !0,
                begin: g,
                "on:begin": (e, t) => {
                    let a = e[1].split(";");
                    for (let e of (void 0 === t.data.isOn && (t.data.isOn = !1), a))
                        e === n ? (t.data.isOn = !0) : l.includes(e) && (t.data.isOn = !1);
                    t.data.isOn || t.ignoreMatch();
                },
            };
        })
    );
}
a.A.registerLanguage("ansi", function () {
    let e = [
        ...c("foreground", i, ["38", "39"], !0),
        ...c("background", u, ["48", "49"], !0),
        ...c("style", s, [], !1),
        { className: "ansi-control-sequence", begin: o, starts: { end: g, endsParent: !0 } },
    ];
    return (
        (function (e) {
            for (let t = 0; t < e.length; t++) e[t].contains = e.slice(t + 1);
        })(e),
        { contains: [{ begin: g, contains: e }] }
    );
});
let h = /(<script\/?\\?>)|(html\\?`)/g,
    f = new Set(["html", "xml", "javascript", "typescript", "handlebars"]),
    d = /^[a-z0-9_+\-.#]+$/,
    p = a.A.listLanguages(),
    m = new Map();
for (let e of p) {
    e = e.toLowerCase();
    let t = a.A.getLanguage(e);
    if (null == t) continue;
    let n = t.aliases;
    if ((m.set(e, e), null != n)) for (let t of n) m.set(t.toLowerCase(), e);
}
for (let [e, t] of m) if (null == e.match(d)) throw Error(`Language name does not match regex: ${e}`);
function w(e) {
    return m.get(e.toLowerCase());
}
let b = {
        highlight(e, t, n) {
            if (
                !(function (e, t) {
                    if (e.indexOf(L) >= 0) return !1;
                    let n = 0;
                    for (let t of e.split("\n")) {
                        if (t.length > 1e3) return !1;
                        null == t.match(/^\s*[/][/]/) && null != t.match(/[^/]/) && (n = 0);
                        let e = t.match(/[/]/g);
                        if (null != e && (n += e.length) > 30) return !1;
                    }
                    let a = w(t);
                    if (null != a && f.has(a)) {
                        let t = e.replace(/\s*/g, "").match(h);
                        if ((t?.length ?? 0) > 10) return !1;
                    }
                    return !0;
                })(t, e)
            )
                return null;
            Date.now();
            let l = a.A.highlight(t, { ignoreIllegals: n, language: e });
            Date.now();
            let r = l.value.match(/</g)?.length;
            return null != r && r > 2e3 ? null : l;
        },
        hasLanguage: (e) => null != a.A.getLanguage(e),
        isKnownLanguage: (e) => m.has(e.toLowerCase()),
        resolveLanguageName: w,
    },
    L = r().repeat("/", 15);
