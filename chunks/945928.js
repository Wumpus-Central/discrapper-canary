i.d(e, { Q: () => b });
var n = i(64700),
    l = i(311907),
    s = i(827343),
    r = i(793574),
    a = i(419954),
    u = i(933297),
    o = i(347481),
    d = i(430452),
    T = i(780964),
    A = i(77735),
    S = i(791460),
    E = i(53386),
    g = i(585175),
    _ = i(338145),
    c = i(77371),
    I = i(772797),
    N = i(180491),
    C = i(903427),
    O = i(509381),
    L = i(985018);
let R = (0, a.Qx)(T.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => L.intl.string(L.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: t } = (0, A._)({ location: "SettingsRendererConfig" });
            return t.length > 0;
        },
        useSearchTerms: () => [L.intl.string(L.t.nuFtHH), L.intl.string(L.t.VZPR0R), L.intl.string(L.t.cjPbpT)],
        useValue: function () {
            return (0, l.bG)([d.A], () => d.A.getActiveInputProfile() ?? O.my.CUSTOM);
        },
        setValue: function (t) {
            let e = [r.A.USER_SETTINGS_VOICE_AND_VIDEO];
            s.A.setActiveInputProfile(t, { analyticsLocations: e });
        },
        useOptions: function () {
            let { enabledInputProfiles: t } = (0, A.d)({ location: "InputProfileCategory" });
            return [
                { value: O.my.VOICE_ISOLATION, name: L.intl.string(L.t.cjPbpT), desc: L.intl.string(L.t.CzhvnE) },
                { value: O.my.STUDIO, name: L.intl.string(L.t.VZPR0R), desc: L.intl.string(L.t.ZaJksS) },
                { value: O.my.CUSTOM, name: L.intl.string(L.t["N/PQjv"]), desc: L.intl.string(L.t.SnBmuY) },
            ].filter((e) => {
                let { value: i } = e;
                return t.includes(i);
            });
        },
    }),
    b = (0, a.zZ)(T.X.VOICE_INPUT_PROFILE_CATEGORY, {
        useInlineNotice: function () {
            let t = (0, l.bG)([o.A, d.A], () => {
                let t = d.A.getInputDeviceId();
                return (
                    (o.A.hasEchoCancellation(t) || o.A.hasNoiseSuppression(t) || o.A.hasAutomaticGainControl(t)) &&
                    d.A.isInputProfileCustom()
                );
            });
            return n.useMemo(() => {
                if (t)
                    return { type: u.W.INLINE_NOTICE, noticeType: "info", useText: () => L.intl.string(L.t["/Whuzi"]) };
            }, [t]);
        },
        buildLayout: () => [R, g.O, _.w, E.h, C.K, c.C, N.m, I.A, S.U],
    });
