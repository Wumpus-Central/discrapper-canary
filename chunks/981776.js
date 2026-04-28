"use strict";
n.r(t), n.d(t, { default: () => x });
var l = n(79719),
    i = n(735438),
    s = n.n(i);
n(321073);
let a = { 1: "bold", 4: "underline" },
    r = { 30: "black", 31: "red", 32: "green", 33: "yellow", 34: "blue", 35: "magenta", 36: "cyan", 37: "white" },
    o = { 40: "black", 41: "red", 42: "green", 43: "yellow", 44: "blue", 45: "magenta", 46: "cyan", 47: "white" },
    c = /\x1B\[(\d+(?:[:;]\d+)*)m/,
    u = RegExp(`(?=${c.source})`);
function d(e, t, n, l) {
    let i = ["0", ...n];
    return (
        l && i.push(...Object.keys(t)),
        Object.entries(t).map((t) => {
            let [n, l] = t;
            return {
                className: `ansi-${e}-${l}`,
                endsParent: !0,
                begin: u,
                "on:begin": (e, t) => {
                    let l = e[1].split(";");
                    for (let e of (void 0 === t.data.isOn && (t.data.isOn = !1), l))
                        e === n ? (t.data.isOn = !0) : i.includes(e) && (t.data.isOn = !1);
                    t.data.isOn || t.ignoreMatch();
                },
            };
        })
    );
}
l.A.registerLanguage("ansi", function () {
    let e = [
        ...d("foreground", r, ["38", "39"], !0),
        ...d("background", o, ["48", "49"], !0),
        ...d("style", a, [], !1),
        { className: "ansi-control-sequence", begin: c, starts: { end: u, endsParent: !0 } },
    ];
    return (
        (function (e) {
            for (let t = 0; t < e.length; t++) e[t].contains = e.slice(t + 1);
        })(e),
        { contains: [{ begin: u, contains: e }] }
    );
});
let h = /(<script\/?\\?>)|(html\\?`)/g,
    m = new Set(["html", "xml", "javascript", "typescript", "handlebars"]),
    p = /^[a-z0-9_+\-.#]+$/,
    f = l.A.listLanguages(),
    g = new Map();
for (let e of f) {
    e = e.toLowerCase();
    let t = l.A.getLanguage(e);
    if (null == t) continue;
    let n = t.aliases;
    if ((g.set(e, e), null != n)) for (let t of n) g.set(t.toLowerCase(), e);
}
for (let [e, t] of g) if (null == e.match(p)) throw Error(`Language name does not match regex: ${e}`);
function _(e) {
    return g.get(e.toLowerCase());
}
let x = {
        highlight(e, t, n) {
            if (
                !(function (e, t) {
                    if (e.indexOf(C) >= 0) return !1;
                    let n = 0;
                    for (let t of e.split("\n")) {
                        if (t.length > 1e3) return !1;
                        null == t.match(/^\s*[/][/]/) && null != t.match(/[^/]/) && (n = 0);
                        let e = t.match(/[/]/g);
                        if (null != e && (n += e.length) > 30) return !1;
                    }
                    let l = _(t);
                    if (null != l && m.has(l)) {
                        let t = e.replace(/\s*/g, "").match(h);
                        if ((t?.length ?? 0) > 10) return !1;
                    }
                    return !0;
                })(t, e)
            )
                return null;
            Date.now();
            let i = l.A.highlight(t, { ignoreIllegals: n, language: e });
            Date.now();
            let s = i.value.match(/</g)?.length;
            return null != s && s > 2e3 ? null : i;
        },
        hasLanguage: (e) => null != l.A.getLanguage(e),
        isKnownLanguage: (e) => g.has(e.toLowerCase()),
        resolveLanguageName: _,
    },
    C = s().repeat("/", 15);
