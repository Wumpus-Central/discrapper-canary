n.r(t),
    n.d(t, {
        default: function () {
            return p;
        }
    }),
    n(47120);
var r = n(200651),
    l = n(192379),
    i = n(442837),
    u = n(481060),
    s = n(377171),
    o = n(592125),
    a = n(594174),
    c = n(5192),
    d = n(571826),
    f = n(630759),
    E = n(539067),
    S = n(802063),
    _ = n(210975),
    g = n(301107),
    m = n(65692),
    h = n(540247),
    R = n(785792),
    I = n(190054),
    C = n(245581),
    N = n(760373),
    T = n(981631),
    v = n(388032),
    y = n(822466);
function Z(e) {
    let { badgeText: t, badgeColor: n } = e,
        i = l.useRef(t),
        s = l.useRef(n);
    return (0, r.jsx)(u.TextBadge, {
        text: i.current,
        color: s.current
    });
}
function p(e) {
    let { transitionState: t, userId: n, channelId: p, onClose: A } = e,
        x = (0, i.e7)([a.default], () => a.default.getUser(n)),
        M = (0, i.e7)([o.Z], () => {
            var e;
            return null === (e = o.Z.getChannel(p)) || void 0 === e ? void 0 : e.getGuildId();
        }),
        b = c.ZP.useName(M, null, x),
        { fingerprint: k, userKey: U } = (0, m.q)({ userId: n }),
        j = (0, g.W)({
            fingerprintBase64: k,
            chunkSize: N.iQ,
            desiredLength: N.KN
        }),
        F = l.useCallback(() => {
            (0, d.s$)({
                userId: n,
                channelId: p
            });
        }, [p, n]),
        w = (0, _.wV)({
            userId: n,
            channelId: p,
            location: 'WebSecureFramesUserVerificationModal'
        });
    (0, S.i)({
        channelId: p,
        userId: n,
        nickname: b,
        onAlertOpen: A
    });
    let { isCurrentUserKeyPersistent: V, isOtherUserKeyPersistent: D, loading: K } = (0, E.y)({ userId: n }),
        O = l.useCallback(() => {
            null != U && ((0, f.TQ)(n, U, D, p, T.Sbl.E2EE_USER_VERIFY_MODAL), A());
        }, [U, n, D, p, A]),
        L = l.useCallback(() => {
            null != U && ((0, f.LO)(n, U, D), A());
        }, [U, n, D, A]),
        [P, B] = l.useMemo(() => (w ? [v.intl.string(v.t.UNUuen), s.Z.BG_BRAND] : [v.intl.string(v.t.y2b7CA), s.Z.STATUS_DANGER]), [w]),
        Y = l.useMemo(
            () =>
                (0, f.kK)({
                    isCurrentUserKeyPersistent: V,
                    isOtherUserKeyPersistent: D,
                    otherUserNickname: b
                }),
            [V, D, b]
        ),
        z = (0, h.P)({
            userId: n,
            keyToOmit: U
        });
    return (
        l.useEffect(() => {
            (0, d.Rq)({
                userId: n,
                channelId: p
            });
        }, [p, n]),
        (0, r.jsxs)(C.Z, {
            transitionState: t,
            title: v.intl.string(v.t['/WPGnJ']),
            subtitle: v.intl.format(v.t.oc2kcX, { username: b }),
            children: [
                (0, r.jsxs)('div', {
                    className: y.verification,
                    children: [
                        z > 0 &&
                            (0, r.jsx)(u.HelpMessage, {
                                messageType: u.HelpMessageTypes.INFO,
                                className: y.helpMessage,
                                children: v.intl.format(v.t.uZDkz8, { count: z })
                            }),
                        (0, r.jsxs)('div', {
                            className: y.header,
                            children: [
                                (0, r.jsx)(u.Heading, {
                                    variant: 'text-sm/bold',
                                    color: 'header-primary',
                                    children: v.intl.string(v.t['/WPGnJ'])
                                }),
                                null != j &&
                                    (0, r.jsx)(I.H, {
                                        className: y.copyIcon,
                                        chunks: j,
                                        color: u.tokens.colors.INTERACTIVE_NORMAL,
                                        onCopy: F
                                    }),
                                (0, r.jsx)('div', {
                                    className: y.codeStatus,
                                    children:
                                        null == j
                                            ? (0, r.jsx)(u.Spinner, {
                                                  className: y.spinner,
                                                  type: u.SpinnerTypes.SPINNING_CIRCLE
                                              })
                                            : (0, r.jsx)(Z, {
                                                  badgeText: P,
                                                  badgeColor: B
                                              })
                                })
                            ]
                        }),
                        (0, r.jsx)(R.b, {
                            className: y.code,
                            chunks: j,
                            columns: N.ak
                        })
                    ]
                }),
                (0, r.jsx)(u.Text, {
                    className: y.footer,
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    children: Y
                }),
                (0, r.jsx)(u.Button, {
                    fullWidth: !0,
                    className: y.verifiedButton,
                    color: u.ButtonColors.BRAND,
                    size: u.ButtonSizes.MEDIUM,
                    look: u.ButtonLooks.FILLED,
                    disabled: null == j || K,
                    onClick: w ? L : O,
                    children: w ? v.intl.string(v.t['Osb+/v']) : v.intl.string(v.t['0tvNAg'])
                }),
                (0, r.jsx)(u.Button, {
                    fullWidth: !0,
                    color: u.ButtonColors.PRIMARY,
                    size: u.ButtonSizes.MEDIUM,
                    look: u.ButtonLooks.FILLED,
                    onClick: A,
                    children: v.intl.string(v.t['ETE/oK'])
                })
            ]
        })
    );
}
