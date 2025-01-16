r.d(n, {
    u: function () {
        return b;
    }
});
var i,
    a = r(653041);
var s = r(47120);
var o = r(200651),
    l = r(192379),
    u = r(120356),
    c = r.n(u),
    d = r(512722),
    f = r.n(d),
    _ = r(481060),
    h = r(686546),
    p = r(184301),
    m = r(347475),
    g = r(598077),
    E = r(594174),
    v = r(426563),
    I = r(795661);
function T(e, n, r) {
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
let b = {
    SIZE_16: 16,
    SIZE_24: 24,
    SIZE_32: 32,
    SIZE_56: 56
};
function y(e, n) {
    let r = e instanceof g.Z ? e : null != e ? e.user : null;
    return null != r ? r.id : 'user-'.concat(n);
}
function S(e) {
    return (0, o.jsx)('div', {
        className: I.moreUsers,
        children: e
    });
}
function A() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b.SIZE_24;
    switch (e) {
        case b.SIZE_16:
            return I.size16;
        case b.SIZE_24:
            return I.size24;
        case b.SIZE_32:
            return I.size32;
        case b.SIZE_56:
            return I.size56;
        default:
            return I.size24;
    }
}
class N extends (i = l.PureComponent) {
    renderUsers() {
        let { users: e, max: n, renderUser: r = this.defaultRenderUser, size: i, extraDetail: a } = this.props,
            s = [],
            l = e.length === n ? e.length : n - 1,
            u = this.renderMoreUsers(l),
            c = 0;
        for (; c < l && c < e.length; ) {
            var d;
            let n = null == u && null == a && c === e.length - 1,
                l = r(e[c], n, c);
            s.push(
                n
                    ? (0, o.jsx)(
                          'div',
                          {
                              className: I.avatarContainer,
                              children: l
                          },
                          y(null !== (d = e[c]) && void 0 !== d ? d : null, c)
                      )
                    : (0, o.jsx)(
                          h.ZP,
                          {
                              className: I.avatarContainerMasked,
                              height: i,
                              width: i,
                              mask: h.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
                              children: l
                          },
                          y(e[c], c)
                      )
            ),
                c++;
        }
        return null != a ? s.push(a) : null != u && s.push(u), s;
    }
    renderMoreUsers(e) {
        let { max: n, count: r, hideMoreUsers: i, renderMoreUsers: a, users: s } = this.props,
            u = Math.min(e, s.length);
        if (!i) {
            if (null != r) {
                if (r >= n) return (0, o.jsx)(l.Fragment, { children: a(''.concat(n, '+'), n) }, 'more-users');
                if (r > s.length) {
                    let e = r - s.length;
                    return (0, o.jsx)(l.Fragment, { children: a('+'.concat(e), e) }, 'more-users');
                }
            } else if (u < s.length) {
                let e = Math.min(s.length - u, 99);
                return (0, o.jsx)(l.Fragment, { children: a('+'.concat(e), e) }, 'more-users');
            }
        }
    }
    renderIcon() {
        return this.props.renderIcon
            ? (0, o.jsx)(_.VoiceNormalIcon, {
                  size: 'md',
                  color: 'currentColor',
                  colorClass: I.__invalid_foreground,
                  className: I.icon
              })
            : null;
    }
    render() {
        let { className: e, size: n, users: r, guildId: i, showUserPopout: a, useFallbackUserForPopout: s } = this.props,
            { popoutUserId: l } = this.state,
            u = r.find((e) => null != e && e.id === l),
            d = s && null == E.default.getUser(l);
        return (0, o.jsx)(_.Popout, {
            position: 'right',
            preload: null == u ? void 0 : () => (0, p.Z)(u.id, u.getAvatarURL(i, 80), { guildId: i }),
            shouldShow: !0 === a && null != l,
            fixed: !0,
            renderPopout: (e) => (
                f()(null != l, 'UserSummaryItem.render - renderPopout: popoutUserId cannot be null'),
                (0, o.jsx)(m.Z, {
                    ...this.props,
                    user: d && null != u ? u : void 0,
                    ...e,
                    userId: l,
                    guildId: this.props.guildId
                })
            ),
            onRequestClose: () => this.setState({ popoutUserId: null }),
            children: (r) =>
                (0, o.jsxs)('div', {
                    className: c()(e, I.container, A(n)),
                    ref: this._ref,
                    ...r,
                    children: [this.renderIcon(), this.renderUsers()]
                })
        });
    }
    constructor(...e) {
        super(...e),
            T(this, 'state', { popoutUserId: null }),
            T(this, '_ref', l.createRef()),
            T(this, 'defaultRenderUser', (e, n, r) => {
                let { showUserPopout: i, guildId: a, size: s } = this.props;
                if (null == e) {
                    if (!this.props.showDefaultAvatarsForNullUsers) return (0, o.jsx)('div', { className: I.emptyUser });
                    {
                        let e = (null != r ? r : 0) % v.Z.DEFAULT_AVATARS.length,
                            n = v.Z.DEFAULT_AVATARS[e];
                        return (0, o.jsx)('img', {
                            src: n,
                            alt: '',
                            className: I.avatar
                        });
                    }
                }
                let l = (0, o.jsx)(
                    'img',
                    {
                        src: e.getAvatarURL(a, s),
                        alt: e.username,
                        className: I.avatar
                    },
                    e.id
                );
                return i
                    ? (0, o.jsx)(
                          _.Clickable,
                          {
                              className: I.clickableAvatar,
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
T(N, 'defaultProps', {
    max: 10,
    renderMoreUsers: S,
    renderIcon: !1,
    showDefaultAvatarsForNullUsers: !1,
    size: b.SIZE_24
}),
    (n.Z = N);
