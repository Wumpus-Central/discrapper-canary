"use strict";
n.d(t, { Tg: () => h, h9: () => m, jx: () => p, l8: () => A, sy: () => g }), n(938796);
var r = n(665260),
    i = n(562465),
    s = n(73153),
    a = n(58149),
    o = n(961350),
    l = n(696451),
    u = n(71393),
    d = n(954571),
    c = n(591552),
    _ = n(539916),
    f = n(652215),
    E = n(340837);
function h(e) {
    d.default.track(f.HAw.GUILD_ONBOARDING_LOADED, { ...(0, a.H$)(e), has_new_prompts: !1, number_of_prompts: 0 });
}
function p(e) {
    return (
        s.h.dispatch({ type: "GUILD_ONBOARDING_PROMPTS_FETCH_START", guildId: e }),
        i.Bo.get({ url: f.Rsh.GUILD_ONBOARDING(e), rejectWithError: !1 }).then(
            (t) => {
                let { body: n } = t,
                    r = (0, _.Uh)(n);
                return s.h
                    .dispatch({ type: "GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS", guildId: e, ...r })
                    .then(() => r.prompts);
            },
            (t) => (s.h.dispatch({ type: "GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE", guildId: e }), t),
        )
    );
}
async function m(e) {
    let t = o.default.getId(),
        n = (0, r.Lt)(l.Ay.getMember(e, t)?.flags ?? 0, E.D.COMPLETED_ONBOARDING),
        i = u.A.getGuild(e);
    if (null == i || !i.features.has(f.GuildFeatures.GUILD_ONBOARDING)) return Promise.resolve();
    let s = c.A.shouldFetchPrompts(e),
        a = c.A.getOnboardingPrompts(e);
    if (!s && a.length > 0) return a.every((e) => !e.inOnboarding) ? I(e) : n || g(e), Promise.resolve();
    let d = await p(e);
    return Array.isArray(d) && d.every((e) => !e.inOnboarding) ? (I(e), Promise.resolve()) : (n || g(e), d);
}
function g(e) {
    s.h.dispatch({ type: "GUILD_ONBOARDING_START", guildId: e });
}
let A = -3;
function I(e) {
    d.default.track(f.HAw.GUILD_ONBOARDING_STEP_VIEWED, { ...(0, a.H$)(e), step: -2, required: !0 }),
        d.default.track(f.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
            ...(0, a.H$)(e),
            step: -2,
            skipped: !1,
            is_final_step: !0,
            in_onboarding: !0,
        });
}
