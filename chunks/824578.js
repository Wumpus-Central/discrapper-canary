i.d(t, { Q: () => l }), i(653041);
var n = i(442837),
    a = i(699516),
    o = i(111583),
    s = i(594174);
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_SAFE_INTEGER;
    return (0, n.Wu)(
        [s.default, o.Z, a.Z],
        () => {
            var i;
            let n = null === (i = s.default.getCurrentUser()) || void 0 === i ? void 0 : i.id,
                l = o.Z.getTypingUsers(e),
                r = [];
            for (let e in l) {
                if (r.length >= t) break;
                let i = s.default.getUser(e);
                !(null == i || i.id === n || a.Z.isBlockedOrIgnored(i.id)) && r.push(i.id);
            }
            return r;
        },
        [e, t]
    );
}
