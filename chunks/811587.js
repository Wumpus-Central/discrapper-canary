function n(t) {
    return "live_outdated" === t || "live_current" === t || "live_auto_synced" === t;
}
function u(t) {
    return "nothing_built" !== t && "live_auto_synced" !== t;
}
i.d(e, { U: () => u, l: () => n });
