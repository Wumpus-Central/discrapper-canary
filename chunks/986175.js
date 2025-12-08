n.d(t, { I: () => C }), n(35282), n(539854), n(415506), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(164617),
    o = n(793030),
    s = n(198168),
    l = n(333200),
    c = n(352065),
    u = n(481060),
    d = n(248514),
    f = n(177475),
    p = n(691739);
function _(e, t, n) {
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
function m() {
    return (m =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function h(e) {
    if (null == e) throw TypeError("Cannot destructure " + e);
    return e;
}
function g(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
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
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = O(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function v(e) {
    let t,
        n = [],
        i = 0,
        a = /\*\*(.+?)\*\*/g,
        o = 0;
    for (; null !== (t = a.exec(e)); )
        t.index > i && n.push(e.substring(i, t.index)),
            n.push((0, r.jsx)("strong", { children: t[1] }, o++)),
            (i = a.lastIndex);
    return i < e.length && n.push(e.substring(i)), n.length > 0 ? n : e;
}
function S() {
    let { setNextEnabled: e } = (0, o.vqz)();
    return (
        i.useEffect(() => {
            e(!0);
        }, [e]),
        (0, r.jsx)(u.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: "Lost access to your radness? Talk to your radness provider to refresh your aura.",
        })
    );
}
function I() {
    let { setNextEnabled: e } = (0, o.vqz)(),
        [t, n] = i.useState([]),
        a = [
            {
                label: "I am wearing a helmet",
                value: "helmet",
            },
            {
                label: "I know where to find my personal flotation device",
                value: "pfd",
            },
            {
                label: "I completed the safety training",
                value: "training",
            },
        ];
    return (
        i.useEffect(() => {
            e(t.length === a.length);
        }, [t, e, a.length]),
        (0, r.jsx)(o.cOn, {
            label: "Safety checklist",
            options: a,
            selectedValues: t,
            onChange: n,
        })
    );
}
function T() {
    let { setNextEnabled: e } = (0, o.vqz)(),
        [t, n] = i.useState("");
    return (
        i.useEffect(() => {
            e(t.length > 0);
        }, [t, e]),
        (0, r.jsx)(u.oil, {
            placeholder: "Enter your passcode...",
            value: t,
            onChange: (e) => n(e),
        })
    );
}
function A(e) {
    var t = m({}, h(e));
    let [n, a] = i.useState("intro"),
        s = [
            {
                stepKey: "intro",
                title: "Verify radness",
                subtitle: "To verify your radness, we need to ask you a few deep and personal questions.",
                body: (0, r.jsx)(S, {}),
                nextButtonProps: { text: "Verify" },
            },
            {
                stepKey: "safety",
                stepNumber: 1,
                title: "Safety first",
                subtitle: "Before we get started verifying your radness, we need to make sure you're safe and sound.",
                body: (0, r.jsx)(I, {}),
            },
            {
                stepKey: "passcode",
                stepNumber: 2,
                title: "Enter passcode",
                subtitle: "Enter your passcode to complete the radness verification process.",
                body: (0, r.jsx)(T, {}),
                nextButtonProps: { text: "Verify passcode" },
            },
        ];
    return (0, r.jsx)(
        o.dGG,
        g(
            {
                steps: s,
                stepCount: 2,
                currentStepKey: n,
                onStepChange: a,
            },
            t,
        ),
    );
}
let C = {
    title: "Modal",
    stories: [
        {
            name: "Modal",
            id: "modal",
            docs: "https://design.discord.tools/components/web/modals/modal",
            component: function (e) {
                var t,
                    { showPreview: n, showInput: i, subtitleIcon: a } = e,
                    s = y(e, ["showPreview", "showInput", "subtitleIcon"]);
                let c = a
                    ? {
                          text: null != (t = s.subtitle) ? t : "Default subtitle",
                          leadingIcon: o.VL1,
                      }
                    : s.subtitle;
                return (0, r.jsxs)(u.Kqy, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: "text-md/normal",
                            children: "Click the button below to open the modal",
                        }),
                        (0, r.jsx)(u.Button, {
                            variant: "primary",
                            text: "Open Modal",
                            onClick: () =>
                                (0, u.h7j)(
                                    (e) =>
                                        (0, r.jsx)(
                                            o.Modal,
                                            b(g({}, e, s), {
                                                title: s.title,
                                                subtitle: c,
                                                input: i
                                                    ? (0, r.jsx)(u.E1j, {
                                                          placeholder: "Search...",
                                                          onChange: () => {},
                                                          query: "",
                                                      })
                                                    : void 0,
                                                preview: n
                                                    ? (0, r.jsxs)(u.Kqy, {
                                                          gap: 8,
                                                          children: [
                                                              (0, r.jsx)(u.Text, {
                                                                  variant: "text-lg/semibold",
                                                                  children: "Preview Content",
                                                              }),
                                                              (0, r.jsx)(u.Text, {
                                                                  variant: "text-md/normal",
                                                                  color: "text-subtle",
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
                                                children: (0, r.jsxs)(u.Kqy, {
                                                    gap: 16,
                                                    children: [
                                                        (0, r.jsx)(l.V, {
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
                                                        (0, r.jsx)(u.oil, {
                                                            label: "Example Input",
                                                            placeholder: "Enter some text...",
                                                        }),
                                                        (0, r.jsx)(u.Text, {
                                                            variant: "text-md/normal",
                                                            children:
                                                                "This is the main content area of the modal. You can place any content here.",
                                                        }),
                                                    ],
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
                    defaultValue: "Example Modal",
                },
                subtitle: {
                    label: "Subtitle",
                    type: "text",
                    defaultValue: "This is a modal subtitle",
                },
                subtitleIcon: {
                    label: "Subtitle Icon",
                    type: "boolean",
                    defaultValue: !1,
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
            name: "ConfirmModal [Alpha]",
            id: "confirm-modal",
            component: function (e) {
                var { cancelText: t, confirmDelay: n, confirmError: a, subtitle: o, formatSubtitle: s } = e,
                    l = y(e, ["cancelText", "confirmDelay", "confirmError", "subtitle", "formatSubtitle"]);
                let c = i.useMemo(() => (s ? v(o) : o), [o, s]);
                return (0, r.jsxs)(u.Kqy, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: "text-md/normal",
                            children: "Click the button below to open the confirm modal",
                        }),
                        (0, r.jsx)(u.Button, {
                            variant: "primary",
                            text: "Open Confirm Modal",
                            onClick: () =>
                                (0, d.Z)(
                                    b(g({}, l), {
                                        subtitle: c,
                                        cancelText: "" === t ? void 0 : t,
                                        onConfirm: async (e) => {
                                            try {
                                                if ((await new Promise((e) => setTimeout(e, 1000 * n)), a))
                                                    throw Error("Confirm error");
                                            } catch (t) {
                                                throw (
                                                    (e(
                                                        "Something went wrong reticulating splines. Please try again later.",
                                                    ),
                                                    t)
                                                );
                                            }
                                        },
                                    }),
                                ),
                        }),
                    ],
                });
            },
            controls: {
                title: {
                    label: "Title",
                    type: "text",
                    defaultValue: "Reticulate splines",
                },
                subtitle: {
                    label: "Subtitle",
                    type: "text",
                    defaultValue: "Are you sure you want to permanently reticulate **Spliney McSplineface**?",
                },
                formatSubtitle: {
                    label: "Format Subtitle (**bold**)",
                    type: "boolean",
                    defaultValue: !0,
                },
                confirmText: {
                    label: "Confirm Text",
                    type: "text",
                    defaultValue: "Reticulate",
                },
                cancelText: {
                    label: "Cancel Text",
                    type: "text",
                    defaultValue: "",
                },
                variant: {
                    label: "Variant",
                    type: "select",
                    defaultValue: "critical",
                    options: [
                        {
                            label: "Primary",
                            value: "primary",
                        },
                        {
                            label: "Critical",
                            value: "critical",
                        },
                    ],
                },
                confirmDelay: {
                    label: "Confirm Delay (seconds)",
                    type: "number",
                    defaultValue: 0,
                },
                confirmError: {
                    label: "Confirm Error",
                    type: "boolean",
                    defaultValue: !1,
                },
            },
        },
        {
            name: "ExpressiveModal",
            id: "expressive-modal",
            docs: "https://design.discord.tools/components/web/modals/expressive-modal",
            component: function (e) {
                var t,
                    { graphic: l, subtitleIcon: c } = e,
                    d = y(e, ["graphic", "subtitleIcon"]);
                let _ = c
                        ? {
                              text: null != (t = d.subtitle) ? t : "Default subtitle",
                              leadingIcon: o.VL1,
                          }
                        : d.subtitle,
                    m = i.useMemo(
                        () =>
                            0 === l
                                ? {
                                      type: "image",
                                      src: f,
                                  }
                                : 1 === l
                                  ? {
                                        type: "lottie",
                                        lottie: () => n.e("94792").then(n.t.bind(n, 972951, 19)),
                                        aspectRatio: "6/4",
                                    }
                                  : 2 === l
                                    ? {
                                          type: "rive",
                                          rive: a.PerfTestRive,
                                      }
                                    : 3 === l
                                      ? {
                                            type: "video",
                                            src: p.Z,
                                            fallbackImageSrc: f,
                                            loop: !0,
                                            loopAt: 2.5,
                                        }
                                      : 4 === l
                                        ? {
                                              type: "dynamic",
                                              component: s.DynamicGraphicComponent.DEMO,
                                              aspectRatio: "6/4",
                                              props: { text: "Dynamic Content" },
                                          }
                                        : void 0,
                        [l],
                    );
                return (0, r.jsxs)(u.Kqy, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: "text-md/normal",
                            children: "Click the button below to open the expressive modal",
                        }),
                        (0, r.jsx)(u.Button, {
                            variant: "primary",
                            text: "Open ExpressiveModal",
                            onClick: () =>
                                (0, u.h7j)(
                                    (e) =>
                                        (0, r.jsx)(
                                            o.ExpressiveModal,
                                            b(g({}, e, d), {
                                                title: d.title,
                                                subtitle: _,
                                                graphic: m,
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
                                                children: (0, r.jsx)(u.Kqy, {
                                                    gap: 16,
                                                    children: (0, r.jsx)(u.Text, {
                                                        variant: "text-md/normal",
                                                        children:
                                                            "This is an expressive modal with a gradient background and optional badge.",
                                                    }),
                                                }),
                                            }),
                                        ),
                                    { dismissable: d.dismissable },
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
                subtitleIcon: {
                    label: "Subtitle Icon",
                    type: "boolean",
                    defaultValue: !1,
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
                var { dynamicText: t } = e,
                    i = y(e, ["dynamicText"]);
                let a = {
                    type: "dynamic",
                    component: s.DynamicGraphicComponent.DEMO,
                    aspectRatio: "6/4",
                    props: { text: t },
                };
                return (0, r.jsxs)(u.Kqy, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: "text-md/normal",
                            children:
                                "This example demonstrates the DynamicGraphic component rendering a React component inside the modal header.",
                        }),
                        (0, r.jsx)(u.Button, {
                            variant: "primary",
                            text: "Open Dynamic Graphic Modal",
                            onClick: () =>
                                (0, u.ZDy)(
                                    async () => {
                                        let { ExpressiveModal: e } = await Promise.resolve().then(n.bind(n, 793030));
                                        return (t) =>
                                            (0, r.jsx)(
                                                e,
                                                b(g({}, t, i), {
                                                    title: i.title,
                                                    subtitle: i.subtitle,
                                                    graphic: a,
                                                    actions: [
                                                        {
                                                            variant: "secondary",
                                                            text: "Cancel",
                                                            onClick: t.onClose,
                                                        },
                                                        {
                                                            variant: "primary",
                                                            text: "Submit",
                                                            onClick: t.onClose,
                                                        },
                                                    ],
                                                    children: (0, r.jsx)(u.Kqy, {
                                                        gap: 16,
                                                        children: (0, r.jsx)(u.Text, {
                                                            variant: "text-md/normal",
                                                            children:
                                                                "The header above is rendered using a React component via DynamicGraphic, allowing for dynamic, interactive content in the modal header.",
                                                        }),
                                                    }),
                                                }),
                                            );
                                    },
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
                var t = m({}, h(e));
                return (0, r.jsxs)(u.Kqy, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: "text-md/normal",
                            children: "Click the button below to open the layer modal",
                        }),
                        (0, r.jsx)(u.Button, {
                            variant: "primary",
                            text: "Open Layer Modal",
                            onClick: () =>
                                (0, u.h7j)((e) =>
                                    (0, r.jsx)(
                                        c.A,
                                        b(g({}, e, t), {
                                            children: (0, r.jsx)(u.Kqy, {
                                                gap: 16,
                                                children: (0, r.jsx)(u.Text, {
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
        {
            name: "MultiStepModal [Alpha]",
            id: "multi-step-modal",
            component: function (e) {
                var t = m({}, h(e));
                return (0, r.jsxs)(u.Kqy, {
                    gap: 16,
                    align: "center",
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: "text-md/normal",
                            children: "Click the button below to open the multi-step modal",
                        }),
                        (0, r.jsx)(u.Button, {
                            variant: "primary",
                            text: "Open MultiStepModal",
                            onClick: () => (0, u.h7j)((e) => (0, r.jsx)(A, g({}, e)), { dismissable: t.dismissable }),
                        }),
                    ],
                });
            },
        },
    ],
};
