(n.r(t), n.d(t, { default: () => M }));
var i = n(255367),
    l = n(73800),
    r = n(442837),
    s = n(481060),
    a = n(570140),
    o = n(787014),
    c = n(37234),
    d = n(503089),
    u = n(493544),
    h = n(367907),
    m = n(933557),
    g = n(471445),
    p = n(351123),
    f = n(685929),
    x = n(665906),
    j = n(210887),
    b = n(131704),
    v = n(533947),
    y = n(277053),
    C = n(388610),
    N = n(592125),
    S = n(496675),
    E = n(699516),
    O = n(594174),
    T = n(585483),
    w = n(787263),
    Z = n(975316),
    R = n(428813),
    I = n(2147),
    _ = n(856606),
    P = n(981631),
    A = n(388032),
    L = n(511740);
function k(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    h.ZP.trackWithMetadata(P.rMx.SETTINGS_PANE_VIEWED, {
        settings_type: 'channel',
        origin_pane: t,
        destination_pane: e,
        location: n
    });
}
class D extends l.PureComponent {
    componentDidMount() {
        k(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        a.Z.wait(() => (0, o.xv)());
    }
    componentDidUpdate(e) {
        let { formState: t, section: n } = e,
            { formState: i, section: l, canManageRoles: r, canManageChannels: s, canManageWebhooks: a, canUnlinkChannel: o } = this.props;
        (s || r || a || o) && (i !== P.QZA.CLOSED || i === t) && (r || l !== P.CoT.PERMISSIONS) && (a || o || l !== P.CoT.INTEGRATIONS) ? l !== n && k(l, n) : (0, c.xf)();
    }
    render() {
        let { theme: e, sidebarTheme: t, section: n, channel: l, category: r, canManageRoles: a, canManageChannels: h, canDeleteChannels: f, canManageWebhooks: x, canUnlinkChannel: j } = this.props;
        return null == l
            ? null
            : (0, i.jsx)(d.ZP, {
                  theme: e,
                  sidebarTheme: t,
                  section: null != n ? n : P.CoT.OVERVIEW,
                  onSetSection: o.zc,
                  onClose: c.xf,
                  sections: (function (e) {
                      let { channel: t, category: n, canManageRoles: l, canManageChannels: r, canDeleteChannels: a, canManageWebhooks: d, canUnlinkChannel: h } = e,
                          f = (0, g.KS)(t),
                          { GUILD_CATEGORY: x } = P.d4z,
                          j = b.Ec.has(t.type),
                          N = t.type === x ? A.intl.string(A.t.ifbXnJ) : j ? (t.isForumPost() ? A.intl.string(A.t.nEOg1N) : A.intl.string(A.t.H7vTe3)) : A.intl.string(A.t['8D8Rsb']);
                      return [
                          {
                              section: u.ID.HEADER,
                              label:
                                  null != t
                                      ? (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                null != f
                                                    ? (0, i.jsx)(f, {
                                                          size: 'xxs',
                                                          color: 'currentColor',
                                                          className: L.channelIcon
                                                      })
                                                    : null,
                                                (0, m.F6)(t, O.default, E.Z),
                                                null != n
                                                    ? (0, i.jsx)(s.Text, {
                                                          tag: 'span',
                                                          variant: 'text-xs/semibold',
                                                          color: 'header-secondary',
                                                          lineClamp: 1,
                                                          className: L.category,
                                                          children: (0, m.F6)(n, O.default, E.Z)
                                                      })
                                                    : null
                                            ]
                                        })
                                      : A.intl.string(A.t.XPDhcX)
                          },
                          {
                              section: P.CoT.OVERVIEW,
                              label: A.intl.string(A.t['/dp6yc']),
                              ariaLabel: A.intl.string(A.t['/dp6yc']),
                              element: I.Z,
                              notice: {
                                  element: I.G,
                                  stores: [C.Z]
                              },
                              predicate: () => !t.isModeratorReportChannel()
                          },
                          {
                              section: P.CoT.PERMISSIONS,
                              label: A.intl.string(A.t.xrmhRU),
                              element: p.Z,
                              notice: {
                                  element: _.n,
                                  stores: [y.Z]
                              },
                              predicate: () => l && !j
                          },
                          {
                              section: P.CoT.INSTANT_INVITES,
                              label: A.intl.string(A.t['9F90iY']),
                              element: R.Z,
                              type: u.bT.CUSTOM,
                              predicate: () => t.type !== x && r && !j && !t.isModeratorReportChannel()
                          },
                          {
                              section: P.CoT.INTEGRATIONS,
                              label: A.intl.string(A.t.s69NLC),
                              ariaLabel: A.intl.string(A.t.s69NLC),
                              element: Z.Z,
                              notice: {
                                  stores: [v.Z],
                                  element: Z.B
                              },
                              predicate: () => !((!d && !h) || t.isModeratorReportChannel()) && b.Ti.has(t.type)
                          },
                          { section: u.ID.DIVIDER },
                          {
                              section: P.CoT.DELETE,
                              onClick() {
                                  (0, w.w)(t, function () {
                                      (T.S.subscribeOnce(P.CkL.LAYER_POP_COMPLETE, () => {
                                          (0, o.zz)(t.id);
                                      }),
                                          (0, c.xf)());
                                  });
                              },
                              label: N,
                              ariaLabel: N,
                              icon: (0, i.jsx)(s.XHJ, {
                                  size: 'xs',
                                  color: 'currentColor'
                              }),
                              variant: 'destructive',
                              predicate: () => a && !t.isModeratorReportChannel()
                          }
                      ];
                  })({
                      channel: l,
                      category: r,
                      canManageRoles: a,
                      canManageChannels: h,
                      canDeleteChannels: f,
                      canManageWebhooks: x,
                      canUnlinkChannel: j
                  })
              });
    }
}
function M() {
    let { channel: e, analyticsLocation: t } = (0, r.cj)([C.Z], () => C.Z.getProps()),
        n = (0, r.e7)([C.Z], () => C.Z.getFormState()),
        l = (0, r.e7)([C.Z], () => C.Z.getSection()),
        s = (0, r.e7)([j.Z], () => j.Z.theme),
        a = (0, r.e7)([j.Z], () => (j.Z.darkSidebar ? P.BRd.DARK : void 0)),
        o = (0, x.C7)(e),
        c = (0, x.Xb)(e),
        {
            canManageChannels: d,
            canManageRoles: u,
            canManageWebhooks: h,
            canUnlinkChannel: m
        } = (0, r.cj)([S.Z], () => ({
            canManageChannels: S.Z.can(P.Plq.MANAGE_CHANNELS, e),
            canManageRoles: null != e && S.Z.can(P.Plq.MANAGE_ROLES, e),
            canManageWebhooks: null != e && S.Z.can(P.Plq.MANAGE_WEBHOOKS, e),
            canUnlinkChannel: (0, f.C)(e, S.Z)
        })),
        g = (0, r.e7)([N.Z], () => N.Z.getChannel(null == e ? void 0 : e.parent_id));
    return (0, i.jsx)(D, {
        channel: e,
        category: g,
        canManageChannels: (null == e ? void 0 : e.isThread()) ? o : d,
        canDeleteChannels: (null == e ? void 0 : e.isThread()) ? c : d,
        canManageRoles: u,
        canManageWebhooks: h,
        canUnlinkChannel: m,
        formState: n,
        theme: s,
        sidebarTheme: a,
        section: l,
        analyticsLocation: t
    });
}
