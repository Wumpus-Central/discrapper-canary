n.d(t, {
    CN: () => N,
    ZP: () => L,
    eP: () => A,
    hR: () => T,
    jo: () => w
});
var r,
    i = n(255367),
    l = n(73800),
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
    _ = n(199902),
    O = n(430824),
    y = n(496675),
    v = n(914010),
    C = n(281029),
    j = n(981631),
    E = n(388032),
    S = n(915887);
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                x(e, t, n[t]);
            }));
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
function N(e, t, n) {
    return null != t && !!t && !(0, C.ig)(n, e.type);
}
function w(e, t) {
    return null == t ? S.containerDefault : e > t ? S.containerDragAfter : S.containerDragBefore;
}
function Z(e) {
    let { tabIndex: t, forceShowButtons: n, hasChannelInfo: r, onContextMenu: l } = e;
    return (0, i.jsx)(c.ua7, {
        text: E.intl.string(E.t.OBr7Cw),
        children: (e) => {
            let { onMouseEnter: o, onMouseLeave: a, onFocus: u, onBlur: d } = e;
            return (0, i.jsx)(c.P3F, {
                className: s()(S.iconItem, n ? S.alwaysShown : void 0, r ? S.iconWithChannelInfo : S.iconNoChannelInfo),
                onClick: l,
                tabIndex: t,
                'aria-label': E.intl.string(E.t.OBr7Cw),
                onMouseEnter: o,
                onMouseLeave: a,
                onFocus: u,
                onBlur: d,
                children: (0, i.jsx)(c.xhG, {
                    size: 'xs',
                    color: 'currentColor',
                    className: S.actionIcon
                })
            });
        }
    });
}
function T(e) {
    let { channel: t, disableManageChannels: n, tabIndex: r, forceShowButtons: l, hasChannelInfo: o = !1 } = e;
    if ((0, a.e7)([y.Z, v.Z], () => n || v.Z.getGuildId() === j.I_8 || (!y.Z.can(j.Plq.MANAGE_CHANNELS, t) && !y.Z.can(j.Plq.MANAGE_ROLES, t) && !y.Z.can(j.Plq.MANAGE_WEBHOOKS, t)) || ((0, b.r8)(t.type) && !y.Z.can(j.Plq.VIEW_CHANNEL, t)) || (t.isGuildVocal() && !y.Z.can(j.Plq.CONNECT, t)) || !b.dF.has(t.type) || t.isModeratorReportChannel())) return null;
    function d() {
        u.ZP.open(t.id);
    }
    return (0, i.jsx)(c.ua7, {
        text: E.intl.string(E.t['3gUsJS']),
        children: (e) => {
            let { onMouseEnter: t, onMouseLeave: n, onFocus: a, onBlur: u } = e;
            return (0, i.jsx)(c.P3F, {
                className: s()(S.iconItem, l ? S.alwaysShown : void 0, o ? S.iconWithChannelInfo : S.iconNoChannelInfo),
                onClick: d,
                tabIndex: r,
                'aria-label': E.intl.string(E.t['3gUsJS']),
                onMouseEnter: t,
                onMouseLeave: n,
                onFocus: a,
                onBlur: u,
                children: (0, i.jsx)(c.ewm, {
                    size: 'xs',
                    color: 'currentColor',
                    className: S.actionIcon
                })
            });
        }
    });
}
function A(e) {
    let { channel: t, isDefaultChannel: r = !1, locked: o, tabIndex: u, forceShowButtons: f, hasChannelInfo: b = !1 } = e,
        { entrypoints: v } = (0, h._k)({ location: 'channel_base' }),
        C = (0, a.e7)([O.Z], () => O.Z.getGuild(t.getGuildId())),
        x = (0, a.e7)([g.Z], () => g.Z.getStageInstanceByChannel(t.id), [t.id]),
        N = (0, a.e7)([d.ZP], () => d.ZP.getActiveEventByChannel(t.id), [t.id]),
        w = (0, a.e7)([y.Z], () => (0, p.b)(y.Z, C, t, x)),
        Z = (0, a.e7)([y.Z], () => (y.Z.can(j.Plq.CREATE_INSTANT_INVITE, t) ? E.intl.string(E.t.zJrgTE) : E.intl.string(E.t.Sd8Ix8))),
        T = v ? E.intl.string(E.t['EE+P0N']) : Z,
        A = l.useRef(null);
    if (o || !w || t.isModeratorReportChannel()) return null;
    function R() {
        if (null != C) {
            let e = _.Z.getAllActiveStreams().filter((e) => e.state !== j.jm8.ENDED && e.channelId === t.id);
            (0, c.ZDy)(async () => {
                let { default: r } = await Promise.all([n.e('7654'), n.e('34946')]).then(n.bind(n, 560114));
                return (n) =>
                    (0, i.jsx)(
                        r,
                        P(I({}, n), {
                            guild: C,
                            channel: t,
                            streamUserId: 1 === e.length ? e[0].ownerId : null,
                            source: j.t4x.GUILD_CHANNELS,
                            guildScheduledEvent: N
                        })
                    );
            });
        }
    }
    let D = v ? c.oLu : c.ejJ,
        L = (0, i.jsx)(D, {
            size: 'xs',
            className: S.actionIcon,
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
                    P(I({ className: s()(S.iconItem, f ? S.alwaysShown : void 0, b ? S.iconWithChannelInfo : S.iconNoChannelInfo) }, e), {
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
        text: E.intl.string(E.t.ROh4T0),
        children: (e) =>
            (0, i.jsx)(
                c.P3F,
                P(I({ className: S.iconItem }, e), {
                    onClick: n,
                    'aria-label': E.intl.string(E.t.ROh4T0),
                    children: (0, i.jsx)(c.Dio, {
                        size: 'xs',
                        color: 'currentColor',
                        className: S.actionIcon
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
        text: E.intl.string(E.t['N2c/Ul']),
        children: (e) =>
            (0, i.jsx)(
                c.P3F,
                P(I({ className: S.iconItem }, e), {
                    onClick: n,
                    'aria-label': E.intl.string(E.t['N2c/Ul']),
                    children: (0, i.jsx)(c.dz2, {
                        size: 'xs',
                        color: 'currentColor',
                        className: S.actionIcon
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
        return w(e, t);
    }
    isDisabled() {
        let { channel: e, sorting: t, sortingType: n } = this.props;
        return N(e, t, n);
    }
}
x(L, 'defaultProps', { isDefaultChannel: !1 });
