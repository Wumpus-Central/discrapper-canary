"use strict";
n.r(t), n.d(t, { default: () => p });
var i = n(79719),
    r = n(735438),
    s = n.n(r);
n(321073);
let a = { 1: "bold", 4: "underline" },
    o = { 30: "black", 31: "red", 32: "green", 33: "yellow", 34: "blue", 35: "magenta", 36: "cyan", 37: "white" },
    l = { 40: "black", 41: "red", 42: "green", 43: "yellow", 44: "blue", 45: "magenta", 46: "cyan", 47: "white" },
    d = /\x1B\[(\d+(?:[:;]\d+)*)m/,
    _ = RegExp(`(?=${d.source})`);
function u(e, t, n, i) {
    let r = ["0", ...n];
    return (
        i && r.push(...Object.keys(t)),
        Object.entries(t).map((t) => {
            let [n, i] = t;
            return {
                className: `ansi-${e}-${i}`,
                endsParent: !0,
                begin: _,
                "on:begin": (e, t) => {
                    let i = e[1].split(";");
                    for (let e of (void 0 === t.data.isOn && (t.data.isOn = !1), i))
                        e === n ? (t.data.isOn = !0) : r.includes(e) && (t.data.isOn = !1);
                    t.data.isOn || t.ignoreMatch();
                },
            };
        })
    );
}
i.A.registerLanguage("ansi", function () {
    let e = [
        ...u("foreground", o, ["38", "39"], !0),
        ...u("background", l, ["48", "49"], !0),
        ...u("style", a, [], !1),
        { className: "ansi-control-sequence", begin: d, starts: { end: _, endsParent: !0 } },
    ];
    return (
        (function (e) {
            for (let t = 0; t < e.length; t++) e[t].contains = e.slice(t + 1);
        })(e),
        { contains: [{ begin: _, contains: e }] }
    );
});
let c = /(<script\/?\\?>)|(html\\?`)/g,
    E = new Set(["html", "xml", "javascript", "typescript", "handlebars"]),
    h = /^[a-z0-9_+\-.#]+$/,
    m = i.A.listLanguages(),
    f = new Map();
for (let e of m) {
    e = e.toLowerCase();
    let t = i.A.getLanguage(e);
    if (null == t) continue;
    let n = t.aliases;
    if ((f.set(e, e), null != n)) for (let t of n) f.set(t.toLowerCase(), e);
}
for (let [e, t] of f) if (null == e.match(h)) throw Error(`Language name does not match regex: ${e}`);
function g(e) {
    return f.get(e.toLowerCase());
}
let p = {
        highlight(e, t, n) {
            if (
                !(function (e, t) {
                    if (e.indexOf(A) >= 0) return !1;
                    let n = 0;
                    for (let t of e.split("\n")) {
                        if (t.length > 1e3) return !1;
                        null == t.match(/^\s*[/][/]/) && null != t.match(/[^/]/) && (n = 0);
                        let e = t.match(/[/]/g);
                        if (null != e && (n += e.length) > 30) return !1;
                    }
                    let i = g(t);
                    if (null != i && E.has(i)) {
                        let t = e.replace(/\s*/g, "").match(c);
                        if ((t?.length ?? 0) > 10) return !1;
                    }
                    return !0;
                })(t, e)
            )
                return null;
            Date.now();
            let r = i.A.highlight(t, { ignoreIllegals: n, language: e });
            Date.now();
            let s = r.value.match(/</g)?.length;
            return null != s && s > 2e3 ? null : r;
        },
        hasLanguage: (e) => null != i.A.getLanguage(e),
        isKnownLanguage: (e) => f.has(e.toLowerCase()),
        resolveLanguageName: g,
    },
    A = s().repeat("/", 15);
