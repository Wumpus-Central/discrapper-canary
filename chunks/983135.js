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
    s = n(983736),
    a = n(45966),
    o = n(819553),
    c = n(637853),
    d = n(17181),
    u = n(962086),
    m = n(225675),
    g = n(592125),
    f = n(430824),
    h = n(823379),
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
    let n = a.Z.getEnabled(e),
        s = Array.from(I.Z.editedDefaultChannelIds).filter((e) => null != g.Z.getChannel(e)),
        [o] = (0, c.d9)(e, [...s]);
    if (n && t === S.Un.ONBOARDING_DEFAULT && o.length < S.X)
        return void i.Z.show({
            title: x.intl.string(x.t.iLdiqY),
            body: x.intl.string(x.t.JOT74c),
        });
    try {
        await (0, p.n_)(e, { mode: t });
    } catch (n) {
        var d;
        let { fieldName: e, error: t } = null != (d = new r.Z(n).getAnyErrorMessageAndField()) ? d : {};
        i.Z.show({
            title: x.intl.string(x.t.iLdiqY),
            body: [e, t].filter(h.lm).join(": "),
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
    let t = f.Z.getGuild(e);
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
                isPending: (0, s.Dc)(t),
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
