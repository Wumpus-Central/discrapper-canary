i.d(n, { default: () => d });
var e = i(951288);
i(647438);
var s = i(755721),
    a = i(481060),
    o = i(782568),
    l = i(313201),
    r = i(388032),
    c = i(471018);
function d(t) {
    let { href: n, onClose: d, transitionState: b } = t,
        x = (0, l.Dt)();
    return (0, e.jsxs)(a.Y0X, {
        transitionState: b,
        "aria-labelledby": x,
        parentComponent: "SuspiciousDownloadModal",
        children: [
            (0, e.jsx)("img", {
                className: c.art,
                src: i(902623),
                alt: "",
            }),
            (0, e.jsx)(a.hzk, {
                children: (0, e.jsxs)("div", {
                    className: c.modalContent,
                    children: [
                        (0, e.jsx)(a.Heading, {
                            id: x,
                            variant: "heading-lg/semibold",
                            className: c.title,
                            children: r.intl.string(r.t.XtDo9Z),
                        }),
                        (0, e.jsx)(a.Text, {
                            variant: "text-md/normal",
                            className: c.body,
                            children: r.intl.string(r.t.L9yFko),
                        }),
                    ],
                }),
            }),
            (0, e.jsxs)(a.mzw, {
                children: [
                    (0, e.jsx)(a.Button, {
                        variant: "primary",
                        text: r.intl.string(r.t.j7Vi2i),
                        type: "button",
                        onClick: d,
                    }),
                    (0, e.jsx)(s.zx, {
                        type: "button",
                        size: s.zx.Sizes.MEDIUM,
                        color: s.zx.Colors.TRANSPARENT,
                        look: s.zx.Looks.LINK,
                        onClick: () => {
                            d(), (0, o.Z)(n, !0);
                        },
                        children: r.intl.string(r.t["/bHu89"]),
                    }),
                ],
            }),
        ],
    });
}
