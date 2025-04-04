n.d(t, {
    $: () => c,
    a: () => _
});
var r = n(231053),
    i = n(388032);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                o(e, t, n[t]);
            });
    }
    return e;
}
function s(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function l(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : s(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var c = (function (e) {
    return (e.GET_PREMIUM = 'GET_PREMIUM'), (e.JOIN_GUILD = 'JOIN_GUILD'), (e.UNAVAILABLE = 'UNAVAILABLE'), e;
})({});
let u = (e) => {
        let { isPremium: t, hasJoinedEmojiSourceGuild: n, isUnusableRoleSubscriptionEmoji: r, emojiComesFromCurrentGuild: i, isDiscoverable: o } = e,
            a = 'Custom Emoji Popout';
        return t && !n && o ? (a = 'Custom Emoji Popout (Cross-Server)') : t || !n || r ? t || n || (a = o ? 'Custom Emoji Popout (Upsell Not-Joined Cross-Server)' : 'Custom Emoji Popout (Soft Upsell)') : (a = i ? 'Custom Emoji Popout (Upsell Joined Current-Server)' : 'Custom Emoji Popout (Upsell Joined Cross-Server)'), a;
    },
    d = (e) => {
        let { sourceType: t, expressionSourceApplication: n, isPremium: o, hasJoinedEmojiSourceGuild: a, isUnusableRoleSubscriptionEmoji: s, isDiscoverable: l, emojiComesFromCurrentGuild: c, userIsRoleSubscriber: u, isRoleSubscriptionEmoji: d, shouldHideRoleSubscriptionCTA: f, onOpenPremiumSettings: _ } = e,
            p = null;
        return t === r.w6.APPLICATION && null != n ? i.NW.formatToPlainString(i.t.uERlTU, { appName: n.name }) : o ? (a ? (d ? (f && s ? i.NW.string(i.t.xFb68v) : s ? (u ? i.NW.string(i.t.vLklfH) : i.NW.string(i.t['g8i/bW'])) : i.NW.string(i.t.Eoynp6)) : c ? i.NW.string(i.t.hU4kIS) : i.NW.string(i.t.GM0xaW)) : l ? i.NW.string(i.t.xE9WGh) : i.NW.string(i.t['0LMpW1'])) : a ? (f && s ? i.NW.string(i.t.xFb68v) : s ? (u ? i.NW.string(i.t.vLklfH) : i.NW.string(i.t['g8i/bW'])) : c ? i.NW.string(i.t.ICPhqa) : i.NW.string(i.t.jQy3aG)) : l ? i.NW.string(i.t.FJ6Z09) : i.NW.format(i.t.U6vLcH, { openPremiumSettings: _ });
    },
    f = (e) => {
        let { isPremium: t, hasJoinedEmojiSourceGuild: n, isUnusableRoleSubscriptionEmoji: r, isDiscoverable: o } = e,
            a = n && !r,
            s = !n && o,
            l = !t && (a || s);
        return t && s
            ? {
                  type: 'JOIN_GUILD',
                  text: i.NW.string(i.t.riu2R0),
                  description: null
              }
            : l
              ? {
                    type: 'GET_PREMIUM',
                    text: i.NW.string(i.t['gl/XHB']),
                    description: null
                }
              : {
                    type: 'UNAVAILABLE',
                    text: null,
                    description: null
                };
    },
    _ = (e) => {
        let t = d(e),
            n = u(e);
        return l(a({}, f(e)), {
            emojiDescription: t,
            analyticsType: n
        });
    };
