n.d(t, { Z: () => y });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    s = n(755721),
    a = n(481060),
    o = n(596454),
    c = n(782568),
    d = n(377171),
    u = n(565138),
    m = n(411198),
    g = n(526717),
    p = n(594278),
    f = n(549631),
    h = n(388032),
    x = n(748812);
function b(e) {
    let { subscribers: t } = e;
    return (0, r.jsxs)('div', {
        className: x.guildSubscriberCount,
        children: [
            (0, r.jsx)('div', {
                className: x.subscriberCountValue,
                children: (0, r.jsx)(a.Text, {
                    variant: 'text-md/normal',
                    color: 'always-white',
                    children: t
                })
            }),
            (0, r.jsxs)('div', {
                className: x.subscriberCountText,
                children: [
                    (0, r.jsx)(f.Z, { color: d.Z.WHITE }),
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
function j(e) {
    let { guildName: t, guildIcon: n, guildAvatarUrl: i, subscriberCount: l } = e,
        s = (0, m.Jh)({
            name: t,
            icon: n
        });
    return (0, r.jsxs)('div', {
        className: x.guildCardHeader,
        children: [
            (0, r.jsx)(u.Z, {
                className: x.guildCardHeaderAvatar,
                iconSrc: i,
                guild: s,
                size: u.Z.Sizes.LARGE
            }),
            (0, r.jsxs)('div', {
                className: x.guildCardHeaderTitle,
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: 'heading-lg/semibold',
                        color: 'header-primary',
                        children: t
                    }),
                    null != l && (0, r.jsx)(b, { subscribers: l })
                ]
            })
        ]
    });
}
function v(e) {
    let { quote: t, quoteAttribution: n, quoteAttributionTitle: i } = e;
    return (0, r.jsxs)('div', {
        className: x.guildCardQuote,
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
function _(e) {
    let { emojisToShow: t, notShownEmojiCount: n, storePageUrl: i } = e,
        d = null != t && t.length > 0,
        u = () => {
            null != i && (0, c.Z)(i);
        };
    return (0, r.jsx)('div', {
        className: x.guildPremiumEmojis,
        children: d
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(a.Text, {
                          variant: 'text-xs/semibold',
                          color: 'header-primary',
                          className: x.premiumEmojisTitle,
                          children: h.intl.string(h.t.wg53Ly)
                      }),
                      (0, r.jsxs)('div', {
                          className: x.premiumEmojisRow,
                          children: [
                              (0, r.jsxs)('div', {
                                  className: l()(x.emojisContainer, null != n && x.fullEmojisContainer),
                                  children: [
                                      t.map((e) =>
                                          (0, r.jsx)(
                                              o.Z,
                                              {
                                                  className: x.emoji,
                                                  emojiId: e.id,
                                                  emojiName: e.name,
                                                  animated: e.animated
                                              },
                                              e.id
                                          )
                                      ),
                                      null != n &&
                                          (0, r.jsx)('div', {
                                              className: x.extraEmojiCount,
                                              children: (0, r.jsxs)(a.Text, {
                                                  variant: 'text-md/semibold',
                                                  color: 'text-default',
                                                  children: ['+', n]
                                              })
                                          })
                                  ]
                              }),
                              (0, r.jsx)('div', {
                                  children: (0, r.jsx)(s.zx, {
                                      className: x.viewServerButton,
                                      innerClassName: x.viewServerButtonText,
                                      color: s.zx.Colors.CUSTOM,
                                      disabled: null == i,
                                      onClick: u,
                                      children: h.intl.string(h.t.mQ2IGR)
                                  })
                              })
                          ]
                      })
                  ]
              })
            : (0, r.jsx)(s.zx, {
                  className: l()(x.viewServerButton, x.roundedEdges),
                  innerClassName: x.viewServerButtonText,
                  color: s.zx.Colors.CUSTOM,
                  disabled: null == i,
                  onClick: u,
                  children: h.intl.string(h.t.mQ2IGR)
              })
    });
}
function O(e) {
    let { highlightedCreatorGuild: t } = e,
        { guild_id: n, quote: i, quote_attribution: l, quote_attribution_title: s } = t,
        o = (0, g.Z)(n, 4, 60),
        { isLoading: c, hasAllImperativeDetails: d } = o;
    if (c)
        return (0, r.jsx)('div', {
            className: x.guildCard,
            children: (0, r.jsx)(a.$jN, {})
        });
    if (!d) return null;
    let { guildIcon: u, guildName: m, guildAvatarUrl: p, subscriberCount: f, emojisToShow: h, notShownEmojiCount: b, storePageUrl: O } = o.details;
    return (0, r.jsxs)('div', {
        className: x.guildCard,
        children: [
            (0, r.jsx)(j, {
                guildIcon: u,
                guildName: m,
                guildAvatarUrl: p,
                subscriberCount: f
            }),
            (0, r.jsx)(v, {
                quote: i,
                quoteAttribution: l,
                quoteAttributionTitle: s
            }),
            (0, r.jsx)(_, {
                emojisToShow: h,
                notShownEmojiCount: b,
                storePageUrl: O
            })
        ]
    });
}
function y(e) {
    let { highlightedCreators: t } = e;
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsx)(a.X6q, {
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                children: h.intl.string(h.t['tJp+QU'])
            }),
            (0, r.jsx)(a.LZC, { size: 24 }),
            (0, r.jsx)(p.Z, {
                carouselClassName: x.creatorGuildCarousel,
                items: t,
                renderItem: (e) => (0, r.jsx)(O, { highlightedCreatorGuild: e }),
                intervalBetweenAutomaticItemRotations: 7000
            })
        ]
    });
}
