n.d(t, {
    A: () => _,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(172218),
    o = n(317097),
    c = n(565645),
    u = n(114166),
    d = n(891734),
    p = n(505527),
    m = n(260821),
    f = n(233080),
    g = n(710504);
let h = i.memo(function (e) {
        let t,
            n,
            {
                useChatFontScaling: i,
                hideEmoji: l,
                emoji: s,
                className: h,
                count: _,
                me: b,
                me_burst: A,
                burst_count: y,
                burst_colors: v,
                readOnly: x,
                isLurking: O,
                isPendingMember: E,
                type: j,
                emojiSize: C,
            } = e,
            I = j === p.v.BURST,
            S = (0, m.IN)(b, A, j),
            T = (0, d.g)(I && null != v ? v : []),
            N = i ? g : f,
            P = I ? y : _,
            w = (0, u.x)(P, m.$Z),
            R = {};
        if (I && null != T) {
            var D;
            let { accentColor: e, backgroundColor: r, opacity: i } = T,
                l = null != (D = (0, o.xp)(null != r ? r : "", i)) ? D : "";
            S && (R.borderColor = r), (R.background = l), (t = e), (n = e);
        }
        let L = {
            minWidth: w,
            color: t,
            borderColor: n,
        };
        return (0, r.jsxs)("div", {
            className: a()(N.reaction, N.reactionInner, h, {
                [N.reactionMe]: S,
                [N.reactionReadOnly]: x && !O && !E,
            }),
            style: R,
            children: [
                (0, r.jsx)(c.A, {
                    className: a()({
                        [N.hideEmoji]: l,
                    }),
                    emojiId: s.id,
                    emojiName: s.name,
                    size: C,
                    animated: I && s.animated,
                }),
                (0, r.jsx)("div", {
                    className: N.reactionCount,
                    style: L,
                    children: P,
                }),
            ],
        });
    }),
    _ = i.memo(function (e) {
        let { showImmediate: t, reactions: n } = e,
            l = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i,
                    l = {};
                if ("u" > typeof Reflect && Reflect.ownKeys) {
                    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                        (r = n[i]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                    return l;
                }
                if (
                    ((l = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            l = Object.getOwnPropertyNames(e);
                        for (r = 0; r < l.length; r++)
                            (n = l[r]),
                                !(t.indexOf(n) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                    (i[n] = e[n]);
                        return i;
                    })(e, t)),
                    Object.getOwnPropertySymbols)
                )
                    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                        (r = n[i]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                return l;
            })(e, ["showImmediate", "reactions"]),
            [a, o] = i.useState(!1),
            [c, u] = i.useTransition(),
            d = i.useCallback(
                (e) => {
                    !e ||
                        a ||
                        c ||
                        u(() => {
                            o(!0);
                        });
                },
                [a, c],
            ),
            f = (0, s.K)(d),
            g = (a && !c) || t ? m.qT : h;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("div", {
                    ref: f,
                }),
                n.map((e) => {
                    var t, n, i;
                    return (0, r.jsx)(
                        g,
                        ((t = (function (e) {
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
                        })({}, l, e)),
                        (n = n =
                            {
                                emojiSize: "reaction",
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(n)).forEach(function (e) {
                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                              }),
                        t),
                        ""
                            .concat(e.type === p.v.BURST ? "burst:" : "")
                            .concat(null != (i = e.emoji.id) ? i : 0, ":")
                            .concat(e.emoji.name),
                    );
                }),
            ],
        });
    });
