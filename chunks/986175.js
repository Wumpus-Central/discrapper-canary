t.d(l, { I: () => v });
var a = t(951288),
    n = t(647438),
    o = t(164617),
    i = t(793030),
    r = t(198168),
    s = t(333200),
    u = t(352065),
    d = t(481060),
    c = t(177475),
    b = t(691739);
function p() {
    return (p =
        Object.assign ||
        function (e) {
            for (var l = 1; l < arguments.length; l++) {
                var t = arguments[l];
                for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            }
            return e;
        }).apply(this, arguments);
}
function y(e) {
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
function m(e, l) {
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
function f(e, l) {
    if (null == e) return {};
    var t,
        a,
        n = (function (e, l) {
            if (null == e) return {};
            var t,
                a,
                n = {},
                o = Object.keys(e);
            for (a = 0; a < o.length; a++) (t = o[a]), l.indexOf(t) >= 0 || (n[t] = e[t]);
            return n;
        })(e, l);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (a = 0; a < o.length; a++)
            (t = o[a]), !(l.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (n[t] = e[t]);
    }
    return n;
}
let v = {
    title: "Modal",
    stories: [
        {
            name: "Modal",
            id: "modal",
            docs: "https://design.discord.tools/components/web/modals/modal",
            component: function (e) {
                var { showPreview: l, showInput: t } = e,
                    n = f(e, ["showPreview", "showInput"]);
                return (0, a.jsxs)(d.Kqy, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, a.jsx)(d.Text, {
                            variant: "text-md/normal",
                            children: "Click the button below to open the modal",
                        }),
                        (0, a.jsx)(d.Button, {
                            variant: "primary",
                            text: "Open Modal",
                            onClick: () =>
                                (0, d.h7j)(
                                    (e) =>
                                        (0, a.jsx)(
                                            i.Modal,
                                            m(y({}, e, n), {
                                                title: n.title,
                                                subtitle: n.subtitle,
                                                input: t
                                                    ? (0, a.jsx)(d.E1j, {
                                                          placeholder: "Search...",
                                                          onChange: () => {},
                                                          query: "",
                                                      })
                                                    : void 0,
                                                preview: l
                                                    ? (0, a.jsxs)(d.Kqy, {
                                                          gap: 8,
                                                          children: [
                                                              (0, a.jsx)(d.Text, {
                                                                  variant: "text-lg/semibold",
                                                                  children: "Preview Content",
                                                              }),
                                                              (0, a.jsx)(d.Text, {
                                                                  variant: "text-md/normal",
                                                                  color: "text-secondary",
                                                                  children:
                                                                      "This is preview content that appears in the modal footer.",
                                                              }),
                                                          ],
                                                      })
                                                    : void 0,
                                                actions: [
                                                    {
                                                        variant: "secondary",
                                                        text: "Cancel",
                                                        onClick: e.onClose,
                                                    },
                                                    {
                                                        variant: "primary",
                                                        text: "Submit",
                                                        onClick: e.onClose,
                                                    },
                                                ],
                                                children: (0, a.jsxs)(d.Kqy, {
                                                    gap: 16,
                                                    children: [
                                                        (0, a.jsx)(s.V, {
                                                            maxOptionsVisible: 10,
                                                            label: "Example Select",
                                                            selectionMode: "multiple",
                                                            options: [
                                                                {
                                                                    label: "Option 1",
                                                                    value: "option1",
                                                                    id: "option1",
                                                                },
                                                                {
                                                                    label: "Option 2",
                                                                    value: "option2",
                                                                    id: "option2",
                                                                },
                                                                {
                                                                    label: "Option 3",
                                                                    value: "option3",
                                                                    id: "option3",
                                                                },
                                                                {
                                                                    label: "Option 4",
                                                                    value: "option4",
                                                                    id: "option4",
                                                                },
                                                                {
                                                                    label: "Option 5",
                                                                    value: "option5",
                                                                    id: "option5",
                                                                },
                                                                {
                                                                    label: "Option 6",
                                                                    value: "option6",
                                                                    id: "option6",
                                                                },
                                                                {
                                                                    label: "Option 7",
                                                                    value: "option7",
                                                                    id: "option7",
                                                                },
                                                                {
                                                                    label: "Option 8",
                                                                    value: "option8",
                                                                    id: "option8",
                                                                },
                                                            ],
                                                            onSelectionChange: () => {},
                                                        }),
                                                        (0, a.jsx)(d.oil, {
                                                            label: "Example Input",
                                                            placeholder: "Enter some text...",
                                                        }),
                                                        (0, a.jsx)(d.Text, {
                                                            variant: "text-md/normal",
                                                            children:
                                                                "This is the main content area of the modal. You can place any content here.",
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        ),
                                    { dismissable: n.dismissable },
                                ),
                        }),
                    ],
                });
            },
            controls: {
                title: {
                    label: "Title",
                    type: "text",
                    defaultValue: "Example Modal",
                },
                subtitle: {
                    label: "Subtitle",
                    type: "text",
                    defaultValue: "This is a modal subtitle",
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
                showInput: {
                    label: "Show Search Input",
                    type: "boolean",
                    defaultValue: !1,
                },
                showPreview: {
                    label: "Show Preview",
                    type: "boolean",
                    defaultValue: !1,
                },
                dismissable: {
                    label: "Dismissable",
                    type: "boolean",
                    defaultValue: !0,
                },
            },
        },
        {
            name: "ExpressiveModal",
            id: "expressive-modal",
            docs: "https://design.discord.tools/components/web/modals/expressive-modal",
            component: function (e) {
                var { graphic: l } = e,
                    s = f(e, ["graphic"]);
                let u = n.useMemo(
                    () =>
                        0 === l
                            ? {
                                  type: "image",
                                  src: c,
                              }
                            : 1 === l
                              ? {
                                    type: "lottie",
                                    lottie: () => t.e("94792").then(t.t.bind(t, 972951, 19)),
                                    aspectRatio: "6/4",
                                }
                              : 2 === l
                                ? {
                                      type: "rive",
                                      rive: o.PerfTestRive,
                                  }
                                : 3 === l
                                  ? {
                                        type: "video",
                                        src: b.Z,
                                        fallbackImageSrc: c,
                                        loop: !0,
                                        loopAt: 2.5,
                                    }
                                  : 4 === l
                                    ? {
                                          type: "dynamic",
                                          component: r.DynamicGraphicComponent.DEMO,
                                          aspectRatio: "6/4",
                                          props: { text: "Dynamic Content" },
                                      }
                                    : void 0,
                    [l],
                );
                return (0, a.jsxs)(d.Kqy, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, a.jsx)(d.Text, {
                            variant: "text-md/normal",
                            children: "Click the button below to open the expressive modal",
                        }),
                        (0, a.jsx)(d.Button, {
                            variant: "primary",
                            text: "Open ExpressiveModal",
                            onClick: () =>
                                (0, d.h7j)(
                                    (e) =>
                                        (0, a.jsx)(
                                            i.ExpressiveModal,
                                            m(y({}, e, s), {
                                                title: s.title,
                                                subtitle: s.subtitle,
                                                graphic: u,
                                                actions: [
                                                    {
                                                        variant: "secondary",
                                                        text: "Cancel",
                                                        onClick: e.onClose,
                                                    },
                                                    {
                                                        variant: "primary",
                                                        text: "Submit",
                                                        onClick: e.onClose,
                                                    },
                                                ],
                                                children: (0, a.jsx)(d.Kqy, {
                                                    gap: 16,
                                                    children: (0, a.jsx)(d.Text, {
                                                        variant: "text-md/normal",
                                                        children:
                                                            "This is an expressive modal with a gradient background and optional badge.",
                                                    }),
                                                }),
                                            }),
                                        ),
                                    { dismissable: s.dismissable },
                                ),
                        }),
                    ],
                });
            },
            controls: {
                title: {
                    label: "Title",
                    type: "text",
                    defaultValue: "Expressive Modal",
                },
                subtitle: {
                    label: "Subtitle",
                    type: "text",
                    defaultValue: "This modal has a gradient background",
                },
                gradientColor: {
                    label: "Gradient Color",
                    type: "select",
                    defaultValue: "purple",
                    options: [
                        {
                            label: "Purple",
                            value: "purple",
                        },
                        {
                            label: "Blue",
                            value: "blue",
                        },
                        {
                            label: "Nitro Pink",
                            value: "nitro-pink",
                        },
                    ],
                },
                graphic: {
                    label: "Graphic",
                    type: "select",
                    defaultValue: 0,
                    options: [
                        {
                            label: "Image",
                            value: 0,
                        },
                        {
                            label: "Lottie",
                            value: 1,
                        },
                        {
                            label: "Rive",
                            value: 2,
                        },
                        {
                            label: "Looping Video",
                            value: 3,
                        },
                        {
                            label: "Dynamic Content",
                            value: 4,
                        },
                    ],
                },
                badge: {
                    label: "Badge",
                    type: "select",
                    defaultValue: "new",
                    options: [
                        {
                            label: "None",
                            value: void 0,
                        },
                        {
                            label: "New",
                            value: "new",
                        },
                        {
                            label: "Beta",
                            value: "beta",
                        },
                        {
                            label: "Early Access",
                            value: "early_access",
                        },
                    ],
                },
                dismissable: {
                    label: "Dismissable",
                    type: "boolean",
                    defaultValue: !0,
                },
            },
        },
        {
            name: "Dynamic Graphic Modal",
            id: "dynamic-graphic-modal",
            component: function (e) {
                var { dynamicText: l } = e,
                    n = f(e, ["dynamicText"]);
                let o = {
                    type: "dynamic",
                    component: r.DynamicGraphicComponent.DEMO,
                    aspectRatio: "6/4",
                    props: { text: l },
                };
                return (0, a.jsxs)(d.Kqy, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, a.jsx)(d.Text, {
                            variant: "text-md/normal",
                            children:
                                "This example demonstrates the DynamicGraphic component rendering a React component inside the modal header.",
                        }),
                        (0, a.jsx)(d.Button, {
                            variant: "primary",
                            text: "Open Dynamic Graphic Modal",
                            onClick: () =>
                                (0, d.ZDy)(
                                    async () => {
                                        let { ExpressiveModal: e } = await Promise.resolve().then(t.bind(t, 793030));
                                        return (l) =>
                                            (0, a.jsx)(
                                                e,
                                                m(y({}, l, n), {
                                                    title: n.title,
                                                    subtitle: n.subtitle,
                                                    graphic: o,
                                                    actions: [
                                                        {
                                                            variant: "secondary",
                                                            text: "Cancel",
                                                            onClick: l.onClose,
                                                        },
                                                        {
                                                            variant: "primary",
                                                            text: "Submit",
                                                            onClick: l.onClose,
                                                        },
                                                    ],
                                                    children: (0, a.jsx)(d.Kqy, {
                                                        gap: 16,
                                                        children: (0, a.jsx)(d.Text, {
                                                            variant: "text-md/normal",
                                                            children:
                                                                "The header above is rendered using a React component via DynamicGraphic, allowing for dynamic, interactive content in the modal header.",
                                                        }),
                                                    }),
                                                }),
                                            );
                                    },
                                    { dismissable: n.dismissable },
                                ),
                        }),
                    ],
                });
            },
            controls: {
                title: {
                    label: "Title",
                    type: "text",
                    defaultValue: "Dynamic Graphic Modal",
                },
                subtitle: {
                    label: "Subtitle",
                    type: "text",
                    defaultValue: "This modal uses a React component in the header",
                },
                dynamicText: {
                    label: "Dynamic Text",
                    type: "text",
                    defaultValue: "Hello from DynamicGraphic!",
                },
                gradientColor: {
                    label: "Gradient Color",
                    type: "select",
                    defaultValue: "purple",
                    options: [
                        {
                            label: "Purple",
                            value: "purple",
                        },
                        {
                            label: "Blue",
                            value: "blue",
                        },
                        {
                            label: "Nitro Pink",
                            value: "nitro-pink",
                        },
                    ],
                },
                badge: {
                    label: "Badge",
                    type: "select",
                    defaultValue: void 0,
                    options: [
                        {
                            label: "None",
                            value: void 0,
                        },
                        {
                            label: "New",
                            value: "new",
                        },
                        {
                            label: "Beta",
                            value: "beta",
                        },
                        {
                            label: "Early Access",
                            value: "early_access",
                        },
                    ],
                },
                dismissable: {
                    label: "Dismissable",
                    type: "boolean",
                    defaultValue: !0,
                },
            },
        },
        {
            name: "LayerModal",
            id: "layer-modal",
            component: function (e) {
                var l = p(
                    {},
                    (function (e) {
                        if (null == e) throw TypeError("Cannot destructure " + e);
                        return e;
                    })(e),
                );
                return (0, a.jsxs)(d.Kqy, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, a.jsx)(d.Text, {
                            variant: "text-md/normal",
                            children: "Click the button below to open the layer modal",
                        }),
                        (0, a.jsx)(d.Button, {
                            variant: "primary",
                            text: "Open Layer Modal",
                            onClick: () =>
                                (0, d.h7j)((e) =>
                                    (0, a.jsx)(
                                        u.A,
                                        m(y({}, e, l), {
                                            children: (0, a.jsx)(d.Kqy, {
                                                gap: 16,
                                                children: (0, a.jsx)(d.Text, {
                                                    variant: "text-md/normal",
                                                    children: "This is the layer modal content",
                                                }),
                                            }),
                                        }),
                                    ),
                                ),
                        }),
                    ],
                });
            },
        },
    ],
};
