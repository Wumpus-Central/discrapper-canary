(n.d(t, { Q: () => i }), n(539854));
var r = n(442837),
    a = n(699516),
    s = n(111583),
    l = n(594174);
function i(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_SAFE_INTEGER;
    return (0, r.Wu)(
        [l.default, s.Z, a.Z],
        () => {
            var n;
            let r = null == (n = l.default.getCurrentUser()) ? void 0 : n.id,
                i = s.Z.getTypingUsers(e),
                o = [];
            for (let e in i) {
                if (o.length >= t) break;
                let n = l.default.getUser(e);
                null != n && n.id !== r && (a.Z.isBlockedOrIgnored(n.id) || o.push(n.id));
            }
            return o;
        },
        [e, t]
    );
}
