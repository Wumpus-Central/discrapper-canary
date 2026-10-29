function l(e) {
    return "live_outdated" === e || "live_current" === e || "live_auto_synced" === e;
}
function i(e) {
    return "nothing_built" !== e && "live_auto_synced" !== e;
}
n.d(t, { Uh: () => i, lE: () => l, n: () => u });
let u = ["preparing", "approval", "setup", "build", "deploy", "discord", "activating"];
