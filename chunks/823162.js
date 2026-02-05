n.d(t, { A: () => q }), n(667532);
var i = n(989349),
    r = n.n(i),
    a = n(73153),
    l = n(11057),
    s = n(100767),
    o = n(47167),
    d = n(379418),
    c = n(9842),
    u = n(773669),
    A = n(253932),
    h = n(961350),
    _ = n(761640),
    m = n(734057),
    p = n(696451),
    g = n(317525),
    E = n(71393),
    f = n(430452),
    I = n(803224),
    C = n(994500),
    N = n(309010),
    T = n(543465),
    S = n(287809),
    x = n(427262),
    v = n(54570),
    b = n(8880);
n(75804);
var y = n(652215),
    L = n(985018);
let O = [],
    R = null,
    P = null,
    j = null,
    D = /\|\|([\s\S]+?)\|\|/g;
function w(e, t, n, i) {
    let a = E.A.getGuild(n),
        l = e
            .replace(D, L.intl.string(L.t["F+x38C"]))
            .replace(/<@!?(\d+)>/g, (e, t) => {
                let i = S.default.getUser(t);
                return null == i ? e : (p.Ay.getNick(n, i.id) ?? x.Ay.getName(i));
            })
            .replace(/<@&?(\d+)>/g, (e, t) => {
                let n = null != a ? g.A.getRole(a.id, t) : null;
                return null != n && null != n.name ? n.name : L.intl.string(L.t.dRcLA2);
            })
            .replace(/<#(\d+)>/g, (e, t) => {
                let n = m.A.getChannel(t);
                return null == n ? e : (0, o.m1)(n, S.default, C.A);
            })
            .replace(/<a?:(\w+):(\d+)>/g, (e, t) => `${L.intl.string(L.t.sMOuuS)} ${t}`)
            .replace(/<\/([^\s]+?):(\d+)>/g, (e, t) => `/${t}`)
            .replace(/<t:(\d+):([A-Z]|[a-z])>/g, (e, t, n) => {
                let i = d.kx[n],
                    a = 1e3 * parseInt(t, 10),
                    l = r()(a);
                return null != i ? i(l) : l.format();
            });
    return null == i
        ? L.intl.formatToPlainString(L.t["uIj77/"], { username: t, body: l })
        : L.intl.formatToPlainString(L.t["Ix4H+j"], { username: t, body: l, replyUsername: i });
}
function M() {
    if (!s.$j) return !1;
    let e = u.default.locale;
    null == j && (j = window.speechSynthesis?.getVoices());
    let t = j.filter((t) => t.lang === e || t.lang.slice(0, e.length) === e);
    P = t.length > 0 ? t[0] : null;
}
async function U(e, t, n, i, r) {
    let a = s.aW(e, n);
    null !== a &&
        (null == P && M(),
        t ? await (0, v.pr)() : R?.removeEventListener("end", v.pr),
        a.addEventListener("end", v.pr),
        null != i && a.addEventListener("start", i),
        null != r && a.addEventListener("end", r),
        (R = a),
        s.wz(a, P));
}
function G(e, t, n, i, r) {
    U(e, t, r, () => {
        (0, v.kC)(n, i);
    });
}
function k(e) {
    let { text: t, interrupt: n, maxLength: i, onStart: r, onEnd: a } = e;
    U(t, n, i, r, a);
}
function V() {
    return null !== R && R.removeEventListener("end", v.pr), s._X(), (R = null), !0;
}
function B(e) {
    let { message: t, channel: n } = e,
        i = t.type === y.lAJ.REPLY ? c.A.getMessageByReference(t.messageReference) : null,
        r = i?.state === c.a.LOADED ? i?.message?.author : null,
        a = null != r ? (p.Ay.getNick(n.guild_id, r?.id) ?? x.Ay.getName(r)) : null,
        l = n.getGuildId(),
        s = p.Ay.getNick(l, t.author.id) ?? x.Ay.getName(t.author);
    return G(w(t.content, s, l, a), !0, n.id, t.id), !0;
}
function H(e) {
    let { channelId: t, message: n, optimistic: i } = e;
    if (i || f.A.isSelfDeaf()) return !1;
    let r = m.A.getChannel(t);
    if (null == r) return !1;
    let a = N.A.getChannelId(),
        l = _.Ay.getCurrentSidebarChannelId(a),
        s = t === a || t === l,
        o = A.on.getSetting() && n.tts && s,
        d = I.A.getTTSType(),
        c = n.author?.id !== h.default.getId() && (d === y.aVn.ALL_CHANNELS || (d === y.aVn.SELECTED_CHANNEL && s));
    if ((o || c) && !C.A.isBlockedOrIgnoredForMessage(n)) {
        if (O.indexOf(n.id) >= 0) return !1;
        O.unshift(n.id) > 10 && O.pop();
        let e = r.getGuildId();
        if (null != e && T.Ay.getMutedChannels(e).has(t)) return !1;
        let i = p.Ay.getNick(e, n.author?.id) ?? x.Ay.getName(n.author) ?? "",
            a = n.type === y.lAJ.REPLY ? n.referenced_message?.author : null,
            l = null != a ? (p.Ay.getNick(e, a?.id) ?? x.Ay.getName(a)) : null;
        G(w(n.content, i, e, l), !1, r.id, n.id, 200);
    }
    return !1;
}
function F(e) {
    let { id: t, channelId: n } = e,
        i = b.A.currentMessage;
    return null != i && t === i.messageId && n === i.channelId && ((0, v.pr)(), !0);
}
function Y() {
    f.A.isSelfDeaf() && s._X();
}
function W(e) {
    let { channelId: t } = e,
        n = b.A.currentMessage;
    null != n && n.channelId !== t && (0, v.pr)();
}
let q = {
    init() {
        a.h.subscribe("SPEAK_TEXT", k),
            a.h.subscribe("SPEAK_MESSAGE", B),
            a.h.subscribe("STOP_SPEAKING", V),
            a.h.subscribe("MESSAGE_CREATE", H),
            a.h.subscribe("MESSAGE_DELETE", F),
            a.h.subscribe("AUDIO_TOGGLE_SELF_DEAF", Y),
            a.h.subscribe("CHANNEL_SELECT", W),
            a.h.subscribe("USER_SETTINGS_PROTO_UPDATE", M),
            (0, l.I)(M);
    },
};
