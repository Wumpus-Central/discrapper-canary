l.d(t, { A: () => tQ });
var n,
    i = l(477900),
    C = l(582128),
    s = l(503698),
    a = l.n(s),
    r = l(812729),
    o = l.n(r),
    d = l(164636),
    c = l(192308),
    u = l(866323),
    m = l(683071),
    h = l(775602),
    f = l(688810);
l(938796);
var g = l(158390),
    H = l(665260),
    x = l(451988),
    p = l(73153),
    j = l(778858),
    v = l(225123),
    V = l(963852),
    b = l(46653),
    M = l(696451),
    A = l(287809),
    L = l(340837);
let D = new Map(),
    E = new Map(),
    R = new Map(),
    I = new Map(),
    S = new Map(),
    N = new Map(),
    y = new Map(),
    Z = null,
    _ = 1 / 0,
    w = 0;
function T(e) {
    return null != e && !(0, H.Lt)(e.flags ?? 0, L.D.IS_GUEST);
}
function U(e, t) {
    return I.get(e)?.get(t);
}
function O(e, t, l) {
    let n = I.get(e);
    n?.get(t) === l && (n.delete(t), 0 === n.size && I.delete(e));
}
function k(e, t) {
    let l = E.get(e);
    (null == l && ((l = new Set()), E.set(e, l)), l.add(t));
}
function F(e, t) {
    let l = S.get(e);
    null != l && (l.delete(t), 0 === l.size && S.delete(e));
}
function G() {
    Y.delay(!1);
}
function B(e) {
    (N.get(e)?.cancel(), N.delete(e));
}
function P(e) {
    if (null != Z) {
        if (_ <= e) return;
        clearTimeout(Z);
    }
    ((_ = e), (Z = setTimeout(z, Math.max(0, e - Date.now()))));
}
function q() {
    (null != Z && clearTimeout(Z), (Z = null), (_ = 1 / 0));
}
function z() {
    ((Z = null), (_ = 1 / 0));
    let e = Date.now(),
        t = 1 / 0,
        l = !1;
    for (let [n, i] of y) {
        for (let [C, s] of i) {
            if (s > e) {
                t = Math.min(t, s);
                continue;
            }
            (i.delete(C), null == U(n, C) && (k(n, C), (l = !0)));
        }
        0 === i.size && y.delete(n);
    }
    (1 / 0 !== t && P(t), l && G());
}
let Y = new x.J_(500, () => {
    var e;
    if (
        ((e = Date.now()),
        D.forEach((t, l) => {
            (t.forEach((l, n) => {
                e - l >= 3e5 && t.delete(n);
            }),
                0 === t.size && D.delete(l));
        }),
        v.A.isConnected())
    )
        for (let [e, t] of E) {
            if (N.get(e)?.pending === !0) continue;
            E.delete(e);
            let l = Array.from(t);
            for (let t = 0; t < l.length; t += 100)
                !(function (e, t) {
                    let l = new Map();
                    for (let n of t) {
                        let t = M.Ay.getTrueMember(e, n);
                        T(t) ? l.set(n, t) : F(e, n);
                    }
                    if (0 === l.size) return;
                    let n = ((w += 1), `gmv:${Date.now().toString(36)}:${w.toString(36)}`),
                        i = I.get(e);
                    for (let t of (null == i && ((i = new Map()), I.set(e, i)), l.keys())) i.set(t, n);
                    let C = setTimeout(
                        () =>
                            (function (e) {
                                let t = R.get(e);
                                if (null == t) return;
                                R.delete(e);
                                let { guildId: l } = t,
                                    n = S.get(l);
                                null == n && ((n = new Map()), S.set(l, n));
                                let i = !1;
                                for (let C of t.members.keys()) {
                                    O(l, C, e);
                                    let t = (n.get(C) ?? 0) + 1;
                                    t < 3 ? (n.set(C, t), k(l, C), (i = !0)) : n.delete(C);
                                }
                                if ((0 === n.size && S.delete(l), i)) {
                                    let e;
                                    (null == (e = N.get(l)) && ((e = new g.A(1e3, 6e4)), N.set(l, e)), e.fail(G));
                                } else (B(l), E.has(l) && G());
                            })(n),
                        3e4,
                    );
                    (R.set(n, { guildId: e, members: l, timeout: C }),
                        j.A.requestMembersByIdWithNonce(e, Array.from(l.keys()), n));
                })(e, l.slice(t, t + 100));
        }
});
function K() {
    for (let { timeout: e } of R.values()) clearTimeout(e);
    (R.clear(), I.clear());
}
function $() {
    for (let e of N.values()) e.cancel();
    N.clear();
}
(p.h.subscribe("GUILD_MEMBERS_CHUNK_BATCH", (e) => {
    let { chunks: t } = e;
    for (let e of t) {
        if (null == e.nonce) continue;
        let t = e.nonce,
            l = R.get(t);
        if (null == l || l.guildId !== e.guildId) continue;
        (clearTimeout(l.timeout), R.delete(t), B(e.guildId), E.has(e.guildId) && G());
        let n = new Set(e.members.map((e) => e.user.id)),
            i = new Set(e.notFound ?? []),
            C = Date.now();
        l.members.forEach((l, s) => {
            if ((O(e.guildId, s, t), F(e.guildId, s), n.has(s))) {
                let t = D.get(e.guildId);
                (null == t && ((t = new Map()), D.set(e.guildId, t)), t.set(s, C));
            } else {
                var a;
                i.has(s) &&
                    ((a = M.Ay.getTrueMember(e.guildId, s)) === l ||
                        (null != a && (a.joinedAt ?? null) === (l.joinedAt ?? null))) &&
                    (function (e, t) {
                        let l = A.default.getUser(t);
                        null != l
                            ? p.h.dispatch({ type: "GUILD_MEMBER_REMOVE", guildId: e, user: (0, V.Vi)(l) })
                            : p.h.dispatch({ type: "GUILD_MEMBER_REMOVE_LOCAL", guildId: e, userId: t });
                    })(e.guildId, s);
            }
        });
    }
}),
    p.h.subscribe("GUILD_DELETE", (e) => {
        let { guild: t } = e;
        var l = t.id;
        for (let [e, t] of (D.delete(l), E.delete(l), S.delete(l), y.delete(l), B(l), R))
            t.guildId === l && (clearTimeout(t.timeout), R.delete(e));
        I.delete(l);
    }),
    p.h.subscribe("CONNECTION_OPEN", function () {
        for (let e of R.values()) for (let t of e.members.keys()) k(e.guildId, t);
        for (let [e, t] of (K(), $(), S.clear(), D.clear(), y)) for (let l of t.keys()) k(e, l);
        (y.clear(), q(), E.size > 0 && G());
    }),
    p.h.subscribe("CONNECTION_RESUMED", function () {
        E.size > 0 && G();
    }),
    p.h.subscribe("LOGOUT", function () {
        (D.clear(), E.clear(), S.clear(), y.clear(), q(), K(), $(), Y.cancel());
    }));
var W = l(996439),
    Q = l(218394),
    X = l(879408),
    J = l(504049),
    ee = l(406318),
    et = l(221950),
    el = l(361610),
    en = l(834730),
    ei = l(189552),
    eC = l(636670),
    es = l(792996),
    ea = l(602083);
