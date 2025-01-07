n.d(t, {
    CN: function () {
        return j;
    },
    ZP: function () {
        return L;
    },
    eP: function () {
        return A;
    },
    hR: function () {
        return P;
    },
    jo: function () {
        return T;
    }
});
var i,
    l,
    r,
    a,
    o = n(200651),
    s = n(192379),
    c = n(120356),
    u = n.n(c),
    d = n(442837),
    h = n(481060),
    p = n(787014),
    f = n(924301),
    m = n(159300),
    g = n(152376),
    v = n(427679),
    C = n(155409),
    x = n(131704),
    I = n(199902),
    _ = n(430824),
    Z = n(496675),
    b = n(914010),
    S = n(281029),
    N = n(981631),
    E = n(388032),
    y = n(831746);
function j(e, t, n) {
    return null != t && !!t && !(0, S.ig)(n, e.type);
}
function T(e, t) {
    return null == t ? y.containerDefault : e > t ? y.containerDragAfter : y.containerDragBefore;
}
function P(e) {
    let { channel: t, disableManageChannels: n, tabIndex: i, forceShowButtons: l, hasChannelInfo: r = !1 } = e;
    if ((0, d.e7)([Z.Z, b.Z], () => n || b.Z.getGuildId() === N.I_8 || (!Z.Z.can(N.Plq.MANAGE_CHANNELS, t) && !Z.Z.can(N.Plq.MANAGE_ROLES, t) && !Z.Z.can(N.Plq.MANAGE_WEBHOOKS, t)) || ((0, x.r8)(t.type) && !Z.Z.can(N.Plq.VIEW_CHANNEL, t)) || (t.isGuildVocal() && !Z.Z.can(N.Plq.CONNECT, t)) || !x.dF.has(t.type))) return null;
    function a() {
        p.ZP.open(t.id);
    }
    return (0, o.jsx)(h.Tooltip, {
        text: E.intl.string(E.t['3gUsJS']),
        children: (e) => {
            let { onMouseEnter: t, onMouseLeave: n, onFocus: s, onBlur: c } = e;
            return (0, o.jsx)(h.Clickable, {
                className: u()(y.iconItem, l ? y.alwaysShown : void 0, r ? y.iconWithChannelInfo : y.iconNoChannelInfo),
                onClick: a,
                tabIndex: i,
                'aria-label': E.intl.string(E.t['3gUsJS']),
                onMouseEnter: t,
                onMouseLeave: n,
                onFocus: s,
                onBlur: c,
                children: (0, o.jsx)(h.SettingsIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: y.actionIcon
                })
            });
        }
    });
}
function A(e) {
    let { channel: t, isDefaultChannel: i = !1, locked: l, tabIndex: r, forceShowButtons: a, hasChannelInfo: s = !1 } = e,
        c = (0, d.e7)([_.Z], () => _.Z.getGuild(t.getGuildId())),
        p = (0, d.e7)([v.Z], () => v.Z.getStageInstanceByChannel(t.id), [t.id]),
        g = (0, d.e7)([f.ZP], () => f.ZP.getActiveEventByChannel(t.id), [t.id]),
        x = (0, d.e7)([Z.Z], () => (0, m.b)(Z.Z, c, t, p)),
        b = (0, d.e7)([Z.Z], () => (Z.Z.can(N.Plq.CREATE_INSTANT_INVITE, t) ? E.intl.string(E.t.zJrgTE) : E.intl.string(E.t.Sd8Ix8)));
    if (l || !x) return null;
    function S() {
        if (null != c) {
            let e = I.Z.getAllActiveStreams().filter((e) => e.state !== N.jm8.ENDED && e.channelId === t.id);
            (0, h.openModalLazy)(async () => {
                let { default: i } = await Promise.all([n.e('7654'), n.e('86004')]).then(n.bind(n, 560114));
                return (n) =>
                    (0, o.jsx)(i, {
                        ...n,
                        guild: c,
                        channel: t,
                        streamUserId: 1 === e.length ? e[0].ownerId : null,
                        source: N.t4x.GUILD_CHANNELS,
                        guildScheduledEvent: g
                    });
            });
        }
    }
    let j = (0, o.jsx)(h.GroupPlusIcon, {
        size: 'xs',
        className: y.actionIcon,
        'aria-hidden': !0,
        color: 'currentColor'
    });
    return (
        i &&
            (j = (0, o.jsx)(C.Z, {
                tutorialId: 'instant-invite',
                position: 'left',
                children: (0, o.jsx)('div', { children: j })
            })),
        (0, o.jsx)(h.Tooltip, {
            text: b,
            children: (e) =>
                (0, o.jsx)(h.Clickable, {
                    className: u()(y.iconItem, a ? y.alwaysShown : void 0, s ? y.iconWithChannelInfo : y.iconNoChannelInfo),
                    ...e,
                    onClick: S,
                    tabIndex: r,
                    'aria-label': b,
                    children: j
                })
        })
    );
}
function w(e) {
    let { channel: t } = e,
        n = () => {
            (0, g._U)(t.guild_id, t.id);
        };
    return (0, o.jsx)(h.Tooltip, {
        text: E.intl.string(E.t.ROh4T0),
        children: (e) =>
            (0, o.jsx)(h.Clickable, {
                className: y.iconItem,
                ...e,
                onClick: n,
                'aria-label': E.intl.string(E.t.ROh4T0),
                children: (0, o.jsx)(h.XSmallIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: y.actionIcon
                })
            })
    });
}
function M(e) {
    let { channel: t } = e,
        n = () => {
            (0, g.dM)(t.guild_id, t.id, !0, { section: N.jXE.CHANNEL_LIST });
        };
    return (0, o.jsx)(h.Tooltip, {
        text: E.intl.string(E.t['N2c/Ul']),
        children: (e) =>
            (0, o.jsx)(h.Clickable, {
                className: y.iconItem,
                ...e,
                onClick: n,
                'aria-label': E.intl.string(E.t['N2c/Ul']),
                children: (0, o.jsx)(h.CheckmarkLargeIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: y.actionIcon
                })
            })
    });
}
class L extends (a = s.PureComponent) {
    renderEditButton() {
        return (0, o.jsx)(P, { ...this.props });
    }
    renderInviteButton() {
        return (0, o.jsx)(A, { ...this.props });
    }
    renderRemoveSuggestionButton() {
        return (0, o.jsx)(w, { ...this.props });
    }
    renderAcceptSuggestionButton() {
        return (0, o.jsx)(M, { ...this.props });
    }
    getClassName() {
        let { position: e, sortingPosition: t } = this.props;
        return T(e, t);
    }
    isDisabled() {
        let { channel: e, sorting: t, sortingType: n } = this.props;
        return j(e, t, n);
    }
}
(r = { isDefaultChannel: !1 }),
    (l = 'defaultProps') in (i = L)
        ? Object.defineProperty(i, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[l] = r);
