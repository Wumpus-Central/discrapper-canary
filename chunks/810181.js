i(321073);
var n = i(855986),
    l = i(994500),
    a = i(741961),
    s = i(287809);
i.d(
    t,
    {},
    {
        m: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_SAFE_INTEGER;
            return (0, n.yK)(
                [s.default, a.A, l.A],
                () => {
                    let i = s.default.getCurrentUser()?.id,
                        n = a.A.getTypingUsers(e),
                        d = [];
                    for (let e in n) {
                        if (d.length >= t) break;
                        let n = s.default.getUser(e);
                        null != n && n.id !== i && (l.A.isBlockedOrIgnored(n.id) || d.push(n.id));
                    }
                    return d;
                },
                [e, t],
            );
        },
    },
);
