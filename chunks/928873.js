u.d(t, { A: () => e });
var a = u(390544);
let n = new Set([a.M.SLEEPING, a.M.OFFLINE, a.M.ONLINE]);
function e(s) {
    return null == s || (null != s.status && n.has(s.status));
}
