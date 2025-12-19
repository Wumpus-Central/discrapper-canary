n.d(t, { o: () => y });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(454585),
    u = n(494415),
    c = n(937889),
    d = n(28005);
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
    var { icon: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["icon"]);
    switch (t) {
        case "image":
            return (0, r.jsx)(o.XBm, f({}, n));
        case "video":
            return (0, r.jsx)(o.Odl, f({}, n));
        case "audio":
            return (0, r.jsx)(o.RZG, f({}, n));
        case "attachment":
            return (0, r.jsx)(o.Ujz, f({}, n));
        case "link":
            return (0, r.jsx)(o.xPt, f({}, n));
        case "sticker":
            return (0, r.jsx)(o.SlE, f({}, n));
        case "call-active":
            return (0, r.jsx)(o.Csw, f({}, n));
        case "call-ended":
            return (0, r.jsx)(o.gkL, f({}, n));
    }
}
let m = i.memo(function (e) {
        let { message: t } = e;
        return (0, c.ZP)(t, {
            formatInline: !0,
            noStyleAndInteraction: !0,
        }).content;
    }),
    g = i.memo(function (e) {
        let { markup: t, channelId: n } = e;
        return (0, c.d6)(s.Z.parseInlineReply, {
            content: t,
            channelId: n,
        });
    });
function y(e) {
    let t,
        { channel: n, message: i } = e,
        l = (0, u.sY)(i, n);
    if (null == l) return null;
    let { authorLabel: o, color: s, trailingIcon: c } = l;
    return (
        "text" === l.type
            ? (t = l.text)
            : "markup" === l.type
              ? (t = (0, r.jsx)(g, {
                    markup: l.markup,
                    channelId: i.channel_id,
                }))
              : "message" === l.type && (t = (0, r.jsx)(m, { message: l.message })),
        (0, r.jsxs)("div", {
            className: a()(d.messagePreviewLine, { [d.colorTextFeedbackPositive]: "text-feedback-positive" === s }),
            children: [
                (0, r.jsxs)("span", {
                    className: d.messageContent,
                    children: [null != o && "".concat(o, ": "), t],
                }),
                null != c &&
                    (0, r.jsx)(p, {
                        icon: c,
                        size: "xs",
                        color: "currentColor",
                        className: d.messageContentTrailingIcon,
                    }),
            ],
        })
    );
}
