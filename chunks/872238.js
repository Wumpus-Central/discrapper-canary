l.d(t, { A: () => tf });
var n,
    i = l(477900),
    C = l(582128),
    s = l(503698),
    a = l.n(s),
    r = l(812729),
    d = l.n(r),
    o = l(702841),
    c = l(192308),
    u = l(866323),
    m = l(683071),
    H = l(775602),
    x = l(688810),
    h = l(996439),
    g = l(218394),
    f = l(879408),
    j = l(504049),
    p = l(151781),
    v = l(221950),
    V = l(361610),
    A = l(834730),
    M = l(189552),
    L = l(636670),
    b = l(375708),
    D = l(602083);
function R(e) {
    let { searchState: t } = e,
        l = C.useMemo(
            () => ({
                [M.IY.LOADING]: null,
                [M.IY.SUCCESS_STILL_INDEXING]: { icon: null, message: b.intl.string(b.t.AXPbZr) },
                [M.IY.SUCCESS_EMPTY]: { icon: (0, i.jsx)(L.A, {}), message: b.intl.string(b.t.wdyR52) },
                [M.IY.SUCCESS_FULL]: null,
            }),
            [],
        )[t];
    return null == l
        ? null
        : (0, i.jsxs)("div", {
              className: D.p,
              children: [
                  null != l.icon &&
                      (0, i.jsx)("div", { className: D.__invalid_noResultsIconContainer, children: l.icon }),
                  (0, i.jsx)(A.E, { variant: "text-md/normal", color: "text-muted", children: l.message }),
              ],
          });
}
var E = l(811315),
    S = l.n(E),
    N = l(939249),
    Z = l(783977),
    I = l(661531),
    y = l(866665),
    _ = l(658675),
    w = l(922016),
    U = l(71393),
    T = l(576705),
    O = l(70738),
    k = l(587426),
    F = l(134413),
    G = l(536637),
    B = l.n(G),
    P = l(156828),
    q = l(980707),
    z = l(477782),
    Y = l(320448),
    K = l(921853),
    $ = l(282054),
    Q = l(652215),
    X = l(351114);
let W = "MMM Do, YYYY",
    J = B()("2015-05-15").local(),
    ee = (0, P.Fe)({ createPromise: () => Promise.resolve().then(l.bind(l, 939538)), webpackId: 939538 });
var et =
    (((n = {})[(n.ALL = 0)] = "ALL"),
    (n[(n["1_HOUR"] = 1)] = "1_HOUR"),
    (n[(n["24_HOURS"] = 2)] = "24_HOURS"),
    (n[(n["7_DAYS"] = 3)] = "7_DAYS"),
    (n[(n["2_WEEKS"] = 4)] = "2_WEEKS"),
    (n[(n["4_WEEKS"] = 5)] = "4_WEEKS"),
    (n[(n["3_MONTHS"] = 6)] = "3_MONTHS"),
    (n[(n.CUSTOM = 7)] = "CUSTOM"),
    n);
