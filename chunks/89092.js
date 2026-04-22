l.d(t, { A: () => S });
var n = l(627968),
    i = l(64700),
    a = l(503698),
    s = l.n(a),
    C = l(33851),
    r = l.n(C),
    o = l(417597),
    d = l(990078),
    c = l(939249),
    u = l(834730),
    m = l(783977),
    h = l(827734),
    x = l(658675),
    g = l(265872),
    H = l(71393),
    _ = l(576705),
    p = l(70738),
    f = l(587426),
    j = l(134413),
    b = l(266047),
    A = l(100172),
    v = l(401695),
    V = l(925282),
    L = l(441358),
    D = l(386404),
    R = l(652215),
    M = l(985018),
    E = l(301050),
    N = l(62255);
let I = i.forwardRef(function (e, t) {
    let { label: l, onFilter: i, isFiltered: a, isSorted: C, className: r, ...o } = e,
        d = a ? "text-strong" : "text-default";
    return (
        C && (d = "text-brand"),
        (0, n.jsx)("th", {
            className: s()(E.P1, r),
            children: (0, n.jsxs)(c.D, {
                ...o,
                innerRef: t,
                onClick: i,
                className: s()(E.WV, { [E.o1]: null != i }),
                children: [
                    (0, n.jsx)(u.E, { variant: "eyebrow", color: d, children: l }),
                    null != i &&
                        (0, n.jsx)("div", {
                            className: E.IO,
                            children: (0, n.jsx)(m.R, {
                                size: "custom",
                                className: E.Sj,
                                color: a ? h.A.colors.CONTROL_BRAND_FOREGROUND.css : h.A.colors.TEXT_MUTED.css,
                                width: 16,
                                height: 16,
                            }),
                        }),
                ],
            }),
        })
    );
});
function S(e) {
    let { guildId: t, currentPagedMembers: l } = e,
        a = i.useRef(null),
        C = i.useRef(null),
        u = i.useRef(null),
        m = i.useRef(null),
        h = i.useRef(null),
        S = (0, o.bG)([b.A], () => b.A.getSearchStateByGuildId(t), [t], r()),
        y = (0, o.bG)([_.A, H.A], () => _.A.can(R.xBc.MANAGE_GUILD, H.A.getGuild(t)), [t]),
        { selectedUserIds: Z, addUsers: w, clearSelection: T } = (0, f.A)(t),
        U =
            S.requireUnusualDmActivity ||
            S.requireCommunicationDisabled ||
            S.requireUnusualAccountActivity ||
            S.requireUsernameQuarantined,
        k = S.selectedRoleIds.size > 0,
        O = null != S.selectedJoinDateOption.afterDate,
        F = S.selectedSort === p.mF.ORDER_BY_GUILD_JOINED_AT_ASC,
        B = null != S.selectedAccountAgeOption.afterDate,
        G = S.selectedSort === p.mF.ORDER_BY_USER_ID_ASC || S.selectedSort === p.mF.ORDER_BY_USER_ID_DESC,
        P = null != S.selectedSourceInviteCode && "" !== S.selectedSourceInviteCode,
        Y = null != S.selectedJoinSourceType,
        z = P || Y,
        q = (0, j.vA)(t),
        K = i.useMemo(() => l.filter((e) => (0, j.Ph)(t, q, e)), [q, l, t]),
        $ = K.length > 0,
        Q = 0 === K.filter((e) => !Z.has(e)).length,
        X = i.useCallback(() => {
            $ && (Q ? T() : w(K));
        }, [$, Q, T, w, K]);
    return (0, n.jsx)("thead", {
        children: (0, n.jsxs)("tr", {
            className: E.Yk,
            children: [
                q &&
                    (0, n.jsx)("th", {
                        className: s()(E.P1, N.y2),
                        children: (0, n.jsx)(d.m, {
                            shouldShow: !$,
                            text: M.intl.string(M.t.tJEY0G),
                            children: (0, n.jsx)(c.D, {
                                onClick: X,
                                className: E.WV,
                                children: (0, n.jsx)(x.P, { checked: Q, disabled: !$ }),
                            }),
                        }),
                    }),
                (0, n.jsx)(I, { label: M.intl.string(M.t.Es7n9c) }),
                y
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(g.Y, {
                                  targetElementRef: a,
                                  animation: g.Y.Animation.FADE,
                                  position: "bottom",
                                  spacing: 4,
                                  align: "left",
                                  renderPopout: () => (0, n.jsx)(V.A, { guildId: t, onClose: R.tEg }),
                                  children: (e) => {
                                      let { onClick: t, ...l } = e;
                                      return (0, n.jsx)(I, {
                                          ref: a,
                                          label: M.intl.string(M.t.xcKP1P),
                                          onFilter: t,
                                          isFiltered: O,
                                          isSorted: F,
                                          className: N.qp,
                                          ...l,
                                      });
                                  },
                              }),
                              (0, n.jsx)(g.Y, {
                                  targetElementRef: C,
                                  animation: g.Y.Animation.FADE,
                                  position: "bottom",
                                  spacing: 4,
                                  align: "left",
                                  renderPopout: () => (0, n.jsx)(A.A, { guildId: t, onClose: R.tEg }),
                                  children: (e) => {
                                      let { onClick: t, ...l } = e;
                                      return (0, n.jsx)(I, {
                                          ref: C,
                                          label: M.intl.string(M.t.sPph4O),
                                          onFilter: t,
                                          isFiltered: B,
                                          isSorted: G,
                                          className: N.qp,
                                          ...l,
                                      });
                                  },
                              }),
                          ],
                      })
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(I, { label: M.intl.string(M.t.xcKP1P), className: N.qp }),
                              (0, n.jsx)(I, { label: M.intl.string(M.t.sPph4O), className: N.qp }),
                          ],
                      }),
                y
                    ? (0, n.jsx)(g.Y, {
                          targetElementRef: u,
                          animation: g.Y.Animation.FADE,
                          position: "bottom",
                          spacing: 4,
                          align: "left",
                          renderPopout: () => (0, n.jsx)(L.default, { guildId: t, onClose: R.tEg }),
                          children: (e) => {
                              let { onClick: t, ...l } = e;
                              return (0, n.jsx)(I, {
                                  ref: u,
                                  label: M.intl.string(M.t["yn0w1+"]),
                                  onFilter: t,
                                  isFiltered: z,
                                  className: N.qp,
                                  ...l,
                              });
                          },
                      })
                    : null,
                (0, n.jsx)(g.Y, {
                    targetElementRef: m,
                    animation: g.Y.Animation.FADE,
                    position: "bottom",
                    spacing: 4,
                    align: "left",
                    renderPopout: (e) => {
                        let { closePopout: l } = e;
                        return (0, n.jsx)(D.A, { guildId: t, onClose: l });
                    },
                    children: (e) => {
                        let { onClick: t, ...l } = e;
                        return (0, n.jsx)(I, {
                            ref: m,
                            label: M.intl.string(M.t["2SZsWX"]),
                            onFilter: t,
                            isFiltered: k,
                            className: N.QB,
                            ...l,
                        });
                    },
                }),
                (0, n.jsx)(d.m, {
                    text: M.intl.string(M.t["2cRO3R"]),
                    position: "top",
                    align: "left",
                    shouldShow: !0,
                    children: (0, n.jsx)(g.Y, {
                        targetElementRef: h,
                        animation: g.Y.Animation.FADE,
                        position: "bottom",
                        spacing: 4,
                        align: "left",
                        renderPopout: (e) => {
                            let { closePopout: l } = e;
                            return (0, n.jsx)(v.A, { guildId: t, onClose: l });
                        },
                        children: (e) =>
                            (0, n.jsx)(I, {
                                ref: h,
                                label: M.intl.string(M.t["7V3759"]),
                                "aria-label": M.intl.string(M.t["2cRO3R"]),
                                onFilter: (t) => {
                                    e.onClick?.(t);
                                },
                                isFiltered: U,
                                className: N.qp,
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
                (0, n.jsx)(I, { label: M.intl.string(M.t["5Q9xGr"]), className: N.qp }),
            ],
        }),
    });
}
