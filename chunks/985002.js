n.d(t, { G: () => l }), n(388685);
var r = n(473749),
    i = n(881052),
    a = n(260722),
    o = n(914788),
    s = n(292352);
function l(e) {
    let { onError: t, onSuccess: n } = null != e ? e : {},
        [l, c] = r.useState(!1),
        [u, d] = r.useState(!1),
        [f, _] = r.useState(!1),
        [p, h] = r.useState(!1),
        [m, g] = r.useState(!1),
        [E, b] = r.useState(!1),
        [y, O] = r.useState(!1),
        [v, I] = r.useState(!1),
        T = l || u || f || p || E || v,
        S = r.useCallback(
            async (e) => {
                if (!T) {
                    c(!0);
                    try {
                        await (0, a.Yw)(e, s.ne.ACTIVE), null == n || n();
                    } catch (n) {
                        let e = new i.Hx(n);
                        null == t || t(e);
                    } finally {
                        c(!1);
                    }
                }
            },
            [T, t, n],
        ),
        A = r.useCallback(
            async (e) => {
                if (!T) {
                    d(!0);
                    try {
                        await (0, a.Yw)(e, s.ne.DECLINED), null == n || n();
                    } catch (n) {
                        let e = new i.Hx(n);
                        null == t || t(e);
                    } finally {
                        d(!1);
                    }
                }
            },
            [T, t, n],
        ),
        C = r.useCallback(
            async (e) => {
                if (!T) {
                    _(!0);
                    try {
                        await (0, a.Yw)(e, s.ne.INACTIVE), null == n || n();
                    } catch (n) {
                        let e = new i.Hx(n);
                        null == t || t(e);
                    } finally {
                        _(!1);
                    }
                }
            },
            [T, t, n],
        ),
        N = r.useCallback(
            async (e) => {
                if (!T) {
                    h(!0);
                    try {
                        await (0, a.fc)(e), null == n || n();
                    } catch (n) {
                        let e = new i.Hx(n);
                        null == t || t(e);
                    } finally {
                        h(!1);
                    }
                }
            },
            [T, t, n],
        ),
        R = r.useCallback(async () => {
            if (!m) {
                g(!0);
                try {
                    await (0, a.qd)(), null == n || n();
                } catch (n) {
                    let e = new i.Hx(n);
                    null == t || t(e);
                } finally {
                    g(!1);
                }
            }
        }, [m, t, n]),
        P = r.useCallback(
            async (e) => {
                if (!y) {
                    O(!0);
                    try {
                        await a.ZP.fetchTeenActivity(e), null == n || n();
                    } catch (n) {
                        let e = new i.Hx(n);
                        null == t || t(e);
                    } finally {
                        O(!1);
                    }
                }
            },
            [y, t, n],
        );
    return {
        acceptLinkRequest: S,
        declineLinkRequest: A,
        disconnectLinkRequest: C,
        cancelLinkRequest: N,
        selectTeenUser: P,
        getLinkCode: R,
        requestLink: r.useCallback(
            async (e, r) => {
                if (!E) {
                    b(!0);
                    try {
                        await a.ZP.requestLink(e, r), null == n || n();
                    } catch (n) {
                        let e = new i.Hx(n);
                        null == t || t(e);
                    } finally {
                        b(!1);
                    }
                }
            },
            [E, t, n],
        ),
        loadMore: r.useCallback(
            async (e) => {
                let n = o.Z.getActionsForDisplayType(e),
                    r = n[n.length - 1],
                    s = o.Z.getStartId(),
                    l = o.Z.getSelectedTeenId();
                if (!v && null != s && null != l) {
                    I(!0);
                    try {
                        await a.ZP.fetchMoreTeenActivity(l, e, s, r.event_id);
                    } catch (n) {
                        let e = new i.Hx(n);
                        null == t || t(e);
                    } finally {
                        I(!1);
                    }
                }
            },
            [v, t],
        ),
        isAcceptLoading: l,
        isDeclineLoading: u,
        isDisconnectLoading: f,
        isCancelLoading: p,
        isGetLinkCodeLoading: m,
        isSelectTeenUserLoading: y,
        isRequestingLink: E,
        isMoreLoading: v,
    };
}
