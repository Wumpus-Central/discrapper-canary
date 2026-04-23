t.d(n, { A: () => a });
var l = t(390544);
let r = new Set([l.M.SLEEPING, l.M.OFFLINE, l.M.ONLINE]);
function a(e) {
    return null == e || (null != e.status && r.has(e.status));
}
