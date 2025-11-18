n.d(t, { Z: () => d }), n(953529);
var a = n(54381),
    l = n(473749),
    r = n(481060),
    i = n(118589),
    s = n(240581),
    o = n(388032),
    c = n(677881);
let d = (e) => {
    let { onSubmit: t, disabled: n } = e,
        d = l.useCallback(async () => {
            await t({ type: i.rY.Empty }), window.location.reload();
        }, [t]);
    return (0, a.jsxs)("div", {
        className: c.container,
        children: [
            (0, a.jsx)(r.Heading, {
                variant: "heading-lg/bold",
                className: c.title,
                children: o.intl.string(s.default.v52itt),
            }),
            (0, a.jsx)(r.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                className: c.description,
                children: o.intl.string(s.default["5am8D3"]),
            }),
            (0, a.jsx)(r.Kqy, {
                direction: "horizontal",
                justify: "end",
                children: (0, a.jsx)(r.Button, {
                    variant: "primary",
                    text: o.intl.string(s.default["GDsHl+"]),
                    onClick: d,
                    disabled: n,
                }),
            }),
        ],
    });
};
