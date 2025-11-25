n.d(t, { t: () => f }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(762328),
    o = n(793030),
    s = n(708438);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let f = {
    title: "FloatingLayer",
    stories: [
        {
            name: "FloatingLayer",
            id: "popover-layer",
            component: function (e) {
                let {
                        placement: t,
                        spacing: n,
                        autoFlip: l,
                        autoShift: u,
                        strategy: f,
                        portal: _,
                        blockPointerEvents: p,
                    } = e,
                    [h, m] = i.useState(!1);
                return (0, r.jsx)(a.pS, {
                    open: h,
                    onOpenChange: m,
                    placement: t,
                    spacing: n,
                    autoFlip: l,
                    autoShift: u,
                    strategy: f,
                    portal: _,
                    blockPointerEvents: p,
                    renderLayer: () =>
                        (0, r.jsx)("div", {
                            className: s.layer,
                            children: (0, r.jsx)(o.xvT, {
                                variant: "text-sm/medium",
                                children: "FloatingLayer Content",
                            }),
                        }),
                    children: (e) => {
                        let { ref: t, props: n } = e;
                        return (0, r.jsx)(
                            o.zxk,
                            d(
                                c(
                                    {
                                        variant: "primary",
                                        text: "Target Element",
                                        onClick: () => m(!h),
                                    },
                                    n,
                                ),
                                { buttonRef: t },
                            ),
                        );
                    },
                });
            },
            controls: {
                placement: {
                    label: "Placement",
                    type: "select",
                    defaultValue: "bottom",
                    options: [
                        {
                            label: "Top",
                            value: "top",
                        },
                        {
                            label: "Top Start",
                            value: "top-start",
                        },
                        {
                            label: "Top End",
                            value: "top-end",
                        },
                        {
                            label: "Bottom",
                            value: "bottom",
                        },
                        {
                            label: "Bottom Start",
                            value: "bottom-start",
                        },
                        {
                            label: "Bottom End",
                            value: "bottom-end",
                        },
                        {
                            label: "Left",
                            value: "left",
                        },
                        {
                            label: "Left Start",
                            value: "left-start",
                        },
                        {
                            label: "Left End",
                            value: "left-end",
                        },
                        {
                            label: "Right",
                            value: "right",
                        },
                        {
                            label: "Right Start",
                            value: "right-start",
                        },
                        {
                            label: "Right End",
                            value: "right-end",
                        },
                    ],
                },
                spacing: {
                    label: "Spacing (px)",
                    type: "number",
                    defaultValue: 8,
                },
                autoFlip: {
                    label: "Auto Flip",
                    type: "boolean",
                    defaultValue: !0,
                },
                autoShift: {
                    label: "Auto Shift",
                    type: "boolean",
                    defaultValue: !0,
                },
                strategy: {
                    label: "Strategy",
                    type: "select",
                    defaultValue: "fixed",
                    options: [
                        {
                            label: "Fixed",
                            value: "fixed",
                        },
                        {
                            label: "Absolute",
                            value: "absolute",
                        },
                    ],
                },
                portal: {
                    label: "Portal",
                    type: "boolean",
                    defaultValue: !0,
                },
                blockPointerEvents: {
                    label: "Block Pointer Events",
                    type: "boolean",
                    defaultValue: !1,
                },
            },
        },
    ],
};
