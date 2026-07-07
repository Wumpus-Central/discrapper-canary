"use strict";
n.d(t, { C7: () => r, Sj: () => s, qS: () => a });
var i = n(926675);
function r(e) {
    if (null == e) return null;
    let t = e.trim().toLowerCase().replaceAll("_", " ").slice(0, 100);
    return t.length > 0 ? t : null;
}
function s(e) {
    let t = e.icon ?? e.icon_hash ?? null;
    return { id: e.id, name: e.name, icon: null != t ? { type: "hash", value: t } : null };
}
function a(e) {
    return !i.Z.has(e.id);
}
