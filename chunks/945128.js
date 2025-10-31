n.d(t, { Z: () => d }), n(953529);
var a = n(951288),
    r = n(647438),
    l = n(481060),
    i = n(118589),
    o = n(213360),
    s = n(388032),
    c = n(58571);
let d = (e) => {
    let { onSubmit: t, disabled: n } = e,
        d = r.useCallback(async () => {
            await t({ type: i.rY.Empty }), window.location.reload();
        }, [t]);
    return (0, a.jsxs)("div", {
        className: c.container,
        children: [
            (0, a.jsx)(l.Heading, {
                variant: "heading-lg/bold",
                className: c.title,
                children: s.intl.string(o.default.v52itt),
            }),
            (0, a.jsx)(l.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                className: c.description,
                children: s.intl.string(o.default["5am8D3"]),
            }),
            (0, a.jsx)(l.Kqy, {
                direction: "horizontal",
                justify: "end",
                children: (0, a.jsx)(l.Button, {
                    variant: "primary",
                    text: s.intl.string(o.default["GDsHl+"]),
                    onClick: d,
                    disabled: n,
                }),
            }),
        ],
    });
};
