n.d(t, {
    C: () => v,
    Z: () => _,
});
var r = n(255367),
    i = n(73800),
    l = n(990547),
    a = n(481060),
    s = n(213609),
    o = n(17079),
    c = n(605288),
    d = n(787051),
    u = n(346163),
    m = n(587431),
    g = n(271267),
    p = n(320893),
    h = n(81509),
    f = n(662379),
    b = n(60533),
    x = n(581050),
    j = n(169400);
function v(e) {
    let { onboardingMarketing: t, onboardingMarketingError: n } = e,
        i = (e) => {
            let { children: t } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(a.$i$, { className: j.sectionDivider }), t],
            });
        },
        l = (0, r.jsx)(i, { children: (0, r.jsx)(f.Z, {}) }, x.q.HOW_IT_WORKS),
        s = (0, r.jsx)(i, { children: (0, r.jsx)(p.Z, {}) }, x.q.BENEFITS);
    return null != n || (null == t ? void 0 : t.sections) == null
        ? (0, r.jsxs)(r.Fragment, {
              children: [l, s],
          })
        : (0, r.jsx)(r.Fragment, {
              children: t.sections.map((e) => {
                  switch (e.type) {
                      case x.q.HOW_IT_WORKS:
                          return l;
                      case x.q.BENEFITS:
                          return s;
                      case x.q.OTHER_CREATORS:
                          return (0, r.jsx)(
                              i,
                              { children: (0, r.jsx)(h.Z, { highlightedCreators: e.creators }) },
                              x.q.OTHER_CREATORS,
                          );
                  }
              }),
          });
}
function _(e) {
    let { guild: t } = e,
        n = (0, u.Z)(t),
        { eligibilityLoading: p, eligibilityError: h, eligibility: f } = n,
        x = (0, c.j)(f),
        { isLoading: _, error: O, creatorMonetizationOnboardingMarketing: y } = (0, d.Z)(t.id);
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
                ineligible_reasons: x,
            },
        },
        { disableTrack: null == t.id || null == f },
    ),
    p || null == f || _)
        ? (0, r.jsx)(a.$jN, {})
        : f.actionRequired
          ? (0, r.jsx)(b.Z, { guild: t })
          : null != h
            ? (0, r.jsx)(m.Z, { children: h.message })
            : (0, r.jsxs)("div", {
                  className: j.container,
                  children: [
                      (0, r.jsx)(g.Z, {
                          guild: t,
                          monetizationEligibility: n,
                      }),
                      (0, r.jsx)(v, {
                          onboardingMarketing: y,
                          onboardingMarketingError: O,
                      }),
                  ],
              });
}
