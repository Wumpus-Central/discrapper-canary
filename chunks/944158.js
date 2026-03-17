n.d(t, { A: () => u });
var a = n(627968),
    i = n(64700),
    s = n(158954),
    l = n(397927),
    r = n(839214),
    o = n(780964),
    d = n(840065);
let c = (0, r.D)(() => ({ setting: o.X.ACCOUNT_PANEL }));
function u() {
    let e = c.useField("setting"),
        t = i.useCallback(() => {
            (0, d.openUserSettings)(e);
        }, [e]),
        n = i.useMemo(() => Object.values(o.X).map((e) => ({ id: e, label: e, value: e })), []);
    return (0, a.jsxs)(s.nVY, {
        label: "Settings Navigation Tool",
        children: [
            (0, a.jsx)(l.ZiE, {
                label: "Setting",
                placeholder: "Select a setting",
                value: e,
                onSelectionChange: (e) => c.setState({ setting: e }),
                options: n,
                selectionMode: "single",
                clearable: !0,
            }),
            (0, a.jsx)(s.$nd, { variant: "primary", onClick: t, text: "Open User Settings" }),
        ],
    });
}
