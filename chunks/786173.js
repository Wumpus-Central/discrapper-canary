l.d(t, { A: () => d });
var n = l(582128),
    u = l(512750),
    r = l(17928),
    i = l(831617);
l(162113);
var o = l(71393),
    s = l(576705),
    A = l(383272),
    _ = l(414133),
    E = l(568065),
    a = l(652215);
function d(e, t) {
    let l = (0, i.C$)(e, "useGuildPowerupNewPerkMarketingVersion"),
        d = (0, r.bG)([o.A], () => o.A.getGuild(e)?.features.has(a.GuildFeatures.GAME_SERVERS)),
        G = (0, A.DD)(e, "useGuildPowerupNewPerkMarketingVersion"),
        P = (0, _.OS)("useGuildPowerupNewPerkMarketingVersion"),
        S = (0, A.lY)(e, "useGuildPowerupNewPerkMarketingVersion"),
        R = G && P && !S,
        I = (0, r.bG)([s.A, o.A], () => s.A.can(a.xBc.MANAGE_GUILD, o.A.getGuild(e)));
    return n.useMemo(() => {
        (t?.allPowerups?.[u.SL], t?.unlockedPowerups?.[u.SL]);
        let e = t?.allPowerups?.[u.d0] != null,
            n = t?.unlockedPowerups?.[u.d0] != null;
        if (R && e && !n) return E.QS.GUILD_THEME;
        let r = t?.allPowerups?.[u.zY] != null,
            i = t?.unlockedPowerups?.[u.zY] != null;
        return r && !i
            ? E.QS.FILE_UPLOAD_250_MB
            : Array.from(E.Q0[E.QS.GUILD_TAG_BADGE_PACKS_WAVE_TWO]).some((e) => t?.unlockedPowerups?.[e] != null)
              ? l && !d
                  ? E.QS.GAME_SERVER_HOSTING
                  : Array.from(E.Q0[E.QS.GUILD_TAG_BADGE_PACKS_WAVE_ONE]).some((e) => t?.unlockedPowerups?.[e] != null)
                    ? 0
                    : E.QS.GUILD_TAG_BADGE_PACKS_WAVE_ONE
              : E.QS.GUILD_TAG_BADGE_PACKS_WAVE_TWO;
    }, [t, l, d, R, e, I]);
}
