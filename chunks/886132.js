r.d(n, {
    $: function () {
        return a;
    },
    a: function () {
        return d;
    }
});
var i,
    a,
    o = r(231053),
    s = r(388032);
!(function (e) {
    (e.DEFAULT = 'Custom Emoji Popout'), (e.CROSS_SERVER = 'Custom Emoji Popout (Cross-Server)'), (e.UPSELL_CURRENT_SERVER_JOINED = 'Custom Emoji Popout (Upsell Joined Current-Server)'), (e.UPSELL_CROSS_SERVER_JOINED = 'Custom Emoji Popout (Upsell Joined Cross-Server)'), (e.UPSELL_CROSS_SERVER_JOINABLE = 'Custom Emoji Popout (Upsell Not-Joined Cross-Server)'), (e.UPSELL_CROSS_SERVER_UNJOINABLE = 'Custom Emoji Popout (Soft Upsell)');
})(i || (i = {})),
    !(function (e) {
        (e.GET_PREMIUM = 'GET_PREMIUM'), (e.JOIN_GUILD = 'JOIN_GUILD'), (e.UNAVAILABLE = 'UNAVAILABLE');
    })(a || (a = {}));
let l = (e) => {
        let { isPremium: n, hasJoinedEmojiSourceGuild: r, isUnusableRoleSubscriptionEmoji: i, emojiComesFromCurrentGuild: a, isDiscoverable: o } = e,
            s = 'Custom Emoji Popout';
        return n && !r && o ? (s = 'Custom Emoji Popout (Cross-Server)') : n || !r || i ? !n && !r && (s = o ? 'Custom Emoji Popout (Upsell Not-Joined Cross-Server)' : 'Custom Emoji Popout (Soft Upsell)') : (s = a ? 'Custom Emoji Popout (Upsell Joined Current-Server)' : 'Custom Emoji Popout (Upsell Joined Cross-Server)'), s;
    },
    u = (e) => {
        let { sourceType: n, expressionSourceApplication: r, isPremium: i, hasJoinedEmojiSourceGuild: a, isUnusableRoleSubscriptionEmoji: l, isDiscoverable: u, emojiComesFromCurrentGuild: c, userIsRoleSubscriber: d, isRoleSubscriptionEmoji: f, shouldHideRoleSubscriptionCTA: p, onOpenPremiumSettings: h } = e,
            _ = null;
        return (_ = n === o.w6.APPLICATION && null != r ? s.intl.formatToPlainString(s.t.uERlTU, { appName: r.name }) : i ? (a ? (f ? (p && l ? s.intl.string(s.t.xFb68v) : l ? (d ? s.intl.string(s.t.vLklfH) : s.intl.string(s.t['g8i/bW'])) : s.intl.string(s.t.Eoynp6)) : c ? s.intl.string(s.t.hU4kIS) : s.intl.string(s.t.GM0xaW)) : u ? s.intl.string(s.t.xE9WGh) : s.intl.string(s.t['0LMpW1'])) : a ? (p && l ? s.intl.string(s.t.xFb68v) : l ? (d ? s.intl.string(s.t.vLklfH) : s.intl.string(s.t['g8i/bW'])) : c ? s.intl.string(s.t.ICPhqa) : s.intl.string(s.t.jQy3aG)) : u ? s.intl.string(s.t.FJ6Z09) : s.intl.format(s.t.U6vLcH, { openPremiumSettings: h }));
    },
    c = (e) => {
        let { isPremium: n, hasJoinedEmojiSourceGuild: r, isUnusableRoleSubscriptionEmoji: i, isDiscoverable: a } = e,
            o = r && !i,
            l = !r && a,
            u = !n && (o || l);
        return n && l
            ? {
                  type: 'JOIN_GUILD',
                  text: s.intl.string(s.t.riu2R0),
                  description: null
              }
            : u
              ? {
                    type: 'GET_PREMIUM',
                    text: s.intl.string(s.t['gl/XHB']),
                    description: null
                }
              : {
                    type: 'UNAVAILABLE',
                    text: null,
                    description: null
                };
    },
    d = (e) => {
        let n = u(e),
            r = l(e);
        return {
            ...c(e),
            emojiDescription: n,
            analyticsType: r
        };
    };
