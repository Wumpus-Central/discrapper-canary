n.d(t, { Z: () => g });
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(739566),
    s = n(492593),
    l = n(930282),
    c = n(464891),
    u = n(301356);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = m(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function g(e) {
    var {
            message: t,
            channel: n,
            content: i,
            className: d,
            compact: _,
            popoutProps: m,
            hideTimestamp: g = !1,
            withFooter: E = !1,
        } = e,
        b = h(e, [
            "message",
            "channel",
            "content",
            "className",
            "compact",
            "popoutProps",
            "hideTimestamp",
            "withFooter",
        ]);
    let y = (0, a.ZP)(t);
    return (0, r.jsx)("div", {
        className: o()({ [u.withFooter]: E }, u.embedCard, { [u.compact]: _ }, d),
        children: (0, r.jsx)(
            s.Z,
            p(f({}, b), {
                className: o()(u.messageContainer, { [u.compact]: _ }),
                childrenMessageContent: (0, r.jsx)(l.ZP, {
                    className: o()(u.__invalid_messageContent, { [u.compact]: _ }),
                    message: t,
                    content: i,
                    compact: null != _ && _,
                }),
                childrenHeader: (0, r.jsx)(
                    c.ZP,
                    f(
                        {
                            message: t,
                            channel: n,
                            author: y,
                            guildId: null == n ? void 0 : n.guild_id,
                            compact: _,
                            hideTimestamp: g,
                            className: o()(u.header, { [u.compact]: _ }),
                        },
                        null != m ? m : {},
                    ),
                ),
                compact: _,
                author: y,
            }),
        ),
    });
}
