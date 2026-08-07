i.d(t, { m: () => C });
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
    E = i(308991);
function _() {
    return (0, l.jsx)("div", {
        className: E.w,
        children: (0, l.jsx)(c.y, { type: c.y.Type.SPINNING_CIRCLE, "aria-label": f.intl.string(f.t.ZTNur7) }),
    });
}
function g() {
    return (0, l.jsxs)("div", {
        className: E.w,
        role: "alert",
        children: [
            (0, l.jsx)(o.i, { size: "md", color: "text-feedback-critical", "aria-hidden": !0 }),
            (0, l.jsx)(s.E, { variant: "text-sm/normal", color: "text-muted", children: f.intl.string(f.t.F8FvUy) }),
        ],
    });
}
var I = i(101464);
function h(e) {
    return { heading: e.heading ?? "" };
}
var S = i(17928),
    m = i(967198),
    A = i(488428),
    D = i(597098),
    p = i(486020),
    v = i(652215),
    T = i(34250);
let C = {
    [n.a.IMAGE_TEXT]: {
        View: function (e) {
            let { widget: t } = e,
                { text: i, image_hash: n } = t.config,
                a = (0, S.bG)([m.A], () => m.A.getGuildId());
            return (0, l.jsxs)("div", {
                className: T.k,
                children: [
                    null != n &&
                        null != a &&
                        (0, l.jsx)("img", {
                            className: T.S,
                            src: (function (e, t, i) {
                                let n = p.QB ? "webp" : "jpg",
                                    { CDN_HOST: l, API_ENDPOINT: a } = window.GLOBAL_ENV,
                                    r = v.Rsh.GUILD_SPACE_IMAGE_TEXT_WIDGET_IMAGE(e, t, i, n),
                                    s = null != l ? `https://${l}${r}` : location.protocol + a + r,
                                    d = { size: (0, D.kr)(500 * (0, D.mZ)()) };
                                return "jpg" === n && (d.quality = "lossless"), (s += `?${A.stringify(d)}`);
                            })(a, t.id, n),
                            alt: "",
                        }),
                    null != i && (0, l.jsx)(s.E, { variant: "text-sm/normal", color: "text-default", children: i }),
                ],
            });
        },
    },
    [n.a.LEADERBOARD]: {
        View: function (e) {
            var t;
            let i,
                { widget: n, hydration: a } = e;
            if (null == a || "idle" === a.status || "loading" === a.status) return (0, l.jsx)(_, {});
            if ("error" === a.status) return (0, l.jsx)(g, {});
            let { heading: d } = h(n.config),
                { entries: u } =
                    ((t = a.data),
                    {
                        entries: (Array.isArray((i = t?.entries)) ? i : []).filter(
                            (e) => null != e && Number.isFinite(e.score),
                        ),
                    });
            return (0, l.jsxs)("div", {
                className: I.Up,
                children: [
                    "" !== d && (0, l.jsx)(r.D, { variant: "heading-md/semibold", color: "text-strong", children: d }),
                    (0, l.jsx)("ol", {
                        className: I.p_,
                        children: u.map((e, t) =>
                            (0, l.jsxs)(
                                "li",
                                {
                                    className: I.nM,
                                    children: [
                                        (0, l.jsx)(s.E, {
                                            variant: "text-sm/medium",
                                            color: "text-muted",
                                            className: I.Tm,
                                            children: t + 1,
                                        }),
                                        (0, l.jsx)(s.E, {
                                            variant: "text-sm/normal",
                                            color: "text-strong",
                                            className: I.UU,
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
            let { config: t, commit: i, cancel: n } = e,
                [r, s] = a.useState(() => h(t));
            return (0, l.jsxs)("div", {
                className: I.hc,
                children: [
                    (0, l.jsx)(d.k, { label: "Heading", value: r.heading, onChange: (e) => s({ heading: e }) }),
                    (0, l.jsxs)("div", {
                        className: I.KA,
                        children: [
                            (0, l.jsx)(u.$, { variant: "secondary", text: f.intl.string(f.t["ETE/oC"]), onClick: n }),
                            (0, l.jsx)(u.$, {
                                variant: "primary",
                                text: f.intl.string(f.t["R3BPH+"]),
                                onClick: () => i(r),
                            }),
                        ],
                    }),
                ],
            });
        },
    },
};
