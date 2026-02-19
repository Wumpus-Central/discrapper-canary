i.d(e, { Q: () => b });
var n = i(64700),
    l = i(311907),
    s = i(827343),
    r = i(793574),
    a = i(419954),
    u = i(933297),
    o = i(347481),
    d = i(430452),
    A = i(780964),
    T = i(77735),
    S = i(791460),
    E = i(53386),
    g = i(585175),
    _ = i(338145),
    c = i(77371),
    I = i(180491),
    C = i(903427),
    N = i(509381),
    O = i(985018);
let L = (0, a.Qx)(A.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => O.intl.string(O.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: t } = (0, T._)({ location: "SettingsRendererConfig" });
            return t.length > 0;
        },
        useSearchTerms: () => [O.intl.string(O.t.nuFtHH), O.intl.string(O.t.VZPR0R), O.intl.string(O.t.cjPbpT)],
        useValue: function () {
            return (0, l.bG)([d.Ay], () => d.Ay.getActiveInputProfile() ?? N.m.CUSTOM);
        },
        setValue: function (t) {
            let e = [r.A.USER_SETTINGS_VOICE_AND_VIDEO];
            s.A.setActiveInputProfile(t, { analyticsLocations: e });
        },
        useOptions: function () {
            let { enabledInputProfiles: t } = (0, T.d)({ location: "InputProfileCategory" });
            return [
                { value: N.m.VOICE_ISOLATION, name: O.intl.string(O.t.cjPbpT), desc: O.intl.string(O.t.CzhvnE) },
                { value: N.m.STUDIO, name: O.intl.string(O.t.VZPR0R), desc: O.intl.string(O.t.ZaJksS) },
                { value: N.m.CUSTOM, name: O.intl.string(O.t["N/PQjv"]), desc: O.intl.string(O.t.SnBmuY) },
            ].filter((e) => {
                let { value: i } = e;
                return t.includes(i);
            });
        },
    }),
    b = (0, a.zZ)(A.X.VOICE_INPUT_PROFILE_CATEGORY, {
        useInlineNotice: function () {
            let t = (0, l.bG)([o.A, d.Ay], () => {
                let t = d.Ay.getInputDeviceId();
                return (
                    (o.A.hasEchoCancellation(t) || o.A.hasNoiseSuppression(t) || o.A.hasAutomaticGainControl(t)) &&
                    d.Ay.isInputProfileCustom()
                );
            });
            return n.useMemo(() => {
                if (t)
                    return {
                        type: u.lT.INLINE_NOTICE,
                        noticeType: "info",
                        useText: () => O.intl.string(O.t["/Whuzi"]),
                    };
            }, [t]);
        },
        buildLayout: () => [L, g.O, _.w, E.h, C.K, c.C, I.m, S.U],
    });
