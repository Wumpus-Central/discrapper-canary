"use strict";
n.d(t, {
    IN: () => E,
    b3: () => u,
    i6: () => I,
    is: () => h,
    jq: () => A,
    mb: () => _,
    n4: () => T,
    sn: () => f,
    vp: () => p,
});
var i = n(7584),
    r = n(505527),
    a = n(885386),
    s = n(280450),
    l = n(174459),
    o = n(652215),
    d = n(406535),
    c = n(375708);
function u(e) {
    return null == e.id ? i.Ay.convertSurrogateToName(e.name) : `:${e.name}:`;
}
function _(e, t, n, i) {
    let r;
    return (
        (r = i ? (e ? c.t.i9DXqM : c.t["Z/l+qu"]) : e ? c.t.CLuzw5 : c.t.PirBBE),
        c.intl.formatToPlainString(r, { reactions: t, emojiName: u(n)?.replace(/[:_]/g, " ")?.trim() ?? "" })
    );
}
function E(e, t, n) {
    return (n === r.v.BURST && !0 === t) || (n === r.v.NORMAL && !0 === e);
}
function A(e) {
    return {
        id: e.id ?? null,
        name: (null != e.id ? e.name : e.optionallyDiverseSequence) ?? e.name ?? "",
        animated: !!e.animated,
    };
}
function h(e) {
    return null != e && "" !== e && ("number" == typeof e ? 0 !== e : "0" !== String(e));
}
function I(e, t) {
    if (null != t.id) {
        let n = null != e.id ? `${e.id}` : e.id;
        return `${t.id}` === n;
    }
    return null == e.id && t.name === e.name;
}
function f(e) {
    return e.isThread()
        ? o.JJy.THREAD_TEXT_AREA
        : e.isForumPost()
          ? o.JJy.FORUM_CHANNEL_TEXT_AREA
          : e.isGuildVocal()
            ? o.JJy.TEXT_IN_VOICE
            : o.JJy.CHANNEL_TEXT_AREA;
}
function p(e) {
    let { userId: t, optimistic: n } = e,
        i = s.default.getId() === t;
    return !n || !!i;
}
function T(e, t) {
    a.Zp.updateSetting(e),
        l.default.track(o.HAw.NOTIFICATION_SETTINGS_UPDATED, {
            update_type: d.Y.ACCOUNT,
            reaction_notifications: e,
            reaction_notifications_old: t,
        });
}
