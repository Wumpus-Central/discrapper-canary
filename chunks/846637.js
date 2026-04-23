i.d(e, { default: () => d });
var s = i(627968);
i(64700);
var l = i(189213),
    n = i(71393);
let a = "https://support.discord.com/hc/en-us/articles/6461420677527-Limited-Access-FAQ";
var r = i(985018);
let d = (t) => {
    let { onClose: e, guildId: i } = t,
        d = r.intl.format(r.t.ZqkXsC, { helpdeskArticle: a }),
        c = n.A.getGuild(i);
    return (
        null != c && (d = r.intl.format(r.t.jn0Xyx, { guildName: c.name, helpdeskArticle: a })),
        (0, s.jsx)(l.Modal, {
            transitionState: t.transitionState,
            onClose: e,
            title: r.intl.string(r.t.kJwpBW),
            subtitle: d,
            actions: [{ text: r.intl.string(r.t.BddRzS), onClick: e }],
        })
    );
};
