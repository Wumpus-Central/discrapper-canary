t.d(r, { default: () => O }), t(388685);
var n = t(951288),
    o = t(647438),
    s = t(120356),
    l = t.n(s),
    a = t(512722),
    i = t.n(a),
    c = t(481060),
    d = t(493773),
    u = t(198993),
    f = t(626135),
    C = t(985002),
    m = t(880257),
    p = t(631885),
    x = t(292352),
    y = t(981631),
    v = t(382402),
    b = t(388032),
    h = t(938399),
    g = t(10198);
let O = (e) => {
    let { transitionState: r, onClose: t } = e,
        s = (0, m.Z)(),
        [a, O] = o.useState(!1),
        { getLinkCode: _, isGetLinkCodeLoading: j } = (0, C.G)({}),
        q = (0, p.rW)(),
        N = (0, p.gU)(),
        z = o.useRef(N);
    i()(!s, "FamilyCenterQRCodeModal should only be rendered for teens.");
    let S = () => {
        O(
            (e) => (
                f.default.track(y.rMx.FAMILY_CENTER_ACTION, { action: a ? x.YC.HideQRCode : x.YC.RevealQRCode }), !e
            ),
        ),
            a ||
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
    let E = a && !j && null != q;
    return (0, n.jsxs)(c.IX, {
        transitionState: r,
        onClose: t,
        children: [
            (0, n.jsxs)(c.qXd, {
                className: h.notice,
                color: c.DM8.WARNING,
                children: [
                    (0, n.jsx)(c.d3s, {
                        size: "sm",
                        color: "currentColor",
                    }),
                    b.intl.string(v.default.iHYMAz),
                ],
            }),
            (0, n.jsxs)(c.fef, {
                children: [
                    (0, n.jsx)(c.Text, {
                        className: g.marginBottom8,
                        variant: "text-lg/bold",
                        color: "header-primary",
                        children: b.intl.string(v.default.AVTZaN),
                    }),
                    (0, n.jsx)(c.Text, {
                        className: g.marginBottom20,
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: b.intl.format(v.default.LyyCsE, {
                            link: "https://support.discord.com/hc/articles/14155060633623",
                        }),
                    }),
                    (0, n.jsx)("div", {
                        className: h.qrCodeContainer,
                        children: (0, n.jsx)(c.P3F, {
                            className: l()(h.qrCodeObscure, { [h.visible]: E }),
                            onClick: S,
                            children: (0, n.jsx)(u.c2, {
                                size: 272,
                                text: E ? q : x.vH,
                                overlaySize: u.cK.SIZE_60,
                                className: h.qrCodeOverlay,
                            }),
                        }),
                    }),
                    (0, n.jsx)(c.Text, {
                        className: h.reminder,
                        variant: "text-xs/semibold",
                        color: "header-secondary",
                        children: b.intl.string(v.default.goDyoe),
                    }),
                ],
            }),
            (0, n.jsx)(c.Go$, {
                actionsFullWidth: !0,
                actions: [
                    {
                        variant: "secondary",
                        text: b.intl.string(b.t.cpT0Cq),
                        onClick: t,
                    },
                    {
                        variant: "primary",
                        text: a ? b.intl.string(v.default.wg2xwQ) : b.intl.string(v.default["10dX6U"]),
                        onClick: S,
                        loading: a && j,
                    },
                ],
            }),
        ],
    });
};
