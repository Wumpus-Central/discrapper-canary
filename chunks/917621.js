n.d(t, { Z: () => P }), n(47120), n(653041);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(692547),
    s = n(481060),
    c = n(600164),
    d = n(424678),
    u = n(184301),
    p = n(237583),
    m = n(598077),
    f = n(63063),
    h = n(153066),
    g = n(51144),
    _ = n(620662),
    b = n(994339),
    v = n(503438),
    y = n(981631),
    x = n(616922),
    O = n(388032),
    E = n(503460);
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
function N(e) {
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
                j(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
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
    let { member: t, className: n, guildId: i, renderUserPopout: a } = e;
    return t.unknownUser
        ? (0, r.jsx)('div', {
              className: E.partyMember,
              children: (0, r.jsx)(s.qEK, {
                  src: t.user.getAvatarURL(i, (0, s.pxk)(s.EFr.SIZE_24)),
                  size: s.EFr.SIZE_24,
                  className: o()(E.partyAvatar, n),
                  'aria-label': t.user.username
              })
          })
        : (0, r.jsx)(s.yRy, {
              position: 'left',
              renderPopout: (e) => a(t.user, e),
              preload: () => (0, u.Z)(t.user.id, t.user.getAvatarURL(i, (0, s.pxk)(s.EFr.SIZE_80)), { guildId: i }),
              children: (e) => {
                  var a;
                  return (0, r.jsx)(s.ua7, {
                      text: null !== (a = t.nick) && void 0 !== a ? a : g.ZP.getName(t.user),
                      children: (a) =>
                          (0, r.jsx)(
                              s.P3F,
                              C(N({ className: E.partyMemberKnown }, a, e), {
                                  children: (0, r.jsx)(s.qEK, {
                                      src: t.user.getAvatarURL(i, (0, s.pxk)(s.EFr.SIZE_24)),
                                      size: s.EFr.SIZE_24,
                                      className: o()(E.partyAvatar, n),
                                      'aria-label': t.user.username
                                  })
                              })
                          )
                  });
              }
          });
}
class S extends i.PureComponent {
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
        return (0, _.Z)(this.props.activity, y.xjy.EMBEDDED);
    }
    canJoin() {
        let { activity: e, isPreview: t, isGameLaunchable: n, isInBrowser: r } = this.props;
        return !!t || (!(this.isDeadInvite() || !this.isActionType(y.mFx.JOIN) || !(0, _.Z)(e, y.xjy.JOIN) || !this.hasPartySize() || this.isPartyFull() || this.isInParty()) && (!!this.isEmbeddedActivityApplication() || (!r && !!n)));
    }
    canSendInvite() {
        let { activity: e, isPreview: t } = this.props;
        return !!t || !(this.isDeadInvite() || !this.isActionType(y.mFx.JOIN_REQUEST) || !(0, _.Z)(e, y.xjy.JOIN) || !this.hasPartySize() || this.isPartyFull());
    }
    canSync() {
        let { activity: e, isPreview: t, isSyncable: n, isInBrowser: r } = this.props;
        return !!t || !((!this.isActionType(y.mFx.LISTEN) && !this.isActionType(y.mFx.WATCH)) || this.isDeadInvite() || !(0, _.Z)(e, y.xjy.SYNC) || r || !n || this.isInParty());
    }
    getHelpdeskArticleURL() {
        let { partyId: e } = this.props;
        return null != e && (0, x.Ps)(e) ? y.BhN.SPOTIFY_CONNECTION : y.BhN.RICH_PRESENCE_INTRODUCTION;
    }
    renderHeaderText() {
        let { activityActionType: e, name: t } = this.props;
        switch (e) {
            case y.mFx.LISTEN:
                return O.NW.formatToPlainString(O.t['/8czHx'], { name: t });
            case y.mFx.WATCH:
                return O.NW.formatToPlainString(O.t.BBJXVl, { name: t });
            case y.mFx.JOIN:
                return O.NW.string(O.t['hC/Ze3']);
            case y.mFx.JOIN_REQUEST:
            default:
                return O.NW.string(O.t.Ckxb6u);
        }
    }
    renderPartyStatus() {
        let { activityActionType: e, isGameLaunchable: t, isSyncable: n, isPreview: i, isInBrowser: a, name: o, activity: l } = this.props,
            [c, u] = this.getPartySize();
        if (this.isDeadInvite())
            switch (e) {
                case y.mFx.LISTEN:
                    return O.NW.string(O.t['84qx9v']);
                case y.mFx.WATCH:
                    return O.NW.string(O.t.B9kbnZ);
                case y.mFx.JOIN:
                case y.mFx.JOIN_REQUEST:
                default:
                    return O.NW.string(O.t['2Gbof3']);
            }
        return !a || i || this.isEmbeddedActivityApplication() || e !== y.mFx.JOIN
            ? this.isActionType(y.mFx.LISTEN) || this.isActionType(y.mFx.WATCH)
                ? null != l && null != l.details && null != l.state && (0, v.Z)(l)
                    ? [
                          (0, r.jsx)(
                              'div',
                              {
                                  className: E.details,
                                  children: (0, r.jsx)(s.eee, {
                                      className: E.textLink,
                                      onClick: this.handleOpenSpotifyTrack,
                                      children: l.details
                                  })
                              },
                              'details'
                          ),
                          (0, r.jsx)(
                              'div',
                              {
                                  className: E.state,
                                  children: O.NW.format(O.t.uU9le3, {
                                      artists: l.state,
                                      artistsHook: (e, t) =>
                                          null != l.state
                                              ? (0, r.jsx)(
                                                    d.Z,
                                                    {
                                                        artists: l.state,
                                                        linkClassName: E.textLink,
                                                        canOpen: null != l.sync_id,
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
                      ? O.NW.string(O.t.gXYoq6)
                      : O.NW.string(O.t.eyKDl5)
                : this.isActionType(y.mFx.JOIN_REQUEST)
                  ? this.isPartyFull()
                      ? O.NW.string(O.t.jfrMtr)
                      : this.hasPartySize() && 0 !== u
                        ? O.NW.formatToPlainString(O.t.XWapnZ, { number: u - c })
                        : null
                  : this.isInParty()
                    ? O.NW.string(O.t.KC26NT)
                    : t || n || i || this.isEmbeddedActivityApplication()
                      ? this.isPartyFull()
                          ? O.NW.string(O.t.jfrMtr)
                          : this.hasPartySize() && 0 !== u
                            ? O.NW.formatToPlainString(O.t.XWapnZ, { number: u - c })
                            : null
                      : O.NW.formatToPlainString(O.t.SqJBnJ, { name: o })
            : O.NW.string(O.t.c3EWuL);
    }
    renderActionButton() {
        let { isInBrowser: e, isPreview: t, isGameLaunchable: n, isSender: i, partyId: a, activity: o, message: l, renderSpotifyJoinButton: c, renderCustomButton: d } = this.props,
            u = {
                className: E.actionButton,
                size: s.zxk.Sizes.SMALL
            },
            p = null != d ? d(u) : null;
        return null != p
            ? p
            : !this.isDeadInvite() && this.isActionType(y.mFx.LISTEN) && null != a && null != l && null != o && (0, x.Ps)(a)
              ? c(
                    C(N({}, u), {
                        activity: o,
                        user: l.author
                    })
                )
              : (0, r.jsx)(
                    s.zxk,
                    C(
                        N(
                            {},
                            u,
                            (() =>
                                t || !e || this.isDeadInvite() || this.isEmbeddedActivityApplication()
                                    ? this.canJoin()
                                        ? {
                                              children: O.NW.string(O.t.VJlc0d),
                                              onClick: this.handleJoin
                                          }
                                        : this.canSync()
                                          ? {
                                                children: O.NW.string(O.t.VJlc0d),
                                                onClick: this.handleSync
                                            }
                                          : this.canSendInvite()
                                            ? {
                                                  children: O.NW.string(O.t['hC/Ze3']),
                                                  onClick: this.handleInvite,
                                                  disabled: i
                                              }
                                            : this.isInParty()
                                              ? {
                                                    children: O.NW.string(O.t.KC26NT),
                                                    disabled: !0
                                                }
                                              : {
                                                    children: this.isActionType(y.mFx.JOIN_REQUEST) ? O.NW.string(O.t['hC/Ze3']) : O.NW.string(O.t.VJlc0d),
                                                    disabled: !0
                                                }
                                    : {
                                          children: O.NW.string(O.t.gUZonZ),
                                          onClick: this.handleDownloadApp
                                      })()
                        ),
                        {
                            color: (e || n) && !this.isDeadInvite() ? s.zxk.Colors.GREEN : s.zxk.Colors.PRIMARY,
                            submitting: this.props.isLoading
                        }
                    )
                );
    }
    renderMoreUsers(e, t, n) {
        return (0, r.jsx)(
            'div',
            {
                className: E.moreUsers,
                children: e
            },
            n
        );
    }
    renderParty() {
        let { partyId: e, partyMembers: t, hideParty: n, guildId: i } = this.props,
            [a, o] = this.getPartySize(),
            l = this.hasPartySize() || this.isActionType(y.mFx.LISTEN) || this.isActionType(y.mFx.WATCH);
        if (null == e || this.isDeadInvite() || !l || n) return null;
        let s = [...t],
            c = Math.min(a, 6);
        for (; s.length < c; )
            s.push({
                user: new m.Z({ discriminator: '0005' }),
                unknownUser: !0
            });
        let d = Math.min(o, 106);
        for (; s.length < d; ) s.push(null);
        return (0, r.jsx)(p.Z, {
            guildId: i,
            className: E.partyMembers,
            users: s,
            max: o > 0 ? Math.min(o, 6) : 6,
            renderUser: this.renderUser,
            renderMoreUsers: this.renderMoreUsers
        });
    }
    render() {
        let { className: e, coverImage: t, name: n, activity: i } = this.props,
            a = this.isActionType(y.mFx.JOIN) || this.isActionType(y.mFx.JOIN_REQUEST),
            d = this.isDeadInvite(),
            u = null;
        null == t || null == i || a
            ? !a && d && (u = (0, r.jsx)('div', { className: E.artworkSpotifySessionEnded }))
            : (u = (0, r.jsx)('img', {
                  alt: '',
                  src: t,
                  className: (0, h.l)(E, 'artwork', this.getActionableMode())
              }));
        let p = null != i && null != u && null != i.assets && null != i.assets.large_text && '' !== i.assets.large_text && !d && (0, v.Z)(i) ? i.assets.large_text : null,
            m =
                null != p
                    ? (0, r.jsx)(s.ua7, {
                          text: p,
                          children: (e) => {
                              let { onMouseEnter: t, onMouseLeave: n } = e;
                              return (0, r.jsx)(s.eee, {
                                  onClick: this.handleOpenSpotifyAlbum,
                                  onMouseEnter: t,
                                  onMouseLeave: n,
                                  children: u
                              });
                          }
                      })
                    : u;
        return (0, r.jsxs)('div', {
            className: o()(E.invite, e),
            children: [
                (0, r.jsx)('div', {
                    className: E.coverImageWrapper,
                    children: (0, r.jsx)('div', {
                        className: o()((0, h.l)(E, 'coverImage', this.getActionableMode()), null != u ? E.blurred : null),
                        style: { backgroundImage: null != t ? "url('".concat(t, "')") : void 0 }
                    })
                }),
                (0, r.jsxs)(c.Z, {
                    className: E.fullHeight,
                    children: [
                        (0, r.jsxs)(c.Z, {
                            direction: c.Z.Direction.VERTICAL,
                            children: [
                                (0, r.jsx)('div', {
                                    className: E.header,
                                    children: this.renderHeaderText()
                                }),
                                (0, r.jsx)(c.Z.Child, {
                                    className: E.partyStatus,
                                    children: this.renderPartyStatus()
                                }),
                                (0, r.jsxs)(c.Z, {
                                    align: c.Z.Align.END,
                                    children: [
                                        (0, r.jsxs)(c.Z, {
                                            align: c.Z.Align.CENTER,
                                            className: E.actionAndParty,
                                            basis: 0,
                                            style: { marginRight: 0 },
                                            children: [this.renderActionButton(), this.renderParty()]
                                        }),
                                        null == u && a
                                            ? (0, r.jsx)('div', {
                                                  className: E.name,
                                                  children: n
                                              })
                                            : null
                                    ]
                                })
                            ]
                        }),
                        m
                    ]
                }),
                (0, r.jsx)(s.eee, {
                    href: f.Z.getArticleURL(this.getHelpdeskArticleURL()),
                    className: E.helpIcon,
                    children: (0, r.jsx)(s.idN, {
                        color: l.Z.unsafe_rawColors.PRIMARY_300.css,
                        size: 'xxs'
                    })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            j(this, 'handleJoin', () => {
                let { onJoin: e } = this.props;
                null == e || e();
            }),
            j(this, 'handleInvite', () => {
                let { onInvite: e } = this.props;
                null == e || e();
            }),
            j(this, 'handleSync', () => {
                let { onSync: e } = this.props;
                null == e || e();
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
                let { renderUserPopout: i, guildId: a } = this.props;
                return null != e
                    ? (0, r.jsx)(
                          I,
                          {
                              member: e,
                              renderUserPopout: i,
                              className: t,
                              guildId: a
                          },
                          n
                      )
                    : (0, r.jsx)('div', { className: o()(E.partyMemberEmpty, t) }, n);
            });
    }
}
let P = S;
