n.d(t, { Q: () => l }), n(653041);
var i = n(442837),
    a = n(699516),
    o = n(111583),
    s = n(594174);
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_SAFE_INTEGER;
    return (0, i.Wu)(
        [s.default, o.Z, a.Z],
        () => {
            var n;
            let i = null === (n = s.default.getCurrentUser()) || void 0 === n ? void 0 : n.id,
                l = o.Z.getTypingUsers(e),
                r = [];
            for (let e in l) {
                if (r.length >= t) break;
                let n = s.default.getUser(e);
                !(null == n || n.id === i || a.Z.isBlockedOrIgnored(n.id)) && r.push(n.id);
            }
            return r;
        },
        [e, t]
    );
}
