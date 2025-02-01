n.d(t, { Z: () => u }), n(47120);
var l = n(200651),
    i = n(192379),
    s = n(994640),
    a = n(247007),
    r = n(999464),
    o = n(503406),
    c = n(463115),
    d = n(888592);
let u = (e) => {
    let { onClose: t, invite: n, forceGuildScrollHeight: u = !0, isNUXFlow: m } = e,
        [x, h] = i.useState([d.tF.VERIFY_EMAIL]),
        [v, N] = i.useState(''),
        [_, g] = i.useState(''),
        [f, p] = i.useState(void 0),
        [E, I] = i.useState([]),
        S = (e) => {
            h(x.concat(e).slice(-4));
        };
    switch (x[x.length - 1]) {
        case d.tF.VERIFY_EMAIL:
            return (0, l.jsx)(s.Z, {
                setGuildsInfo: I,
                setStep: S,
                email: v,
                setEmail: N,
                setGuildId: p,
                invite: n,
                onClose: t,
                isNUXFlow: m
            });
        case d.tF.SELECT_SCHOOL:
            return (0, l.jsx)(a.Z, {
                guildsInfo: E,
                setStep: S,
                email: v,
                setGuildId: p,
                forceGuildScrollHeight: u
            });
        case d.tF.SUBMIT_SCHOOL:
            return (0, l.jsx)(r.Z, {
                onBack: () => {
                    x.length > 1 && h(x.slice(0, -1).slice(-4));
                },
                setStep: S,
                email: v,
                school: _,
                setSchool: g
            });
        case d.tF.VERIFY_PIN:
            return (0, l.jsx)(o.Z, {
                email: v,
                onClose: t,
                guildId: f
            });
        case d.tF.EMAIL_WAITLIST:
            return (0, l.jsx)(c.Z, {
                setStep: S,
                school: _
            });
        default:
            return null;
    }
};
