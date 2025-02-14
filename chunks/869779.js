n.r(t), n.d(t, { default: () => O });
var i = n(200651),
    l = n(192379),
    s = n(442837),
    a = n(481060),
    r = n(570140),
    o = n(787014),
    d = n(37234),
    c = n(503089),
    u = n(493544),
    h = n(367907),
    m = n(933557),
    g = n(471445),
    p = n(351123),
    x = n(685929),
    f = n(665906),
    j = n(210887),
    v = n(131704),
    C = n(533947),
    N = n(277053),
    b = n(388610),
    Z = n(592125),
    T = n(496675),
    S = n(699516),
    E = n(594174),
    R = n(585483),
    y = n(787263),
    _ = n(975316),
    w = n(428813),
    I = n(2147),
    L = n(856606),
    A = n(981631),
    M = n(388032),
    D = n(375703);
function P(e) {
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
        P(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        r.Z.wait(() => (0, o.xv)());
    }
    componentDidUpdate(e) {
        let { formState: t, section: n } = e,
            { formState: i, section: l, canManageRoles: s, canManageChannels: a, canManageWebhooks: r, canUnlinkChannel: o } = this.props;
        (a || s || r || o) && (i !== A.QZA.CLOSED || i === t) && (s || l !== A.CoT.PERMISSIONS) && (r || o || l !== A.CoT.INTEGRATIONS) ? l !== n && P(l, n) : (0, d.xf)();
    }
    render() {
        let { theme: e, sidebarTheme: t, section: n, channel: l, category: s, canManageRoles: r, canManageChannels: h, canDeleteChannels: x, canManageWebhooks: f, canUnlinkChannel: j } = this.props;
        return null == l
            ? null
            : (0, i.jsx)(c.ZP, {
                  theme: e,
                  sidebarTheme: t,
                  section: null != n ? n : A.CoT.OVERVIEW,
                  onSetSection: o.zc,
                  onClose: d.xf,
                  sections: (function (e) {
                      let { channel: t, category: n, canManageRoles: l, canManageChannels: s, canDeleteChannels: r, canManageWebhooks: c, canUnlinkChannel: h } = e,
                          x = (0, g.KS)(t),
                          { GUILD_CATEGORY: f } = A.d4z,
                          j = v.Ec.has(t.type),
                          Z = t.type === f ? M.intl.string(M.t.ifbXnJ) : j ? (t.isForumPost() ? M.intl.string(M.t.nEOg1N) : M.intl.string(M.t.H7vTe3)) : M.intl.string(M.t['8D8Rsb']);
                      return [
                          {
                              section: u.ID.HEADER,
                              label:
                                  null != t
                                      ? (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                null != x
                                                    ? (0, i.jsx)(x, {
                                                          size: 'xxs',
                                                          color: 'currentColor',
                                                          className: D.channelIcon
                                                      })
                                                    : null,
                                                (0, m.F6)(t, E.default, S.Z),
                                                null != n
                                                    ? (0, i.jsx)(a.Text, {
                                                          tag: 'span',
                                                          variant: 'text-xs/semibold',
                                                          color: 'header-secondary',
                                                          lineClamp: 1,
                                                          className: D.category,
                                                          children: (0, m.F6)(n, E.default, S.Z)
                                                      })
                                                    : null
                                            ]
                                        })
                                      : M.intl.string(M.t.XPDhcX)
                          },
                          {
                              section: A.CoT.OVERVIEW,
                              label: M.intl.string(M.t['/dp6yc']),
                              ariaLabel: M.intl.string(M.t['/dp6yc']),
                              element: I.Z,
                              notice: {
                                  element: I.G,
                                  stores: [b.Z]
                              }
                          },
                          {
                              section: A.CoT.PERMISSIONS,
                              label: M.intl.string(M.t.xrmhRU),
                              element: p.Z,
                              notice: {
                                  element: L.n,
                                  stores: [N.Z]
                              },
                              predicate: () => l && !j
                          },
                          {
                              section: A.CoT.INSTANT_INVITES,
                              label: M.intl.string(M.t['9F90iY']),
                              element: w.Z,
                              type: u.bT.CUSTOM,
                              predicate: () => t.type !== f && s && !j
                          },
                          {
                              section: A.CoT.INTEGRATIONS,
                              label: M.intl.string(M.t.s69NLC),
                              ariaLabel: M.intl.string(M.t.s69NLC),
                              element: _.Z,
                              notice: {
                                  stores: [C.Z],
                                  element: _.B
                              },
                              predicate: () => (!!c || !!h) && v.Ti.has(t.type)
                          },
                          { section: u.ID.DIVIDER },
                          {
                              section: A.CoT.DELETE,
                              onClick() {
                                  (0, y.w)(t, function () {
                                      R.S.subscribeOnce(A.CkL.LAYER_POP_COMPLETE, () => {
                                          (0, o.zz)(t.id);
                                      }),
                                          (0, d.xf)();
                                  });
                              },
                              label: Z,
                              ariaLabel: Z,
                              icon: (0, i.jsx)(a.XHJ, {
                                  size: 'xs',
                                  color: 'currentColor'
                              }),
                              predicate: () => r
                          }
                      ];
                  })({
                      channel: l,
                      category: s,
                      canManageRoles: r,
                      canManageChannels: h,
                      canDeleteChannels: x,
                      canManageWebhooks: f,
                      canUnlinkChannel: j
                  })
              });
    }
}
function O() {
    let { channel: e, analyticsLocation: t } = (0, s.cj)([b.Z], () => b.Z.getProps()),
        n = (0, s.e7)([b.Z], () => b.Z.getFormState()),
        l = (0, s.e7)([b.Z], () => b.Z.getSection()),
        a = (0, s.e7)([j.Z], () => j.Z.theme),
        r = (0, s.e7)([j.Z], () => (j.Z.darkSidebar ? A.BRd.DARK : void 0)),
        o = (0, f.C7)(e),
        d = (0, f.Xb)(e),
        {
            canManageChannels: c,
            canManageRoles: u,
            canManageWebhooks: h,
            canUnlinkChannel: m
        } = (0, s.cj)([T.Z], () => ({
            canManageChannels: T.Z.can(A.Plq.MANAGE_CHANNELS, e),
            canManageRoles: null != e && T.Z.can(A.Plq.MANAGE_ROLES, e),
            canManageWebhooks: null != e && T.Z.can(A.Plq.MANAGE_WEBHOOKS, e),
            canUnlinkChannel: (0, x.C)(e, T.Z)
        })),
        g = (0, s.e7)([Z.Z], () => Z.Z.getChannel(null == e ? void 0 : e.parent_id));
    return (0, i.jsx)(k, {
        channel: e,
        category: g,
        canManageChannels: (null == e ? void 0 : e.isThread()) ? o : c,
        canDeleteChannels: (null == e ? void 0 : e.isThread()) ? d : c,
        canManageRoles: u,
        canManageWebhooks: h,
        canUnlinkChannel: m,
        formState: n,
        theme: a,
        sidebarTheme: r,
        section: l,
        analyticsLocation: t
    });
}
