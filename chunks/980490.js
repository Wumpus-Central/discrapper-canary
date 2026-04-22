n.d(t, { q: () => D });
var l = n(627968),
    a = n(64700),
    i = n(503698),
    s = n.n(i),
    r = n(735438),
    u = n(602853),
    o = n(477262),
    c = n(65154),
    A = n(191023),
    d = n(588975),
    h = n(834730),
    _ = n(827734),
    I = n(155718),
    E = n(222713),
    C = n(57882),
    m = n(573435),
    g = n(619517),
    L = n(448381),
    f = n(465364),
    N = n(291812),
    x = n(253932),
    P = n(53228),
    p = n(985018),
    b = n(582068),
    S = n(28289);
function D(e) {
    let { message: t, forwardOptions: n, channel: i } = e,
        D = x.hH.useSetting(),
        {
            attachments: F,
            embeds: G,
            hasContent: y,
            contentMessage: O,
        } = (0, P.A)({ message: t, channel: i, forwardOptions: n }),
        T =
            O.components.length > 0 && O.components[0].type === I.I5.CHECKPOINT_CARD
                ? O.components[0].checkpointData
                : null,
        k = E.f[T?.cardId ?? 0],
        v = (0, u.r)(k.primaryColor).hex(),
        j = a.useMemo(
            () =>
                y
                    ? (0, f.Ay)(t, {
                          formatInline: !0,
                          allowLinks: !0,
                          allowHeading: !0,
                          allowList: !0,
                          hideSimpleEmbedContent: !1,
                          contentMessage: O,
                      }).content
                    : null,
            [O, y, t],
        ),
        W = F.length,
        w = null,
        R = null,
        M = null;
    if (W > 0 || G.length > 0) {
        let e = (0, r.countBy)(F, (e) => (0, L.NI)(e, !0)),
            t = e.IMAGE ?? 0,
            n = e.VIDEO ?? 0;
        t > 0 && n > 0
            ? ((w = p.intl.formatToPlainString(p.t.Lr0Top, { image_count: t, video_count: n })), (R = o.s))
            : n > 0
              ? ((w = p.intl.formatToPlainString(p.t.SJ6pPX, { count: n })), (R = c.S))
              : t > 0
                ? ((w = p.intl.formatToPlainString(p.t.h4pFfU, { count: t })), (R = 1 === t ? A.x : o.s))
                : ((w = p.intl.formatToPlainString(p.t["89ihS8"], { count: W })), (R = d.P)),
            n > 0 && W === n
                ? (M = (0, l.jsxs)("div", {
                      className: s()(S.cR, S.JZ),
                      children: [
                          (0, l.jsx)(g.Ay, { className: S.xn, src: F[0].proxy_url, width: 56, height: 56 }),
                          (0, l.jsx)(c.S, { className: S.uZ, size: "md", color: "white" }),
                      ],
                  }))
                : W > 0
                  ? (M = (0, l.jsx)("div", {
                        className: S.cR,
                        children: (0, l.jsx)(g.Ay, { src: F[0].proxy_url, width: 56, height: 56 }),
                    }))
                  : G[0]?.thumbnail?.proxyURL != null &&
                    (M = (0, l.jsx)("div", {
                        className: S.cR,
                        children: (0, l.jsx)(g.Ay, { src: G[0].thumbnail.proxyURL, width: 56, height: 56 }),
                    }));
    }
    return (
        W > 1 &&
            null != M &&
            (M = (0, l.jsxs)("div", {
                className: S.EW,
                children: [
                    (0, l.jsx)(m.Ay, {
                        mask: m.Ay.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                        width: 56,
                        height: 56,
                        children: M,
                    }),
                    (0, l.jsxs)(h.E, {
                        className: S.mB,
                        variant: "text-xs/semibold",
                        color: "text-default",
                        children: ["+", W - 1],
                    }),
                ],
            })),
        (0, l.jsxs)("div", {
            className: S.sq,
            children: [
                (0, l.jsxs)("div", {
                    className: S.FG,
                    children: [
                        null != T &&
                            (0, l.jsx)(h.E, { variant: "text-md/medium", children: p.intl.string(b.default.goiR2u) }),
                        y &&
                            (0, l.jsx)(N.Ay, {
                                className: s()(S.vp, W > 0 && S.NL),
                                message: t,
                                content: j,
                                compact: D,
                            }),
                        W > 0 &&
                            (0, l.jsxs)("div", {
                                className: S.kp,
                                children: [
                                    null != R &&
                                        (0, l.jsx)(R, {
                                            size: "custom",
                                            width: y ? 18 : 20,
                                            color: _.A.colors.TEXT_MUTED,
                                        }),
                                    null != w &&
                                        (0, l.jsx)(h.E, {
                                            variant: y ? "text-sm/medium" : "text-md/medium",
                                            color: "text-muted",
                                            children: w,
                                        }),
                                ],
                            }),
                    ],
                }),
                M,
                null != T &&
                    (0, l.jsx)("div", {
                        className: S.cR,
                        children: (0, l.jsx)("img", {
                            alt: "",
                            style: { backgroundColor: v },
                            width: 56,
                            height: 56,
                            src: (0, C.OW)(T.cardId ?? 0),
                        }),
                    }),
            ],
        })
    );
}
