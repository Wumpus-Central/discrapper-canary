l.d(t, { A: () => tp });
var n,
    i = l(477900),
    s = l(582128),
    a = l(503698),
    C = l.n(a),
    r = l(812729),
    d = l.n(r),
    o = l(164636),
    c = l(192308),
    u = l(866323),
    m = l(683071),
    h = l(775602),
    g = l(688810),
    f = l(579974),
    x = l(996439),
    H = l(218394),
    p = l(879408),
    j = l(504049),
    v = l(406318),
    b = l(221950),
    A = l(361610),
    M = l(834730),
    V = l(189552),
    L = l(636670),
    D = l(792996),
    R = l(602083);
function E(e) {
    let { searchState: t } = e,
        l = s.useMemo(
            () => ({
                [V.IY.LOADING]: null,
                [V.IY.SUCCESS_STILL_INDEXING]: { icon: null, message: D.intl.string(D.t.AXPbZr) },
                [V.IY.SUCCESS_EMPTY]: { icon: (0, i.jsx)(L.A, {}), message: D.intl.string(D.t.wdyR52) },
                [V.IY.SUCCESS_FULL]: null,
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
                  (0, i.jsx)(M.E, { variant: "body-md/normal", color: "text-muted", children: l.message }),
              ],
          });
}
var I = l(811315),
    _ = l.n(I),
    S = l(939249),
    N = l(783977),
    y = l(646514),
    Z = l(866665),
    T = l(658675),
    w = l(265872),
    U = l(71393),
    k = l(576705),
    O = l(70738),
    F = l(587426),
    P = l(134413),
    B = l(536637),
    G = l.n(B),
    q = l(156828),
    z = l(165862),
    Y = l(477782),
    K = l(320448),
    $ = l(921853),
    W = l(282054),
    X = l(652215),
    Q = l(351114);
