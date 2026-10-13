(n.d(t, { m: () => r }), n(321073));
var s = n(17928),
    l = n(994500),
    i = n(741961),
    a = n(287809);
function r(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_SAFE_INTEGER;
    return (0, s.yK)(
        [a.default, i.A, l.A],
        () => {
            let n = a.default.getCurrentUser()?.id,
                s = i.A.getTypingUsers(e),
                r = [];
            for (let e in s) {
                if (r.length >= t) break;
                let s = a.default.getUser(e);
                null != s && s.id !== n && (l.A.isBlockedOrIgnored(s.id) || r.push(s.id));
            }
            return r;
        },
        [e, t],
    );
}
