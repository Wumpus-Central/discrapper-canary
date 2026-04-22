a.d(l, { N: () => d });
var t = a(627968),
    n = a(64700),
    o = a(27192),
    i = a(331322),
    r = a(834730),
    s = a(821609);
let d = {
    title: "Checkbox",
    stories: [
        {
            id: "void-checkbox",
            name: "Checkbox",
            component: function (e) {
                let { disabled: l, readOnly: a, displayOnly: d, type: u, size: c, align: b, shape: p, label: m } = e,
                    [h, x] = n.useState(!1),
                    g = n.useCallback((e, l) => {
                        x(l);
                    }, []),
                    f = n.useCallback(() => {
                        x(!0);
                    }, []),
                    v = n.useCallback(() => {
                        x(!1);
                    }, []),
                    y = n.useCallback(() => {
                        x((e) => !e);
                    }, []);
                return (0, t.jsxs)(i.B, {
                    direction: "vertical",
                    gap: "md",
                    children: [
                        (0, t.jsx)(o.Kj, {
                            "data-migration-pending": !0,
                            value: h,
                            onChange: g,
                            disabled: l,
                            readOnly: a,
                            displayOnly: d,
                            type: u,
                            size: c,
                            align: b,
                            shape: p,
                            children: (0, t.jsx)(r.E, { variant: "text-md/normal", children: m }),
                        }),
                        (0, t.jsxs)(r.E, {
                            variant: "text-sm/normal",
                            children: ["Current state: ", h ? "Checked" : "Unchecked"],
                        }),
                        (0, t.jsxs)(i.B, {
                            direction: "horizontal",
                            gap: "sm",
                            children: [
                                (0, t.jsx)(s.$, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Check",
                                    onClick: f,
                                    disabled: l || a,
                                }),
                                (0, t.jsx)(s.$, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Uncheck",
                                    onClick: v,
                                    disabled: l || a,
                                }),
                                (0, t.jsx)(s.$, {
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
                    defaultValue: o.Or.DEFAULT,
                    options: [
                        { label: "Default", value: o.Or.DEFAULT },
                        { label: "Inverted", value: o.Or.INVERTED },
                        { label: "Ghost", value: o.Or.GHOST },
                        { label: "Row", value: o.Or.ROW },
                    ],
                },
                size: { type: "number", label: "Size", defaultValue: 24 },
                align: {
                    type: "select",
                    label: "Alignment",
                    defaultValue: o.zI.CENTER,
                    options: [
                        { label: "Center", value: o.zI.CENTER },
                        { label: "Top", value: o.zI.TOP },
                    ],
                },
                shape: {
                    type: "select",
                    label: "Shape",
                    defaultValue: o.DO.BOX,
                    options: [
                        { label: "Box", value: o.DO.BOX },
                        { label: "Small Box", value: o.DO.SMALL_BOX },
                        { label: "Round", value: o.DO.ROUND },
                    ],
                },
            },
        },
    ],
};
