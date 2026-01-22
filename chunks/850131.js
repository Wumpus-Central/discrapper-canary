n.d(t, {
    A: () => w,
}),
    n(228524);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(23339),
    l = n(827734),
    c = n(397927),
    u = n(843472),
    d = n(565645),
    f = n(763754),
    p = n(447215),
    _ = n(888675),
    h = n(533567),
    m = n(306417),
    g = n(412136),
    E = n(985018),
    b = n(782635);

function y(e, t, n) {
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

function O(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}

function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = v(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let S = 16;

function I() {
    return (0, r.jsx)("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: l.A.colors.INTERACTIVE_TEXT_DEFAULT.css,
        "aria-hidden": !0,
        children: (0, r.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM5.70711 9.29289C5.31658 8.90237 4.68342 8.90237 4.29289 9.29289C3.90237 9.68342 3.90237 10.3166 4.29289 10.7071L5.08579 11.5L4.29289 12.2929C3.90237 12.6834 3.90237 13.3166 4.29289 13.7071C4.68342 14.0976 5.31658 14.0976 5.70711 13.7071L6.5 12.9142L7.29289 13.7071C7.68342 14.0976 8.31658 14.0976 8.70711 13.7071C9.09763 13.3166 9.09763 12.6834 8.70711 12.2929L7.91421 11.5L8.70711 10.7071C9.09763 10.3166 9.09763 9.68342 8.70711 9.29289C8.31658 8.90237 7.68342 8.90237 7.29289 9.29289L6.5 10.0858L5.70711 9.29289ZM15.2929 9.29289C15.6834 8.90237 16.3166 8.90237 16.7071 9.29289L17.5 10.0858L18.2929 9.29289C18.6834 8.90237 19.3166 8.90237 19.7071 9.29289C20.0976 9.68342 20.0976 10.3166 19.7071 10.7071L18.9142 11.5L19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071C19.3166 14.0976 18.6834 14.0976 18.2929 13.7071L17.5 12.9142L16.7071 13.7071C16.3166 14.0976 15.6834 14.0976 15.2929 13.7071C14.9024 13.3166 14.9024 12.6834 15.2929 12.2929L16.0858 11.5L15.2929 10.7071C14.9024 10.3166 14.9024 9.68342 15.2929 9.29289ZM9.08869 17.5563C8.78148 18.0152 8.16038 18.1382 7.70142 17.831C7.24247 17.5238 7.11947 16.9027 7.42669 16.4437C8.41166 14.9723 10.092 14 11.9999 14C13.9078 14 15.5881 14.9723 16.5731 16.4437C16.8803 16.9027 16.7573 17.5238 16.2984 17.831C15.8394 18.1382 15.2183 18.0152 14.9111 17.5563C14.2815 16.6158 13.2124 16 11.9999 16C10.7874 16 9.71825 16.6158 9.08869 17.5563Z",
            fill: "currentColor",
        }),
    });
}

function T(e) {
    let t,
        { hasNoVotes: n, victorEmoji: i } = e;
    if (n) t = (0, r.jsx)(I, {});
    else if (null != i) {
        let e = "" !== i.name ? i.name : i.displayName;
        t = (0, r.jsx)(d.A, {
            emojiId: i.id,
            emojiName: e,
            animated: i.animated,
        });
    }
    return null != t
        ? (0, r.jsx)("div", {
              className: b.ZS,
              children: t,
          })
        : null;
}

function C(e) {
    if (0 === e.totalVotes)
        return {
            type: "NO_VOTES",
        };
    let t = null != e.victorAnswerId,
        n = e.totalVotes > 0 ? Math.round((e.victorAnswerVotes / e.totalVotes) * 100) : 0;
    return t
        ? {
              type: "VICTOR",
              victorAnswerText: e.victorAnswerText,
              victorVotePercentage: n,
          }
        : {
              type: "TIE",
              tiedVotePercentage: n,
          };
}

