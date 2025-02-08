n.d(t, { G: () => o }), n(47120);
var i = n(192379),
    s = n(881052),
    r = n(260722),
    l = n(914788),
    a = n(292352);
function o(e) {
    let { onError: t, onSuccess: n } = null != e ? e : {},
        [o, c] = i.useState(!1),
        [d, u] = i.useState(!1),
        [m, g] = i.useState(!1),
        [h, x] = i.useState(!1),
        [_, p] = i.useState(!1),
        [E, C] = i.useState(!1),
        [f, T] = i.useState(!1),
        [N, I] = i.useState(!1),
        S = o || d || m || h || E || N,
        b = i.useCallback(
            async (e) => {
                if (!S) {
                    c(!0);
                    try {
                        await (0, r.Yw)(e.id, a.ne.ACTIVE), null == n || n();
                    } catch (n) {
                        let e = new s.Hx(n);
                        null == t || t(e);
                    } finally {
                        c(!1);
                    }
                }
            },
            [S, t, n]
        ),
        v = i.useCallback(
            async (e) => {
                if (!S) {
                    u(!0);
                    try {
                        await (0, r.Yw)(e.id, a.ne.DECLINED), null == n || n();
                    } catch (n) {
                        let e = new s.Hx(n);
                        null == t || t(e);
                    } finally {
                        u(!1);
                    }
                }
            },
            [S, t, n]
        ),
        j = i.useCallback(
            async (e) => {
                if (!S) {
                    g(!0);
                    try {
                        await (0, r.Yw)(e.id, a.ne.INACTIVE), null == n || n();
                    } catch (n) {
                        let e = new s.Hx(n);
                        null == t || t(e);
                    } finally {
                        g(!1);
                    }
                }
            },
            [S, t, n]
        ),
        A = i.useCallback(
            async (e) => {
                if (!S) {
                    x(!0);
                    try {
                        await (0, r.fc)(e.id), null == n || n();
                    } catch (n) {
                        let e = new s.Hx(n);
                        null == t || t(e);
                    } finally {
                        x(!1);
                    }
                }
            },
            [S, t, n]
        ),
        O = i.useCallback(async () => {
            if (!_) {
                p(!0);
                try {
                    await (0, r.qd)(), null == n || n();
                } catch (n) {
                    let e = new s.Hx(n);
                    null == t || t(e);
                } finally {
                    p(!1);
                }
            }
        }, [_, t, n]),
        R = i.useCallback(
            async (e) => {
                if (!f) {
                    T(!0);
                    try {
                        await r.ZP.fetchTeenActivity(e), null == n || n();
                    } catch (n) {
                        let e = new s.Hx(n);
                        null == t || t(e);
                    } finally {
                        T(!1);
                    }
                }
            },
            [f, t, n]
        );
    return {
        acceptLinkRequest: b,
        declineLinkRequest: v,
        disconnectLinkRequest: j,
        cancelLinkRequest: A,
        selectTeenUser: R,
        getLinkCode: O,
        requestLink: i.useCallback(
            async (e, i) => {
                if (!E) {
                    C(!0);
                    try {
                        await r.ZP.requestLink(e, i), null == n || n();
                    } catch (n) {
                        let e = new s.Hx(n);
                        null == t || t(e);
                    } finally {
                        C(!1);
                    }
                }
            },
            [E, t, n]
        ),
        loadMore: i.useCallback(
            async (e) => {
                let n = l.Z.getActionsForDisplayType(e),
                    i = n[n.length - 1],
                    a = l.Z.getStartId(),
                    o = l.Z.getSelectedTeenId();
                if (!N && null != a && null != o) {
                    I(!0);
                    try {
                        await r.ZP.fetchMoreTeenActivity(o, e, a, i.event_id);
                    } catch (n) {
                        let e = new s.Hx(n);
                        null == t || t(e);
                    } finally {
                        I(!1);
                    }
                }
            },
            [N, t]
        ),
        isAcceptLoading: o,
        isDeclineLoading: d,
        isDisconnectLoading: m,
        isCancelLoading: h,
        isGetLinkCodeLoading: _,
        isSelectTeenUserLoading: f,
        isRequestingLink: E,
        isMoreLoading: N
    };
}
