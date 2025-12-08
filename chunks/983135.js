n.d(t, {
    $K: () => T,
    IG: () => v,
    Nb: () => _,
    Ts: () => j,
    Wy: () => b,
    di: () => D,
}),
    n(388685);
var l = n(570140),
    i = n(668781),
    r = n(479531),
    a = n(983736),
    s = n(45966),
    o = n(819553),
    c = n(637853),
    d = n(17181),
    u = n(962086),
    m = n(225675),
    g = n(592125),
    h = n(430824),
    f = n(823379),
    N = n(434404),
    I = n(889369),
    p = n(570961),
    O = n(84658),
    E = n(176505),
    S = n(290511),
    x = n(388032);
function T(e) {
    l.Z.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_STEP",
        step: e,
    });
}
function _(e) {
    null != e &&
        l.Z.dispatch({
            type: "GUILD_SETTINGS_ONBOARDING_EDUCATION_UPSELL_DISMISSED",
            upsellType: e,
        });
}
async function j(e, t) {
    let n = s.Z.getEnabled(e),
        a = Array.from(I.Z.editedDefaultChannelIds).filter((e) => null != g.Z.getChannel(e)),
        [o, d] = (0, c.d9)(e, [...a]);
    if (n && t === S.Un.ONBOARDING_DEFAULT && (d.length < S.md || o.length < S.X))
        return void i.Z.show({
            title: x.intl.string(x.t.iLdiqY),
            body: x.intl.string(x.t.JOT74c),
        });
    try {
        await (0, p.n_)(e, { mode: t });
    } catch (n) {
        var u;
        let { fieldName: e, error: t } = null != (u = new r.Z(n).getAnyErrorMessageAndField()) ? u : {};
        i.Z.show({
            title: x.intl.string(x.t.iLdiqY),
            body: [e, t].filter(f.lm).join(": "),
        });
    }
    l.Z.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_SET_MODE",
        guildId: e,
        mode: t,
    });
}
function v(e, t) {
    let n = O.xh.findIndex((e) => e === t);
    -1 !== n && n !== O.xh.length - 1 && T(O.xh[n + 1]);
}
function b(e, t) {
    let n = O.xh.findIndex((e) => e === t);
    -1 !== n && 0 !== n && T(O.xh[n - 1]);
}
async function D(e) {
    let t = h.Z.getGuild(e);
    null != t &&
        (N.Z.close(),
        (0, u.iD)(t.id, {
            type: m.z.NEW_MEMBER,
            roles: {},
            optInChannels: new Set(),
            optInEnabled: !1,
            onboardingResponses: new Set(),
            onboardingEnabled: !0,
            memberOptions: {
                isPending: (0, a.Dc)(t),
                flags: 0,
            },
        }),
        o.ZP.resetOnboardingStatus(t.id),
        (0, d.EI)(t.id),
        await (0, d.default)({
            guildId: t.id,
            isPreview: !0,
            returnChannelId: E.oC.GUILD_HOME,
        }));
}
