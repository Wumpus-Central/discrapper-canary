n.d(t, { Z: () => u }), n(388685);
var r = n(255367),
    l = n(73800),
    i = n(994640),
    a = n(247007),
    s = n(999464),
    o = n(503406),
    c = n(463115),
    d = n(888592);
let u = (e) => {
    let { onClose: t, invite: n, forceGuildScrollHeight: u = !0, isNUXFlow: m } = e,
        [h, x] = l.useState([d.tF.VERIFY_EMAIL]),
        [p, f] = l.useState(""),
        [g, _] = l.useState(""),
        [v, N] = l.useState(void 0),
        [E, S] = l.useState([]),
        y = (e) => {
            x(h.concat(e).slice(-4));
        };
    switch (h[h.length - 1]) {
        case d.tF.VERIFY_EMAIL:
            return (0, r.jsx)(i.Z, {
                setGuildsInfo: S,
                setStep: y,
                email: p,
                setEmail: f,
                setGuildId: N,
                invite: n,
                onClose: t,
                isNUXFlow: m,
            });
        case d.tF.SELECT_SCHOOL:
            return (0, r.jsx)(a.Z, {
                guildsInfo: E,
                setStep: y,
                email: p,
                setGuildId: N,
                forceGuildScrollHeight: u,
            });
        case d.tF.SUBMIT_SCHOOL:
            return (0, r.jsx)(s.Z, {
                onBack: () => {
                    h.length > 1 && x(h.slice(0, -1).slice(-4));
                },
                setStep: y,
                email: p,
                school: g,
                setSchool: _,
            });
        case d.tF.VERIFY_PIN:
            return (0, r.jsx)(o.Z, {
                email: p,
                onClose: t,
                guildId: v,
            });
        case d.tF.EMAIL_WAITLIST:
            return (0, r.jsx)(c.Z, {
                setStep: y,
                school: g,
            });
        default:
            return null;
    }
};
