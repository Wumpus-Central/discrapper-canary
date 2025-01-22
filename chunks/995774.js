r.d(n, {
    Lh: function () {
        return f;
    },
    MR: function () {
        return E;
    },
    g1: function () {
        return h;
    },
    iD: function () {
        return p;
    },
    ir: function () {
        return _;
    },
    s4: function () {
        return m;
    },
    sm: function () {
        return g;
    }
});
var i = r(757143);
var a = r(633302),
    o = r(695346),
    s = r(314897),
    l = r(626135),
    u = r(981631),
    c = r(468788),
    d = r(388032);
function f(e) {
    return null == e.id ? a.ZP.convertSurrogateToName(e.name) : ':'.concat(e.name, ':');
}
function p(e, n, r, i) {
    var a, o, s;
    let l;
    return (
        (l = i ? (e ? d.t.i9DXqK : d.t['Z/l+qq']) : e ? d.t.CLuzw8 : d.t.PirBBA),
        d.intl.formatToPlainString(l, {
            reactions: n,
            emojiName: null !== (s = null === (o = f(r)) || void 0 === o ? void 0 : null === (a = o.replace(/[:_]/g, ' ')) || void 0 === a ? void 0 : a.trim()) && void 0 !== s ? s : ''
        })
    );
}
function h(e) {
    var n, r, i;
    return {
        id: null !== (n = e.id) && void 0 !== n ? n : null,
        name: null !== (i = null !== (r = null != e.id ? e.name : e.optionallyDiverseSequence) && void 0 !== r ? r : e.name) && void 0 !== i ? i : '',
        animated: !!e.animated
    };
}
function _(e, n) {
    if (null != n.id) {
        let r = null != e.id ? ''.concat(e.id) : e.id;
        return ''.concat(n.id) === r;
    }
    return null == e.id && n.name === e.name;
}
function m(e) {
    if (e.isThread()) return u.jXE.THREAD_TEXT_AREA;
    if (e.isForumPost()) return u.jXE.FORUM_CHANNEL_TEXT_AREA;
    if (e.isGuildVocal()) return u.jXE.TEXT_IN_VOICE;
    return u.jXE.CHANNEL_TEXT_AREA;
}
function g(e) {
    let { userId: n, optimistic: r } = e,
        i = s.default.getId() === n;
    return (!r || !!i) && !0;
}
function E(e, n) {
    o.fz.updateSetting(e),
        l.default.track(u.rMx.NOTIFICATION_SETTINGS_UPDATED, {
            update_type: c.I.ACCOUNT,
            reaction_notifications: e,
            reaction_notifications_old: n
        });
}
