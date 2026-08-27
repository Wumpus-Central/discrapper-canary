"use strict";
n.d(t, { kH: () => ei });
var l,
    i = n(477900),
    s = n(582128),
    r = n(430111),
    a = n(598748),
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
    u = n(108089),
    c = n(503698),
    d = n.n(c),
    h = n(834730),
    m = n(779300),
    f = n(835792);
function p(e) {
    let { variant: t, media: n, alt: l } = e;
    return null != n
        ? (0, i.jsx)(h.E, {
              variant: t,
              children: (0, i.jsx)("img", {
                  src: n.url,
                  width: n.width,
                  height: n.height,
                  className: f.K,
                  alt: l ?? "",
              }),
          })
        : null;
}
var g = n(436385);
function x(e) {
    let { width: t, variant: n, className: l } = e;
    return (0, i.jsx)(h.E, {
        variant: n ?? "text-md/normal",
        children: (0, i.jsx)("div", {
            className: d()(g.z, l),
            style: null != t ? { "--skeleton-text-width": t } : void 0,
            children: (0, i.jsx)("div", { className: g.v }),
        }),
    });
}
var A = n(33683);
function C(e) {
    let {
            component: t,
            variant: n,
            color: l,
            required: s = !1,
            className: r,
            lineClamp: a,
            imagePosition: o = "right",
            hideLabel: u = !1,
        } = e,
        { resolveFieldValue: c, numberFormat: f, renderText: g } = en(),
        C = (0, m.Hx)(t, c, f, s, u);
    if ("hidden" === C.status) return null;
    if ("skeleton" === C.status) return (0, i.jsx)(x, { variant: n, className: r });
    let E = null != C.icon ? (0, i.jsx)(p, { media: C.icon, variant: n }) : null;
    return (0, i.jsxs)("div", {
        className: d()(A.k, r),
        children: [
            null != E && "left" === o ? E : null,
            (0, i.jsx)(h.E, { variant: n, color: l, lineClamp: a, children: g?.(C.text) ?? C.text }),
            null != E && "right" === o ? E : null,
        ],
    });
}
var E = n(640056);
function I(e) {
    let { variant: t = "default", textColor: n } = e,
        { surfaceConfig: l } = en(),
        s = "badge" === t;
    return (0, i.jsx)("div", {
        className: E.z,
        children: (0, i.jsx)(C, {
            component: l.components.stat,
            className: E.Q,
            variant: s ? "text-xs/normal" : "text-xs/semibold",
            color: n,
            hideLabel: s,
            required: !0,
            imagePosition: "left",
            lineClamp: 1,
        }),
    });
}
var y = n(835887);
function S(e) {
    let { className: t } = e;
    return (0, i.jsx)("div", { className: d()(y.z, t) });
}
var v = n(620632),
    N = n(836032);
function _(e) {
    let { small: t = !1, image: n } = e;
    return (0, i.jsxs)("div", {
        className: d()(N.kL, { [N.PG]: t }),
        children: [
            (0, i.jsxs)("div", {
                className: N.Qs,
                children: [
                    (0, i.jsx)("div", { className: N.wx }),
                    (0, i.jsx)("div", { className: N.yF }),
                    (0, i.jsxs)("div", {
                        className: N.M1,
                        children: [
                            (0, i.jsx)("div", { className: N.dJ }),
                            (0, i.jsx)("div", { className: N.dJ }),
                            (0, i.jsx)("div", { className: N.dJ }),
                            (0, i.jsx)("div", { className: N.dJ }),
                            (0, i.jsx)("div", { className: N.dJ }),
                            (0, i.jsx)("div", { className: N.dJ }),
                        ],
                    }),
                ],
            }),
            n,
        ],
    });
}
var j = n(170118);
function T(e) {
    let { small: t = !1 } = e,
        { surfaceConfig: n, resolveFieldValue: l } = en(),
        s = l(n.components.contained_image?.fields.image, [v.o.MEDIA]);
    return (0, i.jsx)(_, {
        small: t,
        image: (0, i.jsx)("div", {
            className: j.ZS,
            children:
                null != s
                    ? (0, i.jsx)("img", { alt: "", src: s.media.url, className: j.Sl })
                    : (0, i.jsx)(S, { className: j.h2 }),
        }),
    });
}
function b(e) {
    let { media: t, ...n } = e;
    return (0, i.jsx)("img", {
        ...n,
        src: t.url,
        style: { ...e.style, width: "100%", aspectRatio: e.media.width / e.media.height },
        alt: e.alt ?? "",
    });
}
var R = n(506619),
    O = n(15555);
