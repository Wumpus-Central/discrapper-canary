l.d(t, {
    A: () => s,
}),
    l(896048);
var r = l(390544);
let n = new Set([r.M.SLEEPING, r.M.OFFLINE, r.M.ONLINE]);

function s(e) {
    return null == e || (null != e.status && n.has(e.status));
}
