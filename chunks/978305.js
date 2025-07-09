(t.d(r, { default: () => O }), t(388685));
var n = t(255367),
    o = t(73800),
    s = t(120356),
    a = t.n(s),
    l = t(512722),
    i = t.n(l),
    c = t(755721),
    d = t(481060),
    u = t(493773),
    f = t(198993),
    C = t(626135),
    m = t(985002),
    p = t(880257),
    x = t(631885),
    b = t(292352),
    g = t(981631),
    h = t(916723),
    y = t(388032),
    _ = t(22419),
    v = t(20493);
let O = (e) => {
    let { transitionState: r, onClose: t } = e,
        s = (0, p.Z)(),
        [l, O] = o.useState(!1),
        { getLinkCode: j, isGetLinkCodeLoading: z } = (0, m.G)({}),
        N = (0, x.rW)(),
        q = (0, x.gU)(),
        S = o.useRef(q);
    i()(!s, 'FamilyCenterQRCodeModal should only be rendered for teens.');
    let w = () => {
        (O((e) => (C.default.track(g.rMx.FAMILY_CENTER_ACTION, { action: l ? b.YC.HideQRCode : b.YC.RevealQRCode }), !e)),
            l ||
                setTimeout(() => {
                    t();
                }, b.f2));
    };
    ((0, u.ZP)(() => {
        j();
    }),
        o.useEffect(() => {
            q > S.current && t();
        }, [S, q, t]));
    let E = l && !z && null != N;
    return (0, n.jsxs)(d.Y0X, {
        className: _.modalRoot,
        transitionState: r,
        parentComponent: 'FamilyCenterQRCodeModal',
        children: [
            (0, n.jsxs)(d.qXd, {
                className: _.notice,
                color: d.DM8.WARNING,
                children: [
                    (0, n.jsx)(d.d3s, {
                        size: 'sm',
                        color: 'currentColor'
                    }),
                    y.intl.string(h.default.iHYMAw)
                ]
            }),
            (0, n.jsxs)(d.hzk, {
                className: _.content,
                children: [
                    (0, n.jsx)(d.Text, {
                        className: v.marginBottom8,
                        variant: 'text-lg/bold',
                        color: 'header-primary',
                        children: y.intl.string(h.default.AVTZaG)
                    }),
                    (0, n.jsx)(d.Text, {
                        className: v.marginBottom20,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: y.intl.format(h.default.LyyCsL, { link: 'https://support.discord.com/hc/articles/14155060633623' })
                    }),
                    (0, n.jsx)('div', {
                        className: _.qrCodeContainer,
                        children: (0, n.jsx)(d.P3F, {
                            className: a()(_.qrCodeObscure, { [_.visible]: E }),
                            onClick: w,
                            children: (0, n.jsx)(f.c2, {
                                size: 272,
                                text: E ? N : b.vH,
                                overlaySize: f.cK.SIZE_60,
                                className: _.qrCodeOverlay
                            })
                        })
                    }),
                    (0, n.jsx)(d.Text, {
                        className: _.reminder,
                        variant: 'text-xs/semibold',
                        color: 'header-secondary',
                        children: y.intl.string(h.default.goDyoa)
                    }),
                    (0, n.jsxs)('div', {
                        className: a()(_.buttonContainer, v.marginTop20),
                        children: [
                            (0, n.jsx)(c.zx, {
                                className: v.marginBottom8,
                                grow: !0,
                                size: c.zx.Sizes.LARGE,
                                onClick: w,
                                submitting: l && z,
                                children: l ? y.intl.string(h.default.wg2xwc) : y.intl.string(h.default['10dX6e'])
                            }),
                            (0, n.jsx)(c.zx, {
                                grow: !0,
                                color: c.zx.Colors.PRIMARY,
                                onClick: t,
                                children: y.intl.string(y.t.cpT0Cg)
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