function el(e) {
    let {
            startDateLabel: t,
            endDateLabel: l,
            afterDate: n,
            beforeDate: s,
            selectedOption: r,
            isCustomDateRange: d,
            menuName: o,
            onClose: c,
            onSelectDateOption: u,
            onToggleCustomDateRange: m,
            onSelectStartDate: H,
            onSelectEndDate: x,
        } = e,
        h = [
            { id: 0, option: null, label: b.intl.string(b.t.jelCib) },
            { id: 1, option: { input: 1, unit: "h" }, label: b.intl.string(b.t["91RDqi"]) },
            { id: 2, option: { input: 24, unit: "h" }, label: b.intl.string(b.t["Lj/1Tq"]) },
            { id: 3, option: { input: 7, unit: "d" }, label: b.intl.string(b.t.NnUMSZ) },
            { id: 4, option: { input: 2, unit: "w" }, label: b.intl.string(b.t.hY3XWH) },
            { id: 5, option: { input: 4, unit: "w" }, label: b.intl.string(b.t.kQTwT0) },
            { id: 6, option: { input: 3, unit: "M" }, label: b.intl.string(b.t.EPuP0s) },
        ],
        [g, f] = C.useState(!1),
        j =
            7 !== r
                ? null
                : null != t && null != l
                  ? `${t} - ${l}`
                  : null != t
                    ? b.intl.formatToPlainString(b.t.ClmSzd, { date: t })
                    : null != l
                      ? b.intl.formatToPlainString(b.t.YvNhsd, { date: l })
                      : null,
        p = C.useCallback(() => {
            (f(!0), m());
        }, [m]),
        v = C.useCallback(
            (e) => {
                H(e);
            },
            [H],
        ),
        V = C.useCallback(
            (e) => {
                x(e);
            },
            [x],
        ),
        M = C.useCallback(() => {
            (null == s && null == n && u(0, null), f(!1));
        }, [n, s, u]);
    return (0, i.jsx)(q.W, {
        "data-menu-needs-migration": !0,
        navId: `member-safety-guild-member-${o}-menu`,
        onClose: c,
        "aria-label": b.intl.string(b.t.k9m8Rg),
        onSelect: Q.tEg,
        children: (0, i.jsx)(z.rX, {
            children: g
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(z.Dr, {
                              id: "back",
                              action: M,
                              dontCloseOnAction: !0,
                              render: (e) =>
                                  (0, i.jsxs)("span", {
                                      ...e,
                                      className: X.W6,
                                      children: [
                                          (0, i.jsx)(K.n, {
                                              size: "custom",
                                              color: "currentColor",
                                              width: 16,
                                              height: 16,
                                          }),
                                          (0, i.jsx)(A.E, {
                                              variant: "eyebrow",
                                              color: "text-strong",
                                              children: b.intl.string(b.t.BTfN6g),
                                          }),
                                      ],
                                  }),
                          }),
                          (0, i.jsx)(z.Dr, {
                              id: "after-date-menu-item",
                              label: b.intl.string(b.t.RDqVOD),
                              subtext: t,
                              subMenuClassName: X.aD,
                              children: (0, i.jsx)(z.Dr, {
                                  id: "after-date-picker",
                                  render: (e) =>
                                      (0, i.jsx)(ee, {
                                          ...e,
                                          calendarClassName: X.BJ,
                                          value: d && null != n ? B()(n) : void 0,
                                          onSelect: v,
                                          maxDate: B()().local(),
                                          minDate: J,
                                      }),
                              }),
                          }),
                          (0, i.jsx)(z.Dr, {
                              id: "before-date-menu-item",
                              label: b.intl.string(b.t.jF54hQ),
                              subtext: l,
                              subMenuClassName: X.aD,
                              children: (0, i.jsx)(z.Dr, {
                                  id: "before-date-picker",
                                  render: (e) =>
                                      (0, i.jsx)(ee, {
                                          ...e,
                                          calendarClassName: X.BJ,
                                          value: d && null != s ? B()(s) : void 0,
                                          onSelect: V,
                                          maxDate: B()().local(),
                                          minDate: d && null != n ? B()(n) : J,
                                      }),
                              }),
                          }),
                      ],
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          h.map((e) => {
                              let { id: t, option: l, label: n } = e;
                              return (0, i.jsx)(
                                  z.iD,
                                  {
                                      group: `member-safety-guild-member-${o}-menu`,
                                      id: `guild-member-${o}-option-${t}`,
                                      label: n,
                                      action: () => u(t, l),
                                      checked: t === r,
                                  },
                                  `option-${t}`,
                              );
                          }),
                          (0, i.jsx)(z.bX, {}),
                          (0, i.jsx)(z.Dr, {
                              id: `guild-member-${o}-custom-option}`,
                              action: p,
                              dontCloseOnAction: !0,
                              render: (e) =>
                                  (0, i.jsxs)("div", {
                                      className: a()(X.Dh, { [X.in]: e.isFocused }),
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: X.jA,
                                              children: [
                                                  (0, i.jsx)(A.E, {
                                                      className: a()(X.ty, { [X.in]: e.isFocused }),
                                                      variant: "text-sm/medium",
                                                      children: b.intl.string(b.t.BTfN6g),
                                                  }),
                                                  null != j &&
                                                      (0, i.jsx)(A.E, {
                                                          className: a()(X.ty, { [X.in]: e.isFocused }),
                                                          color: "text-muted",
                                                          variant: "text-xxs/medium",
                                                          children: j,
                                                      }),
                                              ],
                                          }),
                                          7 === r
                                              ? (0, i.jsx)($.A, { foreground: X.QE, width: 18, height: 18 })
                                              : (0, i.jsx)(Y._, {
                                                    size: "custom",
                                                    color: "currentColor",
                                                    width: 16,
                                                    height: 16,
                                                    className: a()(X.ty, { [X.in]: e.isFocused }),
                                                }),
                                      ],
                                  }),
                          }),
                      ],
                  }),
        }),
    });
}
function en(e) {
    let { guildId: t, onClose: l } = e,
        n = (0, o.bG)([p.A], () => p.A.getSearchStateByGuildId(t), [t], S()),
        { selectedAccountAgeOption: C } = n,
        { afterDate: s, beforeDate: a, optionId: r } = C,
        d = r === et.CUSTOM,
        c = d && null != s ? B()(s).format(W) : null,
        u = d && null != a ? B()(a).format(W) : null;
    return (0, i.jsx)(el, {
        startDateLabel: c,
        endDateLabel: u,
        afterDate: s,
        beforeDate: a,
        selectedOption: r,
        isCustomDateRange: d,
        menuName: "account-age",
        accessibilityLabel: b.intl.string(b.t["D++Tgf"]),
        onClose: l,
        onSelectDateOption: function (e, l) {
            let i = null != l ? B()().subtract(l.input, l.unit).valueOf() : null;
            (0, v.Ld)(t, { ...n, selectedAccountAgeOption: { optionId: e, afterDate: i, beforeDate: null } });
        },
        onToggleCustomDateRange: function () {
            (0, v.Ld)(t, {
                ...n,
                selectedAccountAgeOption: { optionId: et.CUSTOM, afterDate: d ? s : null, beforeDate: d ? a : null },
            });
        },
        onSelectStartDate: function (e) {
            (0, v.Ld)(t, {
                ...n,
                selectedAccountAgeOption: { optionId: et.CUSTOM, afterDate: e.valueOf(), beforeDate: a },
            });
        },
        onSelectEndDate: function (e) {
            (0, v.Ld)(t, {
                ...n,
                selectedAccountAgeOption: { optionId: et.CUSTOM, afterDate: s, beforeDate: e.valueOf() },
            });
        },
    });
}
var ei = l(565787),
    eC = l(953822),
    es = l(60270),
    ea = l(353182),
    er = l(953727);
