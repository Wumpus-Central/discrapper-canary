l.d(t, { A: () => tp });
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
    A = l(470348),
    M = l(834730),
    L = l(159083),
    b = l(189552),
    D = l(636670),
    R = l(375708),
    E = l(602083);
function S(e) {
    let { searchState: t } = e,
        l = C.useMemo(
            () => ({
                [b.IY.LOADING]: null,
                [b.IY.SUCCESS_STILL_INDEXING]: { icon: (0, i.jsx)(L.A, {}), message: R.intl.string(R.t.AXPbZr) },
                [b.IY.SUCCESS_EMPTY]: { icon: (0, i.jsx)(D.A, {}), message: R.intl.string(R.t.wdyR52) },
                [b.IY.SUCCESS_FULL]: null,
            }),
            [],
        )[t];
    return null == l
        ? null
        : (0, i.jsxs)("div", {
              className: E.p,
              children: [
                  (0, i.jsx)("div", { className: E.__invalid_noResultsIconContainer, children: l.icon }),
                  (0, i.jsx)(M.E, { variant: "text-md/normal", color: "text-muted", children: l.message }),
              ],
          });
}
var N = l(811315),
    Z = l.n(N),
    I = l(939249),
    y = l(783977),
    _ = l(661531),
    w = l(866665),
    U = l(658675),
    T = l(922016),
    k = l(71393),
    O = l(576705),
    F = l(70738),
    G = l(587426),
    B = l(134413),
    P = l(536637),
    q = l.n(P),
    z = l(156828),
    Y = l(980707),
    K = l(477782),
    $ = l(320448),
    Q = l(921853),
    X = l(282054),
    W = l(652215),
    J = l(351114);
let ee = "MMM Do, YYYY",
    et = q()("2015-05-15").local(),
    el = (0, z.Fe)({ createPromise: () => Promise.resolve().then(l.bind(l, 939538)), webpackId: 939538 });
var en =
    (((n = {})[(n.ALL = 0)] = "ALL"),
    (n[(n["1_HOUR"] = 1)] = "1_HOUR"),
    (n[(n["24_HOURS"] = 2)] = "24_HOURS"),
    (n[(n["7_DAYS"] = 3)] = "7_DAYS"),
    (n[(n["2_WEEKS"] = 4)] = "2_WEEKS"),
    (n[(n["4_WEEKS"] = 5)] = "4_WEEKS"),
    (n[(n["3_MONTHS"] = 6)] = "3_MONTHS"),
    (n[(n.CUSTOM = 7)] = "CUSTOM"),
    n);
