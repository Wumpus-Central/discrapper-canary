a.d(l, { N: () => d });
var t = a(627968),
    o = a(64700),
    n = a(27192),
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
                    [h, x] = o.useState(!1),
                    v = o.useCallback((e, l) => {
                        x(l);
                    }, []),
                    f = o.useCallback(() => {
                        x(!0);
                    }, []),
                    g = o.useCallback(() => {
                        x(!1);
                    }, []),
                    y = o.useCallback(() => {
                        x((e) => !e);
                    }, []);
                return (0, t.jsxs)(i.B, {
                    direction: "vertical",
                    gap: "md",
                    children: [
                        (0, t.jsx)(n.Kj, {
                            "data-migration-pending": !0,
                            value: h,
                            onChange: v,
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
                                    onClick: g,
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
                    defaultValue: n.Or.DEFAULT,
                    options: [
                        { label: "Default", value: n.Or.DEFAULT },
                        { label: "Inverted", value: n.Or.INVERTED },
                        { label: "Ghost", value: n.Or.GHOST },
                        { label: "Row", value: n.Or.ROW },
                    ],
                },
                size: { type: "number", label: "Size", defaultValue: 24 },
                align: {
                    type: "select",
                    label: "Alignment",
                    defaultValue: n.zI.CENTER,
                    options: [
                        { label: "Center", value: n.zI.CENTER },
                        { label: "Top", value: n.zI.TOP },
                    ],
                },
                shape: {
                    type: "select",
                    label: "Shape",
                    defaultValue: n.DO.BOX,
                    options: [
                        { label: "Box", value: n.DO.BOX },
                        { label: "Small Box", value: n.DO.SMALL_BOX },
                        { label: "Round", value: n.DO.ROUND },
                    ],
                },
            },
        },
    ],
};
