n.d(t, { A: () => I });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    r = n(311907),
    s = n(990078),
    o = n(477782),
    d = n(822123),
    c = n(649963),
    u = n(815807),
    g = n(406704),
    A = n(253932),
    h = n(576705),
    m = n(486020),
    f = n(690521),
    p = n(652215),
    E = n(307731),
    y = n(985018),
    v = n(827319);
let _ = ["slight_smile", "frowning", "smile", "stuck_out_tongue", "wink"];
function S(e) {
    let { emoji: t, isFocused: n } = e,
        { animated: l, src: r, surrogates: o } = t;
    return (
        null == r && null != t.id
            ? (r = m.Ay.getEmojiURL({ id: t.id, animated: !!l, size: 20 }))
            : null == r && (r = f.Ay.getURL(o)),
        (0, i.jsx)(s.m, {
            text: (0, f.N)(t),
            hideOnClick: !0,
            spacing: 16,
            forceOpen: n,
            children: (0, i.jsx)("div", {
                "aria-label": y.intl.formatToPlainString(y.t["/iYSo6"], { emojiName: t.name }),
                className: a()(v.x6, { [v.in]: n }),
                children:
                    null == r || "" === r.trim()
                        ? (0, i.jsx)("span", { className: a()("emoji", "emoji-text", v.Kk), children: o })
                        : (0, i.jsx)("img", { className: v.Kk, src: r, alt: "" }),
            }),
        })
    );
}
function I(e, t) {
    let n = (0, d.D6)(t.guild_id).filter(
        (e) =>
            !(e.useSpriteSheet && _.indexOf(e.uniqueName ?? "") >= 0) &&
            !f.Ay.isEmojiPremiumLocked({ emoji: e, channel: t, intention: E.EmojiIntention.REACTION }),
    );
    n.length > 4 && (n.length = 4);
    let l = A.jW.useSetting(),
        a = (0, g.Id)(t);
    return (0, r.bG)([h.A], () => l && a && (t.isPrivate() || h.A.can(p.xBc.ADD_REACTIONS, t)), [t, a, l]) &&
        n.length > 0
        ? (0, i.jsx)(o.rX, {
              className: v.iE,
              children: n.map((n, l) =>
                  (0, i.jsx)(
                      o.Dr,
                      {
                          id: `quickreact-${n.id ?? l}`,
                          render: (e) => {
                              let { isFocused: t } = e;
                              return (0, i.jsx)(S, { emoji: n, isFocused: t });
                          },
                          action: () => {
                              (0, c.BB)(t.id, e.id, (0, u.jq)(n), c.qN.MESSAGE_CONTEXT_MENU);
                          },
                          dontCloseOnActionIfHoldingShiftKey: !0,
                      },
                      l,
                  ),
              ),
          })
        : null;
}
