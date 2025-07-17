n.d(t, { Z: () => p });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(739566),
    o = n(492593),
    s = n(930282),
    c = n(464891),
    u = n(115997);
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function p(e) {
    var t,
        n,
        { message: i, channel: p, content: m, className: f, compact: g, popoutProps: h, hideTimestamp: _ = !1, withFooter: b = !1 } = e,
        E = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
            }
            return i;
        })(e, ['message', 'channel', 'content', 'className', 'compact', 'popoutProps', 'hideTimestamp', 'withFooter']);
    let x = (0, a.ZP)(i);
    return (0, r.jsx)('div', {
        className: l()({ [u.withFooter]: b }, u.embedCard, { [u.compact]: g }, f),
        children: (0, r.jsx)(
            o.Z,
            ((t = d({}, E)),
            (n = n =
                {
                    className: l()(u.messageContainer, { [u.compact]: g }),
                    childrenMessageContent: (0, r.jsx)(s.ZP, {
                        className: l()(u.__invalid_messageContent, { [u.compact]: g }),
                        message: i,
                        content: m,
                        compact: null != g && g
                    }),
                    childrenHeader: (0, r.jsx)(
                        c.ZP,
                        d(
                            {
                                message: i,
                                channel: p,
                                author: x,
                                guildId: null == p ? void 0 : p.guild_id,
                                compact: g,
                                hideTimestamp: _,
                                className: l()(u.header, { [u.compact]: g })
                            },
                            null != h ? h : {}
                        )
                    ),
                    compact: g,
                    author: x
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
