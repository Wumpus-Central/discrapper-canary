n.d(t, { A: () => w });
var i = n(627968),
    l = n(64700),
    s = n(111956),
    a = n.n(s),
    r = n(265872),
    o = n(365199),
    d = n(861672),
    c = n(477782),
    u = n(811893),
    h = n(789645),
    A = n(163126),
    _ = n(182061),
    m = n(886393),
    g = n(307623),
    p = n(660273),
    f = n(707792),
    E = n(41402),
    x = n(271456),
    I = n(200273),
    C = n(565846),
    b = n(57907),
    N = n(375500),
    S = n(707653),
    v = n(50268),
    T = n(584682),
    y = n(58736),
    R = n(378570),
    j = n(203982),
    L = n(170428),
    O = n(933057),
    G = n(747926),
    D = n(652215),
    M = n(985018);
function U(e) {
    let { channel: t } = e,
        [n, s] = l.useState(!1),
        a = l.useRef(null);
    function d() {
        s((e) => !e);
    }
    let c = M.intl.string(M.t["UKOtz+"]);
    return (0, i.jsx)(r.Y, {
        targetElementRef: a,
        shouldShow: n,
        animation: r.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => s(!1),
        renderPopout: function (e) {
            return (0, i.jsx)(P, { ...e, channel: t });
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(y.Ay.Icon, {
                ...e,
                ref: a,
                onClick: d,
                tooltip: n ? null : c,
                icon: o.j,
                "aria-label": c,
                selected: n,
            });
        },
    });
}
function P(e) {
    let { channel: t, closePopout: n, onSelect: l } = e,
        s = (0, p.A)(t, "Sidebar Overflow"),
        r = (0, E.A)(t),
        o = (0, b.A)(t),
        h = (0, N.A)(t),
        T = (0, _.A)(t),
        y = (0, f.A)(t),
        L = (0, C.A)(t.id),
        O = (0, I.A)(t),
        G = (0, g.A)(t),
        U = (0, m.A)(t),
        P = (0, v.A)({ id: t.id, label: M.intl.string(M.t.DQ797g) }),
        w = (0, S.A)(t),
        k = (0, x.A)(t),
        V = (0, A.$)(1e3);
    function B() {
        (0, R.iN)(t.id);
    }
    function H(e) {
        let n = a()(() => {
                j._.unsubscribe(D.jej.CHANNEL_TEXT_AREA_FOCUSED, i), e();
            }, 250),
            i = (e) => {
                e.channelId === t.id && n();
            };
        j._.subscribe(D.jej.CHANNEL_TEXT_AREA_FOCUSED, i),
            V.addEventListener("abort", () => {
                j._.unsubscribe(D.jej.CHANNEL_TEXT_AREA_FOCUSED, i);
            });
    }
    return (0, i.jsxs)(d.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: n,
        "aria-label": M.intl.string(M.t["1NBjqb"]),
        onSelect: l,
        children: [
            (0, i.jsxs)(c.rX, {
                children: [s, (0, i.jsx)(c.Dr, { id: "open", label: M.intl.string(M.t.IxVmZi), action: B })],
            }),
            (0, i.jsxs)(c.rX, { children: [o, h] }),
            (0, i.jsxs)(c.rX, { children: [O, r, L, k] }),
            (0, i.jsxs)(c.rX, {
                children: [
                    (0, i.jsx)(c.Dr, {
                        id: "search",
                        label: M.intl.string(M.t["5h0QOP"]),
                        icon: u.t,
                        trailingIndicator: { type: "icon", icon: u.t },
                        action: function () {
                            H(() => {
                                j._.dispatch(D.jej.FOCUS_SEARCH, { prefillCurrentChannel: !1 });
                            }),
                                B();
                        },
                    }),
                    (0, i.jsx)(c.Dr, {
                        id: "pins",
                        label: M.intl.string(M.t["2BSH7n"]),
                        icon: u.t,
                        trailingIndicator: { type: "icon", icon: u.t },
                        action: function () {
                            H(() => {
                                j._.dispatch(D.jej.TOGGLE_CHANNEL_PINS);
                            }),
                                B();
                        },
                    }),
                ],
            }),
            (0, i.jsxs)(c.rX, { children: [w, T, y, G] }),
            (0, i.jsxs)(c.rX, { children: [U, P] }),
        ],
    });
}
function w(e) {
    let { channel: t, baseChannelId: n } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            t.isForumPost() ? null : (0, i.jsx)(O.A, { channel: t }),
            t.isModeratorReportChannel() ? (0, i.jsx)(L.A, { channel: t }) : null,
            (0, i.jsx)(U, { channel: t }),
            (0, i.jsx)(y.Ay.Icon, {
                icon: h.P,
                tooltip: M.intl.string(M.t.cpT0Cq),
                onClick: () => (0, G.xu)((0, T.j)(t), n ?? t.parent_id),
            }),
        ],
    });
}
