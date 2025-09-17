n.d(t, { Z: () => u }), n(953529);
var r = n(951288),
    i = n(647438),
    l = n(481060),
    a = n(118589),
    o = n(241945),
    c = n(388032),
    s = n(58571);
let u = (e) => {
    let { onSubmit: t, disabled: n } = e,
        u = i.useCallback(async () => {
            await t({ type: a.rY.Empty }), window.location.reload();
        }, [t]);
    return (0, r.jsxs)("div", {
        className: s.container,
        children: [
            (0, r.jsx)(l.X6q, {
                variant: "heading-lg/bold",
                className: s.title,
                children: c.intl.string(o.default.v52itr),
            }),
            (0, r.jsx)(l.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                className: s.description,
                children: c.intl.string(o.default["5am8Dw"]),
            }),
            (0, r.jsx)(l.Kqy, {
                direction: "horizontal",
                justify: "end",
                children: (0, r.jsx)(l.zxk, {
                    variant: "primary",
                    text: c.intl.string(o.default.GDsHl5),
                    onClick: u,
                    disabled: n,
                }),
            }),
        ],
    });
};