function ed(e) {
    let { width: t = 24, height: l = 24, color: n = "currentColor", ...C } = e;
    return (0, i.jsxs)("svg", {
        ...(0, er.A)(C),
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
let eo = (0, ei.k)(ed);
function ec(e) {
    let { guildId: t, onClose: l } = e,
        n = (0, o.bG)([p.A], () => p.A.getSearchStateByGuildId(t), [t], S()),
        s = (0, j.Tj)(t),
        a = C.useCallback(() => {
            (n.requireUnusualDmActivity || s(j.Zp.UNUSUAL_DM_ACTIVITY),
                (0, v.Ld)(t, { ...n, requireUnusualDmActivity: !n.requireUnusualDmActivity }));
        }, [t, n, s]),
        r = C.useCallback(() => {
            (n.requireCommunicationDisabled || s(j.Zp.COMMUNICATION_DISABLED),
                (0, v.Ld)(t, { ...n, requireCommunicationDisabled: !n.requireCommunicationDisabled }));
        }, [t, n, s]),
        d = C.useCallback(() => {
            (n.requireUnusualAccountActivity || s(j.Zp.UNUSUAL_ACCOUNT_ACTIVITY),
                (0, v.Ld)(t, { ...n, requireUnusualAccountActivity: !n.requireUnusualAccountActivity }));
        }, [t, n, s]),
        c = C.useCallback(() => {
            (n.requireUsernameQuarantined || s(j.Zp.USERNAME_QUARANTINED),
                (0, v.Ld)(t, { ...n, requireUsernameQuarantined: !n.requireUsernameQuarantined }));
        }, [t, n, s]);
    return (0, i.jsx)(q.W, {
        "data-menu-migrated": !0,
        navId: "member-safety-flags",
        onClose: l,
        "aria-label": b.intl.string(b.t.k9m8Rg),
        onSelect: Q.tEg,
        children: (0, i.jsxs)(z.rX, {
            children: [
                (0, i.jsx)(z.sL, {
                    id: "toggle-require-unusual-dm-activity",
                    label: b.intl.string(b.t.ZRnON3),
                    leftIcon: eC.E,
                    leadingAccessory: { type: "icon", icon: eC.E },
                    action: a,
                    checked: n.requireUnusualDmActivity,
                }),
                (0, i.jsx)(z.sL, {
                    id: "toggle-require-communication-disabled",
                    label: b.intl.string(b.t.z3wbj8),
                    leftIcon: es.g,
                    leadingAccessory: { type: "icon", icon: es.g },
                    action: r,
                    checked: n.requireCommunicationDisabled,
                }),
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(z.sL, {
                            id: "toggle-require-unusual-account-activity",
                            label: b.intl.string(b.t.DIQsD9),
                            leftIcon: eo,
                            leadingAccessory: { type: "icon", icon: eo },
                            action: d,
                            checked: n.requireUnusualAccountActivity,
                        }),
                        (0, i.jsx)(z.sL, {
                            id: "toggle-require-username-quarantined",
                            label: b.intl.string(b.t.Jloklk),
                            leftIcon: ea._,
                            leadingAccessory: { type: "icon", icon: ea._ },
                            action: c,
                            checked: n.requireUsernameQuarantined,
                        }),
                    ],
                }),
            ],
        }),
    });
}
function eu(e) {
    let { guildId: t, onClose: l } = e,
        n = (0, o.bG)([p.A], () => p.A.getSearchStateByGuildId(t), [t], S()),
        { selectedJoinDateOption: C } = n,
        { afterDate: s, beforeDate: a, optionId: r } = C,
        d = r === et.CUSTOM,
        c = d && null != s ? B()(s).format(W) : null,
        u = d && null != a ? B()(a).format(W) : null;
    return (0, i.jsx)(el, {
        startDateLabel: c,
        endDateLabel: u,
        afterDate: s,
        beforeDate: a,
        selectedOption: r,
        isCustomDateRange: d,
        menuName: "joined-date",
        accessibilityLabel: b.intl.string(b.t.XMVinX),
        onClose: l,
        onSelectDateOption: function (e, l) {
            let i = null != l ? B()().subtract(l.input, l.unit).valueOf() : null;
            (0, v.Ld)(t, { ...n, selectedJoinDateOption: { optionId: e, afterDate: i, beforeDate: null } });
        },
        onToggleCustomDateRange: function () {
            (0, v.Ld)(t, {
                ...n,
                selectedJoinDateOption: { optionId: et.CUSTOM, afterDate: d ? s : null, beforeDate: d ? a : null },
            });
        },
        onSelectStartDate: function (e) {
            (0, v.Ld)(t, {
                ...n,
                selectedJoinDateOption: { optionId: et.CUSTOM, afterDate: e.valueOf(), beforeDate: a },
            });
        },
        onSelectEndDate: function (e) {
            (0, v.Ld)(t, {
                ...n,
                selectedJoinDateOption: { optionId: et.CUSTOM, afterDate: s, beforeDate: e.valueOf() },
            });
        },
    });
}
var em = l(316173),
    eH = l(91871),
    ex = l.n(eH),
    eh = l(17928),
    eg = l(602853),
    ef = l(583650),
    ej = l(676608),
    ep = l(34457),
    ev = l(317525);
function eV(e) {
    let { guildId: t, onClose: l } = e,
        n = (0, j.hs)(t),
        [s, a] = C.useState(""),
        r = (0, o.bG)([p.A], () => p.A.getSearchStateByGuildId(t), [t], S()),
        d = (0, o.bG)([H.Ay], () => H.Ay.roleStyle),
        c = (0, eg.r)(I.A.unsafe_rawColors.PRIMARY_300).hex(),
        u = (0, ej.jV)(t, null),
        m = (0, eh.yK)([ev.A], () => ev.A.getSortedRoles(t).filter((e) => !(0, ep.Oy)(e)), [t]),
        x = C.useMemo(() => ("" === s ? m : m.filter((e) => ex()(s.toLowerCase(), e.name.toLowerCase()))), [m, s]),
        h = C.useCallback(
            (e) => {
                let l = new Set(r.selectedRoleIds);
                (l.has(e) ? l.delete(e) : l.add(e), (0, v.Ld)(t, { selectedRoleIds: l }), n(l));
            },
            [t, r.selectedRoleIds, n],
        );
    return (0, i.jsx)(q.W, {
        "data-menu-migrated": !0,
        navId: "member-safety-roles",
        onClose: l,
        "aria-label": b.intl.string(b.t.ZveC7e),
        onSelect: Q.tEg,
        children: (0, i.jsxs)(z.rX, {
            children: [
                (0, i.jsx)(z.aK, {
                    id: "members-table-role-search",
                    control: (e, t) =>
                        (0, i.jsx)(ef.V, {
                            ...e,
                            query: s,
                            onChange: a,
                            ref: t,
                            placeholder: b.intl.string(b.t.ZveC7e),
                        }),
                }),
                (0, i.jsx)(z.bX, {}),
                x.map((e) => {
                    let t = e.colorString ?? c,
                        l =
                            u && e.colorStrings?.primaryColor != null && e.colorStrings?.secondaryColor != null
                                ? e.colorStrings
                                : null;
                    return (0, i.jsx)(
                        z.sL,
                        {
                            id: `role-${e.id}`,
                            label: e.name,
                            leadingAccessory: {
                                type: "roleDot",
                                variant: "dot" === d ? "dot" : "circle",
                                color: t,
                                colors: l,
                            },
                            checked: r.selectedRoleIds.has(e.id),
                            action: () => h(e.id),
                        },
                        e.id,
                    );
                }),
            ],
        }),
    });
}
var eA = l(307877),
    eM = l(917089);
