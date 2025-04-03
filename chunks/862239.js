n.d(t, { Z: () => _ }), n(266796);
var a = n(200651);
n(192379);
var r = n(866442),
    l = n(481060),
    i = n(377171),
    s = n(937615),
    c = n(549631),
    o = n(981631),
    d = n(388032),
    m = n(344748);
function x(e) {
    let { listing: t } = e,
        { name: n, image: i, description: c } = t,
        d = (0, s.T4)(t.price_tier, o.pKx.USD);
    return (0, a.jsxs)('div', {
        children: [
            (0, a.jsxs)('div', {
                className: m.listingInfoRow,
                children: [
                    (0, a.jsx)('img', {
                        src: i,
                        alt: '',
                        className: m.avatar
                    }),
                    (0, a.jsxs)('div', {
                        children: [
                            (0, a.jsx)(l.X6q, {
                                variant: 'heading-md/medium',
                                className: m.tierName,
                                children: n
                            }),
                            (0, a.jsx)(l.Text, {
                                variant: 'text-md/medium',
                                tag: 'span',
                                children: d
                            }),
                            (0, a.jsx)(l.Text, {
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
                        style: { backgroundColor: (0, r.Rf)(t.role_color) },
                        className: m.roleColor
                    }),
                    (0, a.jsx)('img', {
                        src: i,
                        alt: '',
                        className: m.roleIcon
                    }),
                    (0, a.jsx)(l.Text, {
                        variant: 'text-xs/medium',
                        children: n
                    })
                ]
            }),
            (0, a.jsx)(l.Text, {
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
                    return l.W4G;
                case o.d4z.GUILD_VOICE:
                    return l.gjC;
                case o.d4z.GUILD_STAGE_VOICE:
                    return l.pki;
                case o.d4z.GUILD_FORUM:
                    return l.BUe;
                case o.d4z.GUILD_MEDIA:
                    return l.D7T;
                case o.d4z.GUILD_ANNOUNCEMENT:
                    return l.Fv2;
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
                    (0, a.jsx)(l.Text, {
                        variant: 'text-sm/normal',
                        children: t.name
                    }),
                    (0, a.jsx)(l.Text, {
                        variant: 'text-xs/normal',
                        className: m.channelBenefitTagline,
                        children: t.tagline
                    })
                ]
            }),
            (0, a.jsx)(c.Z, {
                className: m.__invalid_emojiIcon,
                color: i.Z.CREATOR_REVENUE_LOCKED_CHANNEL_ICON
            })
        ]
    });
}
function f(e) {
    let { benefit: t } = e;
    return void 0 === t
        ? null
        : (0, a.jsxs)('div', {
              className: m.intangibleBenefitRow,
              children: [
                  (0, a.jsx)('div', { className: m.intangibleBenefitIcon }),
                  (0, a.jsx)(l.Text, {
                      variant: 'text-sm/normal',
                      children: t
                  })
              ]
          });
}
function p(e) {
    let { listing: t } = e;
    return (0, a.jsxs)('div', {
        children: [
            (0, a.jsx)(l.X6q, {
                variant: 'heading-sm/semibold',
                className: m.perksHeader,
                children: d.NW.string(d.t.CjC5XV)
            }),
            (0, a.jsx)(l.Text, {
                variant: 'text-xs/semibold',
                className: m.benefitTypeHeader,
                children: d.NW.string(d.t.rI43W1)
            }),
            t.channels.map((e) => (0, a.jsx)(u, { channel: e }, e.id)),
            (0, a.jsx)(l.Text, {
                variant: 'text-xs/semibold',
                className: m.benefitTypeHeader,
                children: d.NW.string(d.t.XqWRLi)
            }),
            t.additional_perks.map((e, t) => (0, a.jsx)(f, { benefit: e.name }, t))
        ]
    });
}
function _(e) {
    let { selectedTemplate: t, handleSelectTemplate: n } = e;
    if (void 0 === t) return null;
    let r = t.listings[0];
    return (0, a.jsxs)('div', {
        className: m.container,
        children: [
            (0, a.jsxs)(l.zJl, {
                className: m.content,
                children: [(0, a.jsx)(x, { listing: r }), (0, a.jsx)('div', { className: m.divider }), (0, a.jsx)(p, { listing: r })]
            }),
            (0, a.jsx)(l.zxk, {
                size: l.zxk.Sizes.MEDIUM,
                onClick: () => {
                    n(t);
                },
                children: d.NW.string(d.t['1W7mCg'])
            })
        ]
    });
}
