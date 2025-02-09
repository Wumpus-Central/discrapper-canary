n.d(t, { Z: () => j });
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    s = n(481060),
    a = n(596454),
    o = n(782568),
    c = n(377171),
    d = n(565138),
    u = n(601964),
    m = n(526717),
    h = n(594278),
    g = n(549631),
    x = n(388032),
    p = n(109166);
function _(e) {
    let { subscribers: t } = e;
    return (0, i.jsxs)('div', {
        className: p.guildSubscriberCount,
        children: [
            (0, i.jsx)('div', {
                className: p.subscriberCountValue,
                children: (0, i.jsx)(s.Text, {
                    variant: 'text-md/normal',
                    color: 'always-white',
                    children: t
                })
            }),
            (0, i.jsxs)('div', {
                className: p.subscriberCountText,
                children: [
                    (0, i.jsx)(g.Z, { color: c.Z.WHITE }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        color: 'always-white',
                        children: x.intl.string(x.t['3NNXPT'])
                    })
                ]
            })
        ]
    });
}
function C(e) {
    let { guildName: t, guildIcon: n, guildAvatarUrl: r, subscriberCount: l } = e,
        a = new u.ZP({
            name: t,
            icon: n
        });
    return (0, i.jsxs)('div', {
        className: p.guildCardHeader,
        children: [
            (0, i.jsx)(d.Z, {
                className: p.guildCardHeaderAvatar,
                iconSrc: r,
                guild: a,
                size: d.Z.Sizes.LARGE
            }),
            (0, i.jsxs)('div', {
                className: p.guildCardHeaderTitle,
                children: [
                    (0, i.jsx)(s.X6q, {
                        variant: 'heading-lg/semibold',
                        color: 'header-primary',
                        children: t
                    }),
                    null != l && (0, i.jsx)(_, { subscribers: l })
                ]
            })
        ]
    });
}
function f(e) {
    let { quote: t, quoteAttribution: n, quoteAttributionTitle: r } = e;
    return (0, i.jsxs)('div', {
        className: p.guildCardQuote,
        children: [
            (0, i.jsx)(s.Text, {
                variant: 'text-lg/normal',
                color: 'interactive-active',
                children: t
            }),
            (0, i.jsx)(s.Text, {
                variant: 'text-md/normal',
                color: 'interactive-active',
                children: x.intl.format(x.t.m0b6Ki, {
                    attributionName: n,
                    attributionTitle: null != r ? r : x.intl.string(x.t.pclUFB)
                })
            })
        ]
    });
}
function v(e) {
    let { emojisToShow: t, notShownEmojiCount: n, storePageUrl: r } = e,
        c = null != t && t.length > 0,
        d = () => {
            null != r && (0, o.Z)(r);
        };
    return (0, i.jsx)('div', {
        className: p.guildPremiumEmojis,
        children: c
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(s.Text, {
                          variant: 'text-xs/semibold',
                          color: 'header-primary',
                          className: p.premiumEmojisTitle,
                          children: x.intl.string(x.t.wg53Ly)
                      }),
                      (0, i.jsxs)('div', {
                          className: p.premiumEmojisRow,
                          children: [
                              (0, i.jsxs)('div', {
                                  className: l()(p.emojisContainer, null != n && p.fullEmojisContainer),
                                  children: [
                                      t.map((e) =>
                                          (0, i.jsx)(
                                              a.Z,
                                              {
                                                  className: p.emoji,
                                                  emojiId: e.id,
                                                  emojiName: e.name,
                                                  animated: e.animated
                                              },
                                              e.id
                                          )
                                      ),
                                      null != n &&
                                          (0, i.jsx)('div', {
                                              className: p.extraEmojiCount,
                                              children: (0, i.jsxs)(s.Text, {
                                                  variant: 'text-md/semibold',
                                                  color: 'text-normal',
                                                  children: ['+', n]
                                              })
                                          })
                                  ]
                              }),
                              (0, i.jsx)('div', {
                                  children: (0, i.jsx)(s.zxk, {
                                      className: p.viewServerButton,
                                      innerClassName: p.viewServerButtonText,
                                      color: s.zxk.Colors.CUSTOM,
                                      disabled: null == r,
                                      onClick: d,
                                      children: x.intl.string(x.t.mQ2IGR)
                                  })
                              })
                          ]
                      })
                  ]
              })
            : (0, i.jsx)(s.zxk, {
                  className: l()(p.viewServerButton, p.roundedEdges),
                  innerClassName: p.viewServerButtonText,
                  color: s.zxk.Colors.CUSTOM,
                  disabled: null == r,
                  onClick: d,
                  children: x.intl.string(x.t.mQ2IGR)
              })
    });
}
function N(e) {
    let { highlightedCreatorGuild: t } = e,
        { guild_id: n, quote: r, quote_attribution: l, quote_attribution_title: a } = t,
        o = (0, m.Z)(n, 4, 60),
        { isLoading: c, hasAllImperativeDetails: d } = o;
    if (c)
        return (0, i.jsx)('div', {
            className: p.guildCard,
            children: (0, i.jsx)(s.$jN, {})
        });
    if (!d) return null;
    let { guildIcon: u, guildName: h, guildAvatarUrl: g, subscriberCount: x, emojisToShow: _, notShownEmojiCount: N, storePageUrl: j } = o.details;
    return (0, i.jsxs)('div', {
        className: p.guildCard,
        children: [
            (0, i.jsx)(C, {
                guildIcon: u,
                guildName: h,
                guildAvatarUrl: g,
                subscriberCount: x
            }),
            (0, i.jsx)(f, {
                quote: r,
                quoteAttribution: l,
                quoteAttributionTitle: a
            }),
            (0, i.jsx)(v, {
                emojisToShow: _,
                notShownEmojiCount: N,
                storePageUrl: j
            })
        ]
    });
}
function j(e) {
    let { highlightedCreators: t } = e;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(s.X6q, {
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                children: x.intl.string(x.t['tJp+QU'])
            }),
            (0, i.jsx)(s.LZC, { size: 24 }),
            (0, i.jsx)(h.Z, {
                carouselClassName: p.creatorGuildCarousel,
                items: t,
                renderItem: (e) => (0, i.jsx)(N, { highlightedCreatorGuild: e }),
                intervalBetweenAutomaticItemRotations: 7000
            })
        ]
    });
}
