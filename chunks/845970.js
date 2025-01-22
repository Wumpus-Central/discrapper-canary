n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(481060),
    o = n(528027),
    s = n(686807),
    c = n(113318),
    u = n(40712);
function d(e) {
    let { benefit: t, guildId: n } = e,
        r = (0, c.Z)(n, t.ref_id),
        d = (0, i.jsx)(o.Z, {
            guildId: n,
            emojiId: t.emoji_id,
            emojiName: t.emoji_name
        }),
        m =
            null != r
                ? (0, i.jsx)(a.Clickable, {
                      className: u.__invalid_channelLink,
                      onClick: r.navigateToChannel,
                      'aria-label': r.ariaLabel,
                      role: 'link',
                      children: (0, i.jsx)(a.Text, {
                          variant: 'text-md/medium',
                          color: 'header-primary',
                          className: l()(u.name, u.linkedName),
                          children: (0, s.Z)(t)
                      })
                  })
                : (0, i.jsx)(a.Text, {
                      variant: 'text-md/medium',
                      color: 'header-primary',
                      className: u.name,
                      children: (0, s.Z)(t)
                  });
    return (0, i.jsxs)('div', {
        className: u.container,
        children: [
            (0, i.jsxs)('div', {
                className: u.infoContainer,
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
                className: u.emojiContainer,
                children: d
            })
        ]
    });
}
