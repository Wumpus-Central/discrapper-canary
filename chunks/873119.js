let l;
n.d(t, { W9: () => d, F: () => f, Q4: () => p });
var r = n(126919);
let u = new Map(),
    i = new Map(),
    s = new Set(),
    a = Promise.resolve();
function o(e) {
    let t = u.get(e);
    if (null != t) return t;
    if (!(e in r.pb)) {
        let t = Promise.resolve(null);
        return (u.set(e, t), t);
    }
    return (
        (a = (t = a
            .then(async () => {
                let t = await (null == l &&
                    (l = Promise.resolve()
                        .then(() => (0, r.A)())
                        .catch(() => null)
                        .then((e) => (null == e && (l = void 0), e))),
                l);
                return null == t ? null : t.loadGrammar(r.pb[e]);
            })
            .then((t) => {
                if (null == t) return (u.delete(e), i.delete(e), null);
                for (let n of (i.set(e, t), s)) n(e);
                return t;
            })
            .catch(() => (u.delete(e), i.delete(e), null))).then(
            () => {},
            () => {},
        )),
        u.set(e, t),
        t
    );
}
function c(e) {
    return {
        highlightToHtml(t) {
            let n = e.createSession();
            try {
                n.setText(
                    t.endsWith("\n")
                        ? t
                        : `${t}
`,
                );
                let { html: e, missingInjections: l } = n.highlightToHtml();
                return { html: e, missingInjections: l.sort() };
            } finally {
                n.free();
            }
        },
    };
}
let h = new Map();
function d(e) {
    let t = h.get(e);
    return (
        null == t &&
            ((t = (async function (e) {
                try {
                    let t = await o(e);
                    return null == t ? null : c(t);
                } catch {
                    return null;
                }
            })(e)),
            h.set(e, t)),
        t
    );
}
function f(e) {
    let t = i.has(e) ? (i.get(e) ?? null) : (o(e), null);
    return null != t ? c(t) : null;
}
function p(e) {
    return (s.add(e), () => s.delete(e));
}
