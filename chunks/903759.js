n.d(t, { u: () => m }), n(388685);
var r = n(255367),
    l = n(73800),
    i = n(481060),
    a = n(327802),
    o = n(372129),
    s = n(598117),
    u = n(746622),
    c = n(388032),
    d = n(503057);
let m = (e) => {
        let { setImage: t } = e,
            [n, o] = l.useState(null);
        return (0, r.jsx)("div", {
            className: d.emptyState,
            children: (0, r.jsxs)("div", {
                className: d.dropZone,
                children: [
                    (0, r.jsx)(i.FmF, {
                        size: "lg",
                        color: i.TVs.colors.HEADER_MUTED,
                        className: d.imagePlusIcon,
                    }),
                    (0, r.jsxs)("div", {
                        className: d.textContainer,
                        children: [
                            (0, r.jsx)(i.Text, {
                                variant: "text-md/medium",
                                children: c.intl.format(c.t["Ks2/3d"], {
                                    selectFileHook: (e, n) =>
                                        (0, r.jsx)(
                                            h,
                                            {
                                                translatedContent: e,
                                                setUserImage: t,
                                            },
                                            n,
                                        ),
                                }),
                            }),
                            (0, r.jsx)(i.Text, {
                                variant: "text-xs/normal",
                                color: "text-tertiary",
                                children: c.intl.string(c.t.UTE8Cw),
                            }),
                        ],
                    }),
                    null !== n &&
                        (0, r.jsx)(u.H, {
                            error: s.ze.IMAGE_LOAD,
                            variant: "text-sm/normal",
                            color: "text-danger",
                        }),
                    (0, r.jsx)(a.X, {
                        onSuccess: t,
                        onError: o,
                    }),
                ],
            }),
        });
    },
    h = (e) => {
        let { setUserImage: t, translatedContent: n } = e;
        return (0, r.jsx)(i.P3F, {
            focusProps: { within: !0 },
            tag: "a",
            children: (0, r.jsxs)("label", {
                children: [
                    n,
                    (0, r.jsx)(o.ZP, {
                        tabIndex: 0,
                        onChange: (e, n, r) => (
                            t({
                                data: e,
                                file: n,
                                image: r,
                            }),
                            Promise.resolve(void 0)
                        ),
                        multiple: !1,
                        title: "",
                    }),
                ],
            }),
        });
    };
