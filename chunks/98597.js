n.d(t, {
    CN: () => j,
    ZP: () => w,
    eP: () => A,
    hR: () => T,
    jo: () => y
});
var i,
    l,
    r,
    o = n(200651),
    a = n(192379),
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
    C = n(199902),
    x = n(430824),
    I = n(496675),
    Z = n(914010),
    b = n(281029),
    S = n(981631),
    N = n(388032),
    E = n(467678);
function j(e, t, n) {
    return null != t && !!t && !(0, b.ig)(n, e.type);
}
function y(e, t) {
    return null == t ? E.containerDefault : e > t ? E.containerDragAfter : E.containerDragBefore;
}
function T(e) {
    let { channel: t, disableManageChannels: n, tabIndex: i, forceShowButtons: l, hasChannelInfo: r = !1 } = e;
    if ((0, d.e7)([I.Z, Z.Z], () => n || Z.Z.getGuildId() === S.I_8 || (!I.Z.can(S.Plq.MANAGE_CHANNELS, t) && !I.Z.can(S.Plq.MANAGE_ROLES, t) && !I.Z.can(S.Plq.MANAGE_WEBHOOKS, t)) || ((0, v.r8)(t.type) && !I.Z.can(S.Plq.VIEW_CHANNEL, t)) || (t.isGuildVocal() && !I.Z.can(S.Plq.CONNECT, t)) || !v.dF.has(t.type))) return null;
    function a() {
        h.ZP.open(t.id);
    }
    return (0, o.jsx)(u.ua7, {
        text: N.intl.string(N.t['3gUsJS']),
        children: (e) => {
            let { onMouseEnter: t, onMouseLeave: n, onFocus: s, onBlur: d } = e;
            return (0, o.jsx)(u.P3F, {
                className: c()(E.iconItem, l ? E.alwaysShown : void 0, r ? E.iconWithChannelInfo : E.iconNoChannelInfo),
                onClick: a,
                tabIndex: i,
                'aria-label': N.intl.string(N.t['3gUsJS']),
                onMouseEnter: t,
                onMouseLeave: n,
                onFocus: s,
                onBlur: d,
                children: (0, o.jsx)(u.ewm, {
                    size: 'xs',
                    color: 'currentColor',
                    className: E.actionIcon
                })
            });
        }
    });
}
function A(e) {
    let { channel: t, isDefaultChannel: i = !1, locked: l, tabIndex: r, forceShowButtons: a, hasChannelInfo: s = !1 } = e,
        h = (0, d.e7)([x.Z], () => x.Z.getGuild(t.getGuildId())),
        g = (0, d.e7)([f.Z], () => f.Z.getStageInstanceByChannel(t.id), [t.id]),
        v = (0, d.e7)([p.ZP], () => p.ZP.getActiveEventByChannel(t.id), [t.id]),
        Z = (0, d.e7)([I.Z], () => (0, m.b)(I.Z, h, t, g)),
        b = (0, d.e7)([I.Z], () => (I.Z.can(S.Plq.CREATE_INSTANT_INVITE, t) ? N.intl.string(N.t.zJrgTE) : N.intl.string(N.t.Sd8Ix8)));
    if (l || !Z) return null;
    function j() {
        if (null != h) {
            let e = C.Z.getAllActiveStreams().filter((e) => e.state !== S.jm8.ENDED && e.channelId === t.id);
            (0, u.ZDy)(async () => {
                let { default: i } = await Promise.all([n.e('7654'), n.e('76236')]).then(n.bind(n, 560114));
                return (n) =>
                    (0, o.jsx)(i, {
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
    let y = (0, o.jsx)(u.ejJ, {
        size: 'xs',
        className: E.actionIcon,
        'aria-hidden': !0,
        color: 'currentColor'
    });
    return (
        i &&
            (y = (0, o.jsx)(_.Z, {
                tutorialId: 'instant-invite',
                position: 'left',
                children: (0, o.jsx)('div', { children: y })
            })),
        (0, o.jsx)(u.ua7, {
            text: b,
            children: (e) =>
                (0, o.jsx)(u.P3F, {
                    className: c()(E.iconItem, a ? E.alwaysShown : void 0, s ? E.iconWithChannelInfo : E.iconNoChannelInfo),
                    ...e,
                    onClick: j,
                    tabIndex: r,
                    'aria-label': b,
                    children: y
                })
        })
    );
}
function P(e) {
    let { channel: t } = e,
        n = () => {
            (0, g._U)(t.guild_id, t.id);
        };
    return (0, o.jsx)(u.ua7, {
        text: N.intl.string(N.t.ROh4T0),
        children: (e) =>
            (0, o.jsx)(u.P3F, {
                className: E.iconItem,
                ...e,
                onClick: n,
                'aria-label': N.intl.string(N.t.ROh4T0),
                children: (0, o.jsx)(u.Dio, {
                    size: 'xs',
                    color: 'currentColor',
                    className: E.actionIcon
                })
            })
    });
}
function R(e) {
    let { channel: t } = e,
        n = () => {
            (0, g.dM)(t.guild_id, t.id, !0, { section: S.jXE.CHANNEL_LIST });
        };
    return (0, o.jsx)(u.ua7, {
        text: N.intl.string(N.t['N2c/Ul']),
        children: (e) =>
            (0, o.jsx)(u.P3F, {
                className: E.iconItem,
                ...e,
                onClick: n,
                'aria-label': N.intl.string(N.t['N2c/Ul']),
                children: (0, o.jsx)(u.dz2, {
                    size: 'xs',
                    color: 'currentColor',
                    className: E.actionIcon
                })
            })
    });
}
class w extends (r = a.PureComponent) {
    renderEditButton() {
        return (0, o.jsx)(T, { ...this.props });
    }
    renderInviteButton() {
        return (0, o.jsx)(A, { ...this.props });
    }
    renderRemoveSuggestionButton() {
        return (0, o.jsx)(P, { ...this.props });
    }
    renderAcceptSuggestionButton() {
        return (0, o.jsx)(R, { ...this.props });
    }
    getClassName() {
        let { position: e, sortingPosition: t } = this.props;
        return y(e, t);
    }
    isDisabled() {
        let { channel: e, sorting: t, sortingType: n } = this.props;
        return j(e, t, n);
    }
}
(l = { isDefaultChannel: !1 }),
    (i = 'defaultProps') in w
        ? Object.defineProperty(w, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (w[i] = l);
