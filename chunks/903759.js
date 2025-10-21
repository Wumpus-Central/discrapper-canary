n.d(t, { u: () => h }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(481060),
    a = n(327802),
    s = n(372129),
    o = n(598117),
    u = n(746622),
    c = n(388032),
    d = n(443899);
let h = (e) => {
        let { setImage: t } = e,
            [n, s] = i.useState(null);
        return (0, r.jsx)("div", {
            className: d.emptyState,
            children: (0, r.jsxs)("div", {
                className: d.dropZone,
                children: [
                    (0, r.jsx)(l.FmF, {
                        size: "lg",
                        color: l.TVs.colors.HEADER_MUTED,
                        className: d.imagePlusIcon,
                    }),
                    (0, r.jsxs)("div", {
                        className: d.textContainer,
                        children: [
                            (0, r.jsx)(l.Text, {
                                variant: "text-md/medium",
                                children: c.intl.format(c.t["Ks2/3R"], {
                                    selectFileHook: (e, n) =>
                                        (0, r.jsx)(
                                            m,
                                            {
                                                translatedContent: e,
                                                setUserImage: t,
                                            },
                                            n,
                                        ),
                                }),
                            }),
                            (0, r.jsx)(l.Text, {
                                variant: "text-xs/normal",
                                color: "text-tertiary",
                                children: c.intl.string(c.t["UTE8C/"]),
                            }),
                        ],
                    }),
                    null !== n &&
                        (0, r.jsx)(u.H4, {
                            error: o.ze.IMAGE_LOAD,
                            variant: "text-sm/normal",
                            color: "text-danger",
                        }),
                    (0, r.jsx)(a.X, {
                        onSuccess: t,
                        onError: s,
                    }),
                ],
            }),
        });
    },
    m = (e) => {
        let { setUserImage: t, translatedContent: n } = e;
        return (0, r.jsx)(l.P3F, {
            focusProps: { within: !0 },
            tag: "a",
            children: (0, r.jsxs)("label", {
                children: [
                    n,
                    (0, r.jsx)(s.ZP, {
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
