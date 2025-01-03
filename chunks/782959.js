n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(367907),
    a = n(70097),
    s = n(970731),
    o = n(626135),
    c = n(63063),
    d = n(981631),
    u = n(388032),
    h = n(980037);
function m(e) {
    let { guildId: t, markAsDismissed: m } = e,
        p = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(r.Text, {
                    color: 'always-white',
                    variant: 'text-sm/normal',
                    className: h.upsellBody,
                    children: u.intl.string(u.t['yQ0X+f'])
                }),
                (0, i.jsx)(r.Text, {
                    color: 'always-white',
                    variant: 'text-sm/normal',
                    children: u.intl.format(u.t['2Sapx8'], { hcArticleUrl: c.Z.getCreatorSupportArticleURL(d.BhN.MEDIA_CHANNEL) })
                })
            ]
        });
    return (0, i.jsx)(s.ZP, {
        header: u.intl.string(u.t.fW7UqK),
        content: p,
        asset: (0, i.jsx)(a.Z, {
            className: h.video,
            src: 'https://cdn.discordapp.com/assets/media_channel/media_channel_upsell_demo.mp4',
            autoPlay: !0,
            loop: !0
        }),
        buttonCTA: u.intl.string(u.t.JzJpg4),
        onClick: () => {
            o.default.track(d.rMx.MEDIA_CHANNEL_UPSELL_CLICKED, { ...(0, l.hH)(t) }),
                (0, r.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e('45094'), n.e('5506')]).then(n.bind(n, 218613));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            channelType: d.d4z.GUILD_MEDIA,
                            guildId: t
                        });
                });
        },
        secondaryButtonCTA: u.intl.string(u.t.WAI6xs),
        markAsDismissed: m
    });
}
