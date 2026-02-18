i.d(e, { I: () => g });
var n = i(627968),
    l = i(64700),
    s = i(873298),
    r = i(397927),
    a = i(334726),
    u = i(546351),
    o = i(419954),
    d = i(253932),
    T = i(780964),
    A = i(985018),
    S = i(536482);
let E = {
        [s.Qd.ACTIVITY_STATUS_OFF]: () => A.intl.string(A.t.FzgQna).toLowerCase(),
        [s.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS]: () => A.intl.string(A.t["1hvuGH"]).toLowerCase(),
        [s.Qd.ACTIVITY_STATUS_ON]: () => A.intl.string(A.t.fQc5la).toLowerCase(),
    },
    g = (0, o.Qx)(T.X.ACTIVITY_PRIVACY_PER_GUILD_DEFAULT_SETTING, {
        useTitle: () =>
            (0, a.m)("GuildActivitySharingDefaultSetting")
                ? A.intl.string(A.t.vpgck1)
                : A.intl.string(S.default["/LHVbt"]),
        useOptions: function () {
            let t = (0, a.m)("GuildActivitySharingDefaultSetting");
            return l.useMemo(
                () =>
                    t
                        ? [
                              {
                                  value: s.Qd.ACTIVITY_STATUS_OFF,
                                  name: A.intl.string(A.t.FzgQna),
                                  desc: A.intl.string(A.t.SQxoyc),
                              },
                              {
                                  value: s.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
                                  name: A.intl.string(A.t["1hvuGH"]),
                                  desc: A.intl.string(A.t.odUCPE),
                              },
                              { value: s.Qd.ACTIVITY_STATUS_ON, name: A.intl.string(A.t.fQc5la) },
                          ]
                        : [
                              { value: s.Qd.ACTIVITY_STATUS_ON, name: A.intl.string(A.t.UzGMH9) },
                              {
                                  value: s.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
                                  name: A.intl.string(S.default["/sAeRY"]),
                              },
                              { value: s.Qd.ACTIVITY_STATUS_OFF, name: A.intl.string(S.default.m3oL7Q) },
                          ],
                [t],
            );
        },
        useValue: d._Z.useSetting,
        setValue: function (t) {
            let e = d._Z.getSetting();
            if ((d._Z.updateSetting(t), !(0, a.r)("GuildActivitySharingDefaultSetting"))) return;
            let l = (0, u.g8)(e, t);
            if (null == l) return;
            let s = E[t]?.() ?? "";
            (0, r.mMO)(async () => {
                let { default: t } = await i.e("41996").then(i.bind(i, 32167));
                return (e) =>
                    (0, n.jsx)(t, {
                        ...e,
                        direction: l.direction,
                        affectedGuildIds: l.affectedGuildIds,
                        settingName: s,
                    });
            });
        },
    });
