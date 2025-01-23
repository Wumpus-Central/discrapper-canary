n.d(t, {
    Q: function () {
        return s;
    }
}),
    n(653041);
var i = n(442837),
    o = n(699516),
    a = n(111583),
    l = n(594174);
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_SAFE_INTEGER;
    return (0, i.Wu)(
        [l.default, a.Z, o.Z],
        () => {
            var n;
            let i = null === (n = l.default.getCurrentUser()) || void 0 === n ? void 0 : n.id,
                s = a.Z.getTypingUsers(e),
                r = [];
            for (let e in s) {
                if (r.length >= t) break;
                let n = l.default.getUser(e);
                if (!(null == n || n.id === i || o.Z.isBlockedOrIgnored(n.id))) r.push(n.id);
            }
            return r;
        },
        [e, t]
    );
}
