n.d(t, { A: () => j });
var i = n(627968),
    l = n(311907),
    a = n(534514),
    s = n(47167),
    r = n(495273),
    o = n(265869),
    c = n(437774),
    d = n(95701),
    u = n(808728),
    h = n(576705),
    m = n(287809),
    A = n(427262),
    g = n(314307),
    p = n(393194),
    _ = n(455067),
    f = n(635157),
    E = n(379768),
    C = n(391257),
    x = n(914835),
    S = n(825244),
    I = n(423563),
    N = n(652215),
    v = n(746080),
    T = n(985018),
    y = n(818050);
function b(e) {
    let { canManageRoles: t, channel: n } = e,
        a = t && (0, r.Ae)(n),
        s = (0, l.bG)([u.Ay], () => null != n.guild_id && n === u.Ay.getDefaultChannel(n.guild_id), [n]);
    if ((0, o.A)(n.id)) return null;
    if (n.isForumPost()) return (0, i.jsx)(p.A, { channel: n });
    if (d.Le.has(n.type)) return (0, i.jsx)(x.A, { channel: n });
    if (s) return (0, i.jsx)(S.A, { channel: n });
    if (a) return (0, i.jsx)(E.A, { channel: n });
    return (0, i.jsx)(C.A, { channel: n });
}
function j(e) {
    let { channel: t, showingBanner: n } = e,
        r = (0, s.Ay)(t),
        { type: o } = t,
        d = (0, l.bG)([m.default], () => (t.isPrivate() ? m.default.getUser(t.getRecipientId()) : null)),
        u = A.Ay.useUserTag(d),
        { canManageRoles: p, canReadMessageHistory: E } = (0, l.cf)([h.A], () => ({
            canManageRoles: h.A.can(N.xBc.MANAGE_ROLES, t),
            canReadMessageHistory: h.A.can(N.xBc.READ_MESSAGE_HISTORY, t),
        }));
    if (t.isSystemDM()) return (0, i.jsx)(f.A, { channel: t, children: T.intl.string(T.t.Rzvnig) });
    if (o === N.rbe.DM)
        return (0, i.jsxs)(f.A, {
            channel: t,
            user: d,
            children: [
                null == d || d.isProvisional
                    ? null
                    : (0, i.jsx)(a.D, { variant: "heading-xl/medium", className: y.SX, children: u }),
                T.intl.format(T.t["Qvg+6+"], { username: r }),
                d?.isProvisional ? (0, i.jsx)(c.Y, { userId: d.id }) : null,
                null != d ? (0, i.jsx)(I.A, { channel: t, user: d, showingBanner: n }) : null,
            ],
        });
    if (t.isMultiUserDM())
        if (t.isManaged())
            return (0, i.jsxs)(g.Ay, {
                channelId: t.id,
                children: [
                    (0, i.jsx)(g.cr, { children: T.intl.format(T.t.I3R7Vn, { channelName: r }) }),
                    (0, i.jsx)(g.j1, { children: T.intl.string(T.t.M8Ao6I) }),
                ],
            });
        else if (t.hasFlag(v.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) return (0, i.jsx)(_.A, { channel: t });
        else return (0, i.jsx)(f.A, { channel: t, children: T.intl.format(T.t.MFwcqO, { name: r }) });
    return E
        ? (0, i.jsx)(b, { channel: t, canManageRoles: p })
        : (0, i.jsx)(g.Ay, {
              channelId: t.id,
              children: (0, i.jsx)(g.j1, { children: T.intl.format(T.t.hPVEQG, { channelName: r }) }),
          });
}