function er(e) {
    let { searchState: t } = e,
        l = C.useMemo(
            () => ({
                [ei.IY.LOADING]: null,
                [ei.IY.SUCCESS_STILL_INDEXING]: { icon: null, message: es.intl.string(es.t.AXPbZr) },
                [ei.IY.SUCCESS_EMPTY]: { icon: (0, i.jsx)(eC.A, {}), message: es.intl.string(es.t.wdyR52) },
                [ei.IY.SUCCESS_FULL]: null,
            }),
            [],
        )[t];
    return null == l
        ? null
        : (0, i.jsxs)("div", {
              className: ea.p,
              children: [
                  null != l.icon &&
                      (0, i.jsx)("div", { className: ea.__invalid_noResultsIconContainer, children: l.icon }),
                  (0, i.jsx)(en.E, { variant: "body-md/normal", color: "text-muted", children: l.message }),
              ],
          });
}
var eo = l(811315),
    ed = l.n(eo),
    ec = l(939249),
    eu = l(783977),
    em = l(646514),
    eh = l(866665),
    ef = l(658675),
    eg = l(265872),
    eH = l(71393),
    ex = l(576705),
    ep = l(70738),
    ej = l(587426),
    ev = l(134413),
    eV = l(536637),
    eb = l.n(eV),
    eM = l(156828),
    eA = l(165862),
    eL = l(477782),
    eD = l(320448),
    eE = l(921853),
    eR = l(282054),
    eI = l(652215),
    eS = l(351114);
let eN = "MMM Do, YYYY",
    ey = eb()("2015-05-15").local(),
    eZ = (0, eM.Fe)({ createPromise: () => Promise.resolve().then(l.bind(l, 939538)), webpackId: 939538 });
var e_ =
    (((n = {})[(n.ALL = 0)] = "ALL"),
    (n[(n["1_HOUR"] = 1)] = "1_HOUR"),
    (n[(n["24_HOURS"] = 2)] = "24_HOURS"),
    (n[(n["7_DAYS"] = 3)] = "7_DAYS"),
    (n[(n["2_WEEKS"] = 4)] = "2_WEEKS"),
    (n[(n["4_WEEKS"] = 5)] = "4_WEEKS"),
    (n[(n["3_MONTHS"] = 6)] = "3_MONTHS"),
    (n[(n.CUSTOM = 7)] = "CUSTOM"),
    n);
function ew(e) {
    let {
            startDateLabel: t,
            endDateLabel: l,
            afterDate: n,
            beforeDate: s,
            selectedOption: r,
            isCustomDateRange: o,
            menuName: d,
            onClose: c,
            onSelectDateOption: u,
            onToggleCustomDateRange: m,
            onSelectStartDate: h,
            onSelectEndDate: f,
        } = e,
        g = [
            { id: 0, option: null, label: es.intl.string(es.t.jelCib) },
            { id: 1, option: { input: 1, unit: "h" }, label: es.intl.string(es.t["91RDqi"]) },
            { id: 2, option: { input: 24, unit: "h" }, label: es.intl.string(es.t["Lj/1Tq"]) },
            { id: 3, option: { input: 7, unit: "d" }, label: es.intl.string(es.t.NnUMSZ) },
            { id: 4, option: { input: 2, unit: "w" }, label: es.intl.string(es.t.hY3XWH) },
            { id: 5, option: { input: 4, unit: "w" }, label: es.intl.string(es.t.kQTwT0) },
            { id: 6, option: { input: 3, unit: "M" }, label: es.intl.string(es.t.EPuP0s) },
        ],
        [H, x] = C.useState(!1),
        p =
            7 !== r
                ? null
                : null != t && null != l
                  ? `${t} - ${l}`
                  : null != t
                    ? es.intl.formatToPlainString(es.t.ClmSzd, { date: t })
                    : null != l
                      ? es.intl.formatToPlainString(es.t.YvNhsd, { date: l })
                      : null,
        j = C.useCallback(() => {
            (x(!0), m());
        }, [m]),
        v = C.useCallback(
            (e) => {
                h(e);
            },
            [h],
        ),
        V = C.useCallback(
            (e) => {
                f(e);
            },
            [f],
        ),
        b = C.useCallback(() => {
            (null == s && null == n && u(0, null), x(!1));
        }, [n, s, u]);
    return (0, i.jsx)(eA.W, {
        "data-menu-needs-migration": !0,
        navId: `member-safety-guild-member-${d}-menu`,
        onClose: c,
        "aria-label": es.intl.string(es.t.k9m8Rg),
        onSelect: eI.tEg,
        children: (0, i.jsx)(eL.rX, {
            children: H
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(eL.Dr, {
                              id: "back",
                              action: b,
                              dontCloseOnAction: !0,
                              render: (e) =>
                                  (0, i.jsxs)("span", {
                                      ...e,
                                      className: eS.W6,
                                      children: [
                                          (0, i.jsx)(eE.ChevronSmallLeftIcon, {
                                              size: "custom",
                                              color: "currentColor",
                                              width: 16,
                                              height: 16,
                                          }),
                                          (0, i.jsx)(en.E, {
                                              variant: "body-sm/medium",
                                              color: "text-strong",
                                              children: es.intl.string(es.t.BTfN6g),
                                          }),
                                      ],
                                  }),
                          }),
                          (0, i.jsx)(eL.Dr, {
                              id: "after-date-menu-item",
                              label: es.intl.string(es.t.RDqVOD),
                              subtext: t,
                              subMenuClassName: eS.aD,
                              children: (0, i.jsx)(eL.Dr, {
                                  id: "after-date-picker",
                                  render: (e) =>
                                      (0, i.jsx)(eZ, {
                                          ...e,
                                          calendarClassName: eS.BJ,
                                          value: o && null != n ? eb()(n) : void 0,
                                          onSelect: v,
                                          maxDate: eb()().local(),
                                          minDate: ey,
                                      }),
                              }),
                          }),
                          (0, i.jsx)(eL.Dr, {
                              id: "before-date-menu-item",
                              label: es.intl.string(es.t.jF54hQ),
                              subtext: l,
                              subMenuClassName: eS.aD,
                              children: (0, i.jsx)(eL.Dr, {
                                  id: "before-date-picker",
                                  render: (e) =>
                                      (0, i.jsx)(eZ, {
                                          ...e,
                                          calendarClassName: eS.BJ,
                                          value: o && null != s ? eb()(s) : void 0,
                                          onSelect: V,
                                          maxDate: eb()().local(),
                                          minDate: o && null != n ? eb()(n) : ey,
                                      }),
                              }),
                          }),
                      ],
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          g.map((e) => {
                              let { id: t, option: l, label: n } = e;
                              return (0, i.jsx)(
                                  eL.iD,
                                  {
                                      group: `member-safety-guild-member-${d}-menu`,
                                      id: `guild-member-${d}-option-${t}`,
                                      label: n,
                                      action: () => u(t, l),
                                      checked: t === r,
                                  },
                                  `option-${t}`,
                              );
                          }),
                          (0, i.jsx)(eL.bX, {}),
                          (0, i.jsx)(eL.Dr, {
                              id: `guild-member-${d}-custom-option}`,
                              action: j,
                              dontCloseOnAction: !0,
                              render: (e) =>
                                  (0, i.jsxs)("div", {
                                      className: a()(eS.Dh, { [eS.in]: e.isFocused }),
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: eS.jA,
                                              children: [
                                                  (0, i.jsx)(en.E, {
                                                      className: a()(eS.ty, { [eS.in]: e.isFocused }),
                                                      variant: "body-sm/medium",
                                                      children: es.intl.string(es.t.BTfN6g),
                                                  }),
                                                  null != p &&
                                                      (0, i.jsx)(en.E, {
                                                          className: a()(eS.ty, { [eS.in]: e.isFocused }),
                                                          color: "text-muted",
                                                          variant: "footnote/medium",
                                                          children: p,
                                                      }),
                                              ],
                                          }),
                                          7 === r
                                              ? (0, i.jsx)(eR.A, { foreground: eS.QE, width: 18, height: 18 })
                                              : (0, i.jsx)(eD.ChevronSmallRightIcon, {
                                                    size: "custom",
                                                    color: "currentColor",
                                                    width: 16,
                                                    height: 16,
                                                    className: a()(eS.ty, { [eS.in]: e.isFocused }),
                                                }),
                                      ],
                                  }),
                          }),
                      ],
                  }),
        }),
    });
}
function eT(e) {
    let { guildId: t, onClose: l } = e,
        n = (0, d.bG)([ee.A], () => ee.A.getSearchStateByGuildId(t), [t], ed()),
        { selectedAccountAgeOption: C } = n,
        { afterDate: s, beforeDate: a, optionId: r } = C,
        o = r === e_.CUSTOM,
        c = o && null != s ? eb()(s).format(eN) : null,
        u = o && null != a ? eb()(a).format(eN) : null;
    return (0, i.jsx)(ew, {
        startDateLabel: c,
        endDateLabel: u,
        afterDate: s,
        beforeDate: a,
        selectedOption: r,
        isCustomDateRange: o,
        menuName: "account-age",
        accessibilityLabel: es.intl.string(es.t["D++Tgf"]),
        onClose: l,
        onSelectDateOption: function (e, l) {
            let i = null != l ? eb()().subtract(l.input, l.unit).valueOf() : null;
            (0, et.Ld)(t, { ...n, selectedAccountAgeOption: { optionId: e, afterDate: i, beforeDate: null } });
        },
        onToggleCustomDateRange: function () {
            (0, et.Ld)(t, {
                ...n,
                selectedAccountAgeOption: { optionId: e_.CUSTOM, afterDate: o ? s : null, beforeDate: o ? a : null },
            });
        },
        onSelectStartDate: function (e) {
            (0, et.Ld)(t, {
                ...n,
                selectedAccountAgeOption: { optionId: e_.CUSTOM, afterDate: e.valueOf(), beforeDate: a },
            });
        },
        onSelectEndDate: function (e) {
            (0, et.Ld)(t, {
                ...n,
                selectedAccountAgeOption: { optionId: e_.CUSTOM, afterDate: s, beforeDate: e.valueOf() },
            });
        },
    });
}
var eU = l(565787),
    eO = l(953822),
    ek = l(60270),
    eF = l(353182),
    eG = l(953727);
