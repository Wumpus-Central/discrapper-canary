n.d(t, { A: () => z }), n(667532);
var i = n(989349),
    r = n.n(i),
    a = n(73153),
    l = n(11057),
    s = n(100767),
    o = n(47167),
    d = n(379418),
    u = n(9842),
    c = n(773669),
    A = n(253932),
    h = n(961350),
    _ = n(761640),
    E = n(734057),
    p = n(696451),
    m = n(317525),
    g = n(71393),
    I = n(430452),
    C = n(803224),
    f = n(994500),
    T = n(309010),
    S = n(543465),
    N = n(287809),
    O = n(427262),
    L = n(54570),
    y = n(8880);
n(75804);
var v = n(652215),
    b = n(985018);
let D = [],
    R = null,
    P = null,
    w = null,
    M = /\|\|([\s\S]+?)\|\|/g;
function U(e, t, n, i) {
    let a = g.A.getGuild(n),
        l = e
            .replace(M, b.intl.string(b.t["F+x38C"]))
            .replace(/<@!?(\d+)>/g, (e, t) => {
                let i = N.default.getUser(t);
                return null == i ? b.intl.string(b.t.sKdZ6U) : (p.Ay.getNick(n, i.id) ?? O.Ay.getName(i));
            })
            .replace(/<@&?(\d+)>/g, (e, t) => {
                let n = null != a ? m.A.getRole(a.id, t) : null;
                return null != n && null != n.name ? n.name : b.intl.string(b.t["YV4F/n"]);
            })
            .replace(/<#(\d+)>/g, (e, t) => {
                let n = E.A.getChannel(t);
                return null == n ? b.intl.string(b.t.J90oLW) : (0, o.m1)(n, N.default, f.A);
            })
            .replace(/<a?:(\w+):(\d+)>/g, (e, t) => `${b.intl.string(b.t.sMOuuS)} ${t}`)
            .replace(/<\/([^\s]+?):(\d+)>/g, (e, t) => `/${t}`)
            .replace(/<t:(\d+):([A-Z]|[a-z])>/g, (e, t, n) => {
                let i = d.kx[n],
                    a = 1e3 * parseInt(t, 10),
                    l = r()(a);
                return null != i ? i(l) : l.format();
            });
    return null == i
        ? b.intl.formatToPlainString(b.t["uIj77/"], { username: t, body: l })
        : b.intl.formatToPlainString(b.t["Ix4H+j"], { username: t, body: l, replyUsername: i });
}
function x() {
    if (!s.$j) return !1;
    let e = c.default.locale;
    null == w && (w = window.speechSynthesis?.getVoices());
    let t = w.filter((t) => t.lang === e || t.lang.slice(0, e.length) === e);
    P = t.length > 0 ? t[0] : null;
}
async function G(e, t, n, i, r) {
    let a = s.aW(e, n);
    null !== a &&
        (null == P && x(),
        t ? await (0, L.pr)() : R?.removeEventListener("end", L.pr),
        a.addEventListener("end", L.pr),
        null != i && a.addEventListener("start", i),
        null != r && a.addEventListener("end", r),
        (R = a),
        s.wz(a, P));
}
function k(e, t, n, i, r) {
    G(e, t, r, () => {
        (0, L.kC)(n, i);
    });
}
function j(e) {
    let { text: t, interrupt: n, maxLength: i, onStart: r, onEnd: a } = e;
    G(t, n, i, r, a);
}
function V() {
    return null !== R && R.removeEventListener("end", L.pr), s._X(), (R = null), !0;
}
function H(e) {
    let { message: t, channel: n } = e,
        i = t.type === v.lAJ.REPLY ? u.A.getMessageByReference(t.messageReference) : null,
        r = i?.state === u.a.LOADED ? i?.message?.author : null,
        a = null != r ? (p.Ay.getNick(n.guild_id, r?.id) ?? O.Ay.getName(r)) : null,
        l = n.getGuildId(),
        s = p.Ay.getNick(l, t.author.id) ?? O.Ay.getName(t.author);
    return k(U(t.content, s, l, a), !0, n.id, t.id), !0;
}
function B(e) {
    let { channelId: t, message: n, optimistic: i } = e;
    if (i || I.Ay.isSelfDeaf()) return !1;
    let r = E.A.getChannel(t);
    if (null == r) return !1;
    let a = T.A.getChannelId(),
        l = _.Ay.getCurrentSidebarChannelId(a),
        s = t === a || t === l,
        o = A.on.getSetting() && n.tts && s,
        d = C.A.getTTSType(),
        u = n.author?.id !== h.default.getId() && (d === v.aVn.ALL_CHANNELS || (d === v.aVn.SELECTED_CHANNEL && s));
    if ((o || u) && !f.A.isBlockedOrIgnoredForMessage(n)) {
        if (D.indexOf(n.id) >= 0) return !1;
        D.unshift(n.id) > 10 && D.pop();
        let e = r.getGuildId();
        if (null != e && S.Ay.getMutedChannels(e).has(t)) return !1;
        let i = p.Ay.getNick(e, n.author?.id) ?? O.Ay.getName(n.author) ?? "",
            a = n.type === v.lAJ.REPLY ? n.referenced_message?.author : null,
            l = null != a ? (p.Ay.getNick(e, a?.id) ?? O.Ay.getName(a)) : null;
        k(U(n.content, i, e, l), !1, r.id, n.id, 200);
    }
    return !1;
}
function F(e) {
    let { id: t, channelId: n } = e,
        i = y.A.currentMessage;
    return null != i && t === i.messageId && n === i.channelId && ((0, L.pr)(), !0);
}
function Y() {
    I.Ay.isSelfDeaf() && s._X();
}
function K(e) {
    let { channelId: t } = e,
        n = y.A.currentMessage;
    null != n && n.channelId !== t && (0, L.pr)();
}
let z = {
    init() {
        a.h.subscribe("SPEAK_TEXT", j),
            a.h.subscribe("SPEAK_MESSAGE", H),
            a.h.subscribe("STOP_SPEAKING", V),
            a.h.subscribe("MESSAGE_CREATE", B),
            a.h.subscribe("MESSAGE_DELETE", F),
            a.h.subscribe("AUDIO_TOGGLE_SELF_DEAF", Y),
            a.h.subscribe("CHANNEL_SELECT", K),
            a.h.subscribe("USER_SETTINGS_PROTO_UPDATE", x),
            (0, l.I)(x);
    },
};
