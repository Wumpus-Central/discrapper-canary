"use strict";
n.d(t, {
    A5: () => j,
    Dh: () => M,
    Lu: () => y,
    Vw: () => Y,
    W0: () => P,
    Z1: () => G,
    aW: () => D,
    bk: () => b,
    dc: () => v,
    iO: () => F,
    kj: () => U,
    m8: () => W,
    tC: () => w,
    to: () => H,
    z4: () => K,
}),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162);
var i = n(827762),
    r = n(284009),
    a = n.n(r),
    s = n(989349),
    l = n.n(s),
    o = n(636537),
    d = n(277515),
    c = n(157559),
    u = n(280450),
    _ = n(451409),
    E = n(763827),
    A = n(116956),
    h = n(287809),
    I = n(927813),
    f = n(975571),
    p = n(562153),
    T = n(38405),
    m = n(427262),
    g = n(936388),
    S = n(714763),
    N = n(144485),
    C = n(798286),
    R = n(603266),
    O = n(652215),
    L = n(375708);
function D() {
    return f.A.getArticleURL(O.MVz.END_TO_END_ENCRYPTION);
}
function y() {
    return f.A.getArticleURL(O.MVz.END_TO_END_ENCRYPTION);
}
function v() {
    return f.A.getArticleURL(O.MVz.END_TO_END_ENCRYPTION);
}
function b(e, t, n, i, r) {
    n ? g.A.createSecureFramesVerifiedKey(e, t) : g.A.createSecureFramesTransientKey(e, t),
        (0, C.cw)({ channelId: i, userId: e, analyticsLocation: r });
}
function M(e, t, n) {
    if (n) {
        let n = (0, d.uo)(new Uint8Array(t));
        g.A.deleteSecureFramesVerifiedKey(e, n);
    } else g.A.deleteSecureFramesTransientKey(e);
}
function P(e, t) {
    N.A.openSecureFramesUpdateConfirmation({
        title: L.intl.string(L.t.hdL152),
        subtitle: L.intl.string(L.t["8VGYKg"]),
        onConfirm: () => {
            g.A.deleteSecureFramesVerifiedKey(e, t), (0, C.Jk)();
        },
    });
}
function U(e) {
    let t = h.default.getUser(e),
        n = m.Ay.getName(t);
    N.A.openSecureFramesUpdateConfirmation({
        title: L.intl.formatToPlainString(L.t.K6NGBy, { username: n }),
        subtitle: L.intl.string(L.t.F1BQK3),
        onConfirm: () => {
            g.A.deleteSecureFramesUserVerifiedKeys(e), (0, C.YT)();
        },
    });
}
function w(e) {
    let t = l()(e),
        n = l()().diff(t, "s");
    if (n > 12 * I.A.Seconds.DAYS_30) {
        let e = Math.round(n / (12 * I.A.Seconds.DAYS_30));
        return L.intl.formatToPlainString(L.t.F1wqkD, { count: e });
    }
    if (n > I.A.Seconds.DAYS_30) {
        let e = Math.round(n / I.A.Seconds.DAYS_30);
        return L.intl.formatToPlainString(L.t["iT+b+2"], { count: e });
    }
    if (n > 7 * I.A.Seconds.DAY) {
        let e = Math.round(n / (7 * I.A.Seconds.DAY));
        return L.intl.formatToPlainString(L.t.dLurKZ, { count: e });
    }
    if (n > I.A.Seconds.DAY) {
        let e = Math.round(n / I.A.Seconds.DAY);
        return L.intl.formatToPlainString(L.t.LE8a2H, { count: e });
    }
    if (n > I.A.Seconds.HOUR) {
        let e = Math.round(n / I.A.Seconds.HOUR);
        return L.intl.formatToPlainString(L.t.KULxVS, { count: e });
    } else {
        if (!(n > I.A.Seconds.MINUTE)) return L.intl.formatToPlainString(L.t["/w0Qpw"], { count: n });
        let e = Math.round(n / I.A.Seconds.MINUTE);
        return L.intl.formatToPlainString(L.t.ws6rWq, { count: e });
    }
}
function G(e) {
    let { isCurrentUserKeyPersistent: t, isOtherUserKeyPersistent: n, otherUserNickname: i } = e;
    return t && n
        ? L.intl.format(L.t["FJN+kh"], { helpArticle: D() })
        : t
          ? L.intl.format(L.t["p/9PGp"], { username: i, helpArticle: D() })
          : n
            ? L.intl.format(L.t.qT5z87, { helpArticle: D() })
            : L.intl.format(L.t["6JLy+i"], { helpArticle: D() });
}
async function x(e) {
    let t = u.default.getStaticAuthSessionId();
    return a()(null != t, "[getCurrentUserPublicKey] session id should not be null"), await _.Ay.getMLSSigningKey(t, e);
}
function k(e) {
    let t = i.fromByteArray(new Uint8Array(e));
    return `data:application/octet-stream;base64,${t}`;
}
async function F(e, t, n) {
    try {
        return (
            await o.Bo.post({
                url: O.Rsh.VOICE_MATCH_PUBLIC_KEY(e),
                body: { public_key: k(t), key_version: n },
                rejectWithError: !1,
            })
        ).body.is_match;
    } catch (e) {
        throw (T.A.captureException(e), e);
    }
}
async function V(e) {
    let { key: t, signature: n } = await x(e);
    try {
        await o.Bo.put({
            url: O.Rsh.VOICE_PUBLIC_KEYS(),
            body: { public_key: k(t), signature: k(n), key_version: e },
            rejectWithError: !1,
        }),
            g.A.addUploadedKeyVersion(e);
    } catch (e) {
        throw (T.A.captureException(e), e);
    }
}
function B(e) {
    return S.A.getUploadedKeyVersionsCached().includes(e);
}
async function H(e) {
    B(e) || (await V(e));
}
async function j(e) {
    if (!B(e)) return await V(e), !0;
    let t = u.default.getId(),
        { key: n } = await x(e),
        i = await F(t, n, e);
    return i || (0, C.XS)(e), i;
}
function W(e, t) {
    let [n, i] = t;
    if (!n.isUserConnected(e)) return !1;
    let r = n.getSecureFramesRosterMapEntry(e);
    if (null == r) return !1;
    let a = new Uint8Array(r);
    for (let t of i.getAllActiveStreamKeys()) {
        if (!i.isUserConnected(t, e)) continue;
        let n = A.A.getSecureFramesRosterMapEntry(t, e);
        if (null == n) return !0;
        let r = new Uint8Array(n);
        for (let e = 0; e < a.length; e++) if (a[e] !== r[e]) return !0;
    }
    return !1;
}
function Y(e) {
    let { userId: t, channelId: n, nickname: i } = e;
    (0, C.kF)({ userId: t, channelId: n, keyVersion: 1, reason: R.m4.OTHER_USER_INCONSISTENT_KEYS }),
        c.A.show({ title: L.intl.string(L.t.mznLyR), body: L.intl.format(L.t.WY6IKb, { username: i }) });
}
function K(e) {
    let { userId: t, guildId: n, channelId: i } = e;
    if (!W(t, [E.A, A.A])) return !0;
    {
        let e = h.default.getUser(t),
            r = p.Ay.getName(n, i, e);
        return Y({ userId: t, channelId: i, nickname: r }), !1;
    }
}
