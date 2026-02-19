"use strict";
n.d(t, { C: () => U });
var i = n(627968),
    s = n(64700),
    l = n(837381),
    r = n(311907),
    a = n(506774),
    o = n(397927),
    c = n(509963),
    d = n(704761),
    u = n(531260),
    h = n(793943),
    A = n(411976),
    p = n(912309),
    g = n(400492),
    m = n(728321),
    _ = n(309010),
    f = n(287809),
    x = n(816733),
    C = n(619921),
    E = n(194871),
    I = n(966846),
    b = n(674378),
    N = n(87941),
    S = n(941971),
    T = n(900848),
    v = n(550591),
    y = n(65611),
    j = n(652215),
    R = n(788868),
    O = n(235079),
    L = n(985018),
    M = n(623773);
let D = { origin: { x: -16, y: 0 }, targetWidth: 48, targetHeight: 48, offset: { x: 0, y: 0 } };
function G(e) {
    let { selected: t, user: n, badge: r, link: u, showProgressBadge: A } = e,
        [p, _] = s.useState(!1),
        [f, x] = s.useState(!1),
        [C, E] = s.useState(null),
        [I, b] = s.useState(0),
        N = (0, l.Vd)("home"),
        R = (0, h.fy)().activePanel === h.HP.APP_ICON,
        G = () => {
            E(null), b(0), clearTimeout(C);
        };
    if (null == n) return null;
    let U = L.intl.string(L.t.YUU0RF);
    f && (U = a.w.get(j.wqg) ? L.intl.string(L.t["nkq1l+"]) : L.intl.string(L.t.Be8Q5E));
    let P = null;
    !t && A && (P = (0, i.jsx)(c.A, { className: M.Cp, determineOwnVisibility: !1 }));
    let w = t || p || R,
        k = (0, i.jsx)(o.Qk9, {
            selected: !0,
            lowerBadge: r > 0 ? (0, y.wN)(r) : null,
            upperBadge: P,
            lowerBadgeSize: { width: (0, o.o6S)(r) },
            children: (0, i.jsx)(o.jlP, {
                onMouseEnter: () => _(!0),
                onMouseLeave: () => _(!1),
                onClick: () => {
                    if (!__OVERLAY__ && (null != C && clearTimeout(C), E(setTimeout(G, 500)), b(I + 1), 15 === I)) {
                        G();
                        let e = !a.w.get(j.wqg);
                        a.w.set(j.wqg, e),
                            e && a.w.set(O.L, !0),
                            e ? (0, g.Ak)("discodo") : (0, g.Ak)("user_leave"),
                            x(!0),
                            setTimeout(() => {
                                x(!1);
                            }, 1e3);
                    }
                },
                selected: w,
                ariaLabel: L.intl.string(L.t.YUU0RF),
                "aria-owns": "guild-list-unread-dms",
                "aria-selected": t,
                ...N,
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
        children: (0, i.jsx)(m.A, {
            inlineSpecs: D,
            tutorialId: "friends-list",
            position: "right",
            children: (0, i.jsxs)(T.c, {
                children: [
                    (0, i.jsx)(S.A, { selected: t, hovered: p, className: M.Io }),
                    (0, i.jsx)(v.A, { hideOnClick: !0, text: U, selected: t, children: k }),
                ],
            }),
        }),
    });
}
function U() {
    let e = (0, N.q)(),
        t = (0, r.bG)([I.A, E.A], () => {
            let e = (0, c.v)(I.A.activeItems, E.A),
                { total: t, progress: n } = b.zY(e),
                i = b.uA(n, t);
            return i > 0 && i < 100;
        }),
        n = (0, p.kX)(),
        s = Object.keys(R.TP),
        l = (0, u.A)(),
        { unviewedTrialCount: a, unviewedDiscountCount: o } = (0, r.cf)([x.A], () => ({
            unviewedTrialCount: x.A.getUnacknowledgedOffers(s).length,
            unviewedDiscountCount: x.A.getUnacknowledgedDiscountOffers().length,
        })),
        d = l.fractionalState === R.xc.NONE ? a + o : 0,
        h = (0, r.bG)([f.default], () => f.default.getCurrentUser()),
        g = (0, A.W)(),
        m = n + d + g,
        S = m === d && d > 0 && n + g === 0,
        T = C.A.getHomeLink();
    return (
        S && (T = j.BVt.APPLICATION_STORE),
        (0, i.jsx)(G, {
            selected: e,
            user: h,
            selectedChannelId: _.A.getChannelId(j.ME),
            badge: m,
            link: T,
            showProgressBadge: t,
        })
    );
}
