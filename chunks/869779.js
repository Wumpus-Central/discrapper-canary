n.r(t), n.d(t, { default: () => B });
var i = n(54381),
    l = n(473749),
    r = n(442837),
    s = n(481060),
    a = n(570140),
    o = n(787014),
    c = n(37234),
    d = n(503089),
    u = n(493544),
    h = n(367907),
    g = n(933557),
    p = n(471445),
    m = n(351123),
    f = n(685929),
    b = n(984802),
    x = n(665906),
    j = n(210887),
    v = n(131704),
    y = n(533947),
    C = n(277053),
    S = n(388610),
    N = n(592125),
    O = n(496675),
    Z = n(699516),
    E = n(594174),
    w = n(585483),
    T = n(787263),
    _ = n(975316),
    R = n(428813),
    P = n(2147),
    I = n(856606),
    L = n(981631),
    M = n(388032),
    A = n(181060);
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
        a.Z.wait(() => (0, o.xv)());
    }
    componentDidUpdate(e) {
        let { formState: t, section: n } = e,
            {
                formState: i,
                section: l,
                canManageRoles: r,
                canManageChannels: s,
                canManageWebhooks: a,
                canUnlinkChannel: o,
            } = this.props;
        (s || r || a || o) &&
        (i !== L.QZA.CLOSED || i === t) &&
        (r || l !== L.CoT.PERMISSIONS) &&
        (a || o || l !== L.CoT.INTEGRATIONS)
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
            canManageRoles: a,
            canManageChannels: h,
            canDeleteChannels: f,
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
                              canDeleteChannels: a,
                              canManageWebhooks: d,
                              canUnlinkChannel: h,
                          } = e,
                          f = (0, p.KS)(t),
                          { GUILD_CATEGORY: b } = L.d4z,
                          x = v.Ec.has(t.type),
                          j =
                              t.type === b
                                  ? M.intl.string(M.t.ifbXnL)
                                  : x
                                    ? t.isForumPost()
                                        ? M.intl.string(M.t.nEOg1N)
                                        : M.intl.string(M.t.H7vTe2)
                                    : M.intl.string(M.t["8D8Rsb"]);
                      return [
                          {
                              section: u.ID.HEADER,
                              label:
                                  null != t
                                      ? (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                null != f
                                                    ? (0, i.jsx)(f, {
                                                          size: "xxs",
                                                          color: "currentColor",
                                                          className: A.channelIcon,
                                                      })
                                                    : null,
                                                (0, g.F6)(t, E.default, Z.Z),
                                                null != n
                                                    ? (0, i.jsx)(s.Text, {
                                                          tag: "span",
                                                          variant: "text-xs/semibold",
                                                          color: "header-secondary",
                                                          lineClamp: 1,
                                                          className: A.category,
                                                          children: (0, g.F6)(n, E.default, Z.Z),
                                                      })
                                                    : null,
                                            ],
                                        })
                                      : M.intl.string(M.t.XPDhcc),
                          },
                          {
                              section: L.CoT.OVERVIEW,
                              label: M.intl.string(M.t["/dp6yY"]),
                              ariaLabel: M.intl.string(M.t["/dp6yY"]),
                              element: P.Z,
                              notice: {
                                  element: P.G,
                                  stores: [S.Z],
                              },
                              predicate: () => !t.isModeratorReportChannel(),
                          },
                          {
                              section: L.CoT.PERMISSIONS,
                              label: M.intl.string(M.t.xrmhRX),
                              element: m.Z,
                              notice: {
                                  element: I.n,
                                  stores: [C.Z],
                              },
                              predicate: () => l && !x,
                          },
                          {
                              section: L.CoT.INSTANT_INVITES,
                              label: M.intl.string(M.t["9F90ic"]),
                              element: R.Z,
                              type: u.bT.CUSTOM,
                              predicate: () => t.type !== b && r && !x && !t.isModeratorReportChannel(),
                          },
                          {
                              section: L.CoT.INTEGRATIONS,
                              label: M.intl.string(M.t.s69NLF),
                              ariaLabel: M.intl.string(M.t.s69NLF),
                              element: _.Z,
                              notice: {
                                  stores: [y.Z],
                                  element: _.B,
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
                              icon: (0, i.jsx)(s.XHJ, {
                                  size: "xs",
                                  color: "currentColor",
                              }),
                              variant: "destructive",
                              predicate: () => a && !t.isModeratorReportChannel(),
                          },
                      ];
                  })({
                      channel: l,
                      category: r,
                      canManageRoles: a,
                      canManageChannels: h,
                      canDeleteChannels: f,
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
        s = (0, r.e7)([j.Z], () => j.Z.theme),
        a = (0, b.Ll)(),
        o = (0, x.C7)(e),
        c = (0, x.Xb)(e),
        {
            canManageChannels: d,
            canManageRoles: u,
            canManageWebhooks: h,
            canUnlinkChannel: g,
        } = (0, r.cj)([O.Z], () => ({
            canManageChannels: O.Z.can(L.Plq.MANAGE_CHANNELS, e),
            canManageRoles: null != e && O.Z.can(L.Plq.MANAGE_ROLES, e),
            canManageWebhooks: null != e && O.Z.can(L.Plq.MANAGE_WEBHOOKS, e),
            canUnlinkChannel: (0, f.C)(e, O.Z),
        })),
        p = (0, r.e7)([N.Z], () => N.Z.getChannel(null == e ? void 0 : e.parent_id));
    return (0, i.jsx)(k, {
        channel: e,
        category: p,
        canManageChannels: (null == e ? void 0 : e.isThread()) ? o : d,
        canDeleteChannels: (null == e ? void 0 : e.isThread()) ? c : d,
        canManageRoles: u,
        canManageWebhooks: h,
        canUnlinkChannel: g,
        formState: n,
        theme: s,
        sidebarTheme: a,
        section: l,
        analyticsLocation: t,
    });
}
