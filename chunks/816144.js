n.d(t, { A: () => F }), n(321073);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(397927),
    s = n(73153),
    o = n(824552),
    c = n(782934),
    u = n(496231),
    d = n(47167),
    f = n(495273),
    p = n(265869),
    h = n(772659),
    b = n(437774),
    g = n(622543),
    m = n(576622),
    A = n(95701),
    y = n(546183),
    O = n(808728),
    j = n(576705),
    v = n(287809),
    x = n(427262),
    E = n(803622),
    _ = n(314307),
    C = n(393194),
    S = n(455067),
    I = n(432817),
    N = n(324799),
    T = n(635157),
    P = n(379768),
    w = n(391257),
    R = n(914835),
    D = n(825244),
    M = n(652215),
    L = n(746080),
    G = n(985018),
    k = n(82842),
    U = n(473169);
function V(e) {
    let { canManageRoles: t, channel: n } = e,
        l = t && (0, f.Ae)(n),
        a = (0, i.bG)([O.Ay], () => null != n.guild_id && n === O.Ay.getDefaultChannel(n.guild_id), [n]);
    if ((0, p.A)(n.id)) return null;
    if (n.isForumPost()) return (0, r.jsx)(C.A, { channel: n });
    if (A.Le.has(n.type)) return (0, r.jsx)(R.A, { channel: n });
    if (a) return (0, r.jsx)(D.A, { channel: n });
    if (l) return (0, r.jsx)(P.A, { channel: n });
    return (0, r.jsx)(w.A, { channel: n });
}
function F(e) {
    var t;
    let { channel: n, showingBanner: f } = e,
        p = (0, d.Ay)(n),
        { type: A } = n,
        O = (0, i.bG)([v.default], () => (n.isPrivate() ? v.default.getUser(n.getRecipientId()) : null)),
        C = x.Ay.useUserTag(O),
        { canManageRoles: P, canReadMessageHistory: w } = (0, i.cf)([j.A], () => ({
            canManageRoles: j.A.can(M.xBc.MANAGE_ROLES, n),
            canReadMessageHistory: j.A.can(M.xBc.READ_MESSAGE_HISTORY, n),
        })),
        R = (0, i.bG)([g.A], () => (A === M.rbe.DM ? g.A.getMutualGuilds(n.getRecipientId()) : null), [n, A]),
        D = (0, u.A)(null != (t = null == O ? void 0 : O.id) ? t : M.dJq),
        { authorizedAppToken: F, authorizedAppsFetchState: H } = (0, i.cf)([y.default], () => ({
            authorizedAppToken: y.default.getNewestTokenForApplication(null == D ? void 0 : D.id),
            authorizedAppsFetchState: y.default.getFetchState(),
        })),
        B = c.A.useExperiment({ location: "EmptyMessages" }).enabledDesktop;
    if (
        (l.useEffect(() => {
            A === M.rbe.DM &&
                null == R &&
                null != O &&
                s.h.wait(() => (0, m.A)(n.getRecipientId(), O.getAvatarURL(null, 80), { withMutualGuilds: !0 }));
        }, [R, A, n, O]),
        l.useEffect(() => {
            (null == O ? void 0 : O.bot) && H === y.FetchState.NOT_FETCHED && o.A.fetch();
        }, [null == O ? void 0 : O.bot, H]),
        n.isSystemDM())
    )
        return (0, r.jsx)(T.A, {
            channel: n,
            children: G.intl.string(G.t.Rzvnig),
        });
    if (A === M.rbe.DM) {
        let e;
        if (null != O && null != D) {
            let t = [];
            null != F &&
                (t.push(
                    (0, r.jsx)(
                        N.X,
                        {
                            channel: n,
                            user: O,
                        },
                        "mute",
                    ),
                ),
                t.push(
                    (0, r.jsx)(
                        I.L,
                        {
                            user: O,
                            application: D,
                            channel: n,
                            oauth2Token: F,
                        },
                        "manage",
                    ),
                )),
                B && t.push((0, r.jsx)(h.A, { channel: n }, "report")),
                t.length > 0 &&
                    (e = (0, r.jsx)("div", {
                        className: k.U,
                        children: t,
                    }));
        } else
            e = (0, r.jsx)(E.A, {
                userId: n.getRecipientId(),
                channel: n,
                showingBanner: f,
            });
        return (0, r.jsxs)(T.A, {
            channel: n,
            user: O,
            children: [
                null != O &&
                    !O.isProvisional &&
                    (0, r.jsx)(a.Heading, {
                        variant: "heading-xl/medium",
                        className: U.SX,
                        children: C,
                    }),
                G.intl.format(G.t["Qvg+6+"], { username: p }),
                (null == O ? void 0 : O.isProvisional) && (0, r.jsx)(b.Y, { userId: O.id }),
                e,
            ],
        });
    }
    if (n.isMultiUserDM())
        if (n.isManaged())
            return (0, r.jsxs)(_.Ay, {
                channelId: n.id,
                children: [
                    (0, r.jsx)(_.cr, { children: G.intl.format(G.t.I3R7Vn, { channelName: p }) }),
                    (0, r.jsx)(_.j1, { children: G.intl.string(G.t.M8Ao6I) }),
                ],
            });
        else if (n.hasFlag(L.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) return (0, r.jsx)(S.A, { channel: n });
        else
            return (0, r.jsx)(T.A, {
                channel: n,
                children: G.intl.format(G.t.MFwcqO, { name: p }),
            });
    return w
        ? (0, r.jsx)(V, {
              channel: n,
              canManageRoles: P,
          })
        : (0, r.jsx)(_.Ay, {
              channelId: n.id,
              children: (0, r.jsx)(_.j1, { children: G.intl.format(G.t.hPVEQG, { channelName: p }) }),
          });
}
