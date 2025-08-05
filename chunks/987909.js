(n.d(t, { Z: () => R }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(159691),
    s = n(755721),
    l = n(904245),
    c = n(541716),
    u = n(419922),
    d = n(665906),
    f = n(223750),
    _ = n(271383),
    p = n(496675),
    h = n(594174),
    m = n(626135),
    g = n(709054),
    E = n(838440),
    b = n(981631),
    y = n(18485);
function O(e, t, n) {
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
function v(e) {
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
                O(e, t, n[t]);
            }));
    }
    return e;
}
function I(e, t) {
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
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e) {
    let { channel: t, message: n, currentUser: r } = e;
    return (0, a.e7)([p.Z, _.ZP], () => {
        var e;
        let i = t.guild_id;
        if (null == r || null == i) return !1;
        let a = (0, d.xl)(t),
            o = p.Z.can(b.Plq.SEND_MESSAGES, t),
            s = null == (e = _.ZP.getMember(i, r.id)) ? void 0 : e.isPending,
            l = n.author.bot;
        return o && !a && !s && !l;
    });
}
function A(e) {
    let { assets: t, currentUser: n, message: r } = e,
        i = (g.default.extractTimestamp(n.id) + g.default.extractTimestamp(r.id)) % t.length;
    return t[i];
}
function N(e) {
    let { channel: t, message: n, sticker: r } = e,
        i = {
            channel: t,
            message: n,
            shouldMention: !0,
            showMentionToggle: !0
        };
    l.Z.sendGreetMessage(t.id, r.id, l.Z.getSendMessageOptionsForReply(i));
}
function C(e) {
    let { sticker: t, event: n, eventProperties: r } = e;
    null != n && m.default.track(n, T(v({}, r), { sticker_id: t.id }));
}
function w(e) {
    let { currentUser: t, channel: n, message: a, buttonLabels: l, stickers: d, event: _, eventProperties: p } = e,
        h = (0, f.t)(),
        [m, g] = i.useState(!1),
        b = i.useMemo(
            () =>
                A({
                    assets: d,
                    currentUser: t,
                    message: a
                }),
            [d, t, a]
        ),
        O = i.useMemo(
            () =>
                A({
                    assets: l,
                    currentUser: t,
                    message: a
                }),
            [l, t, a]
        ),
        v = i.useCallback(async () => {
            let { valid: e } = await (0, E.v)({
                type: c.Ie.FORM,
                content: '',
                channel: n
            });
            e &&
                (N({
                    channel: n,
                    message: a,
                    sticker: b
                }),
                C({
                    sticker: b,
                    event: _,
                    eventProperties: p
                }));
        }, [n, a, b, _, p]);
    return h
        ? (0, r.jsx)(o.zx, {
              variant: 'secondary',
              size: 'md',
              onClick: v,
              text: O
          })
        : (0, r.jsxs)(s.zx, {
              'data-migration-pending': !0,
              className: y.CTAMessageButtonOuter,
              innerClassName: y.CTAMessageButton,
              color: s.Tt.PRIMARY,
              onMouseEnter: () => g(!0),
              onMouseLeave: () => g(!1),
              onClick: v,
              children: [
                  (0, r.jsx)(u.Z, {
                      className: y.CTAMessageSticker,
                      isInteracting: m,
                      sticker: b,
                      size: 28
                  }),
                  O
              ]
          });
}
function R(e) {
    let { channel: t, message: n, buttonLabels: i, stickers: a, event: o, eventProperties: s } = e,
        l = h.default.getCurrentUser(),
        c = S({
            channel: t,
            message: n,
            currentUser: l
        });
    return null != l && c
        ? (0, r.jsx)('div', {
              className: y.CTAMessage,
              children: (0, r.jsx)(w, {
                  currentUser: l,
                  channel: t,
                  message: n,
                  buttonLabels: i,
                  stickers: a,
                  event: o,
                  eventProperties: s
              })
          })
        : null;
}
