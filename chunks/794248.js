"use strict";
n.d(t, { kH: () => er });
var i,
    r = n(477900),
    a = n(582128),
    s = n(430111),
    l = n(598748),
    o =
        (((i = {}).WIDGET_TOP_HERO = "widget_top_hero"),
        (i.WIDGET_TOP_CONTAINED = "widget_top_contained"),
        (i.WIDGET_BOTTOM_STATS = "widget_bottom_stats"),
        (i.WIDGET_BOTTOM_PROGRESS = "widget_bottom_progress"),
        (i.WIDGET_BOTTOM_COLLECTION = "widget_bottom_collection"),
        (i.MINI_PROFILE_HERO_STAT = "mini_profile_hero_stat"),
        (i.MINI_PROFILE_CONTAINED_STAT = "mini_profile_contained_stat"),
        (i.ACTIVITY_ACCESSORY_STAT = "activity_accessory_stat"),
        (i.ADD_WIDGET_PREVIEW_HERO = "add_widget_preview_hero"),
        (i.ADD_WIDGET_PREVIEW_CONTAINED = "add_widget_preview_contained"),
        i),
    d = n(108089),
    c = n(503698),
    u = n.n(c),
    _ = n(834730),
    E = n(779300),
    A = n(25467);
function h(e) {
    let { variant: t, media: n, alt: i } = e;
    return null != n
        ? (0, r.jsx)(_.E, {
              variant: t,
              children: (0, r.jsx)("img", {
                  src: n.url,
                  width: n.width,
                  height: n.height,
                  className: A.K,
                  alt: i ?? "",
              }),
          })
        : null;
}
var I = n(233278);
function f(e) {
    let { width: t, variant: n, className: i } = e;
    return (0, r.jsx)(_.E, {
        variant: n ?? "text-md/normal",
        children: (0, r.jsx)("div", {
            className: u()(I.z, i),
            style: null != t ? { "--skeleton-text-width": t } : void 0,
            children: (0, r.jsx)("div", { className: I.v }),
        }),
    });
}
var p = n(935286);
function T(e) {
    let {
            component: t,
            variant: n,
            color: i,
            required: a = !1,
            className: s,
            lineClamp: l,
            imagePosition: o = "right",
            hideLabel: d = !1,
        } = e,
        { resolveFieldValue: c, numberFormat: A } = en(),
        I = (0, E.Hx)(t, c, A, a, d);
    if ("hidden" === I.status) return null;
    if ("skeleton" === I.status) return (0, r.jsx)(f, { variant: n, className: s });
    let T = null != I.icon ? (0, r.jsx)(h, { media: I.icon, variant: n }) : null;
    return (0, r.jsxs)("div", {
        className: u()(p.k, s),
        children: [
            null != T && "left" === o ? T : null,
            (0, r.jsx)(_.E, { variant: n, color: i, lineClamp: l, children: I.text }),
            null != T && "right" === o ? T : null,
        ],
    });
}
var m = n(130041);
function g(e) {
    let { variant: t = "default", textColor: n } = e,
        { surfaceConfig: i } = en(),
        a = "badge" === t;
    return (0, r.jsx)("div", {
        className: m.z,
        children: (0, r.jsx)(T, {
            component: i.components.stat,
            className: m.Q,
            variant: a ? "text-xs/normal" : "text-xs/semibold",
            color: n,
            hideLabel: a,
            required: !0,
            imagePosition: "left",
            lineClamp: 1,
        }),
    });
}
var S = n(53010);
function N(e) {
    let { className: t } = e;
    return (0, r.jsx)("div", { className: u()(S.z, t) });
}
var C = n(620632),
    O = n(41723);
function R(e) {
    let { small: t = !1, image: n } = e;
    return (0, r.jsxs)("div", {
        className: u()(O.kL, { [O.PG]: t }),
        children: [
            (0, r.jsxs)("div", {
                className: O.Qs,
                children: [
                    (0, r.jsx)("div", { className: O.wx }),
                    (0, r.jsx)("div", { className: O.yF }),
                    (0, r.jsxs)("div", {
                        className: O.M1,
                        children: [
                            (0, r.jsx)("div", { className: O.dJ }),
                            (0, r.jsx)("div", { className: O.dJ }),
                            (0, r.jsx)("div", { className: O.dJ }),
                            (0, r.jsx)("div", { className: O.dJ }),
                            (0, r.jsx)("div", { className: O.dJ }),
                            (0, r.jsx)("div", { className: O.dJ }),
                        ],
                    }),
                ],
            }),
            n,
        ],
    });
}
var L = n(483367);
function y(e) {
    let { small: t = !1 } = e,
        { surfaceConfig: n, resolveFieldValue: i } = en(),
        a = i(n.components.contained_image?.fields.image, [C.o.MEDIA]);
    return (0, r.jsx)(R, {
        small: t,
        image: (0, r.jsx)("div", {
            className: L.ZS,
            children:
                null != a
                    ? (0, r.jsx)("img", { alt: "", src: a.media.url, className: L.Sl })
                    : (0, r.jsx)(N, { className: L.h2 }),
        }),
    });
}
function D(e) {
    let { media: t, ...n } = e;
    return (0, r.jsx)("img", {
        ...n,
        src: t.url,
        style: { ...e.style, width: "100%", aspectRatio: e.media.width / e.media.height },
        alt: e.alt ?? "",
    });
}
var v = n(137862),
    b = n(321760);
