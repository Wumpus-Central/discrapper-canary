n.d(t, {
    CN: () => Z,
    ZP: () => L,
    eP: () => A,
    hR: () => T,
    jo: () => w
});
var r,
    i = n(200651),
    l = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    c = n(481060),
    u = n(787014),
    d = n(924301),
    p = n(340541),
    h = n(159300),
    f = n(152376),
    g = n(427679),
    m = n(155409),
    b = n(131704),
    y = n(199902),
    _ = n(430824),
    v = n(496675),
    O = n(914010),
    j = n(281029),
    x = n(981631),
    C = n(388032),
    S = n(915887);
function P(e, t, n) {
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
                P(e, t, n[t]);
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
function Z(e, t, n) {
    return null != t && !!t && !(0, j.ig)(n, e.type);
}
function w(e, t) {
    return null == t ? S.containerDefault : e > t ? S.containerDragAfter : S.containerDragBefore;
}
function E(e) {
    let { tabIndex: t, forceShowButtons: n, hasChannelInfo: r, onContextMenu: l } = e;
    return (0, i.jsx)(c.ua7, {
        text: C.NW.string(C.t.OBr7Cw),
        children: (e) => {
            let { onMouseEnter: o, onMouseLeave: s, onFocus: u, onBlur: d } = e;
            return (0, i.jsx)(c.P3F, {
                className: a()(S.iconItem, n ? S.alwaysShown : void 0, r ? S.iconWithChannelInfo : S.iconNoChannelInfo),
                onClick: l,
                tabIndex: t,
                'aria-label': C.NW.string(C.t.OBr7Cw),
                onMouseEnter: o,
                onMouseLeave: s,
                onFocus: u,
                onBlur: d,
                children: (0, i.jsx)(c.Huf, {
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
    if ((0, s.e7)([v.Z, O.Z], () => n || O.Z.getGuildId() === x.I_8 || (!v.Z.can(x.Plq.MANAGE_CHANNELS, t) && !v.Z.can(x.Plq.MANAGE_ROLES, t) && !v.Z.can(x.Plq.MANAGE_WEBHOOKS, t)) || ((0, b.r8)(t.type) && !v.Z.can(x.Plq.VIEW_CHANNEL, t)) || (t.isGuildVocal() && !v.Z.can(x.Plq.CONNECT, t)) || !b.dF.has(t.type))) return null;
    function d() {
        u.ZP.open(t.id);
    }
    return (0, i.jsx)(c.ua7, {
        text: C.NW.string(C.t['3gUsJS']),
        children: (e) => {
            let { onMouseEnter: t, onMouseLeave: n, onFocus: s, onBlur: u } = e;
            return (0, i.jsx)(c.P3F, {
                className: a()(S.iconItem, l ? S.alwaysShown : void 0, o ? S.iconWithChannelInfo : S.iconNoChannelInfo),
                onClick: d,
                tabIndex: r,
                'aria-label': C.NW.string(C.t['3gUsJS']),
                onMouseEnter: t,
                onMouseLeave: n,
                onFocus: s,
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
        { enabled: O } = (0, p._k)({ location: 'channel_base' }),
        j = (0, s.e7)([_.Z], () => _.Z.getGuild(t.getGuildId())),
        P = (0, s.e7)([g.Z], () => g.Z.getStageInstanceByChannel(t.id), [t.id]),
        Z = (0, s.e7)([d.ZP], () => d.ZP.getActiveEventByChannel(t.id), [t.id]),
        w = (0, s.e7)([v.Z], () => (0, h.b)(v.Z, j, t, P)),
        E = (0, s.e7)([v.Z], () => (v.Z.can(x.Plq.CREATE_INSTANT_INVITE, t) ? C.NW.string(C.t.zJrgTE) : C.NW.string(C.t.Sd8Ix8))),
        T = O ? C.NW.string(C.t['EE+P0N']) : E,
        A = l.useRef(null);
    if (o || !w) return null;
    function D() {
        if (null != j) {
            let e = y.Z.getAllActiveStreams().filter((e) => e.state !== x.jm8.ENDED && e.channelId === t.id);
            (0, c.ZDy)(async () => {
                let { default: r } = await Promise.all([n.e('7654'), n.e('96814')]).then(n.bind(n, 560114));
                return (n) =>
                    (0, i.jsx)(
                        r,
                        N(I({}, n), {
                            guild: j,
                            channel: t,
                            streamUserId: 1 === e.length ? e[0].ownerId : null,
                            source: x.t4x.GUILD_CHANNELS,
                            guildScheduledEvent: Z
                        })
                    );
            });
        }
    }
    let R = O ? c.oLu : c.ejJ,
        L = (0, i.jsx)(R, {
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
                    N(I({ className: a()(S.iconItem, f ? S.alwaysShown : void 0, b ? S.iconWithChannelInfo : S.iconNoChannelInfo) }, e), {
                        onClick: D,
                        tabIndex: u,
                        'aria-label': T,
                        children: L
                    })
                )
        })
    );
}
function D(e) {
    let { channel: t } = e,
        n = () => {
            (0, f._U)(t.guild_id, t.id);
        };
    return (0, i.jsx)(c.ua7, {
        text: C.NW.string(C.t.ROh4T0),
        children: (e) =>
            (0, i.jsx)(
                c.P3F,
                N(I({ className: S.iconItem }, e), {
                    onClick: n,
                    'aria-label': C.NW.string(C.t.ROh4T0),
                    children: (0, i.jsx)(c.Dio, {
                        size: 'xs',
                        color: 'currentColor',
                        className: S.actionIcon
                    })
                })
            )
    });
}
function R(e) {
    let { channel: t } = e,
        n = () => {
            (0, f.dM)(t.guild_id, t.id, !0, { section: x.jXE.CHANNEL_LIST });
        };
    return (0, i.jsx)(c.ua7, {
        text: C.NW.string(C.t['N2c/Ul']),
        children: (e) =>
            (0, i.jsx)(
                c.P3F,
                N(I({ className: S.iconItem }, e), {
                    onClick: n,
                    'aria-label': C.NW.string(C.t['N2c/Ul']),
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
        return (0, i.jsx)(E, N(I({}, this.props), { onContextMenu: t }));
    }
    renderEditButton() {
        return (0, i.jsx)(T, I({}, this.props));
    }
    renderInviteButton() {
        return (0, i.jsx)(A, I({}, this.props));
    }
    renderRemoveSuggestionButton() {
        return (0, i.jsx)(D, I({}, this.props));
    }
    renderAcceptSuggestionButton() {
        return (0, i.jsx)(R, I({}, this.props));
    }
    getClassName() {
        let { position: e, sortingPosition: t } = this.props;
        return w(e, t);
    }
    isDisabled() {
        let { channel: e, sorting: t, sortingType: n } = this.props;
        return Z(e, t, n);
    }
}
P(L, 'defaultProps', { isDefaultChannel: !1 });