function eB(e) {
    let { width: t = 24, height: l = 24, color: n = "currentColor", ...C } = e;
    return (0, i.jsxs)("svg", {
        ...(0, eG.A)(C),
        width: t,
        height: l,
        viewBox: "0 0 23 21",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            (0, i.jsx)("path", {
                d: "M11 8C13.2092 8 15 6.20914 15 4C15 1.79086 13.2092 0 11 0C8.7909 0 7.00004 1.79086 7.00004 4C7.00004 6.20914 8.7909 8 11 8Z",
                fill: n,
            }),
            (0, i.jsx)("path", {
                d: "M10.4819 9C5.21683 9 0.948608 13.2682 0.948608 18.5333C0.948608 19.3434 1.60526 20 2.41528 20H2.63597C2.87577 20 3.08011 19.8292 3.13966 19.597C3.42499 18.4841 3.98016 17.4277 4.45873 16.6878C4.59397 16.4787 4.88927 16.5934 4.86449 16.8412L4.60358 19.4502C4.57415 19.7446 4.80529 20 5.1011 20H10.9805C10.9805 19 11.4727 18.4453 11.9844 17.5L14 13.9961C14 13.9961 15.1133 11.9805 15.5195 11.3672C15.8512 10.9263 16.315 10.5651 16.5 10.5C15.5 9.5 13.2847 9 11.4153 9H10.4819Z",
                fill: n,
            }),
            (0, i.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M18.9108 12.6271C18.5159 11.9391 17.4841 11.9391 17.0892 12.6271L13.1302 19.524C12.7491 20.1878 13.2503 20.9999 14.041 20.9999L21.9591 21C22.7497 21 23.2509 20.1878 22.8699 19.5241L18.9108 12.6271ZM18.4457 14.5H17.5543C17.2579 14.5 17.0265 14.7565 17.057 15.0514L17.2654 17.0683C17.2819 17.2279 17.4424 17.3297 17.5993 17.296C17.726 17.2687 17.863 17.25 18 17.25C18.137 17.25 18.274 17.2687 18.4007 17.296C18.5576 17.3297 18.7182 17.2279 18.7347 17.0683L18.943 15.0514C18.9735 14.7565 18.7422 14.5 18.4457 14.5ZM19 19C19 19.5523 18.5523 20 18 20C17.4477 20 17 19.5523 17 19C17 18.4477 17.4477 18 18 18C18.5523 18 19 18.4477 19 19Z",
                fill: n,
            }),
        ],
    });
}
let eP = (0, eU.k)(eB);
function eq(e) {
    let { guildId: t, onClose: l } = e,
        n = (0, d.bG)([ee.A], () => ee.A.getSearchStateByGuildId(t), [t], ed()),
        s = (0, J.Tj)(t),
        a = C.useCallback(() => {
            (n.requireUnusualDmActivity || s(J.Zp.UNUSUAL_DM_ACTIVITY),
                (0, et.Ld)(t, { ...n, requireUnusualDmActivity: !n.requireUnusualDmActivity }));
        }, [t, n, s]),
        r = C.useCallback(() => {
            (n.requireCommunicationDisabled || s(J.Zp.COMMUNICATION_DISABLED),
                (0, et.Ld)(t, { ...n, requireCommunicationDisabled: !n.requireCommunicationDisabled }));
        }, [t, n, s]),
        o = C.useCallback(() => {
            (n.requireUnusualAccountActivity || s(J.Zp.UNUSUAL_ACCOUNT_ACTIVITY),
                (0, et.Ld)(t, { ...n, requireUnusualAccountActivity: !n.requireUnusualAccountActivity }));
        }, [t, n, s]),
        c = C.useCallback(() => {
            (n.requireUsernameQuarantined || s(J.Zp.USERNAME_QUARANTINED),
                (0, et.Ld)(t, { ...n, requireUsernameQuarantined: !n.requireUsernameQuarantined }));
        }, [t, n, s]);
    return (0, i.jsx)(eA.W, {
        "data-menu-migrated": !0,
        navId: "member-safety-flags",
        onClose: l,
        "aria-label": es.intl.string(es.t.k9m8Rg),
        onSelect: eI.tEg,
        children: (0, i.jsxs)(eL.rX, {
            children: [
                (0, i.jsx)(eL.sL, {
                    id: "toggle-require-unusual-dm-activity",
                    label: es.intl.string(es.t.ZRnON3),
                    leftIcon: eO.ChatWarningIcon,
                    leadingAccessory: { type: "icon", icon: eO.ChatWarningIcon },
                    action: a,
                    checked: n.requireUnusualDmActivity,
                }),
                (0, i.jsx)(eL.sL, {
                    id: "toggle-require-communication-disabled",
                    label: es.intl.string(es.t.z3wbj8),
                    leftIcon: ek.ClockWarningIcon,
                    leadingAccessory: { type: "icon", icon: ek.ClockWarningIcon },
                    action: r,
                    checked: n.requireCommunicationDisabled,
                }),
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(eL.sL, {
                            id: "toggle-require-unusual-account-activity",
                            label: es.intl.string(es.t.DIQsD9),
                            leftIcon: eP,
                            leadingAccessory: { type: "icon", icon: eP },
                            action: o,
                            checked: n.requireUnusualAccountActivity,
                        }),
                        (0, i.jsx)(eL.sL, {
                            id: "toggle-require-username-quarantined",
                            label: es.intl.string(es.t.Jloklk),
                            leftIcon: eF.ChatXIcon,
                            leadingAccessory: { type: "icon", icon: eF.ChatXIcon },
                            action: c,
                            checked: n.requireUsernameQuarantined,
                        }),
                    ],
                }),
            ],
        }),
    });
}
function ez(e) {
    let { guildId: t, onClose: l } = e,
        n = (0, d.bG)([ee.A], () => ee.A.getSearchStateByGuildId(t), [t], ed()),
        { selectedJoinDateOption: C } = n,
        { afterDate: s, beforeDate: a, optionId: r } = C,
        o = r === e_.CUSTOM,
        c = o && null != s ? eb()(s).format(eN) : null,
        u = o && null != a ? eb()(a).format(eN) : null;
    return (0, i.jsx)(ew, {
        startDateLabel: c,
        endDateLabel: u,
        afterDate: s,
        beforeDate: a,
        selectedOption: r,
        isCustomDateRange: o,
        menuName: "joined-date",
        accessibilityLabel: es.intl.string(es.t.XMVinX),
        onClose: l,
        onSelectDateOption: function (e, l) {
            let i = null != l ? eb()().subtract(l.input, l.unit).valueOf() : null;
            (0, et.Ld)(t, { ...n, selectedJoinDateOption: { optionId: e, afterDate: i, beforeDate: null } });
        },
        onToggleCustomDateRange: function () {
            (0, et.Ld)(t, {
                ...n,
                selectedJoinDateOption: { optionId: e_.CUSTOM, afterDate: o ? s : null, beforeDate: o ? a : null },
            });
        },
        onSelectStartDate: function (e) {
            (0, et.Ld)(t, {
                ...n,
                selectedJoinDateOption: { optionId: e_.CUSTOM, afterDate: e.valueOf(), beforeDate: a },
            });
        },
        onSelectEndDate: function (e) {
            (0, et.Ld)(t, {
                ...n,
                selectedJoinDateOption: { optionId: e_.CUSTOM, afterDate: s, beforeDate: e.valueOf() },
            });
        },
    });
}
var eY = l(311567),
    eK = l(91871),
    e$ = l.n(eK),
    eW = l(855986),
    eQ = l(602853),
    eX = l(583650),
    eJ = l(676608),
    e1 = l(34457),
    e3 = l(317525);
