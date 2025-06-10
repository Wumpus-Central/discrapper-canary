a.d(e, { B: () => _ });
let r = a(899517).n;
function _() {
    let t = r.chrome,
        e = t && t.app && t.app.runtime,
        a = 'history' in r && !!r.history.pushState && !!r.history.replaceState;
    return !e && a;
}
