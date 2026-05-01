n.d(t, {
    $v: () => b,
    Ay: () => F,
    CK: () => P,
    F4: () => T,
    KE: () => R,
    ME: () => N,
    R1: () => x,
    _V: () => k,
    eB: () => I,
    eu: () => L,
    hE: () => w,
    pd: () => K,
    tK: () => M,
    xt: () => D,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    l = n(97808),
    s = n(534514),
    o = n(834730),
    u = n(778712),
    d = n(292666),
    c = n(821609),
    h = n(43990),
    y = n(571694),
    p = n(902811),
    f = n(235986),
    m = n(915089),
    E = n(548118),
    _ = n(53505),
    g = n(975571),
    C = n(652215),
    v = n(985018),
    S = n(337321);
let A = l.eu;
null == A && (A = () => null);
let w = (e) => {
        let { className: t, id: n, children: i, variant: l = "heading-xl/semibold" } = e;
        return (0, r.jsx)(s.D, { variant: l, color: "text-strong", className: a()(S.DD, t), id: n, children: i });
    },
    M = (e) => {
        let { className: t, children: n } = e;
        return (0, r.jsx)(o.E, { variant: "text-md/normal", color: "text-default", className: t, children: n });
    },
    k = (e) => {
        let { className: t, src: n } = e;
        return (0, r.jsx)("img", { alt: "", src: n, className: a()(S.Sl, t) });
    },
    L = (e) => {
        let { className: t, src: n, size: i } = e;
        return (0, r.jsx)(A, { src: n, size: i, className: a()(S.yt, t), "aria-hidden": !0 });
    },
    b = (e) => {
        let { guild: t, size: n, animate: i = !1, className: a } = e;
        return (0, r.jsx)(E.Ay, { active: !0, guild: t, size: n, animate: i, className: a });
    };
b.Sizes = E.Ay.Sizes;
let T = (e) => {
    let { className: t, channel: n, size: i } = e;
    return (0, r.jsx)(A, { src: (0, y.Y)(n), size: i, className: a()(S.TP, t), "aria-hidden": !0 });
};
T.Sizes = u._3;
let K = (e) => {
        let {
                label: t,
                error: n,
                placeholder: i,
                value: a,
                className: l,
                setRef: s,
                type: o = "text",
                onChange: u,
                autoComplete: c,
                autoFocus: h,
                maxLength: y,
                spellCheck: p,
                name: f,
                description: E,
                required: _,
                onFocus: g,
                onBlur: C,
            } = e,
            v = (0, m.GV)(),
            S = (0, r.jsx)(d.k, {
                name: f,
                type: o,
                value: a,
                inputRef: s,
                placeholder: i,
                "aria-label": t,
                onChange: u,
                autoComplete: c,
                autoFocus: h,
                maxLength: y,
                spellCheck: p,
                id: v,
                onFocus: g,
                onBlur: C,
                label: t,
                error: n,
                required: _,
                description: E,
            });
        return null != l ? (0, r.jsx)("div", { className: l, children: S }) : S;
    },
    I = (e) => {
        let { className: t, children: n } = e;
        return (0, r.jsx)("div", { className: a()(S.om, t), children: n });
    },
    N = (e) => {
        let { className: t, children: n } = e;
        return (0, r.jsx)(o.E, { variant: "text-xs/normal", className: a()(S.Sv, t), children: n });
    },
    P = (e) => {
        let { className: t } = e;
        return (0, r.jsx)(f.A, {
            direction: f.A.Direction.VERTICAL,
            align: f.A.Align.CENTER,
            className: t,
            children: (0, r.jsx)(p.A, { className: S.$$ }),
        });
    },
    O = (e) =>
        (0, r.jsx)(o.E, {
            tag: "span",
            className: e?.className,
            variant: "text-sm/normal",
            color: "text-default",
            children: e?.children,
        }),
    x = (e) => {
        let t,
            { online: n, total: i, className: l, flat: s, textClassName: o, renderText: u = O } = e;
        return null == i
            ? null
            : (null != n &&
                  n > 0 &&
                  (t = (0, r.jsxs)("div", {
                      className: a()(S.Io, S.L1, s && S.Z6),
                      children: [
                          (0, r.jsx)("i", { className: S._o }),
                          u({ className: o, children: v.intl.format(v.t["LC+S+m"], { membersOnline: n }) }),
                      ],
                  })),
              (0, r.jsxs)(f.A, {
                  justify: f.A.Justify.CENTER,
                  className: l,
                  children: [
                      t,
                      (0, r.jsxs)("div", {
                          className: a()(S.Io, s && S.Z6),
                          children: [
                              (0, r.jsx)("i", { className: S.jk }),
                              u({ className: o, children: v.intl.format(v.t.zRl6XR, { count: i }) }),
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
                  className: S.l1,
                  children: [
                      (0, r.jsx)(o.E, {
                          tag: "span",
                          variant: "text-md/normal",
                          color: "text-default",
                          children: v.intl.string(v.t["/8WWvE"]),
                      }),
                      (0, r.jsx)(L, {
                          className: S.yj,
                          src: t.getAvatarURL(void 0, 24),
                          size: u._3.SIZE_24,
                          "aria-label": t.username,
                      }),
                      (0, r.jsx)(o.E, {
                          className: S.pp,
                          tag: "span",
                          variant: "text-md/semibold",
                          color: "text-strong",
                          children: t.username,
                      }),
                  ],
              });
    },
    R = (e) => {
        let { className: t } = e;
        return (0, r.jsxs)(I, {
            className: t,
            children: [
                (0, r.jsx)(c.$, {
                    text: v.intl.format(v.t.JoS1i3, { platform: (0, _.Vf)() }),
                    variant: "secondary",
                    fullWidth: !0,
                    onClick: () => window.open((0, _.SU)()),
                }),
                (0, r.jsx)(N, {
                    className: S.UM,
                    children: v.intl.format(v.t.wO1VBk, {
                        supportedBrowserURL: g.A.getArticleURL(C.MVz.SUPPORTED_BROWSERS),
                    }),
                }),
            ],
        });
    },
    F = (e) => {
        let {
            className: t,
            contentClassName: n,
            tag: i = "section",
            onSubmit: l,
            children: s,
            expanded: o = !1,
            theme: u = C.NJ8.DARK,
            style: d,
        } = e;
        return (0, r.jsx)(h.N, {
            theme: u,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, r.jsxs)(i, {
                    "data-theme": u,
                    onSubmit: l,
                    style: d,
                    className: a()(o ? S.PR : S.sL, e, t),
                    children: [
                        (0, r.jsx)("div", { className: S.ie }),
                        (0, r.jsx)("div", { className: a()(S.f4, n), children: s }),
                    ],
                }),
        });
    };
