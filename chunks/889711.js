n.d(t, {
    UC: () => c,
    YP: () => l,
    fO: () => u,
    pP: () => s
}),
    n(388685);
var r = n(731965);
let i = new WeakMap(),
    o = new Map(),
    a = new ResizeObserver((e) => {
        (0, r.j)(() => {
            for (let t of e) {
                let e = t.target,
                    n = i.get(e);
                if (null == n) continue;
                let r = o.get(n);
                null != r && r(t);
            }
        });
    });
function s(e, t, n) {
    return i.set(t, e), o.set(e, n), a;
}
function l(e, t) {
    e.observe(t);
}
function c(e, t) {
    e.unobserve(t);
}
function u(e, t) {
    o.delete(e), null != t && i.delete(t);
}
