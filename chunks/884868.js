n.d(t, { UL: () => r, YX: () => a, d5: () => l, fq: () => s });
let i = ["conjure-", "vibegrations-"];
function r(e) {
    let t = i.map((t) => `${t}${e}`);
    return { requests: t, results: t.map((e) => `${e}-result`), acks: t.map((e) => `${e}-ack`) };
}
function a(e, t, n) {
    return "object" == typeof e && null != e && "string" == typeof e.type && t.includes(e.type) && e.id === n;
}
class s extends Error {
    constructor(e, t) {
        (super(`preview frame did not answer ${e} within ${t}ms`), (this.name = "PreviewFrameCallTimeout"));
    }
}
function l(e) {
    let t = e.timeoutMs;
    return ("number" == typeof t && isFinite(t) && t > 0 ? Math.min(Math.floor(t), 2e4) : 2e4) + 4e3;
}
