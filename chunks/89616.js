s.d(t, { default: () => r }), s(47120);
var n = s(200651),
    l = s(192379),
    a = s(481060),
    i = s(365007),
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
            await (0, i.WQ)(r.id, h), s();
        } catch (e) {
            g(e.message);
        } finally {
            u(!1);
        }
    }
    return (
        l.useEffect(() => {
            if (t === a.Dvm.ENTERED) {
                var e;
                null == (e = k.current) || e.focus();
            }
        }, [t]),
        (0, n.jsxs)(a.Y0X, {
            transitionState: t,
            children: [
                (0, n.jsxs)(a.xBx, {
                    separator: !1,
                    className: o.header,
                    children: [
                        (0, n.jsx)(a.Text, {
                            color: 'header-secondary',
                            variant: 'text-lg/bold',
                            className: o.subtitle,
                            children: c.NW.string(c.t.YjuMsb)
                        }),
                        (0, n.jsx)(a.olH, {
                            onClick: s,
                            className: o.modalCloseButton
                        })
                    ]
                }),
                (0, n.jsxs)('form', {
                    onSubmit: f,
                    children: [
                        (0, n.jsx)(a.hzk, {
                            className: o.content,
                            children: (0, n.jsx)(a.xJW, {
                                title: c.NW.string(c.t['7yEgJS']),
                                error: m,
                                required: !0,
                                children: (0, n.jsx)('div', {
                                    children: (0, n.jsx)(a.oil, {
                                        inputRef: k,
                                        'aria-label': c.NW.string(c.t['7yEgJS']),
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
                        (0, n.jsxs)(a.mzw, {
                            children: [
                                (0, n.jsx)(a.zxk, {
                                    type: 'submit',
                                    color: a.zxk.Colors.BRAND,
                                    size: a.zxk.Sizes.MEDIUM,
                                    submitting: d,
                                    disabled: 0 === h.length || h.length > 32,
                                    children: c.NW.string(c.t.i4jeWV)
                                }),
                                (0, n.jsx)(a.zxk, {
                                    className: o.cancel,
                                    look: a.zxk.Looks.LINK,
                                    color: a.zxk.Colors.PRIMARY,
                                    onClick: s,
                                    children: c.NW.string(c.t['ETE/oK'])
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    );
}
