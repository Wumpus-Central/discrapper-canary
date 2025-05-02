n.d(t, {
    C: () => b,
    Z: () => j
});
var r = n(200651);
n(192379);
var i = n(990547),
    l = n(481060),
    s = n(213609),
    a = n(605288),
    o = n(787051),
    c = n(346163),
    u = n(587431),
    d = n(271267),
    m = n(320893),
    g = n(81509),
    p = n(662379),
    f = n(60533),
    h = n(581050),
    x = n(551131);
function b(e) {
    let { onboardingMarketing: t, onboardingMarketingError: n } = e,
        i = (e) => {
            let { children: t } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(l.$i$, { className: x.sectionDivider }), t]
            });
        },
        s = (0, r.jsx)(i, { children: (0, r.jsx)(p.Z, {}) }, h.q.HOW_IT_WORKS),
        a = (0, r.jsx)(i, { children: (0, r.jsx)(m.Z, {}) }, h.q.BENEFITS);
    return null != n || (null == t ? void 0 : t.sections) == null
        ? (0, r.jsxs)(r.Fragment, {
              children: [s, a]
          })
        : (0, r.jsx)(r.Fragment, {
              children: t.sections.map((e) => {
                  switch (e.type) {
                      case h.q.HOW_IT_WORKS:
                          return s;
                      case h.q.BENEFITS:
                          return a;
                      case h.q.OTHER_CREATORS:
                          return (0, r.jsx)(i, { children: (0, r.jsx)(g.Z, { highlightedCreators: e.creators }) }, h.q.OTHER_CREATORS);
                  }
              })
          });
}
function j(e) {
    let { guild: t } = e,
        n = (0, c.Z)(t),
        { eligibilityLoading: m, eligibilityError: g, eligibility: p } = n,
        h = (0, a.j)(p),
        { isLoading: j, error: _, creatorMonetizationOnboardingMarketing: v } = (0, o.Z)(t.id);
    return ((0, s.Z)(
        {
            type: i.ImpressionTypes.PANE,
            name: i.ImpressionNames.ENABLE_CREATOR_MONETIZATION_ACCEPT_TERMS_LANDING,
            properties: {
                guild_id: t.id,
                is_owner: n.isGuildOwner,
                is_eligible: n.eligibleForMonetization,
                ineligible_reasons: h
            }
        },
        { disableTrack: null == t.id || null == p }
    ),
    m || null == p || j)
        ? (0, r.jsx)(l.$jN, {})
        : p.actionRequired
          ? (0, r.jsx)(f.Z, { guild: t })
          : null != g
            ? (0, r.jsx)(u.Z, { children: g.message })
            : (0, r.jsxs)('div', {
                  className: x.container,
                  children: [
                      (0, r.jsx)(d.Z, {
                          guild: t,
                          monetizationEligibility: n
                      }),
                      (0, r.jsx)(b, {
                          onboardingMarketing: v,
                          onboardingMarketingError: _
                      })
                  ]
              });
}