let J = "MMM Do, YYYY",
    ee = G()("2015-05-15").local(),
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
            beforeDate: a,
            selectedOption: r,
            isCustomDateRange: d,
            menuName: o,
            onClose: c,
            onSelectDateOption: u,
            onToggleCustomDateRange: m,
            onSelectStartDate: h,
            onSelectEndDate: g,
        } = e,
        f = [
            { id: 0, option: null, label: D.intl.string(D.t.jelCib) },
            { id: 1, option: { input: 1, unit: "h" }, label: D.intl.string(D.t["91RDqi"]) },
            { id: 2, option: { input: 24, unit: "h" }, label: D.intl.string(D.t["Lj/1Tq"]) },
            { id: 3, option: { input: 7, unit: "d" }, label: D.intl.string(D.t.NnUMSZ) },
            { id: 4, option: { input: 2, unit: "w" }, label: D.intl.string(D.t.hY3XWH) },
            { id: 5, option: { input: 4, unit: "w" }, label: D.intl.string(D.t.kQTwT0) },
            { id: 6, option: { input: 3, unit: "M" }, label: D.intl.string(D.t.EPuP0s) },
        ],
        [x, H] = s.useState(!1),
        p =
            7 !== r
                ? null
                : null != t && null != l
                  ? `${t} - ${l}`
                  : null != t
                    ? D.intl.formatToPlainString(D.t.ClmSzd, { date: t })
                    : null != l
                      ? D.intl.formatToPlainString(D.t.YvNhsd, { date: l })
                      : null,
        j = s.useCallback(() => {
            (H(!0), m());
        }, [m]),
        v = s.useCallback(
            (e) => {
                h(e);
            },
            [h],
        ),
        b = s.useCallback(
            (e) => {
                g(e);
            },
            [g],
        ),
        A = s.useCallback(() => {
            (null == a && null == n && u(0, null), H(!1));
        }, [n, a, u]);
    return (0, i.jsx)(z.W, {
        "data-menu-needs-migration": !0,
        navId: `member-safety-guild-member-${o}-menu`,
        onClose: c,
        "aria-label": D.intl.string(D.t.k9m8Rg),
        onSelect: X.tEg,
        children: (0, i.jsx)(Y.rX, {
            children: x
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(Y.Dr, {
                              id: "back",
                              action: A,
                              dontCloseOnAction: !0,
                              render: (e) =>
                                  (0, i.jsxs)("span", {
                                      ...e,
                                      className: Q.W6,
                                      children: [
                                          (0, i.jsx)($.ChevronSmallLeftIcon, {
                                              size: "custom",
                                              color: "currentColor",
                                              width: 16,
                                              height: 16,
                                          }),
                                          (0, i.jsx)(M.E, {
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
                              subMenuClassName: Q.aD,
                              children: (0, i.jsx)(Y.Dr, {
                                  id: "after-date-picker",
                                  render: (e) =>
                                      (0, i.jsx)(et, {
                                          ...e,
                                          calendarClassName: Q.BJ,
                                          value: d && null != n ? G()(n) : void 0,
                                          onSelect: v,
                                          maxDate: G()().local(),
                                          minDate: ee,
                                      }),
                              }),
                          }),
                          (0, i.jsx)(Y.Dr, {
                              id: "before-date-menu-item",
                              label: D.intl.string(D.t.jF54hQ),
                              subtext: l,
                              subMenuClassName: Q.aD,
                              children: (0, i.jsx)(Y.Dr, {
                                  id: "before-date-picker",
                                  render: (e) =>
                                      (0, i.jsx)(et, {
                                          ...e,
                                          calendarClassName: Q.BJ,
                                          value: d && null != a ? G()(a) : void 0,
                                          onSelect: b,
                                          maxDate: G()().local(),
                                          minDate: d && null != n ? G()(n) : ee,
                                      }),
                              }),
                          }),
                      ],
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          f.map((e) => {
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
                              action: j,
                              dontCloseOnAction: !0,
                              render: (e) =>
                                  (0, i.jsxs)("div", {
                                      className: C()(Q.Dh, { [Q.in]: e.isFocused }),
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: Q.jA,
                                              children: [
                                                  (0, i.jsx)(M.E, {
                                                      className: C()(Q.ty, { [Q.in]: e.isFocused }),
                                                      variant: "body-sm/medium",
                                                      children: D.intl.string(D.t.BTfN6g),
                                                  }),
                                                  null != p &&
                                                      (0, i.jsx)(M.E, {
                                                          className: C()(Q.ty, { [Q.in]: e.isFocused }),
                                                          color: "text-muted",
                                                          variant: "footnote/medium",
                                                          children: p,
                                                      }),
                                              ],
                                          }),
                                          7 === r
                                              ? (0, i.jsx)(W.A, { foreground: Q.QE, width: 18, height: 18 })
                                              : (0, i.jsx)(K.ChevronSmallRightIcon, {
                                                    size: "custom",
                                                    color: "currentColor",
                                                    width: 16,
                                                    height: 16,
                                                    className: C()(Q.ty, { [Q.in]: e.isFocused }),
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
        n = (0, o.bG)([v.A], () => v.A.getSearchStateByGuildId(t), [t], _()),
        { selectedAccountAgeOption: s } = n,
        { afterDate: a, beforeDate: C, optionId: r } = s,
        d = r === el.CUSTOM,
        c = d && null != a ? G()(a).format(J) : null,
        u = d && null != C ? G()(C).format(J) : null;
    return (0, i.jsx)(en, {
        startDateLabel: c,
        endDateLabel: u,
        afterDate: a,
        beforeDate: C,
        selectedOption: r,
        isCustomDateRange: d,
        menuName: "account-age",
        accessibilityLabel: D.intl.string(D.t["D++Tgf"]),
        onClose: l,
        onSelectDateOption: function (e, l) {
            let i = null != l ? G()().subtract(l.input, l.unit).valueOf() : null;
            (0, b.Ld)(t, { ...n, selectedAccountAgeOption: { optionId: e, afterDate: i, beforeDate: null } });
        },
        onToggleCustomDateRange: function () {
            (0, b.Ld)(t, {
                ...n,
                selectedAccountAgeOption: { optionId: el.CUSTOM, afterDate: d ? a : null, beforeDate: d ? C : null },
            });
        },
        onSelectStartDate: function (e) {
            (0, b.Ld)(t, {
                ...n,
                selectedAccountAgeOption: { optionId: el.CUSTOM, afterDate: e.valueOf(), beforeDate: C },
            });
        },
        onSelectEndDate: function (e) {
            (0, b.Ld)(t, {
                ...n,
                selectedAccountAgeOption: { optionId: el.CUSTOM, afterDate: a, beforeDate: e.valueOf() },
            });
        },
    });
}
var es = l(565787),
    ea = l(953822),
    eC = l(60270),
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
        n = (0, o.bG)([v.A], () => v.A.getSearchStateByGuildId(t), [t], _()),
        a = (0, j.Tj)(t),
        C = s.useCallback(() => {
            (n.requireUnusualDmActivity || a(j.Zp.UNUSUAL_DM_ACTIVITY),
                (0, b.Ld)(t, { ...n, requireUnusualDmActivity: !n.requireUnusualDmActivity }));
        }, [t, n, a]),
        r = s.useCallback(() => {
            (n.requireCommunicationDisabled || a(j.Zp.COMMUNICATION_DISABLED),
                (0, b.Ld)(t, { ...n, requireCommunicationDisabled: !n.requireCommunicationDisabled }));
        }, [t, n, a]),
        d = s.useCallback(() => {
            (n.requireUnusualAccountActivity || a(j.Zp.UNUSUAL_ACCOUNT_ACTIVITY),
                (0, b.Ld)(t, { ...n, requireUnusualAccountActivity: !n.requireUnusualAccountActivity }));
        }, [t, n, a]),
        c = s.useCallback(() => {
            (n.requireUsernameQuarantined || a(j.Zp.USERNAME_QUARANTINED),
                (0, b.Ld)(t, { ...n, requireUsernameQuarantined: !n.requireUsernameQuarantined }));
        }, [t, n, a]);
    return (0, i.jsx)(z.W, {
        "data-menu-migrated": !0,
        navId: "member-safety-flags",
        onClose: l,
        "aria-label": D.intl.string(D.t.k9m8Rg),
        onSelect: X.tEg,
        children: (0, i.jsxs)(Y.rX, {
            children: [
                (0, i.jsx)(Y.sL, {
                    id: "toggle-require-unusual-dm-activity",
                    label: D.intl.string(D.t.ZRnON3),
                    leftIcon: ea.ChatWarningIcon,
                    leadingAccessory: { type: "icon", icon: ea.ChatWarningIcon },
                    action: C,
                    checked: n.requireUnusualDmActivity,
                }),
                (0, i.jsx)(Y.sL, {
                    id: "toggle-require-communication-disabled",
                    label: D.intl.string(D.t.z3wbj8),
                    leftIcon: eC.ClockWarningIcon,
                    leadingAccessory: { type: "icon", icon: eC.ClockWarningIcon },
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
        n = (0, o.bG)([v.A], () => v.A.getSearchStateByGuildId(t), [t], _()),
        { selectedJoinDateOption: s } = n,
        { afterDate: a, beforeDate: C, optionId: r } = s,
        d = r === el.CUSTOM,
        c = d && null != a ? G()(a).format(J) : null,
        u = d && null != C ? G()(C).format(J) : null;
    return (0, i.jsx)(en, {
        startDateLabel: c,
        endDateLabel: u,
        afterDate: a,
        beforeDate: C,
        selectedOption: r,
        isCustomDateRange: d,
        menuName: "joined-date",
        accessibilityLabel: D.intl.string(D.t.XMVinX),
        onClose: l,
        onSelectDateOption: function (e, l) {
            let i = null != l ? G()().subtract(l.input, l.unit).valueOf() : null;
            (0, b.Ld)(t, { ...n, selectedJoinDateOption: { optionId: e, afterDate: i, beforeDate: null } });
        },
        onToggleCustomDateRange: function () {
            (0, b.Ld)(t, {
                ...n,
                selectedJoinDateOption: { optionId: el.CUSTOM, afterDate: d ? a : null, beforeDate: d ? C : null },
            });
        },
        onSelectStartDate: function (e) {
            (0, b.Ld)(t, {
                ...n,
                selectedJoinDateOption: { optionId: el.CUSTOM, afterDate: e.valueOf(), beforeDate: C },
            });
        },
        onSelectEndDate: function (e) {
            (0, b.Ld)(t, {
                ...n,
                selectedJoinDateOption: { optionId: el.CUSTOM, afterDate: a, beforeDate: e.valueOf() },
            });
        },
    });
}
var eh = l(311567),
    eg = l(91871),
    ef = l.n(eg),
    ex = l(855986),
    eH = l(602853),
    ep = l(583650),
    ej = l(676608),
    ev = l(34457),
    eb = l(317525);
function eA(e) {
    let { guildId: t, onClose: l } = e,
        n = (0, j.hs)(t),
        [a, C] = s.useState(""),
        r = (0, o.bG)([v.A], () => v.A.getSearchStateByGuildId(t), [t], _()),
        d = (0, o.bG)([h.Ay], () => h.Ay.roleStyle),
        c = (0, eH.r)(y.A.unsafe_rawColors.PRIMARY_300).hex(),
        u = (0, ej.jV)(t, null),
        m = (0, ex.yK)([eb.A], () => eb.A.getSortedRoles(t).filter((e) => !(0, ev.Oy)(e)), [t]),
        g = s.useMemo(() => ("" === a ? m : m.filter((e) => ef()(a.toLowerCase(), e.name.toLowerCase()))), [m, a]),
        f = s.useCallback(
            (e) => {
                let l = new Set(r.selectedRoleIds);
                (l.has(e) ? l.delete(e) : l.add(e), (0, b.Ld)(t, { selectedRoleIds: l }), n(l));
            },
            [t, r.selectedRoleIds, n],
        );
    return (0, i.jsx)(z.W, {
        "data-menu-migrated": !0,
        navId: "member-safety-roles",
        onClose: l,
        "aria-label": D.intl.string(D.t.ZveC7e),
        onSelect: X.tEg,
        children: (0, i.jsxs)(Y.rX, {
            children: [
                (0, i.jsx)(Y.aK, {
                    id: "members-table-role-search",
                    control: (e, t) =>
                        (0, i.jsx)(ep.V, {
                            ...e,
                            query: a,
                            onChange: C,
                            ref: t,
                            placeholder: D.intl.string(D.t.ZveC7e),
                        }),
                }),
                (0, i.jsx)(Y.bX, {}),
                g.map((e) => {
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
                            action: () => f(e.id),
                        },
                        e.id,
                    );
                }),
            ],
        }),
    });
}
var eM = l(307877),
    eV = l(917089);
function eL(e) {
    let { label: t, onFilter: l, isFiltered: n, isSorted: s, className: a, ref: r, ...d } = e,
        o = n ? "text-strong" : "text-default";
    return (
        s && (o = "text-brand"),
        (0, i.jsx)("th", {
            className: C()(eM.P1, a),
            children: (0, i.jsxs)(S.D, {
                ...d,
                innerRef: r,
                onClick: l,
                className: C()(eM.WV, { [eM.o1]: null != l }),
                children: [
                    (0, i.jsx)(M.E, { variant: "body-sm/medium", color: o, children: t }),
                    null != l &&
                        (0, i.jsx)("div", {
                            className: eM.IO,
                            children: (0, i.jsx)(N.FiltersHorizontalIcon, {
                                size: "custom",
                                className: eM.Sj,
                                color: n ? y.A.colors.CONTROL_BRAND_FOREGROUND.css : y.A.colors.TEXT_MUTED.css,
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
        a = s.useRef(null),
        r = s.useRef(null),
        d = s.useRef(null),
        c = s.useRef(null),
        u = (0, o.bG)([v.A], () => v.A.getSearchStateByGuildId(t), [t], _()),
        m = (0, o.bG)([k.A, U.A], () => k.A.can(X.xBc.MANAGE_GUILD, U.A.getGuild(t)), [t]),
        { selectedUserIds: h, addUsers: g, clearSelection: f } = (0, F.A)(t),
        x =
            u.requireUnusualDmActivity ||
            u.requireCommunicationDisabled ||
            u.requireUnusualAccountActivity ||
            u.requireUsernameQuarantined,
        H = u.selectedRoleIds.size > 0,
        p = null != u.selectedJoinDateOption.afterDate,
        j = u.selectedSort === O.mF.ORDER_BY_GUILD_JOINED_AT_ASC,
        b = null != u.selectedAccountAgeOption.afterDate,
        A = u.selectedSort === O.mF.ORDER_BY_USER_ID_ASC || u.selectedSort === O.mF.ORDER_BY_USER_ID_DESC,
        M = null != u.selectedSourceInviteCode && "" !== u.selectedSourceInviteCode,
        V = null != u.selectedJoinSourceType,
        L = M || V,
        { canAccessBulkActions: R, canAccessBulkBan: E, canSelectAnyMember: I } = (0, P.lN)(t),
        N = s.useMemo(() => l.filter((e) => I || (E && (0, P.Ph)(t, e))), [E, I, l, t]),
        y = N.length > 0,
        B = 0 === N.filter((e) => !h.has(e)).length,
        G = s.useCallback(() => {
            y && (B ? f() : g(N));
        }, [y, B, f, g, N]);
    return (0, i.jsx)("thead", {
        children: (0, i.jsxs)("tr", {
            className: eM.Yk,
            children: [
                R &&
                    (0, i.jsx)("th", {
                        className: C()(eM.P1, eV.y2),
                        children: (0, i.jsx)(Z.m, {
                            shouldShow: !y,
                            text: D.intl.string(D.t.tJEY0G),
                            children: (0, i.jsx)(S.D, {
                                onClick: G,
                                className: eM.WV,
                                children: (0, i.jsx)(T.P, { checked: B, disabled: !y }),
                            }),
                        }),
                    }),
                (0, i.jsx)(eL, { label: D.intl.string(D.t.Es7n9c) }),
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
                                      return (0, i.jsx)(em, { guildId: t, onClose: l });
                                  },
                                  children: (e) => {
                                      let { onClick: t, ...l } = e;
                                      return (0, i.jsx)(eL, {
                                          ref: n,
                                          label: D.intl.string(D.t.xcKP1P),
                                          onFilter: t,
                                          isFiltered: p,
                                          isSorted: j,
                                          className: eV.qp,
                                          ...l,
                                      });
                                  },
                              }),
                              (0, i.jsx)(w.Y, {
                                  targetElementRef: a,
                                  animation: w.Y.Animation.FADE,
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
                                          ref: a,
                                          label: D.intl.string(D.t.sPph4O),
                                          onFilter: t,
                                          isFiltered: b,
                                          isSorted: A,
                                          className: eV.qp,
                                          ...l,
                                      });
                                  },
                              }),
                          ],
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(eL, { label: D.intl.string(D.t.xcKP1P), className: eV.qp }),
                              (0, i.jsx)(eL, { label: D.intl.string(D.t.sPph4O), className: eV.qp }),
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
                              return (0, i.jsx)(eh.default, { guildId: t, onClose: l });
                          },
                          children: (e) => {
                              let { onClick: t, ...l } = e;
                              return (0, i.jsx)(eL, {
                                  ref: r,
                                  label: D.intl.string(D.t["yn0w1+"]),
                                  onFilter: t,
                                  isFiltered: L,
                                  className: eV.qp,
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
                        return (0, i.jsx)(eA, { guildId: t, onClose: l });
                    },
                    children: (e) => {
                        let { onClick: t, ...l } = e;
                        return (0, i.jsx)(eL, {
                            ref: d,
                            label: D.intl.string(D.t["2SZsWX"]),
                            onFilter: t,
                            isFiltered: H,
                            className: eV.QB,
                            ...l,
                        });
                    },
                }),
                (0, i.jsx)(Z.m, {
                    text: D.intl.string(D.t["2cRO3R"]),
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
                                className: eV.qp,
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
                (0, i.jsx)(eL, { label: D.intl.string(D.t["5Q9xGr"]), className: eV.qp }),
            ],
        }),
    });
}
var eR = l(435558),
    eE = l(307301),
    eI = l(463930),
    e_ = l(950305),
    eS = l(530005),
    eN = l(966327),
    ey = l(396583),
    eZ = l(576470),
    eT = l(229527),
    ew = l(316031),
    eU = l(474196),
    ek = l(985925),
    eO = l(534400),
    eF = l(694318),
    eP = l(967144),
    eB = l(799704),
    eG = l(287809),
    eq = l(881548),
    ez = l(562153),
    eY = l(811091),
    eK = l(427262),
    e$ = l(157347),
    eW = l(120692),
    eX = l(615300),
    eQ = l(717421),
    eJ = l(475743);
let e1 = { duration: 100, easing: eX.A.Easing.inOut(eX.A.Easing.back()), clamp: !0 },
    e3 = { duration: 2e3, easing: eX.A.Easing.quad, clamp: !0 };
function e8(e) {
    let { value: t, children: l, equalityFn: n = _(), style: a, ...C } = e,
        r = (0, eJ.Ay)(t),
        [{ spring: d }, o] = (0, eQ.z)(() => ({ spring: 0 }), "animate-always"),
        c = (0, eH.r)(y.A.colors.BACKGROUND_BASE_LOW).hex(),
        u = (0, eH.r)(y.A.colors.CONTROL_BRAND_FOREGROUND).hex(),
        m = s.useCallback(() => {
            (o({ spring: 1, config: e1 }), o({ spring: 0, config: e3, delay: 300 }));
        }, [o]);
    s.useEffect(() => {
        null == t || null == r || n(t, r) || m();
    }, [m, t, r, n]);
    let h = d?.to({ range: [0, 1], output: [`${c}00`, `${u}27`] }),
        g = null != a ? { ...a, backgroundColor: h } : { backgroundColor: h };
    return (0, i.jsx)(eW.animated.tr, { ...C, style: g, children: l });
}
var e4 = l(589935),
    e5 = l(950072),
    e2 = l(746080),
    e9 = l(486974);
let e7 = s.memo(function (e) {
        let { member: t } = e,
            l = s.useMemo(() => (0, ew.n)(t.communicationDisabledUntil), [t.communicationDisabledUntil]),
            n = s.useMemo(
                () => (null == t.communicationDisabledUntil ? new Date() : new Date(t.communicationDisabledUntil)),
                [t.communicationDisabledUntil],
            );
        return (0, i.jsxs)("div", {
            className: eV.Ak,
            children: [
                t.hasUnusualDmActivity &&
                    (0, i.jsx)(Z.m, {
                        text: D.intl.string(D.t.QrfVTp),
                        children: (0, i.jsx)(ea.ChatWarningIcon, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: y.A.colors.TEXT_MUTED.css,
                        }),
                    }),
                l &&
                    (0, i.jsx)(Z.m, {
                        "aria-label": D.intl.string(D.t["xfJP+u"]),
                        __unsupportedReactNodeAsText: (0, i.jsxs)("div", {
                            className: eV.CN,
                            children: [
                                (0, i.jsx)("div", { children: D.intl.string(D.t["xfJP+u"]) }),
                                (0, i.jsx)(eZ.A, { deadline: n, showUnits: !0, stopAtOneSec: !0 }),
                            ],
                        }),
                        children: (0, i.jsx)(eC.ClockWarningIcon, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: y.A.colors.TEXT_FEEDBACK_CRITICAL.css,
                        }),
                    }),
                (0, eF.cx)(t.userId) &&
                    (0, i.jsx)(Z.m, {
                        text: D.intl.string(D.t.PK9FQ2),
                        children: (0, i.jsx)(eo, {
                            width: 20,
                            height: 20,
                            color: y.A.colors.TEXT_FEEDBACK_CRITICAL.css,
                        }),
                    }),
                (0, eT.TR)(t) &&
                    (0, i.jsx)(Z.m, {
                        text: D.intl.string(D.t.qOVbaX),
                        children: (0, i.jsx)(er.ChatXIcon, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: y.A.colors.TEXT_MUTED.css,
                        }),
                    }),
            ],
        });
    }),
    e6 = s.memo(function (e) {
        let { member: t, highestRole: l } = e,
            n = (0, o.bG)([U.A], () => U.A.getGuild(t.guildId), [t.guildId]),
            a = t.roles.length - 1,
            r = s.useMemo(() => new Intl.NumberFormat(D.intl.currentLocale).format(a), [a]),
            d = (0, V.Cy)(t),
            c = (0, V.Cy)(t, !0),
            u = (0, o.bG)([k.A], () => k.A.can(X.xBc.MANAGE_ROLES, n), [n]);
        return null == n
            ? null
            : (0, i.jsxs)("div", {
                  className: eV.yk,
                  children: [
                      null != l && (0, i.jsx)(e5.A, { className: C()(eV.Zf, eV.Lc), role: l, guildId: t.guildId }),
                      a > 0 &&
                          (0, i.jsx)(S.D, {
                              className: eV.yt,
                              onClick: (e) => c(e),
                              children: (0, i.jsx)(Z.m, {
                                  text: D.intl.string(D.t.DY6n4q),
                                  children: (0, i.jsxs)(M.E, {
                                      variant: "body-xs/medium",
                                      color: "text-strong",
                                      children: ["+", r],
                                  }),
                              }),
                          }),
                      u &&
                          (0, i.jsx)(Z.m, {
                              text: D.intl.string(D.t.h3pSLR),
                              children: (0, i.jsx)(S.D, {
                                  onClick: d,
                                  className: C()(eV.yt, eV.$g),
                                  children: (0, i.jsx)(eE.PlusSmallIcon, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: eV.fd,
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
            n = (0, eP.gn)(t?.guildId, t?.userId, t?.colorStrings ?? null);
        return null == l || null == t
            ? null
            : (0, i.jsxs)("div", {
                  className: eV.FD,
                  children: [
                      (0, i.jsx)("div", { className: eV.Wn, children: (0, i.jsx)(eN.A, { user: l }) }),
                      (0, i.jsx)("div", {
                          className: eV.eg,
                          children: (0, i.jsx)(M.E, {
                              variant: "body-sm/medium",
                              children: (0, i.jsxs)("div", {
                                  className: eV.VW,
                                  children: [
                                      (0, i.jsx)(eI.g, {
                                          name: ez.Ay.getName(t.guildId, null, l),
                                          colorString: t.colorString ?? null,
                                          colorStrings: n,
                                          className: eV.bc,
                                      }),
                                      (0, i.jsx)(eO.Ay, {
                                          primaryGuild: l?.primaryGuild,
                                          userId: l?.id,
                                          contextGuildId: t.guildId,
                                          containerClassName: eV.Dz,
                                      }),
                                  ],
                              }),
                          }),
                      }),
                      (0, i.jsx)("div", {
                          className: eV.Br,
                          children: (0, i.jsx)(M.E, {
                              variant: "body-xs/normal",
                              color: "text-default",
                              tag: "span",
                              children: eK.Ay.getUserTag(l),
                          }),
                      }),
                  ],
              });
    });
function te(e) {
    return {
        short: null == e ? null : (0, e$.hL)(e, e$.wN.JOINED_AT),
        long: new Date(e ?? 0).toLocaleDateString(D.intl.currentLocale, e$.wp),
    };
}
function tt(e) {
    let { member: t, showLongDate: l, isSortedBy: n } = e,
        [a, C] = s.useState(null);
    (s.useEffect(() => {
        C(te(t.joinedAtTimestamp));
    }, [t.joinedAtTimestamp]),
        (0, ey.A)(() => {
            C(te(t.joinedAtTimestamp));
        }, 1e4));
    let r = n ? "text-brand" : "text-default";
    return a?.short == null
        ? null
        : l
          ? (0, i.jsx)("div", {
                className: eV.__invalid_joinedAtContainer,
                children: (0, i.jsx)(M.E, { variant: "body-sm/medium", color: r, children: a.long }),
            })
          : (0, i.jsx)("div", {
                className: eV.__invalid_joinedAtContainer,
                children: (0, i.jsx)(Z.m, {
                    align: "left",
                    __unsupportedReactNodeAsText: a.long,
                    children: (0, i.jsx)(M.E, { variant: "body-sm/medium", color: r, children: a.short }),
                }),
            });
}
let tl = s.memo(function (e) {
        let { member: t, showLongDate: l, isSortedBy: n } = e,
            { accountCreationDateShort: a, accountCreationDateLong: C } = s.useMemo(() => {
                let e = eY.default.extractTimestamp(t.userId);
                return {
                    accountCreationDateShort: (0, e$.hL)(e, e$.wN.ACCOUNT_AGE),
                    accountCreationDateLong: new Date(e).toLocaleDateString(D.intl.currentLocale, e$.OA),
                };
            }, [t.userId]),
            r = n ? "text-brand" : "text-default";
        return l
            ? (0, i.jsx)(M.E, { variant: "body-sm/medium", color: r, children: C })
            : (0, i.jsx)(Z.m, {
                  align: "left",
                  __unsupportedReactNodeAsText: C,
                  children: (0, i.jsx)(M.E, { variant: "body-sm/medium", color: r, children: a }),
              });
    }),
    tn = s.memo(function (e) {
        let {
                member: t,
                user: l,
                highestRole: n,
                isHoldingAdvancedInfoKey: a,
                onOpenModerationMenu: r,
                onOpenMemberView: d,
                compact: c,
                hasModViewPanelAccess: u,
            } = e,
            m = (0, o.bG)([k.A, U.A], () => k.A.can(X.xBc.MANAGE_GUILD, U.A.getGuild(t.guildId)), [t.guildId]),
            { selectedUserIds: h, addUsers: g, removeUser: f } = (0, F.A)(t.guildId),
            { canAccessBulkActions: x, canAccessBulkBan: H, canSelectAnyMember: p } = (0, P.lN)(t.guildId),
            j = (0, P.O6)(t.guildId, t.userId),
            b = p || (H && j),
            A = (0, o.bG)(
                [v.A],
                () => v.A.getSearchStateByGuildId(t.guildId).selectedSort ?? O.mF.ORDER_BY_UNSPECIFIED,
                [t.guildId],
                _(),
            ),
            M = s.useCallback(
                (e) => {
                    (e.stopPropagation(),
                        e.preventDefault(),
                        null != t && b && (h.has(t.userId) ? f(t.userId) : g([t.userId])));
                },
                [g, b, t, f, h],
            ),
            V = A === O.mF.ORDER_BY_GUILD_JOINED_AT_ASC,
            L = A === O.mF.ORDER_BY_USER_ID_ASC || A === O.mF.ORDER_BY_USER_ID_DESC;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                x &&
                    (0, i.jsx)("td", {
                        children: (0, i.jsx)(Z.m, {
                            shouldShow: !b,
                            ariaHidden: b,
                            text: D.intl.string(D.t["Se4c7+"]),
                            children: (0, i.jsx)(S.D, {
                                onClick: M,
                                children: (0, i.jsx)(T.P, { checked: h.has(t.userId), disabled: !b }),
                            }),
                        }),
                    }),
                (0, i.jsx)("td", {
                    className: C()(eV.QB, { [eV.oE]: c }),
                    children: (0, i.jsx)(e0, { member: t, user: l }),
                }),
                (0, i.jsx)("td", {
                    className: C()(eV.qp, { [eV.oE]: c }),
                    children: (0, i.jsx)(tt, { showLongDate: a, member: t, isSortedBy: V }),
                }),
                (0, i.jsx)("td", {
                    className: C()(eV.qp, { [eV.oE]: c }),
                    children: (0, i.jsx)(tl, { showLongDate: a, member: t, isSortedBy: L }),
                }),
                m &&
                    (0, i.jsx)("td", {
                        className: C()(eV.qp, { [eV.oE]: c }),
                        children: (0, i.jsx)(e4.Ay, { userId: t.userId, guildId: t.guildId }),
                    }),
                (0, i.jsx)("td", {
                    className: C()(eV.QB, { [eV.oE]: c }),
                    children: (0, i.jsx)(e6, { member: t, highestRole: n }),
                }),
                (0, i.jsx)("td", { className: C()(eV.qp, { [eV.oE]: c }), children: (0, i.jsx)(e7, { member: t }) }),
                (0, i.jsx)("td", {
                    className: C()(eV.OL, { [eV.oE]: c }),
                    children: (0, i.jsxs)("div", {
                        className: eV.$E,
                        children: [
                            (0, i.jsx)(Z.m, {
                                asContainer: !0,
                                text: u ? D.intl.string(D.t.nHfkf4) : D.intl.string(D.t.uTre2y),
                                children: (0, i.jsx)(S.D, {
                                    onClick: d,
                                    className: eV.x6,
                                    children: u
                                        ? (0, i.jsx)(eq.A, { width: ti, height: ti })
                                        : (0, i.jsx)(e_.UserIcon, {
                                              size: "custom",
                                              color: "currentColor",
                                              width: ti,
                                              height: ti,
                                          }),
                                }),
                            }),
                            (0, i.jsx)(Z.m, {
                                asContainer: !0,
                                text: D.intl.string(D.t.x8Nn4M),
                                children: (0, i.jsx)(S.D, {
                                    onClick: r,
                                    className: eV.x6,
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
    ta = s.memo(function (e) {
        let {
                userId: t,
                guildId: l,
                style: n,
                rowSelected: a,
                isLoading: r = !1,
                isHoldingAdvancedInfoKey: d = !1,
                compact: c = !1,
            } = e,
            { analyticsLocations: u } = (0, g.Ay)(),
            m = (0, o.bG)([eB.Ay], () => eB.Ay.getGuildSidebarState(l), [l]),
            h = m?.details.userId === t,
            f = (0, o.bG)([v.A], () => v.A.getEnhancedMember(l, t), [l, t]),
            x = (0, V.YH)(f),
            H = (0, o.bG)([eG.default], () => eG.default.getUser(t), [t]),
            p = (0, ek.q)(l),
            j = (0, V.UY)(f ?? void 0),
            b = s.useCallback(
                (e) => {
                    (e.stopPropagation(), e.preventDefault(), j(e));
                },
                [j],
            ),
            A = s.useCallback(
                (e) => {
                    (e.stopPropagation(), e.preventDefault(), null != f && (0, V.Ko)(f, u));
                },
                [f, u],
            ),
            M = s.useCallback(
                (e) => {
                    (e.stopPropagation(),
                        e.preventDefault(),
                        null != f &&
                            (p
                                ? (0, eU.z)(f.guildId, f.userId, e2.VV.MEMBER_SAFETY, { modViewPanel: e9.g.INFO })
                                : (0, V.Ko)(f, u)));
                },
                [f, u, p],
            ),
            L = s.useCallback((e, t) => _()((0, eR.omit)(e, ts), (0, eR.omit)(t, ts)), []);
        return null == f
            ? null
            : (0, i.jsx)(e8, {
                  role: "row",
                  value: f,
                  style: n,
                  className: C()(eV.yF, eV.iA, a && eV.wH, h && eV.qb, r && eV.Lq),
                  equalityFn: L,
                  onClick: A,
                  onContextMenu: b,
                  children: (0, i.jsx)(tn, {
                      member: f,
                      user: H,
                      highestRole: x,
                      isHoldingAdvancedInfoKey: d,
                      onOpenModerationMenu: b,
                      onOpenMemberView: M,
                      compact: c,
                      hasModViewPanelAccess: p,
                  }),
              });
    });
var tC = l(551816),
    tr = l(299720);
function td(e) {
    let { guild: t, onSubmit: n } = e,
        a = (0, o.bG)([v.A], () => v.A.getMembersCountByGuildId(t.id, tC.Tu.NEW_GUILD_MEMBER), [t.id]),
        C = (0, o.bG)(
            [v.A],
            () => {
                let e = v.A.getNewMemberTimestamp(t.id);
                return G()(e).format("h:mm A");
            },
            [t.id],
        ),
        r = (0, o.bG)([v.A], () => v.A.hasDefaultSearchStateByGuildId(t.id), [t.id]),
        d = s.useCallback(() => {
            ((0, b.UD)(t.id), n?.());
        }, [t.id, n]),
        u = s.useCallback(() => {
            r
                ? d()
                : (0, c.mM)(async () => {
                      let { default: e } = await l.e(256562).then(l.bind(l, 470857));
                      return (t) => (0, i.jsx)(e, { ...t, onConfirm: d });
                  });
        }, [d, r]),
        m = new Intl.NumberFormat(D.intl.currentLocale).format(a),
        h = (0, P.Y0)(t.id),
        { canAccessBulkActions: g } = (0, P.lN)(t.id),
        f = s.useMemo(() => 1 + +!!h + +!!g, [h, g]);
    return 0 === a
        ? null
        : (0, i.jsxs)("tr", {
              className: tr.iS,
              onClick: u,
              children: [
                  (0, i.jsx)("td", {
                      colSpan: 3,
                      children: (0, i.jsx)(M.E, {
                          variant: "body-sm/normal",
                          color: "text-overlay-light",
                          children: D.intl.format(D.t["/i5uJ1"], { count: m, date: C }),
                      }),
                  }),
                  (0, i.jsx)("td", { colSpan: f }),
                  (0, i.jsx)("td", {
                      colSpan: 2,
                      children: (0, i.jsx)("div", {
                          className: eV.$E,
                          children: (0, i.jsx)(S.D, {
                              onClick: u,
                              className: tr.Fu,
                              children: (0, i.jsxs)(M.E, {
                                  variant: "body-sm/normal",
                                  color: "text-overlay-light",
                                  className: tr.Lb,
                                  children: [
                                      (0, i.jsx)("div", { children: D.intl.string(D.t.rkyOzK) }),
                                      (0, i.jsx)(e_.UserIcon, {
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
    tg = { mass: 1.1, friction: 24, tension: 260 };
function tf(e) {
    return e.shiftKey || e.key === to.dh.SHIFT;
}
function tx(e) {
    return e.metaKey || e.ctrlKey || ["Meta", "Control"].includes(e.key);
}
let tH = s.memo(
        function (e) {
            let {
                    members: t,
                    guild: l,
                    className: n,
                    searchState: a,
                    compact: r,
                    onSelectRow: d,
                    onResetForNewMembers: g,
                } = e,
                f = (0, o.bG)([h.Ay], () => h.Ay.useReducedMotion),
                x = (0, o.bG)([p.A], () => p.A.hasPendingBulkBan(l.id), [l.id]),
                j = (0, c.Rv)(),
                A = (0, H.j)(),
                [M, L] = s.useState(!1),
                [R, I] = s.useState(!1),
                _ = !j && M && R;
            (s.useEffect(() => {
                A || (L(!1), I(!1));
            }, [A]),
                s.useLayoutEffect(() => {
                    function e(e) {
                        (tf(e) && L(!0), tx(e) && I(!0));
                    }
                    function t(e) {
                        (tf(e) && L(!1), tx(e) && I(!1));
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
                    (0, b.jo)(l.id, t);
                }, [l.id, t]));
            let S = t.length > 30,
                N = (0, u.p)(t, {
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
                    config: tg,
                }),
                y = !f && a === V.IY.LOADING;
            return (0, i.jsxs)("table", {
                className: C()(tc.tp, n),
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
                        className: C()({ [tc.u6]: x }),
                        children:
                            a === V.IY.SUCCESS_FULL || a === V.IY.LOADING
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(td, { guild: l, onSubmit: g }),
                                          N((e, t) =>
                                              (0, i.jsx)(
                                                  ta,
                                                  {
                                                      userId: t,
                                                      guildId: l.id,
                                                      style: e,
                                                      onSelect: d,
                                                      isHoldingAdvancedInfoKey: _,
                                                      compact: r,
                                                      isLoading: y,
                                                  },
                                                  t,
                                              ),
                                          ),
                                      ],
                                  })
                                : (0, i.jsx)("td", { colSpan: 7, children: (0, i.jsx)(E, { searchState: a }) }),
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
    tp = function (e) {
        var t;
        let { guild: l, className: n, searchState: a, compact: C, onSelectRow: r, onResetForNewMembers: d } = e,
            c = (0, o.cf)([v.A], () => v.A.getPaginationStateByGuildId(l.id), [l.id]),
            [u] = (0, o.bG)([v.A], () => v.A.getPagedMembersByGuildId(l.id), [l.id], x.D);
        ((t = l.id),
            s.useEffect(
                () => (
                    A.Cf(t),
                    () => {
                        A.G9(t);
                    }
                ),
                [t],
            ),
            s.useEffect(() => {
                (0, b.uO)(l.id);
            }, [l.id]));
        let m = s.useDeferredValue(u[c.currentPage] ?? []);
        s.useEffect(() => {
            (0, f.m)(l.id, m);
        }, [l.id, m]);
        let { analyticsLocations: h } = (0, g.Ay)(),
            H = h?.[0] ?? null;
        return (
            s.useEffect(() => {
                (0, j.KW)(l.id, H);
            }, [l.id, H]),
            (0, i.jsx)(tH, {
                members: m,
                guild: l,
                className: n,
                searchState: a,
                compact: C,
                onSelectRow: r,
                onResetForNewMembers: d,
            })
        );
    };
