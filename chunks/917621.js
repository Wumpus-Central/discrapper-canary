n.d(t, { Z: () => N }), n(388685), n(539854);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(914498),
    c = n(600164),
    u = n(424678),
    d = n(670188),
    p = n(237583),
    m = n(598077),
    f = n(63063),
    h = n(153066),
    g = n(51144),
    _ = n(620662),
    b = n(994339),
    x = n(503438),
    E = n(981631),
    y = n(616922),
    v = n(388032),
    C = n(638128);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e) {
    let { member: t, className: n, guildId: l, channelId: s, messageId: c, analyticsLocations: u } = e,
        p = i.useRef(null);
    return t.unknownUser
        ? (0, r.jsx)('div', {
              className: C.partyMember,
              children: (0, r.jsx)(o.qEK, {
                  src: t.user.getAvatarURL(l, (0, o.pxk)(o.EFr.SIZE_24)),
                  size: o.EFr.SIZE_24,
                  className: a()(C.partyAvatar, n),
                  'aria-label': t.user.username
              })
          })
        : (0, r.jsx)(d.Z, {
              targetElementRef: p,
              position: 'left',
              user: t.user,
              guildId: l,
              channelId: s,
              messageId: c,
              newAnalyticsLocations: u,
              children: (e) => {
                  var i;
                  return (0, r.jsx)(o.ua7, {
                      text: null != (i = t.nick) ? i : g.ZP.getName(t.user),
                      children: (i) =>
                          (0, r.jsx)(
                              o.P3F,
                              S(
                                  j(
                                      {
                                          innerRef: p,
                                          className: C.partyMemberKnown
                                      },
                                      i,
                                      e
                                  ),
                                  {
                                      children: (0, r.jsx)(o.qEK, {
                                          src: t.user.getAvatarURL(l, (0, o.pxk)(o.EFr.SIZE_24)),
                                          size: o.EFr.SIZE_24,
                                          className: a()(C.partyAvatar, n),
                                          'aria-label': t.user.username
                                      })
                                  }
                              )
                          )
                  });
              }
          });
}
class T extends i.PureComponent {
    isDeadInvite() {
        let { isPreview: e, message: t, activity: n, applicationId: r } = this.props;
        return !e && !(null != t && (0, b.Z)(n, t, r));
    }
    getPartySize() {
        let { activity: e } = this.props;
        return null == e || null == e.party || null == e.party.size || e.party.size.length < 2 ? [-1, -1] : e.party.size;
    }
    getActionableMode() {
        return [E.mFx.LISTEN, E.mFx].includes(this.props.activityActionType) || this.props.isPreview || this.canJoin() ? 'Actionable' : 'NotActionable';
    }
    isInParty() {
        let { activity: e, myPartyId: t, isPreview: n } = this.props;
        return !n && null != e && null != e.party && t === e.party.id;
    }
    isPartyFull() {
        let [e, t] = this.getPartySize();
        return e > -1 && t > 0 && e >= t;
    }
    hasPartySize() {
        let [e, t] = this.getPartySize();
        return e > -1 && t > -1;
    }
    isActionType(e) {
        return this.props.activityActionType === e;
    }
    isEmbeddedActivityApplication() {
        return (0, _.Z)(this.props.activity, E.xjy.EMBEDDED);
    }
    canJoin() {
        let { activity: e, isPreview: t, isGameLaunchable: n, isInBrowser: r, isSender: i } = this.props;
        return !!t || (!(i || this.isDeadInvite() || !this.isActionType(E.mFx.JOIN) || !(0, _.Z)(e, E.xjy.JOIN) || !this.hasPartySize() || this.isPartyFull() || this.isInParty()) && (!!this.isEmbeddedActivityApplication() || (!r && !!n)));
    }
    canSendInvite() {
        let { activity: e, isPreview: t } = this.props;
        return !!t || !(this.isDeadInvite() || !this.isActionType(E.mFx.JOIN_REQUEST) || !(0, _.Z)(e, E.xjy.JOIN) || !this.hasPartySize() || this.isPartyFull());
    }
    canSync() {
        let { activity: e, isPreview: t, isSyncable: n, isInBrowser: r } = this.props;
        return !!t || !((!this.isActionType(E.mFx.LISTEN) && !this.isActionType(E.mFx.WATCH)) || this.isDeadInvite() || !(0, _.Z)(e, E.xjy.SYNC) || r || !n || this.isInParty());
    }
    getHelpdeskArticleURL() {
        let { partyId: e } = this.props;
        return null != e && (0, y.Ps)(e) ? E.BhN.SPOTIFY_CONNECTION : E.BhN.RICH_PRESENCE_INTRODUCTION;
    }
    renderHeaderText() {
        let { activityActionType: e, name: t } = this.props;
        switch (e) {
            case E.mFx.LISTEN:
                return v.intl.formatToPlainString(v.t['/8czHx'], { name: t });
            case E.mFx.WATCH:
                return v.intl.formatToPlainString(v.t.BBJXVl, { name: t });
            case E.mFx.JOIN:
                return v.intl.string(v.t['hC/Ze3']);
            case E.mFx.JOIN_REQUEST:
            default:
                return v.intl.string(v.t.Ckxb6u);
        }
    }
    renderPartyStatus() {
        let { activityActionType: e, isGameLaunchable: t, isSyncable: n, isPreview: i, isInBrowser: l, name: a, activity: s } = this.props,
            [c, d] = this.getPartySize();
        if (this.isDeadInvite())
            switch (e) {
                case E.mFx.LISTEN:
                    return v.intl.string(v.t['84qx9v']);
                case E.mFx.WATCH:
                    return v.intl.string(v.t.B9kbnZ);
                case E.mFx.JOIN:
                case E.mFx.JOIN_REQUEST:
                default:
                    return v.intl.string(v.t['2Gbof3']);
            }
        return !l || i || this.isEmbeddedActivityApplication() || e !== E.mFx.JOIN
            ? this.isActionType(E.mFx.LISTEN) || this.isActionType(E.mFx.WATCH)
                ? null != s && null != s.details && null != s.state && (0, x.Z)(s)
                    ? [
                          (0, r.jsx)(
                              'div',
                              {
                                  className: C.details,
                                  children: (0, r.jsx)(o.eee, {
                                      className: C.textLink,
                                      onClick: this.handleOpenSpotifyTrack,
                                      children: s.details
                                  })
                              },
                              'details'
                          ),
                          (0, r.jsx)(
                              'div',
                              {
                                  className: C.state,
                                  children: v.intl.format(v.t.uU9le3, {
                                      artists: s.state,
                                      artistsHook: (e, t) =>
                                          null != s.state
                                              ? (0, r.jsx)(
                                                    u.Z,
                                                    {
                                                        artists: s.state,
                                                        linkClassName: C.textLink,
                                                        canOpen: null != s.sync_id,
                                                        onOpenSpotifyArtist: this.handleOpenSpotifyArtist
                                                    },
                                                    t
                                                )
                                              : null
                                  })
                              },
                              'state'
                          )
                      ]
                    : this.isActionType(E.mFx.LISTEN)
                      ? v.intl.string(v.t.gXYoq6)
                      : v.intl.string(v.t.eyKDl5)
                : this.isActionType(E.mFx.JOIN_REQUEST)
                  ? this.isPartyFull()
                      ? v.intl.string(v.t.jfrMtr)
                      : this.hasPartySize() && 0 !== d
                        ? v.intl.formatToPlainString(v.t.XWapnZ, { number: d - c })
                        : null
                  : this.isInParty()
                    ? v.intl.string(v.t.KC26NT)
                    : t || n || i || this.isEmbeddedActivityApplication()
                      ? this.isPartyFull()
                          ? v.intl.string(v.t.jfrMtr)
                          : this.hasPartySize() && 0 !== d
                            ? v.intl.formatToPlainString(v.t.XWapnZ, { number: d - c })
                            : null
                      : v.intl.formatToPlainString(v.t.SqJBnJ, { name: a })
            : v.intl.string(v.t.c3EWuL);
    }
    renderActionButton() {
        let { isInBrowser: e, isPreview: t, isGameLaunchable: n, isSender: i, partyId: l, activity: a, message: s, renderSpotifyJoinButton: c, renderCustomButton: u } = this.props,
            d = {
                className: C.actionButton,
                size: o.zxk.Sizes.SMALL
            },
            p = null != u ? u(d) : null;
        return null != p
            ? p
            : !this.isDeadInvite() && this.isActionType(E.mFx.LISTEN) && null != l && null != s && null != a && (0, y.Ps)(l)
              ? c(
                    S(j({}, d), {
                        activity: a,
                        user: s.author
                    })
                )
              : (0, r.jsx)(
                    o.zxk,
                    S(
                        j(
                            {},
                            d,
                            t || !e || this.isDeadInvite() || this.isEmbeddedActivityApplication()
                                ? this.canJoin()
                                    ? {
                                          children: v.intl.string(v.t.VJlc0d),
                                          onClick: this.handleJoin
                                      }
                                    : this.canSync()
                                      ? {
                                            children: v.intl.string(v.t.VJlc0d),
                                            onClick: this.handleSync
                                        }
                                      : this.canSendInvite()
                                        ? {
                                              children: v.intl.string(v.t['hC/Ze3']),
                                              onClick: this.handleInvite,
                                              disabled: i
                                          }
                                        : this.isInParty()
                                          ? {
                                                children: v.intl.string(v.t.KC26NT),
                                                disabled: !0
                                            }
                                          : {
                                                children: this.isActionType(E.mFx.JOIN_REQUEST) ? v.intl.string(v.t['hC/Ze3']) : v.intl.string(v.t.VJlc0d),
                                                disabled: !0
                                            }
                                : {
                                      children: v.intl.string(v.t.gUZonZ),
                                      onClick: this.handleDownloadApp
                                  }
                        ),
                        {
                            color: (e || n) && !this.isDeadInvite() ? o.zxk.Colors.GREEN : o.zxk.Colors.PRIMARY,
                            submitting: this.props.isLoading
                        }
                    )
                );
    }
    renderMoreUsers(e, t, n) {
        return (0, r.jsx)(
            'div',
            {
                className: C.moreUsers,
                children: e
            },
            n
        );
    }
    renderParty() {
        let { partyId: e, partyMembers: t, hideParty: n, guildId: i } = this.props,
            [l, a] = this.getPartySize(),
            o = this.hasPartySize() || this.isActionType(E.mFx.LISTEN) || this.isActionType(E.mFx.WATCH);
        if (null == e || this.isDeadInvite() || !o || n) return null;
        let s = [...t],
            c = Math.min(l, 6);
        for (; s.length < c; )
            s.push({
                user: new m.Z({ discriminator: '0005' }),
                unknownUser: !0
            });
        let u = Math.min(a, 106);
        for (; s.length < u; ) s.push(null);
        return (0, r.jsx)(p.Z, {
            guildId: i,
            className: C.partyMembers,
            users: s,
            max: a > 0 ? Math.min(a, 6) : 6,
            renderUser: this.renderUser,
            renderMoreUsers: this.renderMoreUsers
        });
    }
    render() {
        let { className: e, coverImage: t, name: n, activity: i } = this.props,
            l = this.isActionType(E.mFx.JOIN) || this.isActionType(E.mFx.JOIN_REQUEST),
            s = this.isDeadInvite(),
            u = null;
        null == t || null == i || l
            ? !l && s && (u = (0, r.jsx)('div', { className: C.artworkSpotifySessionEnded }))
            : (u = (0, r.jsx)('img', {
                  alt: '',
                  src: t,
                  className: (0, h.l)(C, 'artwork', this.getActionableMode())
              }));
        let d = null != i && null != u && null != i.assets && null != i.assets.large_text && '' !== i.assets.large_text && !s && (0, x.Z)(i) ? i.assets.large_text : null,
            p =
                null != d
                    ? (0, r.jsx)(o.ua7, {
                          text: d,
                          children: (e) => {
                              let { onMouseEnter: t, onMouseLeave: n } = e;
                              return (0, r.jsx)(o.eee, {
                                  onClick: this.handleOpenSpotifyAlbum,
                                  onMouseEnter: t,
                                  onMouseLeave: n,
                                  children: u
                              });
                          }
                      })
                    : u;
        return (0, r.jsxs)('div', {
            className: a()(C.invite, e),
            children: [
                (0, r.jsx)('div', {
                    className: C.coverImageWrapper,
                    children: (0, r.jsx)('div', {
                        className: a()((0, h.l)(C, 'coverImage', this.getActionableMode()), null != u ? C.blurred : null),
                        style: { backgroundImage: null != t ? "url('".concat(t, "')") : void 0 }
                    })
                }),
                (0, r.jsxs)(c.Z, {
                    className: C.fullHeight,
                    children: [
                        (0, r.jsxs)(c.Z, {
                            direction: c.Z.Direction.VERTICAL,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    className: C.header,
                                    variant: 'text-sm/medium',
                                    color: 'text-muted',
                                    children: this.renderHeaderText()
                                }),
                                (0, r.jsx)(c.Z.Child, {
                                    className: C.partyStatus,
                                    children: this.renderPartyStatus()
                                }),
                                (0, r.jsxs)(c.Z, {
                                    align: c.Z.Align.END,
                                    children: [
                                        (0, r.jsxs)(c.Z, {
                                            align: c.Z.Align.CENTER,
                                            className: C.actionAndParty,
                                            basis: 0,
                                            style: { marginRight: 0 },
                                            children: [this.renderActionButton(), this.renderParty()]
                                        }),
                                        null == u && l
                                            ? (0, r.jsx)('div', {
                                                  className: C.name,
                                                  children: n
                                              })
                                            : null
                                    ]
                                })
                            ]
                        }),
                        p
                    ]
                }),
                (0, r.jsx)(o.eee, {
                    href: f.Z.getArticleURL(this.getHelpdeskArticleURL()),
                    className: C.helpIcon,
                    children: (0, r.jsx)(o.idN, {
                        color: 'currentColor',
                        size: 'xxs'
                    })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            O(this, 'handleJoin', () => {
                let { onJoin: e, applicationId: t } = this.props;
                null != t && (0, s.KX)(t, s.Un.LEGACY_RICH_PRESENCE_INVITE, s.j_.PLAY), null == e || e();
            }),
            O(this, 'handleInvite', () => {
                let { onInvite: e, applicationId: t } = this.props;
                null != t && (0, s.KX)(t, s.Un.LEGACY_RICH_PRESENCE_INVITE, s.j_.INVITE), null == e || e();
            }),
            O(this, 'handleSync', () => {
                let { onSync: e, applicationId: t } = this.props;
                null != t && (0, s.KX)(t, s.Un.LEGACY_RICH_PRESENCE_INVITE, s.j_.SYNC), null == e || e();
            }),
            O(this, 'handleDownloadApp', () => {
                let { onDownloadApp: e } = this.props;
                null == e || e();
            }),
            O(this, 'handleOpenSpotifyTrack', () => {
                let { activity: e, onOpenSpotifyTrack: t } = this.props;
                null != e && (null == t || t(e));
            }),
            O(this, 'handleOpenSpotifyArtist', (e) => {
                let { activity: t, onOpenSpotifyArtist: n, message: r } = this.props;
                null != t && null != r && (null == n || n(t, r.author.id, e));
            }),
            O(this, 'handleOpenSpotifyAlbum', () => {
                let { activity: e, onOpenSpotifyAlbum: t, message: n } = this.props;
                null != e && null != n && (null == t || t(e, n.author.id));
            }),
            O(this, 'renderUser', (e, t, n) => {
                let { guildId: i, channelId: l, message: o, analyticsLocations: s } = this.props;
                return null != e
                    ? (0, r.jsx)(
                          I,
                          {
                              member: e,
                              className: t,
                              guildId: i,
                              channelId: l,
                              messageId: null == o ? void 0 : o.id,
                              analyticsLocations: s
                          },
                          n
                      )
                    : (0, r.jsx)('div', { className: a()(C.partyMemberEmpty, t) }, n);
            });
    }
}
let N = T;
