r.d(e, { default: () => z });
var i = r(477900);
r(582128);
var l = r(980707),
    t = r(477782),
    a = r(442433),
    c = r(847767),
    s = r(358367),
    d = r(468389),
    o = r(793574),
    A = r(50268),
    h = r(93055),
    x = r(438653),
    p = r(6351),
    u = r(349807),
    j = r(250737),
    X = r(769591),
    g = r(687340),
    C = r(17928),
    _ = r(66834),
    I = r(824492),
    b = r(375708),
    N = r(533957),
    m = r(886393),
    v = r(477190),
    f = r(307623),
    E = r(317910),
    T = r(475777),
    k = r(868548),
    S = r(995102),
    U = r(288104),
    y = r(661504),
    F = r(969128),
    M = r(138134),
    Z = r(627363),
    D = r(587895),
    G = r(928658),
    H = r(652215);
let L = "app_channel_context_menu";
function V(n, e) {
    let r = n.type === H.rbe.GUILD_APP ? n.getApplicationId() : null;
    return null == r
        ? null
        : (0, i.jsx)(t.Dr, {
              id: "report-app",
              label: b.intl.string(b.t.NgA5vp),
              action: () => {
                  Z.Ay.fetchApplication(r)
                      .then(() => {
                          let i = D.A.getApplication(r);
                          null != i &&
                              (0, G.r3)({
                                  application: i,
                                  entrypoint: e,
                                  contextualGuildId: n.getGuildId() ?? void 0,
                                  contextualChannelId: n.id,
                              });
                      })
                      .catch(() => {});
              },
              icon: M.FlagIcon,
              leadingAccessory: { type: "icon", icon: M.FlagIcon },
              color: "danger",
          });
}
var w = r(704543),
    O = r(57907);
function P(n) {
    let { channel: e, onSelect: r } = n,
        c = (0, k.A)(e),
        s = (0, m.A)(e),
        o = (0, x.C)(e),
        h = (0, j.A)(e),
        g = (0, p.A)(e),
        C = (0, u.A)(e),
        _ = (0, S.A)(e),
        I = (0, O.A)(e),
        N = e.isThread() ? I : _,
        v = (0, U.A)(e),
        f = (0, A.A)({ id: e.id, label: b.intl.string(b.t.gFHI3k) }),
        E = (0, d.A)(e),
        T = V(e, L),
        F = (0, y.A)(e),
        M = (0, X.os)("ChannelContextFavoritesMenu");
    return (0, i.jsxs)(l.W, {
        "data-menu-migrated-auto": !0,
        navId: "channel-context",
        onClose: a.Z_,
        "aria-label": b.intl.string(b.t.Xm41aV),
        onSelect: r,
        children: [
            (0, i.jsx)(t.rX, { children: c }),
            (0, i.jsxs)(t.rX, { children: [g, C, h] }),
            (0, i.jsx)(t.rX, { children: s }),
            (0, i.jsxs)(t.rX, { children: [N, M ? F : v] }),
            (0, i.jsx)(t.rX, { children: E }),
            (0, i.jsx)(t.rX, { children: T }),
            (0, i.jsx)(t.rX, { children: o }),
            (0, i.jsx)(t.rX, { children: f }),
        ],
    });
}
function W(n) {
    let e,
        { channel: r, guild: c, onSelect: s } = n,
        o = (0, k.A)(r),
        h = (0, m.A)(r),
        p = (0, x.z)(r),
        u = (0, x.C)(r),
        j = (0, w.A)(r),
        M = (0, F.A)(r),
        Z =
            ((e = (0, C.bG)([I.A], () => I.A.didAgree(r.id))),
            r.isSpoilerChannel() && e
                ? (0, i.jsx)(t.Dr, {
                      id: "clear-spoiler-agree",
                      label: b.intl.string(b.t.ix2UVZ),
                      action: () => _.A.clearSpoilerAgree(r.id),
                  })
                : null),
        D = (0, S.A)(r),
        G = (0, E.A)(r),
        H = (0, T.A)(r, c),
        O = (0, N.A)(r, c),
        P = (0, v.A)(r, c),
        W = (0, f.A)(r),
        z = (0, A.A)({ id: r.id, label: b.intl.string(b.t.gFHI3k) }),
        q = (0, d.A)(r),
        B = V(r, L),
        J = (0, g.A)(r),
        K = (0, U.A)(r),
        Q = (0, y.A)(r),
        R = (0, X.os)("ChannelContextMenuNormal");
    return (0, i.jsxs)(l.W, {
        "data-menu-migrated": !0,
        navId: "channel-context",
        onClose: a.Z_,
        "aria-label": b.intl.string(b.t.Xm41aV),
        onSelect: s,
        children: [
            (0, i.jsx)(t.rX, { children: o }, "mark-as-read-or-favorite"),
            (0, i.jsx)(t.rX, { children: p }),
            (0, i.jsxs)(t.rX, { children: [H, J, j, M, h] }, "channel-actions"),
            (0, i.jsxs)(t.rX, { children: [D, R ? Q : K] }, "notifications"),
            (0, i.jsx)(t.rX, { children: Z }, "spoiler"),
            (0, i.jsxs)(t.rX, { children: [G, O, P, W] }, "admin-actions"),
            (0, i.jsx)(t.rX, { children: q }),
            (0, i.jsx)(t.rX, { children: B }, "report-app"),
            (0, i.jsx)(t.rX, { children: u }),
            (0, i.jsx)(t.rX, { children: z }, "developer-actions"),
        ],
    });
}
let z = (0, s.A)(
    (0, c.A)(
        function (n) {
            return (0, h.DZ)() ? (0, i.jsx)(P, { ...n }) : (0, i.jsx)(W, { ...n });
        },
        { object: H.ZSU.CONTEXT_MENU },
    ),
    [o.A.CONTEXT_MENU, o.A.CHANNEL_LIST_TEXT_CHANNEL_MENU],
);
