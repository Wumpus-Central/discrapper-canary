let l;
n.d(t, { W9: () => h, F: () => m, Q4: () => f });
var i = n(126919);
let r = new Map(),
    s = new Map(),
    a = new Set(),
    u = Promise.resolve();
function o(e) {
    let t = r.get(e);
    if (null != t) return t;
    if (!(e in i.pb)) {
        let t = Promise.resolve(null);
        return (r.set(e, t), t);
    }
    return (
        (u = (t = u
            .then(async () => {
                let t = await (null == l &&
                    (l = Promise.resolve()
                        .then(() => (0, i.A)())
                        .catch(() => null)
                        .then((e) => (null == e && (l = void 0), e))),
                l);
                return null == t ? null : t.loadGrammar(i.pb[e]);
            })
            .then((t) => {
                if (null == t) return (r.delete(e), s.delete(e), null);
                for (let n of (s.set(e, t), a)) n(e);
                return t;
            })
            .catch(() => (r.delete(e), s.delete(e), null))).then(
            () => {},
            () => {},
        )),
        r.set(e, t),
        t
    );
}
function d(e) {
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
let c = new Map();
function h(e) {
    let t = c.get(e);
    return (
        null == t &&
            ((t = (async function (e) {
                try {
                    let t = await o(e);
                    return null == t ? null : d(t);
                } catch {
                    return null;
                }
            })(e)),
            c.set(e, t)),
        t
    );
}
function m(e) {
    let t = s.has(e) ? (s.get(e) ?? null) : (o(e), null);
    return null != t ? d(t) : null;
}
function f(e) {
    return (a.add(e), () => a.delete(e));
}
