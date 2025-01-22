r.d(n, {
    EK: function () {
        return M;
    },
    Io: function () {
        return x;
    },
    NY: function () {
        return w;
    },
    Ox: function () {
        return O;
    },
    Vq: function () {
        return L;
    },
    Wf: function () {
        return P;
    },
    cB: function () {
        return D;
    },
    dy: function () {
        return N;
    },
    wP: function () {
        return R;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    o = r(481060),
    s = r(596454),
    l = r(99690),
    u = r(607070),
    c = r(927723),
    d = r(754688),
    f = r(699450),
    p = r(303694),
    h = r(124072),
    _ = r(692629);
r(763296);
var m = r(592125),
    g = r(430824),
    E = r(246946),
    v = r(594174),
    y = r(934415),
    b = r(5192),
    I = r(51144),
    T = r(377668),
    S = r(388032),
    A = r(832226),
    C = r(665162);
function N(e) {
    let { emoji: n } = e;
    return (0, i.jsx)(o.Tooltip, {
        text: n.name,
        delay: 750,
        position: 'top',
        children: (e) =>
            (0, i.jsx)(s.Z, {
                src: n.src,
                emojiName: n.name,
                animated: !1,
                ...e
            })
    });
}
function R(e) {
    let { emoji: n } = e;
    return (0, i.jsx)(o.Tooltip, {
        text: n.name,
        delay: 750,
        position: 'top',
        children: (e) =>
            (0, i.jsx)(s.Z, {
                emojiId: n.emojiId,
                emojiName: n.name,
                animated: n.animated,
                ...e
            })
    });
}
function O(e) {
    let { text: n, channelId: r, guildId: a } = e,
        o = g.Z.getGuild(a),
        s = m.Z.getChannel(r),
        l = (0, c.Ib)(o, s) && '@Clyde' === n ? T.jM : null;
    return (0, i.jsx)(h.Z, {
        color: l,
        children: n
    });
}
function D(e) {
    let { id: n, guildId: r, channelId: s } = e,
        u = (0, a.e7)([v.default], () => v.default.getUser(n)),
        c = (0, a.e7)([E.Z], () => E.Z.hidePersonalInformation),
        d = b.ZP.useName(r, s, u),
        f = (0, i.jsx)(h.Z, { children: null == d ? '<@'.concat(n, '>') : '@'.concat(d) });
    if (null != u) {
        let e = c || u.isPomelo() ? null : '#'.concat(u.discriminator);
        return (0, i.jsx)(o.Tooltip, {
            text: (0, i.jsxs)('div', {
                className: A.userTooltip,
                children: [
                    (0, i.jsx)(l.Z, {
                        user: u,
                        animate: !0,
                        size: o.AvatarSizes.SIZE_16,
                        className: A.avatar
                    }),
                    I.ZP.getUserTag(u, {
                        mode: 'username',
                        identifiable: c ? 'never' : 'always'
                    }),
                    (0, i.jsx)('span', {
                        className: A.discriminator,
                        children: e
                    })
                ]
            }),
            delay: 750,
            position: 'top',
            'aria-label': I.ZP.getUserTag(u, { decoration: 'never' }),
            children: (e) =>
                (0, i.jsx)(o.Clickable, {
                    tag: 'span',
                    ...e,
                    children: f
                })
        });
    }
    return f;
}
function L(e) {
    let { id: n, guildId: r } = e,
        s = (0, a.e7)([g.Z], () => (null != r ? g.Z.getRole(r, n) : void 0)),
        l = (0, a.e7)([u.Z], () => u.Z.roleStyle);
    if (null == s)
        return (0, i.jsxs)('span', {
            children: ['@', S.intl.string(S.t['YV4F/v'])]
        });
    let c = null != s.color && 0 !== s.color,
        d = 'dot' === l,
        f = 'username' === l && c;
    return (0, i.jsxs)(h.Z, {
        color: f ? s.color : null,
        children: [
            d &&
                (0, i.jsx)(o.RoleDot, {
                    color: s.colorString,
                    background: !1,
                    tooltip: !1
                }),
            '@',
            s.name
        ]
    });
}
function x(e) {
    let { id: n } = e,
        r = (0, a.e7)([m.Z], () => m.Z.getChannel(n)),
        o = S.intl.string(S.t.zLZPmp).toLowerCase(),
        s = 'text',
        l = !0;
    if (null != r) {
        var u;
        (o = (0, d.YO)(r) ? r.name : S.intl.string(S.t['/YzI6+'])), (s = (0, d.YO)(r) ? (null !== (u = (0, y.wl)(r)) && void 0 !== u ? u : 'text') : 'locked'), (l = (0, f.B)(r.type));
    }
    return l
        ? (0, i.jsx)(h.Z, {
              iconType: s,
              children: o
          })
        : (0, i.jsx)('span', { children: '#' + o });
}
function w(e) {
    let { id: n, itemId: r, guildId: a } = e,
        o = (0, p.l)(n),
        s = (0, p.W)(n, r, a);
    return (0, i.jsxs)(h.Z, {
        iconType: n,
        children: [o, null != s && (0, i.jsx)(_.Z, {}), s]
    });
}
function P(e) {
    let { text: n, id: r } = e;
    return (0, i.jsxs)(h.Z, {
        children: [n, '(', r, ')']
    });
}
function M(e) {
    let { timestamp: n } = e;
    return (0, i.jsx)('span', {
        className: C.timestamp,
        children: n.formatted
    });
}
