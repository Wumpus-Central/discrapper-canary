n.d(t, {
    A: () => m,
});
var a = n(627968),
    l = n(64700),
    i = n(158954),
    r = n(397927),
    s = n(839214),
    o = n(780964),
    c = n(840065),
    d = n(652215);
let u = (0, s.D)(() => ({
    setting: o.X.ACCOUNT_PANEL,
    section: d.nc_.ACCOUNT,
    subsection: void 0,
}));

function m() {
    let e = u.useField("setting"),
        t = u.useField("section"),
        n = u.useField("subsection"),
        s = l.useCallback(() => {
            (0, c.openUserSettings)(e, {
                section: t,
                subsection: n,
            });
        }, [e, t, n]),
        m = l.useMemo(
            () =>
                Object.values(o.X).map((e) => ({
                    id: e,
                    label: e,
                    value: e,
                })),
            [],
        ),
        p = l.useMemo(
            () =>
                Object.values(d.nc_).map((e) => ({
                    id: e,
                    label: e,
                    value: e,
                })),
            [],
        );
    return (0, a.jsxs)(i.nVY, {
        label: "Settings Navigation Tool",
        children: [
            (0, a.jsx)(r.ZiE, {
                label: "Setting (Redesign)",
                placeholder: "Select a setting",
                value: e,
                onSelectionChange: (e) =>
                    u.setState({
                        setting: e,
                    }),
                options: m,
                selectionMode: "single",
            }),
            (0, a.jsx)(r.ZiE, {
                label: "Setting Section (Legacy)",
                value: t,
                onSelectionChange: (e) =>
                    u.setState({
                        section: e,
                    }),
                options: p,
                selectionMode: "single",
            }),
            (0, a.jsx)(r.ksK, {
                label: "Setting Subsection (Legacy)",
                placeholder: "Type a subsection...",
                onChange: (e) =>
                    u.setState({
                        subsection: e,
                    }),
            }),
            (0, a.jsx)(i.$nd, {
                variant: "primary",
                onClick: s,
                text: "Open User Settings",
            }),
        ],
    });
}
