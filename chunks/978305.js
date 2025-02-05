t.d(r, { default: () => b }), t(47120);
var o = t(200651),
    s = t(192379),
    n = t(120356),
    a = t.n(n),
    i = t(512722),
    l = t.n(i),
    c = t(481060),
    d = t(493773),
    C = t(198993),
    u = t(626135),
    m = t(985002),
    x = t(880257),
    f = t(631885),
    _ = t(292352),
    h = t(981631),
    v = t(388032),
    g = t(116594),
    p = t(232186);
let b = (e) => {
    let { transitionState: r, onClose: t } = e,
        n = (0, x.Z)(),
        [i, b] = s.useState(!1),
        { getLinkCode: j, isGetLinkCodeLoading: z } = (0, m.G)({}),
        y = (0, f.rW)(),
        q = (0, f.gU)(),
        N = s.useRef(q);
    l()(!n, 'FamilyCenterQRCodeModal should only be rendered for teens.');
    let k = () => {
        b((e) => (u.default.track(h.rMx.FAMILY_CENTER_ACTION, { action: i ? _.YC.HideQRCode : _.YC.RevealQRCode }), !e)),
            i ||
                setTimeout(() => {
                    t();
                }, _.f2);
    };
    (0, d.ZP)(() => {
        j();
    }),
        s.useEffect(() => {
            q > N.current && t();
        }, [N, q, t]);
    let O = i && !z && null != y;
    return (0, o.jsxs)(c.Y0X, {
        className: g.modalRoot,
        transitionState: r,
        children: [
            (0, o.jsxs)(c.qXd, {
                className: g.notice,
                color: c.DM8.WARNING,
                children: [
                    (0, o.jsx)(c.d3s, {
                        size: 'sm',
                        color: 'currentColor'
                    }),
                    v.intl.string(v.t.iHYMAw)
                ]
            }),
            (0, o.jsxs)(c.hzk, {
                className: g.content,
                children: [
                    (0, o.jsx)(c.Text, {
                        className: p.marginBottom8,
                        variant: 'text-lg/bold',
                        color: 'header-primary',
                        children: v.intl.string(v.t.AVTZaG)
                    }),
                    (0, o.jsx)(c.Text, {
                        className: p.marginBottom20,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: v.intl.format(v.t.LyyCsL, { link: 'https://support.discord.com/hc/articles/14155060633623' })
                    }),
                    (0, o.jsx)('div', {
                        className: g.qrCodeContainer,
                        children: (0, o.jsx)(c.P3F, {
                            className: a()(g.qrCodeObscure, { [g.visible]: O }),
                            onClick: k,
                            children: (0, o.jsx)(C.c2, {
                                size: 272,
                                text: O ? y : _.vH,
                                overlaySize: C.cK.SIZE_60,
                                className: g.qrCodeOverlay
                            })
                        })
                    }),
                    (0, o.jsx)(c.Text, {
                        className: g.reminder,
                        variant: 'text-xs/semibold',
                        color: 'header-secondary',
                        children: v.intl.string(v.t.goDyoa)
                    }),
                    (0, o.jsxs)('div', {
                        className: a()(g.buttonContainer, p.marginTop20),
                        children: [
                            (0, o.jsx)(c.zxk, {
                                className: p.marginBottom8,
                                grow: !0,
                                size: c.zxk.Sizes.LARGE,
                                onClick: k,
                                submitting: i && z,
                                children: i ? v.intl.string(v.t.wg2xwc) : v.intl.string(v.t['10dX6e'])
                            }),
                            (0, o.jsx)(c.zxk, {
                                grow: !0,
                                color: c.zxk.Colors.PRIMARY,
                                onClick: t,
                                children: v.intl.string(v.t.cpT0Cg)
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
