n.d(t, { A: () => o }), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(372598),
    s = n(53594),
    a = n(449585),
    c = n(864557);
function o(e) {
    let { rule: t, onChangeRule: n } = e,
        o = i.useMemo(() => (0, s.J6)(t.triggerType), [t.triggerType]),
        d = a.Bx(t.guildId),
        u = i.useMemo(() => (0, l.XO)(), []),
        f = (e, r) => {
            var i, l;
            if (null == r) return;
            let s = t.actions.some((e) => e.type === r.type),
                a = [...t.actions, r];
            if (s) {
                let n = t.actions.filter((e) => e.type !== r.type);
                a = e ? [...n, r] : n;
            }
            n(
                ((i = (function (e) {
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
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, t)),
                (l = l = { actions: a }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(l)).forEach(function (e) {
                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                      }),
                i),
            );
        };
    return (0, r.jsx)(r.Fragment, {
        children: o.map((e) => {
            let n = t.actions.find((t) => t.type === e);
            return (0, r.jsx)(
                c.A,
                {
                    guildId: t.guildId,
                    triggerType: t.triggerType,
                    action: null != n ? n : u[e],
                    toggled: null != n,
                    onToggleAction: async (n) => {
                        let r = t.actions.find((t) => t.type === e),
                            i = null != r,
                            l = u[e],
                            s = n ? r : l;
                        if (null != s && (!i || n)) {
                            let n = d[e];
                            null != n ? f(!0, await n(t, s)) : f(!0, s);
                        } else f(!1, i ? r : l);
                    },
                },
                e,
            );
        }),
    });
}
