n.d(t, {
    A: () => N,
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(3026),
    s = n(397927),
    o = n(964486),
    l = n(58149),
    c = n(376304),
    u = n(509536),
    d = n(98318),
    f = n(657048),
    p = n(976860),
    _ = n(734057),
    h = n(317525),
    m = n(309010),
    g = n(954571),
    E = n(652176),
    b = n(652215),
    y = n(746080),
    O = n(985018),
    A = n(530358);

function v(e, t, n) {
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

function S(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}

function I(e, t) {
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

function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = 40,
    N = (e) => {
        let { roleIcon: t, guild: n } = e,
            { name: v } = t;
        (0, o.Ay)(() => {
            g.default.track(
                b.HAw.OPEN_POPOUT,
                S(
                    {
                        type: "Role Icon Popout",
                        guild_id: n.id,
                    },
                    (0, l.dI)(_.A.getChannel(m.A.getChannelId(n.id))),
                ),
            );
        });
        let I = (0, i.bG)([h.A], () => (null != t.roleId ? h.A.getRole(n.id, t.roleId) : void 0)),
            N = (0, d.U)(I),
            R = N
                ? O.intl.formatToPlainString(O.t.t0928V, {
                      name: v,
                  })
                : O.intl.formatToPlainString(O.t.UDDkGy, {
                      name: v,
                  }),
            w = T(S({}, t), {
                src: null == t.src ? t.src : (0, c.ux)(t.src, C),
                size: C,
            }),
            P = () => {
                (0, u.K)({
                    guildId: n.id,
                    location: {
                        section: b.JJy.ROLE_ICON_POPOUT,
                    },
                });
            },
            D = () => {
                (0, p.pX)(b.BVt.CHANNEL(n.id, y.VV.ROLE_SUBSCRIPTIONS));
            },
            x = N ? D : P;
        return (0, r.jsx)(s.lGe, {
            children: (0, r.jsx)(E.Uq, {
                children: (0, r.jsxs)("div", {
                    className: A.jC,
                    children: [
                        (0, r.jsxs)("div", {
                            className: A.rb,
                            children: [
                                (0, r.jsx)("div", {
                                    className: A.Xq,
                                    children: (0, r.jsx)(
                                        f.A,
                                        T(S({}, w), {
                                            enableTooltip: !1,
                                            className: A.__invalid_roleIcon,
                                            enableHeight: !1,
                                        }),
                                    ),
                                }),
                                (0, r.jsxs)("div", {
                                    className: A.bM,
                                    children: [
                                        (0, r.jsx)(s.Heading, {
                                            variant: "heading-md/semibold",
                                            className: A.S3,
                                            children: (0, r.jsx)(a.A, {
                                                children: v,
                                            }),
                                        }),
                                        (0, r.jsx)(s.Text, {
                                            variant: "text-sm/normal",
                                            children: R,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)(s.Button, {
                            size: "sm",
                            variant: "secondary",
                            text: O.intl.string(O.t["H930+H"]),
                            onClick: x,
                            icon: s._Jp,
                            fullWidth: !0,
                            autoFocus: !0,
                        }),
                    ],
                }),
            }),
        });
    };
