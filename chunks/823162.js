n.d(t, {
    A: () => z,
}),
    n(747238),
    n(812715),
    n(667532);
var r = n(989349),
    i = n.n(r),
    l = n(73153),
    a = n(11057),
    s = n(100767),
    o = n(47167),
    c = n(379418),
    u = n(9842),
    d = n(773669),
    p = n(253932),
    f = n(961350),
    h = n(761640),
    A = n(734057),
    g = n(696451),
    m = n(317525),
    b = n(71393),
    _ = n(430452),
    E = n(803224),
    O = n(994500),
    y = n(309010),
    I = n(543465),
    v = n(287809),
    S = n(427262),
    C = n(54570),
    N = n(8880);
n(75804);
var T = n(652215),
    j = n(985018);
let x = [],
    P = null,
    w = null,
    L = null,
    R = /\|\|([\s\S]+?)\|\|/g;

function D(e, t, n, r) {
    let l = b.A.getGuild(n),
        a = e
            .replace(R, j.intl.string(j.t["F+x38C"]))
            .replace(/<@!?(\d+)>/g, (e, t) => {
                var r;
                let i = v.default.getUser(t);
                return null == i ? e : null != (r = g.Ay.getNick(n, i.id)) ? r : S.Ay.getName(i);
            })
            .replace(/<@&?(\d+)>/g, (e, t) => {
                let n = null != l ? m.A.getRole(l.id, t) : null;
                return null != n && null != n.name ? n.name : j.intl.string(j.t.dRcLA2);
            })
            .replace(/<#(\d+)>/g, (e, t) => {
                let n = A.A.getChannel(t);
                return null == n ? e : (0, o.m1)(n, v.default, O.A);
            })
            .replace(/<a?:(\w+):(\d+)>/g, (e, t) => "".concat(j.intl.string(j.t.sMOuuS), " ").concat(t))
            .replace(/<\/([^\s]+?):(\d+)>/g, (e, t) => "/".concat(t))
            .replace(/<t:(\d+):([A-Z]|[a-z])>/g, (e, t, n) => {
                let r = c.kx[n],
                    l = 1e3 * parseInt(t, 10),
                    a = i()(l);
                return null != r ? r(a) : a.format();
            });
    return null == r
        ? j.intl.formatToPlainString(j.t["uIj77/"], {
              username: t,
              body: a,
          })
        : j.intl.formatToPlainString(j.t["Ix4H+j"], {
              username: t,
              body: a,
              replyUsername: r,
          });
}

function M() {
    if (!s.$j) return !1;
    let e = d.default.locale;
    if (null == L) {
        var t;
        L = null == (t = window.speechSynthesis) ? void 0 : t.getVoices();
    }
    let n = L.filter((t) => t.lang === e || t.lang.slice(0, e.length) === e);
    w = n.length > 0 ? n[0] : null;
}
async function k(e, t, n, r, i) {
    let l = s.aW(e, n);
    null !== l &&
        (null == w && M(),
        t ? await (0, C.pr)() : null == P || P.removeEventListener("end", C.pr),
        l.addEventListener("end", C.pr),
        null != r && l.addEventListener("start", r),
        null != i && l.addEventListener("end", i),
        (P = l),
        s.wz(l, w));
}

function U(e, t, n, r, i) {
    k(e, t, i, () => {
        (0, C.kC)(n, r);
    });
}

function G(e) {
    let { text: t, interrupt: n, maxLength: r, onStart: i, onEnd: l } = e;
    k(t, n, r, i, l);
}

function V() {
    return null !== P && P.removeEventListener("end", C.pr), s._X(), (P = null), !0;
}

function B(e) {
    var t, n, r;
    let { message: i, channel: l } = e,
        a = i.type === T.lAJ.REPLY ? u.A.getMessageByReference(i.messageReference) : null,
        s =
            (null == a ? void 0 : a.state) === u.a.LOADED
                ? null == a || null == (r = a.message)
                    ? void 0
                    : r.author
                : null,
        o =
            null != s
                ? null != (t = g.Ay.getNick(l.guild_id, null == s ? void 0 : s.id))
                    ? t
                    : S.Ay.getName(s)
                : null,
        c = l.getGuildId(),
        d = null != (n = g.Ay.getNick(c, i.author.id)) ? n : S.Ay.getName(i.author);
    return U(D(i.content, d, c, o), !0, l.id, i.id), !0;
}

function H(e) {
    var t, n, r, i, l, a;
    let { channelId: s, message: o, optimistic: c } = e;
    if (c || _.A.isSelfDeaf()) return !1;
    let u = A.A.getChannel(s);
    if (null == u) return !1;
    let d = y.A.getChannelId(),
        m = h.Ay.getCurrentSidebarChannelId(d),
        b = s === d || s === m,
        v = p.on.getSetting() && o.tts && b,
        C = E.A.getTTSType(),
        N =
            (null == (t = o.author) ? void 0 : t.id) !== f.default.getId() &&
            (C === T.aVn.ALL_CHANNELS || (C === T.aVn.SELECTED_CHANNEL && b));
    if ((v || N) && !O.A.isBlockedOrIgnoredForMessage(o)) {
        if (x.indexOf(o.id) >= 0) return !1;
        x.unshift(o.id) > 10 && x.pop();
        let e = u.getGuildId();
        if (null != e && I.Ay.getMutedChannels(e).has(s)) return !1;
        let t =
                null !=
                (n = null != (r = g.Ay.getNick(e, null == (l = o.author) ? void 0 : l.id)) ? r : S.Ay.getName(o.author))
                    ? n
                    : "",
            c = o.type === T.lAJ.REPLY ? (null == (a = o.referenced_message) ? void 0 : a.author) : null,
            d = null != c ? (null != (i = g.Ay.getNick(e, null == c ? void 0 : c.id)) ? i : S.Ay.getName(c)) : null;
        U(D(o.content, t, e, d), !1, u.id, o.id, 200);
    }
    return !1;
}

function F(e) {
    let { id: t, channelId: n } = e,
        r = N.A.currentMessage;
    return null != r && t === r.messageId && n === r.channelId && ((0, C.pr)(), !0);
}

function Y() {
    _.A.isSelfDeaf() && s._X();
}

function K(e) {
    let { channelId: t } = e,
        n = N.A.currentMessage;
    null != n && n.channelId !== t && (0, C.pr)();
}
let z = {
    init() {
        l.h.subscribe("SPEAK_TEXT", G),
            l.h.subscribe("SPEAK_MESSAGE", B),
            l.h.subscribe("STOP_SPEAKING", V),
            l.h.subscribe("MESSAGE_CREATE", H),
            l.h.subscribe("MESSAGE_DELETE", F),
            l.h.subscribe("AUDIO_TOGGLE_SELF_DEAF", Y),
            l.h.subscribe("CHANNEL_SELECT", K),
            l.h.subscribe("USER_SETTINGS_PROTO_UPDATE", M),
            (0, a.I)(M);
    },
};
