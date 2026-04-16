n.d(t, { C: () => G });
var i = n(627968),
    l = n(64700),
    s = n(837381),
    a = n(311907),
    r = n(506774),
    o = n(397927),
    d = n(509963),
    c = n(704761),
    u = n(531260),
    h = n(793943),
    A = n(411976),
    _ = n(912309),
    m = n(400492),
    p = n(728321),
    g = n(309010),
    f = n(287809),
    E = n(816733),
    x = n(619921),
    I = n(194871),
    C = n(966846),
    N = n(674378),
    T = n(87941),
    S = n(941971),
    b = n(900848),
    y = n(550591),
    v = n(65611),
    R = n(652215),
    j = n(788868),
    O = n(235079),
    L = n(985018),
    M = n(30186);
let D = { origin: { x: -16, y: 0 }, targetWidth: 48, targetHeight: 48, offset: { x: 0, y: 0 } };
function U(e) {
    let { selected: t, user: n, badge: a, link: u, showProgressBadge: A } = e,
        [_, g] = l.useState(!1),
        [f, E] = l.useState(!1),
        [x, I] = l.useState(null),
        [C, N] = l.useState(0),
        T = (0, s.Vd)("home"),
        j = (0, h.fy)().activePanel === h.HP.APP_ICON,
        U = () => {
            I(null), N(0), clearTimeout(x);
        };
    if (null == n) return null;
    let G = L.intl.string(L.t.YUU0RF);
    f && (G = r.w.get(R.wqg) ? L.intl.string(L.t["nkq1l+"]) : L.intl.string(L.t.Be8Q5E));
    let P = null;
    !t && A && (P = (0, i.jsx)(d.A, { className: M.Cp, determineOwnVisibility: !1 }));
    let k = t || _ || j,
        w = (0, i.jsx)(o.Qk9, {
            selected: !0,
            lowerBadge: a > 0 ? (0, v.wN)(a) : null,
            upperBadge: P,
            lowerBadgeSize: { width: (0, o.o6S)(a) },
            children: (0, i.jsx)(o.jlP, {
                onMouseEnter: () => g(!0),
                onMouseLeave: () => g(!1),
                onClick: () => {
                    if (!__OVERLAY__ && (null != x && clearTimeout(x), I(setTimeout(U, 500)), N(C + 1), 15 === C)) {
                        U();
                        let e = !r.w.get(R.wqg);
                        r.w.set(R.wqg, e),
                            e && r.w.set(O.L, !0),
                            e ? (0, m.Ak)("discodo") : (0, m.Ak)("user_leave"),
                            E(!0),
                            setTimeout(() => {
                                E(!1);
                            }, 1e3);
                    }
                },
                selected: k,
                ariaLabel: L.intl.string(L.t.YUU0RF),
                "aria-owns": "guild-list-unread-dms",
                "aria-selected": t,
                ...T,
                to: {
                    pathname: u,
                    state: {
                        analyticsSource: {
                            page: R.liQ.GUILD_CHANNEL,
                            section: R.JJy.NAVIGATION,
                            object: R.ZSU.BUTTON_HOME,
                        },
                    },
                },
                children: (0, i.jsx)(c.A, {}),
            }),
        });
    return (0, i.jsx)("div", {
        className: M.Uq,
        children: (0, i.jsx)(p.A, {
            inlineSpecs: D,
            tutorialId: "friends-list",
            position: "right",
            children: (0, i.jsxs)(b.c, {
                children: [
                    (0, i.jsx)(S.A, { selected: t, hovered: _, className: M.Io }),
                    (0, i.jsx)(y.A, { hideOnClick: !0, text: G, selected: t, children: w }),
                ],
            }),
        }),
    });
}
function G() {
    let e = (0, T.q)(),
        t = (0, a.bG)([C.A, I.A], () => {
            let e = (0, d.v)(C.A.activeItems, I.A),
                { total: t, progress: n } = N.zY(e),
                i = N.uA(n, t);
            return i > 0 && i < 100;
        }),
        n = (0, _.kX)(),
        l = Object.keys(j.TP),
        s = (0, u.A)(),
        { unviewedTrialCount: r, unviewedDiscountCount: o } = (0, a.cf)([E.A], () => ({
            unviewedTrialCount: E.A.getUnacknowledgedOffers(l).length,
            unviewedDiscountCount: E.A.getUnacknowledgedDiscountOffers().length,
        })),
        c = s.fractionalState === j.xc.NONE ? r + o : 0,
        h = (0, a.bG)([f.default], () => f.default.getCurrentUser()),
        m = (0, A.W)(),
        p = n + c + m,
        S = p === c && c > 0 && n + m === 0,
        b = x.A.getHomeLink();
    return (
        S && (b = R.BVt.APPLICATION_STORE),
        (0, i.jsx)(U, {
            selected: e,
            user: h,
            selectedChannelId: g.A.getChannelId(R.ME),
            badge: p,
            link: b,
            showProgressBadge: t,
        })
    );
}
