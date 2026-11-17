var l = n(582128),
    u = n(512750),
    r = n(855986),
    i = n(831617);
n(162113);
var o = n(71393),
    s = n(576705),
    A = n(568065),
    _ = n(652215);
n.d(
    t,
    {},
    {
        A: function (e, t) {
            let n = (0, i.C$)(e, "useGuildPowerupNewPerkMarketingVersion"),
                E = (0, r.bG)([o.A], () => o.A.getGuild(e)?.features.has(_.GuildFeatures.GAME_SERVERS)),
                a = (0, r.bG)([s.A, o.A], () => s.A.can(_.xBc.MANAGE_GUILD, o.A.getGuild(e)));
            return l.useMemo(() => {
                (t?.allPowerups?.[u.SL], t?.unlockedPowerups?.[u.SL]);
                let e = t?.allPowerups?.[u.zY] != null,
                    l = t?.unlockedPowerups?.[u.zY] != null;
                return e && !l
                    ? A.QS.FILE_UPLOAD_250_MB
                    : Array.from(A.Q0[A.QS.GUILD_TAG_BADGE_PACKS_WAVE_TWO]).some(
                            (e) => t?.unlockedPowerups?.[e] != null,
                        )
                      ? n && !E
                          ? A.QS.GAME_SERVER_HOSTING
                          : Array.from(A.Q0[A.QS.GUILD_TAG_BADGE_PACKS_WAVE_ONE]).some(
                                  (e) => t?.unlockedPowerups?.[e] != null,
                              )
                            ? 0
                            : A.QS.GUILD_TAG_BADGE_PACKS_WAVE_ONE
                      : A.QS.GUILD_TAG_BADGE_PACKS_WAVE_TWO;
            }, [t, n, E, e, a]);
        },
    },
);
