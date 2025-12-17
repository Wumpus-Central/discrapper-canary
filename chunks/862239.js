a.d(t, { Z: () => h }), a(953529);
var n = a(54381);
a(473749);
var r = a(866442),
    i = a(692547),
    l = a(481060),
    s = a(937615),
    c = a(549631),
    o = a(981631),
    d = a(388032),
    m = a(218417);
function f(e) {
    let { listing: t } = e,
        { name: a, image: i, description: c } = t,
        d = (0, s.T4)(t.price_tier, o.pKx.USD);
    return (0, n.jsxs)("div", {
        children: [
            (0, n.jsxs)("div", {
                className: m.listingInfoRow,
                children: [
                    (0, n.jsx)("img", {
                        src: i,
                        alt: "",
                        className: m.avatar,
                    }),
                    (0, n.jsxs)("div", {
                        children: [
                            (0, n.jsx)(l.Heading, {
                                variant: "heading-md/medium",
                                className: m.tierName,
                                children: a,
                            }),
                            (0, n.jsx)(l.Text, {
                                variant: "text-md/medium",
                                tag: "span",
                                children: d,
                            }),
                            (0, n.jsx)(l.Text, {
                                variant: "text-xxs/medium",
                                tag: "span",
                                children: "/mo.",
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: m.listingRoleRow,
                children: [
                    (0, n.jsx)("div", {
                        style: { backgroundColor: (0, r.Rf)(t.role_color) },
                        className: m.roleColor,
                    }),
                    (0, n.jsx)("img", {
                        src: i,
                        alt: "",
                        className: m.roleIcon,
                    }),
                    (0, n.jsx)(l.Text, {
                        variant: "text-xs/medium",
                        children: a,
                    }),
                ],
            }),
            (0, n.jsx)(l.Text, {
                variant: "text-xs/normal",
                className: m.tierDescription,
                children: c,
            }),
        ],
    });
}
function x(e) {
    let { channel: t } = e,
        a = (function (e) {
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
    return (0, n.jsxs)("div", {
        className: m.channelBenefitRow,
        children: [
            null != a &&
                (0, n.jsx)(a, {
                    className: m.channelBenefitIcon,
                    color: "currentColor",
                }),
            (0, n.jsxs)("div", {
                className: m.channelBenefitText,
                children: [
                    (0, n.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        children: t.name,
                    }),
                    (0, n.jsx)(l.Text, {
                        variant: "text-xs/normal",
                        className: m.channelBenefitTagline,
                        children: t.tagline,
                    }),
                ],
            }),
            (0, n.jsx)(c.Z, {
                className: m.__invalid_emojiIcon,
                color: i.Z.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css,
            }),
        ],
    });
}
function u(e) {
    let { benefit: t } = e;
    return void 0 === t
        ? null
        : (0, n.jsxs)("div", {
              className: m.intangibleBenefitRow,
              children: [
                  (0, n.jsx)("div", { className: m.intangibleBenefitIcon }),
                  (0, n.jsx)(l.Text, {
                      variant: "text-sm/normal",
                      children: t,
                  }),
              ],
          });
}
function p(e) {
    let { listing: t } = e;
    return (0, n.jsxs)("div", {
        children: [
            (0, n.jsx)(l.Heading, {
                variant: "heading-sm/semibold",
                className: m.perksHeader,
                children: d.intl.string(d.t.CjC5XZ),
            }),
            (0, n.jsx)(l.Text, {
                variant: "text-xs/semibold",
                className: m.benefitTypeHeader,
                children: d.intl.string(d.t.rI43Wx),
            }),
            t.channels.map((e) => (0, n.jsx)(x, { channel: e }, e.id)),
            (0, n.jsx)(l.Text, {
                variant: "text-xs/semibold",
                className: m.benefitTypeHeader,
                children: d.intl.string(d.t.XqWRLj),
            }),
            t.additional_perks.map((e, t) => (0, n.jsx)(u, { benefit: e.name }, t)),
        ],
    });
}
function h(e) {
    let { selectedTemplate: t, handleSelectTemplate: a } = e;
    if (void 0 === t) return null;
    let r = t.listings[0];
    return (0, n.jsxs)("div", {
        className: m.container,
        children: [
            (0, n.jsxs)(l.zJl, {
                className: m.content,
                children: [
                    (0, n.jsx)(f, { listing: r }),
                    (0, n.jsx)("div", { className: m.divider }),
                    (0, n.jsx)(p, { listing: r }),
                ],
            }),
            (0, n.jsx)(l.Button, {
                variant: "primary",
                text: d.intl.string(d.t["1W7mCt"]),
                onClick: () => {
                    a(t);
                },
            }),
        ],
    });
}
