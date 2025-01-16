n.d(t, {
    Z: function () {
        return p;
    }
});
var a = n(200651);
n(192379);
var l = n(866442),
    i = n(481060),
    r = n(377171),
    s = n(937615),
    c = n(549631),
    o = n(981631),
    d = n(388032),
    m = n(866650);
function x(e) {
    let { listing: t } = e,
        { name: n, image: r, description: c } = t,
        d = (0, s.T4)(t.price_tier, o.pKx.USD);
    return (0, a.jsxs)('div', {
        children: [
            (0, a.jsxs)('div', {
                className: m.listingInfoRow,
                children: [
                    (0, a.jsx)('img', {
                        src: r,
                        alt: '',
                        className: m.avatar
                    }),
                    (0, a.jsxs)('div', {
                        children: [
                            (0, a.jsx)(i.Heading, {
                                variant: 'heading-md/medium',
                                className: m.tierName,
                                children: n
                            }),
                            (0, a.jsx)(i.Text, {
                                variant: 'text-md/medium',
                                tag: 'span',
                                children: d
                            }),
                            (0, a.jsx)(i.Text, {
                                variant: 'text-xxs/medium',
                                tag: 'span',
                                children: '/mo.'
                            })
                        ]
                    })
                ]
            }),
            (0, a.jsxs)('div', {
                className: m.listingRoleRow,
                children: [
                    (0, a.jsx)('div', {
                        style: { backgroundColor: (0, l.Rf)(t.role_color) },
                        className: m.roleColor
                    }),
                    (0, a.jsx)('img', {
                        src: r,
                        alt: '',
                        className: m.roleIcon
                    }),
                    (0, a.jsx)(i.Text, {
                        variant: 'text-xs/medium',
                        children: n
                    })
                ]
            }),
            (0, a.jsx)(i.Text, {
                variant: 'text-xs/normal',
                className: m.tierDescription,
                children: c
            })
        ]
    });
}
function u(e) {
    let { channel: t } = e,
        n = (function (e) {
            switch (e) {
                case o.d4z.GUILD_TEXT:
                    return i.TextLockIcon;
                case o.d4z.GUILD_VOICE:
                    return i.VoiceLockIcon;
                case o.d4z.GUILD_STAGE_VOICE:
                    return i.StageLockIcon;
                case o.d4z.GUILD_FORUM:
                    return i.ForumLockIcon;
                case o.d4z.GUILD_MEDIA:
                    return i.ImageLockIcon;
                case o.d4z.GUILD_ANNOUNCEMENT:
                    return i.AnnouncementsLockIcon;
                default:
                    return null;
            }
        })(t.type);
    return (0, a.jsxs)('div', {
        className: m.channelBenefitRow,
        children: [
            null != n &&
                (0, a.jsx)(n, {
                    className: m.channelBenefitIcon,
                    color: 'currentColor'
                }),
            (0, a.jsxs)('div', {
                className: m.channelBenefitText,
                children: [
                    (0, a.jsx)(i.Text, {
                        variant: 'text-sm/normal',
                        children: t.name
                    }),
                    (0, a.jsx)(i.Text, {
                        variant: 'text-xs/normal',
                        className: m.channelBenefitTagline,
                        children: t.tagline
                    })
                ]
            }),
            (0, a.jsx)(c.Z, {
                className: m.__invalid_emojiIcon,
                color: r.Z.CREATOR_REVENUE_LOCKED_CHANNEL_ICON
            })
        ]
    });
}
function h(e) {
    let { benefit: t } = e;
    return void 0 === t
        ? null
        : (0, a.jsxs)('div', {
              className: m.intangibleBenefitRow,
              children: [
                  (0, a.jsx)('div', { className: m.intangibleBenefitIcon }),
                  (0, a.jsx)(i.Text, {
                      variant: 'text-sm/normal',
                      children: t
                  })
              ]
          });
}
function _(e) {
    let { listing: t } = e;
    return (0, a.jsxs)('div', {
        children: [
            (0, a.jsx)(i.Heading, {
                variant: 'heading-sm/semibold',
                className: m.perksHeader,
                children: d.intl.string(d.t.CjC5XV)
            }),
            (0, a.jsx)(i.Text, {
                variant: 'text-xs/semibold',
                className: m.benefitTypeHeader,
                children: d.intl.string(d.t.rI43W1)
            }),
            t.channels.map((e) => (0, a.jsx)(u, { channel: e }, e.id)),
            (0, a.jsx)(i.Text, {
                variant: 'text-xs/semibold',
                className: m.benefitTypeHeader,
                children: d.intl.string(d.t.XqWRLi)
            }),
            t.additional_perks.map((e, t) => (0, a.jsx)(h, { benefit: e.name }, t))
        ]
    });
}
function p(e) {
    let { selectedTemplate: t, handleSelectTemplate: n } = e;
    if (void 0 === t) return null;
    let l = t.listings[0];
    return (0, a.jsxs)('div', {
        className: m.container,
        children: [
            (0, a.jsxs)(i.ScrollerThin, {
                className: m.content,
                children: [(0, a.jsx)(x, { listing: l }), (0, a.jsx)('div', { className: m.divider }), (0, a.jsx)(_, { listing: l })]
            }),
            (0, a.jsx)(i.Button, {
                size: i.Button.Sizes.MEDIUM,
                onClick: () => {
                    n(t);
                },
                children: d.intl.string(d.t['1W7mCg'])
            })
        ]
    });
}
