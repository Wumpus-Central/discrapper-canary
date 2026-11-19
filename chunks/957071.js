var l = r(477900),
    n = r(582128),
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
                    onSendToOtherProjects: b,
                } = e,
                j = n.useRef(null),
                v = n.useRef(null),
                y = h.intl.string(h.t.d56gCa),
                C = n.useCallback((e) => {
                    let t = j.current;
                    null != t && ((t.accept = e), t.click());
                }, []),
                w = n.useCallback(
                    (e) => {
                        (s(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
                    },
                    [s],
                );
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)("input", {
                        ref: j,
                        type: "file",
                        multiple: !0,
                        hidden: !0,
                        onChange: w,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    (0, l.jsx)(o.Y, {
                        targetElementRef: v,
                        position: "top",
                        align: "left",
                        animation: o.Y.Animation.NONE,
                        renderPopout: (e) => {
                            let { closePopout: r } = e;
                            return (0, l.jsx)(c.W, {
                                "data-menu-migrated": !0,
                                navId: t,
                                "aria-label": y,
                                onClose: r,
                                onSelect: r,
                                children: (0, l.jsxs)(u.rX, {
                                    children: [
                                        g.map((e) =>
                                            (0, l.jsx)(
                                                u.Dr,
                                                {
                                                    id: e.id,
                                                    label: h.intl.string(e.label),
                                                    iconLeft: e.icon,
                                                    leadingAccessory: { type: "icon", icon: e.icon },
                                                    action: () => C(e.accept),
                                                },
                                                e.id,
                                            ),
                                        ),
                                        null != x
                                            ? (0, l.jsx)(u.Dr, {
                                                  id: "import-project",
                                                  label: h.intl.string(p.default["p/k5i7"]),
                                                  iconLeft: d.BrowserPlusIcon,
                                                  leadingAccessory: { type: "icon", icon: d.BrowserPlusIcon },
                                                  action: x,
                                              })
                                            : null,
                                        null != b
                                            ? (0, l.jsx)(u.Dr, {
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
                            let { isShown: n } = t;
                            return (0, l.jsx)("button", {
                                ...e,
                                ref: v,
                                type: "button",
                                className: a,
                                disabled: r,
                                "aria-label": y,
                                "aria-haspopup": "menu",
                                "aria-expanded": n,
                                children: (0, l.jsx)(m.PlusLargeIcon, {
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
