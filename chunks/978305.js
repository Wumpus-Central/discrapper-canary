t.d(r, { default: () => O }), t(388685);
var n = t(54381),
    o = t(473749),
    s = t(120356),
    l = t.n(s),
    a = t(512722),
    i = t.n(a),
    c = t(481060),
    d = t(493773),
    f = t(198993),
    u = t(626135),
    C = t(985002),
    b = t(880257),
    x = t(631885),
    m = t(292352),
    p = t(981631),
    v = t(517319),
    y = t(388032),
    g = t(129916),
    h = t(478411);
let O = (e) => {
    let { transitionState: r, onClose: t } = e,
        s = (0, b.Z)(),
        [a, O] = o.useState(!1),
        { getLinkCode: j, isGetLinkCodeLoading: q } = (0, C.G)({}),
        _ = (0, x.rW)(),
        N = (0, x.gU)(),
        z = o.useRef(N);
    i()(!s, "FamilyCenterQRCodeModal should only be rendered for teens.");
    let S = () => {
        O(
            (e) => (
                u.default.track(p.rMx.FAMILY_CENTER_ACTION, { action: a ? m.YC.HideQRCode : m.YC.RevealQRCode }), !e
            ),
        ),
            a ||
                setTimeout(() => {
                    t();
                }, m.f2);
    };
    (0, d.ZP)(() => {
        j();
    }),
        o.useEffect(() => {
            N > z.current && t();
        }, [z, N, t]);
    let E = a && !q && null != _;
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
                    y.intl.string(v.default.iHYMAz),
                ],
            }),
            (0, n.jsxs)(c.fef, {
                children: [
                    (0, n.jsx)(c.Text, {
                        className: h.marginBottom8,
                        variant: "text-lg/bold",
                        color: "text-strong",
                        children: y.intl.string(v.default.AVTZaN),
                    }),
                    (0, n.jsx)(c.Text, {
                        className: h.marginBottom20,
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: y.intl.format(v.default.LyyCsE, {
                            link: "https://support.discord.com/hc/articles/14155060633623",
                        }),
                    }),
                    (0, n.jsx)("div", {
                        className: g.qrCodeContainer,
                        children: (0, n.jsx)(c.P3F, {
                            className: l()(g.qrCodeObscure, { [g.visible]: E }),
                            onClick: S,
                            children: (0, n.jsx)(f.c2, {
                                size: 272,
                                text: E ? _ : m.vH,
                                overlaySize: f.cK.SIZE_60,
                                className: g.qrCodeOverlay,
                            }),
                        }),
                    }),
                    (0, n.jsx)(c.Text, {
                        className: g.reminder,
                        variant: "text-xs/semibold",
                        color: "text-default",
                        children: y.intl.string(v.default.goDyoe),
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
                        text: a ? y.intl.string(v.default.wg2xwQ) : y.intl.string(v.default["10dX6U"]),
                        onClick: S,
                        loading: a && q,
                    },
                ],
            }),
        ],
    });
};