function e8(e) {
    let { guildId: t, onClose: l } = e,
        n = (0, J.hs)(t),
        [s, a] = C.useState(""),
        r = (0, d.bG)([ee.A], () => ee.A.getSearchStateByGuildId(t), [t], ed()),
        o = (0, d.bG)([h.Ay], () => h.Ay.roleStyle),
        c = (0, eQ.r)(em.A.unsafe_rawColors.PRIMARY_300).hex(),
        u = (0, eJ.jV)(t, null),
        m = (0, eW.yK)([e3.A], () => e3.A.getSortedRoles(t).filter((e) => !(0, e1.Oy)(e)), [t]),
        f = C.useMemo(() => ("" === s ? m : m.filter((e) => e$()(s.toLowerCase(), e.name.toLowerCase()))), [m, s]),
        g = C.useCallback(
            (e) => {
                let l = new Set(r.selectedRoleIds);
                (l.has(e) ? l.delete(e) : l.add(e), (0, et.Ld)(t, { selectedRoleIds: l }), n(l));
            },
            [t, r.selectedRoleIds, n],
        );
    return (0, i.jsx)(eA.W, {
        "data-menu-migrated": !0,
        navId: "member-safety-roles",
        onClose: l,
        "aria-label": es.intl.string(es.t.ZveC7e),
        onSelect: eI.tEg,
        children: (0, i.jsxs)(eL.rX, {
            children: [
                (0, i.jsx)(eL.aK, {
                    id: "members-table-role-search",
                    control: (e, t) =>
                        (0, i.jsx)(eX.V, {
                            ...e,
                            query: s,
                            onChange: a,
                            ref: t,
                            placeholder: es.intl.string(es.t.ZveC7e),
                        }),
                }),
                (0, i.jsx)(eL.bX, {}),
                f.map((e) => {
                    let t = e.colorString ?? c,
                        l =
                            u && e.colorStrings?.primaryColor != null && e.colorStrings?.secondaryColor != null
                                ? e.colorStrings
                                : null;
                    return (0, i.jsx)(
                        eL.sL,
                        {
                            id: `role-${e.id}`,
                            label: e.name,
                            leadingAccessory: {
                                type: "roleDot",
                                variant: "dot" === o ? "dot" : "circle",
                                color: t,
                                colors: l,
                            },
                            checked: r.selectedRoleIds.has(e.id),
                            action: () => g(e.id),
                        },
                        e.id,
                    );
                }),
            ],
        }),
    });
}
var e4 = l(307877),
    e5 = l(917089);
