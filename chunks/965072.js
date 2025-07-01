(s.d(t, { default: () => u }), s(388685));
var a = s(255367),
    l = s(73800),
    n = s(990547),
    o = s(481060),
    r = s(479531),
    i = s(213609),
    c = s(388032),
    d = s(472319),
    h = s(800010);
function u(e) {
    let { transitionState: t, onFormSubmit: s, onResend: u, onSuccess: m, onClose: x, headerText: p, confirmButtonText: g, confirmButtonColor: k, impressionName: y } = e,
        [j, _] = l.useState(!1),
        [C, f] = l.useState(''),
        [T, S] = l.useState(!1),
        [w, z] = l.useState(null),
        b = l.useRef(null);
    (0, i.Z)({
        type: n.ImpressionTypes.MODAL,
        name: y
    });
    let E = async (e) => {
            (e.preventDefault(), z(null), _(!0));
            try {
                let e = await s(C);
                (null != m && m(e), x());
            } catch (e) {
                z(new r.Z(e).getAnyErrorMessage());
            } finally {
                _(!1);
            }
        },
        I = async () => {
            if (!T) {
                S(!0);
                try {
                    (await u(), (0, o.showToast)((0, o.createToast)(c.intl.string(c.t['84yeo6']), o.ToastType.SUCCESS)));
                } catch (t) {
                    let e = new r.Z(t).getAnyErrorMessage();
                    null != e && (0, o.showToast)((0, o.createToast)(e, o.ToastType.FAILURE));
                } finally {
                    S(!1);
                }
            }
        };
    return (0, a.jsx)(o.Y0X, {
        transitionState: t,
        parentComponent: 'EmailPincodeModal',
        children: (0, a.jsxs)('form', {
            onSubmit: E,
            children: [
                (0, a.jsx)('img', {
                    alt: '',
                    className: d.headerImage,
                    src: h
                }),
                (0, a.jsxs)(o.xBx, {
                    separator: !1,
                    className: d.header,
                    children: [
                        (0, a.jsx)(o.X6q, {
                            variant: 'heading-lg/semibold',
                            className: d.title,
                            children: p
                        }),
                        (0, a.jsx)(o.Text, {
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            className: d.subtitle,
                            children: c.intl.string(c.t.SZJow8)
                        }),
                        (0, a.jsx)(o.olH, {
                            onClick: x,
                            className: d.modalCloseButton
                        })
                    ]
                }),
                (0, a.jsxs)(o.hzk, {
                    children: [
                        (0, a.jsx)(o.xJW, {
                            title: c.intl.string(c.t['8mZX6O']),
                            error: w,
                            children: (0, a.jsx)(o.oil, {
                                value: C,
                                onChange: f,
                                inputRef: b
                            })
                        }),
                        (0, a.jsx)(o.Text, {
                            className: d.help,
                            variant: 'text-sm/normal',
                            children: c.intl.format(c.t.P0sak5, { onResend: I })
                        })
                    ]
                }),
                (0, a.jsxs)(o.mzw, {
                    children: [
                        (0, a.jsx)(o.zxk, {
                            type: 'submit',
                            color: null != k ? k : o.zxk.Colors.BRAND,
                            size: o.zxk.Sizes.MEDIUM,
                            submitting: j,
                            children: g
                        }),
                        (0, a.jsx)(o.zxk, {
                            look: o.zxk.Looks.LINK,
                            color: o.zxk.Colors.PRIMARY,
                            onClick: x,
                            children: c.intl.string(c.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    });
}
