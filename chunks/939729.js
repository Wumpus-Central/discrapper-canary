t.d(n, { Z: () => u });
var a = t(54381);
t(473749);
var o = t(780384),
    r = t(481060),
    i = t(410030),
    s = t(388032),
    l = t(775146),
    d = t(167969),
    c = t(557256);
let u = function (e) {
    let { onClose: n } = e,
        t = (0, i.ZP)(),
        u = (0, o.wj)(t);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(r.xBx, {
                "data-migration-pending": !0,
                separator: !1,
                className: l.header,
                children: [
                    (0, a.jsx)("img", {
                        alt: "",
                        className: l.headerImage,
                        src: u ? d : c,
                    }),
                    (0, a.jsx)(r.Heading, {
                        className: l.title,
                        variant: "heading-xl/medium",
                        children: s.intl.string(s.t["tWYWJ+"]),
                    }),
                    (0, a.jsx)(r.olH, {
                        "data-migration-pending": !0,
                        onClick: n,
                        className: l.modalCloseButton,
                    }),
                ],
            }),
            (0, a.jsx)(r.hzk, {
                "data-migration-pending": !0,
                className: l.content,
                scrollbarType: "none",
                children: (0, a.jsx)(r.Text, {
                    variant: "text-md/normal",
                    children: s.intl.string(s.t.JNQRU4),
                }),
            }),
            (0, a.jsx)(r.mzw, {
                "data-migration-pending": !0,
                className: l.modalFooter,
                children: (0, a.jsx)(r.Button, {
                    variant: "primary",
                    text: s.intl.string(s.t.cpT0Cq),
                    onClick: n,
                }),
            }),
        ],
    });
};
