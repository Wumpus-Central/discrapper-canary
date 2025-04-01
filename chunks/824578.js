n.d(t, { Q: () => s }), n(653041);
var i = n(442837),
    o = n(699516),
    r = n(111583),
    a = n(594174);
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_SAFE_INTEGER;
    return (0, i.Wu)(
        [a.default, r.Z, o.Z],
        () => {
            var n;
            let i = null === (n = a.default.getCurrentUser()) || void 0 === n ? void 0 : n.id,
                s = r.Z.getTypingUsers(e),
                l = [];
            for (let e in s) {
                if (l.length >= t) break;
                let n = a.default.getUser(e);
                !(null == n || n.id === i || o.Z.isBlockedOrIgnored(n.id)) && l.push(n.id);
            }
            return l;
        },
        [e, t]
    );
}