function ei(e) {
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
            { id: 0, option: null, label: R.intl.string(R.t.jelCib) },
            { id: 1, option: { input: 1, unit: "h" }, label: R.intl.string(R.t["91RDqi"]) },
            { id: 2, option: { input: 24, unit: "h" }, label: R.intl.string(R.t["Lj/1Tq"]) },
            { id: 3, option: { input: 7, unit: "d" }, label: R.intl.string(R.t.NnUMSZ) },
            { id: 4, option: { input: 2, unit: "w" }, label: R.intl.string(R.t.hY3XWH) },
            { id: 5, option: { input: 4, unit: "w" }, label: R.intl.string(R.t.kQTwT0) },
            { id: 6, option: { input: 3, unit: "M" }, label: R.intl.string(R.t.EPuP0s) },
        ],
        [g, f] = C.useState(!1),
        j =
            7 !== r
                ? null
                : null != t && null != l
                  ? `${t} - ${l}`
                  : null != t
                    ? R.intl.formatToPlainString(R.t.ClmSzd, { date: t })
                    : null != l
                      ? R.intl.formatToPlainString(R.t.YvNhsd, { date: l })
                      : null,
        p = C.useCallback(() => {
            f(!0), m();
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
        A = C.useCallback(() => {
            null == s && null == n && u(0, null), f(!1);
        }, [n, s, u]);
    return (0, i.jsx)(Y.W, {
        "data-menu-needs-migration": !0,
        navId: `member-safety-guild-member-${o}-menu`,
        onClose: c,
        "aria-label": R.intl.string(R.t.k9m8Rg),
        onSelect: W.tEg,
        children: (0, i.jsx)(K.rX, {
            children: g
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(K.Dr, {
                              id: "back",
                              action: A,
                              render: (e) =>
                                  (0, i.jsxs)("span", {
                                      ...e,
                                      className: J.W6,
                                      children: [
                                          (0, i.jsx)(Q.n, {
                                              size: "custom",
                                              color: "currentColor",
                                              width: 16,
                                              height: 16,
                                          }),
                                          (0, i.jsx)(M.E, {
                                              variant: "eyebrow",
                                              color: "text-strong",
                                              children: R.intl.string(R.t.BTfN6g),
                                          }),
                                      ],
                                  }),
                          }),
                          (0, i.jsx)(K.Dr, {
                              id: "after-date-menu-item",
                              label: R.intl.string(R.t.RDqVOD),
                              subtext: t,
                              subMenuClassName: J.aD,
                              children: (0, i.jsx)(K.Dr, {
                                  id: "after-date-picker",
                                  render: (e) =>
                                      (0, i.jsx)(el, {
                                          ...e,
                                          calendarClassName: J.BJ,
                                          value: d && null != n ? q()(n) : void 0,
                                          onSelect: v,
                                          maxDate: q()().local(),
                                          minDate: et,
                                      }),
                              }),
                          }),
                          (0, i.jsx)(K.Dr, {
                              id: "before-date-menu-item",
                              label: R.intl.string(R.t.jF54hQ),
                              subtext: l,
                              subMenuClassName: J.aD,
                              children: (0, i.jsx)(K.Dr, {
                                  id: "before-date-picker",
                                  render: (e) =>
                                      (0, i.jsx)(el, {
                                          ...e,
                                          calendarClassName: J.BJ,
                                          value: d && null != s ? q()(s) : void 0,
                                          onSelect: V,
                                          maxDate: q()().local(),
                                          minDate: d && null != n ? q()(n) : et,
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
                                  K.iD,
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
                          (0, i.jsx)(K.bX, {}),
                          (0, i.jsx)(K.Dr, {
                              id: `guild-member-${o}-custom-option}`,
                              action: p,
                              render: (e) =>
                                  (0, i.jsxs)("div", {
                                      className: a()(J.Dh, { [J.in]: e.isFocused }),
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: J.jA,
                                              children: [
                                                  (0, i.jsx)(M.E, {
                                                      className: a()(J.ty, { [J.in]: e.isFocused }),
                                                      variant: "text-sm/medium",
                                                      children: R.intl.string(R.t.BTfN6g),
                                                  }),
                                                  null != j &&
                                                      (0, i.jsx)(M.E, {
                                                          className: a()(J.ty, { [J.in]: e.isFocused }),
                                                          color: "text-muted",
                                                          variant: "text-xxs/medium",
                                                          children: j,
                                                      }),
                                              ],
                                          }),
                                          7 === r
                                              ? (0, i.jsx)(X.A, { foreground: J.QE, width: 18, height: 18 })
                                              : (0, i.jsx)($._, {
                                                    size: "custom",
                                                    color: "currentColor",
                                                    width: 16,
                                                    height: 16,
                                                    className: a()(J.ty, { [J.in]: e.isFocused }),
                                                }),
                                      ],
                                  }),
                          }),
                      ],
                  }),
        }),
    });
}
function eC(e) {
    let { guildId: t, onClose: l } = e,
        n = (0, o.bG)([p.A], () => p.A.getSearchStateByGuildId(t), [t], Z()),
        { selectedAccountAgeOption: C } = n,
        { afterDate: s, beforeDate: a, optionId: r } = C,
        d = r === en.CUSTOM,
        c = d && null != s ? q()(s).format(ee) : null,
        u = d && null != a ? q()(a).format(ee) : null;
    return (0, i.jsx)(ei, {
        startDateLabel: c,
        endDateLabel: u,
        afterDate: s,
        beforeDate: a,
        selectedOption: r,
        isCustomDateRange: d,
        menuName: "account-age",
        accessibilityLabel: R.intl.string(R.t["D++Tgf"]),
        onClose: l,
        onSelectDateOption: function (e, l) {
            let i = null != l ? q()().subtract(l.input, l.unit).valueOf() : null;
            (0, v.Ld)(t, { ...n, selectedAccountAgeOption: { optionId: e, afterDate: i, beforeDate: null } });
        },
        onToggleCustomDateRange: function () {
            (0, v.Ld)(t, {
                ...n,
                selectedAccountAgeOption: { optionId: en.CUSTOM, afterDate: d ? s : null, beforeDate: d ? a : null },
            });
        },
        onSelectStartDate: function (e) {
            (0, v.Ld)(t, {
                ...n,
                selectedAccountAgeOption: { optionId: en.CUSTOM, afterDate: e.valueOf(), beforeDate: a },
            });
        },
        onSelectEndDate: function (e) {
            (0, v.Ld)(t, {
                ...n,
                selectedAccountAgeOption: { optionId: en.CUSTOM, afterDate: s, beforeDate: e.valueOf() },
            });
        },
    });
}
var es = l(565787),
    ea = l(953822),
    er = l(60270),
    ed = l(353182),
    eo = l(953727);
function ec(e) {
    let { width: t = 24, height: l = 24, color: n = "currentColor", ...C } = e;
    return (0, i.jsxs)("svg", {
        ...(0, eo.A)(C),
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
let eu = (0, es.k)(ec);
function em(e) {
    let { guildId: t, onClose: l } = e,
        n = (0, o.bG)([p.A], () => p.A.getSearchStateByGuildId(t), [t], Z()),
        s = (0, j.Tj)(t),
        a = C.useCallback(() => {
            n.requireUnusualDmActivity || s(j.Zp.UNUSUAL_DM_ACTIVITY),
                (0, v.Ld)(t, { ...n, requireUnusualDmActivity: !n.requireUnusualDmActivity });
        }, [t, n, s]),
        r = C.useCallback(() => {
            n.requireCommunicationDisabled || s(j.Zp.COMMUNICATION_DISABLED),
                (0, v.Ld)(t, { ...n, requireCommunicationDisabled: !n.requireCommunicationDisabled });
        }, [t, n, s]),
        d = C.useCallback(() => {
            n.requireUnusualAccountActivity || s(j.Zp.UNUSUAL_ACCOUNT_ACTIVITY),
                (0, v.Ld)(t, { ...n, requireUnusualAccountActivity: !n.requireUnusualAccountActivity });
        }, [t, n, s]),
        c = C.useCallback(() => {
            n.requireUsernameQuarantined || s(j.Zp.USERNAME_QUARANTINED),
                (0, v.Ld)(t, { ...n, requireUsernameQuarantined: !n.requireUsernameQuarantined });
        }, [t, n, s]);
    return (0, i.jsx)(Y.W, {
        "data-menu-migrated": !0,
        navId: "member-safety-flags",
        onClose: l,
        "aria-label": R.intl.string(R.t.k9m8Rg),
        onSelect: W.tEg,
        children: (0, i.jsxs)(K.rX, {
            children: [
                (0, i.jsx)(K.sL, {
                    id: "toggle-require-unusual-dm-activity",
                    label: R.intl.string(R.t.ZRnON3),
                    leftIcon: ea.E,
                    leadingAccessory: { type: "icon", icon: ea.E },
                    action: a,
                    checked: n.requireUnusualDmActivity,
                }),
                (0, i.jsx)(K.sL, {
                    id: "toggle-require-communication-disabled",
                    label: R.intl.string(R.t.z3wbj8),
                    leftIcon: er.g,
                    leadingAccessory: { type: "icon", icon: er.g },
                    action: r,
                    checked: n.requireCommunicationDisabled,
                }),
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(K.sL, {
                            id: "toggle-require-unusual-account-activity",
                            label: R.intl.string(R.t.DIQsD9),
                            leftIcon: eu,
                            leadingAccessory: { type: "icon", icon: eu },
                            action: d,
                            checked: n.requireUnusualAccountActivity,
                        }),
                        (0, i.jsx)(K.sL, {
                            id: "toggle-require-username-quarantined",
                            label: R.intl.string(R.t.Jloklk),
                            leftIcon: ed._,
                            leadingAccessory: { type: "icon", icon: ed._ },
                            action: c,
                            checked: n.requireUsernameQuarantined,
                        }),
                    ],
                }),
            ],
        }),
    });
}
function eH(e) {
    let { guildId: t, onClose: l } = e,
        n = (0, o.bG)([p.A], () => p.A.getSearchStateByGuildId(t), [t], Z()),
        { selectedJoinDateOption: C } = n,
        { afterDate: s, beforeDate: a, optionId: r } = C,
        d = r === en.CUSTOM,
        c = d && null != s ? q()(s).format(ee) : null,
        u = d && null != a ? q()(a).format(ee) : null;
    return (0, i.jsx)(ei, {
        startDateLabel: c,
        endDateLabel: u,
        afterDate: s,
        beforeDate: a,
        selectedOption: r,
        isCustomDateRange: d,
        menuName: "joined-date",
        accessibilityLabel: R.intl.string(R.t.XMVinX),
        onClose: l,
        onSelectDateOption: function (e, l) {
            let i = null != l ? q()().subtract(l.input, l.unit).valueOf() : null;
            (0, v.Ld)(t, { ...n, selectedJoinDateOption: { optionId: e, afterDate: i, beforeDate: null } });
        },
        onToggleCustomDateRange: function () {
            (0, v.Ld)(t, {
                ...n,
                selectedJoinDateOption: { optionId: en.CUSTOM, afterDate: d ? s : null, beforeDate: d ? a : null },
            });
        },
        onSelectStartDate: function (e) {
            (0, v.Ld)(t, {
                ...n,
                selectedJoinDateOption: { optionId: en.CUSTOM, afterDate: e.valueOf(), beforeDate: a },
            });
        },
        onSelectEndDate: function (e) {
            (0, v.Ld)(t, {
                ...n,
                selectedJoinDateOption: { optionId: en.CUSTOM, afterDate: s, beforeDate: e.valueOf() },
            });
        },
    });
}
var ex = l(316173),
    eh = l(91871),
    eg = l.n(eh),
    ef = l(17928),
    ej = l(602853),
    ep = l(583650),
    ev = l(676608),
    eV = l(34457),
    eA = l(317525);
function eM(e) {
    let { guildId: t, onClose: l } = e,
        n = (0, j.hs)(t),
        [s, a] = C.useState(""),
        r = (0, o.bG)([p.A], () => p.A.getSearchStateByGuildId(t), [t], Z()),
        d = (0, o.bG)([H.Ay], () => H.Ay.roleStyle),
        c = (0, ej.r)(_.A.unsafe_rawColors.PRIMARY_300).hex(),
        u = (0, ev.jV)(t, null),
        m = (0, ef.yK)([eA.A], () => eA.A.getSortedRoles(t).filter((e) => !(0, eV.Oy)(e)), [t]),
        x = C.useMemo(() => ("" === s ? m : m.filter((e) => eg()(s.toLowerCase(), e.name.toLowerCase()))), [m, s]),
        h = C.useCallback(
            (e) => {
                let l = new Set(r.selectedRoleIds);
                l.has(e) ? l.delete(e) : l.add(e), (0, v.Ld)(t, { selectedRoleIds: l }), n(l);
            },
            [t, r.selectedRoleIds, n],
        );
    return (0, i.jsx)(Y.W, {
        "data-menu-migrated": !0,
        navId: "member-safety-roles",
        onClose: l,
        "aria-label": R.intl.string(R.t.ZveC7e),
        onSelect: W.tEg,
        children: (0, i.jsxs)(K.rX, {
            children: [
                (0, i.jsx)(K.aK, {
                    id: "members-table-role-search",
                    control: (e, t) =>
                        (0, i.jsx)(ep.V, {
                            ...e,
                            query: s,
                            onChange: a,
                            ref: t,
                            placeholder: R.intl.string(R.t.ZveC7e),
                        }),
                }),
                (0, i.jsx)(K.bX, {}),
                x.map((e) => {
                    let t = e.colorString ?? c,
                        l =
                            u && e.colorStrings?.primaryColor != null && e.colorStrings?.secondaryColor != null
                                ? e.colorStrings
                                : null;
                    return (0, i.jsx)(
                        K.sL,
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
var eL = l(307877),
    eb = l(917089);
let eD = C.forwardRef(function (e, t) {
    let { label: l, onFilter: n, isFiltered: C, isSorted: s, className: r, ...d } = e,
        o = C ? "text-strong" : "text-default";
    return (
        s && (o = "text-brand"),
        (0, i.jsx)("th", {
            className: a()(eL.P1, r),
            children: (0, i.jsxs)(I.D, {
                ...d,
                innerRef: t,
                onClick: n,
                className: a()(eL.WV, { [eL.o1]: null != n }),
                children: [
                    (0, i.jsx)(M.E, { variant: "eyebrow", color: o, children: l }),
                    null != n &&
                        (0, i.jsx)("div", {
                            className: eL.IO,
                            children: (0, i.jsx)(y.R, {
                                size: "custom",
                                className: eL.Sj,
                                color: C ? _.A.colors.CONTROL_BRAND_FOREGROUND.css : _.A.colors.TEXT_MUTED.css,
                                width: 16,
                                height: 16,
                            }),
                        }),
                ],
            }),
        })
    );
});
function eR(e) {
    let { guildId: t, currentPagedMembers: l } = e,
        n = C.useRef(null),
        s = C.useRef(null),
        r = C.useRef(null),
        d = C.useRef(null),
        c = C.useRef(null),
        u = (0, o.bG)([p.A], () => p.A.getSearchStateByGuildId(t), [t], Z()),
        m = (0, o.bG)([O.A, k.A], () => O.A.can(W.xBc.MANAGE_GUILD, k.A.getGuild(t)), [t]),
        { selectedUserIds: H, addUsers: x, clearSelection: h } = (0, G.A)(t),
        g =
            u.requireUnusualDmActivity ||
            u.requireCommunicationDisabled ||
            u.requireUnusualAccountActivity ||
            u.requireUsernameQuarantined,
        f = u.selectedRoleIds.size > 0,
        j = null != u.selectedJoinDateOption.afterDate,
        v = u.selectedSort === F.mF.ORDER_BY_GUILD_JOINED_AT_ASC,
        V = null != u.selectedAccountAgeOption.afterDate,
        A = u.selectedSort === F.mF.ORDER_BY_USER_ID_ASC || u.selectedSort === F.mF.ORDER_BY_USER_ID_DESC,
        M = null != u.selectedSourceInviteCode && "" !== u.selectedSourceInviteCode,
        L = null != u.selectedJoinSourceType,
        b = M || L,
        D = (0, B.vA)(t),
        E = C.useMemo(() => l.filter((e) => (0, B.Ph)(t, D, e)), [D, l, t]),
        S = E.length > 0,
        N = 0 === E.filter((e) => !H.has(e)).length,
        y = C.useCallback(() => {
            S && (N ? h() : x(E));
        }, [S, N, h, x, E]);
    return (0, i.jsx)("thead", {
        children: (0, i.jsxs)("tr", {
            className: eL.Yk,
            children: [
                D &&
                    (0, i.jsx)("th", {
                        className: a()(eL.P1, eb.y2),
                        children: (0, i.jsx)(w.m, {
                            shouldShow: !S,
                            text: R.intl.string(R.t.tJEY0G),
                            children: (0, i.jsx)(I.D, {
                                onClick: y,
                                className: eL.WV,
                                children: (0, i.jsx)(U.P, { checked: N, disabled: !S }),
                            }),
                        }),
                    }),
                (0, i.jsx)(eD, { label: R.intl.string(R.t.Es7n9c) }),
                m
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(T.Y, {
                                  targetElementRef: n,
                                  animation: T.Y.Animation.FADE,
                                  position: "bottom",
                                  spacing: 4,
                                  align: "left",
                                  renderPopout: () => (0, i.jsx)(eH, { guildId: t, onClose: W.tEg }),
                                  children: (e) => {
                                      let { onClick: t, ...l } = e;
                                      return (0, i.jsx)(eD, {
                                          ref: n,
                                          label: R.intl.string(R.t.xcKP1P),
                                          onFilter: t,
                                          isFiltered: j,
                                          isSorted: v,
                                          className: eb.qp,
                                          ...l,
                                      });
                                  },
                              }),
                              (0, i.jsx)(T.Y, {
                                  targetElementRef: s,
                                  animation: T.Y.Animation.FADE,
                                  position: "bottom",
                                  spacing: 4,
                                  align: "left",
                                  renderPopout: () => (0, i.jsx)(eC, { guildId: t, onClose: W.tEg }),
                                  children: (e) => {
                                      let { onClick: t, ...l } = e;
                                      return (0, i.jsx)(eD, {
                                          ref: s,
                                          label: R.intl.string(R.t.sPph4O),
                                          onFilter: t,
                                          isFiltered: V,
                                          isSorted: A,
                                          className: eb.qp,
                                          ...l,
                                      });
                                  },
                              }),
                          ],
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(eD, { label: R.intl.string(R.t.xcKP1P), className: eb.qp }),
                              (0, i.jsx)(eD, { label: R.intl.string(R.t.sPph4O), className: eb.qp }),
                          ],
                      }),
                m
                    ? (0, i.jsx)(T.Y, {
                          targetElementRef: r,
                          animation: T.Y.Animation.FADE,
                          position: "bottom",
                          spacing: 4,
                          align: "left",
                          renderPopout: () => (0, i.jsx)(ex.default, { guildId: t, onClose: W.tEg }),
                          children: (e) => {
                              let { onClick: t, ...l } = e;
                              return (0, i.jsx)(eD, {
                                  ref: r,
                                  label: R.intl.string(R.t["yn0w1+"]),
                                  onFilter: t,
                                  isFiltered: b,
                                  className: eb.qp,
                                  ...l,
                              });
                          },
                      })
                    : null,
                (0, i.jsx)(T.Y, {
                    targetElementRef: d,
                    animation: T.Y.Animation.FADE,
                    position: "bottom",
                    spacing: 4,
                    align: "left",
                    renderPopout: (e) => {
                        let { closePopout: l } = e;
                        return (0, i.jsx)(eM, { guildId: t, onClose: l });
                    },
                    children: (e) => {
                        let { onClick: t, ...l } = e;
                        return (0, i.jsx)(eD, {
                            ref: d,
                            label: R.intl.string(R.t["2SZsWX"]),
                            onFilter: t,
                            isFiltered: f,
                            className: eb.QB,
                            ...l,
                        });
                    },
                }),
                (0, i.jsx)(w.m, {
                    text: R.intl.string(R.t["2cRO3R"]),
                    position: "top",
                    align: "left",
                    shouldShow: !0,
                    children: (0, i.jsx)(T.Y, {
                        targetElementRef: c,
                        animation: T.Y.Animation.FADE,
                        position: "bottom",
                        spacing: 4,
                        align: "left",
                        renderPopout: (e) => {
                            let { closePopout: l } = e;
                            return (0, i.jsx)(em, { guildId: t, onClose: l });
                        },
                        children: (e) =>
                            (0, i.jsx)(eD, {
                                ref: c,
                                label: R.intl.string(R.t["7V3759"]),
                                "aria-label": R.intl.string(R.t["2cRO3R"]),
                                onFilter: (t) => {
                                    e.onClick?.(t);
                                },
                                isFiltered: g,
                                className: eb.qp,
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
                (0, i.jsx)(eD, { label: R.intl.string(R.t["5Q9xGr"]), className: eb.qp }),
            ],
        }),
    });
}
var eE = l(435558),
    eS = l(307301),
    eN = l(463930),
    eZ = l(950305),
    eI = l(530005),
    ey = l(966327),
    e_ = l(396583),
    ew = l(576470),
    eU = l(229527),
    eT = l(316031),
    ek = l(901472),
    eO = l(985925),
    eF = l(534400),
    eG = l(694318),
    eB = l(967144),
    eP = l(761640),
    eq = l(287809),
    ez = l(881548),
    eY = l(562153),
    eK = l(935208),
    e$ = l(427262),
    eQ = l(157347),
    eX = l(296704),
    eW = l(615300),
    eJ = l(717421),
    e1 = l(475743);
let e3 = { duration: 100, easing: eW.A.Easing.inOut(eW.A.Easing.back()), clamp: !0 },
    e8 = { duration: 2e3, easing: eW.A.Easing.quad, clamp: !0 };
function e4(e) {
    let { value: t, children: l, equalityFn: n = Z(), style: s, ...a } = e,
        r = (0, e1.Ay)(t),
        [{ spring: d }, o] = (0, eJ.z)(() => ({ spring: 0 }), "animate-always"),
        c = (0, ej.r)(_.A.colors.BACKGROUND_BASE_LOW).hex(),
        u = (0, ej.r)(_.A.colors.CONTROL_BRAND_FOREGROUND).hex(),
        m = C.useCallback(() => {
            o({ spring: 1, config: e3 }), o({ spring: 0, config: e8, delay: 300 });
        }, [o]);
    C.useEffect(() => {
        null == t || null == r || n(t, r) || m();
    }, [m, t, r, n]);
    let H = d?.to({ range: [0, 1], output: [`${c}00`, `${u}27`] }),
        x = null != s ? { ...s, backgroundColor: H } : { backgroundColor: H };
    return (0, i.jsx)(eX.animated.tr, { ...a, style: x, children: l });
}
var e5 = l(589935),
    e2 = l(950072),
    e9 = l(746080),
    e7 = l(486974);
let e6 = C.memo(function (e) {
        let { member: t } = e,
            l = C.useMemo(() => (0, eT.n)(t.communicationDisabledUntil), [t.communicationDisabledUntil]),
            n = C.useMemo(
                () => (null == t.communicationDisabledUntil ? new Date() : new Date(t.communicationDisabledUntil)),
                [t.communicationDisabledUntil],
            );
        return (0, i.jsxs)("div", {
            className: eb.Ak,
            children: [
                t.hasUnusualDmActivity &&
                    (0, i.jsx)(w.m, {
                        text: R.intl.string(R.t.QrfVTp),
                        children: (0, i.jsx)(ea.E, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: _.A.colors.TEXT_MUTED.css,
                        }),
                    }),
                l &&
                    (0, i.jsx)(w.m, {
                        "aria-label": R.intl.string(R.t["xfJP+u"]),
                        __unsupportedReactNodeAsText: (0, i.jsxs)("div", {
                            className: eb.CN,
                            children: [
                                (0, i.jsx)("div", { children: R.intl.string(R.t["xfJP+u"]) }),
                                (0, i.jsx)(ew.A, { deadline: n, showUnits: !0, stopAtOneSec: !0 }),
                            ],
                        }),
                        children: (0, i.jsx)(er.g, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: _.A.colors.TEXT_FEEDBACK_CRITICAL.css,
                        }),
                    }),
                (0, eG.cx)(t.userId) &&
                    (0, i.jsx)(w.m, {
                        text: R.intl.string(R.t.PK9FQ2),
                        children: (0, i.jsx)(ec, {
                            width: 20,
                            height: 20,
                            color: _.A.colors.TEXT_FEEDBACK_CRITICAL.css,
                        }),
                    }),
                (0, eU.TR)(t) &&
                    (0, i.jsx)(w.m, {
                        text: R.intl.string(R.t.qOVbaX),
                        children: (0, i.jsx)(ed._, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: _.A.colors.TEXT_MUTED.css,
                        }),
                    }),
            ],
        });
    }),
    e0 = C.memo(function (e) {
        let { member: t, highestRole: l } = e,
            n = (0, o.bG)([k.A], () => k.A.getGuild(t.guildId), [t.guildId]),
            s = t.roles.length - 1,
            r = C.useMemo(() => new Intl.NumberFormat(R.intl.currentLocale).format(s), [s]),
            d = (0, b.Cy)(t),
            c = (0, b.Cy)(t, !0),
            u = (0, o.bG)([O.A], () => O.A.can(W.xBc.MANAGE_ROLES, n), [n]);
        return null == n
            ? null
            : (0, i.jsxs)("div", {
                  className: eb.yk,
                  children: [
                      null != l && (0, i.jsx)(e2.A, { className: a()(eb.Zf, eb.Lc), role: l, guildId: t.guildId }),
                      s > 0 &&
                          (0, i.jsx)(I.D, {
                              className: eb.yt,
                              onClick: (e) => c(e),
                              children: (0, i.jsx)(w.m, {
                                  text: R.intl.string(R.t.DY6n4q),
                                  children: (0, i.jsxs)(M.E, {
                                      variant: "text-xs/medium",
                                      color: "text-strong",
                                      children: ["+", r],
                                  }),
                              }),
                          }),
                      u &&
                          (0, i.jsx)(w.m, {
                              text: R.intl.string(R.t.h3pSLR),
                              children: (0, i.jsx)(I.D, {
                                  onClick: d,
                                  className: a()(eb.yt, eb.$g),
                                  children: (0, i.jsx)(eS.j, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: eb.fd,
                                      width: 16,
                                      height: 16,
                                  }),
                              }),
                          }),
                  ],
              });
    }),
    te = C.memo(function (e) {
        let { member: t, user: l } = e,
            n = (0, eB.gn)(t?.guildId, t?.userId, t?.colorStrings ?? null);
        return null == l || null == t
            ? null
            : (0, i.jsxs)("div", {
                  className: eb.FD,
                  children: [
                      (0, i.jsx)("div", { className: eb.Wn, children: (0, i.jsx)(ey.A, { user: l }) }),
                      (0, i.jsx)("div", {
                          className: eb.eg,
                          children: (0, i.jsx)(M.E, {
                              variant: "text-sm/medium",
                              children: (0, i.jsxs)("div", {
                                  className: eb.VW,
                                  children: [
                                      (0, i.jsx)(eN.g, {
                                          name: eY.Ay.getName(t.guildId, null, l),
                                          colorString: t.colorString ?? null,
                                          colorStrings: n,
                                          className: eb.bc,
                                      }),
                                      (0, i.jsx)(eF.Ay, {
                                          primaryGuild: l?.primaryGuild,
                                          userId: l?.id,
                                          contextGuildId: t.guildId,
                                          containerClassName: eb.Dz,
                                      }),
                                  ],
                              }),
                          }),
                      }),
                      (0, i.jsx)("div", {
                          className: eb.Br,
                          children: (0, i.jsx)(M.E, {
                              variant: "text-xs/normal",
                              color: "text-default",
                              tag: "span",
                              children: e$.Ay.getUserTag(l),
                          }),
                      }),
                  ],
              });
    });
function tt(e) {
    return {
        short: null == e ? null : (0, eQ.hL)(e, eQ.wN.JOINED_AT),
        long: new Date(e ?? 0).toLocaleDateString(R.intl.currentLocale, eQ.wp),
    };
}
function tl(e) {
    let { member: t, showLongDate: l, isSortedBy: n } = e,
        [s, a] = C.useState(null);
    C.useEffect(() => {
        a(tt(t.joinedAtTimestamp));
    }, [t.joinedAtTimestamp]),
        (0, e_.A)(() => {
            a(tt(t.joinedAtTimestamp));
        }, 1e4);
    let r = n ? "text-brand" : "text-default";
    return s?.short == null
        ? null
        : l
          ? (0, i.jsx)("div", {
                className: eb.__invalid_joinedAtContainer,
                children: (0, i.jsx)(M.E, { variant: "text-sm/medium", color: r, children: s.long }),
            })
          : (0, i.jsx)("div", {
                className: eb.__invalid_joinedAtContainer,
                children: (0, i.jsx)(w.m, {
                    align: "left",
                    __unsupportedReactNodeAsText: s.long,
                    children: (0, i.jsx)(M.E, { variant: "text-sm/medium", color: r, children: s.short }),
                }),
            });
}
let tn = C.memo(function (e) {
        let { member: t, showLongDate: l, isSortedBy: n } = e,
            { accountCreationDateShort: s, accountCreationDateLong: a } = C.useMemo(() => {
                let e = eK.default.extractTimestamp(t.userId);
                return {
                    accountCreationDateShort: (0, eQ.hL)(e, eQ.wN.ACCOUNT_AGE),
                    accountCreationDateLong: new Date(e).toLocaleDateString(R.intl.currentLocale, eQ.OA),
                };
            }, [t.userId]),
            r = n ? "text-brand" : "text-default";
        return l
            ? (0, i.jsx)(M.E, { variant: "text-sm/medium", color: r, children: a })
            : (0, i.jsx)(w.m, {
                  align: "left",
                  __unsupportedReactNodeAsText: a,
                  children: (0, i.jsx)(M.E, { variant: "text-sm/medium", color: r, children: s }),
              });
    }),
    ti = C.memo(function (e) {
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
            m = (0, o.bG)([O.A, k.A], () => O.A.can(W.xBc.MANAGE_GUILD, k.A.getGuild(t.guildId)), [t.guildId]),
            { selectedUserIds: H, addUsers: x, removeUser: h } = (0, G.A)(t.guildId),
            g = (0, B.vA)(t.guildId),
            f = (0, B.O6)(t.guildId, g, t.userId),
            j = (0, o.bG)(
                [p.A],
                () => p.A.getSearchStateByGuildId(t.guildId).selectedSort ?? F.mF.ORDER_BY_UNSPECIFIED,
                [t.guildId],
                Z(),
            ),
            v = C.useCallback(
                (e) => {
                    e.stopPropagation(),
                        e.preventDefault(),
                        null != t && f && (H.has(t.userId) ? h(t.userId) : x([t.userId]));
                },
                [x, f, t, h, H],
            ),
            V = j === F.mF.ORDER_BY_GUILD_JOINED_AT_ASC,
            A = j === F.mF.ORDER_BY_USER_ID_ASC || j === F.mF.ORDER_BY_USER_ID_DESC;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                g &&
                    (0, i.jsx)("td", {
                        children: (0, i.jsx)(w.m, {
                            shouldShow: !f,
                            ariaHidden: f,
                            text: R.intl.string(R.t["Se4c7+"]),
                            children: (0, i.jsx)(I.D, {
                                onClick: v,
                                children: (0, i.jsx)(U.P, { checked: H.has(t.userId), disabled: !f }),
                            }),
                        }),
                    }),
                (0, i.jsx)("td", {
                    className: a()(eb.QB, { [eb.oE]: c }),
                    children: (0, i.jsx)(te, { member: t, user: l }),
                }),
                (0, i.jsx)("td", {
                    className: a()(eb.qp, { [eb.oE]: c }),
                    children: (0, i.jsx)(tl, { showLongDate: s, member: t, isSortedBy: V }),
                }),
                (0, i.jsx)("td", {
                    className: a()(eb.qp, { [eb.oE]: c }),
                    children: (0, i.jsx)(tn, { showLongDate: s, member: t, isSortedBy: A }),
                }),
                m &&
                    (0, i.jsx)("td", {
                        className: a()(eb.qp, { [eb.oE]: c }),
                        children: (0, i.jsx)(e5.Ay, { userId: t.userId, guildId: t.guildId }),
                    }),
                (0, i.jsx)("td", {
                    className: a()(eb.QB, { [eb.oE]: c }),
                    children: (0, i.jsx)(e0, { member: t, highestRole: n }),
                }),
                (0, i.jsx)("td", { className: a()(eb.qp, { [eb.oE]: c }), children: (0, i.jsx)(e6, { member: t }) }),
                (0, i.jsx)("td", {
                    className: a()(eb.OL, { [eb.oE]: c }),
                    children: (0, i.jsxs)("div", {
                        className: eb.$E,
                        children: [
                            (0, i.jsx)(w.m, {
                                asContainer: !0,
                                text: u ? R.intl.string(R.t.nHfkf4) : R.intl.string(R.t.uTre2y),
                                children: (0, i.jsx)(I.D, {
                                    onClick: d,
                                    className: eb.x6,
                                    children: u
                                        ? (0, i.jsx)(ez.A, { width: tC, height: tC })
                                        : (0, i.jsx)(eZ.UserIcon, {
                                              size: "custom",
                                              color: "currentColor",
                                              width: tC,
                                              height: tC,
                                          }),
                                }),
                            }),
                            (0, i.jsx)(w.m, {
                                asContainer: !0,
                                text: R.intl.string(R.t.x8Nn4M),
                                children: (0, i.jsx)(I.D, {
                                    onClick: r,
                                    className: eb.x6,
                                    children: (0, i.jsx)(eI.F, {
                                        size: "custom",
                                        color: "currentColor",
                                        width: tC,
                                        height: tC,
                                    }),
                                }),
                            }),
                        ],
                    }),
                }),
            ],
        });
    }),
    tC = 18,
    ts = ["sourceInviteCode", "joinSourceType", "inviterId", "integrationType", "joinedAt", "joinedAtTimestamp"],
    ta = C.memo(function (e) {
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
            m = (0, o.bG)([eP.Ay], () => eP.Ay.getGuildSidebarState(l), [l]),
            H = m?.details.userId === t,
            h = (0, o.bG)([p.A], () => p.A.getEnhancedMember(l, t), [l, t]),
            g = (0, b.YH)(h),
            f = (0, o.bG)([eq.default], () => eq.default.getUser(t), [t]),
            j = (0, eO.q)(l),
            v = (0, b.UY)(h ?? void 0),
            V = C.useCallback(
                (e) => {
                    e.stopPropagation(), e.preventDefault(), v(e);
                },
                [v],
            ),
            A = C.useCallback(
                (e) => {
                    e.stopPropagation(), e.preventDefault(), null != h && (0, b.Ko)(h, u);
                },
                [h, u],
            ),
            M = C.useCallback(
                (e) => {
                    e.stopPropagation(),
                        e.preventDefault(),
                        null != h &&
                            (j
                                ? (0, ek.z)(h.guildId, h.userId, e9.VV.MEMBER_SAFETY, { modViewPanel: e7.g.INFO })
                                : (0, b.Ko)(h, u));
                },
                [h, u, j],
            ),
            L = C.useCallback((e, t) => Z()((0, eE.omit)(e, ts), (0, eE.omit)(t, ts)), []);
        return null == h
            ? null
            : (0, i.jsx)(e4, {
                  role: "row",
                  value: h,
                  style: n,
                  className: a()(eb.yF, eb.iA, s && eb.wH, H && eb.qb, r && eb.Lq),
                  equalityFn: L,
                  onClick: A,
                  onContextMenu: V,
                  children: (0, i.jsx)(ti, {
                      member: h,
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
var tr = l(551816),
    td = l(299720);
function to(e) {
    let { guild: t, onSubmit: n } = e,
        s = (0, o.bG)([p.A], () => p.A.getMembersCountByGuildId(t.id, tr.Tu.NEW_GUILD_MEMBER), [t.id]),
        a = (0, o.bG)([p.A], () => {
            let e = p.A.getNewMemberTimestamp(t.id);
            return q()(e).format("h:mm A");
        }, [t.id]),
        r = (0, o.bG)([p.A], () => p.A.hasDefaultSearchStateByGuildId(t.id), [t.id]),
        d = C.useCallback(() => {
            (0, v.UD)(t.id), n?.();
        }, [t.id, n]),
        u = C.useCallback(() => {
            r
                ? d()
                : (0, c.openModalLazy)(async () => {
                      let { default: e } = await l.e("256562").then(l.bind(l, 470857));
                      return (t) => (0, i.jsx)(e, { ...t, onConfirm: d });
                  });
        }, [d, r]),
        m = new Intl.NumberFormat(R.intl.currentLocale).format(s),
        H = (0, B.Y0)(t.id),
        x = (0, B.vA)(t.id),
        h = C.useMemo(() => 1 + +!!H + +!!x, [H, x]);
    return 0 === s
        ? null
        : (0, i.jsxs)("tr", {
              className: td.iS,
              onClick: u,
              children: [
                  (0, i.jsx)("td", {
                      colSpan: 3,
                      children: (0, i.jsx)(M.E, {
                          variant: "text-sm/normal",
                          color: "text-overlay-light",
                          children: R.intl.format(R.t["/i5uJ1"], { count: m, date: a }),
                      }),
                  }),
                  (0, i.jsx)("td", { colSpan: h }),
                  (0, i.jsx)("td", {
                      colSpan: 2,
                      children: (0, i.jsx)("div", {
                          className: eb.$E,
                          children: (0, i.jsx)(I.D, {
                              onClick: u,
                              className: td.Fu,
                              children: (0, i.jsxs)(M.E, {
                                  variant: "text-sm/normal",
                                  color: "text-overlay-light",
                                  className: td.Lb,
                                  children: [
                                      (0, i.jsx)("div", { children: R.intl.string(R.t.rkyOzK) }),
                                      (0, i.jsx)(eZ.UserIcon, {
                                          size: "custom",
                                          color: "currentColor",
                                          width: 16,
                                          height: 16,
                                          className: td.Ke,
                                      }),
                                  ],
                              }),
                          }),
                      }),
                  }),
              ],
          });
}
var tc = l(650583),
    tu = l(532120);
let tm = { transform: "translate3d(15%, 0, 0)", opacity: 0.3 },
    tH = { transform: "translate3d(5%, 0, 0)", opacity: 0.5 },
    tx = { transform: "translate3d(0, 0, 0)", opacity: 1 },
    th = { mass: 1.1, friction: 24, tension: 260 };
function tg(e) {
    return e.shiftKey || e.key === tc.dh.SHIFT;
}
function tf(e) {
    return e.metaKey || e.ctrlKey || ["Meta", "Control"].includes(e.key);
}
let tj = C.memo(
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
                { usePubSub: j } = (0, A.r)({ location: "MembersTable" }),
                V = (0, o.bG)([f.A], () => f.A.hasPendingBulkBan(l.id), [l.id]),
                M = j && V,
                L = (0, c.useHasAnyModalOpen)(),
                D = (0, g.j)(),
                [E, N] = C.useState(!1),
                [Z, I] = C.useState(!1),
                y = !L && E && Z;
            C.useEffect(() => {
                D || (N(!1), I(!1));
            }, [D]),
                C.useLayoutEffect(() => {
                    function e(e) {
                        tg(e) && N(!0), tf(e) && I(!0);
                    }
                    function t(e) {
                        tg(e) && N(!1), tf(e) && I(!1);
                    }
                    return (
                        window.addEventListener("keydown", e),
                        window.addEventListener("keyup", t),
                        () => {
                            window.removeEventListener("keydown", e), window.removeEventListener("keyup", t);
                        }
                    );
                }, []),
                C.useEffect(() => {
                    (0, v.jo)(l.id, t);
                }, [l.id, t]);
            let _ = t.length > 30,
                w = (0, u.p)(t, {
                    key: (e) => e,
                    trail: _ ? 5 : 15,
                    from(e) {
                        let t = p.A.getEnhancedMember(l.id, e),
                            n = p.A.getLastRefreshTimestamp(l.id),
                            i = null == t || 0 === n,
                            C = null != t && t.refreshTimestamp === n;
                        return i || !C ? tx : _ ? tH : tm;
                    },
                    enter: tx,
                    config: th,
                }),
                U = !h && s === b.IY.LOADING;
            return (0, i.jsxs)("table", {
                className: a()(tu.tp, n),
                children: [
                    (0, i.jsx)(eR, { guildId: l.id, currentPagedMembers: t }),
                    M &&
                        (0, i.jsx)("tbody", {
                            children: (0, i.jsx)("tr", {
                                children: (0, i.jsx)("td", {
                                    colSpan: 99,
                                    className: tu.cg,
                                    children: (0, i.jsxs)("div", {
                                        className: tu.pZ,
                                        children: [
                                            (0, i.jsx)("div", {
                                                className: tu.sj,
                                                children: (0, i.jsx)("div", { className: tu.S0 }),
                                            }),
                                            (0, i.jsx)(m.w, { type: "info", children: R.intl.string(R.t["UP+9QZ"]) }),
                                        ],
                                    }),
                                }),
                            }),
                        }),
                    (0, i.jsx)("tbody", {
                        className: a()({ [tu.u6]: M }),
                        children:
                            s === b.IY.SUCCESS_FULL || s === b.IY.LOADING
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(to, { guild: l, onSubmit: x }),
                                          w((e, t) =>
                                              (0, i.jsx)(
                                                  ta,
                                                  {
                                                      userId: t,
                                                      guildId: l.id,
                                                      style: e,
                                                      onSelect: d,
                                                      isHoldingAdvancedInfoKey: y,
                                                      compact: r,
                                                      isLoading: U,
                                                  },
                                                  t,
                                              ),
                                          ),
                                      ],
                                  })
                                : (0, i.jsx)("td", { colSpan: 7, children: (0, i.jsx)(S, { searchState: s }) }),
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
    tp = function (e) {
        var t;
        let { guild: l, className: n, searchState: s, compact: a, onSelectRow: r, onResetForNewMembers: d } = e,
            c = (0, o.cf)([p.A], () => p.A.getPaginationStateByGuildId(l.id), [l.id]),
            [u] = (0, o.bG)([p.A], () => p.A.getPagedMembersByGuildId(l.id), [l.id], h.D);
        (t = l.id),
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
            }, [l.id]);
        let m = C.useDeferredValue(u[c.currentPage] ?? []),
            { analyticsLocations: H } = (0, x.Ay)(),
            g = H?.[0] ?? null;
        return (
            C.useEffect(() => {
                (0, j.KW)(l.id, g);
            }, [l.id, g]),
            (0, i.jsx)(tj, {
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
