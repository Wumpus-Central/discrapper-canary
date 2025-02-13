n.r(t), n.d(t, { default: () => A }), n(47120);
var r = n(200651),
    l = n(192379),
    i = n(442837),
    u = n(481060),
    s = n(377171),
    a = n(592125),
    o = n(594174),
    c = n(5192),
    d = n(571826),
    f = n(630759),
    E = n(539067),
    _ = n(802063),
    S = n(210975),
    g = n(301107),
    h = n(65692),
    m = n(540247),
    R = n(785792),
    N = n(190054),
    I = n(245581),
    T = n(760373),
    v = n(981631),
    y = n(388032),
    C = n(464459);
function Z(e) {
    let { badgeText: t, badgeColor: n } = e,
        i = l.useRef(t),
        s = l.useRef(n);
    return (0, r.jsx)(u.IGR, {
        text: i.current,
        color: s.current
    });
}
function A(e) {
    let { transitionState: t, userId: n, channelId: A, onClose: x } = e,
        p = (0, i.e7)([o.default], () => o.default.getUser(n)),
        b = (0, i.e7)([a.Z], () => {
            var e;
            return null === (e = a.Z.getChannel(A)) || void 0 === e ? void 0 : e.getGuildId();
        }),
        M = c.ZP.useName(b, null, p),
        { fingerprint: U, userKey: j } = (0, h.q)({ userId: n }),
        k = (0, g.W)({
            fingerprintBase64: U,
            chunkSize: T.iQ,
            desiredLength: T.KN
        }),
        F = l.useCallback(() => {
            (0, d.s$)({
                userId: n,
                channelId: A
            });
        }, [A, n]),
        V = (0, S.wV)({
            userId: n,
            channelId: A,
            location: 'WebSecureFramesUserVerificationModal'
        });
    (0, _.i)({
        channelId: A,
        userId: n,
        nickname: M,
        onAlertOpen: x
    });
    let { isCurrentUserKeyPersistent: w, isOtherUserKeyPersistent: D, loading: K } = (0, E.y)({ userId: n }),
        O = l.useCallback(() => {
            null != j && ((0, f.TQ)(n, j, D, A, v.Sbl.E2EE_USER_VERIFY_MODAL), x());
        }, [j, n, D, A, x]),
        P = l.useCallback(() => {
            null != j && ((0, f.LO)(n, j, D), x());
        }, [j, n, D, x]),
        [L, Y] = l.useMemo(() => (V ? [y.intl.string(y.t.UNUuen), s.Z.BG_BRAND] : [y.intl.string(y.t.y2b7CA), s.Z.STATUS_DANGER]), [V]),
        z = l.useMemo(
            () =>
                (0, f.kK)({
                    isCurrentUserKeyPersistent: w,
                    isOtherUserKeyPersistent: D,
                    otherUserNickname: M
                }),
            [w, D, M]
        ),
        G = (0, m.P)({
            userId: n,
            keyToOmit: j
        });
    return (
        l.useEffect(() => {
            (0, d.Rq)({
                userId: n,
                channelId: A
            });
        }, [A, n]),
        (0, r.jsxs)(I.Z, {
            transitionState: t,
            title: y.intl.string(y.t['/WPGnJ']),
            subtitle: y.intl.format(y.t.oc2kcX, { username: M }),
            children: [
                (0, r.jsxs)('div', {
                    className: C.verification,
                    children: [
                        G > 0 &&
                            (0, r.jsx)(u.Wn, {
                                messageType: u.QYI.INFO,
                                className: C.helpMessage,
                                children: y.intl.format(y.t.uZDkz8, { count: G })
                            }),
                        (0, r.jsxs)('div', {
                            className: C.header,
                            children: [
                                (0, r.jsx)(u.X6q, {
                                    variant: 'text-sm/bold',
                                    color: 'header-primary',
                                    children: y.intl.string(y.t['/WPGnJ'])
                                }),
                                null != k &&
                                    (0, r.jsx)(N.H, {
                                        className: C.copyIcon,
                                        chunks: k,
                                        color: u.TVs.colors.INTERACTIVE_NORMAL,
                                        onCopy: F
                                    }),
                                (0, r.jsx)('div', {
                                    className: C.codeStatus,
                                    children:
                                        null == k
                                            ? (0, r.jsx)(u.$jN, {
                                                  className: C.spinner,
                                                  type: u.RAz.SPINNING_CIRCLE
                                              })
                                            : (0, r.jsx)(Z, {
                                                  badgeText: L,
                                                  badgeColor: Y
                                              })
                                })
                            ]
                        }),
                        (0, r.jsx)(R.b, {
                            className: C.code,
                            chunks: k,
                            columns: T.ak
                        })
                    ]
                }),
                (0, r.jsx)(u.Text, {
                    className: C.footer,
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    children: z
                }),
                (0, r.jsx)(u.zxk, {
                    fullWidth: !0,
                    className: C.verifiedButton,
                    color: u.Ttl.BRAND,
                    size: u.PhG.MEDIUM,
                    look: u.iLD.FILLED,
                    disabled: null == k || K,
                    onClick: V ? P : O,
                    children: V ? y.intl.string(y.t['Osb+/v']) : y.intl.string(y.t['0tvNAg'])
                }),
                (0, r.jsx)(u.zxk, {
                    fullWidth: !0,
                    color: u.Ttl.PRIMARY,
                    size: u.PhG.MEDIUM,
                    look: u.iLD.FILLED,
                    onClick: x,
                    children: y.intl.string(y.t['ETE/oK'])
                })
            ]
        })
    );
}
