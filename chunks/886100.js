l.d(t, { kH: () => en });
var a,
    n = l(477900),
    s = l(582128),
    i = l(314266),
    r = l(598748),
    o =
        (((a = {}).WIDGET_TOP_HERO = "widget_top_hero"),
        (a.WIDGET_TOP_CONTAINED = "widget_top_contained"),
        (a.WIDGET_BOTTOM_STATS = "widget_bottom_stats"),
        (a.WIDGET_BOTTOM_PROGRESS = "widget_bottom_progress"),
        (a.WIDGET_BOTTOM_COLLECTION = "widget_bottom_collection"),
        (a.MINI_PROFILE_HERO_STAT = "mini_profile_hero_stat"),
        (a.MINI_PROFILE_CONTAINED_STAT = "mini_profile_contained_stat"),
        (a.ACTIVITY_ACCESSORY_STAT = "activity_accessory_stat"),
        (a.ADD_WIDGET_PREVIEW_HERO = "add_widget_preview_hero"),
        (a.ADD_WIDGET_PREVIEW_CONTAINED = "add_widget_preview_contained"),
        a),
    u = l(108089);
let c = s.createContext(null);
function m() {
    let e = s.useContext(c);
    if (null == e) throw Error("useLayoutRendererContext must be used within a LayoutRenderer");
    return e;
}
var d = l(503698),
    v = l.n(d),
    p = l(834730),
    f = l(779300),
    x = l(835792);
function _(e) {
    let { variant: t, media: l, alt: a } = e;
    return null != l
        ? (0, n.jsx)(p.E, {
              variant: t,
              children: (0, n.jsx)("img", {
                  src: l.url,
                  width: l.width,
                  height: l.height,
                  className: x.K,
                  alt: a ?? "",
              }),
          })
        : null;
}
var h = l(436385);
function N(e) {
    let { width: t, variant: l, className: a } = e;
    return (0, n.jsx)(p.E, {
        variant: l ?? "body-md/normal",
        children: (0, n.jsx)("div", {
            className: v()(h.z, a),
            style: null != t ? { "--skeleton-text-width": t } : void 0,
            children: (0, n.jsx)("div", { className: h.v }),
        }),
    });
}
var E = l(33683);
function T(e) {
    let {
            component: t,
            variant: l,
            color: a,
            required: s = !1,
            className: i,
            lineClamp: r,
            imagePosition: o = "right",
            hideLabel: u = !1,
        } = e,
        { resolveFieldValue: c, numberFormat: d, renderText: x } = m(),
        h = (0, f.Hx)(t, c, d, s, u);
    if ("hidden" === h.status) return null;
    if ("skeleton" === h.status) return (0, n.jsx)(N, { variant: l, className: i });
    let T = null != h.icon ? (0, n.jsx)(_, { media: h.icon, variant: l }) : null;
    return (0, n.jsxs)("div", {
        className: v()(E.k, i),
        children: [
            null != T && "left" === o ? T : null,
            (0, n.jsx)(p.E, { variant: l, color: a, lineClamp: r, children: x?.(h.text) ?? h.text }),
            null != T && "right" === o ? T : null,
        ],
    });
}
var j = l(640056);
function I(e) {
    let { variant: t = "default", textColor: l } = e,
        { surfaceConfig: a } = m(),
        s = "badge" === t;
    return (0, n.jsx)("div", {
        className: j.z,
        children: (0, n.jsx)(T, {
            component: a.components.stat,
            className: j.Q,
            variant: s ? "body-xs/normal" : "body-xs/semibold",
            color: l,
            hideLabel: s,
            required: !0,
            imagePosition: "left",
            lineClamp: 1,
        }),
    });
}
var g = l(835887);
function A(e) {
    let { className: t } = e;
    return (0, n.jsx)("div", { className: v()(g.z, t) });
}
var y = l(398251),
    b = l(836032);
function C(e) {
    let { small: t = !1, image: l } = e;
    return (0, n.jsxs)("div", {
        className: v()(b.kL, { [b.PG]: t }),
        children: [
            (0, n.jsxs)("div", {
                className: b.Qs,
                children: [
                    (0, n.jsx)("div", { className: b.wx }),
                    (0, n.jsx)("div", { className: b.yF }),
                    (0, n.jsxs)("div", {
                        className: b.M1,
                        children: [
                            (0, n.jsx)("div", { className: b.dJ }),
                            (0, n.jsx)("div", { className: b.dJ }),
                            (0, n.jsx)("div", { className: b.dJ }),
                            (0, n.jsx)("div", { className: b.dJ }),
                            (0, n.jsx)("div", { className: b.dJ }),
                            (0, n.jsx)("div", { className: b.dJ }),
                        ],
                    }),
                ],
            }),
            l,
        ],
    });
}
var S = l(170118);
function O(e) {
    let { small: t = !1 } = e,
        { surfaceConfig: l, resolveFieldValue: a } = m(),
        s = a(l.components.contained_image?.fields.image, [y.o.MEDIA]);
    return (0, n.jsx)(C, {
        small: t,
        image: (0, n.jsx)("div", {
            className: S.ZS,
            children:
                null != s
                    ? (0, n.jsx)("img", { alt: "", src: s.media.url, className: S.Sl })
                    : (0, n.jsx)(A, { className: S.h2 }),
        }),
    });
}
function D(e) {
    let { media: t, ...l } = e;
    return (0, n.jsx)("img", {
        ...l,
        src: t.url,
        style: { ...e.style, width: "100%", aspectRatio: e.media.width / e.media.height },
        alt: e.alt ?? "",
    });
}
var M = l(506619),
    R = l(15555);
