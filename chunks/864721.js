n.d(t, {
    A: () => h,
}),
    n(864466),
    n(443073);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(485845),
    o = n(179771),
    l = n(571356),
    c = n(397927),
    u = n(444927),
    d = n(647053),
    f = n(985018),
    p = n(406421);

function _(e) {
    let { text: t, error: n, isFake: i } = e;
    return (0, r.jsxs)("div", {
        className: p.z8,
        children: [
            i
                ? (0, r.jsx)(c.aXh, {
                      size: "md",
                      color: "currentColor",
                      className: a()(p.Kk, p.RC),
                  })
                : (0, r.jsx)(c.yr3, {
                      size: "md",
                      color: "currentColor",
                      className: a()(p.Kk, p.sc),
                  }),
            (0, r.jsxs)("div", {
                className: p.rv,
                children: [
                    (0, r.jsx)(l.E, {
                        variant: "text-md/normal",
                        color: i ? "text-muted" : void 0,
                        children: t,
                    }),
                    null != n
                        ? (0, r.jsx)(l.E, {
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              children: n,
                          })
                        : null,
                ],
            }),
        ],
    });
}

function h(e) {
    var t;
    let {
            application: n,
            accountScopes: i,
            requestedScopes: l,
            integrationType: h,
            errors: m,
            isTrustedName: g = !1,
            noDivider: E = !1,
        } = e,
        b = (0, u.A)(() => d.O_[Math.floor(Math.random() * d.O_.length)]);
    if (0 === i.length) return null;
    let y = b(),
        O = g ? f.t.PZpY9c : f.t["1Hz+Sl"],
        A = h === s.b.USER_INSTALL && l.includes(o.F.APPLICATIONS_COMMANDS);
    return (0, r.jsxs)("div", {
        className: a()(p.Wu, E ? p.bc : void 0),
        children: [
            (0, r.jsx)(c.Heading, {
                variant: "heading-sm/normal",
                className: p.a9,
                children: f.intl.format(O, {
                    application: null != (t = null == n ? void 0 : n.name) ? t : "",
                }),
            }),
            i
                .map((e) =>
                    (0, d.rY)(e, i).map((t, n) => {
                        var i;
                        return (0, r.jsx)(
                            _,
                            {
                                text: t,
                                error: 0 === n ? (null == m || null == (i = m[e]) ? void 0 : i[0]) : void 0,
                            },
                            "".concat(e, "-").concat(n),
                        );
                    }),
                )
                .flat(),
            A &&
                (0, r.jsx)(_, {
                    text: f.intl.string(f.t.Ls2XRq),
                }),
            (0, r.jsx)(_, {
                text: y,
                isFake: !0,
            }),
        ],
    });
}
