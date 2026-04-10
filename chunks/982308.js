n.d(t, { A: () => v });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    r = n(311907),
    s = n(990078),
    o = n(397927),
    d = n(822123),
    c = n(649963),
    u = n(815807),
    g = n(406704),
    A = n(253932),
    p = n(576705),
    m = n(486020),
    f = n(690521),
    h = n(652215),
    y = n(307731),
    E = n(985018),
    _ = n(551623);
let S = ["slight_smile", "frowning", "smile", "stuck_out_tongue", "wink"];
function b(e) {
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
                "aria-label": E.intl.formatToPlainString(E.t["/iYSo6"], { emojiName: t.name }),
                className: a()(_.x6, { [_.in]: n }),
                children:
                    null == r || "" === r.trim()
                        ? (0, i.jsx)("span", { className: a()("emoji", "emoji-text", _.Kk), children: o })
                        : (0, i.jsx)("img", { className: _.Kk, src: r, alt: "" }),
            }),
        })
    );
}
function v(e, t) {
    let n = (0, d.D6)(t.guild_id).filter(
        (e) =>
            !(e.useSpriteSheet && S.indexOf(e.uniqueName ?? "") >= 0) &&
            !f.Ay.isEmojiPremiumLocked({ emoji: e, channel: t, intention: y.EmojiIntention.REACTION }),
    );
    n.length > 4 && (n.length = 4);
    let l = A.jW.useSetting(),
        a = (0, g.Id)(t);
    return (0, r.bG)([p.A], () => l && a && (t.isPrivate() || p.A.can(h.xBc.ADD_REACTIONS, t)), [t, a, l]) &&
        n.length > 0
        ? (0, i.jsx)(o.rXV, {
              className: _.iE,
              children: n.map((n, l) =>
                  (0, i.jsx)(
                      o.Drp,
                      {
                          id: `quickreact-${n.id ?? l}`,
                          render: (e) => {
                              let { isFocused: t } = e;
                              return (0, i.jsx)(b, { emoji: n, isFocused: t });
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
