(i.r(e), i.d(e, { TrialsSharedConfirmationModal: () => S }));
var s = i(477900),
    r = i(582128),
    n = i(503698),
    a = i.n(n),
    l = i(17928),
    c = i(844222),
    d = i(778712),
    o = i(97808),
    m = i(834730),
    u = i(821609),
    p = i(534890),
    g = i(289873),
    A = i(90517),
    h = i(772707),
    R = i(308528),
    x = i(854627),
    f = i(830543),
    C = i(975571),
    E = i(427262),
    v = i(326084),
    j = i(851746),
    b = i(652215),
    k = i(105292),
    N = i(37576);
function _(t) {
    let { recipient: e, status: i, onClose: r } = t,
        { avatarSrc: n, eventHandlers: l } = (0, x.A)({ userId: e?.id, size: d._3.SIZE_56 }),
        c = E.Ay.getName(e),
        g = i === v.o.FAIL;
    return (0, s.jsxs)("div", {
        className: N.w4,
        children: [
            (0, s.jsx)(o.eu, { imageClassName: a()({ [N.jN]: g }), src: n, "aria-label": c, size: d._3.SIZE_32, ...l }),
            g
                ? (0, s.jsxs)(s.Fragment, {
                      children: [
                          (0, s.jsx)(m.E, {
                              className: N.E0,
                              variant: "text-md/medium",
                              color: "text-strong",
                              children: c,
                          }),
                          (0, s.jsx)(m.E, {
                              variant: "text-md/medium",
                              className: N.nT,
                              color: "text-strong",
                              children: k.intl.format(k.t.RO3T4B, { userName: c }),
                          }),
                      ],
                  })
                : (0, s.jsx)(m.E, { variant: "text-md/medium", className: N.Pm, color: "text-strong", children: c }),
            (0, s.jsx)(u.$, {
                variant: "secondary",
                size: "sm",
                text: k.intl.string(k.t["g33r/P"]),
                icon: p.ChatIcon,
                onClick: () => {
                    var t;
                    return ((t = e.id), void ((0, f.default)(), R.A.openPrivateChannel({ recipientIds: t }), r()));
                },
            }),
        ],
    });
}
function S(t) {
    let {
            transitionState: e,
            results: i,
            onClose: n,
            isReminderConfirmation: a,
            showRecipientList: d = !0,
            recipientName: o,
        } = t,
        m = (0, l.bG)([j.A], () => j.A.getReferralsRemaining()),
        { reducedMotion: u } = r.useContext(c.C);
    return null === m
        ? (0, s.jsx)(g.y, {})
        : (0, s.jsx)(h.k, {
              graphic: u.enabled
                  ? {
                        src: "https://cdn.discordapp.com/assets/content/7d3bb543f57192ba573ca7c515ef59c9cf5c285538f43508ccd8e10637ccd902.svg",
                        type: "image",
                    }
                  : { rive: A.l, type: "rive" },
              gradientColor: "nitro-pink",
              title:
                  0 === i.filter((t) => t.status === v.o.SUCCESS).length
                      ? k.intl.string(k.t["7VBEue"])
                      : !0 === a
                        ? k.intl.string(k.t.GP5lbq)
                        : k.intl.string(k.t.tKCltd),
              subtitle:
                  null != o
                      ? k.intl.format(k.t.s8VHbZ, {
                            recipientName: o,
                            helpdeskArticle: C.A.getArticleURL(b.MVz.REFERRAL_PROGRAM),
                        })
                      : !0 === a
                        ? k.intl.format(k.t["4gJJfD"], { helpdeskArticle: C.A.getArticleURL(b.MVz.REFERRAL_PROGRAM) })
                        : k.intl.format(k.t.AwGSWl, { helpdeskArticle: C.A.getArticleURL(b.MVz.REFERRAL_PROGRAM) }),
              onClose: n,
              transitionState: e,
              children: d
                  ? (0, s.jsx)("div", {
                        className: N.Hz,
                        children: i.map((t) =>
                            (0, s.jsx)(_, { recipient: t.recipient, status: t.status, onClose: n }, t.recipient.id),
                        ),
                    })
                  : null,
          });
}
