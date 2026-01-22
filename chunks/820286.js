n.d(t, {
    X: () => g,
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(397927),
    o = n(46054),
    u = n(190012),
    c = n(465364),
    d = n(640912);

function p(e) {
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

function m(e) {
    let { icon: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l,
                i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                return i;
            }
            if (
                ((i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.getOwnPropertyNames(e);
                    for (r = 0; r < i.length; r++)
                        (n = i[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                    return l;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i;
        })(e, ["icon"]);
    switch (t) {
        case "image":
            return (0, r.jsx)(a.xfq, p({}, n));
        case "video":
            return (0, r.jsx)(a.npA, p({}, n));
        case "audio":
            return (0, r.jsx)(a.T7G, p({}, n));
        case "attachment":
            return (0, r.jsx)(a.PtA, p({}, n));
        case "link":
            return (0, r.jsx)(a.qYV, p({}, n));
        case "sticker":
            return (0, r.jsx)(a.tEP, p({}, n));
        case "call-active":
            return (0, r.jsx)(a._jp, p({}, n));
        case "call-ended":
            return (0, r.jsx)(a.zWQ, p({}, n));
    }
}
let f = l.memo(function (e) {
        let { message: t } = e;
        return (0, c.Ay)(t, {
            formatInline: !0,
            noStyleAndInteraction: !0,
        }).content;
    }),
    y = l.memo(function (e) {
        let { markup: t, channelId: n } = e;
        return (0, c.jp)(o.A.parseInlineReply, {
            content: t,
            channelId: n,
        });
    });

function g(e) {
    let t,
        { channel: n, message: l } = e,
        i = (0, u.BC)(l, n);
    if (null == i) return null;
    let { authorLabel: a, color: o, trailingIcon: c } = i;
    return (
        "text" === i.type
            ? (t = i.text)
            : "markup" === i.type
              ? (t = (0, r.jsx)(y, {
                    markup: i.markup,
                    channelId: l.channel_id,
                }))
              : "message" === i.type &&
                (t = (0, r.jsx)(f, {
                    message: i.message,
                })),
        (0, r.jsxs)("div", {
            className: s()(d.Sl, {
                [d.Vz]: "text-feedback-positive" === o,
            }),
            children: [
                (0, r.jsxs)("span", {
                    className: d.BK,
                    children: [null != a && "".concat(a, ": "), t],
                }),
                null != c &&
                    (0, r.jsx)(m, {
                        icon: c,
                        size: "xxs",
                        color: "currentColor",
                        className: d.sl,
                    }),
            ],
        })
    );
}
