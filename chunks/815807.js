"use strict";
n.d(t, { b3: () => c, i6: () => h, is: () => f, jq: () => _, mb: () => d, n4: () => m, sn: () => p, vp: () => E });
var i = n(7584),
    r = n(885386),
    s = n(495544),
    a = n(174459),
    o = n(652215),
    l = n(406535),
    u = n(375708);
function c(e) {
    return null == e.id ? i.Ay.convertSurrogateToName(e.name) : `:${e.name}:`;
}
function d(e, t, n, i) {
    let r;
    return (
        (r = i ? (e ? u.t.i9DXqM : u.t["Z/l+qu"]) : e ? u.t.CLuzw5 : u.t.PirBBE),
        u.intl.formatToPlainString(r, { reactions: t, emojiName: c(n)?.replace(/[:_]/g, " ")?.trim() ?? "" })
    );
}
function _(e) {
    return {
        id: e.id ?? null,
        name: (null != e.id ? e.name : e.optionallyDiverseSequence) ?? e.name ?? "",
        animated: !!e.animated,
    };
}
function f(e) {
    return null != e && "" !== e && ("number" == typeof e ? 0 !== e : "0" !== String(e));
}
function h(e, t) {
    if (null != t.id) {
        let n = null != e.id ? `${e.id}` : e.id;
        return `${t.id}` === n;
    }
    return null == e.id && t.name === e.name;
}
function p(e) {
    return e.isThread()
        ? o.JJy.THREAD_TEXT_AREA
        : e.isForumPost()
          ? o.JJy.FORUM_CHANNEL_TEXT_AREA
          : e.isGuildVocal()
            ? o.JJy.TEXT_IN_VOICE
            : o.JJy.CHANNEL_TEXT_AREA;
}
function E(e) {
    let { userId: t, optimistic: n } = e,
        i = s.default.getId() === t;
    return !n || !!i;
}
function m(e, t) {
    r.Zp.updateSetting(e),
        a.default.track(o.HAw.NOTIFICATION_SETTINGS_UPDATED, {
            update_type: l.Y.ACCOUNT,
            reaction_notifications: e,
            reaction_notifications_old: t,
        });
}
