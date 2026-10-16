n.d(t, { $c: () => l, DW: () => _, Fu: () => d, aW: () => c, dG: () => u, hL: () => E });
var i = n(582128),
    r = n(478676),
    a = n.n(r);
let s = "<file:(\\d{16}-[a-z0-9]{6})>",
    l = RegExp(s, "g"),
    o = new RegExp(s),
    d = i.createContext(null);
function c(e) {
    return o.test(e);
}
function u(e, t) {
    let n = t.toLowerCase();
    return "" === n
        ? [...e]
        : e.filter(
              (e) =>
                  e.name.toLowerCase().startsWith(n) ||
                  e.name
                      .toLowerCase()
                      .split(/[\s._\-()]+/)
                      .some((e) => e.startsWith(n)),
          );
}
function _(e, t) {
    if (null == e || !c(t)) return e;
    let n = new Set([...new Set(Array.from(t.matchAll(l), (e) => e[1]))]);
    return e.filter((e) => null == e.id || !n.has(e.id));
}
function E(e) {
    let t = RegExp(`^${s}`);
    return {
        order: a().defaultRules.autolink.order - 0.5,
        requiredFirstCharacters: ["<"],
        match: (e) => t.exec(e),
        parse: (e) => ({ attachmentId: e[1] }),
        react: (t, n, i) => e(t.attachmentId, i.key),
    };
}
