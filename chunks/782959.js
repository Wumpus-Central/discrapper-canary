n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(367907),
    a = n(70097),
    o = n(970731),
    s = n(626135),
    c = n(63063),
    u = n(981631),
    d = n(388032),
    p = n(966651);
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function f(e) {
    let { guildId: t, markAsDismissed: f } = e,
        g = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(i.Text, {
                    color: 'always-white',
                    variant: 'text-sm/normal',
                    className: p.upsellBody,
                    children: d.NW.string(d.t['yQ0X+f'])
                }),
                (0, r.jsx)(i.Text, {
                    color: 'always-white',
                    variant: 'text-sm/normal',
                    children: d.NW.format(d.t['2Sapx8'], { hcArticleUrl: c.Z.getCreatorSupportArticleURL(u.BhN.MEDIA_CHANNEL) })
                })
            ]
        });
    return (0, r.jsx)(o.ZP, {
        header: d.NW.string(d.t.fW7UqK),
        content: g,
        asset: (0, r.jsx)(a.Z, {
            className: p.video,
            src: 'https://cdn.discordapp.com/assets/media_channel/media_channel_upsell_demo.mp4',
            autoPlay: !0,
            loop: !0
        }),
        buttonCTA: d.NW.string(d.t.JzJpg4),
        onClick: () => {
            s.default.track(u.rMx.MEDIA_CHANNEL_UPSELL_CLICKED, h({}, (0, l.hH)(t))),
                (0, i.ZDy)(async () => {
                    let { default: e } = await Promise.all([n.e('45094'), n.e('45822')]).then(n.bind(n, 218613));
                    return (n) => {
                        var i, l;
                        return (0, r.jsx)(
                            e,
                            ((i = h({}, n)),
                            (l = l =
                                {
                                    channelType: u.d4z.GUILD_MEDIA,
                                    guildId: t
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
                            i)
                        );
                    };
                });
        },
        secondaryButtonCTA: d.NW.string(d.t.WAI6xs),
        markAsDismissed: f
    });
}
