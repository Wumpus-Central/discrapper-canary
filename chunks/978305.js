t.d(r, { default: () => y }), t(47120);
var o = t(200651),
    n = t(192379),
    s = t(120356),
    a = t.n(s),
    i = t(512722),
    l = t.n(i),
    c = t(481060),
    d = t(493773),
    u = t(198993),
    C = t(626135),
    f = t(985002),
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
        [i, y] = n.useState(!1),
        { getLinkCode: O, isGetLinkCodeLoading: j } = (0, f.G)({}),
        N = (0, x.rW)(),
        z = (0, x.gU)(),
        q = n.useRef(z);
    l()(!s, 'FamilyCenterQRCodeModal should only be rendered for teens.');
    let Z = () => {
        y((e) => (C.default.track(b.rMx.FAMILY_CENTER_ACTION, { action: i ? p.YC.HideQRCode : p.YC.RevealQRCode }), !e)),
            i ||
                setTimeout(() => {
                    t();
                }, p.f2);
    };
    (0, d.ZP)(() => {
        O();
    }),
        n.useEffect(() => {
            z > q.current && t();
        }, [q, z, t]);
    let k = i && !j && null != N;
    return (0, o.jsxs)(c.Y0X, {
        className: _.modalRoot,
        transitionState: r,
        children: [
            (0, o.jsxs)(c.qXd, {
                className: _.notice,
                color: c.DM8.WARNING,
                children: [
                    (0, o.jsx)(c.d3s, {
                        size: 'sm',
                        color: 'currentColor'
                    }),
                    h.NW.string(g.Z.iHYMAw)
                ]
            }),
            (0, o.jsxs)(c.hzk, {
                className: _.content,
                children: [
                    (0, o.jsx)(c.Text, {
                        className: v.marginBottom8,
                        variant: 'text-lg/bold',
                        color: 'header-primary',
                        children: h.NW.string(g.Z.AVTZaG)
                    }),
                    (0, o.jsx)(c.Text, {
                        className: v.marginBottom20,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: h.NW.format(g.Z.LyyCsL, { link: 'https://support.discord.com/hc/articles/14155060633623' })
                    }),
                    (0, o.jsx)('div', {
                        className: _.qrCodeContainer,
                        children: (0, o.jsx)(c.P3F, {
                            className: a()(_.qrCodeObscure, { [_.visible]: k }),
                            onClick: Z,
                            children: (0, o.jsx)(u.c2, {
                                size: 272,
                                text: k ? N : p.vH,
                                overlaySize: u.cK.SIZE_60,
                                className: _.qrCodeOverlay
                            })
                        })
                    }),
                    (0, o.jsx)(c.Text, {
                        className: _.reminder,
                        variant: 'text-xs/semibold',
                        color: 'header-secondary',
                        children: h.NW.string(g.Z.goDyoa)
                    }),
                    (0, o.jsxs)('div', {
                        className: a()(_.buttonContainer, v.marginTop20),
                        children: [
                            (0, o.jsx)(c.zxk, {
                                className: v.marginBottom8,
                                grow: !0,
                                size: c.zxk.Sizes.LARGE,
                                onClick: Z,
                                submitting: i && j,
                                children: i ? h.NW.string(g.Z.wg2xwc) : h.NW.string(g.Z['10dX6e'])
                            }),
                            (0, o.jsx)(c.zxk, {
                                grow: !0,
                                color: c.zxk.Colors.PRIMARY,
                                onClick: t,
                                children: h.NW.string(h.t.cpT0Cg)
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
