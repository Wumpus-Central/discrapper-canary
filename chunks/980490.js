n.d(t, { q: () => w });
var l = n(627968),
    a = n(64700),
    s = n(503698),
    i = n.n(s),
    r = n(735438),
    o = n(397927),
    u = n(155718),
    c = n(222713),
    d = n(57882),
    h = n(573435),
    m = n(619517),
    g = n(448381),
    f = n(465364),
    x = n(291812),
    C = n(253932),
    p = n(53228),
    A = n(985018),
    b = n(622865),
    v = n(312396);
function w(e) {
    let { message: t, forwardOptions: n, channel: s } = e,
        w = C.hH.useSetting(),
        {
            attachments: T,
            embeds: j,
            hasContent: k,
            contentMessage: y,
        } = (0, p.A)({ message: t, channel: s, forwardOptions: n }),
        R =
            y.components.length > 0 && y.components[0].type === u.I5.CHECKPOINT_CARD
                ? y.components[0].checkpointData
                : null,
        S = c.f[R?.cardId ?? 0],
        M = (0, o.rdh)(S.primaryColor).hex(),
        N = a.useMemo(
            () =>
                k
                    ? (0, f.Ay)(t, {
                          formatInline: !0,
                          allowLinks: !0,
                          allowHeading: !0,
                          allowList: !0,
                          hideSimpleEmbedContent: !1,
                          contentMessage: y,
                      }).content
                    : null,
            [y, k, t],
        ),
        _ = T.length,
        P = null,
        D = null,
        I = null;
    if (_ > 0 || j.length > 0) {
        let e = (0, r.countBy)(T, (e) => (0, g.NI)(e, !0)),
            t = e.IMAGE ?? 0,
            n = e.VIDEO ?? 0;
        t > 0 && n > 0
            ? ((P = A.intl.formatToPlainString(A.t.Lr0Top, { image_count: t, video_count: n })), (D = o.sYc))
            : n > 0
              ? ((P = A.intl.formatToPlainString(A.t.SJ6pPX, { count: n })), (D = o.SfG))
              : t > 0
                ? ((P = A.intl.formatToPlainString(A.t.h4pFfU, { count: t })), (D = 1 === t ? o.xfq : o.sYc))
                : ((P = A.intl.formatToPlainString(A.t["89ihS8"], { count: _ })), (D = o.PtA)),
            n > 0 && _ === n
                ? (I = (0, l.jsxs)("div", {
                      className: i()(v.cR, v.JZ),
                      children: [
                          (0, l.jsx)(m.Ay, { className: v.xn, src: T[0].proxy_url, width: 56, height: 56 }),
                          (0, l.jsx)(o.SfG, { className: v.uZ, size: "md", color: "white" }),
                      ],
                  }))
                : _ > 0
                  ? (I = (0, l.jsx)("div", {
                        className: v.cR,
                        children: (0, l.jsx)(m.Ay, { src: T[0].proxy_url, width: 56, height: 56 }),
                    }))
                  : j[0]?.thumbnail?.proxyURL != null &&
                    (I = (0, l.jsx)("div", {
                        className: v.cR,
                        children: (0, l.jsx)(m.Ay, { src: j[0].thumbnail.proxyURL, width: 56, height: 56 }),
                    }));
    }
    return (
        _ > 1 &&
            null != I &&
            (I = (0, l.jsxs)("div", {
                className: v.EW,
                children: [
                    (0, l.jsx)(h.Ay, {
                        mask: h.Ay.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                        width: 56,
                        height: 56,
                        children: I,
                    }),
                    (0, l.jsxs)(o.Text, {
                        className: v.mB,
                        variant: "text-xs/semibold",
                        color: "text-default",
                        children: ["+", _ - 1],
                    }),
                ],
            })),
        (0, l.jsxs)("div", {
            className: v.sq,
            children: [
                (0, l.jsxs)("div", {
                    className: v.FG,
                    children: [
                        null != R &&
                            (0, l.jsx)(o.Text, {
                                variant: "text-md/medium",
                                children: A.intl.string(b.default.goiR2u),
                            }),
                        k &&
                            (0, l.jsx)(x.Ay, {
                                className: i()(v.vp, _ > 0 && v.NL),
                                message: t,
                                content: N,
                                compact: w,
                            }),
                        _ > 0 &&
                            (0, l.jsxs)("div", {
                                className: v.kp,
                                children: [
                                    null != D &&
                                        (0, l.jsx)(D, {
                                            size: "custom",
                                            width: k ? 18 : 20,
                                            color: o.LU0.colors.TEXT_MUTED,
                                        }),
                                    null != P &&
                                        (0, l.jsx)(o.Text, {
                                            variant: k ? "text-sm/medium" : "text-md/medium",
                                            color: "text-muted",
                                            children: P,
                                        }),
                                ],
                            }),
                    ],
                }),
                I,
                null != R &&
                    (0, l.jsx)("div", {
                        className: v.cR,
                        children: (0, l.jsx)("img", {
                            alt: "",
                            style: { backgroundColor: M },
                            width: 56,
                            height: 56,
                            src: (0, d.OW)(R.cardId ?? 0),
                        }),
                    }),
            ],
        })
    );
}
