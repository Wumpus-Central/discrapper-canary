(t.d(n, { m: () => r }), t(321073));
var s = t(17928),
    l = t(994500),
    i = t(741961),
    a = t(287809);
function r(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_SAFE_INTEGER;
    return (0, s.yK)(
        [a.default, i.A, l.A],
        () => {
            let t = a.default.getCurrentUser()?.id,
                s = i.A.getTypingUsers(e),
                r = [];
            for (let e in s) {
                if (r.length >= n) break;
                let s = a.default.getUser(e);
                null != s && s.id !== t && (l.A.isBlockedOrIgnored(s.id) || r.push(s.id));
            }
            return r;
        },
        [e, n],
    );
}
