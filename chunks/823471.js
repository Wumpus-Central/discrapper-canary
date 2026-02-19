"use strict";
n.d(t, { A: () => R });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(182061),
    a = n(886393),
    o = n(307623),
    c = n(660273),
    d = n(707792),
    u = n(41402),
    h = n(271456),
    A = n(200273),
    p = n(565846),
    g = n(57907),
    m = n(375500),
    _ = n(707653),
    f = n(50268),
    x = n(584682),
    C = n(58736),
    E = n(378570),
    I = n(203982),
    b = n(170428),
    N = n(933057),
    S = n(747926),
    T = n(652215),
    v = n(985018);
function y(e) {
    let { channel: t } = e,
        [n, r] = s.useState(!1),
        a = s.useRef(null);
    function o() {
        r((e) => !e);
    }
    let c = v.intl.string(v.t["UKOtz+"]);
    return (0, i.jsx)(l.YNO, {
        targetElementRef: a,
        shouldShow: n,
        animation: l.YNO.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => r(!1),
        renderPopout: function (e) {
            return (0, i.jsx)(j, { ...e, channel: t });
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(C.Ay.Icon, {
                ...e,
                ref: a,
                onClick: o,
                tooltip: n ? null : c,
                icon: l.jNK,
                "aria-label": c,
                selected: n,
            });
        },
    });
}
function j(e) {
    let { channel: t, closePopout: n, onSelect: s } = e,
        x = (0, c.A)(t, "Sidebar Overflow"),
        C = (0, u.A)(t),
        b = (0, g.A)(t),
        N = (0, m.A)(t),
        S = (0, r.A)(t),
        y = (0, d.A)(t),
        j = (0, p.A)(t.id),
        R = (0, A.A)(t),
        O = (0, o.A)(t),
        L = (0, a.A)(t),
        M = (0, f.A)({ id: t.id, label: v.intl.string(v.t.DQ797g) }),
        D = (0, _.A)(t),
        G = (0, h.A)(t);
    function U() {
        (0, E.iN)(t.id);
    }
    return (0, i.jsxs)(l.W1t, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: n,
        "aria-label": v.intl.string(v.t["1NBjqb"]),
        onSelect: s,
        children: [
            (0, i.jsxs)(l.rXV, {
                children: [x, (0, i.jsx)(l.Drp, { id: "open", label: v.intl.string(v.t.IxVmZi), action: U })],
            }),
            (0, i.jsxs)(l.rXV, { children: [b, N] }),
            (0, i.jsxs)(l.rXV, { children: [R, C, j, G] }),
            (0, i.jsxs)(l.rXV, {
                children: [
                    (0, i.jsx)(l.Drp, {
                        id: "search",
                        label: v.intl.string(v.t["5h0QOP"]),
                        icon: l.tfB,
                        trailingIndicator: { type: "icon", icon: l.tfB },
                        action: function () {
                            U(),
                                setTimeout(() => {
                                    I._.dispatch(T.jej.FOCUS_SEARCH, { prefillCurrentChannel: !1 });
                                }, 2e3);
                        },
                    }),
                    (0, i.jsx)(l.Drp, {
                        id: "pins",
                        label: v.intl.string(v.t["2BSH7n"]),
                        icon: l.tfB,
                        trailingIndicator: { type: "icon", icon: l.tfB },
                        action: function () {
                            U(), I._.dispatch(T.jej.TOGGLE_CHANNEL_PINS);
                        },
                    }),
                ],
            }),
            (0, i.jsxs)(l.rXV, { children: [D, S, y, O] }),
            (0, i.jsxs)(l.rXV, { children: [L, M] }),
        ],
    });
}
function R(e) {
    let { channel: t, baseChannelId: n } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            t.isForumPost() ? null : (0, i.jsx)(N.A, { channel: t }),
            t.isModeratorReportChannel() ? (0, i.jsx)(b.A, { channel: t }) : null,
            (0, i.jsx)(y, { channel: t }),
            (0, i.jsx)(C.Ay.Icon, {
                icon: l.PGe,
                tooltip: v.intl.string(v.t.cpT0Cq),
                onClick: () => (0, S.xu)((0, x.j)(t), n ?? t.parent_id),
            }),
        ],
    });
}
