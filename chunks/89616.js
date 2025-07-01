(n.d(t, { default: () => c }), n(388685));
var s = n(255367),
    l = n(73800),
    i = n(481060),
    a = n(365007),
    o = n(388032),
    r = n(17379);
function c(e) {
    let { transitionState: t, onClose: n, credential: c } = e,
        [d, u] = l.useState(!1),
        [h, x] = l.useState(''),
        [m, g] = l.useState(void 0),
        k = l.useRef(null);
    async function p(e) {
        (e.preventDefault(), u(!0));
        try {
            (await (0, a.WQ)(c.id, h), n());
        } catch (e) {
            g(e.message);
        } finally {
            u(!1);
        }
    }
    return (
        l.useEffect(() => {
            if (t === i.Dvm.ENTERED) {
                var e;
                null == (e = k.current) || e.focus();
            }
        }, [t]),
        (0, s.jsxs)(i.Y0X, {
            transitionState: t,
            parentComponent: 'EditCredentialModal',
            children: [
                (0, s.jsxs)(i.xBx, {
                    separator: !1,
                    className: r.header,
                    children: [
                        (0, s.jsx)(i.Text, {
                            color: 'header-secondary',
                            variant: 'text-lg/bold',
                            className: r.subtitle,
                            children: o.intl.string(o.t.YjuMsb)
                        }),
                        (0, s.jsx)(i.olH, {
                            onClick: n,
                            className: r.modalCloseButton
                        })
                    ]
                }),
                (0, s.jsxs)('form', {
                    onSubmit: p,
                    children: [
                        (0, s.jsx)(i.hzk, {
                            className: r.content,
                            children: (0, s.jsx)(i.xJW, {
                                title: o.intl.string(o.t['7yEgJS']),
                                error: m,
                                required: !0,
                                children: (0, s.jsx)('div', {
                                    children: (0, s.jsx)(i.oil, {
                                        inputRef: k,
                                        'aria-label': o.intl.string(o.t['7yEgJS']),
                                        placeholder: c.name,
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
                        (0, s.jsxs)(i.mzw, {
                            children: [
                                (0, s.jsx)(i.zxk, {
                                    type: 'submit',
                                    color: i.zxk.Colors.BRAND,
                                    size: i.zxk.Sizes.MEDIUM,
                                    submitting: d,
                                    disabled: 0 === h.length || h.length > 32,
                                    children: o.intl.string(o.t.i4jeWV)
                                }),
                                (0, s.jsx)(i.zxk, {
                                    className: r.cancel,
                                    look: i.zxk.Looks.LINK,
                                    color: i.zxk.Colors.PRIMARY,
                                    onClick: n,
                                    children: o.intl.string(o.t['ETE/oK'])
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    );
}
