n.d(t, { A: () => R });
var i = n(627968),
    l = n(64700),
    s = n(397927),
    a = n(182061),
    r = n(886393),
    o = n(307623),
    d = n(660273),
    c = n(707792),
    u = n(41402),
    h = n(271456),
    A = n(200273),
    g = n(565846),
    m = n(57907),
    p = n(375500),
    _ = n(707653),
    x = n(50268),
    f = n(584682),
    E = n(58736),
    C = n(378570),
    I = n(203982),
    S = n(170428),
    b = n(933057),
    N = n(747926),
    T = n(652215),
    j = n(985018);
function v(e) {
    let { channel: t } = e,
        [n, a] = l.useState(!1),
        r = l.useRef(null);
    function o() {
        a((e) => !e);
    }
    let d = j.intl.string(j.t["UKOtz+"]);
    return (0, i.jsx)(s.YNO, {
        targetElementRef: r,
        shouldShow: n,
        animation: s.YNO.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => a(!1),
        renderPopout: function (e) {
            return (0, i.jsx)(y, { ...e, channel: t });
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(E.Ay.Icon, {
                ...e,
                ref: r,
                onClick: o,
                tooltip: n ? null : d,
                icon: s.jNK,
                "aria-label": d,
                selected: n,
            });
        },
    });
}
function y(e) {
    let { channel: t, closePopout: n, onSelect: l } = e,
        f = (0, d.A)(t, "Sidebar Overflow"),
        E = (0, u.A)(t),
        S = (0, m.A)(t),
        b = (0, p.A)(t),
        N = (0, a.A)(t),
        v = (0, c.A)(t),
        y = (0, g.A)(t.id),
        R = (0, A.A)(t),
        O = (0, o.A)(t),
        L = (0, r.A)(t),
        D = (0, x.A)({ id: t.id, label: j.intl.string(j.t.DQ797g) }),
        M = (0, _.A)(t),
        G = (0, h.A)(t);
    function U() {
        (0, C.iN)(t.id);
    }
    return (0, i.jsxs)(s.W1t, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: n,
        "aria-label": j.intl.string(j.t["1NBjqb"]),
        onSelect: l,
        children: [
            (0, i.jsxs)(s.rXV, {
                children: [f, (0, i.jsx)(s.Drp, { id: "open", label: j.intl.string(j.t.IxVmZi), action: U })],
            }),
            (0, i.jsxs)(s.rXV, { children: [S, b] }),
            (0, i.jsxs)(s.rXV, { children: [R, E, y, G] }),
            (0, i.jsxs)(s.rXV, {
                children: [
                    (0, i.jsx)(s.Drp, {
                        id: "search",
                        label: j.intl.string(j.t["5h0QOP"]),
                        icon: s.tfB,
                        trailingIndicator: { type: "icon", icon: s.tfB },
                        action: function () {
                            U(),
                                setTimeout(() => {
                                    I._.dispatch(T.jej.FOCUS_SEARCH, { prefillCurrentChannel: !1 });
                                }, 2e3);
                        },
                    }),
                    (0, i.jsx)(s.Drp, {
                        id: "pins",
                        label: j.intl.string(j.t["2BSH7n"]),
                        icon: s.tfB,
                        trailingIndicator: { type: "icon", icon: s.tfB },
                        action: function () {
                            U(), I._.dispatch(T.jej.TOGGLE_CHANNEL_PINS);
                        },
                    }),
                ],
            }),
            (0, i.jsxs)(s.rXV, { children: [M, N, v, O] }),
            (0, i.jsxs)(s.rXV, { children: [L, D] }),
        ],
    });
}
function R(e) {
    let { channel: t, baseChannelId: n } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            t.isForumPost() ? null : (0, i.jsx)(b.A, { channel: t }),
            t.isModeratorReportChannel() ? (0, i.jsx)(S.A, { channel: t }) : null,
            (0, i.jsx)(v, { channel: t }),
            (0, i.jsx)(E.Ay.Icon, {
                icon: s.PGe,
                tooltip: j.intl.string(j.t.cpT0Cq),
                onClick: () => (0, N.xu)((0, f.j)(t), n ?? t.parent_id),
            }),
        ],
    });
}
