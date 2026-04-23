n.d(t, { J: () => _ });
var s = n(627968),
    a = n(64700),
    l = n(311907),
    i = n(573435),
    r = n(427157),
    o = n(71393),
    d = n(486020),
    c = n(961291),
    u = n(555644);
let h = (e) => {
        let { mask: t } = e;
        return null == t
            ? null
            : (0, s.jsx)("div", {
                  className: u.tK,
                  style: { backgroundColor: t.color.css },
                  children: (0, s.jsx)("img", { className: u.QR, alt: "", src: t.icon }),
              });
    },
    _ = a.memo(function (e) {
        let { item: t } = e,
            n = null,
            a = !1,
            _ = (0, l.bG)([o.A], () => o.A.getGuild(t.guild_id));
        if (null != t.icon_name) n = (0, s.jsx)("img", { alt: "", src: c.rr[(0, c.yI)(t.icon_name)] });
        else if (null != t.other_user) {
            let e = t.other_user instanceof r.A ? t.other_user : new r.A(t.other_user),
                l = e.globalName ?? e.username;
            (n = (0, s.jsx)("img", { alt: l, className: u.Sl, src: e.getAvatarURL(void 0, 40) })), (a = !0);
        } else if (null != t.icon_url) {
            let e = (null != _ ? d.Ay.getGuildIconURL({ id: _.id, icon: _.icon, size: 40 }) : null) ?? t.icon_url;
            n = (0, s.jsx)("img", { alt: _?.name ?? "", className: u.Sl, src: e });
        } else n = (0, s.jsx)("img", { alt: "", src: c.rr[(0, c.sW)(t)] });
        let A = (0, c.rS)(t.type);
        return (0, s.jsxs)("div", {
            className: u.kL,
            children: [
                (0, s.jsx)(i.Ay, {
                    mask: null == A ? i.hW.AVATAR_DEFAULT : i.hW.AVATAR_STATUS_ROUND_16,
                    width: 40,
                    height: 40,
                    rightOverhang: 3,
                    bottomOverhang: 3,
                    className: u.dK,
                    children: (0, s.jsx)("div", {
                        className: u.ZS,
                        style: a ? void 0 : { backgroundColor: (0, c.Pm)(t) },
                        children: n,
                    }),
                }),
                (0, s.jsx)(h, { mask: A }),
            ],
        });
    });
