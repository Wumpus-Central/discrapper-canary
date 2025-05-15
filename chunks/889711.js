n.d(t, {
    UC: () => c,
    YP: () => l,
    fO: () => u,
    pP: () => s
}),
    n(388685);
var r = n(731965);
let i = new WeakMap(),
    a = new Map(),
    o = new ResizeObserver((e) => {
        (0, r.j)(() => {
            for (let t of e) {
                let e = t.target,
                    n = i.get(e);
                if (null == n) continue;
                let r = a.get(n);
                null != r && r(t);
            }
        });
    });
function s(e, t, n) {
    return i.set(t, e), a.set(e, n), o;
}
function l(e, t) {
    e.observe(t);
}
function c(e, t) {
    e.unobserve(t);
}
function u(e, t) {
    a.delete(e), null != t && i.delete(t);
}
