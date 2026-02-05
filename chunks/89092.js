l.d(t, { A: () => R });
var n = l(627968),
    i = l(64700),
    s = l(503698),
    a = l.n(s),
    r = l(33851),
    o = l.n(r),
    C = l(417597),
    d = l(990078),
    c = l(397927),
    u = l(71393),
    m = l(576705),
    x = l(70738),
    h = l(134413),
    g = l(266047),
    _ = l(225671),
    H = l(100172),
    p = l(401695),
    f = l(925282),
    j = l(441358),
    v = l(386404),
    b = l(652215),
    A = l(985018),
    L = l(236671),
    N = l(918372);
let V = i.forwardRef(function (e, t) {
    let { label: l, onFilter: i, isFiltered: s, isSorted: r, className: o, ...C } = e,
        d = s ? "text-strong" : "text-default";
    return (
        r && (d = "text-brand"),
        (0, n.jsx)("th", {
            className: a()(L.P1, o),
            children: (0, n.jsxs)(c.DUT, {
                ...C,
                innerRef: t,
                onClick: i,
                className: a()(L.WV, { [L.o1]: null != i }),
                children: [
                    (0, n.jsx)(c.Text, { variant: "eyebrow", color: d, children: l }),
                    null != i &&
                        (0, n.jsx)("div", {
                            className: L.IO,
                            children: (0, n.jsx)(c.RgP, {
                                size: "custom",
                                className: L.Sj,
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
        M = i.useRef(null),
        D = i.useRef(null),
        S = (0, C.bG)([g.A], () => g.A.getSearchStateByGuildId(t), [t], o()),
        I = (0, C.bG)([m.A, u.A], () => m.A.can(b.xBc.MANAGE_GUILD, u.A.getGuild(t)), [t]),
        { selectedUserIds: E, addUsers: y, clearSelection: T } = (0, _.A)(t),
        w =
            S.requireUnusualDmActivity ||
            S.requireCommunicationDisabled ||
            S.requireUnusualAccountActivity ||
            S.requireUsernameQuarantined,
        Z = S.selectedRoleIds.size > 0,
        U = null != S.selectedJoinDateOption.afterDate,
        O = S.selectedSort === x.mF.ORDER_BY_GUILD_JOINED_AT_ASC,
        k = null != S.selectedAccountAgeOption.afterDate,
        F = S.selectedSort === x.mF.ORDER_BY_USER_ID_ASC || S.selectedSort === x.mF.ORDER_BY_USER_ID_DESC,
        B = null != S.selectedSourceInviteCode && "" !== S.selectedSourceInviteCode,
        P = null != S.selectedJoinSourceType,
        G = B || P,
        q = (0, h.vA)(t),
        z = i.useMemo(() => l.filter((e) => (0, h.Ph)(t, q, e)), [q, l, t]),
        Y = z.length > 0,
        K = 0 === z.filter((e) => !E.has(e)).length,
        Q = i.useCallback(() => {
            Y && (K ? T() : y(z));
        }, [Y, K, T, y, z]);
    return (0, n.jsx)("thead", {
        children: (0, n.jsxs)("tr", {
            className: L.Yk,
            children: [
                q &&
                    (0, n.jsx)("th", {
                        className: a()(L.P1, N.y2),
                        children: (0, n.jsx)(d.m, {
                            shouldShow: !Y,
                            text: A.intl.string(A.t.tJEY0G),
                            children: (0, n.jsx)(c.DUT, {
                                onClick: Q,
                                className: L.WV,
                                children: (0, n.jsx)(c.P7L, { checked: K, disabled: !Y }),
                            }),
                        }),
                    }),
                (0, n.jsx)(V, { label: A.intl.string(A.t.Es7n9c) }),
                I
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(c.YNO, {
                                  targetElementRef: s,
                                  animation: c.YNO.Animation.FADE,
                                  position: "bottom",
                                  spacing: 4,
                                  align: "left",
                                  renderPopout: () => (0, n.jsx)(f.A, { guildId: t, onClose: b.tEg }),
                                  children: (e) => {
                                      let { onClick: t, ...l } = e;
                                      return (0, n.jsx)(V, {
                                          ref: s,
                                          label: A.intl.string(A.t.xcKP1P),
                                          onFilter: t,
                                          isFiltered: U,
                                          isSorted: O,
                                          className: N.qp,
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
                                  renderPopout: () => (0, n.jsx)(H.A, { guildId: t, onClose: b.tEg }),
                                  children: (e) => {
                                      let { onClick: t, ...l } = e;
                                      return (0, n.jsx)(V, {
                                          ref: r,
                                          label: A.intl.string(A.t.sPph4O),
                                          onFilter: t,
                                          isFiltered: k,
                                          isSorted: F,
                                          className: N.qp,
                                          ...l,
                                      });
                                  },
                              }),
                          ],
                      })
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(V, { label: A.intl.string(A.t.xcKP1P), className: N.qp }),
                              (0, n.jsx)(V, { label: A.intl.string(A.t.sPph4O), className: N.qp }),
                          ],
                      }),
                I
                    ? (0, n.jsx)(c.YNO, {
                          targetElementRef: R,
                          animation: c.YNO.Animation.FADE,
                          position: "bottom",
                          spacing: 4,
                          align: "left",
                          renderPopout: () => (0, n.jsx)(j.default, { guildId: t, onClose: b.tEg }),
                          children: (e) => {
                              let { onClick: t, ...l } = e;
                              return (0, n.jsx)(V, {
                                  ref: R,
                                  label: A.intl.string(A.t["yn0w1+"]),
                                  onFilter: t,
                                  isFiltered: G,
                                  className: N.qp,
                                  ...l,
                              });
                          },
                      })
                    : I && (0, n.jsx)(V, { label: A.intl.string(A.t["yn0w1+"]), className: N.qp }),
                (0, n.jsx)(c.YNO, {
                    targetElementRef: M,
                    animation: c.YNO.Animation.FADE,
                    position: "bottom",
                    spacing: 4,
                    align: "left",
                    renderPopout: () => (0, n.jsx)(v.A, { guildId: t }),
                    children: (e) => {
                        let { onClick: t, ...l } = e;
                        return (0, n.jsx)(V, {
                            ref: M,
                            label: A.intl.string(A.t["2SZsWX"]),
                            onFilter: t,
                            isFiltered: Z,
                            className: N.QB,
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
                        targetElementRef: D,
                        animation: c.YNO.Animation.FADE,
                        position: "bottom",
                        spacing: 4,
                        align: "left",
                        renderPopout: (e) => {
                            let { closePopout: l } = e;
                            return (0, n.jsx)(p.A, { guildId: t, onClose: l });
                        },
                        children: (e) =>
                            (0, n.jsx)(V, {
                                ref: D,
                                label: A.intl.string(A.t["7V3759"]),
                                "aria-label": A.intl.string(A.t["2cRO3R"]),
                                onFilter: (t) => {
                                    e.onClick?.(t);
                                },
                                isFiltered: w,
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
                (0, n.jsx)(V, { label: A.intl.string(A.t["5Q9xGr"]), className: N.qp }),
            ],
        }),
    });
}
