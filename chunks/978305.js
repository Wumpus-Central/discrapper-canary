(t.d(r, { default: () => _ }), t(388685));
var n = t(255367),
    o = t(73800),
    a = t(120356),
    s = t.n(a),
    i = t(512722),
    l = t.n(i),
    c = t(481060),
    d = t(493773),
    u = t(198993),
    f = t(626135),
    C = t(985002),
    m = t(880257),
    p = t(631885),
    x = t(292352),
    b = t(981631),
    g = t(916723),
    h = t(388032),
    y = t(22419),
    v = t(20493);
let _ = (e) => {
    let { transitionState: r, onClose: t } = e,
        a = (0, m.Z)(),
        [i, _] = o.useState(!1),
        { getLinkCode: j, isGetLinkCodeLoading: O } = (0, C.G)({}),
        q = (0, p.rW)(),
        N = (0, p.gU)(),
        z = o.useRef(N);
    l()(!a, 'FamilyCenterQRCodeModal should only be rendered for teens.');
    let k = () => {
        (_((e) => (f.default.track(b.rMx.FAMILY_CENTER_ACTION, { action: i ? x.YC.HideQRCode : x.YC.RevealQRCode }), !e)),
            i ||
                setTimeout(() => {
                    t();
                }, x.f2));
    };
    ((0, d.ZP)(() => {
        j();
    }),
        o.useEffect(() => {
            N > z.current && t();
        }, [z, N, t]));
    let S = i && !O && null != q;
    return (0, n.jsxs)(c.Y0X, {
        'data-migration-pending': !0,
        className: y.modalRoot,
        transitionState: r,
        parentComponent: 'FamilyCenterQRCodeModal',
        children: [
            (0, n.jsxs)(c.qXd, {
                className: y.notice,
                color: c.DM8.WARNING,
                children: [
                    (0, n.jsx)(c.d3s, {
                        size: 'sm',
                        color: 'currentColor'
                    }),
                    h.intl.string(g.default.iHYMAw)
                ]
            }),
            (0, n.jsxs)(c.hzk, {
                'data-migration-pending': !0,
                className: y.content,
                children: [
                    (0, n.jsx)(c.Text, {
                        className: v.marginBottom8,
                        variant: 'text-lg/bold',
                        color: 'header-primary',
                        children: h.intl.string(g.default.AVTZaG)
                    }),
                    (0, n.jsx)(c.Text, {
                        className: v.marginBottom20,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: h.intl.format(g.default.LyyCsL, { link: 'https://support.discord.com/hc/articles/14155060633623' })
                    }),
                    (0, n.jsx)('div', {
                        className: y.qrCodeContainer,
                        children: (0, n.jsx)(c.P3F, {
                            className: s()(y.qrCodeObscure, { [y.visible]: S }),
                            onClick: k,
                            children: (0, n.jsx)(u.c2, {
                                size: 272,
                                text: S ? q : x.vH,
                                overlaySize: u.cK.SIZE_60,
                                className: y.qrCodeOverlay
                            })
                        })
                    }),
                    (0, n.jsx)(c.Text, {
                        className: y.reminder,
                        variant: 'text-xs/semibold',
                        color: 'header-secondary',
                        children: h.intl.string(g.default.goDyoa)
                    }),
                    (0, n.jsx)('div', {
                        className: s()(y.buttonContainer, v.marginTop20),
                        children: (0, n.jsxs)(c.hE2, {
                            fullWidth: !0,
                            children: [
                                (0, n.jsx)(c.zxk, {
                                    variant: 'secondary',
                                    text: h.intl.string(h.t.cpT0Cg),
                                    onClick: t
                                }),
                                (0, n.jsx)(c.zxk, {
                                    variant: 'primary',
                                    text: i ? h.intl.string(g.default.wg2xwc) : h.intl.string(g.default['10dX6e']),
                                    onClick: k,
                                    loading: i && O
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
