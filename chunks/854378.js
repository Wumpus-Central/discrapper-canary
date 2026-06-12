"use strict";
n.d(t, {
    $v: () => O,
    Ay: () => G,
    CK: () => M,
    F4: () => b,
    KE: () => U,
    ME: () => w,
    R1: () => x,
    _V: () => C,
    eB: () => L,
    eu: () => R,
    hE: () => N,
    pd: () => D,
    tK: () => v,
    xt: () => k,
});
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(97808),
    o = n(534514),
    l = n(834730),
    u = n(778712),
    c = n(292666),
    d = n(821609),
    _ = n(43990),
    h = n(571694),
    f = n(47891),
    p = n(235986),
    E = n(915089),
    m = n(548118),
    g = n(53505),
    A = n(975571),
    I = n(652215),
    T = n(375708),
    S = n(337321);
let y = a.eu;
null == y && (y = () => null);
let N = (e) => {
        let { className: t, id: n, children: r, variant: a = "heading-xl/semibold" } = e;
        return (0, i.jsx)(o.D, { variant: a, color: "text-strong", className: s()(S.DD, t), id: n, children: r });
    },
    v = (e) => {
        let { className: t, children: n } = e;
        return (0, i.jsx)(l.E, { variant: "text-md/normal", color: "text-default", className: t, children: n });
    },
    C = (e) => {
        let { className: t, src: n } = e;
        return (0, i.jsx)("img", { alt: "", src: n, className: s()(S.Sl, t) });
    },
    R = (e) => {
        let { className: t, src: n, size: r } = e;
        return (0, i.jsx)(y, { src: n, size: r, className: s()(S.yt, t), "aria-hidden": !0 });
    },
    O = (e) => {
        let { guild: t, size: n, animate: r = !1, className: s } = e;
        return (0, i.jsx)(m.Ay, { active: !0, guild: t, size: n, animate: r, className: s });
    };
O.Sizes = m.Ay.Sizes;
let b = (e) => {
    let { className: t, channel: n, size: r } = e;
    return (0, i.jsx)(y, { src: (0, h.Y)(n), size: r, className: s()(S.TP, t), "aria-hidden": !0 });
};
b.Sizes = u._3;
let D = (e) => {
        let {
                label: t,
                error: n,
                placeholder: r,
                value: s,
                className: a,
                setRef: o,
                type: l = "text",
                onChange: u,
                autoComplete: d,
                autoFocus: _,
                maxLength: h,
                spellCheck: f,
                name: p,
                description: m,
                required: g,
                onFocus: A,
                onBlur: I,
            } = e,
            T = (0, E.GV)(),
            S = (0, i.jsx)(c.k, {
                name: p,
                type: l,
                value: s,
                inputRef: o,
                placeholder: r,
                "aria-label": t,
                onChange: u,
                autoComplete: d,
                autoFocus: _,
                maxLength: h,
                spellCheck: f,
                id: T,
                onFocus: A,
                onBlur: I,
                label: t,
                error: n,
                required: g,
                description: m,
            });
        return null != a ? (0, i.jsx)("div", { className: a, children: S }) : S;
    },
    L = (e) => {
        let { className: t, children: n } = e;
        return (0, i.jsx)("div", { className: s()(S.om, t), children: n });
    },
    w = (e) => {
        let { className: t, children: n } = e;
        return (0, i.jsx)(l.E, { variant: "text-xs/normal", className: s()(S.Sv, t), children: n });
    },
    M = (e) => {
        let { className: t } = e;
        return (0, i.jsx)(p.A, {
            direction: p.A.Direction.VERTICAL,
            align: p.A.Align.CENTER,
            className: t,
            children: (0, i.jsx)(f.A, { className: S.$$ }),
        });
    },
    P = (e) =>
        (0, i.jsx)(l.E, {
            tag: "span",
            className: e?.className,
            variant: "text-sm/normal",
            color: "text-default",
            children: e?.children,
        }),
    x = (e) => {
        let t,
            { online: n, total: r, className: a, flat: o, textClassName: l, renderText: u = P } = e;
        return null == r
            ? null
            : (null != n &&
                  n > 0 &&
                  (t = (0, i.jsxs)("div", {
                      className: s()(S.Io, S.L1, o && S.Z6),
                      children: [
                          (0, i.jsx)("i", { className: S._o }),
                          u({ className: l, children: T.intl.format(T.t["LC+S+m"], { membersOnline: n }) }),
                      ],
                  })),
              (0, i.jsxs)(p.A, {
                  justify: p.A.Justify.CENTER,
                  className: a,
                  children: [
                      t,
                      (0, i.jsxs)("div", {
                          className: s()(S.Io, o && S.Z6),
                          children: [
                              (0, i.jsx)("i", { className: S.jk }),
                              u({ className: l, children: T.intl.format(T.t.zRl6XR, { count: r }) }),
                          ],
                      }),
                  ],
              }));
    },
    k = (e) => {
        let { user: t } = e;
        return null == t
            ? null
            : (0, i.jsxs)("div", {
                  className: S.l1,
                  children: [
                      (0, i.jsx)(l.E, {
                          tag: "span",
                          variant: "text-md/normal",
                          color: "text-default",
                          children: T.intl.string(T.t["/8WWvE"]),
                      }),
                      (0, i.jsx)(R, {
                          className: S.yj,
                          src: t.getAvatarURL(void 0, 24),
                          size: u._3.SIZE_24,
                          "aria-label": t.username,
                      }),
                      (0, i.jsx)(l.E, {
                          className: S.pp,
                          tag: "span",
                          variant: "text-md/semibold",
                          color: "text-strong",
                          children: t.username,
                      }),
                  ],
              });
    },
    U = (e) => {
        let { className: t } = e;
        return (0, i.jsxs)(L, {
            className: t,
            children: [
                (0, i.jsx)(d.$, {
                    text: T.intl.format(T.t.JoS1i3, { platform: (0, g.Vf)() }),
                    variant: "secondary",
                    fullWidth: !0,
                    onClick: () => window.open((0, g.SU)()),
                }),
                (0, i.jsx)(w, {
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
            tag: r = "section",
            onSubmit: a,
            children: o,
            expanded: l = !1,
            theme: u = I.NJ8.DARK,
            style: c,
        } = e;
        return (0, i.jsx)(_.N, {
            theme: u,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, i.jsxs)(r, {
                    "data-theme": u,
                    onSubmit: a,
                    style: c,
                    className: s()(l ? S.PR : S.sL, e, t),
                    children: [
                        (0, i.jsx)("div", { className: S.ie }),
                        (0, i.jsx)("div", { className: s()(S.f4, n), children: o }),
                    ],
                }),
        });
    };
