n.d(t, { C: () => U });
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
    g = n(912309),
    m = n(400492),
    p = n(728321),
    _ = n(309010),
    x = n(287809),
    f = n(816733),
    E = n(619921),
    C = n(194871),
    I = n(966846),
    S = n(674378),
    b = n(87941),
    N = n(941971),
    T = n(900848),
    j = n(550591),
    v = n(65611),
    y = n(652215),
    R = n(788868),
    O = n(235079),
    L = n(985018),
    D = n(623773);
let M = { origin: { x: -16, y: 0 }, targetWidth: 48, targetHeight: 48, offset: { x: 0, y: 0 } };
function G(e) {
    let { selected: t, user: n, badge: a, link: u, showProgressBadge: A } = e,
        [g, _] = l.useState(!1),
        [x, f] = l.useState(!1),
        [E, C] = l.useState(null),
        [I, S] = l.useState(0),
        b = (0, s.Vd)("home"),
        R = (0, h.fy)().activePanel === h.HP.APP_ICON,
        G = () => {
            C(null), S(0), clearTimeout(E);
        };
    if (null == n) return null;
    let U = L.intl.string(L.t.YUU0RF);
    x && (U = r.w.get(y.wqg) ? L.intl.string(L.t["nkq1l+"]) : L.intl.string(L.t.Be8Q5E));
    let P = null;
    !t && A && (P = (0, i.jsx)(d.A, { className: D.Cp, determineOwnVisibility: !1 }));
    let k = t || g || R,
        w = (0, i.jsx)(o.Qk9, {
            selected: !0,
            lowerBadge: a > 0 ? (0, v.wN)(a) : null,
            upperBadge: P,
            lowerBadgeSize: { width: (0, o.o6S)(a) },
            children: (0, i.jsx)(o.jlP, {
                onMouseEnter: () => _(!0),
                onMouseLeave: () => _(!1),
                onClick: () => {
                    if (!__OVERLAY__ && (null != E && clearTimeout(E), C(setTimeout(G, 500)), S(I + 1), 15 === I)) {
                        G();
                        let e = !r.w.get(y.wqg);
                        r.w.set(y.wqg, e),
                            e && r.w.set(O.L, !0),
                            e ? (0, m.Ak)("discodo") : (0, m.Ak)("user_leave"),
                            f(!0),
                            setTimeout(() => {
                                f(!1);
                            }, 1e3);
                    }
                },
                selected: k,
                ariaLabel: L.intl.string(L.t.YUU0RF),
                "aria-owns": "guild-list-unread-dms",
                "aria-selected": t,
                ...b,
                to: {
                    pathname: u,
                    state: {
                        analyticsSource: {
                            page: y.liQ.GUILD_CHANNEL,
                            section: y.JJy.NAVIGATION,
                            object: y.ZSU.BUTTON_HOME,
                        },
                    },
                },
                children: (0, i.jsx)(c.A, {}),
            }),
        });
    return (0, i.jsx)("div", {
        className: D.Uq,
        children: (0, i.jsx)(p.A, {
            inlineSpecs: M,
            tutorialId: "friends-list",
            position: "right",
            children: (0, i.jsxs)(T.c, {
                children: [
                    (0, i.jsx)(N.A, { selected: t, hovered: g, className: D.Io }),
                    (0, i.jsx)(j.A, { hideOnClick: !0, text: U, selected: t, children: w }),
                ],
            }),
        }),
    });
}
function U() {
    let e = (0, b.q)(),
        t = (0, a.bG)([I.A, C.A], () => {
            let e = (0, d.v)(I.A.activeItems, C.A),
                { total: t, progress: n } = S.zY(e),
                i = S.uA(n, t);
            return i > 0 && i < 100;
        }),
        n = (0, g.kX)(),
        l = Object.keys(R.TP),
        s = (0, u.A)(),
        { unviewedTrialCount: r, unviewedDiscountCount: o } = (0, a.cf)([f.A], () => ({
            unviewedTrialCount: f.A.getUnacknowledgedOffers(l).length,
            unviewedDiscountCount: f.A.getUnacknowledgedDiscountOffers().length,
        })),
        c = s.fractionalState === R.xc.NONE ? r + o : 0,
        h = (0, a.bG)([x.default], () => x.default.getCurrentUser()),
        m = (0, A.W)(),
        p = n + c + m,
        N = p === c && c > 0 && n + m === 0,
        T = E.A.getHomeLink();
    return (
        N && (T = y.BVt.APPLICATION_STORE),
        (0, i.jsx)(G, {
            selected: e,
            user: h,
            selectedChannelId: _.A.getChannelId(y.ME),
            badge: p,
            link: T,
            showProgressBadge: t,
        })
    );
}
