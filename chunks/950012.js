(n.d(t, { Z: () => u }), n(388685));
var l = n(255367),
    i = n(73800),
    r = n(994640),
    a = n(247007),
    s = n(999464),
    o = n(503406),
    c = n(463115),
    d = n(888592);
let u = (e) => {
    let { onClose: t, invite: n, forceGuildScrollHeight: u = !0, isNUXFlow: m } = e,
        [h, x] = i.useState([d.tF.VERIFY_EMAIL]),
        [_, g] = i.useState(''),
        [f, p] = i.useState(''),
        [v, N] = i.useState(void 0),
        [E, S] = i.useState([]),
        I = (e) => {
            x(h.concat(e).slice(-4));
        };
    switch (h[h.length - 1]) {
        case d.tF.VERIFY_EMAIL:
            return (0, l.jsx)(r.Z, {
                setGuildsInfo: S,
                setStep: I,
                email: _,
                setEmail: g,
                setGuildId: N,
                invite: n,
                onClose: t,
                isNUXFlow: m
            });
        case d.tF.SELECT_SCHOOL:
            return (0, l.jsx)(a.Z, {
                guildsInfo: E,
                setStep: I,
                email: _,
                setGuildId: N,
                forceGuildScrollHeight: u
            });
        case d.tF.SUBMIT_SCHOOL:
            return (0, l.jsx)(s.Z, {
                onBack: () => {
                    h.length > 1 && x(h.slice(0, -1).slice(-4));
                },
                setStep: I,
                email: _,
                school: f,
                setSchool: p
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
