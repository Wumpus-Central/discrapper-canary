n.d(t, { A: () => T }), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(492462),
    o = n(311907),
    c = n(421380),
    u = n(397927),
    d = n(686956),
    p = n(800342),
    f = n(490415),
    h = n(481859),
    A = n(235986),
    g = n(263063),
    m = n(857071),
    b = n(976860),
    _ = n(345942),
    E = n(71393),
    O = n(860689),
    y = n(590858),
    I = n(652215),
    v = n(985018),
    S = n(811911);
function C(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class N extends i.PureComponent {
    renderMemberInfo() {
        let { approximateMemberCount: e, approximatePresenceCount: t } = this.props.guild;
        return null == e || null == t
            ? null
            : (0, r.jsxs)(A.A, {
                  className: S.Fj,
                  align: A.A.Align.CENTER,
                  children: [
                      (0, r.jsx)("div", { className: S.JX }),
                      (0, r.jsx)("span", {
                          className: S.WI,
                          children: v.intl.format(v.t["LC+S+m"], { membersOnline: t }),
                      }),
                      (0, r.jsx)("div", { className: S.Li }),
                      (0, r.jsx)("span", {
                          className: S.WI,
                          children: v.intl.format(v.t.zRl6XR, { count: e }),
                      }),
                  ],
              });
    }
    render() {
        let {
            guild: e,
            inChannel: t,
            isInGuild: n,
            isLurking: i,
            isAuthenticated: l,
            className: s,
            pageSize: o,
        } = this.props;
        if (t && n) return null;
        let d = (0, O.rx)(e),
            p = v.intl.string(v.t.pxwdrA),
            f = this.handleJoinOrView,
            m = c.$n.Looks.FILLED,
            b = c.$n.Colors.PRIMARY;
        return (
            l
                ? n
                    ? ((m = c.$n.Looks.OUTLINED),
                      (b = S.yh),
                      (p = (0, r.jsxs)(A.A, {
                          align: A.A.Align.CENTER,
                          children: [
                              (0, r.jsx)("div", { children: v.intl.string(v.t.cEnaWx) }),
                              (0, r.jsx)(u.A9s, {
                                  size: "md",
                                  color: "currentColor",
                                  className: S.BW,
                              }),
                          ],
                      })))
                    : i && t && (p = v.intl.string(v.t.XpeFYr))
                : ((p = v.intl.string(v.t.dKhVQN)), (f = this.handleLogin)),
            (0, r.jsxs)("div", {
                className: a()(s, o === y.q.SMALL ? S.T8 : S.vm),
                children: [
                    (0, r.jsx)(h.A, { children: v.intl.string(v.t.s1KcLo) }),
                    (0, r.jsxs)("div", {
                        className: S.Qs,
                        children: [
                            (0, r.jsxs)("div", {
                                className: S.pq,
                                children: [
                                    (0, r.jsx)(g.A, {
                                        guild: d,
                                        active: !0,
                                        size: g.A.Sizes.LARGE,
                                        className: S.$f,
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: S.aV,
                                        children: [
                                            (0, r.jsx)("div", {
                                                className: S.UU,
                                                children: e.name,
                                            }),
                                            this.renderMemberInfo(),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsx)(c.$n, {
                                size: c.$n.Sizes.SMALL,
                                className: S.hP,
                                fullWidth: !0,
                                color: b,
                                look: m,
                                onClick: f,
                                children: p,
                            }),
                        ],
                    }),
                ],
            })
        );
    }
    constructor(...e) {
        super(...e),
            C(this, "handleJoinOrView", async () => {
                let { guild: e, skuId: t, isInGuild: n, isLurking: r } = this.props,
                    i = () => (0, _.u)(e.id);
                if (r) (0, p.S5)(t).then(i);
                else if (n) i();
                else
                    try {
                        await d.A.joinGuild(e.id, {
                            lurker: !0,
                            source: I.Q4z.APPLICATION_STORE,
                        }),
                            i();
                    } catch (e) {}
            }),
            C(this, "handleLogin", () => {
                let e = { redirect_to: I.BVt.APPLICATION_STORE_LISTING_SKU(this.props.skuId) };
                (0, b.pX)(I.BVt.LOGIN, {
                    search: (0, s.stringify)(e),
                    source: "verified_guild_invite",
                });
            });
    }
}
let T = (0, f.A)(
    o.Ay.connectStores([E.A, m.A], (e) => {
        let { guild: t } = e,
            n = m.A.isLurking(t.id);
        return {
            isInGuild: null != E.A.getGuild(t.id) && !n,
            isLurking: n,
        };
    })(N),
);
