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
let x = [
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
                    onImport: g,
                    onSendToOtherProjects: b,
                } = e,
                j = l.useRef(null),
                v = l.useRef(null),
                w = h.intl.string(h.t.d56gCa),
                y = l.useCallback((e) => {
                    let t = j.current;
                    null != t && ((t.accept = e), t.click());
                }, []),
                C = l.useCallback(
                    (e) => {
                        (s(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
                    },
                    [s],
                );
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)("input", {
                        ref: j,
                        type: "file",
                        multiple: !0,
                        hidden: !0,
                        onChange: C,
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
                                "aria-label": w,
                                onClose: r,
                                onSelect: r,
                                children: (0, n.jsxs)(u.rX, {
                                    children: [
                                        x.map((e) =>
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
                                        null != g
                                            ? (0, n.jsx)(u.Dr, {
                                                  id: "import-project",
                                                  label: h.intl.string(p.default["p/k5i7"]),
                                                  iconLeft: d.BrowserPlusIcon,
                                                  leadingAccessory: { type: "icon", icon: d.BrowserPlusIcon },
                                                  action: g,
                                              })
                                            : null,
                                        null != b
                                            ? (0, n.jsx)(u.Dr, {
                                                  id: "send-to-other-projects",
                                                  label: h.intl.string(p.default["5HmLrK"]),
                                                  iconLeft: f.ChatArrowRightIcon,
                                                  leadingAccessory: { type: "icon", icon: f.ChatArrowRightIcon },
                                                  action: b,
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
                                "aria-label": w,
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
