n.d(t, { q: () => S });
var a = n(627968),
    r = n(64700),
    l = n(503698),
    s = n.n(l),
    o = n(735438),
    i = n(602853),
    c = n(477262),
    d = n(65154),
    _ = n(191023),
    u = n(588975),
    A = n(834730),
    E = n(827734),
    C = n(155718),
    h = n(222713),
    m = n(57882),
    I = n(573435),
    N = n(619517),
    p = n(448381),
    f = n(465364),
    g = n(291812),
    O = n(253932),
    T = n(53228),
    P = n(985018),
    b = n(582068),
    R = n(28289);
function S(e) {
    let { message: t, forwardOptions: n, channel: l } = e,
        S = O.hH.useSetting(),
        {
            attachments: L,
            embeds: y,
            hasContent: w,
            contentMessage: D,
        } = (0, T.A)({ message: t, channel: l, forwardOptions: n }),
        x =
            D.components.length > 0 && D.components[0].type === C.I5.CHECKPOINT_CARD
                ? D.components[0].checkpointData
                : null,
        v = h.f[x?.cardId ?? 0],
        G = (0, i.r)(v.primaryColor).hex(),
        k = r.useMemo(
            () =>
                w
                    ? (0, f.Ay)(t, {
                          formatInline: !0,
                          allowLinks: !0,
                          allowHeading: !0,
                          allowList: !0,
                          hideSimpleEmbedContent: !1,
                          contentMessage: D,
                      }).content
                    : null,
            [D, w, t],
        ),
        F = L.length,
        M = null,
        j = null,
        H = null;
    if (F > 0 || y.length > 0) {
        let e = (0, o.countBy)(L, (e) => (0, p.NI)(e, !0)),
            t = e.IMAGE ?? 0,
            n = e.VIDEO ?? 0;
        t > 0 && n > 0
            ? ((M = P.intl.formatToPlainString(P.t.Lr0Top, { image_count: t, video_count: n })), (j = c.s))
            : n > 0
              ? ((M = P.intl.formatToPlainString(P.t.SJ6pPX, { count: n })), (j = d.S))
              : t > 0
                ? ((M = P.intl.formatToPlainString(P.t.h4pFfU, { count: t })), (j = 1 === t ? _.x : c.s))
                : ((M = P.intl.formatToPlainString(P.t["89ihS8"], { count: F })), (j = u.P)),
            n > 0 && F === n
                ? (H = (0, a.jsxs)("div", {
                      className: s()(R.cR, R.JZ),
                      children: [
                          (0, a.jsx)(N.Ay, { className: R.xn, src: L[0].proxy_url, width: 56, height: 56 }),
                          (0, a.jsx)(d.S, { className: R.uZ, size: "md", color: "white" }),
                      ],
                  }))
                : F > 0
                  ? (H = (0, a.jsx)("div", {
                        className: R.cR,
                        children: (0, a.jsx)(N.Ay, { src: L[0].proxy_url, width: 56, height: 56 }),
                    }))
                  : y[0]?.thumbnail?.proxyURL != null &&
                    (H = (0, a.jsx)("div", {
                        className: R.cR,
                        children: (0, a.jsx)(N.Ay, { src: y[0].thumbnail.proxyURL, width: 56, height: 56 }),
                    }));
    }
    return (
        F > 1 &&
            null != H &&
            (H = (0, a.jsxs)("div", {
                className: R.EW,
                children: [
                    (0, a.jsx)(I.Ay, {
                        mask: I.Ay.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                        width: 56,
                        height: 56,
                        children: H,
                    }),
                    (0, a.jsxs)(A.E, {
                        className: R.mB,
                        variant: "text-xs/semibold",
                        color: "text-default",
                        children: ["+", F - 1],
                    }),
                ],
            })),
        (0, a.jsxs)("div", {
            className: R.sq,
            children: [
                (0, a.jsxs)("div", {
                    className: R.FG,
                    children: [
                        null != x &&
                            (0, a.jsx)(A.E, { variant: "text-md/medium", children: P.intl.string(b.default.goiR2u) }),
                        w &&
                            (0, a.jsx)(g.Ay, {
                                className: s()(R.vp, F > 0 && R.NL),
                                message: t,
                                content: k,
                                compact: S,
                            }),
                        F > 0 &&
                            (0, a.jsxs)("div", {
                                className: R.kp,
                                children: [
                                    null != j &&
                                        (0, a.jsx)(j, {
                                            size: "custom",
                                            width: w ? 18 : 20,
                                            color: E.A.colors.TEXT_MUTED,
                                        }),
                                    null != M &&
                                        (0, a.jsx)(A.E, {
                                            variant: w ? "text-sm/medium" : "text-md/medium",
                                            color: "text-muted",
                                            children: M,
                                        }),
                                ],
                            }),
                    ],
                }),
                H,
                null != x &&
                    (0, a.jsx)("div", {
                        className: R.cR,
                        children: (0, a.jsx)("img", {
                            alt: "",
                            style: { backgroundColor: G },
                            width: 56,
                            height: 56,
                            src: (0, m.OW)(x.cardId ?? 0),
                        }),
                    }),
            ],
        })
    );
}
