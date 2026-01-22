n.d(t, { A: () => x });
var r,
    i,
    l = n(635377),
    s = n.n(l),
    a = n(311907),
    c = n(73153),
    o = n(950762),
    d = n(967198),
    u = n(927813);
let f = {},
    g = {},
    b = 0,
    m = new (s())({
        max: 5,
        maxAge: u.A.Millis.HOUR,
    });
class p extends (i = a.Ay.Store) {
    initialize() {
        this.waitFor(d.A);
    }
    isUploadingEmoji() {
        return b > 0;
    }
    getEmojiRevision(e) {
        var t;
        return null != (t = f[e]) ? t : 0;
    }
    getEmojis(e) {
        return g[e];
    }
    getEmojiRawAsset(e) {
        return m.get(e);
    }
}
(r = "displayName") in p
    ? Object.defineProperty(p, r, {
          value: "GuildSettingsEmojiStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (p[r] = "GuildSettingsEmojiStore");
let x = new p(c.h, {
    EMOJI_DELETE: function (e) {
        let { guildId: t, emojiId: n } = e;
        g[t] = g[t].filter((e) => e.id !== n);
    },
    EMOJI_FETCH_SUCCESS: function (e) {
        let { guildId: t, emojis: n } = e;
        g[t] = n.map((e) => new o.A(e));
    },
    EMOJI_FETCH_FAILURE: function (e) {
        let { guildId: t } = e;
        g[t] = [];
    },
    EMOJI_UPLOAD_START: function () {
        b++;
    },
    EMOJI_UPLOAD_STOP: function () {
        b--;
    },
    EMOJI_CACHE_RAW_EMOJI_ASSET: function (e) {
        let { emojiId: t, userImage: n } = e;
        m.set(t, n);
    },
    GUILD_EMOJIS_UPDATE: function (e) {
        var t;
        let { guildId: n } = e;
        f[n] = (null != (t = f[n]) ? t : 0) + 1;
    },
});