function e2(e) {
    let { label: t, onFilter: l, isFiltered: n, isSorted: C, className: s, ref: r, ...o } = e,
        d = n ? "text-strong" : "text-default";
    return (
        C && (d = "text-brand"),
        (0, i.jsx)("th", {
            className: a()(e4.P1, s),
            children: (0, i.jsxs)(ec.D, {
                ...o,
                innerRef: r,
                onClick: l,
                className: a()(e4.WV, { [e4.o1]: null != l }),
                children: [
                    (0, i.jsx)(en.E, { variant: "body-sm/medium", color: d, children: t }),
                    null != l &&
                        (0, i.jsx)("div", {
                            className: e4.IO,
                            children: (0, i.jsx)(eu.FiltersHorizontalIcon, {
                                size: "custom",
                                className: e4.Sj,
                                color: n ? em.A.colors.CONTROL_BRAND_FOREGROUND.css : em.A.colors.TEXT_MUTED.css,
                                width: 16,
                                height: 16,
                            }),
                        }),
                ],
            }),
        })
    );
}
function e9(e) {
    let { guildId: t, currentPagedMembers: l } = e,
        n = C.useRef(null),
        s = C.useRef(null),
        r = C.useRef(null),
        o = C.useRef(null),
        c = C.useRef(null),
        u = (0, d.bG)([ee.A], () => ee.A.getSearchStateByGuildId(t), [t], ed()),
        m = (0, d.bG)([ex.A, eH.A], () => ex.A.can(eI.xBc.MANAGE_GUILD, eH.A.getGuild(t)), [t]),
        { selectedUserIds: h, addUsers: f, clearSelection: g } = (0, ej.A)(t),
        H =
            u.requireUnusualDmActivity ||
            u.requireCommunicationDisabled ||
            u.requireUnusualAccountActivity ||
            u.requireUsernameQuarantined,
        x = u.selectedRoleIds.size > 0,
        p = null != u.selectedJoinDateOption.afterDate,
        j = u.selectedSort === ep.mF.ORDER_BY_GUILD_JOINED_AT_ASC,
        v = null != u.selectedAccountAgeOption.afterDate,
        V = u.selectedSort === ep.mF.ORDER_BY_USER_ID_ASC || u.selectedSort === ep.mF.ORDER_BY_USER_ID_DESC,
        b = null != u.selectedSourceInviteCode && "" !== u.selectedSourceInviteCode,
        M = null != u.selectedJoinSourceType,
        A = b || M,
        L = (0, ev.vA)(t),
        D = C.useMemo(() => l.filter((e) => (0, ev.Ph)(t, L, e)), [L, l, t]),
        E = D.length > 0,
        R = 0 === D.filter((e) => !h.has(e)).length,
        I = C.useCallback(() => {
            E && (R ? g() : f(D));
        }, [E, R, g, f, D]);
    return (0, i.jsx)("thead", {
        children: (0, i.jsxs)("tr", {
            className: e4.Yk,
            children: [
                L &&
                    (0, i.jsx)("th", {
                        className: a()(e4.P1, e5.y2),
                        children: (0, i.jsx)(eh.m, {
                            shouldShow: !E,
                            text: es.intl.string(es.t.tJEY0G),
                            children: (0, i.jsx)(ec.D, {
                                onClick: I,
                                className: e4.WV,
                                children: (0, i.jsx)(ef.P, { checked: R, disabled: !E }),
                            }),
                        }),
                    }),
                (0, i.jsx)(e2, { label: es.intl.string(es.t.Es7n9c) }),
                m
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(eg.Y, {
                                  targetElementRef: n,
                                  animation: eg.Y.Animation.FADE,
                                  position: "bottom",
                                  spacing: 4,
                                  align: "left",
                                  renderPopout: (e) => {
                                      let { closePopout: l } = e;
                                      return (0, i.jsx)(ez, { guildId: t, onClose: l });
                                  },
                                  children: (e) => {
                                      let { onClick: t, ...l } = e;
                                      return (0, i.jsx)(e2, {
                                          ref: n,
                                          label: es.intl.string(es.t.xcKP1P),
                                          onFilter: t,
                                          isFiltered: p,
                                          isSorted: j,
                                          className: e5.qp,
                                          ...l,
                                      });
                                  },
                              }),
                              (0, i.jsx)(eg.Y, {
                                  targetElementRef: s,
                                  animation: eg.Y.Animation.FADE,
                                  position: "bottom",
                                  spacing: 4,
                                  align: "left",
                                  renderPopout: (e) => {
                                      let { closePopout: l } = e;
                                      return (0, i.jsx)(eT, { guildId: t, onClose: l });
                                  },
                                  children: (e) => {
                                      let { onClick: t, ...l } = e;
                                      return (0, i.jsx)(e2, {
                                          ref: s,
                                          label: es.intl.string(es.t.sPph4O),
                                          onFilter: t,
                                          isFiltered: v,
                                          isSorted: V,
                                          className: e5.qp,
                                          ...l,
                                      });
                                  },
                              }),
                          ],
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(e2, { label: es.intl.string(es.t.xcKP1P), className: e5.qp }),
                              (0, i.jsx)(e2, { label: es.intl.string(es.t.sPph4O), className: e5.qp }),
                          ],
                      }),
                m
                    ? (0, i.jsx)(eg.Y, {
                          targetElementRef: r,
                          animation: eg.Y.Animation.FADE,
                          position: "bottom",
                          spacing: 4,
                          align: "left",
                          renderPopout: (e) => {
                              let { closePopout: l } = e;
                              return (0, i.jsx)(eY.default, { guildId: t, onClose: l });
                          },
                          children: (e) => {
                              let { onClick: t, ...l } = e;
                              return (0, i.jsx)(e2, {
                                  ref: r,
                                  label: es.intl.string(es.t["yn0w1+"]),
                                  onFilter: t,
                                  isFiltered: A,
                                  className: e5.qp,
                                  ...l,
                              });
                          },
                      })
                    : null,
                (0, i.jsx)(eg.Y, {
                    targetElementRef: o,
                    animation: eg.Y.Animation.FADE,
                    position: "bottom",
                    autoInvert: !1,
                    spacing: 4,
                    align: "left",
                    renderPopout: (e) => {
                        let { closePopout: l } = e;
                        return (0, i.jsx)(e8, { guildId: t, onClose: l });
                    },
                    children: (e) => {
                        let { onClick: t, ...l } = e;
                        return (0, i.jsx)(e2, {
                            ref: o,
                            label: es.intl.string(es.t["2SZsWX"]),
                            onFilter: t,
                            isFiltered: x,
                            className: e5.QB,
                            ...l,
                        });
                    },
                }),
                (0, i.jsx)(eh.m, {
                    text: es.intl.string(es.t["2cRO3R"]),
                    position: "top",
                    align: "left",
                    shouldShow: !0,
                    children: (0, i.jsx)(eg.Y, {
                        targetElementRef: c,
                        animation: eg.Y.Animation.FADE,
                        position: "bottom",
                        spacing: 4,
                        align: "left",
                        renderPopout: (e) => {
                            let { closePopout: l } = e;
                            return (0, i.jsx)(eq, { guildId: t, onClose: l });
                        },
                        children: (e) =>
                            (0, i.jsx)(e2, {
                                ref: c,
                                label: es.intl.string(es.t["7V3759"]),
                                "aria-label": es.intl.string(es.t["2cRO3R"]),
                                onFilter: (t) => {
                                    e.onClick?.(t);
                                },
                                isFiltered: H,
                                className: e5.qp,
                                onMouseEnter: () => {
                                    e.onMouseEnter?.();
                                },
                                onMouseDown: e.onMouseDown,
                                onKeyDown: e.onKeyDown,
                                "aria-controls": e["aria-controls"],
                                "aria-expanded": e["aria-expanded"],
                            }),
                    }),
                }),
                (0, i.jsx)(e2, { label: es.intl.string(es.t["5Q9xGr"]), className: e5.qp }),
            ],
        }),
    });
}
var e7 = l(435558),
    e6 = l(307301),
    e0 = l(463930),
    te = l(950305),
    tt = l(530005),
    tl = l(966327),
    tn = l(396583),
    ti = l(576470),
    tC = l(229527),
    ts = l(316031),
    ta = l(474196),
    tr = l(985925),
    to = l(534400),
    td = l(694318),
    tc = l(967144),
    tu = l(799704),
    tm = l(881548),
    th = l(562153),
    tf = l(811091),
    tg = l(427262),
    tH = l(157347),
    tx = l(120692),
    tp = l(615300),
    tj = l(717421),
    tv = l(475743);
let tV = { duration: 100, easing: tp.A.Easing.inOut(tp.A.Easing.back()), clamp: !0 },
    tb = { duration: 2e3, easing: tp.A.Easing.quad, clamp: !0 };
function tM(e) {
    let { value: t, children: l, equalityFn: n = ed(), style: s, ...a } = e,
        r = (0, tv.Ay)(t),
        [{ spring: o }, d] = (0, tj.z)(() => ({ spring: 0 }), "animate-always"),
        c = (0, eQ.r)(em.A.colors.BACKGROUND_BASE_LOW).hex(),
        u = (0, eQ.r)(em.A.colors.CONTROL_BRAND_FOREGROUND).hex(),
        m = C.useCallback(() => {
            (d({ spring: 1, config: tV }), d({ spring: 0, config: tb, delay: 300 }));
        }, [d]);
    C.useEffect(() => {
        null == t || null == r || n(t, r) || m();
    }, [m, t, r, n]);
    let h = o?.to({ range: [0, 1], output: [`${c}00`, `${u}27`] }),
        f = null != s ? { ...s, backgroundColor: h } : { backgroundColor: h };
    return (0, i.jsx)(tx.animated.tr, { ...a, style: f, children: l });
}
var tA = l(589935),
    tL = l(950072),
    tD = l(746080),
    tE = l(486974);
