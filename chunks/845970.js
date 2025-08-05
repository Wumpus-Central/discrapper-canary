(n.d(t, { Z: () => u }), n(953529));
var i = n(255367);
n(73800);
var r = n(120356),
    l = n.n(r),
    a = n(481060),
    s = n(528027),
    o = n(686807),
    c = n(113318),
    d = n(277937);
function u(e) {
    let { benefit: t, guildId: n } = e,
        r = (0, c.Z)(n, t.ref_id),
        u = (0, i.jsx)(s.Z, {
            guildId: n,
            emojiId: t.emoji_id,
            emojiName: t.emoji_name
        }),
        m =
            null != r
                ? (0, i.jsx)(a.P3F, {
                      className: d.__invalid_channelLink,
                      onClick: r.navigateToChannel,
                      'aria-label': r.ariaLabel,
                      role: 'link',
                      children: (0, i.jsx)(a.Text, {
                          variant: 'text-md/medium',
                          color: 'header-primary',
                          className: l()(d.name, d.linkedName),
                          children: (0, o.Z)(t)
                      })
                  })
                : (0, i.jsx)(a.Text, {
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
                    (0, i.jsx)(a.Text, {
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