let eL = C.forwardRef(function (e, t) {
    let { label: l, onFilter: n, isFiltered: C, isSorted: s, className: r, ...d } = e,
        o = C ? "text-strong" : "text-default";
    return (
        s && (o = "text-brand"),
        (0, i.jsx)("th", {
            className: a()(eA.P1, r),
            children: (0, i.jsxs)(N.D, {
                ...d,
                innerRef: t,
                onClick: n,
                className: a()(eA.WV, { [eA.o1]: null != n }),
                children: [
                    (0, i.jsx)(A.E, { variant: "eyebrow", color: o, children: l }),
                    null != n &&
                        (0, i.jsx)("div", {
                            className: eA.IO,
                            children: (0, i.jsx)(Z.R, {
                                size: "custom",
                                className: eA.Sj,
                                color: C ? I.A.colors.CONTROL_BRAND_FOREGROUND.css : I.A.colors.TEXT_MUTED.css,
                                width: 16,
                                height: 16,
                            }),
                        }),
                ],
            }),
        })
    );
});
function eb(e) {
    let { guildId: t, currentPagedMembers: l } = e,
        n = C.useRef(null),
        s = C.useRef(null),
        r = C.useRef(null),
        d = C.useRef(null),
        c = C.useRef(null),
        u = (0, o.bG)([p.A], () => p.A.getSearchStateByGuildId(t), [t], S()),
        m = (0, o.bG)([T.A, U.A], () => T.A.can(Q.xBc.MANAGE_GUILD, U.A.getGuild(t)), [t]),
        { selectedUserIds: H, addUsers: x, clearSelection: h } = (0, k.A)(t),
        g =
            u.requireUnusualDmActivity ||
            u.requireCommunicationDisabled ||
            u.requireUnusualAccountActivity ||
            u.requireUsernameQuarantined,
        f = u.selectedRoleIds.size > 0,
        j = null != u.selectedJoinDateOption.afterDate,
        v = u.selectedSort === O.mF.ORDER_BY_GUILD_JOINED_AT_ASC,
        V = null != u.selectedAccountAgeOption.afterDate,
        A = u.selectedSort === O.mF.ORDER_BY_USER_ID_ASC || u.selectedSort === O.mF.ORDER_BY_USER_ID_DESC,
        M = null != u.selectedSourceInviteCode && "" !== u.selectedSourceInviteCode,
        L = null != u.selectedJoinSourceType,
        D = M || L,
        R = (0, F.vA)(t),
        E = C.useMemo(() => l.filter((e) => (0, F.Ph)(t, R, e)), [R, l, t]),
        Z = E.length > 0,
        I = 0 === E.filter((e) => !H.has(e)).length,
        G = C.useCallback(() => {
            Z && (I ? h() : x(E));
        }, [Z, I, h, x, E]);
    return (0, i.jsx)("thead", {
        children: (0, i.jsxs)("tr", {
            className: eA.Yk,
            children: [
                R &&
                    (0, i.jsx)("th", {
                        className: a()(eA.P1, eM.y2),
                        children: (0, i.jsx)(y.m, {
                            shouldShow: !Z,
                            text: b.intl.string(b.t.tJEY0G),
                            children: (0, i.jsx)(N.D, {
                                onClick: G,
                                className: eA.WV,
                                children: (0, i.jsx)(_.P, { checked: I, disabled: !Z }),
                            }),
                        }),
                    }),
                (0, i.jsx)(eL, { label: b.intl.string(b.t.Es7n9c) }),
                m
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(w.Y, {
                                  targetElementRef: n,
                                  animation: w.Y.Animation.FADE,
                                  position: "bottom",
                                  spacing: 4,
                                  align: "left",
                                  renderPopout: (e) => {
                                      let { closePopout: l } = e;
                                      return (0, i.jsx)(eu, { guildId: t, onClose: l });
                                  },
                                  children: (e) => {
                                      let { onClick: t, ...l } = e;
                                      return (0, i.jsx)(eL, {
                                          ref: n,
                                          label: b.intl.string(b.t.xcKP1P),
                                          onFilter: t,
                                          isFiltered: j,
                                          isSorted: v,
                                          className: eM.qp,
                                          ...l,
                                      });
                                  },
                              }),
                              (0, i.jsx)(w.Y, {
                                  targetElementRef: s,
                                  animation: w.Y.Animation.FADE,
                                  position: "bottom",
                                  spacing: 4,
                                  align: "left",
                                  renderPopout: (e) => {
                                      let { closePopout: l } = e;
                                      return (0, i.jsx)(en, { guildId: t, onClose: l });
                                  },
                                  children: (e) => {
                                      let { onClick: t, ...l } = e;
                                      return (0, i.jsx)(eL, {
                                          ref: s,
                                          label: b.intl.string(b.t.sPph4O),
                                          onFilter: t,
                                          isFiltered: V,
                                          isSorted: A,
                                          className: eM.qp,
                                          ...l,
                                      });
                                  },
                              }),
                          ],
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(eL, { label: b.intl.string(b.t.xcKP1P), className: eM.qp }),
                              (0, i.jsx)(eL, { label: b.intl.string(b.t.sPph4O), className: eM.qp }),
                          ],
                      }),
                m
                    ? (0, i.jsx)(w.Y, {
                          targetElementRef: r,
                          animation: w.Y.Animation.FADE,
                          position: "bottom",
                          spacing: 4,
                          align: "left",
                          renderPopout: (e) => {
                              let { closePopout: l } = e;
                              return (0, i.jsx)(em.default, { guildId: t, onClose: l });
                          },
                          children: (e) => {
                              let { onClick: t, ...l } = e;
                              return (0, i.jsx)(eL, {
                                  ref: r,
                                  label: b.intl.string(b.t["yn0w1+"]),
                                  onFilter: t,
                                  isFiltered: D,
                                  className: eM.qp,
                                  ...l,
                              });
                          },
                      })
                    : null,
                (0, i.jsx)(w.Y, {
                    targetElementRef: d,
                    animation: w.Y.Animation.FADE,
                    position: "bottom",
                    autoInvert: !1,
                    spacing: 4,
                    align: "left",
                    renderPopout: (e) => {
                        let { closePopout: l } = e;
                        return (0, i.jsx)(eV, { guildId: t, onClose: l });
                    },
                    children: (e) => {
                        let { onClick: t, ...l } = e;
                        return (0, i.jsx)(eL, {
                            ref: d,
                            label: b.intl.string(b.t["2SZsWX"]),
                            onFilter: t,
                            isFiltered: f,
                            className: eM.QB,
                            ...l,
                        });
                    },
                }),
                (0, i.jsx)(y.m, {
                    text: b.intl.string(b.t["2cRO3R"]),
                    position: "top",
                    align: "left",
                    shouldShow: !0,
                    children: (0, i.jsx)(w.Y, {
                        targetElementRef: c,
                        animation: w.Y.Animation.FADE,
                        position: "bottom",
                        spacing: 4,
                        align: "left",
                        renderPopout: (e) => {
                            let { closePopout: l } = e;
                            return (0, i.jsx)(ec, { guildId: t, onClose: l });
                        },
                        children: (e) =>
                            (0, i.jsx)(eL, {
                                ref: c,
                                label: b.intl.string(b.t["7V3759"]),
                                "aria-label": b.intl.string(b.t["2cRO3R"]),
                                onFilter: (t) => {
                                    e.onClick?.(t);
                                },
                                isFiltered: g,
                                className: eM.qp,
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
                (0, i.jsx)(eL, { label: b.intl.string(b.t["5Q9xGr"]), className: eM.qp }),
            ],
        }),
    });
}
var eD = l(435558),
    eR = l(307301),
    eE = l(463930),
    eS = l(950305),
    eN = l(530005),
    eZ = l(966327),
    eI = l(396583),
    ey = l(576470),
    e_ = l(229527),
    ew = l(316031),
    eU = l(901472),
    eT = l(985925),
    eO = l(534400),
    ek = l(694318),
    eF = l(967144),
    eG = l(761640),
    eB = l(287809),
    eP = l(881548),
    eq = l(562153),
    ez = l(935208),
    eY = l(427262),
    eK = l(157347),
    e$ = l(202091),
    eQ = l(615300),
    eX = l(717421),
    eW = l(475743);
let eJ = { duration: 100, easing: eQ.A.Easing.inOut(eQ.A.Easing.back()), clamp: !0 },
    e1 = { duration: 2e3, easing: eQ.A.Easing.quad, clamp: !0 };
function e3(e) {
    let { value: t, children: l, equalityFn: n = S(), style: s, ...a } = e,
        r = (0, eW.Ay)(t),
        [{ spring: d }, o] = (0, eX.z)(() => ({ spring: 0 }), "animate-always"),
        c = (0, eg.r)(I.A.colors.BACKGROUND_BASE_LOW).hex(),
        u = (0, eg.r)(I.A.colors.CONTROL_BRAND_FOREGROUND).hex(),
        m = C.useCallback(() => {
            (o({ spring: 1, config: eJ }), o({ spring: 0, config: e1, delay: 300 }));
        }, [o]);
    C.useEffect(() => {
        null == t || null == r || n(t, r) || m();
    }, [m, t, r, n]);
    let H = d?.to({ range: [0, 1], output: [`${c}00`, `${u}27`] }),
        x = null != s ? { ...s, backgroundColor: H } : { backgroundColor: H };
    return (0, i.jsx)(e$.animated.tr, { ...a, style: x, children: l });
}
var e8 = l(589935),
    e4 = l(950072),
    e5 = l(746080),
    e2 = l(486974);
let e9 = C.memo(function (e) {
        let { member: t } = e,
            l = C.useMemo(() => (0, ew.n)(t.communicationDisabledUntil), [t.communicationDisabledUntil]),
            n = C.useMemo(
                () => (null == t.communicationDisabledUntil ? new Date() : new Date(t.communicationDisabledUntil)),
                [t.communicationDisabledUntil],
            );
        return (0, i.jsxs)("div", {
            className: eM.Ak,
            children: [
                t.hasUnusualDmActivity &&
                    (0, i.jsx)(y.m, {
                        text: b.intl.string(b.t.QrfVTp),
                        children: (0, i.jsx)(eC.E, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: I.A.colors.TEXT_MUTED.css,
                        }),
                    }),
                l &&
                    (0, i.jsx)(y.m, {
                        "aria-label": b.intl.string(b.t["xfJP+u"]),
                        __unsupportedReactNodeAsText: (0, i.jsxs)("div", {
                            className: eM.CN,
                            children: [
                                (0, i.jsx)("div", { children: b.intl.string(b.t["xfJP+u"]) }),
                                (0, i.jsx)(ey.A, { deadline: n, showUnits: !0, stopAtOneSec: !0 }),
                            ],
                        }),
                        children: (0, i.jsx)(es.g, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: I.A.colors.TEXT_FEEDBACK_CRITICAL.css,
                        }),
                    }),
                (0, ek.cx)(t.userId) &&
                    (0, i.jsx)(y.m, {
                        text: b.intl.string(b.t.PK9FQ2),
                        children: (0, i.jsx)(ed, {
                            width: 20,
                            height: 20,
                            color: I.A.colors.TEXT_FEEDBACK_CRITICAL.css,
                        }),
                    }),
                (0, e_.TR)(t) &&
                    (0, i.jsx)(y.m, {
                        text: b.intl.string(b.t.qOVbaX),
                        children: (0, i.jsx)(ea._, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: I.A.colors.TEXT_MUTED.css,
                        }),
                    }),
            ],
        });
    }),
    e7 = C.memo(function (e) {
        let { member: t, highestRole: l } = e,
            n = (0, o.bG)([U.A], () => U.A.getGuild(t.guildId), [t.guildId]),
            s = t.roles.length - 1,
            r = C.useMemo(() => new Intl.NumberFormat(b.intl.currentLocale).format(s), [s]),
            d = (0, M.Cy)(t),
            c = (0, M.Cy)(t, !0),
            u = (0, o.bG)([T.A], () => T.A.can(Q.xBc.MANAGE_ROLES, n), [n]);
        return null == n
            ? null
            : (0, i.jsxs)("div", {
                  className: eM.yk,
                  children: [
                      null != l && (0, i.jsx)(e4.A, { className: a()(eM.Zf, eM.Lc), role: l, guildId: t.guildId }),
                      s > 0 &&
                          (0, i.jsx)(N.D, {
                              className: eM.yt,
                              onClick: (e) => c(e),
                              children: (0, i.jsx)(y.m, {
                                  text: b.intl.string(b.t.DY6n4q),
                                  children: (0, i.jsxs)(A.E, {
                                      variant: "text-xs/medium",
                                      color: "text-strong",
                                      children: ["+", r],
                                  }),
                              }),
                          }),
                      u &&
                          (0, i.jsx)(y.m, {
                              text: b.intl.string(b.t.h3pSLR),
                              children: (0, i.jsx)(N.D, {
                                  onClick: d,
                                  className: a()(eM.yt, eM.$g),
                                  children: (0, i.jsx)(eR.j, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: eM.fd,
                                      width: 16,
                                      height: 16,
                                  }),
                              }),
                          }),
                  ],
              });
    }),
    e6 = C.memo(function (e) {
        let { member: t, user: l } = e,
            n = (0, eF.gn)(t?.guildId, t?.userId, t?.colorStrings ?? null);
        return null == l || null == t
            ? null
            : (0, i.jsxs)("div", {
                  className: eM.FD,
                  children: [
                      (0, i.jsx)("div", { className: eM.Wn, children: (0, i.jsx)(eZ.A, { user: l }) }),
                      (0, i.jsx)("div", {
                          className: eM.eg,
                          children: (0, i.jsx)(A.E, {
                              variant: "text-sm/medium",
                              children: (0, i.jsxs)("div", {
                                  className: eM.VW,
                                  children: [
                                      (0, i.jsx)(eE.g, {
                                          name: eq.Ay.getName(t.guildId, null, l),
                                          colorString: t.colorString ?? null,
                                          colorStrings: n,
                                          className: eM.bc,
                                      }),
                                      (0, i.jsx)(eO.Ay, {
                                          primaryGuild: l?.primaryGuild,
                                          userId: l?.id,
                                          contextGuildId: t.guildId,
                                          containerClassName: eM.Dz,
                                      }),
                                  ],
                              }),
                          }),
                      }),
                      (0, i.jsx)("div", {
                          className: eM.Br,
                          children: (0, i.jsx)(A.E, {
                              variant: "text-xs/normal",
                              color: "text-default",
                              tag: "span",
                              children: eY.Ay.getUserTag(l),
                          }),
                      }),
                  ],
              });
    });
