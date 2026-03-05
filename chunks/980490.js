n.d(t, { q: () => T });
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
    m = n(352505),
    g = n(619517),
    f = n(448381),
    x = n(465364),
    p = n(291812),
    C = n(253932),
    A = n(53228),
    b = n(985018),
    v = n(931059),
    w = n(9378);
function T(e) {
    let { message: t, forwardOptions: n, channel: s } = e,
        T = C.hH.useSetting(),
        {
            attachments: j,
            embeds: k,
            hasContent: y,
            contentMessage: R,
        } = (0, A.A)({ message: t, channel: s, forwardOptions: n }),
        S =
            R.components.length > 0 && R.components[0].type === u.I5.CHECKPOINT_CARD
                ? R.components[0].checkpointData
                : null,
        M = c.f[S?.cardId ?? 0],
        N = (0, o.rdh)(M.primaryColor).hex(),
        _ = m.m.useExperiment({ location: "forward_preview" }).enabled,
        P = a.useMemo(
            () =>
                y
                    ? (0, x.Ay)(t, {
                          formatInline: !0,
                          allowLinks: !0,
                          allowHeading: !0,
                          allowList: !0,
                          allowGameMentions: _,
                          hideSimpleEmbedContent: !1,
                          contentMessage: R,
                      }).content
                    : null,
            [R, y, t, _],
        ),
        D = j.length,
        E = null,
        I = null,
        F = null;
    if (D > 0 || k.length > 0) {
        let e = (0, r.countBy)(j, (e) => (0, f.NI)(e, !0)),
            t = e.IMAGE ?? 0,
            n = e.VIDEO ?? 0;
        t > 0 && n > 0
            ? ((E = b.intl.formatToPlainString(b.t.Lr0Top, { image_count: t, video_count: n })), (I = o.sYc))
            : n > 0
              ? ((E = b.intl.formatToPlainString(b.t.SJ6pPX, { count: n })), (I = o.SfG))
              : t > 0
                ? ((E = b.intl.formatToPlainString(b.t.h4pFfU, { count: t })), (I = 1 === t ? o.xfq : o.sYc))
                : ((E = b.intl.formatToPlainString(b.t["89ihS8"], { count: D })), (I = o.PtA)),
            n > 0 && D === n
                ? (F = (0, l.jsxs)("div", {
                      className: i()(w.cR, w.JZ),
                      children: [
                          (0, l.jsx)(g.Ay, { className: w.xn, src: j[0].proxy_url, width: 56, height: 56 }),
                          (0, l.jsx)(o.SfG, { className: w.uZ, size: "md", color: "white" }),
                      ],
                  }))
                : D > 0
                  ? (F = (0, l.jsx)("div", {
                        className: w.cR,
                        children: (0, l.jsx)(g.Ay, { src: j[0].proxy_url, width: 56, height: 56 }),
                    }))
                  : k[0]?.thumbnail?.proxyURL != null &&
                    (F = (0, l.jsx)("div", {
                        className: w.cR,
                        children: (0, l.jsx)(g.Ay, { src: k[0].thumbnail.proxyURL, width: 56, height: 56 }),
                    }));
    }
    return (
        D > 1 &&
            null != F &&
            (F = (0, l.jsxs)("div", {
                className: w.EW,
                children: [
                    (0, l.jsx)(h.Ay, {
                        mask: h.Ay.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                        width: 56,
                        height: 56,
                        children: F,
                    }),
                    (0, l.jsxs)(o.Text, {
                        className: w.mB,
                        variant: "text-xs/semibold",
                        color: "text-default",
                        children: ["+", D - 1],
                    }),
                ],
            })),
        (0, l.jsxs)("div", {
            className: w.sq,
            children: [
                (0, l.jsxs)("div", {
                    className: w.FG,
                    children: [
                        null != S &&
                            (0, l.jsx)(o.Text, {
                                variant: "text-md/medium",
                                children: b.intl.string(v.default.goiR2u),
                            }),
                        y &&
                            (0, l.jsx)(p.Ay, {
                                className: i()(w.vp, D > 0 && w.NL),
                                message: t,
                                content: P,
                                compact: T,
                            }),
                        D > 0 &&
                            (0, l.jsxs)("div", {
                                className: w.kp,
                                children: [
                                    null != I &&
                                        (0, l.jsx)(I, {
                                            size: "custom",
                                            width: y ? 18 : 20,
                                            color: o.LU0.colors.TEXT_MUTED,
                                        }),
                                    null != E &&
                                        (0, l.jsx)(o.Text, {
                                            variant: y ? "text-sm/medium" : "text-md/medium",
                                            color: "text-muted",
                                            children: E,
                                        }),
                                ],
                            }),
                    ],
                }),
                F,
                null != S &&
                    (0, l.jsx)("div", {
                        className: w.cR,
                        children: (0, l.jsx)("img", {
                            alt: "",
                            style: { backgroundColor: N },
                            width: 56,
                            height: 56,
                            src: (0, d.OW)(S.cardId ?? 0),
                        }),
                    }),
            ],
        })
    );
}
