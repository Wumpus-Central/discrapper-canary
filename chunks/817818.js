"use strict";
n.d(t, { Tg: () => p, h9: () => m, jx: () => E, l8: () => A, sy: () => g }), n(938796);
var i = n(665260),
    r = n(636537),
    s = n(228366),
    a = n(95561),
    o = n(495544),
    l = n(696451),
    u = n(71393),
    c = n(174459),
    d = n(591552),
    _ = n(539916),
    f = n(652215),
    h = n(340837);
function p(e) {
    c.default.track(f.HAw.GUILD_ONBOARDING_LOADED, { ...(0, a.H$)(e), has_new_prompts: !1, number_of_prompts: 0 });
}
function E(e) {
    return (
        s.h.dispatch({ type: "GUILD_ONBOARDING_PROMPTS_FETCH_START", guildId: e }),
        r.Bo.get({ url: f.Rsh.GUILD_ONBOARDING(e), rejectWithError: !1 }).then(
            (t) => {
                let { body: n } = t,
                    i = (0, _.Uh)(n);
                return s.h
                    .dispatch({ type: "GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS", guildId: e, ...i })
                    .then(() => i.prompts);
            },
            (t) => (s.h.dispatch({ type: "GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE", guildId: e }), t),
        )
    );
}
async function m(e) {
    let t = o.default.getId(),
        n = (0, i.Lt)(l.Ay.getMember(e, t)?.flags ?? 0, h.D.COMPLETED_ONBOARDING),
        r = u.A.getGuild(e);
    if (null == r || !r.features.has(f.GuildFeatures.GUILD_ONBOARDING)) return Promise.resolve();
    let s = d.A.shouldFetchPrompts(e),
        a = d.A.getOnboardingPrompts(e);
    if (!s && a.length > 0) return a.every((e) => !e.inOnboarding) ? I(e) : n || g(e), Promise.resolve();
    let c = await E(e);
    return Array.isArray(c) && c.every((e) => !e.inOnboarding) ? (I(e), Promise.resolve()) : (n || g(e), c);
}
function g(e) {
    s.h.dispatch({ type: "GUILD_ONBOARDING_START", guildId: e });
}
let A = -3;
function I(e) {
    c.default.track(f.HAw.GUILD_ONBOARDING_STEP_VIEWED, { ...(0, a.H$)(e), step: -2, required: !0 }),
        c.default.track(f.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
            ...(0, a.H$)(e),
            step: -2,
            skipped: !1,
            is_final_step: !0,
            in_onboarding: !0,
        });
}
