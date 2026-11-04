r.d(n, { default: () => z });
var i = r(477900);
r(582128);
var l = r(855986),
    t = r(165862),
    s = r(477782),
    a = r(442433),
    d = r(847767),
    c = r(358367),
    h = r(468389),
    A = r(793574),
    x = r(130332),
    o = r(50268),
    j = r(93055),
    X = r(438653),
    u = r(6351),
    C = r(250737),
    p = r(687340),
    g = r(734057),
    T = r(664699),
    _ = r(652215),
    b = r(792996);
function m(e) {
    return e.type !== _.rbe.GUILD_APP
        ? null
        : (0, i.jsx)(s.Dr, { id: "open-chat", label: b.intl.string(b.t.ZXxLQg), action: () => (0, T.A)(e) });
}
var v = r(182061),
    N = r(778858),
    E = r(824492),
    f = r(533957),
    k = r(886393),
    L = r(477190),
    M = r(307623),
    I = r(317910),
    S = r(475777),
    U = r(511904),
    Z = r(906964),
    w = r(995102),
    D = r(288104),
    H = r(969128),
    O = r(586486),
    y = r(660273),
    G = r(804006),
    V = r(704543),
    F = r(57907);
function P(e) {
    let { channel: n, onSelect: r } = e,
        d = (0, l.bG)([g.A], () => g.A.getChannel(n.id), [n.id]),
        c = (0, v.A)(d ?? n),
        A = (0, U.A)(n),
        j = (0, k.A)(n),
        p = m(n),
        T = (0, X.C)(n),
        _ = (0, C.A)(n),
        N = (0, u.A)(n),
        E = (0, Z.A)(n),
        f = (0, w.A)(n),
        L = (0, F.A)(n),
        M = n.isThread() ? L : f,
        I = (0, y.A)(n, "Context Menu"),
        S = (0, G.A)(n, "Context Menu"),
        H = (0, o.A)({ id: n.id, label: b.intl.string(b.t.gFHI3k) }),
        V = (0, h.A)(n),
        P = (0, O.A)(n, O._),
        W = (0, x.A)(n, "ChannelListTextChannelContextMenu"),
        z = (0, D.A)(n);
    return (0, i.jsxs)(t.W, {
        "data-menu-migrated-auto": !0,
        navId: "channel-context",
        onClose: a.Z_,
        "aria-label": b.intl.string(b.t.Xm41aV),
        onSelect: r,
        children: [
            (0, i.jsx)(s.rX, { children: A }),
            (0, i.jsxs)(s.rX, { children: [W.remix, W.edit, W.settings, W.showOverlay] }),
            (0, i.jsxs)(s.rX, { children: [N, E, _] }),
            (0, i.jsxs)(s.rX, { children: [n.isThread() ? I : null, n.isThread() ? c : null, j] }),
            (0, i.jsx)(s.rX, { children: p }),
            (0, i.jsxs)(s.rX, { children: [M, z] }),
            (0, i.jsx)(s.rX, { children: V }),
            (0, i.jsx)(s.rX, { children: P }),
            (0, i.jsxs)(s.rX, { children: [n.isThread() ? S : null, T] }),
            (0, i.jsx)(s.rX, { children: H }),
        ],
    });
}
function W(e) {
    let n,
        { channel: r, guild: d, onSelect: c } = e,
        A = (0, U.A)(r),
        j = (0, k.A)(r),
        u = m(r),
        C = (0, X.z)(r),
        g = (0, X.C)(r),
        T = (0, V.A)(r),
        _ = (0, H.A)(r),
        v =
            ((n = (0, l.bG)([E.A], () => E.A.didAgree(r.id))),
            r.isSpoilerChannel() && n
                ? (0, i.jsx)(s.Dr, {
                      id: "clear-spoiler-agree",
                      label: b.intl.string(b.t.ix2UVZ),
                      action: () => N.A.clearSpoilerAgree(r.id),
                  })
                : null),
        y = (0, w.A)(r),
        G = (0, I.A)(r),
        F = (0, S.A)(r, d),
        P = (0, f.A)(r, d),
        W = (0, L.A)(r, d),
        z = (0, M.A)(r),
        Q = (0, o.A)({ id: r.id, label: b.intl.string(b.t.gFHI3k) }),
        q = (0, Z.A)(r),
        B = (0, h.A)(r),
        J = (0, O.A)(r, O._),
        K = (0, p.A)(r),
        R = (0, x.A)(r, "ChannelListTextChannelContextMenu"),
        Y = (0, D.A)(r);
    return (0, i.jsxs)(t.W, {
        "data-menu-migrated": !0,
        navId: "channel-context",
        onClose: a.Z_,
        "aria-label": b.intl.string(b.t.Xm41aV),
        onSelect: c,
        children: [
            (0, i.jsx)(s.rX, { children: A }, "mark-as-read-or-favorite"),
            (0, i.jsx)(s.rX, { children: C }),
            (0, i.jsxs)(s.rX, { children: [R.remix, R.edit, R.settings, R.showOverlay] }, "conjure"),
            (0, i.jsxs)(s.rX, { children: [F, K, T, _, j] }, "channel-actions"),
            (0, i.jsx)(s.rX, { children: u }, "app-channel-actions"),
            (0, i.jsxs)(s.rX, { children: [y, Y] }, "notifications"),
            (0, i.jsx)(s.rX, { children: v }, "spoiler"),
            (0, i.jsx)(s.rX, { children: q }),
            (0, i.jsxs)(s.rX, { children: [G, P, W, z] }, "admin-actions"),
            (0, i.jsx)(s.rX, { children: B }),
            (0, i.jsx)(s.rX, { children: J }, "report-app"),
            (0, i.jsx)(s.rX, { children: g }),
            (0, i.jsx)(s.rX, { children: Q }, "developer-actions"),
        ],
    });
}
let z = (0, c.A)(
    (0, d.A)(
        function (e) {
            return (0, j.DZ)() ? (0, i.jsx)(P, { ...e }) : (0, i.jsx)(W, { ...e });
        },
        { object: _.ZSU.CONTEXT_MENU },
    ),
    [A.A.CONTEXT_MENU, A.A.CHANNEL_LIST_TEXT_CHANNEL_MENU],
);
