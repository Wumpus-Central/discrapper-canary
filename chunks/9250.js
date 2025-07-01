(n.d(t, { ur: () => i }), n(73800), 'undefined' != typeof window && window.document && window.document.createElement);
let r = new Map();
function i(e, t) {
    if (e === t) return e;
    let n = r.get(e);
    if (n) return (n.forEach((e) => (e.current = t)), t);
    let i = r.get(t);
    return i ? (i.forEach((t) => (t.current = e)), e) : t;
}
'undefined' != typeof FinalizationRegistry &&
    new FinalizationRegistry((e) => {
        r.delete(e);
    });
