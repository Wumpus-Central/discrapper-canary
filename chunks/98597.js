n.d(t, {
    CN: () => E,
    ZP: () => R,
    eP: () => T,
    hR: () => P,
    jo: () => y
});
var i,
    l,
    r,
    a = n(200651),
    o = n(192379),
    s = n(120356),
    c = n.n(s),
    d = n(442837),
    u = n(481060),
    h = n(787014),
    p = n(924301),
    m = n(159300),
    g = n(152376),
    f = n(427679),
    _ = n(155409),
    v = n(131704),
    x = n(199902),
    C = n(430824),
    Z = n(496675),
    I = n(914010),
    b = n(281029),
    S = n(981631),
    N = n(388032),
    j = n(831746);
function E(e, t, n) {
    return null != t && !!t && !(0, b.ig)(n, e.type);
}
function y(e, t) {
    return null == t ? j.containerDefault : e > t ? j.containerDragAfter : j.containerDragBefore;
}
function P(e) {
    let { channel: t, disableManageChannels: n, tabIndex: i, forceShowButtons: l, hasChannelInfo: r = !1 } = e;
    if ((0, d.e7)([Z.Z, I.Z], () => n || I.Z.getGuildId() === S.I_8 || (!Z.Z.can(S.Plq.MANAGE_CHANNELS, t) && !Z.Z.can(S.Plq.MANAGE_ROLES, t) && !Z.Z.can(S.Plq.MANAGE_WEBHOOKS, t)) || ((0, v.r8)(t.type) && !Z.Z.can(S.Plq.VIEW_CHANNEL, t)) || (t.isGuildVocal() && !Z.Z.can(S.Plq.CONNECT, t)) || !v.dF.has(t.type))) return null;
    function o() {
        h.ZP.open(t.id);
    }
    return (0, a.jsx)(u.ua7, {
        text: N.intl.string(N.t['3gUsJS']),
        children: (e) => {
            let { onMouseEnter: t, onMouseLeave: n, onFocus: s, onBlur: d } = e;
            return (0, a.jsx)(u.P3F, {
                className: c()(j.iconItem, l ? j.alwaysShown : void 0, r ? j.iconWithChannelInfo : j.iconNoChannelInfo),
                onClick: o,
                tabIndex: i,
                'aria-label': N.intl.string(N.t['3gUsJS']),
                onMouseEnter: t,
                onMouseLeave: n,
                onFocus: s,
                onBlur: d,
                children: (0, a.jsx)(u.ewm, {
                    size: 'xs',
                    color: 'currentColor',
                    className: j.actionIcon
                })
            });
        }
    });
}
function T(e) {
    let { channel: t, isDefaultChannel: i = !1, locked: l, tabIndex: r, forceShowButtons: o, hasChannelInfo: s = !1 } = e,
        h = (0, d.e7)([C.Z], () => C.Z.getGuild(t.getGuildId())),
        g = (0, d.e7)([f.Z], () => f.Z.getStageInstanceByChannel(t.id), [t.id]),
        v = (0, d.e7)([p.ZP], () => p.ZP.getActiveEventByChannel(t.id), [t.id]),
        I = (0, d.e7)([Z.Z], () => (0, m.b)(Z.Z, h, t, g)),
        b = (0, d.e7)([Z.Z], () => (Z.Z.can(S.Plq.CREATE_INSTANT_INVITE, t) ? N.intl.string(N.t.zJrgTE) : N.intl.string(N.t.Sd8Ix8)));
    if (l || !I) return null;
    function E() {
        if (null != h) {
            let e = x.Z.getAllActiveStreams().filter((e) => e.state !== S.jm8.ENDED && e.channelId === t.id);
            (0, u.ZDy)(async () => {
                let { default: i } = await Promise.all([n.e('7654'), n.e('86004')]).then(n.bind(n, 560114));
                return (n) =>
                    (0, a.jsx)(i, {
                        ...n,
                        guild: h,
                        channel: t,
                        streamUserId: 1 === e.length ? e[0].ownerId : null,
                        source: S.t4x.GUILD_CHANNELS,
                        guildScheduledEvent: v
                    });
            });
        }
    }
    let y = (0, a.jsx)(u.ejJ, {
        size: 'xs',
        className: j.actionIcon,
        'aria-hidden': !0,
        color: 'currentColor'
    });
    return (
        i &&
            (y = (0, a.jsx)(_.Z, {
                tutorialId: 'instant-invite',
                position: 'left',
                children: (0, a.jsx)('div', { children: y })
            })),
        (0, a.jsx)(u.ua7, {
            text: b,
            children: (e) =>
                (0, a.jsx)(u.P3F, {
                    className: c()(j.iconItem, o ? j.alwaysShown : void 0, s ? j.iconWithChannelInfo : j.iconNoChannelInfo),
                    ...e,
                    onClick: E,
                    tabIndex: r,
                    'aria-label': b,
                    children: y
                })
        })
    );
}
function A(e) {
    let { channel: t } = e,
        n = () => {
            (0, g._U)(t.guild_id, t.id);
        };
    return (0, a.jsx)(u.ua7, {
        text: N.intl.string(N.t.ROh4T0),
        children: (e) =>
            (0, a.jsx)(u.P3F, {
                className: j.iconItem,
                ...e,
                onClick: n,
                'aria-label': N.intl.string(N.t.ROh4T0),
                children: (0, a.jsx)(u.Dio, {
                    size: 'xs',
                    color: 'currentColor',
                    className: j.actionIcon
                })
            })
    });
}
function w(e) {
    let { channel: t } = e,
        n = () => {
            (0, g.dM)(t.guild_id, t.id, !0, { section: S.jXE.CHANNEL_LIST });
        };
    return (0, a.jsx)(u.ua7, {
        text: N.intl.string(N.t['N2c/Ul']),
        children: (e) =>
            (0, a.jsx)(u.P3F, {
                className: j.iconItem,
                ...e,
                onClick: n,
                'aria-label': N.intl.string(N.t['N2c/Ul']),
                children: (0, a.jsx)(u.dz2, {
                    size: 'xs',
                    color: 'currentColor',
                    className: j.actionIcon
                })
            })
    });
}
class R extends (r = o.PureComponent) {
    renderEditButton() {
        return (0, a.jsx)(P, { ...this.props });
    }
    renderInviteButton() {
        return (0, a.jsx)(T, { ...this.props });
    }
    renderRemoveSuggestionButton() {
        return (0, a.jsx)(A, { ...this.props });
    }
    renderAcceptSuggestionButton() {
        return (0, a.jsx)(w, { ...this.props });
    }
    getClassName() {
        let { position: e, sortingPosition: t } = this.props;
        return y(e, t);
    }
    isDisabled() {
        let { channel: e, sorting: t, sortingType: n } = this.props;
        return E(e, t, n);
    }
}
(l = { isDefaultChannel: !1 }),
    (i = 'defaultProps') in R
        ? Object.defineProperty(R, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (R[i] = l);