let tR = C.memo(function (e) {
        let { member: t } = e,
            l = C.useMemo(() => (0, ts.n)(t.communicationDisabledUntil), [t.communicationDisabledUntil]),
            n = C.useMemo(
                () => (null == t.communicationDisabledUntil ? new Date() : new Date(t.communicationDisabledUntil)),
                [t.communicationDisabledUntil],
            );
        return (0, i.jsxs)("div", {
            className: e5.Ak,
            children: [
                t.hasUnusualDmActivity &&
                    (0, i.jsx)(eh.m, {
                        text: es.intl.string(es.t.QrfVTp),
                        children: (0, i.jsx)(eO.ChatWarningIcon, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: em.A.colors.TEXT_MUTED.css,
                        }),
                    }),
                l &&
                    (0, i.jsx)(eh.m, {
                        "aria-label": es.intl.string(es.t["xfJP+u"]),
                        __unsupportedReactNodeAsText: (0, i.jsxs)("div", {
                            className: e5.CN,
                            children: [
                                (0, i.jsx)("div", { children: es.intl.string(es.t["xfJP+u"]) }),
                                (0, i.jsx)(ti.A, { deadline: n, showUnits: !0, stopAtOneSec: !0 }),
                            ],
                        }),
                        children: (0, i.jsx)(ek.ClockWarningIcon, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: em.A.colors.TEXT_FEEDBACK_CRITICAL.css,
                        }),
                    }),
                (0, td.cx)(t.userId) &&
                    (0, i.jsx)(eh.m, {
                        text: es.intl.string(es.t.PK9FQ2),
                        children: (0, i.jsx)(eB, {
                            width: 20,
                            height: 20,
                            color: em.A.colors.TEXT_FEEDBACK_CRITICAL.css,
                        }),
                    }),
                (0, tC.TR)(t) &&
                    (0, i.jsx)(eh.m, {
                        text: es.intl.string(es.t.qOVbaX),
                        children: (0, i.jsx)(eF.ChatXIcon, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: em.A.colors.TEXT_MUTED.css,
                        }),
                    }),
            ],
        });
    }),
    tI = C.memo(function (e) {
        let { member: t, highestRole: l } = e,
            n = (0, d.bG)([eH.A], () => eH.A.getGuild(t.guildId), [t.guildId]),
            s = t.roles.length - 1,
            r = C.useMemo(() => new Intl.NumberFormat(es.intl.currentLocale).format(s), [s]),
            o = (0, ei.Cy)(t),
            c = (0, ei.Cy)(t, !0),
            u = (0, d.bG)([ex.A], () => ex.A.can(eI.xBc.MANAGE_ROLES, n), [n]);
        return null == n
            ? null
            : (0, i.jsxs)("div", {
                  className: e5.yk,
                  children: [
                      null != l && (0, i.jsx)(tL.A, { className: a()(e5.Zf, e5.Lc), role: l, guildId: t.guildId }),
                      s > 0 &&
                          (0, i.jsx)(ec.D, {
                              className: e5.yt,
                              onClick: (e) => c(e),
                              children: (0, i.jsx)(eh.m, {
                                  text: es.intl.string(es.t.DY6n4q),
                                  children: (0, i.jsxs)(en.E, {
                                      variant: "body-xs/medium",
                                      color: "text-strong",
                                      children: ["+", r],
                                  }),
                              }),
                          }),
                      u &&
                          (0, i.jsx)(eh.m, {
                              text: es.intl.string(es.t.h3pSLR),
                              children: (0, i.jsx)(ec.D, {
                                  onClick: o,
                                  className: a()(e5.yt, e5.$g),
                                  children: (0, i.jsx)(e6.PlusSmallIcon, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: e5.fd,
                                      width: 16,
                                      height: 16,
                                  }),
                              }),
                          }),
                  ],
              });
    }),
    tS = C.memo(function (e) {
        let { member: t, user: l } = e,
            n = (0, tc.gn)(t?.guildId, t?.userId, t?.colorStrings ?? null);
        return null == l || null == t
            ? null
            : (0, i.jsxs)("div", {
                  className: e5.FD,
                  children: [
                      (0, i.jsx)("div", { className: e5.Wn, children: (0, i.jsx)(tl.A, { user: l }) }),
                      (0, i.jsx)("div", {
                          className: e5.eg,
                          children: (0, i.jsx)(en.E, {
                              variant: "body-sm/medium",
                              children: (0, i.jsxs)("div", {
                                  className: e5.VW,
                                  children: [
                                      (0, i.jsx)(e0.g, {
                                          name: th.Ay.getName(t.guildId, null, l),
                                          colorString: t.colorString ?? null,
                                          colorStrings: n,
                                          className: e5.bc,
                                      }),
                                      (0, i.jsx)(to.Ay, {
                                          primaryGuild: l?.primaryGuild,
                                          userId: l?.id,
                                          contextGuildId: t.guildId,
                                          containerClassName: e5.Dz,
                                      }),
                                  ],
                              }),
                          }),
                      }),
                      (0, i.jsx)("div", {
                          className: e5.Br,
                          children: (0, i.jsx)(en.E, {
                              variant: "body-xs/normal",
                              color: "text-default",
                              tag: "span",
                              children: tg.Ay.getUserTag(l),
                          }),
                      }),
                  ],
              });
    });
