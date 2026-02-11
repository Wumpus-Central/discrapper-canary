n.d(t, {
    A5: () => W,
    Dh: () => L,
    Lu: () => F,
    Vw: () => z,
    W0: () => V,
    Z1: () => K,
    aW: () => w,
    bk: () => b,
    dc: () => N,
    iO: () => P,
    kj: () => M,
    m8: () => G,
    tC: () => O,
    to: () => v,
    z4: () => x,
}),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162);
var r = n(827762),
    i = n(284009),
    a = n.n(i),
    o = n(989349),
    l = n.n(o),
    c = n(562465),
    E = n(149597),
    u = n(157559),
    s = n(961350),
    d = n(430452),
    _ = n(383501),
    f = n(162605),
    A = n(287809),
    S = n(927813),
    h = n(975571),
    y = n(562153),
    g = n(728458),
    I = n(427262),
    R = n(936388),
    T = n(714763),
    p = n(144485),
    U = n(798286),
    m = n(603266),
    C = n(652215),
    D = n(985018);
function w() {
    return h.A.getArticleURL(C.MVz.END_TO_END_ENCRYPTION);
}
function F() {
    return h.A.getArticleURL(C.MVz.END_TO_END_ENCRYPTION);
}
function N() {
    return h.A.getArticleURL(C.MVz.END_TO_END_ENCRYPTION);
}
function b(e, t, n, r, i) {
    n ? R.A.createSecureFramesVerifiedKey(e, t) : R.A.createSecureFramesTransientKey(e, t),
        (0, U.cw)({ channelId: r, userId: e, analyticsLocation: i });
}
function L(e, t, n) {
    if (n) {
        let n = (0, E.uo)(new Uint8Array(t));
        R.A.deleteSecureFramesVerifiedKey(e, n);
    } else R.A.deleteSecureFramesTransientKey(e);
}
function V(e, t) {
    p.A.openSecureFramesUpdateConfirmation({
        title: D.intl.string(D.t.hdL152),
        subtitle: D.intl.string(D.t["8VGYKg"]),
        onConfirm: () => {
            R.A.deleteSecureFramesVerifiedKey(e, t), (0, U.Jk)();
        },
    });
}
function M(e) {
    let t = A.default.getUser(e),
        n = I.Ay.getName(t);
    p.A.openSecureFramesUpdateConfirmation({
        title: D.intl.formatToPlainString(D.t.K6NGBy, { username: n }),
        subtitle: D.intl.string(D.t.F1BQK3),
        onConfirm: () => {
            R.A.deleteSecureFramesUserVerifiedKeys(e), (0, U.YT)();
        },
    });
}
function O(e) {
    let t = l()(e),
        n = l()().diff(t, "s");
    if (n > 12 * S.A.Seconds.DAYS_30) {
        let e = Math.round(n / (12 * S.A.Seconds.DAYS_30));
        return D.intl.formatToPlainString(D.t.F1wqkD, { count: e });
    }
    if (n > S.A.Seconds.DAYS_30) {
        let e = Math.round(n / S.A.Seconds.DAYS_30);
        return D.intl.formatToPlainString(D.t["iT+b+2"], { count: e });
    }
    if (n > 7 * S.A.Seconds.DAY) {
        let e = Math.round(n / (7 * S.A.Seconds.DAY));
        return D.intl.formatToPlainString(D.t.dLurKZ, { count: e });
    }
    if (n > S.A.Seconds.DAY) {
        let e = Math.round(n / S.A.Seconds.DAY);
        return D.intl.formatToPlainString(D.t.LE8a2H, { count: e });
    }
    if (n > S.A.Seconds.HOUR) {
        let e = Math.round(n / S.A.Seconds.HOUR);
        return D.intl.formatToPlainString(D.t.KULxVS, { count: e });
    } else {
        if (!(n > S.A.Seconds.MINUTE)) return D.intl.formatToPlainString(D.t["/w0Qpw"], { count: n });
        let e = Math.round(n / S.A.Seconds.MINUTE);
        return D.intl.formatToPlainString(D.t.ws6rWq, { count: e });
    }
}
function K(e) {
    let { isCurrentUserKeyPersistent: t, isOtherUserKeyPersistent: n, otherUserNickname: r } = e;
    return t && n
        ? D.intl.format(D.t["FJN+kh"], { helpArticle: w() })
        : t
          ? D.intl.format(D.t["p/9PGp"], { username: r, helpArticle: w() })
          : n
            ? D.intl.format(D.t.qT5z87, { helpArticle: w() })
            : D.intl.format(D.t["6JLy+i"], { helpArticle: w() });
}
async function k(e) {
    let t = s.default.getStaticAuthSessionId();
    return a()(null != t, "[getCurrentUserPublicKey] session id should not be null"), await d.Ay.getMLSSigningKey(t, e);
}
function Y(e) {
    let t = r.fromByteArray(new Uint8Array(e));
    return `data:application/octet-stream;base64,${t}`;
}
async function P(e, t, n) {
    try {
        return (
            await c.Bo.post({
                url: C.Rsh.VOICE_MATCH_PUBLIC_KEY(e),
                body: { public_key: Y(t), key_version: n },
                rejectWithError: !1,
            })
        ).body.is_match;
    } catch (e) {
        throw (g.A.captureException(e), e);
    }
}
async function H(e) {
    let { key: t, signature: n } = await k(e);
    try {
        await c.Bo.put({
            url: C.Rsh.VOICE_PUBLIC_KEYS(),
            body: { public_key: Y(t), signature: Y(n), key_version: e },
            rejectWithError: !1,
        }),
            R.A.addUploadedKeyVersion(e);
    } catch (e) {
        throw (g.A.captureException(e), e);
    }
}
function B(e) {
    return T.A.getUploadedKeyVersionsCached().includes(e);
}
async function v(e) {
    B(e) || (await H(e));
}
async function W(e) {
    if (!B(e)) return await H(e), !0;
    let t = s.default.getId(),
        { key: n } = await k(e),
        r = await P(t, n, e);
    return r || (0, U.XS)(e), r;
}
function G(e, t) {
    let [n, r] = t;
    if (!n.isUserConnected(e)) return !1;
    let i = n.getSecureFramesRosterMapEntry(e);
    if (null == i) return !1;
    let a = new Uint8Array(i);
    for (let t of r.getAllActiveStreamKeys()) {
        if (!r.isUserConnected(t, e)) continue;
        let n = f.A.getSecureFramesRosterMapEntry(t, e);
        if (null == n) return !0;
        let i = new Uint8Array(n);
        for (let e = 0; e < a.length; e++) if (a[e] !== i[e]) return !0;
    }
    return !1;
}
function z(e) {
    let { userId: t, channelId: n, nickname: r } = e;
    (0, U.kF)({ userId: t, channelId: n, keyVersion: 1, reason: m.m4.OTHER_USER_INCONSISTENT_KEYS }),
        u.A.show({ title: D.intl.string(D.t.mznLyR), body: D.intl.format(D.t.WY6IKb, { username: r }) });
}
function x(e) {
    let { userId: t, guildId: n, channelId: r } = e;
    if (!G(t, [_.A, f.A])) return !0;
    {
        let e = A.default.getUser(t),
            i = y.Ay.getName(n, r, e);
        return z({ userId: t, channelId: r, nickname: i }), !1;
    }
}
