a.d(t, { A: () => m });
var n = a(627968),
    l = a(64700),
    i = a(270003),
    s = a(821609),
    r = a(783878),
    o = a(839214),
    d = a(780964),
    c = a(858897);
let u = (0, o.D)(() => ({ setting: d.X.ACCOUNT_PANEL }));
function m() {
    let e = u.useField("setting"),
        t = l.useCallback(() => {
            (0, c.openUserSettings)(e);
        }, [e]),
        a = l.useMemo(() => Object.values(d.X).map((e) => ({ id: e, label: e, value: e })), []);
    return (0, n.jsxs)(i.n, {
        label: "Settings Navigation Tool",
        children: [
            (0, n.jsx)(r.Z, {
                label: "Setting",
                placeholder: "Select a setting",
                value: e,
                onSelectionChange: (e) => u.setState({ setting: e }),
                options: a,
                selectionMode: "single",
                clearable: !0,
            }),
            (0, n.jsx)(s.$, { variant: "primary", onClick: t, text: "Open User Settings" }),
        ],
    });
}
