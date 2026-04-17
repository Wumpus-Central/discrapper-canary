n.d(t, { A: () => M });
var i = n(627968),
    l = n(64700),
    s = n(111956),
    a = n.n(s),
    r = n(397927),
    o = n(163126),
    d = n(182061),
    c = n(886393),
    u = n(307623),
    h = n(660273),
    A = n(707792),
    _ = n(41402),
    m = n(271456),
    p = n(200273),
    g = n(565846),
    f = n(57907),
    E = n(375500),
    x = n(707653),
    I = n(50268),
    C = n(584682),
    N = n(58736),
    T = n(378570),
    S = n(203982),
    b = n(170428),
    y = n(933057),
    v = n(747926),
    R = n(652215),
    j = n(985018);
function O(e) {
    let { channel: t } = e,
        [n, s] = l.useState(!1),
        a = l.useRef(null);
    function o() {
        s((e) => !e);
    }
    let d = j.intl.string(j.t["UKOtz+"]);
    return (0, i.jsx)(r.YNO, {
        targetElementRef: a,
        shouldShow: n,
        animation: r.YNO.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => s(!1),
        renderPopout: function (e) {
            return (0, i.jsx)(L, { ...e, channel: t });
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(N.Ay.Icon, {
                ...e,
                ref: a,
                onClick: o,
                tooltip: n ? null : d,
                icon: r.jNK,
                "aria-label": d,
                selected: n,
            });
        },
    });
}
function L(e) {
    let { channel: t, closePopout: n, onSelect: l } = e,
        s = (0, h.A)(t, "Sidebar Overflow"),
        C = (0, _.A)(t),
        N = (0, f.A)(t),
        b = (0, E.A)(t),
        y = (0, d.A)(t),
        v = (0, A.A)(t),
        O = (0, g.A)(t.id),
        L = (0, p.A)(t),
        M = (0, u.A)(t),
        D = (0, c.A)(t),
        U = (0, I.A)({ id: t.id, label: j.intl.string(j.t.DQ797g) }),
        G = (0, x.A)(t),
        P = (0, m.A)(t),
        k = (0, o.$)(1e3);
    function w() {
        (0, T.iN)(t.id);
    }
    function B(e) {
        let n = a()(() => {
                S._.unsubscribe(R.jej.CHANNEL_TEXT_AREA_FOCUSED, i), e();
            }, 250),
            i = (e) => {
                e.channelId === t.id && n();
            };
        S._.subscribe(R.jej.CHANNEL_TEXT_AREA_FOCUSED, i),
            k.addEventListener("abort", () => {
                S._.unsubscribe(R.jej.CHANNEL_TEXT_AREA_FOCUSED, i);
            });
    }
    return (0, i.jsxs)(r.W1t, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: n,
        "aria-label": j.intl.string(j.t["1NBjqb"]),
        onSelect: l,
        children: [
            (0, i.jsxs)(r.rXV, {
                children: [s, (0, i.jsx)(r.Drp, { id: "open", label: j.intl.string(j.t.IxVmZi), action: w })],
            }),
            (0, i.jsxs)(r.rXV, { children: [N, b] }),
            (0, i.jsxs)(r.rXV, { children: [L, C, O, P] }),
            (0, i.jsxs)(r.rXV, {
                children: [
                    (0, i.jsx)(r.Drp, {
                        id: "search",
                        label: j.intl.string(j.t["5h0QOP"]),
                        icon: r.tfB,
                        trailingIndicator: { type: "icon", icon: r.tfB },
                        action: function () {
                            B(() => {
                                S._.dispatch(R.jej.FOCUS_SEARCH, { prefillCurrentChannel: !1 });
                            }),
                                w();
                        },
                    }),
                    (0, i.jsx)(r.Drp, {
                        id: "pins",
                        label: j.intl.string(j.t["2BSH7n"]),
                        icon: r.tfB,
                        trailingIndicator: { type: "icon", icon: r.tfB },
                        action: function () {
                            B(() => {
                                S._.dispatch(R.jej.TOGGLE_CHANNEL_PINS);
                            }),
                                w();
                        },
                    }),
                ],
            }),
            (0, i.jsxs)(r.rXV, { children: [G, y, v, M] }),
            (0, i.jsxs)(r.rXV, { children: [D, U] }),
        ],
    });
}
function M(e) {
    let { channel: t, baseChannelId: n } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            t.isForumPost() ? null : (0, i.jsx)(y.A, { channel: t }),
            t.isModeratorReportChannel() ? (0, i.jsx)(b.A, { channel: t }) : null,
            (0, i.jsx)(O, { channel: t }),
            (0, i.jsx)(N.Ay.Icon, {
                icon: r.PGe,
                tooltip: j.intl.string(j.t.cpT0Cq),
                onClick: () => (0, v.xu)((0, C.j)(t), n ?? t.parent_id),
            }),
        ],
    });
}
