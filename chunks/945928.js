i.d(t, { Q: () => L });
var n = i(64700),
    l = i(311907),
    s = i(827343),
    r = i(793574),
    a = i(419954),
    u = i(933297),
    o = i(347481),
    d = i(430452),
    _ = i(780964),
    T = i(77735),
    A = i(791460),
    S = i(53386),
    E = i(585175),
    c = i(338145),
    g = i(77371),
    I = i(772797),
    C = i(180491),
    N = i(903427),
    O = i(509381),
    b = i(985018);
let m = (0, a.Qx)(_.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => b.intl.string(b.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: e } = (0, T._)({ location: "SettingsRendererConfig" });
            return e.length > 0;
        },
        useSearchTerms: () => [b.intl.string(b.t.nuFtHH), b.intl.string(b.t.VZPR0R), b.intl.string(b.t.cjPbpT)],
        useValue: function () {
            return (0, l.bG)([d.Ay], () => d.Ay.getActiveInputProfile() ?? O.my.CUSTOM);
        },
        setValue: function (e) {
            let t = [r.A.USER_SETTINGS_VOICE_AND_VIDEO];
            s.A.setActiveInputProfile(e, { analyticsLocations: t });
        },
        useOptions: function () {
            let { enabledInputProfiles: e } = (0, T.d)({ location: "InputProfileCategory" });
            return [
                { value: O.my.VOICE_ISOLATION, name: b.intl.string(b.t.cjPbpT), desc: b.intl.string(b.t.CzhvnE) },
                { value: O.my.STUDIO, name: b.intl.string(b.t.VZPR0R), desc: b.intl.string(b.t.ZaJksS) },
                { value: O.my.CUSTOM, name: b.intl.string(b.t["N/PQjv"]), desc: b.intl.string(b.t.SnBmuY) },
            ].filter((t) => {
                let { value: i } = t;
                return e.includes(i);
            });
        },
    }),
    L = (0, a.zZ)(_.X.VOICE_INPUT_PROFILE_CATEGORY, {
        useInlineNotice: function () {
            let e = (0, l.bG)([o.A, d.Ay], () => {
                let e = d.Ay.getInputDeviceId();
                return (
                    (o.A.hasEchoCancellation(e) || o.A.hasNoiseSuppression(e) || o.A.hasAutomaticGainControl(e)) &&
                    d.Ay.isInputProfileCustom()
                );
            });
            return n.useMemo(() => {
                if (e)
                    return {
                        type: u.lT.INLINE_NOTICE,
                        noticeType: "info",
                        useText: () => b.intl.string(b.t["/Whuzi"]),
                    };
            }, [e]);
        },
        buildLayout: () => [m, E.O, c.w, S.h, N.K, g.C, C.m, I.A, A.U],
    });
