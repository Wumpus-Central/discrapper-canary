n.d(t, { Q: () => a }), n(539854);
var i = n(442837),
    r = n(699516),
    o = n(111583),
    l = n(594174);
function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_SAFE_INTEGER;
    return (0, i.Wu)(
        [l.default, o.Z, r.Z],
        () => {
            var n;
            let i = null == (n = l.default.getCurrentUser()) ? void 0 : n.id,
                a = o.Z.getTypingUsers(e),
                s = [];
            for (let e in a) {
                if (s.length >= t) break;
                let n = l.default.getUser(e);
                null != n && n.id !== i && (r.Z.isBlockedOrIgnored(n.id) || s.push(n.id));
            }
            return s;
        },
        [e, t]
    );
}
