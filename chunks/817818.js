n.d(t, { Tg: () => A, h9: () => S, jx: () => T, l8: () => O, sy: () => N }), n(938796);
var i = n(665260),
    r = n(636537),
    a = n(228366),
    s = n(58149),
    _ = n(495544),
    l = n(696451),
    o = n(71393),
    E = n(954571),
    d = n(591552),
    c = n(539916),
    u = n(652215),
    I = n(340837);
function A(e) {
    E.default.track(u.HAw.GUILD_ONBOARDING_LOADED, { ...(0, s.H$)(e), has_new_prompts: !1, number_of_prompts: 0 });
}
function T(e) {
    return (
        a.h.dispatch({ type: "GUILD_ONBOARDING_PROMPTS_FETCH_START", guildId: e }),
        r.Bo.get({ url: u.Rsh.GUILD_ONBOARDING(e), rejectWithError: !1 }).then(
            (t) => {
                let { body: n } = t,
                    i = (0, c.Uh)(n);
                return a.h
                    .dispatch({ type: "GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS", guildId: e, ...i })
                    .then(() => i.prompts);
            },
            (t) => (a.h.dispatch({ type: "GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE", guildId: e }), t),
        )
    );
}
async function S(e) {
    let t = _.default.getId(),
        n = (0, i.Lt)(l.Ay.getMember(e, t)?.flags ?? 0, I.D.COMPLETED_ONBOARDING),
        r = o.A.getGuild(e);
    if (null == r || !r.features.has(u.GuildFeatures.GUILD_ONBOARDING)) return Promise.resolve();
    let a = d.A.shouldFetchPrompts(e),
        s = d.A.getOnboardingPrompts(e);
    if (!a && s.length > 0) return s.every((e) => !e.inOnboarding) ? R(e) : n || N(e), Promise.resolve();
    let E = await T(e);
    return Array.isArray(E) && E.every((e) => !e.inOnboarding) ? (R(e), Promise.resolve()) : (n || N(e), E);
}
function N(e) {
    a.h.dispatch({ type: "GUILD_ONBOARDING_START", guildId: e });
}
let O = -3;
function R(e) {
    E.default.track(u.HAw.GUILD_ONBOARDING_STEP_VIEWED, { ...(0, s.H$)(e), step: -2, required: !0 }),
        E.default.track(u.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
            ...(0, s.H$)(e),
            step: -2,
            skipped: !1,
            is_final_step: !0,
            in_onboarding: !0,
        });
}
