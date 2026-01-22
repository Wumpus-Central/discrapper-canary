n.d(t, {
    N: () => o,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(421380),
    s = n(397927);
let o = {
    title: "Checkbox",
    stories: [
        {
            id: "void-checkbox",
            name: "Checkbox",
            component: function (e) {
                let { disabled: t, readOnly: n, displayOnly: o, type: l, size: c, align: u, shape: d, label: f } = e,
                    [p, _] = i.useState(!1),
                    h = i.useCallback((e, t) => {
                        _(t);
                    }, []),
                    m = i.useCallback(() => {
                        _(!0);
                    }, []),
                    g = i.useCallback(() => {
                        _(!1);
                    }, []),
                    E = i.useCallback(() => {
                        _((e) => !e);
                    }, []);
                return (0, r.jsxs)(s.BJc, {
                    direction: "vertical",
                    gap: "md",
                    children: [
                        (0, r.jsx)(a.Kj, {
                            "data-migration-pending": !0,
                            value: p,
                            onChange: h,
                            disabled: t,
                            readOnly: n,
                            displayOnly: o,
                            type: l,
                            size: c,
                            align: u,
                            shape: d,
                            children: (0, r.jsx)(s.Text, {
                                variant: "text-md/normal",
                                children: f,
                            }),
                        }),
                        (0, r.jsxs)(s.Text, {
                            variant: "text-sm/normal",
                            children: ["Current state: ", p ? "Checked" : "Unchecked"],
                        }),
                        (0, r.jsxs)(s.BJc, {
                            direction: "horizontal",
                            gap: "sm",
                            children: [
                                (0, r.jsx)(s.Button, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Check",
                                    onClick: m,
                                    disabled: t || n,
                                }),
                                (0, r.jsx)(s.Button, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Uncheck",
                                    onClick: g,
                                    disabled: t || n,
                                }),
                                (0, r.jsx)(s.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Toggle",
                                    onClick: E,
                                    disabled: t || n,
                                }),
                            ],
                        }),
                    ],
                });
            },
            controls: {
                label: {
                    type: "text",
                    label: "Label",
                    defaultValue: "Accept terms and conditions",
                },
                disabled: {
                    type: "boolean",
                    label: "Disabled",
                    defaultValue: !1,
                },
                readOnly: {
                    type: "boolean",
                    label: "Read Only",
                    defaultValue: !1,
                },
                displayOnly: {
                    type: "boolean",
                    label: "Display Only",
                    defaultValue: !1,
                },
                type: {
                    type: "select",
                    label: "Type",
                    defaultValue: a.Xo.DEFAULT,
                    options: [
                        {
                            label: "Default",
                            value: a.Xo.DEFAULT,
                        },
                        {
                            label: "Inverted",
                            value: a.Xo.INVERTED,
                        },
                        {
                            label: "Ghost",
                            value: a.Xo.GHOST,
                        },
                        {
                            label: "Row",
                            value: a.Xo.ROW,
                        },
                    ],
                },
                size: {
                    type: "number",
                    label: "Size",
                    defaultValue: 24,
                },
                align: {
                    type: "select",
                    label: "Alignment",
                    defaultValue: a.ov.CENTER,
                    options: [
                        {
                            label: "Center",
                            value: a.ov.CENTER,
                        },
                        {
                            label: "Top",
                            value: a.ov.TOP,
                        },
                    ],
                },
                shape: {
                    type: "select",
                    label: "Shape",
                    defaultValue: a.Ib.BOX,
                    options: [
                        {
                            label: "Box",
                            value: a.Ib.BOX,
                        },
                        {
                            label: "Small Box",
                            value: a.Ib.SMALL_BOX,
                        },
                        {
                            label: "Round",
                            value: a.Ib.ROUND,
                        },
                    ],
                },
            },
        },
    ],
};
