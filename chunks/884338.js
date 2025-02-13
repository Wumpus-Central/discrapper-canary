n.d(t, {
    Z: () => S,
    u: () => v
}),
    n(653041),
    n(47120);
var i,
    r = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(512722),
    u = n.n(l),
    c = n(481060),
    d = n(686546),
    f = n(184301),
    _ = n(347475),
    p = n(598077),
    h = n(594174),
    m = n(426563),
    g = n(577007);
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
let v = {
    SIZE_16: 16,
    SIZE_24: 24,
    SIZE_32: 32,
    SIZE_56: 56
};
function y(e, t) {
    let n = e instanceof p.Z ? e : null != e ? e.user : null;
    return null != n ? n.id : 'user-'.concat(t);
}
function I(e) {
    return (0, r.jsx)('div', {
        className: g.moreUsers,
        children: e
    });
}
function T() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v.SIZE_24;
    switch (e) {
        case v.SIZE_16:
            return g.size16;
        case v.SIZE_24:
            return g.size24;
        case v.SIZE_32:
            return g.size32;
        case v.SIZE_56:
            return g.size56;
        default:
            return g.size24;
    }
}
class b extends (i = a.PureComponent) {
    renderUsers() {
        let { users: e, max: t, renderUser: n = this.defaultRenderUser, size: i, extraDetail: a } = this.props,
            s = [],
            o = e.length === t ? e.length : t - 1,
            l = this.renderMoreUsers(o),
            u = 0;
        for (; u < o && u < e.length; ) {
            var c;
            let t = null == l && null == a && u === e.length - 1,
                o = n(e[u], t, u);
            s.push(
                t
                    ? (0, r.jsx)(
                          'div',
                          {
                              className: g.avatarContainer,
                              children: o
                          },
                          y(null !== (c = e[u]) && void 0 !== c ? c : null, u)
                      )
                    : (0, r.jsx)(
                          d.ZP,
                          {
                              className: g.avatarContainerMasked,
                              height: i,
                              width: i,
                              mask: d.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
                              children: o
                          },
                          y(e[u], u)
                      )
            ),
                u++;
        }
        return null != a ? s.push(a) : null != l && s.push(l), s;
    }
    renderMoreUsers(e) {
        let { max: t, count: n, hideMoreUsers: i, renderMoreUsers: s, users: o } = this.props,
            l = Math.min(e, o.length);
        if (!i) {
            if (null != n) {
                if (n >= t) return (0, r.jsx)(a.Fragment, { children: s(''.concat(t, '+'), t) }, 'more-users');
                if (n > o.length) {
                    let e = n - o.length;
                    return (0, r.jsx)(a.Fragment, { children: s('+'.concat(e), e) }, 'more-users');
                }
            } else if (l < o.length) {
                let e = Math.min(o.length - l, 99);
                return (0, r.jsx)(a.Fragment, { children: s('+'.concat(e), e) }, 'more-users');
            }
        }
    }
    renderIcon() {
        return this.props.renderIcon
            ? (0, r.jsx)(c.gj8, {
                  size: 'md',
                  color: 'currentColor',
                  colorClass: g.__invalid_foreground,
                  className: g.icon
              })
            : null;
    }
    render() {
        let { className: e, size: t, users: n, guildId: i, showUserPopout: a, useFallbackUserForPopout: s } = this.props,
            { popoutUserId: l } = this.state,
            d = n.find((e) => null != e && e.id === l),
            p = s && null == h.default.getUser(l);
        return (0, r.jsx)(c.yRy, {
            position: 'right',
            preload: null == d ? void 0 : () => (0, f.Z)(d.id, d.getAvatarURL(i, 80), { guildId: i }),
            shouldShow: !0 === a && null != l,
            fixed: !0,
            renderPopout: (e) => (
                u()(null != l, 'UserSummaryItem.render - renderPopout: popoutUserId cannot be null'),
                (0, r.jsx)(_.Z, {
                    ...this.props,
                    user: p && null != d ? d : void 0,
                    ...e,
                    userId: l,
                    guildId: this.props.guildId
                })
            ),
            onRequestClose: () => this.setState({ popoutUserId: null }),
            children: (n) =>
                (0, r.jsxs)('div', {
                    className: o()(e, g.container, T(t)),
                    ref: this._ref,
                    ...n,
                    children: [this.renderIcon(), this.renderUsers()]
                })
        });
    }
    constructor(...e) {
        super(...e),
            E(this, 'state', { popoutUserId: null }),
            E(this, '_ref', a.createRef()),
            E(this, 'defaultRenderUser', (e, t, n) => {
                let { showUserPopout: i, guildId: a, size: s } = this.props;
                if (null == e) {
                    if (!this.props.showDefaultAvatarsForNullUsers) return (0, r.jsx)('div', { className: g.emptyUser });
                    {
                        let e = (null != n ? n : 0) % m.Z.DEFAULT_AVATARS.length,
                            t = m.Z.DEFAULT_AVATARS[e];
                        return (0, r.jsx)('img', {
                            src: t,
                            alt: '',
                            className: g.avatar
                        });
                    }
                }
                let o = (0, r.jsx)(
                    'img',
                    {
                        src: e.getAvatarURL(a, s),
                        alt: e.username,
                        className: g.avatar
                    },
                    e.id
                );
                return i
                    ? (0, r.jsx)(
                          c.P3F,
                          {
                              className: g.clickableAvatar,
                              onClick: () => {
                                  null != this._ref.current && null != e && this.setState({ popoutUserId: e.id });
                              },
                              tabIndex: -1,
                              children: o
                          },
                          e.id
                      )
                    : o;
            });
    }
}
E(b, 'defaultProps', {
    max: 10,
    renderMoreUsers: I,
    renderIcon: !1,
    showDefaultAvatarsForNullUsers: !1,
    size: v.SIZE_24
});
let S = b;
