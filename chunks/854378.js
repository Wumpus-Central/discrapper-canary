"use strict";
n.d(t, {
    $v: () => C,
    Ay: () => G,
    CK: () => M,
    F4: () => b,
    KE: () => x,
    ME: () => w,
    R1: () => U,
    _V: () => R,
    eB: () => L,
    eu: () => v,
    hE: () => N,
    pd: () => D,
    tK: () => O,
    xt: () => k,
});
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(97808),
    o = n(534514),
    l = n(834730),
    u = n(778712),
    d = n(292666),
    c = n(821609),
    _ = n(43990),
    f = n(571694),
    E = n(902811),
    h = n(235986),
    p = n(915089),
    m = n(263063),
    g = n(53505),
    A = n(975571),
    I = n(652215),
    T = n(985018),
    S = n(337321);
let y = a.eu;
null == y && (y = () => null);
let N = (e) => {
        let { className: t, id: n, children: i, variant: a = "heading-xl/semibold" } = e;
        return (0, r.jsx)(o.D, { variant: a, color: "text-strong", className: s()(S.DD, t), id: n, children: i });
    },
    O = (e) => {
        let { className: t, children: n } = e;
        return (0, r.jsx)(l.E, { variant: "text-md/normal", color: "text-default", className: t, children: n });
    },
    R = (e) => {
        let { className: t, src: n } = e;
        return (0, r.jsx)("img", { alt: "", src: n, className: s()(S.Sl, t) });
    },
    v = (e) => {
        let { className: t, src: n, size: i } = e;
        return (0, r.jsx)(y, { src: n, size: i, className: s()(S.yt, t), "aria-hidden": !0 });
    },
    C = (e) => {
        let { guild: t, size: n, animate: i = !1, className: s } = e;
        return (0, r.jsx)(m.Ay, { active: !0, guild: t, size: n, animate: i, className: s });
    };
C.Sizes = m.Ay.Sizes;
let b = (e) => {
    let { className: t, channel: n, size: i } = e;
    return (0, r.jsx)(y, { src: (0, f.Y)(n), size: i, className: s()(S.TP, t), "aria-hidden": !0 });
};
b.Sizes = u._3;
let D = (e) => {
        let {
                label: t,
                error: n,
                placeholder: i,
                value: s,
                className: a,
                setRef: o,
                type: l = "text",
                onChange: u,
                autoComplete: c,
                autoFocus: _,
                maxLength: f,
                spellCheck: E,
                name: h,
                description: m,
                required: g,
                onFocus: A,
                onBlur: I,
            } = e,
            T = (0, p.GV)(),
            S = (0, r.jsx)(d.k, {
                name: h,
                type: l,
                value: s,
                inputRef: o,
                placeholder: i,
                "aria-label": t,
                onChange: u,
                autoComplete: c,
                autoFocus: _,
                maxLength: f,
                spellCheck: E,
                id: T,
                onFocus: A,
                onBlur: I,
                label: t,
                error: n,
                required: g,
                description: m,
            });
        return null != a ? (0, r.jsx)("div", { className: a, children: S }) : S;
    },
    L = (e) => {
        let { className: t, children: n } = e;
        return (0, r.jsx)("div", { className: s()(S.om, t), children: n });
    },
    w = (e) => {
        let { className: t, children: n } = e;
        return (0, r.jsx)(l.E, { variant: "text-xs/normal", className: s()(S.Sv, t), children: n });
    },
    M = (e) => {
        let { className: t } = e;
        return (0, r.jsx)(h.A, {
            direction: h.A.Direction.VERTICAL,
            align: h.A.Align.CENTER,
            className: t,
            children: (0, r.jsx)(E.A, { className: S.$$ }),
        });
    },
    P = (e) =>
        (0, r.jsx)(l.E, {
            tag: "span",
            className: e?.className,
            variant: "text-sm/normal",
            color: "text-default",
            children: e?.children,
        }),
    U = (e) => {
        let t,
            { online: n, total: i, className: a, flat: o, textClassName: l, renderText: u = P } = e;
        return null == i
            ? null
            : (null != n &&
                  n > 0 &&
                  (t = (0, r.jsxs)("div", {
                      className: s()(S.Io, S.L1, o && S.Z6),
                      children: [
                          (0, r.jsx)("i", { className: S._o }),
                          u({ className: l, children: T.intl.format(T.t["LC+S+m"], { membersOnline: n }) }),
                      ],
                  })),
              (0, r.jsxs)(h.A, {
                  justify: h.A.Justify.CENTER,
                  className: a,
                  children: [
                      t,
                      (0, r.jsxs)("div", {
                          className: s()(S.Io, o && S.Z6),
                          children: [
                              (0, r.jsx)("i", { className: S.jk }),
                              u({ className: l, children: T.intl.format(T.t.zRl6XR, { count: i }) }),
                          ],
                      }),
                  ],
              }));
    },
    k = (e) => {
        let { user: t } = e;
        return null == t
            ? null
            : (0, r.jsxs)("div", {
                  className: S.l1,
                  children: [
                      (0, r.jsx)(l.E, {
                          tag: "span",
                          variant: "text-md/normal",
                          color: "text-default",
                          children: T.intl.string(T.t["/8WWvE"]),
                      }),
                      (0, r.jsx)(v, {
                          className: S.yj,
                          src: t.getAvatarURL(void 0, 24),
                          size: u._3.SIZE_24,
                          "aria-label": t.username,
                      }),
                      (0, r.jsx)(l.E, {
                          className: S.pp,
                          tag: "span",
                          variant: "text-md/semibold",
                          color: "text-strong",
                          children: t.username,
                      }),
                  ],
              });
    },
    x = (e) => {
        let { className: t } = e;
        return (0, r.jsxs)(L, {
            className: t,
            children: [
                (0, r.jsx)(c.$, {
                    text: T.intl.format(T.t.JoS1i3, { platform: (0, g.Vf)() }),
                    variant: "secondary",
                    fullWidth: !0,
                    onClick: () => window.open((0, g.SU)()),
                }),
                (0, r.jsx)(w, {
                    className: S.UM,
                    children: T.intl.format(T.t.wO1VBk, {
                        supportedBrowserURL: A.A.getArticleURL(I.MVz.SUPPORTED_BROWSERS),
                    }),
                }),
            ],
        });
    },
    G = (e) => {
        let {
            className: t,
            contentClassName: n,
            tag: i = "section",
            onSubmit: a,
            children: o,
            expanded: l = !1,
            theme: u = I.NJ8.DARK,
            style: d,
        } = e;
        return (0, r.jsx)(_.N, {
            theme: u,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, r.jsxs)(i, {
                    "data-theme": u,
                    onSubmit: a,
                    style: d,
                    className: s()(l ? S.PR : S.sL, e, t),
                    children: [
                        (0, r.jsx)("div", { className: S.ie }),
                        (0, r.jsx)("div", { className: s()(S.f4, n), children: o }),
                    ],
                }),
        });
    };
