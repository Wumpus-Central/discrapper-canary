n.d(t, { Z: () => u }), n(953529);
var r = n(951288),
    i = n(647438),
    a = n(481060),
    l = n(118589),
    o = n(753160),
    c = n(388032),
    s = n(677881);
let u = (e) => {
    let { onSubmit: t, disabled: n } = e,
        u = i.useCallback(async () => {
            await t({ type: l.rY.Empty }), window.location.reload();
        }, [t]);
    return (0, r.jsxs)("div", {
        className: s.container,
        children: [
            (0, r.jsx)(a.X6q, {
                variant: "heading-lg/bold",
                className: s.title,
                children: c.intl.string(o.default.v52itr),
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                className: s.description,
                children: c.intl.string(o.default["5am8Dw"]),
            }),
            (0, r.jsx)(a.Kqy, {
                direction: "horizontal",
                justify: "end",
                children: (0, r.jsx)(a.zxk, {
                    variant: "primary",
                    text: c.intl.string(o.default.GDsHl5),
                    onClick: u,
                    disabled: n,
                }),
            }),
        ],
    });
};
