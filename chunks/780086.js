i.d(e, { default: () => g });
var l = i(627968),
    n = i(64700),
    a = i(224640),
    r = i(289873),
    s = i(311907),
    o = i(846293),
    d = i(299091),
    c = i(197654),
    u = i(365940),
    E = i(531461),
    I = i(71441),
    A = i(760322),
    _ = i(330936),
    h = i(914984);
function g(t) {
    let { inviteCode: e, ...i } = t,
        [g, m] = n.useState(null != e);
    n.useEffect(() => {
        null != e && o.Ay.resolveInvite(e, "Hub").finally(() => m(!1));
    }, [e]);
    let S = (0, s.bG)([d.A], () => (null != e ? d.A.getInvite(e) : null)),
        [y, L] = n.useState([_.Di.VERIFY_EMAIL]),
        [x, p] = n.useState(""),
        [C, v] = n.useState(""),
        [f, M] = n.useState(void 0),
        [T, R] = n.useState([]),
        N = (t) => {
            L(y.concat(t).slice(-4));
        },
        j = y[y.length - 1];
    if (g) return (0, l.jsx)(a.d, { ...i, children: (0, l.jsx)(r.y, { className: h.u }) });
    switch (j) {
        case _.Di.VERIFY_EMAIL:
            return (0, l.jsx)(c.A, {
                setGuildsInfo: R,
                setStep: N,
                email: x,
                setEmail: p,
                setGuildId: M,
                invite: S,
                ...i,
            });
        case _.Di.SELECT_SCHOOL:
            return (0, l.jsx)(u.A, { guildsInfo: T, setStep: N, email: x, setGuildId: M, ...i });
        case _.Di.SUBMIT_SCHOOL:
            return (0, l.jsx)(E.A, {
                onBack: () => {
                    y.length > 1 && L(y.slice(0, -1).slice(-4));
                },
                setStep: N,
                email: x,
                school: C,
                setSchool: v,
                ...i,
            });
        case _.Di.VERIFY_PIN:
            return (0, l.jsx)(I.A, { email: x, guildId: f, ...i });
        case _.Di.EMAIL_WAITLIST:
            return (0, l.jsx)(A.A, { setStep: N, school: C, ...i });
        default:
            return i.onClose(), null;
    }
}
