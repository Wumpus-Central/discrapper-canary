n.d(t, { o: () => v });
var r = n(54381),
    l = n(473749),
    i = n(120356),
    s = n.n(i),
    a = n(481060),
    o = n(454585),
    u = n(494415),
    c = n(937889),
    d = n(28005);
function m(e) {
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
function f(e) {
    var { icon: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    (n = i[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ["icon"]);
    switch (t) {
        case "image":
            return (0, r.jsx)(a.XBm, m({}, n));
        case "video":
            return (0, r.jsx)(a.Odl, m({}, n));
        case "audio":
            return (0, r.jsx)(a.RZG, m({}, n));
        case "attachment":
            return (0, r.jsx)(a.Ujz, m({}, n));
        case "link":
            return (0, r.jsx)(a.xPt, m({}, n));
        case "sticker":
            return (0, r.jsx)(a.SlE, m({}, n));
        case "call-active":
            return (0, r.jsx)(a.Csw, m({}, n));
        case "call-ended":
            return (0, r.jsx)(a.gkL, m({}, n));
    }
}
let p = l.memo(function (e) {
        let { message: t } = e;
        return (0, c.ZP)(t, {
            formatInline: !0,
            noStyleAndInteraction: !0,
        }).content;
    }),
    g = l.memo(function (e) {
        let { markup: t, channelId: n } = e;
        return (0, c.d6)(o.Z.parseInlineReply, {
            content: t,
            channelId: n,
        });
    });
function v(e) {
    let t,
        { channel: n, message: l } = e,
        i = (0, u.sY)(l, n);
    if (null == i) return null;
    let { authorLabel: a, color: o, trailingIcon: c } = i;
    return (
        "text" === i.type
            ? (t = i.text)
            : "markup" === i.type
              ? (t = (0, r.jsx)(g, {
                    markup: i.markup,
                    channelId: l.channel_id,
                }))
              : "message" === i.type && (t = (0, r.jsx)(p, { message: i.message })),
        (0, r.jsxs)("div", {
            className: s()(d.messagePreviewLine, { [d.colorTextFeedbackPositive]: "text-feedback-positive" === o }),
            children: [
                (0, r.jsxs)("span", {
                    className: d.messageContent,
                    children: [null != a && "".concat(a, ": "), t],
                }),
                null != c &&
                    (0, r.jsx)(f, {
                        icon: c,
                        size: "xxs",
                        color: "currentColor",
                        className: d.messageContentTrailingIcon,
                    }),
            ],
        })
    );
}
