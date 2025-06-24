o.d(e, { default: () => b });
var l = o(255367),
    n = o(73800),
    s = o(481060),
    a = o(782568),
    r = o(690221),
    i = o(460181),
    d = o(388032),
    u = o(835362);
let c = [
    {
        preBold: "That's pretty...",
        bold: 'fly!'
    },
    {
        preBold: 'On Point will make sure to',
        bold: ' tick ',
        postBold: 'a look at it!'
    },
    {
        preBold: "You're...un",
        bold: 'bee ',
        postBold: 'lievable!'
    }
];
function p(t) {
    let { punConfig: e } = t;
    return (0, l.jsxs)(l.Fragment, {
        children: [e.preBold, (0, l.jsx)('b', { children: (0, l.jsx)('i', { children: e.bold }) }), e.postBold]
    });
}
function b(t) {
    let { transitionState: e, onClose: o, asanaTask: b } = t;
    n.useEffect(() => {
        (0, i.GN)('success', 0.1);
    }, []);
    let m = n.useRef(c[Math.floor(Math.random() * c.length)]).current;
    return (0, l.jsx)(s.Y0X, {
        className: u.bugReporterSubmitModalRoot,
        transitionState: e,
        'aria-label': d.intl.string(d.t.mCCdws),
        parentComponent: 'BugReporterSubmitModal',
        children: (0, l.jsxs)(s.hzk, {
            style: {
                overflow: 'hidden',
                paddingRight: '0px'
            },
            className: u.modalContent,
            paddingFix: !1,
            children: [
                (0, l.jsx)(s.olH, {
                    onClick: () => {
                        null == o || o();
                    },
                    className: u.closeButton
                }),
                (0, l.jsxs)(s.Text, {
                    className: u.submitText,
                    variant: 'text-sm/normal',
                    children: [
                        'Thanks for submitting a ',
                        (0, l.jsx)(r.Z, {
                            onClick: () => (0, a.Z)(b.permalink_url),
                            children: 'bug'
                        }),
                        '!',
                        (0, l.jsx)('br', {}),
                        (0, l.jsx)(p, { punConfig: m })
                    ]
                })
            ]
        })
    });
}
