i.d(n, { default: () => c });
var a = i(54381);
i(473749);
var e = i(481060),
    s = i(782568),
    r = i(313201),
    o = i(388032),
    l = i(471018);
function c(t) {
    let { href: n, onClose: c, transitionState: d } = t,
        b = (0, r.Dt)();
    return (0, a.jsxs)(e.Y0X, {
        transitionState: d,
        "aria-labelledby": b,
        parentComponent: "SuspiciousDownloadModal",
        children: [
            (0, a.jsx)("img", {
                className: l.art,
                src: i(902623),
                alt: "",
            }),
            (0, a.jsx)(e.hzk, {
                children: (0, a.jsxs)("div", {
                    className: l.modalContent,
                    children: [
                        (0, a.jsx)(e.Heading, {
                            id: b,
                            variant: "heading-lg/semibold",
                            className: l.title,
                            children: o.intl.string(o.t.XtDo9Z),
                        }),
                        (0, a.jsx)(e.Text, {
                            variant: "text-md/normal",
                            className: l.body,
                            children: o.intl.string(o.t.L9yFko),
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(e.mzw, {
                children: (0, a.jsxs)(e.ButtonGroup, {
                    children: [
                        (0, a.jsx)(e.Button, {
                            variant: "primary",
                            text: o.intl.string(o.t.j7Vi2i),
                            onClick: c,
                        }),
                        (0, a.jsx)(e.Button, {
                            text: o.intl.string(o.t["/bHu89"]),
                            variant: "secondary",
                            onClick: () => {
                                c(), (0, s.Z)(n, !0);
                            },
                        }),
                    ],
                }),
            }),
        ],
    });
}
