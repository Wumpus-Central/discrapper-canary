e.d(i, { default: () => c });
var s = e(477900);
e(582128);
var n = e(189213),
    l = e(71393);
let a = "https://support.discord.com/hc/en-us/articles/6461420677527-Limited-Access-FAQ";
var r = e(375708);
let c = function (t) {
    let { onClose: i, guildId: e } = t,
        c = r.intl.format(r.t.ZqkXsC, { helpdeskArticle: a }),
        d = l.A.getGuild(e);
    return (
        null != d && (c = r.intl.format(r.t.jn0Xyx, { guildName: d.name, helpdeskArticle: a })),
        (0, s.jsx)(n.a, {
            transitionState: t.transitionState,
            onClose: i,
            title: r.intl.string(r.t.kJwpBW),
            subtitle: c,
            actions: [{ text: r.intl.string(r.t.BddRzS), onClick: i }],
        })
    );
};
