n.d(t, { A: () => A }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(253018),
    l = n(311907),
    c = n(155718),
    u = n(861382),
    d = n(31717),
    f = n(522602),
    p = n(317681),
    _ = n(35277),
    h = n(711371),
    m = n(985018),
    g = n(562650);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function A(e, t, n) {
    let { attributes: i, children: a, element: s } = t;
    switch (s.type) {
        case "applicationCommand":
            let o = u.A.getActiveCommand(n),
                l = 0,
                c = 0;
            if (null != o && o.id === s.command.id) {
                var d;
                let t = p.O7(e);
                for (let e of null != (d = o.options) ? d : []) t.includes(e.name) ? c++ : l++;
            }
            let f = {};
            if (l > 0) {
                let e;
                (e =
                    c > 0
                        ? m.intl.formatToPlainString(m.t.BP8N0K, { count: l })
                        : m.intl.formatToPlainString(m.t.lziVC9, { count: l })),
                    (f["data-trailing-placeholder"] = e);
            }
            return (0, r.jsx)("div", O(b({ className: g.uB }, i, f), { children: a }));
        case "applicationCommandOption":
            return (0, r.jsx)(v, {
                attributes: i,
                channelId: n,
                element: s,
                children: a,
            });
        default:
            return null;
    }
}
let v = (e) => {
    let t,
        { channelId: n, element: a, attributes: p, children: E } = e,
        y = (0, o.f7)(),
        A = (0, o.zL)(),
        v = (0, o.RV)(),
        { optionType: S, errored: I } = (0, l.cf)([u.A], () => {
            var e, t, r;
            return {
                optionType: null == (e = u.A.getOption(n, a.optionName)) ? void 0 : e.type,
                errored:
                    (null == (r = u.A.getOptionState(n, a.optionName)) || null == (t = r.lastValidationResult)
                        ? void 0
                        : t.success) !== !0,
            };
        }, [n, a.optionName]),
        T = (0, l.bG)([f.A], () => f.A.getUpload(n, a.optionName, d.C.SlashCommand), [n, a.optionName]),
        C = a.children[a.children.length - 1],
        N = null != C && h.l5.isText(C) && C.text.endsWith("\n"),
        R = s()(g.S0, g.xP, {
            [g.t$]: A && y,
            [g.$2]: (!A || !y) && I,
        }),
        w = i.useCallback(() => {
            h.VW.isVoid(v, a) || _.b.selectCommandOption(v, a.optionName, !0);
        }, [v, a]);
    return (
        (t =
            S === c.n4.ATTACHMENT
                ? (null == T ? void 0 : T.filename) != null
                    ? (0, r.jsxs)("span", {
                          className: s()(g._K, g.dU),
                          contentEditable: !1,
                          children: [T.filename, E],
                      })
                    : (0, r.jsxs)("span", {
                          className: s()(g._K, g.ZI),
                          contentEditable: !1,
                          children: [m.intl.string(m.t.GRdFni), E],
                      })
                : (0, r.jsxs)("span", {
                      className: g._K,
                      children: [
                          E,
                          N
                              ? (0, r.jsx)("span", {
                                    className: g.Nx,
                                    contentEditable: !1,
                                })
                              : null,
                      ],
                  })),
        (0, r.jsxs)(
            "span",
            O(b({}, p), {
                className: R,
                children: [
                    (0, r.jsxs)("span", {
                        className: g.gA,
                        contentEditable: !1,
                        onClick: w,
                        children: [a.optionDisplayName, "\u200B"],
                    }),
                    t,
                    (0, r.jsx)("span", {
                        contentEditable: !1,
                        children: "\u200B",
                    }),
                ],
            }),
        )
    );
};
