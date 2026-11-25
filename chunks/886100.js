t.d(n, { kH: () => es });
var l,
    s = t(477900),
    a = t(582128),
    i = t(314266),
    r = t(598748),
    o =
        (((l = {}).WIDGET_TOP_HERO = "widget_top_hero"),
        (l.WIDGET_TOP_CONTAINED = "widget_top_contained"),
        (l.WIDGET_BOTTOM_STATS = "widget_bottom_stats"),
        (l.WIDGET_BOTTOM_PROGRESS = "widget_bottom_progress"),
        (l.WIDGET_BOTTOM_COLLECTION = "widget_bottom_collection"),
        (l.MINI_PROFILE_HERO_STAT = "mini_profile_hero_stat"),
        (l.MINI_PROFILE_CONTAINED_STAT = "mini_profile_contained_stat"),
        (l.ACTIVITY_ACCESSORY_STAT = "activity_accessory_stat"),
        (l.ADD_WIDGET_PREVIEW_HERO = "add_widget_preview_hero"),
        (l.ADD_WIDGET_PREVIEW_CONTAINED = "add_widget_preview_contained"),
        l),
    u = t(108089);
let c = a.createContext(null);
function d() {
    let e = a.useContext(c);
    if (null == e) throw Error("useLayoutRendererContext must be used within a LayoutRenderer");
    return e;
}
var m = t(503698),
    x = t.n(m),
    h = t(834730),
    p = t(779300),
    j = t(835792);
function g(e) {
    let { variant: n, media: t, alt: l } = e;
    return null != t
        ? (0, s.jsx)(h.E, {
              variant: n,
              children: (0, s.jsx)("img", {
                  src: t.url,
                  width: t.width,
                  height: t.height,
                  className: j.K,
                  alt: l ?? "",
              }),
          })
        : null;
}
var f = t(436385);
function v(e) {
    let { width: n, variant: t, className: l } = e;
    return (0, s.jsx)(h.E, {
        variant: t ?? "body-md/normal",
        children: (0, s.jsx)("div", {
            className: x()(f.z, l),
            style: null != n ? { "--skeleton-text-width": n } : void 0,
            children: (0, s.jsx)("div", { className: f.v }),
        }),
    });
}
var N = t(33683);
function I(e) {
    let {
            component: n,
            variant: t,
            color: l,
            required: a = !1,
            className: i,
            lineClamp: r,
            imagePosition: o = "right",
            hideLabel: u = !1,
        } = e,
        { resolveFieldValue: c, numberFormat: m, renderText: j } = d(),
        f = (0, p.Hx)(n, c, m, a, u);
    if ("hidden" === f.status) return null;
    if ("skeleton" === f.status) return (0, s.jsx)(v, { variant: t, className: i });
    let I = null != f.icon ? (0, s.jsx)(g, { media: f.icon, variant: t }) : null;
    return (0, s.jsxs)("div", {
        className: x()(N.k, i),
        children: [
            null != I && "left" === o ? I : null,
            (0, s.jsx)(h.E, { variant: t, color: l, lineClamp: r, children: j?.(f.text) ?? f.text }),
            null != I && "right" === o ? I : null,
        ],
    });
}
var b = t(640056);
function E(e) {
    let { variant: n = "default", textColor: t } = e,
        { surfaceConfig: l } = d(),
        a = "badge" === n;
    return (0, s.jsx)("div", {
        className: b.z,
        children: (0, s.jsx)(I, {
            component: l.components.stat,
            className: b.Q,
            variant: a ? "body-xs/normal" : "body-xs/semibold",
            color: t,
            hideLabel: a,
            required: !0,
            imagePosition: "left",
            lineClamp: 1,
        }),
    });
}
var A = t(835887);
function C(e) {
    let { className: n } = e;
    return (0, s.jsx)("div", { className: x()(A.z, n) });
}
var T = t(398251),
    y = t(836032);
function _(e) {
    let { small: n = !1, image: t } = e;
    return (0, s.jsxs)("div", {
        className: x()(y.kL, { [y.PG]: n }),
        children: [
            (0, s.jsxs)("div", {
                className: y.Qs,
                children: [
                    (0, s.jsx)("div", { className: y.wx }),
                    (0, s.jsx)("div", { className: y.yF }),
                    (0, s.jsxs)("div", {
                        className: y.M1,
                        children: [
                            (0, s.jsx)("div", { className: y.dJ }),
                            (0, s.jsx)("div", { className: y.dJ }),
                            (0, s.jsx)("div", { className: y.dJ }),
                            (0, s.jsx)("div", { className: y.dJ }),
                            (0, s.jsx)("div", { className: y.dJ }),
                            (0, s.jsx)("div", { className: y.dJ }),
                        ],
                    }),
                ],
            }),
            t,
        ],
    });
}
var S = t(170118);
function O(e) {
    let { small: n = !1 } = e,
        { surfaceConfig: t, resolveFieldValue: l } = d(),
        a = l(t.components.contained_image?.fields.image, [T.o.MEDIA]);
    return (0, s.jsx)(_, {
        small: n,
        image: (0, s.jsx)("div", {
            className: S.ZS,
            children:
                null != a
                    ? (0, s.jsx)("img", { alt: "", src: a.media.url, className: S.Sl })
                    : (0, s.jsx)(C, { className: S.h2 }),
        }),
    });
}
function R(e) {
    let { media: n, ...t } = e;
    return (0, s.jsx)("img", {
        ...t,
        src: n.url,
        style: { ...e.style, width: "100%", aspectRatio: e.media.width / e.media.height },
        alt: e.alt ?? "",
    });
}
var M = t(506619),
    k = t(15555);
