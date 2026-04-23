n.d(t, {
    A5: () => H,
    Dh: () => V,
    Lu: () => D,
    Vw: () => G,
    W0: () => L,
    Z1: () => Y,
    aW: () => N,
    bk: () => F,
    dc: () => b,
    iO: () => v,
    kj: () => M,
    m8: () => B,
    tC: () => P,
    to: () => j,
    z4: () => W,
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
    s = n(562465),
    c = n(149597),
    u = n(157559),
    d = n(961350),
    E = n(430452),
    f = n(383501),
    A = n(162605),
    h = n(287809),
    _ = n(927813),
    S = n(975571),
    g = n(562153),
    m = n(728458),
    y = n(427262),
    p = n(936388),
    I = n(714763),
    T = n(144485),
    C = n(798286),
    R = n(603266),
    U = n(652215),
    w = n(985018);
function N() {
    return S.A.getArticleURL(U.MVz.END_TO_END_ENCRYPTION);
}
function D() {
    return S.A.getArticleURL(U.MVz.END_TO_END_ENCRYPTION);
}
function b() {
    return S.A.getArticleURL(U.MVz.END_TO_END_ENCRYPTION);
}
function F(e, t, n, r, i) {
    n ? p.A.createSecureFramesVerifiedKey(e, t) : p.A.createSecureFramesTransientKey(e, t),
        (0, C.cw)({ channelId: r, userId: e, analyticsLocation: i });
}
function V(e, t, n) {
    if (n) {
        let n = (0, c.uo)(new Uint8Array(t));
        p.A.deleteSecureFramesVerifiedKey(e, n);
    } else p.A.deleteSecureFramesTransientKey(e);
}
function L(e, t) {
    T.A.openSecureFramesUpdateConfirmation({
        title: w.intl.string(w.t.hdL152),
        subtitle: w.intl.string(w.t["8VGYKg"]),
        onConfirm: () => {
            p.A.deleteSecureFramesVerifiedKey(e, t), (0, C.Jk)();
        },
    });
}
function M(e) {
    let t = h.default.getUser(e),
        n = y.Ay.getName(t);
    T.A.openSecureFramesUpdateConfirmation({
        title: w.intl.formatToPlainString(w.t.K6NGBy, { username: n }),
        subtitle: w.intl.string(w.t.F1BQK3),
        onConfirm: () => {
            p.A.deleteSecureFramesUserVerifiedKeys(e), (0, C.YT)();
        },
    });
}
function P(e) {
    let t = o()(e),
        n = o()().diff(t, "s");
    if (n > 12 * _.A.Seconds.DAYS_30) {
        let e = Math.round(n / (12 * _.A.Seconds.DAYS_30));
        return w.intl.formatToPlainString(w.t.F1wqkD, { count: e });
    }
    if (n > _.A.Seconds.DAYS_30) {
        let e = Math.round(n / _.A.Seconds.DAYS_30);
        return w.intl.formatToPlainString(w.t["iT+b+2"], { count: e });
    }
    if (n > 7 * _.A.Seconds.DAY) {
        let e = Math.round(n / (7 * _.A.Seconds.DAY));
        return w.intl.formatToPlainString(w.t.dLurKZ, { count: e });
    }
    if (n > _.A.Seconds.DAY) {
        let e = Math.round(n / _.A.Seconds.DAY);
        return w.intl.formatToPlainString(w.t.LE8a2H, { count: e });
    }
    if (n > _.A.Seconds.HOUR) {
        let e = Math.round(n / _.A.Seconds.HOUR);
        return w.intl.formatToPlainString(w.t.KULxVS, { count: e });
    } else {
        if (!(n > _.A.Seconds.MINUTE)) return w.intl.formatToPlainString(w.t["/w0Qpw"], { count: n });
        let e = Math.round(n / _.A.Seconds.MINUTE);
        return w.intl.formatToPlainString(w.t.ws6rWq, { count: e });
    }
}
function Y(e) {
    let { isCurrentUserKeyPersistent: t, isOtherUserKeyPersistent: n, otherUserNickname: r } = e;
    return t && n
        ? w.intl.format(w.t["FJN+kh"], { helpArticle: N() })
        : t
          ? w.intl.format(w.t["p/9PGp"], { username: r, helpArticle: N() })
          : n
            ? w.intl.format(w.t.qT5z87, { helpArticle: N() })
            : w.intl.format(w.t["6JLy+i"], { helpArticle: N() });
}
async function k(e) {
    let t = d.default.getStaticAuthSessionId();
    return a()(null != t, "[getCurrentUserPublicKey] session id should not be null"), await E.Ay.getMLSSigningKey(t, e);
}
function O(e) {
    let t = r.fromByteArray(new Uint8Array(e));
    return `data:application/octet-stream;base64,${t}`;
}
async function v(e, t, n) {
    try {
        return (
            await s.Bo.post({
                url: U.Rsh.VOICE_MATCH_PUBLIC_KEY(e),
                body: { public_key: O(t), key_version: n },
                rejectWithError: !1,
            })
        ).body.is_match;
    } catch (e) {
        throw (m.A.captureException(e), e);
    }
}
async function x(e) {
    let { key: t, signature: n } = await k(e);
    try {
        await s.Bo.put({
            url: U.Rsh.VOICE_PUBLIC_KEYS(),
            body: { public_key: O(t), signature: O(n), key_version: e },
            rejectWithError: !1,
        }),
            p.A.addUploadedKeyVersion(e);
    } catch (e) {
        throw (m.A.captureException(e), e);
    }
}
function K(e) {
    return I.A.getUploadedKeyVersionsCached().includes(e);
}
async function j(e) {
    K(e) || (await x(e));
}
async function H(e) {
    if (!K(e)) return await x(e), !0;
    let t = d.default.getId(),
        { key: n } = await k(e),
        r = await v(t, n, e);
    return r || (0, C.XS)(e), r;
}
function B(e, t) {
    let [n, r] = t;
    if (!n.isUserConnected(e)) return !1;
    let i = n.getSecureFramesRosterMapEntry(e);
    if (null == i) return !1;
    let a = new Uint8Array(i);
    for (let t of r.getAllActiveStreamKeys()) {
        if (!r.isUserConnected(t, e)) continue;
        let n = A.A.getSecureFramesRosterMapEntry(t, e);
        if (null == n) return !0;
        let i = new Uint8Array(n);
        for (let e = 0; e < a.length; e++) if (a[e] !== i[e]) return !0;
    }
    return !1;
}
function G(e) {
    let { userId: t, channelId: n, nickname: r } = e;
    (0, C.kF)({ userId: t, channelId: n, keyVersion: 1, reason: R.m4.OTHER_USER_INCONSISTENT_KEYS }),
        u.A.show({ title: w.intl.string(w.t.mznLyR), body: w.intl.format(w.t.WY6IKb, { username: r }) });
}
function W(e) {
    let { userId: t, guildId: n, channelId: r } = e;
    if (!B(t, [f.A, A.A])) return !0;
    {
        let e = h.default.getUser(t),
            i = g.Ay.getName(n, r, e);
        return G({ userId: t, channelId: r, nickname: i }), !1;
    }
}
