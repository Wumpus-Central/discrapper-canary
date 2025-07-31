(n.d(t, {
    ZP: () => C,
    ag: () => O,
    u8: () => b
}),
    n(539854),
    n(388685));
var r,
    i = n(255367),
    a = n(73800),
    o = n(120356),
    s = n.n(o),
    l = n(481060),
    c = n(686546),
    u = n(670188),
    d = n(598077),
    _ = n(594174),
    f = n(426563),
    p = n(472840);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
            }));
    }
    return e;
}
function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let b = {
        SIZE_16: 16,
        SIZE_24: 24,
        SIZE_32: 32,
        SIZE_56: 56
    },
    y = {
        SIZE_10: 10,
        SIZE_15: 15,
        SIZE_20: 20,
        SIZE_35: 35
    },
    O = 'user-icon';
function v(e, t) {
    if (e === O) return 'user-icon-'.concat(t);
    let n = e instanceof d.Z ? e : null != e ? e.user : null;
    return null != n ? n.id : 'user-'.concat(t);
}
function I(e) {
    return (0, i.jsx)('div', {
        className: p.moreUsers,
        children: e
    });
}
function T(e) {
    return (0, i.jsx)('div', {
        className: s()(p.moreUsers, p.moreUsersDimmed),
        children: e
    });
}
function S() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b.SIZE_24;
    switch (e) {
        case b.SIZE_16:
            return p.size16;
        case b.SIZE_24:
            return p.size24;
        case b.SIZE_32:
            return p.size32;
        case b.SIZE_56:
            return p.size56;
        default:
            return p.size24;
    }
}
function A() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b.SIZE_24;
    switch (e) {
        case b.SIZE_16:
            return y.SIZE_10;
        case b.SIZE_24:
            return y.SIZE_15;
        case b.SIZE_32:
            return y.SIZE_20;
        case b.SIZE_56:
            return y.SIZE_35;
        default:
            return y.SIZE_10;
    }
}
class N extends (r = a.PureComponent) {
    renderUsers() {
        let { users: e, max: t, renderUser: n = this.defaultRenderUser, size: r, extraDetail: a } = this.props,
            o = [],
            s = e.length === t ? e.length : t - 1,
            l = this.renderMoreUsers(s),
            u = 0;
        for (; u < s && u < e.length; ) {
            var d;
            let t = null == l && null == a && u === e.length - 1,
                s = n(e[u], t, u);
            (o.push(
                t
                    ? (0, i.jsx)(
                          'div',
                          {
                              className: p.avatarContainer,
                              children: s
                          },
                          v(null != (d = e[u]) ? d : null, u)
                      )
                    : (0, i.jsx)(
                          c.ZP,
                          {
                              className: p.avatarContainerMasked,
                              height: r,
                              width: r,
                              mask: c.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
                              children: s
                          },
                          v(e[u], u)
                      )
            ),
                u++);
        }
        return (null != a ? o.push(a) : null != l && o.push(l), o);
    }
    renderMoreUsers(e) {
        let { max: t, count: n, hideMoreUsers: r, renderMoreUsers: o, users: s, dimEmptyUsers: l } = this.props,
            c = Math.min(e, s.length),
            u = l ? T : o;
        if (!r) {
            if (null != n) {
                if (n >= t) return (0, i.jsx)(a.Fragment, { children: u(''.concat(t, '+'), t) }, 'more-users');
                else if (n > s.length) {
                    let e = n - s.length;
                    return (0, i.jsx)(a.Fragment, { children: u('+'.concat(e), e) }, 'more-users');
                }
            } else if (c < s.length) {
                let e = Math.min(s.length - c, 99);
                return (0, i.jsx)(a.Fragment, { children: u('+'.concat(e), e) }, 'more-users');
            }
        }
    }
    renderIcon() {
        return this.props.renderIcon
            ? (0, i.jsx)(l.gj8, {
                  size: 'md',
                  color: 'currentColor',
                  colorClass: p.__invalid_foreground,
                  className: p.icon
              })
            : null;
    }
    render() {
        let { className: e, size: t, users: n, guildId: r, showUserPopout: a, useFallbackUserForPopout: o } = this.props,
            { popoutUserId: l } = this.state;
        if (null == l)
            return (0, i.jsxs)('div', {
                className: s()(e, p.container, S(t)),
                children: [this.renderIcon(), this.renderUsers()]
            });
        let c = n.find((e) => e instanceof d.Z && e.id === l),
            f = o && null == _.default.getUser(l);
        return (0, i.jsx)(u.Z, {
            targetElementRef: this._ref,
            userId: l,
            user: f && null != c ? c : void 0,
            guildId: r,
            fixed: !0,
            shouldShow: !0 === a && null != l,
            onRequestClose: () => this.setState({ popoutUserId: null }),
            clickTrap: !0,
            children: (n) =>
                (0, i.jsxs)(
                    'div',
                    E(
                        m(
                            {
                                className: s()(e, p.container, S(t)),
                                ref: this._ref
                            },
                            n
                        ),
                        {
                            children: [this.renderIcon(), this.renderUsers()]
                        }
                    )
                )
        });
    }
    constructor(...e) {
        (super(...e),
            h(this, 'state', { popoutUserId: null }),
            h(this, '_ref', a.createRef()),
            h(this, 'defaultRenderUser', (e, t, n) => {
                let r,
                    { showUserPopout: a, guildId: o, size: c, dimEmptyUsers: u } = this.props;
                if (null == e)
                    if (!this.props.showDefaultAvatarsForNullUsers) return (0, i.jsx)('div', { className: s()(p.emptyUser, { [p.emptyUserDimmed]: u }) });
                    else {
                        let e = (null != n ? n : 0) % f.Z.DEFAULT_AVATARS.length,
                            t = f.Z.DEFAULT_AVATARS[e];
                        return (0, i.jsx)('img', {
                            src: t,
                            alt: '',
                            className: p.avatar
                        });
                    }
                if (e === O) {
                    let e = A(c);
                    r = (0, i.jsx)(l.tBG, {
                        size: 'custom',
                        color: 'currentColor',
                        width: e,
                        height: e
                    });
                } else
                    r = (0, i.jsx)('img', {
                        src: e.getAvatarURL(o, c),
                        alt: e.username,
                        className: p.avatar
                    });
                let d = (0, i.jsx)(
                    'div',
                    {
                        className: p.avatarWithBackground,
                        children: r
                    },
                    v(e, n)
                );
                return a && e !== O
                    ? (0, i.jsx)(
                          l.P3F,
                          {
                              className: p.clickableAvatar,
                              onClick: () => {
                                  null != this._ref.current && null != e && this.setState({ popoutUserId: e.id });
                              },
                              tabIndex: -1,
                              children: d
                          },
                          v(e, n)
                      )
                    : d;
            }));
    }
}
h(N, 'defaultProps', {
    max: 10,
    renderMoreUsers: I,
    renderIcon: !1,
    showDefaultAvatarsForNullUsers: !1,
    size: b.SIZE_24
});
let C = N;
