o.d(e, { default: () => p });
var l = o(200651),
    s = o(192379),
    n = o(481060),
    a = o(782568),
    i = o(690221),
    r = o(460181),
    d = o(388032),
    u = o(703863);
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
function b(t) {
    let { punConfig: e } = t;
    return (0, l.jsxs)(l.Fragment, {
        children: [e.preBold, (0, l.jsx)('b', { children: (0, l.jsx)('i', { children: e.bold }) }), e.postBold]
    });
}
function p(t) {
    let { transitionState: e, onClose: o, asanaTask: p } = t;
    s.useEffect(() => {
        (0, r.GN)('success', 0.1);
    }, []);
    let m = s.useRef(c[Math.floor(Math.random() * c.length)]).current;
    return (0, l.jsx)(n.Y0X, {
        className: u.bugReporterSubmitModalRoot,
        transitionState: e,
        'aria-label': d.NW.string(d.t.mCCdws),
        children: (0, l.jsxs)(n.hzk, {
            style: {
                overflow: 'hidden',
                paddingRight: '0px'
            },
            className: u.modalContent,
            paddingFix: !1,
            children: [
                (0, l.jsx)(n.olH, {
                    onClick: () => {
                        null == o || o();
                    },
                    className: u.closeButton
                }),
                (0, l.jsxs)(n.Text, {
                    className: u.submitText,
                    variant: 'text-sm/normal',
                    children: [
                        'Thanks for submitting a ',
                        (0, l.jsx)(i.Z, {
                            onClick: () => (0, a.Z)(p.permalink_url),
                            children: 'bug'
                        }),
                        '!',
                        (0, l.jsx)('br', {}),
                        (0, l.jsx)(b, { punConfig: m })
                    ]
                })
            ]
        })
    });
}
