n.d(t, { A: () => L }), n(896048), n(638769), n(321073);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(997101),
    o = n(311907),
    c = n(435371),
    u = n(397927),
    d = n(384904),
    p = n(308528),
    f = n(770178),
    h = n(36149),
    A = n(793574),
    g = n(58149),
    m = n(176031),
    b = n(21119),
    _ = n(854627),
    E = n(734057),
    O = n(153488),
    y = n(290863),
    I = n(994500),
    v = n(741961),
    S = n(287809),
    C = n(615405),
    N = n(403362),
    T = n(344917),
    j = n(652215),
    x = n(985018),
    P = n(680000);
function w(e) {
    var t, n;
    let { user: i, index: l, isCompetitive: a } = e,
        { status: s, isMobile: c } = (0, o.cf)([y.A], () => ({
            status: y.A.getStatus(i.id),
            isMobile: y.A.isMobileOnline(i.id),
        })),
        d = (0, o.bG)([v.A, E.A], () => {
            let e = E.A.getDMFromUserId(i.id);
            return null != e && v.A.isTyping(e, i.id);
        }, [i]),
        { avatarSrc: f, eventHandlers: h } = (0, _.A)({
            userId: i.id,
            size: u._3J.SIZE_32,
            animateOnHover: !0,
        }),
        m = async () => {
            var e, t;
            await p.A.openPrivateChannel({
                recipientIds: [i.id],
                location: A.A.FREQUENT_FRIENDS_ROW,
            });
            let n = E.A.getDMFromUserId(i.id);
            null != n &&
                (0, g.zV)(
                    j.HAw.CHANNEL_OPENED,
                    ((e = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({}, (0, g.qL)(n))),
                    (t = t = { location: "".concat(A.A.FREQUENT_FRIENDS_ROW, " ").concat(l + 1) }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(t)).forEach(function (n) {
                              Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                          }),
                    e),
                );
        },
        b = 0 === l,
        O = b ? u.Y3C : a ? u.Y5K : void 0,
        I = b ? x.intl.string(x.t.aI4VOL) : a ? x.intl.string(x.t.kABl2x) : void 0;
    return (0, r.jsx)(u.DUT, {
        className: P.it,
        onClick: m,
        onMouseEnter: h.onMouseEnter,
        onMouseLeave: h.onMouseLeave,
        "aria-label": x.intl.formatToPlainString(x.t.M5FjCr, { username: i.username }),
        children: (0, r.jsx)(u.euF, {
            src: f,
            "aria-label": null != (t = i.globalName) ? t : i.username,
            status: s,
            isTyping: d,
            isMobile: c && !d,
            size: u._3J.SIZE_32,
            CutoutIcon: O,
            avatarTooltipAsset: b ? "\uD83D\uDD25" : a ? "\u2744️" : void 0,
            avatarTooltipText: I,
            statusTooltip: !0,
            statusTooltipDelay: 50,
            avatarTooltipTitle: null != (n = i.globalName) ? n : i.username,
        }),
    });
}
function L() {
    let e,
        t,
        n,
        { enabled: l } = (0, T.M)("frequent_friends_row"),
        p =
            ((e = (0, o.yK)([b.A], () =>
                [...b.A.getUserAffinities()].sort((e, t) => b.A.compare(e.otherUserId, t.otherUserId)),
            )),
            (t = (0, o.yK)([S.default, I.A], () => {
                let t = e.map((e) => e.otherUserId),
                    n = [];
                for (let e of t)
                    if (n.length < 5) {
                        let t = S.default.getUser(e);
                        !(0, N.Vq)(t) || I.A.isIgnored(t.id) || I.A.isBlocked(t.id) || n.push(t);
                    } else break;
                return n;
            }, [e])),
            (n = i.useMemo(() => {
                var n, r;
                if (t.length < 5) return !1;
                let i = e.findIndex((e) => e.otherUserId === t[4].id);
                return (
                    !!(i < e.length - 1) &&
                    !!(
                        (null == (n = e[i]) ? void 0 : n.communicationProbability) - 0.25 <=
                        (null == (r = e[i + 1]) ? void 0 : r.communicationProbability)
                    )
                );
            }, [e, t])),
            t.length < 3
                ? null
                : {
                      frequentFriends: t,
                      showCompetitiveSpot: n,
                  }),
        A = (0, o.bG)([O.A], () => O.A.hasConsented(j.YAq.PERSONALIZATION)),
        g = (0, o.bG)([S.default], () => {
            var e, t;
            return null != (e = null == (t = S.default.getCurrentUser()) ? void 0 : t.nsfwAllowed) && e;
        }),
        [_, E] = i.useState({
            scrollLeft: 0,
            scrollWidth: 0,
            clientWidth: 0,
        }),
        y = i.useRef(null),
        v = (0, o.bG)([C.A], () => C.A.ipCountryCode),
        L = (0, h.uE)(),
        R = i.useCallback(() => {
            var e;
            let t = null == (e = y.current) ? void 0 : e.getScrollerNode();
            null != t &&
                E({
                    scrollLeft: t.scrollLeft,
                    scrollWidth: t.scrollWidth,
                    clientWidth: t.clientWidth,
                });
        }, []);
    i.useEffect(() => {
        (null == p ? void 0 : p.frequentFriends.length) != null && R();
    }, [null == p ? void 0 : p.frequentFriends.length, null == p ? void 0 : p.showCompetitiveSpot, R]);
    let D = (0, f.w)(R, []),
        M = i.useCallback(
            (e) => {
                let t = e.currentTarget;
                E({
                    scrollLeft: t.scrollLeft,
                    scrollWidth: t.scrollWidth,
                    clientWidth: t.clientWidth,
                });
            },
            [E],
        );
    if (
        (i.useEffect(() => {
            (0, d.xe)();
        }, []),
        !l || null == p || !A)
    )
        return null;
    let { frequentFriends: k, showCompetitiveSpot: U } = p,
        G = (v === s.d.AU || v === s.d.GB) && !L,
        V = null != v && s.M.EU_COUNTRIES.has(v) && !g,
        B = !G && !V && null != v && U,
        H = _.scrollWidth > _.clientWidth,
        F = _.scrollLeft > 0,
        Y = _.scrollLeft < _.scrollWidth - _.clientWidth - 2;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: P.mk,
                children: [
                    (0, r.jsxs)("div", {
                        className: P.$r,
                        children: [
                            (0, r.jsx)(u.Text, {
                                variant: "text-sm/semibold",
                                className: P.Uq,
                                children: x.intl.string(x.t.QEh90H),
                            }),
                            (0, r.jsx)(c.m_, {
                                text: x.intl.string(x.t.tqCMcU),
                                children: (0, r.jsx)(u.mir, { className: P.BK }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(u.zCo, {
                        ref: (e) => {
                            (y.current = e),
                                (D.current =
                                    (null == e ? void 0 : e.getScrollerNode()) != null ? e.getScrollerNode() : null);
                        },
                        className: a()(P.i9, {
                            [P.BI]: H && F,
                            [P.E2]: H && Y,
                        }),
                        orientation: "horizontal",
                        onScroll: M,
                        children: k.map((e, t) =>
                            (0, r.jsx)(
                                w,
                                {
                                    user: e,
                                    index: t,
                                    isCompetitive: B && t === k.length - 1,
                                },
                                e.id,
                            ),
                        ),
                    }),
                ],
            }),
            (0, r.jsx)(m.n, {}),
        ],
    });
}
