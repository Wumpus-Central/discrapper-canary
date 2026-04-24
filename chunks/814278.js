n.d(e, {
    A5: () => Y,
    Dh: () => H,
    Lu: () => N,
    Vw: () => G,
    W0: () => b,
    Z1: () => K,
    aW: () => D,
    bk: () => w,
    dc: () => F,
    iO: () => W,
    kj: () => L,
    m8: () => x,
    tC: () => P,
    to: () => v,
    z4: () => j,
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
    l = n(989349),
    o = n.n(l),
    u = n(636537),
    s = n(149597),
    c = n(157559),
    E = n(495544),
    d = n(969341),
    h = n(763827),
    f = n(116956),
    A = n(287809),
    _ = n(927813),
    S = n(975571),
    p = n(562153),
    y = n(38405),
    g = n(427262),
    T = n(936388),
    m = n(714763),
    R = n(144485),
    C = n(798286),
    I = n(603266),
    U = n(652215),
    O = n(985018);
function D() {
    return S.A.getArticleURL(U.MVz.END_TO_END_ENCRYPTION);
}
function N() {
    return S.A.getArticleURL(U.MVz.END_TO_END_ENCRYPTION);
}
function F() {
    return S.A.getArticleURL(U.MVz.END_TO_END_ENCRYPTION);
}
function w(t, e, n, r, i) {
    n ? T.A.createSecureFramesVerifiedKey(t, e) : T.A.createSecureFramesTransientKey(t, e),
        (0, C.cw)({ channelId: r, userId: t, analyticsLocation: i });
}
function H(t, e, n) {
    if (n) {
        let n = (0, s.uo)(new Uint8Array(e));
        T.A.deleteSecureFramesVerifiedKey(t, n);
    } else T.A.deleteSecureFramesTransientKey(t);
}
function b(t, e) {
    R.A.openSecureFramesUpdateConfirmation({
        title: O.intl.string(O.t.hdL152),
        subtitle: O.intl.string(O.t["8VGYKg"]),
        onConfirm: () => {
            T.A.deleteSecureFramesVerifiedKey(t, e), (0, C.Jk)();
        },
    });
}
function L(t) {
    let e = A.default.getUser(t),
        n = g.Ay.getName(e);
    R.A.openSecureFramesUpdateConfirmation({
        title: O.intl.formatToPlainString(O.t.K6NGBy, { username: n }),
        subtitle: O.intl.string(O.t.F1BQK3),
        onConfirm: () => {
            T.A.deleteSecureFramesUserVerifiedKeys(t), (0, C.YT)();
        },
    });
}
function P(t) {
    let e = o()(t),
        n = o()().diff(e, "s");
    if (n > 12 * _.A.Seconds.DAYS_30) {
        let t = Math.round(n / (12 * _.A.Seconds.DAYS_30));
        return O.intl.formatToPlainString(O.t.F1wqkD, { count: t });
    }
    if (n > _.A.Seconds.DAYS_30) {
        let t = Math.round(n / _.A.Seconds.DAYS_30);
        return O.intl.formatToPlainString(O.t["iT+b+2"], { count: t });
    }
    if (n > 7 * _.A.Seconds.DAY) {
        let t = Math.round(n / (7 * _.A.Seconds.DAY));
        return O.intl.formatToPlainString(O.t.dLurKZ, { count: t });
    }
    if (n > _.A.Seconds.DAY) {
        let t = Math.round(n / _.A.Seconds.DAY);
        return O.intl.formatToPlainString(O.t.LE8a2H, { count: t });
    }
    if (n > _.A.Seconds.HOUR) {
        let t = Math.round(n / _.A.Seconds.HOUR);
        return O.intl.formatToPlainString(O.t.KULxVS, { count: t });
    } else {
        if (!(n > _.A.Seconds.MINUTE)) return O.intl.formatToPlainString(O.t["/w0Qpw"], { count: n });
        let t = Math.round(n / _.A.Seconds.MINUTE);
        return O.intl.formatToPlainString(O.t.ws6rWq, { count: t });
    }
}
function K(t) {
    let { isCurrentUserKeyPersistent: e, isOtherUserKeyPersistent: n, otherUserNickname: r } = t;
    return e && n
        ? O.intl.format(O.t["FJN+kh"], { helpArticle: D() })
        : e
          ? O.intl.format(O.t["p/9PGp"], { username: r, helpArticle: D() })
          : n
            ? O.intl.format(O.t.qT5z87, { helpArticle: D() })
            : O.intl.format(O.t["6JLy+i"], { helpArticle: D() });
}
async function V(t) {
    let e = E.default.getStaticAuthSessionId();
    return a()(null != e, "[getCurrentUserPublicKey] session id should not be null"), await d.Ay.getMLSSigningKey(e, t);
}
function B(t) {
    let e = r.fromByteArray(new Uint8Array(t));
    return `data:application/octet-stream;base64,${e}`;
}
async function W(t, e, n) {
    try {
        return (
            await u.Bo.post({
                url: U.Rsh.VOICE_MATCH_PUBLIC_KEY(t),
                body: { public_key: B(e), key_version: n },
                rejectWithError: !1,
            })
        ).body.is_match;
    } catch (t) {
        throw (y.A.captureException(t), t);
    }
}
async function k(t) {
    let { key: e, signature: n } = await V(t);
    try {
        await u.Bo.put({
            url: U.Rsh.VOICE_PUBLIC_KEYS(),
            body: { public_key: B(e), signature: B(n), key_version: t },
            rejectWithError: !1,
        }),
            T.A.addUploadedKeyVersion(t);
    } catch (t) {
        throw (y.A.captureException(t), t);
    }
}
function M(t) {
    return m.A.getUploadedKeyVersionsCached().includes(t);
}
async function v(t) {
    M(t) || (await k(t));
}
async function Y(t) {
    if (!M(t)) return await k(t), !0;
    let e = E.default.getId(),
        { key: n } = await V(t),
        r = await W(e, n, t);
    return r || (0, C.XS)(t), r;
}
function x(t, e) {
    let [n, r] = e;
    if (!n.isUserConnected(t)) return !1;
    let i = n.getSecureFramesRosterMapEntry(t);
    if (null == i) return !1;
    let a = new Uint8Array(i);
    for (let e of r.getAllActiveStreamKeys()) {
        if (!r.isUserConnected(e, t)) continue;
        let n = f.A.getSecureFramesRosterMapEntry(e, t);
        if (null == n) return !0;
        let i = new Uint8Array(n);
        for (let t = 0; t < a.length; t++) if (a[t] !== i[t]) return !0;
    }
    return !1;
}
function G(t) {
    let { userId: e, channelId: n, nickname: r } = t;
    (0, C.kF)({ userId: e, channelId: n, keyVersion: 1, reason: I.m4.OTHER_USER_INCONSISTENT_KEYS }),
        c.A.show({ title: O.intl.string(O.t.mznLyR), body: O.intl.format(O.t.WY6IKb, { username: r }) });
}
function j(t) {
    let { userId: e, guildId: n, channelId: r } = t;
    if (!x(e, [h.A, f.A])) return !0;
    {
        let t = A.default.getUser(e),
            i = p.Ay.getName(n, r, t);
        return G({ userId: e, channelId: r, nickname: i }), !1;
    }
}
