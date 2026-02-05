"use strict";
n.d(t, { EF: () => N, K5: () => f, L9: () => E, SB: () => p, Vh: () => b, cG: () => j, gz: () => A, uc: () => _ }),
    n(321073);
var i = n(64700),
    s = n(91871),
    l = n.n(s),
    r = n(311907),
    a = n(696451),
    o = n(287809),
    d = n(954571),
    c = n(403362),
    u = n(695184),
    m = n(427262),
    g = n(545868),
    x = n(927573),
    h = n(652215);
let _ = 50,
    A = 1e3;
function p(e, t) {
    let n = (0, r.yK)([a.Ay], () => {
            let n = a.Ay.getMembers(e);
            return null == t ? n : n.filter(t);
        }, [e, t]),
        s = (0, r.cf)(
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
            let n = s[i.userId];
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
    }, [n, s, e]);
}
function f(e, t, n) {
    let s = i.useRef(n);
    return (
        i.useEffect(() => {
            s.current = n;
        }),
        i.useEffect(() => {
            (0, g.a)(e, t).catch(s.current);
        }, [e, t]),
        p(
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
                (d.default.track(h.HAw.SEARCH_STARTED, { search_type: "Role Members" }), (n.current = !0));
    }, [e, t]);
}
function N(e, t) {
    let n = e.trim().toLowerCase();
    return t.id === n || l()(n, t.name.toLowerCase()) || l()(n, t.userTag.toLowerCase());
}
function E(e) {
    switch (e) {
        case x.T$.MEMBERS:
            return "Members";
        case x.T$.PERMISSIONS:
            return "Permissions";
        case x.T$.DISPLAY:
            return "Role Settings";
        case x.T$.VERIFICATIONS:
            return "Connections";
        default:
            (0, c.xb)(e);
    }
}
function b(e, t) {
    return "" === t || e.name.toLowerCase().includes(t.toLowerCase());
}
