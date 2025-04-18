r.d(t, { default: () => f });
var n = r(200651),
    o = r(192379),
    l = r(481060),
    s = r(782568),
    c = r(690221),
    a = r(460181),
    i = r(388032),
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
function f(e) {
    let { transitionState: t, onClose: r, asanaTask: f } = e;
    o.useEffect(() => {
        (0, a.GN)('success', 0.1);
    }, []);
    let d = o.useRef(b[Math.floor(Math.random() * b.length)]).current;
    return (0, n.jsx)(l.Y0X, {
        className: u.bugReporterSubmitModalRoot,
        transitionState: t,
        'aria-label': i.NW.string(i.t.mCCdws),
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
                        (0, n.jsx)(c.Z, {
                            onClick: () => (0, s.Z)(f.permalink_url),
                            children: 'bug'
                        }),
                        '!',
                        (0, n.jsx)('br', {}),
                        (0, n.jsx)(p, { punConfig: d })
                    ]
                })
            ]
        })
    });
}
