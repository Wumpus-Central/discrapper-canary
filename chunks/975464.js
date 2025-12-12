n.d(t, {
    C: () => j,
    Z: () => v,
});
var r = n(54381),
    i = n(473749),
    l = n(990547),
    a = n(481060),
    s = n(213609),
    o = n(17079),
    c = n(605288),
    d = n(787051),
    u = n(346163),
    g = n(271267),
    f = n(320893),
    m = n(81509),
    b = n(662379),
    p = n(60533),
    h = n(581050),
    x = n(14562);
function j(e) {
    let { onboardingMarketing: t, onboardingMarketingError: n } = e,
        i = (e) => {
            let { children: t } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(a.izJ, { className: x.sectionDivider }), t],
            });
        },
        l = (0, r.jsx)(i, { children: (0, r.jsx)(b.Z, {}) }, h.q.HOW_IT_WORKS),
        s = (0, r.jsx)(i, { children: (0, r.jsx)(f.Z, {}) }, h.q.BENEFITS);
    return null != n || (null == t ? void 0 : t.sections) == null
        ? (0, r.jsxs)(r.Fragment, {
              children: [l, s],
          })
        : (0, r.jsx)(r.Fragment, {
              children: t.sections.map((e) => {
                  switch (e.type) {
                      case h.q.HOW_IT_WORKS:
                          return l;
                      case h.q.BENEFITS:
                          return s;
                      case h.q.OTHER_CREATORS:
                          return (0, r.jsx)(
                              i,
                              { children: (0, r.jsx)(m.Z, { highlightedCreators: e.creators }) },
                              h.q.OTHER_CREATORS,
                          );
                  }
              }),
          });
}
function v(e) {
    let { guild: t } = e,
        n = (0, u.Z)(t),
        { eligibilityLoading: f, eligibilityError: m, eligibility: b } = n,
        h = (0, c.j)(b),
        { isLoading: v, error: O, creatorMonetizationOnboardingMarketing: C } = (0, d.Z)(t.id);
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
                ineligible_reasons: h,
            },
        },
        { disableTrack: null == t.id || null == b },
    ),
    f || null == b || v)
        ? (0, r.jsx)(a.$jN, {})
        : b.actionRequired
          ? (0, r.jsx)(p.Z, { guild: t })
          : null != m
            ? (0, r.jsx)(a.M14, {
                  type: "critical",
                  children: m.message,
              })
            : (0, r.jsxs)("div", {
                  className: x.container,
                  children: [
                      (0, r.jsx)(g.Z, {
                          guild: t,
                          monetizationEligibility: n,
                      }),
                      (0, r.jsx)(j, {
                          onboardingMarketing: C,
                          onboardingMarketingError: O,
                      }),
                  ],
              });
}
