n.d(t, {
    $v: () => A,
    Ay: () => D,
    CK: () => C,
    F4: () => v,
    KE: () => P,
    ME: () => T,
    R1: () => R,
    _V: () => y,
    eB: () => I,
    eu: () => O,
    hE: () => E,
    pd: () => S,
    tK: () => b,
    xt: () => w,
}),
    n(228524),
    n(864466),
    n(443073);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(571694),
    l = n(902811),
    c = n(235986),
    u = n(915089),
    d = n(263063),
    f = n(53505),
    p = n(975571),
    _ = n(652215),
    h = n(985018),
    m = n(380172);
let g = s.euF;
null == g && (g = () => null);
let E = (e) => {
        let { className: t, id: n, children: i, variant: o = "heading-xl/semibold" } = e;
        return (0, r.jsx)(s.Heading, {
            variant: o,
            color: "text-strong",
            className: a()(m.DD, t),
            id: n,
            children: i,
        });
    },
    b = (e) => {
        let { className: t, children: n } = e;
        return (0, r.jsx)(s.Text, {
            variant: "text-md/normal",
            color: "text-default",
            className: t,
            children: n,
        });
    },
    y = (e) => {
        let { className: t, src: n } = e;
        return (0, r.jsx)("img", {
            alt: "",
            src: n,
            className: a()(m.Sl, t),
        });
    },
    O = (e) => {
        let { className: t, src: n, size: i } = e;
        return (0, r.jsx)(g, {
            src: n,
            size: i,
            className: a()(m.yt, t),
            "aria-hidden": !0,
        });
    },
    A = (e) => {
        let { guild: t, size: n, animate: i = !1, className: a } = e;
        return (0, r.jsx)(d.A, {
            active: !0,
            guild: t,
            size: n,
            animate: i,
            className: a,
        });
    };
A.Sizes = d.A.Sizes;
let v = (e) => {
    let { className: t, channel: n, size: i } = e;
    return (0, r.jsx)(g, {
        src: (0, o.Y)(n),
        size: i,
        className: a()(m.TP, t),
        "aria-hidden": !0,
    });
};
v.Sizes = s._3J;
let S = (e) => {
        let {
                label: t,
                error: n,
                placeholder: i,
                value: a,
                className: o,
                setRef: l,
                type: c = "text",
                onChange: d,
                autoComplete: f,
                autoFocus: p,
                maxLength: _,
                spellCheck: h,
                name: m,
                description: g,
                required: E,
                onFocus: b,
                onBlur: y,
            } = e,
            O = (0, u.GV)(),
            A = (0, r.jsx)(s.ksK, {
                name: m,
                type: c,
                value: a,
                inputRef: l,
                placeholder: i,
                "aria-label": t,
                onChange: d,
                autoComplete: f,
                autoFocus: p,
                maxLength: _,
                spellCheck: h,
                id: O,
                onFocus: b,
                onBlur: y,
                label: t,
                error: n,
                required: E,
                description: g,
            });
        return null != o
            ? (0, r.jsx)("div", {
                  className: o,
                  children: A,
              })
            : A;
    },
    I = (e) => {
        let { className: t, children: n } = e;
        return (0, r.jsx)("div", {
            className: a()(m.om, t),
            children: n,
        });
    },
    T = (e) => {
        let { className: t, children: n } = e;
        return (0, r.jsx)(s.Text, {
            variant: "text-xs/normal",
            className: a()(m.Sv, t),
            children: n,
        });
    },
    C = (e) => {
        let { className: t } = e;
        return (0, r.jsx)(c.A, {
            direction: c.A.Direction.VERTICAL,
            align: c.A.Align.CENTER,
            className: t,
            children: (0, r.jsx)(l.A, {
                className: m.$$,
            }),
        });
    },
    N = (e) =>
        (0, r.jsx)(s.Text, {
            tag: "span",
            className: null == e ? void 0 : e.className,
            variant: "text-sm/normal",
            color: "text-default",
            children: null == e ? void 0 : e.children,
        }),
    R = (e) => {
        let t,
            { online: n, total: i, className: s, flat: o, textClassName: l, renderText: u = N } = e;
        return null == i
            ? null
            : (null != n &&
                  n > 0 &&
                  (t = (0, r.jsxs)("div", {
                      className: a()(m.Io, m.L1, o && m.Z6),
                      children: [
                          (0, r.jsx)("i", {
                              className: m._o,
                          }),
                          u({
                              className: l,
                              children: h.intl.format(h.t["LC+S+m"], {
                                  membersOnline: n,
                              }),
                          }),
                      ],
                  })),
              (0, r.jsxs)(c.A, {
                  justify: c.A.Justify.CENTER,
                  className: s,
                  children: [
                      t,
                      (0, r.jsxs)("div", {
                          className: a()(m.Io, o && m.Z6),
                          children: [
                              (0, r.jsx)("i", {
                                  className: m.jk,
                              }),
                              u({
                                  className: l,
                                  children: h.intl.format(h.t.zRl6XR, {
                                      count: i,
                                  }),
                              }),
                          ],
                      }),
                  ],
              }));
    },
    w = (e) => {
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
                      (0, r.jsx)(O, {
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
    P = (e) => {
        let { className: t } = e;
        return (0, r.jsxs)(I, {
            className: t,
            children: [
                (0, r.jsx)(s.Button, {
                    text: h.intl.format(h.t.JoS1i3, {
                        platform: (0, f.Vf)(),
                    }),
                    variant: "secondary",
                    fullWidth: !0,
                    onClick: () => window.open((0, f.SU)()),
                }),
                (0, r.jsx)(T, {
                    className: m.UM,
                    children: h.intl.format(h.t.wO1VBk, {
                        supportedBrowserURL: p.A.getArticleURL(_.MVz.SUPPORTED_BROWSERS),
                    }),
                }),
            ],
        });
    },
    D = (e) => {
        let {
            className: t,
            contentClassName: n,
            tag: i = "section",
            onSubmit: o,
            children: l,
            expanded: c = !1,
            theme: u = _.NJ8.DARK,
            style: d,
        } = e;
        return (0, r.jsx)(s.NPJ, {
            theme: u,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, r.jsxs)(i, {
                    "data-theme": u,
                    onSubmit: o,
                    style: d,
                    className: a()(c ? m.PR : m.sL, e, t),
                    children: [
                        (0, r.jsx)("div", {
                            className: m.ie,
                        }),
                        (0, r.jsx)("div", {
                            className: a()(m.f4, n),
                            children: l,
                        }),
                    ],
                }),
        });
    };
