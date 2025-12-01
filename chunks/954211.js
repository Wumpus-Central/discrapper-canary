r.d(t, { V: () => a });
let n = ["fatal", "error", "warning", "log", "info", "debug"];
function a(e) {
    return "warn" === e ? "warning" : n.includes(e) ? e : "log";
}
