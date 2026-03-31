n.d(t, { C: () => G });
var i = n(627968),
    l = n(64700),
    s = n(837381),
    a = n(311907),
    r = n(506774),
    o = n(397927),
    c = n(509963),
    d = n(704761),
    u = n(531260),
    h = n(793943),
    A = n(411976),
    _ = n(912309),
    m = n(400492),
    g = n(728321),
    p = n(309010),
    f = n(287809),
    x = n(816733),
    E = n(619921),
    I = n(194871),
    C = n(966846),
    N = n(674378),
    T = n(87941),
    S = n(941971),
    b = n(900848),
    y = n(550591),
    v = n(65611),
    j = n(652215),
    R = n(788868),
    O = n(235079),
    L = n(985018),
    M = n(146842);
let D = { origin: { x: -16, y: 0 }, targetWidth: 48, targetHeight: 48, offset: { x: 0, y: 0 } };
function U(e) {
    let { selected: t, user: n, badge: a, link: u, showProgressBadge: A } = e,
        [_, p] = l.useState(!1),
        [f, x] = l.useState(!1),
        [E, I] = l.useState(null),
        [C, N] = l.useState(0),
        T = (0, s.Vd)("home"),
        R = (0, h.fy)().activePanel === h.HP.APP_ICON,
        U = () => {
            I(null), N(0), clearTimeout(E);
        };
    if (null == n) return null;
    let G = L.intl.string(L.t.YUU0RF);
    f && (G = r.w.get(j.wqg) ? L.intl.string(L.t["nkq1l+"]) : L.intl.string(L.t.Be8Q5E));
    let P = null;
    !t && A && (P = (0, i.jsx)(c.A, { className: M.Cp, determineOwnVisibility: !1 }));
    let k = t || _ || R,
        w = (0, i.jsx)(o.Qk9, {
            selected: !0,
            lowerBadge: a > 0 ? (0, v.wN)(a) : null,
            upperBadge: P,
            lowerBadgeSize: { width: (0, o.o6S)(a) },
            children: (0, i.jsx)(o.jlP, {
                onMouseEnter: () => p(!0),
                onMouseLeave: () => p(!1),
                onClick: () => {
                    if (!__OVERLAY__ && (null != E && clearTimeout(E), I(setTimeout(U, 500)), N(C + 1), 15 === C)) {
                        U();
                        let e = !r.w.get(j.wqg);
                        r.w.set(j.wqg, e),
                            e && r.w.set(O.L, !0),
                            e ? (0, m.Ak)("discodo") : (0, m.Ak)("user_leave"),
                            x(!0),
                            setTimeout(() => {
                                x(!1);
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
                            page: j.liQ.GUILD_CHANNEL,
                            section: j.JJy.NAVIGATION,
                            object: j.ZSU.BUTTON_HOME,
                        },
                    },
                },
                children: (0, i.jsx)(d.A, {}),
            }),
        });
    return (0, i.jsx)("div", {
        className: M.Uq,
        children: (0, i.jsx)(g.A, {
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
            let e = (0, c.v)(C.A.activeItems, I.A),
                { total: t, progress: n } = N.zY(e),
                i = N.uA(n, t);
            return i > 0 && i < 100;
        }),
        n = (0, _.kX)(),
        l = Object.keys(R.TP),
        s = (0, u.A)(),
        { unviewedTrialCount: r, unviewedDiscountCount: o } = (0, a.cf)([x.A], () => ({
            unviewedTrialCount: x.A.getUnacknowledgedOffers(l).length,
            unviewedDiscountCount: x.A.getUnacknowledgedDiscountOffers().length,
        })),
        d = s.fractionalState === R.xc.NONE ? r + o : 0,
        h = (0, a.bG)([f.default], () => f.default.getCurrentUser()),
        m = (0, A.W)(),
        g = n + d + m,
        S = g === d && d > 0 && n + m === 0,
        b = E.A.getHomeLink();
    return (
        S && (b = j.BVt.APPLICATION_STORE),
        (0, i.jsx)(U, {
            selected: e,
            user: h,
            selectedChannelId: p.A.getChannelId(j.ME),
            badge: g,
            link: b,
            showProgressBadge: t,
        })
    );
}
