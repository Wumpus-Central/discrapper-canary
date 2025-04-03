n.d(t, { G: () => o }), n(47120);
var r = n(192379),
    i = n(881052),
    s = n(260722),
    a = n(914788),
    l = n(292352);
function o(e) {
    let { onError: t, onSuccess: n } = null != e ? e : {},
        [o, c] = r.useState(!1),
        [d, u] = r.useState(!1),
        [m, g] = r.useState(!1),
        [p, h] = r.useState(!1),
        [f, b] = r.useState(!1),
        [N, x] = r.useState(!1),
        [_, E] = r.useState(!1),
        [j, O] = r.useState(!1),
        C = o || d || m || p || N || j,
        S = r.useCallback(
            async (e) => {
                if (!C) {
                    c(!0);
                    try {
                        await (0, s.Yw)(e.id, l.ne.ACTIVE), null == n || n();
                    } catch (n) {
                        let e = new i.Hx(n);
                        null == t || t(e);
                    } finally {
                        c(!1);
                    }
                }
            },
            [C, t, n]
        ),
        v = r.useCallback(
            async (e) => {
                if (!C) {
                    u(!0);
                    try {
                        await (0, s.Yw)(e.id, l.ne.DECLINED), null == n || n();
                    } catch (n) {
                        let e = new i.Hx(n);
                        null == t || t(e);
                    } finally {
                        u(!1);
                    }
                }
            },
            [C, t, n]
        ),
        T = r.useCallback(
            async (e) => {
                if (!C) {
                    g(!0);
                    try {
                        await (0, s.Yw)(e.id, l.ne.INACTIVE), null == n || n();
                    } catch (n) {
                        let e = new i.Hx(n);
                        null == t || t(e);
                    } finally {
                        g(!1);
                    }
                }
            },
            [C, t, n]
        ),
        I = r.useCallback(
            async (e) => {
                if (!C) {
                    h(!0);
                    try {
                        await (0, s.fc)(e.id), null == n || n();
                    } catch (n) {
                        let e = new i.Hx(n);
                        null == t || t(e);
                    } finally {
                        h(!1);
                    }
                }
            },
            [C, t, n]
        ),
        y = r.useCallback(async () => {
            if (!f) {
                b(!0);
                try {
                    await (0, s.qd)(), null == n || n();
                } catch (n) {
                    let e = new i.Hx(n);
                    null == t || t(e);
                } finally {
                    b(!1);
                }
            }
        }, [f, t, n]),
        A = r.useCallback(
            async (e) => {
                if (!_) {
                    E(!0);
                    try {
                        await s.ZP.fetchTeenActivity(e), null == n || n();
                    } catch (n) {
                        let e = new i.Hx(n);
                        null == t || t(e);
                    } finally {
                        E(!1);
                    }
                }
            },
            [_, t, n]
        );
    return {
        acceptLinkRequest: S,
        declineLinkRequest: v,
        disconnectLinkRequest: T,
        cancelLinkRequest: I,
        selectTeenUser: A,
        getLinkCode: y,
        requestLink: r.useCallback(
            async (e, r) => {
                if (!N) {
                    x(!0);
                    try {
                        await s.ZP.requestLink(e, r), null == n || n();
                    } catch (n) {
                        let e = new i.Hx(n);
                        null == t || t(e);
                    } finally {
                        x(!1);
                    }
                }
            },
            [N, t, n]
        ),
        loadMore: r.useCallback(
            async (e) => {
                let n = a.Z.getActionsForDisplayType(e),
                    r = n[n.length - 1],
                    l = a.Z.getStartId(),
                    o = a.Z.getSelectedTeenId();
                if (!j && null != l && null != o) {
                    O(!0);
                    try {
                        await s.ZP.fetchMoreTeenActivity(o, e, l, r.event_id);
                    } catch (n) {
                        let e = new i.Hx(n);
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
        isCancelLoading: p,
        isGetLinkCodeLoading: f,
        isSelectTeenUserLoading: _,
        isRequestingLink: N,
        isMoreLoading: j
    };
}
