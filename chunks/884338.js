n.d(t, {
    Z: () => S,
    u: () => b
}),
    n(539854),
    n(388685);
var r,
    i = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(481060),
    c = n(686546),
    u = n(670188),
    d = n(598077),
    f = n(594174),
    _ = n(426563),
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
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
};
function y(e, t) {
    let n = e instanceof d.Z ? e : null != e ? e.user : null;
    return null != n ? n.id : 'user-'.concat(t);
}
function v(e) {
    return (0, i.jsx)('div', {
        className: p.moreUsers,
        children: e
    });
}
function O() {
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
class I extends (r = o.PureComponent) {
    renderUsers() {
        let { users: e, max: t, renderUser: n = this.defaultRenderUser, size: r, extraDetail: o } = this.props,
            a = [],
            s = e.length === t ? e.length : t - 1,
            l = this.renderMoreUsers(s),
            u = 0;
        for (; u < s && u < e.length; ) {
            var d;
            let t = null == l && null == o && u === e.length - 1,
                s = n(e[u], t, u);
            a.push(
                t
                    ? (0, i.jsx)(
                          'div',
                          {
                              className: p.avatarContainer,
                              children: s
                          },
                          y(null != (d = e[u]) ? d : null, u)
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
                          y(e[u], u)
                      )
            ),
                u++;
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
            ? (0, i.jsx)(l.gj8, {
                  size: 'md',
                  color: 'currentColor',
                  colorClass: p.__invalid_foreground,
                  className: p.icon
              })
            : null;
    }
    render() {
        let { className: e, size: t, users: n, guildId: r, showUserPopout: o, useFallbackUserForPopout: a } = this.props,
            { popoutUserId: l } = this.state;
        if (null == l)
            return (0, i.jsxs)('div', {
                className: s()(e, p.container, O(t)),
                children: [this.renderIcon(), this.renderUsers()]
            });
        let c = n.find((e) => null != e && e.id === l),
            d = a && null == f.default.getUser(l);
        return (0, i.jsx)(u.Z, {
            targetElementRef: this._ref,
            userId: l,
            user: d && null != c ? c : void 0,
            guildId: r,
            fixed: !0,
            shouldShow: !0 === o && null != l,
            onRequestClose: () => this.setState({ popoutUserId: null }),
            clickTrap: !0,
            children: (n) =>
                (0, i.jsxs)(
                    'div',
                    E(
                        m(
                            {
                                className: s()(e, p.container, O(t)),
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
            h(this, 'state', { popoutUserId: null }),
            h(this, '_ref', o.createRef()),
            h(this, 'defaultRenderUser', (e, t, n) => {
                let { showUserPopout: r, guildId: o, size: a } = this.props;
                if (null == e)
                    if (!this.props.showDefaultAvatarsForNullUsers) return (0, i.jsx)('div', { className: p.emptyUser });
                    else {
                        let e = (null != n ? n : 0) % _.Z.DEFAULT_AVATARS.length,
                            t = _.Z.DEFAULT_AVATARS[e];
                        return (0, i.jsx)('img', {
                            src: t,
                            alt: '',
                            className: p.avatar
                        });
                    }
                let s = (0, i.jsx)(
                    'img',
                    {
                        src: e.getAvatarURL(o, a),
                        alt: e.username,
                        className: p.avatar
                    },
                    e.id
                );
                return r
                    ? (0, i.jsx)(
                          l.P3F,
                          {
                              className: p.clickableAvatar,
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
h(I, 'defaultProps', {
    max: 10,
    renderMoreUsers: v,
    renderIcon: !1,
    showDefaultAvatarsForNullUsers: !1,
    size: b.SIZE_24
});
let S = I;
