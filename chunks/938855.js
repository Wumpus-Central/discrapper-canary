let l;
r.d(t, { F: () => E, Q4: () => f, W9: () => v });
var n = r(926890);
let o = new Map(),
    i = new Map(),
    u = new Set(),
    a = Promise.resolve();
function s(e) {
    let t = o.get(e);
    if (null != t) return t;
    if (!(e in n.pb)) {
        let t = Promise.resolve(null);
        return (o.set(e, t), t);
    }
    return (
        (a = (t = a
            .then(async () => {
                let t = await (null == l &&
                    (l = Promise.resolve()
                        .then(() => (0, n.A)())
                        .catch(() => null)
                        .then((e) => (null == e && (l = void 0), e))),
                l);
                return null == t ? null : t.loadGrammar(n.pb[e]);
            })
            .then((t) => {
                if (null == t) return (o.delete(e), i.delete(e), null);
                for (let r of (i.set(e, t), u)) r(e);
                return t;
            })
            .catch(() => (o.delete(e), i.delete(e), null))).then(
            () => {},
            () => {},
        )),
        o.set(e, t),
        t
    );
}
function d(e) {
    return {
        highlightToHtml(t) {
            let r = e.createSession();
            try {
                r.setText(
                    t.endsWith("\n")
                        ? t
                        : `${t}
`,
                );
                let { html: e, missingInjections: l } = r.highlightToHtml();
                return { html: e, missingInjections: l.sort() };
            } finally {
                r.free();
            }
        },
    };
}
let c = new Map();
async function h(e) {
    try {
        let t = await s(e);
        return null == t ? null : d(t);
    } catch {
        return null;
    }
}
function v(e) {
    let t = c.get(e);
    return (null == t && ((t = h(e)), c.set(e, t)), t);
}
function E(e) {
    let t = i.has(e) ? (i.get(e) ?? null) : (s(e), null);
    return null != t ? d(t) : null;
}
function f(e) {
    return (u.add(e), () => u.delete(e));
}
