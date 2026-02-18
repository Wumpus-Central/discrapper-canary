a.d(l, { N: () => s });
var t = a(627968),
    o = a(64700),
    n = a(421380),
    i = a(397927);
let s = {
    title: "Checkbox",
    stories: [
        {
            id: "void-checkbox",
            name: "Checkbox",
            component: function (e) {
                let { disabled: l, readOnly: a, displayOnly: s, type: r, size: d, align: u, shape: c, label: b } = e,
                    [p, m] = o.useState(!1),
                    x = o.useCallback((e, l) => {
                        m(l);
                    }, []),
                    v = o.useCallback(() => {
                        m(!0);
                    }, []),
                    h = o.useCallback(() => {
                        m(!1);
                    }, []),
                    y = o.useCallback(() => {
                        m((e) => !e);
                    }, []);
                return (0, t.jsxs)(i.BJc, {
                    direction: "vertical",
                    gap: "md",
                    children: [
                        (0, t.jsx)(n.Kj, {
                            "data-migration-pending": !0,
                            value: p,
                            onChange: x,
                            disabled: l,
                            readOnly: a,
                            displayOnly: s,
                            type: r,
                            size: d,
                            align: u,
                            shape: c,
                            children: (0, t.jsx)(i.Text, { variant: "text-md/normal", children: b }),
                        }),
                        (0, t.jsxs)(i.Text, {
                            variant: "text-sm/normal",
                            children: ["Current state: ", p ? "Checked" : "Unchecked"],
                        }),
                        (0, t.jsxs)(i.BJc, {
                            direction: "horizontal",
                            gap: "sm",
                            children: [
                                (0, t.jsx)(i.Button, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Check",
                                    onClick: v,
                                    disabled: l || a,
                                }),
                                (0, t.jsx)(i.Button, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Uncheck",
                                    onClick: h,
                                    disabled: l || a,
                                }),
                                (0, t.jsx)(i.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Toggle",
                                    onClick: y,
                                    disabled: l || a,
                                }),
                            ],
                        }),
                    ],
                });
            },
            controls: {
                label: { type: "text", label: "Label", defaultValue: "Accept terms and conditions" },
                disabled: { type: "boolean", label: "Disabled", defaultValue: !1 },
                readOnly: { type: "boolean", label: "Read Only", defaultValue: !1 },
                displayOnly: { type: "boolean", label: "Display Only", defaultValue: !1 },
                type: {
                    type: "select",
                    label: "Type",
                    defaultValue: n.Xo.DEFAULT,
                    options: [
                        { label: "Default", value: n.Xo.DEFAULT },
                        { label: "Inverted", value: n.Xo.INVERTED },
                        { label: "Ghost", value: n.Xo.GHOST },
                        { label: "Row", value: n.Xo.ROW },
                    ],
                },
                size: { type: "number", label: "Size", defaultValue: 24 },
                align: {
                    type: "select",
                    label: "Alignment",
                    defaultValue: n.ov.CENTER,
                    options: [
                        { label: "Center", value: n.ov.CENTER },
                        { label: "Top", value: n.ov.TOP },
                    ],
                },
                shape: {
                    type: "select",
                    label: "Shape",
                    defaultValue: n.Ib.BOX,
                    options: [
                        { label: "Box", value: n.Ib.BOX },
                        { label: "Small Box", value: n.Ib.SMALL_BOX },
                        { label: "Round", value: n.Ib.ROUND },
                    ],
                },
            },
        },
    ],
};
