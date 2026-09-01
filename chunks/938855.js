let r;
l.d(t, { F: () => u, Q4: () => f, W9: () => m });
var s = l(875538);
let n = new Map(),
    a = new Map(),
    c = new Set();
function o(e) {
    let t = n.get(e);
    if (null != t) return t;
    if (!(e in s.pb)) {
        let t = Promise.resolve(null);
        return n.set(e, t), t;
    }
    return (
        (t = (null == r && (r = (0, s.A)()), r)
            .then((t) => t.loadGrammar(s.pb[e]))
            .then((t) => {
                for (let l of (a.set(e, t), c)) l(e);
                return t;
            })),
        n.set(e, t),
        t
    );
}
function p(e) {
    return {
        highlightToHtml(t) {
            let l = e.createSession();
            try {
                l.setText(t);
                let { html: e, missingInjections: r } = l.highlightToHtml();
                return { html: e, missingInjections: r };
            } finally {
                l.free();
            }
        },
    };
}
let i = new Map();
async function h(e) {
    try {
        let t = await o(e);
        return null == t ? null : p(t);
    } catch (t) {
        throw (i.delete(e), t);
    }
}
function m(e) {
    let t = i.get(e);
    return null == t && ((t = h(e)), i.set(e, t)), t;
}
function u(e) {
    let t = a.has(e) ? (a.get(e) ?? null) : (o(e), null);
    return null != t ? p(t) : null;
}
function f(e) {
    return c.add(e), () => c.delete(e);
}
