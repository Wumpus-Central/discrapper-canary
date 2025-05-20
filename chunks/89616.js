s.d(t, { default: () => r }), s(388685);
var n = s(255367),
    l = s(73800),
    i = s(481060),
    a = s(365007),
    c = s(388032),
    o = s(17379);
function r(e) {
    let { transitionState: t, onClose: s, credential: r } = e,
        [d, u] = l.useState(!1),
        [h, x] = l.useState(''),
        [m, g] = l.useState(void 0),
        k = l.useRef(null);
    async function f(e) {
        e.preventDefault(), u(!0);
        try {
            await (0, a.WQ)(r.id, h), s();
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
        (0, n.jsxs)(i.Y0X, {
            transitionState: t,
            children: [
                (0, n.jsxs)(i.xBx, {
                    separator: !1,
                    className: o.header,
                    children: [
                        (0, n.jsx)(i.Text, {
                            color: 'header-secondary',
                            variant: 'text-lg/bold',
                            className: o.subtitle,
                            children: c.intl.string(c.t.YjuMsb)
                        }),
                        (0, n.jsx)(i.olH, {
                            onClick: s,
                            className: o.modalCloseButton
                        })
                    ]
                }),
                (0, n.jsxs)('form', {
                    onSubmit: f,
                    children: [
                        (0, n.jsx)(i.hzk, {
                            className: o.content,
                            children: (0, n.jsx)(i.xJW, {
                                title: c.intl.string(c.t['7yEgJS']),
                                error: m,
                                required: !0,
                                children: (0, n.jsx)('div', {
                                    children: (0, n.jsx)(i.oil, {
                                        inputRef: k,
                                        'aria-label': c.intl.string(c.t['7yEgJS']),
                                        placeholder: r.name,
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
                        (0, n.jsxs)(i.mzw, {
                            children: [
                                (0, n.jsx)(i.zxk, {
                                    type: 'submit',
                                    color: i.zxk.Colors.BRAND,
                                    size: i.zxk.Sizes.MEDIUM,
                                    submitting: d,
                                    disabled: 0 === h.length || h.length > 32,
                                    children: c.intl.string(c.t.i4jeWV)
                                }),
                                (0, n.jsx)(i.zxk, {
                                    className: o.cancel,
                                    look: i.zxk.Looks.LINK,
                                    color: i.zxk.Colors.PRIMARY,
                                    onClick: s,
                                    children: c.intl.string(c.t['ETE/oK'])
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    );
}
