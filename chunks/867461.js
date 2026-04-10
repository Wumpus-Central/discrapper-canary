n.d(t, { l: () => I });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(158954),
    o = n(311907),
    d = n(827734),
    c = n(736653),
    u = n(496885),
    m = n(859703),
    _ = n(890687),
    h = n(710969),
    p = n(814793),
    g = n(918338),
    A = n(270045),
    x = n(57718),
    f = n(985018),
    C = n(389846);
function E(e) {
    let { children: t, variant: n = "default" } = e;
    return (0, i.jsx)("div", {
        className: r()(C.Io, { [C.tV]: "brand" === n, "theme-light": "default" === n }),
        children: (0, i.jsx)(a.EYj, {
            variant: "eyebrow",
            color: "brand" === n ? "always-white" : "text-default",
            className: C.Xi,
            children: t,
        }),
    });
}
function I(e) {
    let { quest: t, isInteracting: n, location: s, sourceQuestContent: r } = e,
        I = (0, h.Ic)(t),
        v = t.userStatus?.claimedAt != null,
        b = (0, _.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" }),
        T = (0, o.bG)([m.A], () => m.A.getQuestHomeHero()),
        y = l.useMemo(() => null != T && (0, p.I0)(T, t.id), [T, t.id]),
        N = (0, c.Ay)(),
        S = (0, a.Mwr)(N) ? "text-muted" : "always-white";
    return (0, i.jsxs)("div", {
        className: C.kL,
        children: [
            (0, i.jsx)("div", {
                className: C.IC,
                children: (0, i.jsx)(g.A, {
                    quest: t,
                    isInteracting: n,
                    imageSize: { width: 1320, height: 370 },
                    containerClassName: C.l1,
                    imageClassName: C.c8,
                }),
            }),
            (0, i.jsx)("div", { className: C.Lw }),
            (0, i.jsx)("div", {
                className: C.nX,
                children: (0, i.jsxs)("div", {
                    className: C.PG,
                    children: [
                        (0, i.jsxs)("div", {
                            className: C.mY,
                            children: [
                                (y || t.preview) &&
                                    (0, i.jsxs)(a.BJc, {
                                        className: C.Bv,
                                        direction: "horizontal",
                                        fullWidth: !1,
                                        gap: 8,
                                        children: [
                                            y && !I && (0, i.jsx)(E, { children: f.intl.string(f.t.Jt6u7B) }),
                                            t.preview &&
                                                (0, i.jsx)(E, {
                                                    variant: "brand",
                                                    children: f.intl.string(f.t.SKNnqq),
                                                }),
                                        ],
                                    }),
                                (0, i.jsx)(A.C, {
                                    questContent: s,
                                    quest: t,
                                    hideLearnMore: !0,
                                    shouldShowDisclosure: !0,
                                    showShareLink: !0,
                                    sourceQuestContent: r,
                                    children: (e) =>
                                        (0, i.jsx)(a.DUT, {
                                            ...e,
                                            className: C.iI,
                                            "aria-label": f.intl.string(f.t.DEoVWZ),
                                            children: (0, i.jsx)(a.jNK, {
                                                size: "md",
                                                color: "currentColor",
                                                className: C.A9,
                                            }),
                                        }),
                                }),
                            ],
                        }),
                        (0, i.jsx)(x.Ay, {
                            className: C.Iu,
                            logotypeClassName: C.ND,
                            quest: t,
                            separatorSpacing: x.C8.MEDIUM,
                            withGameTile: !1,
                        }),
                        (0, i.jsxs)("div", {
                            className: C.E_,
                            children: [
                                (0, i.jsxs)("span", {
                                    className: C.O,
                                    children: [
                                        (0, i.jsx)(a.EYj, {
                                            variant: "text-sm/medium",
                                            color: S,
                                            children: f.intl.string(f.t.VAbKhK),
                                        }),
                                        (0, i.jsx)(u.A, {
                                            className: C.w$,
                                            size: 16,
                                            color: d.A.unsafe_rawColors.GREEN_360.css,
                                            allowFullSizedIcon: !0,
                                            children: (0, i.jsx)(a.BNr, {
                                                color: d.A.unsafe_rawColors.WHITE.css,
                                                size: "custom",
                                                width: 13,
                                                height: 13,
                                            }),
                                        }),
                                        (0, i.jsx)(a.EYj, {
                                            variant: "text-sm/medium",
                                            color: "always-white",
                                            children:
                                                t.config.cosponsorMetadata?.name ?? t.config.messages.gamePublisher,
                                        }),
                                    ],
                                }),
                                I || v
                                    ? null
                                    : (0, i.jsx)(a.EYj, {
                                          variant: "text-sm/medium",
                                          color: S,
                                          children: f.intl.format(f.t["7D8r4F"], { expiryDate: b }),
                                      }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
