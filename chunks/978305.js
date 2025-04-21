t.d(r, { default: () => y }), t(388685);
var n = t(200651),
    o = t(192379),
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
    x = t(631885),
    p = t(292352),
    b = t(981631),
    g = t(332495),
    h = t(388032),
    _ = t(22419),
    v = t(20493);
let y = (e) => {
    let { transitionState: r, onClose: t } = e,
        s = (0, m.Z)(),
        [l, y] = o.useState(!1),
        { getLinkCode: O, isGetLinkCodeLoading: j } = (0, C.G)({}),
        z = (0, x.rW)(),
        N = (0, x.gU)(),
        q = o.useRef(N);
    i()(!s, 'FamilyCenterQRCodeModal should only be rendered for teens.');
    let k = () => {
        y((e) => (f.default.track(b.rMx.FAMILY_CENTER_ACTION, { action: l ? p.YC.HideQRCode : p.YC.RevealQRCode }), !e)),
            l ||
                setTimeout(() => {
                    t();
                }, p.f2);
    };
    (0, d.ZP)(() => {
        O();
    }),
        o.useEffect(() => {
            N > q.current && t();
        }, [q, N, t]);
    let S = l && !j && null != z;
    return (0, n.jsxs)(c.Y0X, {
        className: _.modalRoot,
        transitionState: r,
        children: [
            (0, n.jsxs)(c.qXd, {
                className: _.notice,
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
                className: _.content,
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
                        className: _.qrCodeContainer,
                        children: (0, n.jsx)(c.P3F, {
                            className: a()(_.qrCodeObscure, { [_.visible]: S }),
                            onClick: k,
                            children: (0, n.jsx)(u.c2, {
                                size: 272,
                                text: S ? z : p.vH,
                                overlaySize: u.cK.SIZE_60,
                                className: _.qrCodeOverlay
                            })
                        })
                    }),
                    (0, n.jsx)(c.Text, {
                        className: _.reminder,
                        variant: 'text-xs/semibold',
                        color: 'header-secondary',
                        children: h.intl.string(g.default.goDyoa)
                    }),
                    (0, n.jsxs)('div', {
                        className: a()(_.buttonContainer, v.marginTop20),
                        children: [
                            (0, n.jsx)(c.zxk, {
                                className: v.marginBottom8,
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
