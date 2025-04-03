n.d(t, { Z: () => u }), n(266796);
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    l = n(528027),
    s = n(686807),
    c = n(113318),
    d = n(277937);
function u(e) {
    let { benefit: t, guildId: n } = e,
        i = (0, c.Z)(n, t.ref_id),
        u = (0, r.jsx)(l.Z, {
            guildId: n,
            emojiId: t.emoji_id,
            emojiName: t.emoji_name
        }),
        _ =
            null != i
                ? (0, r.jsx)(o.P3F, {
                      className: d.__invalid_channelLink,
                      onClick: i.navigateToChannel,
                      'aria-label': i.ariaLabel,
                      role: 'link',
                      children: (0, r.jsx)(o.Text, {
                          variant: 'text-md/medium',
                          color: 'header-primary',
                          className: a()(d.name, d.linkedName),
                          children: (0, s.Z)(t)
                      })
                  })
                : (0, r.jsx)(o.Text, {
                      variant: 'text-md/medium',
                      color: 'header-primary',
                      className: d.name,
                      children: (0, s.Z)(t)
                  });
    return (0, r.jsxs)('div', {
        className: d.container,
        children: [
            (0, r.jsxs)('div', {
                className: d.infoContainer,
                children: [
                    _,
                    (0, r.jsx)(o.Text, {
                        color: 'interactive-normal',
                        variant: 'text-sm/normal',
                        children: t.description
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: d.emojiContainer,
                children: u
            })
        ]
    });
}
