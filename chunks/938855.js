let n;
l.d(t, { F: () => d, Q4: () => g, W9: () => m });
var r = l(915639);
let s = new Map(),
    o = new Map(),
    a = new Set(),
    c = Promise.resolve();
function i(e) {
    let t = s.get(e);
    if (null != t) return t;
    if (!(e in r.pb)) {
        let t = Promise.resolve(null);
        return (s.set(e, t), t);
    }
    return (
        (c = (t = c
            .then(async () => {
                let t = await (null == n &&
                    (n = Promise.resolve()
                        .then(() => (0, r.A)())
                        .catch(() => null)
                        .then((e) => (null == e && (n = void 0), e))),
                n);
                return null == t ? null : t.loadGrammar(r.pb[e]);
            })
            .then((t) => {
                if (null == t) return (s.delete(e), o.delete(e), null);
                for (let l of (o.set(e, t), a)) l(e);
                return t;
            })
            .catch(() => (s.delete(e), o.delete(e), null))).then(
            () => {},
            () => {},
        )),
        s.set(e, t),
        t
    );
}
function h(e) {
    return {
        highlightToHtml(t) {
            let l = e.createSession();
            try {
                l.setText(
                    t.endsWith("\n")
                        ? t
                        : `${t}
`,
                );
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
    let t = o.has(e) ? (o.get(e) ?? null) : (i(e), null);
    return null != t ? h(t) : null;
}
function g(e) {
    return (a.add(e), () => a.delete(e));
}