function G(e) {
    let { surfaceConfig: n, resolveFieldValue: t } = d(),
        l = t(n.components.hero_image?.fields.image, [T.o.MEDIA]);
    return (0, s.jsx)(_, {
        ...e,
        image: (0, s.jsx)("div", {
            className: k.ZS,
            children:
                null != l
                    ? (0, s.jsx)(R, { alt: "", media: l.media, className: x()(k.c8, M.g) })
                    : (0, s.jsx)(C, { className: k.pm }),
        }),
    });
}
var P = t(123292),
    D = t(402233);
function w(e) {
    let { image: n } = e,
        { header: t, surfaceConfig: l, onClick: a } = d();
    return (0, s.jsxs)("div", {
        className: D.zr,
        children: [
            (0, s.jsxs)("div", {
                className: D.rf,
                children: [
                    t,
                    (0, s.jsxs)("div", {
                        className: D.Qs,
                        children: [
                            (0, s.jsx)(I, {
                                component: l.components.stat,
                                variant: "heading-xs/semibold",
                                lineClamp: 1,
                                required: !0,
                            }),
                            (0, s.jsx)(P.Q, {
                                textVariant: "body-xs/normal",
                                variant: "secondary",
                                text: "View All Stats",
                                onClick: a,
                            }),
                        ],
                    }),
                ],
            }),
            n,
        ],
    });
}
var L = t(425367);
function U() {
    let { surfaceConfig: e, resolveFieldValue: n } = d(),
        t = n(e.components.contained_image?.fields.image, [T.o.MEDIA]);
    return (0, s.jsx)(w, {
        image: (0, s.jsx)("div", {
            className: L.ZS,
            children:
                null != t
                    ? (0, s.jsx)("img", { alt: "", src: t.media.url, className: L.Sl })
                    : (0, s.jsx)(C, { className: L.h2 }),
        }),
    });
}
var B = t(853512);
function z() {
    let { surfaceConfig: e, resolveFieldValue: n } = d(),
        t = n(e.components.hero_image?.fields.image, [T.o.MEDIA]);
    return (0, s.jsx)(w, {
        image:
            null != t
                ? (0, s.jsx)("div", {
                      className: B.Xr,
                      children: (0, s.jsx)(R, { media: t.media, className: x()(B.c8, M.g) }),
                  })
                : (0, s.jsx)(C, { className: B.pm }),
    });
}
var V = t(193396);
function W(e) {
    let { resolveFieldValue: n } = d(),
        t = n(e.componentConfig?.fields.image, [T.o.MEDIA]),
        l = n(e.componentConfig?.fields.name, [T.o.STRING]),
        a = n(e.componentConfig?.fields.description, [T.o.STRING]);
    return (0, s.jsxs)("div", {
        className: V.E4,
        children: [
            null != t
                ? (0, s.jsx)("img", { src: t.media.url, className: V.bA, alt: "" })
                : (0, s.jsx)(C, { className: V.ET }),
            (0, s.jsxs)("div", {
                className: V.Vx,
                children: [
                    null != l
                        ? (0, s.jsx)(h.E, { variant: "body-sm/medium", lineClamp: 2, children: l.value })
                        : (0, s.jsx)(v, { variant: "body-sm/medium", width: "6ch" }),
                    null != a
                        ? (0, s.jsx)(h.E, {
                              variant: "body-xs/medium",
                              color: "text-subtle",
                              lineClamp: 2,
                              children: a.value,
                          })
                        : (0, s.jsx)(v, { variant: "body-xs/medium", width: "10ch" }),
                ],
            }),
        ],
    });
}
function F() {
    let { surfaceConfig: e } = d();
    return (0, s.jsxs)("div", {
        className: V.zr,
        children: [
            (0, s.jsx)(W, { componentConfig: e.components.item_1 }),
            (0, s.jsx)(W, { componentConfig: e.components.item_2 }),
            (0, s.jsx)(W, { componentConfig: e.components.item_3 }),
            (0, s.jsx)(W, { componentConfig: e.components.item_4 }),
        ],
    });
}
var H = t(141255);
function J() {
    let { surfaceConfig: e, resolveFieldValue: n } = d(),
        t = a.useId(),
        l = n(e.components.objective?.fields.image, [T.o.MEDIA]),
        i = n(e.components.objective?.fields.name, [T.o.STRING]),
        r = n(e.components.objective?.fields.description, [T.o.STRING]),
        o = n(e.components.progress?.fields.current, [T.o.NUMBER]),
        u = n(e.components.progress?.fields.max, [T.o.NUMBER]),
        c = (0, p.eq)(o, u);
    return (0, s.jsxs)("div", {
        className: H.zr,
        children: [
            null != l
                ? (0, s.jsx)("img", { src: l.media.url, className: H.Sl, alt: "" })
                : (0, s.jsx)(C, { className: H.Sl }),
            (0, s.jsxs)("div", {
                className: H.Qs,
                children: [
                    (0, s.jsx)("div", {
                        className: H.L$,
                        role: "progressbar",
                        "aria-labelledby": t,
                        "aria-valuenow": o?.value ?? 0,
                        "aria-valuemax": u?.value ?? 1,
                        "aria-valuetext": null != u && null != o ? `${o.value} of ${u.value}` : void 0,
                        children: (0, s.jsx)("div", { className: H.qB, style: { "--custom-progress": `${c}%` } }),
                    }),
                    (0, s.jsxs)("div", {
                        className: H.P_,
                        children: [
                            (0, s.jsxs)("div", {
                                className: H.n_,
                                children: [
                                    null != i
                                        ? (0, s.jsx)(h.E, {
                                              tag: "div",
                                              variant: "heading-xs/medium",
                                              id: t,
                                              lineClamp: 2,
                                              children: i.value,
                                          })
                                        : (0, s.jsx)(v, { variant: "heading-xs/medium" }),
                                    null != r
                                        ? (0, s.jsx)(h.E, {
                                              variant: "body-xs/medium",
                                              color: "text-subtle",
                                              lineClamp: 2,
                                              children: r.value,
                                          })
                                        : (0, s.jsx)(v, { variant: "body-xs/medium" }),
                                ],
                            }),
                            null != o
                                ? (0, s.jsx)(h.E, {
                                      variant: "body-sm/medium",
                                      lineClamp: 1,
                                      className: H.l_,
                                      children: null != u ? `${o.value}/${u.value}` : `${(0, p.rr)(o.value)}%`,
                                  })
                                : (0, s.jsx)(v, { variant: "body-sm/medium", width: "4ch" }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var K = t(620376);
function $(e) {
    let { component: n, required: t = !1 } = e,
        { resolveFieldValue: l, numberFormat: a, durationFormat: i, renderText: r } = d(),
        o = (0, p.CZ)(
            n,
            l,
            a,
            (e) => {
                let n, t;
                return i.format(
                    ((t = Math.floor((n = Number.isFinite(e) ? Math.max(0, Math.floor(e)) : 0) / 36e5)),
                    {
                        hours: t,
                        minutes: Math.floor(n / 6e4) % 60,
                        seconds: Math.floor(n / 1e3) % 60,
                        milliseconds: n % 1e3,
                    }),
                );
            },
            t,
        );
    return null == o
        ? null
        : (0, s.jsxs)("div", {
              className: K.k,
              children: [
                  "value" === o.value.status
                      ? (0, s.jsxs)("div", {
                            className: K.U,
                            children: [
                                (0, s.jsx)(h.E, {
                                    variant: "body-sm/medium",
                                    lineClamp: 2,
                                    children: r?.(o.value.text) ?? o.value.text,
                                }),
                                null != o.value.icon &&
                                    (0, s.jsx)(g, { variant: "body-sm/medium", media: o.value.icon }),
                            ],
                        })
                      : (0, s.jsx)(v, { variant: "body-sm/medium", width: "8ch" }),
                  "value" === o.label.status
                      ? (0, s.jsx)(h.E, {
                            variant: "body-xs/normal",
                            color: "text-subtle",
                            lineClamp: 2,
                            children: o.label.text,
                        })
                      : "skeleton" === o.label.status
                        ? (0, s.jsx)(v, { variant: "body-xs/normal", width: "6ch" })
                        : null,
              ],
          });
}
var q = t(374205);
function Y() {
    let { surfaceConfig: e } = d();
    return (0, s.jsxs)("div", {
        className: q.w,
        children: [
            (0, s.jsx)($, { component: e.components.stat_1, required: !0 }),
            (0, s.jsx)($, { component: e.components.stat_2, required: !0 }),
            (0, s.jsx)($, { component: e.components.stat_3, required: !0 }),
            (0, s.jsx)($, { component: e.components.stat_4, required: !0 }),
            (0, s.jsx)($, { component: e.components.stat_5, required: !0 }),
            (0, s.jsx)($, { component: e.components.stat_6, required: !0 }),
        ],
    });
}
var X = t(892203);
function Z() {
    let { surfaceConfig: e } = d();
    return (0, s.jsxs)("div", {
        className: X.Q,
        children: [
            (0, s.jsx)(I, {
                component: e.components.title,
                variant: "body-lg/medium",
                lineClamp: 2,
                required: !0,
                className: X.D,
            }),
            (0, s.jsx)(I, {
                component: e.components.subtitle_1,
                variant: "body-sm/normal",
                color: "text-subtle",
                lineClamp: 2,
            }),
            (0, s.jsx)(I, {
                component: e.components.subtitle_2,
                variant: "body-sm/normal",
                color: "text-subtle",
                lineClamp: 2,
            }),
            (0, s.jsx)(I, {
                component: e.components.subtitle_3,
                variant: "body-sm/normal",
                color: "text-subtle",
                lineClamp: 2,
            }),
        ],
    });
}
var Q = t(828575);
function ee() {
    let { surfaceConfig: e, resolveFieldValue: n, header: t } = d(),
        l = n(e.components.contained_image?.fields.image, [T.o.MEDIA]);
    return (0, s.jsxs)("div", {
        className: Q.zr,
        children: [
            null != t && (0, s.jsx)("div", { className: Q.wx, children: t }),
            (0, s.jsx)(Z, {}),
            null != l
                ? (0, s.jsx)("img", { alt: "", src: l.media.url, className: Q.Sl })
                : (0, s.jsx)(C, { className: Q.h2 }),
        ],
    });
}
var en = t(775176);
function et() {
    let { surfaceConfig: e, resolveFieldValue: n, header: t } = d(),
        l = n(e.components.hero_image?.fields.image, [T.o.MEDIA]);
    return (0, s.jsxs)("div", {
        className: en.zr,
        children: [
            null != t && (0, s.jsx)("div", { className: en.wx, children: t }),
            (0, s.jsx)("div", { className: en.hQ, children: (0, s.jsx)(Z, {}) }),
            null != l
                ? (0, s.jsx)("div", {
                      className: en._j,
                      children: (0, s.jsx)("div", {
                          className: en.PX,
                          children: (0, s.jsx)("img", { alt: "", src: l.media.url, className: x()(en.Sl, M.g) }),
                      }),
                  })
                : (0, s.jsx)(C, { className: en.h2 }),
        ],
    });
}
let el = {
    [r.m.WIDGET_TOP]: {
        [o.WIDGET_TOP_HERO]: () => (0, s.jsx)(et, {}),
        [o.WIDGET_TOP_CONTAINED]: () => (0, s.jsx)(ee, {}),
    },
    [r.m.WIDGET_BOTTOM]: {
        [o.WIDGET_BOTTOM_STATS]: () => (0, s.jsx)(Y, {}),
        [o.WIDGET_BOTTOM_PROGRESS]: () => (0, s.jsx)(J, {}),
        [o.WIDGET_BOTTOM_COLLECTION]: () => (0, s.jsx)(F, {}),
    },
    [r.m.MINI_PROFILE]: {
        [o.MINI_PROFILE_HERO_STAT]: () => (0, s.jsx)(z, {}),
        [o.MINI_PROFILE_CONTAINED_STAT]: () => (0, s.jsx)(U, {}),
    },
    [r.m.ACTIVITY_ACCESSORY]: { [o.ACTIVITY_ACCESSORY_STAT]: (e) => (0, s.jsx)(E, { ...e }) },
    [r.m.ADD_WIDGET_PREVIEW]: {
        [o.ADD_WIDGET_PREVIEW_HERO]: (e) => (0, s.jsx)(G, { ...e }),
        [o.ADD_WIDGET_PREVIEW_CONTAINED]: (e) => (0, s.jsx)(O, { ...e }),
    },
};
function es(e) {
    let {
            surface: n,
            surfaceConfig: t,
            resolutionContext: l,
            locale: r,
            header: o,
            onClick: d,
            renderText: m,
            layoutProps: x,
        } = e,
        h = a.useMemo(() => (0, u.e)(r), [r]),
        p = a.useMemo(() => new i.Y(r, { style: "narrow" }), [r]);
    if (null == t) return null;
    let j = el[n]?.[t.layout];
    return null == j
        ? null
        : (0, s.jsx)(c.Provider, {
              value: {
                  surfaceConfig: t,
                  locale: r,
                  numberFormat: h,
                  durationFormat: p,
                  header: o,
                  onClick: d,
                  renderText: m,
                  resolutionContext: l,
                  resolveFieldValue: (0, T.J)(l),
              },
              children: j(x),
          });
}
