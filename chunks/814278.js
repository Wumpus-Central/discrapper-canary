"use strict";
n.d(t, {
    A5: () => j,
    Dh: () => w,
    Lu: () => b,
    Vw: () => Y,
    W0: () => P,
    Z1: () => U,
    aW: () => v,
    bk: () => D,
    dc: () => L,
    iO: () => V,
    kj: () => M,
    m8: () => W,
    tC: () => x,
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
    s = n.n(r),
    a = n(989349),
    o = n.n(a),
    l = n(636537),
    u = n(277515),
    c = n(157559),
    d = n(280450),
    _ = n(451409),
    h = n(763827),
    f = n(116956),
    E = n(287809),
    p = n(927813),
    m = n(975571),
    g = n(562153),
    A = n(38405),
    I = n(427262),
    T = n(936388),
    S = n(714763),
    N = n(144485),
    C = n(798286),
    y = n(603266),
    O = n(652215),
    R = n(375708);
function v() {
    return m.A.getArticleURL(O.MVz.END_TO_END_ENCRYPTION);
}
function b() {
    return m.A.getArticleURL(O.MVz.END_TO_END_ENCRYPTION);
}
function L() {
    return m.A.getArticleURL(O.MVz.END_TO_END_ENCRYPTION);
}
function D(e, t, n, i, r) {
    n ? T.A.createSecureFramesVerifiedKey(e, t) : T.A.createSecureFramesTransientKey(e, t),
        (0, C.cw)({ channelId: i, userId: e, analyticsLocation: r });
}
function w(e, t, n) {
    if (n) {
        let n = (0, u.uo)(new Uint8Array(t));
        T.A.deleteSecureFramesVerifiedKey(e, n);
    } else T.A.deleteSecureFramesTransientKey(e);
}
function P(e, t) {
    N.A.openSecureFramesUpdateConfirmation({
        title: R.intl.string(R.t.hdL152),
        subtitle: R.intl.string(R.t["8VGYKg"]),
        onConfirm: () => {
            T.A.deleteSecureFramesVerifiedKey(e, t), (0, C.Jk)();
        },
    });
}
function M(e) {
    let t = E.default.getUser(e),
        n = I.Ay.getName(t);
    N.A.openSecureFramesUpdateConfirmation({
        title: R.intl.formatToPlainString(R.t.K6NGBy, { username: n }),
        subtitle: R.intl.string(R.t.F1BQK3),
        onConfirm: () => {
            T.A.deleteSecureFramesUserVerifiedKeys(e), (0, C.YT)();
        },
    });
}
function x(e) {
    let t = o()(e),
        n = o()().diff(t, "s");
    if (n > 12 * p.A.Seconds.DAYS_30) {
        let e = Math.round(n / (12 * p.A.Seconds.DAYS_30));
        return R.intl.formatToPlainString(R.t.F1wqkD, { count: e });
    }
    if (n > p.A.Seconds.DAYS_30) {
        let e = Math.round(n / p.A.Seconds.DAYS_30);
        return R.intl.formatToPlainString(R.t["iT+b+2"], { count: e });
    }
    if (n > 7 * p.A.Seconds.DAY) {
        let e = Math.round(n / (7 * p.A.Seconds.DAY));
        return R.intl.formatToPlainString(R.t.dLurKZ, { count: e });
    }
    if (n > p.A.Seconds.DAY) {
        let e = Math.round(n / p.A.Seconds.DAY);
        return R.intl.formatToPlainString(R.t.LE8a2H, { count: e });
    }
    if (n > p.A.Seconds.HOUR) {
        let e = Math.round(n / p.A.Seconds.HOUR);
        return R.intl.formatToPlainString(R.t.KULxVS, { count: e });
    } else {
        if (!(n > p.A.Seconds.MINUTE)) return R.intl.formatToPlainString(R.t["/w0Qpw"], { count: n });
        let e = Math.round(n / p.A.Seconds.MINUTE);
        return R.intl.formatToPlainString(R.t.ws6rWq, { count: e });
    }
}
function U(e) {
    let { isCurrentUserKeyPersistent: t, isOtherUserKeyPersistent: n, otherUserNickname: i } = e;
    return t && n
        ? R.intl.format(R.t["FJN+kh"], { helpArticle: v() })
        : t
          ? R.intl.format(R.t["p/9PGp"], { username: i, helpArticle: v() })
          : n
            ? R.intl.format(R.t.qT5z87, { helpArticle: v() })
            : R.intl.format(R.t["6JLy+i"], { helpArticle: v() });
}
async function k(e) {
    let t = d.default.getStaticAuthSessionId();
    return s()(null != t, "[getCurrentUserPublicKey] session id should not be null"), await _.Ay.getMLSSigningKey(t, e);
}
function G(e) {
    let t = i.fromByteArray(new Uint8Array(e));
    return `data:application/octet-stream;base64,${t}`;
}
async function V(e, t, n) {
    try {
        return (
            await l.Bo.post({
                url: O.Rsh.VOICE_MATCH_PUBLIC_KEY(e),
                body: { public_key: G(t), key_version: n },
                rejectWithError: !1,
            })
        ).body.is_match;
    } catch (e) {
        throw (A.A.captureException(e), e);
    }
}
async function F(e) {
    let { key: t, signature: n } = await k(e);
    try {
        await l.Bo.put({
            url: O.Rsh.VOICE_PUBLIC_KEYS(),
            body: { public_key: G(t), signature: G(n), key_version: e },
            rejectWithError: !1,
        }),
            T.A.addUploadedKeyVersion(e);
    } catch (e) {
        throw (A.A.captureException(e), e);
    }
}
function B(e) {
    return S.A.getUploadedKeyVersionsCached().includes(e);
}
async function H(e) {
    B(e) || (await F(e));
}
async function j(e) {
    if (!B(e)) return await F(e), !0;
    let t = d.default.getId(),
        { key: n } = await k(e),
        i = await V(t, n, e);
    return i || (0, C.XS)(e), i;
}
function W(e, t) {
    let [n, i] = t;
    if (!n.isUserConnected(e)) return !1;
    let r = n.getSecureFramesRosterMapEntry(e);
    if (null == r) return !1;
    let s = new Uint8Array(r);
    for (let t of i.getAllActiveStreamKeys()) {
        if (!i.isUserConnected(t, e)) continue;
        let n = f.A.getSecureFramesRosterMapEntry(t, e);
        if (null == n) return !0;
        let r = new Uint8Array(n);
        for (let e = 0; e < s.length; e++) if (s[e] !== r[e]) return !0;
    }
    return !1;
}
function Y(e) {
    let { userId: t, channelId: n, nickname: i } = e;
    (0, C.kF)({ userId: t, channelId: n, keyVersion: 1, reason: y.m4.OTHER_USER_INCONSISTENT_KEYS }),
        c.A.show({ title: R.intl.string(R.t.mznLyR), body: R.intl.format(R.t.WY6IKb, { username: i }) });
}
function K(e) {
    let { userId: t, guildId: n, channelId: i } = e;
    if (!W(t, [h.A, f.A])) return !0;
    {
        let e = E.default.getUser(t),
            r = g.Ay.getName(n, i, e);
        return Y({ userId: t, channelId: i, nickname: r }), !1;
    }
}
