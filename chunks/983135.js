n.d(t, {
    $K: () => O,
    IG: () => b,
    Nb: () => _,
    Ts: () => j,
    Wy: () => v,
    di: () => D
}),
    n(388685);
var l = n(570140),
    r = n(668781),
    i = n(479531),
    s = n(983736),
    a = n(45966),
    o = n(819553),
    c = n(637853),
    d = n(17181),
    u = n(962086),
    m = n(225675),
    N = n(592125),
    I = n(430824),
    h = n(823379),
    g = n(434404),
    f = n(889369),
    p = n(570961),
    E = n(84658),
    S = n(176505),
    T = n(290511),
    x = n(388032);
function O(e) {
    l.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_STEP',
        step: e
    });
}
function _(e) {
    null != e &&
        l.Z.dispatch({
            type: 'GUILD_SETTINGS_ONBOARDING_EDUCATION_UPSELL_DISMISSED',
            upsellType: e
        });
}
async function j(e, t) {
    let n = a.Z.getEnabled(e),
        s = Array.from(f.Z.editedDefaultChannelIds).filter((e) => null != N.Z.getChannel(e)),
        [o, d] = (0, c.d9)(e, [...s]);
    if (n && t === T.Un.ONBOARDING_DEFAULT && (d.length < T.md || o.length < T.X))
        return void r.Z.show({
            title: x.NW.string(x.t.iLdiqa),
            body: x.NW.string(x.t.JOT74e)
        });
    try {
        await (0, p.n_)(e, { mode: t });
    } catch (n) {
        var u;
        let { fieldName: e, error: t } = null != (u = new i.Z(n).getAnyErrorMessageAndField()) ? u : {};
        r.Z.show({
            title: x.NW.string(x.t.iLdiqa),
            body: [e, t].filter(h.lm).join(': ')
        });
    }
    l.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_SET_MODE',
        guildId: e,
        mode: t
    });
}
function b(e, t) {
    let n = E.xh.findIndex((e) => e === t);
    -1 !== n && n !== E.xh.length - 1 && O(E.xh[n + 1]);
}
function v(e, t) {
    let n = E.xh.findIndex((e) => e === t);
    -1 !== n && 0 !== n && O(E.xh[n - 1]);
}
async function D(e) {
    let t = I.Z.getGuild(e);
    null != t &&
        (g.Z.close(),
        (0, u.iD)(t.id, {
            type: m.z.NEW_MEMBER,
            roles: {},
            optInChannels: new Set(),
            optInEnabled: !1,
            onboardingResponses: new Set(),
            onboardingEnabled: !0,
            memberOptions: {
                isPending: (0, s.Dc)(t),
                flags: 0
            }
        }),
        o.ZP.resetOnboardingStatus(t.id),
        (0, d.EI)(t.id),
        await (0, d.default)({
            guildId: t.id,
            isPreview: !0,
            returnChannelId: S.oC.GUILD_HOME
        }));
}
