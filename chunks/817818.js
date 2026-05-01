n.d(t, { Tg: () => I, h9: () => h, jx: () => T, l8: () => N, sy: () => S }), n(938796);
var i = n(665260),
    a = n(636537),
    r = n(228366),
    s = n(58149),
    l = n(495544),
    o = n(696451),
    d = n(71393),
    c = n(954571),
    _ = n(591552),
    E = n(539916),
    u = n(652215),
    A = n(340837);
function I(e) {
    c.default.track(u.HAw.GUILD_ONBOARDING_LOADED, { ...(0, s.H$)(e), has_new_prompts: !1, number_of_prompts: 0 });
}
function T(e) {
    return (
        r.h.dispatch({ type: "GUILD_ONBOARDING_PROMPTS_FETCH_START", guildId: e }),
        a.Bo.get({ url: u.Rsh.GUILD_ONBOARDING(e), rejectWithError: !1 }).then(
            (t) => {
                let { body: n } = t,
                    i = (0, E.Uh)(n);
                return r.h
                    .dispatch({ type: "GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS", guildId: e, ...i })
                    .then(() => i.prompts);
            },
            (t) => (r.h.dispatch({ type: "GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE", guildId: e }), t),
        )
    );
}
async function h(e) {
    let t = l.default.getId(),
        n = (0, i.Lt)(o.Ay.getMember(e, t)?.flags ?? 0, A.D.COMPLETED_ONBOARDING),
        a = d.A.getGuild(e);
    if (null == a || !a.features.has(u.GuildFeatures.GUILD_ONBOARDING)) return Promise.resolve();
    let r = _.A.shouldFetchPrompts(e),
        s = _.A.getOnboardingPrompts(e);
    if (!r && s.length > 0) return s.every((e) => !e.inOnboarding) ? f(e) : n || S(e), Promise.resolve();
    let c = await T(e);
    return Array.isArray(c) && c.every((e) => !e.inOnboarding) ? (f(e), Promise.resolve()) : (n || S(e), c);
}
function S(e) {
    r.h.dispatch({ type: "GUILD_ONBOARDING_START", guildId: e });
}
let N = -3;
function f(e) {
    c.default.track(u.HAw.GUILD_ONBOARDING_STEP_VIEWED, { ...(0, s.H$)(e), step: -2, required: !0 }),
        c.default.track(u.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
            ...(0, s.H$)(e),
            step: -2,
            skipped: !1,
            is_final_step: !0,
            in_onboarding: !0,
        });
}
