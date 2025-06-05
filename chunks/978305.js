t.d(r, { default: () => v }), t(388685);
var n = t(255367),
    o = t(73800),
    s = t(120356),
    a = t.n(s),
    l = t(512722),
    i = t.n(l),
    c = t(481060),
    d = t(493773),
    u = t(198993),
    f = t(626135),
    C = t(985002),
    m = t(880257),
    p = t(631885),
    x = t(292352),
    b = t(981631),
    g = t(524499),
    h = t(388032),
    y = t(22419),
    _ = t(20493);
let v = (e) => {
    let { transitionState: r, onClose: t } = e,
        s = (0, m.Z)(),
        [l, v] = o.useState(!1),
        { getLinkCode: O, isGetLinkCodeLoading: j } = (0, C.G)({}),
        z = (0, p.rW)(),
        N = (0, p.gU)(),
        q = o.useRef(N);
    i()(!s, 'FamilyCenterQRCodeModal should only be rendered for teens.');
    let k = () => {
        v((e) => (f.default.track(b.rMx.FAMILY_CENTER_ACTION, { action: l ? x.YC.HideQRCode : x.YC.RevealQRCode }), !e)),
            l ||
                setTimeout(() => {
                    t();
                }, x.f2);
    };
    (0, d.ZP)(() => {
        O();
    }),
        o.useEffect(() => {
            N > q.current && t();
        }, [q, N, t]);
    let S = l && !j && null != z;
    return (0, n.jsxs)(c.Y0X, {
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
                className: y.content,
                children: [
                    (0, n.jsx)(c.Text, {
                        className: _.marginBottom8,
                        variant: 'text-lg/bold',
                        color: 'header-primary',
                        children: h.intl.string(g.default.AVTZaG)
                    }),
                    (0, n.jsx)(c.Text, {
                        className: _.marginBottom20,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: h.intl.format(g.default.LyyCsL, { link: 'https://support.discord.com/hc/articles/14155060633623' })
                    }),
                    (0, n.jsx)('div', {
                        className: y.qrCodeContainer,
                        children: (0, n.jsx)(c.P3F, {
                            className: a()(y.qrCodeObscure, { [y.visible]: S }),
                            onClick: k,
                            children: (0, n.jsx)(u.c2, {
                                size: 272,
                                text: S ? z : x.vH,
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
                    (0, n.jsxs)('div', {
                        className: a()(y.buttonContainer, _.marginTop20),
                        children: [
                            (0, n.jsx)(c.zxk, {
                                className: _.marginBottom8,
                                grow: !0,
                                size: c.zxk.Sizes.LARGE,
                                onClick: k,
                                submitting: l && j,
                                children: l ? h.intl.string(g.default.wg2xwc) : h.intl.string(g.default['10dX6e'])
                            }),
                            (0, n.jsx)(c.zxk, {
                                grow: !0,
                                color: c.zxk.Colors.PRIMARY,
                                onClick: t,
                                children: h.intl.string(h.t.cpT0Cg)
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
