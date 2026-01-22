n.d(t, {
    Q: () => u,
});
var r = n(627968);
n(64700);
var i = n(158954),
    a = n(397927);

function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}

function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let u = {
    title: "Buttons",
    stories: [
        {
            name: "Button",
            id: "button",
            component: i.$nd,
            docs: "https://design.discord.tools/components/web/buttons/button",
            controls: {
                text: {
                    label: "Text",
                    type: "text",
                    defaultValue: "Click me",
                },
                variant: {
                    label: "Variant",
                    type: "select",
                    defaultValue: "primary",
                    options: [
                        {
                            label: "Primary",
                            value: "primary",
                        },
                        {
                            label: "Secondary",
                            value: "secondary",
                        },
                        {
                            label: "Critical Primary",
                            value: "critical-primary",
                        },
                        {
                            label: "Critical Secondary",
                            value: "critical-secondary",
                        },
                        {
                            label: "Active",
                            value: "active",
                        },
                        {
                            label: "Overlay Primary",
                            value: "overlay-primary",
                        },
                        {
                            label: "Overlay Secondary",
                            value: "overlay-secondary",
                        },
                        {
                            label: "Expressive",
                            value: "expressive",
                        },
                    ],
                },
                size: {
                    label: "Size",
                    type: "select",
                    defaultValue: "md",
                    options: [
                        {
                            label: "Small",
                            value: "sm",
                        },
                        {
                            label: "Medium",
                            value: "md",
                        },
                    ],
                },
                disabled: {
                    label: "Disabled",
                    type: "boolean",
                    defaultValue: !1,
                },
                loading: {
                    label: "Loading",
                    type: "boolean",
                    defaultValue: !1,
                },
                fullWidth: {
                    label: "Full Width",
                    type: "boolean",
                    defaultValue: !1,
                },
                minWidth: {
                    label: "Min width",
                    type: "text",
                    defaultValue: "",
                },
            },
        },
        {
            name: "IconButton",
            id: "icon-button",
            docs: "https://design.discord.tools/components/web/buttons/icon-button",
            component: function (e) {
                return (0, r.jsx)(
                    i.K0,
                    c(o({}, e), {
                        icon: a.pVd,
                        "aria-label": "Clyde",
                    }),
                );
            },
            controls: {
                variant: {
                    label: "Variant",
                    type: "select",
                    defaultValue: "primary",
                    options: [
                        {
                            label: "Primary",
                            value: "primary",
                        },
                        {
                            label: "Secondary",
                            value: "secondary",
                        },
                        {
                            label: "Critical Primary",
                            value: "critical-primary",
                        },
                        {
                            label: "Critical Secondary",
                            value: "critical-secondary",
                        },
                        {
                            label: "Active",
                            value: "active",
                        },
                        {
                            label: "Overlay Primary",
                            value: "overlay-primary",
                        },
                        {
                            label: "Overlay Secondary",
                            value: "overlay-secondary",
                        },
                        {
                            label: "Icon Only",
                            value: "icon-only",
                        },
                    ],
                },
                size: {
                    label: "Size",
                    type: "select",
                    defaultValue: "md",
                    options: [
                        {
                            label: "Small",
                            value: "sm",
                        },
                        {
                            label: "Medium",
                            value: "md",
                        },
                    ],
                },
                disabled: {
                    label: "Disabled",
                    type: "boolean",
                    defaultValue: !1,
                },
                loading: {
                    label: "Loading",
                    type: "boolean",
                    defaultValue: !1,
                },
            },
        },
        {
            name: "TextButton",
            id: "text-button",
            docs: "https://design.discord.tools/components/web/buttons/text-button",
            component: i.QWc,
            controls: {
                text: {
                    label: "Text",
                    type: "text",
                    defaultValue: "Link Button",
                },
                variant: {
                    label: "Variant",
                    type: "select",
                    defaultValue: "primary",
                    options: [
                        {
                            label: "Primary",
                            value: "primary",
                        },
                        {
                            label: "Secondary",
                            value: "secondary",
                        },
                        {
                            label: "Always White",
                            value: "always-white",
                        },
                        {
                            label: "Critical",
                            value: "critical",
                        },
                    ],
                },
                disabled: {
                    label: "Disabled",
                    type: "boolean",
                    defaultValue: !1,
                },
            },
        },
        {
            name: "ButtonGroup",
            id: "button-group",
            docs: "https://design.discord.tools/components/web/buttons/button-group",
            component: function (e) {
                return (0, r.jsxs)(
                    i.e2v,
                    c(o({}, e), {
                        children: [
                            (0, r.jsx)(i.$nd, {
                                variant: "secondary",
                                text: "Cancel",
                            }),
                            (0, r.jsx)(i.$nd, {
                                variant: "primary",
                                text: "Submit",
                            }),
                        ],
                    }),
                );
            },
            controls: {
                size: {
                    label: "Size",
                    type: "select",
                    defaultValue: "md",
                    options: [
                        {
                            label: "Small",
                            value: "sm",
                        },
                        {
                            label: "Medium",
                            value: "md",
                        },
                    ],
                },
                direction: {
                    label: "Direction",
                    type: "select",
                    defaultValue: "horizontal",
                    options: [
                        {
                            label: "Horizontal",
                            value: "horizontal",
                        },
                        {
                            label: "Vertical",
                            value: "vertical",
                        },
                    ],
                },
                fullWidth: {
                    label: "Full Width",
                    type: "boolean",
                    defaultValue: !1,
                },
            },
        },
    ],
};
