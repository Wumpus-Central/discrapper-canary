(n.d(t, { Z: () => P }), n(388685), n(539854));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(755721),
    s = n(481060),
    c = n(914498),
    u = n(600164),
    d = n(424678),
    p = n(670188),
    m = n(237583),
    f = n(598077),
    h = n(63063),
    g = n(153066),
    _ = n(51144),
    b = n(620662),
    E = n(994339),
    x = n(503438),
    y = n(981631),
    v = n(616922),
    C = n(388032),
    O = n(638128);
function j(e, t, n) {
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
function I(e) {
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
                j(e, t, n[t]);
            }));
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
function T(e) {
    let { member: t, className: n, guildId: l, channelId: o, messageId: c, analyticsLocations: u } = e,
        d = i.useRef(null);
    return t.unknownUser
        ? (0, r.jsx)('div', {
              className: O.partyMember,
              children: (0, r.jsx)(s.qEK, {
                  src: t.user.getAvatarURL(l, (0, s.pxk)(s.EFr.SIZE_24)),
                  size: s.EFr.SIZE_24,
                  className: a()(O.partyAvatar, n),
                  'aria-label': t.user.username
              })
          })
        : (0, r.jsx)(p.Z, {
              targetElementRef: d,
              position: 'left',
              user: t.user,
              guildId: l,
              channelId: o,
              messageId: c,
              newAnalyticsLocations: u,
              children: (e) => {
                  var i;
                  return (0, r.jsx)(s.ua7, {
                      text: null != (i = t.nick) ? i : _.ZP.getName(t.user),
                      children: (i) =>
                          (0, r.jsx)(
                              s.P3F,
                              S(
                                  I(
                                      {
                                          innerRef: d,
                                          className: O.partyMemberKnown
                                      },
                                      i,
                                      e
                                  ),
                                  {
                                      children: (0, r.jsx)(s.qEK, {
                                          src: t.user.getAvatarURL(l, (0, s.pxk)(s.EFr.SIZE_24)),
                                          size: s.EFr.SIZE_24,
                                          className: a()(O.partyAvatar, n),
                                          'aria-label': t.user.username
                                      })
                                  }
                              )
                          )
                  });
              }
          });
}
class N extends i.PureComponent {
    isDeadInvite() {
        let { isPreview: e, message: t, activity: n, applicationId: r } = this.props;
        return !e && !(null != t && (0, E.Z)(n, t, r));
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
        return (0, b.Z)(this.props.activity, y.xjy.EMBEDDED);
    }
    canJoin() {
        let { activity: e, isPreview: t, isGameLaunchable: n, isInBrowser: r, isSender: i } = this.props;
        return !!t || (!(i || this.isDeadInvite() || !this.isActionType(y.mFx.JOIN) || !(0, b.Z)(e, y.xjy.JOIN) || !this.hasPartySize() || this.isPartyFull() || this.isInParty()) && (!!this.isEmbeddedActivityApplication() || (!r && !!n)));
    }
    canSendInvite() {
        let { activity: e, isPreview: t } = this.props;
        return !!t || !(this.isDeadInvite() || !this.isActionType(y.mFx.JOIN_REQUEST) || !(0, b.Z)(e, y.xjy.JOIN) || !this.hasPartySize() || this.isPartyFull());
    }
    canSync() {
        let { activity: e, isPreview: t, isSyncable: n, isInBrowser: r } = this.props;
        return !!t || !((!this.isActionType(y.mFx.LISTEN) && !this.isActionType(y.mFx.WATCH)) || this.isDeadInvite() || !(0, b.Z)(e, y.xjy.SYNC) || r || !n || this.isInParty());
    }
    getHelpdeskArticleURL() {
        let { partyId: e } = this.props;
        return null != e && (0, v.Ps)(e) ? y.BhN.SPOTIFY_CONNECTION : y.BhN.RICH_PRESENCE_INTRODUCTION;
    }
    renderHeaderText() {
        let { activityActionType: e, name: t } = this.props;
        switch (e) {
            case y.mFx.LISTEN:
                return C.intl.formatToPlainString(C.t['/8czHx'], { name: t });
            case y.mFx.WATCH:
                return C.intl.formatToPlainString(C.t.BBJXVl, { name: t });
            case y.mFx.JOIN:
                return C.intl.string(C.t['hC/Ze3']);
            case y.mFx.JOIN_REQUEST:
            default:
                return C.intl.string(C.t.Ckxb6u);
        }
    }
    renderPartyStatus() {
        let { activityActionType: e, isGameLaunchable: t, isSyncable: n, isPreview: i, isInBrowser: l, name: a, activity: o } = this.props,
            [c, u] = this.getPartySize();
        if (this.isDeadInvite())
            switch (e) {
                case y.mFx.LISTEN:
                    return C.intl.string(C.t['84qx9v']);
                case y.mFx.WATCH:
                    return C.intl.string(C.t.B9kbnZ);
                case y.mFx.JOIN:
                case y.mFx.JOIN_REQUEST:
                default:
                    return C.intl.string(C.t['2Gbof3']);
            }
        return !l || i || this.isEmbeddedActivityApplication() || e !== y.mFx.JOIN
            ? this.isActionType(y.mFx.LISTEN) || this.isActionType(y.mFx.WATCH)
                ? null != o && null != o.details && null != o.state && (0, x.Z)(o)
                    ? [
                          (0, r.jsx)(
                              'div',
                              {
                                  className: O.details,
                                  children: (0, r.jsx)(s.eee, {
                                      className: O.textLink,
                                      onClick: this.handleOpenSpotifyTrack,
                                      children: o.details
                                  })
                              },
                              'details'
                          ),
                          (0, r.jsx)(
                              'div',
                              {
                                  className: O.state,
                                  children: C.intl.format(C.t.uU9le3, {
                                      artists: o.state,
                                      artistsHook: (e, t) =>
                                          null != o.state
                                              ? (0, r.jsx)(
                                                    d.Z,
                                                    {
                                                        artists: o.state,
                                                        linkClassName: O.textLink,
                                                        canOpen: null != o.sync_id,
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
                      ? C.intl.string(C.t.gXYoq6)
                      : C.intl.string(C.t.eyKDl5)
                : this.isActionType(y.mFx.JOIN_REQUEST)
                  ? this.isPartyFull()
                      ? C.intl.string(C.t.jfrMtr)
                      : this.hasPartySize() && 0 !== u
                        ? C.intl.formatToPlainString(C.t.XWapnZ, { number: u - c })
                        : null
                  : this.isInParty()
                    ? C.intl.string(C.t.KC26NT)
                    : t || n || i || this.isEmbeddedActivityApplication()
                      ? this.isPartyFull()
                          ? C.intl.string(C.t.jfrMtr)
                          : this.hasPartySize() && 0 !== u
                            ? C.intl.formatToPlainString(C.t.XWapnZ, { number: u - c })
                            : null
                      : C.intl.formatToPlainString(C.t.SqJBnJ, { name: a })
            : C.intl.string(C.t.c3EWuL);
    }
    renderActionButton() {
        let { isInBrowser: e, isPreview: t, isGameLaunchable: n, isSender: i, partyId: l, activity: a, message: s, renderSpotifyJoinButton: c, renderCustomButton: u } = this.props,
            d = {
                className: O.actionButton,
                size: o.zx.Sizes.SMALL
            },
            p = null != u ? u(d) : null;
        return null != p
            ? p
            : !this.isDeadInvite() && this.isActionType(y.mFx.LISTEN) && null != l && null != s && null != a && (0, v.Ps)(l)
              ? c(
                    S(I({}, d), {
                        activity: a,
                        user: s.author
                    })
                )
              : (0, r.jsx)(
                    o.zx,
                    S(
                        I(
                            {},
                            d,
                            t || !e || this.isDeadInvite() || this.isEmbeddedActivityApplication()
                                ? this.canJoin()
                                    ? {
                                          children: C.intl.string(C.t.VJlc0d),
                                          onClick: this.handleJoin
                                      }
                                    : this.canSync()
                                      ? {
                                            children: C.intl.string(C.t.VJlc0d),
                                            onClick: this.handleSync
                                        }
                                      : this.canSendInvite()
                                        ? {
                                              children: C.intl.string(C.t['hC/Ze3']),
                                              onClick: this.handleInvite,
                                              disabled: i
                                          }
                                        : this.isInParty()
                                          ? {
                                                children: C.intl.string(C.t.KC26NT),
                                                disabled: !0
                                            }
                                          : {
                                                children: this.isActionType(y.mFx.JOIN_REQUEST) ? C.intl.string(C.t['hC/Ze3']) : C.intl.string(C.t.VJlc0d),
                                                disabled: !0
                                            }
                                : {
                                      children: C.intl.string(C.t.gUZonZ),
                                      onClick: this.handleDownloadApp
                                  }
                        ),
                        {
                            color: (e || n) && !this.isDeadInvite() ? o.zx.Colors.GREEN : o.zx.Colors.PRIMARY,
                            submitting: this.props.isLoading
                        }
                    )
                );
    }
    renderMoreUsers(e, t, n) {
        return (0, r.jsx)(
            'div',
            {
                className: O.moreUsers,
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
                user: new f.Z({ discriminator: '0005' }),
                unknownUser: !0
            });
        let u = Math.min(a, 106);
        for (; s.length < u; ) s.push(null);
        return (0, r.jsx)(m.Z, {
            guildId: i,
            className: O.partyMembers,
            users: s,
            max: a > 0 ? Math.min(a, 6) : 6,
            renderUser: this.renderUser,
            renderMoreUsers: this.renderMoreUsers
        });
    }
    render() {
        let { className: e, coverImage: t, name: n, activity: i } = this.props,
            l = this.isActionType(y.mFx.JOIN) || this.isActionType(y.mFx.JOIN_REQUEST),
            o = this.isDeadInvite(),
            c = null;
        null == t || null == i || l
            ? !l && o && (c = (0, r.jsx)('div', { className: O.artworkSpotifySessionEnded }))
            : (c = (0, r.jsx)('img', {
                  alt: '',
                  src: t,
                  className: (0, g.l)(O, 'artwork', this.getActionableMode())
              }));
        let d = null != i && null != c && null != i.assets && null != i.assets.large_text && '' !== i.assets.large_text && !o && (0, x.Z)(i) ? i.assets.large_text : null,
            p =
                null != d
                    ? (0, r.jsx)(s.ua7, {
                          text: d,
                          children: (e) => {
                              let { onMouseEnter: t, onMouseLeave: n } = e;
                              return (0, r.jsx)(s.eee, {
                                  onClick: this.handleOpenSpotifyAlbum,
                                  onMouseEnter: t,
                                  onMouseLeave: n,
                                  children: c
                              });
                          }
                      })
                    : c;
        return (0, r.jsxs)('div', {
            className: a()(O.invite, e),
            children: [
                (0, r.jsx)('div', {
                    className: O.coverImageWrapper,
                    children: (0, r.jsx)('div', {
                        className: a()((0, g.l)(O, 'coverImage', this.getActionableMode()), null != c ? O.blurred : null),
                        style: { backgroundImage: null != t ? "url('".concat(t, "')") : void 0 }
                    })
                }),
                (0, r.jsxs)(u.Z, {
                    className: O.fullHeight,
                    children: [
                        (0, r.jsxs)(u.Z, {
                            direction: u.Z.Direction.VERTICAL,
                            children: [
                                (0, r.jsx)(s.Text, {
                                    className: O.header,
                                    variant: 'text-sm/medium',
                                    color: 'text-muted',
                                    children: this.renderHeaderText()
                                }),
                                (0, r.jsx)(u.Z.Child, {
                                    className: O.partyStatus,
                                    children: this.renderPartyStatus()
                                }),
                                (0, r.jsxs)(u.Z, {
                                    align: u.Z.Align.END,
                                    children: [
                                        (0, r.jsxs)(u.Z, {
                                            align: u.Z.Align.CENTER,
                                            className: O.actionAndParty,
                                            basis: 0,
                                            style: { marginRight: 0 },
                                            children: [this.renderActionButton(), this.renderParty()]
                                        }),
                                        null == c && l
                                            ? (0, r.jsx)('div', {
                                                  className: O.name,
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
                (0, r.jsx)(s.eee, {
                    href: h.Z.getArticleURL(this.getHelpdeskArticleURL()),
                    className: O.helpIcon,
                    children: (0, r.jsx)(s.idN, {
                        color: 'currentColor',
                        size: 'xxs'
                    })
                })
            ]
        });
    }
    constructor(...e) {
        (super(...e),
            j(this, 'handleJoin', () => {
                let { onJoin: e, applicationId: t } = this.props;
                (null != t && (0, c.KX)(t, c.Un.LEGACY_RICH_PRESENCE_INVITE, c.j_.PLAY), null == e || e());
            }),
            j(this, 'handleInvite', () => {
                let { onInvite: e, applicationId: t } = this.props;
                (null != t && (0, c.KX)(t, c.Un.LEGACY_RICH_PRESENCE_INVITE, c.j_.INVITE), null == e || e());
            }),
            j(this, 'handleSync', () => {
                let { onSync: e, applicationId: t } = this.props;
                (null != t && (0, c.KX)(t, c.Un.LEGACY_RICH_PRESENCE_INVITE, c.j_.SYNC), null == e || e());
            }),
            j(this, 'handleDownloadApp', () => {
                let { onDownloadApp: e } = this.props;
                null == e || e();
            }),
            j(this, 'handleOpenSpotifyTrack', () => {
                let { activity: e, onOpenSpotifyTrack: t } = this.props;
                null != e && (null == t || t(e));
            }),
            j(this, 'handleOpenSpotifyArtist', (e) => {
                let { activity: t, onOpenSpotifyArtist: n, message: r } = this.props;
                null != t && null != r && (null == n || n(t, r.author.id, e));
            }),
            j(this, 'handleOpenSpotifyAlbum', () => {
                let { activity: e, onOpenSpotifyAlbum: t, message: n } = this.props;
                null != e && null != n && (null == t || t(e, n.author.id));
            }),
            j(this, 'renderUser', (e, t, n) => {
                let { guildId: i, channelId: l, message: o, analyticsLocations: s } = this.props;
                return null != e
                    ? (0, r.jsx)(
                          T,
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
                    : (0, r.jsx)('div', { className: a()(O.partyMemberEmpty, t) }, n);
            }));
    }
}
let P = N;
