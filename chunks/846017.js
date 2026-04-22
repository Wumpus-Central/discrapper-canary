n.d(t, { default: () => A });
var i = n(627968),
    s = n(64700),
    l = n(189213),
    a = n(311907),
    r = n(231723),
    o = n(331322),
    d = n(292666),
    u = n(631670),
    c = n(836602),
    g = n(828578),
    m = n(652215),
    _ = n(985018);
function A(e) {
    let { transitionState: t, onSuccess: n, onClose: A, requirementsUpdated: h } = e,
        [p, x] = s.useState(""),
        [E, T] = s.useState(""),
        [S, f] = s.useState(""),
        [b, C] = s.useState(null),
        [v, N] = s.useState(null),
        { formState: I, errors: y } = (0, a.cf)([c.A], () => ({
            formState: c.A.getFormState(),
            errors: c.A.getErrors(),
        })),
        j = s.useRef(null);
    async function O(e) {
        e.preventDefault(), (0, u.x8)();
        let t = !1;
        if (
            ("" === E ? (C(_.intl.string(_.t["/7/oPU"])), (t = !0)) : C(null),
            E !== S ? (N(_.intl.string(_.t["IEKYZ/"])), (t = !0)) : N(null),
            t)
        )
            return;
        let i = await (0, u._L)({ password: p, newPassword: E });
        i?.ok ? n() : i?.body?.username != null && (0, g.E)();
    }
    return (
        s.useEffect(() => {
            t === r.ip.ENTERED && j.current?.focus();
        }, [t]),
        (0, i.jsx)("form", {
            onSubmit: O,
            children: (0, i.jsx)(l.Modal, {
                transitionState: t,
                onClose: A,
                title: _.intl.string(_.t.geta79),
                subtitle: h ? _.intl.string(_.t["37iHbZ"]) : _.intl.string(_.t.iOurYj),
                actions: [
                    { variant: "secondary", text: _.intl.string(_.t["ETE/oC"]), onClick: A },
                    {
                        variant: "primary",
                        text: _.intl.string(_.t.i4jeWR),
                        loading: I === m.XlH.SUBMITTING,
                        type: "submit",
                    },
                ],
                children: (0, i.jsxs)(o.B, {
                    gap: 20,
                    children: [
                        (0, i.jsx)(d.k, {
                            label: _.intl.string(_.t.WBqMRQ),
                            error: y?.password?.[0],
                            type: "password",
                            value: p,
                            onChange: x,
                            inputRef: j,
                            autoComplete: "current-password",
                            required: !0,
                        }),
                        (0, i.jsx)(d.k, {
                            label: _.intl.string(_.t["8dM4FO"]),
                            error: y?.new_password?.[0] ?? b ?? void 0,
                            type: "password",
                            value: E,
                            onChange: T,
                            autoComplete: "new-password",
                            required: !0,
                        }),
                        (0, i.jsx)(d.k, {
                            label: _.intl.string(_.t.iQG2KC),
                            error: v ?? void 0,
                            type: "password",
                            value: S,
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
