n.d(t, {
    G: function () {
        return o;
    }
}),
    n(47120);
var i = n(192379),
    r = n(881052),
    a = n(260722),
    s = n(914788),
    l = n(292352);
function o(e) {
    let { onError: t, onSuccess: n } = null != e ? e : {},
        [o, c] = i.useState(!1),
        [d, u] = i.useState(!1),
        [g, m] = i.useState(!1),
        [f, p] = i.useState(!1),
        [_, h] = i.useState(!1),
        [x, E] = i.useState(!1),
        [b, C] = i.useState(!1),
        [v, T] = i.useState(!1),
        N = o || d || g || f || x || v,
        I = i.useCallback(
            async (e) => {
                if (!N) {
                    c(!0);
                    try {
                        await (0, a.Yw)(e.id, l.ne.ACTIVE), null == n || n();
                    } catch (n) {
                        let e = new r.Hx(n);
                        null == t || t(e);
                    } finally {
                        c(!1);
                    }
                }
            },
            [N, t, n]
        ),
        S = i.useCallback(
            async (e) => {
                if (!N) {
                    u(!0);
                    try {
                        await (0, a.Yw)(e.id, l.ne.DECLINED), null == n || n();
                    } catch (n) {
                        let e = new r.Hx(n);
                        null == t || t(e);
                    } finally {
                        u(!1);
                    }
                }
            },
            [N, t, n]
        ),
        R = i.useCallback(
            async (e) => {
                if (!N) {
                    m(!0);
                    try {
                        await (0, a.Yw)(e.id, l.ne.INACTIVE), null == n || n();
                    } catch (n) {
                        let e = new r.Hx(n);
                        null == t || t(e);
                    } finally {
                        m(!1);
                    }
                }
            },
            [N, t, n]
        ),
        j = i.useCallback(
            async (e) => {
                if (!N) {
                    p(!0);
                    try {
                        await (0, a.fc)(e.id), null == n || n();
                    } catch (n) {
                        let e = new r.Hx(n);
                        null == t || t(e);
                    } finally {
                        p(!1);
                    }
                }
            },
            [N, t, n]
        ),
        A = i.useCallback(async () => {
            if (!_) {
                h(!0);
                try {
                    await (0, a.qd)(), null == n || n();
                } catch (n) {
                    let e = new r.Hx(n);
                    null == t || t(e);
                } finally {
                    h(!1);
                }
            }
        }, [_, t, n]),
        P = i.useCallback(
            async (e) => {
                if (!b) {
                    C(!0);
                    try {
                        await a.ZP.fetchTeenActivity(e), null == n || n();
                    } catch (n) {
                        let e = new r.Hx(n);
                        null == t || t(e);
                    } finally {
                        C(!1);
                    }
                }
            },
            [b, t, n]
        ),
        O = i.useCallback(
            async (e, i) => {
                if (!x) {
                    E(!0);
                    try {
                        await a.ZP.requestLink(e, i), null == n || n();
                    } catch (n) {
                        let e = new r.Hx(n);
                        null == t || t(e);
                    } finally {
                        E(!1);
                    }
                }
            },
            [x, t, n]
        );
    return {
        acceptLinkRequest: I,
        declineLinkRequest: S,
        disconnectLinkRequest: R,
        cancelLinkRequest: j,
        selectTeenUser: P,
        getLinkCode: A,
        requestLink: O,
        loadMore: i.useCallback(
            async (e) => {
                let n = s.Z.getActionsForDisplayType(e),
                    i = n[n.length - 1],
                    l = s.Z.getStartId(),
                    o = s.Z.getSelectedTeenId();
                if (!v && null != l && null != o) {
                    T(!0);
                    try {
                        await a.ZP.fetchMoreTeenActivity(o, e, l, i.event_id);
                    } catch (n) {
                        let e = new r.Hx(n);
                        null == t || t(e);
                    } finally {
                        T(!1);
                    }
                }
            },
            [v, t]
        ),
        isAcceptLoading: o,
        isDeclineLoading: d,
        isDisconnectLoading: g,
        isCancelLoading: f,
        isGetLinkCodeLoading: _,
        isSelectTeenUserLoading: b,
        isRequestingLink: x,
        isMoreLoading: v
    };
}
