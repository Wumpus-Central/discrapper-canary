n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    l = n(367814),
    o = n(739566),
    s = n(492593),
    c = n(930282),
    u = n(464891),
    d = n(115997);
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function m(e) {
    var t,
        n,
        { message: i, channel: m, content: f, className: h, compact: g, popoutProps: _, hideTimestamp: b = !1, withFooter: x = !1 } = e,
        y = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['message', 'channel', 'content', 'className', 'compact', 'popoutProps', 'hideTimestamp', 'withFooter']);
    let E = (0, o.ZP)(i),
        v = (0, l.Z)(E);
    return (0, r.jsx)('div', {
        className: a()({ [d.withFooter]: x }, d.embedCard, { [d.compact]: g }, h),
        children: (0, r.jsx)(
            s.Z,
            ((t = p({}, y)),
            (n = n =
                {
                    className: a()(d.messageContainer, { [d.compact]: g }),
                    childrenMessageContent: (0, r.jsx)(c.ZP, {
                        className: a()(d.__invalid_messageContent, { [d.compact]: g }),
                        message: i,
                        content: f
                    }),
                    childrenHeader: (0, r.jsx)(
                        u.ZP,
                        p(
                            {
                                message: i,
                                channel: m,
                                author: E,
                                guildId: null == m ? void 0 : m.guild_id,
                                compact: g,
                                hideTimestamp: b,
                                className: a()(d.header, { [d.compact]: g })
                            },
                            null != _ ? _ : {}
                        )
                    ),
                    compact: g,
                    guildId: null == m ? void 0 : m.guild_id,
                    authorHasGradientRole: v
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
            t)
        )
    });
}
