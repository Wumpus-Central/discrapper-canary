n.d(t, { G: () => o }), n(388685);
var i = n(192379),
    r = n(881052),
    s = n(260722),
    l = n(914788),
    a = n(292352);
function o(e) {
    let { onError: t, onSuccess: n } = null != e ? e : {},
        [o, c] = i.useState(!1),
        [d, u] = i.useState(!1),
        [m, p] = i.useState(!1),
        [g, h] = i.useState(!1),
        [f, b] = i.useState(!1),
        [_, x] = i.useState(!1),
        [E, C] = i.useState(!1),
        [j, O] = i.useState(!1),
        S = o || d || m || g || _ || j,
        v = i.useCallback(
            async (e) => {
                if (!S) {
                    c(!0);
                    try {
                        await (0, s.Yw)(e.id, a.ne.ACTIVE), null == n || n();
                    } catch (n) {
                        let e = new r.Hx(n);
                        null == t || t(e);
                    } finally {
                        c(!1);
                    }
                }
            },
            [S, t, n]
        ),
        T = i.useCallback(
            async (e) => {
                if (!S) {
                    u(!0);
                    try {
                        await (0, s.Yw)(e.id, a.ne.DECLINED), null == n || n();
                    } catch (n) {
                        let e = new r.Hx(n);
                        null == t || t(e);
                    } finally {
                        u(!1);
                    }
                }
            },
            [S, t, n]
        ),
        I = i.useCallback(
            async (e) => {
                if (!S) {
                    p(!0);
                    try {
                        await (0, s.Yw)(e.id, a.ne.INACTIVE), null == n || n();
                    } catch (n) {
                        let e = new r.Hx(n);
                        null == t || t(e);
                    } finally {
                        p(!1);
                    }
                }
            },
            [S, t, n]
        ),
        N = i.useCallback(
            async (e) => {
                if (!S) {
                    h(!0);
                    try {
                        await (0, s.fc)(e.id), null == n || n();
                    } catch (n) {
                        let e = new r.Hx(n);
                        null == t || t(e);
                    } finally {
                        h(!1);
                    }
                }
            },
            [S, t, n]
        ),
        y = i.useCallback(async () => {
            if (!f) {
                b(!0);
                try {
                    await (0, s.qd)(), null == n || n();
                } catch (n) {
                    let e = new r.Hx(n);
                    null == t || t(e);
                } finally {
                    b(!1);
                }
            }
        }, [f, t, n]),
        A = i.useCallback(
            async (e) => {
                if (!E) {
                    C(!0);
                    try {
                        await s.ZP.fetchTeenActivity(e), null == n || n();
                    } catch (n) {
                        let e = new r.Hx(n);
                        null == t || t(e);
                    } finally {
                        C(!1);
                    }
                }
            },
            [E, t, n]
        );
    return {
        acceptLinkRequest: v,
        declineLinkRequest: T,
        disconnectLinkRequest: I,
        cancelLinkRequest: N,
        selectTeenUser: A,
        getLinkCode: y,
        requestLink: i.useCallback(
            async (e, i) => {
                if (!_) {
                    x(!0);
                    try {
                        await s.ZP.requestLink(e, i), null == n || n();
                    } catch (n) {
                        let e = new r.Hx(n);
                        null == t || t(e);
                    } finally {
                        x(!1);
                    }
                }
            },
            [_, t, n]
        ),
        loadMore: i.useCallback(
            async (e) => {
                let n = l.Z.getActionsForDisplayType(e),
                    i = n[n.length - 1],
                    a = l.Z.getStartId(),
                    o = l.Z.getSelectedTeenId();
                if (!j && null != a && null != o) {
                    O(!0);
                    try {
                        await s.ZP.fetchMoreTeenActivity(o, e, a, i.event_id);
                    } catch (n) {
                        let e = new r.Hx(n);
                        null == t || t(e);
                    } finally {
                        O(!1);
                    }
                }
            },
            [j, t]
        ),
        isAcceptLoading: o,
        isDeclineLoading: d,
        isDisconnectLoading: m,
        isCancelLoading: g,
        isGetLinkCodeLoading: f,
        isSelectTeenUserLoading: E,
        isRequestingLink: _,
        isMoreLoading: j
    };
}
