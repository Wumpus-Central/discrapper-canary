n.d(t, { A: () => H }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(73153),
    o = n(824552),
    c = n(782934),
    d = n(496231),
    u = n(47167),
    h = n(495273),
    m = n(265869),
    A = n(772659),
    g = n(437774),
    p = n(622543),
    f = n(576622),
    _ = n(95701),
    E = n(546183),
    x = n(808728),
    C = n(576705),
    S = n(287809),
    I = n(427262),
    T = n(803622),
    N = n(314307),
    y = n(393194),
    b = n(455067),
    v = n(432817),
    j = n(324799),
    R = n(635157),
    M = n(379768),
    D = n(391257),
    O = n(914835),
    L = n(825244),
    P = n(652215),
    w = n(746080),
    k = n(985018),
    U = n(82842),
    G = n(473169);
function F(e) {
    let { canManageRoles: t, channel: n } = e,
        l = t && (0, h.Ae)(n),
        a = (0, s.bG)([x.Ay], () => null != n.guild_id && n === x.Ay.getDefaultChannel(n.guild_id), [n]);
    if ((0, m.A)(n.id)) return null;
    if (n.isForumPost()) return (0, i.jsx)(y.A, { channel: n });
    if (_.Le.has(n.type)) return (0, i.jsx)(O.A, { channel: n });
    if (a) return (0, i.jsx)(L.A, { channel: n });
    if (l) return (0, i.jsx)(M.A, { channel: n });
    return (0, i.jsx)(D.A, { channel: n });
}
function H(e) {
    let { channel: t, showingBanner: n } = e,
        h = (0, u.Ay)(t),
        { type: m } = t,
        _ = (0, s.bG)([S.default], () => (t.isPrivate() ? S.default.getUser(t.getRecipientId()) : null)),
        x = I.Ay.useUserTag(_),
        { canManageRoles: y, canReadMessageHistory: M } = (0, s.cf)([C.A], () => ({
            canManageRoles: C.A.can(P.xBc.MANAGE_ROLES, t),
            canReadMessageHistory: C.A.can(P.xBc.READ_MESSAGE_HISTORY, t),
        })),
        D = (0, s.bG)([p.A], () => (m === P.rbe.DM ? p.A.getMutualGuilds(t.getRecipientId()) : null), [t, m]),
        O = (0, d.A)(_?.id ?? P.dJq),
        { authorizedAppToken: L, authorizedAppsFetchState: H } = (0, s.cf)([E.default], () => ({
            authorizedAppToken: E.default.getNewestTokenForApplication(O?.id),
            authorizedAppsFetchState: E.default.getFetchState(),
        })),
        B = c.A.useExperiment({ location: "EmptyMessages" }).enabledDesktop;
    if (
        (l.useEffect(() => {
            m === P.rbe.DM &&
                null == D &&
                null != _ &&
                r.h.wait(() => (0, f.A)(t.getRecipientId(), _.getAvatarURL(null, 80), { withMutualGuilds: !0 }));
        }, [D, m, t, _]),
        l.useEffect(() => {
            _?.bot && H === E.FetchState.NOT_FETCHED && o.A.fetch();
        }, [_?.bot, H]),
        t.isSystemDM())
    )
        return (0, i.jsx)(R.A, { channel: t, children: k.intl.string(k.t.Rzvnig) });
    if (m === P.rbe.DM) {
        let e;
        if (null != _ && null != O) {
            let n = [];
            null != L &&
                (n.push((0, i.jsx)(j.X, { channel: t, user: _ }, "mute")),
                n.push((0, i.jsx)(v.L, { user: _, application: O, channel: t, oauth2Token: L }, "manage"))),
                B && n.push((0, i.jsx)(A.A, { channel: t }, "report")),
                n.length > 0 && (e = (0, i.jsx)("div", { className: U.U, children: n }));
        } else e = (0, i.jsx)(T.A, { userId: t.getRecipientId(), channel: t, showingBanner: n });
        return (0, i.jsxs)(R.A, {
            channel: t,
            user: _,
            children: [
                null != _ &&
                    !_.isProvisional &&
                    (0, i.jsx)(a.Heading, { variant: "heading-xl/medium", className: G.SX, children: x }),
                k.intl.format(k.t["Qvg+6+"], { username: h }),
                _?.isProvisional && (0, i.jsx)(g.Y, { userId: _.id }),
                e,
            ],
        });
    }
    if (t.isMultiUserDM())
        if (t.isManaged())
            return (0, i.jsxs)(N.Ay, {
                channelId: t.id,
                children: [
                    (0, i.jsx)(N.cr, { children: k.intl.format(k.t.I3R7Vn, { channelName: h }) }),
                    (0, i.jsx)(N.j1, { children: k.intl.string(k.t.M8Ao6I) }),
                ],
            });
        else if (t.hasFlag(w.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) return (0, i.jsx)(b.A, { channel: t });
        else return (0, i.jsx)(R.A, { channel: t, children: k.intl.format(k.t.MFwcqO, { name: h }) });
    return M
        ? (0, i.jsx)(F, { channel: t, canManageRoles: y })
        : (0, i.jsx)(N.Ay, {
              channelId: t.id,
              children: (0, i.jsx)(N.j1, { children: k.intl.format(k.t.hPVEQG, { channelName: h }) }),
          });
}
