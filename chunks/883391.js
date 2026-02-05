n.d(t, { A: () => b });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(492462),
    o = n(311907),
    d = n(421380),
    c = n(397927),
    u = n(686956),
    A = n(800342),
    h = n(490415),
    _ = n(481859),
    m = n(235986),
    p = n(263063),
    g = n(857071),
    E = n(976860),
    f = n(345942),
    I = n(71393),
    C = n(860689),
    N = n(590858),
    T = n(652215),
    S = n(985018),
    x = n(811911);
class v extends r.PureComponent {
    handleJoinOrView = async () => {
        let { guild: e, skuId: t, isInGuild: n, isLurking: i } = this.props,
            r = () => (0, f.u)(e.id);
        if (i) (0, A.S5)(t).then(r);
        else if (n) r();
        else
            try {
                await u.A.joinGuild(e.id, { lurker: !0, source: T.Q4z.APPLICATION_STORE }), r();
            } catch {}
    };
    handleLogin = () => {
        let e = { redirect_to: T.BVt.APPLICATION_STORE_LISTING_SKU(this.props.skuId) };
        (0, E.pX)(T.BVt.LOGIN, { search: (0, s.stringify)(e), source: "verified_guild_invite" });
    };
    renderMemberInfo() {
        let { approximateMemberCount: e, approximatePresenceCount: t } = this.props.guild;
        return null == e || null == t
            ? null
            : (0, i.jsxs)(m.A, {
                  className: x.Fj,
                  align: m.A.Align.CENTER,
                  children: [
                      (0, i.jsx)("div", { className: x.JX }),
                      (0, i.jsx)("span", {
                          className: x.WI,
                          children: S.intl.format(S.t["LC+S+m"], { membersOnline: t }),
                      }),
                      (0, i.jsx)("div", { className: x.Li }),
                      (0, i.jsx)("span", { className: x.WI, children: S.intl.format(S.t.zRl6XR, { count: e }) }),
                  ],
              });
    }
    render() {
        let {
            guild: e,
            inChannel: t,
            isInGuild: n,
            isLurking: r,
            isAuthenticated: a,
            className: s,
            pageSize: o,
        } = this.props;
        if (t && n) return null;
        let u = (0, C.rx)(e),
            A = S.intl.string(S.t.pxwdrA),
            h = this.handleJoinOrView,
            g = d.$n.Looks.FILLED,
            E = d.$n.Colors.PRIMARY;
        return (
            a
                ? n
                    ? ((g = d.$n.Looks.OUTLINED),
                      (E = x.yh),
                      (A = (0, i.jsxs)(m.A, {
                          align: m.A.Align.CENTER,
                          children: [
                              (0, i.jsx)("div", { children: S.intl.string(S.t.cEnaWx) }),
                              (0, i.jsx)(c.A9s, { size: "md", color: "currentColor", className: x.BW }),
                          ],
                      })))
                    : r && t && (A = S.intl.string(S.t.XpeFYr))
                : ((A = S.intl.string(S.t.dKhVQN)), (h = this.handleLogin)),
            (0, i.jsxs)("div", {
                className: l()(s, o === N.q.SMALL ? x.T8 : x.vm),
                children: [
                    (0, i.jsx)(_.A, { children: S.intl.string(S.t.s1KcLo) }),
                    (0, i.jsxs)("div", {
                        className: x.Qs,
                        children: [
                            (0, i.jsxs)("div", {
                                className: x.pq,
                                children: [
                                    (0, i.jsx)(p.A, { guild: u, active: !0, size: p.A.Sizes.LARGE, className: x.$f }),
                                    (0, i.jsxs)("div", {
                                        className: x.aV,
                                        children: [
                                            (0, i.jsx)("div", { className: x.UU, children: e.name }),
                                            this.renderMemberInfo(),
                                        ],
                                    }),
                                ],
                            }),
                            (0, i.jsx)(d.$n, {
                                size: d.$n.Sizes.SMALL,
                                className: x.hP,
                                fullWidth: !0,
                                color: E,
                                look: g,
                                onClick: h,
                                children: A,
                            }),
                        ],
                    }),
                ],
            })
        );
    }
}
let b = (0, h.A)(
    o.Ay.connectStores([I.A, g.A], (e) => {
        let { guild: t } = e,
            n = g.A.isLurking(t.id);
        return { isInGuild: null != I.A.getGuild(t.id) && !n, isLurking: n };
    })(v),
);
