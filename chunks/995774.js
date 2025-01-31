n.d(t, {
    Lh: () => c,
    MR: () => m,
    g1: () => f,
    iD: () => d,
    ir: () => _,
    s4: () => p,
    sm: () => h
}),
    n(757143);
var i = n(633302),
    r = n(695346),
    a = n(314897),
    s = n(626135),
    o = n(981631),
    l = n(468788),
    u = n(388032);
function c(e) {
    return null == e.id ? i.ZP.convertSurrogateToName(e.name) : ':'.concat(e.name, ':');
}
function d(e, t, n, i) {
    var r, a, s;
    let o;
    return (
        (o = i ? (e ? u.t.i9DXqK : u.t['Z/l+qq']) : e ? u.t.CLuzw8 : u.t.PirBBA),
        u.intl.formatToPlainString(o, {
            reactions: t,
            emojiName: null !== (s = null === (a = c(n)) || void 0 === a ? void 0 : null === (r = a.replace(/[:_]/g, ' ')) || void 0 === r ? void 0 : r.trim()) && void 0 !== s ? s : ''
        })
    );
}
function f(e) {
    var t, n, i;
    return {
        id: null !== (t = e.id) && void 0 !== t ? t : null,
        name: null !== (i = null !== (n = null != e.id ? e.name : e.optionallyDiverseSequence) && void 0 !== n ? n : e.name) && void 0 !== i ? i : '',
        animated: !!e.animated
    };
}
function _(e, t) {
    if (null != t.id) {
        let n = null != e.id ? ''.concat(e.id) : e.id;
        return ''.concat(t.id) === n;
    }
    return null == e.id && t.name === e.name;
}
function p(e) {
    return e.isThread() ? o.jXE.THREAD_TEXT_AREA : e.isForumPost() ? o.jXE.FORUM_CHANNEL_TEXT_AREA : e.isGuildVocal() ? o.jXE.TEXT_IN_VOICE : o.jXE.CHANNEL_TEXT_AREA;
}
function h(e) {
    let { userId: t, optimistic: n } = e,
        i = a.default.getId() === t;
    return !n || !!i;
}
function m(e, t) {
    r.fz.updateSetting(e),
        s.default.track(o.rMx.NOTIFICATION_SETTINGS_UPDATED, {
            update_type: l.I.ACCOUNT,
            reaction_notifications: e,
            reaction_notifications_old: t
        });
}
