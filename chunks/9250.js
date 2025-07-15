(n.d(t, { ur: () => r }), n(73800), 'undefined' != typeof window && window.document && window.document.createElement);
let i = new Map();
function r(e, t) {
    if (e === t) return e;
    let n = i.get(e);
    if (n) return (n.forEach((e) => (e.current = t)), t);
    let r = i.get(t);
    return r ? (r.forEach((t) => (t.current = e)), e) : t;
}
'undefined' != typeof FinalizationRegistry &&
    new FinalizationRegistry((e) => {
        i.delete(e);
    });
