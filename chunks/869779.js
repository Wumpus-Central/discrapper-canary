(n.r(t), n.d(t, { default: () => B }));
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
    x = n(984802),
    j = n(665906),
    b = n(210887),
    v = n(131704),
    y = n(533947),
    C = n(277053),
    N = n(388610),
    S = n(592125),
    E = n(496675),
    O = n(699516),
    T = n(594174),
    w = n(585483),
    Z = n(787263),
    R = n(975316),
    I = n(428813),
    _ = n(2147),
    P = n(856606),
    A = n(981631),
    L = n(388032),
    D = n(511740);
function M(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    h.ZP.trackWithMetadata(A.rMx.SETTINGS_PANE_VIEWED, {
        settings_type: 'channel',
        origin_pane: t,
        destination_pane: e,
        location: n
    });
}
class k extends l.PureComponent {
    componentDidMount() {
        M(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        a.Z.wait(() => (0, o.xv)());
    }
    componentDidUpdate(e) {
        let { formState: t, section: n } = e,
            { formState: i, section: l, canManageRoles: r, canManageChannels: s, canManageWebhooks: a, canUnlinkChannel: o } = this.props;
        (s || r || a || o) && (i !== A.QZA.CLOSED || i === t) && (r || l !== A.CoT.PERMISSIONS) && (a || o || l !== A.CoT.INTEGRATIONS) ? l !== n && M(l, n) : (0, c.xf)();
    }
    render() {
        let { theme: e, sidebarTheme: t, section: n, channel: l, category: r, canManageRoles: a, canManageChannels: h, canDeleteChannels: f, canManageWebhooks: x, canUnlinkChannel: j } = this.props;
        return null == l
            ? null
            : (0, i.jsx)(d.ZP, {
                  theme: e,
                  sidebarTheme: t,
                  section: null != n ? n : A.CoT.OVERVIEW,
                  onSetSection: o.zc,
                  onClose: c.xf,
                  sections: (function (e) {
                      let { channel: t, category: n, canManageRoles: l, canManageChannels: r, canDeleteChannels: a, canManageWebhooks: d, canUnlinkChannel: h } = e,
                          f = (0, g.KS)(t),
                          { GUILD_CATEGORY: x } = A.d4z,
                          j = v.Ec.has(t.type),
                          b = t.type === x ? L.intl.string(L.t.ifbXnJ) : j ? (t.isForumPost() ? L.intl.string(L.t.nEOg1N) : L.intl.string(L.t.H7vTe3)) : L.intl.string(L.t['8D8Rsb']);
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
                                                          className: D.channelIcon
                                                      })
                                                    : null,
                                                (0, m.F6)(t, T.default, O.Z),
                                                null != n
                                                    ? (0, i.jsx)(s.Text, {
                                                          tag: 'span',
                                                          variant: 'text-xs/semibold',
                                                          color: 'header-secondary',
                                                          lineClamp: 1,
                                                          className: D.category,
                                                          children: (0, m.F6)(n, T.default, O.Z)
                                                      })
                                                    : null
                                            ]
                                        })
                                      : L.intl.string(L.t.XPDhcX)
                          },
                          {
                              section: A.CoT.OVERVIEW,
                              label: L.intl.string(L.t['/dp6yc']),
                              ariaLabel: L.intl.string(L.t['/dp6yc']),
                              element: _.Z,
                              notice: {
                                  element: _.G,
                                  stores: [N.Z]
                              },
                              predicate: () => !t.isModeratorReportChannel()
                          },
                          {
                              section: A.CoT.PERMISSIONS,
                              label: L.intl.string(L.t.xrmhRU),
                              element: p.Z,
                              notice: {
                                  element: P.n,
                                  stores: [C.Z]
                              },
                              predicate: () => l && !j
                          },
                          {
                              section: A.CoT.INSTANT_INVITES,
                              label: L.intl.string(L.t['9F90iY']),
                              element: I.Z,
                              type: u.bT.CUSTOM,
                              predicate: () => t.type !== x && r && !j && !t.isModeratorReportChannel()
                          },
                          {
                              section: A.CoT.INTEGRATIONS,
                              label: L.intl.string(L.t.s69NLC),
                              ariaLabel: L.intl.string(L.t.s69NLC),
                              element: R.Z,
                              notice: {
                                  stores: [y.Z],
                                  element: R.B
                              },
                              predicate: () => !((!d && !h) || t.isModeratorReportChannel()) && v.Ti.has(t.type)
                          },
                          { section: u.ID.DIVIDER },
                          {
                              section: A.CoT.DELETE,
                              onClick() {
                                  (0, Z.w)(t, function () {
                                      (w.S.subscribeOnce(A.CkL.LAYER_POP_COMPLETE, () => {
                                          (0, o.zz)(t.id);
                                      }),
                                          (0, c.xf)());
                                  });
                              },
                              label: b,
                              ariaLabel: b,
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
function B() {
    let { channel: e, analyticsLocation: t } = (0, r.cj)([N.Z], () => N.Z.getProps()),
        n = (0, r.e7)([N.Z], () => N.Z.getFormState()),
        l = (0, r.e7)([N.Z], () => N.Z.getSection()),
        s = (0, r.e7)([b.Z], () => b.Z.theme),
        a = (0, x.Ll)(),
        o = (0, j.C7)(e),
        c = (0, j.Xb)(e),
        {
            canManageChannels: d,
            canManageRoles: u,
            canManageWebhooks: h,
            canUnlinkChannel: m
        } = (0, r.cj)([E.Z], () => ({
            canManageChannels: E.Z.can(A.Plq.MANAGE_CHANNELS, e),
            canManageRoles: null != e && E.Z.can(A.Plq.MANAGE_ROLES, e),
            canManageWebhooks: null != e && E.Z.can(A.Plq.MANAGE_WEBHOOKS, e),
            canUnlinkChannel: (0, f.C)(e, E.Z)
        })),
        g = (0, r.e7)([S.Z], () => S.Z.getChannel(null == e ? void 0 : e.parent_id));
    return (0, i.jsx)(k, {
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
