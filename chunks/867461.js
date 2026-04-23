n.d(t, { l: () => y });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(834730),
    o = n(366010),
    d = n(331322),
    c = n(939249),
    u = n(365199),
    m = n(820081),
    _ = n(311907),
    h = n(827734),
    p = n(736653),
    g = n(496885),
    A = n(859703),
    f = n(890687),
    x = n(710969),
    C = n(814793),
    E = n(918338),
    I = n(270045),
    v = n(57718),
    b = n(985018),
    T = n(368774);
function S(e) {
    let { children: t, variant: n = "default" } = e;
    return (0, i.jsx)("div", {
        className: s()(T.Io, { [T.tV]: "brand" === n, "theme-light": "default" === n }),
        children: (0, i.jsx)(r.E, {
            variant: "eyebrow",
            color: "brand" === n ? "always-white" : "text-default",
            className: T.Xi,
            children: t,
        }),
    });
}
function y(e) {
    let { quest: t, isInteracting: n, location: a, sourceQuestContent: s } = e,
        y = (0, x.Ic)(t),
        N = t.userStatus?.claimedAt != null,
        j = (0, f.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" }),
        L = (0, _.bG)([A.A], () => A.A.getQuestHomeHero()),
        R = l.useMemo(() => null != L && (0, C.I0)(L, t.id), [L, t.id]),
        P = (0, p.Ay)(),
        w = (0, o.M)(P) ? "text-muted" : "always-white";
    return (0, i.jsxs)("div", {
        className: T.kL,
        children: [
            (0, i.jsx)("div", {
                className: T.IC,
                children: (0, i.jsx)(E.A, {
                    quest: t,
                    isInteracting: n,
                    imageSize: { width: 1320, height: 370 },
                    containerClassName: T.l1,
                    imageClassName: T.c8,
                }),
            }),
            (0, i.jsx)("div", { className: T.Lw }),
            (0, i.jsx)("div", {
                className: T.nX,
                children: (0, i.jsxs)("div", {
                    className: T.PG,
                    children: [
                        (0, i.jsxs)("div", {
                            className: T.mY,
                            children: [
                                (R || t.preview) &&
                                    (0, i.jsxs)(d.B, {
                                        className: T.Bv,
                                        direction: "horizontal",
                                        fullWidth: !1,
                                        gap: 8,
                                        children: [
                                            R && !y && (0, i.jsx)(S, { children: b.intl.string(b.t.Jt6u7B) }),
                                            t.preview &&
                                                (0, i.jsx)(S, {
                                                    variant: "brand",
                                                    children: b.intl.string(b.t.SKNnqq),
                                                }),
                                        ],
                                    }),
                                (0, i.jsx)(I.C, {
                                    questContent: a,
                                    quest: t,
                                    hideLearnMore: !0,
                                    shouldShowDisclosure: !0,
                                    showShareLink: !0,
                                    sourceQuestContent: s,
                                    children: (e) =>
                                        (0, i.jsx)(c.D, {
                                            ...e,
                                            className: T.iI,
                                            "aria-label": b.intl.string(b.t.DEoVWZ),
                                            children: (0, i.jsx)(u.j, {
                                                size: "md",
                                                color: "currentColor",
                                                className: T.A9,
                                            }),
                                        }),
                                }),
                            ],
                        }),
                        (0, i.jsx)(v.Ay, {
                            className: T.Iu,
                            logotypeClassName: T.ND,
                            quest: t,
                            separatorSpacing: v.C8.MEDIUM,
                            withGameTile: !1,
                        }),
                        (0, i.jsxs)("div", {
                            className: T.E_,
                            children: [
                                (0, i.jsxs)("span", {
                                    className: T.O,
                                    children: [
                                        (0, i.jsx)(r.E, {
                                            variant: "text-sm/medium",
                                            color: w,
                                            children: b.intl.string(b.t.VAbKhK),
                                        }),
                                        (0, i.jsx)(g.A, {
                                            className: T.w$,
                                            size: 16,
                                            color: h.A.unsafe_rawColors.GREEN_360.css,
                                            allowFullSizedIcon: !0,
                                            children: (0, i.jsx)(m.B, {
                                                color: h.A.unsafe_rawColors.WHITE.css,
                                                size: "custom",
                                                width: 13,
                                                height: 13,
                                            }),
                                        }),
                                        (0, i.jsx)(r.E, {
                                            variant: "text-sm/medium",
                                            color: "always-white",
                                            children:
                                                t.config.cosponsorMetadata?.name ?? t.config.messages.gamePublisher,
                                        }),
                                    ],
                                }),
                                y || N
                                    ? null
                                    : (0, i.jsx)(r.E, {
                                          variant: "text-sm/medium",
                                          color: w,
                                          children: b.intl.format(b.t["7D8r4F"], { expiryDate: j }),
                                      }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
