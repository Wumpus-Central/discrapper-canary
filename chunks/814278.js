n.d(t, {
    A5: () => H,
    Dh: () => D,
    Lu: () => R,
    Vw: () => W,
    W0: () => x,
    Z1: () => M,
    aW: () => N,
    bk: () => P,
    dc: () => w,
    iO: () => G,
    kj: () => L,
    m8: () => Y,
    tC: () => j,
    to: () => B,
    z4: () => K,
}),
    n(927092),
    n(212978),
    n(201528),
    n(393431),
    n(752391),
    n(532706),
    n(42231),
    n(232424),
    n(757074),
    n(949626),
    n(767709),
    n(65162),
    n(896048);
var r = n(827762),
    i = n(284009),
    a = n.n(i),
    s = n(989349),
    o = n.n(s),
    l = n(562465),
    c = n(149597),
    u = n(157559),
    d = n(961350),
    f = n(430452),
    p = n(383501),
    _ = n(162605),
    h = n(287809),
    m = n(927813),
    g = n(975571),
    E = n(562153),
    b = n(728458),
    y = n(427262),
    O = n(936388),
    A = n(714763),
    v = n(144485),
    S = n(798286),
    I = n(603266),
    T = n(652215),
    C = n(985018);
function N() {
    return g.A.getArticleURL(T.MVz.END_TO_END_ENCRYPTION);
}
function R() {
    return g.A.getArticleURL(T.MVz.END_TO_END_ENCRYPTION);
}
function w() {
    return g.A.getArticleURL(T.MVz.END_TO_END_ENCRYPTION);
}
function P(e, t, n, r, i) {
    n ? O.A.createSecureFramesVerifiedKey(e, t) : O.A.createSecureFramesTransientKey(e, t),
        (0, S.cw)({
            channelId: r,
            userId: e,
            analyticsLocation: i,
        });
}
function D(e, t, n) {
    if (n) {
        let n = (0, c.uo)(new Uint8Array(t));
        O.A.deleteSecureFramesVerifiedKey(e, n);
    } else O.A.deleteSecureFramesTransientKey(e);
}
function x(e, t) {
    v.A.openSecureFramesUpdateConfirmation({
        title: C.intl.string(C.t.hdL152),
        subtitle: C.intl.string(C.t["8VGYKg"]),
        onConfirm: () => {
            O.A.deleteSecureFramesVerifiedKey(e, t), (0, S.Jk)();
        },
    });
}
function L(e) {
    let t = h.default.getUser(e),
        n = y.Ay.getName(t);
    v.A.openSecureFramesUpdateConfirmation({
        title: C.intl.formatToPlainString(C.t.K6NGBy, { username: n }),
        subtitle: C.intl.string(C.t.F1BQK3),
        onConfirm: () => {
            O.A.deleteSecureFramesUserVerifiedKeys(e), (0, S.YT)();
        },
    });
}
function j(e) {
    let t = o()(e),
        n = o()().diff(t, "s");
    if (n > 12 * m.A.Seconds.DAYS_30) {
        let e = Math.round(n / (12 * m.A.Seconds.DAYS_30));
        return C.intl.formatToPlainString(C.t.F1wqkD, { count: e });
    }
    if (n > m.A.Seconds.DAYS_30) {
        let e = Math.round(n / m.A.Seconds.DAYS_30);
        return C.intl.formatToPlainString(C.t["iT+b+2"], { count: e });
    }
    if (n > 7 * m.A.Seconds.DAY) {
        let e = Math.round(n / (7 * m.A.Seconds.DAY));
        return C.intl.formatToPlainString(C.t.dLurKZ, { count: e });
    }
    if (n > m.A.Seconds.DAY) {
        let e = Math.round(n / m.A.Seconds.DAY);
        return C.intl.formatToPlainString(C.t.LE8a2H, { count: e });
    }
    if (n > m.A.Seconds.HOUR) {
        let e = Math.round(n / m.A.Seconds.HOUR);
        return C.intl.formatToPlainString(C.t.KULxVS, { count: e });
    } else {
        if (!(n > m.A.Seconds.MINUTE)) return C.intl.formatToPlainString(C.t["/w0Qpw"], { count: n });
        let e = Math.round(n / m.A.Seconds.MINUTE);
        return C.intl.formatToPlainString(C.t.ws6rWq, { count: e });
    }
}
function M(e) {
    let { isCurrentUserKeyPersistent: t, isOtherUserKeyPersistent: n, otherUserNickname: r } = e;
    return t && n
        ? C.intl.format(C.t["FJN+kh"], { helpArticle: N() })
        : t
          ? C.intl.format(C.t["p/9PGp"], {
                username: r,
                helpArticle: N(),
            })
          : n
            ? C.intl.format(C.t.qT5z87, { helpArticle: N() })
            : C.intl.format(C.t["6JLy+i"], { helpArticle: N() });
}
async function k(e) {
    let t = d.default.getStaticAuthSessionId();
    return a()(null != t, "[getCurrentUserPublicKey] session id should not be null"), await f.A.getMLSSigningKey(t, e);
}
function U(e) {
    let t = r.fromByteArray(new Uint8Array(e));
    return "data:application/octet-stream;base64,".concat(t);
}
async function G(e, t, n) {
    try {
        return (
            await l.Bo.post({
                url: T.Rsh.VOICE_MATCH_PUBLIC_KEY(e),
                body: {
                    public_key: U(t),
                    key_version: n,
                },
                rejectWithError: !1,
            })
        ).body.is_match;
    } catch (e) {
        throw (b.A.captureException(e), e);
    }
}
async function V(e) {
    let { key: t, signature: n } = await k(e);
    try {
        await l.Bo.put({
            url: T.Rsh.VOICE_PUBLIC_KEYS(),
            body: {
                public_key: U(t),
                signature: U(n),
                key_version: e,
            },
            rejectWithError: !1,
        }),
            O.A.addUploadedKeyVersion(e);
    } catch (e) {
        throw (b.A.captureException(e), e);
    }
}
function F(e) {
    return A.A.getUploadedKeyVersionsCached().includes(e);
}
async function B(e) {
    F(e) || (await V(e));
}
async function H(e) {
    if (!F(e)) return await V(e), !0;
    let t = d.default.getId(),
        { key: n } = await k(e),
        r = await G(t, n, e);
    return r || (0, S.XS)(e), r;
}
function Y(e, t) {
    let [n, r] = t;
    if (!n.isUserConnected(e)) return !1;
    let i = n.getSecureFramesRosterMapEntry(e);
    if (null == i) return !1;
    let a = new Uint8Array(i);
    for (let t of r.getAllActiveStreamKeys()) {
        if (!r.isUserConnected(t, e)) continue;
        let n = _.A.getSecureFramesRosterMapEntry(t, e);
        if (null == n) return !0;
        let i = new Uint8Array(n);
        for (let e = 0; e < a.length; e++) if (a[e] !== i[e]) return !0;
    }
    return !1;
}
function W(e) {
    let { userId: t, channelId: n, nickname: r } = e;
    (0, S.kF)({
        userId: t,
        channelId: n,
        keyVersion: 1,
        reason: I.m4.OTHER_USER_INCONSISTENT_KEYS,
    }),
        u.A.show({
            title: C.intl.string(C.t.mznLyR),
            body: C.intl.format(C.t.WY6IKb, { username: r }),
        });
}
function K(e) {
    let { userId: t, guildId: n, channelId: r } = e;
    if (!Y(t, [p.A, _.A])) return !0;
    {
        let e = h.default.getUser(t),
            i = E.Ay.getName(n, r, e);
        return (
            W({
                userId: t,
                channelId: r,
                nickname: i,
            }),
            !1
        );
    }
}
