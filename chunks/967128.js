n.d(t, {
    Kq: () => u,
    Ot: () => d,
    ZP: () => h,
    jz: () => p,
}),
    n(953529);
var i = n(951288);
n(647438);
var r = n(120356),
    l = n.n(r),
    a = n(481060),
    o = n(534091),
    s = n(981631),
    c = n(594445);
function u(e) {
    let { locked: t = !1, channelType: n } = e,
        r = n === s.d4z.GUILD_VOICE || n === s.d4z.GUILD_STAGE_VOICE ? a.kBi : t ? a.W4G : a.VL1;
    return (0, i.jsx)("div", {
        className: l()(c.emptyChannelIcon, c.emptyChannelIconComponent),
        children: (0, i.jsx)(r, {
            color: a.TVs.colors.WHITE,
            size: "custom",
            width: 42,
            height: 42,
        }),
    });
}
function d(e) {
    let { children: t, className: n } = e;
    return (0, i.jsx)(a.Heading, {
        "aria-hidden": "true",
        className: l()(n, c.header),
        variant: "heading-xxl/extrabold",
        children: t,
    });
}
function p(e) {
    let { children: t, className: n } = e;
    return (0, i.jsx)(a.Text, {
        variant: "text-md/normal",
        color: "none",
        className: l()(c.description, n),
        children: t,
    });
}
let h = function (e) {
    var t,
        n,
        { className: r, channelId: a, children: s } = e,
        u = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        l = Object.keys(e);
                    for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (i = 0; i < l.length; i++)
                    (n = l[i]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ["className", "channelId", "children"]);
    return (0, i.jsx)(
        "div",
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    i.forEach(function (t) {
                        var i;
                        (i = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: i,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = i);
                    });
            }
            return e;
        })(
            {
                className: l()(r, c.container),
                id: (0, o.p)(a, a),
            },
            u,
        )),
        (n = n = { children: s }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t),
    );
};
