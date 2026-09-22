let r;
l.d(t, { F: () => m, Q4: () => p, W9: () => h });
var n = l(915639);
let s = new Map(),
    i = new Map(),
    a = new Set();
function o(e) {
    let t = s.get(e);
    if (null != t) return t;
    if (!(e in n.pb)) {
        let t = Promise.resolve(null);
        return (s.set(e, t), t);
    }
    return (
        (t = (null == r && (r = (0, n.A)()), r)
            .then((t) => t.loadGrammar(n.pb[e]))
            .then((t) => {
                for (let l of (i.set(e, t), a)) l(e);
                return t;
            })),
        s.set(e, t),
        t
    );
}
function c(e) {
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
async function u(e) {
    try {
        let t = await o(e);
        return null == t ? null : c(t);
    } catch (t) {
        throw (d.delete(e), t);
    }
}
function h(e) {
    let t = d.get(e);
    return (null == t && ((t = u(e)), d.set(e, t)), t);
}
function m(e) {
    let t = i.has(e) ? (i.get(e) ?? null) : (o(e), null);
    return null != t ? c(t) : null;
}
function p(e) {
    return (a.add(e), () => a.delete(e));
}
