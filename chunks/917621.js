n.d(t, { Z: () => S }), n(47120), n(653041);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(481060),
    s = n(600164),
    c = n(424678),
    u = n(184301),
    d = n(237583),
    p = n(598077),
    m = n(63063),
    f = n(153066),
    h = n(51144),
    g = n(620662),
    _ = n(994339),
    b = n(503438),
    x = n(981631),
    y = n(616922),
    E = n(388032),
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
                O(e, t, n[t]);
            });
    }
    return e;
}
function j(e, t) {
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
    let { member: t, className: n, guildId: a, renderUserPopout: s } = e,
        c = i.useRef(null);
    return t.unknownUser
        ? (0, r.jsx)('div', {
              className: v.partyMember,
              children: (0, r.jsx)(o.qEK, {
                  src: t.user.getAvatarURL(a, (0, o.pxk)(o.EFr.SIZE_24)),
                  size: o.EFr.SIZE_24,
                  className: l()(v.partyAvatar, n),
                  'aria-label': t.user.username
              })
          })
        : (0, r.jsx)(o.yRy, {
              targetElementRef: c,
              position: 'left',
              renderPopout: (e) => s(t.user, e),
              preload: () => (0, u.Z)(t.user.id, t.user.getAvatarURL(a, (0, o.pxk)(o.EFr.SIZE_80)), { guildId: a }),
              children: (e) => {
                  var i;
                  return (0, r.jsx)(o.ua7, {
                      text: null != (i = t.nick) ? i : h.ZP.getName(t.user),
                      children: (i) =>
                          (0, r.jsx)(
                              o.P3F,
                              j(
                                  N(
                                      {
                                          innerRef: c,
                                          className: v.partyMemberKnown
                                      },
                                      i,
                                      e
                                  ),
                                  {
                                      children: (0, r.jsx)(o.qEK, {
                                          src: t.user.getAvatarURL(a, (0, o.pxk)(o.EFr.SIZE_24)),
                                          size: o.EFr.SIZE_24,
                                          className: l()(v.partyAvatar, n),
                                          'aria-label': t.user.username
                                      })
                                  }
                              )
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
        return [x.mFx.LISTEN, x.mFx].includes(this.props.activityActionType) || this.props.isPreview || this.canJoin() ? 'Actionable' : 'NotActionable';
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
        return (0, g.Z)(this.props.activity, x.xjy.EMBEDDED);
    }
    canJoin() {
        let { activity: e, isPreview: t, isGameLaunchable: n, isInBrowser: r, isSender: i } = this.props;
        return !!t || (!(i || this.isDeadInvite() || !this.isActionType(x.mFx.JOIN) || !(0, g.Z)(e, x.xjy.JOIN) || !this.hasPartySize() || this.isPartyFull() || this.isInParty()) && (!!this.isEmbeddedActivityApplication() || (!r && !!n)));
    }
    canSendInvite() {
        let { activity: e, isPreview: t } = this.props;
        return !!t || !(this.isDeadInvite() || !this.isActionType(x.mFx.JOIN_REQUEST) || !(0, g.Z)(e, x.xjy.JOIN) || !this.hasPartySize() || this.isPartyFull());
    }
    canSync() {
        let { activity: e, isPreview: t, isSyncable: n, isInBrowser: r } = this.props;
        return !!t || !((!this.isActionType(x.mFx.LISTEN) && !this.isActionType(x.mFx.WATCH)) || this.isDeadInvite() || !(0, g.Z)(e, x.xjy.SYNC) || r || !n || this.isInParty());
    }
    getHelpdeskArticleURL() {
        let { partyId: e } = this.props;
        return null != e && (0, y.Ps)(e) ? x.BhN.SPOTIFY_CONNECTION : x.BhN.RICH_PRESENCE_INTRODUCTION;
    }
    renderHeaderText() {
        let { activityActionType: e, name: t } = this.props;
        switch (e) {
            case x.mFx.LISTEN:
                return E.NW.formatToPlainString(E.t['/8czHx'], { name: t });
            case x.mFx.WATCH:
                return E.NW.formatToPlainString(E.t.BBJXVl, { name: t });
            case x.mFx.JOIN:
                return E.NW.string(E.t['hC/Ze3']);
            case x.mFx.JOIN_REQUEST:
            default:
                return E.NW.string(E.t.Ckxb6u);
        }
    }
    renderPartyStatus() {
        let { activityActionType: e, isGameLaunchable: t, isSyncable: n, isPreview: i, isInBrowser: a, name: l, activity: s } = this.props,
            [u, d] = this.getPartySize();
        if (this.isDeadInvite())
            switch (e) {
                case x.mFx.LISTEN:
                    return E.NW.string(E.t['84qx9v']);
                case x.mFx.WATCH:
                    return E.NW.string(E.t.B9kbnZ);
                case x.mFx.JOIN:
                case x.mFx.JOIN_REQUEST:
                default:
                    return E.NW.string(E.t['2Gbof3']);
            }
        return !a || i || this.isEmbeddedActivityApplication() || e !== x.mFx.JOIN
            ? this.isActionType(x.mFx.LISTEN) || this.isActionType(x.mFx.WATCH)
                ? null != s && null != s.details && null != s.state && (0, b.Z)(s)
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
                                  children: E.NW.format(E.t.uU9le3, {
                                      artists: s.state,
                                      artistsHook: (e, t) =>
                                          null != s.state
                                              ? (0, r.jsx)(
                                                    c.Z,
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
                    : this.isActionType(x.mFx.LISTEN)
                      ? E.NW.string(E.t.gXYoq6)
                      : E.NW.string(E.t.eyKDl5)
                : this.isActionType(x.mFx.JOIN_REQUEST)
                  ? this.isPartyFull()
                      ? E.NW.string(E.t.jfrMtr)
                      : this.hasPartySize() && 0 !== d
                        ? E.NW.formatToPlainString(E.t.XWapnZ, { number: d - u })
                        : null
                  : this.isInParty()
                    ? E.NW.string(E.t.KC26NT)
                    : t || n || i || this.isEmbeddedActivityApplication()
                      ? this.isPartyFull()
                          ? E.NW.string(E.t.jfrMtr)
                          : this.hasPartySize() && 0 !== d
                            ? E.NW.formatToPlainString(E.t.XWapnZ, { number: d - u })
                            : null
                      : E.NW.formatToPlainString(E.t.SqJBnJ, { name: l })
            : E.NW.string(E.t.c3EWuL);
    }
    renderActionButton() {
        let { isInBrowser: e, isPreview: t, isGameLaunchable: n, isSender: i, partyId: a, activity: l, message: s, renderSpotifyJoinButton: c, renderCustomButton: u } = this.props,
            d = {
                className: v.actionButton,
                size: o.zxk.Sizes.SMALL
            },
            p = null != u ? u(d) : null;
        return null != p
            ? p
            : !this.isDeadInvite() && this.isActionType(x.mFx.LISTEN) && null != a && null != s && null != l && (0, y.Ps)(a)
              ? c(
                    j(N({}, d), {
                        activity: l,
                        user: s.author
                    })
                )
              : (0, r.jsx)(
                    o.zxk,
                    j(
                        N(
                            {},
                            d,
                            t || !e || this.isDeadInvite() || this.isEmbeddedActivityApplication()
                                ? this.canJoin()
                                    ? {
                                          children: E.NW.string(E.t.VJlc0d),
                                          onClick: this.handleJoin
                                      }
                                    : this.canSync()
                                      ? {
                                            children: E.NW.string(E.t.VJlc0d),
                                            onClick: this.handleSync
                                        }
                                      : this.canSendInvite()
                                        ? {
                                              children: E.NW.string(E.t['hC/Ze3']),
                                              onClick: this.handleInvite,
                                              disabled: i
                                          }
                                        : this.isInParty()
                                          ? {
                                                children: E.NW.string(E.t.KC26NT),
                                                disabled: !0
                                            }
                                          : {
                                                children: this.isActionType(x.mFx.JOIN_REQUEST) ? E.NW.string(E.t['hC/Ze3']) : E.NW.string(E.t.VJlc0d),
                                                disabled: !0
                                            }
                                : {
                                      children: E.NW.string(E.t.gUZonZ),
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
            [a, l] = this.getPartySize(),
            o = this.hasPartySize() || this.isActionType(x.mFx.LISTEN) || this.isActionType(x.mFx.WATCH);
        if (null == e || this.isDeadInvite() || !o || n) return null;
        let s = [...t],
            c = Math.min(a, 6);
        for (; s.length < c; )
            s.push({
                user: new p.Z({ discriminator: '0005' }),
                unknownUser: !0
            });
        let u = Math.min(l, 106);
        for (; s.length < u; ) s.push(null);
        return (0, r.jsx)(d.Z, {
            guildId: i,
            className: v.partyMembers,
            users: s,
            max: l > 0 ? Math.min(l, 6) : 6,
            renderUser: this.renderUser,
            renderMoreUsers: this.renderMoreUsers
        });
    }
    render() {
        let { className: e, coverImage: t, name: n, activity: i } = this.props,
            a = this.isActionType(x.mFx.JOIN) || this.isActionType(x.mFx.JOIN_REQUEST),
            c = this.isDeadInvite(),
            u = null;
        null == t || null == i || a
            ? !a && c && (u = (0, r.jsx)('div', { className: v.artworkSpotifySessionEnded }))
            : (u = (0, r.jsx)('img', {
                  alt: '',
                  src: t,
                  className: (0, f.l)(v, 'artwork', this.getActionableMode())
              }));
        let d = null != i && null != u && null != i.assets && null != i.assets.large_text && '' !== i.assets.large_text && !c && (0, b.Z)(i) ? i.assets.large_text : null,
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
            className: l()(v.invite, e),
            children: [
                (0, r.jsx)('div', {
                    className: v.coverImageWrapper,
                    children: (0, r.jsx)('div', {
                        className: l()((0, f.l)(v, 'coverImage', this.getActionableMode()), null != u ? v.blurred : null),
                        style: { backgroundImage: null != t ? "url('".concat(t, "')") : void 0 }
                    })
                }),
                (0, r.jsxs)(s.Z, {
                    className: v.fullHeight,
                    children: [
                        (0, r.jsxs)(s.Z, {
                            direction: s.Z.Direction.VERTICAL,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    className: v.header,
                                    variant: 'text-sm/medium',
                                    color: 'text-muted',
                                    children: this.renderHeaderText()
                                }),
                                (0, r.jsx)(s.Z.Child, {
                                    className: v.partyStatus,
                                    children: this.renderPartyStatus()
                                }),
                                (0, r.jsxs)(s.Z, {
                                    align: s.Z.Align.END,
                                    children: [
                                        (0, r.jsxs)(s.Z, {
                                            align: s.Z.Align.CENTER,
                                            className: v.actionAndParty,
                                            basis: 0,
                                            style: { marginRight: 0 },
                                            children: [this.renderActionButton(), this.renderParty()]
                                        }),
                                        null == u && a
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
                    href: m.Z.getArticleURL(this.getHelpdeskArticleURL()),
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
                    : (0, r.jsx)('div', { className: l()(v.partyMemberEmpty, t) }, n);
            });
    }
}
let S = I;
