t.d(l, { B: () => u });
var a = t(951288);
t(647438);
var n = t(793030),
    o = t(481060);
function i(e) {
    for (var l = 1; l < arguments.length; l++) {
        var t = null != arguments[l] ? arguments[l] : {},
            a = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            a.forEach(function (l) {
                var a;
                (a = t[l]),
                    l in e
                        ? Object.defineProperty(e, l, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[l] = a);
            });
    }
    return e;
}
function r(e, l) {
    return (
        (l = null != l ? l : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(l))
            : (function (e, l) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, a);
                  }
                  return t;
              })(Object(l)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(l, t));
              }),
        e
    );
}
let s = {
        name: "Button",
        id: "button",
        component: n.zxk,
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
    u = {
        title: "Buttons",
        stories: [
            s,
            {
                name: "IconButton",
                id: "icon-button",
                docs: "https://design.discord.tools/components/web/buttons/icon-button",
                component: function (e) {
                    return (0, a.jsx)(
                        n.hU,
                        r(i({}, e), {
                            icon: o.gw7,
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
                component: n.Avr,
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
                    return (0, a.jsxs)(
                        n.hE2,
                        r(i({}, e), {
                            children: [
                                (0, a.jsx)(n.zxk, {
                                    variant: "secondary",
                                    text: "Cancel",
                                }),
                                (0, a.jsx)(n.zxk, {
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
