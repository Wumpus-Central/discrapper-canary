"use strict";
n.d(t, {
    $v: () => y,
    Ay: () => w,
    CK: () => N,
    F4: () => S,
    KE: () => L,
    ME: () => b,
    R1: () => O,
    _V: () => I,
    eB: () => C,
    eu: () => T,
    hE: () => E,
    pd: () => v,
    tK: () => A,
    xt: () => D,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(571694),
    l = n(902811),
    u = n(235986),
    c = n(915089),
    d = n(263063),
    _ = n(53505),
    f = n(975571),
    p = n(652215),
    h = n(985018),
    m = n(380172);
let g = s.euF;
null == g && (g = () => null);
let E = (e) => {
        let { className: t, id: n, children: i, variant: o = "heading-xl/semibold" } = e;
        return (0, r.jsx)(s.Heading, { variant: o, color: "text-strong", className: a()(m.DD, t), id: n, children: i });
    },
    A = (e) => {
        let { className: t, children: n } = e;
        return (0, r.jsx)(s.Text, { variant: "text-md/normal", color: "text-default", className: t, children: n });
    },
    I = (e) => {
        let { className: t, src: n } = e;
        return (0, r.jsx)("img", { alt: "", src: n, className: a()(m.Sl, t) });
    },
    T = (e) => {
        let { className: t, src: n, size: i } = e;
        return (0, r.jsx)(g, { src: n, size: i, className: a()(m.yt, t), "aria-hidden": !0 });
    },
    y = (e) => {
        let { guild: t, size: n, animate: i = !1, className: a } = e;
        return (0, r.jsx)(d.A, { active: !0, guild: t, size: n, animate: i, className: a });
    };
y.Sizes = d.A.Sizes;
let S = (e) => {
    let { className: t, channel: n, size: i } = e;
    return (0, r.jsx)(g, { src: (0, o.Y)(n), size: i, className: a()(m.TP, t), "aria-hidden": !0 });
};
S.Sizes = s._3J;
let v = (e) => {
        let {
                label: t,
                error: n,
                placeholder: i,
                value: a,
                className: o,
                setRef: l,
                type: u = "text",
                onChange: d,
                autoComplete: _,
                autoFocus: f,
                maxLength: p,
                spellCheck: h,
                name: m,
                description: g,
                required: E,
                onFocus: A,
                onBlur: I,
            } = e,
            T = (0, c.GV)(),
            y = (0, r.jsx)(s.ksK, {
                name: m,
                type: u,
                value: a,
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
                required: E,
                description: g,
            });
        return null != o ? (0, r.jsx)("div", { className: o, children: y }) : y;
    },
    C = (e) => {
        let { className: t, children: n } = e;
        return (0, r.jsx)("div", { className: a()(m.om, t), children: n });
    },
    b = (e) => {
        let { className: t, children: n } = e;
        return (0, r.jsx)(s.Text, { variant: "text-xs/normal", className: a()(m.Sv, t), children: n });
    },
    N = (e) => {
        let { className: t } = e;
        return (0, r.jsx)(u.A, {
            direction: u.A.Direction.VERTICAL,
            align: u.A.Align.CENTER,
            className: t,
            children: (0, r.jsx)(l.A, { className: m.$$ }),
        });
    },
    R = (e) =>
        (0, r.jsx)(s.Text, {
            tag: "span",
            className: e?.className,
            variant: "text-sm/normal",
            color: "text-default",
            children: e?.children,
        }),
    O = (e) => {
        let t,
            { online: n, total: i, className: s, flat: o, textClassName: l, renderText: c = R } = e;
        return null == i
            ? null
            : (null != n &&
                  n > 0 &&
                  (t = (0, r.jsxs)("div", {
                      className: a()(m.Io, m.L1, o && m.Z6),
                      children: [
                          (0, r.jsx)("i", { className: m._o }),
                          c({ className: l, children: h.intl.format(h.t["LC+S+m"], { membersOnline: n }) }),
                      ],
                  })),
              (0, r.jsxs)(u.A, {
                  justify: u.A.Justify.CENTER,
                  className: s,
                  children: [
                      t,
                      (0, r.jsxs)("div", {
                          className: a()(m.Io, o && m.Z6),
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
                      (0, r.jsx)(s.Text, {
                          tag: "span",
                          variant: "text-md/normal",
                          color: "text-default",
                          children: h.intl.string(h.t["/8WWvE"]),
                      }),
                      (0, r.jsx)(T, {
                          className: m.yj,
                          src: t.getAvatarURL(void 0, 24),
                          size: s._3J.SIZE_24,
                          "aria-label": t.username,
                      }),
                      (0, r.jsx)(s.Text, {
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
        return (0, r.jsxs)(C, {
            className: t,
            children: [
                (0, r.jsx)(s.Button, {
                    text: h.intl.format(h.t.JoS1i3, { platform: (0, _.Vf)() }),
                    variant: "secondary",
                    fullWidth: !0,
                    onClick: () => window.open((0, _.SU)()),
                }),
                (0, r.jsx)(b, {
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
        return (0, r.jsx)(s.NPJ, {
            theme: c,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, r.jsxs)(i, {
                    "data-theme": c,
                    onSubmit: o,
                    style: d,
                    className: a()(u ? m.PR : m.sL, e, t),
                    children: [
                        (0, r.jsx)("div", { className: m.ie }),
                        (0, r.jsx)("div", { className: a()(m.f4, n), children: l }),
                    ],
                }),
        });
    };
