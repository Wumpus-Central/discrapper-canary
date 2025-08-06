(n.d(t, { G: () => o }), n(388685));
var i = n(73800),
    r = n(881052),
    s = n(260722),
    a = n(914788),
    l = n(292352);
function o(e) {
    let { onError: t, onSuccess: n } = null != e ? e : {},
        [o, c] = i.useState(!1),
        [d, u] = i.useState(!1),
        [m, p] = i.useState(!1),
        [g, h] = i.useState(!1),
        [f, b] = i.useState(!1),
        [x, _] = i.useState(!1),
        [j, E] = i.useState(!1),
        [C, O] = i.useState(!1),
        v = o || d || m || g || x || C,
        S = i.useCallback(
            async (e) => {
                if (!v) {
                    c(!0);
                    try {
                        (await (0, s.Yw)(e.id, l.ne.ACTIVE), null == n || n());
                    } catch (n) {
                        let e = new r.Hx(n);
                        null == t || t(e);
                    } finally {
                        c(!1);
                    }
                }
            },
            [v, t, n]
        ),
        T = i.useCallback(
            async (e) => {
                if (!v) {
                    u(!0);
                    try {
                        (await (0, s.Yw)(e.id, l.ne.DECLINED), null == n || n());
                    } catch (n) {
                        let e = new r.Hx(n);
                        null == t || t(e);
                    } finally {
                        u(!1);
                    }
                }
            },
            [v, t, n]
        ),
        I = i.useCallback(
            async (e) => {
                if (!v) {
                    p(!0);
                    try {
                        (await (0, s.Yw)(e.id, l.ne.INACTIVE), null == n || n());
                    } catch (n) {
                        let e = new r.Hx(n);
                        null == t || t(e);
                    } finally {
                        p(!1);
                    }
                }
            },
            [v, t, n]
        ),
        N = i.useCallback(
            async (e) => {
                if (!v) {
                    h(!0);
                    try {
                        (await (0, s.fc)(e.id), null == n || n());
                    } catch (n) {
                        let e = new r.Hx(n);
                        null == t || t(e);
                    } finally {
                        h(!1);
                    }
                }
            },
            [v, t, n]
        ),
        y = i.useCallback(async () => {
            if (!f) {
                b(!0);
                try {
                    (await (0, s.qd)(), null == n || n());
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
                if (!j) {
                    E(!0);
                    try {
                        (await s.ZP.fetchTeenActivity(e), null == n || n());
                    } catch (n) {
                        let e = new r.Hx(n);
                        null == t || t(e);
                    } finally {
                        E(!1);
                    }
                }
            },
            [j, t, n]
        );
    return {
        acceptLinkRequest: S,
        declineLinkRequest: T,
        disconnectLinkRequest: I,
        cancelLinkRequest: N,
        selectTeenUser: A,
        getLinkCode: y,
        requestLink: i.useCallback(
            async (e, i) => {
                if (!x) {
                    _(!0);
                    try {
                        (await s.ZP.requestLink(e, i), null == n || n());
                    } catch (n) {
                        let e = new r.Hx(n);
                        null == t || t(e);
                    } finally {
                        _(!1);
                    }
                }
            },
            [x, t, n]
        ),
        loadMore: i.useCallback(
            async (e) => {
                let n = a.Z.getActionsForDisplayType(e),
                    i = n[n.length - 1],
                    l = a.Z.getStartId(),
                    o = a.Z.getSelectedTeenId();
                if (!C && null != l && null != o) {
                    O(!0);
                    try {
                        await s.ZP.fetchMoreTeenActivity(o, e, l, i.event_id);
                    } catch (n) {
                        let e = new r.Hx(n);
                        null == t || t(e);
                    } finally {
                        O(!1);
                    }
                }
            },
            [C, t]
        ),
        isAcceptLoading: o,
        isDeclineLoading: d,
        isDisconnectLoading: m,
        isCancelLoading: g,
        isGetLinkCodeLoading: f,
        isSelectTeenUserLoading: j,
        isRequestingLink: x,
        isMoreLoading: C
    };
}
