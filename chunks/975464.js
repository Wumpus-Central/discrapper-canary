n.d(t, {
    C: () => j,
    Z: () => _,
});
var r = n(951288),
    i = n(647438),
    l = n(990547),
    a = n(481060),
    s = n(213609),
    o = n(17079),
    c = n(605288),
    d = n(787051),
    u = n(346163),
    g = n(271267),
    m = n(320893),
    p = n(81509),
    f = n(662379),
    h = n(60533),
    b = n(581050),
    x = n(169400);
function j(e) {
    let { onboardingMarketing: t, onboardingMarketingError: n } = e,
        i = (e) => {
            let { children: t } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(a.izJ, { className: x.sectionDivider }), t],
            });
        },
        l = (0, r.jsx)(i, { children: (0, r.jsx)(f.Z, {}) }, b.q.HOW_IT_WORKS),
        s = (0, r.jsx)(i, { children: (0, r.jsx)(m.Z, {}) }, b.q.BENEFITS);
    return null != n || (null == t ? void 0 : t.sections) == null
        ? (0, r.jsxs)(r.Fragment, {
              children: [l, s],
          })
        : (0, r.jsx)(r.Fragment, {
              children: t.sections.map((e) => {
                  switch (e.type) {
                      case b.q.HOW_IT_WORKS:
                          return l;
                      case b.q.BENEFITS:
                          return s;
                      case b.q.OTHER_CREATORS:
                          return (0, r.jsx)(
                              i,
                              { children: (0, r.jsx)(p.Z, { highlightedCreators: e.creators }) },
                              b.q.OTHER_CREATORS,
                          );
                  }
              }),
          });
}
function _(e) {
    let { guild: t } = e,
        n = (0, u.Z)(t),
        { eligibilityLoading: m, eligibilityError: p, eligibility: f } = n,
        b = (0, c.j)(f),
        { isLoading: _, error: v, creatorMonetizationOnboardingMarketing: O } = (0, d.Z)(t.id);
    return (i.useEffect(() => {
        (0, o.k)(t.id);
    }, [t.id]),
    (0, s.Z)(
        {
            type: l.ImpressionTypes.PANE,
            name: l.ImpressionNames.ENABLE_CREATOR_MONETIZATION_ACCEPT_TERMS_LANDING,
            properties: {
                guild_id: t.id,
                is_owner: n.isGuildOwner,
                is_eligible: n.eligibleForMonetization,
                ineligible_reasons: b,
            },
        },
        { disableTrack: null == t.id || null == f },
    ),
    m || null == f || _)
        ? (0, r.jsx)(a.$jN, {})
        : f.actionRequired
          ? (0, r.jsx)(h.Z, { guild: t })
          : null != p
            ? (0, r.jsx)(a.M14, {
                  type: "critical",
                  children: p.message,
              })
            : (0, r.jsxs)("div", {
                  className: x.container,
                  children: [
                      (0, r.jsx)(g.Z, {
                          guild: t,
                          monetizationEligibility: n,
                      }),
                      (0, r.jsx)(j, {
                          onboardingMarketing: O,
                          onboardingMarketingError: v,
                      }),
                  ],
              });
}
