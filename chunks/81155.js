o.d(e, { default: () => b });
var n = o(951288),
    l = o(647438),
    i = o(481060),
    a = o(782568),
    s = o(690221),
    r = o(460181),
    d = o(388032),
    u = o(943584);
let c = [
    {
        preBold: "That's pretty...",
        bold: "fly!",
    },
    {
        preBold: "On Point will make sure to",
        bold: " tick ",
        postBold: "a look at it!",
    },
    {
        preBold: "You're...un",
        bold: "bee ",
        postBold: "lievable!",
    },
];
function p(t) {
    let { punConfig: e } = t;
    return (0, n.jsxs)(n.Fragment, {
        children: [e.preBold, (0, n.jsx)("b", { children: (0, n.jsx)("i", { children: e.bold }) }), e.postBold],
    });
}
function b(t) {
    let { transitionState: e, onClose: o, asanaTask: b } = t;
    l.useEffect(() => {
        (0, r.GN)("success", 0.1);
    }, []);
    let m = l.useRef(c[Math.floor(Math.random() * c.length)]).current;
    return (0, n.jsx)(i.Y0X, {
        "data-migration-pending": !0,
        className: u.bugReporterSubmitModalRoot,
        transitionState: e,
        "aria-label": d.intl.string(d.t.mCCdwi),
        parentComponent: "BugReporterSubmitModal",
        children: (0, n.jsxs)(i.hzk, {
            "data-migration-pending": !0,
            style: {
                overflow: "hidden",
                paddingRight: "0px",
            },
            className: u.modalContent,
            paddingFix: !1,
            children: [
                (0, n.jsx)(i.olH, {
                    "data-migration-pending": !0,
                    onClick: () => {
                        null == o || o();
                    },
                    className: u.closeButton,
                }),
                (0, n.jsxs)(i.Text, {
                    className: u.submitText,
                    variant: "text-sm/normal",
                    children: [
                        "Thanks for submitting a ",
                        (0, n.jsx)(s.Z, {
                            onClick: () => (0, a.Z)(b.permalink_url),
                            children: "bug",
                        }),
                        "!",
                        (0, n.jsx)("br", {}),
                        (0, n.jsx)(p, { punConfig: m }),
                    ],
                }),
            ],
        }),
    });
}
