n(938796);
var i = n(665260),
    r = n(620632),
    a = n(73153),
    s = n(149468),
    l = n(46653),
    o = n(696451),
    d = n(71393),
    c = n(129230),
    u = n(591552),
    _ = n(539916),
    E = n(652215),
    A = n(340837);
function h(e) {
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
function f(e) {
    a.h.dispatch({ type: "GUILD_ONBOARDING_START", guildId: e });
}
function I(e) {
    (c.default.track(E.HAw.GUILD_ONBOARDING_STEP_VIEWED, { ...(0, s.H$)(e), step: -2, required: !0 }),
        c.default.track(E.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
            ...(0, s.H$)(e),
            step: -2,
            skipped: !1,
            is_final_step: !0,
            in_onboarding: !0,
        }));
}
n.d(
    t,
    {},
    {
        Tg: function (e) {
            c.default.track(E.HAw.GUILD_ONBOARDING_LOADED, {
                ...(0, s.H$)(e),
                has_new_prompts: !1,
                number_of_prompts: 0,
            });
        },
        h9: async function (e) {
            let t = l.default.getId(),
                n = (0, i.Lt)(o.Ay.getMember(e, t)?.flags ?? 0, A.D.COMPLETED_ONBOARDING),
                r = d.A.getGuild(e);
            if (null == r || !r.features.has(E.GuildFeatures.GUILD_ONBOARDING)) return Promise.resolve();
            let a = u.A.shouldFetchPrompts(e),
                s = u.A.getOnboardingPrompts(e);
            if (!a && s.length > 0) return (s.every((e) => !e.inOnboarding) ? I(e) : n || f(e), Promise.resolve());
            let c = await h(e);
            return Array.isArray(c) && c.every((e) => !e.inOnboarding) ? (I(e), Promise.resolve()) : (n || f(e), c);
        },
        jx: h,
        sy: f,
    },
);
