let r;
l.d(t, { F: () => p, Q4: () => g, W9: () => m });
var n = l(915639);
let s = new Map(),
    i = new Map(),
    a = new Set(),
    o = Promise.resolve();
function c(e) {
    let t = s.get(e);
    if (null != t) return t;
    if (!(e in n.pb)) {
        let t = Promise.resolve(null);
        return (s.set(e, t), t);
    }
    return (
        (o = (t = o
            .then(async () => {
                let t = await (null == r &&
                    (r = Promise.resolve()
                        .then(() => (0, n.A)())
                        .catch(() => null)
                        .then((e) => (null == e && (r = void 0), e))),
                r);
                return null == t ? null : t.loadGrammar(n.pb[e]);
            })
            .then((t) => {
                if (null == t) return (s.delete(e), i.delete(e), null);
                for (let l of (i.set(e, t), a)) l(e);
                return t;
            })
            .catch(() => (s.delete(e), i.delete(e), null))).then(
            () => {},
            () => {},
        )),
        s.set(e, t),
        t
    );
}
function u(e) {
    return {
        highlightToHtml(t) {
            let l = e.createSession();
            try {
                l.setText(t);
                let { html: e, missingInjections: r } = l.highlightToHtml();
                return { html: e, missingInjections: r.sort() };
            } finally {
                l.free();
            }
        },
    };
}
let d = new Map();
async function h(e) {
    try {
        let t = await c(e);
        return null == t ? null : u(t);
    } catch {
        return null;
    }
}
function m(e) {
    let t = d.get(e);
    return (null == t && ((t = h(e)), d.set(e, t)), t);
}
function p(e) {
    let t = i.has(e) ? (i.get(e) ?? null) : (c(e), null);
    return null != t ? u(t) : null;
}
function g(e) {
    return (a.add(e), () => a.delete(e));
}