function e0(e) {
    return {
        short: null == e ? null : (0, eK.hL)(e, eK.wN.JOINED_AT),
        long: new Date(e ?? 0).toLocaleDateString(b.intl.currentLocale, eK.wp),
    };
}
function te(e) {
    let { member: t, showLongDate: l, isSortedBy: n } = e,
        [s, a] = C.useState(null);
    (C.useEffect(() => {
        a(e0(t.joinedAtTimestamp));
    }, [t.joinedAtTimestamp]),
        (0, eI.A)(() => {
            a(e0(t.joinedAtTimestamp));
        }, 1e4));
    let r = n ? "text-brand" : "text-default";
    return s?.short == null
        ? null
        : l
          ? (0, i.jsx)("div", {
                className: eM.__invalid_joinedAtContainer,
                children: (0, i.jsx)(A.E, { variant: "text-sm/medium", color: r, children: s.long }),
            })
          : (0, i.jsx)("div", {
                className: eM.__invalid_joinedAtContainer,
                children: (0, i.jsx)(y.m, {
                    align: "left",
                    __unsupportedReactNodeAsText: s.long,
                    children: (0, i.jsx)(A.E, { variant: "text-sm/medium", color: r, children: s.short }),
                }),
            });
}
let tt = C.memo(function (e) {
        let { member: t, showLongDate: l, isSortedBy: n } = e,
            { accountCreationDateShort: s, accountCreationDateLong: a } = C.useMemo(() => {
                let e = ez.default.extractTimestamp(t.userId);
                return {
                    accountCreationDateShort: (0, eK.hL)(e, eK.wN.ACCOUNT_AGE),
                    accountCreationDateLong: new Date(e).toLocaleDateString(b.intl.currentLocale, eK.OA),
                };
            }, [t.userId]),
            r = n ? "text-brand" : "text-default";
        return l
            ? (0, i.jsx)(A.E, { variant: "text-sm/medium", color: r, children: a })
            : (0, i.jsx)(y.m, {
                  align: "left",
                  __unsupportedReactNodeAsText: a,
                  children: (0, i.jsx)(A.E, { variant: "text-sm/medium", color: r, children: s }),
              });
    }),
    tl = C.memo(function (e) {
        let {
                member: t,
                user: l,
                highestRole: n,
                isHoldingAdvancedInfoKey: s,
                onOpenModerationMenu: r,
                onOpenMemberView: d,
                compact: c,
                hasModViewPanelAccess: u,
            } = e,
            m = (0, o.bG)([T.A, U.A], () => T.A.can(Q.xBc.MANAGE_GUILD, U.A.getGuild(t.guildId)), [t.guildId]),
            { selectedUserIds: H, addUsers: x, removeUser: h } = (0, k.A)(t.guildId),
            g = (0, F.vA)(t.guildId),
            f = (0, F.O6)(t.guildId, g, t.userId),
            j = (0, o.bG)(
                [p.A],
                () => p.A.getSearchStateByGuildId(t.guildId).selectedSort ?? O.mF.ORDER_BY_UNSPECIFIED,
                [t.guildId],
                S(),
            ),
            v = C.useCallback(
                (e) => {
                    (e.stopPropagation(),
                        e.preventDefault(),
                        null != t && f && (H.has(t.userId) ? h(t.userId) : x([t.userId])));
                },
                [x, f, t, h, H],
            ),
            V = j === O.mF.ORDER_BY_GUILD_JOINED_AT_ASC,
            A = j === O.mF.ORDER_BY_USER_ID_ASC || j === O.mF.ORDER_BY_USER_ID_DESC;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                g &&
                    (0, i.jsx)("td", {
                        children: (0, i.jsx)(y.m, {
                            shouldShow: !f,
                            ariaHidden: f,
                            text: b.intl.string(b.t["Se4c7+"]),
                            children: (0, i.jsx)(N.D, {
                                onClick: v,
                                children: (0, i.jsx)(_.P, { checked: H.has(t.userId), disabled: !f }),
                            }),
                        }),
                    }),
                (0, i.jsx)("td", {
                    className: a()(eM.QB, { [eM.oE]: c }),
                    children: (0, i.jsx)(e6, { member: t, user: l }),
                }),
                (0, i.jsx)("td", {
                    className: a()(eM.qp, { [eM.oE]: c }),
                    children: (0, i.jsx)(te, { showLongDate: s, member: t, isSortedBy: V }),
                }),
                (0, i.jsx)("td", {
                    className: a()(eM.qp, { [eM.oE]: c }),
                    children: (0, i.jsx)(tt, { showLongDate: s, member: t, isSortedBy: A }),
                }),
                m &&
                    (0, i.jsx)("td", {
                        className: a()(eM.qp, { [eM.oE]: c }),
                        children: (0, i.jsx)(e8.Ay, { userId: t.userId, guildId: t.guildId }),
                    }),
                (0, i.jsx)("td", {
                    className: a()(eM.QB, { [eM.oE]: c }),
                    children: (0, i.jsx)(e7, { member: t, highestRole: n }),
                }),
                (0, i.jsx)("td", { className: a()(eM.qp, { [eM.oE]: c }), children: (0, i.jsx)(e9, { member: t }) }),
                (0, i.jsx)("td", {
                    className: a()(eM.OL, { [eM.oE]: c }),
                    children: (0, i.jsxs)("div", {
                        className: eM.$E,
                        children: [
                            (0, i.jsx)(y.m, {
                                asContainer: !0,
                                text: u ? b.intl.string(b.t.nHfkf4) : b.intl.string(b.t.uTre2y),
                                children: (0, i.jsx)(N.D, {
                                    onClick: d,
                                    className: eM.x6,
                                    children: u
                                        ? (0, i.jsx)(eP.A, { width: tn, height: tn })
                                        : (0, i.jsx)(eS.UserIcon, {
                                              size: "custom",
                                              color: "currentColor",
                                              width: tn,
                                              height: tn,
                                          }),
                                }),
                            }),
                            (0, i.jsx)(y.m, {
                                asContainer: !0,
                                text: b.intl.string(b.t.x8Nn4M),
                                children: (0, i.jsx)(N.D, {
                                    onClick: r,
                                    className: eM.x6,
                                    children: (0, i.jsx)(eN.F, {
                                        size: "custom",
                                        color: "currentColor",
                                        width: tn,
                                        height: tn,
                                    }),
                                }),
                            }),
                        ],
                    }),
                }),
            ],
        });
    }),
    tn = 18,
    ti = ["sourceInviteCode", "joinSourceType", "inviterId", "integrationType", "joinedAt", "joinedAtTimestamp"],
    tC = C.memo(function (e) {
        let {
                userId: t,
                guildId: l,
                style: n,
                rowSelected: s,
                isLoading: r = !1,
                isHoldingAdvancedInfoKey: d = !1,
                compact: c = !1,
            } = e,
            { analyticsLocations: u } = (0, x.Ay)(),
            m = (0, o.bG)([eG.Ay], () => eG.Ay.getGuildSidebarState(l), [l]),
            H = m?.details.userId === t,
            h = (0, o.bG)([p.A], () => p.A.getEnhancedMember(l, t), [l, t]),
            g = (0, M.YH)(h),
            f = (0, o.bG)([eB.default], () => eB.default.getUser(t), [t]),
            j = (0, eT.q)(l),
            v = (0, M.UY)(h ?? void 0),
            V = C.useCallback(
                (e) => {
                    (e.stopPropagation(), e.preventDefault(), v(e));
                },
                [v],
            ),
            A = C.useCallback(
                (e) => {
                    (e.stopPropagation(), e.preventDefault(), null != h && (0, M.Ko)(h, u));
                },
                [h, u],
            ),
            L = C.useCallback(
                (e) => {
                    (e.stopPropagation(),
                        e.preventDefault(),
                        null != h &&
                            (j
                                ? (0, eU.z)(h.guildId, h.userId, e5.VV.MEMBER_SAFETY, { modViewPanel: e2.g.INFO })
                                : (0, M.Ko)(h, u)));
                },
                [h, u, j],
            ),
            b = C.useCallback((e, t) => S()((0, eD.omit)(e, ti), (0, eD.omit)(t, ti)), []);
        return null == h
            ? null
            : (0, i.jsx)(e3, {
                  role: "row",
                  value: h,
                  style: n,
                  className: a()(eM.yF, eM.iA, s && eM.wH, H && eM.qb, r && eM.Lq),
                  equalityFn: b,
                  onClick: A,
                  onContextMenu: V,
                  children: (0, i.jsx)(tl, {
                      member: h,
                      user: f,
                      highestRole: g,
                      isHoldingAdvancedInfoKey: d,
                      onOpenModerationMenu: V,
                      onOpenMemberView: L,
                      compact: c,
                      hasModViewPanelAccess: j,
                  }),
              });
    });
