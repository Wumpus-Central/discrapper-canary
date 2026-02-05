i.d(e, { default: () => g });
var l = i(627968),
    n = i(64700),
    a = i(158954),
    r = i(311907),
    s = i(846293),
    o = i(299091),
    d = i(509099),
    c = i(197654),
    u = i(365940),
    I = i(531461),
    E = i(71441),
    A = i(760322),
    _ = i(330936),
    h = i(634580);
function g(t) {
    let { inviteCode: e, ...i } = t;
    n.useEffect(() => {
        d.A.hideHubUpsell();
    }, []);
    let [g, m] = n.useState(null != e);
    n.useEffect(() => {
        null != e && s.Ay.resolveInvite(e, "Hub").finally(() => m(!1));
    }, [e]);
    let S = (0, r.bG)([o.A], () => (null != e ? o.A.getInvite(e) : null)),
        [y, L] = n.useState([_.Di.VERIFY_EMAIL]),
        [x, p] = n.useState(""),
        [C, T] = n.useState(""),
        [f, v] = n.useState(void 0),
        [M, R] = n.useState([]),
        N = (t) => {
            L(y.concat(t).slice(-4));
        },
        j = y[y.length - 1];
    if (g) return (0, l.jsx)(a.dWK, { ...i, children: (0, l.jsx)(a.y$y, { className: h.u }) });
    switch (j) {
        case _.Di.VERIFY_EMAIL:
            return (0, l.jsx)(c.A, {
                setGuildsInfo: R,
                setStep: N,
                email: x,
                setEmail: p,
                setGuildId: v,
                invite: S,
                ...i,
            });
        case _.Di.SELECT_SCHOOL:
            return (0, l.jsx)(u.A, { guildsInfo: M, setStep: N, email: x, setGuildId: v, ...i });
        case _.Di.SUBMIT_SCHOOL:
            return (0, l.jsx)(I.A, {
                onBack: () => {
                    y.length > 1 && L(y.slice(0, -1).slice(-4));
                },
                setStep: N,
                email: x,
                school: C,
                setSchool: T,
                ...i,
            });
        case _.Di.VERIFY_PIN:
            return (0, l.jsx)(E.A, { email: x, guildId: f, ...i });
        case _.Di.EMAIL_WAITLIST:
            return (0, l.jsx)(A.A, { setStep: N, school: C, ...i });
        default:
            return i.onClose(), null;
    }
}
