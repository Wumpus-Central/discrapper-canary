n.d(t, {
    $v: () => b,
    Ay: () => F,
    CK: () => D,
    F4: () => L,
    KE: () => P,
    ME: () => K,
    R1: () => R,
    _V: () => S,
    eB: () => N,
    eu: () => I,
    hE: () => v,
    pd: () => T,
    tK: () => M,
    xt: () => x,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    l = n(97808),
    o = n(534514),
    s = n(834730),
    u = n(778712),
    d = n(292666),
    c = n(821609),
    h = n(43990),
    y = n(571694),
    p = n(902811),
    f = n(235986),
    m = n(915089),
    _ = n(548118),
    E = n(53505),
    C = n(975571),
    g = n(652215),
    A = n(985018),
    w = n(337321);
let k = l.eu;
null == k && (k = () => null);
let v = (e) => {
        let { className: t, id: n, children: i, variant: l = "heading-xl/semibold" } = e;
        return (0, r.jsx)(o.D, { variant: l, color: "text-strong", className: a()(w.DD, t), id: n, children: i });
    },
    M = (e) => {
        let { className: t, children: n } = e;
        return (0, r.jsx)(s.E, { variant: "text-md/normal", color: "text-default", className: t, children: n });
    },
    S = (e) => {
        let { className: t, src: n } = e;
        return (0, r.jsx)("img", { alt: "", src: n, className: a()(w.Sl, t) });
    },
    I = (e) => {
        let { className: t, src: n, size: i } = e;
        return (0, r.jsx)(k, { src: n, size: i, className: a()(w.yt, t), "aria-hidden": !0 });
    },
    b = (e) => {
        let { guild: t, size: n, animate: i = !1, className: a } = e;
        return (0, r.jsx)(_.Ay, { active: !0, guild: t, size: n, animate: i, className: a });
    };
b.Sizes = _.Ay.Sizes;
let L = (e) => {
    let { className: t, channel: n, size: i } = e;
    return (0, r.jsx)(k, { src: (0, y.Y)(n), size: i, className: a()(w.TP, t), "aria-hidden": !0 });
};
L.Sizes = u._3;
let T = (e) => {
        let {
                label: t,
                error: n,
                placeholder: i,
                value: a,
                className: l,
                setRef: o,
                type: s = "text",
                onChange: u,
                autoComplete: c,
                autoFocus: h,
                maxLength: y,
                spellCheck: p,
                name: f,
                description: _,
                required: E,
                onFocus: C,
                onBlur: g,
            } = e,
            A = (0, m.GV)(),
            w = (0, r.jsx)(d.k, {
                name: f,
                type: s,
                value: a,
                inputRef: o,
                placeholder: i,
                "aria-label": t,
                onChange: u,
                autoComplete: c,
                autoFocus: h,
                maxLength: y,
                spellCheck: p,
                id: A,
                onFocus: C,
                onBlur: g,
                label: t,
                error: n,
                required: E,
                description: _,
            });
        return null != l ? (0, r.jsx)("div", { className: l, children: w }) : w;
    },
    N = (e) => {
        let { className: t, children: n } = e;
        return (0, r.jsx)("div", { className: a()(w.om, t), children: n });
    },
    K = (e) => {
        let { className: t, children: n } = e;
        return (0, r.jsx)(s.E, { variant: "text-xs/normal", className: a()(w.Sv, t), children: n });
    },
    D = (e) => {
        let { className: t } = e;
        return (0, r.jsx)(f.A, {
            direction: f.A.Direction.VERTICAL,
            align: f.A.Align.CENTER,
            className: t,
            children: (0, r.jsx)(p.A, { className: w.$$ }),
        });
    },
    O = (e) =>
        (0, r.jsx)(s.E, {
            tag: "span",
            className: e?.className,
            variant: "text-sm/normal",
            color: "text-default",
            children: e?.children,
        }),
    R = (e) => {
        let t,
            { online: n, total: i, className: l, flat: o, textClassName: s, renderText: u = O } = e;
        return null == i
            ? null
            : (null != n &&
                  n > 0 &&
                  (t = (0, r.jsxs)("div", {
                      className: a()(w.Io, w.L1, o && w.Z6),
                      children: [
                          (0, r.jsx)("i", { className: w._o }),
                          u({ className: s, children: A.intl.format(A.t["LC+S+m"], { membersOnline: n }) }),
                      ],
                  })),
              (0, r.jsxs)(f.A, {
                  justify: f.A.Justify.CENTER,
                  className: l,
                  children: [
                      t,
                      (0, r.jsxs)("div", {
                          className: a()(w.Io, o && w.Z6),
                          children: [
                              (0, r.jsx)("i", { className: w.jk }),
                              u({ className: s, children: A.intl.format(A.t.zRl6XR, { count: i }) }),
                          ],
                      }),
                  ],
              }));
    },
    x = (e) => {
        let { user: t } = e;
        return null == t
            ? null
            : (0, r.jsxs)("div", {
                  className: w.l1,
                  children: [
                      (0, r.jsx)(s.E, {
                          tag: "span",
                          variant: "text-md/normal",
                          color: "text-default",
                          children: A.intl.string(A.t["/8WWvE"]),
                      }),
                      (0, r.jsx)(I, {
                          className: w.yj,
                          src: t.getAvatarURL(void 0, 24),
                          size: u._3.SIZE_24,
                          "aria-label": t.username,
                      }),
                      (0, r.jsx)(s.E, {
                          className: w.pp,
                          tag: "span",
                          variant: "text-md/semibold",
                          color: "text-strong",
                          children: t.username,
                      }),
                  ],
              });
    },
    P = (e) => {
        let { className: t } = e;
        return (0, r.jsxs)(N, {
            className: t,
            children: [
                (0, r.jsx)(c.$, {
                    text: A.intl.format(A.t.JoS1i3, { platform: (0, E.Vf)() }),
                    variant: "secondary",
                    fullWidth: !0,
                    onClick: () => window.open((0, E.SU)()),
                }),
                (0, r.jsx)(K, {
                    className: w.UM,
                    children: A.intl.format(A.t.wO1VBk, {
                        supportedBrowserURL: C.A.getArticleURL(g.MVz.SUPPORTED_BROWSERS),
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
            children: o,
            expanded: s = !1,
            theme: u = g.NJ8.DARK,
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
                    className: a()(s ? w.PR : w.sL, e, t),
                    children: [
                        (0, r.jsx)("div", { className: w.ie }),
                        (0, r.jsx)("div", { className: a()(w.f4, n), children: o }),
                    ],
                }),
        });
    };
