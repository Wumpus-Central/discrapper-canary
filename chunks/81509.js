n.d(t, { Z: () => O });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(481060),
    s = n(596454),
    o = n(782568),
    c = n(377171),
    d = n(565138),
    u = n(411198),
    m = n(526717),
    g = n(594278),
    p = n(549631),
    h = n(388032),
    f = n(748812);
function x(e) {
    let { subscribers: t } = e;
    return (0, r.jsxs)('div', {
        className: f.guildSubscriberCount,
        children: [
            (0, r.jsx)('div', {
                className: f.subscriberCountValue,
                children: (0, r.jsx)(a.Text, {
                    variant: 'text-md/normal',
                    color: 'always-white',
                    children: t
                })
            }),
            (0, r.jsxs)('div', {
                className: f.subscriberCountText,
                children: [
                    (0, r.jsx)(p.Z, { color: c.Z.WHITE }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        color: 'always-white',
                        children: h.intl.string(h.t['3NNXPT'])
                    })
                ]
            })
        ]
    });
}
function b(e) {
    let { guildName: t, guildIcon: n, guildAvatarUrl: i, subscriberCount: l } = e,
        s = (0, u.Jh)({
            name: t,
            icon: n
        });
    return (0, r.jsxs)('div', {
        className: f.guildCardHeader,
        children: [
            (0, r.jsx)(d.Z, {
                className: f.guildCardHeaderAvatar,
                iconSrc: i,
                guild: s,
                size: d.Z.Sizes.LARGE
            }),
            (0, r.jsxs)('div', {
                className: f.guildCardHeaderTitle,
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: 'heading-lg/semibold',
                        color: 'header-primary',
                        children: t
                    }),
                    null != l && (0, r.jsx)(x, { subscribers: l })
                ]
            })
        ]
    });
}
function j(e) {
    let { quote: t, quoteAttribution: n, quoteAttributionTitle: i } = e;
    return (0, r.jsxs)('div', {
        className: f.guildCardQuote,
        children: [
            (0, r.jsx)(a.Text, {
                variant: 'text-lg/normal',
                color: 'interactive-active',
                children: t
            }),
            (0, r.jsx)(a.Text, {
                variant: 'text-md/normal',
                color: 'interactive-active',
                children: h.intl.format(h.t.m0b6Ki, {
                    attributionName: n,
                    attributionTitle: null != i ? i : h.intl.string(h.t.pclUFB)
                })
            })
        ]
    });
}
function v(e) {
    let { emojisToShow: t, notShownEmojiCount: n, storePageUrl: i } = e,
        c = null != t && t.length > 0,
        d = () => {
            null != i && (0, o.Z)(i);
        };
    return (0, r.jsx)('div', {
        className: f.guildPremiumEmojis,
        children: c
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(a.Text, {
                          variant: 'text-xs/semibold',
                          color: 'header-primary',
                          className: f.premiumEmojisTitle,
                          children: h.intl.string(h.t.wg53Ly)
                      }),
                      (0, r.jsxs)('div', {
                          className: f.premiumEmojisRow,
                          children: [
                              (0, r.jsxs)('div', {
                                  className: l()(f.emojisContainer, null != n && f.fullEmojisContainer),
                                  children: [
                                      t.map((e) =>
                                          (0, r.jsx)(
                                              s.Z,
                                              {
                                                  className: f.emoji,
                                                  emojiId: e.id,
                                                  emojiName: e.name,
                                                  animated: e.animated
                                              },
                                              e.id
                                          )
                                      ),
                                      null != n &&
                                          (0, r.jsx)('div', {
                                              className: f.extraEmojiCount,
                                              children: (0, r.jsxs)(a.Text, {
                                                  variant: 'text-md/semibold',
                                                  color: 'text-default',
                                                  children: ['+', n]
                                              })
                                          })
                                  ]
                              }),
                              (0, r.jsx)('div', {
                                  className: f.viewServerButtonContainer,
                                  children: (0, r.jsx)(a.zxk, {
                                      variant: 'secondary',
                                      disabled: null == i,
                                      onClick: d,
                                      text: h.intl.string(h.t.mQ2IGR),
                                      fullWidth: !0
                                  })
                              })
                          ]
                      })
                  ]
              })
            : (0, r.jsx)('div', {
                  className: f.viewServerButtonContainer,
                  children: (0, r.jsx)(a.zxk, {
                      variant: 'secondary',
                      disabled: null == i,
                      onClick: d,
                      text: h.intl.string(h.t.mQ2IGR),
                      fullWidth: !0
                  })
              })
    });
}
function _(e) {
    let { highlightedCreatorGuild: t } = e,
        { guild_id: n, quote: i, quote_attribution: l, quote_attribution_title: s } = t,
        o = (0, m.Z)(n, 4, 60),
        { isLoading: c, hasAllImperativeDetails: d } = o;
    if (c)
        return (0, r.jsx)('div', {
            className: f.guildCard,
            children: (0, r.jsx)(a.$jN, {})
        });
    if (!d) return null;
    let { guildIcon: u, guildName: g, guildAvatarUrl: p, subscriberCount: h, emojisToShow: x, notShownEmojiCount: _, storePageUrl: O } = o.details;
    return (0, r.jsxs)('div', {
        className: f.guildCard,
        children: [
            (0, r.jsx)(b, {
                guildIcon: u,
                guildName: g,
                guildAvatarUrl: p,
                subscriberCount: h
            }),
            (0, r.jsx)(j, {
                quote: i,
                quoteAttribution: l,
                quoteAttributionTitle: s
            }),
            (0, r.jsx)(v, {
                emojisToShow: x,
                notShownEmojiCount: _,
                storePageUrl: O
            })
        ]
    });
}
function O(e) {
    let { highlightedCreators: t } = e;
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsx)(a.X6q, {
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                children: h.intl.string(h.t['tJp+QU'])
            }),
            (0, r.jsx)(a.LZC, { size: 24 }),
            (0, r.jsx)(g.Z, {
                carouselClassName: f.creatorGuildCarousel,
                items: t,
                renderItem: (e) => (0, r.jsx)(_, { highlightedCreatorGuild: e }),
                intervalBetweenAutomaticItemRotations: 7000
            })
        ]
    });
}
