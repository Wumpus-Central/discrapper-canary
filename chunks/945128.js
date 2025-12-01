n.d(t, { Z: () => d }), n(953529);
var a = n(54381),
    l = n(473749),
    i = n(481060),
    r = n(118589),
    s = n(211231),
    o = n(388032),
    c = n(58571);
let d = (e) => {
    let { onSubmit: t, disabled: n } = e,
        d = l.useCallback(async () => {
            await t({ type: r.rY.Empty }), window.location.reload();
        }, [t]);
    return (0, a.jsxs)("div", {
        className: c.container,
        children: [
            (0, a.jsx)(i.Heading, {
                variant: "heading-lg/bold",
                className: c.title,
                children: o.intl.string(s.default.v52itt),
            }),
            (0, a.jsx)(i.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                className: c.description,
                children: o.intl.string(s.default["5am8D3"]),
            }),
            (0, a.jsx)(i.Kqy, {
                direction: "horizontal",
                justify: "end",
                children: (0, a.jsx)(i.Button, {
                    variant: "primary",
                    text: o.intl.string(s.default["GDsHl+"]),
                    onClick: d,
                    disabled: n,
                }),
            }),
        ],
    });
};