function M(e) {
    let { surfaceConfig: t, resolveFieldValue: n } = en(),
        i = n(t.components.hero_image?.fields.image, [C.o.MEDIA]);
    return (0, r.jsx)(R, {
        ...e,
        image: (0, r.jsx)("div", {
            className: b.ZS,
            children:
                null != i
                    ? (0, r.jsx)(D, { alt: "", media: i.media, className: u()(b.c8, v.g) })
                    : (0, r.jsx)(N, { className: b.pm }),
        }),
    });
}
var P = n(123292),
    U = n(63448);
function w(e) {
    let { image: t } = e,
        { header: n, surfaceConfig: i, onClick: a } = en();
    return (0, r.jsxs)("div", {
        className: U.zr,
        children: [
            (0, r.jsxs)("div", {
                className: U.rf,
                children: [
                    n,
                    (0, r.jsxs)("div", {
                        className: U.Qs,
                        children: [
                            (0, r.jsx)(T, {
                                component: i.components.stat,
                                variant: "heading-sm/semibold",
                                lineClamp: 1,
                                required: !0,
                            }),
                            (0, r.jsx)(P.Q, {
                                textVariant: "text-xs/normal",
                                variant: "secondary",
                                text: "View All Stats",
                                onClick: a,
                            }),
                        ],
                    }),
                ],
            }),
            t,
        ],
    });
}
var G = n(322572);
function x() {
    let { surfaceConfig: e, resolveFieldValue: t } = en(),
        n = t(e.components.contained_image?.fields.image, [C.o.MEDIA]);
    return (0, r.jsx)(w, {
        image: (0, r.jsx)("div", {
            className: G.ZS,
            children:
                null != n
                    ? (0, r.jsx)("img", { alt: "", src: n.media.url, className: G.Sl })
                    : (0, r.jsx)(N, { className: G.h2 }),
        }),
    });
}
var k = n(707409);
function F() {
    let { surfaceConfig: e, resolveFieldValue: t } = en(),
        n = t(e.components.hero_image?.fields.image, [C.o.MEDIA]);
    return (0, r.jsx)(w, {
        image:
            null != n
                ? (0, r.jsx)("div", {
                      className: k.Xr,
                      children: (0, r.jsx)(D, { media: n.media, className: u()(k.c8, v.g) }),
                  })
                : (0, r.jsx)(N, { className: k.pm }),
    });
}
var V = n(725225);
function B(e) {
    let { resolveFieldValue: t } = en(),
        n = t(e.componentConfig?.fields.image, [C.o.MEDIA]),
        i = t(e.componentConfig?.fields.name, [C.o.STRING]),
        a = t(e.componentConfig?.fields.description, [C.o.STRING]);
    return (0, r.jsxs)("div", {
        className: V.E4,
        children: [
            null != n
                ? (0, r.jsx)("img", { src: n.media.url, className: V.bA, alt: "" })
                : (0, r.jsx)(N, { className: V.ET }),
            (0, r.jsxs)("div", {
                className: V.Vx,
                children: [
                    null != i
                        ? (0, r.jsx)(_.E, { variant: "text-sm/medium", lineClamp: 2, children: i.value })
                        : (0, r.jsx)(f, { variant: "text-sm/medium", width: "6ch" }),
                    null != a
                        ? (0, r.jsx)(_.E, {
                              variant: "text-xs/medium",
                              color: "text-subtle",
                              lineClamp: 2,
                              children: a.value,
                          })
                        : (0, r.jsx)(f, { variant: "text-xs/medium", width: "10ch" }),
                ],
            }),
        ],
    });
}
function H() {
    let { surfaceConfig: e } = en();
    return (0, r.jsxs)("div", {
        className: V.zr,
        children: [
            (0, r.jsx)(B, { componentConfig: e.components.item_1 }),
            (0, r.jsx)(B, { componentConfig: e.components.item_2 }),
            (0, r.jsx)(B, { componentConfig: e.components.item_3 }),
            (0, r.jsx)(B, { componentConfig: e.components.item_4 }),
        ],
    });
}
var j = n(400402);
function W() {
    let { surfaceConfig: e, resolveFieldValue: t } = en(),
        n = a.useId(),
        i = t(e.components.objective?.fields.image, [C.o.MEDIA]),
        s = t(e.components.objective?.fields.name, [C.o.STRING]),
        l = t(e.components.objective?.fields.description, [C.o.STRING]),
        o = t(e.components.progress?.fields.current, [C.o.NUMBER]),
        d = t(e.components.progress?.fields.max, [C.o.NUMBER]),
        c = (0, E.eq)(o, d);
    return (0, r.jsxs)("div", {
        className: j.zr,
        children: [
            null != i
                ? (0, r.jsx)("img", { src: i.media.url, className: j.Sl, alt: "" })
                : (0, r.jsx)(N, { className: j.Sl }),
            (0, r.jsxs)("div", {
                className: j.Qs,
                children: [
                    (0, r.jsx)("div", {
                        className: j.L$,
                        role: "progressbar",
                        "aria-labelledby": n,
                        "aria-valuenow": o?.value ?? 0,
                        "aria-valuemax": d?.value ?? 1,
                        "aria-valuetext": null != d && null != o ? `${o.value} of ${d.value}` : void 0,
                        children: (0, r.jsx)("div", { className: j.qB, style: { "--custom-progress": `${c}%` } }),
                    }),
                    (0, r.jsxs)("div", {
                        className: j.P_,
                        children: [
                            (0, r.jsxs)("div", {
                                className: j.n_,
                                children: [
                                    null != s
                                        ? (0, r.jsx)(_.E, {
                                              tag: "div",
                                              variant: "heading-sm/medium",
                                              id: n,
                                              lineClamp: 2,
                                              children: s.value,
                                          })
                                        : (0, r.jsx)(f, { variant: "heading-sm/medium" }),
                                    null != l
                                        ? (0, r.jsx)(_.E, {
                                              variant: "text-xs/medium",
                                              color: "text-subtle",
                                              lineClamp: 2,
                                              children: l.value,
                                          })
                                        : (0, r.jsx)(f, { variant: "text-xs/medium" }),
                                ],
                            }),
                            null != o
                                ? (0, r.jsx)(_.E, {
                                      variant: "text-sm/medium",
                                      lineClamp: 1,
                                      className: j.l_,
                                      children: null != d ? `${o.value}/${d.value}` : `${(0, E.rr)(o.value)}%`,
                                  })
                                : (0, r.jsx)(f, { variant: "text-sm/medium", width: "4ch" }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var Y = n(997913);
function K(e) {
    let { component: t, required: n = !1 } = e,
        { resolveFieldValue: i, numberFormat: a, durationFormat: s } = en(),
        l = (0, E.CZ)(
            t,
            i,
            a,
            (e) => {
                let t, n;
                return s.format(
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
    return null == l
        ? null
        : (0, r.jsxs)("div", {
              className: Y.k,
              children: [
                  "value" === l.value.status
                      ? (0, r.jsxs)("div", {
                            className: Y.U,
                            children: [
                                (0, r.jsx)(_.E, { variant: "text-sm/medium", lineClamp: 2, children: l.value.text }),
                                null != l.value.icon &&
                                    (0, r.jsx)(h, { variant: "text-sm/medium", media: l.value.icon }),
                            ],
                        })
                      : (0, r.jsx)(f, { variant: "text-sm/medium", width: "8ch" }),
                  "value" === l.label.status
                      ? (0, r.jsx)(_.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            lineClamp: 2,
                            children: l.label.text,
                        })
                      : "skeleton" === l.label.status
                        ? (0, r.jsx)(f, { variant: "text-xs/normal", width: "6ch" })
                        : null,
              ],
          });
}
var $ = n(978982);
function z() {
    let { surfaceConfig: e } = en();
    return (0, r.jsxs)("div", {
        className: $.w,
        children: [
            (0, r.jsx)(K, { component: e.components.stat_1, required: !0 }),
            (0, r.jsx)(K, { component: e.components.stat_2, required: !0 }),
            (0, r.jsx)(K, { component: e.components.stat_3, required: !0 }),
            (0, r.jsx)(K, { component: e.components.stat_4, required: !0 }),
            (0, r.jsx)(K, { component: e.components.stat_5, required: !0 }),
            (0, r.jsx)(K, { component: e.components.stat_6, required: !0 }),
        ],
    });
}
var q = n(613192);
function Z() {
    let { surfaceConfig: e } = en();
    return (0, r.jsxs)("div", {
        className: q.Q,
        children: [
            (0, r.jsx)(T, {
                component: e.components.title,
                variant: "text-lg/medium",
                lineClamp: 2,
                required: !0,
                className: q.D,
            }),
            (0, r.jsx)(T, {
                component: e.components.subtitle_1,
                variant: "text-sm/normal",
                color: "text-subtle",
                lineClamp: 2,
            }),
            (0, r.jsx)(T, {
                component: e.components.subtitle_2,
                variant: "text-sm/normal",
                color: "text-subtle",
                lineClamp: 2,
            }),
            (0, r.jsx)(T, {
                component: e.components.subtitle_3,
                variant: "text-sm/normal",
                color: "text-subtle",
                lineClamp: 2,
            }),
        ],
    });
}
var X = n(663552);
function Q() {
    let { surfaceConfig: e, resolveFieldValue: t, header: n } = en(),
        i = t(e.components.contained_image?.fields.image, [C.o.MEDIA]);
    return (0, r.jsxs)("div", {
        className: X.zr,
        children: [
            null != n && (0, r.jsx)("div", { className: X.wx, children: n }),
            (0, r.jsx)(Z, {}),
            null != i
                ? (0, r.jsx)("img", { alt: "", src: i.media.url, className: X.Sl })
                : (0, r.jsx)(N, { className: X.h2 }),
        ],
    });
}
var J = n(959681);
function ee() {
    let { surfaceConfig: e, resolveFieldValue: t, header: n } = en(),
        i = t(e.components.hero_image?.fields.image, [C.o.MEDIA]);
    return (0, r.jsxs)("div", {
        className: J.zr,
        children: [
            null != n && (0, r.jsx)("div", { className: J.wx, children: n }),
            (0, r.jsx)("div", { className: J.hQ, children: (0, r.jsx)(Z, {}) }),
            null != i
                ? (0, r.jsx)("div", {
                      className: J._j,
                      children: (0, r.jsx)("div", {
                          className: J.PX,
                          children: (0, r.jsx)("img", { alt: "", src: i.media.url, className: u()(J.Sl, v.g) }),
                      }),
                  })
                : (0, r.jsx)(N, { className: J.h2 }),
        ],
    });
}
let et = a.createContext(null);
function en() {
    let e = a.useContext(et);
    if (null == e) throw Error("useLayoutRendererContext must be used within a LayoutRenderer");
    return e;
}
let ei = {
    [l.m.WIDGET_TOP]: {
        [o.WIDGET_TOP_HERO]: () => (0, r.jsx)(ee, {}),
        [o.WIDGET_TOP_CONTAINED]: () => (0, r.jsx)(Q, {}),
    },
    [l.m.WIDGET_BOTTOM]: {
        [o.WIDGET_BOTTOM_STATS]: () => (0, r.jsx)(z, {}),
        [o.WIDGET_BOTTOM_PROGRESS]: () => (0, r.jsx)(W, {}),
        [o.WIDGET_BOTTOM_COLLECTION]: () => (0, r.jsx)(H, {}),
    },
    [l.m.MINI_PROFILE]: {
        [o.MINI_PROFILE_HERO_STAT]: () => (0, r.jsx)(F, {}),
        [o.MINI_PROFILE_CONTAINED_STAT]: () => (0, r.jsx)(x, {}),
    },
    [l.m.ACTIVITY_ACCESSORY]: { [o.ACTIVITY_ACCESSORY_STAT]: (e) => (0, r.jsx)(g, { ...e }) },
    [l.m.ADD_WIDGET_PREVIEW]: {
        [o.ADD_WIDGET_PREVIEW_HERO]: (e) => (0, r.jsx)(M, { ...e }),
        [o.ADD_WIDGET_PREVIEW_CONTAINED]: (e) => (0, r.jsx)(y, { ...e }),
    },
};
function er(e) {
    let { surface: t, surfaceConfig: n, resolutionContext: i, locale: l, header: o, onClick: c, layoutProps: u } = e,
        _ = a.useMemo(() => (0, d.e)(l), [l]),
        E = a.useMemo(() => new s.Y(l, { style: "narrow" }), [l]);
    if (null == n) return null;
    let A = ei[t]?.[n.layout];
    return null == A
        ? null
        : (0, r.jsx)(et.Provider, {
              value: {
                  surfaceConfig: n,
                  locale: l,
                  numberFormat: _,
                  durationFormat: E,
                  header: o,
                  onClick: c,
                  resolutionContext: i,
                  resolveFieldValue: (0, C.J)(i),
              },
              children: A(u),
          });
}
