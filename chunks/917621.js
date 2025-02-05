n.d(t, { Z: () => A }), n(47120), n(653041);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(692547),
    o = n(481060),
    c = n(600164),
    d = n(424678),
    u = n(184301),
    m = n(237583),
    _ = n(598077),
    h = n(63063),
    p = n(153066),
    g = n(51144),
    f = n(620662),
    x = n(994339),
    C = n(503438),
    v = n(981631),
    E = n(616922),
    I = n(388032),
    N = n(626763);
function S(e, t, n) {
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
class T extends l.PureComponent {
    render() {
        let { member: e, className: t, guildId: n } = this.props;
        return (0, i.jsx)(o.yRy, {
            renderPopout: this.renderUserPopout,
            position: 'left',
            preload: () => (0, u.Z)(e.user.id, e.user.getAvatarURL(n, 80), { guildId: n }),
            children: (l) => {
                var a;
                return (0, i.jsx)(o.ua7, {
                    text: e.unknownUser ? null : null !== (a = e.nick) && void 0 !== a ? a : g.ZP.getName(e.user),
                    children: (a) =>
                        (0, i.jsx)(o.P3F, {
                            className: e.unknownUser ? N.partyMember : N.partyMemberKnown,
                            ...a,
                            ...l,
                            children: (0, i.jsx)(o.qEK, {
                                src: e.user.getAvatarURL(n, 24),
                                size: o.EFr.SIZE_24,
                                className: r()(N.partyAvatar, t),
                                'aria-label': e.user.username
                            })
                        })
                });
            }
        });
    }
    constructor(...e) {
        super(...e),
            S(this, 'renderUserPopout', (e) => {
                let { renderUserPopout: t, member: n } = this.props;
                return n.unknownUser ? null : t(n.user, e);
            });
    }
}
class b extends l.PureComponent {
    isDeadInvite() {
        let { isPreview: e, message: t, activity: n, applicationId: i } = this.props;
        return !e && !(null != t && (0, x.Z)(n, t, i));
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
        return (0, f.Z)(this.props.activity, v.xjy.EMBEDDED);
    }
    canJoin() {
        let { activity: e, isPreview: t, isGameLaunchable: n, isInBrowser: i } = this.props;
        return !!t || (!(this.isDeadInvite() || !this.isActionType(v.mFx.JOIN) || !(0, f.Z)(e, v.xjy.JOIN) || !this.hasPartySize() || this.isPartyFull() || this.isInParty()) && (!!this.isEmbeddedActivityApplication() || (!i && !!n)));
    }
    canSendInvite() {
        let { activity: e, isPreview: t } = this.props;
        return !!t || !(this.isDeadInvite() || !this.isActionType(v.mFx.JOIN_REQUEST) || !(0, f.Z)(e, v.xjy.JOIN) || !this.hasPartySize() || this.isPartyFull());
    }
    canSync() {
        let { activity: e, isPreview: t, isSyncable: n, isInBrowser: i } = this.props;
        return !!t || !((!this.isActionType(v.mFx.LISTEN) && !this.isActionType(v.mFx.WATCH)) || this.isDeadInvite() || !(0, f.Z)(e, v.xjy.SYNC) || i || !n || this.isInParty());
    }
    getHelpdeskArticleURL() {
        let { partyId: e } = this.props;
        return null != e && (0, E.Ps)(e) ? v.BhN.SPOTIFY_CONNECTION : v.BhN.RICH_PRESENCE_INTRODUCTION;
    }
    renderHeaderText() {
        let { activityActionType: e, name: t } = this.props;
        switch (e) {
            case v.mFx.LISTEN:
                return I.intl.formatToPlainString(I.t['/8czHx'], { name: t });
            case v.mFx.WATCH:
                return I.intl.formatToPlainString(I.t.BBJXVl, { name: t });
            case v.mFx.JOIN:
                return I.intl.string(I.t['hC/Ze3']);
            case v.mFx.JOIN_REQUEST:
            default:
                return I.intl.string(I.t.Ckxb6u);
        }
    }
    renderPartyStatus() {
        let { activityActionType: e, isGameLaunchable: t, isSyncable: n, isPreview: l, isInBrowser: a, name: r, activity: s } = this.props,
            [c, u] = this.getPartySize();
        if (this.isDeadInvite())
            switch (e) {
                case v.mFx.LISTEN:
                    return I.intl.string(I.t['84qx9v']);
                case v.mFx.WATCH:
                    return I.intl.string(I.t.B9kbnZ);
                case v.mFx.JOIN:
                case v.mFx.JOIN_REQUEST:
                default:
                    return I.intl.string(I.t['2Gbof3']);
            }
        return !a || l || this.isEmbeddedActivityApplication() || e !== v.mFx.JOIN
            ? this.isActionType(v.mFx.LISTEN) || this.isActionType(v.mFx.WATCH)
                ? null != s && null != s.details && null != s.state && (0, C.Z)(s)
                    ? [
                          (0, i.jsx)(
                              'div',
                              {
                                  className: N.details,
                                  children: (0, i.jsx)(o.eee, {
                                      className: N.textLink,
                                      onClick: this.handleOpenSpotifyTrack,
                                      children: s.details
                                  })
                              },
                              'details'
                          ),
                          (0, i.jsx)(
                              'div',
                              {
                                  className: N.state,
                                  children: I.intl.format(I.t.uU9le3, {
                                      artists: s.state,
                                      artistsHook: (e, t) =>
                                          null != s.state
                                              ? (0, i.jsx)(
                                                    d.Z,
                                                    {
                                                        artists: s.state,
                                                        linkClassName: N.textLink,
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
                      ? I.intl.string(I.t.gXYoq6)
                      : I.intl.string(I.t.eyKDl5)
                : this.isActionType(v.mFx.JOIN_REQUEST)
                  ? this.isPartyFull()
                      ? I.intl.string(I.t.jfrMtr)
                      : this.hasPartySize() && 0 !== u
                        ? I.intl.formatToPlainString(I.t.XWapnZ, { number: u - c })
                        : null
                  : this.isInParty()
                    ? I.intl.string(I.t.KC26NT)
                    : t || n || l || this.isEmbeddedActivityApplication()
                      ? this.isPartyFull()
                          ? I.intl.string(I.t.jfrMtr)
                          : this.hasPartySize() && 0 !== u
                            ? I.intl.formatToPlainString(I.t.XWapnZ, { number: u - c })
                            : null
                      : I.intl.formatToPlainString(I.t.SqJBnJ, { name: r })
            : I.intl.string(I.t.c3EWuL);
    }
    renderActionButton() {
        let { isInBrowser: e, isPreview: t, isGameLaunchable: n, isSender: l, partyId: a, activity: r, message: s, renderSpotifyJoinButton: c, renderCustomButton: d } = this.props,
            u = {
                className: N.actionButton,
                size: o.zxk.Sizes.SMALL
            },
            m = null != d ? d(u) : null;
        return null != m
            ? m
            : !this.isDeadInvite() && this.isActionType(v.mFx.LISTEN) && null != a && null != s && null != r && (0, E.Ps)(a)
              ? c({
                    ...u,
                    activity: r,
                    user: s.author
                })
              : (0, i.jsx)(o.zxk, {
                    ...u,
                    ...(() =>
                        t || !e || this.isDeadInvite() || this.isEmbeddedActivityApplication()
                            ? this.canJoin()
                                ? {
                                      children: I.intl.string(I.t.VJlc0d),
                                      onClick: this.handleJoin
                                  }
                                : this.canSync()
                                  ? {
                                        children: I.intl.string(I.t.VJlc0d),
                                        onClick: this.handleSync
                                    }
                                  : this.canSendInvite()
                                    ? {
                                          children: I.intl.string(I.t['hC/Ze3']),
                                          onClick: this.handleInvite,
                                          disabled: l
                                      }
                                    : {
                                          children: this.isActionType(v.mFx.JOIN_REQUEST) ? I.intl.string(I.t['hC/Ze3']) : I.intl.string(I.t.VJlc0d),
                                          disabled: !0
                                      }
                            : {
                                  children: I.intl.string(I.t.gUZonZ),
                                  onClick: this.handleDownloadApp
                              })(),
                    color: (e || n) && !this.isDeadInvite() ? o.zxk.Colors.GREEN : o.zxk.Colors.PRIMARY,
                    submitting: this.props.isLoading
                });
    }
    renderMoreUsers(e, t, n) {
        return (0, i.jsx)(
            'div',
            {
                className: N.moreUsers,
                children: e
            },
            n
        );
    }
    renderParty() {
        let { partyId: e, partyMembers: t, hideParty: n, guildId: l } = this.props,
            [a, r] = this.getPartySize(),
            s = this.hasPartySize() || this.isActionType(v.mFx.LISTEN) || this.isActionType(v.mFx.WATCH);
        if (null == e || this.isDeadInvite() || !s || n) return null;
        let o = [...t],
            c = Math.min(a, 6);
        for (; o.length < c; )
            o.push({
                user: new _.Z({ discriminator: '0005' }),
                unknownUser: !0
            });
        let d = Math.min(r, 106);
        for (; o.length < d; ) o.push(null);
        return (0, i.jsx)(m.Z, {
            guildId: l,
            className: N.partyMembers,
            users: o,
            max: r > 0 ? Math.min(r, 6) : 6,
            renderUser: this.renderUser,
            renderMoreUsers: this.renderMoreUsers
        });
    }
    render() {
        let { className: e, coverImage: t, name: n, activity: l } = this.props,
            a = this.isActionType(v.mFx.JOIN) || this.isActionType(v.mFx.JOIN_REQUEST),
            d = this.isDeadInvite(),
            u = null;
        null == t || null == l || a
            ? !a && d && (u = (0, i.jsx)('div', { className: N.artworkSpotifySessionEnded }))
            : (u = (0, i.jsx)('img', {
                  alt: '',
                  src: t,
                  className: (0, p.l)(N, 'artwork', this.getActionableMode())
              }));
        let m = null != l && null != u && null != l.assets && null != l.assets.large_text && '' !== l.assets.large_text && !d && (0, C.Z)(l) ? l.assets.large_text : null,
            _ =
                null != m
                    ? (0, i.jsx)(o.ua7, {
                          text: m,
                          children: (e) => {
                              let { onMouseEnter: t, onMouseLeave: n } = e;
                              return (0, i.jsx)(o.eee, {
                                  onClick: this.handleOpenSpotifyAlbum,
                                  onMouseEnter: t,
                                  onMouseLeave: n,
                                  children: u
                              });
                          }
                      })
                    : u;
        return (0, i.jsxs)('div', {
            className: r()(N.invite, e),
            children: [
                (0, i.jsx)('div', {
                    className: N.coverImageWrapper,
                    children: (0, i.jsx)('div', {
                        className: r()((0, p.l)(N, 'coverImage', this.getActionableMode()), null != u ? N.blurred : null),
                        style: { backgroundImage: null != t ? "url('".concat(t, "')") : void 0 }
                    })
                }),
                (0, i.jsxs)(c.Z, {
                    className: N.fullHeight,
                    children: [
                        (0, i.jsxs)(c.Z, {
                            direction: c.Z.Direction.VERTICAL,
                            children: [
                                (0, i.jsx)('div', {
                                    className: N.header,
                                    children: this.renderHeaderText()
                                }),
                                (0, i.jsx)(c.Z.Child, {
                                    className: N.partyStatus,
                                    children: this.renderPartyStatus()
                                }),
                                (0, i.jsxs)(c.Z, {
                                    align: c.Z.Align.END,
                                    children: [
                                        (0, i.jsxs)(c.Z, {
                                            align: c.Z.Align.CENTER,
                                            className: N.actionAndParty,
                                            basis: 0,
                                            style: { marginRight: 0 },
                                            children: [this.renderActionButton(), this.renderParty()]
                                        }),
                                        null == u && a
                                            ? (0, i.jsx)('div', {
                                                  className: N.name,
                                                  children: n
                                              })
                                            : null
                                    ]
                                })
                            ]
                        }),
                        _
                    ]
                }),
                (0, i.jsx)(o.eee, {
                    href: h.Z.getArticleURL(this.getHelpdeskArticleURL()),
                    className: N.helpIcon,
                    children: (0, i.jsx)(o.idN, {
                        color: s.Z.unsafe_rawColors.PRIMARY_300.css,
                        size: 'xxs'
                    })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            S(this, 'handleJoin', () => {
                let { onJoin: e } = this.props;
                null == e || e();
            }),
            S(this, 'handleInvite', () => {
                let { onInvite: e } = this.props;
                null == e || e();
            }),
            S(this, 'handleSync', () => {
                let { onSync: e } = this.props;
                null == e || e();
            }),
            S(this, 'handleDownloadApp', () => {
                let { onDownloadApp: e } = this.props;
                null == e || e();
            }),
            S(this, 'handleOpenSpotifyTrack', () => {
                let { activity: e, onOpenSpotifyTrack: t } = this.props;
                null != e && (null == t || t(e));
            }),
            S(this, 'handleOpenSpotifyArtist', (e) => {
                let { activity: t, onOpenSpotifyArtist: n, message: i } = this.props;
                null != t && null != i && (null == n || n(t, i.author.id, e));
            }),
            S(this, 'handleOpenSpotifyAlbum', () => {
                let { activity: e, onOpenSpotifyAlbum: t, message: n } = this.props;
                null != e && null != n && (null == t || t(e, n.author.id));
            }),
            S(this, 'renderUser', (e, t, n) => {
                let { renderUserPopout: l, guildId: a } = this.props;
                return null != e
                    ? (0, i.jsx)(
                          T,
                          {
                              member: e,
                              renderUserPopout: l,
                              className: t,
                              guildId: a
                          },
                          n
                      )
                    : (0, i.jsx)('div', { className: r()(N.partyMemberEmpty, t) }, n);
            });
    }
}
let A = b;
