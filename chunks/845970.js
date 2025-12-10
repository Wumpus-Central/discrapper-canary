n.d(t, { Z: () => d }), n(953529);
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(528027),
    l = n(686807),
    c = n(113318),
    u = n(685172);
function d(e) {
    let { benefit: t, guildId: n } = e,
        i = (0, c.Z)(n, t.ref_id),
        d = (0, r.jsx)(s.Z, {
            guildId: n,
            emojiId: t.emoji_id,
            emojiName: t.emoji_name,
        }),
        f =
            null != i
                ? (0, r.jsx)(o.P3F, {
                      className: u.__invalid_channelLink,
                      onClick: i.navigateToChannel,
                      "aria-label": i.ariaLabel,
                      role: "link",
                      children: (0, r.jsx)(o.Text, {
                          variant: "text-md/medium",
                          color: "header-primary",
                          className: a()(u.name, u.linkedName),
                          children: (0, l.Z)(t),
                      }),
                  })
                : (0, r.jsx)(o.Text, {
                      variant: "text-md/medium",
                      color: "header-primary",
                      className: u.name,
                      children: (0, l.Z)(t),
                  });
    return (0, r.jsxs)("div", {
        className: u.container,
        children: [
            (0, r.jsxs)("div", {
                className: u.infoContainer,
                children: [
                    f,
                    (0, r.jsx)(o.Text, {
                        color: "interactive-text-default",
                        variant: "text-sm/normal",
                        children: t.description,
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: u.emojiContainer,
                children: d,
            }),
        ],
    });
}
