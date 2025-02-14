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
        [m, h] = i.useState(!1),
        [g, x] = i.useState(!1),
        [_, p] = i.useState(!1),
        [E, C] = i.useState(!1),
        [f, T] = i.useState(!1),
        [N, S] = i.useState(!1),
        I = o || d || m || g || E || N,
        b = i.useCallback(
            async (e) => {
                if (!I) {
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
            [I, t, n]
        ),
        v = i.useCallback(
            async (e) => {
                if (!I) {
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
            [I, t, n]
        ),
        j = i.useCallback(
            async (e) => {
                if (!I) {
                    h(!0);
                    try {
                        await (0, r.Yw)(e.id, a.ne.INACTIVE), null == n || n();
                    } catch (n) {
                        let e = new s.Hx(n);
                        null == t || t(e);
                    } finally {
                        h(!1);
                    }
                }
            },
            [I, t, n]
        ),
        A = i.useCallback(
            async (e) => {
                if (!I) {
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
            [I, t, n]
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
                    S(!0);
                    try {
                        await r.ZP.fetchMoreTeenActivity(o, e, a, i.event_id);
                    } catch (n) {
                        let e = new s.Hx(n);
                        null == t || t(e);
                    } finally {
                        S(!1);
                    }
                }
            },
            [N, t]
        ),
        isAcceptLoading: o,
        isDeclineLoading: d,
        isDisconnectLoading: m,
        isCancelLoading: g,
        isGetLinkCodeLoading: _,
        isSelectTeenUserLoading: f,
        isRequestingLink: E,
        isMoreLoading: N
    };
}
