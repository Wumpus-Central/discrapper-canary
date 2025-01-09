n.r(t),
    n.d(t, {
        default: function () {
            return k;
        }
    });
var i = n(200651),
    l = n(192379),
    s = n(442837),
    r = n(481060),
    a = n(570140),
    o = n(787014),
    c = n(37234),
    d = n(503089),
    u = n(493544),
    h = n(367907),
    m = n(933557),
    g = n(471445),
    p = n(351123),
    x = n(685929),
    f = n(665906),
    v = n(210887),
    C = n(131704),
    j = n(533947),
    b = n(277053),
    T = n(388610),
    N = n(592125),
    S = n(496675),
    Z = n(699516),
    E = n(594174),
    y = n(585483),
    I = n(787263),
    R = n(975316),
    w = n(428813),
    L = n(2147),
    _ = n(856606),
    A = n(981631),
    M = n(388032),
    B = n(816568);
function D(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    h.ZP.trackWithMetadata(A.rMx.SETTINGS_PANE_VIEWED, {
        settings_type: 'channel',
        origin_pane: t,
        destination_pane: e,
        location: n
    });
}
class P extends l.PureComponent {
    componentDidMount() {
        D(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        a.Z.wait(() => (0, o.xv)());
    }
    componentDidUpdate(e) {
        let { formState: t, section: n } = e,
            { formState: i, section: l, canManageRoles: s, canManageChannels: r, canManageWebhooks: a, canUnlinkChannel: o } = this.props;
        (r || s || a || o) && (i !== A.QZA.CLOSED || i === t) && (s || l !== A.CoT.PERMISSIONS) && (a || o || l !== A.CoT.INTEGRATIONS) ? l !== n && D(l, n) : (0, c.xf)();
    }
    render() {
        let { theme: e, sidebarTheme: t, section: n, channel: l, category: s, canManageRoles: a, canManageChannels: h, canDeleteChannels: x, canManageWebhooks: f, canUnlinkChannel: v } = this.props;
        return null == l
            ? null
            : (0, i.jsx)(d.ZP, {
                  theme: e,
                  sidebarTheme: t,
                  section: null != n ? n : A.CoT.OVERVIEW,
                  onSetSection: o.zc,
                  onClose: c.xf,
                  sections: (function (e) {
                      let { channel: t, category: n, canManageRoles: l, canManageChannels: s, canDeleteChannels: a, canManageWebhooks: d, canUnlinkChannel: h } = e,
                          x = (0, g.KS)(t),
                          { GUILD_CATEGORY: f } = A.d4z,
                          v = C.Ec.has(t.type),
                          N = t.type === f ? M.intl.string(M.t.ifbXnJ) : v ? (t.isForumPost() ? M.intl.string(M.t.nEOg1N) : M.intl.string(M.t.H7vTe3)) : M.intl.string(M.t['8D8Rsb']);
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
                                                          className: B.channelIcon
                                                      })
                                                    : null,
                                                (0, m.F6)(t, E.default, Z.Z),
                                                null != n
                                                    ? (0, i.jsx)(r.Text, {
                                                          tag: 'span',
                                                          variant: 'text-xs/semibold',
                                                          color: 'header-secondary',
                                                          lineClamp: 1,
                                                          className: B.category,
                                                          children: (0, m.F6)(n, E.default, Z.Z)
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
                              element: L.Z,
                              notice: {
                                  element: L.G,
                                  stores: [T.Z]
                              }
                          },
                          {
                              section: A.CoT.PERMISSIONS,
                              label: M.intl.string(M.t.xrmhRU),
                              element: p.Z,
                              notice: {
                                  element: _.n,
                                  stores: [b.Z]
                              },
                              predicate: () => l && !v
                          },
                          {
                              section: A.CoT.INSTANT_INVITES,
                              label: M.intl.string(M.t['9F90iY']),
                              element: w.Z,
                              type: u.bT.CUSTOM,
                              predicate: () => t.type !== f && s && !v
                          },
                          {
                              section: A.CoT.INTEGRATIONS,
                              label: M.intl.string(M.t.s69NLC),
                              ariaLabel: M.intl.string(M.t.s69NLC),
                              element: R.Z,
                              notice: {
                                  stores: [j.Z],
                                  element: R.B
                              },
                              predicate: () => (!!d || !!h) && C.Ti.has(t.type)
                          },
                          { section: u.ID.DIVIDER },
                          {
                              section: A.CoT.DELETE,
                              onClick() {
                                  (0, I.w)(t, function () {
                                      y.S.subscribeOnce(A.CkL.LAYER_POP_COMPLETE, () => {
                                          (0, o.zz)(t.id);
                                      }),
                                          (0, c.xf)();
                                  });
                              },
                              label: N,
                              ariaLabel: N,
                              icon: (0, i.jsx)(r.TrashIcon, {
                                  size: 'xs',
                                  color: 'currentColor'
                              }),
                              predicate: () => a
                          }
                      ];
                  })({
                      channel: l,
                      category: s,
                      canManageRoles: a,
                      canManageChannels: h,
                      canDeleteChannels: x,
                      canManageWebhooks: f,
                      canUnlinkChannel: v
                  })
              });
    }
}
function k() {
    let { channel: e, analyticsLocation: t } = (0, s.cj)([T.Z], () => T.Z.getProps()),
        n = (0, s.e7)([T.Z], () => T.Z.getFormState()),
        l = (0, s.e7)([T.Z], () => T.Z.getSection()),
        r = (0, s.e7)([v.Z], () => v.Z.theme),
        a = (0, s.e7)([v.Z], () => (v.Z.darkSidebar ? A.BRd.DARK : void 0)),
        o = (0, f.C7)(e),
        c = (0, f.Xb)(e),
        {
            canManageChannels: d,
            canManageRoles: u,
            canManageWebhooks: h,
            canUnlinkChannel: m
        } = (0, s.cj)([S.Z], () => ({
            canManageChannels: S.Z.can(A.Plq.MANAGE_CHANNELS, e),
            canManageRoles: null != e && S.Z.can(A.Plq.MANAGE_ROLES, e),
            canManageWebhooks: null != e && S.Z.can(A.Plq.MANAGE_WEBHOOKS, e),
            canUnlinkChannel: (0, x.C)(e, S.Z)
        })),
        g = (0, s.e7)([N.Z], () => N.Z.getChannel(null == e ? void 0 : e.parent_id));
    return (0, i.jsx)(P, {
        channel: e,
        category: g,
        canManageChannels: (null == e ? void 0 : e.isThread()) ? o : d,
        canDeleteChannels: (null == e ? void 0 : e.isThread()) ? c : d,
        canManageRoles: u,
        canManageWebhooks: h,
        canUnlinkChannel: m,
        formState: n,
        theme: r,
        sidebarTheme: a,
        section: l,
        analyticsLocation: t
    });
}
