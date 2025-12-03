t.d(r, { default: () => O }), t(388685);
var n = t(54381),
    o = t(473749),
    l = t(120356),
    s = t.n(l),
    i = t(512722),
    a = t.n(i),
    c = t(481060),
    d = t(493773),
    u = t(198993),
    f = t(626135),
    C = t(985002),
    m = t(880257),
    p = t(631885),
    x = t(292352),
    v = t(981631),
    b = t(744038),
    y = t(388032),
    g = t(352258),
    h = t(197571);
let O = (e) => {
    let { transitionState: r, onClose: t } = e,
        l = (0, m.Z)(),
        [i, O] = o.useState(!1),
        { getLinkCode: _, isGetLinkCodeLoading: j } = (0, C.G)({}),
        q = (0, p.rW)(),
        N = (0, p.gU)(),
        z = o.useRef(N);
    a()(!l, "FamilyCenterQRCodeModal should only be rendered for teens.");
    let S = () => {
        O(
            (e) => (
                f.default.track(v.rMx.FAMILY_CENTER_ACTION, { action: i ? x.YC.HideQRCode : x.YC.RevealQRCode }), !e
            ),
        ),
            i ||
                setTimeout(() => {
                    t();
                }, x.f2);
    };
    (0, d.ZP)(() => {
        _();
    }),
        o.useEffect(() => {
            N > z.current && t();
        }, [z, N, t]);
    let E = i && !j && null != q;
    return (0, n.jsxs)(c.IX, {
        transitionState: r,
        onClose: t,
        children: [
            (0, n.jsxs)(c.qXd, {
                className: g.notice,
                color: c.DM8.WARNING,
                children: [
                    (0, n.jsx)(c.d3s, {
                        size: "sm",
                        color: "currentColor",
                    }),
                    y.intl.string(b.default.iHYMAz),
                ],
            }),
            (0, n.jsxs)(c.fef, {
                children: [
                    (0, n.jsx)(c.Text, {
                        className: h.marginBottom8,
                        variant: "text-lg/bold",
                        color: "header-primary",
                        children: y.intl.string(b.default.AVTZaN),
                    }),
                    (0, n.jsx)(c.Text, {
                        className: h.marginBottom20,
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: y.intl.format(b.default.LyyCsE, {
                            link: "https://support.discord.com/hc/articles/14155060633623",
                        }),
                    }),
                    (0, n.jsx)("div", {
                        className: g.qrCodeContainer,
                        children: (0, n.jsx)(c.P3F, {
                            className: s()(g.qrCodeObscure, { [g.visible]: E }),
                            onClick: S,
                            children: (0, n.jsx)(u.c2, {
                                size: 272,
                                text: E ? q : x.vH,
                                overlaySize: u.cK.SIZE_60,
                                className: g.qrCodeOverlay,
                            }),
                        }),
                    }),
                    (0, n.jsx)(c.Text, {
                        className: g.reminder,
                        variant: "text-xs/semibold",
                        color: "text-default",
                        children: y.intl.string(b.default.goDyoe),
                    }),
                ],
            }),
            (0, n.jsx)(c.Go$, {
                actionsFullWidth: !0,
                actions: [
                    {
                        variant: "secondary",
                        text: y.intl.string(y.t.cpT0Cq),
                        onClick: t,
                    },
                    {
                        variant: "primary",
                        text: i ? y.intl.string(b.default.wg2xwQ) : y.intl.string(b.default["10dX6U"]),
                        onClick: S,
                        loading: i && j,
                    },
                ],
            }),
        ],
    });
};
