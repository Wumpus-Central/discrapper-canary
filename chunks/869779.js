n.r(t), n.d(t, { default: () => k });
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
    g = n(933557),
    m = n(471445),
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
    O = n(699516),
    Z = n(594174),
    w = n(585483),
    T = n(787263),
    E = n(975316),
    R = n(428813),
    _ = n(2147),
    I = n(856606),
    P = n(981631),
    D = n(388032),
    L = n(511740);
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    h.ZP.trackWithMetadata(P.rMx.SETTINGS_PANE_VIEWED, {
        settings_type: 'channel',
        origin_pane: t,
        destination_pane: e,
        location: n
    });
}
class M extends l.PureComponent {
    componentDidMount() {
        A(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        a.Z.wait(() => (0, o.xv)());
    }
    componentDidUpdate(e) {
        let { formState: t, section: n } = e,
            { formState: i, section: l, canManageRoles: r, canManageChannels: s, canManageWebhooks: a, canUnlinkChannel: o } = this.props;
        (s || r || a || o) && (i !== P.QZA.CLOSED || i === t) && (r || l !== P.CoT.PERMISSIONS) && (a || o || l !== P.CoT.INTEGRATIONS) ? l !== n && A(l, n) : (0, c.xf)();
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
                          f = (0, m.KS)(t),
                          { GUILD_CATEGORY: x } = P.d4z,
                          j = b.Ec.has(t.type),
                          N = t.type === x ? D.intl.string(D.t.ifbXnJ) : j ? (t.isForumPost() ? D.intl.string(D.t.nEOg1N) : D.intl.string(D.t.H7vTe3)) : D.intl.string(D.t['8D8Rsb']);
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
                                                (0, g.F6)(t, Z.default, O.Z),
                                                null != n
                                                    ? (0, i.jsx)(s.Text, {
                                                          tag: 'span',
                                                          variant: 'text-xs/semibold',
                                                          color: 'header-secondary',
                                                          lineClamp: 1,
                                                          className: L.category,
                                                          children: (0, g.F6)(n, Z.default, O.Z)
                                                      })
                                                    : null
                                            ]
                                        })
                                      : D.intl.string(D.t.XPDhcX)
                          },
                          {
                              section: P.CoT.OVERVIEW,
                              label: D.intl.string(D.t['/dp6yc']),
                              ariaLabel: D.intl.string(D.t['/dp6yc']),
                              element: _.Z,
                              notice: {
                                  element: _.G,
                                  stores: [C.Z]
                              }
                          },
                          {
                              section: P.CoT.PERMISSIONS,
                              label: D.intl.string(D.t.xrmhRU),
                              element: p.Z,
                              notice: {
                                  element: I.n,
                                  stores: [y.Z]
                              },
                              predicate: () => l && !j
                          },
                          {
                              section: P.CoT.INSTANT_INVITES,
                              label: D.intl.string(D.t['9F90iY']),
                              element: R.Z,
                              type: u.bT.CUSTOM,
                              predicate: () => t.type !== x && r && !j
                          },
                          {
                              section: P.CoT.INTEGRATIONS,
                              label: D.intl.string(D.t.s69NLC),
                              ariaLabel: D.intl.string(D.t.s69NLC),
                              element: E.Z,
                              notice: {
                                  stores: [v.Z],
                                  element: E.B
                              },
                              predicate: () => (!!d || !!h) && b.Ti.has(t.type)
                          },
                          { section: u.ID.DIVIDER },
                          {
                              section: P.CoT.DELETE,
                              onClick() {
                                  (0, T.w)(t, function () {
                                      w.S.subscribeOnce(P.CkL.LAYER_POP_COMPLETE, () => {
                                          (0, o.zz)(t.id);
                                      }),
                                          (0, c.xf)();
                                  });
                              },
                              label: N,
                              ariaLabel: N,
                              icon: (0, i.jsx)(s.XHJ, {
                                  size: 'xs',
                                  color: 'currentColor'
                              }),
                              predicate: () => a
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
function k() {
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
            canUnlinkChannel: g
        } = (0, r.cj)([S.Z], () => ({
            canManageChannels: S.Z.can(P.Plq.MANAGE_CHANNELS, e),
            canManageRoles: null != e && S.Z.can(P.Plq.MANAGE_ROLES, e),
            canManageWebhooks: null != e && S.Z.can(P.Plq.MANAGE_WEBHOOKS, e),
            canUnlinkChannel: (0, f.C)(e, S.Z)
        })),
        m = (0, r.e7)([N.Z], () => N.Z.getChannel(null == e ? void 0 : e.parent_id));
    return (0, i.jsx)(M, {
        channel: e,
        category: m,
        canManageChannels: (null == e ? void 0 : e.isThread()) ? o : d,
        canDeleteChannels: (null == e ? void 0 : e.isThread()) ? c : d,
        canManageRoles: u,
        canManageWebhooks: h,
        canUnlinkChannel: g,
        formState: n,
        theme: s,
        sidebarTheme: a,
        section: l,
        analyticsLocation: t
    });
}