function tN(e) {
    return {
        short: null == e ? null : (0, tH.hL)(e, tH.wN.JOINED_AT),
        long: new Date(e ?? 0).toLocaleDateString(es.intl.currentLocale, tH.wp),
    };
}
function ty(e) {
    let { member: t, showLongDate: l, isSortedBy: n } = e,
        [s, a] = C.useState(null);
    (C.useEffect(() => {
        a(tN(t.joinedAtTimestamp));
    }, [t.joinedAtTimestamp]),
        (0, tn.A)(() => {
            a(tN(t.joinedAtTimestamp));
        }, 1e4));
    let r = n ? "text-brand" : "text-default";
    return s?.short == null
        ? null
        : l
          ? (0, i.jsx)("div", {
                className: e5.__invalid_joinedAtContainer,
                children: (0, i.jsx)(en.E, { variant: "body-sm/medium", color: r, children: s.long }),
            })
          : (0, i.jsx)("div", {
                className: e5.__invalid_joinedAtContainer,
                children: (0, i.jsx)(eh.m, {
                    align: "left",
                    __unsupportedReactNodeAsText: s.long,
                    children: (0, i.jsx)(en.E, { variant: "body-sm/medium", color: r, children: s.short }),
                }),
            });
}
let tZ = C.memo(function (e) {
        let { member: t, showLongDate: l, isSortedBy: n } = e,
            { accountCreationDateShort: s, accountCreationDateLong: a } = C.useMemo(() => {
                let e = tf.default.extractTimestamp(t.userId);
                return {
                    accountCreationDateShort: (0, tH.hL)(e, tH.wN.ACCOUNT_AGE),
                    accountCreationDateLong: new Date(e).toLocaleDateString(es.intl.currentLocale, tH.OA),
                };
            }, [t.userId]),
            r = n ? "text-brand" : "text-default";
        return l
            ? (0, i.jsx)(en.E, { variant: "body-sm/medium", color: r, children: a })
            : (0, i.jsx)(eh.m, {
                  align: "left",
                  __unsupportedReactNodeAsText: a,
                  children: (0, i.jsx)(en.E, { variant: "body-sm/medium", color: r, children: s }),
              });
    }),
    t_ = C.memo(function (e) {
        let {
                member: t,
                user: l,
                highestRole: n,
                isHoldingAdvancedInfoKey: s,
                onOpenModerationMenu: r,
                onOpenMemberView: o,
                compact: c,
                hasModViewPanelAccess: u,
            } = e,
            m = (0, d.bG)([ex.A, eH.A], () => ex.A.can(eI.xBc.MANAGE_GUILD, eH.A.getGuild(t.guildId)), [t.guildId]),
            { selectedUserIds: h, addUsers: f, removeUser: g } = (0, ej.A)(t.guildId),
            H = (0, ev.vA)(t.guildId),
            x = (0, ev.O6)(t.guildId, H, t.userId),
            p = (0, d.bG)(
                [ee.A],
                () => ee.A.getSearchStateByGuildId(t.guildId).selectedSort ?? ep.mF.ORDER_BY_UNSPECIFIED,
                [t.guildId],
                ed(),
            ),
            j = C.useCallback(
                (e) => {
                    (e.stopPropagation(),
                        e.preventDefault(),
                        null != t && x && (h.has(t.userId) ? g(t.userId) : f([t.userId])));
                },
                [f, x, t, g, h],
            ),
            v = p === ep.mF.ORDER_BY_GUILD_JOINED_AT_ASC,
            V = p === ep.mF.ORDER_BY_USER_ID_ASC || p === ep.mF.ORDER_BY_USER_ID_DESC;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                H &&
                    (0, i.jsx)("td", {
                        children: (0, i.jsx)(eh.m, {
                            shouldShow: !x,
                            ariaHidden: x,
                            text: es.intl.string(es.t["Se4c7+"]),
                            children: (0, i.jsx)(ec.D, {
                                onClick: j,
                                children: (0, i.jsx)(ef.P, { checked: h.has(t.userId), disabled: !x }),
                            }),
                        }),
                    }),
                (0, i.jsx)("td", {
                    className: a()(e5.QB, { [e5.oE]: c }),
                    children: (0, i.jsx)(tS, { member: t, user: l }),
                }),
                (0, i.jsx)("td", {
                    className: a()(e5.qp, { [e5.oE]: c }),
                    children: (0, i.jsx)(ty, { showLongDate: s, member: t, isSortedBy: v }),
                }),
                (0, i.jsx)("td", {
                    className: a()(e5.qp, { [e5.oE]: c }),
                    children: (0, i.jsx)(tZ, { showLongDate: s, member: t, isSortedBy: V }),
                }),
                m &&
                    (0, i.jsx)("td", {
                        className: a()(e5.qp, { [e5.oE]: c }),
                        children: (0, i.jsx)(tA.Ay, { userId: t.userId, guildId: t.guildId }),
                    }),
                (0, i.jsx)("td", {
                    className: a()(e5.QB, { [e5.oE]: c }),
                    children: (0, i.jsx)(tI, { member: t, highestRole: n }),
                }),
                (0, i.jsx)("td", { className: a()(e5.qp, { [e5.oE]: c }), children: (0, i.jsx)(tR, { member: t }) }),
                (0, i.jsx)("td", {
                    className: a()(e5.OL, { [e5.oE]: c }),
                    children: (0, i.jsxs)("div", {
                        className: e5.$E,
                        children: [
                            (0, i.jsx)(eh.m, {
                                asContainer: !0,
                                text: u ? es.intl.string(es.t.nHfkf4) : es.intl.string(es.t.uTre2y),
                                children: (0, i.jsx)(ec.D, {
                                    onClick: o,
                                    className: e5.x6,
                                    children: u
                                        ? (0, i.jsx)(tm.A, { width: tw, height: tw })
                                        : (0, i.jsx)(te.UserIcon, {
                                              size: "custom",
                                              color: "currentColor",
                                              width: tw,
                                              height: tw,
                                          }),
                                }),
                            }),
                            (0, i.jsx)(eh.m, {
                                asContainer: !0,
                                text: es.intl.string(es.t.x8Nn4M),
                                children: (0, i.jsx)(ec.D, {
                                    onClick: r,
                                    className: e5.x6,
                                    children: (0, i.jsx)(tt.MoreVerticalIcon, {
                                        size: "custom",
                                        color: "currentColor",
                                        width: tw,
                                        height: tw,
                                    }),
                                }),
                            }),
                        ],
                    }),
                }),
            ],
        });
    }),
    tw = 18,
    tT = ["sourceInviteCode", "joinSourceType", "inviterId", "integrationType", "joinedAt", "joinedAtTimestamp"],
    tU = C.memo(function (e) {
        let {
                userId: t,
                guildId: l,
                style: n,
                rowSelected: s,
                isLoading: r = !1,
                isHoldingAdvancedInfoKey: o = !1,
                compact: c = !1,
            } = e,
            { analyticsLocations: u } = (0, f.Ay)(),
            m = (0, d.bG)([tu.Ay], () => tu.Ay.getGuildSidebarState(l), [l]),
            h = m?.details.userId === t,
            g = (0, d.bG)([ee.A], () => ee.A.getEnhancedMember(l, t), [l, t]),
            H = (0, ei.YH)(g),
            x = (0, d.bG)([A.default], () => A.default.getUser(t), [t]),
            p = (0, tr.q)(l),
            j = (0, ei.UY)(g ?? void 0),
            v = C.useCallback(
                (e) => {
                    (e.stopPropagation(), e.preventDefault(), j(e));
                },
                [j],
            ),
            V = C.useCallback(
                (e) => {
                    (e.stopPropagation(), e.preventDefault(), null != g && (0, ei.Ko)(g, u));
                },
                [g, u],
            ),
            b = C.useCallback(
                (e) => {
                    (e.stopPropagation(),
                        e.preventDefault(),
                        null != g &&
                            (p
                                ? (0, ta.z)(g.guildId, g.userId, tD.VV.MEMBER_SAFETY, { modViewPanel: tE.g.INFO })
                                : (0, ei.Ko)(g, u)));
                },
                [g, u, p],
            ),
            M = C.useCallback((e, t) => ed()((0, e7.omit)(e, tT), (0, e7.omit)(t, tT)), []);
        return null == g
            ? null
            : (0, i.jsx)(tM, {
                  role: "row",
                  value: g,
                  style: n,
                  className: a()(e5.yF, e5.iA, s && e5.wH, h && e5.qb, r && e5.Lq),
                  equalityFn: M,
                  onClick: V,
                  onContextMenu: v,
                  children: (0, i.jsx)(t_, {
                      member: g,
                      user: x,
                      highestRole: H,
                      isHoldingAdvancedInfoKey: o,
                      onOpenModerationMenu: v,
                      onOpenMemberView: b,
                      compact: c,
                      hasModViewPanelAccess: p,
                  }),
              });
    });
var tO = l(551816),
    tk = l(299720);
