(n.d(t, { default: () => o }), n(388685));
var a = n(255367),
    s = n(73800),
    i = n(481060),
    l = n(365007),
    r = n(388032),
    c = n(17379);
function o(e) {
    let { transitionState: t, onClose: n, credential: o } = e,
        [d, u] = s.useState(!1),
        [h, x] = s.useState(''),
        [m, p] = s.useState(void 0),
        g = s.useRef(null);
    async function j(e) {
        (e.preventDefault(), u(!0));
        try {
            (await (0, l.WQ)(o.id, h), n());
        } catch (e) {
            p(e.message);
        } finally {
            u(!1);
        }
    }
    return (
        s.useEffect(() => {
            if (t === i.Dvm.ENTERED) {
                var e;
                null == (e = g.current) || e.focus();
            }
        }, [t]),
        (0, a.jsxs)(i.Y0X, {
            transitionState: t,
            parentComponent: 'EditCredentialModal',
            children: [
                (0, a.jsxs)(i.xBx, {
                    separator: !1,
                    className: c.header,
                    children: [
                        (0, a.jsx)(i.Text, {
                            color: 'header-secondary',
                            variant: 'text-lg/bold',
                            className: c.subtitle,
                            children: r.intl.string(r.t.YjuMsb)
                        }),
                        (0, a.jsx)(i.olH, {
                            onClick: n,
                            className: c.modalCloseButton
                        })
                    ]
                }),
                (0, a.jsxs)('form', {
                    onSubmit: j,
                    children: [
                        (0, a.jsx)(i.hzk, {
                            className: c.content,
                            children: (0, a.jsx)(i.xJW, {
                                title: r.intl.string(r.t['7yEgJS']),
                                error: m,
                                required: !0,
                                children: (0, a.jsx)('div', {
                                    children: (0, a.jsx)(i.oil, {
                                        inputRef: g,
                                        'aria-label': r.intl.string(r.t['7yEgJS']),
                                        placeholder: o.name,
                                        value: h,
                                        minLength: 1,
                                        maxLength: 32,
                                        onChange: x,
                                        autoFocus: !0,
                                        required: !0
                                    })
                                })
                            })
                        }),
                        (0, a.jsxs)(i.mzw, {
                            children: [
                                (0, a.jsx)(i.zxk, {
                                    variant: 'primary',
                                    text: r.intl.string(r.t.i4jeWV),
                                    type: 'submit',
                                    loading: d,
                                    disabled: 0 === h.length || h.length > 32
                                }),
                                (0, a.jsx)('div', {
                                    'data-button-hoisted-classname-wrapper': !0,
                                    className: c.cancel,
                                    children: (0, a.jsx)(i.zxk, {
                                        variant: 'secondary',
                                        text: r.intl.string(r.t['ETE/oK']),
                                        onClick: n
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    );
}
