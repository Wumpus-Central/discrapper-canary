i.d(e, { default: () => h });
var l = i(627968),
    a = i(64700),
    n = i(224640),
    r = i(289873),
    s = i(311907),
    o = i(846293),
    c = i(299091),
    d = i(197654),
    u = i(365940),
    _ = i(531461),
    E = i(71441),
    I = i(760322),
    A = i(330936),
    g = i(914984);
function h(t) {
    let { inviteCode: e, ...i } = t,
        [h, m] = a.useState(null != e);
    a.useEffect(() => {
        null != e && o.Ay.resolveInvite(e, "Hub").finally(() => m(!1));
    }, [e]);
    let S = (0, s.bG)([c.A], () => (null != e ? c.A.getInvite(e) : null)),
        [y, f] = a.useState([A.Di.VERIFY_EMAIL]),
        [L, x] = a.useState(""),
        [p, C] = a.useState(""),
        [v, R] = a.useState(void 0),
        [M, T] = a.useState([]),
        N = (t) => {
            f(y.concat(t).slice(-4));
        },
        b = y[y.length - 1];
    if (h) return (0, l.jsx)(n.d, { ...i, children: (0, l.jsx)(r.y, { className: g.u }) });
    switch (b) {
        case A.Di.VERIFY_EMAIL:
            return (0, l.jsx)(d.A, {
                setGuildsInfo: T,
                setStep: N,
                email: L,
                setEmail: x,
                setGuildId: R,
                invite: S,
                ...i,
            });
        case A.Di.SELECT_SCHOOL:
            return (0, l.jsx)(u.A, { guildsInfo: M, setStep: N, email: L, setGuildId: R, ...i });
        case A.Di.SUBMIT_SCHOOL:
            return (0, l.jsx)(_.A, {
                onBack: () => {
                    y.length > 1 && f(y.slice(0, -1).slice(-4));
                },
                setStep: N,
                email: L,
                school: p,
                setSchool: C,
                ...i,
            });
        case A.Di.VERIFY_PIN:
            return (0, l.jsx)(E.A, { email: L, guildId: v, ...i });
        case A.Di.EMAIL_WAITLIST:
            return (0, l.jsx)(I.A, { setStep: N, school: p, ...i });
        default:
            return i.onClose(), null;
    }
}
