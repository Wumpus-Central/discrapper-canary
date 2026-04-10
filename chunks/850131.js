"use strict";
n.d(t, { A: () => S });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    l = n.n(s),
    a = n(23339),
    c = n(827734),
    o = n(397927),
    u = n(843472),
    d = n(565645),
    _ = n(763754),
    E = n(447215),
    A = n(888675),
    m = n(533567),
    I = n(306417),
    T = n(412136),
    g = n(985018),
    N = n(948762);
function f() {
    return (0, i.jsx)("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: c.A.colors.INTERACTIVE_TEXT_DEFAULT.css,
        "aria-hidden": !0,
        children: (0, i.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM5.70711 9.29289C5.31658 8.90237 4.68342 8.90237 4.29289 9.29289C3.90237 9.68342 3.90237 10.3166 4.29289 10.7071L5.08579 11.5L4.29289 12.2929C3.90237 12.6834 3.90237 13.3166 4.29289 13.7071C4.68342 14.0976 5.31658 14.0976 5.70711 13.7071L6.5 12.9142L7.29289 13.7071C7.68342 14.0976 8.31658 14.0976 8.70711 13.7071C9.09763 13.3166 9.09763 12.6834 8.70711 12.2929L7.91421 11.5L8.70711 10.7071C9.09763 10.3166 9.09763 9.68342 8.70711 9.29289C8.31658 8.90237 7.68342 8.90237 7.29289 9.29289L6.5 10.0858L5.70711 9.29289ZM15.2929 9.29289C15.6834 8.90237 16.3166 8.90237 16.7071 9.29289L17.5 10.0858L18.2929 9.29289C18.6834 8.90237 19.3166 8.90237 19.7071 9.29289C20.0976 9.68342 20.0976 10.3166 19.7071 10.7071L18.9142 11.5L19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071C19.3166 14.0976 18.6834 14.0976 18.2929 13.7071L17.5 12.9142L16.7071 13.7071C16.3166 14.0976 15.6834 14.0976 15.2929 13.7071C14.9024 13.3166 14.9024 12.6834 15.2929 12.2929L16.0858 11.5L15.2929 10.7071C14.9024 10.3166 14.9024 9.68342 15.2929 9.29289ZM9.08869 17.5563C8.78148 18.0152 8.16038 18.1382 7.70142 17.831C7.24247 17.5238 7.11947 16.9027 7.42669 16.4437C8.41166 14.9723 10.092 14 11.9999 14C13.9078 14 15.5881 14.9723 16.5731 16.4437C16.8803 16.9027 16.7573 17.5238 16.2984 17.831C15.8394 18.1382 15.2183 18.0152 14.9111 17.5563C14.2815 16.6158 13.2124 16 11.9999 16C10.7874 16 9.71825 16.6158 9.08869 17.5563Z",
            fill: "currentColor",
        }),
    });
}
function p(e) {
    let t,
        { hasNoVotes: n, victorEmoji: r } = e;
    if (n) t = (0, i.jsx)(f, {});
    else if (null != r) {
        let e = "" !== r.name ? r.name : r.displayName;
        t = (0, i.jsx)(d.A, { emojiId: r.id, emojiName: e, animated: r.animated });
    }
    return null != t ? (0, i.jsx)("div", { className: N.ZS, children: t }) : null;
}
function C(e) {
    let t,
        { type: n, ...r } = e,
        s = "text-muted";
    switch (n) {
        case "NO_VOTES":
            t = (0, i.jsx)(o.Text, {
                variant: "text-sm/semibold",
                color: "text-default",
                scaleFontToUserSetting: !0,
                children: g.intl.string(g.t["a+lSZ/"]),
            });
            break;
        case "VICTOR":
            let { victorAnswerText: l, victorVotePercentage: a } = r;
            t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)("div", {
                        className: N.sj,
                        children: [
                            (0, i.jsx)(o.Text, {
                                variant: "text-sm/semibold",
                                color: "text-default",
                                className: N.Dq,
                                scaleFontToUserSetting: !0,
                                children: l,
                            }),
                            (0, i.jsx)(I.Vx, { size: 16, className: N.To, isVictor: !0, isExpired: !0 }),
                        ],
                    }),
                    (0, i.jsxs)(o.Text, {
                        variant: "text-xs/medium",
                        color: s,
                        scaleFontToUserSetting: !0,
                        children: [g.intl.string(g.t.ufIDIx), " • ", a, "%"],
                    }),
                ],
            });
            break;
        case "TIE":
            let { tiedVotePercentage: c } = r;
            t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(o.Text, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        scaleFontToUserSetting: !0,
                        children: g.intl.string(g.t.kPN9si),
                    }),
                    (0, i.jsxs)(o.Text, {
                        variant: "text-xs/medium",
                        color: s,
                        scaleFontToUserSetting: !0,
                        children: [c, "%"],
                    }),
                ],
            });
    }
    return (0, i.jsx)("div", { className: N.h_, children: t });
}
function h(e) {
    let { className: t, data: n, onClickPollLink: s } = e,
        a = r.useMemo(
            () =>
                (function (e) {
                    if (0 === e.totalVotes) return { type: "NO_VOTES" };
                    let t = null != e.victorAnswerId,
                        n = e.totalVotes > 0 ? Math.round((e.victorAnswerVotes / e.totalVotes) * 100) : 0;
                    return t
                        ? { type: "VICTOR", victorAnswerText: e.victorAnswerText, victorVotePercentage: n }
                        : { type: "TIE", tiedVotePercentage: n };
                })(n),
            [n],
        ),
        c = null != n.victorEmoji || "NO_VOTES" === a.type;
    return (0, i.jsxs)("div", {
        className: l()(N.kL, { [N.FS]: c }, t),
        children: [
            (0, i.jsx)(p, { hasNoVotes: "NO_VOTES" === a.type, victorEmoji: n.victorEmoji }),
            (0, i.jsx)(C, { ...a }),
            null != s &&
                (0, i.jsx)(o.Button, { size: "sm", onClick: s, variant: "secondary", text: g.intl.string(g.t.Jw7Vbf) }),
        ],
    });
}
function S(e) {
    let { message: t, channel: n, compact: s, disableInteraction: l = !1 } = e,
        c = t.embeds[0],
        d = r.useMemo(() => (0, m.A)(c), [c]),
        I = (0, a.EJ)(d?.questionText ?? "", T.TU),
        f = (0, _.Ay)(t),
        p = (0, E.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id }),
        C = t.messageReference,
        S = r.useCallback(() => {
            null != C &&
                u.A.jumpToMessage({
                    channelId: C.channel_id,
                    messageId: C.message_id,
                    flash: !0,
                    returnMessageId: t.id,
                });
        }, [t.id, C]);
    return null == d
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(A.A, {
                      iconNode: (0, i.jsx)(o.YRe, { size: "xs" }),
                      timestamp: t.timestamp,
                      compact: s,
                      children: g.intl.format(g.t.VJcK41, {
                          username: f.nick,
                          usernameHook: p(f),
                          title: I,
                          titleOnClick: S,
                      }),
                  }),
                  (0, i.jsx)(h, { className: N.E6, data: d, onClickPollLink: l ? void 0 : S }),
              ],
          });
}
