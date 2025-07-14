(n.d(t, {
    $K: () => x,
    IG: () => v,
    Nb: () => _,
    Ts: () => j,
    Wy: () => b,
    di: () => D
}),
    n(388685));
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
    h = n(592125),
    I = n(430824),
    g = n(823379),
    N = n(434404),
    f = n(889369),
    S = n(570961),
    p = n(84658),
    E = n(176505),
    T = n(290511),
    O = n(388032);
function x(e) {
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
        s = Array.from(f.Z.editedDefaultChannelIds).filter((e) => null != h.Z.getChannel(e)),
        [o, d] = (0, c.d9)(e, [...s]);
    if (n && t === T.Un.ONBOARDING_DEFAULT && (d.length < T.md || o.length < T.X))
        return void i.Z.show({
            title: O.intl.string(O.t.iLdiqa),
            body: O.intl.string(O.t.JOT74e)
        });
    try {
        await (0, S.n_)(e, { mode: t });
    } catch (n) {
        var u;
        let { fieldName: e, error: t } = null != (u = new r.Z(n).getAnyErrorMessageAndField()) ? u : {};
        i.Z.show({
            title: O.intl.string(O.t.iLdiqa),
            body: [e, t].filter(g.lm).join(': ')
        });
    }
    l.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_SET_MODE',
        guildId: e,
        mode: t
    });
}
function v(e, t) {
    let n = p.xh.findIndex((e) => e === t);
    -1 !== n && n !== p.xh.length - 1 && x(p.xh[n + 1]);
}
function b(e, t) {
    let n = p.xh.findIndex((e) => e === t);
    -1 !== n && 0 !== n && x(p.xh[n - 1]);
}
async function D(e) {
    let t = I.Z.getGuild(e);
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
                flags: 0
            }
        }),
        o.ZP.resetOnboardingStatus(t.id),
        (0, d.EI)(t.id),
        await (0, d.default)({
            guildId: t.id,
            isPreview: !0,
            returnChannelId: E.oC.GUILD_HOME
        }));
}
