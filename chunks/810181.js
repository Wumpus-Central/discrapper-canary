s.d(t, { m: () => r }), s(321073);
var n = s(311907),
    l = s(994500),
    a = s(741961),
    i = s(287809);
function r(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_SAFE_INTEGER;
    return (0, n.yK)([i.default, a.A, l.A], () => {
        let s = i.default.getCurrentUser()?.id,
            n = a.A.getTypingUsers(e),
            r = [];
        for (let e in n) {
            if (r.length >= t) break;
            let n = i.default.getUser(e);
            null != n && n.id !== s && (l.A.isBlockedOrIgnored(n.id) || r.push(n.id));
        }
        return r;
    }, [e, t]);
}
