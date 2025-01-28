n(47120), n(653041);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(692547),
    s = n(481060),
    c = n(600164),
    u = n(424678),
    d = n(184301),
    m = n(237583),
    h = n(598077),
    f = n(63063),
    p = n(153066),
    _ = n(51144),
    g = n(620662),
    E = n(994339),
    C = n(503438),
    I = n(981631),
    x = n(616922),
    N = n(388032),
    v = n(626763);
function T(e, t, n) {
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
class S extends r.PureComponent {
    render() {
        let { member: e, className: t, guildId: n } = this.props;
        return (0, i.jsx)(s.Popout, {
            renderPopout: this.renderUserPopout,
            position: 'left',
            preload: () => (0, d.Z)(e.user.id, e.user.getAvatarURL(n, 80), { guildId: n }),
            children: (r) => {
                var l;
                return (0, i.jsx)(s.Tooltip, {
                    text: e.unknownUser ? null : null !== (l = e.nick) && void 0 !== l ? l : _.ZP.getName(e.user),
                    children: (l) =>
                        (0, i.jsx)(s.Clickable, {
                            className: e.unknownUser ? v.partyMember : v.partyMemberKnown,
                            ...l,
                            ...r,
                            children: (0, i.jsx)(s.Avatar, {
                                src: e.user.getAvatarURL(n, 24),
                                size: s.AvatarSizes.SIZE_24,
                                className: a()(v.partyAvatar, t),
                                'aria-label': e.user.username
                            })
                        })
                });
            }
        });
    }
    constructor(...e) {
        super(...e),
            T(this, 'renderUserPopout', (e) => {
                let { renderUserPopout: t, member: n } = this.props;
                return n.unknownUser ? null : t(n.user, e);
            });
    }
}
class A extends r.PureComponent {
    isDeadInvite() {
        let { isPreview: e, message: t, activity: n, applicationId: i } = this.props;
        return !e && !(null != t && (0, E.Z)(n, t, i));
    }
    getPartySize() {
        let { activity: e } = this.props;
        return null == e || null == e.party || null == e.party.size || e.party.size.length < 2 ? [-1, -1] : e.party.size;
    }
    getActionableMode() {
        return [I.mFx.LISTEN, I.mFx].includes(this.props.activityActionType) || this.props.isPreview || this.canJoin() ? 'Actionable' : 'NotActionable';
    }
    isInParty() {
        let { activity: e, myPartyId: t, isPreview: n } = this.props;
        return !n && null != e && null != e.party && t === e.party.id;
    }
    isPartyFull() {
        let [e, t] = this.getPartySize();
        return e > -1 && e >= t;
    }
    hasPartySize() {
        let [e, t] = this.getPartySize();
        return e > -1 && t > -1;
    }
    isActionType(e) {
        return this.props.activityActionType === e;
    }
    isEmbeddedActivityApplication() {
        return (0, g.Z)(this.props.activity, I.xjy.EMBEDDED);
    }
    canJoin() {
        let { activity: e, isPreview: t, isGameLaunchable: n, isInBrowser: i } = this.props;
        return !!t || (!(this.isDeadInvite() || !this.isActionType(I.mFx.JOIN) || !(0, g.Z)(e, I.xjy.JOIN) || !this.hasPartySize() || this.isPartyFull() || this.isInParty()) && (!!this.isEmbeddedActivityApplication() || (!i && !!n && !0)));
    }
    canSendInvite() {
        let { activity: e, isPreview: t } = this.props;
        return !!t || (!(this.isDeadInvite() || !this.isActionType(I.mFx.JOIN_REQUEST) || !(0, g.Z)(e, I.xjy.JOIN) || !this.hasPartySize() || this.isPartyFull()) && !0);
    }
    canSync() {
        let { activity: e, isPreview: t, isSyncable: n, isInBrowser: i } = this.props;
        return !!t || (!((!this.isActionType(I.mFx.LISTEN) && !this.isActionType(I.mFx.WATCH)) || this.isDeadInvite() || !(0, g.Z)(e, I.xjy.SYNC) || i || !n || this.isInParty()) && !0);
    }
    getHelpdeskArticleURL() {
        let { partyId: e } = this.props;
        return null != e && (0, x.Ps)(e) ? I.BhN.SPOTIFY_CONNECTION : I.BhN.RICH_PRESENCE_INTRODUCTION;
    }
    renderHeaderText() {
        let { activityActionType: e, name: t } = this.props;
        switch (e) {
            case I.mFx.LISTEN:
                return N.intl.formatToPlainString(N.t['/8czHx'], { name: t });
            case I.mFx.WATCH:
                return N.intl.formatToPlainString(N.t.BBJXVl, { name: t });
            case I.mFx.JOIN:
                return N.intl.string(N.t['hC/Ze3']);
            case I.mFx.JOIN_REQUEST:
            default:
                return N.intl.string(N.t.Ckxb6u);
        }
    }
    renderPartyStatus() {
        let { activityActionType: e, isGameLaunchable: t, isSyncable: n, isPreview: r, isInBrowser: l, name: a, activity: o } = this.props,
            [c, d] = this.getPartySize();
        if (this.isDeadInvite())
            switch (e) {
                case I.mFx.LISTEN:
                    return N.intl.string(N.t['84qx9v']);
                case I.mFx.WATCH:
                    return N.intl.string(N.t.B9kbnZ);
                case I.mFx.JOIN:
                case I.mFx.JOIN_REQUEST:
                default:
                    return N.intl.string(N.t['2Gbof3']);
            }
        if (l && !r && !this.isEmbeddedActivityApplication() && e === I.mFx.JOIN) return N.intl.string(N.t.c3EWuL);
        if (this.isActionType(I.mFx.LISTEN) || this.isActionType(I.mFx.WATCH))
            return null != o && null != o.details && null != o.state && (0, C.Z)(o)
                ? [
                      (0, i.jsx)(
                          'div',
                          {
                              className: v.details,
                              children: (0, i.jsx)(s.Anchor, {
                                  className: v.textLink,
                                  onClick: this.handleOpenSpotifyTrack,
                                  children: o.details
                              })
                          },
                          'details'
                      ),
                      (0, i.jsx)(
                          'div',
                          {
                              className: v.state,
                              children: N.intl.format(N.t.uU9le3, {
                                  artists: o.state,
                                  artistsHook: (e, t) =>
                                      null != o.state
                                          ? (0, i.jsx)(
                                                u.Z,
                                                {
                                                    artists: o.state,
                                                    linkClassName: v.textLink,
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
                : this.isActionType(I.mFx.LISTEN)
                  ? N.intl.string(N.t.gXYoq6)
                  : N.intl.string(N.t.eyKDl5);
        return this.isActionType(I.mFx.JOIN_REQUEST) ? (this.isPartyFull() ? N.intl.string(N.t.jfrMtr) : N.intl.formatToPlainString(N.t.XWapnZ, { number: d - c })) : this.isInParty() ? N.intl.string(N.t.KC26NT) : t || n || r || this.isEmbeddedActivityApplication() ? (this.isPartyFull() ? N.intl.string(N.t.jfrMtr) : this.hasPartySize() ? N.intl.formatToPlainString(N.t.XWapnZ, { number: d - c }) : N.intl.string(N.t.VJlc0d)) : N.intl.formatToPlainString(N.t.SqJBnJ, { name: a });
    }
    renderActionButton() {
        let { isInBrowser: e, isPreview: t, isGameLaunchable: n, isSender: r, partyId: l, activity: a, message: o, renderSpotifyJoinButton: c, renderCustomButton: u } = this.props,
            d = {
                className: v.actionButton,
                size: s.Button.Sizes.SMALL
            },
            m = null != u ? u(d) : null;
        return null != m
            ? m
            : !this.isDeadInvite() && this.isActionType(I.mFx.LISTEN) && null != l && null != o && null != a && (0, x.Ps)(l)
              ? c({
                    ...d,
                    activity: a,
                    user: o.author
                })
              : (0, i.jsx)(s.Button, {
                    ...d,
                    ...(() => {
                        if (!t && e && !this.isDeadInvite() && !this.isEmbeddedActivityApplication())
                            return {
                                children: N.intl.string(N.t.gUZonZ),
                                onClick: this.handleDownloadApp
                            };
                        if (this.canJoin())
                            return {
                                children: N.intl.string(N.t.VJlc0d),
                                onClick: this.handleJoin
                            };
                        if (this.canSync())
                            return {
                                children: N.intl.string(N.t.VJlc0d),
                                onClick: this.handleSync
                            };
                        if (this.canSendInvite())
                            return {
                                children: N.intl.string(N.t['hC/Ze3']),
                                onClick: this.handleInvite,
                                disabled: r
                            };
                        return {
                            children: this.isActionType(I.mFx.JOIN_REQUEST) ? N.intl.string(N.t['hC/Ze3']) : N.intl.string(N.t.VJlc0d),
                            disabled: !0
                        };
                    })(),
                    color: (e || n) && !this.isDeadInvite() ? s.Button.Colors.GREEN : s.Button.Colors.PRIMARY,
                    submitting: this.props.isLoading
                });
    }
    renderMoreUsers(e, t, n) {
        return (0, i.jsx)(
            'div',
            {
                className: v.moreUsers,
                children: e
            },
            n
        );
    }
    renderParty() {
        let { partyId: e, partyMembers: t, hideParty: n, guildId: r } = this.props,
            [l, a] = this.getPartySize(),
            o = this.hasPartySize() || this.isActionType(I.mFx.LISTEN) || this.isActionType(I.mFx.WATCH);
        if (null == e || this.isDeadInvite() || !o || n) return null;
        let s = [...t],
            c = Math.min(l, 6);
        for (; s.length < c; )
            s.push({
                user: new h.Z({ discriminator: '0005' }),
                unknownUser: !0
            });
        let u = Math.min(a, 106);
        for (; s.length < u; ) s.push(null);
        return (0, i.jsx)(m.Z, {
            guildId: r,
            className: v.partyMembers,
            users: s,
            max: a > 0 ? Math.min(a, 6) : 6,
            renderUser: this.renderUser,
            renderMoreUsers: this.renderMoreUsers
        });
    }
    render() {
        let { className: e, coverImage: t, name: n, activity: r } = this.props,
            l = this.isActionType(I.mFx.JOIN) || this.isActionType(I.mFx.JOIN_REQUEST),
            u = this.isDeadInvite(),
            d = null;
        null == t || null == r || l
            ? !l && u && (d = (0, i.jsx)('div', { className: v.artworkSpotifySessionEnded }))
            : (d = (0, i.jsx)('img', {
                  alt: '',
                  src: t,
                  className: (0, p.l)(v, 'artwork', this.getActionableMode())
              }));
        let m = null != r && null != d && null != r.assets && null != r.assets.large_text && '' !== r.assets.large_text && !u && (0, C.Z)(r) ? r.assets.large_text : null,
            h =
                null != m
                    ? (0, i.jsx)(s.Tooltip, {
                          text: m,
                          children: (e) => {
                              let { onMouseEnter: t, onMouseLeave: n } = e;
                              return (0, i.jsx)(s.Anchor, {
                                  onClick: this.handleOpenSpotifyAlbum,
                                  onMouseEnter: t,
                                  onMouseLeave: n,
                                  children: d
                              });
                          }
                      })
                    : d;
        return (0, i.jsxs)('div', {
            className: a()(v.invite, e),
            children: [
                (0, i.jsx)('div', {
                    className: v.coverImageWrapper,
                    children: (0, i.jsx)('div', {
                        className: a()((0, p.l)(v, 'coverImage', this.getActionableMode()), null != d ? v.blurred : null),
                        style: { backgroundImage: null != t ? "url('".concat(t, "')") : void 0 }
                    })
                }),
                (0, i.jsxs)(c.Z, {
                    className: v.fullHeight,
                    children: [
                        (0, i.jsxs)(c.Z, {
                            direction: c.Z.Direction.VERTICAL,
                            children: [
                                (0, i.jsx)('div', {
                                    className: v.header,
                                    children: this.renderHeaderText()
                                }),
                                (0, i.jsx)(c.Z.Child, {
                                    className: v.partyStatus,
                                    children: this.renderPartyStatus()
                                }),
                                (0, i.jsxs)(c.Z, {
                                    align: c.Z.Align.END,
                                    children: [
                                        (0, i.jsxs)(c.Z, {
                                            align: c.Z.Align.CENTER,
                                            className: v.actionAndParty,
                                            basis: 0,
                                            style: { marginRight: 0 },
                                            children: [this.renderActionButton(), this.renderParty()]
                                        }),
                                        null == d && l
                                            ? (0, i.jsx)('div', {
                                                  className: v.name,
                                                  children: n
                                              })
                                            : null
                                    ]
                                })
                            ]
                        }),
                        h
                    ]
                }),
                (0, i.jsx)(s.Anchor, {
                    href: f.Z.getArticleURL(this.getHelpdeskArticleURL()),
                    className: v.helpIcon,
                    children: (0, i.jsx)(s.CircleQuestionIcon, {
                        color: o.Z.unsafe_rawColors.PRIMARY_300.css,
                        size: 'xxs'
                    })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            T(this, 'handleJoin', () => {
                let { onJoin: e } = this.props;
                null == e || e();
            }),
            T(this, 'handleInvite', () => {
                let { onInvite: e } = this.props;
                null == e || e();
            }),
            T(this, 'handleSync', () => {
                let { onSync: e } = this.props;
                null == e || e();
            }),
            T(this, 'handleDownloadApp', () => {
                let { onDownloadApp: e } = this.props;
                null == e || e();
            }),
            T(this, 'handleOpenSpotifyTrack', () => {
                let { activity: e, onOpenSpotifyTrack: t } = this.props;
                null != e && (null == t || t(e));
            }),
            T(this, 'handleOpenSpotifyArtist', (e) => {
                let { activity: t, onOpenSpotifyArtist: n, message: i } = this.props;
                null != t && null != i && (null == n || n(t, i.author.id, e));
            }),
            T(this, 'handleOpenSpotifyAlbum', () => {
                let { activity: e, onOpenSpotifyAlbum: t, message: n } = this.props;
                null != e && null != n && (null == t || t(e, n.author.id));
            }),
            T(this, 'renderUser', (e, t, n) => {
                let { renderUserPopout: r, guildId: l } = this.props;
                return null != e
                    ? (0, i.jsx)(
                          S,
                          {
                              member: e,
                              renderUserPopout: r,
                              className: t,
                              guildId: l
                          },
                          n
                      )
                    : (0, i.jsx)('div', { className: a()(v.partyMemberEmpty, t) }, n);
            });
    }
}
t.Z = A;
