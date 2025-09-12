n.d(t, { Z: () => m });
var a = n(951288),
    r = n(647438),
    l = n(481060),
    i = n(972959),
    s = n(620481),
    o = n(594174),
    c = n(51144),
    d = n(530146);
let u = (0, i.H)(() => ({
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
        i = u.useField("errorMessage"),
        m = u.useField("lastRunAt"),
        h = r.useCallback(async () => {
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
        p = r.useMemo(
            () =>
                e.map((e) => {
                    let t = o.default.getUser(e),
                        n = null != t ? c.ZP.getName(t) : "Unknown";
                    return (0, a.jsx)(
                        "div",
                        {
                            className: d.detailsRow,
                            children: (0, a.jsx)(l.R94, { children: "".concat(n, " (").concat(e, ")") }),
                        },
                        e,
                    );
                }),
            [e],
        );
    return (0, a.jsxs)(l.hjN, {
        title: "Diff User State",
        tag: l.RB0.H3,
        className: d.panelGroup,
        children: [
            (0, a.jsx)(l.R94, {
                type: l.geA.DESCRIPTION,
                className: d.subtitle,
                children: "Click to generate a diff between the client user state and the user worker state.",
            }),
            (0, a.jsxs)("div", {
                children: [
                    (0, a.jsx)(l.zxk, {
                        onClick: h,
                        text: "Diff User State",
                        loading: t,
                        disabled: t,
                    }),
                    (0, a.jsxs)("div", {
                        className: d.detailsList,
                        children: [
                            null != i &&
                                (0, a.jsx)(l.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-feedback-critical",
                                    className: d.statusText,
                                    children: i,
                                }),
                            n &&
                                e.length > 0 &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(l.R94, { children: "Last run at: ".concat(m) }),
                                        (0, a.jsx)(l.R94, { children: "User IDs missing from Worker:" }),
                                        (0, a.jsx)("div", {
                                            className: d.nestedDetailsList,
                                            children: p,
                                        }),
                                    ],
                                }),
                            n && 0 === e.length && (0, a.jsx)(l.R94, { children: "No users missing from Worker" }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
