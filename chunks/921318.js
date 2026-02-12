n.d(t, { A: () => j }), n(321073);
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(997101),
    o = n(311907),
    d = n(435371),
    c = n(397927),
    u = n(384904),
    A = n(308528),
    h = n(770178),
    _ = n(36149),
    m = n(793574),
    p = n(58149),
    g = n(176031),
    E = n(21119),
    I = n(854627),
    f = n(734057),
    C = n(153488),
    N = n(290863),
    T = n(994500),
    S = n(741961),
    x = n(287809),
    v = n(615405),
    y = n(403362),
    b = n(344917),
    L = n(652215),
    O = n(985018),
    R = n(68e4);
function P(e) {
    let { user: t, index: n, isCompetitive: r } = e,
        { status: l, isMobile: a } = (0, o.cf)([N.A], () => ({
            status: N.A.getStatus(t.id),
            isMobile: N.A.isMobileOnline(t.id),
        })),
        s = (0, o.bG)([S.A, f.A], () => {
            let e = f.A.getDMFromUserId(t.id);
            return null != e && S.A.isTyping(e, t.id);
        }, [t]),
        { avatarSrc: d, eventHandlers: u } = (0, I.A)({ userId: t.id, size: c._3J.SIZE_32, animateOnHover: !0 }),
        h = async () => {
            await A.A.openPrivateChannel({ recipientIds: [t.id], location: m.A.FREQUENT_FRIENDS_ROW });
            let e = f.A.getDMFromUserId(t.id);
            null != e &&
                (0, p.zV)(L.HAw.CHANNEL_OPENED, { ...(0, p.qL)(e), location: `${m.A.FREQUENT_FRIENDS_ROW} ${n + 1}` });
        },
        _ = 0 === n,
        g = _ ? c.Y3C : r ? c.Y5K : void 0,
        E = _ ? O.intl.string(O.t.aI4VOL) : r ? O.intl.string(O.t.kABl2x) : void 0;
    return (0, i.jsx)(c.DUT, {
        className: R.it,
        onClick: h,
        onMouseEnter: u.onMouseEnter,
        onMouseLeave: u.onMouseLeave,
        "aria-label": O.intl.formatToPlainString(O.t.M5FjCr, { username: t.username }),
        children: (0, i.jsx)(c.euF, {
            src: d,
            "aria-label": t.globalName ?? t.username,
            status: l,
            isTyping: s,
            isMobile: a && !s,
            size: c._3J.SIZE_32,
            CutoutIcon: g,
            avatarTooltipAsset: _ ? "\uD83D\uDD25" : r ? "❄️" : void 0,
            avatarTooltipText: E,
            statusTooltip: !0,
            statusTooltipDelay: 50,
            avatarTooltipTitle: t.globalName ?? t.username,
        }),
    });
}
function j() {
    let e,
        t,
        n,
        { enabled: l } = (0, b.M)("frequent_friends_row"),
        A =
            ((e = (0, o.yK)([E.A], () =>
                [...E.A.getUserAffinities()].sort((e, t) => E.A.compare(e.otherUserId, t.otherUserId)),
            )),
            (t = (0, o.yK)([x.default, T.A], () => {
                let t = e.map((e) => e.otherUserId),
                    n = [];
                for (let e of t)
                    if (n.length < 5) {
                        let t = x.default.getUser(e);
                        !(0, y.Vq)(t) || T.A.isIgnored(t.id) || T.A.isBlocked(t.id) || n.push(t);
                    } else break;
                return n;
            }, [e])),
            (n = r.useMemo(() => {
                if (t.length < 5) return !1;
                let n = e.findIndex((e) => e.otherUserId === t[4].id);
                return !!(
                    n < e.length - 1 && e[n]?.communicationProbability - 0.25 <= e[n + 1]?.communicationProbability
                );
            }, [e, t])),
            t.length < 3 ? null : { frequentFriends: t, showCompetitiveSpot: n }),
        m = (0, o.bG)([C.A], () => C.A.hasConsented(L.YAq.PERSONALIZATION)),
        p = (0, o.bG)([x.default], () => x.default.getCurrentUser()?.nsfwAllowed ?? !1),
        [I, f] = r.useState({ scrollLeft: 0, scrollWidth: 0, clientWidth: 0 }),
        N = r.useRef(null),
        S = (0, o.bG)([v.A], () => v.A.ipCountryCode),
        j = (0, _.uE)(),
        D = r.useCallback(() => {
            let e = N.current?.getScrollerNode();
            null != e && f({ scrollLeft: e.scrollLeft, scrollWidth: e.scrollWidth, clientWidth: e.clientWidth });
        }, []);
    r.useEffect(() => {
        A?.frequentFriends.length != null && D();
    }, [A?.frequentFriends.length, A?.showCompetitiveSpot, D]);
    let w = (0, h.w)(D, []),
        M = r.useCallback(
            (e) => {
                let t = e.currentTarget;
                f({ scrollLeft: t.scrollLeft, scrollWidth: t.scrollWidth, clientWidth: t.clientWidth });
            },
            [f],
        );
    if (
        (r.useEffect(() => {
            (0, u.xe)();
        }, []),
        !l || null == A || !m)
    )
        return null;
    let { frequentFriends: U, showCompetitiveSpot: G } = A,
        k = (S === s.d.AU || S === s.d.GB) && !j,
        V = null != S && s.M.EU_COUNTRIES.has(S) && !p,
        B = !k && !V && null != S && G,
        H = I.scrollWidth > I.clientWidth,
        F = I.scrollLeft > 0,
        Y = I.scrollLeft < I.scrollWidth - I.clientWidth - 2;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: R.mk,
                children: [
                    (0, i.jsxs)("div", {
                        className: R.$r,
                        children: [
                            (0, i.jsx)(c.Text, {
                                variant: "text-sm/semibold",
                                className: R.Uq,
                                children: O.intl.string(O.t.QEh90H),
                            }),
                            (0, i.jsx)(d.m_, {
                                text: O.intl.string(O.t.tqCMcU),
                                children: (0, i.jsx)(c.mir, { className: R.BK }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(c.zCo, {
                        ref: (e) => {
                            (N.current = e), (w.current = e?.getScrollerNode() != null ? e.getScrollerNode() : null);
                        },
                        className: a()(R.i9, { [R.BI]: H && F, [R.E2]: H && Y }),
                        orientation: "horizontal",
                        onScroll: M,
                        children: U.map((e, t) =>
                            (0, i.jsx)(P, { user: e, index: t, isCompetitive: B && t === U.length - 1 }, e.id),
                        ),
                    }),
                ],
            }),
            (0, i.jsx)(g.n, {}),
        ],
    });
}
