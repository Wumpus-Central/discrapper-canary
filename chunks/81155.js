r.d(t, { default: () => d });
var n = r(255367),
    o = r(73800),
    l = r(481060),
    s = r(782568),
    a = r(690221),
    i = r(460181),
    c = r(388032),
    u = r(835362);
let b = [
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
function p(e) {
    let { punConfig: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [t.preBold, (0, n.jsx)('b', { children: (0, n.jsx)('i', { children: t.bold }) }), t.postBold]
    });
}
function d(e) {
    let { transitionState: t, onClose: r, asanaTask: d } = e;
    o.useEffect(() => {
        (0, i.GN)('success', 0.1);
    }, []);
    let f = o.useRef(b[Math.floor(Math.random() * b.length)]).current;
    return (0, n.jsx)(l.Y0X, {
        className: u.bugReporterSubmitModalRoot,
        transitionState: t,
        'aria-label': c.intl.string(c.t.mCCdws),
        parentComponent: 'BugReporterSubmitModal',
        children: (0, n.jsxs)(l.hzk, {
            style: {
                overflow: 'hidden',
                paddingRight: '0px'
            },
            className: u.modalContent,
            paddingFix: !1,
            children: [
                (0, n.jsx)(l.olH, {
                    onClick: () => {
                        null == r || r();
                    },
                    className: u.closeButton
                }),
                (0, n.jsxs)(l.Text, {
                    className: u.submitText,
                    variant: 'text-sm/normal',
                    children: [
                        'Thanks for submitting a ',
                        (0, n.jsx)(a.Z, {
                            onClick: () => (0, s.Z)(d.permalink_url),
                            children: 'bug'
                        }),
                        '!',
                        (0, n.jsx)('br', {}),
                        (0, n.jsx)(p, { punConfig: f })
                    ]
                })
            ]
        })
    });
}
