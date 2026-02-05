"use strict";
n.d(t, { b3: () => c, i6: () => f, jq: () => _, mb: () => d, n4: () => m, sn: () => p, vp: () => h });
var r = n(7584),
    i = n(253932),
    a = n(961350),
    s = n(954571),
    o = n(652215),
    l = n(406535),
    u = n(985018);
function c(e) {
    return null == e.id ? r.Ay.convertSurrogateToName(e.name) : `:${e.name}:`;
}
function d(e, t, n, r) {
    let i;
    return (
        (i = r ? (e ? u.t.i9DXqM : u.t["Z/l+qu"]) : e ? u.t.CLuzw5 : u.t.PirBBE),
        u.intl.formatToPlainString(i, { reactions: t, emojiName: c(n)?.replace(/[:_]/g, " ")?.trim() ?? "" })
    );
}
function _(e) {
    return {
        id: e.id ?? null,
        name: (null != e.id ? e.name : e.optionallyDiverseSequence) ?? e.name ?? "",
        animated: !!e.animated,
    };
}
function f(e, t) {
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
function h(e) {
    let { userId: t, optimistic: n } = e,
        r = a.default.getId() === t;
    return !n || !!r;
}
function m(e, t) {
    i.Zp.updateSetting(e),
        s.default.track(o.HAw.NOTIFICATION_SETTINGS_UPDATED, {
            update_type: l.Y.ACCOUNT,
            reaction_notifications: e,
            reaction_notifications_old: t,
        });
}
