n.d(t, { Z: () => m });
var a = n(951288),
    i = n(647438),
    r = n(481060),
    l = n(972959),
    s = n(620481),
    o = n(594174),
    c = n(51144),
    d = n(530146);
let u = (0, l.H)(() => ({
    userIds: [],
    isLoading: !1,
    isSuccess: !1,
    errorMessage: null,
    lastRunAt: null,
}));
function m() {
    let e = u.useField("userIds"),
        t = u.useField("isLoading"),
        n = u.useField("isSuccess"),
        l = u.useField("errorMessage"),
        m = u.useField("lastRunAt"),
        p = i.useCallback(async () => {
            u.setState({
                isLoading: !0,
                errorMessage: null,
                isSuccess: !1,
            });
            try {
                let e = await (0, s.tb)();
                u.setState({
                    userIds: e,
                    errorMessage: null,
                    isSuccess: !0,
                    lastRunAt: new Date().toISOString(),
                });
            } catch (e) {
                u.setState({
                    errorMessage: e,
                    isSuccess: !1,
                });
            } finally {
                u.setState({ isLoading: !1 });
            }
        }, []),
        h = i.useMemo(
            () =>
                e.map((e) => {
                    let t = o.default.getUser(e),
                        n = null != t ? c.ZP.getName(t) : "Unknown";
                    return (0, a.jsx)(
                        "div",
                        {
                            className: d.detailsRow,
                            children: (0, a.jsx)(r.Text, {
                                variant: "text-md/normal",
                                children: "".concat(n, " (").concat(e, ")"),
                            }),
                        },
                        e,
                    );
                }),
            [e],
        );
    return (0, a.jsx)(r.C3N, {
        label: "Diff User State",
        description: "Click to generate a diff between the client user state and the user worker state.",
        children: (0, a.jsxs)("div", {
            children: [
                (0, a.jsx)(r.Button, {
                    onClick: p,
                    text: "Diff User State",
                    loading: t,
                    disabled: t,
                }),
                (0, a.jsxs)("div", {
                    className: d.detailsList,
                    children: [
                        null != l &&
                            (0, a.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                className: d.statusText,
                                children: l,
                            }),
                        n &&
                            e.length > 0 &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(r.Text, {
                                        variant: "text-md/normal",
                                        children: "Last run at: ".concat(m),
                                    }),
                                    (0, a.jsx)(r.Text, {
                                        variant: "text-md/normal",
                                        children: "User IDs missing from Worker:",
                                    }),
                                    (0, a.jsx)("div", {
                                        className: d.nestedDetailsList,
                                        children: h,
                                    }),
                                ],
                            }),
                        n &&
                            0 === e.length &&
                            (0, a.jsx)(r.Text, {
                                variant: "text-md/normal",
                                children: "No users missing from Worker",
                            }),
                    ],
                }),
            ],
        }),
    });
}
