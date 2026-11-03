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
    h = l(688810),
    x = l(996439),
    g = l(218394),
    f = l(879408),
    j = l(504049),
    p = l(151781),
    v = l(221950),
    V = l(361610),
    b = l(834730),
    A = l(189552),
    M = l(636670),
    L = l(105292),
    D = l(602083);
function R(e) {
    let { searchState: t } = e,
        l = C.useMemo(
            () => ({
                [A.IY.LOADING]: null,
                [A.IY.SUCCESS_STILL_INDEXING]: { icon: null, message: L.intl.string(L.t.AXPbZr) },
                [A.IY.SUCCESS_EMPTY]: { icon: (0, i.jsx)(M.A, {}), message: L.intl.string(L.t.wdyR52) },
                [A.IY.SUCCESS_FULL]: null,
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
                  (0, i.jsx)(b.E, { variant: "body-md/normal", color: "text-muted", children: l.message }),
              ],
          });
}
var E = l(811315),
    S = l.n(E),
    N = l(939249),
    y = l(783977),
    Z = l(661531),
    I = l(866665),
    _ = l(658675),
    w = l(265872),
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
    W = l(351114);
let X = "MMM Do, YYYY",
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
            onSelectEndDate: h,
        } = e,
        x = [
            { id: 0, option: null, label: L.intl.string(L.t.jelCib) },
            { id: 1, option: { input: 1, unit: "h" }, label: L.intl.string(L.t["91RDqi"]) },
            { id: 2, option: { input: 24, unit: "h" }, label: L.intl.string(L.t["Lj/1Tq"]) },
            { id: 3, option: { input: 7, unit: "d" }, label: L.intl.string(L.t.NnUMSZ) },
            { id: 4, option: { input: 2, unit: "w" }, label: L.intl.string(L.t.hY3XWH) },
            { id: 5, option: { input: 4, unit: "w" }, label: L.intl.string(L.t.kQTwT0) },
            { id: 6, option: { input: 3, unit: "M" }, label: L.intl.string(L.t.EPuP0s) },
        ],
        [g, f] = C.useState(!1),
        j =
            7 !== r
                ? null
                : null != t && null != l
                  ? `${t} - ${l}`
                  : null != t
                    ? L.intl.formatToPlainString(L.t.ClmSzd, { date: t })
                    : null != l
                      ? L.intl.formatToPlainString(L.t.YvNhsd, { date: l })
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
                h(e);
            },
            [h],
        ),
        A = C.useCallback(() => {
            (null == s && null == n && u(0, null), f(!1));
        }, [n, s, u]);
    return (0, i.jsx)(q.W, {
        "data-menu-needs-migration": !0,
        navId: `member-safety-guild-member-${o}-menu`,
        onClose: c,
        "aria-label": L.intl.string(L.t.k9m8Rg),
        onSelect: Q.tEg,
        children: (0, i.jsx)(z.rX, {
            children: g
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(z.Dr, {
                              id: "back",
                              action: A,
                              dontCloseOnAction: !0,
                              render: (e) =>
                                  (0, i.jsxs)("span", {
                                      ...e,
                                      className: W.W6,
                                      children: [
                                          (0, i.jsx)(K.n, {
                                              size: "custom",
                                              color: "currentColor",
                                              width: 16,
                                              height: 16,
                                          }),
                                          (0, i.jsx)(b.E, {
                                              variant: "body-sm/medium",
                                              color: "text-strong",
                                              children: L.intl.string(L.t.BTfN6g),
                                          }),
                                      ],
                                  }),
                          }),
                          (0, i.jsx)(z.Dr, {
                              id: "after-date-menu-item",
                              label: L.intl.string(L.t.RDqVOD),
                              subtext: t,
                              subMenuClassName: W.aD,
                              children: (0, i.jsx)(z.Dr, {
                                  id: "after-date-picker",
                                  render: (e) =>
                                      (0, i.jsx)(ee, {
                                          ...e,
                                          calendarClassName: W.BJ,
                                          value: d && null != n ? B()(n) : void 0,
                                          onSelect: v,
                                          maxDate: B()().local(),
                                          minDate: J,
                                      }),
                              }),
                          }),
                          (0, i.jsx)(z.Dr, {
                              id: "before-date-menu-item",
                              label: L.intl.string(L.t.jF54hQ),
                              subtext: l,
                              subMenuClassName: W.aD,
                              children: (0, i.jsx)(z.Dr, {
                                  id: "before-date-picker",
                                  render: (e) =>
                                      (0, i.jsx)(ee, {
                                          ...e,
                                          calendarClassName: W.BJ,
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
                          x.map((e) => {
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
                                      className: a()(W.Dh, { [W.in]: e.isFocused }),
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: W.jA,
                                              children: [
                                                  (0, i.jsx)(b.E, {
                                                      className: a()(W.ty, { [W.in]: e.isFocused }),
                                                      variant: "body-sm/medium",
                                                      children: L.intl.string(L.t.BTfN6g),
                                                  }),
                                                  null != j &&
                                                      (0, i.jsx)(b.E, {
                                                          className: a()(W.ty, { [W.in]: e.isFocused }),
                                                          color: "text-muted",
                                                          variant: "footnote/medium",
                                                          children: j,
                                                      }),
                                              ],
                                          }),
                                          7 === r
                                              ? (0, i.jsx)($.A, { foreground: W.QE, width: 18, height: 18 })
                                              : (0, i.jsx)(Y._, {
                                                    size: "custom",
                                                    color: "currentColor",
                                                    width: 16,
                                                    height: 16,
                                                    className: a()(W.ty, { [W.in]: e.isFocused }),
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
        c = d && null != s ? B()(s).format(X) : null,
        u = d && null != a ? B()(a).format(X) : null;
    return (0, i.jsx)(el, {
        startDateLabel: c,
        endDateLabel: u,
        afterDate: s,
        beforeDate: a,
        selectedOption: r,
        isCustomDateRange: d,
        menuName: "account-age",
        accessibilityLabel: L.intl.string(L.t["D++Tgf"]),
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
        "aria-label": L.intl.string(L.t.k9m8Rg),
        onSelect: Q.tEg,
        children: (0, i.jsxs)(z.rX, {
            children: [
                (0, i.jsx)(z.sL, {
                    id: "toggle-require-unusual-dm-activity",
                    label: L.intl.string(L.t.ZRnON3),
                    leftIcon: eC.E,
                    leadingAccessory: { type: "icon", icon: eC.E },
                    action: a,
                    checked: n.requireUnusualDmActivity,
                }),
                (0, i.jsx)(z.sL, {
                    id: "toggle-require-communication-disabled",
                    label: L.intl.string(L.t.z3wbj8),
                    leftIcon: es.g,
                    leadingAccessory: { type: "icon", icon: es.g },
                    action: r,
                    checked: n.requireCommunicationDisabled,
                }),
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(z.sL, {
                            id: "toggle-require-unusual-account-activity",
                            label: L.intl.string(L.t.DIQsD9),
                            leftIcon: eo,
                            leadingAccessory: { type: "icon", icon: eo },
                            action: d,
                            checked: n.requireUnusualAccountActivity,
                        }),
                        (0, i.jsx)(z.sL, {
                            id: "toggle-require-username-quarantined",
                            label: L.intl.string(L.t.Jloklk),
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
        c = d && null != s ? B()(s).format(X) : null,
        u = d && null != a ? B()(a).format(X) : null;
    return (0, i.jsx)(el, {
        startDateLabel: c,
        endDateLabel: u,
        afterDate: s,
        beforeDate: a,
        selectedOption: r,
        isCustomDateRange: d,
        menuName: "joined-date",
        accessibilityLabel: L.intl.string(L.t.XMVinX),
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
    eh = l.n(eH),
    ex = l(17928),
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
        c = (0, eg.r)(Z.A.unsafe_rawColors.PRIMARY_300).hex(),
        u = (0, ej.jV)(t, null),
        m = (0, ex.yK)([ev.A], () => ev.A.getSortedRoles(t).filter((e) => !(0, ep.Oy)(e)), [t]),
        h = C.useMemo(() => ("" === s ? m : m.filter((e) => eh()(s.toLowerCase(), e.name.toLowerCase()))), [m, s]),
        x = C.useCallback(
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
        "aria-label": L.intl.string(L.t.ZveC7e),
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
                            placeholder: L.intl.string(L.t.ZveC7e),
                        }),
                }),
                (0, i.jsx)(z.bX, {}),
                h.map((e) => {
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
                            action: () => x(e.id),
                        },
                        e.id,
                    );
                }),
            ],
        }),
    });
}
var eb = l(307877),
    eA = l(917089);
function eM(e) {
    let { label: t, onFilter: l, isFiltered: n, isSorted: C, className: s, ref: r, ...d } = e,
        o = n ? "text-strong" : "text-default";
    return (
        C && (o = "text-brand"),
        (0, i.jsx)("th", {
            className: a()(eb.P1, s),
            children: (0, i.jsxs)(N.D, {
                ...d,
                innerRef: r,
                onClick: l,
                className: a()(eb.WV, { [eb.o1]: null != l }),
                children: [
                    (0, i.jsx)(b.E, { variant: "body-sm/medium", color: o, children: t }),
                    null != l &&
                        (0, i.jsx)("div", {
                            className: eb.IO,
                            children: (0, i.jsx)(y.R, {
                                size: "custom",
                                className: eb.Sj,
                                color: n ? Z.A.colors.CONTROL_BRAND_FOREGROUND.css : Z.A.colors.TEXT_MUTED.css,
                                width: 16,
                                height: 16,
                            }),
                        }),
                ],
            }),
        })
    );
}
function eL(e) {
    let { guildId: t, currentPagedMembers: l } = e,
        n = C.useRef(null),
        s = C.useRef(null),
        r = C.useRef(null),
        d = C.useRef(null),
        c = C.useRef(null),
        u = (0, o.bG)([p.A], () => p.A.getSearchStateByGuildId(t), [t], S()),
        m = (0, o.bG)([T.A, U.A], () => T.A.can(Q.xBc.MANAGE_GUILD, U.A.getGuild(t)), [t]),
        { selectedUserIds: H, addUsers: h, clearSelection: x } = (0, k.A)(t),
        g =
            u.requireUnusualDmActivity ||
            u.requireCommunicationDisabled ||
            u.requireUnusualAccountActivity ||
            u.requireUsernameQuarantined,
        f = u.selectedRoleIds.size > 0,
        j = null != u.selectedJoinDateOption.afterDate,
        v = u.selectedSort === O.mF.ORDER_BY_GUILD_JOINED_AT_ASC,
        V = null != u.selectedAccountAgeOption.afterDate,
        b = u.selectedSort === O.mF.ORDER_BY_USER_ID_ASC || u.selectedSort === O.mF.ORDER_BY_USER_ID_DESC,
        A = null != u.selectedSourceInviteCode && "" !== u.selectedSourceInviteCode,
        M = null != u.selectedJoinSourceType,
        D = A || M,
        R = (0, F.vA)(t),
        E = C.useMemo(() => l.filter((e) => (0, F.Ph)(t, R, e)), [R, l, t]),
        y = E.length > 0,
        Z = 0 === E.filter((e) => !H.has(e)).length,
        G = C.useCallback(() => {
            y && (Z ? x() : h(E));
        }, [y, Z, x, h, E]);
    return (0, i.jsx)("thead", {
        children: (0, i.jsxs)("tr", {
            className: eb.Yk,
            children: [
                R &&
                    (0, i.jsx)("th", {
                        className: a()(eb.P1, eA.y2),
                        children: (0, i.jsx)(I.m, {
                            shouldShow: !y,
                            text: L.intl.string(L.t.tJEY0G),
                            children: (0, i.jsx)(N.D, {
                                onClick: G,
                                className: eb.WV,
                                children: (0, i.jsx)(_.P, { checked: Z, disabled: !y }),
                            }),
                        }),
                    }),
                (0, i.jsx)(eM, { label: L.intl.string(L.t.Es7n9c) }),
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
                                      return (0, i.jsx)(eM, {
                                          ref: n,
                                          label: L.intl.string(L.t.xcKP1P),
                                          onFilter: t,
                                          isFiltered: j,
                                          isSorted: v,
                                          className: eA.qp,
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
                                      return (0, i.jsx)(eM, {
                                          ref: s,
                                          label: L.intl.string(L.t.sPph4O),
                                          onFilter: t,
                                          isFiltered: V,
                                          isSorted: b,
                                          className: eA.qp,
                                          ...l,
                                      });
                                  },
                              }),
                          ],
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(eM, { label: L.intl.string(L.t.xcKP1P), className: eA.qp }),
                              (0, i.jsx)(eM, { label: L.intl.string(L.t.sPph4O), className: eA.qp }),
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
                              return (0, i.jsx)(eM, {
                                  ref: r,
                                  label: L.intl.string(L.t["yn0w1+"]),
                                  onFilter: t,
                                  isFiltered: D,
                                  className: eA.qp,
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
                        return (0, i.jsx)(eM, {
                            ref: d,
                            label: L.intl.string(L.t["2SZsWX"]),
                            onFilter: t,
                            isFiltered: f,
                            className: eA.QB,
                            ...l,
                        });
                    },
                }),
                (0, i.jsx)(I.m, {
                    text: L.intl.string(L.t["2cRO3R"]),
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
                            (0, i.jsx)(eM, {
                                ref: c,
                                label: L.intl.string(L.t["7V3759"]),
                                "aria-label": L.intl.string(L.t["2cRO3R"]),
                                onFilter: (t) => {
                                    e.onClick?.(t);
                                },
                                isFiltered: g,
                                className: eA.qp,
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
                (0, i.jsx)(eM, { label: L.intl.string(L.t["5Q9xGr"]), className: eA.qp }),
            ],
        }),
    });
}
var eD = l(435558),
    eR = l(307301),
    eE = l(463930),
    eS = l(950305),
    eN = l(530005),
    ey = l(966327),
    eZ = l(396583),
    eI = l(576470),
    e_ = l(229527),
    ew = l(316031),
    eU = l(901472),
    eT = l(985925),
    eO = l(534400),
    ek = l(694318),
    eF = l(967144),
    eG = l(358047),
    eB = l(287809),
    eP = l(881548),
    eq = l(562153),
    ez = l(935208),
    eY = l(427262),
    eK = l(157347),
    e$ = l(29477),
    eQ = l(615300),
    eW = l(717421),
    eX = l(475743);
let eJ = { duration: 100, easing: eQ.A.Easing.inOut(eQ.A.Easing.back()), clamp: !0 },
    e1 = { duration: 2e3, easing: eQ.A.Easing.quad, clamp: !0 };
function e3(e) {
    let { value: t, children: l, equalityFn: n = S(), style: s, ...a } = e,
        r = (0, eX.Ay)(t),
        [{ spring: d }, o] = (0, eW.z)(() => ({ spring: 0 }), "animate-always"),
        c = (0, eg.r)(Z.A.colors.BACKGROUND_BASE_LOW).hex(),
        u = (0, eg.r)(Z.A.colors.CONTROL_BRAND_FOREGROUND).hex(),
        m = C.useCallback(() => {
            (o({ spring: 1, config: eJ }), o({ spring: 0, config: e1, delay: 300 }));
        }, [o]);
    C.useEffect(() => {
        null == t || null == r || n(t, r) || m();
    }, [m, t, r, n]);
    let H = d?.to({ range: [0, 1], output: [`${c}00`, `${u}27`] }),
        h = null != s ? { ...s, backgroundColor: H } : { backgroundColor: H };
    return (0, i.jsx)(e$.animated.tr, { ...a, style: h, children: l });
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
            className: eA.Ak,
            children: [
                t.hasUnusualDmActivity &&
                    (0, i.jsx)(I.m, {
                        text: L.intl.string(L.t.QrfVTp),
                        children: (0, i.jsx)(eC.E, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: Z.A.colors.TEXT_MUTED.css,
                        }),
                    }),
                l &&
                    (0, i.jsx)(I.m, {
                        "aria-label": L.intl.string(L.t["xfJP+u"]),
                        __unsupportedReactNodeAsText: (0, i.jsxs)("div", {
                            className: eA.CN,
                            children: [
                                (0, i.jsx)("div", { children: L.intl.string(L.t["xfJP+u"]) }),
                                (0, i.jsx)(eI.A, { deadline: n, showUnits: !0, stopAtOneSec: !0 }),
                            ],
                        }),
                        children: (0, i.jsx)(es.g, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: Z.A.colors.TEXT_FEEDBACK_CRITICAL.css,
                        }),
                    }),
                (0, ek.cx)(t.userId) &&
                    (0, i.jsx)(I.m, {
                        text: L.intl.string(L.t.PK9FQ2),
                        children: (0, i.jsx)(ed, {
                            width: 20,
                            height: 20,
                            color: Z.A.colors.TEXT_FEEDBACK_CRITICAL.css,
                        }),
                    }),
                (0, e_.TR)(t) &&
                    (0, i.jsx)(I.m, {
                        text: L.intl.string(L.t.qOVbaX),
                        children: (0, i.jsx)(ea._, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: Z.A.colors.TEXT_MUTED.css,
                        }),
                    }),
            ],
        });
    }),
    e7 = C.memo(function (e) {
        let { member: t, highestRole: l } = e,
            n = (0, o.bG)([U.A], () => U.A.getGuild(t.guildId), [t.guildId]),
            s = t.roles.length - 1,
            r = C.useMemo(() => new Intl.NumberFormat(L.intl.currentLocale).format(s), [s]),
            d = (0, A.Cy)(t),
            c = (0, A.Cy)(t, !0),
            u = (0, o.bG)([T.A], () => T.A.can(Q.xBc.MANAGE_ROLES, n), [n]);
        return null == n
            ? null
            : (0, i.jsxs)("div", {
                  className: eA.yk,
                  children: [
                      null != l && (0, i.jsx)(e4.A, { className: a()(eA.Zf, eA.Lc), role: l, guildId: t.guildId }),
                      s > 0 &&
                          (0, i.jsx)(N.D, {
                              className: eA.yt,
                              onClick: (e) => c(e),
                              children: (0, i.jsx)(I.m, {
                                  text: L.intl.string(L.t.DY6n4q),
                                  children: (0, i.jsxs)(b.E, {
                                      variant: "body-xs/medium",
                                      color: "text-strong",
                                      children: ["+", r],
                                  }),
                              }),
                          }),
                      u &&
                          (0, i.jsx)(I.m, {
                              text: L.intl.string(L.t.h3pSLR),
                              children: (0, i.jsx)(N.D, {
                                  onClick: d,
                                  className: a()(eA.yt, eA.$g),
                                  children: (0, i.jsx)(eR.j, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: eA.fd,
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
                  className: eA.FD,
                  children: [
                      (0, i.jsx)("div", { className: eA.Wn, children: (0, i.jsx)(ey.A, { user: l }) }),
                      (0, i.jsx)("div", {
                          className: eA.eg,
                          children: (0, i.jsx)(b.E, {
                              variant: "body-sm/medium",
                              children: (0, i.jsxs)("div", {
                                  className: eA.VW,
                                  children: [
                                      (0, i.jsx)(eE.g, {
                                          name: eq.Ay.getName(t.guildId, null, l),
                                          colorString: t.colorString ?? null,
                                          colorStrings: n,
                                          className: eA.bc,
                                      }),
                                      (0, i.jsx)(eO.Ay, {
                                          primaryGuild: l?.primaryGuild,
                                          userId: l?.id,
                                          contextGuildId: t.guildId,
                                          containerClassName: eA.Dz,
                                      }),
                                  ],
                              }),
                          }),
                      }),
                      (0, i.jsx)("div", {
                          className: eA.Br,
                          children: (0, i.jsx)(b.E, {
                              variant: "body-xs/normal",
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
        long: new Date(e ?? 0).toLocaleDateString(L.intl.currentLocale, eK.wp),
    };
}
function te(e) {
    let { member: t, showLongDate: l, isSortedBy: n } = e,
        [s, a] = C.useState(null);
    (C.useEffect(() => {
        a(e0(t.joinedAtTimestamp));
    }, [t.joinedAtTimestamp]),
        (0, eZ.A)(() => {
            a(e0(t.joinedAtTimestamp));
        }, 1e4));
    let r = n ? "text-brand" : "text-default";
    return s?.short == null
        ? null
        : l
          ? (0, i.jsx)("div", {
                className: eA.__invalid_joinedAtContainer,
                children: (0, i.jsx)(b.E, { variant: "body-sm/medium", color: r, children: s.long }),
            })
          : (0, i.jsx)("div", {
                className: eA.__invalid_joinedAtContainer,
                children: (0, i.jsx)(I.m, {
                    align: "left",
                    __unsupportedReactNodeAsText: s.long,
                    children: (0, i.jsx)(b.E, { variant: "body-sm/medium", color: r, children: s.short }),
                }),
            });
}
let tt = C.memo(function (e) {
        let { member: t, showLongDate: l, isSortedBy: n } = e,
            { accountCreationDateShort: s, accountCreationDateLong: a } = C.useMemo(() => {
                let e = ez.default.extractTimestamp(t.userId);
                return {
                    accountCreationDateShort: (0, eK.hL)(e, eK.wN.ACCOUNT_AGE),
                    accountCreationDateLong: new Date(e).toLocaleDateString(L.intl.currentLocale, eK.OA),
                };
            }, [t.userId]),
            r = n ? "text-brand" : "text-default";
        return l
            ? (0, i.jsx)(b.E, { variant: "body-sm/medium", color: r, children: a })
            : (0, i.jsx)(I.m, {
                  align: "left",
                  __unsupportedReactNodeAsText: a,
                  children: (0, i.jsx)(b.E, { variant: "body-sm/medium", color: r, children: s }),
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
            { selectedUserIds: H, addUsers: h, removeUser: x } = (0, k.A)(t.guildId),
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
                        null != t && f && (H.has(t.userId) ? x(t.userId) : h([t.userId])));
                },
                [h, f, t, x, H],
            ),
            V = j === O.mF.ORDER_BY_GUILD_JOINED_AT_ASC,
            b = j === O.mF.ORDER_BY_USER_ID_ASC || j === O.mF.ORDER_BY_USER_ID_DESC;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                g &&
                    (0, i.jsx)("td", {
                        children: (0, i.jsx)(I.m, {
                            shouldShow: !f,
                            ariaHidden: f,
                            text: L.intl.string(L.t["Se4c7+"]),
                            children: (0, i.jsx)(N.D, {
                                onClick: v,
                                children: (0, i.jsx)(_.P, { checked: H.has(t.userId), disabled: !f }),
                            }),
                        }),
                    }),
                (0, i.jsx)("td", {
                    className: a()(eA.QB, { [eA.oE]: c }),
                    children: (0, i.jsx)(e6, { member: t, user: l }),
                }),
                (0, i.jsx)("td", {
                    className: a()(eA.qp, { [eA.oE]: c }),
                    children: (0, i.jsx)(te, { showLongDate: s, member: t, isSortedBy: V }),
                }),
                (0, i.jsx)("td", {
                    className: a()(eA.qp, { [eA.oE]: c }),
                    children: (0, i.jsx)(tt, { showLongDate: s, member: t, isSortedBy: b }),
                }),
                m &&
                    (0, i.jsx)("td", {
                        className: a()(eA.qp, { [eA.oE]: c }),
                        children: (0, i.jsx)(e8.Ay, { userId: t.userId, guildId: t.guildId }),
                    }),
                (0, i.jsx)("td", {
                    className: a()(eA.QB, { [eA.oE]: c }),
                    children: (0, i.jsx)(e7, { member: t, highestRole: n }),
                }),
                (0, i.jsx)("td", { className: a()(eA.qp, { [eA.oE]: c }), children: (0, i.jsx)(e9, { member: t }) }),
                (0, i.jsx)("td", {
                    className: a()(eA.OL, { [eA.oE]: c }),
                    children: (0, i.jsxs)("div", {
                        className: eA.$E,
                        children: [
                            (0, i.jsx)(I.m, {
                                asContainer: !0,
                                text: u ? L.intl.string(L.t.nHfkf4) : L.intl.string(L.t.uTre2y),
                                children: (0, i.jsx)(N.D, {
                                    onClick: d,
                                    className: eA.x6,
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
                            (0, i.jsx)(I.m, {
                                asContainer: !0,
                                text: L.intl.string(L.t.x8Nn4M),
                                children: (0, i.jsx)(N.D, {
                                    onClick: r,
                                    className: eA.x6,
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
            { analyticsLocations: u } = (0, h.Ay)(),
            m = (0, o.bG)([eG.Ay], () => eG.Ay.getGuildSidebarState(l), [l]),
            H = m?.details.userId === t,
            x = (0, o.bG)([p.A], () => p.A.getEnhancedMember(l, t), [l, t]),
            g = (0, A.YH)(x),
            f = (0, o.bG)([eB.default], () => eB.default.getUser(t), [t]),
            j = (0, eT.q)(l),
            v = (0, A.UY)(x ?? void 0),
            V = C.useCallback(
                (e) => {
                    (e.stopPropagation(), e.preventDefault(), v(e));
                },
                [v],
            ),
            b = C.useCallback(
                (e) => {
                    (e.stopPropagation(), e.preventDefault(), null != x && (0, A.Ko)(x, u));
                },
                [x, u],
            ),
            M = C.useCallback(
                (e) => {
                    (e.stopPropagation(),
                        e.preventDefault(),
                        null != x &&
                            (j
                                ? (0, eU.z)(x.guildId, x.userId, e5.VV.MEMBER_SAFETY, { modViewPanel: e2.g.INFO })
                                : (0, A.Ko)(x, u)));
                },
                [x, u, j],
            ),
            L = C.useCallback((e, t) => S()((0, eD.omit)(e, ti), (0, eD.omit)(t, ti)), []);
        return null == x
            ? null
            : (0, i.jsx)(e3, {
                  role: "row",
                  value: x,
                  style: n,
                  className: a()(eA.yF, eA.iA, s && eA.wH, H && eA.qb, r && eA.Lq),
                  equalityFn: L,
                  onClick: b,
                  onContextMenu: V,
                  children: (0, i.jsx)(tl, {
                      member: x,
                      user: f,
                      highestRole: g,
                      isHoldingAdvancedInfoKey: d,
                      onOpenModerationMenu: V,
                      onOpenMemberView: M,
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
        m = new Intl.NumberFormat(L.intl.currentLocale).format(s),
        H = (0, F.Y0)(t.id),
        h = (0, F.vA)(t.id),
        x = C.useMemo(() => 1 + +!!H + +!!h, [H, h]);
    return 0 === s
        ? null
        : (0, i.jsxs)("tr", {
              className: ta.iS,
              onClick: u,
              children: [
                  (0, i.jsx)("td", {
                      colSpan: 3,
                      children: (0, i.jsx)(b.E, {
                          variant: "body-sm/normal",
                          color: "text-overlay-light",
                          children: L.intl.format(L.t["/i5uJ1"], { count: m, date: a }),
                      }),
                  }),
                  (0, i.jsx)("td", { colSpan: x }),
                  (0, i.jsx)("td", {
                      colSpan: 2,
                      children: (0, i.jsx)("div", {
                          className: eA.$E,
                          children: (0, i.jsx)(N.D, {
                              onClick: u,
                              className: ta.Fu,
                              children: (0, i.jsxs)(b.E, {
                                  variant: "body-sm/normal",
                                  color: "text-overlay-light",
                                  className: ta.Lb,
                                  children: [
                                      (0, i.jsx)("div", { children: L.intl.string(L.t.rkyOzK) }),
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
function th(e) {
    return e.shiftKey || e.key === td.dh.SHIFT;
}
function tx(e) {
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
                    onResetForNewMembers: h,
                } = e,
                x = (0, o.bG)([H.Ay], () => H.Ay.useReducedMotion),
                j = (0, o.bG)([f.A], () => f.A.hasPendingBulkBan(l.id), [l.id]),
                V = (0, c.useHasAnyModalOpen)(),
                b = (0, g.j)(),
                [M, D] = C.useState(!1),
                [E, S] = C.useState(!1),
                N = !V && M && E;
            (C.useEffect(() => {
                b || (D(!1), S(!1));
            }, [b]),
                C.useLayoutEffect(() => {
                    function e(e) {
                        (th(e) && D(!0), tx(e) && S(!0));
                    }
                    function t(e) {
                        (th(e) && D(!1), tx(e) && S(!1));
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
            let y = t.length > 30,
                Z = (0, u.p)(t, {
                    key: (e) => e,
                    trail: y ? 5 : 15,
                    from(e) {
                        let t = p.A.getEnhancedMember(l.id, e),
                            n = p.A.getLastRefreshTimestamp(l.id),
                            i = null == t || 0 === n,
                            C = null != t && t.refreshTimestamp === n;
                        return i || !C ? tm : y ? tu : tc;
                    },
                    enter: tm,
                    config: tH,
                }),
                I = !x && s === A.IY.LOADING;
            return (0, i.jsxs)("table", {
                className: a()(to.tp, n),
                children: [
                    (0, i.jsx)(eL, { guildId: l.id, currentPagedMembers: t }),
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
                                            (0, i.jsx)(m.w, {
                                                type: "info",
                                                message: L.intl.string(L.t["UP+9QZ"]),
                                                role: "status",
                                            }),
                                        ],
                                    }),
                                }),
                            }),
                        }),
                    (0, i.jsx)("tbody", {
                        className: a()({ [to.u6]: j }),
                        children:
                            s === A.IY.SUCCESS_FULL || s === A.IY.LOADING
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(tr, { guild: l, onSubmit: h }),
                                          Z((e, t) =>
                                              (0, i.jsx)(
                                                  tC,
                                                  {
                                                      userId: t,
                                                      guildId: l.id,
                                                      style: e,
                                                      onSelect: d,
                                                      isHoldingAdvancedInfoKey: N,
                                                      compact: r,
                                                      isLoading: I,
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
            [u] = (0, o.bG)([p.A], () => p.A.getPagedMembersByGuildId(l.id), [l.id], x.D);
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
            { analyticsLocations: H } = (0, h.Ay)(),
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
