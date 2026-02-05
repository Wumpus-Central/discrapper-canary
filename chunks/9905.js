n.d(t, { J: () => h });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(573435),
    r = n(427157),
    o = n(71393),
    d = n(961291),
    c = n(192849);
let u = (e) => {
        let { mask: t } = e;
        return null == t
            ? null
            : (0, i.jsx)("div", {
                  className: c.tK,
                  style: { backgroundColor: t.color.css },
                  children: (0, i.jsx)("img", { className: c.QR, alt: "", src: t.icon }),
              });
    },
    h = l.memo(function (e) {
        let { item: t } = e,
            n = null,
            l = !1,
            h = (0, s.bG)([o.A], () => o.A.getGuild(t.guild_id));
        if (null != t.icon_name) n = (0, i.jsx)("img", { alt: "", src: d.rr[(0, d.yI)(t.icon_name)] });
        else if (null != t.other_user) {
            let e = t.other_user instanceof r.A ? t.other_user : new r.A(t.other_user),
                s = e.globalName ?? e.username;
            (n = (0, i.jsx)("img", { alt: s, className: c.Sl, src: e.getAvatarURL(void 0, 40) })), (l = !0);
        } else
            n =
                null != t.icon_url
                    ? (0, i.jsx)("img", { alt: h?.name ?? "", className: c.Sl, src: t.icon_url })
                    : (0, i.jsx)("img", { alt: "", src: d.rr[(0, d.sW)(t)] });
        let A = (0, d.rS)(t.type);
        return (0, i.jsxs)("div", {
            className: c.kL,
            children: [
                (0, i.jsx)(a.Ay, {
                    mask: null == A ? a.hW.AVATAR_DEFAULT : a.hW.AVATAR_STATUS_ROUND_16,
                    width: 40,
                    height: 40,
                    rightOverhang: 3,
                    bottomOverhang: 3,
                    className: c.dK,
                    children: (0, i.jsx)("div", {
                        className: c.ZS,
                        style: l ? void 0 : { backgroundColor: (0, d.Pm)(t) },
                        children: n,
                    }),
                }),
                (0, i.jsx)(u, { mask: A }),
            ],
        });
    });
