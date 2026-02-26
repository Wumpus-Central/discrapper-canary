l.d(t, { A: () => R });
var n = l(627968),
    i = l(64700),
    s = l(503698),
    a = l.n(s),
    r = l(33851),
    C = l.n(r),
    o = l(417597),
    d = l(990078),
    c = l(397927),
    u = l(71393),
    m = l(576705),
    x = l(70738),
    h = l(134413),
    g = l(266047),
    H = l(225671),
    j = l(100172),
    _ = l(401695),
    f = l(925282),
    p = l(441358),
    b = l(386404),
    v = l(652215),
    A = l(985018),
    V = l(874281),
    L = l(957346);
let N = i.forwardRef(function (e, t) {
    let { label: l, onFilter: i, isFiltered: s, isSorted: r, className: C, ...o } = e,
        d = s ? "text-strong" : "text-default";
    return (
        r && (d = "text-brand"),
        (0, n.jsx)("th", {
            className: a()(V.P1, C),
            children: (0, n.jsxs)(c.DUT, {
                ...o,
                innerRef: t,
                onClick: i,
                className: a()(V.WV, { [V.o1]: null != i }),
                children: [
                    (0, n.jsx)(c.Text, { variant: "eyebrow", color: d, children: l }),
                    null != i &&
                        (0, n.jsx)("div", {
                            className: V.IO,
                            children: (0, n.jsx)(c.RgP, {
                                size: "custom",
                                className: V.Sj,
                                color: s ? c.LU0.colors.CONTROL_BRAND_FOREGROUND.css : c.LU0.colors.TEXT_MUTED.css,
                                width: 16,
                                height: 16,
                            }),
                        }),
                ],
            }),
        })
    );
});
function R(e) {
    let { guildId: t, currentPagedMembers: l } = e,
        s = i.useRef(null),
        r = i.useRef(null),
        R = i.useRef(null),
        D = i.useRef(null),
        M = i.useRef(null),
        S = (0, o.bG)([g.A], () => g.A.getSearchStateByGuildId(t), [t], C()),
        I = (0, o.bG)([m.A, u.A], () => m.A.can(v.xBc.MANAGE_GUILD, u.A.getGuild(t)), [t]),
        { selectedUserIds: E, addUsers: y, clearSelection: T } = (0, H.A)(t),
        Z =
            S.requireUnusualDmActivity ||
            S.requireCommunicationDisabled ||
            S.requireUnusualAccountActivity ||
            S.requireUsernameQuarantined,
        w = S.selectedRoleIds.size > 0,
        U = null != S.selectedJoinDateOption.afterDate,
        O = S.selectedSort === x.mF.ORDER_BY_GUILD_JOINED_AT_ASC,
        k = null != S.selectedAccountAgeOption.afterDate,
        F = S.selectedSort === x.mF.ORDER_BY_USER_ID_ASC || S.selectedSort === x.mF.ORDER_BY_USER_ID_DESC,
        B = null != S.selectedSourceInviteCode && "" !== S.selectedSourceInviteCode,
        P = null != S.selectedJoinSourceType,
        G = B || P,
        q = (0, h.vA)(t),
        Y = i.useMemo(() => l.filter((e) => (0, h.Ph)(t, q, e)), [q, l, t]),
        z = Y.length > 0,
        K = 0 === Y.filter((e) => !E.has(e)).length,
        Q = i.useCallback(() => {
            z && (K ? T() : y(Y));
        }, [z, K, T, y, Y]);
    return (0, n.jsx)("thead", {
        children: (0, n.jsxs)("tr", {
            className: V.Yk,
            children: [
                q &&
                    (0, n.jsx)("th", {
                        className: a()(V.P1, L.y2),
                        children: (0, n.jsx)(d.m, {
                            shouldShow: !z,
                            text: A.intl.string(A.t.tJEY0G),
                            children: (0, n.jsx)(c.DUT, {
                                onClick: Q,
                                className: V.WV,
                                children: (0, n.jsx)(c.P7L, { checked: K, disabled: !z }),
                            }),
                        }),
                    }),
                (0, n.jsx)(N, { label: A.intl.string(A.t.Es7n9c) }),
                I
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(c.YNO, {
                                  targetElementRef: s,
                                  animation: c.YNO.Animation.FADE,
                                  position: "bottom",
                                  spacing: 4,
                                  align: "left",
                                  renderPopout: () => (0, n.jsx)(f.A, { guildId: t, onClose: v.tEg }),
                                  children: (e) => {
                                      let { onClick: t, ...l } = e;
                                      return (0, n.jsx)(N, {
                                          ref: s,
                                          label: A.intl.string(A.t.xcKP1P),
                                          onFilter: t,
                                          isFiltered: U,
                                          isSorted: O,
                                          className: L.qp,
                                          ...l,
                                      });
                                  },
                              }),
                              (0, n.jsx)(c.YNO, {
                                  targetElementRef: r,
                                  animation: c.YNO.Animation.FADE,
                                  position: "bottom",
                                  spacing: 4,
                                  align: "left",
                                  renderPopout: () => (0, n.jsx)(j.A, { guildId: t, onClose: v.tEg }),
                                  children: (e) => {
                                      let { onClick: t, ...l } = e;
                                      return (0, n.jsx)(N, {
                                          ref: r,
                                          label: A.intl.string(A.t.sPph4O),
                                          onFilter: t,
                                          isFiltered: k,
                                          isSorted: F,
                                          className: L.qp,
                                          ...l,
                                      });
                                  },
                              }),
                          ],
                      })
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(N, { label: A.intl.string(A.t.xcKP1P), className: L.qp }),
                              (0, n.jsx)(N, { label: A.intl.string(A.t.sPph4O), className: L.qp }),
                          ],
                      }),
                I
                    ? (0, n.jsx)(c.YNO, {
                          targetElementRef: R,
                          animation: c.YNO.Animation.FADE,
                          position: "bottom",
                          spacing: 4,
                          align: "left",
                          renderPopout: () => (0, n.jsx)(p.default, { guildId: t, onClose: v.tEg }),
                          children: (e) => {
                              let { onClick: t, ...l } = e;
                              return (0, n.jsx)(N, {
                                  ref: R,
                                  label: A.intl.string(A.t["yn0w1+"]),
                                  onFilter: t,
                                  isFiltered: G,
                                  className: L.qp,
                                  ...l,
                              });
                          },
                      })
                    : I && (0, n.jsx)(N, { label: A.intl.string(A.t["yn0w1+"]), className: L.qp }),
                (0, n.jsx)(c.YNO, {
                    targetElementRef: D,
                    animation: c.YNO.Animation.FADE,
                    position: "bottom",
                    spacing: 4,
                    align: "left",
                    renderPopout: (e) => {
                        let { closePopout: l } = e;
                        return (0, n.jsx)(b.A, { guildId: t, onClose: l });
                    },
                    children: (e) => {
                        let { onClick: t, ...l } = e;
                        return (0, n.jsx)(N, {
                            ref: D,
                            label: A.intl.string(A.t["2SZsWX"]),
                            onFilter: t,
                            isFiltered: w,
                            className: L.QB,
                            ...l,
                        });
                    },
                }),
                (0, n.jsx)(d.m, {
                    text: A.intl.string(A.t["2cRO3R"]),
                    position: "top",
                    align: "left",
                    shouldShow: !0,
                    children: (0, n.jsx)(c.YNO, {
                        targetElementRef: M,
                        animation: c.YNO.Animation.FADE,
                        position: "bottom",
                        spacing: 4,
                        align: "left",
                        renderPopout: (e) => {
                            let { closePopout: l } = e;
                            return (0, n.jsx)(_.A, { guildId: t, onClose: l });
                        },
                        children: (e) =>
                            (0, n.jsx)(N, {
                                ref: M,
                                label: A.intl.string(A.t["7V3759"]),
                                "aria-label": A.intl.string(A.t["2cRO3R"]),
                                onFilter: (t) => {
                                    e.onClick?.(t);
                                },
                                isFiltered: Z,
                                className: L.qp,
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
                (0, n.jsx)(N, { label: A.intl.string(A.t["5Q9xGr"]), className: L.qp }),
            ],
        }),
    });
}
