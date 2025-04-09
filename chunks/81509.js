n.d(t, { Z: () => _ });
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(481060),
    l = n(596454),
    o = n(782568),
    c = n(377171),
    d = n(565138),
    u = n(601964),
    m = n(526717),
    g = n(594278),
    p = n(549631),
    f = n(388032),
    h = n(748812);
function b(e) {
    let { subscribers: t } = e;
    return (0, r.jsxs)('div', {
        className: h.guildSubscriberCount,
        children: [
            (0, r.jsx)('div', {
                className: h.subscriberCountValue,
                children: (0, r.jsx)(a.Text, {
                    variant: 'text-md/normal',
                    color: 'always-white',
                    children: t
                })
            }),
            (0, r.jsxs)('div', {
                className: h.subscriberCountText,
                children: [
                    (0, r.jsx)(p.Z, { color: c.Z.WHITE }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        color: 'always-white',
                        children: f.NW.string(f.t['3NNXPT'])
                    })
                ]
            })
        ]
    });
}
function x(e) {
    let { guildName: t, guildIcon: n, guildAvatarUrl: i, subscriberCount: s } = e,
        l = new u.ZP({
            name: t,
            icon: n
        });
    return (0, r.jsxs)('div', {
        className: h.guildCardHeader,
        children: [
            (0, r.jsx)(d.Z, {
                className: h.guildCardHeaderAvatar,
                iconSrc: i,
                guild: l,
                size: d.Z.Sizes.LARGE
            }),
            (0, r.jsxs)('div', {
                className: h.guildCardHeaderTitle,
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: 'heading-lg/semibold',
                        color: 'header-primary',
                        children: t
                    }),
                    null != s && (0, r.jsx)(b, { subscribers: s })
                ]
            })
        ]
    });
}
function j(e) {
    let { quote: t, quoteAttribution: n, quoteAttributionTitle: i } = e;
    return (0, r.jsxs)('div', {
        className: h.guildCardQuote,
        children: [
            (0, r.jsx)(a.Text, {
                variant: 'text-lg/normal',
                color: 'interactive-active',
                children: t
            }),
            (0, r.jsx)(a.Text, {
                variant: 'text-md/normal',
                color: 'interactive-active',
                children: f.NW.format(f.t.m0b6Ki, {
                    attributionName: n,
                    attributionTitle: null != i ? i : f.NW.string(f.t.pclUFB)
                })
            })
        ]
    });
}
function N(e) {
    let { emojisToShow: t, notShownEmojiCount: n, storePageUrl: i } = e,
        c = null != t && t.length > 0,
        d = () => {
            null != i && (0, o.Z)(i);
        };
    return (0, r.jsx)('div', {
        className: h.guildPremiumEmojis,
        children: c
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(a.Text, {
                          variant: 'text-xs/semibold',
                          color: 'header-primary',
                          className: h.premiumEmojisTitle,
                          children: f.NW.string(f.t.wg53Ly)
                      }),
                      (0, r.jsxs)('div', {
                          className: h.premiumEmojisRow,
                          children: [
                              (0, r.jsxs)('div', {
                                  className: s()(h.emojisContainer, null != n && h.fullEmojisContainer),
                                  children: [
                                      t.map((e) =>
                                          (0, r.jsx)(
                                              l.Z,
                                              {
                                                  className: h.emoji,
                                                  emojiId: e.id,
                                                  emojiName: e.name,
                                                  animated: e.animated
                                              },
                                              e.id
                                          )
                                      ),
                                      null != n &&
                                          (0, r.jsx)('div', {
                                              className: h.extraEmojiCount,
                                              children: (0, r.jsxs)(a.Text, {
                                                  variant: 'text-md/semibold',
                                                  color: 'text-normal',
                                                  children: ['+', n]
                                              })
                                          })
                                  ]
                              }),
                              (0, r.jsx)('div', {
                                  children: (0, r.jsx)(a.zxk, {
                                      className: h.viewServerButton,
                                      innerClassName: h.viewServerButtonText,
                                      color: a.zxk.Colors.CUSTOM,
                                      disabled: null == i,
                                      onClick: d,
                                      children: f.NW.string(f.t.mQ2IGR)
                                  })
                              })
                          ]
                      })
                  ]
              })
            : (0, r.jsx)(a.zxk, {
                  className: s()(h.viewServerButton, h.roundedEdges),
                  innerClassName: h.viewServerButtonText,
                  color: a.zxk.Colors.CUSTOM,
                  disabled: null == i,
                  onClick: d,
                  children: f.NW.string(f.t.mQ2IGR)
              })
    });
}
function v(e) {
    let { highlightedCreatorGuild: t } = e,
        { guild_id: n, quote: i, quote_attribution: s, quote_attribution_title: l } = t,
        o = (0, m.Z)(n, 4, 60),
        { isLoading: c, hasAllImperativeDetails: d } = o;
    if (c)
        return (0, r.jsx)('div', {
            className: h.guildCard,
            children: (0, r.jsx)(a.$jN, {})
        });
    if (!d) return null;
    let { guildIcon: u, guildName: g, guildAvatarUrl: p, subscriberCount: f, emojisToShow: b, notShownEmojiCount: v, storePageUrl: _ } = o.details;
    return (0, r.jsxs)('div', {
        className: h.guildCard,
        children: [
            (0, r.jsx)(x, {
                guildIcon: u,
                guildName: g,
                guildAvatarUrl: p,
                subscriberCount: f
            }),
            (0, r.jsx)(j, {
                quote: i,
                quoteAttribution: s,
                quoteAttributionTitle: l
            }),
            (0, r.jsx)(N, {
                emojisToShow: b,
                notShownEmojiCount: v,
                storePageUrl: _
            })
        ]
    });
}
function _(e) {
    let { highlightedCreators: t } = e;
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsx)(a.X6q, {
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                children: f.NW.string(f.t['tJp+QU'])
            }),
            (0, r.jsx)(a.LZC, { size: 24 }),
            (0, r.jsx)(g.Z, {
                carouselClassName: h.creatorGuildCarousel,
                items: t,
                renderItem: (e) => (0, r.jsx)(v, { highlightedCreatorGuild: e }),
                intervalBetweenAutomaticItemRotations: 7000
            })
        ]
    });
}
