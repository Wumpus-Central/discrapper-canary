t.d(n, { Q: () => i }), t(539854);
var s = t(442837),
    l = t(699516),
    a = t(111583),
    r = t(594174);
function i(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_SAFE_INTEGER;
    return (0, s.Wu)([r.default, a.Z, l.Z], () => {
        var t;
        let s = null == (t = r.default.getCurrentUser()) ? void 0 : t.id,
            i = a.Z.getTypingUsers(e),
            o = [];
        for (let e in i) {
            if (o.length >= n) break;
            let t = r.default.getUser(e);
            null != t && t.id !== s && (l.Z.isBlockedOrIgnored(t.id) || o.push(t.id));
        }
        return o;
    }, [e, n]);
}
