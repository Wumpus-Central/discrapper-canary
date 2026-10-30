s.d(t, { A: () => p });
var n = s(477900),
    l = s(582128),
    a = s(477262),
    r = s(432017),
    i = s(81369),
    o = s(265872),
    c = s(980707),
    u = s(477782),
    d = s(717400),
    m = s(99677),
    f = s(663341),
    h = s(809526),
    x = s(105292);
let g = [
    {
        id: "add-images-videos",
        label: h.default["51+9lc"],
        icon: a.s,
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
            disabled: s,
            buttonClassName: a,
            iconClassName: r,
            onAddFiles: i,
            onImport: p,
            onSendToOtherProjects: j,
        } = e,
        v = l.useRef(null),
        N = l.useRef(null),
        b = x.intl.string(x.t.d56gCa),
        y = l.useCallback((e) => {
            let t = v.current;
            null != t && ((t.accept = e), t.click());
        }, []),
        w = l.useCallback(
            (e) => {
                (i(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
            },
            [i],
        );
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("input", {
                ref: v,
                type: "file",
                multiple: !0,
                hidden: !0,
                onChange: w,
                tabIndex: -1,
                "aria-hidden": !0,
            }),
            (0, n.jsx)(o.Y, {
                targetElementRef: N,
                position: "top",
                align: "left",
                animation: o.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: s } = e;
                    return (0, n.jsx)(c.W, {
                        "data-menu-migrated": !0,
                        navId: t,
                        "aria-label": b,
                        onClose: s,
                        onSelect: s,
                        children: (0, n.jsxs)(u.rX, {
                            children: [
                                g.map((e) =>
                                    (0, n.jsx)(
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
                                    ? (0, n.jsx)(u.Dr, {
                                          id: "import-project",
                                          label: x.intl.string(h.default["p/k5i7"]),
                                          iconLeft: d.q,
                                          leadingAccessory: { type: "icon", icon: d.q },
                                          action: p,
                                      })
                                    : null,
                                null != j
                                    ? (0, n.jsx)(u.Dr, {
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
                    let { isShown: l } = t;
                    return (0, n.jsx)("button", {
                        ...e,
                        ref: N,
                        type: "button",
                        className: a,
                        disabled: s,
                        "aria-label": b,
                        "aria-haspopup": "menu",
                        "aria-expanded": l,
                        children: (0, n.jsx)(f.PlusLargeIcon, {
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
