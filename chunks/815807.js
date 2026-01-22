n.d(t, {
    b3: () => u,
    i6: () => p,
    jq: () => f,
    mb: () => d,
    n4: () => m,
    sn: () => _,
    vp: () => h,
}),
    n(747238),
    n(812715),
    n(733351);
var r = n(7584),
    i = n(253932),
    a = n(961350),
    s = n(954571),
    o = n(652215),
    l = n(406535),
    c = n(985018);

function u(e) {
    return null == e.id ? r.Ay.convertSurrogateToName(e.name) : ":".concat(e.name, ":");
}

function d(e, t, n, r) {
    var i, a, s;
    let o;
    return (
        (o = r ? (e ? c.t.i9DXqM : c.t["Z/l+qu"]) : e ? c.t.CLuzw5 : c.t.PirBBE),
        c.intl.formatToPlainString(o, {
            reactions: t,
            emojiName:
                null != (i = null == (s = u(n)) || null == (a = s.replace(/[:_]/g, " ")) ? void 0 : a.trim()) ? i : "",
        })
    );
}

function f(e) {
    var t, n, r;
    return {
        id: null != (t = e.id) ? t : null,
        name: null != (n = null != (r = null != e.id ? e.name : e.optionallyDiverseSequence) ? r : e.name) ? n : "",
        animated: !!e.animated,
    };
}

function p(e, t) {
    if (null != t.id) {
        let n = null != e.id ? "".concat(e.id) : e.id;
        return "".concat(t.id) === n;
    }
    return null == e.id && t.name === e.name;
}

function _(e) {
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
