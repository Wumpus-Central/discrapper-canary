n.d(t, { q: () => w });
var l = n(627968),
    r = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(735438),
    o = n(397927),
    u = n(155718),
    c = n(222713),
    d = n(57882),
    h = n(573435),
    m = n(352505),
    f = n(619517),
    g = n(448381),
    p = n(465364),
    b = n(291812),
    x = n(253932),
    y = n(53228),
    v = n(985018),
    C = n(622865),
    j = n(312396);
function w(e) {
    var t, n, a, w, O, A;
    let { message: S, forwardOptions: T, channel: P } = e,
        k = x.hH.useSetting(),
        {
            attachments: R,
            embeds: D,
            hasContent: E,
            contentMessage: M,
        } = (0, y.A)({
            message: S,
            channel: P,
            forwardOptions: T,
        }),
        N =
            M.components.length > 0 && M.components[0].type === u.I5.CHECKPOINT_CARD
                ? M.components[0].checkpointData
                : null,
        I = c.f[null != (t = null == N ? void 0 : N.cardId) ? t : 0],
        _ = (0, o.rdh)(I.primaryColor).hex(),
        F = m.m.useExperiment({ location: "forward_preview" }).enabled,
        V = r.useMemo(
            () =>
                E
                    ? (0, p.Ay)(S, {
                          formatInline: !0,
                          allowLinks: !0,
                          allowHeading: !0,
                          allowList: !0,
                          allowGameMentions: F,
                          hideSimpleEmbedContent: !1,
                          contentMessage: M,
                      }).content
                    : null,
            [M, E, S, F],
        ),
        L = R.length,
        U = null,
        G = null,
        B = null;
    if (L > 0 || D.length > 0) {
        let e = (0, s.countBy)(R, (e) => (0, g.NI)(e, !0)),
            t = null != (a = e.IMAGE) ? a : 0,
            n = null != (w = e.VIDEO) ? w : 0;
        t > 0 && n > 0
            ? ((U = v.intl.formatToPlainString(v.t.Lr0Top, {
                  image_count: t,
                  video_count: n,
              })),
              (G = o.sYc))
            : n > 0
              ? ((U = v.intl.formatToPlainString(v.t.SJ6pPX, { count: n })), (G = o.SfG))
              : t > 0
                ? ((U = v.intl.formatToPlainString(v.t.h4pFfU, { count: t })), (G = 1 === t ? o.xfq : o.sYc))
                : ((U = v.intl.formatToPlainString(v.t["89ihS8"], { count: L })), (G = o.PtA)),
            n > 0 && L === n
                ? (B = (0, l.jsxs)("div", {
                      className: i()(j.cR, j.JZ),
                      children: [
                          (0, l.jsx)(f.Ay, {
                              className: j.xn,
                              src: R[0].proxy_url,
                              width: 56,
                              height: 56,
                          }),
                          (0, l.jsx)(o.SfG, {
                              className: j.uZ,
                              size: "md",
                              color: "white",
                          }),
                      ],
                  }))
                : L > 0
                  ? (B = (0, l.jsx)("div", {
                        className: j.cR,
                        children: (0, l.jsx)(f.Ay, {
                            src: R[0].proxy_url,
                            width: 56,
                            height: 56,
                        }),
                    }))
                  : (null == (A = D[0]) || null == (O = A.thumbnail) ? void 0 : O.proxyURL) != null &&
                    (B = (0, l.jsx)("div", {
                        className: j.cR,
                        children: (0, l.jsx)(f.Ay, {
                            src: D[0].thumbnail.proxyURL,
                            width: 56,
                            height: 56,
                        }),
                    }));
    }
    return (
        L > 1 &&
            null != B &&
            (B = (0, l.jsxs)("div", {
                className: j.EW,
                children: [
                    (0, l.jsx)(h.Ay, {
                        mask: h.Ay.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                        width: 56,
                        height: 56,
                        children: B,
                    }),
                    (0, l.jsxs)(o.Text, {
                        className: j.mB,
                        variant: "text-xs/semibold",
                        color: "text-default",
                        children: ["+", L - 1],
                    }),
                ],
            })),
        (0, l.jsxs)("div", {
            className: j.sq,
            children: [
                (0, l.jsxs)("div", {
                    className: j.FG,
                    children: [
                        null != N &&
                            (0, l.jsx)(o.Text, {
                                variant: "text-md/medium",
                                children: v.intl.string(C.default.goiR2u),
                            }),
                        E &&
                            (0, l.jsx)(b.Ay, {
                                className: i()(j.vp, L > 0 && j.NL),
                                message: S,
                                content: V,
                                compact: k,
                            }),
                        L > 0 &&
                            (0, l.jsxs)("div", {
                                className: j.kp,
                                children: [
                                    null != G &&
                                        (0, l.jsx)(G, {
                                            size: "custom",
                                            width: E ? 18 : 20,
                                            color: o.LU0.colors.TEXT_MUTED,
                                        }),
                                    null != U &&
                                        (0, l.jsx)(o.Text, {
                                            variant: E ? "text-sm/medium" : "text-md/medium",
                                            color: "text-muted",
                                            children: U,
                                        }),
                                ],
                            }),
                    ],
                }),
                B,
                null != N &&
                    (0, l.jsx)("div", {
                        className: j.cR,
                        children: (0, l.jsx)("img", {
                            alt: "",
                            style: { backgroundColor: _ },
                            width: 56,
                            height: 56,
                            src: (0, d.OW)(null != (n = N.cardId) ? n : 0),
                        }),
                    }),
            ],
        })
    );
}
