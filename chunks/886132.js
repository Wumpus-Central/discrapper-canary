n.d(t, {
    $: () => a,
    a: () => u
});
var i = n(231053),
    r = n(388032),
    a = (function (e) {
        return (e.GET_PREMIUM = 'GET_PREMIUM'), (e.JOIN_GUILD = 'JOIN_GUILD'), (e.UNAVAILABLE = 'UNAVAILABLE'), e;
    })({});
let s = (e) => {
        let { isPremium: t, hasJoinedEmojiSourceGuild: n, isUnusableRoleSubscriptionEmoji: i, emojiComesFromCurrentGuild: r, isDiscoverable: a } = e,
            s = 'Custom Emoji Popout';
        return t && !n && a ? (s = 'Custom Emoji Popout (Cross-Server)') : t || !n || i ? t || n || (s = a ? 'Custom Emoji Popout (Upsell Not-Joined Cross-Server)' : 'Custom Emoji Popout (Soft Upsell)') : (s = r ? 'Custom Emoji Popout (Upsell Joined Current-Server)' : 'Custom Emoji Popout (Upsell Joined Cross-Server)'), s;
    },
    o = (e) => {
        let { sourceType: t, expressionSourceApplication: n, isPremium: a, hasJoinedEmojiSourceGuild: s, isUnusableRoleSubscriptionEmoji: o, isDiscoverable: l, emojiComesFromCurrentGuild: u, userIsRoleSubscriber: c, isRoleSubscriptionEmoji: d, shouldHideRoleSubscriptionCTA: f, onOpenPremiumSettings: _ } = e,
            p = null;
        return t === i.w6.APPLICATION && null != n ? r.intl.formatToPlainString(r.t.uERlTU, { appName: n.name }) : a ? (s ? (d ? (f && o ? r.intl.string(r.t.xFb68v) : o ? (c ? r.intl.string(r.t.vLklfH) : r.intl.string(r.t['g8i/bW'])) : r.intl.string(r.t.Eoynp6)) : u ? r.intl.string(r.t.hU4kIS) : r.intl.string(r.t.GM0xaW)) : l ? r.intl.string(r.t.xE9WGh) : r.intl.string(r.t['0LMpW1'])) : s ? (f && o ? r.intl.string(r.t.xFb68v) : o ? (c ? r.intl.string(r.t.vLklfH) : r.intl.string(r.t['g8i/bW'])) : u ? r.intl.string(r.t.ICPhqa) : r.intl.string(r.t.jQy3aG)) : l ? r.intl.string(r.t.FJ6Z09) : r.intl.format(r.t.U6vLcH, { openPremiumSettings: _ });
    },
    l = (e) => {
        let { isPremium: t, hasJoinedEmojiSourceGuild: n, isUnusableRoleSubscriptionEmoji: i, isDiscoverable: a } = e,
            s = n && !i,
            o = !n && a,
            l = !t && (s || o);
        return t && o
            ? {
                  type: 'JOIN_GUILD',
                  text: r.intl.string(r.t.riu2R0),
                  description: null
              }
            : l
              ? {
                    type: 'GET_PREMIUM',
                    text: r.intl.string(r.t['gl/XHB']),
                    description: null
                }
              : {
                    type: 'UNAVAILABLE',
                    text: null,
                    description: null
                };
    },
    u = (e) => {
        let t = o(e),
            n = s(e);
        return {
            ...l(e),
            emojiDescription: t,
            analyticsType: n
        };
    };
