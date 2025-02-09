a.d(t, { Z: () => f });
var n = a(200651);
a(192379);
var l = a(866442),
    i = a(481060),
    s = a(377171),
    r = a(937615),
    c = a(549631),
    o = a(981631),
    d = a(388032),
    m = a(555424);
function x(e) {
    let { listing: t } = e,
        { name: a, image: s, description: c } = t,
        d = (0, r.T4)(t.price_tier, o.pKx.USD);
    return (0, n.jsxs)('div', {
        children: [
            (0, n.jsxs)('div', {
                className: m.listingInfoRow,
                children: [
                    (0, n.jsx)('img', {
                        src: s,
                        alt: '',
                        className: m.avatar
                    }),
                    (0, n.jsxs)('div', {
                        children: [
                            (0, n.jsx)(i.X6q, {
                                variant: 'heading-md/medium',
                                className: m.tierName,
                                children: a
                            }),
                            (0, n.jsx)(i.Text, {
                                variant: 'text-md/medium',
                                tag: 'span',
                                children: d
                            }),
                            (0, n.jsx)(i.Text, {
                                variant: 'text-xxs/medium',
                                tag: 'span',
                                children: '/mo.'
                            })
                        ]
                    })
                ]
            }),
            (0, n.jsxs)('div', {
                className: m.listingRoleRow,
                children: [
                    (0, n.jsx)('div', {
                        style: { backgroundColor: (0, l.Rf)(t.role_color) },
                        className: m.roleColor
                    }),
                    (0, n.jsx)('img', {
                        src: s,
                        alt: '',
                        className: m.roleIcon
                    }),
                    (0, n.jsx)(i.Text, {
                        variant: 'text-xs/medium',
                        children: a
                    })
                ]
            }),
            (0, n.jsx)(i.Text, {
                variant: 'text-xs/normal',
                className: m.tierDescription,
                children: c
            })
        ]
    });
}
function _(e) {
    let { channel: t } = e,
        a = (function (e) {
            switch (e) {
                case o.d4z.GUILD_TEXT:
                    return i.W4G;
                case o.d4z.GUILD_VOICE:
                    return i.gjC;
                case o.d4z.GUILD_STAGE_VOICE:
                    return i.pki;
                case o.d4z.GUILD_FORUM:
                    return i.BUe;
                case o.d4z.GUILD_MEDIA:
                    return i.D7T;
                case o.d4z.GUILD_ANNOUNCEMENT:
                    return i.Fv2;
                default:
                    return null;
            }
        })(t.type);
    return (0, n.jsxs)('div', {
        className: m.channelBenefitRow,
        children: [
            null != a &&
                (0, n.jsx)(a, {
                    className: m.channelBenefitIcon,
                    color: 'currentColor'
                }),
            (0, n.jsxs)('div', {
                className: m.channelBenefitText,
                children: [
                    (0, n.jsx)(i.Text, {
                        variant: 'text-sm/normal',
                        children: t.name
                    }),
                    (0, n.jsx)(i.Text, {
                        variant: 'text-xs/normal',
                        className: m.channelBenefitTagline,
                        children: t.tagline
                    })
                ]
            }),
            (0, n.jsx)(c.Z, {
                className: m.__invalid_emojiIcon,
                color: s.Z.CREATOR_REVENUE_LOCKED_CHANNEL_ICON
            })
        ]
    });
}
function h(e) {
    let { benefit: t } = e;
    return void 0 === t
        ? null
        : (0, n.jsxs)('div', {
              className: m.intangibleBenefitRow,
              children: [
                  (0, n.jsx)('div', { className: m.intangibleBenefitIcon }),
                  (0, n.jsx)(i.Text, {
                      variant: 'text-sm/normal',
                      children: t
                  })
              ]
          });
}
function u(e) {
    let { listing: t } = e;
    return (0, n.jsxs)('div', {
        children: [
            (0, n.jsx)(i.X6q, {
                variant: 'heading-sm/semibold',
                className: m.perksHeader,
                children: d.intl.string(d.t.CjC5XV)
            }),
            (0, n.jsx)(i.Text, {
                variant: 'text-xs/semibold',
                className: m.benefitTypeHeader,
                children: d.intl.string(d.t.rI43W1)
            }),
            t.channels.map((e) => (0, n.jsx)(_, { channel: e }, e.id)),
            (0, n.jsx)(i.Text, {
                variant: 'text-xs/semibold',
                className: m.benefitTypeHeader,
                children: d.intl.string(d.t.XqWRLi)
            }),
            t.additional_perks.map((e, t) => (0, n.jsx)(h, { benefit: e.name }, t))
        ]
    });
}
function f(e) {
    let { selectedTemplate: t, handleSelectTemplate: a } = e;
    if (void 0 === t) return null;
    let l = t.listings[0];
    return (0, n.jsxs)('div', {
        className: m.container,
        children: [
            (0, n.jsxs)(i.zJl, {
                className: m.content,
                children: [(0, n.jsx)(x, { listing: l }), (0, n.jsx)('div', { className: m.divider }), (0, n.jsx)(u, { listing: l })]
            }),
            (0, n.jsx)(i.zxk, {
                size: i.zxk.Sizes.MEDIUM,
                onClick: () => {
                    a(t);
                },
                children: d.intl.string(d.t['1W7mCg'])
            })
        ]
    });
}
