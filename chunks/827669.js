n.d(t, { Dx: () => s, EZ: () => l, KW: () => r, P7: () => a });
let i = [];
function r(e) {
    return `<@$${e}>`;
}
let a = /^<@\$(\d+)>/,
    s = RegExp(a.source.replace(/^\^/, ""), "g");
function l(e) {
    if (!e.includes("<@$")) return i;
    let t = [...e.matchAll(s)].map((e) => e[1]);
    return t.length > 0 ? t : i;
}
