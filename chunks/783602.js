n.d(t, {
    A: () => h,
});
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(397927),
    o = n(341915),
    c = n(890687),
    d = n(270045),
    u = n(963713),
    m = n(985018),
    p = n(729836);

function h() {
    let { quest: e, onCtxMenuOpen: t, onCtxMenuClose: n, onCtxMenuSelect: i } = l.useContext(u.T),
        h = (0, c.S5)(e.config.expiresAt);
    return (0, a.jsxs)("div", {
        className: p.pS,
        children: [
            (0, a.jsx)(s.Text, {
                variant: "text-xxs/medium",
                className: r()(p.Uu, p.TK),
                children: m.intl.format(m.t["pX+fmn"], {
                    expirationDate: h,
                }),
            }),
            (0, a.jsx)(d.C, {
                onOpen: t,
                onClose: n,
                onSelect: i,
                questContent: o.uF.QUEST_BAR_V2,
                quest: e,
                shouldShowDisclosure: !1,
                showShareLink: !0,
                sourceQuestContent: o.uF.QUEST_BAR_V2,
                children: (e) => {
                    var t, n;
                    return (0, a.jsx)(
                        s.DUT,
                        ((t = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    a = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (a = a.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    a.forEach(function (t) {
                                        var a;
                                        (a = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: a,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = a);
                                    });
                            }
                            return e;
                        })({}, e)),
                        (n = n =
                            {
                                className: p.rb,
                                "aria-label": m.intl.string(m.t.DEoVWZ),
                                children: (0, a.jsx)(s.jNK, {
                                    size: "md",
                                    color: "currentColor",
                                    className: r()(p.Bx, p.U9),
                                }),
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var a = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, a);
                                  }
                                  return n;
                              })(Object(n)).forEach(function (e) {
                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                              }),
                        t),
                    );
                },
            }),
        ],
    });
}
