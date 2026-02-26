i.d(e, { A: () => O });
var n = i(627968),
    l = i(64700),
    s = i(311907),
    r = i(397927),
    a = i(775602),
    u = i(141468),
    o = i(963852),
    d = i(763754),
    A = i(20851),
    T = i(95701),
    S = i(486020),
    E = i(253932),
    g = i(652215),
    _ = i(985018),
    c = i(468209);
let I = new T.nA({ id: "1337", guild_id: "1337", type: g.rbe.GUILD_TEXT, name: "preview" }),
    C = [
        { status: r.clD.IDLE, discriminator: "2" },
        { status: r.clD.DND, discriminator: "3" },
        { status: r.clD.ONLINE, mobile: !0, discriminator: "4" },
    ];
function N(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return (0, u.rh)({ ...(0, o.Ay)({ channelId: I.id, content: t }), state: g.cmJ.SENT, reactions: e });
}
function O() {
    let t = E.hH.useSetting(),
        e = E.jW.useSetting(),
        i = l.useMemo(
            () => [
                N(
                    _.intl.formatToPlainString(_.t.BknJRT, {}),
                    e
                        ? [
                              {
                                  emoji: { id: null, name: "\uD83E\uDD40", animated: !1 },
                                  me: !0,
                                  count: 3,
                                  me_burst: !1,
                                  burst_count: 0,
                              },
                              {
                                  emoji: { id: null, name: "\uD83E\uDEA4", animated: !1 },
                                  me: !1,
                                  count: 1,
                                  me_burst: !1,
                                  burst_count: 0,
                              },
                          ]
                        : [],
                ),
                N(_.intl.formatToPlainString(_.t["4rDfgM"], {})),
            ],
            [e],
        ),
        u = (0, s.bG)([a.A], () => a.A.messageGroupSpacing);
    return (0, n.jsx)(r.M1G, {
        children: (0, n.jsxs)("div", {
            className: c.VH,
            children: [
                (0, n.jsx)("div", {
                    className: c.DZ,
                    style: { gap: u },
                    children: i.map((e) =>
                        (0, n.jsx)(
                            A.A,
                            { message: e, channel: I, compact: t, author: { ...(0, d.p_)(e), colorString: "#dd80f4" } },
                            e.id,
                        ),
                    ),
                }),
                (0, n.jsxs)("div", {
                    className: c.HD,
                    children: [
                        C.map((t) => {
                            let { status: e, discriminator: i, mobile: l = !1 } = t;
                            return (0, n.jsx)(
                                r.euF,
                                {
                                    status: e,
                                    isMobile: l,
                                    size: r._3J.SIZE_32,
                                    src: S.Ay.getDefaultAvatarURL(void 0, i),
                                    "aria-hidden": !0,
                                },
                                e,
                            );
                        }),
                        (0, n.jsx)(r.Button, { text: _.intl.string(_.t["2RHHgz"]), size: "sm", variant: "primary" }),
                    ],
                }),
            ],
        }),
    });
}
