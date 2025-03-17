n.d(t, { Z: () => S }), n(47120), n(653041);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(481060),
    s = n(600164),
    c = n(424678),
    d = n(184301),
    u = n(237583),
    p = n(598077),
    m = n(63063),
    f = n(153066),
    h = n(51144),
    g = n(620662),
    _ = n(994339),
    b = n(503438),
    v = n(981631),
    y = n(616922),
    x = n(388032),
    E = n(705166);
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
function N(e, t) {
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
function C(e) {
    let { member: t, className: n, guildId: i, renderUserPopout: a } = e;
    return t.unknownUser
        ? (0, r.jsx)('div', {
              className: E.partyMember,
              children: (0, r.jsx)(l.qEK, {
                  src: t.user.getAvatarURL(i, (0, l.pxk)(l.EFr.SIZE_24)),
                  size: l.EFr.SIZE_24,
                  className: o()(E.partyAvatar, n),
                  'aria-label': t.user.username
              })
          })
        : (0, r.jsx)(l.yRy, {
              position: 'left',
              renderPopout: (e) => a(t.user, e),
              preload: () => (0, d.Z)(t.user.id, t.user.getAvatarURL(i, (0, l.pxk)(l.EFr.SIZE_80)), { guildId: i }),
              children: (e) => {
                  var a;
                  return (0, r.jsx)(l.ua7, {
                      text: null !== (a = t.nick) && void 0 !== a ? a : h.ZP.getName(t.user),
                      children: (a) =>
                          (0, r.jsx)(
                              l.P3F,
                              N(j({ className: E.partyMemberKnown }, a, e), {
                                  children: (0, r.jsx)(l.qEK, {
                                      src: t.user.getAvatarURL(i, (0, l.pxk)(l.EFr.SIZE_24)),
                                      size: l.EFr.SIZE_24,
                                      className: o()(E.partyAvatar, n),
                                      'aria-label': t.user.username
                                  })
                              })
                          )
                  });
              }
          });
}
class I extends i.PureComponent {
    isDeadInvite() {
        let { isPreview: e, message: t, activity: n, applicationId: r } = this.props;
        return !e && !(null != t && (0, _.Z)(n, t, r));
    }
    getPartySize() {
        let { activity: e } = this.props;
        return null == e || null == e.party || null == e.party.size || e.party.size.length < 2 ? [-1, -1] : e.party.size;
    }
    getActionableMode() {
        return [v.mFx.LISTEN, v.mFx].includes(this.props.activityActionType) || this.props.isPreview || this.canJoin() ? 'Actionable' : 'NotActionable';
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
        return (0, g.Z)(this.props.activity, v.xjy.EMBEDDED);
    }
    canJoin() {
        let { activity: e, isPreview: t, isGameLaunchable: n, isInBrowser: r } = this.props;
        return !!t || (!(this.isDeadInvite() || !this.isActionType(v.mFx.JOIN) || !(0, g.Z)(e, v.xjy.JOIN) || !this.hasPartySize() || this.isPartyFull() || this.isInParty()) && (!!this.isEmbeddedActivityApplication() || (!r && !!n)));
    }
    canSendInvite() {
        let { activity: e, isPreview: t } = this.props;
        return !!t || !(this.isDeadInvite() || !this.isActionType(v.mFx.JOIN_REQUEST) || !(0, g.Z)(e, v.xjy.JOIN) || !this.hasPartySize() || this.isPartyFull());
    }
    canSync() {
        let { activity: e, isPreview: t, isSyncable: n, isInBrowser: r } = this.props;
        return !!t || !((!this.isActionType(v.mFx.LISTEN) && !this.isActionType(v.mFx.WATCH)) || this.isDeadInvite() || !(0, g.Z)(e, v.xjy.SYNC) || r || !n || this.isInParty());
    }
    getHelpdeskArticleURL() {
        let { partyId: e } = this.props;
        return null != e && (0, y.Ps)(e) ? v.BhN.SPOTIFY_CONNECTION : v.BhN.RICH_PRESENCE_INTRODUCTION;
    }
    renderHeaderText() {
        let { activityActionType: e, name: t } = this.props;
        switch (e) {
            case v.mFx.LISTEN:
                return x.NW.formatToPlainString(x.t['/8czHx'], { name: t });
            case v.mFx.WATCH:
                return x.NW.formatToPlainString(x.t.BBJXVl, { name: t });
            case v.mFx.JOIN:
                return x.NW.string(x.t['hC/Ze3']);
            case v.mFx.JOIN_REQUEST:
            default:
                return x.NW.string(x.t.Ckxb6u);
        }
    }
    renderPartyStatus() {
        let { activityActionType: e, isGameLaunchable: t, isSyncable: n, isPreview: i, isInBrowser: a, name: o, activity: s } = this.props,
            [d, u] = this.getPartySize();
        if (this.isDeadInvite())
            switch (e) {
                case v.mFx.LISTEN:
                    return x.NW.string(x.t['84qx9v']);
                case v.mFx.WATCH:
                    return x.NW.string(x.t.B9kbnZ);
                case v.mFx.JOIN:
                case v.mFx.JOIN_REQUEST:
                default:
                    return x.NW.string(x.t['2Gbof3']);
            }
        return !a || i || this.isEmbeddedActivityApplication() || e !== v.mFx.JOIN
            ? this.isActionType(v.mFx.LISTEN) || this.isActionType(v.mFx.WATCH)
                ? null != s && null != s.details && null != s.state && (0, b.Z)(s)
                    ? [
                          (0, r.jsx)(
                              'div',
                              {
                                  className: E.details,
                                  children: (0, r.jsx)(l.eee, {
                                      className: E.textLink,
                                      onClick: this.handleOpenSpotifyTrack,
                                      children: s.details
                                  })
                              },
                              'details'
                          ),
                          (0, r.jsx)(
                              'div',
                              {
                                  className: E.state,
                                  children: x.NW.format(x.t.uU9le3, {
                                      artists: s.state,
                                      artistsHook: (e, t) =>
                                          null != s.state
                                              ? (0, r.jsx)(
                                                    c.Z,
                                                    {
                                                        artists: s.state,
                                                        linkClassName: E.textLink,
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
                    : this.isActionType(v.mFx.LISTEN)
                      ? x.NW.string(x.t.gXYoq6)
                      : x.NW.string(x.t.eyKDl5)
                : this.isActionType(v.mFx.JOIN_REQUEST)
                  ? this.isPartyFull()
                      ? x.NW.string(x.t.jfrMtr)
                      : this.hasPartySize() && 0 !== u
                        ? x.NW.formatToPlainString(x.t.XWapnZ, { number: u - d })
                        : null
                  : this.isInParty()
                    ? x.NW.string(x.t.KC26NT)
                    : t || n || i || this.isEmbeddedActivityApplication()
                      ? this.isPartyFull()
                          ? x.NW.string(x.t.jfrMtr)
                          : this.hasPartySize() && 0 !== u
                            ? x.NW.formatToPlainString(x.t.XWapnZ, { number: u - d })
                            : null
                      : x.NW.formatToPlainString(x.t.SqJBnJ, { name: o })
            : x.NW.string(x.t.c3EWuL);
    }
    renderActionButton() {
        let { isInBrowser: e, isPreview: t, isGameLaunchable: n, isSender: i, partyId: a, activity: o, message: s, renderSpotifyJoinButton: c, renderCustomButton: d } = this.props,
            u = {
                className: E.actionButton,
                size: l.zxk.Sizes.SMALL
            },
            p = null != d ? d(u) : null;
        return null != p
            ? p
            : !this.isDeadInvite() && this.isActionType(v.mFx.LISTEN) && null != a && null != s && null != o && (0, y.Ps)(a)
              ? c(
                    N(j({}, u), {
                        activity: o,
                        user: s.author
                    })
                )
              : (0, r.jsx)(
                    l.zxk,
                    N(
                        j(
                            {},
                            u,
                            (() =>
                                t || !e || this.isDeadInvite() || this.isEmbeddedActivityApplication()
                                    ? this.canJoin()
                                        ? {
                                              children: x.NW.string(x.t.VJlc0d),
                                              onClick: this.handleJoin
                                          }
                                        : this.canSync()
                                          ? {
                                                children: x.NW.string(x.t.VJlc0d),
                                                onClick: this.handleSync
                                            }
                                          : this.canSendInvite()
                                            ? {
                                                  children: x.NW.string(x.t['hC/Ze3']),
                                                  onClick: this.handleInvite,
                                                  disabled: i
                                              }
                                            : this.isInParty()
                                              ? {
                                                    children: x.NW.string(x.t.KC26NT),
                                                    disabled: !0
                                                }
                                              : {
                                                    children: this.isActionType(v.mFx.JOIN_REQUEST) ? x.NW.string(x.t['hC/Ze3']) : x.NW.string(x.t.VJlc0d),
                                                    disabled: !0
                                                }
                                    : {
                                          children: x.NW.string(x.t.gUZonZ),
                                          onClick: this.handleDownloadApp
                                      })()
                        ),
                        {
                            color: (e || n) && !this.isDeadInvite() ? l.zxk.Colors.GREEN : l.zxk.Colors.PRIMARY,
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
            l = this.hasPartySize() || this.isActionType(v.mFx.LISTEN) || this.isActionType(v.mFx.WATCH);
        if (null == e || this.isDeadInvite() || !l || n) return null;
        let s = [...t],
            c = Math.min(a, 6);
        for (; s.length < c; )
            s.push({
                user: new p.Z({ discriminator: '0005' }),
                unknownUser: !0
            });
        let d = Math.min(o, 106);
        for (; s.length < d; ) s.push(null);
        return (0, r.jsx)(u.Z, {
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
            a = this.isActionType(v.mFx.JOIN) || this.isActionType(v.mFx.JOIN_REQUEST),
            c = this.isDeadInvite(),
            d = null;
        null == t || null == i || a
            ? !a && c && (d = (0, r.jsx)('div', { className: E.artworkSpotifySessionEnded }))
            : (d = (0, r.jsx)('img', {
                  alt: '',
                  src: t,
                  className: (0, f.l)(E, 'artwork', this.getActionableMode())
              }));
        let u = null != i && null != d && null != i.assets && null != i.assets.large_text && '' !== i.assets.large_text && !c && (0, b.Z)(i) ? i.assets.large_text : null,
            p =
                null != u
                    ? (0, r.jsx)(l.ua7, {
                          text: u,
                          children: (e) => {
                              let { onMouseEnter: t, onMouseLeave: n } = e;
                              return (0, r.jsx)(l.eee, {
                                  onClick: this.handleOpenSpotifyAlbum,
                                  onMouseEnter: t,
                                  onMouseLeave: n,
                                  children: d
                              });
                          }
                      })
                    : d;
        return (0, r.jsxs)('div', {
            className: o()(E.invite, e),
            children: [
                (0, r.jsx)('div', {
                    className: E.coverImageWrapper,
                    children: (0, r.jsx)('div', {
                        className: o()((0, f.l)(E, 'coverImage', this.getActionableMode()), null != d ? E.blurred : null),
                        style: { backgroundImage: null != t ? "url('".concat(t, "')") : void 0 }
                    })
                }),
                (0, r.jsxs)(s.Z, {
                    className: E.fullHeight,
                    children: [
                        (0, r.jsxs)(s.Z, {
                            direction: s.Z.Direction.VERTICAL,
                            children: [
                                (0, r.jsx)(l.Text, {
                                    className: E.header,
                                    variant: 'text-sm/medium',
                                    color: 'text-muted',
                                    children: this.renderHeaderText()
                                }),
                                (0, r.jsx)(s.Z.Child, {
                                    className: E.partyStatus,
                                    children: this.renderPartyStatus()
                                }),
                                (0, r.jsxs)(s.Z, {
                                    align: s.Z.Align.END,
                                    children: [
                                        (0, r.jsxs)(s.Z, {
                                            align: s.Z.Align.CENTER,
                                            className: E.actionAndParty,
                                            basis: 0,
                                            style: { marginRight: 0 },
                                            children: [this.renderActionButton(), this.renderParty()]
                                        }),
                                        null == d && a
                                            ? (0, r.jsx)('div', {
                                                  className: E.name,
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
                (0, r.jsx)(l.eee, {
                    href: m.Z.getArticleURL(this.getHelpdeskArticleURL()),
                    className: E.helpIcon,
                    children: (0, r.jsx)(l.idN, {
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
                let { onJoin: e } = this.props;
                null == e || e();
            }),
            O(this, 'handleInvite', () => {
                let { onInvite: e } = this.props;
                null == e || e();
            }),
            O(this, 'handleSync', () => {
                let { onSync: e } = this.props;
                null == e || e();
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
                let { renderUserPopout: i, guildId: a } = this.props;
                return null != e
                    ? (0, r.jsx)(
                          C,
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
let S = I;