function N(e) {
    let t,
        { type: n } = e,
        i = A(e, ["type"]),
        a = "text-muted";
    switch (n) {
        case "NO_VOTES":
            t = (0, r.jsx)(c.Text, {
                variant: "text-sm/semibold",
                color: "text-default",
                scaleFontToUserSetting: !0,
                children: E.intl.string(E.t["a+lSZ/"]),
            });
            break;
        case "VICTOR":
            let { victorAnswerText: s, victorVotePercentage: o } = i;
            t = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)("div", {
                        className: b.sj,
                        children: [
                            (0, r.jsx)(c.Text, {
                                variant: "text-sm/semibold",
                                color: "text-default",
                                className: b.Dq,
                                scaleFontToUserSetting: !0,
                                children: s,
                            }),
                            (0, r.jsx)(m.Vx, {
                                size: S,
                                className: b.To,
                                isVictor: !0,
                                isExpired: !0,
                            }),
                        ],
                    }),
                    (0, r.jsxs)(c.Text, {
                        variant: "text-xs/medium",
                        color: a,
                        scaleFontToUserSetting: !0,
                        children: [E.intl.string(E.t.ufIDIx), " • ", o, "%"],
                    }),
                ],
            });
            break;
        case "TIE":
            let { tiedVotePercentage: l } = i;
            t = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(c.Text, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        scaleFontToUserSetting: !0,
                        children: E.intl.string(E.t.kPN9si),
                    }),
                    (0, r.jsxs)(c.Text, {
                        variant: "text-xs/medium",
                        color: a,
                        scaleFontToUserSetting: !0,
                        children: [l, "%"],
                    }),
                ],
            });
    }
    return (0, r.jsx)("div", {
        className: b.h_,
        children: t,
    });
}

function R(e) {
    let { className: t, data: n, onClickPollLink: a } = e,
        o = i.useMemo(() => C(n), [n]),
        l = null != n.victorEmoji || "NO_VOTES" === o.type;
    return (0, r.jsxs)("div", {
        className: s()(
            b.kL,
            {
                [b.FS]: l,
            },
            t,
        ),
        children: [
            (0, r.jsx)(T, {
                hasNoVotes: "NO_VOTES" === o.type,
                victorEmoji: n.victorEmoji,
            }),
            (0, r.jsx)(N, O({}, o)),
            null != a &&
                (0, r.jsx)(c.Button, {
                    size: "sm",
                    onClick: a,
                    variant: "secondary",
                    text: E.intl.string(E.t.Jw7Vbf),
                }),
        ],
    });
}

function w(e) {
    var t;
    let { message: n, channel: a, compact: s, disableInteraction: l = !1 } = e,
        d = n.embeds[0],
        m = i.useMemo(() => (0, h.A)(d), [d]),
        y = (0, o.EJ)(null != (t = null == m ? void 0 : m.questionText) ? t : "", g.TU),
        O = (0, f.Ay)(n),
        A = (0, p.P)({
            user: n.author,
            channelId: a.id,
            guildId: a.guild_id,
            messageId: n.id,
        }),
        v = n.messageReference,
        S = i.useCallback(() => {
            null != v &&
                u.A.jumpToMessage({
                    channelId: v.channel_id,
                    messageId: v.message_id,
                    flash: !0,
                    returnMessageId: n.id,
                });
        }, [n.id, v]);
    return null == m
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(_.A, {
                      iconNode: (0, r.jsx)(c.YRe, {
                          size: "xs",
                      }),
                      timestamp: n.timestamp,
                      compact: s,
                      children: E.intl.format(E.t.VJcK41, {
                          username: O.nick,
                          usernameHook: A(O),
                          title: y,
                          titleOnClick: S,
                      }),
                  }),
                  (0, r.jsx)(R, {
                      className: b.E6,
                      data: m,
                      onClickPollLink: l ? void 0 : S,
                  }),
              ],
          });
}
