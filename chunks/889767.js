n.d(t, { o: () => m });
var r = n(427930),
    l = n(734057),
    i = n(71393);
n(938796);
var a = n(665260),
    u = n(409481),
    o = n(661191),
    s = n(682901),
    d = n(652215);
let c = Date.UTC(2026, 7, 10),
    f = [
        [d.GuildFeatures.MAX_FILE_SIZE_250_MB, s.q9],
        [d.GuildFeatures.MAX_FILE_SIZE_100_MB, s.w6],
        [d.GuildFeatures.MAX_FILE_SIZE_50_MB, s.eZ],
    ];
function m(e, t) {
    if (null == t || (0, r.A)(t) || !t.attachments.some((t) => t.id === e.id)) return null;
    let n = l.A.getChannel(t.channel_id);
    if (null == n) return null;
    let m = n.getGuildId(),
        p = null != m ? i.A.getGuild(m) : null;
    return null != m && null == p
        ? null
        : (function (e, t) {
              var n;
              let { sentByApplication: r, guildMaxFileSize: l } = t;
              if (r) return null;
              let { size: i, content_type: f } = e;
              if (null == f || !f.startsWith("video/")) return null;
              let m = (0, a.Lt)(e.flags ?? 0, d.sbO.IS_CLIP);
              return i <=
                  Math.max(
                      ((n = e.id), o.default.extractTimestamp(n) >= c ? u.t : Math.max(u.t, 0x1900000)),
                      l,
                      0x6400000 * !!m,
                  )
                  ? null
                  : i <= s.DC
                    ? s.PremiumTypes.TIER_0
                    : i <= s.gb
                      ? s.PremiumTypes.TIER_2
                      : null;
          })(e, {
              sentByApplication: t.author.bot || null != t.webhookId,
              guildMaxFileSize:
                  null != p
                      ? f.reduce((e, t) => {
                            let [n, r] = t;
                            return p.features.has(n) && r > e ? r : e;
                        }, 0)
                      : 0,
          });
}
