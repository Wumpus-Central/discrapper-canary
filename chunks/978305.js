t.d(r, { default: () => _ }), t(388685);
var n = t(54381),
    o = t(473749),
    s = t(120356),
    i = t.n(s),
    a = t(512722),
    l = t.n(a),
    c = t(481060),
    d = t(493773),
    u = t(198993),
    f = t(626135),
    p = t(985002),
    C = t(880257),
    y = t(631885),
    m = t(292352),
    h = t(981631),
    b = t(597754),
    x = t(388032),
    v = t(352258),
    O = t(197571);
let _ = (e) => {
    let { transitionState: r, onClose: t } = e,
        s = (0, C.Z)(),
        [a, _] = o.useState(!1),
        { getLinkCode: g, isGetLinkCodeLoading: j } = (0, p.G)({}),
        q = (0, y.rW)(),
        E = (0, y.gU)(),
        P = o.useRef(E);
    l()(!s, "FamilyCenterQRCodeModal should only be rendered for teens.");
    let S = () => {
        _(
            (e) => (
                f.default.track(h.rMx.FAMILY_CENTER_ACTION, { action: a ? m.YC.HideQRCode : m.YC.RevealQRCode }), !e
            ),
        ),
            a ||
                setTimeout(() => {
                    t();
                }, m.f2);
    };
    (0, d.ZP)(() => {
        g();
    }),
        o.useEffect(() => {
            E > P.current && t();
        }, [P, E, t]);
    let N = a && !j && null != q;
    return (0, n.jsxs)(c.IX, {
        transitionState: r,
        onClose: t,
        children: [
            (0, n.jsxs)(c.qXd, {
                className: v.notice,
                color: c.DM8.WARNING,
                children: [
                    (0, n.jsx)(c.d3s, {
                        size: "sm",
                        color: "currentColor",
                    }),
                    x.intl.string(b.default.iHYMAz),
                ],
            }),
            (0, n.jsxs)(c.fef, {
                children: [
                    (0, n.jsx)(c.Text, {
                        className: O.marginBottom8,
                        variant: "text-lg/bold",
                        color: "header-primary",
                        children: x.intl.string(b.default.AVTZaN),
                    }),
                    (0, n.jsx)(c.Text, {
                        className: O.marginBottom20,
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: x.intl.format(b.default.LyyCsE, {
                            link: "https://support.discord.com/hc/articles/14155060633623",
                        }),
                    }),
                    (0, n.jsx)("div", {
                        className: v.qrCodeContainer,
                        children: (0, n.jsx)(c.P3F, {
                            className: i()(v.qrCodeObscure, { [v.visible]: N }),
                            onClick: S,
                            children: (0, n.jsx)(u.c2, {
                                size: 272,
                                text: N ? q : m.vH,
                                overlaySize: u.cK.SIZE_60,
                                className: v.qrCodeOverlay,
                            }),
                        }),
                    }),
                    (0, n.jsx)(c.Text, {
                        className: v.reminder,
                        variant: "text-xs/semibold",
                        color: "header-secondary",
                        children: x.intl.string(b.default.goDyoe),
                    }),
                ],
            }),
            (0, n.jsx)(c.Go$, {
                actionsFullWidth: !0,
                actions: [
                    {
                        variant: "secondary",
                        text: x.intl.string(x.t.cpT0Cq),
                        onClick: t,
                    },
                    {
                        variant: "primary",
                        text: a ? x.intl.string(b.default.wg2xwQ) : x.intl.string(b.default["10dX6U"]),
                        onClick: S,
                        loading: a && j,
                    },
                ],
            }),
        ],
    });
};
