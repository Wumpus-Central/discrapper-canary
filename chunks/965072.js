(s.d(t, { default: () => m }), s(388685));
var a = s(255367),
    l = s(73800),
    n = s(990547),
    r = s(755721),
    i = s(481060),
    o = s(479531),
    c = s(213609),
    d = s(388032),
    h = s(472319),
    u = s(800010);
function m(e) {
    let { transitionState: t, onFormSubmit: s, onResend: m, onSuccess: x, onClose: p, headerText: g, confirmButtonText: y, confirmButtonColor: j, impressionName: _ } = e,
        [f, C] = l.useState(!1),
        [T, S] = l.useState(''),
        [w, b] = l.useState(!1),
        [k, z] = l.useState(null),
        E = l.useRef(null);
    (0, c.Z)({
        type: n.ImpressionTypes.MODAL,
        name: _
    });
    let v = async (e) => {
            (e.preventDefault(), z(null), C(!0));
            try {
                let e = await s(T);
                (null != x && x(e), p());
            } catch (e) {
                z(new o.Z(e).getAnyErrorMessage());
            } finally {
                C(!1);
            }
        },
        N = async () => {
            if (!w) {
                b(!0);
                try {
                    (await m(), (0, i.showToast)((0, i.createToast)(d.intl.string(d.t['84yeo6']), i.ToastType.SUCCESS)));
                } catch (t) {
                    let e = new o.Z(t).getAnyErrorMessage();
                    null != e && (0, i.showToast)((0, i.createToast)(e, i.ToastType.FAILURE));
                } finally {
                    b(!1);
                }
            }
        };
    return (0, a.jsx)(i.Y0X, {
        transitionState: t,
        parentComponent: 'EmailPincodeModal',
        children: (0, a.jsxs)('form', {
            onSubmit: v,
            children: [
                (0, a.jsx)('img', {
                    alt: '',
                    className: h.headerImage,
                    src: u
                }),
                (0, a.jsxs)(i.xBx, {
                    separator: !1,
                    className: h.header,
                    children: [
                        (0, a.jsx)(i.X6q, {
                            variant: 'heading-lg/semibold',
                            className: h.title,
                            children: g
                        }),
                        (0, a.jsx)(i.Text, {
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            className: h.subtitle,
                            children: d.intl.string(d.t.SZJow8)
                        }),
                        (0, a.jsx)(i.olH, {
                            onClick: p,
                            className: h.modalCloseButton
                        })
                    ]
                }),
                (0, a.jsxs)(i.hzk, {
                    children: [
                        (0, a.jsx)(i.xJW, {
                            title: d.intl.string(d.t['8mZX6O']),
                            error: k,
                            children: (0, a.jsx)(i.oil, {
                                value: T,
                                onChange: S,
                                inputRef: E
                            })
                        }),
                        (0, a.jsx)(i.Text, {
                            className: h.help,
                            variant: 'text-sm/normal',
                            children: d.intl.format(d.t.P0sak5, { onResend: N })
                        })
                    ]
                }),
                (0, a.jsx)(i.mzw, {
                    children: (0, a.jsxs)(i.hE2, {
                        direction: 'horizontal-reverse',
                        children: [
                            (0, a.jsx)(r.zx, {
                                type: 'submit',
                                color: null != j ? j : r.zx.Colors.BRAND,
                                size: r.zx.Sizes.MEDIUM,
                                submitting: f,
                                children: y
                            }),
                            (0, a.jsx)(i.zxk, {
                                variant: 'secondary',
                                text: d.intl.string(d.t['ETE/oK']),
                                onClick: p
                            })
                        ]
                    })
                })
            ]
        })
    });
}
