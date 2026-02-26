"use strict";
n.d(t, {
    $v: () => S,
    Ay: () => w,
    CK: () => b,
    F4: () => y,
    KE: () => L,
    ME: () => C,
    R1: () => O,
    _V: () => I,
    eB: () => N,
    eu: () => T,
    hE: () => g,
    pd: () => v,
    tK: () => A,
    xt: () => D,
});
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(397927),
    o = n(571694),
    l = n(902811),
    u = n(235986),
    c = n(915089),
    d = n(263063),
    _ = n(53505),
    f = n(975571),
    p = n(652215),
    h = n(985018),
    m = n(334354);
let E = a.euF;
null == E && (E = () => null);
let g = (e) => {
        let { className: t, id: n, children: i, variant: o = "heading-xl/semibold" } = e;
        return (0, r.jsx)(a.Heading, { variant: o, color: "text-strong", className: s()(m.DD, t), id: n, children: i });
    },
    A = (e) => {
        let { className: t, children: n } = e;
        return (0, r.jsx)(a.Text, { variant: "text-md/normal", color: "text-default", className: t, children: n });
    },
    I = (e) => {
        let { className: t, src: n } = e;
        return (0, r.jsx)("img", { alt: "", src: n, className: s()(m.Sl, t) });
    },
    T = (e) => {
        let { className: t, src: n, size: i } = e;
        return (0, r.jsx)(E, { src: n, size: i, className: s()(m.yt, t), "aria-hidden": !0 });
    },
    S = (e) => {
        let { guild: t, size: n, animate: i = !1, className: s } = e;
        return (0, r.jsx)(d.Ay, { active: !0, guild: t, size: n, animate: i, className: s });
    };
S.Sizes = d.Ay.Sizes;
let y = (e) => {
    let { className: t, channel: n, size: i } = e;
    return (0, r.jsx)(E, { src: (0, o.Y)(n), size: i, className: s()(m.TP, t), "aria-hidden": !0 });
};
y.Sizes = a._3J;
let v = (e) => {
        let {
                label: t,
                error: n,
                placeholder: i,
                value: s,
                className: o,
                setRef: l,
                type: u = "text",
                onChange: d,
                autoComplete: _,
                autoFocus: f,
                maxLength: p,
                spellCheck: h,
                name: m,
                description: E,
                required: g,
                onFocus: A,
                onBlur: I,
            } = e,
            T = (0, c.GV)(),
            S = (0, r.jsx)(a.ksK, {
                name: m,
                type: u,
                value: s,
                inputRef: l,
                placeholder: i,
                "aria-label": t,
                onChange: d,
                autoComplete: _,
                autoFocus: f,
                maxLength: p,
                spellCheck: h,
                id: T,
                onFocus: A,
                onBlur: I,
                label: t,
                error: n,
                required: g,
                description: E,
            });
        return null != o ? (0, r.jsx)("div", { className: o, children: S }) : S;
    },
    N = (e) => {
        let { className: t, children: n } = e;
        return (0, r.jsx)("div", { className: s()(m.om, t), children: n });
    },
    C = (e) => {
        let { className: t, children: n } = e;
        return (0, r.jsx)(a.Text, { variant: "text-xs/normal", className: s()(m.Sv, t), children: n });
    },
    b = (e) => {
        let { className: t } = e;
        return (0, r.jsx)(u.A, {
            direction: u.A.Direction.VERTICAL,
            align: u.A.Align.CENTER,
            className: t,
            children: (0, r.jsx)(l.A, { className: m.$$ }),
        });
    },
    R = (e) =>
        (0, r.jsx)(a.Text, {
            tag: "span",
            className: e?.className,
            variant: "text-sm/normal",
            color: "text-default",
            children: e?.children,
        }),
    O = (e) => {
        let t,
            { online: n, total: i, className: a, flat: o, textClassName: l, renderText: c = R } = e;
        return null == i
            ? null
            : (null != n &&
                  n > 0 &&
                  (t = (0, r.jsxs)("div", {
                      className: s()(m.Io, m.L1, o && m.Z6),
                      children: [
                          (0, r.jsx)("i", { className: m._o }),
                          c({ className: l, children: h.intl.format(h.t["LC+S+m"], { membersOnline: n }) }),
                      ],
                  })),
              (0, r.jsxs)(u.A, {
                  justify: u.A.Justify.CENTER,
                  className: a,
                  children: [
                      t,
                      (0, r.jsxs)("div", {
                          className: s()(m.Io, o && m.Z6),
                          children: [
                              (0, r.jsx)("i", { className: m.jk }),
                              c({ className: l, children: h.intl.format(h.t.zRl6XR, { count: i }) }),
                          ],
                      }),
                  ],
              }));
    },
    D = (e) => {
        let { user: t } = e;
        return null == t
            ? null
            : (0, r.jsxs)("div", {
                  className: m.l1,
                  children: [
                      (0, r.jsx)(a.Text, {
                          tag: "span",
                          variant: "text-md/normal",
                          color: "text-default",
                          children: h.intl.string(h.t["/8WWvE"]),
                      }),
                      (0, r.jsx)(T, {
                          className: m.yj,
                          src: t.getAvatarURL(void 0, 24),
                          size: a._3J.SIZE_24,
                          "aria-label": t.username,
                      }),
                      (0, r.jsx)(a.Text, {
                          className: m.pp,
                          tag: "span",
                          variant: "text-md/semibold",
                          color: "text-strong",
                          children: t.username,
                      }),
                  ],
              });
    },
    L = (e) => {
        let { className: t } = e;
        return (0, r.jsxs)(N, {
            className: t,
            children: [
                (0, r.jsx)(a.Button, {
                    text: h.intl.format(h.t.JoS1i3, { platform: (0, _.Vf)() }),
                    variant: "secondary",
                    fullWidth: !0,
                    onClick: () => window.open((0, _.SU)()),
                }),
                (0, r.jsx)(C, {
                    className: m.UM,
                    children: h.intl.format(h.t.wO1VBk, {
                        supportedBrowserURL: f.A.getArticleURL(p.MVz.SUPPORTED_BROWSERS),
                    }),
                }),
            ],
        });
    },
    w = (e) => {
        let {
            className: t,
            contentClassName: n,
            tag: i = "section",
            onSubmit: o,
            children: l,
            expanded: u = !1,
            theme: c = p.NJ8.DARK,
            style: d,
        } = e;
        return (0, r.jsx)(a.NPJ, {
            theme: c,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, r.jsxs)(i, {
                    "data-theme": c,
                    onSubmit: o,
                    style: d,
                    className: s()(u ? m.PR : m.sL, e, t),
                    children: [
                        (0, r.jsx)("div", { className: m.ie }),
                        (0, r.jsx)("div", { className: s()(m.f4, n), children: l }),
                    ],
                }),
        });
    };
