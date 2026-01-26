n.d(t, {
    A: () => v,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    l = n(442433),
    c = n(143413),
    u = n(734057),
    d = n(661191),
    f = n(321045),
    p = n(456874),
    _ = n(707539),
    h = n(519397),
    m = n(747926),
    g = n(652215),
    E = n(985018),
    y = n(868320);

function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}

function v(e) {
    let { message: t, compact: n } = e,
        i = (0, s.bG)([u.A], () => u.A.getChannel(d.default.castMessageIdAsChannelId(t.id)));
    return null == i
        ? null
        : (0, r.jsx)(A, {
              channel: i,
              compact: n,
              isSystemMessage: (0, c.A)(t),
          });
}

function A(e) {
    let { channel: t, compact: i, isSystemMessage: c } = e;

    function u(e) {
        e.stopPropagation(), (0, m.JA)(t, e.shiftKey);
    }

    function d(e) {
        e.stopPropagation();
        let n = !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
            r = e.shiftKey && !(e.altKey || e.ctrlKey || e.metaKey);
        (e.which === g.Ks6.SPACE || e.which === g.Ks6.ENTER) && (e.preventDefault(), (n || r) && (0, m.JA)(t, r));
    }

    function _(e) {
        (0, l.L3)(e, async () => {
            let { default: e } = await Promise.all([n.e("99011"), n.e("88974"), n.e("9282")]).then(n.bind(n, 44536));
            return (n) =>
                (0, r.jsx)(
                    e,
                    O(
                        {
                            channel: t,
                        },
                        n,
                    ),
                );
        });
    }
    let h = (0, s.bG)([p.A], () => p.A.getCount(t.id)),
        b = I(t),
        v = null != h && h > 0;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: a()(y.GI, {
                    [y.E]: !i,
                    [y.E_]: c,
                }),
            }),
            (0, r.jsx)(o.DUT, {
                onClick: u,
                onKeyDown: d,
                onContextMenu: _,
                "aria-roledescription": E.intl.string(E.t["8ipxiY"]),
                className: a()(y.kL, {
                    [y.og]: c,
                }),
                children: (0, r.jsxs)(o.RDc, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: y.kq,
                            children: [
                                (0, r.jsx)(o.AC4, {
                                    children: E.intl.string(E.t["7Xm5QI"]),
                                }),
                                (0, r.jsx)("span", {
                                    className: y.UU,
                                    children: t.name,
                                }),
                                (0, r.jsx)("span", {
                                    className: y.lO,
                                    "aria-hidden": !v,
                                    children: (0, f.ub)(h, t.id),
                                }),
                            ],
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            "aria-hidden": !0,
                            lineClamp: 1,
                            color: "text-default",
                            className: y.sb,
                            children: b,
                        }),
                    ],
                }),
            }),
        ],
    });
}

function I(e) {
    var t;
    let n = (0, s.bG)([p.A], () => p.A.getMostRecentMessage(e.id)),
        i = (0, s.bG)([p.A], () => p.A.getCount(e.id)),
        a = (0, _.JO)(e);
    return (null == (t = e.threadMetadata) ? void 0 : t.archived)
        ? E.intl.string(E.t.ZTo4HS)
        : null == i || 0 === i
          ? E.intl.string(E.t.HYtNyE)
          : null == n
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)("span", {
                          children: E.intl.string(E.t.ZTo4HS),
                      }),
                      (0, r.jsx)("span", {
                          className: y.vE,
                          children: (0, _.aK)(a),
                      }),
                  ],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(h.A, {
                          message: n,
                          channel: e,
                      }),
                      (0, r.jsx)("span", {
                          className: y.vE,
                          children: (0, _.aK)(a),
                      }),
                  ],
              });
}
