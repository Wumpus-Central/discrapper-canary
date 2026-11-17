var i = n(477900);
n(582128);
var r = n(503698),
    a = n.n(r),
    s = n(97808),
    l = n(534514),
    o = n(834730),
    d = n(778712),
    c = n(95477),
    u = n(821609),
    _ = n(43990),
    E = n(571694),
    A = n(545342),
    f = n(235986),
    h = n(915089),
    I = n(682163),
    p = n(53505),
    m = n(975571),
    g = n(652215),
    T = n(792996),
    S = n(498206);
let N = s.eu;
function C(e) {
    let { className: t, src: n, size: r } = e;
    return (0, i.jsx)(N, { src: n, size: r, className: a()(S.yt, t), "aria-hidden": !0 });
}
function O(e) {
    let { guild: t, size: n, animate: r = !1, className: a } = e;
    return (0, i.jsx)(I.Ay, { active: !0, guild: t, size: n, animate: r, className: a });
}
function R(e) {
    let { className: t, channel: n, size: r } = e;
    return (0, i.jsx)(N, { src: (0, E.Y)(n), size: r, className: a()(S.TP, t), "aria-hidden": !0 });
}
function L(e) {
    let { className: t, children: n } = e;
    return (0, i.jsx)("div", { className: a()(S.om, t), children: n });
}
function y(e) {
    let { className: t, children: n } = e;
    return (0, i.jsx)(o.E, { variant: "body-xs/normal", className: a()(S.Sv, t), children: n });
}
function D(e) {
    return (0, i.jsx)(o.E, {
        tag: "span",
        className: e?.className,
        variant: "body-sm/normal",
        color: "text-default",
        children: e?.children,
    });
}
(null == N && (N = () => null),
    (O.Sizes = I.Ay.Sizes),
    (R.Sizes = d._3),
    n.d(
        t,
        {},
        {
            $v: O,
            Ay: function (e) {
                let {
                    className: t,
                    contentClassName: n,
                    tag: r = "section",
                    onSubmit: s,
                    children: l,
                    expanded: o = !1,
                    theme: d = g.NJ8.DARK,
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
            },
            CK: function (e) {
                let { className: t } = e;
                return (0, i.jsx)(f.A, {
                    direction: f.A.Direction.VERTICAL,
                    align: f.A.Align.CENTER,
                    className: t,
                    children: (0, i.jsx)(A.A, { className: S.$$ }),
                });
            },
            F4: R,
            KE: function (e) {
                let { className: t } = e;
                return (0, i.jsxs)(L, {
                    className: t,
                    children: [
                        (0, i.jsx)(u.$, {
                            text: T.intl.format(T.t.JoS1i3, { platform: (0, p.Vf)() }),
                            variant: "secondary",
                            fullWidth: !0,
                            onClick: () => window.open((0, p.SU)()),
                        }),
                        (0, i.jsx)(y, {
                            className: S.UM,
                            children: T.intl.format(T.t.wO1VBk, {
                                supportedBrowserURL: m.A.getArticleURL(g.MVz.SUPPORTED_BROWSERS),
                            }),
                        }),
                    ],
                });
            },
            ME: y,
            R1: function (e) {
                let t,
                    { online: n, total: r, className: s, flat: l, textClassName: o, renderText: d = D } = e;
                return null == r
                    ? null
                    : (null != n &&
                          n > 0 &&
                          (t = (0, i.jsxs)("div", {
                              className: a()(S.Io, S.L1, l && S.Z6),
                              children: [
                                  (0, i.jsx)("i", { className: S._o }),
                                  d({ className: o, children: T.intl.format(T.t["LC+S+m"], { membersOnline: n }) }),
                              ],
                          })),
                      (0, i.jsxs)(f.A, {
                          justify: f.A.Justify.CENTER,
                          className: s,
                          children: [
                              t,
                              (0, i.jsxs)("div", {
                                  className: a()(S.Io, l && S.Z6),
                                  children: [
                                      (0, i.jsx)("i", { className: S.jk }),
                                      d({ className: o, children: T.intl.format(T.t.zRl6XR, { count: r }) }),
                                  ],
                              }),
                          ],
                      }));
            },
            _V: function (e) {
                let { className: t, src: n } = e;
                return (0, i.jsx)("img", { alt: "", src: n, className: a()(S.Sl, t) });
            },
            eB: L,
            eu: C,
            hE: function (e) {
                let { className: t, id: n, children: r, variant: s = "heading-xl/semibold" } = e;
                return (0, i.jsx)(l.D, {
                    variant: s,
                    color: "text-strong",
                    className: a()(S.DD, t),
                    id: n,
                    children: r,
                });
            },
            pd: function (e) {
                let {
                        label: t,
                        error: n,
                        placeholder: r,
                        value: a,
                        className: s,
                        setRef: l,
                        type: o = "text",
                        revealable: d,
                        onChange: u,
                        autoComplete: _,
                        autoFocus: E,
                        maxLength: A,
                        spellCheck: f,
                        name: I,
                        description: p,
                        required: m,
                        onFocus: g,
                        onBlur: T,
                    } = e,
                    S = (0, h.GV)(),
                    N = (0, i.jsx)(c.k, {
                        name: I,
                        type: o,
                        revealable: d,
                        value: a,
                        inputRef: l,
                        placeholder: r,
                        "aria-label": t,
                        onChange: u,
                        autoComplete: _,
                        autoFocus: E,
                        maxLength: A,
                        spellCheck: f,
                        id: S,
                        onFocus: g,
                        onBlur: T,
                        label: t,
                        error: n,
                        required: m,
                        description: p,
                    });
                return null != s ? (0, i.jsx)("div", { className: s, children: N }) : N;
            },
            tK: function (e) {
                let { className: t, children: n } = e;
                return (0, i.jsx)(o.E, { variant: "body-md/normal", color: "text-default", className: t, children: n });
            },
            xt: function (e) {
                let { user: t } = e;
                return null == t
                    ? null
                    : (0, i.jsxs)("div", {
                          className: S.l1,
                          children: [
                              (0, i.jsx)(o.E, {
                                  tag: "span",
                                  variant: "body-md/normal",
                                  color: "text-default",
                                  children: T.intl.string(T.t["/8WWvE"]),
                              }),
                              (0, i.jsx)(C, {
                                  className: S.yj,
                                  src: t.getAvatarURL(void 0, 24),
                                  size: d._3.SIZE_24,
                                  "aria-label": t.username,
                              }),
                              (0, i.jsx)(o.E, {
                                  className: S.pp,
                                  tag: "span",
                                  variant: "body-md/semibold",
                                  color: "text-strong",
                                  children: t.username,
                              }),
                          ],
                      });
            },
        },
    ));
