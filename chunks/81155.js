o.d(e, { default: () => p });
var l = o(951288),
    n = o(647438),
    s = o(481060),
    i = o(782568),
    r = o(690221),
    a = o(460181),
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
function b(t) {
    let { punConfig: e } = t;
    return (0, l.jsxs)(l.Fragment, {
        children: [e.preBold, (0, l.jsx)("b", { children: (0, l.jsx)("i", { children: e.bold }) }), e.postBold],
    });
}
function p(t) {
    let { transitionState: e, onClose: o, asanaTask: p } = t;
    n.useEffect(() => {
        (0, a.GN)("success", 0.1);
    }, []);
    let m = n.useRef(c[Math.floor(Math.random() * c.length)]).current;
    return (0, l.jsx)(s.Y0X, {
        className: u.bugReporterSubmitModalRoot,
        transitionState: e,
        "aria-label": d.intl.string(d.t.mCCdwi),
        parentComponent: "BugReporterSubmitModal",
        children: (0, l.jsxs)(s.hzk, {
            style: {
                overflow: "hidden",
                paddingRight: "0px",
            },
            className: u.modalContent,
            paddingFix: !1,
            children: [
                (0, l.jsx)(s.olH, {
                    onClick: () => {
                        null == o || o();
                    },
                    className: u.closeButton,
                }),
                (0, l.jsxs)(s.Text, {
                    className: u.submitText,
                    variant: "text-sm/normal",
                    children: [
                        "Thanks for submitting a ",
                        (0, l.jsx)(r.Z, {
                            onClick: () => (0, i.Z)(p.permalink_url),
                            children: "bug",
                        }),
                        "!",
                        (0, l.jsx)("br", {}),
                        (0, l.jsx)(b, { punConfig: m }),
                    ],
                }),
            ],
        }),
    });
}
