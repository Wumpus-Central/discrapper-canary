_.d(e, { V: () => r });
let a = ["fatal", "error", "warning", "log", "info", "debug"];
function r(t) {
    return "warn" === t ? "warning" : a.includes(t) ? t : "log";
}
