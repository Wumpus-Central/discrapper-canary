n.d(t, { Z: () => h });
var r = n(951288),
    i = n(647438),
    l = n(907862),
    a = n(481060),
    o = n(367907),
    s = n(626135),
    c = n(63063),
    u = n(981631),
    d = n(921944),
    p = n(388032);
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
function h(e) {
    let { guildId: t, markAsDismissed: h, renderTargetElement: g } = e,
        m = {
            text: p.intl.string(p.t.JzJpg4),
            onClick: () => {
                s.default.track(u.rMx.MEDIA_CHANNEL_UPSELL_CLICKED, f({}, (0, o.hH)(t))),
                    h(d.L.PRIMARY),
                    (0, a.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e("45094"), n.e("67133")]).then(n.bind(n, 218613));
                        return (n) => {
                            var i, l;
                            return (0, r.jsx)(
                                e,
                                ((i = f({}, n)),
                                (l = l =
                                    {
                                        channelType: u.d4z.GUILD_MEDIA,
                                        guildId: t,
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(l)).forEach(function (e) {
                                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                      }),
                                i),
                            );
                        };
                    });
            },
            variant: "primary",
        },
        b = i.useRef(null);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                ref: b,
                children: g(),
            }),
            (0, r.jsx)(l.Mb, {
                title: p.intl.string(p.t.fW7UqK),
                body: p.intl.string(p.t["yQ0X+f"]),
                caretConfig: {
                    position: "top",
                    align: "center",
                },
                assetUrl: "https://cdn.discordapp.com/assets/media_channel/media_channel_upsell_demo.mp4",
                action: m,
                textLink: {
                    link: c.Z.getCreatorSupportArticleURL(u.BhN.MEDIA_CHANNEL),
                    text: p.intl.string(p.t.w4DutL),
                },
                targetElementRef: b,
                onRequestClose: () => h(d.L.DISMISS),
            }),
        ],
    });
}
