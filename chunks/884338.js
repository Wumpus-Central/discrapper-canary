n.d(t, {
    Z: () => A,
    u: () => O
}),
    n(653041),
    n(47120);
var r,
    i = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(512722),
    c = n.n(l),
    u = n(481060),
    d = n(686546),
    f = n(184301),
    _ = n(347475),
    p = n(598077),
    h = n(594174),
    m = n(426563),
    g = n(472840);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let O = {
    SIZE_16: 16,
    SIZE_24: 24,
    SIZE_32: 32,
    SIZE_56: 56
};
function I(e, t) {
    let n = e instanceof p.Z ? e : null != e ? e.user : null;
    return null != n ? n.id : 'user-'.concat(t);
}
function S(e) {
    return (0, i.jsx)('div', {
        className: g.moreUsers,
        children: e
    });
}
function T() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O.SIZE_24;
    switch (e) {
        case O.SIZE_16:
            return g.size16;
        case O.SIZE_24:
            return g.size24;
        case O.SIZE_32:
            return g.size32;
        case O.SIZE_56:
            return g.size56;
        default:
            return g.size24;
    }
}
class N extends (r = o.PureComponent) {
    renderUsers() {
        let { users: e, max: t, renderUser: n = this.defaultRenderUser, size: r, extraDetail: o } = this.props,
            a = [],
            s = e.length === t ? e.length : t - 1,
            l = this.renderMoreUsers(s),
            c = 0;
        for (; c < s && c < e.length; ) {
            var u;
            let t = null == l && null == o && c === e.length - 1,
                s = n(e[c], t, c);
            a.push(
                t
                    ? (0, i.jsx)(
                          'div',
                          {
                              className: g.avatarContainer,
                              children: s
                          },
                          I(null != (u = e[c]) ? u : null, c)
                      )
                    : (0, i.jsx)(
                          d.ZP,
                          {
                              className: g.avatarContainerMasked,
                              height: r,
                              width: r,
                              mask: d.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
                              children: s
                          },
                          I(e[c], c)
                      )
            ),
                c++;
        }
        return null != o ? a.push(o) : null != l && a.push(l), a;
    }
    renderMoreUsers(e) {
        let { max: t, count: n, hideMoreUsers: r, renderMoreUsers: a, users: s } = this.props,
            l = Math.min(e, s.length);
        if (!r) {
            if (null != n) {
                if (n >= t) return (0, i.jsx)(o.Fragment, { children: a(''.concat(t, '+'), t) }, 'more-users');
                else if (n > s.length) {
                    let e = n - s.length;
                    return (0, i.jsx)(o.Fragment, { children: a('+'.concat(e), e) }, 'more-users');
                }
            } else if (l < s.length) {
                let e = Math.min(s.length - l, 99);
                return (0, i.jsx)(o.Fragment, { children: a('+'.concat(e), e) }, 'more-users');
            }
        }
    }
    renderIcon() {
        return this.props.renderIcon
            ? (0, i.jsx)(u.gj8, {
                  size: 'md',
                  color: 'currentColor',
                  colorClass: g.__invalid_foreground,
                  className: g.icon
              })
            : null;
    }
    render() {
        let { className: e, size: t, users: n, guildId: r, showUserPopout: o, useFallbackUserForPopout: a } = this.props,
            { popoutUserId: l } = this.state,
            d = n.find((e) => null != e && e.id === l),
            p = a && null == h.default.getUser(l);
        return (0, i.jsx)(u.yRy, {
            targetElementRef: this._ref,
            position: 'right',
            preload: null == d ? void 0 : () => (0, f.Z)(d.id, d.getAvatarURL(r, 80), { guildId: r }),
            shouldShow: !0 === o && null != l,
            fixed: !0,
            renderPopout: (e) => (
                c()(null != l, 'UserSummaryItem.render - renderPopout: popoutUserId cannot be null'),
                (0, i.jsx)(
                    _.Z,
                    v(b(v(b({}, this.props), { user: p && null != d ? d : void 0 }), e), {
                        userId: l,
                        guildId: this.props.guildId
                    })
                )
            ),
            onRequestClose: () => this.setState({ popoutUserId: null }),
            clickTrap: !0,
            children: (n) =>
                (0, i.jsxs)(
                    'div',
                    v(
                        b(
                            {
                                className: s()(e, g.container, T(t)),
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
        super(...e),
            E(this, 'state', { popoutUserId: null }),
            E(this, '_ref', o.createRef()),
            E(this, 'defaultRenderUser', (e, t, n) => {
                let { showUserPopout: r, guildId: o, size: a } = this.props;
                if (null == e)
                    if (!this.props.showDefaultAvatarsForNullUsers) return (0, i.jsx)('div', { className: g.emptyUser });
                    else {
                        let e = (null != n ? n : 0) % m.Z.DEFAULT_AVATARS.length,
                            t = m.Z.DEFAULT_AVATARS[e];
                        return (0, i.jsx)('img', {
                            src: t,
                            alt: '',
                            className: g.avatar
                        });
                    }
                let s = (0, i.jsx)(
                    'img',
                    {
                        src: e.getAvatarURL(o, a),
                        alt: e.username,
                        className: g.avatar
                    },
                    e.id
                );
                return r
                    ? (0, i.jsx)(
                          u.P3F,
                          {
                              className: g.clickableAvatar,
                              onClick: () => {
                                  null != this._ref.current && null != e && this.setState({ popoutUserId: e.id });
                              },
                              tabIndex: -1,
                              children: s
                          },
                          e.id
                      )
                    : s;
            });
    }
}
E(N, 'defaultProps', {
    max: 10,
    renderMoreUsers: S,
    renderIcon: !1,
    showDefaultAvatarsForNullUsers: !1,
    size: O.SIZE_24
});
let A = N;
