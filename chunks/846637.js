e.d(i, { default: () => c });
var s = e(627968);
e(64700);
var l = e(189213),
    n = e(71393);
let a = "https://support.discord.com/hc/en-us/articles/6461420677527-Limited-Access-FAQ";
var r = e(375708);
let c = function (t) {
    let { onClose: i, guildId: e } = t,
        c = r.intl.format(r.t.ZqkXsC, { helpdeskArticle: a }),
        d = n.A.getGuild(e);
    return (
        null != d && (c = r.intl.format(r.t.jn0Xyx, { guildName: d.name, helpdeskArticle: a })),
        (0, s.jsx)(l.Modal, {
            transitionState: t.transitionState,
            onClose: i,
            title: r.intl.string(r.t.kJwpBW),
            subtitle: c,
            actions: [{ text: r.intl.string(r.t.BddRzS), onClick: i }],
        })
    );
};
