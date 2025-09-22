n.d(t, { I: () => y });
var r = n(951288),
    i = n(647438),
    a = n(164617),
    o = n(352065),
    s = n(481060),
    l = n(667202),
    c = n(82659),
    u = n(177475),
    d = n(691739);
function f(e, t, n) {
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
function _() {
    return (_ =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function p(e) {
    if (null == e) throw TypeError("Cannot destructure " + e);
    return e;
}
function h(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = b(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let y = {
    title: "Modal",
    stories: [
        {
            name: "Modal",
            id: "modal",
            docs: "https://design.discord.tools/components/web/modals/modal",
            component: function (e) {
                var { showPreview: t, showInput: n } = e,
                    i = E(e, ["showPreview", "showInput"]);
                return (0, r.jsxs)(s.Kqy, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, r.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: "Click the button below to open the modal",
                        }),
                        (0, r.jsx)(s.zxk, {
                            variant: "primary",
                            text: "Open Modal",
                            onClick: () =>
                                (0, s.h7j)(
                                    (e) =>
                                        (0, r.jsx)(
                                            c.Modal,
                                            g(h({}, e, i), {
                                                title: i.title,
                                                subtitle: i.subtitle,
                                                input: n
                                                    ? (0, r.jsx)(s.E1j, {
                                                          placeholder: "Search...",
                                                          onChange: () => {},
                                                          query: "",
                                                      })
                                                    : void 0,
                                                preview: t
                                                    ? (0, r.jsxs)(s.Kqy, {
                                                          gap: 8,
                                                          children: [
                                                              (0, r.jsx)(s.Text, {
                                                                  variant: "text-lg/semibold",
                                                                  children: "Preview Content",
                                                              }),
                                                              (0, r.jsx)(s.Text, {
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
                                                children: (0, r.jsxs)(s.Kqy, {
                                                    gap: 16,
                                                    children: [
                                                        (0, r.jsx)(s.oil, {
                                                            label: "Example Input",
                                                            placeholder: "Enter some text...",
                                                        }),
                                                        (0, r.jsx)(s.Text, {
                                                            variant: "text-md/normal",
                                                            children:
                                                                "This is the main content area of the modal. You can place any content here.",
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        ),
                                    { dismissable: i.dismissable },
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
                var { graphic: t } = e,
                    o = E(e, ["graphic"]);
                let c = i.useMemo(
                    () =>
                        0 === t
                            ? {
                                  type: "image",
                                  src: u,
                              }
                            : 1 === t
                              ? {
                                    type: "lottie",
                                    lottie: () => n.e("94792").then(n.t.bind(n, 972951, 19)),
                                    aspectRatio: "6/4",
                                }
                              : 2 === t
                                ? {
                                      type: "rive",
                                      rive: a.PerfTestRive,
                                  }
                                : 3 === t
                                  ? {
                                        type: "video",
                                        src: d.Z,
                                        fallbackImageSrc: u,
                                        loop: !0,
                                        loopAt: 2.5,
                                    }
                                  : 4 === t
                                    ? {
                                          type: "dynamic",
                                          component: s.AX$.DEMO,
                                          props: { text: "Dynamic Content" },
                                      }
                                    : void 0,
                    [t],
                );
                return (0, r.jsxs)(s.Kqy, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, r.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: "Click the button below to open the expressive modal",
                        }),
                        (0, r.jsx)(s.zxk, {
                            variant: "primary",
                            text: "Open ExpressiveModal",
                            onClick: () =>
                                (0, s.h7j)(
                                    (e) =>
                                        (0, r.jsx)(
                                            l.I,
                                            g(h({}, e, o), {
                                                title: o.title,
                                                subtitle: o.subtitle,
                                                graphic: c,
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
                                                children: (0, r.jsx)(s.Kqy, {
                                                    gap: 16,
                                                    children: (0, r.jsx)(s.Text, {
                                                        variant: "text-md/normal",
                                                        children:
                                                            "This is an expressive modal with a gradient background and optional badge.",
                                                    }),
                                                }),
                                            }),
                                        ),
                                    { dismissable: o.dismissable },
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
            name: "LayerModal",
            id: "layer-modal",
            component: function (e) {
                var t = _({}, p(e));
                return (0, r.jsxs)(s.Kqy, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, r.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: "Click the button below to open the layer modal",
                        }),
                        (0, r.jsx)(s.zxk, {
                            variant: "primary",
                            text: "Open Layer Modal",
                            onClick: () =>
                                (0, s.h7j)((e) =>
                                    (0, r.jsx)(
                                        o.A,
                                        g(h({}, e, t), {
                                            children: (0, r.jsx)(s.Kqy, {
                                                gap: 16,
                                                children: (0, r.jsx)(s.Text, {
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
