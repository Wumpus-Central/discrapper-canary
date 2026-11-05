(n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162));
var r = n(827762),
    i = n(284009),
    a = n.n(i),
    o = n(536637),
    u = n.n(o),
    l = n(620632),
    c = n(843069),
    E = n(157559),
    s = n(46653),
    d = n(754712),
    _ = n(495867),
    f = n(753181),
    A = n(287809),
    S = n(927813),
    h = n(975571),
    y = n(562153),
    g = n(856383),
    I = n(427262),
    R = n(936388),
    m = n(714763),
    T = n(144485),
    U = n(798286),
    p = n(603266),
    C = n(652215),
    w = n(792996);
function D() {
    return h.A.getArticleURL(C.MVz.END_TO_END_ENCRYPTION);
}
async function N(e) {
    let t = s.default.getStaticAuthSessionId();
    return (
        a()(null != t, "[getCurrentUserPublicKey] session id should not be null"), await d.Ay.getMLSSigningKey(t, e)
    );
}
function F(e) {
    let t = r.fromByteArray(new Uint8Array(e));
    return `data:application/octet-stream;base64,${t}`;
}
async function L(e, t, n) {
    try {
        return (
            await l.Bo.post({
                url: C.Rsh.VOICE_MATCH_PUBLIC_KEY(e),
                body: { public_key: F(t), key_version: n },
                rejectWithError: !1,
            })
        ).body.is_match;
    } catch (e) {
        throw (g.A.captureException(e), e);
    }
}
async function V(e) {
    let { key: t, signature: n } = await N(e);
    try {
        (await l.Bo.put({
            url: C.Rsh.VOICE_PUBLIC_KEYS(),
            body: { public_key: F(t), signature: F(n), key_version: e },
            rejectWithError: !1,
        }),
            R.A.addUploadedKeyVersion(e));
    } catch (e) {
        throw (g.A.captureException(e), e);
    }
}
function M(e) {
    return m.A.getUploadedKeyVersionsCached().includes(e);
}
function O(e, t) {
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
function b(e) {
    let { userId: t, channelId: n, nickname: r } = e;
    ((0, U.kF)({ userId: t, channelId: n, keyVersion: 1, reason: p.m4.OTHER_USER_INCONSISTENT_KEYS }),
        E.A.show({ title: w.intl.string(w.t.mznLyR), body: w.intl.format(w.t.WY6IKb, { username: r }) }));
}
n.d(
    t,
    {},
    {
        A5: async function (e) {
            if (!M(e)) return (await V(e), !0);
            let t = s.default.getId(),
                { key: n } = await N(e),
                r = await L(t, n, e);
            return (r || (0, U.XS)(e), r);
        },
        Dh: function (e, t, n) {
            if (n) {
                let n = (0, c.uo)(new Uint8Array(t));
                R.A.deleteSecureFramesVerifiedKey(e, n);
            } else R.A.deleteSecureFramesTransientKey(e);
        },
        Lu: function () {
            return h.A.getArticleURL(C.MVz.END_TO_END_ENCRYPTION);
        },
        Vw: b,
        W0: function (e, t) {
            T.A.openSecureFramesUpdateConfirmation({
                title: w.intl.string(w.t.hdL152),
                subtitle: w.intl.string(w.t["8VGYKg"]),
                onConfirm: () => {
                    (R.A.deleteSecureFramesVerifiedKey(e, t), (0, U.Jk)());
                },
            });
        },
        Z1: function (e) {
            let { isCurrentUserKeyPersistent: t, isOtherUserKeyPersistent: n, otherUserNickname: r } = e;
            return t && n
                ? w.intl.format(w.t["FJN+kh"], { helpArticle: D() })
                : t
                  ? w.intl.format(w.t["p/9PGp"], { username: r, helpArticle: D() })
                  : n
                    ? w.intl.format(w.t.qT5z87, { helpArticle: D() })
                    : w.intl.format(w.t["6JLy+i"], { helpArticle: D() });
        },
        aW: D,
        bk: function (e, t, n, r, i) {
            (n ? R.A.createSecureFramesVerifiedKey(e, t) : R.A.createSecureFramesTransientKey(e, t),
                (0, U.cw)({ channelId: r, userId: e, analyticsLocation: i }));
        },
        dc: function () {
            return h.A.getArticleURL(C.MVz.END_TO_END_ENCRYPTION);
        },
        iO: L,
        kj: function (e) {
            let t = A.default.getUser(e),
                n = I.Ay.getName(t);
            T.A.openSecureFramesUpdateConfirmation({
                title: w.intl.formatToPlainString(w.t.K6NGBy, { username: n }),
                subtitle: w.intl.string(w.t.F1BQK3),
                onConfirm: () => {
                    (R.A.deleteSecureFramesUserVerifiedKeys(e), (0, U.YT)());
                },
            });
        },
        m8: O,
        tC: function (e) {
            let t = u()(e),
                n = u()().diff(t, "s");
            if (n > 12 * S.A.Seconds.DAYS_30) {
                let e = Math.round(n / (12 * S.A.Seconds.DAYS_30));
                return w.intl.formatToPlainString(w.t.F1wqkD, { count: e });
            }
            if (n > S.A.Seconds.DAYS_30) {
                let e = Math.round(n / S.A.Seconds.DAYS_30);
                return w.intl.formatToPlainString(w.t["iT+b+2"], { count: e });
            }
            if (n > 7 * S.A.Seconds.DAY) {
                let e = Math.round(n / (7 * S.A.Seconds.DAY));
                return w.intl.formatToPlainString(w.t.dLurKZ, { count: e });
            }
            if (n > S.A.Seconds.DAY) {
                let e = Math.round(n / S.A.Seconds.DAY);
                return w.intl.formatToPlainString(w.t.LE8a2H, { count: e });
            }
            if (n > S.A.Seconds.HOUR) {
                let e = Math.round(n / S.A.Seconds.HOUR);
                return w.intl.formatToPlainString(w.t.KULxVS, { count: e });
            } else {
                if (!(n > S.A.Seconds.MINUTE)) return w.intl.formatToPlainString(w.t["/w0Qpw"], { count: n });
                let e = Math.round(n / S.A.Seconds.MINUTE);
                return w.intl.formatToPlainString(w.t.ws6rWq, { count: e });
            }
        },
        to: async function (e) {
            M(e) || (await V(e));
        },
        z4: function (e) {
            let { userId: t, guildId: n, channelId: r } = e;
            if (!O(t, [_.A, f.A])) return !0;
            {
                let e = A.default.getUser(t),
                    i = y.Ay.getName(n, r, e);
                return (b({ userId: t, channelId: r, nickname: i }), !1);
            }
        },
    },
);
