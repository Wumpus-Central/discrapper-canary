n.d(t, {
    C: () => x,
    Z: () => j
});
var r = n(200651);
n(192379);
var i = n(990547),
    s = n(481060),
    a = n(213609),
    l = n(605288),
    o = n(787051),
    c = n(346163),
    d = n(587431),
    u = n(271267),
    m = n(320893),
    g = n(81509),
    p = n(662379),
    h = n(60533),
    f = n(581050),
    b = n(551131);
function x(e) {
    let { onboardingMarketing: t, onboardingMarketingError: n } = e,
        i = (e) => {
            let { children: t } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(s.$i$, { className: b.sectionDivider }), t]
            });
        },
        a = (0, r.jsx)(i, { children: (0, r.jsx)(p.Z, {}) }, f.q.HOW_IT_WORKS),
        l = (0, r.jsx)(i, { children: (0, r.jsx)(m.Z, {}) }, f.q.BENEFITS);
    return null != n || (null == t ? void 0 : t.sections) == null
        ? (0, r.jsxs)(r.Fragment, {
              children: [a, l]
          })
        : (0, r.jsx)(r.Fragment, {
              children: t.sections.map((e) => {
                  switch (e.type) {
                      case f.q.HOW_IT_WORKS:
                          return a;
                      case f.q.BENEFITS:
                          return l;
                      case f.q.OTHER_CREATORS:
                          return (0, r.jsx)(i, { children: (0, r.jsx)(g.Z, { highlightedCreators: e.creators }) }, f.q.OTHER_CREATORS);
                  }
              })
          });
}
function j(e) {
    let { guild: t } = e,
        n = (0, c.Z)(t),
        { eligibilityLoading: m, eligibilityError: g, eligibility: p } = n,
        f = (0, l.j)(p),
        { isLoading: j, error: N, creatorMonetizationOnboardingMarketing: _ } = (0, o.Z)(t.id);
    return ((0, a.Z)(
        {
            type: i.ImpressionTypes.PANE,
            name: i.ImpressionNames.ENABLE_CREATOR_MONETIZATION_ACCEPT_TERMS_LANDING,
            properties: {
                guild_id: t.id,
                is_owner: n.isGuildOwner,
                is_eligible: n.eligibleForMonetization,
                ineligible_reasons: f
            }
        },
        { disableTrack: null == t.id || null == p }
    ),
    m || null == p || j)
        ? (0, r.jsx)(s.$jN, {})
        : p.actionRequired
          ? (0, r.jsx)(h.Z, { guild: t })
          : null != g
            ? (0, r.jsx)(d.Z, { children: g.message })
            : (0, r.jsxs)('div', {
                  className: b.container,
                  children: [
                      (0, r.jsx)(u.Z, {
                          guild: t,
                          monetizationEligibility: n
                      }),
                      (0, r.jsx)(x, {
                          onboardingMarketing: _,
                          onboardingMarketingError: N
                      })
                  ]
              });
}
