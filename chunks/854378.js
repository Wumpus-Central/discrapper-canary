"use strict";
n.d(t, {
    $v: () => D,
    Ay: () => k,
    CK: () => P,
    F4: () => y,
    KE: () => x,
    ME: () => M,
    R1: () => w,
    _V: () => O,
    eB: () => b,
    eu: () => L,
    hE: () => C,
    pd: () => v,
    tK: () => R,
    xt: () => G,
});
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    s = n(97808),
    l = n(297264),
    o = n(834730),
    d = n(778712),
    c = n(292666),
    u = n(821609),
    _ = n(43990),
    E = n(571694),
    A = n(47891),
    h = n(235986),
    I = n(915089),
    f = n(548118),
    p = n(53505),
    T = n(975571),
    m = n(652215),
    g = n(375708),
    S = n(337321);
let N = s.eu;
function C(e) {
    let { className: t, id: n, children: r, variant: s = "heading-xl/semibold" } = e;
    return (0, i.jsx)(l.D, { variant: s, color: "text-strong", className: a()(S.DD, t), id: n, children: r });
}
function R(e) {
    let { className: t, children: n } = e;
    return (0, i.jsx)(o.E, { variant: "text-md/normal", color: "text-default", className: t, children: n });
}
function O(e) {
    let { className: t, src: n } = e;
    return (0, i.jsx)("img", { alt: "", src: n, className: a()(S.Sl, t) });
}
function L(e) {
    let { className: t, src: n, size: r } = e;
    return (0, i.jsx)(N, { src: n, size: r, className: a()(S.yt, t), "aria-hidden": !0 });
}
function D(e) {
    let { guild: t, size: n, animate: r = !1, className: a } = e;
    return (0, i.jsx)(f.Ay, { active: !0, guild: t, size: n, animate: r, className: a });
}
function y(e) {
    let { className: t, channel: n, size: r } = e;
    return (0, i.jsx)(N, { src: (0, E.Y)(n), size: r, className: a()(S.TP, t), "aria-hidden": !0 });
}
function v(e) {
    let {
            label: t,
            error: n,
            placeholder: r,
            value: a,
            className: s,
            setRef: l,
            type: o = "text",
            onChange: d,
            autoComplete: u,
            autoFocus: _,
            maxLength: E,
            spellCheck: A,
            name: h,
            description: f,
            required: p,
            onFocus: T,
            onBlur: m,
        } = e,
        g = (0, I.GV)(),
        S = (0, i.jsx)(c.k, {
            name: h,
            type: o,
            value: a,
            inputRef: l,
            placeholder: r,
            "aria-label": t,
            onChange: d,
            autoComplete: u,
            autoFocus: _,
            maxLength: E,
            spellCheck: A,
            id: g,
            onFocus: T,
            onBlur: m,
            label: t,
            error: n,
            required: p,
            description: f,
        });
    return null != s ? (0, i.jsx)("div", { className: s, children: S }) : S;
}
function b(e) {
    let { className: t, children: n } = e;
    return (0, i.jsx)("div", { className: a()(S.om, t), children: n });
}
function M(e) {
    let { className: t, children: n } = e;
    return (0, i.jsx)(o.E, { variant: "text-xs/normal", className: a()(S.Sv, t), children: n });
}
function P(e) {
    let { className: t } = e;
    return (0, i.jsx)(h.A, {
        direction: h.A.Direction.VERTICAL,
        align: h.A.Align.CENTER,
        className: t,
        children: (0, i.jsx)(A.A, { className: S.$$ }),
    });
}
function U(e) {
    return (0, i.jsx)(o.E, {
        tag: "span",
        className: e?.className,
        variant: "text-sm/normal",
        color: "text-default",
        children: e?.children,
    });
}
function w(e) {
    let t,
        { online: n, total: r, className: s, flat: l, textClassName: o, renderText: d = U } = e;
    return null == r
        ? null
        : (null != n &&
              n > 0 &&
              (t = (0, i.jsxs)("div", {
                  className: a()(S.Io, S.L1, l && S.Z6),
                  children: [
                      (0, i.jsx)("i", { className: S._o }),
                      d({ className: o, children: g.intl.format(g.t["LC+S+m"], { membersOnline: n }) }),
                  ],
              })),
          (0, i.jsxs)(h.A, {
              justify: h.A.Justify.CENTER,
              className: s,
              children: [
                  t,
                  (0, i.jsxs)("div", {
                      className: a()(S.Io, l && S.Z6),
                      children: [
                          (0, i.jsx)("i", { className: S.jk }),
                          d({ className: o, children: g.intl.format(g.t.zRl6XR, { count: r }) }),
                      ],
                  }),
              ],
          }));
}
function G(e) {
    let { user: t } = e;
    return null == t
        ? null
        : (0, i.jsxs)("div", {
              className: S.l1,
              children: [
                  (0, i.jsx)(o.E, {
                      tag: "span",
                      variant: "text-md/normal",
                      color: "text-default",
                      children: g.intl.string(g.t["/8WWvE"]),
                  }),
                  (0, i.jsx)(L, {
                      className: S.yj,
                      src: t.getAvatarURL(void 0, 24),
                      size: d._3.SIZE_24,
                      "aria-label": t.username,
                  }),
                  (0, i.jsx)(o.E, {
                      className: S.pp,
                      tag: "span",
                      variant: "text-md/semibold",
                      color: "text-strong",
                      children: t.username,
                  }),
              ],
          });
}
function x(e) {
    let { className: t } = e;
    return (0, i.jsxs)(b, {
        className: t,
        children: [
            (0, i.jsx)(u.$, {
                text: g.intl.format(g.t.JoS1i3, { platform: (0, p.Vf)() }),
                variant: "secondary",
                fullWidth: !0,
                onClick: () => window.open((0, p.SU)()),
            }),
            (0, i.jsx)(M, {
                className: S.UM,
                children: g.intl.format(g.t.wO1VBk, {
                    supportedBrowserURL: T.A.getArticleURL(m.MVz.SUPPORTED_BROWSERS),
                }),
            }),
        ],
    });
}
null == N && (N = () => null), (D.Sizes = f.Ay.Sizes), (y.Sizes = d._3);
let k = function (e) {
    let {
        className: t,
        contentClassName: n,
        tag: r = "section",
        onSubmit: s,
        children: l,
        expanded: o = !1,
        theme: d = m.NJ8.DARK,
        style: c,
        transparent: u = !1,
    } = e;
    return (0, i.jsx)(_.N, {
        theme: d,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, i.jsxs)(r, {
                "data-theme": d,
                onSubmit: s,
                style: c,
                className: a()(o ? S.PR : S.sL, u && S.JO, e, t),
                children: [
                    (0, i.jsx)("div", { className: S.ie }),
                    (0, i.jsx)("div", { className: a()(S.f4, n), children: l }),
                ],
            }),
    });
};
