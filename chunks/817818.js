"use strict";
n.d(t, { Tg: () => h, h9: () => g, jx: () => m, l8: () => I, sy: () => E }), n(938796);
var r = n(665260),
    i = n(562465),
    a = n(73153),
    s = n(58149),
    o = n(961350),
    l = n(696451),
    u = n(71393),
    c = n(954571),
    d = n(591552),
    _ = n(539916),
    f = n(652215),
    p = n(340837);
function h(e) {
    c.default.track(f.HAw.GUILD_ONBOARDING_LOADED, { ...(0, s.H$)(e), has_new_prompts: !1, number_of_prompts: 0 });
}
function m(e) {
    return (
        a.h.dispatch({ type: "GUILD_ONBOARDING_PROMPTS_FETCH_START", guildId: e }),
        i.Bo.get({ url: f.Rsh.GUILD_ONBOARDING(e), rejectWithError: !1 }).then(
            (t) => {
                let { body: n } = t,
                    r = (0, _.Uh)(n);
                return a.h
                    .dispatch({ type: "GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS", guildId: e, ...r })
                    .then(() => r.prompts);
            },
            (t) => (a.h.dispatch({ type: "GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE", guildId: e }), t),
        )
    );
}
async function g(e) {
    let t = o.default.getId(),
        n = (0, r.Lt)(l.Ay.getMember(e, t)?.flags ?? 0, p.D.COMPLETED_ONBOARDING),
        i = u.A.getGuild(e);
    if (null == i || !i.features.has(f.GuildFeatures.GUILD_ONBOARDING)) return Promise.resolve();
    let a = d.A.shouldFetchPrompts(e),
        s = d.A.getOnboardingPrompts(e);
    if (!a && s.length > 0) return s.every((e) => !e.inOnboarding) ? T(e) : n || E(e), Promise.resolve();
    let c = await m(e);
    return Array.isArray(c) && c.every((e) => !e.inOnboarding) ? (T(e), Promise.resolve()) : (n || E(e), c);
}
function E(e) {
    a.h.dispatch({ type: "GUILD_ONBOARDING_START", guildId: e });
}
let A = -2,
    I = -3;
function T(e) {
    c.default.track(f.HAw.GUILD_ONBOARDING_STEP_VIEWED, { ...(0, s.H$)(e), step: A, required: !0 }),
        c.default.track(f.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
            ...(0, s.H$)(e),
            step: A,
            skipped: !1,
            is_final_step: !0,
            in_onboarding: !0,
        });
}
