n.d(t, { Z: () => d }), n(953529);
var a = n(54381),
    r = n(473749),
    l = n(481060),
    i = n(118589),
    s = n(693473),
    o = n(388032),
    c = n(725915);
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
                children: o.intl.string(s.default.v52itt),
            }),
            (0, a.jsx)(l.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                className: c.description,
                children: o.intl.string(s.default["5am8D3"]),
            }),
            (0, a.jsx)(l.Kqy, {
                direction: "horizontal",
                justify: "end",
                children: (0, a.jsx)(l.Button, {
                    variant: "primary",
                    text: o.intl.string(s.default["GDsHl+"]),
                    onClick: d,
                    disabled: n,
                }),
            }),
        ],
    });
};
