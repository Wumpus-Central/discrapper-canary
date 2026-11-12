l.d(t, { A: () => tj });
var n,
    i = l(477900),
    s = l(582128),
    C = l(503698),
    a = l.n(C),
    r = l(812729),
    d = l.n(r),
    o = l(164636),
    c = l(192308),
    u = l(866323),
    m = l(683071),
    h = l(775602),
    H = l(688810),
    g = l(579974),
    x = l(996439),
    f = l(218394),
    j = l(879408),
    p = l(504049),
    v = l(406318),
    V = l(221950),
    b = l(361610),
    A = l(834730),
    M = l(189552),
    L = l(636670),
    D = l(792996),
    R = l(602083);
function E(e) {
    let { searchState: t } = e,
        l = s.useMemo(
            () => ({
                [M.IY.LOADING]: null,
                [M.IY.SUCCESS_STILL_INDEXING]: { icon: null, message: D.intl.string(D.t.AXPbZr) },
                [M.IY.SUCCESS_EMPTY]: { icon: (0, i.jsx)(L.A, {}), message: D.intl.string(D.t.wdyR52) },
                [M.IY.SUCCESS_FULL]: null,
            }),
            [],
        )[t];
    return null == l
        ? null
        : (0, i.jsxs)("div", {
              className: R.p,
              children: [
                  null != l.icon &&
                      (0, i.jsx)("div", { className: R.__invalid_noResultsIconContainer, children: l.icon }),
                  (0, i.jsx)(A.E, { variant: "body-md/normal", color: "text-muted", children: l.message }),
              ],
          });
}
var N = l(811315),
    I = l.n(N),
    S = l(939249),
    y = l(783977),
    Z = l(646514),
    _ = l(866665),
    w = l(658675),
    U = l(265872),
    k = l(71393),
    O = l(576705),
    T = l(70738),
    F = l(587426),
    G = l(134413),
    B = l(536637),
    P = l.n(B),
    q = l(156828),
    z = l(165862),
    Y = l(477782),
    $ = l(320448),
    K = l(921853),
    W = l(282054),
    Q = l(652215),
    X = l(351114);
let J = "MMM Do, YYYY",
    ee = P()("2015-05-15").local(),
    et = (0, q.Fe)({ createPromise: () => Promise.resolve().then(l.bind(l, 939538)), webpackId: 939538 });
var el =
    (((n = {})[(n.ALL = 0)] = "ALL"),
    (n[(n["1_HOUR"] = 1)] = "1_HOUR"),
    (n[(n["24_HOURS"] = 2)] = "24_HOURS"),
    (n[(n["7_DAYS"] = 3)] = "7_DAYS"),
    (n[(n["2_WEEKS"] = 4)] = "2_WEEKS"),
    (n[(n["4_WEEKS"] = 5)] = "4_WEEKS"),
    (n[(n["3_MONTHS"] = 6)] = "3_MONTHS"),
    (n[(n.CUSTOM = 7)] = "CUSTOM"),
    n);
