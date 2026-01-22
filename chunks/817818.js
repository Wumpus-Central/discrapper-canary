n.d(t, {
    Tg: () => b,
    h9: () => O,
    jx: () => y,
    l8: () => S,
    sy: () => A,
}),
    n(938796);
var r = n(665260),
    i = n(562465),
    a = n(73153),
    s = n(58149),
    o = n(961350),
    l = n(696451),
    c = n(71393),
    u = n(954571),
    d = n(591552),
    f = n(539916),
    p = n(652215),
    _ = n(340837);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e) {
    u.default.track(
        p.HAw.GUILD_ONBOARDING_LOADED,
        E(m({}, (0, s.H$)(e)), {
            has_new_prompts: !1,
            number_of_prompts: 0,
        }),
    );
}
function y(e) {
    return (
        a.h.dispatch({
            type: "GUILD_ONBOARDING_PROMPTS_FETCH_START",
            guildId: e,
        }),
        i.Bo.get({
            url: p.Rsh.GUILD_ONBOARDING(e),
            rejectWithError: !1,
        }).then(
            (t) => {
                let { body: n } = t,
                    r = (0, f.Uh)(n);
                return a.h
                    .dispatch(
                        m(
                            {
                                type: "GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS",
                                guildId: e,
                            },
                            r,
                        ),
                    )
                    .then(() => r.prompts);
            },
            (t) => (
                a.h.dispatch({
                    type: "GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE",
                    guildId: e,
                }),
                t
            ),
        )
    );
}
async function O(e) {
    var t, n;
    let i = o.default.getId(),
        a = (0, r.Lt)(
            null != (t = null == (n = l.Ay.getMember(e, i)) ? void 0 : n.flags) ? t : 0,
            _.D.COMPLETED_ONBOARDING,
        ),
        s = c.A.getGuild(e);
    if (null == s || !s.features.has(p.GuildFeatures.GUILD_ONBOARDING)) return Promise.resolve();
    let u = d.A.shouldFetchPrompts(e),
        f = d.A.getOnboardingPrompts(e);
    if (!u && f.length > 0) return f.every((e) => !e.inOnboarding) ? I(e) : a || A(e), Promise.resolve();
    let h = await y(e);
    return Array.isArray(h) && h.every((e) => !e.inOnboarding) ? (I(e), Promise.resolve()) : (a || A(e), h);
}
function A(e) {
    a.h.dispatch({
        type: "GUILD_ONBOARDING_START",
        guildId: e,
    });
}
let v = -2,
    S = -3;
function I(e) {
    u.default.track(
        p.HAw.GUILD_ONBOARDING_STEP_VIEWED,
        E(m({}, (0, s.H$)(e)), {
            step: v,
            required: !0,
        }),
    ),
        u.default.track(
            p.HAw.GUILD_ONBOARDING_STEP_COMPLETED,
            E(m({}, (0, s.H$)(e)), {
                step: v,
                skipped: !1,
                is_final_step: !0,
                in_onboarding: !0,
            }),
        );
}
