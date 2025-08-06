n.d(t, { Z: () => m });
var r = n(255367),
    o = n(73800),
    i = n(481060),
    l = n(434404),
    s = n(639777),
    a = n(169010),
    c = n(981631),
    u = n(93841),
    d = n(388032),
    p = n(46310),
    f = n(175435);
function m(e, t) {
    let m = (0, s.Z)(t);
    return o.useMemo(() => {
        if ("guildTagsBadgePacks" === e) {
            let o = d.intl.string(u.default.KC9HRU),
                s = d.intl.string(u.default.GJiSmJ),
                g = m
                    ? () => {
                          l.Z.open(t, c.pNK.TAG, c.jXE.GUILD_POWERUPS_OVERVIEW_CARD), (0, i.pTH)();
                      }
                    : void 0,
                x = m ? d.intl.string(u.default.lvk1GR) : void 0,
                _ = m ? d.intl.string(u.default["9CfkLC"]) : void 0;
            return {
                title: o,
                description: s,
                openModal: (e) => {
                    (0, i.ZDy)(async () => {
                        let { default: i } = await n.e("64767").then(n.bind(n, 754887));
                        return (n) =>
                            (0, r.jsx)(
                                i,
                                (function (e) {
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
                                })(
                                    {
                                        guildId: t,
                                        title: o,
                                        description: s,
                                        powerups: e,
                                        footerInfoText: x,
                                        footerButtonText: _,
                                        footerButtonOnClick: g,
                                    },
                                    n,
                                ),
                            );
                    });
                },
                badge: "beta",
                image: {
                    staticUrl: f.Z,
                    animatedUrl: p.Z,
                },
                skuIds: a.z[e],
            };
        }
    }, [e, t, m]);
}
