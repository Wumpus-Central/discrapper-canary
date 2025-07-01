(n.d(t, { Q: () => i }), n(539854));
var r = n(442837),
    s = n(699516),
    l = n(111583),
    a = n(594174);
function i(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_SAFE_INTEGER;
    return (0, r.Wu)(
        [a.default, l.Z, s.Z],
        () => {
            var n;
            let r = null == (n = a.default.getCurrentUser()) ? void 0 : n.id,
                i = l.Z.getTypingUsers(e),
                o = [];
            for (let e in i) {
                if (o.length >= t) break;
                let n = a.default.getUser(e);
                null != n && n.id !== r && (s.Z.isBlockedOrIgnored(n.id) || o.push(n.id));
            }
            return o;
        },
        [e, t]
    );
}
