n.r(t), n.d(t, { default: () => M });
var r = n(627968),
    l = n(64700),
    s = n(189213),
    u = n(17928),
    a = n(777666),
    c = n(661531),
    i = n(512950),
    o = n(534514),
    d = n(289873),
    A = n(834730),
    m = n(734057),
    f = n(287809),
    g = n(562153),
    b = n(798286),
    C = n(814278),
    h = n(763827);
n(603266);
var y = n(116956),
    E = n(665691),
    N = n(998759);
n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
var x = n(827762),
    p = n(284009),
    k = n.n(p),
    T = n(277515),
    R = n(495544),
    S = n(235058),
    F = n(731854),
    I = n(787392),
    j = n(75811),
    G = n(930840),
    U = n(652215),
    _ = n(375708),
    w = n(751005);
function O(e) {
    let { badgeText: t, badgeColor: n } = e,
        s = l.useRef(t),
        u = l.useRef(n);
    return (0, r.jsx)(a.Lp, { text: s.current, color: u.current });
}
function M(e) {
    let { transitionState: t, userId: n, channelId: a, onClose: p } = e,
        M = (0, u.bG)([f.default], () => f.default.getUser(n)),
        v = (0, u.bG)([m.A], () => m.A.getChannel(a)?.getGuildId()),
        D = g.Ay.useName(v, null, M),
        { fingerprint: L, userKey: P } = (function (e) {
            let { userId: t } = e,
                n = (0, u.bG)([R.default], () => R.default.getId());
            k()(n !== t, "[useSecureFramesPairwiseFingerprint] Should not pass current user id.");
            let [r, s] = l.useState(null),
                [a, c] = l.useState(!1),
                i = (0, u.bG)([h.A], () => h.A.getSecureFramesRosterMapEntry(t)),
                o = (0, u.bG)([h.A], () => h.A.getSecureFramesRosterMapEntry(n)),
                d = l.useCallback((e) => {
                    s(x.fromByteArray(e)), c(!1);
                }, []),
                A = l.useCallback(
                    async (e, t, n, r) => {
                        S.Ay.supports(F.O5.MLS_PAIRWISE_FINGERPRINTS)
                            ? h.A.getRTCConnection()?.getMLSPairwiseFingerprint(0, n, (e) => {
                                  d(new Uint8Array(e));
                              })
                            : d(await (0, T._x)(0, new Uint8Array(t), e, new Uint8Array(r), n));
                    },
                    [d],
                ),
                m = l.useRef(null);
            return (
                l.useEffect(() => {
                    null != i &&
                        null != o &&
                        null == m.current &&
                        (c(!0), (m.current = setTimeout(() => A(n, o, t, i), 0)));
                    let e = m.current;
                    return () => {
                        null != e && clearTimeout(e);
                    };
                }, [n, o, A, t, i]),
                l.useMemo(() => ({ fingerprint: r, userKey: i, loading: a }), [r, a, i])
            );
        })({ userId: n }),
        B = (0, N.z)({ fingerprintBase64: L, chunkSize: 5, desiredLength: 45 }),
        K = l.useCallback(() => {
            (0, b.Hb)({ userId: n, channelId: a });
        }, [a, n]),
        V = (0, E.UF)({ userId: n, channelId: a });
    !(function (e) {
        let { channelId: t, userId: n, nickname: r, onAlertOpen: s } = e,
            a = (function (e) {
                let { userId: t } = e;
                return (0, u.bG)([h.A, y.A], () => (0, C.m8)(t, [h.A, y.A]));
            })({ userId: n }),
            c = l.useRef(null);
        l.useEffect(() => {
            a && null == c.current
                ? (c.current = setTimeout(() => {
                      s(), (0, C.Vw)({ userId: n, channelId: t, nickname: r });
                  }, 1e3))
                : (clearTimeout(c.current), (c.current = null));
            let e = c.current;
            return () => {
                clearTimeout(e);
            };
        }, [t, a, r, s, n]);
    })({ channelId: a, userId: n, nickname: D, onAlertOpen: p });
    let {
            isCurrentUserKeyPersistent: z,
            isOtherUserKeyPersistent: H,
            loading: W,
        } = (function (e) {
            let { userId: t } = e,
                n = (0, u.bG)([h.A], () => h.A.getSecureFramesRosterMapEntry(t)),
                [r, s] = l.useState(!0),
                [a, c] = l.useState(!1),
                [i, o] = l.useState(!1),
                d = l.useCallback(async (e, t) => {
                    s(!0);
                    try {
                        let n = await (0, C.A5)(1),
                            r = await (0, C.iO)(e, t, 1);
                        c(n), o(r);
                    } catch (e) {
                        c(!1), o(!1);
                    } finally {
                        s(!1);
                    }
                }, []);
            return (
                l.useEffect(() => {
                    null == n ? (c(!1), o(!1), s(!1)) : d(t, n);
                }, [n, d, t]),
                { loading: r, isCurrentUserKeyPersistent: a, isOtherUserKeyPersistent: i }
            );
        })({ userId: n }),
        Y = l.useCallback(() => {
            null != P && ((0, C.bk)(n, P, H, a, U.ThZ.E2EE_USER_VERIFY_MODAL), p());
        }, [P, n, H, a, p]),
        Z = l.useCallback(() => {
            null != P && ((0, C.Dh)(n, P, H), p());
        }, [P, n, H, p]),
        [J, q] = l.useMemo(
            () =>
                V
                    ? [_.intl.string(_.t.UNUuem), c.A.colors.BACKGROUND_BRAND.css]
                    : [_.intl.string(_.t.y2b7CA), c.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css],
            [V],
        ),
        X = l.useMemo(
            () => (0, C.Z1)({ isCurrentUserKeyPersistent: z, isOtherUserKeyPersistent: H, otherUserNickname: D }),
            [z, H, D],
        ),
        Q = (function (e) {
            let { userId: t, keyToOmit: n } = e,
                r = l.useMemo(() => {
                    if (null == n) return null;
                    let e = new Uint8Array(n);
                    return (0, T.uo)(e);
                }, [n]);
            return (0, u.bG)([I.A], () => {
                let e = I.A.getUserVerifiedKeys(t);
                return null == e ? 0 : Object.keys(e).filter((e) => e !== r).length;
            }, [r, t]);
        })({ userId: n, keyToOmit: P });
    l.useEffect(() => {
        (0, b.HJ)({ userId: n, channelId: a });
    }, [a, n]);
    let $ = {
            transitionState: t,
            title: _.intl.string(_.t["/WPGnF"]),
            subtitle: _.intl.format(_.t.oc2kce, { username: D }),
        },
        ee = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: w.Ot,
                    children: [
                        Q > 0 &&
                            (0, r.jsx)(i.p, {
                                messageType: i.Y.INFO,
                                className: w.Ht,
                                children: _.intl.format(_.t.uZDkz0, { count: Q }),
                            }),
                        (0, r.jsxs)("div", {
                            className: w.wx,
                            children: [
                                (0, r.jsx)(o.D, {
                                    variant: "text-sm/bold",
                                    color: "text-strong",
                                    children: _.intl.string(_.t["/WPGnF"]),
                                }),
                                null != B &&
                                    (0, r.jsx)(G.c, {
                                        className: w.nJ,
                                        chunks: B,
                                        color: c.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                        onCopy: K,
                                    }),
                                (0, r.jsx)("div", {
                                    className: w.ub,
                                    children:
                                        null == B
                                            ? (0, r.jsx)(d.y, { className: w.u1, type: d.t.SPINNING_CIRCLE })
                                            : (0, r.jsx)(O, { badgeText: J, badgeColor: q }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(j.j, { className: w.aY, chunks: B, columns: 3 }),
                    ],
                }),
                (0, r.jsx)(A.E, { className: w.qr, variant: "text-sm/normal", color: "text-muted", children: X }),
            ],
        }),
        et = {
            text: V ? _.intl.string(_.t["Osb+/n"]) : _.intl.string(_.t["0tvNAn"]),
            disabled: null == B || W,
            onClick: V ? Z : Y,
        },
        en = { text: _.intl.string(_.t["ETE/oC"]), onClick: p, variant: "secondary" };
    return (0, r.jsx)(s.Modal, { onClose: p, ...$, actions: [en, et], children: ee });
}
