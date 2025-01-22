r.d(n, {
    u: function () {
        return I;
    }
});
var i,
    a = r(653041);
var o = r(47120);
var s = r(200651),
    l = r(192379),
    u = r(120356),
    c = r.n(u),
    d = r(512722),
    f = r.n(d),
    p = r(481060),
    h = r(686546),
    _ = r(184301),
    m = r(347475),
    g = r(598077),
    E = r(594174),
    v = r(426563),
    y = r(795661);
function b(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let I = {
    SIZE_16: 16,
    SIZE_24: 24,
    SIZE_32: 32,
    SIZE_56: 56
};
function T(e, n) {
    let r = e instanceof g.Z ? e : null != e ? e.user : null;
    return null != r ? r.id : 'user-'.concat(n);
}
function S(e) {
    return (0, s.jsx)('div', {
        className: y.moreUsers,
        children: e
    });
}
function A() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I.SIZE_24;
    switch (e) {
        case I.SIZE_16:
            return y.size16;
        case I.SIZE_24:
            return y.size24;
        case I.SIZE_32:
            return y.size32;
        case I.SIZE_56:
            return y.size56;
        default:
            return y.size24;
    }
}
class C extends (i = l.PureComponent) {
    renderUsers() {
        let { users: e, max: n, renderUser: r = this.defaultRenderUser, size: i, extraDetail: a } = this.props,
            o = [],
            l = e.length === n ? e.length : n - 1,
            u = this.renderMoreUsers(l),
            c = 0;
        for (; c < l && c < e.length; ) {
            var d;
            let n = null == u && null == a && c === e.length - 1,
                l = r(e[c], n, c);
            o.push(
                n
                    ? (0, s.jsx)(
                          'div',
                          {
                              className: y.avatarContainer,
                              children: l
                          },
                          T(null !== (d = e[c]) && void 0 !== d ? d : null, c)
                      )
                    : (0, s.jsx)(
                          h.ZP,
                          {
                              className: y.avatarContainerMasked,
                              height: i,
                              width: i,
                              mask: h.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
                              children: l
                          },
                          T(e[c], c)
                      )
            ),
                c++;
        }
        return null != a ? o.push(a) : null != u && o.push(u), o;
    }
    renderMoreUsers(e) {
        let { max: n, count: r, hideMoreUsers: i, renderMoreUsers: a, users: o } = this.props,
            u = Math.min(e, o.length);
        if (!i) {
            if (null != r) {
                if (r >= n) return (0, s.jsx)(l.Fragment, { children: a(''.concat(n, '+'), n) }, 'more-users');
                if (r > o.length) {
                    let e = r - o.length;
                    return (0, s.jsx)(l.Fragment, { children: a('+'.concat(e), e) }, 'more-users');
                }
            } else if (u < o.length) {
                let e = Math.min(o.length - u, 99);
                return (0, s.jsx)(l.Fragment, { children: a('+'.concat(e), e) }, 'more-users');
            }
        }
    }
    renderIcon() {
        return this.props.renderIcon
            ? (0, s.jsx)(p.VoiceNormalIcon, {
                  size: 'md',
                  color: 'currentColor',
                  colorClass: y.__invalid_foreground,
                  className: y.icon
              })
            : null;
    }
    render() {
        let { className: e, size: n, users: r, guildId: i, showUserPopout: a, useFallbackUserForPopout: o } = this.props,
            { popoutUserId: l } = this.state,
            u = r.find((e) => null != e && e.id === l),
            d = o && null == E.default.getUser(l);
        return (0, s.jsx)(p.Popout, {
            position: 'right',
            preload: null == u ? void 0 : () => (0, _.Z)(u.id, u.getAvatarURL(i, 80), { guildId: i }),
            shouldShow: !0 === a && null != l,
            fixed: !0,
            renderPopout: (e) => (
                f()(null != l, 'UserSummaryItem.render - renderPopout: popoutUserId cannot be null'),
                (0, s.jsx)(m.Z, {
                    ...this.props,
                    user: d && null != u ? u : void 0,
                    ...e,
                    userId: l,
                    guildId: this.props.guildId
                })
            ),
            onRequestClose: () => this.setState({ popoutUserId: null }),
            children: (r) =>
                (0, s.jsxs)('div', {
                    className: c()(e, y.container, A(n)),
                    ref: this._ref,
                    ...r,
                    children: [this.renderIcon(), this.renderUsers()]
                })
        });
    }
    constructor(...e) {
        super(...e),
            b(this, 'state', { popoutUserId: null }),
            b(this, '_ref', l.createRef()),
            b(this, 'defaultRenderUser', (e, n, r) => {
                let { showUserPopout: i, guildId: a, size: o } = this.props;
                if (null == e) {
                    if (!this.props.showDefaultAvatarsForNullUsers) return (0, s.jsx)('div', { className: y.emptyUser });
                    {
                        let e = (null != r ? r : 0) % v.Z.DEFAULT_AVATARS.length,
                            n = v.Z.DEFAULT_AVATARS[e];
                        return (0, s.jsx)('img', {
                            src: n,
                            alt: '',
                            className: y.avatar
                        });
                    }
                }
                let l = (0, s.jsx)(
                    'img',
                    {
                        src: e.getAvatarURL(a, o),
                        alt: e.username,
                        className: y.avatar
                    },
                    e.id
                );
                return i
                    ? (0, s.jsx)(
                          p.Clickable,
                          {
                              className: y.clickableAvatar,
                              onClick: () => {
                                  null != this._ref.current && null != e && this.setState({ popoutUserId: e.id });
                              },
                              tabIndex: -1,
                              children: l
                          },
                          e.id
                      )
                    : l;
            });
    }
}
b(C, 'defaultProps', {
    max: 10,
    renderMoreUsers: S,
    renderIcon: !1,
    showDefaultAvatarsForNullUsers: !1,
    size: I.SIZE_24
}),
    (n.Z = C);
