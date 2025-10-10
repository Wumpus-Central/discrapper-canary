n.d(t, {
    C: () => _,
    Z: () => v,
});
var r = n(951288),
    i = n(647438),
    l = n(990547),
    s = n(481060),
    a = n(213609),
    o = n(17079),
    c = n(605288),
    d = n(787051),
    u = n(346163),
    g = n(587431),
    m = n(271267),
    p = n(320893),
    f = n(81509),
    h = n(662379),
    x = n(60533),
    b = n(581050),
    j = n(169400);
function _(e) {
    let { onboardingMarketing: t, onboardingMarketingError: n } = e,
        i = (e) => {
            let { children: t } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(s.izJ, { className: j.sectionDivider }), t],
            });
        },
        l = (0, r.jsx)(i, { children: (0, r.jsx)(h.Z, {}) }, b.q.HOW_IT_WORKS),
        a = (0, r.jsx)(i, { children: (0, r.jsx)(p.Z, {}) }, b.q.BENEFITS);
    return null != n || (null == t ? void 0 : t.sections) == null
        ? (0, r.jsxs)(r.Fragment, {
              children: [l, a],
          })
        : (0, r.jsx)(r.Fragment, {
              children: t.sections.map((e) => {
                  switch (e.type) {
                      case b.q.HOW_IT_WORKS:
                          return l;
                      case b.q.BENEFITS:
                          return a;
                      case b.q.OTHER_CREATORS:
                          return (0, r.jsx)(
                              i,
                              { children: (0, r.jsx)(f.Z, { highlightedCreators: e.creators }) },
                              b.q.OTHER_CREATORS,
                          );
                  }
              }),
          });
}
function v(e) {
    let { guild: t } = e,
        n = (0, u.Z)(t),
        { eligibilityLoading: p, eligibilityError: f, eligibility: h } = n,
        b = (0, c.j)(h),
        { isLoading: v, error: C, creatorMonetizationOnboardingMarketing: O } = (0, d.Z)(t.id);
    return (i.useEffect(() => {
        (0, o.k)(t.id);
    }, [t.id]),
    (0, a.Z)(
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
        { disableTrack: null == t.id || null == h },
    ),
    p || null == h || v)
        ? (0, r.jsx)(s.$jN, {})
        : h.actionRequired
          ? (0, r.jsx)(x.Z, { guild: t })
          : null != f
            ? (0, r.jsx)(g.Z, { children: f.message })
            : (0, r.jsxs)("div", {
                  className: j.container,
                  children: [
                      (0, r.jsx)(m.Z, {
                          guild: t,
                          monetizationEligibility: n,
                      }),
                      (0, r.jsx)(_, {
                          onboardingMarketing: O,
                          onboardingMarketingError: C,
                      }),
                  ],
              });
}