var ts = l(551816),
    ta = l(299720);
function tr(e) {
    let { guild: t, onSubmit: n } = e,
        s = (0, o.bG)([p.A], () => p.A.getMembersCountByGuildId(t.id, ts.Tu.NEW_GUILD_MEMBER), [t.id]),
        a = (0, o.bG)(
            [p.A],
            () => {
                let e = p.A.getNewMemberTimestamp(t.id);
                return B()(e).format("h:mm A");
            },
            [t.id],
        ),
        r = (0, o.bG)([p.A], () => p.A.hasDefaultSearchStateByGuildId(t.id), [t.id]),
        d = C.useCallback(() => {
            ((0, v.UD)(t.id), n?.());
        }, [t.id, n]),
        u = C.useCallback(() => {
            r
                ? d()
                : (0, c.openModalLazy)(async () => {
                      let { default: e } = await l.e("256562").then(l.bind(l, 470857));
                      return (t) => (0, i.jsx)(e, { ...t, onConfirm: d });
                  });
        }, [d, r]),
        m = new Intl.NumberFormat(b.intl.currentLocale).format(s),
        H = (0, F.Y0)(t.id),
        x = (0, F.vA)(t.id),
        h = C.useMemo(() => 1 + +!!H + +!!x, [H, x]);
    return 0 === s
        ? null
        : (0, i.jsxs)("tr", {
              className: ta.iS,
              onClick: u,
              children: [
                  (0, i.jsx)("td", {
                      colSpan: 3,
                      children: (0, i.jsx)(A.E, {
                          variant: "text-sm/normal",
                          color: "text-overlay-light",
                          children: b.intl.format(b.t["/i5uJ1"], { count: m, date: a }),
                      }),
                  }),
                  (0, i.jsx)("td", { colSpan: h }),
                  (0, i.jsx)("td", {
                      colSpan: 2,
                      children: (0, i.jsx)("div", {
                          className: eM.$E,
                          children: (0, i.jsx)(N.D, {
                              onClick: u,
                              className: ta.Fu,
                              children: (0, i.jsxs)(A.E, {
                                  variant: "text-sm/normal",
                                  color: "text-overlay-light",
                                  className: ta.Lb,
                                  children: [
                                      (0, i.jsx)("div", { children: b.intl.string(b.t.rkyOzK) }),
                                      (0, i.jsx)(eS.UserIcon, {
                                          size: "custom",
                                          color: "currentColor",
                                          width: 16,
                                          height: 16,
                                          className: ta.Ke,
                                      }),
                                  ],
                              }),
                          }),
                      }),
                  }),
              ],
          });
}
var td = l(650583),
    to = l(532120);
