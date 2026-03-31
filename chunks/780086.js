i.d(e, { default: () => g });
var a = i(627968),
    l = i(64700),
    n = i(158954),
    r = i(311907),
    s = i(846293),
    o = i(299091),
    c = i(197654),
    d = i(365940),
    u = i(531461),
    _ = i(71441),
    I = i(760322),
    E = i(330936),
    A = i(415766);
function g(t) {
    let { inviteCode: e, ...i } = t,
        [g, h] = l.useState(null != e);
    l.useEffect(() => {
        null != e && s.Ay.resolveInvite(e, "Hub").finally(() => h(!1));
    }, [e]);
    let m = (0, r.bG)([o.A], () => (null != e ? o.A.getInvite(e) : null)),
        [S, y] = l.useState([E.Di.VERIFY_EMAIL]),
        [x, f] = l.useState(""),
        [L, p] = l.useState(""),
        [C, T] = l.useState(void 0),
        [v, R] = l.useState([]),
        M = (t) => {
            y(S.concat(t).slice(-4));
        },
        N = S[S.length - 1];
    if (g) return (0, a.jsx)(n.dWK, { ...i, children: (0, a.jsx)(n.y$y, { className: A.u }) });
    switch (N) {
        case E.Di.VERIFY_EMAIL:
            return (0, a.jsx)(c.A, {
                setGuildsInfo: R,
                setStep: M,
                email: x,
                setEmail: f,
                setGuildId: T,
                invite: m,
                ...i,
            });
        case E.Di.SELECT_SCHOOL:
            return (0, a.jsx)(d.A, { guildsInfo: v, setStep: M, email: x, setGuildId: T, ...i });
        case E.Di.SUBMIT_SCHOOL:
            return (0, a.jsx)(u.A, {
                onBack: () => {
                    S.length > 1 && y(S.slice(0, -1).slice(-4));
                },
                setStep: M,
                email: x,
                school: L,
                setSchool: p,
                ...i,
            });
        case E.Di.VERIFY_PIN:
            return (0, a.jsx)(_.A, { email: x, guildId: C, ...i });
        case E.Di.EMAIL_WAITLIST:
            return (0, a.jsx)(I.A, { setStep: M, school: L, ...i });
        default:
            return i.onClose(), null;
    }
}
