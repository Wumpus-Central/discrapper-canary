n.d(e, { $k: () => a, Xd: () => s, hj: () => u, uQ: () => o });
var r = n(652215),
    l = n(50617),
    i = n(375708);
class o extends Error {
    reason;
    status;
    constructor(t, e) {
        (super(`vibegrations create failed: ${t} [${e}]`),
            (this.name = "VibegrationsCreateError"),
            (this.reason = t),
            (this.status = e));
    }
}
function u(t) {
    if ("object" != typeof t || null === t) return "unknown";
    let { status: e, body: n } = t;
    if ("number" != typeof e) return "unknown";
    if (429 === e) return "rate_limited";
    let l = n?.code;
    return 409 === e && l === r.t02.TOO_MANY_VIBEGRATIONS_PROJECTS ? "project_limit" : "unknown";
}
function a(t) {
    let e = t?.status;
    return "number" == typeof e ? e : 0;
}
function s(t) {
    switch (t instanceof o ? t.reason : "unknown") {
        case "project_limit":
            return i.intl.string(l.default.Asusmn);
        case "rate_limited":
            return i.intl.string(l.default.DT6qly);
        default:
            return i.intl.string(l.default.KKkp5Y);
    }
}
