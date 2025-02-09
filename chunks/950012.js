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
        [_, N] = i.useState(''),
        [v, g] = i.useState(''),
        [E, I] = i.useState(void 0),
        [f, S] = i.useState([]),
        p = (e) => {
            h(x.concat(e).slice(-4));
        };
    switch (x[x.length - 1]) {
        case d.tF.VERIFY_EMAIL:
            return (0, l.jsx)(s.Z, {
                setGuildsInfo: S,
                setStep: p,
                email: _,
                setEmail: N,
                setGuildId: I,
                invite: n,
                onClose: t,
                isNUXFlow: m
            });
        case d.tF.SELECT_SCHOOL:
            return (0, l.jsx)(a.Z, {
                guildsInfo: f,
                setStep: p,
                email: _,
                setGuildId: I,
                forceGuildScrollHeight: u
            });
        case d.tF.SUBMIT_SCHOOL:
            return (0, l.jsx)(r.Z, {
                onBack: () => {
                    x.length > 1 && h(x.slice(0, -1).slice(-4));
                },
                setStep: p,
                email: _,
                school: v,
                setSchool: g
            });
        case d.tF.VERIFY_PIN:
            return (0, l.jsx)(o.Z, {
                email: _,
                onClose: t,
                guildId: E
            });
        case d.tF.EMAIL_WAITLIST:
            return (0, l.jsx)(c.Z, {
                setStep: p,
                school: v
            });
        default:
            return null;
    }
};
