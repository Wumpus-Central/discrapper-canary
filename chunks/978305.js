t.d(r, { default: () => v }), t(47120);
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
    g = t(388032),
    h = t(423066),
    _ = t(455812);
let v = (e) => {
    let { transitionState: r, onClose: t } = e,
        s = (0, m.Z)(),
        [i, v] = n.useState(!1),
        { getLinkCode: y, isGetLinkCodeLoading: O } = (0, f.G)({}),
        j = (0, x.rW)(),
        N = (0, x.gU)(),
        z = n.useRef(N);
    l()(!s, 'FamilyCenterQRCodeModal should only be rendered for teens.');
    let q = () => {
        v((e) => (C.default.track(b.rMx.FAMILY_CENTER_ACTION, { action: i ? p.YC.HideQRCode : p.YC.RevealQRCode }), !e)),
            i ||
                setTimeout(() => {
                    t();
                }, p.f2);
    };
    (0, d.ZP)(() => {
        y();
    }),
        n.useEffect(() => {
            N > z.current && t();
        }, [z, N, t]);
    let k = i && !O && null != j;
    return (0, o.jsxs)(c.Y0X, {
        className: h.modalRoot,
        transitionState: r,
        children: [
            (0, o.jsxs)(c.qXd, {
                className: h.notice,
                color: c.DM8.WARNING,
                children: [
                    (0, o.jsx)(c.d3s, {
                        size: 'sm',
                        color: 'currentColor'
                    }),
                    g.NW.string(g.t.iHYMAw)
                ]
            }),
            (0, o.jsxs)(c.hzk, {
                className: h.content,
                children: [
                    (0, o.jsx)(c.Text, {
                        className: _.marginBottom8,
                        variant: 'text-lg/bold',
                        color: 'header-primary',
                        children: g.NW.string(g.t.AVTZaG)
                    }),
                    (0, o.jsx)(c.Text, {
                        className: _.marginBottom20,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: g.NW.format(g.t.LyyCsL, { link: 'https://support.discord.com/hc/articles/14155060633623' })
                    }),
                    (0, o.jsx)('div', {
                        className: h.qrCodeContainer,
                        children: (0, o.jsx)(c.P3F, {
                            className: a()(h.qrCodeObscure, { [h.visible]: k }),
                            onClick: q,
                            children: (0, o.jsx)(u.c2, {
                                size: 272,
                                text: k ? j : p.vH,
                                overlaySize: u.cK.SIZE_60,
                                className: h.qrCodeOverlay
                            })
                        })
                    }),
                    (0, o.jsx)(c.Text, {
                        className: h.reminder,
                        variant: 'text-xs/semibold',
                        color: 'header-secondary',
                        children: g.NW.string(g.t.goDyoa)
                    }),
                    (0, o.jsxs)('div', {
                        className: a()(h.buttonContainer, _.marginTop20),
                        children: [
                            (0, o.jsx)(c.zxk, {
                                className: _.marginBottom8,
                                grow: !0,
                                size: c.zxk.Sizes.LARGE,
                                onClick: q,
                                submitting: i && O,
                                children: i ? g.NW.string(g.t.wg2xwc) : g.NW.string(g.t['10dX6e'])
                            }),
                            (0, o.jsx)(c.zxk, {
                                grow: !0,
                                color: c.zxk.Colors.PRIMARY,
                                onClick: t,
                                children: g.NW.string(g.t.cpT0Cg)
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
