i.d(t, { m: () => W });
var n = i(593673),
    l = i(477900),
    a = i(582128),
    r = i(297264),
    s = i(834730),
    d = i(95477),
    u = i(821609),
    c = i(289873),
    o = i(738188),
    f = i(375708),
    g = i(308991);
function E() {
    return (0, l.jsx)("div", {
        className: g.w,
        children: (0, l.jsx)(c.y, { type: c.y.Type.SPINNING_CIRCLE, "aria-label": f.intl.string(f.t.ZTNur7) }),
    });
}
function h() {
    return (0, l.jsxs)("div", {
        className: g.w,
        role: "alert",
        children: [
            (0, l.jsx)(o.i, { size: "md", color: "text-feedback-critical", "aria-hidden": !0 }),
            (0, l.jsx)(s.E, { variant: "text-sm/normal", color: "text-muted", children: f.intl.string(f.t.F8FvUy) }),
        ],
    });
}
var _ = i(101464);
function I(e) {
    return { heading: e.heading ?? "" };
}
var m = i(17928),
    S = i(331322),
    A = i(452027),
    p = i(260598),
    D = i(825484),
    v = i(866665),
    x = i(408278),
    C = i(241326),
    T = i(683071),
    y = i(2553),
    G = i(405810),
    j = i(967198),
    R = i(488428),
    U = i(597098),
    L = i(486020),
    P = i(652215);
function b(e, t, i) {
    let n = L.QB ? "webp" : "jpg",
        { CDN_HOST: l, API_ENDPOINT: a } = window.GLOBAL_ENV,
        r = P.Rsh.GUILD_SPACE_IMAGE_TEXT_WIDGET_IMAGE(e, t, i, n),
        s = null != l ? `https://${l}${r}` : location.protocol + a + r,
        d = { size: (0, U.kr)(500 * (0, U.mZ)()) };
    return "jpg" === n && (d.quality = "lossless"), (s += `?${R.stringify(d)}`);
}
var w = i(983283),
    N = i(596127),
    M = i(34250);