function G(e) {
    let { surfaceConfig: t, resolveFieldValue: l } = m(),
        a = l(t.components.hero_image?.fields.image, [y.o.MEDIA]);
    return (0, n.jsx)(C, {
        ...e,
        image: (0, n.jsx)("div", {
            className: R.ZS,
            children:
                null != a
                    ? (0, n.jsx)(D, { alt: "", media: a.media, className: v()(R.c8, M.g) })
                    : (0, n.jsx)(A, { className: R.pm }),
        }),
    });
}
var w = l(123292),
    P = l(402233);
function k(e) {
    let { image: t } = e,
        { header: l, surfaceConfig: a, onClick: s } = m();
    return (0, n.jsxs)("div", {
        className: P.zr,
        children: [
            (0, n.jsxs)("div", {
                className: P.rf,
                children: [
                    l,
                    (0, n.jsxs)("div", {
                        className: P.Qs,
                        children: [
                            (0, n.jsx)(T, {
                                component: a.components.stat,
                                variant: "heading-xs/semibold",
                                lineClamp: 1,
                                required: !0,
                            }),
                            (0, n.jsx)(w.Q, {
                                textVariant: "body-xs/normal",
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
var F = l(425367);
function L() {
    let { surfaceConfig: e, resolveFieldValue: t } = m(),
        l = t(e.components.contained_image?.fields.image, [y.o.MEDIA]);
    return (0, n.jsx)(k, {
        image: (0, n.jsx)("div", {
            className: F.ZS,
            children:
                null != l
                    ? (0, n.jsx)("img", { alt: "", src: l.media.url, className: F.Sl })
                    : (0, n.jsx)(A, { className: F.h2 }),
        }),
    });
}
var U = l(853512);
function W() {
    let { surfaceConfig: e, resolveFieldValue: t } = m(),
        l = t(e.components.hero_image?.fields.image, [y.o.MEDIA]);
    return (0, n.jsx)(k, {
        image:
            null != l
                ? (0, n.jsx)("div", {
                      className: U.Xr,
                      children: (0, n.jsx)(D, { media: l.media, className: v()(U.c8, M.g) }),
                  })
                : (0, n.jsx)(A, { className: U.pm }),
    });
}
var B = l(193396);
function H(e) {
    let { resolveFieldValue: t } = m(),
        l = t(e.componentConfig?.fields.image, [y.o.MEDIA]),
        a = t(e.componentConfig?.fields.name, [y.o.STRING]),
        s = t(e.componentConfig?.fields.description, [y.o.STRING]);
    return (0, n.jsxs)("div", {
        className: B.E4,
        children: [
            null != l
                ? (0, n.jsx)("img", { src: l.media.url, className: B.bA, alt: "" })
                : (0, n.jsx)(A, { className: B.ET }),
            (0, n.jsxs)("div", {
                className: B.Vx,
                children: [
                    null != a
                        ? (0, n.jsx)(p.E, { variant: "body-sm/medium", lineClamp: 2, children: a.value })
                        : (0, n.jsx)(N, { variant: "body-sm/medium", width: "6ch" }),
                    null != s
                        ? (0, n.jsx)(p.E, {
                              variant: "body-xs/medium",
                              color: "text-subtle",
                              lineClamp: 2,
                              children: s.value,
                          })
                        : (0, n.jsx)(N, { variant: "body-xs/medium", width: "10ch" }),
                ],
            }),
        ],
    });
}
function V() {
    let { surfaceConfig: e } = m();
    return (0, n.jsxs)("div", {
        className: B.zr,
        children: [
            (0, n.jsx)(H, { componentConfig: e.components.item_1 }),
            (0, n.jsx)(H, { componentConfig: e.components.item_2 }),
            (0, n.jsx)(H, { componentConfig: e.components.item_3 }),
            (0, n.jsx)(H, { componentConfig: e.components.item_4 }),
        ],
    });
}
var $ = l(141255);
function q() {
    let { surfaceConfig: e, resolveFieldValue: t } = m(),
        l = s.useId(),
        a = t(e.components.objective?.fields.image, [y.o.MEDIA]),
        i = t(e.components.objective?.fields.name, [y.o.STRING]),
        r = t(e.components.objective?.fields.description, [y.o.STRING]),
        o = t(e.components.progress?.fields.current, [y.o.NUMBER]),
        u = t(e.components.progress?.fields.max, [y.o.NUMBER]),
        c = (0, f.eq)(o, u);
    return (0, n.jsxs)("div", {
        className: $.zr,
        children: [
            null != a
                ? (0, n.jsx)("img", { src: a.media.url, className: $.Sl, alt: "" })
                : (0, n.jsx)(A, { className: $.Sl }),
            (0, n.jsxs)("div", {
                className: $.Qs,
                children: [
                    (0, n.jsx)("div", {
                        className: $.L$,
                        role: "progressbar",
                        "aria-labelledby": l,
                        "aria-valuenow": o?.value ?? 0,
                        "aria-valuemax": u?.value ?? 1,
                        "aria-valuetext": null != u && null != o ? `${o.value} of ${u.value}` : void 0,
                        children: (0, n.jsx)("div", { className: $.qB, style: { "--custom-progress": `${c}%` } }),
                    }),
                    (0, n.jsxs)("div", {
                        className: $.P_,
                        children: [
                            (0, n.jsxs)("div", {
                                className: $.n_,
                                children: [
                                    null != i
                                        ? (0, n.jsx)(p.E, {
                                              tag: "div",
                                              variant: "heading-xs/medium",
                                              id: l,
                                              lineClamp: 2,
                                              children: i.value,
                                          })
                                        : (0, n.jsx)(N, { variant: "heading-xs/medium" }),
                                    null != r
                                        ? (0, n.jsx)(p.E, {
                                              variant: "body-xs/medium",
                                              color: "text-subtle",
                                              lineClamp: 2,
                                              children: r.value,
                                          })
                                        : (0, n.jsx)(N, { variant: "body-xs/medium" }),
                                ],
                            }),
                            null != o
                                ? (0, n.jsx)(p.E, {
                                      variant: "body-sm/medium",
                                      lineClamp: 1,
                                      className: $.l_,
                                      children: null != u ? `${o.value}/${u.value}` : `${(0, f.rr)(o.value)}%`,
                                  })
                                : (0, n.jsx)(N, { variant: "body-sm/medium", width: "4ch" }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var Y = l(620376);
function z(e) {
    let { component: t, required: l = !1 } = e,
        { resolveFieldValue: a, numberFormat: s, durationFormat: i, renderText: r } = m(),
        o = (0, f.CZ)(
            t,
            a,
            s,
            (e) => {
                let t, l;
                return i.format(
                    ((l = Math.floor((t = Number.isFinite(e) ? Math.max(0, Math.floor(e)) : 0) / 36e5)),
                    {
                        hours: l,
                        minutes: Math.floor(t / 6e4) % 60,
                        seconds: Math.floor(t / 1e3) % 60,
                        milliseconds: t % 1e3,
                    }),
                );
            },
            l,
        );
    return null == o
        ? null
        : (0, n.jsxs)("div", {
              className: Y.k,
              children: [
                  "value" === o.value.status
                      ? (0, n.jsxs)("div", {
                            className: Y.U,
                            children: [
                                (0, n.jsx)(p.E, {
                                    variant: "body-sm/medium",
                                    lineClamp: 2,
                                    children: r?.(o.value.text) ?? o.value.text,
                                }),
                                null != o.value.icon &&
                                    (0, n.jsx)(_, { variant: "body-sm/medium", media: o.value.icon }),
                            ],
                        })
                      : (0, n.jsx)(N, { variant: "body-sm/medium", width: "8ch" }),
                  "value" === o.label.status
                      ? (0, n.jsx)(p.E, {
                            variant: "body-xs/normal",
                            color: "text-subtle",
                            lineClamp: 2,
                            children: o.label.text,
                        })
                      : "skeleton" === o.label.status
                        ? (0, n.jsx)(N, { variant: "body-xs/normal", width: "6ch" })
                        : null,
              ],
          });
}
var Q = l(374205);
function J() {
    let { surfaceConfig: e } = m();
    return (0, n.jsxs)("div", {
        className: Q.w,
        children: [
            (0, n.jsx)(z, { component: e.components.stat_1, required: !0 }),
            (0, n.jsx)(z, { component: e.components.stat_2, required: !0 }),
            (0, n.jsx)(z, { component: e.components.stat_3, required: !0 }),
            (0, n.jsx)(z, { component: e.components.stat_4, required: !0 }),
            (0, n.jsx)(z, { component: e.components.stat_5, required: !0 }),
            (0, n.jsx)(z, { component: e.components.stat_6, required: !0 }),
        ],
    });
}
var X = l(892203);
function Z() {
    let { surfaceConfig: e } = m();
    return (0, n.jsxs)("div", {
        className: X.Q,
        children: [
            (0, n.jsx)(T, {
                component: e.components.title,
                variant: "body-lg/medium",
                lineClamp: 2,
                required: !0,
                className: X.D,
            }),
            (0, n.jsx)(T, {
                component: e.components.subtitle_1,
                variant: "body-sm/normal",
                color: "text-subtle",
                lineClamp: 2,
            }),
            (0, n.jsx)(T, {
                component: e.components.subtitle_2,
                variant: "body-sm/normal",
                color: "text-subtle",
                lineClamp: 2,
            }),
            (0, n.jsx)(T, {
                component: e.components.subtitle_3,
                variant: "body-sm/normal",
                color: "text-subtle",
                lineClamp: 2,
            }),
        ],
    });
}
var K = l(828575);
function ee() {
    let { surfaceConfig: e, resolveFieldValue: t, header: l } = m(),
        a = t(e.components.contained_image?.fields.image, [y.o.MEDIA]);
    return (0, n.jsxs)("div", {
        className: K.zr,
        children: [
            null != l && (0, n.jsx)("div", { className: K.wx, children: l }),
            (0, n.jsx)(Z, {}),
            null != a
                ? (0, n.jsx)("img", { alt: "", src: a.media.url, className: K.Sl })
                : (0, n.jsx)(A, { className: K.h2 }),
        ],
    });
}
var et = l(775176);
function el() {
    let { surfaceConfig: e, resolveFieldValue: t, header: l } = m(),
        a = t(e.components.hero_image?.fields.image, [y.o.MEDIA]);
    return (0, n.jsxs)("div", {
        className: et.zr,
        children: [
            null != l && (0, n.jsx)("div", { className: et.wx, children: l }),
            (0, n.jsx)("div", { className: et.hQ, children: (0, n.jsx)(Z, {}) }),
            null != a
                ? (0, n.jsx)("div", {
                      className: et._j,
                      children: (0, n.jsx)("div", {
                          className: et.PX,
                          children: (0, n.jsx)("img", { alt: "", src: a.media.url, className: v()(et.Sl, M.g) }),
                      }),
                  })
                : (0, n.jsx)(A, { className: et.h2 }),
        ],
    });
}
let ea = {
    [r.m.WIDGET_TOP]: {
        [o.WIDGET_TOP_HERO]: () => (0, n.jsx)(el, {}),
        [o.WIDGET_TOP_CONTAINED]: () => (0, n.jsx)(ee, {}),
    },
    [r.m.WIDGET_BOTTOM]: {
        [o.WIDGET_BOTTOM_STATS]: () => (0, n.jsx)(J, {}),
        [o.WIDGET_BOTTOM_PROGRESS]: () => (0, n.jsx)(q, {}),
        [o.WIDGET_BOTTOM_COLLECTION]: () => (0, n.jsx)(V, {}),
    },
    [r.m.MINI_PROFILE]: {
        [o.MINI_PROFILE_HERO_STAT]: () => (0, n.jsx)(W, {}),
        [o.MINI_PROFILE_CONTAINED_STAT]: () => (0, n.jsx)(L, {}),
    },
    [r.m.ACTIVITY_ACCESSORY]: { [o.ACTIVITY_ACCESSORY_STAT]: (e) => (0, n.jsx)(I, { ...e }) },
    [r.m.ADD_WIDGET_PREVIEW]: {
        [o.ADD_WIDGET_PREVIEW_HERO]: (e) => (0, n.jsx)(G, { ...e }),
        [o.ADD_WIDGET_PREVIEW_CONTAINED]: (e) => (0, n.jsx)(O, { ...e }),
    },
};
function en(e) {
    let {
            surface: t,
            surfaceConfig: l,
            resolutionContext: a,
            locale: r,
            header: o,
            onClick: m,
            renderText: d,
            layoutProps: v,
        } = e,
        p = s.useMemo(() => (0, u.e)(r), [r]),
        f = s.useMemo(() => new i.Y(r, { style: "narrow" }), [r]);
    if (null == l) return null;
    let x = ea[t]?.[l.layout];
    return null == x
        ? null
        : (0, n.jsx)(c.Provider, {
              value: {
                  surfaceConfig: l,
                  locale: r,
                  numberFormat: p,
                  durationFormat: f,
                  header: o,
                  onClick: m,
                  renderText: d,
                  resolutionContext: a,
                  resolveFieldValue: (0, y.J)(a),
              },
              children: x(v),
          });
}
