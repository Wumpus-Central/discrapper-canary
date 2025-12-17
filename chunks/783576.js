n.d(a, { default: () => d });
var e = n(54381);
n(473749);
var i = n(481060),
    s = n(782568),
    r = n(313201),
    o = n(388032),
    l = n(419543);
function d(t) {
    let { href: a, onClose: d, transitionState: c } = t,
        b = (0, r.Dt)();
    return (0, e.jsxs)(i.Y0X, {
        "data-migration-pending": !0,
        transitionState: c,
        "aria-labelledby": b,
        parentComponent: "SuspiciousDownloadModal",
        children: [
            (0, e.jsx)("img", {
                className: l.art,
                src: n(902623),
                alt: "",
            }),
            (0, e.jsx)(i.hzk, {
                children: (0, e.jsxs)("div", {
                    className: l.modalContent,
                    children: [
                        (0, e.jsx)(i.Heading, {
                            id: b,
                            variant: "heading-lg/semibold",
                            className: l.title,
                            children: o.intl.string(o.t.XtDo9Z),
                        }),
                        (0, e.jsx)(i.Text, {
                            variant: "text-md/normal",
                            className: l.body,
                            children: o.intl.string(o.t.L9yFko),
                        }),
                    ],
                }),
            }),
            (0, e.jsx)(i.mzw, {
                children: (0, e.jsxs)(i.ButtonGroup, {
                    children: [
                        (0, e.jsx)(i.Button, {
                            variant: "primary",
                            text: o.intl.string(o.t.j7Vi2i),
                            onClick: d,
                        }),
                        (0, e.jsx)(i.Button, {
                            text: o.intl.string(o.t["/bHu89"]),
                            variant: "secondary",
                            onClick: () => {
                                d(), (0, s.Z)(a, !0);
                            },
                        }),
                    ],
                }),
            }),
        ],
    });
}
