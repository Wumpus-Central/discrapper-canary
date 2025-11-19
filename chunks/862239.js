n.d(t, { Z: () => _ }), n(953529);
var a = n(54381);
n(473749);
var i = n(866442),
    r = n(481060),
    l = n(377171),
    s = n(937615),
    c = n(549631),
    o = n(981631),
    d = n(388032),
    m = n(437280);
function x(e) {
    let { listing: t } = e,
        { name: n, image: l, description: c } = t,
        d = (0, s.T4)(t.price_tier, o.pKx.USD);
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsxs)("div", {
                className: m.listingInfoRow,
                children: [
                    (0, a.jsx)("img", {
                        src: l,
                        alt: "",
                        className: m.avatar,
                    }),
                    (0, a.jsxs)("div", {
                        children: [
                            (0, a.jsx)(r.Heading, {
                                variant: "heading-md/medium",
                                className: m.tierName,
                                children: n,
                            }),
                            (0, a.jsx)(r.Text, {
                                variant: "text-md/medium",
                                tag: "span",
                                children: d,
                            }),
                            (0, a.jsx)(r.Text, {
                                variant: "text-xxs/medium",
                                tag: "span",
                                children: "/mo.",
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: m.listingRoleRow,
                children: [
                    (0, a.jsx)("div", {
                        style: { backgroundColor: (0, i.Rf)(t.role_color) },
                        className: m.roleColor,
                    }),
                    (0, a.jsx)("img", {
                        src: l,
                        alt: "",
                        className: m.roleIcon,
                    }),
                    (0, a.jsx)(r.Text, {
                        variant: "text-xs/medium",
                        children: n,
                    }),
                ],
            }),
            (0, a.jsx)(r.Text, {
                variant: "text-xs/normal",
                className: m.tierDescription,
                children: c,
            }),
        ],
    });
}
function p(e) {
    let { channel: t } = e,
        n = (function (e) {
            switch (e) {
                case o.d4z.GUILD_TEXT:
                    return r.W4G;
                case o.d4z.GUILD_VOICE:
                    return r.gjC;
                case o.d4z.GUILD_STAGE_VOICE:
                    return r.pki;
                case o.d4z.GUILD_FORUM:
                    return r.BUe;
                case o.d4z.GUILD_MEDIA:
                    return r.D7T;
                case o.d4z.GUILD_ANNOUNCEMENT:
                    return r.Fv2;
                default:
                    return null;
            }
        })(t.type);
    return (0, a.jsxs)("div", {
        className: m.channelBenefitRow,
        children: [
            null != n &&
                (0, a.jsx)(n, {
                    className: m.channelBenefitIcon,
                    color: "currentColor",
                }),
            (0, a.jsxs)("div", {
                className: m.channelBenefitText,
                children: [
                    (0, a.jsx)(r.Text, {
                        variant: "text-sm/normal",
                        children: t.name,
                    }),
                    (0, a.jsx)(r.Text, {
                        variant: "text-xs/normal",
                        className: m.channelBenefitTagline,
                        children: t.tagline,
                    }),
                ],
            }),
            (0, a.jsx)(c.Z, {
                className: m.__invalid_emojiIcon,
                color: l.Z.CREATOR_REVENUE_LOCKED_CHANNEL_ICON,
            }),
        ],
    });
}
function u(e) {
    let { benefit: t } = e;
    return void 0 === t
        ? null
        : (0, a.jsxs)("div", {
              className: m.intangibleBenefitRow,
              children: [
                  (0, a.jsx)("div", { className: m.intangibleBenefitIcon }),
                  (0, a.jsx)(r.Text, {
                      variant: "text-sm/normal",
                      children: t,
                  }),
              ],
          });
}
function f(e) {
    let { listing: t } = e;
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsx)(r.Heading, {
                variant: "heading-sm/semibold",
                className: m.perksHeader,
                children: d.intl.string(d.t.CjC5XZ),
            }),
            (0, a.jsx)(r.Text, {
                variant: "text-xs/semibold",
                className: m.benefitTypeHeader,
                children: d.intl.string(d.t.rI43Wx),
            }),
            t.channels.map((e) => (0, a.jsx)(p, { channel: e }, e.id)),
            (0, a.jsx)(r.Text, {
                variant: "text-xs/semibold",
                className: m.benefitTypeHeader,
                children: d.intl.string(d.t.XqWRLj),
            }),
            t.additional_perks.map((e, t) => (0, a.jsx)(u, { benefit: e.name }, t)),
        ],
    });
}
function _(e) {
    let { selectedTemplate: t, handleSelectTemplate: n } = e;
    if (void 0 === t) return null;
    let i = t.listings[0];
    return (0, a.jsxs)("div", {
        className: m.container,
        children: [
            (0, a.jsxs)(r.zJl, {
                className: m.content,
                children: [
                    (0, a.jsx)(x, { listing: i }),
                    (0, a.jsx)("div", { className: m.divider }),
                    (0, a.jsx)(f, { listing: i }),
                ],
            }),
            (0, a.jsx)(r.Button, {
                variant: "primary",
                text: d.intl.string(d.t["1W7mCt"]),
                onClick: () => {
                    n(t);
                },
            }),
        ],
    });
}
