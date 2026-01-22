n.d(t, {
    A: () => a,
}),
    n(896048);
var r = n(64700),
    i = n(181658),
    l = n(493540),
    s = n(853922);

function a(e) {
    let [t, n] = r.useState(null != e),
        [a, c] = r.useState(),
        [o, d] = r.useState(),
        u = r.useCallback(async (e) => {
            n(!0), c(void 0);
            try {
                var t, r, a, o, u;
                let n = await l.jh(e);
                d({
                    isEligibleForMonetization: n.sufficient,
                    hasSufficientMembers: n.size,
                    hasEnabled2FA: n.mfa,
                    meetsServerAgeRequirement: n.age,
                    meetsOwnerAgeRequirement: n.owner_age,
                    noRecentViolations: n.safe_environment,
                    weeklyCommunicators: n.engagement_healthy,
                    hasMemberRetention: n.retention_healthy,
                    notNSFW: 0 === Object.keys(n.nsfw_properties).length,
                    canApply: n.can_apply,
                    isApplicationPending: (null == (t = n.latest_request) ? void 0 : t.state) === s.h.OPEN,
                    actionRequired: (null == (r = n.latest_request) ? void 0 : r.state) === s.h.ACTION_REQUIRED,
                    minimumAgeInDays: n.minimum_age_in_days,
                    minimumOwnerAgeInYears: n.minimum_owner_age_in_years,
                    minimumSize: n.minimum_size,
                    latestRequest: n.latest_request,
                    rejection: n.rejection,
                    guildMemberCount: null == (a = n.health_score) ? void 0 : a.guild_size,
                    communicatorCount: null == (o = n.health_score) ? void 0 : o.communicators,
                    retentionScore: null == (u = n.health_score) ? void 0 : u.perc_ret_w1,
                });
            } catch (e) {
                c(new i.A(e));
            } finally {
                n(!1);
            }
        }, []);
    return {
        error: a,
        loading: t,
        eligibility: o,
        refresh: r.useCallback(() => {
            null != e && u(e);
        }, [e, u]),
    };
}
