n.d(t, {
    $v: () => u,
    JE: () => d,
    NQ: () => l,
    wB: () => c,
}),
    n(896048);
var r = n(121894);
let i = new WeakMap(),
    a = new Map(),
    s = new WeakMap();

function o(e) {
    return new e.ResizeObserver((e) => {
        (0, r.r)(() => {
            for (let t of e) {
                let e = t.target,
                    n = i.get(e);
                if (null == n) continue;
                let r = a.get(n);
                null != r && r(t);
            }
        });
    });
}

function l(e, t, n) {
    var r, l;
    i.set(t, e), a.set(e, n);
    let c = null != (r = null == (l = t.ownerDocument) ? void 0 : l.defaultView) ? r : window,
        u = s.get(c);
    return null == u && ((u = o(c)), s.set(c, u)), u;
}

function c(e, t) {
    e.observe(t);
}

function u(e, t) {
    e.unobserve(t);
}

function d(e, t) {
    a.delete(e), null != t && i.delete(t);
}
