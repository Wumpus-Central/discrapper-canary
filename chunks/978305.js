r.d(t, { default: () => g }), r(388685);
var n = r(54381),
    o = r(473749),
    s = r(120356),
    i = r.n(s),
    a = r(512722),
    c = r.n(a),
    l = r(481060),
    d = r(493773),
    u = r(198993),
    f = r(626135),
    p = r(985002),
    C = r(880257),
    b = r(631885),
    y = r(292352),
    m = r(981631),
    x = r(372807),
    h = r(388032),
    v = r(129916),
    O = r(478411);
let g = (e) => {
    let { transitionState: t, onClose: r } = e,
        s = (0, C.Z)(),
        [a, g] = o.useState(!1),
        { getLinkCode: j, isGetLinkCodeLoading: _ } = (0, p.G)({}),
        q = (0, b.rW)(),
        E = (0, b.gU)(),
        P = o.useRef(E);
    c()(!s, "FamilyCenterQRCodeModal should only be rendered for teens.");
    let S = () => {
        g(
            (e) => (
                f.default.track(m.rMx.FAMILY_CENTER_ACTION, { action: a ? y.YC.HideQRCode : y.YC.RevealQRCode }), !e
            ),
        ),
            a ||
                setTimeout(() => {
                    r();
                }, y.f2);
    };
    (0, d.ZP)(() => {
        j();
    }),
        o.useEffect(() => {
            E > P.current && r();
        }, [P, E, r]);
    let N = a && !_ && null != q;
    return (0, n.jsxs)(l.IX, {
        transitionState: t,
        onClose: r,
        children: [
            (0, n.jsxs)(l.qXd, {
                className: v.notice,
                color: l.DM8.WARNING,
                children: [
                    (0, n.jsx)(l.d3s, {
                        size: "sm",
                        color: "currentColor",
                    }),
                    h.intl.string(x.default.iHYMAz),
                ],
            }),
            (0, n.jsxs)(l.fef, {
                children: [
                    (0, n.jsx)(l.Text, {
                        className: O.marginBottom8,
                        variant: "text-lg/bold",
                        color: "text-strong",
                        children: h.intl.string(x.default.AVTZaN),
                    }),
                    (0, n.jsx)(l.Text, {
                        className: O.marginBottom20,
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: h.intl.format(x.default.LyyCsE, {
                            link: "https://support.discord.com/hc/articles/14155060633623",
                        }),
                    }),
                    (0, n.jsx)("div", {
                        className: v.qrCodeContainer,
                        children: (0, n.jsx)(l.P3F, {
                            className: i()(v.qrCodeObscure, { [v.visible]: N }),
                            onClick: S,
                            children: (0, n.jsx)(u.c2, {
                                size: 272,
                                text: N ? q : y.vH,
                                overlaySize: u.cK.SIZE_60,
                                className: v.qrCodeOverlay,
                            }),
                        }),
                    }),
                    (0, n.jsx)(l.Text, {
                        className: v.reminder,
                        variant: "text-xs/semibold",
                        color: "text-default",
                        children: h.intl.string(x.default.goDyoe),
                    }),
                ],
            }),
            (0, n.jsx)(l.Go$, {
                actionsFullWidth: !0,
                actions: [
                    {
                        variant: "secondary",
                        text: h.intl.string(h.t.cpT0Cq),
                        onClick: r,
                    },
                    {
                        variant: "primary",
                        text: a ? h.intl.string(x.default.wg2xwQ) : h.intl.string(x.default["10dX6U"]),
                        onClick: S,
                        loading: a && _,
                    },
                ],
            }),
        ],
    });
};
