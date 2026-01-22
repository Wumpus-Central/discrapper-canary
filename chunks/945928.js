i.d(e, { Q: () => b });
var n = i(64700),
    l = i(311907),
    s = i(827343),
    r = i(793574),
    u = i(419954),
    a = i(933297),
    o = i(347481),
    T = i(430452),
    A = i(780964),
    S = i(77735),
    E = i(791460),
    d = i(53386),
    _ = i(585175),
    I = i(338145),
    g = i(77371),
    c = i(772797),
    N = i(180491),
    O = i(903427),
    C = i(509381),
    L = i(985018);
let R = (0, u.Qx)(A.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => L.intl.string(L.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: t } = (0, S._)({ location: "SettingsRendererConfig" });
            return t.length > 0;
        },
        useSearchTerms: () => [L.intl.string(L.t.nuFtHH), L.intl.string(L.t.VZPR0R), L.intl.string(L.t.cjPbpT)],
        useValue: function () {
            return (0, l.bG)([T.A], () => {
                var t;
                return null != (t = T.A.getActiveInputProfile()) ? t : C.my.CUSTOM;
            });
        },
        setValue: function (t) {
            let e = [r.A.USER_SETTINGS_VOICE_AND_VIDEO];
            s.A.setActiveInputProfile(t, { analyticsLocations: e });
        },
        useOptions: function () {
            let { enabledInputProfiles: t } = (0, S.d)({ location: "InputProfileCategory" });
            return [
                {
                    value: C.my.VOICE_ISOLATION,
                    name: L.intl.string(L.t.cjPbpT),
                    desc: L.intl.string(L.t.CzhvnE),
                },
                {
                    value: C.my.STUDIO,
                    name: L.intl.string(L.t.VZPR0R),
                    desc: L.intl.string(L.t.ZaJksS),
                },
                {
                    value: C.my.CUSTOM,
                    name: L.intl.string(L.t["N/PQjv"]),
                    desc: L.intl.string(L.t.SnBmuY),
                },
            ].filter((e) => {
                let { value: i } = e;
                return t.includes(i);
            });
        },
    }),
    b = (0, u.zZ)(A.X.VOICE_INPUT_PROFILE_CATEGORY, {
        useNotice: function () {
            let t = (0, l.bG)([o.A, T.A], () => {
                let t = T.A.getInputDeviceId();
                return (
                    (o.A.hasEchoCancellation(t) || o.A.hasNoiseSuppression(t) || o.A.hasAutomaticGainControl(t)) &&
                    T.A.isInputProfileCustom()
                );
            });
            return n.useMemo(() => {
                if (t)
                    return {
                        type: a.W.INLINE_NOTICE,
                        noticeType: "info",
                        useText: () => L.intl.string(L.t["/Whuzi"]),
                    };
            }, [t]);
        },
        buildLayout: () => [R, _.O, I.w, d.h, O.K, g.C, N.m, c.A, E.U],
    });
