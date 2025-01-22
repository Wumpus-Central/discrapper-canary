n.d(t, {
    G: function () {
        return o;
    }
}),
    n(47120);
var i = n(192379),
    r = n(881052),
    s = n(260722),
    a = n(914788),
    l = n(292352);
function o(e) {
    let { onError: t, onSuccess: n } = null != e ? e : {},
        [o, c] = i.useState(!1),
        [d, u] = i.useState(!1),
        [m, g] = i.useState(!1),
        [h, p] = i.useState(!1),
        [x, f] = i.useState(!1),
        [E, _] = i.useState(!1),
        [C, T] = i.useState(!1),
        [S, b] = i.useState(!1),
        I = o || d || m || h || E || S,
        N = i.useCallback(
            async (e) => {
                if (!I) {
                    c(!0);
                    try {
                        await (0, s.Yw)(e.id, l.ne.ACTIVE), null == n || n();
                    } catch (n) {
                        let e = new r.Hx(n);
                        null == t || t(e);
                    } finally {
                        c(!1);
                    }
                }
            },
            [I, t, n]
        ),
        v = i.useCallback(
            async (e) => {
                if (!I) {
                    u(!0);
                    try {
                        await (0, s.Yw)(e.id, l.ne.DECLINED), null == n || n();
                    } catch (n) {
                        let e = new r.Hx(n);
                        null == t || t(e);
                    } finally {
                        u(!1);
                    }
                }
            },
            [I, t, n]
        ),
        A = i.useCallback(
            async (e) => {
                if (!I) {
                    g(!0);
                    try {
                        await (0, s.Yw)(e.id, l.ne.INACTIVE), null == n || n();
                    } catch (n) {
                        let e = new r.Hx(n);
                        null == t || t(e);
                    } finally {
                        g(!1);
                    }
                }
            },
            [I, t, n]
        ),
        j = i.useCallback(
            async (e) => {
                if (!I) {
                    p(!0);
                    try {
                        await (0, s.fc)(e.id), null == n || n();
                    } catch (n) {
                        let e = new r.Hx(n);
                        null == t || t(e);
                    } finally {
                        p(!1);
                    }
                }
            },
            [I, t, n]
        ),
        O = i.useCallback(async () => {
            if (!x) {
                f(!0);
                try {
                    await (0, s.qd)(), null == n || n();
                } catch (n) {
                    let e = new r.Hx(n);
                    null == t || t(e);
                } finally {
                    f(!1);
                }
            }
        }, [x, t, n]),
        R = i.useCallback(
            async (e) => {
                if (!C) {
                    T(!0);
                    try {
                        await s.ZP.fetchTeenActivity(e), null == n || n();
                    } catch (n) {
                        let e = new r.Hx(n);
                        null == t || t(e);
                    } finally {
                        T(!1);
                    }
                }
            },
            [C, t, n]
        ),
        P = i.useCallback(
            async (e, i) => {
                if (!E) {
                    _(!0);
                    try {
                        await s.ZP.requestLink(e, i), null == n || n();
                    } catch (n) {
                        let e = new r.Hx(n);
                        null == t || t(e);
                    } finally {
                        _(!1);
                    }
                }
            },
            [E, t, n]
        );
    return {
        acceptLinkRequest: N,
        declineLinkRequest: v,
        disconnectLinkRequest: A,
        cancelLinkRequest: j,
        selectTeenUser: R,
        getLinkCode: O,
        requestLink: P,
        loadMore: i.useCallback(
            async (e) => {
                let n = a.Z.getActionsForDisplayType(e),
                    i = n[n.length - 1],
                    l = a.Z.getStartId(),
                    o = a.Z.getSelectedTeenId();
                if (!S && null != l && null != o) {
                    b(!0);
                    try {
                        await s.ZP.fetchMoreTeenActivity(o, e, l, i.event_id);
                    } catch (n) {
                        let e = new r.Hx(n);
                        null == t || t(e);
                    } finally {
                        b(!1);
                    }
                }
            },
            [S, t]
        ),
        isAcceptLoading: o,
        isDeclineLoading: d,
        isDisconnectLoading: m,
        isCancelLoading: h,
        isGetLinkCodeLoading: x,
        isSelectTeenUserLoading: C,
        isRequestingLink: E,
        isMoreLoading: S
    };
}
