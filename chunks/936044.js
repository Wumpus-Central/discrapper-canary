n.d(t, {
    A: () => p,
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    a = n(763754),
    s = n(491182),
    o = n(291812),
    c = n(643204),
    u = n(759522);

function d(e) {
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
}

function p(e) {
    var t, n;
    let {
            message: i,
            channel: p,
            content: m,
            className: f,
            compact: g,
            popoutProps: h,
            hideTimestamp: _ = !1,
            withFooter: b = !1,
        } = e,
        A = (function (e, t) {
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
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                    return i;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return l;
        })(e, ["message", "channel", "content", "className", "compact", "popoutProps", "hideTimestamp", "withFooter"]),
        y = (0, a.Ay)(i);
    return (0, r.jsx)("div", {
        className: l()(
            {
                [u.Ym]: b,
            },
            u.gD,
            {
                [u.oE]: g,
            },
            f,
        ),
        children: (0, r.jsx)(
            s.A,
            ((t = d({}, A)),
            (n = n =
                {
                    className: l()(u.zC, {
                        [u.oE]: g,
                    }),
                    childrenMessageContent: (0, r.jsx)(o.Ay, {
                        className: l()(u.__invalid_messageContent, {
                            [u.oE]: g,
                        }),
                        message: i,
                        content: m,
                        compact: null != g && g,
                    }),
                    childrenHeader: (0, r.jsx)(
                        c.Ay,
                        d(
                            {
                                message: i,
                                channel: p,
                                author: y,
                                guildId: null == p ? void 0 : p.guild_id,
                                compact: g,
                                hideTimestamp: _,
                                className: l()(u.wx, {
                                    [u.oE]: g,
                                }),
                            },
                            null != h ? h : {},
                        ),
                    ),
                    compact: g,
                    author: y,
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
        ),
    });
}
