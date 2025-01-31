t.d(n, {
    $K: () => p,
    IG: () => j,
    Nb: () => v,
    Ts: () => C,
    Wy: () => D,
    di: () => O
}),
    t(47120);
var l = t(570140),
    i = t(668781),
    s = t(479531),
    r = t(983736),
    a = t(45966),
    o = t(819553),
    d = t(637853),
    c = t(17181),
    u = t(962086),
    m = t(225675),
    I = t(592125),
    h = t(430824),
    N = t(823379),
    g = t(434404),
    x = t(889369),
    E = t(570961),
    T = t(84658),
    S = t(176505),
    _ = t(290511),
    f = t(388032);
function p(e) {
    l.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_STEP',
        step: e
    });
}
function v(e) {
    null != e &&
        l.Z.dispatch({
            type: 'GUILD_SETTINGS_ONBOARDING_EDUCATION_UPSELL_DISMISSED',
            upsellType: e
        });
}
async function C(e, n) {
    let t = a.Z.getEnabled(e),
        r = Array.from(x.Z.editedDefaultChannelIds).filter((e) => null != I.Z.getChannel(e)),
        [o, c] = (0, d.d9)(e, [...r]);
    if (t && n === _.Un.ONBOARDING_DEFAULT && (c.length < _.md || o.length < _.X)) {
        i.Z.show({
            title: f.intl.string(f.t.iLdiqa),
            body: f.intl.string(f.t.JOT74e)
        });
        return;
    }
    try {
        await (0, E.n_)(e, { mode: n });
    } catch (t) {
        var u;
        let { fieldName: e, error: n } = null !== (u = new s.Z(t).getAnyErrorMessageAndField()) && void 0 !== u ? u : {};
        i.Z.show({
            title: f.intl.string(f.t.iLdiqa),
            body: [e, n].filter(N.lm).join(': ')
        });
    }
    l.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_SET_MODE',
        guildId: e,
        mode: n
    });
}
function j(e, n) {
    let t = T.xh.findIndex((e) => e === n);
    -1 !== t && t !== T.xh.length - 1 && p(T.xh[t + 1]);
}
function D(e, n) {
    let t = T.xh.findIndex((e) => e === n);
    -1 !== t && 0 !== t && p(T.xh[t - 1]);
}
async function O(e) {
    let n = h.Z.getGuild(e);
    null != n &&
        (g.Z.close(),
        (0, u.iD)(n.id, {
            type: m.z.NEW_MEMBER,
            roles: {},
            optInChannels: new Set(),
            optInEnabled: !1,
            onboardingResponses: new Set(),
            onboardingEnabled: !0,
            memberOptions: {
                isPending: (0, r.Dc)(n),
                flags: 0
            }
        }),
        o.ZP.resetOnboardingStatus(n.id),
        (0, c.EI)(n.id),
        await (0, c.default)({
            guildId: n.id,
            isPreview: !0,
            returnChannelId: S.oC.GUILD_HOME
        }));
}
