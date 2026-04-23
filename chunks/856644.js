n.d(t, { EF: () => N, K5: () => f, L9: () => A, SB: () => E, Vh: () => C, cG: () => j, gz: () => p, uc: () => _ }),
    n(321073);
var i = n(64700),
    l = n(91871),
    s = n.n(l),
    a = n(17928),
    r = n(696451),
    o = n(287809),
    d = n(954571),
    c = n(403362),
    u = n(695184),
    m = n(427262),
    g = n(545868),
    h = n(927573),
    x = n(652215);
let _ = 50,
    p = 1e3;
function E(e, t) {
    let n = (0, a.yK)([r.Ay], () => {
            let n = r.Ay.getMembers(e);
            return null == t ? n : n.filter(t);
        }, [e, t]),
        l = (0, a.cf)(
            [o.default],
            () =>
                n.reduce((e, t) => {
                    let n = o.default.getUser(t.userId);
                    return null == n || (e[t.userId] = n), e;
                }, {}),
            [n],
        );
    return i.useMemo(() => {
        let t = [];
        for (let i of n) {
            let n = l[i.userId];
            null != n &&
                t.push({
                    name: i.nick ?? m.Ay.getName(n),
                    userTag: m.Ay.getUserTag(n),
                    id: i.userId,
                    avatarSource: n.getAvatarSource(e),
                    avatarURL: n.getAvatarURL(e, 80),
                    bot: n.bot,
                    verifiedBot: n.isVerifiedBot(),
                    roles: i.roles,
                    key: i.userId,
                    user: n,
                });
        }
        return t;
    }, [n, l, e]);
}
function f(e, t, n) {
    let l = i.useRef(n);
    return (
        i.useEffect(() => {
            l.current = n;
        }),
        i.useEffect(() => {
            (0, g.a)(e, t).catch(l.current);
        }, [e, t]),
        E(
            e,
            i.useCallback((e) => e.roles.includes(t), [t]),
        )
    );
}
function j(e, t) {
    let n = i.useRef(!1);
    i.useEffect(() => {
        u.A.requestMembers(e, t, 200),
            "" === t ||
                n.current ||
                (d.default.track(x.HAw.SEARCH_STARTED, { search_type: "Role Members" }), (n.current = !0));
    }, [e, t]);
}
function N(e, t) {
    let n = e.trim().toLowerCase();
    return t.id === n || s()(n, t.name.toLowerCase()) || s()(n, t.userTag.toLowerCase());
}
function A(e) {
    switch (e) {
        case h.T$.MEMBERS:
            return "Members";
        case h.T$.PERMISSIONS:
            return "Permissions";
        case h.T$.DISPLAY:
            return "Role Settings";
        case h.T$.VERIFICATIONS:
            return "Connections";
        default:
            (0, c.xb)(e);
    }
}
function C(e, t) {
    return "" === t || e.name.toLowerCase().includes(t.toLowerCase());
}
