n.d(t, { Z: () => N });
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(159691),
    s = n(904245),
    l = n(541716),
    c = n(419922),
    u = n(665906),
    d = n(271383),
    f = n(496675),
    p = n(594174),
    _ = n(626135),
    m = n(709054),
    h = n(838440),
    g = n(981631),
    E = n(888022);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e) {
    let { channel: t, message: n, currentUser: r } = e;
    return (0, a.e7)([f.Z, d.ZP], () => {
        var e;
        let i = t.guild_id;
        if (null == r || null == i) return !1;
        let a = (0, u.xl)(t),
            o = f.Z.can(g.Plq.SEND_MESSAGES, t),
            s = null == (e = d.ZP.getMember(i, r.id)) ? void 0 : e.isPending,
            l = n.author.bot;
        return o && !a && !s && !l;
    });
}
function I(e) {
    let { assets: t, currentUser: n, message: r } = e,
        i = (m.default.extractTimestamp(n.id) + m.default.extractTimestamp(r.id)) % t.length;
    return t[i];
}
function T(e) {
    let { channel: t, message: n, sticker: r } = e,
        i = {
            channel: t,
            message: n,
            shouldMention: !0,
            showMentionToggle: !0,
        };
    s.Z.sendGreetMessage(t.id, r.id, s.Z.getSendMessageOptionsForReply(i));
}
function C(e) {
    let { sticker: t, event: n, eventProperties: r } = e;
    null != n && _.default.track(n, v(y({}, r), { sticker_id: t.id }));
}
function A(e) {
    let { currentUser: t, channel: n, message: a, buttonLabels: s, stickers: u, event: d, eventProperties: f } = e,
        p = i.useMemo(
            () =>
                I({
                    assets: u,
                    currentUser: t,
                    message: a,
                }),
            [u, t, a],
        ),
        _ = i.useMemo(
            () =>
                I({
                    assets: s,
                    currentUser: t,
                    message: a,
                }),
            [s, t, a],
        ),
        m = i.useCallback(async () => {
            let { valid: e } = await (0, h.v)({
                type: l.Ie.FORM,
                content: "",
                channel: n,
            });
            e &&
                (T({
                    channel: n,
                    message: a,
                    sticker: p,
                }),
                C({
                    sticker: p,
                    event: d,
                    eventProperties: f,
                }));
        }, [n, a, p, d, f]);
    return (0, r.jsx)(o.zxk, {
        icon: {
            type: "sticker",
            asset: p,
            component: c.Z,
        },
        text: _,
        onClick: m,
        variant: "secondary",
    });
}
function N(e) {
    let { channel: t, message: n, buttonLabels: i, stickers: a, event: o, eventProperties: s } = e,
        l = p.default.getCurrentUser(),
        c = S({
            channel: t,
            message: n,
            currentUser: l,
        });
    return null != l && c
        ? (0, r.jsx)("div", {
              className: E.CTAMessage,
              children: (0, r.jsx)(A, {
                  currentUser: l,
                  channel: t,
                  message: n,
                  buttonLabels: i,
                  stickers: a,
                  event: o,
                  eventProperties: s,
              }),
          })
        : null;
}
