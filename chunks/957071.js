var n = r(477900),
    l = r(582128),
    a = r(477262),
    i = r(432017),
    s = r(81369),
    o = r(265872),
    c = r(165862),
    u = r(477782),
    d = r(717400),
    f = r(99677),
    m = r(663341),
    p = r(191850),
    h = r(792996);
let g = [
    {
        id: "add-images-videos",
        label: p.default["51+9lc"],
        icon: a.ImagesIcon,
        accept: "image/*,video/*,.png,.jpg,.jpeg,.gif,.webp,.avif,.heic,.heif,.svg,.bmp,.mp4,.m4v,.mov,.webm,.mkv,.avi",
    },
    {
        id: "add-sounds",
        label: p.default["10ljr2"],
        icon: i.MusicIcon,
        accept: "audio/*,.mp3,.wav,.ogg,.oga,.opus,.m4a,.aac,.flac,.weba,.webm,.aif,.aiff,.mid,.midi",
    },
    { id: "add-other-files", label: p.default.aotDee, icon: s.FileUpIcon, accept: "" },
];
r.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    navId: t,
                    disabled: r,
                    buttonClassName: a,
                    iconClassName: i,
                    onAddFiles: s,
                    onImport: x,
                    onSendToOtherProjects: j,
                } = e,
                b = l.useRef(null),
                v = l.useRef(null),
                C = h.intl.string(h.t.d56gCa),
                y = l.useCallback((e) => {
                    let t = b.current;
                    null != t && ((t.accept = e), t.click());
                }, []),
                w = l.useCallback(
                    (e) => {
                        (s(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
                    },
                    [s],
                );
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)("input", {
                        ref: b,
                        type: "file",
                        multiple: !0,
                        hidden: !0,
                        onChange: w,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    (0, n.jsx)(o.Y, {
                        targetElementRef: v,
                        position: "top",
                        align: "left",
                        animation: o.Y.Animation.NONE,
                        renderPopout: (e) => {
                            let { closePopout: r } = e;
                            return (0, n.jsx)(c.W, {
                                "data-menu-migrated": !0,
                                navId: t,
                                "aria-label": C,
                                onClose: r,
                                onSelect: r,
                                children: (0, n.jsxs)(u.rX, {
                                    children: [
                                        g.map((e) =>
                                            (0, n.jsx)(
                                                u.Dr,
                                                {
                                                    id: e.id,
                                                    label: h.intl.string(e.label),
                                                    iconLeft: e.icon,
                                                    leadingAccessory: { type: "icon", icon: e.icon },
                                                    action: () => y(e.accept),
                                                },
                                                e.id,
                                            ),
                                        ),
                                        null != x
                                            ? (0, n.jsx)(u.Dr, {
                                                  id: "import-project",
                                                  label: h.intl.string(p.default["p/k5i7"]),
                                                  iconLeft: d.BrowserPlusIcon,
                                                  leadingAccessory: { type: "icon", icon: d.BrowserPlusIcon },
                                                  action: x,
                                              })
                                            : null,
                                        null != j
                                            ? (0, n.jsx)(u.Dr, {
                                                  id: "send-to-other-projects",
                                                  label: h.intl.string(p.default["5HmLrK"]),
                                                  iconLeft: f.ChatArrowRightIcon,
                                                  leadingAccessory: { type: "icon", icon: f.ChatArrowRightIcon },
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
                                ref: v,
                                type: "button",
                                className: a,
                                disabled: r,
                                "aria-label": C,
                                "aria-haspopup": "menu",
                                "aria-expanded": l,
                                children: (0, n.jsx)(m.PlusLargeIcon, {
                                    size: "refresh_sm",
                                    color: "currentColor",
                                    className: i,
                                }),
                            });
                        },
                    }),
                ],
            });
        },
    },
);
