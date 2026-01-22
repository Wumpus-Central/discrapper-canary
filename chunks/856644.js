n.d(t, {
    EF: () => y,
    K5: () => j,
    L9: () => v,
    SB: () => h,
    Vh: () => A,
    cG: () => O,
    gz: () => x,
    uc: () => p,
}),
    n(321073),
    n(896048),
    n(733351);
var r = n(64700),
    i = n(91871),
    l = n.n(i),
    s = n(311907),
    a = n(696451),
    c = n(287809),
    o = n(954571),
    d = n(403362),
    u = n(695184),
    f = n(427262),
    g = n(545868),
    b = n(927573),
    m = n(652215);
let p = 50,
    x = 1e3;

function h(e, t) {
    let n = (0, s.yK)([a.Ay], () => {
            let n = a.Ay.getMembers(e);
            return null == t ? n : n.filter(t);
        }, [e, t]),
        i = (0, s.cf)(
            [c.default],
            () =>
                n.reduce((e, t) => {
                    let n = c.default.getUser(t.userId);
                    return null == n || (e[t.userId] = n), e;
                }, {}),
            [n],
        );
    return r.useMemo(() => {
        let t = [];
        for (let l of n) {
            var r;
            let n = i[l.userId];
            null != n &&
                t.push({
                    name: null != (r = l.nick) ? r : f.Ay.getName(n),
                    userTag: f.Ay.getUserTag(n),
                    id: l.userId,
                    avatarSource: n.getAvatarSource(e),
                    avatarURL: n.getAvatarURL(e, 80),
                    bot: n.bot,
                    verifiedBot: n.isVerifiedBot(),
                    roles: l.roles,
                    key: l.userId,
                    user: n,
                });
        }
        return t;
    }, [n, i, e]);
}

function j(e, t, n) {
    let i = r.useRef(n);
    return (
        r.useEffect(() => {
            i.current = n;
        }),
        r.useEffect(() => {
            (0, g.a)(e, t).catch(i.current);
        }, [e, t]),
        h(
            e,
            r.useCallback((e) => e.roles.includes(t), [t]),
        )
    );
}

function O(e, t) {
    let n = r.useRef(!1);
    r.useEffect(() => {
        u.A.requestMembers(e, t, 200),
            "" === t ||
                n.current ||
                (o.default.track(m.HAw.SEARCH_STARTED, {
                    search_type: "Role Members",
                }),
                (n.current = !0));
    }, [e, t]);
}

function y(e, t) {
    let n = e.trim().toLowerCase();
    return t.id === n || l()(n, t.name.toLowerCase()) || l()(n, t.userTag.toLowerCase());
}

function v(e) {
    switch (e) {
        case b.T$.MEMBERS:
            return "Members";
        case b.T$.PERMISSIONS:
            return "Permissions";
        case b.T$.DISPLAY:
            return "Role Settings";
        case b.T$.VERIFICATIONS:
            return "Connections";
        default:
            (0, d.xb)(e);
    }
}

function A(e, t) {
    return "" === t || e.name.toLowerCase().includes(t.toLowerCase());
}
