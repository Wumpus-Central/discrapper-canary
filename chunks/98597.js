n.d(t, {
    CN: () => N,
    ZP: () => D,
    eP: () => w,
    hR: () => E,
    jo: () => Z
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
    p = n(159300),
    h = n(152376),
    f = n(427679),
    g = n(155409),
    m = n(131704),
    b = n(199902),
    v = n(430824),
    y = n(496675),
    _ = n(914010),
    O = n(281029),
    j = n(981631),
    C = n(388032),
    x = n(691878);
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
function P(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
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
    return null != t && !!t && !(0, O.ig)(n, e.type);
}
function Z(e, t) {
    return null == t ? x.containerDefault : e > t ? x.containerDragAfter : x.containerDragBefore;
}
function E(e) {
    let { channel: t, disableManageChannels: n, tabIndex: r, forceShowButtons: l, hasChannelInfo: o = !1 } = e;
    if ((0, s.e7)([y.Z, _.Z], () => n || _.Z.getGuildId() === j.I_8 || (!y.Z.can(j.Plq.MANAGE_CHANNELS, t) && !y.Z.can(j.Plq.MANAGE_ROLES, t) && !y.Z.can(j.Plq.MANAGE_WEBHOOKS, t)) || ((0, m.r8)(t.type) && !y.Z.can(j.Plq.VIEW_CHANNEL, t)) || (t.isGuildVocal() && !y.Z.can(j.Plq.CONNECT, t)) || !m.dF.has(t.type))) return null;
    function d() {
        u.ZP.open(t.id);
    }
    return (0, i.jsx)(c.ua7, {
        text: C.NW.string(C.t['3gUsJS']),
        children: (e) => {
            let { onMouseEnter: t, onMouseLeave: n, onFocus: s, onBlur: u } = e;
            return (0, i.jsx)(c.P3F, {
                className: a()(x.iconItem, l ? x.alwaysShown : void 0, o ? x.iconWithChannelInfo : x.iconNoChannelInfo),
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
                    className: x.actionIcon
                })
            });
        }
    });
}
function w(e) {
    let { channel: t, isDefaultChannel: r = !1, locked: o, tabIndex: u, forceShowButtons: h, hasChannelInfo: m = !1 } = e,
        _ = (0, s.e7)([v.Z], () => v.Z.getGuild(t.getGuildId())),
        O = (0, s.e7)([f.Z], () => f.Z.getStageInstanceByChannel(t.id), [t.id]),
        S = (0, s.e7)([d.ZP], () => d.ZP.getActiveEventByChannel(t.id), [t.id]),
        N = (0, s.e7)([y.Z], () => (0, p.b)(y.Z, _, t, O)),
        Z = (0, s.e7)([y.Z], () => (y.Z.can(j.Plq.CREATE_INSTANT_INVITE, t) ? C.NW.string(C.t.zJrgTE) : C.NW.string(C.t.Sd8Ix8))),
        E = l.useRef(null);
    if (o || !N) return null;
    function w() {
        if (null != _) {
            let e = b.Z.getAllActiveStreams().filter((e) => e.state !== j.jm8.ENDED && e.channelId === t.id);
            (0, c.ZDy)(async () => {
                let { default: r } = await Promise.all([n.e('7654'), n.e('41348')]).then(n.bind(n, 560114));
                return (n) =>
                    (0, i.jsx)(
                        r,
                        I(P({}, n), {
                            guild: _,
                            channel: t,
                            streamUserId: 1 === e.length ? e[0].ownerId : null,
                            source: j.t4x.GUILD_CHANNELS,
                            guildScheduledEvent: S
                        })
                    );
            });
        }
    }
    let T = (0, i.jsx)(c.ejJ, {
        size: 'xs',
        className: x.actionIcon,
        'aria-hidden': !0,
        color: 'currentColor'
    });
    return (
        r &&
            (T = (0, i.jsx)(g.Z, {
                childRef: E,
                tutorialId: 'instant-invite',
                position: 'left',
                children: (0, i.jsx)('div', {
                    ref: E,
                    children: T
                })
            })),
        (0, i.jsx)(c.ua7, {
            text: Z,
            children: (e) =>
                (0, i.jsx)(
                    c.P3F,
                    I(P({ className: a()(x.iconItem, h ? x.alwaysShown : void 0, m ? x.iconWithChannelInfo : x.iconNoChannelInfo) }, e), {
                        onClick: w,
                        tabIndex: u,
                        'aria-label': Z,
                        children: T
                    })
                )
        })
    );
}
function T(e) {
    let { channel: t } = e,
        n = () => {
            (0, h._U)(t.guild_id, t.id);
        };
    return (0, i.jsx)(c.ua7, {
        text: C.NW.string(C.t.ROh4T0),
        children: (e) =>
            (0, i.jsx)(
                c.P3F,
                I(P({ className: x.iconItem }, e), {
                    onClick: n,
                    'aria-label': C.NW.string(C.t.ROh4T0),
                    children: (0, i.jsx)(c.Dio, {
                        size: 'xs',
                        color: 'currentColor',
                        className: x.actionIcon
                    })
                })
            )
    });
}
function A(e) {
    let { channel: t } = e,
        n = () => {
            (0, h.dM)(t.guild_id, t.id, !0, { section: j.jXE.CHANNEL_LIST });
        };
    return (0, i.jsx)(c.ua7, {
        text: C.NW.string(C.t['N2c/Ul']),
        children: (e) =>
            (0, i.jsx)(
                c.P3F,
                I(P({ className: x.iconItem }, e), {
                    onClick: n,
                    'aria-label': C.NW.string(C.t['N2c/Ul']),
                    children: (0, i.jsx)(c.dz2, {
                        size: 'xs',
                        color: 'currentColor',
                        className: x.actionIcon
                    })
                })
            )
    });
}
class D extends (r = l.PureComponent) {
    renderEditButton() {
        return (0, i.jsx)(E, P({}, this.props));
    }
    renderInviteButton() {
        return (0, i.jsx)(w, P({}, this.props));
    }
    renderRemoveSuggestionButton() {
        return (0, i.jsx)(T, P({}, this.props));
    }
    renderAcceptSuggestionButton() {
        return (0, i.jsx)(A, P({}, this.props));
    }
    getClassName() {
        let { position: e, sortingPosition: t } = this.props;
        return Z(e, t);
    }
    isDisabled() {
        let { channel: e, sorting: t, sortingType: n } = this.props;
        return N(e, t, n);
    }
}
S(D, 'defaultProps', { isDefaultChannel: !1 });