function en(e) {
    let {
            startDateLabel: t,
            endDateLabel: l,
            afterDate: n,
            beforeDate: C,
            selectedOption: r,
            isCustomDateRange: d,
            menuName: o,
            onClose: c,
            onSelectDateOption: u,
            onToggleCustomDateRange: m,
            onSelectStartDate: h,
            onSelectEndDate: H,
        } = e,
        g = [
            { id: 0, option: null, label: D.intl.string(D.t.jelCib) },
            { id: 1, option: { input: 1, unit: "h" }, label: D.intl.string(D.t["91RDqi"]) },
            { id: 2, option: { input: 24, unit: "h" }, label: D.intl.string(D.t["Lj/1Tq"]) },
            { id: 3, option: { input: 7, unit: "d" }, label: D.intl.string(D.t.NnUMSZ) },
            { id: 4, option: { input: 2, unit: "w" }, label: D.intl.string(D.t.hY3XWH) },
            { id: 5, option: { input: 4, unit: "w" }, label: D.intl.string(D.t.kQTwT0) },
            { id: 6, option: { input: 3, unit: "M" }, label: D.intl.string(D.t.EPuP0s) },
        ],
        [x, f] = s.useState(!1),
        j =
            7 !== r
                ? null
                : null != t && null != l
                  ? `${t} - ${l}`
                  : null != t
                    ? D.intl.formatToPlainString(D.t.ClmSzd, { date: t })
                    : null != l
                      ? D.intl.formatToPlainString(D.t.YvNhsd, { date: l })
                      : null,
        p = s.useCallback(() => {
            (f(!0), m());
        }, [m]),
        v = s.useCallback(
            (e) => {
                h(e);
            },
            [h],
        ),
        V = s.useCallback(
            (e) => {
                H(e);
            },
            [H],
        ),
        b = s.useCallback(() => {
            (null == C && null == n && u(0, null), f(!1));
        }, [n, C, u]);
    return (0, i.jsx)(z.W, {
        "data-menu-needs-migration": !0,
        navId: `member-safety-guild-member-${o}-menu`,
        onClose: c,
        "aria-label": D.intl.string(D.t.k9m8Rg),
        onSelect: Q.tEg,
        children: (0, i.jsx)(Y.rX, {
            children: x
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(Y.Dr, {
                              id: "back",
                              action: b,
                              dontCloseOnAction: !0,
                              render: (e) =>
                                  (0, i.jsxs)("span", {
                                      ...e,
                                      className: X.W6,
                                      children: [
                                          (0, i.jsx)(K.ChevronSmallLeftIcon, {
                                              size: "custom",
                                              color: "currentColor",
                                              width: 16,
                                              height: 16,
                                          }),
                                          (0, i.jsx)(A.E, {
                                              variant: "body-sm/medium",
                                              color: "text-strong",
                                              children: D.intl.string(D.t.BTfN6g),
                                          }),
                                      ],
                                  }),
                          }),
                          (0, i.jsx)(Y.Dr, {
                              id: "after-date-menu-item",
                              label: D.intl.string(D.t.RDqVOD),
                              subtext: t,
                              subMenuClassName: X.aD,
                              children: (0, i.jsx)(Y.Dr, {
                                  id: "after-date-picker",
                                  render: (e) =>
                                      (0, i.jsx)(et, {
                                          ...e,
                                          calendarClassName: X.BJ,
                                          value: d && null != n ? P()(n) : void 0,
                                          onSelect: v,
                                          maxDate: P()().local(),
                                          minDate: ee,
                                      }),
                              }),
                          }),
                          (0, i.jsx)(Y.Dr, {
                              id: "before-date-menu-item",
                              label: D.intl.string(D.t.jF54hQ),
                              subtext: l,
                              subMenuClassName: X.aD,
                              children: (0, i.jsx)(Y.Dr, {
                                  id: "before-date-picker",
                                  render: (e) =>
                                      (0, i.jsx)(et, {
                                          ...e,
                                          calendarClassName: X.BJ,
                                          value: d && null != C ? P()(C) : void 0,
                                          onSelect: V,
                                          maxDate: P()().local(),
                                          minDate: d && null != n ? P()(n) : ee,
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
                                  Y.iD,
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
                          (0, i.jsx)(Y.bX, {}),
                          (0, i.jsx)(Y.Dr, {
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
                                                      variant: "body-sm/medium",
                                                      children: D.intl.string(D.t.BTfN6g),
                                                  }),
                                                  null != j &&
                                                      (0, i.jsx)(A.E, {
                                                          className: a()(X.ty, { [X.in]: e.isFocused }),
                                                          color: "text-muted",
                                                          variant: "footnote/medium",
                                                          children: j,
                                                      }),
                                              ],
                                          }),
                                          7 === r
                                              ? (0, i.jsx)(W.A, { foreground: X.QE, width: 18, height: 18 })
                                              : (0, i.jsx)($.ChevronSmallRightIcon, {
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
function ei(e) {
    let { guildId: t, onClose: l } = e,
        n = (0, o.bG)([v.A], () => v.A.getSearchStateByGuildId(t), [t], I()),
        { selectedAccountAgeOption: s } = n,
        { afterDate: C, beforeDate: a, optionId: r } = s,
        d = r === el.CUSTOM,
        c = d && null != C ? P()(C).format(J) : null,
        u = d && null != a ? P()(a).format(J) : null;
    return (0, i.jsx)(en, {
        startDateLabel: c,
        endDateLabel: u,
        afterDate: C,
        beforeDate: a,
        selectedOption: r,
        isCustomDateRange: d,
        menuName: "account-age",
        accessibilityLabel: D.intl.string(D.t["D++Tgf"]),
        onClose: l,
        onSelectDateOption: function (e, l) {
            let i = null != l ? P()().subtract(l.input, l.unit).valueOf() : null;
            (0, V.Ld)(t, { ...n, selectedAccountAgeOption: { optionId: e, afterDate: i, beforeDate: null } });
        },
        onToggleCustomDateRange: function () {
            (0, V.Ld)(t, {
                ...n,
                selectedAccountAgeOption: { optionId: el.CUSTOM, afterDate: d ? C : null, beforeDate: d ? a : null },
            });
        },
        onSelectStartDate: function (e) {
            (0, V.Ld)(t, {
                ...n,
                selectedAccountAgeOption: { optionId: el.CUSTOM, afterDate: e.valueOf(), beforeDate: a },
            });
        },
        onSelectEndDate: function (e) {
            (0, V.Ld)(t, {
                ...n,
                selectedAccountAgeOption: { optionId: el.CUSTOM, afterDate: C, beforeDate: e.valueOf() },
            });
        },
    });
}
var es = l(565787),
    eC = l(953822),
    ea = l(60270),
    er = l(353182),
    ed = l(953727);
function eo(e) {
    let { width: t = 24, height: l = 24, color: n = "currentColor", ...s } = e;
    return (0, i.jsxs)("svg", {
        ...(0, ed.A)(s),
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
let ec = (0, es.k)(eo);
function eu(e) {
    let { guildId: t, onClose: l } = e,
        n = (0, o.bG)([v.A], () => v.A.getSearchStateByGuildId(t), [t], I()),
        C = (0, p.Tj)(t),
        a = s.useCallback(() => {
            (n.requireUnusualDmActivity || C(p.Zp.UNUSUAL_DM_ACTIVITY),
                (0, V.Ld)(t, { ...n, requireUnusualDmActivity: !n.requireUnusualDmActivity }));
        }, [t, n, C]),
        r = s.useCallback(() => {
            (n.requireCommunicationDisabled || C(p.Zp.COMMUNICATION_DISABLED),
                (0, V.Ld)(t, { ...n, requireCommunicationDisabled: !n.requireCommunicationDisabled }));
        }, [t, n, C]),
        d = s.useCallback(() => {
            (n.requireUnusualAccountActivity || C(p.Zp.UNUSUAL_ACCOUNT_ACTIVITY),
                (0, V.Ld)(t, { ...n, requireUnusualAccountActivity: !n.requireUnusualAccountActivity }));
        }, [t, n, C]),
        c = s.useCallback(() => {
            (n.requireUsernameQuarantined || C(p.Zp.USERNAME_QUARANTINED),
                (0, V.Ld)(t, { ...n, requireUsernameQuarantined: !n.requireUsernameQuarantined }));
        }, [t, n, C]);
    return (0, i.jsx)(z.W, {
        "data-menu-migrated": !0,
        navId: "member-safety-flags",
        onClose: l,
        "aria-label": D.intl.string(D.t.k9m8Rg),
        onSelect: Q.tEg,
        children: (0, i.jsxs)(Y.rX, {
            children: [
                (0, i.jsx)(Y.sL, {
                    id: "toggle-require-unusual-dm-activity",
                    label: D.intl.string(D.t.ZRnON3),
                    leftIcon: eC.ChatWarningIcon,
                    leadingAccessory: { type: "icon", icon: eC.ChatWarningIcon },
                    action: a,
                    checked: n.requireUnusualDmActivity,
                }),
                (0, i.jsx)(Y.sL, {
                    id: "toggle-require-communication-disabled",
                    label: D.intl.string(D.t.z3wbj8),
                    leftIcon: ea.ClockWarningIcon,
                    leadingAccessory: { type: "icon", icon: ea.ClockWarningIcon },
                    action: r,
                    checked: n.requireCommunicationDisabled,
                }),
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(Y.sL, {
                            id: "toggle-require-unusual-account-activity",
                            label: D.intl.string(D.t.DIQsD9),
                            leftIcon: ec,
                            leadingAccessory: { type: "icon", icon: ec },
                            action: d,
                            checked: n.requireUnusualAccountActivity,
                        }),
                        (0, i.jsx)(Y.sL, {
                            id: "toggle-require-username-quarantined",
                            label: D.intl.string(D.t.Jloklk),
                            leftIcon: er.ChatXIcon,
                            leadingAccessory: { type: "icon", icon: er.ChatXIcon },
                            action: c,
                            checked: n.requireUsernameQuarantined,
                        }),
                    ],
                }),
            ],
        }),
    });
}
function em(e) {
    let { guildId: t, onClose: l } = e,
        n = (0, o.bG)([v.A], () => v.A.getSearchStateByGuildId(t), [t], I()),
        { selectedJoinDateOption: s } = n,
        { afterDate: C, beforeDate: a, optionId: r } = s,
        d = r === el.CUSTOM,
        c = d && null != C ? P()(C).format(J) : null,
        u = d && null != a ? P()(a).format(J) : null;
    return (0, i.jsx)(en, {
        startDateLabel: c,
        endDateLabel: u,
        afterDate: C,
        beforeDate: a,
        selectedOption: r,
        isCustomDateRange: d,
        menuName: "joined-date",
        accessibilityLabel: D.intl.string(D.t.XMVinX),
        onClose: l,
        onSelectDateOption: function (e, l) {
            let i = null != l ? P()().subtract(l.input, l.unit).valueOf() : null;
            (0, V.Ld)(t, { ...n, selectedJoinDateOption: { optionId: e, afterDate: i, beforeDate: null } });
        },
        onToggleCustomDateRange: function () {
            (0, V.Ld)(t, {
                ...n,
                selectedJoinDateOption: { optionId: el.CUSTOM, afterDate: d ? C : null, beforeDate: d ? a : null },
            });
        },
        onSelectStartDate: function (e) {
            (0, V.Ld)(t, {
                ...n,
                selectedJoinDateOption: { optionId: el.CUSTOM, afterDate: e.valueOf(), beforeDate: a },
            });
        },
        onSelectEndDate: function (e) {
            (0, V.Ld)(t, {
                ...n,
                selectedJoinDateOption: { optionId: el.CUSTOM, afterDate: C, beforeDate: e.valueOf() },
            });
        },
    });
}
var eh = l(311567),
    eH = l(91871),
    eg = l.n(eH),
    ex = l(855986),
    ef = l(602853),
    ej = l(583650),
    ep = l(676608),
    ev = l(34457),
    eV = l(317525);
function eb(e) {
    let { guildId: t, onClose: l } = e,
        n = (0, p.hs)(t),
        [C, a] = s.useState(""),
        r = (0, o.bG)([v.A], () => v.A.getSearchStateByGuildId(t), [t], I()),
        d = (0, o.bG)([h.Ay], () => h.Ay.roleStyle),
        c = (0, ef.r)(Z.A.unsafe_rawColors.PRIMARY_300).hex(),
        u = (0, ep.jV)(t, null),
        m = (0, ex.yK)([eV.A], () => eV.A.getSortedRoles(t).filter((e) => !(0, ev.Oy)(e)), [t]),
        H = s.useMemo(() => ("" === C ? m : m.filter((e) => eg()(C.toLowerCase(), e.name.toLowerCase()))), [m, C]),
        g = s.useCallback(
            (e) => {
                let l = new Set(r.selectedRoleIds);
                (l.has(e) ? l.delete(e) : l.add(e), (0, V.Ld)(t, { selectedRoleIds: l }), n(l));
            },
            [t, r.selectedRoleIds, n],
        );
    return (0, i.jsx)(z.W, {
        "data-menu-migrated": !0,
        navId: "member-safety-roles",
        onClose: l,
        "aria-label": D.intl.string(D.t.ZveC7e),
        onSelect: Q.tEg,
        children: (0, i.jsxs)(Y.rX, {
            children: [
                (0, i.jsx)(Y.aK, {
                    id: "members-table-role-search",
                    control: (e, t) =>
                        (0, i.jsx)(ej.V, {
                            ...e,
                            query: C,
                            onChange: a,
                            ref: t,
                            placeholder: D.intl.string(D.t.ZveC7e),
                        }),
                }),
                (0, i.jsx)(Y.bX, {}),
                H.map((e) => {
                    let t = e.colorString ?? c,
                        l =
                            u && e.colorStrings?.primaryColor != null && e.colorStrings?.secondaryColor != null
                                ? e.colorStrings
                                : null;
                    return (0, i.jsx)(
                        Y.sL,
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
                            action: () => g(e.id),
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
function eL(e) {
    let { label: t, onFilter: l, isFiltered: n, isSorted: s, className: C, ref: r, ...d } = e,
        o = n ? "text-strong" : "text-default";
    return (
        s && (o = "text-brand"),
        (0, i.jsx)("th", {
            className: a()(eA.P1, C),
            children: (0, i.jsxs)(S.D, {
                ...d,
                innerRef: r,
                onClick: l,
                className: a()(eA.WV, { [eA.o1]: null != l }),
                children: [
                    (0, i.jsx)(A.E, { variant: "body-sm/medium", color: o, children: t }),
                    null != l &&
                        (0, i.jsx)("div", {
                            className: eA.IO,
                            children: (0, i.jsx)(y.FiltersHorizontalIcon, {
                                size: "custom",
                                className: eA.Sj,
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
function eD(e) {
    let { guildId: t, currentPagedMembers: l } = e,
        n = s.useRef(null),
        C = s.useRef(null),
        r = s.useRef(null),
        d = s.useRef(null),
        c = s.useRef(null),
        u = (0, o.bG)([v.A], () => v.A.getSearchStateByGuildId(t), [t], I()),
        m = (0, o.bG)([O.A, k.A], () => O.A.can(Q.xBc.MANAGE_GUILD, k.A.getGuild(t)), [t]),
        { selectedUserIds: h, addUsers: H, clearSelection: g } = (0, F.A)(t),
        x =
            u.requireUnusualDmActivity ||
            u.requireCommunicationDisabled ||
            u.requireUnusualAccountActivity ||
            u.requireUsernameQuarantined,
        f = u.selectedRoleIds.size > 0,
        j = null != u.selectedJoinDateOption.afterDate,
        p = u.selectedSort === T.mF.ORDER_BY_GUILD_JOINED_AT_ASC,
        V = null != u.selectedAccountAgeOption.afterDate,
        b = u.selectedSort === T.mF.ORDER_BY_USER_ID_ASC || u.selectedSort === T.mF.ORDER_BY_USER_ID_DESC,
        A = null != u.selectedSourceInviteCode && "" !== u.selectedSourceInviteCode,
        M = null != u.selectedJoinSourceType,
        L = A || M,
        { canAccessBulkActions: R, canAccessBulkBan: E, canAccessBulkRole: N } = (0, G.lN)(t),
        y = s.useMemo(() => l.filter((e) => N || (E && (0, G.Ph)(t, e))), [E, N, l, t]),
        Z = y.length > 0,
        B = 0 === y.filter((e) => !h.has(e)).length,
        P = s.useCallback(() => {
            Z && (B ? g() : H(y));
        }, [Z, B, g, H, y]);
    return (0, i.jsx)("thead", {
        children: (0, i.jsxs)("tr", {
            className: eA.Yk,
            children: [
                R &&
                    (0, i.jsx)("th", {
                        className: a()(eA.P1, eM.y2),
                        children: (0, i.jsx)(_.m, {
                            shouldShow: !Z,
                            text: D.intl.string(D.t.tJEY0G),
                            children: (0, i.jsx)(S.D, {
                                onClick: P,
                                className: eA.WV,
                                children: (0, i.jsx)(w.P, { checked: B, disabled: !Z }),
                            }),
                        }),
                    }),
                (0, i.jsx)(eL, { label: D.intl.string(D.t.Es7n9c) }),
                m
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(U.Y, {
                                  targetElementRef: n,
                                  animation: U.Y.Animation.FADE,
                                  position: "bottom",
                                  spacing: 4,
                                  align: "left",
                                  renderPopout: (e) => {
                                      let { closePopout: l } = e;
                                      return (0, i.jsx)(em, { guildId: t, onClose: l });
                                  },
                                  children: (e) => {
                                      let { onClick: t, ...l } = e;
                                      return (0, i.jsx)(eL, {
                                          ref: n,
                                          label: D.intl.string(D.t.xcKP1P),
                                          onFilter: t,
                                          isFiltered: j,
                                          isSorted: p,
                                          className: eM.qp,
                                          ...l,
                                      });
                                  },
                              }),
                              (0, i.jsx)(U.Y, {
                                  targetElementRef: C,
                                  animation: U.Y.Animation.FADE,
                                  position: "bottom",
                                  spacing: 4,
                                  align: "left",
                                  renderPopout: (e) => {
                                      let { closePopout: l } = e;
                                      return (0, i.jsx)(ei, { guildId: t, onClose: l });
                                  },
                                  children: (e) => {
                                      let { onClick: t, ...l } = e;
                                      return (0, i.jsx)(eL, {
                                          ref: C,
                                          label: D.intl.string(D.t.sPph4O),
                                          onFilter: t,
                                          isFiltered: V,
                                          isSorted: b,
                                          className: eM.qp,
                                          ...l,
                                      });
                                  },
                              }),
                          ],
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(eL, { label: D.intl.string(D.t.xcKP1P), className: eM.qp }),
                              (0, i.jsx)(eL, { label: D.intl.string(D.t.sPph4O), className: eM.qp }),
                          ],
                      }),
                m
                    ? (0, i.jsx)(U.Y, {
                          targetElementRef: r,
                          animation: U.Y.Animation.FADE,
                          position: "bottom",
                          spacing: 4,
                          align: "left",
                          renderPopout: (e) => {
                              let { closePopout: l } = e;
                              return (0, i.jsx)(eh.default, { guildId: t, onClose: l });
                          },
                          children: (e) => {
                              let { onClick: t, ...l } = e;
                              return (0, i.jsx)(eL, {
                                  ref: r,
                                  label: D.intl.string(D.t["yn0w1+"]),
                                  onFilter: t,
                                  isFiltered: L,
                                  className: eM.qp,
                                  ...l,
                              });
                          },
                      })
                    : null,
                (0, i.jsx)(U.Y, {
                    targetElementRef: d,
                    animation: U.Y.Animation.FADE,
                    position: "bottom",
                    autoInvert: !1,
                    spacing: 4,
                    align: "left",
                    renderPopout: (e) => {
                        let { closePopout: l } = e;
                        return (0, i.jsx)(eb, { guildId: t, onClose: l });
                    },
                    children: (e) => {
                        let { onClick: t, ...l } = e;
                        return (0, i.jsx)(eL, {
                            ref: d,
                            label: D.intl.string(D.t["2SZsWX"]),
                            onFilter: t,
                            isFiltered: f,
                            className: eM.QB,
                            ...l,
                        });
                    },
                }),
                (0, i.jsx)(_.m, {
                    text: D.intl.string(D.t["2cRO3R"]),
                    position: "top",
                    align: "left",
                    shouldShow: !0,
                    children: (0, i.jsx)(U.Y, {
                        targetElementRef: c,
                        animation: U.Y.Animation.FADE,
                        position: "bottom",
                        spacing: 4,
                        align: "left",
                        renderPopout: (e) => {
                            let { closePopout: l } = e;
                            return (0, i.jsx)(eu, { guildId: t, onClose: l });
                        },
                        children: (e) =>
                            (0, i.jsx)(eL, {
                                ref: c,
                                label: D.intl.string(D.t["7V3759"]),
                                "aria-label": D.intl.string(D.t["2cRO3R"]),
                                onFilter: (t) => {
                                    e.onClick?.(t);
                                },
                                isFiltered: x,
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
                (0, i.jsx)(eL, { label: D.intl.string(D.t["5Q9xGr"]), className: eM.qp }),
            ],
        }),
    });
}
var eR = l(435558),
    eE = l(307301),
    eN = l(463930),
    eI = l(950305),
    eS = l(530005),
    ey = l(966327),
    eZ = l(396583),
    e_ = l(576470),
    ew = l(229527),
    eU = l(316031),
    ek = l(474196),
    eO = l(985925),
    eT = l(534400),
    eF = l(694318),
    eG = l(967144),
    eB = l(799704),
    eP = l(287809),
    eq = l(881548),
    ez = l(562153),
    eY = l(811091),
    e$ = l(427262),
    eK = l(157347),
    eW = l(120692),
    eQ = l(615300),
    eX = l(717421),
    eJ = l(475743);
let e1 = { duration: 100, easing: eQ.A.Easing.inOut(eQ.A.Easing.back()), clamp: !0 },
    e3 = { duration: 2e3, easing: eQ.A.Easing.quad, clamp: !0 };
function e8(e) {
    let { value: t, children: l, equalityFn: n = I(), style: C, ...a } = e,
        r = (0, eJ.Ay)(t),
        [{ spring: d }, o] = (0, eX.z)(() => ({ spring: 0 }), "animate-always"),
        c = (0, ef.r)(Z.A.colors.BACKGROUND_BASE_LOW).hex(),
        u = (0, ef.r)(Z.A.colors.CONTROL_BRAND_FOREGROUND).hex(),
        m = s.useCallback(() => {
            (o({ spring: 1, config: e1 }), o({ spring: 0, config: e3, delay: 300 }));
        }, [o]);
    s.useEffect(() => {
        null == t || null == r || n(t, r) || m();
    }, [m, t, r, n]);
    let h = d?.to({ range: [0, 1], output: [`${c}00`, `${u}27`] }),
        H = null != C ? { ...C, backgroundColor: h } : { backgroundColor: h };
    return (0, i.jsx)(eW.animated.tr, { ...a, style: H, children: l });
}
var e4 = l(589935),
    e5 = l(950072),
    e2 = l(746080),
    e9 = l(486974);
let e7 = s.memo(function (e) {
        let { member: t } = e,
            l = s.useMemo(() => (0, eU.n)(t.communicationDisabledUntil), [t.communicationDisabledUntil]),
            n = s.useMemo(
                () => (null == t.communicationDisabledUntil ? new Date() : new Date(t.communicationDisabledUntil)),
                [t.communicationDisabledUntil],
            );
        return (0, i.jsxs)("div", {
            className: eM.Ak,
            children: [
                t.hasUnusualDmActivity &&
                    (0, i.jsx)(_.m, {
                        text: D.intl.string(D.t.QrfVTp),
                        children: (0, i.jsx)(eC.ChatWarningIcon, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: Z.A.colors.TEXT_MUTED.css,
                        }),
                    }),
                l &&
                    (0, i.jsx)(_.m, {
                        "aria-label": D.intl.string(D.t["xfJP+u"]),
                        __unsupportedReactNodeAsText: (0, i.jsxs)("div", {
                            className: eM.CN,
                            children: [
                                (0, i.jsx)("div", { children: D.intl.string(D.t["xfJP+u"]) }),
                                (0, i.jsx)(e_.A, { deadline: n, showUnits: !0, stopAtOneSec: !0 }),
                            ],
                        }),
                        children: (0, i.jsx)(ea.ClockWarningIcon, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: Z.A.colors.TEXT_FEEDBACK_CRITICAL.css,
                        }),
                    }),
                (0, eF.cx)(t.userId) &&
                    (0, i.jsx)(_.m, {
                        text: D.intl.string(D.t.PK9FQ2),
                        children: (0, i.jsx)(eo, {
                            width: 20,
                            height: 20,
                            color: Z.A.colors.TEXT_FEEDBACK_CRITICAL.css,
                        }),
                    }),
                (0, ew.TR)(t) &&
                    (0, i.jsx)(_.m, {
                        text: D.intl.string(D.t.qOVbaX),
                        children: (0, i.jsx)(er.ChatXIcon, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: Z.A.colors.TEXT_MUTED.css,
                        }),
                    }),
            ],
        });
    }),
    e6 = s.memo(function (e) {
        let { member: t, highestRole: l } = e,
            n = (0, o.bG)([k.A], () => k.A.getGuild(t.guildId), [t.guildId]),
            C = t.roles.length - 1,
            r = s.useMemo(() => new Intl.NumberFormat(D.intl.currentLocale).format(C), [C]),
            d = (0, M.Cy)(t),
            c = (0, M.Cy)(t, !0),
            u = (0, o.bG)([O.A], () => O.A.can(Q.xBc.MANAGE_ROLES, n), [n]);
        return null == n
            ? null
            : (0, i.jsxs)("div", {
                  className: eM.yk,
                  children: [
                      null != l && (0, i.jsx)(e5.A, { className: a()(eM.Zf, eM.Lc), role: l, guildId: t.guildId }),
                      C > 0 &&
                          (0, i.jsx)(S.D, {
                              className: eM.yt,
                              onClick: (e) => c(e),
                              children: (0, i.jsx)(_.m, {
                                  text: D.intl.string(D.t.DY6n4q),
                                  children: (0, i.jsxs)(A.E, {
                                      variant: "body-xs/medium",
                                      color: "text-strong",
                                      children: ["+", r],
                                  }),
                              }),
                          }),
                      u &&
                          (0, i.jsx)(_.m, {
                              text: D.intl.string(D.t.h3pSLR),
                              children: (0, i.jsx)(S.D, {
                                  onClick: d,
                                  className: a()(eM.yt, eM.$g),
                                  children: (0, i.jsx)(eE.PlusSmallIcon, {
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
    e0 = s.memo(function (e) {
        let { member: t, user: l } = e,
            n = (0, eG.gn)(t?.guildId, t?.userId, t?.colorStrings ?? null);
        return null == l || null == t
            ? null
            : (0, i.jsxs)("div", {
                  className: eM.FD,
                  children: [
                      (0, i.jsx)("div", { className: eM.Wn, children: (0, i.jsx)(ey.A, { user: l }) }),
                      (0, i.jsx)("div", {
                          className: eM.eg,
                          children: (0, i.jsx)(A.E, {
                              variant: "body-sm/medium",
                              children: (0, i.jsxs)("div", {
                                  className: eM.VW,
                                  children: [
                                      (0, i.jsx)(eN.g, {
                                          name: ez.Ay.getName(t.guildId, null, l),
                                          colorString: t.colorString ?? null,
                                          colorStrings: n,
                                          className: eM.bc,
                                      }),
                                      (0, i.jsx)(eT.Ay, {
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
                              variant: "body-xs/normal",
                              color: "text-default",
                              tag: "span",
                              children: e$.Ay.getUserTag(l),
                          }),
                      }),
                  ],
              });
    });
function te(e) {
    return {
        short: null == e ? null : (0, eK.hL)(e, eK.wN.JOINED_AT),
        long: new Date(e ?? 0).toLocaleDateString(D.intl.currentLocale, eK.wp),
    };
}
function tt(e) {
    let { member: t, showLongDate: l, isSortedBy: n } = e,
        [C, a] = s.useState(null);
    (s.useEffect(() => {
        a(te(t.joinedAtTimestamp));
    }, [t.joinedAtTimestamp]),
        (0, eZ.A)(() => {
            a(te(t.joinedAtTimestamp));
        }, 1e4));
    let r = n ? "text-brand" : "text-default";
    return C?.short == null
        ? null
        : l
          ? (0, i.jsx)("div", {
                className: eM.__invalid_joinedAtContainer,
                children: (0, i.jsx)(A.E, { variant: "body-sm/medium", color: r, children: C.long }),
            })
          : (0, i.jsx)("div", {
                className: eM.__invalid_joinedAtContainer,
                children: (0, i.jsx)(_.m, {
                    align: "left",
                    __unsupportedReactNodeAsText: C.long,
                    children: (0, i.jsx)(A.E, { variant: "body-sm/medium", color: r, children: C.short }),
                }),
            });
}
let tl = s.memo(function (e) {
        let { member: t, showLongDate: l, isSortedBy: n } = e,
            { accountCreationDateShort: C, accountCreationDateLong: a } = s.useMemo(() => {
                let e = eY.default.extractTimestamp(t.userId);
                return {
                    accountCreationDateShort: (0, eK.hL)(e, eK.wN.ACCOUNT_AGE),
                    accountCreationDateLong: new Date(e).toLocaleDateString(D.intl.currentLocale, eK.OA),
                };
            }, [t.userId]),
            r = n ? "text-brand" : "text-default";
        return l
            ? (0, i.jsx)(A.E, { variant: "body-sm/medium", color: r, children: a })
            : (0, i.jsx)(_.m, {
                  align: "left",
                  __unsupportedReactNodeAsText: a,
                  children: (0, i.jsx)(A.E, { variant: "body-sm/medium", color: r, children: C }),
              });
    }),
    tn = s.memo(function (e) {
        let {
                member: t,
                user: l,
                highestRole: n,
                isHoldingAdvancedInfoKey: C,
                onOpenModerationMenu: r,
                onOpenMemberView: d,
                compact: c,
                hasModViewPanelAccess: u,
            } = e,
            m = (0, o.bG)([O.A, k.A], () => O.A.can(Q.xBc.MANAGE_GUILD, k.A.getGuild(t.guildId)), [t.guildId]),
            { selectedUserIds: h, addUsers: H, removeUser: g } = (0, F.A)(t.guildId),
            { canAccessBulkActions: x, canAccessBulkBan: f, canAccessBulkRole: j } = (0, G.lN)(t.guildId),
            p = (0, G.O6)(t.guildId, t.userId),
            V = j || (f && p),
            b = (0, o.bG)(
                [v.A],
                () => v.A.getSearchStateByGuildId(t.guildId).selectedSort ?? T.mF.ORDER_BY_UNSPECIFIED,
                [t.guildId],
                I(),
            ),
            A = s.useCallback(
                (e) => {
                    (e.stopPropagation(),
                        e.preventDefault(),
                        null != t && V && (h.has(t.userId) ? g(t.userId) : H([t.userId])));
                },
                [H, V, t, g, h],
            ),
            M = b === T.mF.ORDER_BY_GUILD_JOINED_AT_ASC,
            L = b === T.mF.ORDER_BY_USER_ID_ASC || b === T.mF.ORDER_BY_USER_ID_DESC;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                x &&
                    (0, i.jsx)("td", {
                        children: (0, i.jsx)(_.m, {
                            shouldShow: !V,
                            ariaHidden: V,
                            text: D.intl.string(D.t["Se4c7+"]),
                            children: (0, i.jsx)(S.D, {
                                onClick: A,
                                children: (0, i.jsx)(w.P, { checked: h.has(t.userId), disabled: !V }),
                            }),
                        }),
                    }),
                (0, i.jsx)("td", {
                    className: a()(eM.QB, { [eM.oE]: c }),
                    children: (0, i.jsx)(e0, { member: t, user: l }),
                }),
                (0, i.jsx)("td", {
                    className: a()(eM.qp, { [eM.oE]: c }),
                    children: (0, i.jsx)(tt, { showLongDate: C, member: t, isSortedBy: M }),
                }),
                (0, i.jsx)("td", {
                    className: a()(eM.qp, { [eM.oE]: c }),
                    children: (0, i.jsx)(tl, { showLongDate: C, member: t, isSortedBy: L }),
                }),
                m &&
                    (0, i.jsx)("td", {
                        className: a()(eM.qp, { [eM.oE]: c }),
                        children: (0, i.jsx)(e4.Ay, { userId: t.userId, guildId: t.guildId }),
                    }),
                (0, i.jsx)("td", {
                    className: a()(eM.QB, { [eM.oE]: c }),
                    children: (0, i.jsx)(e6, { member: t, highestRole: n }),
                }),
                (0, i.jsx)("td", { className: a()(eM.qp, { [eM.oE]: c }), children: (0, i.jsx)(e7, { member: t }) }),
                (0, i.jsx)("td", {
                    className: a()(eM.OL, { [eM.oE]: c }),
                    children: (0, i.jsxs)("div", {
                        className: eM.$E,
                        children: [
                            (0, i.jsx)(_.m, {
                                asContainer: !0,
                                text: u ? D.intl.string(D.t.nHfkf4) : D.intl.string(D.t.uTre2y),
                                children: (0, i.jsx)(S.D, {
                                    onClick: d,
                                    className: eM.x6,
                                    children: u
                                        ? (0, i.jsx)(eq.A, { width: ti, height: ti })
                                        : (0, i.jsx)(eI.UserIcon, {
                                              size: "custom",
                                              color: "currentColor",
                                              width: ti,
                                              height: ti,
                                          }),
                                }),
                            }),
                            (0, i.jsx)(_.m, {
                                asContainer: !0,
                                text: D.intl.string(D.t.x8Nn4M),
                                children: (0, i.jsx)(S.D, {
                                    onClick: r,
                                    className: eM.x6,
                                    children: (0, i.jsx)(eS.MoreVerticalIcon, {
                                        size: "custom",
                                        color: "currentColor",
                                        width: ti,
                                        height: ti,
                                    }),
                                }),
                            }),
                        ],
                    }),
                }),
            ],
        });
    }),
    ti = 18,
    ts = ["sourceInviteCode", "joinSourceType", "inviterId", "integrationType", "joinedAt", "joinedAtTimestamp"],
    tC = s.memo(function (e) {
        let {
                userId: t,
                guildId: l,
                style: n,
                rowSelected: C,
                isLoading: r = !1,
                isHoldingAdvancedInfoKey: d = !1,
                compact: c = !1,
            } = e,
            { analyticsLocations: u } = (0, H.Ay)(),
            m = (0, o.bG)([eB.Ay], () => eB.Ay.getGuildSidebarState(l), [l]),
            h = m?.details.userId === t,
            g = (0, o.bG)([v.A], () => v.A.getEnhancedMember(l, t), [l, t]),
            x = (0, M.YH)(g),
            f = (0, o.bG)([eP.default], () => eP.default.getUser(t), [t]),
            j = (0, eO.q)(l),
            p = (0, M.UY)(g ?? void 0),
            V = s.useCallback(
                (e) => {
                    (e.stopPropagation(), e.preventDefault(), p(e));
                },
                [p],
            ),
            b = s.useCallback(
                (e) => {
                    (e.stopPropagation(), e.preventDefault(), null != g && (0, M.Ko)(g, u));
                },
                [g, u],
            ),
            A = s.useCallback(
                (e) => {
                    (e.stopPropagation(),
                        e.preventDefault(),
                        null != g &&
                            (j
                                ? (0, ek.z)(g.guildId, g.userId, e2.VV.MEMBER_SAFETY, { modViewPanel: e9.g.INFO })
                                : (0, M.Ko)(g, u)));
                },
                [g, u, j],
            ),
            L = s.useCallback((e, t) => I()((0, eR.omit)(e, ts), (0, eR.omit)(t, ts)), []);
        return null == g
            ? null
            : (0, i.jsx)(e8, {
                  role: "row",
                  value: g,
                  style: n,
                  className: a()(eM.yF, eM.iA, C && eM.wH, h && eM.qb, r && eM.Lq),
                  equalityFn: L,
                  onClick: b,
                  onContextMenu: V,
                  children: (0, i.jsx)(tn, {
                      member: g,
                      user: f,
                      highestRole: x,
                      isHoldingAdvancedInfoKey: d,
                      onOpenModerationMenu: V,
                      onOpenMemberView: A,
                      compact: c,
                      hasModViewPanelAccess: j,
                  }),
              });
    });
var ta = l(551816),
    tr = l(299720);
function td(e) {
    let { guild: t, onSubmit: n } = e,
        C = (0, o.bG)([v.A], () => v.A.getMembersCountByGuildId(t.id, ta.Tu.NEW_GUILD_MEMBER), [t.id]),
        a = (0, o.bG)(
            [v.A],
            () => {
                let e = v.A.getNewMemberTimestamp(t.id);
                return P()(e).format("h:mm A");
            },
            [t.id],
        ),
        r = (0, o.bG)([v.A], () => v.A.hasDefaultSearchStateByGuildId(t.id), [t.id]),
        d = s.useCallback(() => {
            ((0, V.UD)(t.id), n?.());
        }, [t.id, n]),
        u = s.useCallback(() => {
            r
                ? d()
                : (0, c.mM)(async () => {
                      let { default: e } = await l.e(256562).then(l.bind(l, 470857));
                      return (t) => (0, i.jsx)(e, { ...t, onConfirm: d });
                  });
        }, [d, r]),
        m = new Intl.NumberFormat(D.intl.currentLocale).format(C),
        h = (0, G.Y0)(t.id),
        { canAccessBulkActions: H } = (0, G.lN)(t.id),
        g = s.useMemo(() => 1 + +!!h + +!!H, [h, H]);
    return 0 === C
        ? null
        : (0, i.jsxs)("tr", {
              className: tr.iS,
              onClick: u,
              children: [
                  (0, i.jsx)("td", {
                      colSpan: 3,
                      children: (0, i.jsx)(A.E, {
                          variant: "body-sm/normal",
                          color: "text-overlay-light",
                          children: D.intl.format(D.t["/i5uJ1"], { count: m, date: a }),
                      }),
                  }),
                  (0, i.jsx)("td", { colSpan: g }),
                  (0, i.jsx)("td", {
                      colSpan: 2,
                      children: (0, i.jsx)("div", {
                          className: eM.$E,
                          children: (0, i.jsx)(S.D, {
                              onClick: u,
                              className: tr.Fu,
                              children: (0, i.jsxs)(A.E, {
                                  variant: "body-sm/normal",
                                  color: "text-overlay-light",
                                  className: tr.Lb,
                                  children: [
                                      (0, i.jsx)("div", { children: D.intl.string(D.t.rkyOzK) }),
                                      (0, i.jsx)(eI.UserIcon, {
                                          size: "custom",
                                          color: "currentColor",
                                          width: 16,
                                          height: 16,
                                          className: tr.Ke,
                                      }),
                                  ],
                              }),
                          }),
                      }),
                  }),
              ],
          });
}
var to = l(650583),
    tc = l(532120);
let tu = { transform: "translate3d(15%, 0, 0)", opacity: 0.3 },
    tm = { transform: "translate3d(5%, 0, 0)", opacity: 0.5 },
    th = { transform: "translate3d(0, 0, 0)", opacity: 1 },
    tH = { mass: 1.1, friction: 24, tension: 260 };
function tg(e) {
    return e.shiftKey || e.key === to.dh.SHIFT;
}
function tx(e) {
    return e.metaKey || e.ctrlKey || ["Meta", "Control"].includes(e.key);
}
let tf = s.memo(
        function (e) {
            let {
                    members: t,
                    guild: l,
                    className: n,
                    searchState: C,
                    compact: r,
                    onSelectRow: d,
                    onResetForNewMembers: H,
                } = e,
                g = (0, o.bG)([h.Ay], () => h.Ay.useReducedMotion),
                x = (0, o.bG)([j.A], () => j.A.hasPendingBulkBan(l.id), [l.id]),
                p = (0, c.Rv)(),
                b = (0, f.j)(),
                [A, L] = s.useState(!1),
                [R, N] = s.useState(!1),
                I = !p && A && R;
            (s.useEffect(() => {
                b || (L(!1), N(!1));
            }, [b]),
                s.useLayoutEffect(() => {
                    function e(e) {
                        (tg(e) && L(!0), tx(e) && N(!0));
                    }
                    function t(e) {
                        (tg(e) && L(!1), tx(e) && N(!1));
                    }
                    return (
                        window.addEventListener("keydown", e),
                        window.addEventListener("keyup", t),
                        () => {
                            (window.removeEventListener("keydown", e), window.removeEventListener("keyup", t));
                        }
                    );
                }, []),
                s.useEffect(() => {
                    (0, V.jo)(l.id, t);
                }, [l.id, t]));
            let S = t.length > 30,
                y = (0, u.p)(t, {
                    key: (e) => e,
                    trail: S ? 5 : 15,
                    from(e) {
                        let t = v.A.getEnhancedMember(l.id, e),
                            n = v.A.getLastRefreshTimestamp(l.id),
                            i = null == t || 0 === n,
                            s = null != t && t.refreshTimestamp === n;
                        return i || !s ? th : S ? tm : tu;
                    },
                    enter: th,
                    config: tH,
                }),
                Z = !g && C === M.IY.LOADING;
            return (0, i.jsxs)("table", {
                className: a()(tc.tp, n),
                children: [
                    (0, i.jsx)(eD, { guildId: l.id, currentPagedMembers: t }),
                    x &&
                        (0, i.jsx)("tbody", {
                            children: (0, i.jsx)("tr", {
                                children: (0, i.jsx)("td", {
                                    colSpan: 99,
                                    className: tc.cg,
                                    children: (0, i.jsxs)("div", {
                                        className: tc.pZ,
                                        children: [
                                            (0, i.jsx)("div", {
                                                className: tc.sj,
                                                children: (0, i.jsx)("div", { className: tc.S0 }),
                                            }),
                                            (0, i.jsx)(m.w, {
                                                type: "info",
                                                message: D.intl.string(D.t["UP+9QZ"]),
                                                role: "status",
                                            }),
                                        ],
                                    }),
                                }),
                            }),
                        }),
                    (0, i.jsx)("tbody", {
                        className: a()({ [tc.u6]: x }),
                        children:
                            C === M.IY.SUCCESS_FULL || C === M.IY.LOADING
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(td, { guild: l, onSubmit: H }),
                                          y((e, t) =>
                                              (0, i.jsx)(
                                                  tC,
                                                  {
                                                      userId: t,
                                                      guildId: l.id,
                                                      style: e,
                                                      onSelect: d,
                                                      isHoldingAdvancedInfoKey: I,
                                                      compact: r,
                                                      isLoading: Z,
                                                  },
                                                  t,
                                              ),
                                          ),
                                      ],
                                  })
                                : (0, i.jsx)("td", { colSpan: 7, children: (0, i.jsx)(E, { searchState: C }) }),
                    }),
                ],
            });
        },
        function (e, t) {
            let l = d()(e.members, t.members),
                n = e.guild.id === t.guild.id,
                i = e.searchState === t.searchState,
                s = e.compact === t.compact;
            return l && n && i && s;
        },
    ),
    tj = function (e) {
        var t;
        let { guild: l, className: n, searchState: C, compact: a, onSelectRow: r, onResetForNewMembers: d } = e,
            c = (0, o.cf)([v.A], () => v.A.getPaginationStateByGuildId(l.id), [l.id]),
            [u] = (0, o.bG)([v.A], () => v.A.getPagedMembersByGuildId(l.id), [l.id], x.D);
        ((t = l.id),
            s.useEffect(
                () => (
                    b.Cf(t),
                    () => {
                        b.G9(t);
                    }
                ),
                [t],
            ),
            s.useEffect(() => {
                (0, V.uO)(l.id);
            }, [l.id]));
        let m = s.useDeferredValue(u[c.currentPage] ?? []);
        s.useEffect(() => {
            (0, g.m)(l.id, m);
        }, [l.id, m]);
        let { analyticsLocations: h } = (0, H.Ay)(),
            f = h?.[0] ?? null;
        return (
            s.useEffect(() => {
                (0, p.KW)(l.id, f);
            }, [l.id, f]),
            (0, i.jsx)(tf, {
                members: m,
                guild: l,
                className: n,
                searchState: C,
                compact: a,
                onSelectRow: r,
                onResetForNewMembers: d,
            })
        );
    };
