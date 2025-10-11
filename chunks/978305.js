t.d(r, { default: () => _ }), t(388685);
var n = t(951288),
    o = t(647438),
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
    g = t(345909),
    y = t(388032),
    h = t(352258),
    v = t(197571);
let _ = (e) => {
    let { transitionState: r, onClose: t } = e,
        a = (0, m.Z)(),
        [i, _] = o.useState(!1),
        { getLinkCode: j, isGetLinkCodeLoading: O } = (0, C.G)({}),
        q = (0, p.rW)(),
        N = (0, p.gU)(),
        z = o.useRef(N);
    l()(!a, "FamilyCenterQRCodeModal should only be rendered for teens.");
    let S = () => {
        _(
            (e) => (
                f.default.track(b.rMx.FAMILY_CENTER_ACTION, { action: i ? x.YC.HideQRCode : x.YC.RevealQRCode }), !e
            ),
        ),
            i ||
                setTimeout(() => {
                    t();
                }, x.f2);
    };
    (0, d.ZP)(() => {
        j();
    }),
        o.useEffect(() => {
            N > z.current && t();
        }, [z, N, t]);
    let k = i && !O && null != q;
    return (0, n.jsxs)(c.Y0X, {
        "data-migration-pending": !0,
        className: h.modalRoot,
        transitionState: r,
        parentComponent: "FamilyCenterQRCodeModal",
        children: [
            (0, n.jsxs)(c.qXd, {
                className: h.notice,
                color: c.DM8.WARNING,
                children: [
                    (0, n.jsx)(c.d3s, {
                        size: "sm",
                        color: "currentColor",
                    }),
                    y.intl.string(g.default.iHYMAw),
                ],
            }),
            (0, n.jsxs)(c.hzk, {
                "data-migration-pending": !0,
                className: h.content,
                children: [
                    (0, n.jsx)(c.Text, {
                        className: v.marginBottom8,
                        variant: "text-lg/bold",
                        color: "header-primary",
                        children: y.intl.string(g.default.AVTZaG),
                    }),
                    (0, n.jsx)(c.Text, {
                        className: v.marginBottom20,
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: y.intl.format(g.default.LyyCsL, {
                            link: "https://support.discord.com/hc/articles/14155060633623",
                        }),
                    }),
                    (0, n.jsx)("div", {
                        className: h.qrCodeContainer,
                        children: (0, n.jsx)(c.P3F, {
                            className: s()(h.qrCodeObscure, { [h.visible]: k }),
                            onClick: S,
                            children: (0, n.jsx)(u.c2, {
                                size: 272,
                                text: k ? q : x.vH,
                                overlaySize: u.cK.SIZE_60,
                                className: h.qrCodeOverlay,
                            }),
                        }),
                    }),
                    (0, n.jsx)(c.Text, {
                        className: h.reminder,
                        variant: "text-xs/semibold",
                        color: "header-secondary",
                        children: y.intl.string(g.default.goDyoa),
                    }),
                    (0, n.jsx)("div", {
                        className: s()(h.buttonContainer, v.marginTop20),
                        children: (0, n.jsxs)(c.ButtonGroup, {
                            fullWidth: !0,
                            children: [
                                (0, n.jsx)(c.Button, {
                                    variant: "secondary",
                                    text: y.intl.string(y.t.cpT0Cg),
                                    onClick: t,
                                }),
                                (0, n.jsx)(c.Button, {
                                    variant: "primary",
                                    text: i ? y.intl.string(g.default.wg2xwc) : y.intl.string(g.default["10dX6e"]),
                                    onClick: S,
                                    loading: i && O,
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        ],
    });
};
