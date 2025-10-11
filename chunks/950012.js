n.d(t, { Z: () => u }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(994640),
    a = n(247007),
    s = n(999464),
    o = n(503406),
    c = n(463115),
    d = n(888592);
let u = (e) => {
    let { onClose: t, invite: n, forceGuildScrollHeight: u = !0, isNUXFlow: m } = e,
        [g, f] = l.useState([d.tF.VERIFY_EMAIL]),
        [p, h] = l.useState(""),
        [_, v] = l.useState(""),
        [x, N] = l.useState(void 0),
        [E, y] = l.useState([]),
        S = (e) => {
            f(g.concat(e).slice(-4));
        };
    switch (g[g.length - 1]) {
        case d.tF.VERIFY_EMAIL:
            return (0, r.jsx)(i.Z, {
                setGuildsInfo: y,
                setStep: S,
                email: p,
                setEmail: h,
                setGuildId: N,
                invite: n,
                onClose: t,
                isNUXFlow: m,
            });
        case d.tF.SELECT_SCHOOL:
            return (0, r.jsx)(a.Z, {
                guildsInfo: E,
                setStep: S,
                email: p,
                setGuildId: N,
                forceGuildScrollHeight: u,
            });
        case d.tF.SUBMIT_SCHOOL:
            return (0, r.jsx)(s.Z, {
                onBack: () => {
                    g.length > 1 && f(g.slice(0, -1).slice(-4));
                },
                setStep: S,
                email: p,
                school: _,
                setSchool: v,
            });
        case d.tF.VERIFY_PIN:
            return (0, r.jsx)(o.Z, {
                email: p,
                onClose: t,
                guildId: x,
            });
        case d.tF.EMAIL_WAITLIST:
            return (0, r.jsx)(c.Z, {
                setStep: S,
                school: _,
            });
        default:
            return null;
    }
};
