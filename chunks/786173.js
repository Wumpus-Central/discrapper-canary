n.d(t, { A: () => d });
var l = n(582128),
    u = n(512750),
    r = n(17928),
    i = n(831617);
n(557193);
var o = n(71393),
    s = n(576705),
    A = n(383272),
    _ = n(414133),
    E = n(568065),
    a = n(652215);
function d(e, t) {
    let n = (0, i.C$)(e, "useGuildPowerupNewPerkMarketingVersion"),
        d = (0, r.bG)([o.A], () => o.A.getGuild(e)?.features.has(a.GuildFeatures.GAME_SERVERS)),
        G = (0, A.DD)(e, "useGuildPowerupNewPerkMarketingVersion"),
        P = (0, _.OS)("useGuildPowerupNewPerkMarketingVersion"),
        R = (0, A.lY)(e, "useGuildPowerupNewPerkMarketingVersion"),
        S = G && P && !R,
        I = (0, r.bG)([s.A, o.A], () => s.A.can(a.xBc.MANAGE_GUILD, o.A.getGuild(e)));
    return l.useMemo(() => {
        (t?.allPowerups?.[u.SL], t?.unlockedPowerups?.[u.SL]);
        let e = t?.allPowerups?.[u.d0] != null,
            l = t?.unlockedPowerups?.[u.d0] != null;
        if (S && e && !l) return E.QS.GUILD_THEME;
        let r = t?.allPowerups?.[u.zY] != null,
            i = t?.unlockedPowerups?.[u.zY] != null;
        return r && !i
            ? E.QS.FILE_UPLOAD_250_MB
            : Array.from(E.Q0[E.QS.GUILD_TAG_BADGE_PACKS_WAVE_TWO]).some((e) => t?.unlockedPowerups?.[e] != null)
              ? n && !d
                  ? E.QS.GAME_SERVER_HOSTING
                  : Array.from(E.Q0[E.QS.GUILD_TAG_BADGE_PACKS_WAVE_ONE]).some((e) => t?.unlockedPowerups?.[e] != null)
                    ? 0
                    : E.QS.GUILD_TAG_BADGE_PACKS_WAVE_ONE
              : E.QS.GUILD_TAG_BADGE_PACKS_WAVE_TWO;
    }, [t, n, d, S, e, I]);
}
