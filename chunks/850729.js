n.d(t, { C: () => w });
var i = n(627968),
    l = n(64700),
    s = n(837381),
    a = n(311907),
    r = n(506774),
    o = n(862328),
    d = n(777666),
    c = n(67811),
    u = n(509963),
    h = n(704761),
    A = n(531260),
    _ = n(793943),
    m = n(411976),
    g = n(912309),
    p = n(400492),
    f = n(728321),
    E = n(309010),
    x = n(287809),
    I = n(816733),
    C = n(619921),
    b = n(194871),
    N = n(966846),
    S = n(674378),
    v = n(87941),
    T = n(941971),
    y = n(900848),
    R = n(550591),
    j = n(65611),
    L = n(652215),
    O = n(788868),
    G = n(235079),
    D = n(985018),
    M = n(30186);
let U = { origin: { x: -16, y: 0 }, targetWidth: 48, targetHeight: 48, offset: { x: 0, y: 0 } };
function P(e) {
    let { selected: t, user: n, badge: a, link: A, showProgressBadge: m } = e,
        [g, E] = l.useState(!1),
        [x, I] = l.useState(!1),
        [C, b] = l.useState(null),
        [N, S] = l.useState(0),
        v = (0, s.Vd)("home"),
        O = (0, _.fy)().activePanel === _.HP.APP_ICON,
        P = () => {
            b(null), S(0), clearTimeout(C);
        };
    if (null == n) return null;
    let w = D.intl.string(D.t.YUU0RF);
    x && (w = r.w.get(L.wqg) ? D.intl.string(D.t["nkq1l+"]) : D.intl.string(D.t.Be8Q5E));
    let k = null;
    !t && m && (k = (0, i.jsx)(u.A, { className: M.Cp, determineOwnVisibility: !1 }));
    let V = t || g || O,
        B = (0, i.jsx)(o.Q, {
            selected: !0,
            lowerBadge: a > 0 ? (0, j.wN)(a) : null,
            upperBadge: k,
            lowerBadgeSize: { width: (0, d.o6)(a) },
            children: (0, i.jsx)(c.j, {
                onMouseEnter: () => E(!0),
                onMouseLeave: () => E(!1),
                onClick: () => {
                    if (!__OVERLAY__ && (null != C && clearTimeout(C), b(setTimeout(P, 500)), S(N + 1), 15 === N)) {
                        P();
                        let e = !r.w.get(L.wqg);
                        r.w.set(L.wqg, e),
                            e && r.w.set(G.L, !0),
                            e ? (0, p.Ak)("discodo") : (0, p.Ak)("user_leave"),
                            I(!0),
                            setTimeout(() => {
                                I(!1);
                            }, 1e3);
                    }
                },
                selected: V,
                ariaLabel: D.intl.string(D.t.YUU0RF),
                "aria-owns": "guild-list-unread-dms",
                "aria-selected": t,
                ...v,
                to: {
                    pathname: A,
                    state: {
                        analyticsSource: {
                            page: L.liQ.GUILD_CHANNEL,
                            section: L.JJy.NAVIGATION,
                            object: L.ZSU.BUTTON_HOME,
                        },
                    },
                },
                children: (0, i.jsx)(h.A, {}),
            }),
        });
    return (0, i.jsx)("div", {
        className: M.Uq,
        children: (0, i.jsx)(f.A, {
            inlineSpecs: U,
            tutorialId: "friends-list",
            position: "right",
            children: (0, i.jsxs)(y.c, {
                children: [
                    (0, i.jsx)(T.A, { selected: t, hovered: g, className: M.Io }),
                    (0, i.jsx)(R.A, { hideOnClick: !0, text: w, selected: t, children: B }),
                ],
            }),
        }),
    });
}
function w() {
    let e = (0, v.q)(),
        t = (0, a.bG)([N.A, b.A], () => {
            let e = (0, u.v)(N.A.activeItems, b.A),
                { total: t, progress: n } = S.zY(e),
                i = S.uA(n, t);
            return i > 0 && i < 100;
        }),
        n = (0, g.kX)(),
        l = Object.keys(O.TP),
        s = (0, A.A)(),
        { unviewedTrialCount: r, unviewedDiscountCount: o } = (0, a.cf)([I.A], () => ({
            unviewedTrialCount: I.A.getUnacknowledgedOffers(l).length,
            unviewedDiscountCount: I.A.getUnacknowledgedDiscountOffers().length,
        })),
        d = s.fractionalState === O.xc.NONE ? r + o : 0,
        c = (0, a.bG)([x.default], () => x.default.getCurrentUser()),
        h = (0, m.W)(),
        _ = n + d + h,
        p = _ === d && d > 0 && n + h === 0,
        f = C.A.getHomeLink();
    return (
        p && (f = L.BVt.APPLICATION_STORE),
        (0, i.jsx)(P, {
            selected: e,
            user: c,
            selectedChannelId: E.A.getChannelId(L.ME),
            badge: _,
            link: f,
            showProgressBadge: t,
        })
    );
}
