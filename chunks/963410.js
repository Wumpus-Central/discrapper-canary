(n.r(t), n.d(t, { default: () => C }), n(388685));
var r = n(255367),
    l = n(73800),
    i = n(442837),
    u = n(481060),
    a = n(377171),
    s = n(592125),
    c = n(594174),
    o = n(5192),
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
    v = n(760373),
    N = n(981631),
    R = n(388032),
    T = n(268999);
function I(e) {
    let { badgeText: t, badgeColor: n } = e,
        i = l.useRef(t),
        a = l.useRef(n);
    return (0, r.jsx)(u.IGR, {
        text: i.current,
        color: a.current
    });
}
function C(e) {
    let { transitionState: t, userId: n, channelId: C, onClose: Z } = e,
        x = (0, i.e7)([c.default], () => c.default.getUser(n)),
        O = (0, i.e7)([s.Z], () => {
            var e;
            return null == (e = s.Z.getChannel(C)) ? void 0 : e.getGuildId();
        }),
        j = o.ZP.useName(O, null, x),
        { fingerprint: A, userKey: w } = (0, m.q)({ userId: n }),
        U = (0, y.W)({
            fingerprintBase64: A,
            chunkSize: v.iQ,
            desiredLength: v.KN
        }),
        k = l.useCallback(() => {
            (0, d.s$)({
                userId: n,
                channelId: C
            });
        }, [C, n]),
        M = (0, _.wV)({
            userId: n,
            channelId: C
        });
    (0, g.i)({
        channelId: C,
        userId: n,
        nickname: j,
        onAlertOpen: Z
    });
    let { isCurrentUserKeyPersistent: P, isOtherUserKeyPersistent: F, loading: V } = (0, E.y)({ userId: n }),
        K = l.useCallback(() => {
            null != w && ((0, f.TQ)(n, w, F, C, N.Sbl.E2EE_USER_VERIFY_MODAL), Z());
        }, [w, n, F, C, Z]),
        D = l.useCallback(() => {
            null != w && ((0, f.LO)(n, w, F), Z());
        }, [w, n, F, Z]),
        [L, Y] = l.useMemo(() => (M ? [R.intl.string(R.t.UNUuen), a.Z.BG_BRAND] : [R.intl.string(R.t.y2b7CA), a.Z.STATUS_DANGER]), [M]),
        z = l.useMemo(
            () =>
                (0, f.kK)({
                    isCurrentUserKeyPersistent: P,
                    isOtherUserKeyPersistent: F,
                    otherUserNickname: j
                }),
            [P, F, j]
        ),
        B = (0, S.P)({
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
            title: R.intl.string(R.t['/WPGnJ']),
            subtitle: R.intl.format(R.t.oc2kcX, { username: j }),
            children: [
                (0, r.jsxs)('div', {
                    className: T.verification,
                    children: [
                        B > 0 &&
                            (0, r.jsx)(u.Wn, {
                                messageType: u.QYI.INFO,
                                className: T.helpMessage,
                                children: R.intl.format(R.t.uZDkz8, { count: B })
                            }),
                        (0, r.jsxs)('div', {
                            className: T.header,
                            children: [
                                (0, r.jsx)(u.X6q, {
                                    variant: 'text-sm/bold',
                                    color: 'header-primary',
                                    children: R.intl.string(R.t['/WPGnJ'])
                                }),
                                null != U &&
                                    (0, r.jsx)(p.H, {
                                        className: T.copyIcon,
                                        chunks: U,
                                        color: u.TVs.colors.INTERACTIVE_NORMAL,
                                        onCopy: k
                                    }),
                                (0, r.jsx)('div', {
                                    className: T.codeStatus,
                                    children:
                                        null == U
                                            ? (0, r.jsx)(u.$jN, {
                                                  className: T.spinner,
                                                  type: u.RAz.SPINNING_CIRCLE
                                              })
                                            : (0, r.jsx)(I, {
                                                  badgeText: L,
                                                  badgeColor: Y
                                              })
                                })
                            ]
                        }),
                        (0, r.jsx)(h.b, {
                            className: T.code,
                            chunks: U,
                            columns: v.ak
                        })
                    ]
                }),
                (0, r.jsx)(u.Text, {
                    className: T.footer,
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    children: z
                }),
                (0, r.jsx)('div', {
                    'data-button-hoisted-classname-wrapper': !0,
                    className: T.verifiedButton,
                    children: (0, r.jsx)(u.zxk, {
                        variant: 'primary',
                        text: M ? R.intl.string(R.t['Osb+/v']) : R.intl.string(R.t['0tvNAg']),
                        fullWidth: !0,
                        disabled: null == U || V,
                        onClick: M ? D : K
                    })
                }),
                (0, r.jsx)(u.zxk, {
                    variant: 'secondary',
                    text: R.intl.string(R.t['ETE/oK']),
                    fullWidth: !0,
                    onClick: Z
                })
            ]
        })
    );
}
