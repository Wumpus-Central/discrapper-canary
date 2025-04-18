r.r(t), r.d(t, { default: () => C }), r(388685);
var n = r(200651),
    l = r(192379),
    i = r(442837),
    u = r(481060),
    s = r(377171),
    a = r(592125),
    o = r(594174),
    c = r(5192),
    d = r(571826),
    f = r(630759),
    E = r(539067),
    g = r(802063),
    _ = r(210975),
    y = r(301107),
    m = r(65692),
    S = r(540247),
    h = r(785792),
    N = r(190054),
    p = r(245581),
    b = r(760373),
    R = r(981631),
    I = r(388032),
    v = r(268999);
function T(e) {
    let { badgeText: t, badgeColor: r } = e,
        i = l.useRef(t),
        s = l.useRef(r);
    return (0, n.jsx)(u.IGR, {
        text: i.current,
        color: s.current
    });
}
function C(e) {
    let { transitionState: t, userId: r, channelId: C, onClose: Z } = e,
        O = (0, i.e7)([o.default], () => o.default.getUser(r)),
        j = (0, i.e7)([a.Z], () => {
            var e;
            return null == (e = a.Z.getChannel(C)) ? void 0 : e.getGuildId();
        }),
        A = c.ZP.useName(j, null, O),
        { fingerprint: x, userKey: w } = (0, m.q)({ userId: r }),
        M = (0, y.W)({
            fingerprintBase64: x,
            chunkSize: b.iQ,
            desiredLength: b.KN
        }),
        U = l.useCallback(() => {
            (0, d.s$)({
                userId: r,
                channelId: C
            });
        }, [C, r]),
        k = (0, _.wV)({
            userId: r,
            channelId: C
        });
    (0, g.i)({
        channelId: C,
        userId: r,
        nickname: A,
        onAlertOpen: Z
    });
    let { isCurrentUserKeyPersistent: P, isOtherUserKeyPersistent: D, loading: F } = (0, E.y)({ userId: r }),
        V = l.useCallback(() => {
            null != w && ((0, f.TQ)(r, w, D, C, R.Sbl.E2EE_USER_VERIFY_MODAL), Z());
        }, [w, r, D, C, Z]),
        K = l.useCallback(() => {
            null != w && ((0, f.LO)(r, w, D), Z());
        }, [w, r, D, Z]),
        [L, W] = l.useMemo(() => (k ? [I.NW.string(I.t.UNUuen), s.Z.BG_BRAND] : [I.NW.string(I.t.y2b7CA), s.Z.STATUS_DANGER]), [k]),
        Y = l.useMemo(
            () =>
                (0, f.kK)({
                    isCurrentUserKeyPersistent: P,
                    isOtherUserKeyPersistent: D,
                    otherUserNickname: A
                }),
            [P, D, A]
        ),
        z = (0, S.P)({
            userId: r,
            keyToOmit: w
        });
    return (
        l.useEffect(() => {
            (0, d.Rq)({
                userId: r,
                channelId: C
            });
        }, [C, r]),
        (0, n.jsxs)(p.Z, {
            transitionState: t,
            title: I.NW.string(I.t['/WPGnJ']),
            subtitle: I.NW.format(I.t.oc2kcX, { username: A }),
            children: [
                (0, n.jsxs)('div', {
                    className: v.verification,
                    children: [
                        z > 0 &&
                            (0, n.jsx)(u.Wn, {
                                messageType: u.QYI.INFO,
                                className: v.helpMessage,
                                children: I.NW.format(I.t.uZDkz8, { count: z })
                            }),
                        (0, n.jsxs)('div', {
                            className: v.header,
                            children: [
                                (0, n.jsx)(u.X6q, {
                                    variant: 'text-sm/bold',
                                    color: 'header-primary',
                                    children: I.NW.string(I.t['/WPGnJ'])
                                }),
                                null != M &&
                                    (0, n.jsx)(N.H, {
                                        className: v.copyIcon,
                                        chunks: M,
                                        color: u.TVs.colors.INTERACTIVE_NORMAL,
                                        onCopy: U
                                    }),
                                (0, n.jsx)('div', {
                                    className: v.codeStatus,
                                    children:
                                        null == M
                                            ? (0, n.jsx)(u.$jN, {
                                                  className: v.spinner,
                                                  type: u.RAz.SPINNING_CIRCLE
                                              })
                                            : (0, n.jsx)(T, {
                                                  badgeText: L,
                                                  badgeColor: W
                                              })
                                })
                            ]
                        }),
                        (0, n.jsx)(h.b, {
                            className: v.code,
                            chunks: M,
                            columns: b.ak
                        })
                    ]
                }),
                (0, n.jsx)(u.Text, {
                    className: v.footer,
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    children: Y
                }),
                (0, n.jsx)(u.zxk, {
                    fullWidth: !0,
                    className: v.verifiedButton,
                    color: u.Ttl.BRAND,
                    size: u.PhG.MEDIUM,
                    look: u.iLD.FILLED,
                    disabled: null == M || F,
                    onClick: k ? K : V,
                    children: k ? I.NW.string(I.t['Osb+/v']) : I.NW.string(I.t['0tvNAg'])
                }),
                (0, n.jsx)(u.zxk, {
                    fullWidth: !0,
                    color: u.Ttl.PRIMARY,
                    size: u.PhG.MEDIUM,
                    look: u.iLD.FILLED,
                    onClick: Z,
                    children: I.NW.string(I.t['ETE/oK'])
                })
            ]
        })
    );
}
