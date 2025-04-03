s.d(t, { default: () => u }), s(47120);
var a = s(200651),
    l = s(192379),
    n = s(990547),
    r = s(481060),
    o = s(479531),
    i = s(213609),
    c = s(388032),
    h = s(472319),
    d = s(800010);
function u(e) {
    let { transitionState: t, onFormSubmit: s, onResend: u, onSuccess: x, onClose: m, headerText: p, confirmButtonText: g, confirmButtonColor: k, impressionName: y } = e,
        [j, _] = l.useState(!1),
        [N, f] = l.useState(''),
        [C, T] = l.useState(!1),
        [S, w] = l.useState(null),
        z = l.useRef(null);
    (0, i.Z)({
        type: n.ImpressionTypes.MODAL,
        name: y
    });
    let b = async (e) => {
            e.preventDefault(), w(null), _(!0);
            try {
                let e = await s(N);
                null != x && x(e), m();
            } catch (e) {
                w(new o.Z(e).getAnyErrorMessage());
            } finally {
                _(!1);
            }
        },
        I = async () => {
            if (!C) {
                T(!0);
                try {
                    await u(), (0, r.showToast)((0, r.createToast)(c.NW.string(c.t['84yeo6']), r.ToastType.SUCCESS));
                } catch (t) {
                    let e = new o.Z(t).getAnyErrorMessage();
                    null != e && (0, r.showToast)((0, r.createToast)(e, r.ToastType.FAILURE));
                } finally {
                    T(!1);
                }
            }
        };
    return (0, a.jsx)(r.Y0X, {
        transitionState: t,
        children: (0, a.jsxs)('form', {
            onSubmit: b,
            children: [
                (0, a.jsx)('img', {
                    alt: '',
                    className: h.headerImage,
                    src: d
                }),
                (0, a.jsxs)(r.xBx, {
                    separator: !1,
                    className: h.header,
                    children: [
                        (0, a.jsx)(r.X6q, {
                            variant: 'heading-lg/semibold',
                            className: h.title,
                            children: p
                        }),
                        (0, a.jsx)(r.Text, {
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            className: h.subtitle,
                            children: c.NW.string(c.t.SZJow8)
                        }),
                        (0, a.jsx)(r.olH, {
                            onClick: m,
                            className: h.modalCloseButton
                        })
                    ]
                }),
                (0, a.jsxs)(r.hzk, {
                    children: [
                        (0, a.jsx)(r.xJW, {
                            title: c.NW.string(c.t['8mZX6O']),
                            error: S,
                            children: (0, a.jsx)(r.oil, {
                                value: N,
                                onChange: f,
                                inputRef: z
                            })
                        }),
                        (0, a.jsx)(r.Text, {
                            className: h.help,
                            variant: 'text-sm/normal',
                            children: c.NW.format(c.t.P0sak5, { onResend: I })
                        })
                    ]
                }),
                (0, a.jsxs)(r.mzw, {
                    children: [
                        (0, a.jsx)(r.zxk, {
                            type: 'submit',
                            color: null != k ? k : r.zxk.Colors.BRAND,
                            size: r.zxk.Sizes.MEDIUM,
                            submitting: j,
                            children: g
                        }),
                        (0, a.jsx)(r.zxk, {
                            look: r.zxk.Looks.LINK,
                            color: r.zxk.Colors.PRIMARY,
                            onClick: m,
                            children: c.NW.string(c.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    });
}
