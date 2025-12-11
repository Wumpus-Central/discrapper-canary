n.d(t, { Z: () => C });
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(692547),
    s = n(481060),
    o = n(596454),
    c = n(782568),
    d = n(565138),
    u = n(411198),
    g = n(526717),
    f = n(594278),
    m = n(549631),
    b = n(388032),
    p = n(130194);
function h(e) {
    let { subscribers: t } = e;
    return (0, r.jsxs)("div", {
        className: p.guildSubscriberCount,
        children: [
            (0, r.jsx)("div", {
                className: p.subscriberCountValue,
                children: (0, r.jsx)(s.Text, {
                    variant: "text-md/normal",
                    color: "always-white",
                    children: t,
                }),
            }),
            (0, r.jsxs)("div", {
                className: p.subscriberCountText,
                children: [
                    (0, r.jsx)(m.Z, { color: a.Z.colors.WHITE.css }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-md/normal",
                        color: "always-white",
                        children: b.intl.string(b.t["3NNXPW"]),
                    }),
                ],
            }),
        ],
    });
}
function x(e) {
    let { guildName: t, guildIcon: n, guildAvatarUrl: i, subscriberCount: l } = e,
        a = (0, u.dangerouslyConstructGuildRecordFromUntypedObject)({
            name: t,
            icon: n,
        });
    return (0, r.jsxs)("div", {
        className: p.guildCardHeader,
        children: [
            (0, r.jsx)(d.Z, {
                className: p.guildCardHeaderAvatar,
                iconSrc: i,
                guild: a,
                size: d.Z.Sizes.LARGE,
            }),
            (0, r.jsxs)("div", {
                className: p.guildCardHeaderTitle,
                children: [
                    (0, r.jsx)(s.Heading, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: t,
                    }),
                    null != l && (0, r.jsx)(h, { subscribers: l }),
                ],
            }),
        ],
    });
}
function j(e) {
    let { quote: t, quoteAttribution: n, quoteAttributionTitle: i } = e;
    return (0, r.jsxs)("div", {
        className: p.guildCardQuote,
        children: [
            (0, r.jsx)(s.Text, {
                variant: "text-lg/normal",
                color: "interactive-text-active",
                children: t,
            }),
            (0, r.jsx)(s.Text, {
                variant: "text-md/normal",
                color: "interactive-text-active",
                children: b.intl.format(b.t.m0b6Kj, {
                    attributionName: n,
                    attributionTitle: null != i ? i : b.intl.string(b.t.pclUFJ),
                }),
            }),
        ],
    });
}
function v(e) {
    let { emojisToShow: t, notShownEmojiCount: n, storePageUrl: i } = e,
        a = null != t && t.length > 0,
        d = () => {
            null != i && (0, c.Z)(i);
        };
    return (0, r.jsx)("div", {
        className: p.guildPremiumEmojis,
        children: a
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(s.Text, {
                          variant: "text-xs/semibold",
                          color: "text-strong",
                          className: p.premiumEmojisTitle,
                          children: b.intl.string(b.t.wg53L8),
                      }),
                      (0, r.jsxs)("div", {
                          className: p.premiumEmojisRow,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: l()(p.emojisContainer, null != n && p.fullEmojisContainer),
                                  children: [
                                      t.map((e) =>
                                          (0, r.jsx)(
                                              o.Z,
                                              {
                                                  className: p.emoji,
                                                  emojiId: e.id,
                                                  emojiName: e.name,
                                                  animated: e.animated,
                                              },
                                              e.id,
                                          ),
                                      ),
                                      null != n &&
                                          (0, r.jsx)("div", {
                                              className: p.extraEmojiCount,
                                              children: (0, r.jsxs)(s.Text, {
                                                  variant: "text-md/semibold",
                                                  color: "text-default",
                                                  children: ["+", n],
                                              }),
                                          }),
                                  ],
                              }),
                              (0, r.jsx)("div", {
                                  className: p.viewServerButtonContainer,
                                  children: (0, r.jsx)(s.Button, {
                                      variant: "secondary",
                                      disabled: null == i,
                                      onClick: d,
                                      text: b.intl.string(b.t.mQ2IGa),
                                      fullWidth: !0,
                                  }),
                              }),
                          ],
                      }),
                  ],
              })
            : (0, r.jsx)("div", {
                  className: p.viewServerButtonContainer,
                  children: (0, r.jsx)(s.Button, {
                      variant: "secondary",
                      disabled: null == i,
                      onClick: d,
                      text: b.intl.string(b.t.mQ2IGa),
                      fullWidth: !0,
                  }),
              }),
    });
}
function O(e) {
    let { highlightedCreatorGuild: t } = e,
        { guild_id: n, quote: i, quote_attribution: l, quote_attribution_title: a } = t,
        o = (0, g.Z)(n, 4, 60),
        { isLoading: c, hasAllImperativeDetails: d } = o;
    if (c)
        return (0, r.jsx)("div", {
            className: p.guildCard,
            children: (0, r.jsx)(s.$jN, {}),
        });
    if (!d) return null;
    let {
        guildIcon: u,
        guildName: f,
        guildAvatarUrl: m,
        subscriberCount: b,
        emojisToShow: h,
        notShownEmojiCount: O,
        storePageUrl: C,
    } = o.details;
    return (0, r.jsxs)("div", {
        className: p.guildCard,
        children: [
            (0, r.jsx)(x, {
                guildIcon: u,
                guildName: f,
                guildAvatarUrl: m,
                subscriberCount: b,
            }),
            (0, r.jsx)(j, {
                quote: i,
                quoteAttribution: l,
                quoteAttributionTitle: a,
            }),
            (0, r.jsx)(v, {
                emojisToShow: h,
                notShownEmojiCount: O,
                storePageUrl: C,
            }),
        ],
    });
}
function C(e) {
    let { highlightedCreators: t } = e;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(s.Heading, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: b.intl.string(b.t["tJp+QV"]),
            }),
            (0, r.jsx)(s.LZC, { size: 24 }),
            (0, r.jsx)(f.Z, {
                carouselClassName: p.creatorGuildCarousel,
                items: t,
                renderItem: (e) => (0, r.jsx)(O, { highlightedCreatorGuild: e }),
                intervalBetweenAutomaticItemRotations: 7000,
            }),
        ],
    });
}
