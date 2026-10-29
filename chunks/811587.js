function i(t) {
    return "live_outdated" === t || "live_current" === t || "live_auto_synced" === t;
}
function l(t) {
    return "nothing_built" !== t && "live_auto_synced" !== t;
}
e.d(n, { Uh: () => l, lE: () => i, n: () => _ });
let _ = ["preparing", "approval", "setup", "build", "deploy", "discord", "activating"];
