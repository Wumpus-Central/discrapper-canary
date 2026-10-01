let n;
l.d(t, { F: () => d, Q4: () => f, W9: () => m });
var s = l(915639);
let r = new Map(),
    a = new Map(),
    c = new Set(),
    o = Promise.resolve();
function i(e) {
    let t = r.get(e);
    if (null != t) return t;
    if (!(e in s.pb)) {
        let t = Promise.resolve(null);
        return (r.set(e, t), t);
    }
    return (
        (o = (t = o
            .then(async () => {
                let t = await (null == n &&
                    (n = Promise.resolve()
                        .then(() => (0, s.A)())
                        .catch(() => null)
                        .then((e) => (null == e && (n = void 0), e))),
                n);
                return null == t ? null : t.loadGrammar(s.pb[e]);
            })
            .then((t) => {
                if (null == t) return (r.delete(e), a.delete(e), null);
                for (let l of (a.set(e, t), c)) l(e);
                return t;
            })
            .catch(() => (r.delete(e), a.delete(e), null))).then(
            () => {},
            () => {},
        )),
        r.set(e, t),
        t
    );
}
function h(e) {
    return {
        highlightToHtml(t) {
            let l = e.createSession();
            try {
                l.setText(t);
                let { html: e, missingInjections: n } = l.highlightToHtml();
                return { html: e, missingInjections: n.sort() };
            } finally {
                l.free();
            }
        },
    };
}
let u = new Map();
async function p(e) {
    try {
        let t = await i(e);
        return null == t ? null : h(t);
    } catch {
        return null;
    }
}
function m(e) {
    let t = u.get(e);
    return (null == t && ((t = p(e)), u.set(e, t)), t);
}
function d(e) {
    let t = a.has(e) ? (a.get(e) ?? null) : (i(e), null);
    return null != t ? h(t) : null;
}
function f(e) {
    return (c.add(e), () => c.delete(e));
}
