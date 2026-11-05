var r = n(477900),
    l = n(582128),
    a = n(477262),
    i = n(432017),
    s = n(81369),
    o = n(265872),
    c = n(165862),
    u = n(477782),
    d = n(717400),
    f = n(99677),
    m = n(663341),
    p = n(191850),
    h = n(792996);
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
n.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    navId: t,
                    disabled: n,
                    buttonClassName: a,
                    iconClassName: i,
                    onAddFiles: s,
                    onImport: x,
                    onSendToOtherProjects: j,
                } = e,
                v = l.useRef(null),
                b = l.useRef(null),
                y = h.intl.string(h.t.d56gCa),
                w = l.useCallback((e) => {
                    let t = v.current;
                    null != t && ((t.accept = e), t.click());
                }, []),
                C = l.useCallback(
                    (e) => {
                        (s(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
                    },
                    [s],
                );
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)("input", {
                        ref: v,
                        type: "file",
                        multiple: !0,
                        hidden: !0,
                        onChange: C,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    (0, r.jsx)(o.Y, {
                        targetElementRef: b,
                        position: "top",
                        align: "left",
                        animation: o.Y.Animation.NONE,
                        renderPopout: (e) => {
                            let { closePopout: n } = e;
                            return (0, r.jsx)(c.W, {
                                "data-menu-migrated": !0,
                                navId: t,
                                "aria-label": y,
                                onClose: n,
                                onSelect: n,
                                children: (0, r.jsxs)(u.rX, {
                                    children: [
                                        g.map((e) =>
                                            (0, r.jsx)(
                                                u.Dr,
                                                {
                                                    id: e.id,
                                                    label: h.intl.string(e.label),
                                                    iconLeft: e.icon,
                                                    leadingAccessory: { type: "icon", icon: e.icon },
                                                    action: () => w(e.accept),
                                                },
                                                e.id,
                                            ),
                                        ),
                                        null != x
                                            ? (0, r.jsx)(u.Dr, {
                                                  id: "import-project",
                                                  label: h.intl.string(p.default["p/k5i7"]),
                                                  iconLeft: d.BrowserPlusIcon,
                                                  leadingAccessory: { type: "icon", icon: d.BrowserPlusIcon },
                                                  action: x,
                                              })
                                            : null,
                                        null != j
                                            ? (0, r.jsx)(u.Dr, {
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
                            return (0, r.jsx)("button", {
                                ...e,
                                ref: b,
                                type: "button",
                                className: a,
                                disabled: n,
                                "aria-label": y,
                                "aria-haspopup": "menu",
                                "aria-expanded": l,
                                children: (0, r.jsx)(m.PlusLargeIcon, {
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
