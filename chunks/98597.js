n.d(t, {
    CN: () => w,
    ZP: () => L,
    eP: () => A,
    hR: () => T,
    jo: () => N
});
var r,
    i = n(200651),
    l = n(192379),
    o = n(120356),
    s = n.n(o),
    a = n(442837),
    c = n(481060),
    u = n(787014),
    d = n(924301),
    h = n(340541),
    p = n(159300),
    f = n(152376),
    g = n(427679),
    m = n(155409),
    b = n(131704),
    y = n(199902),
    _ = n(430824),
    O = n(496675),
    v = n(914010),
    C = n(281029),
    j = n(981631),
    S = n(388032),
    E = n(915887);
function x(e, t, n) {
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                x(e, t, n[t]);
            });
    }
    return e;
}
function P(e, t) {
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
function w(e, t, n) {
    return null != t && !!t && !(0, C.ig)(n, e.type);
}
function N(e, t) {
    return null == t ? E.containerDefault : e > t ? E.containerDragAfter : E.containerDragBefore;
}
function Z(e) {
    let { tabIndex: t, forceShowButtons: n, hasChannelInfo: r, onContextMenu: l } = e;
    return (0, i.jsx)(c.ua7, {
        text: S.intl.string(S.t.OBr7Cw),
        children: (e) => {
            let { onMouseEnter: o, onMouseLeave: a, onFocus: u, onBlur: d } = e;
            return (0, i.jsx)(c.P3F, {
                className: s()(E.iconItem, n ? E.alwaysShown : void 0, r ? E.iconWithChannelInfo : E.iconNoChannelInfo),
                onClick: l,
                tabIndex: t,
                'aria-label': S.intl.string(S.t.OBr7Cw),
                onMouseEnter: o,
                onMouseLeave: a,
                onFocus: u,
                onBlur: d,
                children: (0, i.jsx)(c.xhG, {
                    size: 'xs',
                    color: 'currentColor',
                    className: E.actionIcon
                })
            });
        }
    });
}
function T(e) {
    let { channel: t, disableManageChannels: n, tabIndex: r, forceShowButtons: l, hasChannelInfo: o = !1 } = e;
    if ((0, a.e7)([O.Z, v.Z], () => n || v.Z.getGuildId() === j.I_8 || (!O.Z.can(j.Plq.MANAGE_CHANNELS, t) && !O.Z.can(j.Plq.MANAGE_ROLES, t) && !O.Z.can(j.Plq.MANAGE_WEBHOOKS, t)) || ((0, b.r8)(t.type) && !O.Z.can(j.Plq.VIEW_CHANNEL, t)) || (t.isGuildVocal() && !O.Z.can(j.Plq.CONNECT, t)) || !b.dF.has(t.type))) return null;
    function d() {
        u.ZP.open(t.id);
    }
    return (0, i.jsx)(c.ua7, {
        text: S.intl.string(S.t['3gUsJS']),
        children: (e) => {
            let { onMouseEnter: t, onMouseLeave: n, onFocus: a, onBlur: u } = e;
            return (0, i.jsx)(c.P3F, {
                className: s()(E.iconItem, l ? E.alwaysShown : void 0, o ? E.iconWithChannelInfo : E.iconNoChannelInfo),
                onClick: d,
                tabIndex: r,
                'aria-label': S.intl.string(S.t['3gUsJS']),
                onMouseEnter: t,
                onMouseLeave: n,
                onFocus: a,
                onBlur: u,
                children: (0, i.jsx)(c.ewm, {
                    size: 'xs',
                    color: 'currentColor',
                    className: E.actionIcon
                })
            });
        }
    });
}
function A(e) {
    let { channel: t, isDefaultChannel: r = !1, locked: o, tabIndex: u, forceShowButtons: f, hasChannelInfo: b = !1 } = e,
        { entrypoints: v } = (0, h._k)({ location: 'channel_base' }),
        C = (0, a.e7)([_.Z], () => _.Z.getGuild(t.getGuildId())),
        x = (0, a.e7)([g.Z], () => g.Z.getStageInstanceByChannel(t.id), [t.id]),
        w = (0, a.e7)([d.ZP], () => d.ZP.getActiveEventByChannel(t.id), [t.id]),
        N = (0, a.e7)([O.Z], () => (0, p.b)(O.Z, C, t, x)),
        Z = (0, a.e7)([O.Z], () => (O.Z.can(j.Plq.CREATE_INSTANT_INVITE, t) ? S.intl.string(S.t.zJrgTE) : S.intl.string(S.t.Sd8Ix8))),
        T = v ? S.intl.string(S.t['EE+P0N']) : Z,
        A = l.useRef(null);
    if (o || !N) return null;
    function R() {
        if (null != C) {
            let e = y.Z.getAllActiveStreams().filter((e) => e.state !== j.jm8.ENDED && e.channelId === t.id);
            (0, c.ZDy)(async () => {
                let { default: r } = await Promise.all([n.e('7654'), n.e('17439')]).then(n.bind(n, 560114));
                return (n) =>
                    (0, i.jsx)(
                        r,
                        P(I({}, n), {
                            guild: C,
                            channel: t,
                            streamUserId: 1 === e.length ? e[0].ownerId : null,
                            source: j.t4x.GUILD_CHANNELS,
                            guildScheduledEvent: w
                        })
                    );
            });
        }
    }
    let D = v ? c.oLu : c.ejJ,
        L = (0, i.jsx)(D, {
            size: 'xs',
            className: E.actionIcon,
            'aria-hidden': !0,
            color: 'currentColor'
        });
    return (
        r &&
            (L = (0, i.jsx)(m.Z, {
                childRef: A,
                tutorialId: 'instant-invite',
                position: 'left',
                children: (0, i.jsx)('div', {
                    ref: A,
                    children: L
                })
            })),
        (0, i.jsx)(c.ua7, {
            text: T,
            children: (e) =>
                (0, i.jsx)(
                    c.P3F,
                    P(I({ className: s()(E.iconItem, f ? E.alwaysShown : void 0, b ? E.iconWithChannelInfo : E.iconNoChannelInfo) }, e), {
                        onClick: R,
                        tabIndex: u,
                        'aria-label': T,
                        children: L
                    })
                )
        })
    );
}
function R(e) {
    let { channel: t } = e,
        n = () => {
            (0, f._U)(t.guild_id, t.id);
        };
    return (0, i.jsx)(c.ua7, {
        text: S.intl.string(S.t.ROh4T0),
        children: (e) =>
            (0, i.jsx)(
                c.P3F,
                P(I({ className: E.iconItem }, e), {
                    onClick: n,
                    'aria-label': S.intl.string(S.t.ROh4T0),
                    children: (0, i.jsx)(c.Dio, {
                        size: 'xs',
                        color: 'currentColor',
                        className: E.actionIcon
                    })
                })
            )
    });
}
function D(e) {
    let { channel: t } = e,
        n = () => {
            (0, f.dM)(t.guild_id, t.id, !0, { section: j.jXE.CHANNEL_LIST });
        };
    return (0, i.jsx)(c.ua7, {
        text: S.intl.string(S.t['N2c/Ul']),
        children: (e) =>
            (0, i.jsx)(
                c.P3F,
                P(I({ className: E.iconItem }, e), {
                    onClick: n,
                    'aria-label': S.intl.string(S.t['N2c/Ul']),
                    children: (0, i.jsx)(c.dz2, {
                        size: 'xs',
                        color: 'currentColor',
                        className: E.actionIcon
                    })
                })
            )
    });
}
class L extends (r = l.PureComponent) {
    renderOptionsButton(e) {
        let { onContextMenu: t } = e;
        return (0, i.jsx)(Z, P(I({}, this.props), { onContextMenu: t }));
    }
    renderEditButton() {
        return (0, i.jsx)(T, I({}, this.props));
    }
    renderInviteButton() {
        return (0, i.jsx)(A, I({}, this.props));
    }
    renderRemoveSuggestionButton() {
        return (0, i.jsx)(R, I({}, this.props));
    }
    renderAcceptSuggestionButton() {
        return (0, i.jsx)(D, I({}, this.props));
    }
    getClassName() {
        let { position: e, sortingPosition: t } = this.props;
        return N(e, t);
    }
    isDisabled() {
        let { channel: e, sorting: t, sortingType: n } = this.props;
        return w(e, t, n);
    }
}
x(L, 'defaultProps', { isDefaultChannel: !1 });
