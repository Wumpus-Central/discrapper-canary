n.d(t, { Q: () => s }), n(539854);
var i = n(442837),
    r = n(699516),
    o = n(111583),
    l = n(594174);
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_SAFE_INTEGER;
    return (0, i.Wu)(
        [l.default, o.Z, r.Z],
        () => {
            var n;
            let i = null == (n = l.default.getCurrentUser()) ? void 0 : n.id,
                s = o.Z.getTypingUsers(e),
                a = [];
            for (let e in s) {
                if (a.length >= t) break;
                let n = l.default.getUser(e);
                null != n && n.id !== i && (r.Z.isBlockedOrIgnored(n.id) || a.push(n.id));
            }
            return a;
        },
        [e, t]
    );
}
