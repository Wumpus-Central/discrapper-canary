function n(t) {
    return "live_outdated" === t || "live_current" === t || "live_auto_synced" === t;
}
function u(t) {
    return "nothing_built" !== t && "live_auto_synced" !== t;
}
e.d(i, { Uh: () => u, lE: () => n, n: () => d });
let d = ["preparing", "approval", "setup", "build", "deploy", "discord", "activating"];
