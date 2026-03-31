n.d(t, { J: () => A });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(573435),
    r = n(427157),
    o = n(71393),
    c = n(486020),
    d = n(961291),
    u = n(909804);
let h = (e) => {
        let { mask: t } = e;
        return null == t
            ? null
            : (0, i.jsx)("div", {
                  className: u.tK,
                  style: { backgroundColor: t.color.css },
                  children: (0, i.jsx)("img", { className: u.QR, alt: "", src: t.icon }),
              });
    },
    A = l.memo(function (e) {
        let { item: t } = e,
            n = null,
            l = !1,
            A = (0, s.bG)([o.A], () => o.A.getGuild(t.guild_id));
        if (null != t.icon_name) n = (0, i.jsx)("img", { alt: "", src: d.rr[(0, d.yI)(t.icon_name)] });
        else if (null != t.other_user) {
            let e = t.other_user instanceof r.A ? t.other_user : new r.A(t.other_user),
                s = e.globalName ?? e.username;
            (n = (0, i.jsx)("img", { alt: s, className: u.Sl, src: e.getAvatarURL(void 0, 40) })), (l = !0);
        } else if (null != t.icon_url) {
            let e = (null != A ? c.Ay.getGuildIconURL({ id: A.id, icon: A.icon, size: 40 }) : null) ?? t.icon_url;
            n = (0, i.jsx)("img", { alt: A?.name ?? "", className: u.Sl, src: e });
        } else n = (0, i.jsx)("img", { alt: "", src: d.rr[(0, d.sW)(t)] });
        let _ = (0, d.rS)(t.type);
        return (0, i.jsxs)("div", {
            className: u.kL,
            children: [
                (0, i.jsx)(a.Ay, {
                    mask: null == _ ? a.hW.AVATAR_DEFAULT : a.hW.AVATAR_STATUS_ROUND_16,
                    width: 40,
                    height: 40,
                    rightOverhang: 3,
                    bottomOverhang: 3,
                    className: u.dK,
                    children: (0, i.jsx)("div", {
                        className: u.ZS,
                        style: l ? void 0 : { backgroundColor: (0, d.Pm)(t) },
                        children: n,
                    }),
                }),
                (0, i.jsx)(h, { mask: _ }),
            ],
        });
    });
