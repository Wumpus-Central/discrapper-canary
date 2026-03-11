"use strict";
n.d(t, { A: () => g });
var i = n(627968),
    s = n(110259),
    l = n(397927),
    r = n(139286),
    a = n(893148),
    o = n(400281),
    d = n(985018),
    c = n(774278),
    u = n(584643);
function m(e) {
    let { config: t } = e,
        { noticeText: n, ctaLabel: s, ctaClickable: r, onCtaClicked: a } = t;
    return (0, i.jsxs)("div", {
        className: c.__invalid_ctaContainer,
        children: [
            (0, i.jsx)("img", { className: c.__invalid_heroBanner, src: u, alt: d.intl.string(d.t.Af4klP) }),
            (0, i.jsxs)("div", {
                className: c.__invalid_ctaContent,
                children: [
                    (0, i.jsx)(l.Heading, {
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        children: d.intl.string(d.t["PqYfh/"]),
                    }),
                    (0, i.jsx)(l.hKd, { size: 12 }),
                    (0, i.jsx)(l.Text, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: d.intl.string(d.t["41wkMc"]),
                    }),
                    (0, i.jsx)(l.hKd, { size: 24 }),
                    (0, i.jsx)(l.po8, {
                        messageType: l.YCn.INFO,
                        action: (0, i.jsx)(l.Button, {
                            variant: "overlay-secondary",
                            text: s,
                            onClick: a,
                            disabled: !r,
                        }),
                        children: n,
                    }),
                ],
            }),
        ],
    });
}
function g(e) {
    let { guild: t, config: n } = e,
        { isLoading: d, error: u, creatorMonetizationOnboardingMarketing: g } = (0, a.A)(t.id);
    return ((0, r.A)({
        type: s.ImpressionTypes.PANE,
        name: s.ImpressionNames.ENABLE_CREATOR_MONETIZATION_WAITLIST_LANDING,
        properties: { guild_id: t.id },
    }),
    d)
        ? (0, i.jsx)(l.y$y, {})
        : (0, i.jsxs)("div", {
              className: c.__invalid_container,
              children: [
                  (0, i.jsx)(m, { config: n }),
                  (0, i.jsx)(o.j, { onboardingMarketing: g, onboardingMarketingError: u }),
              ],
          });
}
