n.d(t, { Z: () => u }), n(388685);
var l = n(255367),
    i = n(73800),
    r = n(994640),
    s = n(247007),
    a = n(999464),
    o = n(503406),
    c = n(463115),
    d = n(888592);
let u = (e) => {
    let { onClose: t, invite: n, forceGuildScrollHeight: u = !0, isNUXFlow: m } = e,
        [x, h] = i.useState([d.tF.VERIFY_EMAIL]),
        [_, g] = i.useState(''),
        [f, N] = i.useState(''),
        [v, p] = i.useState(void 0),
        [E, S] = i.useState([]),
        I = (e) => {
            h(x.concat(e).slice(-4));
        };
    switch (x[x.length - 1]) {
        case d.tF.VERIFY_EMAIL:
            return (0, l.jsx)(r.Z, {
                setGuildsInfo: S,
                setStep: I,
                email: _,
                setEmail: g,
                setGuildId: p,
                invite: n,
                onClose: t,
                isNUXFlow: m
            });
        case d.tF.SELECT_SCHOOL:
            return (0, l.jsx)(s.Z, {
                guildsInfo: E,
                setStep: I,
                email: _,
                setGuildId: p,
                forceGuildScrollHeight: u
            });
        case d.tF.SUBMIT_SCHOOL:
            return (0, l.jsx)(a.Z, {
                onBack: () => {
                    x.length > 1 && h(x.slice(0, -1).slice(-4));
                },
                setStep: I,
                email: _,
                school: f,
                setSchool: N
            });
        case d.tF.VERIFY_PIN:
            return (0, l.jsx)(o.Z, {
                email: _,
                onClose: t,
                guildId: v
            });
        case d.tF.EMAIL_WAITLIST:
            return (0, l.jsx)(c.Z, {
                setStep: I,
                school: f
            });
        default:
            return null;
    }
};
