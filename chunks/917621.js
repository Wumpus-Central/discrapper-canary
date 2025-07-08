(n.d(t, { Z: () => N }), n(388685), n(539854));
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
    _ = n(153066),
    g = n(51144),
    h = n(620662),
    b = n(994339),
    E = n(503438),
    y = n(981631),
    C = n(616922),
    x = n(388032),
    v = n(638128);
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            }));
    }
    return e;
}
function I(e, t) {
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
function S(e) {
    let { member: t, className: n, guildId: l, channelId: s, messageId: c, analyticsLocations: u } = e,
        p = i.useRef(null);
    return t.unknownUser
        ? (0, r.jsx)('div', {
              className: v.partyMember,
              children: (0, r.jsx)(o.qEK, {
                  src: t.user.getAvatarURL(l, (0, o.pxk)(o.EFr.SIZE_24)),
                  size: o.EFr.SIZE_24,
                  className: a()(v.partyAvatar, n),
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
                              I(
                                  j(
                                      {
                                          innerRef: p,
                                          className: v.partyMemberKnown
                                      },
                                      i,
                                      e
                                  ),
                                  {
                                      children: (0, r.jsx)(o.qEK, {
                                          src: t.user.getAvatarURL(l, (0, o.pxk)(o.EFr.SIZE_24)),
                                          size: o.EFr.SIZE_24,
                                          className: a()(v.partyAvatar, n),
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
        return [y.mFx.LISTEN, y.mFx].includes(this.props.activityActionType) || this.props.isPreview || this.canJoin() ? 'Actionable' : 'NotActionable';
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
        return (0, h.Z)(this.props.activity, y.xjy.EMBEDDED);
    }
    canJoin() {
        let { activity: e, isPreview: t, isGameLaunchable: n, isInBrowser: r, isSender: i } = this.props;
        return !!t || (!(i || this.isDeadInvite() || !this.isActionType(y.mFx.JOIN) || !(0, h.Z)(e, y.xjy.JOIN) || !this.hasPartySize() || this.isPartyFull() || this.isInParty()) && (!!this.isEmbeddedActivityApplication() || (!r && !!n)));
    }
    canSendInvite() {
        let { activity: e, isPreview: t } = this.props;
        return !!t || !(this.isDeadInvite() || !this.isActionType(y.mFx.JOIN_REQUEST) || !(0, h.Z)(e, y.xjy.JOIN) || !this.hasPartySize() || this.isPartyFull());
    }
    canSync() {
        let { activity: e, isPreview: t, isSyncable: n, isInBrowser: r } = this.props;
        return !!t || !((!this.isActionType(y.mFx.LISTEN) && !this.isActionType(y.mFx.WATCH)) || this.isDeadInvite() || !(0, h.Z)(e, y.xjy.SYNC) || r || !n || this.isInParty());
    }
    getHelpdeskArticleURL() {
        let { partyId: e } = this.props;
        return null != e && (0, C.Ps)(e) ? y.BhN.SPOTIFY_CONNECTION : y.BhN.RICH_PRESENCE_INTRODUCTION;
    }
    renderHeaderText() {
        let { activityActionType: e, name: t } = this.props;
        switch (e) {
            case y.mFx.LISTEN:
                return x.intl.formatToPlainString(x.t['/8czHx'], { name: t });
            case y.mFx.WATCH:
                return x.intl.formatToPlainString(x.t.BBJXVl, { name: t });
            case y.mFx.JOIN:
                return x.intl.string(x.t['hC/Ze3']);
            case y.mFx.JOIN_REQUEST:
            default:
                return x.intl.string(x.t.Ckxb6u);
        }
    }
    renderPartyStatus() {
        let { activityActionType: e, isGameLaunchable: t, isSyncable: n, isPreview: i, isInBrowser: l, name: a, activity: s } = this.props,
            [c, d] = this.getPartySize();
        if (this.isDeadInvite())
            switch (e) {
                case y.mFx.LISTEN:
                    return x.intl.string(x.t['84qx9v']);
                case y.mFx.WATCH:
                    return x.intl.string(x.t.B9kbnZ);
                case y.mFx.JOIN:
                case y.mFx.JOIN_REQUEST:
                default:
                    return x.intl.string(x.t['2Gbof3']);
            }
        return !l || i || this.isEmbeddedActivityApplication() || e !== y.mFx.JOIN
            ? this.isActionType(y.mFx.LISTEN) || this.isActionType(y.mFx.WATCH)
                ? null != s && null != s.details && null != s.state && (0, E.Z)(s)
                    ? [
                          (0, r.jsx)(
                              'div',
                              {
                                  className: v.details,
                                  children: (0, r.jsx)(o.eee, {
                                      className: v.textLink,
                                      onClick: this.handleOpenSpotifyTrack,
                                      children: s.details
                                  })
                              },
                              'details'
                          ),
                          (0, r.jsx)(
                              'div',
                              {
                                  className: v.state,
                                  children: x.intl.format(x.t.uU9le3, {
                                      artists: s.state,
                                      artistsHook: (e, t) =>
                                          null != s.state
                                              ? (0, r.jsx)(
                                                    u.Z,
                                                    {
                                                        artists: s.state,
                                                        linkClassName: v.textLink,
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
                    : this.isActionType(y.mFx.LISTEN)
                      ? x.intl.string(x.t.gXYoq6)
                      : x.intl.string(x.t.eyKDl5)
                : this.isActionType(y.mFx.JOIN_REQUEST)
                  ? this.isPartyFull()
                      ? x.intl.string(x.t.jfrMtr)
                      : this.hasPartySize() && 0 !== d
                        ? x.intl.formatToPlainString(x.t.XWapnZ, { number: d - c })
                        : null
                  : this.isInParty()
                    ? x.intl.string(x.t.KC26NT)
                    : t || n || i || this.isEmbeddedActivityApplication()
                      ? this.isPartyFull()
                          ? x.intl.string(x.t.jfrMtr)
                          : this.hasPartySize() && 0 !== d
                            ? x.intl.formatToPlainString(x.t.XWapnZ, { number: d - c })
                            : null
                      : x.intl.formatToPlainString(x.t.SqJBnJ, { name: a })
            : x.intl.string(x.t.c3EWuL);
    }
    renderActionButton() {
        let { isInBrowser: e, isPreview: t, isGameLaunchable: n, isSender: i, partyId: l, activity: a, message: s, renderSpotifyJoinButton: c, renderCustomButton: u } = this.props,
            d = {
                className: v.actionButton,
                size: o.zxk.Sizes.SMALL
            },
            p = null != u ? u(d) : null;
        return null != p
            ? p
            : !this.isDeadInvite() && this.isActionType(y.mFx.LISTEN) && null != l && null != s && null != a && (0, C.Ps)(l)
              ? c(
                    I(j({}, d), {
                        activity: a,
                        user: s.author
                    })
                )
              : (0, r.jsx)(
                    o.zxk,
                    I(
                        j(
                            {},
                            d,
                            t || !e || this.isDeadInvite() || this.isEmbeddedActivityApplication()
                                ? this.canJoin()
                                    ? {
                                          children: x.intl.string(x.t.VJlc0d),
                                          onClick: this.handleJoin
                                      }
                                    : this.canSync()
                                      ? {
                                            children: x.intl.string(x.t.VJlc0d),
                                            onClick: this.handleSync
                                        }
                                      : this.canSendInvite()
                                        ? {
                                              children: x.intl.string(x.t['hC/Ze3']),
                                              onClick: this.handleInvite,
                                              disabled: i
                                          }
                                        : this.isInParty()
                                          ? {
                                                children: x.intl.string(x.t.KC26NT),
                                                disabled: !0
                                            }
                                          : {
                                                children: this.isActionType(y.mFx.JOIN_REQUEST) ? x.intl.string(x.t['hC/Ze3']) : x.intl.string(x.t.VJlc0d),
                                                disabled: !0
                                            }
                                : {
                                      children: x.intl.string(x.t.gUZonZ),
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
                className: v.moreUsers,
                children: e
            },
            n
        );
    }
    renderParty() {
        let { partyId: e, partyMembers: t, hideParty: n, guildId: i } = this.props,
            [l, a] = this.getPartySize(),
            o = this.hasPartySize() || this.isActionType(y.mFx.LISTEN) || this.isActionType(y.mFx.WATCH);
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
            className: v.partyMembers,
            users: s,
            max: a > 0 ? Math.min(a, 6) : 6,
            renderUser: this.renderUser,
            renderMoreUsers: this.renderMoreUsers
        });
    }
    render() {
        let { className: e, coverImage: t, name: n, activity: i } = this.props,
            l = this.isActionType(y.mFx.JOIN) || this.isActionType(y.mFx.JOIN_REQUEST),
            s = this.isDeadInvite(),
            u = null;
        null == t || null == i || l
            ? !l && s && (u = (0, r.jsx)('div', { className: v.artworkSpotifySessionEnded }))
            : (u = (0, r.jsx)('img', {
                  alt: '',
                  src: t,
                  className: (0, _.l)(v, 'artwork', this.getActionableMode())
              }));
        let d = null != i && null != u && null != i.assets && null != i.assets.large_text && '' !== i.assets.large_text && !s && (0, E.Z)(i) ? i.assets.large_text : null,
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
            className: a()(v.invite, e),
            children: [
                (0, r.jsx)('div', {
                    className: v.coverImageWrapper,
                    children: (0, r.jsx)('div', {
                        className: a()((0, _.l)(v, 'coverImage', this.getActionableMode()), null != u ? v.blurred : null),
                        style: { backgroundImage: null != t ? "url('".concat(t, "')") : void 0 }
                    })
                }),
                (0, r.jsxs)(c.Z, {
                    className: v.fullHeight,
                    children: [
                        (0, r.jsxs)(c.Z, {
                            direction: c.Z.Direction.VERTICAL,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    className: v.header,
                                    variant: 'text-sm/medium',
                                    color: 'text-muted',
                                    children: this.renderHeaderText()
                                }),
                                (0, r.jsx)(c.Z.Child, {
                                    className: v.partyStatus,
                                    children: this.renderPartyStatus()
                                }),
                                (0, r.jsxs)(c.Z, {
                                    align: c.Z.Align.END,
                                    children: [
                                        (0, r.jsxs)(c.Z, {
                                            align: c.Z.Align.CENTER,
                                            className: v.actionAndParty,
                                            basis: 0,
                                            style: { marginRight: 0 },
                                            children: [this.renderActionButton(), this.renderParty()]
                                        }),
                                        null == u && l
                                            ? (0, r.jsx)('div', {
                                                  className: v.name,
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
                    className: v.helpIcon,
                    children: (0, r.jsx)(o.idN, {
                        color: 'currentColor',
                        size: 'xxs'
                    })
                })
            ]
        });
    }
    constructor(...e) {
        (super(...e),
            O(this, 'handleJoin', () => {
                let { onJoin: e, applicationId: t } = this.props;
                (null != t && (0, s.KX)(t, s.Un.LEGACY_RICH_PRESENCE_INVITE, s.j_.PLAY), null == e || e());
            }),
            O(this, 'handleInvite', () => {
                let { onInvite: e, applicationId: t } = this.props;
                (null != t && (0, s.KX)(t, s.Un.LEGACY_RICH_PRESENCE_INVITE, s.j_.INVITE), null == e || e());
            }),
            O(this, 'handleSync', () => {
                let { onSync: e, applicationId: t } = this.props;
                (null != t && (0, s.KX)(t, s.Un.LEGACY_RICH_PRESENCE_INVITE, s.j_.SYNC), null == e || e());
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
                          S,
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
                    : (0, r.jsx)('div', { className: a()(v.partyMemberEmpty, t) }, n);
            }));
    }
}
let N = T;
