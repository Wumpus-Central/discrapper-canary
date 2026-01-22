n.d(t, {
    A: () => E,
}),
    n(733351);
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    o = n(311907),
    a = n(990078),
    c = n(397927),
    s = n(822123),
    d = n(649963),
    u = n(815807),
    f = n(406704),
    g = n(253932),
    p = n(576705),
    b = n(486020),
    m = n(690521),
    y = n(652215),
    O = n(307731),
    A = n(985018),
    v = n(852620);
let j = ["slight_smile", "frowning", "smile", "stuck_out_tongue", "wink"];

function h(e) {
    let { emoji: t, isFocused: n } = e,
        { animated: l, src: o, surrogates: c } = t;
    return (
        null == o && null != t.id
            ? (o = b.Ay.getEmojiURL({
                  id: t.id,
                  animated: !!l,
                  size: 20,
              }))
            : null == o && (o = m.Ay.getURL(c)),
        (0, r.jsx)(a.m, {
            text: (0, m.N)(t),
            hideOnClick: !0,
            spacing: 16,
            forceOpen: n,
            children: (0, r.jsx)("div", {
                "aria-label": A.intl.formatToPlainString(A.t["/iYSo6"], {
                    emojiName: t.name,
                }),
                className: i()(v.x6, {
                    [v.in]: n,
                }),
                children:
                    null == o || "" === o.trim()
                        ? (0, r.jsx)("span", {
                              className: i()("emoji", "emoji-text", v.Kk),
                              children: c,
                          })
                        : (0, r.jsx)("img", {
                              className: v.Kk,
                              src: o,
                              alt: "",
                          }),
            }),
        })
    );
}

function E(e, t) {
    let n = (0, s.D6)(t.guild_id).filter((e) => {
        var n;
        return (
            !(e.useSpriteSheet && j.indexOf(null != (n = e.uniqueName) ? n : "") >= 0) &&
            !m.Ay.isEmojiPremiumLocked({
                emoji: e,
                channel: t,
                intention: O.b_.REACTION,
            })
        );
    });
    n.length > 4 && (n.length = 4);
    let l = g.jW.useSetting(),
        i = (0, f.Id)(t);
    return (0, o.bG)([p.A], () => l && i && (t.isPrivate() || p.A.can(y.xBc.ADD_REACTIONS, t)), [t, i, l]) &&
        n.length > 0
        ? (0, r.jsx)(c.rXV, {
              className: v.iE,
              children: n.map((n, l) => {
                  var i;
                  return (0, r.jsx)(
                      c.Drp,
                      {
                          id: "quickreact-".concat(null != (i = n.id) ? i : l),
                          render: (e) => {
                              let { isFocused: t } = e;
                              return (0, r.jsx)(h, {
                                  emoji: n,
                                  isFocused: t,
                              });
                          },
                          action: () => {
                              (0, d.BB)(t.id, e.id, (0, u.jq)(n), d.qN.MESSAGE_CONTEXT_MENU);
                          },
                          dontCloseOnActionIfHoldingShiftKey: !0,
                      },
                      l,
                  );
              }),
          })
        : null;
}