let tc = { transform: "translate3d(15%, 0, 0)", opacity: 0.3 },
    tu = { transform: "translate3d(5%, 0, 0)", opacity: 0.5 },
    tm = { transform: "translate3d(0, 0, 0)", opacity: 1 },
    tH = { mass: 1.1, friction: 24, tension: 260 };
function tx(e) {
    return e.shiftKey || e.key === td.dh.SHIFT;
}
function th(e) {
    return e.metaKey || e.ctrlKey || ["Meta", "Control"].includes(e.key);
}
let tg = C.memo(
        function (e) {
            let {
                    members: t,
                    guild: l,
                    className: n,
                    searchState: s,
                    compact: r,
                    onSelectRow: d,
                    onResetForNewMembers: x,
                } = e,
                h = (0, o.bG)([H.Ay], () => H.Ay.useReducedMotion),
                j = (0, o.bG)([f.A], () => f.A.hasPendingBulkBan(l.id), [l.id]),
                V = (0, c.useHasAnyModalOpen)(),
                A = (0, g.j)(),
                [L, D] = C.useState(!1),
                [E, S] = C.useState(!1),
                N = !V && L && E;
            (C.useEffect(() => {
                A || (D(!1), S(!1));
            }, [A]),
                C.useLayoutEffect(() => {
                    function e(e) {
                        (tx(e) && D(!0), th(e) && S(!0));
                    }
                    function t(e) {
                        (tx(e) && D(!1), th(e) && S(!1));
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
                    (0, v.jo)(l.id, t);
                }, [l.id, t]));
            let Z = t.length > 30,
                I = (0, u.p)(t, {
                    key: (e) => e,
                    trail: Z ? 5 : 15,
                    from(e) {
                        let t = p.A.getEnhancedMember(l.id, e),
                            n = p.A.getLastRefreshTimestamp(l.id),
                            i = null == t || 0 === n,
                            C = null != t && t.refreshTimestamp === n;
                        return i || !C ? tm : Z ? tu : tc;
                    },
                    enter: tm,
                    config: tH,
                }),
                y = !h && s === M.IY.LOADING;
            return (0, i.jsxs)("table", {
                className: a()(to.tp, n),
                children: [
                    (0, i.jsx)(eb, { guildId: l.id, currentPagedMembers: t }),
                    j &&
                        (0, i.jsx)("tbody", {
                            children: (0, i.jsx)("tr", {
                                children: (0, i.jsx)("td", {
                                    colSpan: 99,
                                    className: to.cg,
                                    children: (0, i.jsxs)("div", {
                                        className: to.pZ,
                                        children: [
                                            (0, i.jsx)("div", {
                                                className: to.sj,
                                                children: (0, i.jsx)("div", { className: to.S0 }),
                                            }),
                                            (0, i.jsx)(m.w, { type: "info", children: b.intl.string(b.t["UP+9QZ"]) }),
                                        ],
                                    }),
                                }),
                            }),
                        }),
                    (0, i.jsx)("tbody", {
                        className: a()({ [to.u6]: j }),
                        children:
                            s === M.IY.SUCCESS_FULL || s === M.IY.LOADING
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(tr, { guild: l, onSubmit: x }),
                                          I((e, t) =>
                                              (0, i.jsx)(
                                                  tC,
                                                  {
                                                      userId: t,
                                                      guildId: l.id,
                                                      style: e,
                                                      onSelect: d,
                                                      isHoldingAdvancedInfoKey: N,
                                                      compact: r,
                                                      isLoading: y,
                                                  },
                                                  t,
                                              ),
                                          ),
                                      ],
                                  })
                                : (0, i.jsx)("td", { colSpan: 7, children: (0, i.jsx)(R, { searchState: s }) }),
                    }),
                ],
            });
        },
        function (e, t) {
            let l = d()(e.members, t.members),
                n = e.guild.id === t.guild.id,
                i = e.searchState === t.searchState,
                C = e.compact === t.compact;
            return l && n && i && C;
        },
    ),
    tf = function (e) {
        var t;
        let { guild: l, className: n, searchState: s, compact: a, onSelectRow: r, onResetForNewMembers: d } = e,
            c = (0, o.cf)([p.A], () => p.A.getPaginationStateByGuildId(l.id), [l.id]),
            [u] = (0, o.bG)([p.A], () => p.A.getPagedMembersByGuildId(l.id), [l.id], h.D);
        ((t = l.id),
            C.useEffect(
                () => (
                    V.Cf(t),
                    () => {
                        V.G9(t);
                    }
                ),
                [t],
            ),
            C.useEffect(() => {
                (0, v.uO)(l.id);
            }, [l.id]));
        let m = C.useDeferredValue(u[c.currentPage] ?? []),
            { analyticsLocations: H } = (0, x.Ay)(),
            g = H?.[0] ?? null;
        return (
            C.useEffect(() => {
                (0, j.KW)(l.id, g);
            }, [l.id, g]),
            (0, i.jsx)(tg, {
                members: m,
                guild: l,
                className: n,
                searchState: s,
                compact: a,
                onSelectRow: r,
                onResetForNewMembers: d,
            })
        );
    };
