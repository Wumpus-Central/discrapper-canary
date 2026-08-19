"use strict";
n.d(t, { Tg: () => h, h9: () => f, jx: () => I, l8: () => T, sy: () => p }), n(938796);
var i = n(665260),
    r = n(636537),
    a = n(228366),
    s = n(95561),
    l = n(280450),
    o = n(696451),
    d = n(71393),
    c = n(174459),
    u = n(591552),
    _ = n(539916),
    E = n(652215),
    A = n(340837);
function h(e) {
    c.default.track(E.HAw.GUILD_ONBOARDING_LOADED, { ...(0, s.H$)(e), has_new_prompts: !1, number_of_prompts: 0 });
}
function I(e) {
    return (
        a.h.dispatch({ type: "GUILD_ONBOARDING_PROMPTS_FETCH_START", guildId: e }),
        r.Bo.get({ url: E.Rsh.GUILD_ONBOARDING(e), rejectWithError: !1 }).then(
            (t) => {
                let { body: n } = t,
                    i = (0, _.Uh)(n);
                return a.h
                    .dispatch({ type: "GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS", guildId: e, ...i })
                    .then(() => i.prompts);
            },
            (t) => (a.h.dispatch({ type: "GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE", guildId: e }), t),
        )
    );
}
async function f(e) {
    let t = l.default.getId(),
        n = (0, i.Lt)(o.Ay.getMember(e, t)?.flags ?? 0, A.D.COMPLETED_ONBOARDING),
        r = d.A.getGuild(e);
    if (null == r || !r.features.has(E.GuildFeatures.GUILD_ONBOARDING)) return Promise.resolve();
    let a = u.A.shouldFetchPrompts(e),
        s = u.A.getOnboardingPrompts(e);
    if (!a && s.length > 0) return s.every((e) => !e.inOnboarding) ? m(e) : n || p(e), Promise.resolve();
    let c = await I(e);
    return Array.isArray(c) && c.every((e) => !e.inOnboarding) ? (m(e), Promise.resolve()) : (n || p(e), c);
}
function p(e) {
    a.h.dispatch({ type: "GUILD_ONBOARDING_START", guildId: e });
}
let T = -3;
function m(e) {
    c.default.track(E.HAw.GUILD_ONBOARDING_STEP_VIEWED, { ...(0, s.H$)(e), step: -2, required: !0 }),
        c.default.track(E.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
            ...(0, s.H$)(e),
            step: -2,
            skipped: !1,
            is_final_step: !0,
            in_onboarding: !0,
        });
}
