n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(481060),
    s = n(528027),
    o = n(686807),
    c = n(113318),
    d = n(562528);
function u(e) {
    let { benefit: t, guildId: n } = e,
        l = (0, c.Z)(n, t.ref_id),
        u = (0, i.jsx)(s.Z, {
            guildId: n,
            emojiId: t.emoji_id,
            emojiName: t.emoji_name
        }),
        m =
            null != l
                ? (0, i.jsx)(r.P3F, {
                      className: d.__invalid_channelLink,
                      onClick: l.navigateToChannel,
                      'aria-label': l.ariaLabel,
                      role: 'link',
                      children: (0, i.jsx)(r.Text, {
                          variant: 'text-md/medium',
                          color: 'header-primary',
                          className: a()(d.name, d.linkedName),
                          children: (0, o.Z)(t)
                      })
                  })
                : (0, i.jsx)(r.Text, {
                      variant: 'text-md/medium',
                      color: 'header-primary',
                      className: d.name,
                      children: (0, o.Z)(t)
                  });
    return (0, i.jsxs)('div', {
        className: d.container,
        children: [
            (0, i.jsxs)('div', {
                className: d.infoContainer,
                children: [
                    m,
                    (0, i.jsx)(r.Text, {
                        color: 'interactive-normal',
                        variant: 'text-sm/normal',
                        children: t.description
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: d.emojiContainer,
                children: u
            })
        ]
    });
}
