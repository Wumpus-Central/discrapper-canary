n.r(t), n.d(t, { default: () => C }), n(388685);
var r = n(255367),
    l = n(73800),
    i = n(442837),
    u = n(481060),
    s = n(377171),
    a = n(592125),
    o = n(594174),
    c = n(5192),
    d = n(571826),
    f = n(630759),
    E = n(539067),
    g = n(802063),
    _ = n(210975),
    y = n(301107),
    m = n(65692),
    S = n(540247),
    h = n(785792),
    p = n(190054),
    b = n(245581),
    R = n(760373),
    N = n(981631),
    I = n(388032),
    v = n(268999);
function T(e) {
    let { badgeText: t, badgeColor: n } = e,
        i = l.useRef(t),
        s = l.useRef(n);
    return (0, r.jsx)(u.IGR, {
        text: i.current,
        color: s.current
    });
}
function C(e) {
    let { transitionState: t, userId: n, channelId: C, onClose: Z } = e,
        O = (0, i.e7)([o.default], () => o.default.getUser(n)),
        j = (0, i.e7)([a.Z], () => {
            var e;
            return null == (e = a.Z.getChannel(C)) ? void 0 : e.getGuildId();
        }),
        A = c.ZP.useName(j, null, O),
        { fingerprint: x, userKey: w } = (0, m.q)({ userId: n }),
        M = (0, y.W)({
            fingerprintBase64: x,
            chunkSize: R.iQ,
            desiredLength: R.KN
        }),
        U = l.useCallback(() => {
            (0, d.s$)({
                userId: n,
                channelId: C
            });
        }, [C, n]),
        k = (0, _.wV)({
            userId: n,
            channelId: C
        });
    (0, g.i)({
        channelId: C,
        userId: n,
        nickname: A,
        onAlertOpen: Z
    });
    let { isCurrentUserKeyPersistent: P, isOtherUserKeyPersistent: D, loading: F } = (0, E.y)({ userId: n }),
        V = l.useCallback(() => {
            null != w && ((0, f.TQ)(n, w, D, C, N.Sbl.E2EE_USER_VERIFY_MODAL), Z());
        }, [w, n, D, C, Z]),
        K = l.useCallback(() => {
            null != w && ((0, f.LO)(n, w, D), Z());
        }, [w, n, D, Z]),
        [L, Y] = l.useMemo(() => (k ? [I.intl.string(I.t.UNUuen), s.Z.BG_BRAND] : [I.intl.string(I.t.y2b7CA), s.Z.STATUS_DANGER]), [k]),
        z = l.useMemo(
            () =>
                (0, f.kK)({
                    isCurrentUserKeyPersistent: P,
                    isOtherUserKeyPersistent: D,
                    otherUserNickname: A
                }),
            [P, D, A]
        ),
        G = (0, S.P)({
            userId: n,
            keyToOmit: w
        });
    return (
        l.useEffect(() => {
            (0, d.Rq)({
                userId: n,
                channelId: C
            });
        }, [C, n]),
        (0, r.jsxs)(b.Z, {
            transitionState: t,
            title: I.intl.string(I.t['/WPGnJ']),
            subtitle: I.intl.format(I.t.oc2kcX, { username: A }),
            children: [
                (0, r.jsxs)('div', {
                    className: v.verification,
                    children: [
                        G > 0 &&
                            (0, r.jsx)(u.Wn, {
                                messageType: u.QYI.INFO,
                                className: v.helpMessage,
                                children: I.intl.format(I.t.uZDkz8, { count: G })
                            }),
                        (0, r.jsxs)('div', {
                            className: v.header,
                            children: [
                                (0, r.jsx)(u.X6q, {
                                    variant: 'text-sm/bold',
                                    color: 'header-primary',
                                    children: I.intl.string(I.t['/WPGnJ'])
                                }),
                                null != M &&
                                    (0, r.jsx)(p.H, {
                                        className: v.copyIcon,
                                        chunks: M,
                                        color: u.TVs.colors.INTERACTIVE_NORMAL,
                                        onCopy: U
                                    }),
                                (0, r.jsx)('div', {
                                    className: v.codeStatus,
                                    children:
                                        null == M
                                            ? (0, r.jsx)(u.$jN, {
                                                  className: v.spinner,
                                                  type: u.RAz.SPINNING_CIRCLE
                                              })
                                            : (0, r.jsx)(T, {
                                                  badgeText: L,
                                                  badgeColor: Y
                                              })
                                })
                            ]
                        }),
                        (0, r.jsx)(h.b, {
                            className: v.code,
                            chunks: M,
                            columns: R.ak
                        })
                    ]
                }),
                (0, r.jsx)(u.Text, {
                    className: v.footer,
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    children: z
                }),
                (0, r.jsx)(u.zxk, {
                    fullWidth: !0,
                    className: v.verifiedButton,
                    color: u.Ttl.BRAND,
                    size: u.PhG.MEDIUM,
                    look: u.iLD.FILLED,
                    disabled: null == M || F,
                    onClick: k ? K : V,
                    children: k ? I.intl.string(I.t['Osb+/v']) : I.intl.string(I.t['0tvNAg'])
                }),
                (0, r.jsx)(u.zxk, {
                    fullWidth: !0,
                    color: u.Ttl.PRIMARY,
                    size: u.PhG.MEDIUM,
                    look: u.iLD.FILLED,
                    onClick: Z,
                    children: I.intl.string(I.t['ETE/oK'])
                })
            ]
        })
    );
}
