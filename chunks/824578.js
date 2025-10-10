n.d(t, { Q: () => i }), n(539854);
var l = n(442837),
    a = n(699516),
    s = n(111583),
    r = n(594174);
function i(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_SAFE_INTEGER;
    return (0, l.Wu)([r.default, s.Z, a.Z], () => {
        var n;
        let l = null == (n = r.default.getCurrentUser()) ? void 0 : n.id,
            i = s.Z.getTypingUsers(e),
            o = [];
        for (let e in i) {
            if (o.length >= t) break;
            let n = r.default.getUser(e);
            null != n && n.id !== l && (a.Z.isBlockedOrIgnored(n.id) || o.push(n.id));
        }
        return o;
    }, [e, t]);
}
