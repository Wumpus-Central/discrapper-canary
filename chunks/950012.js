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
        [f, p] = l.useState([d.tF.VERIFY_EMAIL]),
        [h, g] = l.useState(""),
        [v, _] = l.useState(""),
        [x, N] = l.useState(void 0),
        [E, y] = l.useState([]),
        S = (e) => {
            p(f.concat(e).slice(-4));
        };
    switch (f[f.length - 1]) {
        case d.tF.VERIFY_EMAIL:
            return (0, r.jsx)(i.Z, {
                setGuildsInfo: y,
                setStep: S,
                email: h,
                setEmail: g,
                setGuildId: N,
                invite: n,
                onClose: t,
                isNUXFlow: m,
            });
        case d.tF.SELECT_SCHOOL:
            return (0, r.jsx)(a.Z, {
                guildsInfo: E,
                setStep: S,
                email: h,
                setGuildId: N,
                forceGuildScrollHeight: u,
            });
        case d.tF.SUBMIT_SCHOOL:
            return (0, r.jsx)(s.Z, {
                onBack: () => {
                    f.length > 1 && p(f.slice(0, -1).slice(-4));
                },
                setStep: S,
                email: h,
                school: v,
                setSchool: _,
            });
        case d.tF.VERIFY_PIN:
            return (0, r.jsx)(o.Z, {
                email: h,
                onClose: t,
                guildId: x,
            });
        case d.tF.EMAIL_WAITLIST:
            return (0, r.jsx)(c.Z, {
                setStep: S,
                school: v,
            });
        default:
            return null;
    }
};
