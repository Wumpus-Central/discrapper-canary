n.d(t, { A: () => p });
var s = n(477900),
    a = n(582128),
    l = n(477262),
    r = n(432017),
    i = n(81369),
    o = n(265872),
    c = n(980707),
    u = n(477782),
    d = n(717400),
    m = n(99677),
    f = n(663341),
    h = n(248675),
    x = n(105292);
let g = [
    {
        id: "add-images-videos",
        label: h.default["51+9lc"],
        icon: l.s,
        accept: "image/*,video/*,.png,.jpg,.jpeg,.gif,.webp,.avif,.heic,.heif,.svg,.bmp,.mp4,.m4v,.mov,.webm,.mkv,.avi",
    },
    {
        id: "add-sounds",
        label: h.default["10ljr2"],
        icon: r.T,
        accept: "audio/*,.mp3,.wav,.ogg,.oga,.opus,.m4a,.aac,.flac,.weba,.webm,.aif,.aiff,.mid,.midi",
    },
    { id: "add-other-files", label: h.default.aotDee, icon: i.H, accept: "" },
];
function p(e) {
    let {
            navId: t,
            disabled: n,
            buttonClassName: l,
            iconClassName: r,
            onAddFiles: i,
            onImport: p,
            onSendToOtherProjects: j,
        } = e,
        v = a.useRef(null),
        N = a.useRef(null),
        b = x.intl.string(x.t.d56gCa),
        y = a.useCallback((e) => {
            let t = v.current;
            null != t && ((t.accept = e), t.click());
        }, []),
        w = a.useCallback(
            (e) => {
                (i(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
            },
            [i],
        );
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("input", {
                ref: v,
                type: "file",
                multiple: !0,
                hidden: !0,
                onChange: w,
                tabIndex: -1,
                "aria-hidden": !0,
            }),
            (0, s.jsx)(o.Y, {
                targetElementRef: N,
                position: "top",
                align: "left",
                animation: o.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, s.jsx)(c.W, {
                        "data-menu-migrated": !0,
                        navId: t,
                        "aria-label": b,
                        onClose: n,
                        onSelect: n,
                        children: (0, s.jsxs)(u.rX, {
                            children: [
                                g.map((e) =>
                                    (0, s.jsx)(
                                        u.Dr,
                                        {
                                            id: e.id,
                                            label: x.intl.string(e.label),
                                            iconLeft: e.icon,
                                            leadingAccessory: { type: "icon", icon: e.icon },
                                            action: () => y(e.accept),
                                        },
                                        e.id,
                                    ),
                                ),
                                null != p
                                    ? (0, s.jsx)(u.Dr, {
                                          id: "import-project",
                                          label: x.intl.string(h.default["p/k5i7"]),
                                          iconLeft: d.q,
                                          leadingAccessory: { type: "icon", icon: d.q },
                                          action: p,
                                      })
                                    : null,
                                null != j
                                    ? (0, s.jsx)(u.Dr, {
                                          id: "send-to-other-projects",
                                          label: x.intl.string(h.default["5HmLrK"]),
                                          iconLeft: m.t,
                                          leadingAccessory: { type: "icon", icon: m.t },
                                          action: j,
                                      })
                                    : null,
                            ],
                        }),
                    });
                },
                children: (e, t) => {
                    let { isShown: a } = t;
                    return (0, s.jsx)("button", {
                        ...e,
                        ref: N,
                        type: "button",
                        className: l,
                        disabled: n,
                        "aria-label": b,
                        "aria-haspopup": "menu",
                        "aria-expanded": a,
                        children: (0, s.jsx)(f.PlusLargeIcon, {
                            size: "refresh_sm",
                            color: "currentColor",
                            className: r,
                        }),
                    });
                },
            }),
        ],
    });
}
