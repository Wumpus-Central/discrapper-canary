n.d(t, {
    C: () => C,
    Z: () => f
});
var i = n(200651);
n(192379);
var r = n(990547),
    l = n(481060),
    s = n(213609),
    a = n(605288),
    o = n(787051),
    c = n(346163),
    d = n(587431),
    u = n(271267),
    m = n(320893),
    h = n(81509),
    g = n(662379),
    x = n(60533),
    p = n(581050),
    _ = n(122319);
function C(e) {
    let { onboardingMarketing: t, onboardingMarketingError: n } = e,
        r = (e) => {
            let { children: t } = e;
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(l.$i$, { className: _.sectionDivider }), t]
            });
        },
        s = (0, i.jsx)(r, { children: (0, i.jsx)(g.Z, {}) }, p.q.HOW_IT_WORKS),
        a = (0, i.jsx)(r, { children: (0, i.jsx)(m.Z, {}) }, p.q.BENEFITS);
    return null != n || (null == t ? void 0 : t.sections) == null
        ? (0, i.jsxs)(i.Fragment, {
              children: [s, a]
          })
        : (0, i.jsx)(i.Fragment, {
              children: t.sections.map((e) => {
                  switch (e.type) {
                      case p.q.HOW_IT_WORKS:
                          return s;
                      case p.q.BENEFITS:
                          return a;
                      case p.q.OTHER_CREATORS:
                          return (0, i.jsx)(r, { children: (0, i.jsx)(h.Z, { highlightedCreators: e.creators }) }, p.q.OTHER_CREATORS);
                  }
              })
          });
}
function f(e) {
    let { guild: t } = e,
        n = (0, c.Z)(t),
        { eligibilityLoading: m, eligibilityError: h, eligibility: g } = n,
        p = (0, a.j)(g),
        { isLoading: f, error: v, creatorMonetizationOnboardingMarketing: N } = (0, o.Z)(t.id);
    return ((0, s.Z)(
        {
            type: r.ImpressionTypes.PANE,
            name: r.ImpressionNames.ENABLE_CREATOR_MONETIZATION_ACCEPT_TERMS_LANDING,
            properties: {
                guild_id: t.id,
                is_owner: n.isGuildOwner,
                is_eligible: n.eligibleForMonetization,
                ineligible_reasons: p
            }
        },
        { disableTrack: null == t.id || null == g }
    ),
    m || null == g || f)
        ? (0, i.jsx)(l.$jN, {})
        : g.actionRequired
          ? (0, i.jsx)(x.Z, { guild: t })
          : null != h
            ? (0, i.jsx)(d.Z, { children: h.message })
            : (0, i.jsxs)('div', {
                  className: _.container,
                  children: [
                      (0, i.jsx)(u.Z, {
                          guild: t,
                          monetizationEligibility: n
                      }),
                      (0, i.jsx)(C, {
                          onboardingMarketing: N,
                          onboardingMarketingError: v
                      })
                  ]
              });
}
