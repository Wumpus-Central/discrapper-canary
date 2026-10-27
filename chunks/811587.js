function n(e) {
    return "live_outdated" === e || "live_current" === e || "live_auto_synced" === e;
}
function i(e) {
    return "nothing_built" !== e && "live_auto_synced" !== e;
}
l.d(t, { Uh: () => i, lE: () => n, n: () => s });
let s = ["preparing", "approval", "setup", "build", "deploy", "discord", "activating"];
