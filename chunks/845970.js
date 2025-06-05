n.d(t, { Z: () => d }), n(953529);
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(481060),
    o = n(528027),
    s = n(686807),
    c = n(113318),
    u = n(277937);
function d(e) {
    let { benefit: t, guildId: n } = e,
        i = (0, c.Z)(n, t.ref_id),
        d = (0, r.jsx)(o.Z, {
            guildId: n,
            emojiId: t.emoji_id,
            emojiName: t.emoji_name
        }),
        m =
            null != i
                ? (0, r.jsx)(a.P3F, {
                      className: u.__invalid_channelLink,
                      onClick: i.navigateToChannel,
                      'aria-label': i.ariaLabel,
                      role: 'link',
                      children: (0, r.jsx)(a.Text, {
                          variant: 'text-md/medium',
                          color: 'header-primary',
                          className: l()(u.name, u.linkedName),
                          children: (0, s.Z)(t)
                      })
                  })
                : (0, r.jsx)(a.Text, {
                      variant: 'text-md/medium',
                      color: 'header-primary',
                      className: u.name,
                      children: (0, s.Z)(t)
                  });
    return (0, r.jsxs)('div', {
        className: u.container,
        children: [
            (0, r.jsxs)('div', {
                className: u.infoContainer,
                children: [
                    m,
                    (0, r.jsx)(a.Text, {
                        color: 'interactive-normal',
                        variant: 'text-sm/normal',
                        children: t.description
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: u.emojiContainer,
                children: d
            })
        ]
    });
}