function tF(e) {
    let { guild: t, onSubmit: n } = e,
        s = (0, d.bG)([ee.A], () => ee.A.getMembersCountByGuildId(t.id, tO.Tu.NEW_GUILD_MEMBER), [t.id]),
        a = (0, d.bG)(
            [ee.A],
            () => {
                let e = ee.A.getNewMemberTimestamp(t.id);
                return eb()(e).format("h:mm A");
            },
            [t.id],
        ),
        r = (0, d.bG)([ee.A], () => ee.A.hasDefaultSearchStateByGuildId(t.id), [t.id]),
        o = C.useCallback(() => {
            ((0, et.UD)(t.id), n?.());
        }, [t.id, n]),
        u = C.useCallback(() => {
            r
                ? o()
                : (0, c.mM)(async () => {
                      let { default: e } = await l.e(256562).then(l.bind(l, 470857));
                      return (t) => (0, i.jsx)(e, { ...t, onConfirm: o });
                  });
        }, [o, r]),
        m = new Intl.NumberFormat(es.intl.currentLocale).format(s),
        h = (0, ev.Y0)(t.id),
        f = (0, ev.vA)(t.id),
        g = C.useMemo(() => 1 + +!!h + +!!f, [h, f]);
    return 0 === s
        ? null
        : (0, i.jsxs)("tr", {
              className: tk.iS,
              onClick: u,
              children: [
                  (0, i.jsx)("td", {
                      colSpan: 3,
                      children: (0, i.jsx)(en.E, {
                          variant: "body-sm/normal",
                          color: "text-overlay-light",
                          children: es.intl.format(es.t["/i5uJ1"], { count: m, date: a }),
                      }),
                  }),
                  (0, i.jsx)("td", { colSpan: g }),
                  (0, i.jsx)("td", {
                      colSpan: 2,
                      children: (0, i.jsx)("div", {
                          className: e5.$E,
                          children: (0, i.jsx)(ec.D, {
                              onClick: u,
                              className: tk.Fu,
                              children: (0, i.jsxs)(en.E, {
                                  variant: "body-sm/normal",
                                  color: "text-overlay-light",
                                  className: tk.Lb,
                                  children: [
                                      (0, i.jsx)("div", { children: es.intl.string(es.t.rkyOzK) }),
                                      (0, i.jsx)(te.UserIcon, {
                                          size: "custom",
                                          color: "currentColor",
                                          width: 16,
                                          height: 16,
                                          className: tk.Ke,
                                      }),
                                  ],
                              }),
                          }),
                      }),
                  }),
              ],
          });
}
var tG = l(650583),
    tB = l(532120);
let tP = { transform: "translate3d(15%, 0, 0)", opacity: 0.3 },
    tq = { transform: "translate3d(5%, 0, 0)", opacity: 0.5 },
    tz = { transform: "translate3d(0, 0, 0)", opacity: 1 },
    tY = { mass: 1.1, friction: 24, tension: 260 };
function tK(e) {
    return e.shiftKey || e.key === tG.dh.SHIFT;
}
function t$(e) {
    return e.metaKey || e.ctrlKey || ["Meta", "Control"].includes(e.key);
}
let tW = C.memo(
        function (e) {
            let {
                    members: t,
                    guild: l,
                    className: n,
                    searchState: s,
                    compact: r,
                    onSelectRow: o,
                    onResetForNewMembers: f,
                } = e,
                g = (0, d.bG)([h.Ay], () => h.Ay.useReducedMotion),
                H = (0, d.bG)([X.A], () => X.A.hasPendingBulkBan(l.id), [l.id]),
                x = (0, c.Rv)(),
                p = (0, Q.j)(),
                [j, v] = C.useState(!1),
                [V, b] = C.useState(!1),
                M = !x && j && V;
            (C.useEffect(() => {
                p || (v(!1), b(!1));
            }, [p]),
                C.useLayoutEffect(() => {
                    function e(e) {
                        (tK(e) && v(!0), t$(e) && b(!0));
                    }
                    function t(e) {
                        (tK(e) && v(!1), t$(e) && b(!1));
                    }
                    return (
                        window.addEventListener("keydown", e),
                        window.addEventListener("keyup", t),
                        () => {
                            (window.removeEventListener("keydown", e), window.removeEventListener("keyup", t));
                        }
                    );
                }, []),
                C.useEffect(() => {
                    (0, et.jo)(l.id, t);
                }, [l.id, t]));
            let A = t.length > 30,
                L = (0, u.p)(t, {
                    key: (e) => e,
                    trail: A ? 5 : 15,
                    from(e) {
                        let t = ee.A.getEnhancedMember(l.id, e),
                            n = ee.A.getLastRefreshTimestamp(l.id),
                            i = null == t || 0 === n,
                            C = null != t && t.refreshTimestamp === n;
                        return i || !C ? tz : A ? tq : tP;
                    },
                    enter: tz,
                    config: tY,
                }),
                D = !g && s === ei.IY.LOADING;
            return (0, i.jsxs)("table", {
                className: a()(tB.tp, n),
                children: [
                    (0, i.jsx)(e9, { guildId: l.id, currentPagedMembers: t }),
                    H &&
                        (0, i.jsx)("tbody", {
                            children: (0, i.jsx)("tr", {
                                children: (0, i.jsx)("td", {
                                    colSpan: 99,
                                    className: tB.cg,
                                    children: (0, i.jsxs)("div", {
                                        className: tB.pZ,
                                        children: [
                                            (0, i.jsx)("div", {
                                                className: tB.sj,
                                                children: (0, i.jsx)("div", { className: tB.S0 }),
                                            }),
                                            (0, i.jsx)(m.w, {
                                                type: "info",
                                                message: es.intl.string(es.t["UP+9QZ"]),
                                                role: "status",
                                            }),
                                        ],
                                    }),
                                }),
                            }),
                        }),
                    (0, i.jsx)("tbody", {
                        className: a()({ [tB.u6]: H }),
                        children:
                            s === ei.IY.SUCCESS_FULL || s === ei.IY.LOADING
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(tF, { guild: l, onSubmit: f }),
                                          L((e, t) =>
                                              (0, i.jsx)(
                                                  tU,
                                                  {
                                                      userId: t,
                                                      guildId: l.id,
                                                      style: e,
                                                      onSelect: o,
                                                      isHoldingAdvancedInfoKey: M,
                                                      compact: r,
                                                      isLoading: D,
                                                  },
                                                  t,
                                              ),
                                          ),
                                      ],
                                  })
                                : (0, i.jsx)("td", { colSpan: 7, children: (0, i.jsx)(er, { searchState: s }) }),
                    }),
                ],
            });
        },
        function (e, t) {
            let l = o()(e.members, t.members),
                n = e.guild.id === t.guild.id,
                i = e.searchState === t.searchState,
                C = e.compact === t.compact;
            return l && n && i && C;
        },
    ),
    tQ = function (e) {
        var t;
        let { guild: l, className: n, searchState: s, compact: a, onSelectRow: r, onResetForNewMembers: o } = e,
            c = (0, d.cf)([ee.A], () => ee.A.getPaginationStateByGuildId(l.id), [l.id]),
            [u] = (0, d.bG)([ee.A], () => ee.A.getPagedMembersByGuildId(l.id), [l.id], W.D);
        ((t = l.id),
            C.useEffect(
                () => (
                    el.Cf(t),
                    () => {
                        el.G9(t);
                    }
                ),
                [t],
            ),
            C.useEffect(() => {
                (0, et.uO)(l.id);
            }, [l.id]));
        let m = C.useDeferredValue(u[c.currentPage] ?? []);
        C.useEffect(() => {
            !(function (e, t) {
                let l = Date.now(),
                    n = b.default.getId(),
                    i = D.get(e),
                    C = !1;
                for (let s of t) {
                    if (s === n || null != U(e, s) || !T(M.Ay.getTrueMember(e, s))) continue;
                    let t = i?.get(s);
                    if (null != t && l - t < 3e5) {
                        !(function (e, t, l) {
                            let n = y.get(e);
                            (null == n && ((n = new Map()), y.set(e, n)), n.set(t, l), P(l));
                        })(e, s, t + 3e5);
                        continue;
                    }
                    (k(e, s), (C = !0));
                }
                C && G();
            })(l.id, m);
        }, [l.id, m]);
        let { analyticsLocations: h } = (0, f.Ay)(),
            g = h?.[0] ?? null;
        return (
            C.useEffect(() => {
                (0, J.KW)(l.id, g);
            }, [l.id, g]),
            (0, i.jsx)(tW, {
                members: m,
                guild: l,
                className: n,
                searchState: s,
                compact: a,
                onSelectRow: r,
                onResetForNewMembers: o,
            })
        );
    };
