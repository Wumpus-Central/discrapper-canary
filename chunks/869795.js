n.d(t, {
    EG: () => c,
    N9: () => a,
    au: () => s,
    j5: () => l,
});
var r = n(408713),
    i = n(723906);

function a(e) {
    return (0, r.lg)() ? e.altKey : e.ctrlKey;
}

function s(e, t) {
    var n, r;
    let i = `[data-key="${CSS.escape(String(t))}"]`,
        a = null == (n = e.current) ? void 0 : n.dataset.collection;
    return a && (i = `[data-collection="${CSS.escape(a)}"]${i}`), null == (r = e.current) ? void 0 : r.querySelector(i);
}
let o = new WeakMap();

function l(e) {
    let t = (0, i.Bi)();
    return o.set(e, t), t;
}

function c(e) {
    return o.get(e);
}
