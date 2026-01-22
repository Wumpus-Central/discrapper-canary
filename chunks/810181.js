n.d(t, {
    m: () => a,
}),
    n(321073);
var i = n(311907),
    s = n(994500),
    r = n(741961),
    l = n(287809);

function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_SAFE_INTEGER;
    return (0, i.yK)([l.default, r.A, s.A], () => {
        var n;
        let i = null == (n = l.default.getCurrentUser()) ? void 0 : n.id,
            a = r.A.getTypingUsers(e),
            o = [];
        for (let e in a) {
            if (o.length >= t) break;
            let n = l.default.getUser(e);
            null != n && n.id !== i && (s.A.isBlockedOrIgnored(n.id) || o.push(n.id));
        }
        return o;
    }, [e, t]);
}
