n.r(t), n.d(t, { default: () => B });
var i = n(54381),
    l = n(473749),
    r = n(442837),
    a = n(481060),
    s = n(570140),
    o = n(787014),
    c = n(37234),
    d = n(503089),
    u = n(493544),
    h = n(367907),
    g = n(933557),
    m = n(471445),
    f = n(351123),
    p = n(685929),
    b = n(984802),
    x = n(665906),
    j = n(210887),
    v = n(131704),
    y = n(53640),
    C = n(277053),
    S = n(388610),
    O = n(592125),
    Z = n(496675),
    N = n(699516),
    E = n(594174),
    w = n(585483),
    T = n(787263),
    P = n(975316),
    I = n(428813),
    R = n(2147),
    M = n(856606),
    L = n(981631),
    A = n(388032),
    _ = n(958389);
function D(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    h.ZP.trackWithMetadata(L.rMx.SETTINGS_PANE_VIEWED, {
        settings_type: "channel",
        origin_pane: t,
        destination_pane: e,
        location: n,
    });
}
class k extends l.PureComponent {
    componentDidMount() {
        D(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        s.Z.wait(() => (0, o.xv)());
    }
    componentDidUpdate(e) {
        let { formState: t, section: n } = e,
            {
                formState: i,
                section: l,
                canManageRoles: r,
                canManageChannels: a,
                canManageWebhooks: s,
                canUnlinkChannel: o,
            } = this.props;
        (a || r || s || o) &&
        (i !== L.QZA.CLOSED || i === t) &&
        (r || l !== L.CoT.PERMISSIONS) &&
        (s || o || l !== L.CoT.INTEGRATIONS)
            ? l !== n && D(l, n)
            : (0, c.xf)();
    }
    render() {
        let {
            theme: e,
            sidebarTheme: t,
            section: n,
            channel: l,
            category: r,
            canManageRoles: s,
            canManageChannels: h,
            canDeleteChannels: p,
            canManageWebhooks: b,
            canUnlinkChannel: x,
        } = this.props;
        return null == l
            ? null
            : (0, i.jsx)(d.ZP, {
                  theme: e,
                  sidebarTheme: t,
                  section: null != n ? n : L.CoT.OVERVIEW,
                  onSetSection: o.zc,
                  onClose: c.xf,
                  sections: (function (e) {
                      let {
                              channel: t,
                              category: n,
                              canManageRoles: l,
                              canManageChannels: r,
                              canDeleteChannels: s,
                              canManageWebhooks: d,
                              canUnlinkChannel: h,
                          } = e,
                          p = (0, m.KS)(t),
                          { GUILD_CATEGORY: b } = L.d4z,
                          x = v.Ec.has(t.type),
                          j =
                              t.type === b
                                  ? A.intl.string(A.t.ifbXnL)
                                  : x
                                    ? t.isForumPost()
                                        ? A.intl.string(A.t.nEOg1N)
                                        : A.intl.string(A.t.H7vTe2)
                                    : A.intl.string(A.t["8D8Rsb"]);
                      return [
                          {
                              section: u.ID.HEADER,
                              label:
                                  null != t
                                      ? (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                null != p
                                                    ? (0, i.jsx)(p, {
                                                          size: "xxs",
                                                          color: "currentColor",
                                                          className: _.channelIcon,
                                                      })
                                                    : null,
                                                (0, g.F6)(t, E.default, N.Z),
                                                null != n
                                                    ? (0, i.jsx)(a.Text, {
                                                          tag: "span",
                                                          variant: "text-xs/semibold",
                                                          color: "text-default",
                                                          lineClamp: 1,
                                                          className: _.category,
                                                          children: (0, g.F6)(n, E.default, N.Z),
                                                      })
                                                    : null,
                                            ],
                                        })
                                      : A.intl.string(A.t.XPDhcc),
                          },
                          {
                              section: L.CoT.OVERVIEW,
                              label: A.intl.string(A.t["/dp6yY"]),
                              ariaLabel: A.intl.string(A.t["/dp6yY"]),
                              element: R.Z,
                              notice: {
                                  element: R.G,
                                  stores: [S.Z],
                              },
                              predicate: () => !t.isModeratorReportChannel(),
                          },
                          {
                              section: L.CoT.PERMISSIONS,
                              label: A.intl.string(A.t.xrmhRX),
                              element: f.Z,
                              notice: {
                                  element: M.n,
                                  stores: [C.Z],
                              },
                              predicate: () => l && !x,
                          },
                          {
                              section: L.CoT.INSTANT_INVITES,
                              label: A.intl.string(A.t["9F90ic"]),
                              element: I.Z,
                              type: u.bT.CUSTOM,
                              predicate: () => t.type !== b && r && !x && !t.isModeratorReportChannel(),
                          },
                          {
                              section: L.CoT.INTEGRATIONS,
                              label: A.intl.string(A.t.s69NLF),
                              ariaLabel: A.intl.string(A.t.s69NLF),
                              element: P.Z,
                              notice: {
                                  stores: [y.Z],
                                  element: P.B,
                              },
                              predicate: () => !((!d && !h) || t.isModeratorReportChannel()) && v.Ti.has(t.type),
                          },
                          { section: u.ID.DIVIDER },
                          {
                              section: L.CoT.DELETE,
                              onClick() {
                                  (0, T.w)(t, function () {
                                      w.S.subscribeOnce(L.CkL.LAYER_POP_COMPLETE, () => {
                                          (0, o.zz)(t.id);
                                      }),
                                          (0, c.xf)();
                                  });
                              },
                              label: j,
                              ariaLabel: j,
                              icon: (0, i.jsx)(a.XHJ, {
                                  size: "xs",
                                  color: "currentColor",
                              }),
                              variant: "destructive",
                              predicate: () => s && !t.isModeratorReportChannel(),
                          },
                      ];
                  })({
                      channel: l,
                      category: r,
                      canManageRoles: s,
                      canManageChannels: h,
                      canDeleteChannels: p,
                      canManageWebhooks: b,
                      canUnlinkChannel: x,
                  }),
              });
    }
}
function B() {
    let { channel: e, analyticsLocation: t } = (0, r.cj)([S.Z], () => S.Z.getProps()),
        n = (0, r.e7)([S.Z], () => S.Z.getFormState()),
        l = (0, r.e7)([S.Z], () => S.Z.getSection()),
        a = (0, r.e7)([j.Z], () => j.Z.theme),
        s = (0, b.Ll)(),
        o = (0, x.C7)(e),
        c = (0, x.Xb)(e),
        {
            canManageChannels: d,
            canManageRoles: u,
            canManageWebhooks: h,
            canUnlinkChannel: g,
        } = (0, r.cj)([Z.Z], () => ({
            canManageChannels: Z.Z.can(L.Plq.MANAGE_CHANNELS, e),
            canManageRoles: null != e && Z.Z.can(L.Plq.MANAGE_ROLES, e),
            canManageWebhooks: null != e && Z.Z.can(L.Plq.MANAGE_WEBHOOKS, e),
            canUnlinkChannel: (0, p.C)(e, Z.Z),
        })),
        m = (0, r.e7)([O.Z], () => O.Z.getChannel(null == e ? void 0 : e.parent_id));
    return (0, i.jsx)(k, {
        channel: e,
        category: m,
        canManageChannels: (null == e ? void 0 : e.isThread()) ? o : d,
        canDeleteChannels: (null == e ? void 0 : e.isThread()) ? c : d,
        canManageRoles: u,
        canManageWebhooks: h,
        canUnlinkChannel: g,
        formState: n,
        theme: a,
        sidebarTheme: s,
        section: l,
        analyticsLocation: t,
    });
}
