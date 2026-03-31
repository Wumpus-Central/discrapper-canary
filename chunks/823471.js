n.d(t, { A: () => R });
var i = n(627968),
    l = n(64700),
    s = n(397927),
    a = n(182061),
    r = n(886393),
    o = n(307623),
    c = n(660273),
    d = n(707792),
    u = n(41402),
    h = n(271456),
    A = n(200273),
    _ = n(565846),
    m = n(57907),
    g = n(375500),
    p = n(707653),
    f = n(50268),
    x = n(584682),
    E = n(58736),
    I = n(378570),
    C = n(203982),
    N = n(170428),
    T = n(933057),
    S = n(747926),
    b = n(652215),
    y = n(985018);
function v(e) {
    let { channel: t } = e,
        [n, a] = l.useState(!1),
        r = l.useRef(null);
    function o() {
        a((e) => !e);
    }
    let c = y.intl.string(y.t["UKOtz+"]);
    return (0, i.jsx)(s.YNO, {
        targetElementRef: r,
        shouldShow: n,
        animation: s.YNO.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => a(!1),
        renderPopout: function (e) {
            return (0, i.jsx)(j, { ...e, channel: t });
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(E.Ay.Icon, {
                ...e,
                ref: r,
                onClick: o,
                tooltip: n ? null : c,
                icon: s.jNK,
                "aria-label": c,
                selected: n,
            });
        },
    });
}
function j(e) {
    let { channel: t, closePopout: n, onSelect: l } = e,
        x = (0, c.A)(t, "Sidebar Overflow"),
        E = (0, u.A)(t),
        N = (0, m.A)(t),
        T = (0, g.A)(t),
        S = (0, a.A)(t),
        v = (0, d.A)(t),
        j = (0, _.A)(t.id),
        R = (0, A.A)(t),
        O = (0, o.A)(t),
        L = (0, r.A)(t),
        M = (0, f.A)({ id: t.id, label: y.intl.string(y.t.DQ797g) }),
        D = (0, p.A)(t),
        U = (0, h.A)(t);
    function G() {
        (0, I.iN)(t.id);
    }
    return (0, i.jsxs)(s.W1t, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: n,
        "aria-label": y.intl.string(y.t["1NBjqb"]),
        onSelect: l,
        children: [
            (0, i.jsxs)(s.rXV, {
                children: [x, (0, i.jsx)(s.Drp, { id: "open", label: y.intl.string(y.t.IxVmZi), action: G })],
            }),
            (0, i.jsxs)(s.rXV, { children: [N, T] }),
            (0, i.jsxs)(s.rXV, { children: [R, E, j, U] }),
            (0, i.jsxs)(s.rXV, {
                children: [
                    (0, i.jsx)(s.Drp, {
                        id: "search",
                        label: y.intl.string(y.t["5h0QOP"]),
                        icon: s.tfB,
                        trailingIndicator: { type: "icon", icon: s.tfB },
                        action: function () {
                            G(),
                                setTimeout(() => {
                                    C._.dispatch(b.jej.FOCUS_SEARCH, { prefillCurrentChannel: !1 });
                                }, 2e3);
                        },
                    }),
                    (0, i.jsx)(s.Drp, {
                        id: "pins",
                        label: y.intl.string(y.t["2BSH7n"]),
                        icon: s.tfB,
                        trailingIndicator: { type: "icon", icon: s.tfB },
                        action: function () {
                            G(), C._.dispatch(b.jej.TOGGLE_CHANNEL_PINS);
                        },
                    }),
                ],
            }),
            (0, i.jsxs)(s.rXV, { children: [D, S, v, O] }),
            (0, i.jsxs)(s.rXV, { children: [L, M] }),
        ],
    });
}
function R(e) {
    let { channel: t, baseChannelId: n } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            t.isForumPost() ? null : (0, i.jsx)(T.A, { channel: t }),
            t.isModeratorReportChannel() ? (0, i.jsx)(N.A, { channel: t }) : null,
            (0, i.jsx)(v, { channel: t }),
            (0, i.jsx)(E.Ay.Icon, {
                icon: s.PGe,
                tooltip: y.intl.string(y.t.cpT0Cq),
                onClick: () => (0, S.xu)((0, x.j)(t), n ?? t.parent_id),
            }),
        ],
    });
}
