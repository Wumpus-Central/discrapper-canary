n.d(t, { default: () => h });
var i = n(627968),
    l = n(64700),
    s = n(189213),
    a = n(17928),
    r = n(231723),
    o = n(331322),
    d = n(292666),
    u = n(631670),
    c = n(836602),
    g = n(828578),
    _ = n(652215),
    m = n(985018);
function h(e) {
    let { transitionState: t, onSuccess: n, onClose: h, requirementsUpdated: A } = e,
        [p, E] = l.useState(""),
        [T, S] = l.useState(""),
        [x, f] = l.useState(""),
        [b, N] = l.useState(null),
        [C, I] = l.useState(null),
        { formState: v, errors: y } = (0, a.cf)([c.A], () => ({
            formState: c.A.getFormState(),
            errors: c.A.getErrors(),
        })),
        j = l.useRef(null);
    async function O(e) {
        e.preventDefault(), (0, u.x8)();
        let t = !1;
        if (
            ("" === T ? (N(m.intl.string(m.t["/7/oPU"])), (t = !0)) : N(null),
            T !== x ? (I(m.intl.string(m.t["IEKYZ/"])), (t = !0)) : I(null),
            t)
        )
            return;
        let i = await (0, u._L)({ password: p, newPassword: T });
        i?.ok ? n() : i?.body?.username != null && (0, g.E)();
    }
    return (
        l.useEffect(() => {
            t === r.ip.ENTERED && j.current?.focus();
        }, [t]),
        (0, i.jsx)("form", {
            onSubmit: O,
            children: (0, i.jsx)(s.Modal, {
                transitionState: t,
                onClose: h,
                title: m.intl.string(m.t.geta79),
                subtitle: A ? m.intl.string(m.t["37iHbZ"]) : m.intl.string(m.t.iOurYj),
                actions: [
                    { variant: "secondary", text: m.intl.string(m.t["ETE/oC"]), onClick: h },
                    {
                        variant: "primary",
                        text: m.intl.string(m.t.i4jeWR),
                        loading: v === _.XlH.SUBMITTING,
                        type: "submit",
                    },
                ],
                children: (0, i.jsxs)(o.B, {
                    gap: 20,
                    children: [
                        (0, i.jsx)(d.k, {
                            label: m.intl.string(m.t.WBqMRQ),
                            error: y?.password?.[0],
                            type: "password",
                            value: p,
                            onChange: E,
                            inputRef: j,
                            autoComplete: "current-password",
                            required: !0,
                        }),
                        (0, i.jsx)(d.k, {
                            label: m.intl.string(m.t["8dM4FO"]),
                            error: y?.new_password?.[0] ?? b ?? void 0,
                            type: "password",
                            value: T,
                            onChange: S,
                            autoComplete: "new-password",
                            required: !0,
                        }),
                        (0, i.jsx)(d.k, {
                            label: m.intl.string(m.t.iQG2KC),
                            error: C ?? void 0,
                            type: "password",
                            value: x,
                            onChange: f,
                            autoComplete: "new-password",
                            required: !0,
                        }),
                    ],
                }),
            }),
        })
    );
}