function M(e) {
    let { surfaceConfig: t, resolveFieldValue: n } = en(),
        l = n(t.components.hero_image?.fields.image, [v.o.MEDIA]);
    return (0, i.jsx)(_, {
        ...e,
        image: (0, i.jsx)("div", {
            className: O.ZS,
            children:
                null != l
                    ? (0, i.jsx)(b, { alt: "", media: l.media, className: d()(O.c8, R.g) })
                    : (0, i.jsx)(S, { className: O.pm }),
        }),
    });
}
var L = n(123292),
    k = n(402233);
function w(e) {
    let { image: t } = e,
        { header: n, surfaceConfig: l, onClick: s } = en();
    return (0, i.jsxs)("div", {
        className: k.zr,
        children: [
            (0, i.jsxs)("div", {
                className: k.rf,
                children: [
                    n,
                    (0, i.jsxs)("div", {
                        className: k.Qs,
                        children: [
                            (0, i.jsx)(C, {
                                component: l.components.stat,
                                variant: "heading-sm/semibold",
                                lineClamp: 1,
                                required: !0,
                            }),
                            (0, i.jsx)(L.Q, {
                                textVariant: "text-xs/normal",
                                variant: "secondary",
                                text: "View All Stats",
                                onClick: s,
                            }),
                        ],
                    }),
                ],
            }),
            t,
        ],
    });
}
var P = n(425367);
function D() {
    let { surfaceConfig: e, resolveFieldValue: t } = en(),
        n = t(e.components.contained_image?.fields.image, [v.o.MEDIA]);
    return (0, i.jsx)(w, {
        image: (0, i.jsx)("div", {
            className: P.ZS,
            children:
                null != n
                    ? (0, i.jsx)("img", { alt: "", src: n.media.url, className: P.Sl })
                    : (0, i.jsx)(S, { className: P.h2 }),
        }),
    });
}
var U = n(853512);
function G() {
    let { surfaceConfig: e, resolveFieldValue: t } = en(),
        n = t(e.components.hero_image?.fields.image, [v.o.MEDIA]);
    return (0, i.jsx)(w, {
        image:
            null != n
                ? (0, i.jsx)("div", {
                      className: U.Xr,
                      children: (0, i.jsx)(b, { media: n.media, className: d()(U.c8, R.g) }),
                  })
                : (0, i.jsx)(S, { className: U.pm }),
    });
}
var V = n(193396);
function F(e) {
    let { resolveFieldValue: t } = en(),
        n = t(e.componentConfig?.fields.image, [v.o.MEDIA]),
        l = t(e.componentConfig?.fields.name, [v.o.STRING]),
        s = t(e.componentConfig?.fields.description, [v.o.STRING]);
    return (0, i.jsxs)("div", {
        className: V.E4,
        children: [
            null != n
                ? (0, i.jsx)("img", { src: n.media.url, className: V.bA, alt: "" })
                : (0, i.jsx)(S, { className: V.ET }),
            (0, i.jsxs)("div", {
                className: V.Vx,
                children: [
                    null != l
                        ? (0, i.jsx)(h.E, { variant: "text-sm/medium", lineClamp: 2, children: l.value })
                        : (0, i.jsx)(x, { variant: "text-sm/medium", width: "6ch" }),
                    null != s
                        ? (0, i.jsx)(h.E, {
                              variant: "text-xs/medium",
                              color: "text-subtle",
                              lineClamp: 2,
                              children: s.value,
                          })
                        : (0, i.jsx)(x, { variant: "text-xs/medium", width: "10ch" }),
                ],
            }),
        ],
    });
}
function H() {
    let { surfaceConfig: e } = en();
    return (0, i.jsxs)("div", {
        className: V.zr,
        children: [
            (0, i.jsx)(F, { componentConfig: e.components.item_1 }),
            (0, i.jsx)(F, { componentConfig: e.components.item_2 }),
            (0, i.jsx)(F, { componentConfig: e.components.item_3 }),
            (0, i.jsx)(F, { componentConfig: e.components.item_4 }),
        ],
    });
}
var B = n(141255);
function W() {
    let { surfaceConfig: e, resolveFieldValue: t } = en(),
        n = s.useId(),
        l = t(e.components.objective?.fields.image, [v.o.MEDIA]),
        r = t(e.components.objective?.fields.name, [v.o.STRING]),
        a = t(e.components.objective?.fields.description, [v.o.STRING]),
        o = t(e.components.progress?.fields.current, [v.o.NUMBER]),
        u = t(e.components.progress?.fields.max, [v.o.NUMBER]),
        c = (0, m.eq)(o, u);
    return (0, i.jsxs)("div", {
        className: B.zr,
        children: [
            null != l
                ? (0, i.jsx)("img", { src: l.media.url, className: B.Sl, alt: "" })
                : (0, i.jsx)(S, { className: B.Sl }),
            (0, i.jsxs)("div", {
                className: B.Qs,
                children: [
                    (0, i.jsx)("div", {
                        className: B.L$,
                        role: "progressbar",
                        "aria-labelledby": n,
                        "aria-valuenow": o?.value ?? 0,
                        "aria-valuemax": u?.value ?? 1,
                        "aria-valuetext": null != u && null != o ? `${o.value} of ${u.value}` : void 0,
                        children: (0, i.jsx)("div", { className: B.qB, style: { "--custom-progress": `${c}%` } }),
                    }),
                    (0, i.jsxs)("div", {
                        className: B.P_,
                        children: [
                            (0, i.jsxs)("div", {
                                className: B.n_,
                                children: [
                                    null != r
                                        ? (0, i.jsx)(h.E, {
                                              tag: "div",
                                              variant: "heading-sm/medium",
                                              id: n,
                                              lineClamp: 2,
                                              children: r.value,
                                          })
                                        : (0, i.jsx)(x, { variant: "heading-sm/medium" }),
                                    null != a
                                        ? (0, i.jsx)(h.E, {
                                              variant: "text-xs/medium",
                                              color: "text-subtle",
                                              lineClamp: 2,
                                              children: a.value,
                                          })
                                        : (0, i.jsx)(x, { variant: "text-xs/medium" }),
                                ],
                            }),
                            null != o
                                ? (0, i.jsx)(h.E, {
                                      variant: "text-sm/medium",
                                      lineClamp: 1,
                                      className: B.l_,
                                      children: null != u ? `${o.value}/${u.value}` : `${(0, m.rr)(o.value)}%`,
                                  })
                                : (0, i.jsx)(x, { variant: "text-sm/medium", width: "4ch" }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var K = n(620376);
function z(e) {
    let { component: t, required: n = !1 } = e,
        { resolveFieldValue: l, numberFormat: s, durationFormat: r, renderText: a } = en(),
        o = (0, m.CZ)(
            t,
            l,
            s,
            (e) => {
                let t, n;
                return r.format(
                    ((n = Math.floor((t = Number.isFinite(e) ? Math.max(0, Math.floor(e)) : 0) / 36e5)),
                    {
                        hours: n,
                        minutes: Math.floor(t / 6e4) % 60,
                        seconds: Math.floor(t / 1e3) % 60,
                        milliseconds: t % 1e3,
                    }),
                );
            },
            n,
        );
    return null == o
        ? null
        : (0, i.jsxs)("div", {
              className: K.k,
              children: [
                  "value" === o.value.status
                      ? (0, i.jsxs)("div", {
                            className: K.U,
                            children: [
                                (0, i.jsx)(h.E, {
                                    variant: "text-sm/medium",
                                    lineClamp: 2,
                                    children: a?.(o.value.text) ?? o.value.text,
                                }),
                                null != o.value.icon &&
                                    (0, i.jsx)(p, { variant: "text-sm/medium", media: o.value.icon }),
                            ],
                        })
                      : (0, i.jsx)(x, { variant: "text-sm/medium", width: "8ch" }),
                  "value" === o.label.status
                      ? (0, i.jsx)(h.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            lineClamp: 2,
                            children: o.label.text,
                        })
                      : "skeleton" === o.label.status
                        ? (0, i.jsx)(x, { variant: "text-xs/normal", width: "6ch" })
                        : null,
              ],
          });
}
var Z = n(374205);
function Y() {
    let { surfaceConfig: e } = en();
    return (0, i.jsxs)("div", {
        className: Z.w,
        children: [
            (0, i.jsx)(z, { component: e.components.stat_1, required: !0 }),
            (0, i.jsx)(z, { component: e.components.stat_2, required: !0 }),
            (0, i.jsx)(z, { component: e.components.stat_3, required: !0 }),
            (0, i.jsx)(z, { component: e.components.stat_4, required: !0 }),
            (0, i.jsx)(z, { component: e.components.stat_5, required: !0 }),
            (0, i.jsx)(z, { component: e.components.stat_6, required: !0 }),
        ],
    });
}
var q = n(892203);
function J() {
    let { surfaceConfig: e } = en();
    return (0, i.jsxs)("div", {
        className: q.Q,
        children: [
            (0, i.jsx)(C, {
                component: e.components.title,
                variant: "text-lg/medium",
                lineClamp: 2,
                required: !0,
                className: q.D,
            }),
            (0, i.jsx)(C, {
                component: e.components.subtitle_1,
                variant: "text-sm/normal",
                color: "text-subtle",
                lineClamp: 2,
            }),
            (0, i.jsx)(C, {
                component: e.components.subtitle_2,
                variant: "text-sm/normal",
                color: "text-subtle",
                lineClamp: 2,
            }),
            (0, i.jsx)(C, {
                component: e.components.subtitle_3,
                variant: "text-sm/normal",
                color: "text-subtle",
                lineClamp: 2,
            }),
        ],
    });
}
var $ = n(828575);
function X() {
    let { surfaceConfig: e, resolveFieldValue: t, header: n } = en(),
        l = t(e.components.contained_image?.fields.image, [v.o.MEDIA]);
    return (0, i.jsxs)("div", {
        className: $.zr,
        children: [
            null != n && (0, i.jsx)("div", { className: $.wx, children: n }),
            (0, i.jsx)(J, {}),
            null != l
                ? (0, i.jsx)("img", { alt: "", src: l.media.url, className: $.Sl })
                : (0, i.jsx)(S, { className: $.h2 }),
        ],
    });
}
var Q = n(775176);
function ee() {
    let { surfaceConfig: e, resolveFieldValue: t, header: n } = en(),
        l = t(e.components.hero_image?.fields.image, [v.o.MEDIA]);
    return (0, i.jsxs)("div", {
        className: Q.zr,
        children: [
            null != n && (0, i.jsx)("div", { className: Q.wx, children: n }),
            (0, i.jsx)("div", { className: Q.hQ, children: (0, i.jsx)(J, {}) }),
            null != l
                ? (0, i.jsx)("div", {
                      className: Q._j,
                      children: (0, i.jsx)("div", {
                          className: Q.PX,
                          children: (0, i.jsx)("img", { alt: "", src: l.media.url, className: d()(Q.Sl, R.g) }),
                      }),
                  })
                : (0, i.jsx)(S, { className: Q.h2 }),
        ],
    });
}
let et = s.createContext(null);
function en() {
    let e = s.useContext(et);
    if (null == e) throw Error("useLayoutRendererContext must be used within a LayoutRenderer");
    return e;
}
let el = {
    [a.m.WIDGET_TOP]: {
        [o.WIDGET_TOP_HERO]: () => (0, i.jsx)(ee, {}),
        [o.WIDGET_TOP_CONTAINED]: () => (0, i.jsx)(X, {}),
    },
    [a.m.WIDGET_BOTTOM]: {
        [o.WIDGET_BOTTOM_STATS]: () => (0, i.jsx)(Y, {}),
        [o.WIDGET_BOTTOM_PROGRESS]: () => (0, i.jsx)(W, {}),
        [o.WIDGET_BOTTOM_COLLECTION]: () => (0, i.jsx)(H, {}),
    },
    [a.m.MINI_PROFILE]: {
        [o.MINI_PROFILE_HERO_STAT]: () => (0, i.jsx)(G, {}),
        [o.MINI_PROFILE_CONTAINED_STAT]: () => (0, i.jsx)(D, {}),
    },
    [a.m.ACTIVITY_ACCESSORY]: { [o.ACTIVITY_ACCESSORY_STAT]: (e) => (0, i.jsx)(I, { ...e }) },
    [a.m.ADD_WIDGET_PREVIEW]: {
        [o.ADD_WIDGET_PREVIEW_HERO]: (e) => (0, i.jsx)(M, { ...e }),
        [o.ADD_WIDGET_PREVIEW_CONTAINED]: (e) => (0, i.jsx)(T, { ...e }),
    },
};
function ei(e) {
    let {
            surface: t,
            surfaceConfig: n,
            resolutionContext: l,
            locale: a,
            header: o,
            onClick: c,
            renderText: d,
            layoutProps: h,
        } = e,
        m = s.useMemo(() => (0, u.e)(a), [a]),
        f = s.useMemo(() => new r.Y(a, { style: "narrow" }), [a]);
    if (null == n) return null;
    let p = el[t]?.[n.layout];
    return null == p
        ? null
        : (0, i.jsx)(et.Provider, {
              value: {
                  surfaceConfig: n,
                  locale: a,
                  numberFormat: m,
                  durationFormat: f,
                  header: o,
                  onClick: c,
                  renderText: d,
                  resolutionContext: l,
                  resolveFieldValue: (0, v.J)(l),
              },
              children: p(h),
          });
}
