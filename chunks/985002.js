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
        [f, p] = r.useState(!1),
        [_, m] = r.useState(!1),
        [h, g] = r.useState(!1),
        [E, b] = r.useState(!1),
        [y, O] = r.useState(!1),
        [v, S] = r.useState(!1),
        I = l || u || f || _ || E || v,
        T = r.useCallback(
            async (e) => {
                if (!I) {
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
            [I, t, n],
        ),
        C = r.useCallback(
            async (e) => {
                if (!I) {
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
            [I, t, n],
        ),
        A = r.useCallback(
            async (e) => {
                if (!I) {
                    p(!0);
                    try {
                        await (0, a.Yw)(e, s.ne.INACTIVE), null == n || n();
                    } catch (n) {
                        let e = new i.Hx(n);
                        null == t || t(e);
                    } finally {
                        p(!1);
                    }
                }
            },
            [I, t, n],
        ),
        N = r.useCallback(
            async (e) => {
                if (!I) {
                    m(!0);
                    try {
                        await (0, a.fc)(e), null == n || n();
                    } catch (n) {
                        let e = new i.Hx(n);
                        null == t || t(e);
                    } finally {
                        m(!1);
                    }
                }
            },
            [I, t, n],
        ),
        P = r.useCallback(async () => {
            if (!h) {
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
        }, [h, t, n]),
        R = r.useCallback(
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
        acceptLinkRequest: T,
        declineLinkRequest: C,
        disconnectLinkRequest: A,
        cancelLinkRequest: N,
        selectTeenUser: R,
        getLinkCode: P,
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
                    S(!0);
                    try {
                        await a.ZP.fetchMoreTeenActivity(l, e, s, r.event_id);
                    } catch (n) {
                        let e = new i.Hx(n);
                        null == t || t(e);
                    } finally {
                        S(!1);
                    }
                }
            },
            [v, t],
        ),
        isAcceptLoading: l,
        isDeclineLoading: u,
        isDisconnectLoading: f,
        isCancelLoading: _,
        isGetLinkCodeLoading: h,
        isSelectTeenUserLoading: y,
        isRequestingLink: E,
        isMoreLoading: v,
    };
}
