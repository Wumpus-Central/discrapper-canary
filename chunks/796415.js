r.d(t, { default: () => y });
var n = r(627968),
    o = r(397927),
    l = r(976860),
    a = r(523084),
    i = r(225180),
    c = r(285286),
    s = r(652215),
    u = r(746080),
    p = r(294726),
    f = r(985018),
    b = r(413526),
    d = r(429040);
function y(e) {
    let { gameServerGame: t, guildId: r, status: y } = e,
        O = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o,
                l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++)
                    (n = r[o]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                return l;
            }
            if (
                ((l = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        l = Object.getOwnPropertyNames(e);
                    for (n = 0; n < l.length; n++)
                        (r = l[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
                    return o;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                    (n = r[o]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            return l;
        })(e, ["gameServerGame", "guildId", "status"]),
        m = (0, i.A)(t.gameId, "cover");
    return (0, n.jsx)(
        a.default,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        }),
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })(
            {
                title: f.intl.string("created" === y ? p.default["4lLdBM"] : p.default.VPDgHa),
                description: f.intl.formatToPlainString(p.default.yL6BiH, { provider: (0, c.A)(t.provider) }),
                image: (0, n.jsx)("div", {
                    className: d.Z,
                    children: (0, n.jsx)("img", {
                        className: d.S,
                        alt: "",
                        src: null != m ? m : "",
                    }),
                }),
                button: (0, n.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: b.x6,
                    children: (0, n.jsx)(o.Button, {
                        variant: "primary",
                        text: f.intl.string(p.default.VkItSr),
                        onClick: () => {
                            (0, l.pX)(s.BVt.CHANNEL(r, u.VV.GAME_SERVERS)), O.onClose();
                        },
                    }),
                }),
            },
            O,
        ),
    );
}
