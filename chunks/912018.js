r.r(t), r.d(t, { default: () => j });
var n = r(627968),
    l = r(64700),
    s = r(189213),
    u = r(17928),
    i = r(777666),
    a = r(661531),
    c = r(512950),
    o = r(534514),
    E = r(289873),
    d = r(834730),
    f = r(734057),
    A = r(287809),
    _ = r(562153),
    S = r(798286),
    g = r(814278),
    T = r(763827);
r(603266);
var m = r(116956),
    C = r(665691),
    R = r(998759);
r(393431), r(532706), r(42231), r(232424), r(949626), r(767709), r(65162);
var y = r(827762),
    N = r(284009),
    I = r.n(N),
    h = r(149597),
    x = r(495544),
    F = r(969341),
    p = r(731854),
    U = r(787392),
    b = r(75811),
    k = r(930840),
    D = r(652215),
    M = r(985018),
    w = r(751005);
function O(e) {
    let { badgeText: t, badgeColor: r } = e,
        s = l.useRef(t),
        u = l.useRef(r);
    return (0, n.jsx)(i.Lp, { text: s.current, color: u.current });
}
function j(e) {
    let { transitionState: t, userId: r, channelId: i, onClose: N } = e,
        j = (0, u.bG)([A.default], () => A.default.getUser(r)),
        K = (0, u.bG)([f.A], () => f.A.getChannel(i)?.getGuildId()),
        V = _.Ay.useName(K, null, j),
        { fingerprint: v, userKey: G } = (function (e) {
            let { userId: t } = e,
                r = (0, u.bG)([x.default], () => x.default.getId());
            I()(r !== t, "[useSecureFramesPairwiseFingerprint] Should not pass current user id.");
            let [n, s] = l.useState(null),
                [i, a] = l.useState(!1),
                c = (0, u.bG)([T.A], () => T.A.getSecureFramesRosterMapEntry(t)),
                o = (0, u.bG)([T.A], () => T.A.getSecureFramesRosterMapEntry(r)),
                E = l.useCallback((e) => {
                    s(y.fromByteArray(e)), a(!1);
                }, []),
                d = l.useCallback(
                    async (e, t, r, n) => {
                        F.Ay.supports(p.O5.MLS_PAIRWISE_FINGERPRINTS)
                            ? T.A.getRTCConnection()?.getMLSPairwiseFingerprint(0, r, (e) => {
                                  E(new Uint8Array(e));
                              })
                            : E(await (0, h._x)(0, new Uint8Array(t), e, new Uint8Array(n), r));
                    },
                    [E],
                ),
                f = l.useRef(null);
            return (
                l.useEffect(() => {
                    null != c &&
                        null != o &&
                        null == f.current &&
                        (a(!0), (f.current = setTimeout(() => d(r, o, t, c), 0)));
                    let e = f.current;
                    return () => {
                        null != e && clearTimeout(e);
                    };
                }, [r, o, d, t, c]),
                l.useMemo(() => ({ fingerprint: n, userKey: c, loading: i }), [n, i, c])
            );
        })({ userId: r }),
        L = (0, R.z)({ fingerprintBase64: v, chunkSize: 5, desiredLength: 45 }),
        Y = l.useCallback(() => {
            (0, S.Hb)({ userId: r, channelId: i });
        }, [i, r]),
        P = (0, C.UF)({ userId: r, channelId: i });
    !(function (e) {
        let { channelId: t, userId: r, nickname: n, onAlertOpen: s } = e,
            i = (function (e) {
                let { userId: t } = e;
                return (0, u.bG)([T.A, m.A], () => (0, g.m8)(t, [T.A, m.A]));
            })({ userId: r }),
            a = l.useRef(null);
        l.useEffect(() => {
            i && null == a.current
                ? (a.current = setTimeout(() => {
                      s(), (0, g.Vw)({ userId: r, channelId: t, nickname: n });
                  }, 1e3))
                : (clearTimeout(a.current), (a.current = null));
            let e = a.current;
            return () => {
                clearTimeout(e);
            };
        }, [t, i, n, s, r]);
    })({ channelId: i, userId: r, nickname: V, onAlertOpen: N });
    let {
            isCurrentUserKeyPersistent: z,
            isOtherUserKeyPersistent: B,
            loading: H,
        } = (function (e) {
            let { userId: t } = e,
                r = (0, u.bG)([T.A], () => T.A.getSecureFramesRosterMapEntry(t)),
                [n, s] = l.useState(!0),
                [i, a] = l.useState(!1),
                [c, o] = l.useState(!1),
                E = l.useCallback(async (e, t) => {
                    s(!0);
                    try {
                        let r = await (0, g.A5)(1),
                            n = await (0, g.iO)(e, t, 1);
                        a(r), o(n);
                    } catch (e) {
                        a(!1), o(!1);
                    } finally {
                        s(!1);
                    }
                }, []);
            return (
                l.useEffect(() => {
                    null == r ? (a(!1), o(!1), s(!1)) : E(t, r);
                }, [r, E, t]),
                { loading: n, isCurrentUserKeyPersistent: i, isOtherUserKeyPersistent: c }
            );
        })({ userId: r }),
        q = l.useCallback(() => {
            null != G && ((0, g.bk)(r, G, B, i, D.ThZ.E2EE_USER_VERIFY_MODAL), N());
        }, [G, r, B, i, N]),
        Z = l.useCallback(() => {
            null != G && ((0, g.Dh)(r, G, B), N());
        }, [G, r, B, N]),
        [J, W] = l.useMemo(
            () =>
                P
                    ? [M.intl.string(M.t.UNUuem), a.A.colors.BACKGROUND_BRAND.css]
                    : [M.intl.string(M.t.y2b7CA), a.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css],
            [P],
        ),
        X = l.useMemo(
            () => (0, g.Z1)({ isCurrentUserKeyPersistent: z, isOtherUserKeyPersistent: B, otherUserNickname: V }),
            [z, B, V],
        ),
        $ = (function (e) {
            let { userId: t, keyToOmit: r } = e,
                n = l.useMemo(() => {
                    if (null == r) return null;
                    let e = new Uint8Array(r);
                    return (0, h.uo)(e);
                }, [r]);
            return (0, u.bG)([U.A], () => {
                let e = U.A.getUserVerifiedKeys(t);
                return null == e ? 0 : Object.keys(e).filter((e) => e !== n).length;
            }, [n, t]);
        })({ userId: r, keyToOmit: G });
    l.useEffect(() => {
        (0, S.HJ)({ userId: r, channelId: i });
    }, [i, r]);
    let Q = {
            transitionState: t,
            title: M.intl.string(M.t["/WPGnF"]),
            subtitle: M.intl.format(M.t.oc2kce, { username: V }),
        },
        ee = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)("div", {
                    className: w.Ot,
                    children: [
                        $ > 0 &&
                            (0, n.jsx)(c.p, {
                                messageType: c.Y.INFO,
                                className: w.Ht,
                                children: M.intl.format(M.t.uZDkz0, { count: $ }),
                            }),
                        (0, n.jsxs)("div", {
                            className: w.wx,
                            children: [
                                (0, n.jsx)(o.D, {
                                    variant: "text-sm/bold",
                                    color: "text-strong",
                                    children: M.intl.string(M.t["/WPGnF"]),
                                }),
                                null != L &&
                                    (0, n.jsx)(k.c, {
                                        className: w.nJ,
                                        chunks: L,
                                        color: a.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                        onCopy: Y,
                                    }),
                                (0, n.jsx)("div", {
                                    className: w.ub,
                                    children:
                                        null == L
                                            ? (0, n.jsx)(E.y, { className: w.u1, type: E.t.SPINNING_CIRCLE })
                                            : (0, n.jsx)(O, { badgeText: J, badgeColor: W }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(b.j, { className: w.aY, chunks: L, columns: 3 }),
                    ],
                }),
                (0, n.jsx)(d.E, { className: w.qr, variant: "text-sm/normal", color: "text-muted", children: X }),
            ],
        }),
        et = {
            text: P ? M.intl.string(M.t["Osb+/n"]) : M.intl.string(M.t["0tvNAn"]),
            disabled: null == L || H,
            onClick: P ? Z : q,
        },
        er = { text: M.intl.string(M.t["ETE/oC"]), onClick: N, variant: "secondary" };
    return (0, n.jsx)(s.Modal, { onClose: N, ...Q, actions: [er, et], children: ee });
}
