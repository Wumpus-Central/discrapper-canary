n.d(t, { A: () => x });
var i = n(635377),
    l = n.n(i),
    s = n(311907),
    r = n(73153),
    a = n(950762),
    o = n(967198),
    d = n(927813);
let c = {},
    u = {},
    m = 0,
    g = new (l())({ max: 5, maxAge: d.A.Millis.HOUR });
class h extends s.Ay.Store {
    static displayName = "GuildSettingsEmojiStore";
    initialize() {
        this.waitFor(o.A);
    }
    isUploadingEmoji() {
        return m > 0;
    }
    getEmojiRevision(e) {
        return c[e] ?? 0;
    }
    getEmojis(e) {
        return u[e];
    }
    getEmojiRawAsset(e) {
        return g.get(e);
    }
}
let x = new h(r.h, {
    EMOJI_DELETE: function (e) {
        let { guildId: t, emojiId: n } = e;
        u[t] = u[t].filter((e) => e.id !== n);
    },
    EMOJI_FETCH_SUCCESS: function (e) {
        let { guildId: t, emojis: n } = e;
        u[t] = n.map((e) => new a.A(e));
    },
    EMOJI_FETCH_FAILURE: function (e) {
        let { guildId: t } = e;
        u[t] = [];
    },
    EMOJI_UPLOAD_START: function () {
        m++;
    },
    EMOJI_UPLOAD_STOP: function () {
        m--;
    },
    EMOJI_CACHE_RAW_EMOJI_ASSET: function (e) {
        let { emojiId: t, userImage: n } = e;
        g.set(t, n);
    },
    GUILD_EMOJIS_UPDATE: function (e) {
        let { guildId: t } = e;
        c[t] = (c[t] ?? 0) + 1;
    },
});
