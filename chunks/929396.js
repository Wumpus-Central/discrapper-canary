n.d(t, { C7: () => r, Sj: () => u, qS: () => i });
var l = n(926675);
function r(e) {
    if (null == e) return null;
    let t = e.trim().toLowerCase().slice(0, 100);
    return t.length > 0 ? t : null;
}
function u(e) {
    return { id: e.id, name: e.name, icon_hash: e.icon ?? e.icon_hash ?? null };
}
function i(e) {
    return !l.Z.has(e.id);
}