let W = {
    [n.a.IMAGE_TEXT]: {
        View: function (e) {
            let { widget: t, guildSpaceMode: i } = e,
                { title: n, text: a, image_hash: r } = t.config,
                d = (0, m.bG)([j.A], () => j.A.getGuildId()),
                u = "edit" === i ? t.config.image : void 0,
                c = void 0 !== u ? u : null != r && null != d ? b(d, t.id, r) : null;
            return (0, l.jsxs)("div", {
                className: M.k,
                children: [
                    null != c && (0, l.jsx)("img", { className: M.S, src: c, alt: "" }),
                    null != n && (0, l.jsx)(s.E, { variant: "text-md/semibold", color: "text-default", children: n }),
                    null != a && (0, l.jsx)(s.E, { variant: "text-sm/normal", color: "text-default", children: a }),
                ],
            });
        },
        Edit: function (e) {
            let { widget: t, commit: i, cancel: r } = e,
                s = t.config,
                [c, o] = a.useState(s.title ?? ""),
                [g, E] = a.useState(s.text ?? ""),
                [h, _] = a.useState(s.image),
                [I, R] = a.useState(null),
                U = (0, m.bG)([j.A], () => j.A.getGuildId()),
                L = void 0 !== h ? h : null != s.image_hash && null != U ? b(U, t.id, s.image_hash) : null;
            return (0, l.jsxs)(S.B, {
                gap: 16,
                children: [
                    (0, l.jsx)(d.k, {
                        label: f.intl.string(f.t.gnwWrx),
                        value: c,
                        onChange: function (e) {
                            R(null), o(e);
                        },
                        maxLength: 100,
                        showCharacterCount: !0,
                    }),
                    (0, l.jsx)(A.D, {
                        label: f.intl.string(f.t.X4IxWL),
                        children: (0, l.jsxs)(S.B, {
                            gap: 16,
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            className: N.B,
                            children: [
                                (0, l.jsxs)(S.B, {
                                    gap: 8,
                                    direction: "horizontal",
                                    children: [
                                        (0, l.jsx)(G.A, {
                                            variant: "secondary",
                                            text: f.intl.string(f.t["MsUY/S"]),
                                            onChange: function (e) {
                                                R(null), _(e);
                                            },
                                            maxFileSizeBytes: 0xa00000,
                                            onFileSizeError: () => (0, y.A)(0xa00000),
                                        }),
                                        null != L &&
                                            (0, l.jsx)(v.m, {
                                                text: f.intl.string(f.t.N86XcP),
                                                ariaHidden: !0,
                                                children: (0, l.jsx)(x.K, {
                                                    variant: "critical-secondary",
                                                    icon: C.u,
                                                    onClick: function () {
                                                        R(null), _(null);
                                                    },
                                                    "aria-label": f.intl.string(f.t.N86XcP),
                                                }),
                                            }),
                                    ],
                                }),
                                null != L && (0, l.jsx)("img", { className: N.V, src: L, alt: "" }),
                            ],
                        }),
                    }),
                    (0, l.jsx)(p.f, {
                        label: f.intl.string(f.t.COGMNC),
                        value: g,
                        onChange: function (e) {
                            R(null), E(e);
                        },
                        rows: 3,
                        autosize: !0,
                        maxLength: 500,
                        showCharacterCount: !0,
                    }),
                    null != I &&
                        (0, l.jsx)("div", {
                            role: "alert",
                            children: (0, l.jsx)(T.w, { type: "critical", children: I }),
                        }),
                    (0, l.jsxs)(D.e, {
                        fullWidth: !0,
                        children: [
                            (0, l.jsx)(u.$, { variant: "secondary", text: f.intl.string(f.t["ETE/oC"]), onClick: r }),
                            (0, l.jsx)(u.$, {
                                variant: "primary",
                                text: f.intl.string(f.t["R3BPH+"]),
                                onClick: function () {
                                    let e;
                                    if (
                                        ((e = void 0 !== h ? null !== h : null != s.image_hash),
                                        0 === g.length && !e && (R(f.intl.string(w.default.zleX9q)), 1))
                                    )
                                        return;
                                    let t = {
                                        type: n.a.IMAGE_TEXT,
                                        image_hash: s.image_hash,
                                        text: g.length > 0 ? g : null,
                                        title: c.length > 0 ? c : null,
                                    };
                                    void 0 !== h && (t.image = h), i(t);
                                },
                            }),
                        ],
                    }),
                ],
            });
        },
    },
    [n.a.LEADERBOARD]: {
        View: function (e) {
            var t;
            let i,
                { widget: n, hydration: a } = e;
            if (null == a || "idle" === a.status || "loading" === a.status) return (0, l.jsx)(E, {});
            if ("error" === a.status) return (0, l.jsx)(h, {});
            let { heading: d } = I(n.config),
                { entries: u } =
                    ((t = a.data),
                    {
                        entries: (Array.isArray((i = t?.entries)) ? i : []).filter(
                            (e) => null != e && Number.isFinite(e.score),
                        ),
                    });
            return (0, l.jsxs)("div", {
                className: _.Up,
                children: [
                    "" !== d && (0, l.jsx)(r.D, { variant: "heading-md/semibold", color: "text-strong", children: d }),
                    (0, l.jsx)("ol", {
                        className: _.p_,
                        children: u.map((e, t) =>
                            (0, l.jsxs)(
                                "li",
                                {
                                    className: _.nM,
                                    children: [
                                        (0, l.jsx)(s.E, {
                                            variant: "text-sm/medium",
                                            color: "text-muted",
                                            className: _.Tm,
                                            children: t + 1,
                                        }),
                                        (0, l.jsx)(s.E, {
                                            variant: "text-sm/normal",
                                            color: "text-strong",
                                            className: _.UU,
                                            children: e.name,
                                        }),
                                        (0, l.jsx)(s.E, {
                                            variant: "text-sm/medium",
                                            color: "text-muted",
                                            children: e.score.toLocaleString(),
                                        }),
                                    ],
                                },
                                e.id,
                            ),
                        ),
                    }),
                ],
            });
        },
        Edit: function (e) {
            let { widget: t, commit: i, cancel: n } = e,
                r = t.config,
                [s, c] = a.useState(() => I(r));
            return (0, l.jsxs)("div", {
                className: _.hc,
                children: [
                    (0, l.jsx)(d.k, { label: "Heading", value: s.heading, onChange: (e) => c({ heading: e }) }),
                    (0, l.jsxs)("div", {
                        className: _.KA,
                        children: [
                            (0, l.jsx)(u.$, { variant: "secondary", text: f.intl.string(f.t["ETE/oC"]), onClick: n }),
                            (0, l.jsx)(u.$, {
                                variant: "primary",
                                text: f.intl.string(f.t["R3BPH+"]),
                                onClick: () => i(s),
                            }),
                        ],
                    }),
                ],
            });
        },
    },
};
