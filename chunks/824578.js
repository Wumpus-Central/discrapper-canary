n.d(t, { Q: () => i }), n(539854);
var s = n(442837),
    l = n(699516),
    a = n(111583),
    r = n(594174);
function i(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_SAFE_INTEGER;
    return (0, s.Wu)([r.default, a.Z, l.Z], () => {
        var n;
        let s = null == (n = r.default.getCurrentUser()) ? void 0 : n.id,
            i = a.Z.getTypingUsers(e),
            o = [];
        for (let e in i) {
            if (o.length >= t) break;
            let n = r.default.getUser(e);
            null != n && n.id !== s && (l.Z.isBlockedOrIgnored(n.id) || o.push(n.id));
        }
        return o;
    }, [e, t]);
}
